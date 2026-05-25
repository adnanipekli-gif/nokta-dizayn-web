import type { StoreSystem } from '@/lib/types';

/** Mağaza sistemleri — 7 sektör senaryosu (v2) */
export const SOLUTIONS: StoreSystem[] = [
  {
    slug: 'supermarket-hipermarket',
    name: 'Süpermarket & Hipermarket',
    shortDescription:
      'Büyük ölçekli gıda perakendesi için uçtan uca soğutma altyapısı, raf ve reyon sistemleri.',
    longDescription:
      'Süpermarket ve hipermarketler; yüksek ürün çeşitliliği, yoğun müşteri trafiği ve sürekli açık soğuk zincir gerektiren formatlardır. Nokta Dizayn, bu formatlar için doğru kapasite seçimi, enerji verimli ekipman, raf-reyon entegrasyonu ve bütünleşik mağaza konseptiyle çözümler sunar. Uzun koridorlar boyunca dizilen dikey reyonlardan donmuş gıda havuz dolaplarına, kasa üniteleri ve mağaza mobilyalarına kadar tüm bileşenleri tek elden temin edebilirsiniz.',
    icon: 'ShoppingCart',
    benefits: [
      {
        title: 'Entegre proje yönetimi',
        description: 'Tasarımdan kuruluma, soğutmadan raf sistemine tek elden çözüm.',
      },
      {
        title: 'Enerji verimliliği',
        description: 'Modern ekipmanlarla işletme maliyetlerini azaltın.',
      },
      {
        title: 'Geniş ürün yelpazesi',
        description: 'Her mağaza formatına ve bütçeye uygun ekipman seçeneği.',
      },
      {
        title: 'Satış sonrası destek',
        description: 'Bakım anlaşmaları ve hızlı teknik servis ağı.',
      },
    ],
    relatedProducts: [
      'tam-boy-dikey-reyonlar',
      'havuz-tipi-dolaplar',
      'servis-reyonlari',
      'raf-reyon-sistemleri',
      'kasa-checkout-uniteleri',
    ],
  },
  {
    slug: 'mini-market-convenience',
    name: 'Mini Market & Convenience Store',
    shortDescription:
      'Kompakt mağaza formatları için alan verimliliği yüksek soğutma ve reyon sistemleri.',
    longDescription:
      'Mini marketler ve convenience store formatları, sınırlı alan içinde maksimum ürün görünürlüğü ve enerji verimliliği gerektirir. Nokta Dizayn, bu küçük ölçekli formatlar için kompakt soğutma üniteleri, dar koridorlara uygun reyonlar, raf sistemleri ve kasa çözümleri sunar. İstasyon marketlerinden mahalle bakkallarına kadar geniş bir format yelpazesine hitap eden bu çözüm paketi, hem yatırım maliyetini hem de işletme giderini optimize eder.',
    icon: 'Store',
    benefits: [
      {
        title: 'Alan optimizasyonu',
        description: 'Küçük mekânlara uygun kompakt ekipman ve raf tasarımları.',
      },
      {
        title: 'Düşük giriş maliyeti',
        description: 'Küçük ölçekli formatlar için bütçe dostu çözümler.',
      },
      {
        title: 'Hızlı kurulum',
        description: 'Minimal müdahaleyle kısa sürede devreye alma.',
      },
      {
        title: 'Modüler büyüme',
        description: 'Mağaza büyüdükçe sistemi kolayca genişletin.',
      },
    ],
    relatedProducts: [
      'yarim-boy-dikey-reyonlar',
      'dikey-cam-kapili-dolaplar',
      'raf-reyon-sistemleri',
      'kasa-checkout-uniteleri',
    ],
  },
  {
    slug: 'kasap-balik-premium',
    name: 'Kasap, Balık & Premium Gıda',
    shortDescription:
      'Et, balık, sushi ve premium gıda bölümleri için özel tasarımlı servis reyonları ve mağaza düzeni.',
    longDescription:
      'Kasap, balık ve premium gıda bölümleri; sıkı hijyen standartları, özel sıcaklık gereksinimleri ve ürünün görsel sunumuna verilen önem bakımından ayrı bir uzmanlık gerektirir. Nokta Dizayn servis reyonları; paslanmaz çelik yüzeyler, çift camlı kapak seçenekleri, ayrıştırılmış sıcaklık bölgeleri ve LED aydınlatmayla ürünü en iyi şekilde öne çıkarır. Sushi ve deniz ürünleri için özel nemlendirme sistemleri ile balık tezgahları da konfigürasyon seçenekleri arasındadır.',
    icon: 'Fish',
    benefits: [
      {
        title: 'Hijyen standardı',
        description: 'Paslanmaz çelik yapı ve kolay temizlenebilir yüzeyler.',
      },
      {
        title: 'Ürün görünürlüğü',
        description: 'LED aydınlatma ve şeffaf sunum alanları.',
      },
      {
        title: 'Sıcaklık hassasiyeti',
        description: 'Et, balık ve sushi için ayrı sıcaklık bölgeleri.',
      },
      {
        title: 'Özel ölçü üretim',
        description: 'Mağaza ölçülerine göre kustomize üretim.',
      },
    ],
    relatedProducts: ['servis-reyonlari', 'kombine-tip-dolaplar', 'magaza-mobilyalari'],
  },
  {
    slug: 'pastane-kafe-gurme',
    name: 'Pastane, Kafe & Gurme Market',
    shortDescription:
      'Estetik sunum ve fonksiyonel soğutmanın bir arada olduğu premium vitrin ve mağaza çözümleri.',
    longDescription:
      'Pastane, kafe ve gurme marketlerde ürünün sunumu, marka kimliğinin ayrılmaz bir parçasıdır. Nokta Dizayn, bu segmente özel; cam vitrin reyonlar, özel aydınlatma sistemleri, estetik kasa tasarımları ve mağaza mobilyalarıyla mekanın genel mimarisine uyum sağlayan bütünleşik çözümler sunar. Pasta vitrinlerinden gurme peynir reyonlarına, içecek dolaplarından açık büfe servis alanlarına kadar geniş bir yelpazede hizmet verilmektedir.',
    icon: 'Coffee',
    benefits: [
      {
        title: 'Estetik tasarım',
        description: 'Mağaza mimarisine uyumlu özelleştirilebilir görünüm.',
      },
      {
        title: 'Premium sunum',
        description: 'Ürünü en iyi şekilde öne çıkaran vitrin tasarımı.',
      },
      {
        title: 'Çoklu sıcaklık bölgeleri',
        description: 'Farklı ürün grupları için ayrı soğutma bölgeleri.',
      },
      {
        title: 'Mağaza atmosferi',
        description: 'Marka kimliğini yansıtan iç mekan tasarımı ve mobilya seçimi.',
      },
    ],
    relatedProducts: [
      'servis-reyonlari',
      'dikey-cam-kapili-dolaplar',
      'kombine-tip-dolaplar',
      'magaza-mobilyalari',
    ],
  },
  {
    slug: 'petrol-istasyonu',
    name: 'Petrol İstasyonu Market',
    shortDescription:
      'İstasyon marketleri için kompakt, güvenilir ve kolay bakımlı soğutma ve mağaza sistemleri.',
    longDescription:
      'Petrol istasyonu marketleri; 7/24 kesintisiz operasyon, sınırlı bakım imkânı ve kompakt alan gereksinimleriyle ayrı bir kategori oluşturur. Nokta Dizayn, bu zorlu koşullara uygun; yüksek güvenilirlikli, minimum bakım gerektiren ve hızlı servis alınabilen ekipmanlar ile standart mağaza kurulum paketleri sunar. İçecek soğutucularından snack dolaplarına, kasa üniteleri ve raf sistemlerine kadar tüm ihtiyaçlar karşılanır.',
    icon: 'Fuel',
    benefits: [
      {
        title: '7/24 güvenilirlik',
        description: 'Kesintisiz operasyon için yüksek dayanıklılık.',
      },
      {
        title: 'Kolay bakım',
        description: 'Saha personelinin müdahale edebileceği servis kolaylığı.',
      },
      {
        title: 'Hızlı kurulum',
        description: 'Standart paketlerle kısa sürede mağaza açılışı.',
      },
      {
        title: 'Kompakt tasarım',
        description: 'Sınırlı alanlara uygun ekipman ve raf seçenekleri.',
      },
    ],
    relatedProducts: [
      'dikey-cam-kapili-dolaplar',
      'havuz-tipi-dolaplar',
      'raf-reyon-sistemleri',
      'kasa-checkout-uniteleri',
    ],
  },
];
