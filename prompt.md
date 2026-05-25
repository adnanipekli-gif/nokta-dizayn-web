# Nokta Dizayn — Kurumsal Web Sitesi Yeniden Tasarımı (v2)

> Claude Code'a verilecek tam kapsamlı geliştirme promptudur.
> v2 değişikliği: Marka **"soğutma şirketi"** değil; **"entegre mağaza sistemleri / store makers"** olarak konumlanır. Tüm anlatım buna göre yeniden yazıldı.

---

## 0. Görev Özeti

`noktadizayn.com.tr` sitesini sıfırdan, **premium B2B endüstriyel kalitede**, kurumsal ve global marka hissi veren bir web sitesi olarak yeniden inşa et.

Nokta Dizayn, **bir ürün satıcısı değil**, market ve perakende alanlarını **konseptten uygulamaya, design-build yaklaşımıyla** kuran bir **entegre mağaza sistemleri** markasıdır. Site bu pozisyonu her bölümde — başlıktan navigasyona, ürün anlatımından case study'ye — yansıtmalı.

**Hedef his:** Umdasch + Schweitzer Project + Wanzl + ITAB + (premium İtalyan tasarım vurgusu için) Criocabin karışımı. Soğuk, mühendislik dilli ama tasarımcı olduğu hissedilen bir B2B.

Site **basit bir katalog değil**; **mağaza operasyonu için tek paydaş** algısı kuran bir kurumsal platformdur.

---

## 1. Marka Konumlandırması ve İçerik Stratejisi

### Stratejik Çekirdek Cümle (Tüm site bu cümle üzerinden yazılır)

> **"Nokta Dizayn; market ve perakende alanlarını konseptten uygulamaya kadar planlayan; dizayn, tasarım, mühendislik, reyon ve soğutmalı teşhir sistemlerini tek proje yaklaşımıyla birleştiren entegre mağaza sistemleri markasıdır."**

Bu cümle "Hakkımızda"da, ana sayfa intro paragrafında ve meta açıklamada birebir veya yakın varyantıyla kullanılır.

### Marka Mesaj Hiyerarşisi

**Ana mesaj (Hero H1 — bu konsepti yansıtan kısa versiyon):**
> "Konseptten Uygulamaya Entegre Mağaza Sistemleri"

**Alternatif H1 önerileri:**
- "Mağazayı Bir Bütün Olarak Kuruyoruz"
- "Market ve Perakendenin Tek Proje Ortağı"
- "Konsept, Tasarım, Üretim, Kurulum, Servis — Tek Çatı Altında"

**Destek mesajı (Hero alt metin):**
> "Nokta Dizayn; market ve perakende alanlarını tasarım, mühendislik, reyon ve soğutmalı teşhir sistemleriyle tek proje yaklaşımı altında planlar, üretir ve sahaya taşır. 2003'ten bu yana 60+ ülkede 30.000+ noktada mağaza operasyonunu destekliyoruz."

### Marka Anlatım Boyutları (Tüm sayfalarda görünür)

1. **Entegre mağaza sistemleri dili** — ürün değil, ekosistem.
2. **Store concept / shopfitting / design-build** — konseptten uygulamaya.
3. **Ürün + çözüm + sektör + proje** kombinasyonu.
4. **Satış alanı performansı** — sales floor productivity, customer experience.
5. **Enerji verimliliği & sürdürülebilirlik** — işletme maliyeti odaklı.
6. **Referanslar case study mantığında** — sadece logo değil, proje hikâyesi.
7. **Premium B2B görsel dili**.

### Güven Unsurları (Tüm sitede tutarlı)

- **2003** — Sektör deneyimi
- **60+** — Ülkeye ihracat
- **30.000+** — Hizmet verilen satış noktası
- **11.000 m²** — Kapalı üretim/hizmet alanı
- **360°** — Konsept, tasarım, mühendislik, üretim, kurulum, servis

### İçerik Dili Kuralları

- Tüm metinler **Türkçe**, kurumsal, teknik, profesyonel, satış odaklı.
- Lorem ipsum **yasak**. Tüm metinler bu spec'e ve Nokta Dizayn iş tanımına göre üretilir.
- "En iyi", "lider", "%100", "benzersiz" gibi ispat gerektiren iddialar **kullanılmaz**.
- Yerine: *"konseptten uygulamaya", "tek proje yaklaşımı", "entegre mağaza sistemleri", "satış alanı performansı", "mühendislik yaklaşımı", "proje bazlı üretim", "satış sonrası destek", "enerji verimliliği", "soğuk zincir bütünlüğü", "global pazarlara çözüm".*

### KULLANILMAYACAK Terimler (Önemli)

Aşağıdaki ifadeler v1'de vardı; v2'de **kaldırıldı**. Site genelinde bu terimler kullanılmaz:

- ❌ "Endüstriyel Soğutma Sistemleri"
- ❌ "Kondenser Üniteleri"
- ❌ "Merkezi Sistem" / "Merkezi Sistemler"
- ❌ "Chiller" / "Chiller Üniteleri"
- ❌ "Soğuk Oda" / "Soğuk Oda Çözümleri"

Bu terimlerin kullanıldığı eski sayfalar, ürün kategorileri ve case study örnekleri tamamen kaldırılacak. Nokta Dizayn artık endüstriyel soğutma değil, **market/perakende için mağaza sistemleri ve soğutmalı teşhir** odaklı konumlanır.

### Rakiplerden Kopya Yasakları

Wanzl, Modern Expo, ITAB, Umdasch, Tegometall, La Fortezza, Cefla/Imola, Arneg, Epta, FREOR, AHT, Criocabin, Oscartielle, Schweitzer Project, Şahinsan dahil **hiçbir rakibin görseli, logosu, metni, slogan dili birebir kopyalanmaz**. İlham alınabilir, taklit edilmez.

---

## 2. Teknik Stack ve Proje Yapısı

### Stack

- **Framework:** Next.js 14+ (App Router, TypeScript, RSC)
- **Stil:** Tailwind CSS + CSS variables
- **Animasyon:** `motion` (Framer Motion) — performans odaklı, sınırlı kullanım
- **Form:** `react-hook-form` + `zod`
- **i18n:** `next-intl` (TR primary, EN ikincil, AR-RTL hazırlığı — detay §3)
- **Icon:** `lucide-react`
- **Görsel:** `next/image`
- **Font:** `next/font/google`
- **SEO:** Next.js Metadata API + sitemap + robots + JSON-LD
- **Linting/Format:** ESLint + Prettier

### 3. Çok Dilli Mimari (i18n)

Site **şu anda Türkçe içerikle yayına çıkar** ama mimari 3 dile hazır kurulur.

**Karar:**
- **Faz 1 (şimdi):** TR içerik dolu, EN/AR yer ayrılmış (placeholder mesaj veya `Coming Soon`).
- **Faz 2 (sonra):** EN içerik yüklenir.
- **Faz 3 (sonra):** AR içerik yüklenir + RTL etkinleştirilir.

**Teknik gereklilikler:**
- URL yapısı: `/`, `/en/`, `/ar/` (locale prefix; default TR prefixsiz).
- Tüm copy `messages/tr.json`, `messages/en.json`, `messages/ar.json` dosyalarına yedirilir. Hardcoded string yok.
- Statik data (`lib/data/`) çok dilli: `{ tr: "...", en: "...", ar: "..." }` yapısı veya locale-keyed dosyalar.
- HTML `lang` ve `dir` attribute'u locale'e göre dinamik (TR/EN → `ltr`, AR → `rtl`).
- Tailwind RTL desteği: `dir`-aware utility'ler (`ms-/me-/ps-/pe-` logical properties) tercih edilir; `ml-/mr-/pl-/pr-` yerine.
- Navbar'da **LanguageSwitcher** componenti — şimdi UI'da olsun, TR aktif, EN/AR disabled görünür (tooltip "Yakında").

### Dosya Yapısı

```
nokta-dizayn/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   ├── page.tsx                          # Ana sayfa
│   │   ├── magaza-sistemleri/                # YENİ: "Çözümler" yerine
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── urunler/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── proje-muhendislik/page.tsx
│   │   ├── referanslar/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── servis-destek/page.tsx
│   │   ├── kurumsal/page.tsx
│   │   ├── surdurulebilirlik/page.tsx
│   │   └── iletisim/page.tsx
│   ├── globals.css
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Breadcrumb.tsx
│   │   └── LanguageSwitcher.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── StatsBar.tsx
│   │   ├── StoreSystemsBlock.tsx             # YENİ
│   │   ├── SectorSolutionCards.tsx
│   │   ├── ProductCategoryGrid.tsx
│   │   ├── ProjectProcessTimeline.tsx        # design-build odaklı
│   │   ├── SustainabilityBlock.tsx
│   │   ├── ProductionPowerBlock.tsx
│   │   ├── FeaturedCaseStudies.tsx
│   │   ├── ServiceSupportBlock.tsx
│   │   └── CTASection.tsx
│   ├── cards/
│   │   ├── ProductCard.tsx
│   │   ├── SolutionCard.tsx
│   │   ├── CaseStudyCard.tsx
│   │   └── ServiceCard.tsx
│   ├── forms/
│   │   ├── QuoteForm.tsx
│   │   ├── ServiceRequestForm.tsx
│   │   ├── ConsultancyForm.tsx
│   │   ├── GeneralContactForm.tsx
│   │   └── FormField.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── TechnicalSpecsTable.tsx
│   │   ├── FilterSidebar.tsx
│   │   ├── Placeholder.tsx
│   │   └── GradientGlow.tsx
│   └── motion/
│       ├── FadeInOnScroll.tsx
│       └── StaggerChildren.tsx
├── lib/
│   ├── data/
│   │   ├── sectors.ts                        # Sektör çözümleri
│   │   ├── products.ts                       # Ürün kategorileri
│   │   ├── caseStudies.ts                    # Referans projeler
│   │   ├── services.ts
│   │   ├── stats.ts
│   │   ├── processSteps.ts
│   │   └── navigation.ts
│   ├── types.ts
│   └── utils.ts
├── messages/
│   ├── tr.json
│   ├── en.json                               # boş, faz 2
│   └── ar.json                               # boş, faz 3
├── i18n.ts                                   # next-intl config
├── middleware.ts                             # locale routing
├── public/placeholders/
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

Kural: tüm statik içerikler `lib/data/` altında TypeScript. Sayfalar bu veriyi import eder.

---

## 4. Tasarım Sistemi

### 4.1 Renk Paleti

```css
:root {
  --color-navy: #071B34;
  --color-blue: #0A6DB8;
  --color-cyan: #11B5FF;
  --color-gray-bg: #E9EEF3;
  --color-metal: #8D99A8;

  --color-navy-900: #04101F;
  --color-navy-700: #0E2647;
  --color-navy-500: #1A3A6B;
  --color-white: #FFFFFF;
  --color-off-white: #F7F9FC;
  --color-border: #D9E1EA;

  --bg-primary: var(--color-white);
  --bg-secondary: var(--color-gray-bg);
  --bg-dark: var(--color-navy);
  --text-primary: var(--color-navy);
  --text-secondary: #475569;
  --text-muted: var(--color-metal);
  --text-on-dark: #E9EEF3;

  --cta-primary-bg: var(--color-blue);
  --cta-primary-bg-hover: #0858A0;
  --cta-secondary-border: var(--color-navy);

  --glow-cyan: 0 0 32px rgba(17, 181, 255, 0.18);
  --glow-cyan-strong: 0 0 48px rgba(17, 181, 255, 0.28);
}
```

**Kurallar:** Beyaz baskın. Navy başlıklar. Blue CTA. Cyan sadece vurgu/hover/glow. Sıcak renk, neon, mor gradient yasak.

### 4.2 Tipografi

`next/font/google` ile yükle:

- **Display (H1, hero, büyük başlık):** `Sora` — 400/600/700 — geometrik, teknik
- **Body (paragraf, UI):** `Inter Tight` — 400/500/600 — okunabilir
- **Mono (teknik değer, eyebrow):** `JetBrains Mono` — 400/500
- **Arapça için:** `Cairo` veya `IBM Plex Sans Arabic` — locale=ar olduğunda otomatik geçer

**Type scale:** (v1 ile aynı, değişmedi)
```
Hero H1:      clamp(2.5rem, 6vw, 5rem)   weight 700, line-height 1.05
Section H2:   clamp(2rem, 4vw, 3.25rem)  weight 700, line-height 1.1
H3:           1.5rem–1.875rem            weight 600
H4:           1.25rem                     weight 600
Body Large:   1.125rem                    weight 400, line-height 1.6
Body:         1rem                        weight 400, line-height 1.65
Small:        0.875rem                    weight 500
Eyebrow:      0.75rem mono                weight 500, uppercase, tracking 0.12em
Stat Number:  clamp(3rem, 6vw, 5rem)      weight 700, Sora
```

Inter, Roboto, Arial gibi jenerik fontlar yasak.

### 4.3 Spacing, Radius, Shadow

(v1 ile aynı; aşağıdakiler kısa hatırlatma)

- Bölüm: `py-24 md:py-32` (büyük), `py-16 md:py-20` (orta)
- Container: `max-w-7xl mx-auto px-6 lg:px-10`
- Radius: buton `rounded-md`, kart `rounded-2xl`
- Shadow: `--shadow-card`, `--shadow-card-hover` (cyan glow ekli), `--shadow-elevated`

### 4.4 Buton ve Kart Sistemleri

(v1 spec'i geçerli — primary blue, secondary outline navy, ghost link cyan hover. Kart hover'da +4px translate + cyan üst kenar)

### 4.5 Placeholder Component

Görsel yokken `<Placeholder>` kullan. Premium SVG: navy→cyan hafif gradient, blueprint grid pattern, ortada Lucide ikon, alt etiket mono font. "Görsel buraya gelecek" yazma; **kategoriye uygun semantik etiket** koy (örn. "MARKET KONSEPT GÖRSELİ", "SERVİS REYONU SAHA").

---

## 5. Animasyon Dili

(v1 ile aynı: smooth easing, 200–800ms aralık, reveal on scroll, button sweep, kart hover'da cyan ışık, stat count-up, `prefers-reduced-motion` kontrolü. Gaming/bounce/3D yok.)

**Yeni vurgu:** Design-build / konsept dilini destekleyen, mağaza planı / blueprint hissi veren **çok hafif ızgara/teknik çizim motion'ları** hero ve süreç bölümünde kullanılır.

---

## 6. Sayfa Yapısı ve Routing

### URL Şeması (Güncellenmiş)

```
/
/magaza-sistemleri                        # Eski "/cozumler" — yeniden adlandırıldı
/magaza-sistemleri/supermarket-hipermarket
/magaza-sistemleri/mini-market-convenience
/magaza-sistemleri/kasap-sarkuteri
/magaza-sistemleri/pastane-kafe-gurme
/magaza-sistemleri/petrol-istasyonu
/magaza-sistemleri/balik-sushi-premium-gida
/magaza-sistemleri/multi-lokasyon-roll-out
/urunler
/urunler/servis-reyonlari
/urunler/tam-boy-dikey-reyonlar
/urunler/yarim-boy-dikey-reyonlar
/urunler/dikey-cam-kapili-dolaplar
/urunler/havuz-tipi-dolaplar
/urunler/kombine-tip-dolaplar
/urunler/raf-ve-reyon-sistemleri           # YENİ — shopfitting
/urunler/kasa-checkout-uniteleri           # YENİ — shopfitting
/urunler/magaza-mobilyalari-ozel-uretim    # YENİ — shopfitting
/proje-muhendislik
/referanslar
/referanslar/[slug]
/servis-destek
/kurumsal
/surdurulebilirlik
/iletisim
```

> **Not:** Yeni eklenen 3 shopfitting kategorisi (raf, kasa, mağaza mobilyası) Nokta Dizayn'ın **entegre mağaza sistemleri** pozisyonunu görsel/içerikçe destekler. Eğer firma bu kategorilerde fiilen ürün üretmiyorsa, bu sayfalar **"Proje Bazlı Özel Üretim"** çerçevesinde anlatılır (özel ölçü, müşteri brief'iyle, mimari ekiple birlikte). Yani satılan ürün değil, sunulan kapasite gibi.

### Navigasyon (Güncellenmiş)

**Ana menü:**
- **Mağaza Sistemleri** ▾ (mega menü: 7 sektör, ikon + 1 cümle açıklama)
- **Ürünler** ▾ (mega menü: 2 grup — "Soğutmalı Teşhir Sistemleri" 6 kategori + "Mağaza Sistemleri" 3 kategori)
- **Proje & Mühendislik**
- **Referanslar**
- **Servis & Destek**
- **Kurumsal** ▾ (Hakkımızda, Üretim Gücü, Sürdürülebilirlik)
- **İletişim**

**Sağ üst:** "Teklif Al" CTA + LanguageSwitcher (TR/EN/AR)

**Mobil:** Hamburger drawer; CTA üstte sticky; accordion kategoriler.

---

## 7. Ana Sayfa Spec'i

### 7.1 Navbar
(v1 spec'i geçerli — sticky, scroll'da beyaza geçiş, logo "NOKTA DIZAYN" + cyan nokta)

### 7.2 Hero Section (Yeniden yazıldı)

**Layout:** Sol 6 kolon içerik + sağ 6 kolon görsel. Mobilde stacked.

**Sol:**
- Eyebrow (mono, cyan): `// STORE MAKERS — KONSEPT, TASARIM, UYGULAMA`
- H1: **"Konseptten Uygulamaya Entegre Mağaza Sistemleri"**
- Alt metin:
  > "Nokta Dizayn; market ve perakende alanlarını tasarım, mühendislik, reyon ve soğutmalı teşhir sistemleriyle tek proje yaklaşımı altında planlar, üretir ve sahaya taşır. 2003'ten bu yana 60+ ülkede 30.000+ noktada mağaza operasyonunu destekliyoruz."
- CTA:
  - Primary: **Projeniz İçin Teklif Alın** → `/iletisim?form=teklif`
  - Secondary: **Mağaza Sistemlerini İnceleyin** → `/magaza-sistemleri`
  - Ghost: **Proje Danışmanlığı** → `/iletisim?form=danismanlik`

**Sağ:**
- Büyük `<Placeholder>` (aspect 4:5) — kategori: "store-concept-overview" (market içi konsept render hissi)
- Subtle cyan glow halo arkada
- Sağ alt yüzen mini info kart (glass, hafif): `MAĞAZA OPERASYONU` / `360°` / `Konsept · Üretim · Kurulum · Servis`

**Arka plan:** Navy→cyan radyal gradient (sağ üst, çok düşük opaklık) + blueprint grid pattern (opacity 0.05) + sol kenarda dikey ince cyan çizgi.

### 7.3 Güven İstatistikleri (StatsBar)
(v1 ile aynı; navy zemin, 5 metrik, count-up animasyonu)

### 7.4 **YENİ Bölüm: Store Makers Anlatımı (StoreSystemsBlock)**

Bu bölüm v1'de yoktu; **entegre mağaza sistemleri pozisyonu için kritik**.

- Eyebrow: `// MAĞAZA OPERASYONU`
- H2: **"Mağazanın Tamamını Bir Bütün Olarak Kuruyoruz"**
- Açıklama (max-w-3xl):
  > "Bir market ya da perakende alanı; konsept tasarımdan reyon yerleşimine, soğutmalı teşhir vitrinlerinden mağaza içi sirkülasyona, malzeme kalitesinden enerji performansına kadar birbirine bağlı kararların toplamıdır. Nokta Dizayn, bu kararları ayrı ayrı değil; tek mühendislik diliyle, tek proje masasında planlar."
- 5 ayaklı blok (yatay timeline veya ikonlu kart dizisi):
  1. **Konsept ve Tasarım** — Mağaza dili, müşteri akışı ve marka deneyimi.
  2. **Mühendislik ve Planlama** — Soğutma yükü, enerji, kapasite, lojistik.
  3. **Üretim** — Soğutmalı teşhir + özel ölçü mağaza ekipmanı.
  4. **Kurulum ve Devreye Alma** — Saha ekibi, devreye alma, eğitim.
  5. **Servis ve Optimizasyon** — Bakım, yedek parça, performans takibi.
- CTA ghost: **Süreci İncele →** `/proje-muhendislik`

### 7.5 Sektör Çözümleri (SectorSolutionCards)

- Eyebrow: `// SEKTÖR ÇÖZÜMLERİ`
- H2: **"Her Mağaza Formatına Uygun Sistem Yaklaşımı"**
- Alt metin (1–2 cümle)
- Grid: 3 kolon desktop, 2 tablet, 1 mobil. **7 sektör.**

Sektörler:
1. **Süpermarket & Hipermarket** — Büyük ölçekli mağaza konsepti, çoklu reyon türü, sirkülasyon planlaması.
2. **Mini Market & Convenience** — Sınırlı alanda yüksek verim; kompakt teşhir.
3. **Kasap & Şarküteri** — Servis reyonu öne çıkan, malzeme ve aydınlatma kritik.
4. **Pastane, Kafe & Gurme Market** — Premium sunum, sıcak/soğuk teşhir karması.
5. **Petrol İstasyonu Marketleri** — 7/24, hızlı tüketim, kompakt çözümler.
6. **Balık, Sushi & Premium Gıda Sergileme** — Yüksek görünürlük, malzeme ve sıcaklık hassasiyeti.
7. **Multi-lokasyon & Roll-out Programları** — Birden fazla şubeye standart kurulum.

(Eski "Endüstriyel Soğutma" ve "Soğuk Oda & Merkezi Sistem" sektörleri **çıkarıldı**.)

Her kart: placeholder görsel, ikon, sektör adı, 2 satır açıklama, "Çözümü İncele →".

### 7.6 Ürün Grupları (ProductCategoryGrid — Yeniden yapılandırıldı)

- Eyebrow: `// ÜRÜN GRUPLARI`
- H2: **"Soğutmalı Teşhir ve Mağaza Sistemleri"**
- İki alt başlık + ürün gridleri:

**A. Soğutmalı Teşhir Sistemleri**
- Servis Reyonları
- Tam Boy Dikey Reyonlar
- Yarım Boy Dikey Reyonlar
- Dikey Cam Kapılı Dolaplar
- Havuz Tipi Dolaplar
- Kombine Tip Dolaplar

**B. Mağaza Sistemleri (Proje Bazlı / Özel Üretim)**
- Raf ve Reyon Sistemleri
- Kasa / Checkout Üniteleri
- Mağaza Mobilyaları & Özel Ölçü Üretim

Grid: 4 kolon desktop, 2 mobil. Her kart kompakt, ikon ortada, hover'da cyan vurgu.

(Eski **Kondenser, Merkezi Sistem, Chiller, Soğuk Oda** kategorileri **çıkarıldı**.)

### 7.7 Proje Süreci (ProjectProcessTimeline — Design-Build odaklı)

- Eyebrow: `// SÜREÇ`
- H2: **"Konseptten Devreye Almaya Tek Proje Yaklaşımı"**
- Yatay (desktop) / dikey (mobil) timeline. **8 adım.**

1. **İhtiyaç Analizi** — Müşteri operasyonu, hedef pazar ve mağaza formatı analiz edilir.
2. **Konsept ve Tasarım** — Mağaza dili, müşteri akışı ve marka deneyimi tasarlanır.
3. **Keşif ve Planlama** — Saha incelemesi, ölçü ve teknik altyapı değerlendirilir.
4. **Mühendislik** — Soğutma yükü, enerji, elektrik ve lojistik hesaplanır.
5. **Üretim** — Soğutmalı teşhir ve mağaza ekipmanları kendi tesislerimizde üretilir.
6. **Lojistik ve Kurulum** — Sahaya teslim, montaj ve devreye alma yapılır.
7. **Devreye Alma ve Eğitim** — Sistem test edilir, operasyon ekibi eğitilir.
8. **Servis ve Optimizasyon** — Bakım, yedek parça ve performans takibi sürdürülür.

### 7.8 Sürdürülebilirlik & Satış Alanı Performansı

(v1 ile yakın; başlık ve odak genişletildi — sadece enerji değil, **sales floor performance**)

- Eyebrow: `// SATIŞ ALANI PERFORMANSI`
- H2: **"Düşük İşletme Maliyeti, Yüksek Satış Alanı Verimi"**
- Açıklama:
  > "Nokta Dizayn; mağazanın tasarımından soğutmalı teşhir vitrinlerine, malzeme seçiminden bakım stratejisine kadar her kararı enerji verimliliği, soğuk zincir bütünlüğü ve satış alanı performansı çerçevesinde planlar. Hedef: işletmenin uzun vadeli toplam sahip olma maliyetini düşürmek, ürün sunumunu güçlendirmek."
- 3 mini metrik: **Düşük Tüketim** / **Uzun Ömür** / **Akıllı İzleme**
- CTA ghost: **Sürdürülebilirlik Yaklaşımımız →** `/surdurulebilirlik`
- Hafif airflow line motion arkada.

### 7.9 Üretim Gücü (ProductionPowerBlock)
(v1 ile aynı — 11.000 m², mühendislik ekibi, kalite kontrol, global ihracat)

### 7.10 Öne Çıkan Case Study'ler (FeaturedCaseStudies — Güncellenmiş başlıklar)

- Eyebrow: `// CASE STUDIES`
- H2: **"Sahada Hayata Geçirdiğimiz Mağaza Projeleri"**
- 3–4 büyük case study kartı.

Örnek başlıklar (yeni — endüstriyel referanslar çıkarıldı):
- "Gurme Market Konsepti — Yerel Marka İçin Bütünleşik Mağaza Tasarımı"
- "Kasap & Şarküteri Konsepti — Servis Reyonu ve Sirkülasyon Planı"
- "Pastane Zinciri Roll-out — 12 Şubede Standart Kurulum"
- "Petrol İstasyonu Marketi — Kompakt Mağaza Sistemi"
- "Balık Reyonu Konsepti — Premium Sunum ve Sıcaklık Yönetimi"

Kart: görsel, mono sektör etiketi, başlık, lokasyon, "Projeyi İncele →".

### 7.11 Servis & Destek Bloğu
(v1 ile aynı; 4 servis kartı + 2 CTA)

### 7.12 Final CTA Section

- Navy zemin + cyan glow.
- H2:
  > **"Yeni mağaza, mağaza yenileme ya da çoklu lokasyon roll-out projeniz için tek paydaşla çalışın."**
- 2 CTA: **Teklif Alın** + **Bizi Arayın**.

### 7.13 Footer
(v1 ile aynı — 5 kolon, KVKK + Dil seçimi alt bar)

---

## 8. Diğer Sayfa Spec'leri

### 8.1 Mağaza Sistemleri (`/magaza-sistemleri`)

- Hero (mini): "Sektör Bazlı Mağaza Sistemleri" + 2 cümle açıklama.
- 7 sektör için alternating layout blok (sol görsel/sağ metin → tersi).
- Her blok: sektör adı (H2), 2–3 paragraf, uygun ürün rozet listesi (refrigerated + shopfitting karması), 4 öne çıkan fayda, **"Sektör Detayı"** CTA.

### 8.2 Sektör Detay (`/magaza-sistemleri/[slug]`)

- Hero
- 4 bölüm:
  - **Bu sektörün operasyonel ihtiyaçları**
  - **Bizim yaklaşımımız** (konsept + ürün + servis)
  - **Uygun ürünler** (ürün kart grid)
  - **İlgili case study'ler** (2–3 kart)
- Sticky kompakt teklif CTA kartı.

### 8.3 Ürünler (`/urunler`)

- Hero (mini): "Soğutmalı Teşhir ve Mağaza Sistemleri" + filtre özeti.
- Sol sticky FilterSidebar:
  - **Ana grup** (Soğutmalı Teşhir / Mağaza Sistemleri)
  - Kullanım alanı
  - Sektör
  - Soğutma tipi (sadece soğutmalı kategoriler için)
- Sağ: 9 kategori kart grid'i (gruplara ayrılmış başlıklarla).

### 8.4 Ürün Kategori Detay (`/urunler/[slug]`)

Şablon (v1 ile aynı yapı):
- Breadcrumb
- Üst hero: ürün başlığı + değer önerisi paragrafı
- Sol görsel galerisi / sağ özellik paneli (kullanım alanları, teknik avantajlar, opsiyonlar, uygun sektörler, 2 CTA)
- Alt: TechnicalSpecsTable + teknik doküman + ilgili ürünler

**Önemli:** Soğutmalı teşhir kategorileri için soğutma performansı, enerji sınıfı, kapasite vb. mono font teknik değerler vurgulanır. Shopfitting kategorileri (raf, kasa, özel üretim) için "proje bazlı özel üretim" anlatımı; teknik tablo yerine **opsiyon ve özelleştirme matrisi** yer alır.

Örnek metin (tam boy dikey reyonlar için):
> "Tam Boy Dikey Reyonlar; süt, içecek, paketli gıda ve soğuk zincir ürünlerinin yüksek görünürlükle sergilenmesi için geliştirilmiş, enerji verimli ve yüksek raf kapasitesine sahip soğutmalı teşhir sistemleridir."

Örnek metin (mağaza mobilyaları için):
> "Mağaza Mobilyaları ve Özel Ölçü Üretim; konsept tasarımdan başlayarak mağazanın kimliğine, sirkülasyonuna ve ürün sunumuna uygun olarak proje bazlı üretilir. Standart katalogla değil, mağazanızın brief'iyle başlarız."

### 8.5 Proje & Mühendislik (`/proje-muhendislik`)

- Hero: "Konseptten Devreye Almaya Tek Proje Ortağı"
- Tam genişlik 8 adımlı süreç (ana sayfadakinin detaylı versiyonu).
- Her adımda 1–2 paragraf + ilgili görsel.
- Mühendislik kapasitesi bölümü (mekanik, soğutma, elektrik, mimari iç ekipler).
- Multi-lokasyon roll-out yaklaşımı için ayrı kısa blok.
- Final CTA: **Projenizi Birlikte Planlayalım**.

### 8.6 Servis & Destek (`/servis-destek`)
(v1 spec'i geçerli — 7 alt başlık, 3 CTA, ServiceRequestForm)

### 8.7 Referanslar (`/referanslar`)

- Hero: "Referans Projeler" + kısa anlatım.
- Filtre bar:
  - Sektör (7 sektör)
  - Ürün grubu
  - Lokasyon
  - Yurt İçi / Yurt Dışı
- Grid: 3 kolon case study kart.

### 8.8 Referans Detay (`/referanslar/[slug]`)

- Hero: proje görseli + başlık + sektör + lokasyon.
- 4 bölüm:
  - **Müşteri ihtiyacı**
  - **Bizim yaklaşımımız** (konsept + tasarım + üretim + kurulum)
  - **Kullanılan ürünler** (kart grid)
  - **Sonuçlar** (mini metrikler: enerji, satış alanı verimi, devreye alma süresi vb.)
- Galeri.
- "Benzer Projeler" carousel.

### 8.9 Kurumsal (`/kurumsal`)

Tek uzun sayfa, scroll-spy sol nav:
- Hakkımızda
- Üretim Gücü
- Kalite Yaklaşımı
- Global Pazarlar (harita placeholder, 60+ ülke noktalanmış)
- Sürdürülebilirlik özeti (link `/surdurulebilirlik`)
- Satış Sonrası Hizmet özeti (link `/servis-destek`)

### 8.10 Sürdürülebilirlik (`/surdurulebilirlik`)

- Hero: "Verimli ve Sorumlu Mağaza Operasyonu"
- Manifesto paragrafı (3–4 cümle).
- 8 konu (icon + başlık + 1 paragraf):
  - Düşük enerji tüketimi
  - Doğru kapasite ve sistem seçimi
  - Soğuk zincir bütünlüğü
  - İşletme maliyetlerini azaltma
  - Uzun ömürlü ekipman
  - Akıllı izleme ve optimizasyon
  - Bakım ile verimliliği koruma
  - Geleceğe uyumlu mağaza sistemleri
- Mini case study: enerji verimliliği örneği.
- CTA: **Mağaza Enerji Değerlendirmesi Talep Edin**.

### 8.11 İletişim (`/iletisim`)

- Hero: "Projenizi Birlikte Planlayalım"
- 4 form tipi seçici:
  1. Teklif Al
  2. Servis Talebi
  3. **Proje Danışmanlığı** (konsept evresi için)
  4. Genel İletişim
- Sağda iletişim bilgi kartı (adres, telefon, e-posta, çalışma saatleri, departman kontakları).
- Altta harita placeholder.

URL paramı ile direkt form açılır: `?form=teklif`, `?form=servis`, `?form=danismanlik`.

---

## 9. Form Tasarımı

(v1 spec'i geçerli — react-hook-form + zod, KVKK zorunlu, başarı state, hata mesajları, dosya yükleme servis formunda)

**Yeni form: ConsultancyForm (Proje Danışmanlığı)**

Alanlar:
- Firma adı *
- Yetkili kişi *
- Telefon *
- E-posta *
- Şehir / ülke
- **Proje evresi** (radio: Yeni Konsept / Mevcut Mağaza Yenileme / Çoklu Lokasyon Roll-out / Diğer)
- **Mağaza formatı** (select: Süpermarket / Mini Market / Kasap-Şarküteri / Pastane-Kafe-Gurme / Petrol İstasyonu / Diğer)
- **Yaklaşık mağaza alanı (m²)** (number)
- **Mesaj / brief** (textarea)
- KVKK *

---

## 10. SEO

### Her sayfada
- title (50–60 karakter), meta description (150–160), Open Graph, Twitter Card, canonical, H1 tek, H2 hiyerarşisi, alt text, `lang="tr"`.

### Örnek metadata (ana sayfa)
```ts
export const metadata = {
  title: "Nokta Dizayn — Entegre Mağaza Sistemleri ve Soğutmalı Teşhir",
  description: "Market ve perakende için konseptten uygulamaya entegre mağaza sistemleri. 2003'ten bu yana 60+ ülkede 30.000+ noktada tasarım, üretim, kurulum ve servis.",
  alternates: { canonical: "https://noktadizayn.com.tr/" }
};
```

### JSON-LD
- Ana sayfa: Organization + WebSite
- Ürün kategorileri: Product
- Referanslar: CreativeWork
- İletişim: ContactPoint

### Sitemap + Robots
`app/sitemap.ts` ve `app/robots.ts` üzerinden.

### Anahtar Kelime Kümeleri (Güncellenmiş)

**Yeni odak (entegre mağaza sistemleri):**
entegre mağaza sistemleri, market mağaza tasarımı, mağaza konsept tasarımı, store concept, shopfitting Türkiye, perakende mağaza ekipmanları, mağaza projeleri, design-build market, mağaza yenileme, multi-lokasyon roll-out

**Mevcut (soğutmalı teşhir):**
ticari buzdolabı, market buzdolabı, soğutmalı teşhir, servis reyonu, şarküteri reyonu, kasap reyonu, dikey reyon, cam kapılı dolap, havuz tipi dolap, kombine dolap, süpermarket soğutma, market ekipmanları, petrol istasyonu market dolapları

**Çıkarılanlar:** endüstriyel soğutma sistemleri, soğuk oda sistemleri, merkezi sistem soğutma, chiller ünitesi, kondenser ünitesi — bu kelimeler artık hedeflenmiyor.

---

## 11. Performans, Responsive, Erişilebilirlik

(v1 spec'i geçerli — Lighthouse ≥90/95/95, LCP <2.5s, prefers-reduced-motion, klavye erişimi, WCAG AA, semantic HTML, skip-to-content link)

**Ek:** RTL desteği için `dir`-aware utility'ler (Tailwind logical properties); AR locale'de tüm layout sağdan sola çalışmalı.

---

## 12. Mock Veri Yapısı

Tüm veriler `lib/data/` altında. Her veri tipinin **i18n hazırlığı** olmalı:

```ts
// lib/data/products.ts
export type LocalizedString = { tr: string; en?: string; ar?: string };

export type ProductGroup = "refrigerated_display" | "store_systems";

export type ProductCategory = {
  slug: string;
  group: ProductGroup;
  name: LocalizedString;
  shortDescription: LocalizedString;
  longDescription: LocalizedString;
  useCases: LocalizedString[];
  technicalAdvantages: LocalizedString[];
  options: LocalizedString[];
  applicableSectors: string[];               // sektör slug'ları
  specs: { label: LocalizedString; value: string }[];
  icon: string;                              // Lucide name
  isCustomProduction?: boolean;              // shopfitting kategorileri için true
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    slug: "tam-boy-dikey-reyonlar",
    group: "refrigerated_display",
    name: { tr: "Tam Boy Dikey Reyonlar" },
    shortDescription: { tr: "Süt, içecek ve paketli gıda için yüksek kapasiteli, enerji verimli dikey soğutmalı teşhir sistemleri." },
    // ...
  },
  {
    slug: "magaza-mobilyalari-ozel-uretim",
    group: "store_systems",
    isCustomProduction: true,
    name: { tr: "Mağaza Mobilyaları ve Özel Ölçü Üretim" },
    shortDescription: { tr: "Mağaza konseptine uygun, proje bazlı özel ölçü tasarım ve üretim." },
    // ...
  },
];
```

Aynı yapıyı `sectors.ts`, `caseStudies.ts`, `services.ts`, `processSteps.ts` için uygula.

**En az 8 örnek case study** üret (yeni başlıklar; endüstriyel soğutma örnekleri **olmadan**).

---

## 13. Kesinlikle Yapılmayacaklar (Güncellenmiş)

- ❌ Rakip sitelerden (Wanzl, Modern Expo, ITAB, Umdasch, Tegometall, La Fortezza, Cefla/Imola, Arneg, Epta, FREOR, AHT, Criocabin, Oscartielle, Schweitzer, Şahinsan) **birebir kopya görsel, logo, metin, slogan**.
- ❌ Lorem ipsum.
- ❌ Mor gradient, neon, parlak sıcak renk.
- ❌ Cookie-cutter ajans template hissi.
- ❌ Sıradan ürün listesi gibi çalışan basit katalog.
- ❌ Inter, Roboto, Arial fontları.
- ❌ Aşırı 3D, bounce, gaming efektleri.
- ❌ **"Endüstriyel Soğutma Sistemleri", "Kondenser Üniteleri", "Merkezi Sistem", "Chiller", "Soğuk Oda" terimleri ve bu kategorilere ait sayfa/ürün/case study.**

---

## 14. Geliştirme Sırası

1. Setup: Next.js + TS + Tailwind + next-intl + fontlar + globals
2. Tasarım sistemi: Renkler, tipografi, Button, SectionHeading, Placeholder, Card, GradientGlow
3. i18n iskeleti: messages/tr.json + locale routing + LanguageSwitcher
4. Layout: Navbar (scroll davranışı), Footer
5. **Ana sayfa (13 bölüm; yeni StoreSystemsBlock dahil)**
6. Mağaza Sistemleri listesi + 7 dinamik sektör detayı
7. Ürünler listesi (2 grup) + 9 dinamik kategori detayı (soğutmalı + shopfitting şablonları farklı)
8. Referanslar listesi (filtre) + en az 8 dinamik detay
9. Proje & Mühendislik
10. Servis & Destek + ServiceRequestForm
11. Sürdürülebilirlik
12. Kurumsal
13. İletişim + 4 form + mock `/api/*` route'lar
14. SEO: sitemap, robots, metadata, JSON-LD
15. Animasyon ince ayarı + reduced-motion
16. A11y geçişi + Lighthouse optimizasyonu

---

## 15. Teslim Çıktısı

- Çalışan, Vercel'e deploy edilebilir **Next.js 14 App Router** projesi
- TR içerikli tüm sayfalar (yukarıdaki liste)
- i18n hazır mimari (EN/AR placeholder)
- Tüm shared componentler ve veriler
- README.md (kurulum, dev, build, locale ekleme)

---

## 16. Referans İlhamlar (Sadece İçsel Yol Gösterici — Kopyalama Yok)

Aşağıda her benchmark için **kavramsal alınacak ders** yazılı. Görsel/metin **birebir alınmaz**. Site inşası sırasında ilham doğrulamak için canlı sitelerine bakılabilir.

| Marka | Alınacak Kavramsal Ders |
|---|---|
| **Wanzl** | Mağaza/perakende ekipmanlarını ayrı ayrı değil **operasyonel ekosistem** olarak sunma dili. Menü mimarisinde sektör + çözüm + ürün üçlüsünün ayrımı. |
| **Modern Expo** | Geniş ürün portföyünü **tek görsel dilde** organize etme. Refrigerated + shelving + checkout + lighting'in birleşik kategori sunumu. |
| **ITAB** | "Rethink Retail" konumlandırması — müşteri deneyimini ve mağaza performansını **ticari değere** çevirme dili. |
| **Umdasch The Store Makers** | "Store Makers" konumlandırması — design + fitting + digital + general contracting'i tek paket olarak satma. **Adlandırma ve paketleme dersi.** |
| **Schweitzer Project** | 360° design-build yaklaşımı. Multi-language ve global roll-out anlatımı. Case study detayında proje kapsamı şeffaflığı. |
| **Arneg** | "Turnkey" project dili — ürün katalogu değil, mağaza çözümü olarak sunum. |
| **Epta** | Sürdürülebilirlik ve servis/retrofit'i ön plana çıkarma. Segment bazlı anlatım. |
| **FREOR** | Ana sayfada metrik vurgusu (yıl, ülke, R290/CO₂). **Bizim 2003 / 60+ / 30.000+ / 11.000 m² metrikleri için ilham.** |
| **AHT** | "Sell more / save energy" — teknik özelliği **ticari faydaya** çeviren dil. Müşteri için sonuç odaklı vaatler. |
| **Criocabin** | Premium İtalyan tasarım dili. Servis reyonunu sadece soğutma ekipmanı değil, **ürünü güçlendiren tasarım objesi** olarak sunma. Aydınlatma ve malzeme hissi. |

**Önemli:** Bu liste sadece kavramsal anlama içindir. Hiçbir görsel, metin, slogan, layout pattern bu sitelerden **birebir** taşınmaz.

---

## 17. Son Söz

Site açıldığında ziyaretçi şunu hissetmeli:

> *"Bu firma sadece soğutmalı dolap satmıyor; market ve perakende için **mağazanın tamamını planlayan, üreten, kuran ve sürdüren bir proje ortağı.**"*

Anahtar fark: Eski site bir **soğutma şirketi** anlatıyor. Yeni site bir **store maker** anlatıyor. Bu farkı her bölümde — başlıkta, kategoride, metinde, animasyonda — koru.

**Soğuk, net, mühendislik kalitesinde; ama tasarımcı olduğu hissedilen bir B2B.**

Başla.
