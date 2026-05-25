export type ProductVariant = {
  code: string;
  label: string;
};

export type CatalogProduct = {
  slug: string;
  variants: ProductVariant[];
  images: string[];
  description: string;
};

export type ProductSubCategory = {
  slug: string;
  name: string;
  products: CatalogProduct[];
};

export type ProductMainGroup = {
  slug: string;
  name: string;
  tagline: string;
  subCategories: ProductSubCategory[];
};

export const PRODUCT_CATALOG: ProductMainGroup[] = [
  // ────────────────────────────────────────────────
  // REMOTE
  // ────────────────────────────────────────────────
  {
    slug: 'remote',
    name: 'Remote',
    tagline: 'Merkezi soğutma sistemine bağlı yüksek kapasite çözümleri',
    subCategories: [
      {
        slug: 'remote-sutluk',
        name: 'Remote Sütlük',
        products: [
          {
            slug: 'merga-fg-dgd',
            variants: [{ code: 'MERGA FG-DGD', label: 'Flat Glass — Double Glass Door' }],
            images: ['/nokta-dizayn-urunler-gorselleri/remote-sutluk-merga/merga-fg-dgd.png'],
            description: "Düz camlı çift cam kapı konfigürasyonuyla maksimum ürün görünürlüğü sağlayan merkezi sistemli sütlük reyonu. Süt ürünleri, içecek ve soğutulmuş paket gıdalar için geliştirilmiştir.",
          },
          {
            slug: 'merga-fg-pdgd',
            variants: [{ code: 'MERGA FG-PDGD', label: 'Flat Glass — Partially Double Glass Door' }],
            images: ['/nokta-dizayn-urunler-gorselleri/remote-sutluk-merga/merga-fg-pdgd.png'],
            description: "Kısmen çift camlı kapı yapısıyla enerji tasarrufu ve estetik görünümü bir arada sunan merkezi sistemli sütlük reyonu.",
          },
          {
            slug: 'merga-t-dgd',
            variants: [{ code: 'MERGA T-DGD', label: 'T-Profile — Double Glass Door' }],
            images: ['/nokta-dizayn-urunler-gorselleri/remote-sutluk-merga/merga-t-dgd.png'],
            description: "T profilli gövde tasarımıyla artırılmış raf kapasitesi sunan çift cam kapılı sütlük reyonu. Yüksek hacimli teşhir için idealdir.",
          },
          {
            slug: 'merga-dgd',
            variants: [{ code: 'MERGA DGD', label: 'Double Glass Door' }],
            images: ['/nokta-dizayn-urunler-gorselleri/remote-sutluk-merga/merga-dgd.png'],
            description: "Standart çift cam kapılı sütlük reyonu. Geniş ürün yelpazesi için esnek raf düzeni ve merkezi sistem entegrasyonu.",
          },
          {
            slug: 'merga-nc',
            variants: [{ code: 'MERGA NC', label: 'No Cabinet' }],
            images: ['/nokta-dizayn-urunler-gorselleri/remote-sutluk-merga/merga-nc.png'],
            description: "Kabinetsiz açık raf yapısıyla yoğun müşteri trafiğine uygun sütlük reyonu. Self-servis kullanım ve kolay erişim için tasarlanmıştır.",
          },
          {
            slug: 'merga-fv',
            variants: [{ code: 'MERGA FV', label: 'Full View' }],
            images: ['/nokta-dizayn-urunler-gorselleri/remote-sutluk-merga/merga-fv.png'],
            description: "Tam görünümlü cam yapısıyla maksimum teşhir etkisi sunan merkezi sistemli sütlük reyonu. Ürünlerin tüm cepheden görünürlüğünü sağlar.",
          },
        ],
      },
      {
        slug: 'remote-sarkuteri',
        name: 'Remote Şarküteri',
        products: [
          {
            slug: 'navi-fg-cg',
            variants: [
              { code: 'NAVI FG', label: 'Flat Glass' },
              { code: 'NAVI CG', label: 'Curved Glass' },
            ],
            images: ['/nokta-dizayn-urunler-gorselleri/remote-sarkuteri-navi-flat/navi-flat-fg-navi-flat-cg.png'],
            description: "Düz ve kavisli cam seçenekleriyle profesyonel şarküteri teşhiri için geliştirilmiş remote sistemli reyon. İşlenmiş et, peynir, zeytin ve hazır yemekler için idealdir.",
          },
          {
            slug: 'navi-flat-ss-bm',
            variants: [
              { code: 'NAVI FLAT SS.FG', label: 'Self Service Flat Glass' },
              { code: 'NAVI FLAT SS.CG', label: 'Self Service Curved Glass' },
              { code: 'NAVI FLAT BM', label: 'Bain Marie' },
            ],
            images: ['/nokta-dizayn-urunler-gorselleri/remote-sarkuteri-navi-flat/navi-flat-ssfg-sscg-bm.png'],
            description: "Self-servis ve Bain Marie konfigürasyonlarıyla çok amaçlı kullanım sunan şarküteri reyonu. Müşteri erişimini kolaylaştıran açık kapı tasarımı ve sıcak servis imkânı.",
          },
          {
            slug: 'navi-hypnos-fg',
            variants: [{ code: 'NAVI HYPNOS FG', label: 'Flat Glass' }],
            images: [
              '/nokta-dizayn-urunler-gorselleri/remote-sarkuteri-navi-hypnos/navi-hypnos-fg.png',
              '/nokta-dizayn-urunler-gorselleri/remote-sarkuteri-navi-hypnos/navi-hpnos-gercekci.png',
              '/nokta-dizayn-urunler-gorselleri/remote-sarkuteri-navi-hypnos/navi-hypnos-corners.png',
            ],
            description: "Premium düz camlı şarküteri reyonu. Köşe modülleri ve bütünleşik mağaza içi konfigürasyon seçenekleriyle yüksek estetik ve fonksiyonel çözüm sunar.",
          },
          {
            slug: 'navi-hypnos-cg',
            variants: [{ code: 'NAVI HYPNOS CG', label: 'Curved Glass' }],
            images: [
              '/nokta-dizayn-urunler-gorselleri/remote-sarkuteri-navi-hypnos/navi-hypnos-cg.png',
              '/nokta-dizayn-urunler-gorselleri/remote-sarkuteri-navi-hypnos/navi-hpnos-gercekci.png',
              '/nokta-dizayn-urunler-gorselleri/remote-sarkuteri-navi-hypnos/navi-hypnos-corners.png',
            ],
            description: "Kavisli cam cephesiyle premium estetiği ön plana çıkaran yüksek performanslı şarküteri reyonu. Köşe modülleri ile sürekli hat oluşturulabilir.",
          },
        ],
      },
      {
        slug: 'remote-derin-dondurucu',
        name: 'Remote Derin Dondurucu',
        products: [
          {
            slug: 'grafias-tgd',
            variants: [{ code: 'GRAFIAS TGD', label: 'Triple Glass Door' }],
            images: ['/nokta-dizayn-urunler-gorselleri/remote-derin-dondurucu-grafias/grafias-tgd.png'],
            description: "Üçlü cam kapılı remote sistemli derin dondurucu. Yüksek soğutma kapasitesi ve geniş iç hacmiyle dondurulmuş gıda teşhiri için profesyonel çözüm.",
          },
        ],
      },
      {
        slug: 'remote-yatay-freezer',
        name: 'Remote Yatay Freezer',
        products: [
          {
            slug: 'baham',
            variants: [{ code: 'BAHAM', label: '' }],
            images: ['/nokta-dizayn-urunler-gorselleri/remote-yatay-freezer-baham-izar/remote-yatay-freezer-baham.png'],
            description: "Remote sistemli yatay açık freezer. Geniş iç hacim ve üstten kolay erişim yapısıyla dondurulmuş ürünlerin yüksek hızlı satışı için tasarlanmıştır.",
          },
          {
            slug: 'izar',
            variants: [{ code: 'IZAR', label: '' }],
            images: ['/nokta-dizayn-urunler-gorselleri/remote-yatay-freezer-baham-izar/remote-yatay-freezer-izar.png'],
            description: "Remote sistemli yatay açık freezer. Kompakt tasarımı ve yüksek soğutma performansıyla sınırlı alanlarda etkin kullanım sağlar.",
          },
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────
  // PLUG-IN
  // ────────────────────────────────────────────────
  {
    slug: 'plug-in',
    name: 'Plug-In',
    tagline: "Bağımsız kompresörlü, kolay kurulum ve esnek yerleşim",
    subCategories: [
      {
        slug: 'plug-in-sutluk',
        name: 'Plug-In Sütlük',
        products: [
          {
            slug: 'gatria-fg-dgd',
            variants: [{ code: 'GATRIA FG-DGD', label: 'Flat Glass — Double Glass Door' }],
            images: ['/nokta-dizayn-urunler-gorselleri/plug-in-sutluk-gatria/gatria-fg-dgd.png'],
            description: "Kendinden motorlu kompresörüyle ekstra tesisat gerektirmeyen düz camlı çift kapılı sütlük reyonu. Kurulum kolaylığı ve yüksek enerji verimliliği bir arada.",
          },
          {
            slug: 'gatria-fg-pdgd',
            variants: [{ code: 'GATRIA FG-PDGD', label: 'Flat Glass — Partially Double Glass Door' }],
            images: ['/nokta-dizayn-urunler-gorselleri/plug-in-sutluk-gatria/gatria-fg-pdgd.png'],
            description: "Kısmen çift camlı kapı tasarımıyla enerji optimizasyonu sağlayan plug-in sütlük reyonu. Hazır kurulum, merkezi sistem bağımsızlığı.",
          },
          {
            slug: 'gatria-t-dgd',
            variants: [{ code: 'GATRIA T-DGD', label: 'T-Profile — Double Glass Door' }],
            images: ['/nokta-dizayn-urunler-gorselleri/plug-in-sutluk-gatria/gatria-t-dgd.png'],
            description: "T profilli gövde ve çift cam kapı konfigürasyonuyla artırılmış raf kapasitesi sunan plug-in sütlük reyonu.",
          },
          {
            slug: 'gatria-dgd',
            variants: [{ code: 'GATRIA DGD', label: 'Double Glass Door' }],
            images: ['/nokta-dizayn-urunler-gorselleri/plug-in-sutluk-gatria/gatria-dgd.png'],
            description: "Standart çift cam kapılı plug-in sütlük reyonu. Bağımsız kompresörüyle herhangi bir konuma kolaylıkla yerleştirilebilir.",
          },
          {
            slug: 'gatria-nc',
            variants: [{ code: 'GATRIA NC', label: 'No Cabinet' }],
            images: ['/nokta-dizayn-urunler-gorselleri/plug-in-sutluk-gatria/gatrria-nc.png'],
            description: "Kabinetsiz açık raf yapısıyla self-servis kullanım için optimize edilmiş plug-in sütlük reyonu. Yoğun müşteri trafiğinde pratik erişim sağlar.",
          },
          {
            slug: 'gatria-fv',
            variants: [{ code: 'GATRIA FV', label: 'Full View' }],
            images: ['/nokta-dizayn-urunler-gorselleri/plug-in-sutluk-gatria/gatria-fv.png'],
            description: "Tam görünümlü cam cephesiyle maksimum teşhir etkisi sunan plug-in sütlük reyonu. Bağımsız kompresör, kolay yerleşim.",
          },
        ],
      },
      {
        slug: 'plug-in-sarkuteri',
        name: 'Plug-In Şarküteri',
        products: [
          {
            slug: 'sadira-fg',
            variants: [{ code: 'SADIRA FG', label: 'Flat Glass' }],
            images: ['/nokta-dizayn-urunler-gorselleri/plug-in-sarkuteri-sadira/sadira-fg.png'],
            description: "Düz camlı plug-in şarküteri reyonu. Kendinden motorlu yapısı sayesinde merkezi sistem bağımsız kurulum imkânı sunar. İşlenmiş et, peynir ve hazır yemek teşhiri için uygundur.",
          },
          {
            slug: 'sadira-cg',
            variants: [{ code: 'SADIRA CG', label: 'Curved Glass' }],
            images: ['/nokta-dizayn-urunler-gorselleri/plug-in-sarkuteri-sadira/sadira-cg.png'],
            description: "Kavisli cam cephesiyle premium görünüm sunan plug-in şarküteri reyonu. Bağımsız kompresör teknolojisi ile esnek mağaza içi konumlandırma.",
          },
        ],
      },
      {
        slug: 'plug-in-promosyon',
        name: 'Plug-In Promosyon',
        products: [
          {
            slug: 'propus-brisbane',
            variants: [
              { code: 'PROPUS OPEN', label: 'Open Display' },
              { code: 'BRISBANE NC', label: 'No Cabinet' },
              { code: 'BRISBANE SG', label: 'Single Glass Door' },
            ],
            images: ['/nokta-dizayn-urunler-gorselleri/plug-in-promotion-propus/propus-open-brisbane-nc-brisbane-sg.png'],
            description: "Promosyon ve hızlı satış için tasarlanmış plug-in teşhir dolapları. Taşınabilir yapıları sayesinde mağaza içi herhangi bir noktaya kolayca konumlandırılabilir.",
          },
        ],
      },
    ],
  },
];
