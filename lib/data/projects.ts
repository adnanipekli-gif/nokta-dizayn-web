import type { ReferenceProject } from '@/lib/types';

export const PROJECTS: ReferenceProject[] = [
  {
    slug: 'gurme-market-dikey-reyon',
    title: 'Gurme Market İçin Enerji Verimli Dikey Reyon Uygulaması',
    sector: 'Gurme Market',
    location: 'İstanbul, Türkiye',
    year: 2023,
    isExport: false,
    usedProducts: ['tam-boy-dikey-reyonlar', 'merkezi-sistemler'],
    clientNeed:
      "Müşteri, yeni açılacak 1.200 m² gurme market mağazasında süt ürünleri, içecek ve hazır yemek bölümleri için enerji verimli, estetik bir soğutma altyapısı talep etti. Marka kimliğiyle uyumlu özel renk ve aydınlatma çözümü beklentisi mevcuttu.",
    solution:
      "Merkezi sistem mimarisiyle bütünleşik, özel RAL boyalı tam boy dikey reyonlar kuruldu. Enerji geri kazanım modülü ile sistemin ısı çıktısı mağaza iklimlendirmesine katkı sağlayacak şekilde tasarlandı. Tüm ekipman 2 haftada kuruluma hazır hale getirildi.",
    results: [
      { label: 'Enerji tasarrufu', value: '%28 (önceki tahmini tüketime göre)' },
      { label: 'Kurulum süresi', value: '18 gün' },
      { label: 'Reyon uzunluğu', value: '48 m' },
    ],
    shortDescription:
      'İstanbul gurme market için merkezi sistemli, özel renk boyalı enerji verimli dikey reyon uygulaması.',
  },
  {
    slug: 'kasap-sarkuteri-ozel-reyon',
    title: 'Kasap & Şarküteri İçin Özel Ölçü Servis Reyonu Projesi',
    sector: 'Kasap & Şarküteri',
    location: 'Ankara, Türkiye',
    year: 2023,
    isExport: false,
    usedProducts: ['servis-reyonlari', 'kombine-tip-dolaplar'],
    clientNeed:
      "Mağaza mimarının çizdiği projeye tam uyum sağlayan, L şeklinde köşeli düzende et ve şarküteri servis reyonları ile ayrı bir peynir ve şarap vitrin bölümü istendi. Mekân sıradışı boyutlara sahipti ve standart ürünler kullanılamıyordu.",
    solution:
      "Mağaza ölçülerine göre özel üretilen 6 m'lik et servis reyonu ve 4 m'lik peynir/şarküteri reyonu kuruldu. Köşe geçişleri için özel imalat köşe modülleri kullanıldı. Tüm montaj, kaplama ve elektrik bağlantıları tek elden tamamlandı.",
    results: [
      { label: 'Toplam reyon uzunluğu', value: '10 m özel üretim' },
      { label: 'Teslim süresi', value: '22 gün (üretim dahil)' },
      { label: 'Servis sıcaklığı hassasiyeti', value: '±0,3°C' },
    ],
    shortDescription:
      "Ankara kasap mağazası için L şeklinde köşeli özel ölçü et ve şarküteri servis reyonu.",
  },
  {
    slug: 'endustriyel-tesis-merkezi-sistem',
    title: 'Endüstriyel Tesis İçin Merkezi Sistem ve Soğuk Oda Çözümü',
    sector: 'Endüstriyel',
    location: 'Bursa, Türkiye',
    year: 2022,
    isExport: false,
    usedProducts: ['merkezi-sistemler', 'soguk-oda-cozumleri', 'chiller-uniteleri'],
    clientNeed:
      "Gıda işleme tesisi, üretim hattında kullandığı soğutma altyapısını yenilemek ve enerji tüketimini azaltmak istedi. Mevcut sistem verimli çalışmıyor, arızalar üretimi sekteye uğratıyordu.",
    solution:
      "4 adet chiller ünitesi, 2 adet walk-in soğuk oda ve 120 kW'lık merkezi kompresör rafı kuruldu. Uzaktan izleme ve alarm sistemi devreye alındı. Yeni sistem, eski sisteme kıyasla %35 daha düşük enerji tüketimiyle aynı soğutma kapasitesini sağlıyor.",
    results: [
      { label: 'Enerji azaltımı', value: '%35' },
      { label: 'Soğuk oda toplam alanı', value: '180 m²' },
      { label: 'Sistem devreye alma', value: '35 gün' },
      { label: 'ROI süresi (tahmini)', value: '2,8 yıl' },
    ],
    shortDescription:
      "Bursa gıda işleme tesisi için 120 kW merkezi sistem, chiller üniteleri ve walk-in soğuk oda yenileme projesi.",
  },
  {
    slug: 'petrol-istasyonu-kompakt',
    title: 'Petrol İstasyonu Marketi İçin Kompakt Soğutma Çözümü',
    sector: 'Petrol İstasyonu',
    location: 'İzmir, Türkiye',
    year: 2024,
    isExport: false,
    usedProducts: ['dikey-cam-kapili-dolaplar', 'havuz-tipi-dolaplar', 'kondenser-uniteleri'],
    clientNeed:
      "Yeni açılan 180 m² istasyon marketi için kompakt, güvenilir ve düşük bakım maliyetli soğutma çözümü gerekiyordu. 7/24 operasyon şartı, bakım personeli yokluğu nedeniyle yüksek güvenilirlik kritik önem taşıyordu.",
    solution:
      "3 kapılı içecek soğutma dolabı, 2 m'lik dondurma haznesi ve harici kondenser ünitesiyle sistemi tamamlandı. Uzaktan sıcaklık izleme sistemi ile istasyon yöneticisi akıllı telefon üzerinden sistemi takip edebiliyor.",
    results: [
      { label: 'Kurulum süresi', value: '5 gün' },
      { label: 'İlk 6 ay arıza', value: 'Sıfır' },
      { label: 'Uzaktan izleme', value: 'Aktif' },
    ],
    shortDescription:
      "İzmir petrol istasyonu marketi için 3 kapılı içecek dolabı, dondurma haznesi ve kondenser üniteli kompakt paket.",
  },
  {
    slug: 'supermarket-zinciri-yenileme',
    title: 'Bölgesel Süpermarket Zinciri Soğutma Yenileme Projesi',
    sector: 'Süpermarket',
    location: 'Konya, Türkiye',
    year: 2023,
    isExport: false,
    usedProducts: [
      'tam-boy-dikey-reyonlar',
      'yarim-boy-dikey-reyonlar',
      'servis-reyonlari',
      'merkezi-sistemler',
    ],
    clientNeed:
      "3 mağazalı bölgesel bir süpermarket zinciri, tüm mağazalarının soğutma ekipmanını tek seferde yenilemek ve standartlaştırmak istedi. Her mağaza 800-1.200 m² büyüklüğünde.",
    solution:
      "3 mağaza için birleşik sipariş ve standart ekipman tasarımı hazırlandı. Her mağazaya merkezi sistem + tam boy dikey reyonlar + yarım boy ada reyonları + et servis reyonu kombinasyonu kuruldu. Yedek parça stoku merkezi olarak yönetiliyor.",
    results: [
      { label: 'Toplam mağaza', value: '3 lokasyon' },
      { label: 'Toplam reyon', value: '180 m' },
      { label: 'Proje süresi', value: '6 hafta (3 mağaza)' },
      { label: 'Ortalama enerji azaltımı', value: '%22' },
    ],
    shortDescription:
      "Konya'da 3 mağazalı süpermarket zinciri için standartlaştırılmış merkezi sistem ve reyon yenileme projesi.",
  },
  {
    slug: 'dubai-market-ihracat',
    title: 'Dubai Süpermarket Zinciri Soğutma ve Reyon Projesi',
    sector: 'Süpermarket',
    location: 'Dubai, BAE',
    year: 2022,
    isExport: true,
    usedProducts: ['tam-boy-dikey-reyonlar', 'servis-reyonlari', 'merkezi-sistemler'],
    clientNeed:
      "Dubai'de büyüyen bir süpermarket zinciri, Türkiye'den temin edeceği soğutma ekipmanıyla 2 yeni mağaza açmayı planladı. Sıcak iklim koşulları için özel sıcaklık sınıfı (ST-T sınıfı) ekipman şartı bulunuyordu.",
    solution:
      "Her iki mağaza için iklim sınıfı 5 (SN-T) reyonlar özel olarak üretildi. Lojistik, gümrük ve montaj koordinasyonu Nokta Dizayn tarafından üstlenildi. Lokal servis ekibiyle bakım anlaşması yapıldı.",
    results: [
      { label: 'Teslim edilen ülke', value: 'BAE, Dubai' },
      { label: 'Mağaza sayısı', value: '2' },
      { label: 'Toplam sevkiyat', value: '3 konteyner' },
      { label: 'Devreye alma süresi', value: '12 gün/mağaza' },
    ],
    shortDescription:
      "Dubai'deki süpermarket zinciri için ST iklim sınıflı soğutma reyonları ihracat ve kurulum projesi.",
  },
  {
    slug: 'pastane-kafe-vitrin',
    title: 'Butik Pastane Zinciri Vitrin ve Soğutma Yenileme',
    sector: 'Pastane & Kafe',
    location: 'Ankara, Türkiye',
    year: 2024,
    isExport: false,
    usedProducts: ['servis-reyonlari', 'dikey-cam-kapili-dolaplar'],
    clientNeed:
      "5 şubeli bir butik pastane zinciri, mağaza marka kimliğiyle uyumlu, estetik ve fonksiyonel vitrin reyonları talep etti. Özellikle yaş pasta, çikolata ve soğuk içecekler için ayrı sunum bölgeleri istendi.",
    solution:
      "Her mağazaya özel boyutlu, marka renginde kaplı cam vitrin reyonlar üretildi. Sıcaklık bölgeleri yaş pastane (+4°C) ve çikolata (+16°C) için ayrıştırıldı. Standart ürünler yerine tam özel imalat tercih edildi.",
    results: [
      { label: 'Şube sayısı', value: '5' },
      { label: 'Vitrin toplam uzunluğu', value: '30 m' },
      { label: 'Özel renk üretimi', value: 'Marka RAL kodu' },
    ],
    shortDescription:
      "Ankara butik pastane zinciri için marka kimliğine uygun özel renk ve boyutlu cam vitrin reyonlar.",
  },
  {
    slug: 'soguk-depo-lojistik',
    title: 'Lojistik Merkezi İçin Soğuk Depo ve Sevkiyat Odaları',
    sector: 'Lojistik',
    location: 'İstanbul, Türkiye',
    year: 2023,
    isExport: false,
    usedProducts: ['soguk-oda-cozumleri', 'chiller-uniteleri', 'merkezi-sistemler'],
    clientNeed:
      "Gıda lojistiği şirketi, yeni kurduğu dağıtım merkezinde farklı sıcaklık gereksinimlerinde (oda sıcaklığı, +2°C ve -18°C) toplam 1.500 m² soğuk depo kapasitesi talep etti.",
    solution:
      "200 mm panelli 3 ayrı soğuk oda inşa edildi: +2°C taze gıda odası (600 m²), -18°C dondurulmuş gıda odası (400 m²) ve +15°C meyve-sebze bekletme odası (500 m²). Her odaya ayrı kompresör sistemi ve uzaktan izleme kuruldu.",
    results: [
      { label: 'Toplam depo alanı', value: '1.500 m²' },
      { label: 'Oda sayısı', value: '3 farklı sıcaklık bölgesi' },
      { label: 'Kurulum süresi', value: '45 gün' },
      { label: 'İzleme sistemi', value: '7/24 uzaktan alarm' },
    ],
    shortDescription:
      "İstanbul lojistik merkezi için 3 farklı sıcaklık bölgesinde toplam 1.500 m² soğuk depo projesi.",
  },
];
