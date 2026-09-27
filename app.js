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
function showToast(message) {
  clearTimeout(toastTimer);
  $("toast").textContent=message;
  $("toast").classList.add("visible");
  toastTimer=setTimeout(()=>$("toast").classList.remove("visible"),3000);
}
function detectCategory(text) {
  const n=normalize(text);
  // Explicit formats take precedence over incidental brand/product mentions.
  if (/\b(video|reels|shorts|animasyon)\b/.test(n)) return categories.find(c=>c.id==="video");
  if (/\b(seri|serisi|carousel|karusel|grid|aylik)\b|[39]\s*['’]?\s*lu/.test(n)) return categories.find(c=>c.id==="seriesPost");
  const scored=categories.map(c=>({c,score:c.keywords.reduce((s,k)=>s+(new RegExp("\\b"+normalize(k)+"(?:\\b|[a-z]+)").test(n)?1:0),0)})).sort((a,b)=>b.score-a.score);
  return scored[0].score ? scored[0].c : null;
}
function selectedCategory() {
  return categories.find(c=>c.id===$("categorySelect").value) || detectCategory($("ideaInput").value);
}
function selectCategory(category) {
  if (state.category?.id===category?.id) return;
  if(state.category) state.answerCache[state.category.id]={...state.answers};
  state.category=category;
  state.answers=category ? {...state.answerCache[category.id]} : {};
  state.questionIndex=0;
  if(category?.id==="seriesPost") {
    state.answers.seriesCount ||= /\b9/.test($("ideaInput").value) ? "9" : "3";
    state.answers.rhythm ||= "Başlık odaklı, ürün odaklı, marka detayı";
  }
  renderQuestions();
}
function renderQuestions() {
  const category=state.category;
  $("detectedBadge").textContent=category?.name || "Kategori seçilmedi";
  $("questionNav").hidden=!category;
  if(!category) {
    $("questionList").className="question-list empty-state";
    $("questionList").textContent="Fikrini yaz veya bir kategori seç.";
    updateProgress(); return;
  }
  $("questionList").className="question-list";
  const [id,,placeholder]=category.questions[state.questionIndex];
  const value=state.answers[id] || "";
  const label=labels[id]?.[0] || id;
  let field;
  if(id==="seriesCount") field='<select id="answerInput"><option value="3">3 post</option><option value="9">9 post</option></select>';
  else if(id==="postMessages") field='<textarea id="answerInput" rows="4" placeholder="Her postun mesajını ayrı satıra yaz.">'+escapeHtml(value)+'</textarea>';
  else if(id==="scenes") field='<input id="answerInput" type="number" min="1" max="12" placeholder="3" value="'+escapeHtml(value)+'">';
  else field='<input id="answerInput" type="text" value="'+escapeHtml(value)+'" placeholder="'+escapeHtml(placeholder)+'">';
  $("questionList").innerHTML='<div class="question-card"><label for="answerInput"><span>'+escapeHtml(label)+'</span><small>'+escapeHtml(id==="postMessages" ? "Serideki her görsel için ayrı bir mesaj." : placeholder)+'</small>'+field+'</label></div>';
  if(id==="seriesCount") $("answerInput").value=value || "3";
  $("answerInput").addEventListener("input", e=>{state.answers[id]=e.target.value.trim();updateProgress();});
  $("answerInput").addEventListener("keydown",e=>{
    if(e.key==="Enter" && e.target.tagName!=="TEXTAREA") {e.preventDefault();moveQuestion(1);}
  });
  $("prevQuestion").disabled=state.questionIndex===0;
  $("nextQuestion").textContent=state.questionIndex===category.questions.length-1 ? "Prompta geç" : "Sonraki";
  $("questionPosition").textContent=(state.questionIndex+1)+" / "+category.questions.length;
  updateProgress();
}
function moveQuestion(delta) {
  if(!state.category) return;
  if(delta>0 && state.questionIndex===state.category.questions.length-1) { $("generateBtn").focus(); return; }
  state.questionIndex=Math.max(0,Math.min(state.questionIndex+delta,state.category.questions.length-1));
  renderQuestions();$("answerInput").focus();
}
function updateProgress() {
  const total=state.category?.questions.length || 0;
  const answered=state.category ? state.category.questions.filter(([id])=>state.answers[id]).length : 0;
  $("progressBadge").textContent=answered+"/"+total+" tamamlandı";
  $("progressFill").style.width=(total ? answered/total*100 : 0)+"%";
}
function syncButtons() {
  const ready=Boolean($("ideaInput").value.trim());
  $("generateBtn").disabled=!ready; $("variantBtn").disabled=!ready;
  $("copyBtn").disabled=!state.prompt;
  const item=readHistory().find(x=>x.id===state.currentPromptId);
  $("favoriteBtn").disabled=!item;
  $("favoriteBtn").setAttribute("aria-pressed",String(Boolean(item?.favorite)));
  const label=item?.favorite ? "Favorilerden çıkar" : "Favorilere ekle";
  $("favoriteBtn").setAttribute("aria-label",label);$("favoriteBtn").title=label;
}
function getBrandProfile() {
  return {name:$("brandName").value.trim(),palette:$("brandPalette").value.trim(),typography:$("brandTypography").value.trim(),voice:$("brandVoice").value.trim()};
}
function fillBrand(profile={}) {
  for(const [key,id] of Object.entries({name:"brandName",palette:"brandPalette",typography:"brandTypography",voice:"brandVoice"})) $(id).value=profile[key] || "";
}
function renderBrands() {
  const selected=$("brandSelect").value;
  $("brandSelect").innerHTML='<option value="">Profil seç</option>'+getJson(storageKeys.brandProfiles,[]).map(p=>'<option value="'+escapeHtml(p.name)+'">'+escapeHtml(p.name)+'</option>').join("");
  $("brandSelect").value=selected;
}
function saveBrandProfile() {
  const profile=getBrandProfile();
  if(!profile.name) { $("brandName").focus();return showToast("Marka adını yaz."); }
  const profiles=getJson(storageKeys.brandProfiles,[]);
  if(!setJson(storageKeys.brandProfiles,[profile,...profiles.filter(p=>p.name!==profile.name)])) return;
  renderBrands();$("brandSelect").value=profile.name;$("brandStatus").textContent="Kaydedildi";showToast("Marka profili kaydedildi.");
}
function loadBrandProfile() {
  const profile=getJson(storageKeys.brandProfiles,[]).find(p=>p.name===$("brandSelect").value);
  if(!profile) return;
  fillBrand(profile);$("brandStatus").textContent="Yüklendi";showToast(profile.name+" yüklendi.");
}
function clearBrandProfile() { fillBrand();$("brandSelect").value="";$("brandStatus").textContent="İsteğe bağlı"; }
function removeReference() {
  if(state.referenceUrl) URL.revokeObjectURL(state.referenceUrl);
  state.referenceUrl=null;state.referenceFile=null;$("referenceInput").value="";
  $("previewArea").replaceChildren();$("previewArea").className="preview-area empty-state";
}
function handleReferenceUpload(event) {
  const file=event.target.files?.[0]; if(!file) return;
  if(!["image/png","image/jpeg","application/pdf"].includes(file.type) || file.size>10*1024*1024) {
    event.target.value="";return showToast("En fazla 10 MB PNG, JPG veya PDF seç.");
  }
  if(state.referenceUrl) URL.revokeObjectURL(state.referenceUrl);
  state.referenceFile=file;state.referenceUrl=URL.createObjectURL(file);
  const preview=$("previewArea");preview.replaceChildren();preview.className="preview-area";
  const media=document.createElement(file.type==="application/pdf" ? "embed":"img");
  media.src=state.referenceUrl;
  if(media.tagName==="EMBED"){media.type="application/pdf";media.setAttribute("title",file.name);}
  else media.alt="Referans: "+file.name;
  const remove=document.createElement("button");remove.type="button";remove.className="ghost-button";remove.textContent="Kaldır";remove.addEventListener("click",removeReference);
  preview.append(media,remove);
  const name=document.createElement("span");name.className="helper";name.textContent=file.name;preview.append(name);
  showToast("Referans eklendi.");
}
function collectContext() {
  selectCategory(selectedCategory());
  if(!state.category) { showToast("Bir kategori seç.");$("categorySelect").focus();return null; }
  return {idea:$("ideaInput").value.trim(),category:state.category,tool:$("toolSelect").value,
    dialect:/Leonardo|Playground/.test($("toolSelect").value)?"tag":"natural",
    quality:$("qualitySelect").value,skillIntensity:$("skillIntensity").value,language:$("languageSelect").value,
    answers:{...state.answers},brand:getBrandProfile(),negative:$("negativeInput").value.trim(),
    reference:{hasFile:Boolean(state.referenceFile),fileName:state.referenceFile?.name || "",color:$("refColor").value.trim(),typography:$("refTypography").value.trim(),style:$("refStyle").value.trim()}
  };
}
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
function renderTips(ctx) {
  $("tipsOutput").replaceChildren();
  buildTips(ctx).forEach(t=>{const div=document.createElement("div");div.className="tip";div.textContent=t;$("tipsOutput").append(div);});
}
function readHistory() {
  return getJson(storageKeys.history,[]).filter(x=>typeof x.id==="string" && typeof x.prompt==="string" && typeof x.idea==="string");
}
function saveHistory(ctx,prompt) {
  const id=crypto.randomUUID();
  const item={id,createdAt:new Date().toISOString(),category:ctx.category.name,categoryId:ctx.category.id,tool:ctx.tool,favorite:false,idea:ctx.idea,prompt,context:ctx};
  const history=readHistory();
  if(!setJson(storageKeys.history,[item,...history].slice(0,200))) {state.currentPromptId=null;return false;}
  state.currentPromptId=id;renderHistory();return true;
}
function generatePrompt() {
  const ctx=collectContext();if(!ctx?.idea) return;
  state.prompt=buildPrompt(ctx);$("promptOutput").textContent=state.prompt;
  state.variants=[];$("variantsOutput").replaceChildren();renderTips(ctx);
  const saved=saveHistory(ctx,state.prompt);savePreferences();syncButtons();
  if(saved&&!storageFailed) showToast("Prompt hazır ve geçmişe kaydedildi.");
}
function generateVariants() {
  const ctx=collectContext();if(!ctx?.idea)return;
  const angles=localized(ctx,["Sade ve dengeli","Sinematik ve atmosferik","Ürün ve mesaj odaklı"],["Minimal and balanced","Cinematic and atmospheric","Product and message focused"]);
  state.variants=angles.map(angle=>{const context={...ctx,idea:ctx.idea+". "+localized(ctx,"Yaratıcı yön: ","Creative direction: ")+angle};return {angle,context,prompt:buildPrompt(context)};});
  $("variantsOutput").replaceChildren();
  state.variants.forEach((v,i)=>{
    const article=document.createElement("article");article.className="variant";
    const title=document.createElement("strong");title.textContent=(i+1)+". "+v.angle;
    const pre=document.createElement("pre");pre.textContent=v.prompt;
    const row=document.createElement("div");row.className="button-row";
    const copy=document.createElement("button");copy.className="ghost-button";copy.textContent="Kopyala";copy.addEventListener("click",()=>copyText(v.prompt));
    const use=document.createElement("button");use.className="secondary-button";use.textContent="Bu alternatifi kullan";use.addEventListener("click",()=>{
      state.prompt=v.prompt;$("promptOutput").textContent=v.prompt;
      $("ideaInput").value=v.context.idea;
      const saved=saveHistory(v.context,v.prompt);renderTips(v.context);syncButtons();
      if(saved)showToast("Alternatif seçildi ve kaydedildi.");
    });
    row.append(copy,use);article.append(title,pre,row);$("variantsOutput").append(article);
  });
  renderTips(ctx);showToast("Üç alternatif hazır.");
}
async function copyText(text) {
  if(!text)return;
  try {await navigator.clipboard.writeText(text);}
  catch {
    const textarea=document.createElement("textarea");textarea.value=text;textarea.style.cssText="position:fixed;opacity:0";document.body.append(textarea);textarea.select();
    let copied=false;
    try {copied=document.execCommand("copy");}catch{}
    textarea.remove();
    if(!copied) {showToast("Kopyalanamadı. Prompt metnini seçip elle kopyala.");return;}
  }
  showToast("Prompt kopyalandı.");
}
function toggleFavorite(id) {
  const next=readHistory().map(x=>x.id===id?{...x,favorite:!x.favorite}:x);
  if(setJson(storageKeys.history,next)){renderHistory();syncButtons();}
}
function restoreHistory(item) {
  const ctx=item.context;
  removeReference();clearBrandProfile();
  ["refColor","refTypography","refStyle","negativeInput"].forEach(id=>$(id).value="");
  state.answerCache={};state.category=null;state.answers={};
  $("ideaInput").value=item.idea;
  const category=categories.find(c=>c.id===ctx?.category?.id || c.id===item.categoryId || c.name===item.category) || detectCategory(item.idea);
  $("categorySelect").value=category?.id || "auto";selectCategory(category);
  if(ctx){
    state.answers={...ctx.answers};fillBrand(ctx.brand);
    const mapping={tool:"toolSelect",quality:"qualitySelect",skillIntensity:"skillIntensity",language:"languageSelect"};
    for(const [key,id] of Object.entries(mapping)) if(ctx[key]) $(id).value=ctx[key];
    $("refColor").value=ctx.reference?.color||"";$("refTypography").value=ctx.reference?.typography||"";$("refStyle").value=ctx.reference?.style||"";$("negativeInput").value=ctx.negative||"";
    renderTips({...ctx,reference:{...ctx.reference,hasFile:false}});
    if(ctx.reference?.hasFile) {const note=document.createElement("div");note.className="tip";note.textContent="Bu kaydın referans dosyasını yeniden ekle: "+ctx.reference.fileName;$("tipsOutput").append(note);}
  } else {
    $("toolSelect").value=item.tool;
    $("tipsOutput").replaceChildren();
  }
  state.prompt=item.prompt;state.currentPromptId=item.id;state.variants=[];
  $("promptOutput").textContent=item.prompt;$("variantsOutput").replaceChildren();
  renderQuestions();syncButtons();showToast("Çalışma yüklendi. Alanları değiştirerek yeniden üretebilirsin.");
}
function renderHistory() {
  const history=readHistory(),term=normalize($("historySearch").value),mode=$("historyMode").value,category=$("historyCategory").value;
  const filtered=history.filter(x=>(!term||normalize(x.idea+" "+x.prompt+" "+x.category+" "+x.tool).includes(term))&&(mode!=="favorites"||x.favorite)&&(!category||x.categoryId===category||x.category===categories.find(c=>c.id===category)?.name));
  $("clearHistoryBtn").disabled=!history.length;
  const list=$("historyList");list.replaceChildren();list.className="history-list"+(!filtered.length?" empty-state":"");
  if(!filtered.length){list.textContent=history.length?"Bu filtrelere uygun çalışma yok.":"Henüz çalışma yok.";return;}
  filtered.forEach(item=>{
    const article=document.createElement("article");article.className="history-item";
    const meta=document.createElement("div");meta.className="history-meta";meta.textContent=new Date(item.createdAt).toLocaleString("tr-TR")+" · "+item.category+" · "+item.tool+(item.favorite?" · Favori":"");
    const title=document.createElement("strong");title.textContent=item.idea;
    const pre=document.createElement("pre");pre.textContent=item.prompt.slice(0,350)+(item.prompt.length>350?"…":"");
    const row=document.createElement("div");row.className="history-actions";
    const load=document.createElement("button");load.className="secondary-button";load.textContent="Yükle ve düzenle";load.addEventListener("click",()=>restoreHistory(item));
    const favorite=document.createElement("button");favorite.className="ghost-button";favorite.textContent=item.favorite?"Favorilerden çıkar":"Favorilere ekle";favorite.setAttribute("aria-pressed",String(item.favorite));favorite.addEventListener("click",()=>toggleFavorite(item.id));
    row.append(load,favorite);article.append(meta,title,pre,row);list.append(article);
  });
}
function confirmAction(message) {
  const dialog=$("confirmDialog");
  $("confirmMessage").textContent=message;
  dialog.returnValue="cancel";
  return new Promise(resolve=>{
    dialog.addEventListener("close",()=>resolve(dialog.returnValue==="confirm"),{once:true});
    dialog.showModal();
  });
}
async function clearHistory() {
  const history=readHistory();if(!history.length)return;
  if(!await confirmAction("Kaydedilmiş "+history.length+" çalışma silinsin mi?"))return;
  if(setJson(storageKeys.history,[])){state.currentPromptId=null;renderHistory();syncButtons();showToast("Geçmiş temizlendi.");}
}
function savePreferences() {
  setJson(storageKeys.preferences,{tool:$("toolSelect").value,quality:$("qualitySelect").value,intensity:$("skillIntensity").value,language:$("languageSelect").value,theme:document.documentElement.classList.contains("dark")?"dark":"light"});
}
function updateThemeButton() {
  const dark=document.documentElement.classList.contains("dark");
  $("themeBtn").setAttribute("aria-pressed",String(dark));
  $("themeBtn").title=dark?"Açık tema":"Koyu tema";$("themeBtn").setAttribute("aria-label",$("themeBtn").title);
}
function loadPreferences() {
  const p=getJson(storageKeys.preferences,{});
  for(const [key,id] of Object.entries({tool:"toolSelect",quality:"qualitySelect",intensity:"skillIntensity",language:"languageSelect"})) if([...$(id).options].some(o=>o.value===p[key])) $(id).value=p[key];
  document.documentElement.classList.toggle("dark",p.theme==="dark");updateThemeButton();
}
async function resetAll() {
  if(($("ideaInput").value.trim()||state.referenceFile||Object.values(state.answers).some(Boolean)||Object.values(getBrandProfile()).some(Boolean)||["refColor","refTypography","refStyle","negativeInput"].some(id=>$(id).value)) && !await confirmAction("Açık çalışma temizlensin mi? Kaydedilmiş geçmiş ve markalar korunur."))return;
  removeReference();clearBrandProfile();
  state.category=null;state.answers={};state.answerCache={};state.prompt="";state.currentPromptId=null;state.questionIndex=0;state.variants=[];
  ["ideaInput","refColor","refTypography","refStyle","negativeInput"].forEach(id=>$(id).value="");
  $("categorySelect").value="auto";$("promptOutput").textContent="Promptun burada görünecek.";$("tipsOutput").replaceChildren();$("variantsOutput").replaceChildren();renderQuestions();syncButtons();$("ideaInput").focus();
}
function initialize() {
  categories.forEach(c=>{
    for(const id of ["categorySelect","historyCategory"]){const opt=document.createElement("option");opt.value=c.id;opt.textContent=c.name;$(id).append(opt);}
  });
  const bindings={generateBtn:generatePrompt,variantBtn:generateVariants,copyBtn:()=>copyText(state.prompt),favoriteBtn:()=>toggleFavorite(state.currentPromptId),saveBrandBtn:saveBrandProfile,clearBrandBtn:clearBrandProfile,clearHistoryBtn:clearHistory,resetBtn:resetAll,prevQuestion:()=>moveQuestion(-1),nextQuestion:()=>moveQuestion(1)};
  Object.entries(bindings).forEach(([id,handler])=>$(id).addEventListener("click",handler));
  $("brandSelect").addEventListener("change",loadBrandProfile);
  $("referenceInput").addEventListener("change",handleReferenceUpload);
  $("ideaInput").addEventListener("input",()=>{if($("categorySelect").value==="auto")selectCategory(selectedCategory());syncButtons();});
  $("categorySelect").addEventListener("change",()=>{selectCategory(selectedCategory());syncButtons();});
  $("historySearch").addEventListener("input",renderHistory);
  ["historyMode","historyCategory"].forEach(id=>$(id).addEventListener("change",renderHistory));
  $("themeBtn").addEventListener("click",()=>{document.documentElement.classList.toggle("dark");updateThemeButton();savePreferences();});
  ["toolSelect","qualitySelect","skillIntensity","languageSelect"].forEach(id=>$(id).addEventListener("change",savePreferences));
  document.addEventListener("keydown",()=>document.documentElement.classList.add("keyboard"));
  document.addEventListener("pointerdown",()=>document.documentElement.classList.remove("keyboard"));
  loadPreferences();renderBrands();renderHistory();syncButtons();
}
initialize();
