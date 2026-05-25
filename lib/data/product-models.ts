import type { ProductCategoryFull } from '@/lib/types';

export const PRODUCT_CATEGORIES_FULL: ProductCategoryFull[] = [
  // ─────────────────────────────────────────────────
  // 1. SERVİS REYONLARI
  // ─────────────────────────────────────────────────
  {
    slug: 'servis-reyonlari',
    name: 'Servis Reyonları',
    icon: 'Refrigerator',
    categoryDescription:
      "Nokta Dizayn'ın servis reyonları, başta et, meze ve şarküteri ürünleri olmak üzere soğuk zincir gerektiren gıda gruplarının taze ve hijyenik biçimde sergilenmesi için özel olarak tasarlanmıştır. İşlevsellik, estetik ve enerji verimliliğini bir araya getiren bu ürün grubu, farklı işletme ihtiyaçlarına uygun geniş model seçenekleri sunar.",
    models: [
      {
        slug: 'navi',
        name: 'Navi',
        description:
          'Özellikle şarküteri, et ve meze ürünlerinin sergilenmesinde kullanıcılara konfor sunan modern servis reyonu modelidir. Cam amortisörlü devirmeli kapak sistemi sayesinde müşterileriniz ürünlere kolayca erişebilirken, çalışanlarınız da güvenli ve hızlı servis imkânına sahip olur.',
        specs: [
          { label: 'Uzunluk (mm)', value: '625 – 3750' },
          { label: 'Yan Kapak (mm)', value: '40 / 50' },
          { label: 'Sıcaklık Sınıfı', value: 'M2 (-1/+7°C) / M1 (-1/+5°C)' },
          { label: 'Soğutma Tipi', value: 'Plug-in veya merkezi sistem' },
          { label: 'Köşe Opsiyonları', value: 'İç/dış oval, kırma, kübik' },
        ],
        useCases: [
          'Süpermarketler ve zincir mağazalar',
          'Kasap reyonları',
          'Şarküteri ve gurme satış noktaları',
          'Catering ve otel mutfakları',
        ],
        features: [
          'Devirmeli cam amortisör sistemi',
          'Paslanmaz çelik hijyenik teşhir alanı',
          'Enerji verimli soğutma (-1°C / +7°C)',
          'Modüler yapı — esnek kurulum',
          'Ayaklı (blok ayak) veya bazalı seçenekler',
        ],
      },
      {
        slug: 'navi-klasik',
        name: 'Navi Klasik',
        description:
          'Şarküteri, et ve meze ürünlerinin göz alıcı biçimde sergilenmesi için özel tasarlanmış düz camlı, aydınlatmalı servis reyonudur. Modern tasarımı, yüksek görünürlük sağlayan cam yapısı ve fonksiyonel opsiyonlarıyla ürünlerinizi öne çıkarır.',
        specs: [
          { label: 'Uzunluk (mm)', value: '625 / 937 / 1250 / 1875 / 2500 / 3750' },
          { label: 'Yan Kapak (mm)', value: '50' },
          { label: 'Sıcaklık Sınıfı', value: 'M2 (-1/+7°C) / M1 (-1/+5°C)' },
          { label: 'Soğutma Tipi', value: 'Plug-in veya merkezi sistem' },
        ],
        useCases: [
          'Şarküteriler',
          'Kasap reyonları',
          'Süpermarket ve hipermarketler',
          'Gurme marketler',
          'Otel ve catering alanları',
        ],
        features: [
          'Düz cam ve entegre aydınlatma',
          'Geniş teşhir alanı',
          'Ergonomik kullanım kolaylığı',
          'Hijyenik ve kolay temizlenebilir yüzeyler',
          'Esnek sıcaklık kontrolü',
        ],
      },
      {
        slug: 'navi-flat-4',
        name: 'Navi Flat 4',
        description:
          'Estetik görünümü ve geniş teşhir alanı ile öne çıkan premium servis reyonudur. Modern düz cam tasarımı ve zenginleştirilmiş iç hacmi sayesinde ürünlerin tazeliğini ve görsel cazibesini maksimum seviyede yansıtır.',
        specs: [
          { label: 'Uzunluk (mm)', value: '625 / 937 / 1250 / 1875 / 2500 / 2814 / 3750' },
          { label: 'Yan Kapak (mm)', value: '40' },
          { label: 'Sıcaklık Sınıfı', value: 'M2 (-1/+7°C) / M1 (-1/+5°C)' },
          { label: 'Soğutma Tipi', value: 'Plug-in veya merkezi sistem' },
        ],
        useCases: [
          'Süpermarketler ve hipermarketler',
          'Şarküteriler',
          'Kasap reyonları',
          'Gurme mağazalar',
          'Otel ve catering alanları',
        ],
        features: [
          'Estetiğe odaklı düz cam tasarım',
          'Zengin ve ferah teşhir alanı',
          'Ergonomik erişim',
          'Hijyenik ve dayanıklı yapı',
          '40 mm yalıtım — enerji verimliliği',
        ],
      },
      {
        slug: 'navi-dc',
        name: 'Navi DC',
        description:
          'Devirmeli cam amortisör sistemine sahip, şarküteri, et ve meze ürünlerinin taze ve estetik biçimde sergilenmesi için geliştirilmiş servis reyonudur. Ergonomik özelliği hem kullanıcı deneyimini hem de satış verimliliğini artırır.',
        specs: [
          { label: 'Uzunluk (mm)', value: '937 / 1250 / 1875 / 2500 / 3750' },
          { label: 'Yan Kapak (mm)', value: '40' },
          { label: 'Sıcaklık Sınıfı', value: 'M2 (-1/+7°C) / M1 (-1/+5°C)' },
          { label: 'Soğutma Tipi', value: 'Plug-in veya merkezi sistem' },
          { label: 'Köşe Opsiyonları', value: 'İç/dış oval veya kırma' },
        ],
        useCases: [
          'Süpermarketler ve hipermarketler',
          'Şarküteriler',
          'Kasap reyonları',
          'Gurme marketler',
        ],
        features: [
          'Devirmeli cam amortisör sistemi',
          'Geniş teşhir alanı',
          'Hijyenik kolay temizlenebilir yüzeyler',
          'Esnek sıcaklık kontrolü',
          '40 mm yalıtım — enerji verimliliği',
        ],
      },
      {
        slug: 'navi-sutluk',
        name: 'Navi Sütlük',
        description:
          'Devirmeli cam amortisör sistemi sayesinde müşterilerin cam kapağı kolayca kaldırarak ürünlere erişmesini sağlayan servis reyonudur. Süt ürünleri, et, meze ve şarküteri ürünlerinin taze, hijyenik ve düzenli biçimde teşhiri için idealdir.',
        specs: [
          { label: 'Uzunluk (mm)', value: '937 / 1250 / 1875 / 2500 / 3750' },
          { label: 'Yan Kapak (mm)', value: '50' },
          { label: 'Sıcaklık Sınıfı', value: 'M2 (-1/+7°C) / M1 (-1/+5°C)' },
        ],
        useCases: ['Et, meze ve şarküteri ürünleri teşhir reyonu'],
        features: [
          'Kullanıcı dostu devirmeli cam amortisör',
          'Süt ve süt ürünleri için özel soğutma',
          'Geniş teşhir alanı — yüksek görünürlük',
          'Gıda güvenliğine uygun hijyenik yüzeyler',
          'Modüler uzunluk seçenekleri',
        ],
      },
      {
        slug: 'sadira-33',
        name: 'Sadira 33',
        description:
          'Kendinden motorlu soğutma sistemi sayesinde ekstra soğutma altyapısı gerektirmeden kullanılabilen, pratik ve verimli servis reyonudur. Şarküteri, kasap dükkânları ve orta ölçekli marketler için idealdir.',
        specs: [
          { label: 'Uzunluk (mm)', value: '937 / 1250 / 1875 / 2500 / 2814 / 3750' },
          { label: 'Yan Kapak (mm)', value: '50' },
          { label: 'Sıcaklık Sınıfı', value: 'M2 (-1/+7°C) / M1 (-1/+5°C)' },
        ],
        useCases: ['Et, meze ve şarküteri ürünleri teşhir reyonu'],
        features: [
          'Kendinden motorlu (plug-in) soğutma',
          'Orta ölçekli işletmeler için ideal',
          'Gıda güvenliğine uygun yüzeyler',
          'Enerji verimli çalışma',
          'Modüler tasarım — kolay kurulum',
        ],
      },
      {
        slug: 'sadira-33-flat',
        name: 'Sadira 33 Flat',
        description:
          'Kendinden motorlu yapısıyla ekstra soğutma altyapısı gerektirmeyen, pratik ve fonksiyonel servis reyonudur. Şarküteri, kasap dükkânları ve orta ölçekli marketler için idealdir.',
        specs: [
          { label: 'Uzunluk (mm)', value: '937 / 1250 / 1875 / 2500 / 2814 / 3750' },
          { label: 'Yan Kapak (mm)', value: '50' },
          { label: 'Sıcaklık Sınıfı', value: 'M2 (-1/+7°C) / M1 (-1/+5°C)' },
        ],
        useCases: ['Et, meze ve şarküteri ürünleri teşhir reyonu'],
        features: [
          'Kendinden motorlu (plug-in) soğutma',
          'Geniş teşhir alanı — yüksek görünürlük',
          'Hijyenik ve kolay temizlenebilir yüzeyler',
          'Kolay kurulum — düşük bakım ihtiyacı',
          'Gelişmiş soğutma teknolojisi',
        ],
      },
      {
        slug: 'navi-pasta',
        name: 'Navi Pasta',
        description:
          'Çekmeceli tasarımı sayesinde pasta, tatlı ve soğuk servis gerektiren ürünlerin kolay erişimle hijyenik biçimde sunulmasını sağlayan estetik teşhir reyonudur. Geniş cam yüzeyi ve modern çizgileriyle ürünleri göz alıcı kılar.',
        specs: [
          { label: 'Uzunluk (mm)', value: '625 / 937 / 1250 / 1875 / 2500 / 2814 / 3750' },
          { label: 'Yan Kapak (mm)', value: '40' },
          { label: 'Sıcaklık Sınıfı', value: 'M2 (-1/+7°C) / M1 (-1/+5°C)' },
        ],
        useCases: ['Pasta ve tatlı ürünleri teşhir reyonu'],
        features: [
          'Çekmeceli tasarım — pratik servis',
          'Geniş cam yüzey — yüksek görünürlük',
          'Tatlı ve pastalar için özel soğutma',
          'Hijyenik malzemeler',
          'Modüler uzunluk seçenekleri',
        ],
      },
      {
        slug: 'navi-pasta-klasik',
        name: 'Navi Pasta Klasik',
        description:
          'Pasta ve tatlı ürünlerinin tazeliğini koruyarak estetik biçimde sergilenmesi için tasarlanmış çekmeceli teşhir reyonudur. Modern ve zarif tasarımı, 40 mm yalıtımı ile enerji verimliliği sunar.',
        specs: [
          { label: 'Uzunluk (mm)', value: '625 / 937 / 1250 / 1875 / 2500 / 2814 / 3750' },
          { label: 'Yan Kapak (mm)', value: '40' },
          { label: 'Sıcaklık Sınıfı', value: 'M2 (-1/+7°C) / M1 (-1/+5°C)' },
        ],
        useCases: ['Pasta ve tatlı ürünleri teşhir reyonu'],
        features: [
          'Geniş cam yüzey — yüksek görünürlük',
          'Tatlı ürünler için özel soğutma',
          'Hijyenik ve dayanıklı yapı',
          'Modüler uzunluk seçenekleri',
          '40 mm yalıtım — enerji tasarrufu',
        ],
      },
      {
        slug: 'propus-fish',
        name: 'Propus Fish',
        description:
          'İçten motorlu yapısıyla balık ve deniz ürünlerinin tazeliğini uzun süre koruyarak sergilenmesini sağlayan özel teşhir reyonudur. Paslanmaz çelik iç yüzeyi ve gıda güvenliğine uygun tasarımıyla profesyonel balıkçılar ve marketler için idealdir.',
        specs: [
          { label: 'Uzunluk (mm)', value: '1250 / 2812.5 / 3750' },
          { label: 'Yan Kapak (mm)', value: '50' },
          { label: 'Soğutma Tipi', value: 'İçten motorlu (plug-in)' },
        ],
        useCases: ['Taze balık ve deniz ürünleri teşhir reyonu'],
        features: [
          'İçten motorlu (plug-in) soğutma',
          'Deniz ürünleri için özel soğutma teknolojisi',
          'Paslanmaz çelik iç yüzey',
          'Geniş teşhir alanı — yüksek görünürlük',
          'Dayanıklı ve hijyenik malzeme yapısı',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────
  // 2. TAM BOY DİKEY REYONLAR
  // ─────────────────────────────────────────────────
  {
    slug: 'tam-boy-dikey-reyonlar',
    name: 'Tam Boy Dikey Reyonlar',
    icon: 'RectangleVertical',
    categoryDescription:
      "Nokta Dizayn'ın tam boy dikey reyonları, market ve perakende mağazalarında süt, içecek ve paketli gıda ürünlerinin düzenli ve dikkat çekici şekilde sergilenmesini sağlar. Yüksek kapasitesi, dayanıklı yapısı ve raf düzeni ile maksimum verim sunarken; farklı sıcaklık aralıkları ve kapak opsiyonlarıyla geniş kullanım alanına hitap eder.",
    models: [
      {
        slug: 'volga-dm',
        name: 'Volga D/M',
        description:
          'Sırttan evaporatörlü özel soğutma teknolojisi ile süt ürünleri, paketlenmiş etler ve diğer soğutma gerektiren gıdaların güvenle sergilenmesini sağlar. 1195 mm derinliğe kadar seçenek sunan tasarımı, geniş ürün yelpazesine uyum gösterir.',
        specs: [
          { label: 'Uzunluk (mm)', value: '937 / 1250 / 1875 / 2500 / 2814 / 3750' },
          { label: 'Yan Kapak (mm)', value: '40' },
          { label: 'Sıcaklık Sınıfı', value: 'M2 (-1/+7°C) / M1 (-1/+5°C) / H1 (+1/+10°C)' },
          { label: 'Derinlik', value: 'Maks. 1195 mm' },
        ],
        useCases: ['Süt ürünleri ve paket et teşhir reyonu'],
        features: [
          'Sırttan evaporatörlü soğutma teknolojisi',
          'Maks. 1195 mm derinlik seçeneği',
          'Farklı sıcaklık sınıfı alternatifleri',
          'Enerji verimli çalışma sistemi',
          'Dayanıklı ve modern tasarım',
        ],
      },
      {
        slug: 'volga-4fv',
        name: 'Volga-4FV',
        description:
          'Sırttan evaporatörlü soğutma teknolojisi sayesinde farklı sıcaklık sınıflarında çalışarak süt ürünleri, paketlenmiş etler ve soğutma gerektiren gıdaları güvenle sergiler. Estetik tasarımı ve yüksek enerji verimliliği ile profesyonel perakende ortamları için idealdir.',
        specs: [
          { label: 'Uzunluk (mm)', value: '937 / 1250 / 1875 / 2500 / 2814 / 3750' },
          { label: 'Yan Kapak (mm)', value: '40' },
          { label: 'Sıcaklık Sınıfı', value: 'M2 (-1/+7°C) / M1 (-1/+5°C) / H1 (+1/+10°C)' },
          { label: 'Derinlik', value: 'Maks. 1195 mm' },
        ],
        useCases: ['Süt ürünleri ve paket et teşhir reyonu'],
        features: [
          'Sırttan evaporatörlü gelişmiş soğutma',
          'Maks. 1195 mm derinlik seçeneği',
          'Yüksek enerji verimliliği',
          'Hijyenik yüzeyler',
          'Modern ve dayanıklı yapı',
        ],
      },
      {
        slug: 'nile',
        name: 'Nile',
        description:
          'Ergonomik tasarımı sayesinde ürünlerin kolay erişilebilir biçimde sergilenmesini sağlar. Özellikle orta ölçekli marketler ve benzin istasyonları için ideal olan bu model, farklı ölçü seçenekleriyle her mekâna uyum sağlar.',
        specs: [
          { label: 'Uzunluk (mm)', value: '937 / 1250 / 1875 / 2500 / 2814 / 3750' },
          { label: 'Yan Kapak (mm)', value: '40' },
          { label: 'Sıcaklık Sınıfı', value: 'M2 (-1/+7°C) / M1 (-1/+5°C) / H1 (+1/+10°C)' },
        ],
        useCases: ['Süt ürünleri ve paket et teşhir reyonu'],
        features: [
          'Ergonomik ve kullanıcı dostu tasarım',
          'Orta ölçekli market ve istasyon marketleri için ideal',
          'Farklı ölçü seçenekleri',
          'Yüksek enerji verimliliği',
          'Dayanıklı ve hijyenik yapı',
        ],
      },
      {
        slug: 'merga-6-lb',
        name: 'Merga 6 LB',
        description:
          'Sırttan evaporatörlü gelişmiş soğutma teknolojisi ile süt ürünleri, paketlenmiş etler ve soğutma gerektiren gıdaların güvenli ve verimli biçimde sergilenmesini sağlar. Estetik ve dayanıklı yapısıyla hem performans hem de görsellik açısından öne çıkar.',
        specs: [
          { label: 'Uzunluk (mm)', value: '937 / 1250 / 1875 / 2500 / 2814 / 3750' },
          { label: 'Yan Kapak (mm)', value: '40' },
          { label: 'Sıcaklık Sınıfı', value: 'M2 (-1/+7°C) / M1 (-1/+5°C) / H1 (+1/+10°C)' },
          { label: 'Derinlik', value: 'Maks. 1195 mm' },
        ],
        useCases: ['Süt ürünleri ve paket et teşhir reyonu'],
        features: [
          'Sırttan evaporatörlü gelişmiş soğutma',
          'Maks. 1195 mm derinlik seçeneği',
          'Yüksek enerji verimliliği',
          'Hijyenik yüzeyler',
          'Dayanıklı ve modern tasarım',
        ],
      },
      {
        slug: 'simav',
        name: 'Simav',
        description:
          'Sırttan evaporatörlü soğutma teknolojisi ile süt ürünleri, paketlenmiş etler ve soğuk muhafaza gerektiren gıdaları güvenle sergiler. Modern tasarımı ve yüksek enerji verimliliği ile öne çıkar.',
        specs: [
          { label: 'Uzunluk (mm)', value: '937 / 1250 / 1875 / 2500 / 2814 / 3750' },
          { label: 'Yan Kapak (mm)', value: '40' },
          { label: 'Sıcaklık Sınıfı', value: 'M2 (-1/+7°C) / M1 (-1/+5°C)' },
          { label: 'Derinlik', value: 'Maks. 1195 mm' },
        ],
        useCases: ['Süt ürünleri ve paket et teşhir reyonu'],
        features: [
          'Sırttan evaporatörlü soğutma',
          'Maks. 1195 mm derinlik seçeneği',
          'Süt ürünleri ve paket et için ideal sıcaklık',
          'Yüksek enerji verimliliği',
          'Modern ve dayanıklı tasarım',
        ],
      },
      {
        slug: 'biga-3',
        name: 'Biga 3',
        description:
          'Kompakt boyutlarıyla sınırlı alanlara sahip perakende işletmeler için ideal teşhir çözümüdür. Süt ürünleri ve paketlenmiş etlerin taze, düzenli ve estetik biçimde sergilenmesini sağlar.',
        specs: [
          { label: 'Uzunluk (mm)', value: '937 / 1250 / 1875 / 2500' },
          { label: 'Yan Kapak (mm)', value: '40' },
          { label: 'Sıcaklık Sınıfı', value: 'M1 (-1/+5°C)' },
        ],
        useCases: ['Süt ürünleri ve paket et teşhir reyonu'],
        features: [
          'Kompakt tasarım — dar alanlara uyum',
          'Süt ürünleri için ideal sıcaklık',
          'Enerji tasarrufu sağlayan soğutma',
          'Hijyenik yüzeyler',
          'Kolay bakım ve temizlik',
        ],
      },
      {
        slug: 'densu-2',
        name: 'Densu-2',
        description:
          'Kendinden motorlu yapısı ve yalnızca 795 mm genişliğindeki dar tasarımı sayesinde yerleşim alanı kısıtlı mağazalar için mükemmel bir çözümdür. Kompakt boyutlarına rağmen yüksek soğutma performansı sunar.',
        specs: [
          { label: 'Uzunluk (mm)', value: '937 / 1250 / 1875 / 2500 / 2814' },
          { label: 'Yan Kapak (mm)', value: '40' },
          { label: 'Genişlik', value: '795 mm' },
          { label: 'Sıcaklık Sınıfı', value: 'M2 (-1/+7°C) / M1 (-1/+5°C) / H1 (+1/+10°C)' },
        ],
        useCases: ['Süt ürünleri ve paket et teşhir reyonu'],
        features: [
          'Kendinden motorlu kompakt tasarım',
          'Yalnızca 795 mm genişlik',
          'Dar alanlara mükemmel uyum',
          'Enerji verimli soğutma',
          'Modern ve hijyenik yapı',
        ],
      },
      {
        slug: 'selendi',
        name: 'Selendi',
        description:
          'İçten motorlu yapısı ile kolay kurulum ve kullanım imkânı sunar. Kompakt boyutları sayesinde küçük ve orta ölçekli perakende alanlarında rahatlıkla kullanılabilir.',
        specs: [
          { label: 'Uzunluk (mm)', value: '938 / 1250 / 1875 / 2500' },
          { label: 'Yan Kapak (mm)', value: '40' },
          { label: 'Sıcaklık Sınıfı', value: 'M2 (-1/+7°C)' },
        ],
        useCases: ['Süt ürünleri ve paket et teşhir reyonu'],
        features: [
          'İçten motorlu — kolay kurulum',
          'Kompakt tasarım — dar alanlara uyum',
          'Süt ürünleri için ideal soğutma',
          'Enerji verimli sistem',
          'Kolay temizlik ve bakım',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────
  // 3. YARIM BOY DİKEY REYONLAR
  // ─────────────────────────────────────────────────
  {
    slug: 'yarim-boy-dikey-reyonlar',
    name: 'Yarım Boy Dikey Reyonlar',
    icon: 'LayoutList',
    categoryDescription:
      'Yarım boy dikey reyonlar, sınırlı alanlara sahip işletmeler için fonksiyonel ve estetik bir teşhir çözümüdür. Kompakt tasarımı sayesinde mağaza içi düzenlemelere kolaylıkla entegre olurken, düşük enerji tüketimli yapısı ile sürdürülebilirliği destekler. Özelleştirilebilir raf yapısı ile farklı ürün gruplarına uyum sağlar.',
    models: [
      {
        slug: 'lena-pl',
        name: 'Lena PL',
        description:
          'Yarı dikey tasarımı ile süt ürünleri ve paketlenmiş etlerin taze, düzenli ve estetik biçimde sergilenmesi için geliştirilmiştir. Müşterilerin ürünleri rahatça görmesini ve erişmesini sağlayan yapısı, soğutma performansında yüksek verimlilik sunar.',
        specs: [
          { label: 'Uzunluk (mm)', value: '915 / 1250 / 1875 / 2500' },
          { label: 'Yan Kapak (mm)', value: '42' },
          { label: 'Sıcaklık Sınıfı', value: 'M1 (-1/+5°C)' },
        ],
        useCases: ['Süt ürünleri ve paket et teşhir reyonu'],
        features: [
          'Yarı dikey tasarım — yüksek görünürlük',
          'Süt ürünleri için ideal sıcaklık',
          'Enerji verimli soğutma sistemi',
          'Gıda güvenliğine uygun hijyenik malzemeler',
          'Modern ve dayanıklı yapı',
        ],
      },
      {
        slug: 'lena-3',
        name: 'Lena 3',
        description:
          'Yarı dikey yapısı ile süt ürünleri, paketlenmiş etler ve soğutma gerektiren gıdaların taze ve estetik biçimde teşhiri için tasarlanmıştır. Geniş model yelpazesi ve farklı sıcaklık sınıfı seçenekleri ile yüksek verimlilik sağlar.',
        specs: [
          { label: 'Uzunluk (mm)', value: '937 / 1250 / 1875 / 2500 / 2814 / 3750' },
          { label: 'Yan Kapak (mm)', value: '42' },
          { label: 'Sıcaklık Sınıfı', value: 'M2 (-1/+7°C) / M1 (-1/+5°C) / H1 (+1/+10°C)' },
        ],
        useCases: ['Süt ürünleri ve paket et teşhir reyonu'],
        features: [
          'Yarı dikey tasarım — maksimum görünürlük',
          'Geniş model ve sıcaklık sınıfı seçenekleri',
          'Süt ürünleri ve paket etler için ideal',
          'Enerji verimli soğutma sistemi',
          'Modüler ve dayanıklı yapı',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────
  // 4. DİKEY CAM KAPAKLI REYONLAR
  // ─────────────────────────────────────────────────
  {
    slug: 'dikey-cam-kapakli-reyonlar',
    name: 'Dikey Cam Kapaklı Reyonlar',
    icon: 'GlassWater',
    categoryDescription:
      'Dikey cam kapaklı reyonlar, donmuş gıda ve soğuk içeceklerin yüksek görünürlükle muhafaza edilmesi için geliştirilmiş çok yönlü soğutma çözümleridir. LED aydınlatma ve enerji tasarrufu odaklı teknolojileri ile her ölçekteki mağazaya uyum sağlar.',
    models: [
      {
        slug: 'meric-6',
        name: 'Meriç 6',
        description:
          '2, 3, 4 veya 5 kapılı opsiyonlarıyla donmuş gıda ve soğuk içeceklerin muhafazasında kullanılabilen çok yönlü bir dolaptır. Negatif sıcaklık kullanımı için ideal olup LED aydınlatma seçeneği ile enerji tasarrufu sağlar.',
        specs: [
          { label: 'Uzunluk (mm)', value: '1562 / 2343 / 3124 / 3905' },
          { label: 'Yan Kapak (mm)', value: '40 – 70' },
          {
            label: 'Sıcaklık Sınıfı',
            value: 'M2 / M1 / M0 / H1',
          },
          { label: 'Kapı Seçenekleri', value: '2 / 3 / 4 / 5 kapılı' },
        ],
        useCases: ['Derin dondurucu ve meşrubat muhafaza dolabı'],
        features: [
          '2, 3, 4 veya 5 kapılı model seçenekleri',
          'Negatif sıcaklıkta kullanım imkânı',
          'Enerji tasarrufu sağlayan LED aydınlatma',
          'Geniş iç hacim — yüksek kapasite',
          'Farklı sıcaklık sınıflarında çalışma',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────
  // 5. HAVUZ TİPİ DOLAPLAR
  // ─────────────────────────────────────────────────
  {
    slug: 'havuz-tipi-dolaplar',
    name: 'Havuz Tipi Dolaplar',
    icon: 'Square',
    categoryDescription:
      "Nokta Dizayn havuz tipi dolaplar, özellikle hızlı tüketim ürünlerinin sergilenmesi için tercih edilen açık yapılı teşhir sistemleridir. Üstten erişim kolaylığı, geniş iç hacim ve modüler tasarımı sayesinde yoğun müşteri trafiğine sahip alanlarda verimli kullanım sağlar. Estetik dış yüzey seçenekleriyle dikkat çeker.",
    models: [
      {
        slug: 'izar',
        name: 'Izar',
        description:
          'Geniş iç hacmi sayesinde müşterilerin istedikleri ürünlere kolayca ulaşmasını sağlayan, havuz tipi derin dondurucu dolaptır. Enerji verimliliğini artırmak için kayar kapak sistemi ile donatılmıştır.',
        specs: [
          { label: 'Uzunluk (mm)', value: '1875 / 2500 / 3250' },
          { label: 'Yan Kapak (mm)', value: '48' },
          { label: 'Sıcaklık Sınıfı', value: 'L1 (-15/-18°C) / L2 (-12/-18°C)' },
        ],
        useCases: ['Derin dondurucu ve meşrubat muhafaza dolabı'],
        features: [
          'Geniş iç hacim — yüksek depolama kapasitesi',
          'Enerji tasarrufu sağlayan kayar kapak',
          'Donmuş gıda ve içecek muhafazası için ideal',
          'Dayanıklı ve hijyenik malzeme',
          'Enerji verimli soğutma teknolojisi',
        ],
      },
      {
        slug: 'baham',
        name: 'Baham',
        description:
          'Cam veya düz kenar seçenekleriyle sunulan, yüksek istifleme kapasitesine sahip havuz tipi derin dondurucu dolaptır. Enerji tasarrufu sağlayan opsiyonları ile işletme maliyetlerini düşürür.',
        specs: [
          { label: 'Uzunluk (mm)', value: '1875 / 2500 / 3250' },
          { label: 'Yan Kapak (mm)', value: '48' },
          { label: 'Sıcaklık Sınıfı', value: 'L1 (-15/-18°C) / L2 (-12/-18°C)' },
          { label: 'Kenar Seçeneği', value: 'Cam veya düz' },
        ],
        useCases: ['Derin dondurucu ve meşrubat muhafaza dolabı'],
        features: [
          'Cam veya düz kenar model seçenekleri',
          'Yüksek ürün istifleme kapasitesi',
          'Enerji tasarrufu sağlayan tasarım',
          'Dayanıklı ve hijyenik yapı',
          'Enerji verimli soğutma teknolojisi',
        ],
      },
      {
        slug: 'probus',
        name: 'Probus',
        description:
          'Özellikle hızlı satışı hedeflenen promosyon ürünlerinin sergilenmesi için tasarlanmış, taşınabilir teşhir dolabıdır. Hafif ve kompakt yapısı sayesinde mağazanın farklı bölgelerinde kolayca konumlandırılabilir.',
        specs: [
          { label: 'Sıcaklık Sınıfı', value: 'M1 (-1/-5°C) / M2 (-1/+7°C)' },
          { label: 'Tasarım', value: 'Taşınabilir, kompakt' },
        ],
        useCases: ['Promosyon dolabı'],
        features: [
          'Taşınabilir — hafif ve kompakt',
          'Hızlı satış ve promosyon ürünleri için ideal',
          'Farklı renk opsiyonları',
          'M1 ve M2 sıcaklık sınıfı seçenekleri',
          'Kolay kullanım ve bakım',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────
  // 6. KOMBİNE TİP DOLAPLAR
  // ─────────────────────────────────────────────────
  {
    slug: 'kombine-tip-dolaplar',
    name: 'Kombine Tip Dolaplar',
    icon: 'LayoutGrid',
    categoryDescription:
      'Kombine tip dolaplar, farklı fonksiyonları bir arada sunarak hem servis hem dikey teşhir ihtiyaçlarını karşılayan hibrit çözümlerdir. Özelleştirilebilir modüler yapısı ile işletmelere esnek kullanım imkânı sunar. Gıda güvenliği, enerji verimliliği ve görsel bütünlük açısından üstün performans sağlar.',
    models: [
      {
        slug: 'grafias',
        name: 'Grafias',
        description:
          'Hem dikey hem yatay alanlarda ürün sergileme imkânı sunan kombine teşhir dolabıdır. 4 ve 6 kapılı seçenekleriyle dondurulmuş gıdaları yüksek enerji verimliliği ve optimum soğutma performansıyla sergiler.',
        specs: [
          { label: 'Uzunluk (mm)', value: '2500 / 3750' },
          { label: 'Yan Kapak (mm)', value: '68' },
          { label: 'Sıcaklık Sınıfı', value: 'L1 (-15/-18°C) / L2 (-12/-18°C)' },
          { label: 'Kapı Seçeneği', value: '4 veya 6 kapılı' },
        ],
        useCases: ['Dondurulmuş gıda teşhir reyonu'],
        features: [
          'Dikey ve yatay teşhir kombine tasarım',
          '4 veya 6 kapı seçeneği',
          'Dondurulmuş gıdalar için özel soğutma',
          'Yüksek enerji verimliliği — 68 mm yalıtım',
          'Geniş depolama kapasitesi',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────
  // 7. SARKÜTERİ REYONLARI
  // ─────────────────────────────────────────────────
  {
    slug: 'sarkuteri-reyonlari',
    name: 'Şarküteri Reyonları',
    icon: 'Beef',
    categoryDescription:
      'Nokta Dizayn şarküteri reyonları; işlenmiş et, peynir, zeytin ve hazır yemeklerin en cazip biçimde sergilenmesi için özel olarak tasarlanmıştır. Üstün cam kalitesi, entegre LED aydınlatma ve hijyenik iç yapı ile ürünlerin görsel çekiciliğini en üst düzeye taşır. Farklı cam geometrileri ve uzunluk seçenekleriyle her şarküteri konseptine uyum sağlar.',
    models: [
      {
        slug: 'chora',
        name: 'Chora',
        description:
          'Düz cam yüzeyi ve geniş teşhir alanıyla işlenmiş et, peynir ve hazır yemeklerin modern bir sunumla sergilenmesini sağlayan temel şarküteri reyonudur. Entegre aydınlatması ve ergonomik yapısıyla günlük yoğun kullanıma uygundur.',
        specs: [
          { label: 'Uzunluk (mm)', value: '625 / 937 / 1250 / 1875 / 2500 / 3750' },
          { label: 'Yan Kapak (mm)', value: '50' },
          { label: 'Sıcaklık Sınıfı', value: 'M2 (-1/+7°C) / M1 (-1/+5°C)' },
          { label: 'Soğutma Tipi', value: 'Plug-in veya merkezi sistem' },
          { label: 'Aydınlatma', value: 'Entegre LED' },
        ],
        useCases: [
          'Zincir market şarküteri bölümleri',
          'Bağımsız şarküteri dükkanları',
          'Gastronomi marketleri',
          'Otel ve catering servis alanları',
        ],
        features: [
          'Düz cam — yüksek ürün görünürlüğü',
          'Entegre LED aydınlatma — ürün renkleri net',
          'Geniş ve hijyenik servis alanı',
          'Plug-in veya merkezi sistem uyumlu',
          'Modüler uzunluk seçenekleri',
        ],
      },
      {
        slug: 'chora-dc',
        name: 'Chora DC',
        description:
          'Devirmeli cam amortisör sistemiyle donatılmış şarküteri reyonudur. Cam kapak, çalışanın tek eliyle kolayca kaldırılabilir; bu özellik hızlı servis ortamlarında zaman ve iş gücü tasarrufu sağlar. Kesim tahtası rafı ve arka erişim kapısı standart olarak sunulur.',
        specs: [
          { label: 'Uzunluk (mm)', value: '937 / 1250 / 1875 / 2500 / 3750' },
          { label: 'Yan Kapak (mm)', value: '50' },
          { label: 'Sıcaklık Sınıfı', value: 'M2 (-1/+7°C) / M1 (-1/+5°C)' },
          { label: 'Soğutma Tipi', value: 'Plug-in veya merkezi sistem' },
          { label: 'Ek Opsiyonlar', value: 'Kesim tahtası rafı, arka erişim kapısı' },
        ],
        useCases: [
          'Hızlı servis şarküteri bölümleri',
          'Kasap ve şarküteri kombine alanları',
          'Süpermarket et-şarküteri departmanları',
          'Gastronomi ve gurme marketler',
        ],
        features: [
          'Devirmeli cam amortisör — tek elle açma',
          'Hızlı servis için ergonomik tasarım',
          'Standart kesim tahtası rafı',
          'Arka erişim kapısı ile kolay stoklama',
          'Hijyenik paslanmaz çelik iç yüzey',
        ],
      },
      {
        slug: 'chora-kurvi',
        name: 'Chora Kurvi',
        description:
          'Kavisli cam cephesiyle premium şarküteri ve gurme gıda sunumu için tasarlanmış estetik reyondur. Yumuşak hatları sayesinde mağaza içinde odak noktası oluşturur; entegre LED aydınlatma ile ürünlerin renk ve dokusunu vurgular.',
        specs: [
          { label: 'Uzunluk (mm)', value: '937 / 1250 / 1875 / 2500' },
          { label: 'Yan Kapak (mm)', value: '50' },
          { label: 'Sıcaklık Sınıfı', value: 'M2 (-1/+7°C) / M1 (-1/+5°C)' },
          { label: 'Cam Geometrisi', value: 'Kavisli (kurvi)' },
          { label: 'Aydınlatma', value: 'Entegre LED — renk dostu' },
        ],
        useCases: [
          'Gurme ve premium perakende mağazaları',
          'Otel delicatessen bölümleri',
          'Butik şarküteriler',
          'High-end süpermarket şarküteri alanları',
        ],
        features: [
          'Kavisli cam — premium görünüm',
          'Renk dostu LED aydınlatma',
          'Geniş teşhir alanı — panoramik görünürlük',
          'Estetik dış kaplama seçenekleri',
          'Hijyenik ve dayanıklı iç yapı',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────
  // 8. MANAV REYONU
  // ─────────────────────────────────────────────────
  {
    slug: 'manav-reyonu',
    name: 'Manav Reyonu',
    icon: 'Apple',
    categoryDescription:
      'Nokta Dizayn manav reyonları, taze meyve ve sebzelerin tazeliğini, rengini ve besin değerini koruyarak en cazip biçimde sergilenmesi için geliştirilmiştir. Katmanlı raf yapısı, hava sirkülasyonu ve nem kontrolü sayesinde ürün raf ömrünü uzatır; geniş ve erişilebilir teşhir alanı ile müşteri memnuniyetini artırır.',
    models: [
      {
        slug: 'folia',
        name: 'Folia',
        description:
          'Katmanlı eğimli raf sistemi ve geniş erişim alanı ile taze meyve ve sebzelerin düzenli ve estetik biçimde sergilenmesini sağlayan açık manav reyonudur. Hafif soğutmalı versiyonu ile hassas ürünlerin tazeliği korunur.',
        specs: [
          { label: 'Uzunluk (mm)', value: '1250 / 1875 / 2500 / 3750' },
          { label: 'Raf Adedi', value: '3 / 4 katman (ayarlanabilir)' },
          { label: 'Sıcaklık Sınıfı', value: 'H1 (+2/+10°C) / Ambiyant' },
          { label: 'Soğutma', value: 'Hava sirkülasyonlu veya pasif' },
          { label: 'Yan Kapak (mm)', value: '50' },
        ],
        useCases: [
          'Süpermarket ve hipermarket meyve-sebze bölümleri',
          'Bağımsız manav dükkanları',
          'Organik ve gurme gıda marketleri',
          'Zincir market meyve-sebze alanları',
        ],
        features: [
          'Eğimli katmanlı raf — kolay ürün erişimi',
          'Ayarlanabilir raf aralıkları',
          'Geniş teşhir alanı — yüksek kapasite',
          'Hafif hava sirkülasyonu ile tazelik koruma',
          'Kolay temizlenebilir hijyenik yüzeyler',
        ],
      },
      {
        slug: 'folia-plus',
        name: 'Folia Plus',
        description:
          'Entegre nem ve sisleme sistemi ile donatılmış premium manav reyonudur. Programlanabilir sisleme döngüsü sayesinde yaprak sebzeler, otlar ve hassas meyveler canlılığını ve tazeliğini çok daha uzun süre korur. Tüketici gözünde "taze market" algısını güçlendirir.',
        specs: [
          { label: 'Uzunluk (mm)', value: '1250 / 1875 / 2500 / 3750' },
          { label: 'Raf Adedi', value: '3 / 4 katman (ayarlanabilir)' },
          { label: 'Sıcaklık Sınıfı', value: 'H1 (+2/+10°C)' },
          { label: 'Sisleme', value: 'Otomatik programlanabilir sisleme sistemi' },
          { label: 'Nem Kontrolü', value: 'Dijital nem sensörü' },
        ],
        useCases: [
          'Premium ve organik gıda marketleri',
          'Yüksek ciro meyve-sebze departmanları',
          'Gurme süpermarketler',
          'Zincir hipermarket meyve-sebze bölümleri',
        ],
        features: [
          'Otomatik programlanabilir sisleme sistemi',
          'Dijital nem sensörü — hassas kontrol',
          'Yaprak sebze ve otlar için ideal ortam',
          'Taze market algısını güçlendiren görsel etki',
          'Enerji verimli soğutma ve nem yönetimi',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────
  // 9. UNLU MAMULLER REYONLARI
  // ─────────────────────────────────────────────────
  {
    slug: 'unlu-mamuller-reyonlari',
    name: 'Unlu Mamuller Reyonları',
    icon: 'Wheat',
    categoryDescription:
      'Nokta Dizayn unlu mamuller reyonları; ekmek, poğaça, pasta ve benzeri ürünlerin sıcaklık kontrolü altında ya da ambiyant ortamda sergilenmesi için özel olarak tasarlanmıştır. Cam vitrin yapısı, entegre aydınlatma ve nem yönetimi sayesinde ürünler hem görsel hem de duyusal açıdan en iyi şekilde sunulur.',
    models: [
      {
        slug: 'bria',
        name: 'Bria',
        description:
          'Ekmek, sandviç, poğaça ve pasta ürünlerinin ambiyant sıcaklıkta estetik biçimde sergilenmesi için tasarlanmış cam vitrin reyonudur. Geniş cam cephesi ve entegre LED aydınlatma ile ürünlerin görsel çekiciliğini artırır; self-servis kapısı ile müşteri erişimini kolaylaştırır.',
        specs: [
          { label: 'Uzunluk (mm)', value: '937 / 1250 / 1875 / 2500' },
          { label: 'Sıcaklık', value: 'Ambiyant (oda sıcaklığı)' },
          { label: 'Kapı Tipi', value: 'Sürgülü cam — self-servis' },
          { label: 'Aydınlatma', value: 'Entegre LED' },
          { label: 'Raf Adedi', value: '3 / 4 katman (ayarlanabilir)' },
        ],
        useCases: [
          'Fırın ve pastane perakende alanları',
          'Supermarket unlu mamuller bölümleri',
          'Kafe ve restoran vitrinleri',
          'Gurme market taze fırın alanları',
        ],
        features: [
          'Geniş cam vitrin — panoramik sunum',
          'Entegre LED — ürün rengini vurgular',
          'Self-servis sürgülü cam kapı',
          'Ayarlanabilir katmanlı raf sistemi',
          'Kolay temizlenebilir hijyenik iç yapı',
        ],
      },
      {
        slug: 'bria-isitmali',
        name: 'Bria Isıtmalı',
        description:
          'Sıcak fırın ürünlerinin servis sıcaklığında muhafaza edilerek sunulmasını sağlayan ısıtmalı cam vitrin reyonudur. Nem dengeli ısıtma sistemi ile ekmek, börek ve simit gibi ürünler taze çıkmış görünümünü ve kıtırlığını uzun süre korur.',
        specs: [
          { label: 'Uzunluk (mm)', value: '937 / 1250 / 1875 / 2500' },
          { label: 'Sıcaklık', value: '+40 / +80°C (ayarlanabilir)' },
          { label: 'Isıtma Sistemi', value: 'Nem dengeli kuvars ısıtıcı' },
          { label: 'Kapı Tipi', value: 'Sürgülü cam — self-servis' },
          { label: 'Aydınlatma', value: 'Entegre LED' },
        ],
        useCases: [
          'Sıcak ekmek ve simit servisi',
          'Fırın ve pastane mağaza içi vitrinleri',
          'Akaryakıt istasyonu market fırın bölümleri',
          'Büfe ve hazır yemek satış noktaları',
        ],
        features: [
          'Nem dengeli kuvars ısıtma sistemi',
          'Ayarlanabilir sıcaklık (+40/+80°C)',
          'Taze kıtırlık ve görünümü uzun süre koruma',
          'Entegre LED aydınlatma',
          'Self-servis sürgülü cam kapı',
        ],
      },
    ],
  },
];
