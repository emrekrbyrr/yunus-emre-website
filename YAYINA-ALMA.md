# Siteyi yayına alma (emrekirbayir.com)

Site, Kurumum ve diğer projelerle aynı sunucuda (EC2, `3.89.169.178`) nginx üzerinden yayınlanıyor.
Sunucudaki klasör: `/home/ubuntu/emrekirbayir-com/frontend/build`

## 1. Değişikliği yap

Metinlerin çoğu tek bir dosyada: `frontend/src/data/mock.js`

| Ne değişecek | Nerede |
|---|---|
| İsim, unvan, e-posta, telefon, konum, sosyal medya | `mock.js` → `personalInfo` ve `contactInfo` |
| Hakkımda yazısı, istatistikler | `mock.js` → `aboutText`, `stats` |
| Yetenekler | `mock.js` → `skills` |
| Projeler | `mock.js` → `projects` (yeni proje = listeye yeni bir blok) |
| Proje görselleri, profil fotoğrafı | `frontend/public/images/` (kodda `/images/dosya.jpg` diye yazılır) |
| Google'da görünen başlık/açıklama | `frontend/public/index.html` |
| Proje filtre düğmeleri | `frontend/src/components/Projects.jsx` → `categories` |

## 2. Mac'te dene (isteğe bağlı)

```bash
cd ~/Documents/yunus-emre-website/frontend
npx yarn start
```
Tarayıcıda http://localhost:3000 açılır. Kapatmak için terminalde Ctrl+C.

## 3. Yayına al (Mac terminalinde)

```bash
cd ~/Documents/yunus-emre-website/frontend && CI=false npx yarn build && rsync -avz -e "ssh -i ~/Downloads/key1.pem" build/ ubuntu@3.89.169.178:/home/ubuntu/emrekirbayir-com/frontend/build/
```

- nginx'i yeniden başlatmak gerekmez.
- Sonra emrekirbayir.com'u açıp **Cmd+Shift+R** ile yenile.
- "Compiled with warnings" yazısı normaldir; "Failed to compile" yazarsa yayına gitmemiştir, hatayı düzelt.

## 4. GitHub'a kaydet

```bash
cd ~/Documents/yunus-emre-website
git add -A
git commit -m "Ne değiştiğini kısaca yaz"
git push
```

## Notlar

- Sunucu anahtarı: `~/Downloads/key1.pem`. Yeri değişirse komuttaki yolu da değiştir.
- Fotoğraf eklerken telefondan gelen görselleri küçült (1000–1200 px yeterli); iPhone fotoğraflarında konum (GPS) bilgisi olabilir.
