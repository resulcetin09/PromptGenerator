const storageKeys = {
  brandProfiles: "prompt-generator:brand-profiles",
  history: "prompt-generator:history",
  preferences: "prompt-generator:preferences",
};

const categories = [
  {
    id: "brand",
    name: "Marka / Kimlik",
    keywords: ["logo", "marka", "kimlik", "ikon", "maskot", "brand", "kurumsal"],
    skillProfile: ["brandkit"],
    questions: [
      ["usage", "Nerede kullanilacak?", "Orn: logo, app icon, kartvizit, Instagram profil"],
      ["audience", "Hedef kitle kim?", "Orn: premium kahve seven 25-40 yas arasi kitle"],
      ["personality", "Marka kisiligi nasil olsun?", "Orn: sakin, rafine, guven veren"],
      ["symbol", "Logo icin anlam/metafor var mi?", "Orn: pusula, kahve cekirdegi, negatif alan K harfi"],
      ["composition", "Kompozisyon veya oran tercihi?", "Orn: 1:1 ikon, yatay wordmark, 3x3 brand board"],
    ],
  },
  {
    id: "product",
    name: "Urun Gorseli",
    keywords: ["urun", "ambalaj", "mockup", "e-ticaret", "eticaret", "packaging", "product"],
    skillProfile: ["brandkit", "highEndVisualDesign"],
    questions: [
      ["product", "Urun tam olarak nedir?", "Orn: cam sisede soguk kahve"],
      ["surface", "Hangi yuzey/malzeme gorunsun?", "Orn: mat kagit etiket, metal kapak, cam yansima"],
      ["scene", "Sahne nerede gecsin?", "Orn: mermer tezgah, studio softbox, editorial masa"],
      ["lighting", "Isik nasil olsun?", "Orn: yumusak sabah isigi, dramatik yan isik"],
      ["ratio", "Oran / teknik kisit?", "Orn: 4:5 Instagram, beyaz arka plan, yuksek cozunurluk"],
    ],
  },
  {
    id: "character",
    name: "Karakter / Illustrasyon",
    keywords: ["karakter", "avatar", "illustrasyon", "illüstrasyon", "cizgi", "comic", "mascot"],
    skillProfile: ["highEndVisualDesign"],
    questions: [
      ["character", "Karakter kim veya ne?", "Orn: gezgin robot barista"],
      ["style", "Cizim stili nasil olsun?", "Orn: editorial vector, anime, clay render"],
      ["pose", "Poz / ifade?", "Orn: el sallayan, kendinden emin, gulumsuyor"],
      ["palette", "Renk paleti?", "Orn: krem, siyah, turuncu vurgu"],
      ["format", "Kullanim formati?", "Orn: sticker, avatar, poster, story"],
    ],
  },
  {
    id: "singlePost",
    name: "Sosyal Medya - Tekli Post",
    keywords: ["post", "story", "banner", "thumbnail", "kapak", "instagram", "linkedin"],
    skillProfile: ["highEndVisualDesign", "brandkit"],
    questions: [
      ["message", "Postun ana mesaji ne?", "Orn: Yeni koleksiyon yayinda"],
      ["platform", "Platform ve oran?", "Orn: Instagram 4:5, YouTube thumbnail 16:9"],
      ["visual", "Ana gorsel/obje ne olsun?", "Orn: kahve paketi, model, UI ekran goruntusu"],
      ["style", "Tasarim dili?", "Orn: premium editorial, dark tech, minimal luxury"],
      ["cta", "CTA veya metin var mi?", "Orn: Simdi kesfet, Erken erisim"],
    ],
  },
  {
    id: "seriesPost",
    name: "Sosyal Medya - Seri Icerik",
    keywords: ["seri", "grid", "9'lu", "9lu", "3'lu", "3lü", "aylik", "carousel", "karusel"],
    skillProfile: ["highEndVisualDesign", "brandkit"],
    questions: [
      ["seriesCount", "Kac prompt uretilsin?", "Orn: 3 veya 9"],
      ["campaign", "Serinin ana kampanya konusu ne?", "Orn: yeni kahve aboneligi"],
      ["postMessages", "Her post icin kisa mesajlari yaz", "Virgulle ayir: lansman, fayda, sosyal kanit"],
      ["rhythm", "Grid ritmi tercihi?", "Orn: baslik, urun, marka detayi seklinde donusum"],
      ["consistency", "Tutarlilik icin sabit kalacak ogeler?", "Orn: ayni renk, ayni logo konumu, ayni fotograf dili"],
    ],
  },
  {
    id: "art",
    name: "Sanatsal / Dekoratif",
    keywords: ["poster", "sanat", "dekor", "duvar", "concept art", "konsept"],
    skillProfile: ["highEndVisualDesign"],
    questions: [
      ["subject", "Ana konu nedir?", "Orn: sisli dag manzarasi"],
      ["mood", "Duygu / atmosfer?", "Orn: melankolik, sinematik, huzurlu"],
      ["medium", "Medya/stil?", "Orn: risograph, oil painting, 3D render"],
      ["palette", "Renk paleti?", "Orn: koyu yesil, sis gri, soluk sari"],
      ["ratio", "Oran?", "Orn: 2:3 poster, 16:9 wallpaper"],
    ],
  },
  {
    id: "photo",
    name: "Fotogercekci Sahne",
    keywords: ["fotograf", "fotogercekci", "portre", "manzara", "mimari", "photo", "realistic"],
    skillProfile: ["highEndVisualDesign"],
    questions: [
      ["subject", "Sahnede ne var?", "Orn: modern kahve dukkani ic mekani"],
      ["camera", "Kamera/acisi?", "Orn: 35mm, low angle, shallow depth of field"],
      ["lighting", "Isik?", "Orn: altin saat, yumusak pencere isigi"],
      ["environment", "Ortam detaylari?", "Orn: beton zemin, ahsap mobilya, kalabaliksiz"],
      ["technical", "Teknik not?", "Orn: photorealistic, natural skin, no text artifacts"],
    ],
  },
  {
    id: "video",
    name: "Video",
    keywords: ["video", "reels", "shorts", "kamera hareketi", "sahne", "animasyon"],
    skillProfile: ["highEndVisualDesign"],
    questions: [
      ["duration", "Sure kac saniye?", "Orn: 8 saniye"],
      ["scenes", "Kac sahne olsun?", "Orn: 3 sahne"],
      ["movement", "Kamera hareketi?", "Orn: slow push-in, orbit, handheld"],
      ["audio", "Ses/muzik isteniyor mu?", "Orn: soft jazz, no voiceover"],
      ["ending", "Final karesi nasil bitsin?", "Orn: logo ve tek CTA"],
    ],
  },
];


const $ = (id) => document.getElementById(id);
const state = { category: null, answers: {}, answerCache: {}, questionIndex: 0, referenceFile: null, referenceUrl: null, currentPromptId: null, prompt: "", variants: [] };
const normalize = (text) => String(text).toLocaleLowerCase("tr-TR").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ı/g, "i");
const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const categoryNames = ["Marka / Kimlik", "Ürün Görseli", "Karakter / İllüstrasyon", "Sosyal Medya / Tekli Post", "Sosyal Medya / Seri İçerik", "Sanatsal / Dekoratif", "Fotogerçekçi Sahne", "Video"];
const englishNames = ["brand identity", "product image", "character illustration", "social media post", "social media series", "artwork", "photorealistic scene", "video"];
const labels = {
 usage:["Kullanım yeri","Usage"], audience:["Hedef kitle","Audience"], personality:["Marka kişiliği","Brand personality"], symbol:["Anlam ve metafor","Meaning and metaphor"], composition:["Kompozisyon ve oran","Composition and aspect ratio"],
 product:["Ürün","Product"], surface:["Malzeme ve yüzey","Material and surface"], scene:["Sahne","Scene"], lighting:["Işık","Lighting"], ratio:["Oran ve teknik kısıtlar","Aspect ratio and constraints"],
 character:["Karakter","Character"], style:["Görsel dil","Visual style"], pose:["Poz ve ifade","Pose and expression"], palette:["Renk paleti","Color palette"], format:["Kullanım biçimi","Format"],
 message:["Ana mesaj","Main message"], platform:["Platform ve oran","Platform and ratio"], visual:["Ana görsel","Main visual"], cta:["Görseldeki metin","On-image text"],
 seriesCount:["Seri uzunluğu","Series length"], campaign:["Kampanya konusu","Campaign"], postMessages:["Post mesajları","Post messages"], rhythm:["Grid ritmi","Grid rhythm"], consistency:["Sabit kalacak öğeler","Consistent elements"],
 subject:["Ana konu","Subject"], mood:["Atmosfer","Mood"], medium:["Teknik ve stil","Medium"], camera:["Kamera ve açı","Camera and angle"], environment:["Ortam detayları","Environment"], technical:["Teknik notlar","Technical notes"],
 duration:["Süre","Duration"], scenes:["Sahne sayısı","Scene count"], movement:["Kamera hareketi","Camera movement"], audio:["Ses ve müzik","Audio"], ending:["Final karesi","Final frame"]
};
categories.forEach((c,i) => { c.name=categoryNames[i]; c.englishName=englishNames[i]; });
const questionExamples = [
  ["Örn. uygulama ikonu, kartvizit, profil görseli", "Örn. kahve meraklıları, 25–40 yaş", "Örn. sakin, rafine, güven veren", "Örn. negatif alanda K harfi ve kahve çekirdeği", "Örn. 1:1 ikon veya yatay logo"],
  ["Örn. cam şişede soğuk kahve", "Örn. mat etiket, metal kapak, cam yansıma", "Örn. stüdyo veya mermer tezgâh", "Örn. yumuşak sabah ışığı", "Örn. 4:5, beyaz arka plan"],
  ["Örn. gezgin robot barista", "Örn. çizgi roman, kil model, vektör", "Örn. el sallayan, gülümseyen", "Örn. yeşil, beyaz, mercan", "Örn. çıkartma veya avatar"],
  ["Örn. Yeni koleksiyon yayında", "Örn. Instagram 4:5", "Örn. ürün paketi veya model", "Örn. sade, editoryal", "Örn. Şimdi keşfet"],
  ["3 veya 9 görsellik seri", "Örn. yeni kahve aboneliği", "Her mesajı ayrı satıra yaz", "Örn. başlık, ürün, marka detayı", "Örn. renk, logo konumu ve ışık"],
  ["Örn. sisli dağ manzarası", "Örn. huzurlu, melankolik", "Örn. yağlı boya veya risograf", "Örn. koyu yeşil ve soluk sarı", "Örn. 2:3 poster"],
  ["Örn. modern kafe iç mekânı", "Örn. 35 mm, alçak açı", "Örn. altın saat, pencere ışığı", "Örn. beton zemin, ahşap mobilya", "Örn. doğal dokular, metinsiz"],
  ["Örn. 8 saniye", "1–12 sahne", "Örn. yavaş yaklaşma veya çevresinde dönüş", "Örn. hafif caz, dış ses yok", "Örn. ürün ve kısa kapanış mesajı"]
];
categories.forEach((c,i)=>c.questions.forEach((q,j)=>q[2]=questionExamples[i][j]));
let toastTimer;
let storageFailed = false;
function getJson(key, fallback) {
  try {
    const value=JSON.parse(localStorage.getItem(key));
    if (Array.isArray(fallback)) return Array.isArray(value) ? value.filter(x=>x && typeof x==="object") : fallback;
    return value && typeof value==="object" && !Array.isArray(value) ? value : fallback;
  } catch { return fallback; }
}
function setJson(key,value) {
  try { localStorage.setItem(key,JSON.stringify(value)); storageFailed=false; return true; }
  catch { storageFailed=true; showToast("Tarayıcı kaydı kullanılamıyor. Promptunu kopyalayarak sakla."); return false; }
}
function detectCategory(text) {
  const n=normalize(text);
  // Explicit formats take precedence over incidental brand/product mentions.
  if (/\b(video|reels|shorts|animasyon)\b/.test(n)) return categories.find(c=>c.id==="video");
  if (/\b(seri|serisi|carousel|karusel|grid|aylik)\b|[39]\s*['’]?\s*lu/.test(n)) return categories.find(c=>c.id==="seriesPost");
  const scored=categories.map(c=>({c,score:c.keywords.reduce((s,k)=>s+(new RegExp("\\b"+normalize(k)+"(?:\\b|[a-z]+)").test(n)?1:0),0)})).sort((a,b)=>b.score-a.score);
  return scored[0].score ? scored[0].c : null;
}
// Turkish question wording shown in the wizard (engine keeps ids/labels).
const questionPrompts = [
  ["Nerede kullanılacak?", "Hedef kitle kim?", "Marka kişiliği nasıl olsun?", "Logo için bir anlam veya metafor var mı?", "Kompozisyon veya oran tercihin ne?"],
  ["Ürün tam olarak ne?", "Hangi yüzey ve malzeme görünsün?", "Sahne nerede geçsin?", "Işık nasıl olsun?", "Oran veya teknik kısıt var mı?"],
  ["Karakter kim ya da ne?", "Çizim stili nasıl olsun?", "Poz ve ifade nasıl olsun?", "Renk paleti ne olsun?", "Nerede kullanılacak?"],
  ["Postun ana mesajı ne?", "Hangi platform ve oran?", "Ana görsel ya da obje ne olsun?", "Tasarım dili nasıl olsun?", "Görselde CTA veya metin olacak mı?"],
  ["Kaç görsellik seri olsun?", "Serinin kampanya konusu ne?", "Her post için kısa mesajları yaz.", "Grid ritmi nasıl olsun?", "Seri boyunca neler sabit kalsın?"],
  ["Ana konu ne?", "Duygu ve atmosfer nasıl olsun?", "Teknik ya da stil ne olsun?", "Renk paleti ne olsun?", "Oran ne olsun?"],
  ["Sahnede ne var?", "Kamera ve açı nasıl olsun?", "Işık nasıl olsun?", "Ortamda hangi detaylar olsun?", "Teknik bir notun var mı?"],
  ["Video kaç saniye olsun?", "Kaç sahne olsun?", "Kamera hareketi nasıl olsun?", "Ses veya müzik istiyor musun?", "Final karesi nasıl bitsin?"]
];
categories.forEach((c,i)=>c.questions.forEach((q,j)=>q[1]=questionPrompts[i][j]));

const DRAFT_KEY = "prompt-generator:draft";
const ui = { step: 1, view: "create", briefTimer: null, stale: false, restoring: false };
const ICONS = {
  arrowUpRight: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  plus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14"/><path d="M5 12h14"/></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>',
  star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg>'
};
const pad2 = (n) => String(n).padStart(2, "0");
const optionText = (id) => { const s = $(id); return s.options[s.selectedIndex]?.textContent || ""; };
function el(tag, className, text) { const node = document.createElement(tag); if (className) node.className = className; if (text != null) node.textContent = text; return node; }
function button(className, label, onClick, iconHtml) {
  const b = el("button", className); b.type = "button";
  b.append(document.createTextNode(label));
  if (iconHtml) { const ic = el("span", "ic"); ic.innerHTML = iconHtml; b.append(ic); }
  if (onClick) b.addEventListener("click", onClick);
  return b;
}
function copyButton(getText, opts) {
  if (window.CopyButton) return window.CopyButton.create(getText, opts);
  return button("btn btn-quiet", (opts && opts.label) || "Kopyala", () => navigator.clipboard?.writeText(getText()).catch(() => {}));
}
function refreshSegments() { if (window.SegmentedControl) window.SegmentedControl.refreshAll(); }

function showToast(message) {
  clearTimeout(toastTimer);
  $("toast").textContent = message;
  $("toast").classList.add("visible");
  toastTimer = setTimeout(() => $("toast").classList.remove("visible"), 3500);
}
function setFieldError(inputId, errorId, show) {
  $(errorId).hidden = !show;
  if (inputId) { if (show) $(inputId).setAttribute("aria-invalid", "true"); else $(inputId).removeAttribute("aria-invalid"); }
}

/* ---------- Category ---------- */
function selectedCategory() {
  return categories.find(c => c.id === $("categorySelect").value) || detectCategory($("ideaInput").value);
}
function selectCategory(category) {
  if (state.category?.id === category?.id) return;
  if (state.category) state.answerCache[state.category.id] = { ...state.answers };
  state.category = category;
  state.answers = category ? { ...state.answerCache[category.id] } : {};
  state.questionIndex = 0;
  if (category?.id === "seriesPost") {
    state.answers.seriesCount ||= /\b9/.test($("ideaInput").value) ? "9" : "3";
    state.answers.rhythm ||= "Başlık odaklı, ürün odaklı, marka detayı";
  }
  if (category) setFieldError(null, "categoryError", false);
  renderQuestions();
}
function buildCategoryChips() {
  const wrap = $("categoryChips"); wrap.replaceChildren();
  [["auto", "Otomatik"], ...categories.map(c => [c.id, c.name])].forEach(([value, label]) => {
    const chip = el("button", "chip", label); chip.type = "button"; chip.dataset.value = value;
    chip.addEventListener("click", () => { $("categorySelect").value = value; $("categorySelect").dispatchEvent(new Event("change")); });
    wrap.append(chip);
  });
}
function updateCategoryUI() {
  const auto = $("categorySelect").value === "auto";
  const detected = detectCategory($("ideaInput").value);
  $("categoryChips").querySelectorAll(".chip").forEach(chip => {
    const value = chip.dataset.value;
    chip.setAttribute("aria-pressed", String(auto ? value === "auto" : value === $("categorySelect").value));
    if (value === "auto") chip.textContent = "Otomatik" + (auto && detected ? " · " + detected.name : "");
  });
  const c = state.category, badge = $("detectedBadge");
  badge.classList.toggle("is-idle", !c);
  $("detectedText").textContent = c ? c.name + (auto ? " algılandı" : " seçildi") : ($("ideaInput").value.trim() ? "Kategori seçilmedi" : "Kategori bekleniyor");
}

/* ---------- Steps & views ---------- */
function goStep(n, opts = {}) {
  n = Math.max(1, Math.min(3, n));
  if (n === 3 && !state.prompt) {
    if (!$("ideaInput").value.trim()) { showIdeaError(); n = 1; }
    else if (!generatePrompt({ quiet: true })) n = 1;
  }
  const changed = n !== ui.step;
  ui.step = n;
  document.querySelectorAll("#createView .step").forEach(section => {
    const active = Number(section.dataset.step) === n;
    section.hidden = !active;
    if (active && changed && !opts.instant) { section.classList.remove("is-entering"); void section.offsetWidth; section.classList.add("is-entering"); }
  });
  document.querySelectorAll(".step-pill").forEach(pill => {
    const s = Number(pill.dataset.step);
    pill.classList.toggle("is-done", s < n);
    if (s === n) pill.setAttribute("aria-current", "step"); else pill.removeAttribute("aria-current");
  });
  document.querySelectorAll(".step-line").forEach((line, i) => line.classList.toggle("is-done", i + 1 < n));
  $("liveBrief").hidden = n === 3; $("briefSummary").hidden = n !== 3;
  if (n === 2) renderQuestions();
  if (n === 3) renderResult();
  updateTitle();
  if (opts.focus !== false && changed && !ui.restoring) {
    if (n === 2 && state.category && $("answerInput")) $("answerInput").focus({ preventScroll: true });
    else $("step" + n + "Title").focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }
  saveDraft();
}
function switchView(view) {
  ui.view = view;
  $("createView").hidden = view !== "create"; $("libraryView").hidden = view !== "library";
  document.querySelectorAll(".nav-tab").forEach(tab => { if (tab.dataset.view === view) tab.setAttribute("aria-current", "page"); else tab.removeAttribute("aria-current"); });
  if (view === "library") { renderHistory(); $("libraryTitle").focus({ preventScroll: true }); }
  else $("step" + ui.step + "Title").focus({ preventScroll: true });
  window.scrollTo({ top: 0 });
  updateTitle();
}
function updateTitle() {
  document.title = ui.view === "library" ? "Kütüphane · Prompt Generator" : "Adım " + ui.step + " · " + ["Fikir", "Detaylar", "Sonuç"][ui.step - 1] + " · Prompt Generator";
}
function showIdeaError() { setFieldError("ideaInput", "ideaError", true); }

/* ---------- Questions ---------- */
function exampleText(placeholder) { return /^Örn\.\s*/.test(placeholder) ? placeholder.replace(/^Örn\.\s*/, "") : ""; }
function renderQuestions() {
  const c = state.category;
  updateCategoryUI();
  $("questionEmpty").hidden = !!c; $("questionCard").hidden = !c; $("questionOverviewWrap").hidden = !c;
  $("questionIntro").textContent = c ? c.name + " için " + c.questions.length + " kısa soru. Hepsi isteğe bağlı; boş bıraktıkların prompta girmez." : "Sorular kategoriye göre gelir.";
  if (!c) { updateProgress(); scheduleBrief(); return; }
  const total = c.questions.length, index = state.questionIndex;
  const [id, question, placeholder] = c.questions[index];
  const value = state.answers[id] || "";
  const list = $("questionList"); list.replaceChildren();
  const title = el("label", "question-title", question); title.htmlFor = "answerInput";
  list.append(title);
  let field;
  if (id === "seriesCount") {
    field = el("select", "answer-field");
    [["3", "3 görsel"], ["9", "9 görsel"]].forEach(([v, t]) => { const o = el("option", null, t); o.value = v; field.append(o); });
    field.value = value || "3";
    field.addEventListener("change", () => { state.answers[id] = field.value; onBriefChange(); updateProgress(); renderOverview(); });
  } else if (id === "scenes") {
    field = el("input", "answer-field"); field.type = "number"; field.min = "1"; field.max = "12"; field.inputMode = "numeric"; field.placeholder = "3"; field.value = value;
  } else {
    field = el("textarea", "answer-field"); field.rows = id === "postMessages" ? 4 : 2; field.value = value;
    field.placeholder = id === "postMessages" ? "Her postun mesajını ayrı satıra yaz." : placeholder;
  }
  field.id = "answerInput";
  if (id !== "seriesCount") {
    field.addEventListener("input", () => { state.answers[id] = field.value.trim(); onBriefChange(); updateProgress(); renderOverview(); });
  }
  field.addEventListener("keydown", e => {
    if (e.key !== "Enter" || e.isComposing) return;
    const multiline = id === "postMessages";
    if (e.metaKey || e.ctrlKey || (!e.shiftKey && !multiline)) { e.preventDefault(); moveQuestion(1); }
  });
  list.append(field);
  if (id === "postMessages") list.append(el("p", "muted small question-hint", "Her satır bir post olur. Enter yeni satır, ⌘/Ctrl+Enter sonraki soru."));
  const example = exampleText(placeholder);
  if (example && id !== "seriesCount") {
    const row = el("div", "example-row");
    row.append(el("span", "muted small", "Örnekten başla"));
    const chip = el("button", "chip chip-example"); chip.type = "button";
    chip.innerHTML = ICONS.plus; chip.append(document.createTextNode(example));
    chip.setAttribute("aria-label", "Örneği kullan: " + example);
    chip.addEventListener("click", () => { field.value = example; field.dispatchEvent(new Event("input")); field.focus(); });
    row.append(chip); list.append(row);
  }
  if (id === "seriesCount" && window.SegmentedControl) window.SegmentedControl.fromSelect(field, { label: question });
  $("questionPosition").textContent = "SORU " + pad2(index + 1) + " / " + pad2(total);
  $("prevLabel").textContent = index === 0 ? "Fikre dön" : "Önceki";
  $("nextLabel").textContent = index === total - 1 ? "Promptu oluştur" : "Sonraki";
  $("skipQuestion").hidden = index === total - 1;
  updateProgress(); renderOverview(); scheduleBrief();
}
function moveQuestion(delta) {
  if (!state.category) return;
  const last = state.category.questions.length - 1;
  if (delta > 0 && state.questionIndex === last) { if (generatePrompt()) goStep(3); return; }
  if (delta < 0 && state.questionIndex === 0) { goStep(1); return; }
  state.questionIndex = Math.max(0, Math.min(state.questionIndex + delta, last));
  renderQuestions(); $("answerInput").focus(); saveDraft();
}
function jumpToQuestion(i) { state.questionIndex = i; renderQuestions(); $("answerInput").focus(); saveDraft(); }
function updateProgress() {
  const c = state.category, total = c?.questions.length || 0;
  const answered = c ? c.questions.filter(([id]) => state.answers[id]).length : 0;
  $("progressBadge").textContent = total ? answered + " / " + total + " yanıt" : "";
  const bar = $("progressSegments"); bar.replaceChildren(); bar.style.setProperty("--count", total || 5);
  bar.setAttribute("aria-valuemax", String(total)); bar.setAttribute("aria-valuenow", String(answered));
  bar.setAttribute("aria-valuetext", answered + " / " + total + " yanıtlandı");
  (c?.questions || []).forEach(([id], i) => {
    const seg = el("span"); if (i === state.questionIndex) seg.className = "is-current"; else if (state.answers[id]) seg.className = "is-done";
    bar.append(seg);
  });
}
function renderOverview() {
  const c = state.category, list = $("questionOverview"); list.replaceChildren();
  if (!c) return;
  c.questions.forEach(([id, question], i) => {
    const li = el("li"), item = el("button", "overview-item"); item.type = "button";
    const answer = state.answers[id];
    const current = i === state.questionIndex;
    if (current) item.setAttribute("aria-current", "step"); else if (answer) item.classList.add("is-done");
    const num = el("span", "overview-num", pad2(i + 1));
    if (answer && !current) num.innerHTML = ICONS.check;
    item.append(num, el("span", "overview-q", question), el("span", "overview-a", answer || ""));
    item.append(el("span", "overview-tag", current ? "Şu an" : answer ? "Düzenle" : ""));
    item.setAttribute("aria-label", (i + 1) + ". soru: " + question + (answer ? " — yanıt: " + answer : " — boş"));
    item.addEventListener("click", () => jumpToQuestion(i));
    li.append(item); list.append(li);
  });
}

/* ---------- Brand & reference ---------- */
function getBrandProfile() {
  return { name: $("brandName").value.trim(), palette: $("brandPalette").value.trim(), typography: $("brandTypography").value.trim(), voice: $("brandVoice").value.trim() };
}
function fillBrand(profile = {}) {
  for (const [key, id] of Object.entries({ name: "brandName", palette: "brandPalette", typography: "brandTypography", voice: "brandVoice" })) $(id).value = profile[key] || "";
  updateOptionCards();
}
function renderBrands() {
  const selected = $("brandSelect").value;
  $("brandSelect").replaceChildren();
  const first = el("option", null, "Profil seç"); first.value = ""; $("brandSelect").append(first);
  getJson(storageKeys.brandProfiles, []).forEach(p => { const o = el("option", null, p.name); o.value = p.name; $("brandSelect").append(o); });
  $("brandSelect").value = selected;
}
function saveBrandProfile() {
  const profile = getBrandProfile();
  if (!profile.name) { $("brandName").focus(); return showToast("Marka adını yaz."); }
  const profiles = getJson(storageKeys.brandProfiles, []);
  if (!setJson(storageKeys.brandProfiles, [profile, ...profiles.filter(p => p.name !== profile.name)])) return;
  renderBrands(); $("brandSelect").value = profile.name; $("brandStatus").textContent = "Kaydedildi"; showToast(profile.name + " profili kaydedildi.");
}
function loadBrandProfile() {
  const profile = getJson(storageKeys.brandProfiles, []).find(p => p.name === $("brandSelect").value);
  if (!profile) return;
  fillBrand(profile); onBriefChange(); showToast(profile.name + " yüklendi.");
}
function clearBrandProfile() { fillBrand(); $("brandSelect").value = ""; onBriefChange(); }
function firstHex(text) { const m = String(text || "").match(/#(?:[0-9a-f]{6}|[0-9a-f]{3})\b/i); return m ? m[0] : ""; }
function updateOptionCards() {
  const b = getBrandProfile(), hasBrand = Object.values(b).some(Boolean);
  $("brandTitle").textContent = b.name ? "Marka profili · " + b.name : "Marka profili";
  $("brandSummary").textContent = hasBrand ? [b.palette, b.typography, b.voice].filter(Boolean).join(" · ") || "Profil dolduruluyor" : "Renk, tipografi ve ton";
  const mark = $("brandMark"), hex = firstHex(b.palette);
  if (b.name) { mark.textContent = b.name.trim().charAt(0).toLocaleUpperCase("tr-TR"); mark.classList.toggle("has-brand", !!hex); mark.style.background = hex || ""; }
  else if (!mark.querySelector("svg")) { mark.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>'; mark.classList.remove("has-brand"); mark.style.background = ""; }
  if ($("brandStatus").textContent !== "Kaydedildi" || !hasBrand) $("brandStatus").textContent = hasBrand ? "Aktif" : "İsteğe bağlı";
  $("brandStatus").classList.toggle("is-active", hasBrand);
  const refCount = ["refColor", "refTypography", "refStyle", "negativeInput"].filter(id => $(id).value.trim()).length + (state.referenceFile ? 1 : 0);
  $("referenceStatus").textContent = refCount ? refCount + " not" : "İsteğe bağlı";
  $("referenceStatus").classList.toggle("is-active", refCount > 0);
}
function removeReference() {
  if (state.referenceUrl) URL.revokeObjectURL(state.referenceUrl);
  state.referenceUrl = null; state.referenceFile = null; $("referenceInput").value = "";
  $("previewArea").replaceChildren(); $("previewArea").className = "preview-area is-empty";
  updateOptionCards(); onBriefChange();
}
function handleReferenceUpload(event) {
  const file = event.target.files?.[0]; if (!file) return;
  if (!["image/png", "image/jpeg", "application/pdf"].includes(file.type) || file.size > 10 * 1024 * 1024) {
    event.target.value = ""; return showToast("En fazla 10 MB PNG, JPG veya PDF seç.");
  }
  if (state.referenceUrl) URL.revokeObjectURL(state.referenceUrl);
  state.referenceFile = file; state.referenceUrl = URL.createObjectURL(file);
  const preview = $("previewArea"); preview.replaceChildren(); preview.className = "preview-area";
  const media = document.createElement(file.type === "application/pdf" ? "embed" : "img");
  media.src = state.referenceUrl;
  if (media.tagName === "EMBED") { media.type = "application/pdf"; media.setAttribute("title", file.name); }
  else media.alt = "Referans: " + file.name;
  preview.append(media, button("btn btn-quiet btn-sm", "Kaldır", removeReference), el("span", "muted small file-name", file.name));
  updateOptionCards(); onBriefChange(); showToast("Referans eklendi.");
}

/* ---------- Context ---------- */
function collectContext(silent) {
  selectCategory(selectedCategory());
  if (!state.category) {
    if (!silent) { setFieldError(null, "categoryError", true); showToast("Bir kategori seç."); }
    return null;
  }
  return { idea: $("ideaInput").value.trim(), category: state.category, tool: $("toolSelect").value,
    dialect: /Leonardo|Playground/.test($("toolSelect").value) ? "tag" : "natural",
    quality: $("qualitySelect").value, skillIntensity: $("skillIntensity").value, language: $("languageSelect").value,
    answers: { ...state.answers }, brand: getBrandProfile(), negative: $("negativeInput").value.trim(),
    reference: { hasFile: Boolean(state.referenceFile), fileName: state.referenceFile?.name || "", color: $("refColor").value.trim(), typography: $("refTypography").value.trim(), style: $("refStyle").value.trim() }
  };
}

/* ---------- Prompt engine ---------- */
function localized(ctx,tr,en) {return ctx.language==="tr" ? tr:en;}
function buildSkillBlock(ctx) {
  const tr=ctx.language==="tr", id=ctx.category.id;
  const parts=[];
  if(ctx.category.skillProfile.includes("brandkit")) {
    parts.push(tr ? "Markanın amacı ve hedef kitlesiyle ilişkili tek bir görsel fikir; tutarlı renk paleti, az ve okunaklı metin, belirgin negatif alan." : "One visual idea rooted in the brand purpose and audience; consistent palette, sparse readable text, clear negative space.");
    if(id==="brand") parts.push(tr ? "Basit, dengeli ve küçük ölçekte okunabilen özgün sembol. En fazla iki anlamlı metafor; belirgin geometrik yapı. Mevcut markaları taklit etme." : "An original, balanced symbol legible at small sizes. At most two meaningful metaphors, clear geometric construction. No imitation of existing marks.");
    if(id==="brand" && ctx.skillIntensity!=="normal") parts.push(tr ? "Sembol ve yazı arasındaki optik dengeyi koru. Tek renk uygulamada ve küçük boyutta ayırt edilebilir çizgiler kullan." : "Preserve optical balance between symbol and wordmark. Keep distinct linework at small sizes and in monochrome applications.");
    if(ctx.skillIntensity==="agency" && id==="brand" && /kit|board|kimlik|identity|kilavuz/.test(normalize(ctx.idea+" "+(ctx.answers.usage||"")))) parts.push(tr ? "İstenen oranı koruyarak bir kimlik panosu oluştur: logo, konstrüksiyon, dijital uygulama, marka özü, renk paleti, tipografi, fiziksel uygulama, görsel dil ve sistem detayı. Eşit boşluklar ve tutarlı logo kullanımı." : "Within the requested aspect ratio, create an identity board: logo, construction, digital application, brand essence, palette, typography, physical application, image direction and system detail. Consistent gutters and repeated mark.");
  }
  if(ctx.category.skillProfile.includes("highEndVisualDesign")) {
    parts.push(tr ? "Net odak noktası, kontrollü görsel hiyerarşi, dengeli boşluk ve hassas hizalama." : "A clear focal point, controlled visual hierarchy, balanced spacing and precise alignment.");
    if(ctx.skillIntensity!=="normal") parts.push(tr ? "Konuya uygun görsel dil, dokunsal malzeme ayrıntıları, yumuşak ve inandırıcı derinlik; rastgele süslemelerden kaçın." : "A subject-appropriate visual language, tactile material detail and soft believable depth; no arbitrary decoration.");
    if(ctx.skillIntensity==="agency") parts.push(tr ? "Ön plan, ana konu ve arka planı bilinçli ayır. Görsel ağırlığı tek odakta topla; ikincil öğeleri sakin tut." : "Deliberately separate foreground, subject and background. Concentrate visual weight at one focal point; keep secondary elements quiet.");
    if(id==="video") parts.push(tr ? "Hareketler gerekçeli ve akıcı; kesmeler arasında ışık, obje ve yön sürekliliği." : "Purposeful fluid motion; preserve lighting, object and direction continuity across cuts.");
  }
  return parts.join(" ");
}
function contextDetails(ctx) {
  const tr=ctx.language==="tr";
  const pairs=Object.entries(ctx.answers).filter(([id,v])=>v && !["seriesCount","postMessages","scenes"].includes(id)).map(([id,value])=>[(labels[id] || [id,id])[tr?0:1],value]);
  pairs.push([tr?"Marka":"Brand",ctx.brand.name],[tr?"Marka renkleri":"Brand colors",ctx.brand.palette],[tr?"Marka tipografisi":"Brand typography",ctx.brand.typography],[tr?"Markanın tonu":"Brand voice",ctx.brand.voice],
    [tr?"Referans renkleri":"Reference colors",ctx.reference.color],[tr?"Referans tipografisi":"Reference typography",ctx.reference.typography],[tr?"Referans stili":"Reference style",ctx.reference.style]);
  if(ctx.reference.hasFile) pairs.push([tr?"Birlikte eklenecek referans":"Reference to attach",ctx.reference.fileName]);
  return pairs.filter(([,v])=>v);
}
function qualityDirection(ctx) {
  if(ctx.quality==="simple") return "";
  const base=localized(ctx,"Ana konu belirgin, ışık yönü tutarlı, renkler kontrollü. Kullanım alanına uygun kadraj ve oran.","Distinct subject, consistent light direction, controlled colors. Framing and aspect ratio appropriate to the intended use.");
  return base+(ctx.quality==="professional" ? localized(ctx," Malzeme dokuları gerçekçi; kenarlar temiz, detaylar birbiriyle uyumlu. Belirtilmeyen tasarım kararlarını konuya uygun tek bir yönde çöz."," Believable material texture, clean edges and coherent details. Resolve unspecified design choices in one direction appropriate to the subject."):"");
}
function videoTimeline(ctx) {
  if(ctx.category.id!=="video") return "";
  const duration=Math.max(1,Math.min(120,parseFloat(ctx.answers.duration)||8));
  const count=Math.max(1,Math.min(12,parseInt(ctx.answers.scenes,10)||3));
  const phases=localized(ctx,["Kuruluş ve ortam","Ana hareket ve detay","Sonuç ve kapanış"],["Establish subject and setting","Main action and detail","Resolution and closing"]);
  return Array.from({length:count},(_,i)=>((i*duration/count).toFixed(1)+"–"+((i+1)*duration/count).toFixed(1)+"s: "+(i===count-1 && ctx.answers.ending ? ctx.answers.ending : phases[Math.min(2,Math.floor(i*3/count))]))).join("\n");
}
function buildNaturalPrompt(ctx) {
  const intro=localized(ctx,ctx.category.id==="video"?"Şu fikir için bir video oluştur: ":"Şu fikir için bir görsel oluştur: ",ctx.category.id==="video"?"Create a video based on this concept: ":"Create an image based on this concept: ");
  const details=contextDetails(ctx).map(([k,v])=>k+": "+v+".").join("\n");
  return [intro+ctx.idea,details,buildSkillBlock(ctx),qualityDirection(ctx),videoTimeline(ctx),ctx.negative?localized(ctx,"Kaçınılacak öğeler: ","Avoid: ")+ctx.negative:""].filter(Boolean).join("\n\n");
}
function buildTagPrompt(ctx) {
  const skillTags=localized(ctx,["net odak","dengeli boşluk","kontrollü palet","okunaklı tipografi"],["clear focal point","balanced negative space","controlled palette","readable typography"]);
  if(ctx.category.skillProfile.includes("brandkit")) skillTags.push(localized(ctx,"tutarlı marka sistemi","coherent brand system"));
  if(ctx.skillIntensity!=="normal") skillTags.push(localized(ctx,"hassas hizalama, dokunsal detay","precise alignment, tactile detail"));
  if(ctx.skillIntensity==="agency") skillTags.push(localized(ctx,"katmanlı derinlik, rafine görsel hiyerarşi","layered depth, refined visual hierarchy"));
  if(ctx.quality!=="simple") skillTags.push(localized(ctx,"tutarlı ışık, temiz kompozisyon","consistent lighting, clean composition"));
  if(ctx.quality==="professional") skillTags.push(localized(ctx,"gerçekçi malzeme, temiz kenarlar","believable materials, clean edges"));
  const negative=[ctx.negative,localized(ctx,"bulanıklık, okunamayan metin, dağınık kompozisyon","blur, unreadable text, cluttered composition")].filter(Boolean).join(", ");
  return [ctx.idea,...contextDetails(ctx).map(([k,v])=>k+": "+v),...skillTags].join(", ")+(ctx.category.id==="video"?"\n\n"+videoTimeline(ctx):"")+"\n\n"+localized(ctx,"Negatif prompt: ","Negative prompt: ")+negative;
}
function buildPrompt(ctx) {
  if(!ctx?.idea) return "";
  const build=ctx.dialect==="tag"?buildTagPrompt:buildNaturalPrompt;
  if(ctx.category.id!=="seriesPost") return build(ctx);
  const count=ctx.answers.seriesCount==="9"?9:3;
  const messages=(ctx.answers.postMessages||"").split(/\n|,/).map(s=>s.trim()).filter(Boolean);
  const roles=localized(ctx,["Başlık odaklı","Ürün / obje odaklı","Marka detayı odaklı"],["Headline-focused","Product / object-focused","Brand-detail-focused"]);
  return Array.from({length:count},(_,i)=>{
    const idea=ctx.idea+"\n"+localized(ctx,"Seri öğesi ","Series item ")+(i+1)+"/"+count+". "+(messages[i]||roles[i%3])+". "+localized(ctx,"Seri boyunca aynı palet, tipografi ve logo konumunu koru.","Keep the same palette, typography and logo placement throughout the series.");
    return "--- POST "+(i+1)+" ---\n"+build({...ctx,idea});
  }).join("\n\n");
}
function buildTips(ctx) {
  const tips=[];
  if(ctx.reference.hasFile) tips.push("Referans dosyanı hedef araca ayrıca ekle. Bu dosya otomatik gönderilmez.");
  if(ctx.category.id==="seriesPost") tips.push("Postları aynı sohbet içinde, önceki görseli referans vererek üret.");
  if(ctx.brand.palette||ctx.reference.color) tips.push("Renk tutarlılığı için mümkünse hex kodları kullan.");
  if(ctx.category.id==="video") tips.push("Bu çıktı video briefidir. Seçili görsel aracında storyboard için kullanılabilir; hareketli çıktı için video üretimini destekleyen bir araç gerekir.");
  if(ctx.dialect==="tag") tips.push("Negatif prompt bölümünü aracın ayrı negatif alanına yapıştır.");
  if(ctx.language==="en") tips.push("İngilizce şablon kullanıldı. Yazdığın serbest metinler çevrilmeden korundu.");
  return tips;
}
/* ---------- Live brief ---------- */
function skillNames(category) { return category.skillProfile.map(s => s === "brandkit" ? "brandkit" : "high-end-visual-design"); }
function onBriefChange() {
  if (ui.restoring) return;
  if (state.prompt && !ui.stale) { ui.stale = true; if (ui.step === 3) renderResult(); }
  updateOptionCards(); scheduleBrief();
}
function scheduleBrief() { clearTimeout(ui.briefTimer); ui.briefTimer = setTimeout(() => { renderBrief(); saveDraft(); }, 120); }
function renderBrief() {
  const c = state.category;
  $("briefCategory").textContent = c?.name || "Henüz belli değil";
  $("briefSkills").textContent = c ? "skill · " + skillNames(c).join(" + ") : "Fikrini yazınca belirlenir";
  const dl = $("briefSettings"); dl.replaceChildren();
  const brand = getBrandProfile();
  [["Araç", $("toolSelect").value], ["Biçim", /Leonardo|Playground/.test($("toolSelect").value) ? "Etiket tabanlı" : "Doğal dil"], ["Detay", optionText("qualitySelect")], ["Sanat yönetimi", optionText("skillIntensity")], ["Şablon dili", optionText("languageSelect")], ["Marka", brand.name || "—"]]
    .forEach(([k, v]) => dl.append(el("dt", null, k), el("dd", null, v)));
  const preview = $("livePreview"), idea = $("ideaInput").value.trim();
  const ctx = idea ? collectContext(true) : null;
  preview.classList.toggle("is-placeholder", !ctx);
  preview.textContent = ctx ? buildPrompt(ctx) : idea ? "Kategori seç ya da fikrini biraz aç; prompt yapısı kategoriye göre kurulur." : "Fikrini yazdığında prompt burada şekillenmeye başlar.";
  renderSummary();
}
function renderSummary() {
  const dl = $("summaryList"); dl.replaceChildren();
  const c = state.category;
  const rows = [];
  if (c) c.questions.forEach(([id]) => { if (state.answers[id]) rows.push([labels[id]?.[0] || id, state.answers[id]]); });
  const brand = getBrandProfile();
  if (brand.name) rows.push(["Marka", [brand.name, brand.palette].filter(Boolean).join(" · ")]);
  if ($("negativeInput").value.trim()) rows.push(["Kaçınılacak öğeler", $("negativeInput").value.trim()]);
  if (!rows.length) rows.push(["Yanıtlar", "Soruları boş bıraktın; prompt yalnızca fikrinden ve ayarlardan kuruldu."]);
  rows.forEach(([k, v]) => { const d = el("div"); d.append(el("dt", null, k), el("dd", null, v)); dl.append(d); });
  const skills = $("summarySkills"); skills.replaceChildren();
  if (c) { skillNames(c).forEach(s => skills.append(el("span", "skill-chip", s))); skills.append(el("span", "muted small", optionText("skillIntensity") + " seviyede uygulandı")); }
}

/* ---------- Generate & result ---------- */
function generatePrompt(opts = {}) {
  if (!$("ideaInput").value.trim()) { showIdeaError(); if (ui.step !== 1) goStep(1); $("ideaInput").focus(); return false; }
  const ctx = collectContext(); if (!ctx) { if (ui.step !== 1) goStep(1); $("categoryChips").querySelector(".chip")?.focus(); return false; }
  state.prompt = buildPrompt(ctx); state.lastContext = ctx; ui.stale = false;
  state.variants = []; $("variantsOutput").replaceChildren();
  const saved = saveHistory(ctx, state.prompt); savePreferences();
  $("saveStatus").textContent = saved ? "Kütüphaneye kaydedildi" : "";
  renderResult(); saveDraft();
  if (!opts.quiet && saved && !storageFailed && ui.step === 3) showToast("Prompt yeniden oluşturuldu.");
  return true;
}
function renderResult() {
  const has = Boolean(state.prompt);
  $("resultEmpty").hidden = has; $("resultCard").hidden = !has; $("variantsSection").hidden = !has; $("tipsOutput").hidden = !has;
  $("staleNote").hidden = !(has && ui.stale);
  $("step3Title").textContent = has ? "Promptun hazır." : "Promptunu oluştur.";
  $("promptOutput").textContent = state.prompt;
  $("promptMeta").textContent = "Prompt · " + state.prompt.length.toLocaleString("tr-TR") + " karakter";
  const ctx = state.lastContext, meta = $("resultMeta"); meta.replaceChildren();
  if (has && ctx) {
    const cat = el("span", "tag is-accent", ctx.category.name); meta.append(cat);
    [ctx.tool, ctx.dialect === "tag" ? "Etiket tabanlı" : "Doğal dil", ctx.language === "tr" ? "Türkçe şablon" : "English template"].forEach(t => meta.append(el("span", "tag", t)));
  }
  renderTips(ctx); syncButtons(); renderSummary();
}
function renderTips(ctx) {
  const box = $("tipsOutput"); box.replaceChildren();
  if (!ctx) return;
  buildTips(ctx).forEach(t => { const d = el("div", "tip"); d.append(el("span", "tip-tag", "İpucu"), el("span", null, t)); box.append(d); });
  if (state.missingReference) { const d = el("div", "tip"); d.append(el("span", "tip-tag", "Not"), el("span", null, "Bu kaydın referans dosyasını yeniden ekle: " + state.missingReference)); box.append(d); }
}
function generateVariants() {
  const ctx = collectContext(); if (!ctx?.idea) return generatePrompt();
  const angles = localized(ctx, ["Sade ve dengeli", "Sinematik ve atmosferik", "Ürün ve mesaj odaklı"], ["Minimal and balanced", "Cinematic and atmospheric", "Product and message focused"]);
  state.variants = angles.map(angle => { const context = { ...ctx, idea: ctx.idea + ". " + localized(ctx, "Yaratıcı yön: ", "Creative direction: ") + angle }; return { angle, context, prompt: buildPrompt(context) }; });
  const grid = $("variantsOutput"); grid.replaceChildren();
  state.variants.forEach((v, i) => {
    const featured = i === 0;
    const article = el("article", "shell variant" + (featured ? " is-featured" : ""));
    const core = el("div", "core");
    core.append(el("span", "variant-num", pad2(i + 1)), el("strong", null, v.angle), el("pre", null, v.prompt));
    const row = el("div", "row-actions");
    const use = featured ? button("btn btn-primary", "Bu alternatifi kullan", null, ICONS.arrowRight) : button("btn btn-quiet", "Kullan");
    use.setAttribute("aria-label", v.angle + " alternatifini kullan");
    use.addEventListener("click", () => {
      state.prompt = v.prompt; state.lastContext = v.context; ui.stale = false; $("ideaInput").value = v.context.idea;
      const saved = saveHistory(v.context, v.prompt);
      $("saveStatus").textContent = saved ? "Kütüphaneye kaydedildi" : "";
      renderResult(); scheduleBrief(); $("promptOutput").focus();
      if (saved) showToast("Alternatif seçildi ve kaydedildi.");
    });
    row.append(use, copyButton(() => v.prompt, { label: "Kopyala" }));
    core.append(row); article.append(core); grid.append(article);
  });
  showToast("Üç alternatif hazır.");
}
function syncButtons() {
  const item = readHistory().find(x => x.id === state.currentPromptId);
  const fav = Boolean(item?.favorite);
  $("favoriteBtn").disabled = !item;
  $("favoriteBtn").setAttribute("aria-pressed", String(fav));
  $("favoriteLabel").textContent = fav ? "Favoride" : "Favori";
  $("favoriteBtn").setAttribute("aria-label", fav ? "Favorilerden çıkar" : "Favorilere ekle");
  $("copyBtn").disabled = !state.prompt;
}

/* ---------- History ---------- */
function readHistory() {
  return getJson(storageKeys.history, []).filter(x => typeof x.id === "string" && typeof x.prompt === "string" && typeof x.idea === "string");
}
function saveHistory(ctx, prompt) {
  const id = crypto.randomUUID();
  const item = { id, createdAt: new Date().toISOString(), category: ctx.category.name, categoryId: ctx.category.id, tool: ctx.tool, favorite: false, idea: ctx.idea, prompt, context: ctx };
  if (!setJson(storageKeys.history, [item, ...readHistory()].slice(0, 200))) { state.currentPromptId = null; return false; }
  state.currentPromptId = id; renderHistory(); return true;
}
function toggleFavorite(id) {
  const next = readHistory().map(x => x.id === id ? { ...x, favorite: !x.favorite } : x);
  if (setJson(storageKeys.history, next)) { renderHistory(); syncButtons(); }
}
function restoreHistory(item) {
  const ctx = item.context;
  ui.restoring = true;
  removeReference(); fillBrand(); $("brandSelect").value = "";
  ["refColor", "refTypography", "refStyle", "negativeInput"].forEach(id => $(id).value = "");
  state.answerCache = {}; state.category = null; state.answers = {}; state.missingReference = "";
  $("ideaInput").value = item.idea; setFieldError("ideaInput", "ideaError", false);
  const category = categories.find(c => c.id === ctx?.category?.id || c.id === item.categoryId || c.name === item.category) || detectCategory(item.idea);
  $("categorySelect").value = category?.id || "auto"; selectCategory(category);
  if (ctx) {
    state.answers = { ...ctx.answers }; fillBrand(ctx.brand);
    const mapping = { tool: "toolSelect", quality: "qualitySelect", skillIntensity: "skillIntensity", language: "languageSelect" };
    for (const [key, id] of Object.entries(mapping)) if (ctx[key]) $(id).value = ctx[key];
    $("refColor").value = ctx.reference?.color || ""; $("refTypography").value = ctx.reference?.typography || ""; $("refStyle").value = ctx.reference?.style || ""; $("negativeInput").value = ctx.negative || "";
    if (ctx.reference?.hasFile) state.missingReference = ctx.reference.fileName;
  } else $("toolSelect").value = item.tool;
  state.prompt = item.prompt; state.currentPromptId = item.id; state.variants = []; state.lastContext = ctx ? { ...ctx, reference: { ...ctx.reference, hasFile: false } } : null;
  ui.stale = false; $("variantsOutput").replaceChildren(); $("saveStatus").textContent = "Kütüphaneden yüklendi";
  refreshSegments(); updateOptionCards(); ui.restoring = false;
  switchView("create"); goStep(3); renderBrief();
  showToast("Çalışma yüklendi. Alanları değiştirip yeniden oluşturabilirsin.");
}
function historyCard(item, variant) {
  const featured = variant === "featured";
  const article = el("article", "history-card" + (featured ? " is-featured shell-dark" : " shell" + (variant === "wide" ? " span-5" : "")));
  const core = el("div", featured ? "core-dark" : "core");
  const top = el("div", "history-top"), tags = el("div", "history-tags");
  tags.append(el("span", "tag is-accent", item.category), el("span", "tag", String(item.tool).replace(/\s*\(.*\)$/, "")));
  const star = el("button", "star-btn"); star.type = "button"; star.innerHTML = ICONS.star;
  star.setAttribute("aria-pressed", String(!!item.favorite)); star.setAttribute("aria-label", item.favorite ? "Favorilerden çıkar" : "Favorilere ekle");
  star.addEventListener("click", () => toggleFavorite(item.id));
  top.append(tags, star); core.append(top);
  const date = new Date(item.createdAt), when = isNaN(date) ? "" : date.toLocaleString("tr-TR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
  if (featured) core.append(el("span", "history-date", "Son çalışma · " + when));
  core.append(el("h3", "history-title", item.idea));
  core.append(el("pre", null, item.prompt.slice(0, featured ? 600 : 220)));
  const foot = el("div", "history-foot"), actions = el("div", "row-actions");
  if (!featured) foot.append(el("span", "history-date", when));
  const load = featured ? button("btn btn-primary", "Yükle ve düzenle", () => restoreHistory(item), ICONS.arrowUpRight) : button("btn btn-quiet btn-sm", "Yükle", () => restoreHistory(item));
  load.setAttribute("aria-label", "Yükle ve düzenle: " + item.idea);
  if (featured) { load.style.background = "var(--mint)"; load.style.color = "#062019"; }
  const copy = copyButton(() => item.prompt, { label: "Kopyala" }); if (!featured) copy.classList.add("btn-sm");
  actions.append(copy, load); foot.append(actions); core.append(foot);
  article.append(core); return article;
}
function renderHistory() {
  const history = readHistory(), term = normalize($("historySearch").value.trim()), mode = $("historyMode").value, category = $("historyCategory").value;
  const filtered = history.filter(x => (!term || normalize(x.idea + " " + x.prompt + " " + x.category + " " + x.tool).includes(term)) && (mode !== "favorites" || x.favorite) && (!category || x.categoryId === category || x.category === categories.find(c => c.id === category)?.name));
  const favCount = history.filter(x => x.favorite).length;
  $("libraryStats").textContent = history.length ? history.length + " çalışma · " + favCount + " favori · Yalnızca bu tarayıcıda saklanır." : "Oluşturduğun promptlar burada birikir.";
  $("clearHistoryBtn").hidden = !history.length;
  const list = $("historyList"); list.replaceChildren();
  if (!filtered.length) {
    const wrap = el("div", "shell history-empty"), core = el("div", "core empty-card");
    if (!history.length) {
      core.append(el("strong", null, "Henüz çalışma yok"), el("p", "muted", "Her oluşturduğun prompt buraya kaydedilir. Beğendiklerini yıldızla işaretleyip hızlıca bulursun."), button("btn btn-primary", "İlk promptunu oluştur", () => { switchView("create"); goStep(1); }, ICONS.arrowUpRight));
    } else {
      const parts = [term ? "“" + $("historySearch").value.trim() + "”" : "", category ? optionText("historyCategory") : "", mode === "favorites" ? "favoriler" : ""].filter(Boolean);
      core.append(el("strong", null, "Sonuç yok"), el("p", "muted", parts.join(" · ") + " için eşleşen çalışma bulunamadı."), button("btn btn-quiet", "Filtreleri temizle", () => { $("historySearch").value = ""; $("historyCategory").value = ""; $("historyMode").value = "all"; refreshSegments(); renderHistory(); $("historySearch").focus(); }));
    }
    wrap.append(core); list.append(wrap); return;
  }
  filtered.forEach((item, i) => list.append(historyCard(item, i === 0 ? "featured" : i < 3 ? "wide" : "normal")));
}
function confirmAction(message, actionLabel) {
  const dialog = $("confirmDialog");
  $("confirmMessage").textContent = message; $("confirmAction").textContent = actionLabel || "Temizle";
  dialog.returnValue = "cancel";
  return new Promise(resolve => { dialog.addEventListener("close", () => resolve(dialog.returnValue === "confirm"), { once: true }); dialog.showModal(); });
}
async function clearHistory() {
  const history = readHistory(); if (!history.length) return;
  if (!await confirmAction("Kaydedilmiş " + history.length + " çalışma silinsin mi? Bu işlem geri alınamaz.", "Hepsini sil")) return;
  if (setJson(storageKeys.history, [])) { state.currentPromptId = null; renderHistory(); syncButtons(); showToast("Geçmiş temizlendi."); }
}

/* ---------- Preferences, theme, draft ---------- */
function savePreferences() {
  setJson(storageKeys.preferences, { tool: $("toolSelect").value, quality: $("qualitySelect").value, intensity: $("skillIntensity").value, language: $("languageSelect").value, theme: document.documentElement.classList.contains("dark") ? "dark" : "light" });
}
function updateThemeButton() {
  const dark = document.documentElement.classList.contains("dark");
  $("themeBtn").setAttribute("aria-pressed", String(dark));
  $("themeBtn").title = dark ? "Açık tema" : "Koyu tema"; $("themeBtn").setAttribute("aria-label", $("themeBtn").title);
}
function loadPreferences() {
  const p = getJson(storageKeys.preferences, {});
  for (const [key, id] of Object.entries({ tool: "toolSelect", quality: "qualitySelect", intensity: "skillIntensity", language: "languageSelect" })) if ([...$(id).options].some(o => o.value === p[key])) $(id).value = p[key];
  const dark = p.theme ? p.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.classList.toggle("dark", dark); updateThemeButton();
}
function saveDraft() {
  if (ui.restoring) return;
  try {
    sessionStorage.setItem(DRAFT_KEY, JSON.stringify({
      idea: $("ideaInput").value, categoryValue: $("categorySelect").value, answers: state.answers, answerCache: state.answerCache,
      questionIndex: state.questionIndex, step: ui.step, prompt: state.prompt, currentPromptId: state.currentPromptId, lastContext: state.lastContext, stale: ui.stale,
      ref: { color: $("refColor").value, typography: $("refTypography").value, style: $("refStyle").value }, negative: $("negativeInput").value, brand: getBrandProfile()
    }));
  } catch { /* private mode: draft stays in memory only */ }
}
function restoreDraft() {
  let d; try { d = JSON.parse(sessionStorage.getItem(DRAFT_KEY)); } catch { d = null; }
  if (!d || typeof d !== "object") return 1;
  ui.restoring = true;
  $("ideaInput").value = d.idea || "";
  if ([...$("categorySelect").options].some(o => o.value === d.categoryValue)) $("categorySelect").value = d.categoryValue;
  state.answerCache = d.answerCache && typeof d.answerCache === "object" ? d.answerCache : {};
  selectCategory(selectedCategory());
  if (state.category) { state.answers = d.answers && typeof d.answers === "object" ? d.answers : {}; state.questionIndex = Math.min(Math.max(0, d.questionIndex | 0), state.category.questions.length - 1); }
  $("refColor").value = d.ref?.color || ""; $("refTypography").value = d.ref?.typography || ""; $("refStyle").value = d.ref?.style || ""; $("negativeInput").value = d.negative || "";
  fillBrand(d.brand || {});
  if (typeof d.prompt === "string" && d.prompt) { state.prompt = d.prompt; state.currentPromptId = d.currentPromptId || null; state.lastContext = d.lastContext || null; ui.stale = !!d.stale; }
  ui.restoring = false;
  return [1, 2, 3].includes(d.step) ? d.step : 1;
}
async function resetAll() {
  const dirty = $("ideaInput").value.trim() || state.referenceFile || Object.values(state.answers).some(Boolean) || Object.values(getBrandProfile()).some(Boolean) || ["refColor", "refTypography", "refStyle", "negativeInput"].some(id => $(id).value);
  if (dirty && !await confirmAction("Açık çalışma temizlensin mi? Kütüphane ve kayıtlı markalar korunur.", "Temizle")) return;
  ui.restoring = true;
  removeReference(); fillBrand(); $("brandSelect").value = "";
  state.category = null; state.answers = {}; state.answerCache = {}; state.prompt = ""; state.currentPromptId = null; state.questionIndex = 0; state.variants = []; state.lastContext = null; state.missingReference = "";
  ["ideaInput", "refColor", "refTypography", "refStyle", "negativeInput"].forEach(id => $(id).value = "");
  $("categorySelect").value = "auto"; $("variantsOutput").replaceChildren(); $("saveStatus").textContent = "";
  setFieldError("ideaInput", "ideaError", false); setFieldError(null, "categoryError", false);
  ui.stale = false; ui.restoring = false;
  try { sessionStorage.removeItem(DRAFT_KEY); } catch {}
  renderQuestions(); updateOptionCards(); syncButtons();
  switchView("create"); goStep(1, { focus: false }); $("ideaInput").focus();
}

/* ---------- Init ---------- */
function initialize() {
  categories.forEach(c => {
    for (const id of ["categorySelect", "historyCategory"]) { const opt = document.createElement("option"); opt.value = c.id; opt.textContent = c.name; $(id).append(opt); }
  });
  buildCategoryChips();
  loadPreferences();
  if (window.SegmentedControl) {
    [["languageSelect", "Şablon dili"], ["qualitySelect", "Detay seviyesi"], ["skillIntensity", "Sanat yönetimi"], ["historyMode", "Göster"]].forEach(([id, label]) => window.SegmentedControl.fromSelect($(id), { label }));
  }
  if (window.CopyButton) window.CopyButton.attach($("copyBtn"), () => state.prompt, { label: "Kopyala", copiedLabel: "Kopyalandı", errorLabel: "Kopyalanamadı" });
  else { $("copyBtn").textContent = "Kopyala"; $("copyBtn").className = "btn btn-quiet"; $("copyBtn").addEventListener("click", () => navigator.clipboard?.writeText(state.prompt)); }

  const bindings = { generateBtn: () => generatePrompt(), variantBtn: generateVariants, favoriteBtn: () => toggleFavorite(state.currentPromptId), saveBrandBtn: saveBrandProfile, clearBrandBtn: clearBrandProfile, clearHistoryBtn: clearHistory, resetBtn: resetAll, prevQuestion: () => moveQuestion(-1), nextQuestion: () => moveQuestion(1), skipQuestion: () => moveQuestion(1) };
  Object.entries(bindings).forEach(([id, handler]) => $(id).addEventListener("click", handler));
  document.querySelectorAll("[data-go-step]").forEach(b => b.addEventListener("click", () => goStep(Number(b.dataset.goStep))));
  document.querySelectorAll(".step-pill").forEach(b => b.addEventListener("click", () => goStep(Number(b.dataset.step))));
  document.querySelectorAll(".nav-tab").forEach(b => b.addEventListener("click", () => switchView(b.dataset.view)));
  document.querySelectorAll('[data-action="generate"]').forEach(b => b.addEventListener("click", () => generatePrompt()));
  document.querySelectorAll('[data-action="reset"]').forEach(b => b.addEventListener("click", resetAll));

  $("ideaInput").addEventListener("input", () => {
    if ($("ideaInput").value.trim()) setFieldError("ideaInput", "ideaError", false);
    if ($("categorySelect").value === "auto") selectCategory(selectedCategory());
    updateCategoryUI(); onBriefChange();
  });
  $("ideaInput").addEventListener("keydown", e => {
    if (e.key === "Enter" && !e.shiftKey && !e.isComposing) { e.preventDefault(); if (!$("ideaInput").value.trim()) return showIdeaError(); goStep(2); }
  });
  $("categorySelect").addEventListener("change", () => { selectCategory(selectedCategory()); updateCategoryUI(); onBriefChange(); });
  ["toolSelect", "qualitySelect", "skillIntensity", "languageSelect"].forEach(id => $(id).addEventListener("change", () => { savePreferences(); onBriefChange(); }));
  ["refColor", "refTypography", "refStyle", "negativeInput", "brandName", "brandPalette", "brandTypography", "brandVoice"].forEach(id => $(id).addEventListener("input", onBriefChange));
  $("brandSelect").addEventListener("change", loadBrandProfile);
  $("referenceInput").addEventListener("change", handleReferenceUpload);
  $("historySearch").addEventListener("input", renderHistory);
  ["historyMode", "historyCategory"].forEach(id => $(id).addEventListener("change", renderHistory));
  $("themeBtn").addEventListener("click", () => { document.documentElement.classList.toggle("dark"); updateThemeButton(); savePreferences(); });
  document.addEventListener("keydown", e => {
    document.documentElement.classList.add("keyboard");
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter" && ui.view === "create" && !e.defaultPrevented) {
      if (ui.step === 1) { e.preventDefault(); $("ideaInput").value.trim() ? goStep(2) : showIdeaError(); }
      else if (ui.step === 2 && state.category) { e.preventDefault(); moveQuestion(1); }
    }
  });
  document.addEventListener("pointerdown", () => document.documentElement.classList.remove("keyboard"));

  renderBrands(); renderHistory();
  const step = restoreDraft();
  renderQuestions(); updateOptionCards(); updateCategoryUI(); renderBrief(); syncButtons(); refreshSegments();
  goStep(step, { focus: false, instant: true });
}
initialize();
