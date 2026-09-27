const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8');
const sandbox = { setTimeout, clearTimeout };
vm.createContext(sandbox);
vm.runInContext(source.replace(/initialize\(\);\s*$/, ''), sandbox);
const run = (code) => vm.runInContext(code, sandbox);

function context(category = 'product', extra = {}) {
  return {
    idea: 'Cam şişede kahve',
    category: run(`categories.find(c => c.id === ${JSON.stringify(category)})`),
    tool: 'ChatGPT (DALL-E 3)', dialect: 'natural', quality: 'professional',
    skillIntensity: 'premium', language: 'tr', answers: {},
    brand: { name: 'Kora', palette: '#163D32', typography: 'serif', voice: 'sakin' },
    reference: { hasFile: false, color: '', typography: '', style: '' },
    negative: 'neon', ...extra,
  };
}
function prompt(ctx) { sandbox.ctx = ctx; return run('buildPrompt(ctx)'); }

test('Turkish category detection, format priority and unknown input', () => {
  const cases = [
    ['kahve markası için logo', 'brand'], ['ürün fotoğrafı', 'product'],
    ['çizgi roman karakteri', 'character'], ['Instagram post', 'singlePost'],
    ['kahve markası için 9’lu Instagram post serisi', 'seriesPost'],
    ['duvar sanatı', 'art'], ['fotogerçekçi mimari sahne', 'photo'],
    ['ürün için video', 'video'], ['bambaşka bir fikir', null],
  ];
  for (const [idea, id] of cases) {
    sandbox.idea = idea;
    assert.equal(run('detectCategory(idea)?.id ?? null'), id, idea);
  }
});

test('all categories, dialects and template languages produce complete prompts', () => {
  for (const category of run('categories.map(c=>c.id)')) {
    for (const dialect of ['natural', 'tag']) {
      for (const language of ['tr', 'en']) {
        const result = prompt(context(category, { dialect, language }));
        assert.ok(result.includes('Kora'));
        assert.ok(result.includes('#163D32'));
        assert.ok(result.includes('neon'));
        assert.doesNotMatch(result, /undefined|\[object Object\]|NaN/);
        if (dialect === 'tag') assert.ok(result.includes(language === 'tr' ? 'Negatif prompt:' : 'Negative prompt:'));
      }
    }
  }
});

test('3 and 9 item series respect dialect and individual messages', () => {
  for (const count of ['3', '9']) {
    const messages = Array.from({length:Number(count)}, (_,i)=>'Mesaj '+i);
    const result = prompt(context('seriesPost', { dialect:'tag', answers:{seriesCount:count,postMessages:messages.join('\n')} }));
    assert.equal((result.match(/--- POST /g)||[]).length, Number(count));
    assert.equal((result.match(/Negatif prompt:/g)||[]).length, Number(count));
    messages.forEach(message=>assert.ok(result.includes(message)));
    assert.doesNotMatch(result, /Şu fikir için bir görsel oluştur/);
  }
});

test('reference typography and brand tone survive both dialects', () => {
  for (const dialect of ['natural', 'tag']) {
    const result = prompt(context('product', {dialect,reference:{hasFile:true,fileName:'reference.png',color:'cyan',typography:'wide grotesk',style:'matte'}}));
    for (const value of ['reference.png','cyan','wide grotesk','matte','sakin']) assert.ok(result.includes(value));
  }
});

test('template language is real; user text stays verbatim without fake translation', () => {
  const tr = prompt(context());
  const en = prompt(context('product', {language:'en'}));
  assert.ok(tr.startsWith('Şu fikir için bir görsel oluştur:'));
  assert.ok(en.startsWith('Create an image based on this concept:'));
  assert.ok(en.includes('Cam şişede kahve'));
  assert.doesNotMatch(en, /Write the final|Promptu Turkce/);
});

test('quality changes actual detail and visual skills do not inject website mechanics', () => {
  const simple=prompt(context('product',{quality:'simple'}));
  const detailed=prompt(context('product',{quality:'detailed'}));
  const professional=prompt(context());
  assert.ok(simple.length<detailed.length && detailed.length<professional.length);
  assert.doesNotMatch(professional, /bezel|easing|responsive|hover|bento|nested/i);
  const logo=prompt(context('brand',{idea:'Yalnızca logo',skillIntensity:'agency'}));
  assert.doesNotMatch(logo,/kimlik panosu/);
  const board=prompt(context('brand',{idea:'Marka kimlik panosu',skillIntensity:'agency'}));
  assert.match(board,/kimlik panosu/);
});

test('video output includes bounded timeline and explicit delivery limitation', () => {
  const ctx=context('video',{answers:{duration:'8 saniye',scenes:'3',movement:'orbit',audio:'sessiz',ending:'logo'}});
  const result=prompt(ctx);
  assert.match(result,/0.0–2.7s/);assert.match(result,/5.3–8.0s: logo/);
  sandbox.ctx=ctx;
  assert.ok(run('buildTips(ctx)').some(t=>t.includes('storyboard')));
});

test('untrusted HTML is escaped before use in generated fields', () => {
  sandbox.payload='<img src=x onerror="alert(1)"><script>x</script>';
  const escaped=run('escapeHtml(payload)');
  assert.ok(!escaped.includes('<'));
  assert.ok(escaped.includes('&lt;script&gt;'));
});
