# 🌍 Skylab Globetrotters

Modern ve yenilikçi kapsül otel konsepti ile benzersiz seyahat deneyimleri sunan turizm platformu.

🌐 **Canlı Site**: [https://skylab-globetrotters.vercel.app/](https://skylab-globetrotters.vercel.app/)

## ✨ Özellikler

- **Modern Kapsül Otel Deneyimi**: Teknoloji ve konforun buluştuğu yenilikçi konaklama çözümleri
- **Dünya Turu Maceraları**: Özenle seçilmiş rotalar ve unutulmaz destinasyonlar
- **Güvenli Seyahat**: 7/24 destek ve deneyimli ekip ile güvenli tur organizasyonları
- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **Modern UI/UX**: Tailwind CSS ile tasarlanmış şık ve kullanıcı dostu arayüz

## 🚀 Teknoloji Yığını

- **Framework**: Next.js 15.5.5 (App Router)
- **UI Framework**: React 19.1.0
- **Styling**: Tailwind CSS v4
- **Icons**: Font Awesome
- **Font**: Space Grotesk (Google Fonts)
- **Language**: TypeScript
- **Package Manager**: pnpm

## 📁 Proje Yapısı

```
src/
├── app/                    # Next.js App Router sayfaları
│   ├── about/             # Hakkımız sayfası
│   ├── gallery/           # Galeri sayfası
│   ├── tours/             # Turlar sayfası
│   ├── layout.tsx         # Ana layout
│   └── page.tsx           # Ana sayfa
├── components/            # React bileşenleri
│   ├── Hero.tsx           # Ana hero bölümü
│   ├── About.tsx          # Hakkımız bileşeni
│   ├── PopularDestinations.tsx # Popüler destinasyonlar
│   ├── PopularServices.tsx     # Popüler hizmetler
│   ├── FeaturedFeatures.tsx    # Öne çıkan özellikler
│   ├── Testimonials.tsx        # Müşteri yorumları
│   ├── BlogSection.tsx         # Blog bölümü
│   └── ...                 # Diğer bileşenler
└── public/                # Statik dosyalar
    └── images/            # Görseller
        ├── destinations/  # Destinasyon görselleri
        ├── capsule-hotels/ # Kapsül otel görselleri
        └── ...
```

## 🛠️ Kurulum ve Çalıştırma

### Gereksinimler
- Node.js 18+ 
- pnpm (önerilen paket yöneticisi)

### Kurulum
```bash
# Bağımlılıkları yükle
pnpm install

# Geliştirme sunucusunu başlat
pnpm dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açarak projeyi görüntüleyebilirsiniz.

### Diğer Komutlar
```bash
# Production build oluştur
pnpm build

# Production sunucusunu başlat
pnpm start
```

## 🌟 Sayfa Yapısı

### Ana Sayfa (`/`)
- Hero slider ile ana tanıtım
- Hakkımız bölümü
- Popüler destinasyonlar
- Popüler hizmetler
- Öne çıkan özellikler
- İstatistikler
- Müşteri yorumları
- Blog bölümü

### Hakkımız (`/about`)
- Şirket bilgileri
- Ekip tanıtımı
- Müşteri yorumları

### Turlar (`/tours`)
- Tur arama kutusu
- Tur kartları grid'i
- Filtreleme seçenekleri

### Galeri (`/gallery`)
- Destinasyon ve kapsül otel görselleri

## 🎨 Tasarım Özellikleri

- **Renk Paleti**: Tailwind CSS'in varsayılan renk paleti
- **Tipografi**: Space Grotesk font ailesi
- **Responsive**: Mobil-first yaklaşım
- **Animasyonlar**: Smooth geçişler ve hover efektleri
- **Modern UI**: Minimalist ve şık tasarım

## 📱 Responsive Tasarım

Proje tüm cihaz boyutlarında optimize edilmiştir:
- **Mobil**: 320px+
- **Tablet**: 768px+
- **Desktop**: 1024px+
- **Large Desktop**: 1280px+

## 🚀 Deployment

### Vercel (Önerilen)
```bash
# Vercel CLI ile deploy
npx vercel

# Veya GitHub ile otomatik deploy
# Repository'yi Vercel'e bağlayın
```

### Diğer Platformlar
- Netlify
- Railway
- DigitalOcean App Platform

## 🤝 Katkıda Bulunma

1. Bu repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje özel lisans altındadır. Tüm hakları saklıdır.

## 📞 İletişim

Proje hakkında sorularınız için lütfen iletişime geçin.

---

**Not**: Bu proje Next.js 15.5.5 ve React 19.1.0 ile geliştirilmiştir. Modern web teknolojilerinin en güncel özelliklerini kullanmaktadır.
