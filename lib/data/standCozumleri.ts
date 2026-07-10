import type { LocalizedString } from '@/lib/types';

export type StandKategori =
  | 'fuar-standi' | 'kiosk' | 'sergileme'
  | 'shop-in-shop' | 'showroom' | 'ic-mekan';

export type StandGrubu = 'sureli' | 'kalici';

export type StandKapsam =
  | 'konsept-tasarim' | '3d-gorsellestirme' | 'teknik-projelendirme'
  | 'uretim' | 'lojistik' | 'kurulum' | 'sokum-depolama';

export type ReferansStand = {
  slug: string;
  markaAdi?: string;
  sektorEtiketi: LocalizedString;
  baslik: LocalizedString;
  organizasyon?: LocalizedString;
  lokasyon: LocalizedString;
  yil: string;
  aciklama: LocalizedString;
  kapsam: StandKapsam[];
  kategori: StandKategori;
  kapakGorsel: string;
  gorseller: { src: string; alt: LocalizedString }[];
  oneCikan?: boolean;
};

export type StandGaleriItem = {
  id: string;
  src: string;
  alt: LocalizedString;
  kategori: StandKategori;
  etiket: LocalizedString;
};

export type StandYetenek = {
  id: string;
  icon: string;
  baslik: LocalizedString;
  aciklama: LocalizedString;
};

export type StandUygulamaAlani = {
  id: string;
  grup: StandGrubu;
  baslik: LocalizedString;
  aciklama: LocalizedString;
  gorsel: string;
  fallbackLabel: string;
};

export type StandSurecAdimi = {
  no: string;
  baslik: LocalizedString;
  aciklama: LocalizedString;
};

export const KAPSAM_ETIKET: Record<StandKapsam, LocalizedString> = {
  'konsept-tasarim':      { tr: 'Konsept Tasarım' },
  '3d-gorsellestirme':    { tr: '3D Görselleştirme' },
  'teknik-projelendirme': { tr: 'Teknik Projelendirme' },
  'uretim':               { tr: 'Üretim' },
  'lojistik':             { tr: 'Lojistik' },
  'kurulum':              { tr: 'Kurulum' },
  'sokum-depolama':       { tr: 'Söküm & Depolama' },
};

export const STAND_YETENEKLER: StandYetenek[] = [
  {
    id: 'konsept',
    icon: 'PenTool',
    baslik: { tr: 'Konsept ve 3D Tasarım' },
    aciklama: { tr: 'Marka kimliği, ürün sunumu ve ziyaretçi akışı dikkate alınarak stand konsepti geliştirilir. 3D görselleştirme sayesinde standın son hali, üretim başlamadan önce gerçek ölçüleriyle görülür.' },
  },
  {
    id: 'uretim',
    icon: 'Factory',
    baslik: { tr: 'Üretim ve İmalat' },
    aciklama: { tr: 'Stand elemanları kendi üretim altyapımızda, milimetrik toleransla imal edilir. Aydınlatma, cam, metal ve yüzey kaplama entegrasyonu üretim aşamasında tamamlanır.' },
  },
  {
    id: 'nakliye',
    icon: 'Truck',
    baslik: { tr: 'Nakliye ve Kurulum' },
    aciklama: { tr: 'Yurt içi ve yurt dışı fuar alanlarına lojistik planlaması yapılır. Kurulum, kendi montaj ekibimiz tarafından fuar takvimine uygun şekilde gerçekleştirilir.' },
  },
  {
    id: 'sokum',
    icon: 'Package',
    baslik: { tr: 'Söküm ve Depolama' },
    aciklama: { tr: 'Fuar sonrası söküm, modüler stand elemanlarının korunacak biçimde ambalajlanması ve talep halinde bir sonraki organizasyona kadar depolanması hizmet kapsamındadır.' },
  },
];

export const STAND_UYGULAMA_ALANLARI: StandUygulamaAlani[] = [
  { id: 'fuar-standi',  grup: 'sureli',  baslik: { tr: 'Fuar Standı' },                     aciklama: { tr: 'Uluslararası ve yurt içi fuarlar için özel tasarım standlar. Modüler kurgu, standın farklı organizasyonlarda yeniden kullanılmasına olanak sağlar.' }, gorsel: '/stand-sistemleri/1.png',  fallbackLabel: 'Fuar Standı' },
  { id: 'kiosk',        grup: 'sureli',  baslik: { tr: 'Kiosk ve Ada Sistem' },              aciklama: { tr: 'AVM içi satış noktaları, ada standlar ve kompakt marka temsil alanları. Sınırlı alanda yüksek görünürlük ve operasyon verimliliği hedeflenir.' }, gorsel: '/stand-sistemleri/25.png', fallbackLabel: 'Kiosk ve Ada Sistem' },
  { id: 'sergileme',    grup: 'sureli',  baslik: { tr: 'Ürün Sergileme Üniteleri' },         aciklama: { tr: 'Satış noktası sergileme üniteleri, kampanya standları ve tanıtım gondolları. Seri üretilebilir, taşınabilir ve dayanıklı yapılar.' }, gorsel: '/stand-sistemleri/3.png',  fallbackLabel: 'Sergileme Ünitesi' },
  { id: 'shop-in-shop', grup: 'kalici',  baslik: { tr: 'Shop-in-Shop Alanları' },            aciklama: { tr: 'Mağaza içinde konumlanan marka bölümleri. Ana mağaza mimarisiyle uyumlu, ancak marka kimliğini net biçimde ayıran çözümler geliştirilir.' }, gorsel: '/stand-sistemleri/10.png', fallbackLabel: 'Shop-in-Shop' },
  { id: 'showroom',     grup: 'kalici',  baslik: { tr: 'Showroom ve Marka Deneyim Alanı' }, aciklama: { tr: 'Ürünün deneyimlendiği kalıcı mekânlar. Aydınlatma, malzeme ve sirkülasyon kararları marka diliyle birlikte kurgulanır.' }, gorsel: '/stand-sistemleri/9.png',  fallbackLabel: 'Showroom' },
  { id: 'ic-mekan',     grup: 'kalici',  baslik: { tr: 'Kurumsal Tanıtım ve İç Mekân' },    aciklama: { tr: 'Toplantı odaları, resepsiyon alanları ve kurumsal karşılama mekânları için özel ölçü üretim ve uygulama.' }, gorsel: '/stand-sistemleri/17.png', fallbackLabel: 'İç Mekân' },
];

export const STAND_SUREC: StandSurecAdimi[] = [
  { no: '01', baslik: { tr: 'Brief ve Alan Analizi' },      aciklama: { tr: 'Alan ölçüleri, teknik kısıtlar, komşu stand konumları ve organizatör kuralları değerlendirilir.' } },
  { no: '02', baslik: { tr: 'Konsept ve 3D Tasarım' },      aciklama: { tr: 'Marka diline uygun stand konsepti geliştirilir, 3D görselleştirmeyle onaya sunulur.' } },
  { no: '03', baslik: { tr: 'Teknik Projelendirme' },       aciklama: { tr: 'Taşıyıcı sistem, elektrik altyapısı, aydınlatma ve montaj detayları çizime dökülür.' } },
  { no: '04', baslik: { tr: 'Üretim' },                     aciklama: { tr: 'Stand elemanları üretilir, fabrikada ön kurulum ve kontrol yapılır.' } },
  { no: '05', baslik: { tr: 'Lojistik ve Kurulum' },        aciklama: { tr: 'Alana sevkiyat ve montaj ekibi tarafından kurulum; organizatör onayına hazır teslim.' } },
  { no: '06', baslik: { tr: 'Söküm ve Depolama' },          aciklama: { tr: 'Organizasyon sonrası kontrollü söküm, ambalajlama ve talep halinde depolama.' } },
];

export const REFERANS_STANDLAR: ReferansStand[] = [
  {
    slug: 'euroshop-fuar-standi',
    markaAdi: undefined,
    sektorEtiketi: { tr: 'Perakende Ekipmanları Fuarı' },
    baslik: { tr: 'EuroShop — Modüler Çok Konseptli Fuar Standı' },
    organizasyon: { tr: 'EuroShop' },
    lokasyon: { tr: 'Düsseldorf, Almanya' },
    yil: '2023',
    aciklama: { tr: 'Dünyanın önde gelen perakende ekipmanları fuarı EuroShop\'ta tasarlanan ve üretilen modüler fuar standı; Bakery, Greengrocer, Pharmacy, Bathroom ve Unit Parts gibi farklı perakende kategorilerini bütünleşik bir sergileme alanında bir araya getiriyor. Her bölüm, konseptten üretime tek bir sorumluluk altında tamamlandı.' },
    kapsam: ['konsept-tasarim', '3d-gorsellestirme', 'teknik-projelendirme', 'uretim', 'lojistik', 'kurulum', 'sokum-depolama'],
    kategori: 'fuar-standi',
    kapakGorsel: '/stand-sistemleri/5.png',
    gorseller: [
      { src: '/stand-sistemleri/1.png', alt: { tr: 'EuroShop fuar standı — Bakery bölümü, LED çerçeveli ekmek sergileme modülü' } },
      { src: '/stand-sistemleri/2.png', alt: { tr: 'EuroShop fuar standı — genel görünüm' } },
      { src: '/stand-sistemleri/3.png', alt: { tr: 'EuroShop fuar standı — Unit Parts ürün sergileme paneli' } },
      { src: '/stand-sistemleri/4.png', alt: { tr: 'EuroShop fuar standı — Pharmacy bölümü, eczane raf sistemi' } },
      { src: '/stand-sistemleri/5.png', alt: { tr: 'EuroShop fuar standı — Greengrocer bölümü, ahşap lamelli manav ünitesi' } },
      { src: '/stand-sistemleri/6.png', alt: { tr: 'EuroShop fuar standı — detay görünüm' } },
      { src: '/stand-sistemleri/7.png', alt: { tr: 'EuroShop fuar standı — Bathroom bölümü, banyo ürünleri sergileme ünitesi' } },
      { src: '/stand-sistemleri/8.png', alt: { tr: 'EuroShop fuar standı — stand genel planı' } },
    ],
    oneCikan: true,
  },
  {
    slug: 'philips-sonicare-tanitim',
    markaAdi: 'PHILIPS',
    sektorEtiketi: { tr: 'Kişisel Bakım' },
    baslik: { tr: 'Philips Sonicare — Tanıtım ve Deneyim Standı' },
    organizasyon: { tr: 'Tüketici Elektroniği Etkinliği' },
    lokasyon: { tr: 'Türkiye' },
    yil: '2022',
    aciklama: { tr: 'Philips Sonicare diş fırçası serisinin tanıtıldığı büyük alan standı; ürün deneyim istasyonları, dijital ekranlar ve marka kimliğiyle bütünleşik bir sergileme alanı olarak kurgulandı. LED aydınlatma ve teal renk paleti standı fuar alanında öne çıkarıyor.' },
    kapsam: ['konsept-tasarim', 'uretim', 'kurulum', 'sokum-depolama'],
    kategori: 'fuar-standi',
    kapakGorsel: '/stand-sistemleri/20.png',
    gorseller: [
      { src: '/stand-sistemleri/20.png', alt: { tr: 'Philips Sonicare tanıtım standı — teal aydınlatmalı geniş alan görünümü' } },
    ],
    oneCikan: false,
  },
  {
    slug: 'makbul-showroom',
    markaAdi: 'MAKBUL',
    sektorEtiketi: { tr: 'Perakende Showroom' },
    baslik: { tr: 'Makbul — Showroom ve Mağaza İç Mekânı' },
    organizasyon: { tr: 'Kalıcı Uygulama' },
    lokasyon: { tr: 'İstanbul, Türkiye' },
    yil: '2023',
    aciklama: { tr: 'Makbul markası için tasarlanan ve uygulanan showroom; Coffee & Talk bölümü, manav raf sistemi ve bakkal üniteleriyle mağaza konseptini bütünleşik biçimde sunan kalıcı bir tanıtım alanına dönüştürüldü.' },
    kapsam: ['konsept-tasarim', '3d-gorsellestirme', 'uretim', 'kurulum'],
    kategori: 'showroom',
    kapakGorsel: '/stand-sistemleri/10.png',
    gorseller: [
      { src: '/stand-sistemleri/10.png', alt: { tr: 'Makbul showroom — Coffee & Talk bölümü ve genel iç mekân görünümü' } },
      { src: '/stand-sistemleri/9.png',  alt: { tr: 'Makbul showroom — raf detayları, üretim ve kurulum aşamaları' } },
    ],
    oneCikan: false,
  },
  {
    slug: 'avm-kiosk-kafe',
    markaAdi: undefined,
    sektorEtiketi: { tr: 'AVM Kafe Kiosku' },
    baslik: { tr: 'AVM Kafe — Modüler Ada Kiosk' },
    organizasyon: { tr: 'AVM Uygulaması' },
    lokasyon: { tr: 'Türkiye' },
    yil: '2022',
    aciklama: { tr: 'AVM içinde konumlanan cafe kioskunun 3D konsept tasarımı ve üretimi. Lamelli ahşap cephe, cam vitrinden oluşan karşılama tezgahı ve üst kat oturma terası sınırlı alanda kapsamlı bir deneyim sunuyor.' },
    kapsam: ['konsept-tasarim', '3d-gorsellestirme', 'uretim', 'kurulum'],
    kategori: 'kiosk',
    kapakGorsel: '/stand-sistemleri/15.png',
    gorseller: [
      { src: '/stand-sistemleri/15.png', alt: { tr: 'AVM kafe kiosku — 3D render, lamelli ahşap cephe ve oturma alanı' } },
    ],
    oneCikan: false,
  },
];

export const STAND_GALERI: StandGaleriItem[] = [
  { id: 'g01', src: '/stand-sistemleri/1.png',  alt: { tr: 'EuroShop fuarı — Bakery bölümü stand modülü' },       kategori: 'fuar-standi',  etiket: { tr: 'Fuar Standı' } },
  { id: 'g02', src: '/stand-sistemleri/3.png',  alt: { tr: 'EuroShop fuarı — Unit Parts sergileme paneli' },       kategori: 'sergileme',    etiket: { tr: 'Sergileme' } },
  { id: 'g03', src: '/stand-sistemleri/5.png',  alt: { tr: 'EuroShop fuarı — Greengrocer manav ünitesi' },         kategori: 'fuar-standi',  etiket: { tr: 'Fuar Standı' } },
  { id: 'g04', src: '/stand-sistemleri/7.png',  alt: { tr: 'EuroShop fuarı — Bathroom sergileme modülü' },         kategori: 'sergileme',    etiket: { tr: 'Sergileme' } },
  { id: 'g05', src: '/stand-sistemleri/9.png',  alt: { tr: 'Makbul showroom — raf sistemi detay ve kurulum' },     kategori: 'showroom',     etiket: { tr: 'Showroom' } },
  { id: 'g06', src: '/stand-sistemleri/10.png', alt: { tr: 'Makbul showroom — Coffee & Talk ve iç mekân' },        kategori: 'showroom',     etiket: { tr: 'Showroom' } },
  { id: 'g07', src: '/stand-sistemleri/11.png', alt: { tr: 'Modüler stand konsept tasarımı — 3D render' },         kategori: 'fuar-standi',  etiket: { tr: 'Fuar Standı' } },
  { id: 'g08', src: '/stand-sistemleri/12.png', alt: { tr: 'Ürün sergileme ünitesi tasarımı' },                    kategori: 'sergileme',    etiket: { tr: 'Sergileme' } },
  { id: 'g09', src: '/stand-sistemleri/13.png', alt: { tr: 'Stand tasarım detayı' },                               kategori: 'fuar-standi',  etiket: { tr: 'Fuar Standı' } },
  { id: 'g10', src: '/stand-sistemleri/14.png', alt: { tr: 'Kiosk tasarım konsepti — 3D render' },                 kategori: 'kiosk',        etiket: { tr: 'Kiosk' } },
  { id: 'g11', src: '/stand-sistemleri/15.png', alt: { tr: 'AVM kafe kioskunun 3D render tasarımı' },              kategori: 'kiosk',        etiket: { tr: 'Kiosk' } },
  { id: 'g12', src: '/stand-sistemleri/16.png', alt: { tr: 'Stand uygulaması — kurulum aşaması' },                 kategori: 'fuar-standi',  etiket: { tr: 'Fuar Standı' } },
  { id: 'g13', src: '/stand-sistemleri/17.png', alt: { tr: 'İç mekân uygulaması — kurumsal alan' },                kategori: 'ic-mekan',     etiket: { tr: 'İç Mekân' } },
  { id: 'g14', src: '/stand-sistemleri/18.png', alt: { tr: 'Sergileme ünitesi detay çekimi' },                     kategori: 'sergileme',    etiket: { tr: 'Sergileme' } },
  { id: 'g15', src: '/stand-sistemleri/19.png', alt: { tr: 'Stand tasarım ve uygulama' },                          kategori: 'fuar-standi',  etiket: { tr: 'Fuar Standı' } },
  { id: 'g16', src: '/stand-sistemleri/20.png', alt: { tr: 'Philips Sonicare büyük alan tanıtım standı' },         kategori: 'fuar-standi',  etiket: { tr: 'Fuar Standı' } },
  { id: 'g17', src: '/stand-sistemleri/21.png', alt: { tr: 'AVM kiosk uygulaması' },                               kategori: 'kiosk',        etiket: { tr: 'Kiosk' } },
  { id: 'g18', src: '/stand-sistemleri/22.png', alt: { tr: 'Marka temsil alanı — shop-in-shop' },                  kategori: 'shop-in-shop', etiket: { tr: 'Shop-in-Shop' } },
  { id: 'g19', src: '/stand-sistemleri/23.png', alt: { tr: 'Shop-in-shop uygulama detayı' },                       kategori: 'shop-in-shop', etiket: { tr: 'Shop-in-Shop' } },
  { id: 'g20', src: '/stand-sistemleri/24.png', alt: { tr: 'Ürün tanıtım standı uygulaması' },                     kategori: 'sergileme',    etiket: { tr: 'Sergileme' } },
  { id: 'g21', src: '/stand-sistemleri/25.png', alt: { tr: 'illy kafe kiosku — tekerlekli mobil satış noktası' },  kategori: 'kiosk',        etiket: { tr: 'Kiosk' } },
  { id: 'g22', src: '/stand-sistemleri/26.png', alt: { tr: 'Showroom uygulama görünümü' },                         kategori: 'showroom',     etiket: { tr: 'Showroom' } },
  { id: 'g23', src: '/stand-sistemleri/27.png', alt: { tr: 'Marka alanı uygulaması' },                             kategori: 'shop-in-shop', etiket: { tr: 'Shop-in-Shop' } },
  { id: 'g24', src: '/stand-sistemleri/28.png', alt: { tr: 'Stand uygulaması genel görünüm' },                     kategori: 'fuar-standi',  etiket: { tr: 'Fuar Standı' } },
];
