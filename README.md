# Prompt Generator

Tarayıcıda çalışan, harici AI API kullanmayan statik prompt oluşturucu.

## Ozellikler

- Serbest metinden kategori tespiti
- Kategoriye gore karar agaci sorulari
- PNG/JPG/PDF referans onizleme ve manuel referans tarifi
- Hedef araca gore dogal dil veya etiket tabanli prompt cikisi
- `brandkit` ve `high-end-visual-design` skill katmanlari
- Marka profili kaydetme/yukleme
- Sosyal medya seri icerik icin coklu prompt uretimi
- Prompt gecmisi, favoriler ve filtreleme
- 3 farkli prompt varyasyonu
- Geçmiş, marka profilleri ve tercihler localStorage'da tutulur. Referans dosyaları ve kaydedilmemiş taslaklar kalıcı saklanmaz.

## Sınırlar

- Dil seçimi şablonun dilini değiştirir; serbest metin otomatik çevrilmez.
- Skill dosyaları tarayıcıda bir AI ajanı olarak çalıştırılmaz. Brandkit ve high-end-visual-design ilkeleri kategoriye uygun yerel şablon kuralları olarak uygulanır.
- Dosyalar yalnızca yerel önizlenir; otomatik analiz ve hedef araca gönderim yoktur. PNG/JPG/PDF, en fazla 10 MB. PDF görüntüleme tarayıcının yerleşik desteğine bağlıdır.
- Video çıktısı zaman çizelgeli bir brieftir. Görsel araçlarının video üretmesini sağlamaz.
- Geçmişten yükleme cevapları, marka, araç, dil ve detay ayarlarını geri getirir. Referans dosyasının yeniden seçilmesi gerekir.
- Araç etiketleri ilk briefteki adlardır; ücretsiz planların güncel erişimi veya model adları doğrulanmış değildir.
- Topluluk paylaşımı ve cihazlar arası senkronizasyon bu yerel sürümün kapsamında değildir.

## Test

```bash
node --test tests/prompt-engine.test.cjs
```

Kategori tespiti, 3/9 post serisi, çıktı biçimleri, şablon dili, skill kapsamı, referans alanları, video zaman çizelgesi ve HTML kaçışları kontrol edilir. Simgeler Lucide'dan yerel olarak alınmıştır; lisans `assets/LUCIDE-LICENSE` içindedir.

## Calistirma

Statik dosya olarak acilabilir veya lokal server ile calistirilabilir:

```bash
python3 -m http.server 5173
```

Sonra tarayicida `http://localhost:5173` adresini ac.
