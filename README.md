# 🎯 Deyimi Tahmin Et

Bir hikaye oku veya dinle, hangi Türkçe deyimi anlattığını tahmin et!

## 🛠 Teknolojiler

- **Nuxt 4** — Full-stack Vue framework
- **Nuxt UI** — Hazır UI bileşenleri
- **Tailwind CSS** — Utility-first CSS
- **TypeScript** — Tip güvenliği

## 🎮 Nasıl Oynanır?

1. **Başla** butonuna tıkla
2. Hikaye metnini oku
3. İstersen sesi başlat ve dinle
4. Hangi deyimi anlattığını tahmin et
5. Cevabını yaz ve gönder

## 📁 Proje Yapısı

```
app/
├── components/
│   ├── GameHero.vue        # Ana sayfa
│   ├── GameScreen.vue      # Oyun ekranı (metin + ses + tahmin)
│   └── GameResult.vue      # Sonuç ekranı
├── composables/
│   └── useGame.ts          # Oyun mantığı
├── data/
│   └── stories.ts          # Hikaye verileri
├── pages/
│   └── index.vue           # Sayfa
├── assets/css/
│   └── main.css            # Stiller ve animasyonlar
├── app.vue                 # App shell
└── app.config.ts           # Tema ayarları
public/
└── audio/                  # Ses dosyaları (deyim1.mp3, deyim2.mp3, ...)
```

## 📝 Yeni Hikaye Ekleme

`app/data/stories.ts` dosyasına yeni bir eleman ekle:

```ts
{
  id: 2,
  idiom: 'Deyim adı',
  audio: '/audio/deyim2.mp3',
  text: 'Hikaye metni...'
}
```

Ses dosyasını `public/audio/` klasörüne koy.

## ⚙️ Kurulum

```bash
pnpm install
```

## 🚀 Geliştirme

```bash
pnpm dev
```

Uygulama `http://localhost:3000` adresinde açılır.

## 📦 Production Build

```bash
pnpm build
pnpm preview
```

## 🌐 Deploy (Vercel)

1. GitHub'a push et
2. Vercel'de projeyi import et
3. Otomatik build edilir — ekstra ayar gerekmez
