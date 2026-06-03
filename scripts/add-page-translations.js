const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

const tr = {
  magaza_page: {
    hero_eyebrow:'MAĞAZA SİSTEMLERİ', hero_title:'Her Sektöre Özel Entegre Mağaza Çözümleri',
    hero_subtitle:'Marketten eczaneye, nalburdan kafeye; ihtiyaca özel raf, reyon ve ekipman sistemleri.',
    cta_title:'Hangi Çözüm Sizin İçin Uygun?', cta_subtitle:'Mühendislik ekibimiz mağazanızın ihtiyacını analiz eder ve size özel çözüm planı hazırlar.', cta_btn:'Ücretsiz Analiz Talep Edin',
    s01_title:'Market Raf Sistemleri', s01_desc:'Süpermarketlerden hipermarketlere, akaryakıt istasyonu marketlerinden kasa önü satış stantlarına kadar her format ve ölçekte perakende market kurulumu için uçtan uca raf ve reyon sistemleri tasarlıyor, üretiyor ve kuruyoruz.',
    s01_slide1_title:'Hipermarket & Süpermarket', s01_slide1_sub:'Geniş ürün yelpazesi için esnek, dayanıklı ve genişleyebilir raf sistemleri.',
    s01_slide2_title:'Kasa, Banko ve Stantlar', s01_slide2_sub:'Müşteri deneyimini güçlendiren kasa önü ve satış noktası çözümleri.',
    s01_slide3_title:'Akaryakıt İstasyonları', s01_slide3_sub:'Sınırlı alanda maksimum verim sağlayan kompakt istasyon market ekipmanları.',
    s02_title:'Kasap, Balık & Dondurulmuş Gıda', s02_desc:'Kasap tezgahlarından balık reyonlarına, derin donduruculardan hazır gıda vitrinlerine kadar soğuk zinciri hiç kesmeden profesyonel teşhir çözümleri sunuyoruz.',
    s02_slide1_title:'Kasap Reyonları', s02_slide1_sub:'Hijyenik ve estetik et teşhiri için profesyonel tezgah ve vitrin çözümleri.',
    s02_slide2_title:'Dondurulmuş Gıda Dolapları', s02_slide2_sub:'Yüksek kapasiteli soğutma sistemleriyle dondurulmuş ürün teşhirinde güvenli çözüm.',
    s03_title:'Fast Food', s03_desc:'Yüksek müşteri trafiğine sahip fast food zincirlerinin servis hızını destekleyen paslanmaz çelik tezgah sistemleri, sıcak tutma vitrinleri ve soğutmalı sunum dolapları üretiyoruz.',
    s03_slide1_title:'Fast Food Zincirleri', s03_slide1_sub:'Yüksek hızlı servis için ergonomik tezgah sistemleri ve fonksiyonel servis ekipmanları.',
    s03_slide2_title:'Servis Tezgahları & Vitrinler', s03_slide2_sub:'Sıcak-soğuk sunum vitrinleri ve paslanmaz çelik tezgah hatları tek projede entegre edilir.',
    s04_title:'Coffee Shops', s04_desc:'Kafe ve coffee shop işletmeleri için barista tezgah ergonomisi, under-counter soğutucu entegrasyonu ve marka renk uygulamalarını tek projede birleştiriyoruz.',
    s04_slide1_title:'Kafe Tezgah Sistemleri', s04_slide1_sub:'Barista iş akışını optimize eden ergonomik tezgah ve under-counter ekipman çözümleri.',
    s04_slide2_title:'Kafe Zincirleri', s04_slide2_sub:'Marka kimliğine uygun özelleştirilebilir yüzey ve renk seçenekleriyle seri üretim desteği.',
    s05_title:'Manav Reyon Sistemleri', s05_desc:'Taze sebze ve meyvenin görsel çekiciliğini ön plana taşıyan eğimli raf yapıları, renk kontrast reyon düzenlemeleri ve açık raf sistemleri tasarlıyoruz.',
    s05_slide1_title:'Manav Reyonları', s05_slide1_sub:'Taze meyve ve sebzenin en görünür şekilde sunulması için özel eğimli raf sistemleri.',
    s05_slide2_title:'Taze Alan Düzenlemesi', s05_slide2_sub:'Renk kontrast ve açık raf yapısıyla müşteri ilgisini çeken taze ürün teşhiri.',
    s06_title:'Fırın Reyon Sistemleri', s06_desc:'Ekmek, pasta, simit ve unlu mamullerin en iyi şekilde sunulmasını sağlayan tel raflı ekmek standları, ısı korumalı pasta vitrinleri ve ahşap görünümlü MDF kaplama seçenekleriyle sıcak alan atmosferi yaratıyoruz.',
    s06_slide1_title:'Ekmek & Unlu Mamul Rafları', s06_slide1_sub:'Ürün tipine göre optimize edilmiş raf derinliği ve havalandırma açısıyla taze sunum.',
    s06_slide2_title:'Pasta & Börek Vitrinleri', s06_slide2_sub:'Isı korumalı cam vitrinlerle pastane ürünlerinin görsel ve hijyenik teşhiri.',
  },
  servis_page:{
    hero_title:'Satış Sonrası Teknik Servis ve Bakım Desteği',
    hero_subtitle:'Kurulum sonrasında da yanınızdayız: teknik servis, bakım, yedek parça ve retrofit çözümleriyle.',
    btn_servis:'Servis Talebi Oluştur', btn_destek:'Teknik Destek Hattı',
    section_eyebrow:'HİZMETLERİMİZ', section_title:'Servis ve Destek Hizmetlerimiz',
    section_subtitle:'Mağaza ekipmanlarınızın en yüksek verimde çalışması için kapsamlı destek hizmetleri.'
  },
  proje_page:{
    hero_eyebrow:'PROJE & MÜHENDİSLİK', hero_title:'Konseptten Uygulamaya Tam Süreç Yönetimi',
    hero_subtitle:'İhtiyaç analizinden devreye almaya, 8 adımda eksiksiz mağaza projesi teslimi.',
    btn_start:'Projenizi Başlatın', btn_consult:'Mühendislik Danışmanlığı',
    steps_eyebrow:'PROJE SÜRECİ', steps_title:'8 Adımda Eksiksiz Mağaza Projesi',
    steps_subtitle:'Her proje, aynı titiz süreçten geçer: tasarımdan teslime, planlamadan eğitime.',
    gallery_eyebrow:'TAMAMLANAN PROJELERDEN', gallery_title:'Sahadan Kareler',
    gallery_subtitle:'Farklı sektör ve ölçeklerde hayata geçirdiğimiz mağaza projelerinden görüntüler.',
    cta_title:'Projenizi Başlatalım', cta_subtitle:'Mağaza projenizin boyutu ne olursa olsun, mühendislik ekibimiz sizin için en uygun çözümü planlar.',
    cta_primary:'Teklif Al', cta_secondary:'Danışmanlık Talep Et',
    step_01_title:'İhtiyaç Analizi', step_01_desc:'Müşteri ihtiyacı, operasyonel hedefler ve bütçe parametreleri analiz edilir.',
    step_02_title:'Keşif Ziyareti', step_02_desc:'Mağaza veya tesis yapısı yerinde incelenir. Mekan ölçümleri alınır.',
    step_03_title:'Konsept & Projelendirme', step_03_desc:'Doğru ürün, kapasite ve sistem mimarisi planlanır. 2D/3D düzen çizimleri hazırlanır.',
    step_04_title:'Mühendislik Planlama', step_04_desc:'Soğutma yükü, enerji tüketimi ve sistem gereksinimleri hesaplanır.',
    step_05_title:'Üretim', step_05_desc:'Onaylanan teknik çizimlere göre 11.000 m² üretim tesisimizde imalat başlar.',
    step_06_title:'Lojistik', step_06_desc:'Üretilen tüm ekipmanlar zamanında ve güvenli ulaşım için özel ambalajlanır.',
    step_07_title:'Saha Kurulumu', step_07_desc:'Deneyimli kurulum ekibimiz, tüm ekipmanların montajını ve bağlantılarını gerçekleştirir.',
    step_08_title:'Devreye Alma & Eğitim', step_08_desc:'Sistem testleri yapılır, performans doğrulanır. Müşteri personeli eğitilir.'
  },
  surdurulebilirlik_page:{
    hero_title:'Verimli ve Sorumlu Mağaza Sistemleri',
    hero_subtitle:'Nokta Dizayn, enerji verimliliğini iş ortaklarına ve çevreye karşı bir sorumluluk olarak benimsiyor.',
    body_text:"Ticari soğutma sistemleri, bir perakende mağazasının toplam enerji tüketiminin %40-60'ından sorumludur. Bu tüketimi azaltmak işletme maliyetini düşürür ve karbon ayak izini minimize eder.",
    topics_eyebrow:'YAKLAŞIMIMIZ', topics_title:'Verimlilik Odaklı 8 Alan',
    t01_title:'Düşük enerji tüketimi', t01_desc:'Enerji verimli kompresörler, EC fan motorları ve LED aydınlatma sistemleriyle toplam enerji tüketimini minimize eden ekipmanlar tasarlıyoruz.',
    t02_title:'Doğru kapasite seçimi', t02_desc:'Mühendislik hesabıyla belirlenen doğru kapasite hem verimliliği hem de ömrü artırır.',
    t03_title:'Soğuk zincir güvenliği', t03_desc:'Güvenilir soğutma performansı gıda güvenliğini koruyarak fire kayıplarını azaltır.',
    t04_title:'İşletme maliyetlerini azaltma', t04_desc:'Düşük enerji tüketimi ve uzun bakım aralıklarıyla toplam sahip olma maliyeti optimize edilir.',
    t05_title:'Uzun ömürlü ekipman', t05_desc:'Endüstriyel sınıf malzeme ve kalite kontrol süreciyle üretilen ekipmanlar uzun yıllar güvenilir performans sağlar.',
    t06_title:'Sistem optimizasyonu', t06_desc:'Akıllı kontrol platformlarıyla enerji yönetimi ve bakım verimliliği bir arada sağlanır.',
    t07_title:'Bakım ile verimliliği koruma', t07_desc:'Periyodik bakım planları ekipmanın tasarım verimliliğini korur ve beklenmedik arızaları önler.',
    t08_title:'Geleceğe uyumlu sistemler', t08_desc:'Yeni nesil düşük GWP soğutucu akışkanlarına uyumlu ekipman tasarımıyla mevcut sisteminizi geleceğe hazırlayın.',
    case_eyebrow:'VAKA ÇALIŞMASI', case_title:'Gurme Market Yenileme Projesinde %28 Enerji Tasarrufu',
    case_desc:"İstanbul'da 1.200 m² gurme market, eski soğutma altyapısını yeni nesil enerji verimli ekipmanlarla yeniledi. İlk yıl elektrik tüketimi %28 azaldı.",
    case_btn:'Enerji Analizi Talep Et'
  },
  referanslar_page:{
    hero_title:'Referanslarımız',
    hero_subtitle:"Türkiye genelinde ve 60'tan fazla ülkede kurduğumuz mağaza projelerinden seçkiler.",
    stat_nokta:'Nokta', stat_ulke:'Ülke', stat_yil:'Yıl Deneyim',
    cta_title:'Siz de Bu Listeye Katılın',
    cta_subtitle:'Mağazanız için en doğru çözümü birlikte belirleyelim.',
    cta_btn:'Teklif Alın'
  }
};

const en = {
  magaza_page:{
    hero_eyebrow:'STORE SYSTEMS', hero_title:'Integrated Store Solutions for Every Sector',
    hero_subtitle:'From supermarkets to pharmacies, from hardware stores to cafes; custom shelving, display and equipment systems.',
    cta_title:'Which Solution Is Right for You?', cta_subtitle:'Our engineering team analyzes your store needs and prepares a custom solution plan.', cta_btn:'Request Free Analysis',
    s01_title:'Supermarket Shelving Systems', s01_desc:'We design, manufacture and install end-to-end shelving and display systems for all retail formats — from supermarkets to gas station stores. Double-sided gondolas, wall sections, checkout stands and custom corners bring your layout to life efficiently.',
    s01_slide1_title:'Hypermarket & Supermarket', s01_slide1_sub:'Flexible, durable and expandable shelving for a wide product range.',
    s01_slide2_title:'Cash Register, Counter & Stands', s01_slide2_sub:'Checkout and point-of-sale solutions enhancing the customer experience.',
    s01_slide3_title:'Gas Stations', s01_slide3_sub:'Compact convenience store equipment for maximum efficiency in limited space.',
    s02_title:'Butcher, Fish & Frozen Food', s02_desc:'Professional display solutions without breaking the cold chain — from butcher counters to fish displays, deep freezers to prepared food showcases. Curved or flat glass at +2/+4°C for meat; stainless with ice for fish; Remote or Plug-In at -18°C for frozen.',
    s02_slide1_title:'Butcher Counters', s02_slide1_sub:'Professional counters and displays for hygienic and aesthetic meat presentation.',
    s02_slide2_title:'Frozen Food Cabinets', s02_slide2_sub:'Safe frozen product display with high-capacity cooling systems.',
    s03_title:'Fast Food', s03_desc:'Stainless steel counter systems, hot holding displays and refrigerated cabinets for high-traffic fast food chains. Serial production in fixed dimensions and colors for franchise chains enables fast project delivery.',
    s03_slide1_title:'Fast Food Chains', s03_slide1_sub:'Ergonomic counter systems and functional service equipment for high-speed service.',
    s03_slide2_title:'Service Counters & Displays', s03_slide2_sub:'Hot-cold displays and stainless steel counter lines integrated in one project.',
    s04_title:'Coffee Shops', s04_desc:'For cafes, we combine barista counter ergonomics, under-counter refrigerator integration and brand colors in one project. Customizable coatings and modular structure enable designs for each cafe identity.',
    s04_slide1_title:'Cafe Counter Systems', s04_slide1_sub:'Ergonomic counter and under-counter equipment solutions optimizing barista workflow.',
    s04_slide2_title:'Cafe Chains', s04_slide2_sub:'Serial production support with customizable surface and color options matching brand identity.',
    s05_title:'Produce Display Systems', s05_desc:'Sloped shelving, color contrast displays and open shelf systems highlighting fresh produce appeal. Gravity flow shelves keep products always positioned forward, improving fill perception.',
    s05_slide1_title:'Produce Displays', s05_slide1_sub:'Custom sloped shelf systems for maximum fresh produce visibility.',
    s05_slide2_title:'Fresh Area Layout', s05_slide2_sub:'Fresh product display attracting customer attention with color contrast and open shelving.',
    s06_title:'Bakery Display Systems', s06_desc:'Wire-rack bread stands, heat-protected pastry displays and wood-look MDF coatings create a warm area atmosphere. Long-lasting use guaranteed with steam-resistant epoxy or stainless steel options.',
    s06_slide1_title:'Bread & Baked Goods Shelves', s06_slide1_sub:'Fresh presentation with shelf depth and ventilation optimized by product type.',
    s06_slide2_title:'Pastry & Börek Displays', s06_slide2_sub:'Visual and hygienic pastry product display with heat-protected glass showcases.'
  },
  servis_page:{
    hero_title:'After-Sales Technical Service and Maintenance Support',
    hero_subtitle:'We stay by your side after installation: technical service, maintenance, spare parts and retrofit solutions.',
    btn_servis:'Submit Service Request', btn_destek:'Technical Support Line',
    section_eyebrow:'OUR SERVICES', section_title:'Service and Support Services',
    section_subtitle:'Comprehensive support services to keep your store equipment at peak efficiency.'
  },
  proje_page:{
    hero_eyebrow:'PROJECT & ENGINEERING', hero_title:'Complete Process Management from Concept to Application',
    hero_subtitle:'From needs analysis to commissioning, complete store project delivery in 8 steps.',
    btn_start:'Start Your Project', btn_consult:'Engineering Consultation',
    steps_eyebrow:'PROJECT PROCESS', steps_title:'Complete Store Project in 8 Steps',
    steps_subtitle:'Every project follows the same rigorous process: from design to delivery, planning to training.',
    gallery_eyebrow:'FROM COMPLETED PROJECTS', gallery_title:'From the Field',
    gallery_subtitle:'Images from store projects realized in different sectors and scales.',
    cta_title:"Let's Start Your Project", cta_subtitle:'Our engineering team plans the most suitable solution whatever the size of your project.',
    cta_primary:'Get a Quote', cta_secondary:'Request Consultation',
    step_01_title:'Needs Analysis', step_01_desc:'Customer needs, operational goals and budget parameters are analyzed in detail.',
    step_02_title:'Site Survey', step_02_desc:'The store or facility is inspected on-site. Space measurements are taken.',
    step_03_title:'Concept & Design', step_03_desc:'The right product, capacity and system architecture is planned. 2D/3D layouts prepared.',
    step_04_title:'Engineering Planning', step_04_desc:'Cooling load, energy consumption and system requirements calculated with engineering software.',
    step_05_title:'Production', step_05_desc:'Manufacturing begins at our 11,000 m² facility per approved technical drawings.',
    step_06_title:'Logistics', step_06_desc:'All equipment is specially packaged for timely and safe delivery.',
    step_07_title:'Site Installation', step_07_desc:'Our experienced team carries out assembly and connections of all equipment.',
    step_08_title:'Commissioning & Training', step_08_desc:'System tests performed, performance verified. Customer personnel trained on equipment use.'
  },
  surdurulebilirlik_page:{
    hero_title:'Efficient and Responsible Store Systems',
    hero_subtitle:'Nokta Dizayn embraces energy efficiency as a responsibility toward business partners and the environment.',
    body_text:"Commercial refrigeration systems are responsible for 40-60% of a retail store's total energy consumption. Reducing this consumption lowers operating costs and minimizes carbon footprint.",
    topics_eyebrow:'OUR APPROACH', topics_title:'8 Areas of Efficiency Focus',
    t01_title:'Low energy consumption', t01_desc:'We design equipment minimizing total energy use with efficient compressors, EC fan motors and LED lighting.',
    t02_title:'Right capacity selection', t02_desc:'The right capacity determined by engineering calculations increases both efficiency and equipment lifespan.',
    t03_title:'Cold chain safety', t03_desc:'Reliable cooling protects food safety and product quality while reducing spoilage losses.',
    t04_title:'Reducing operating costs', t04_desc:'With low energy consumption and long maintenance intervals, total cost of ownership is optimized.',
    t05_title:'Long-lasting equipment', t05_desc:'Equipment made with industrial-grade materials and quality control delivers reliable performance for years.',
    t06_title:'System optimization', t06_desc:'Energy management and maintenance efficiency are provided together with smart control platforms.',
    t07_title:'Maintaining efficiency with maintenance', t07_desc:'Periodic maintenance plans preserve equipment design efficiency and prevent unexpected failures.',
    t08_title:'Future-compatible systems', t08_desc:'Prepare your system for the future with equipment compatible with new low-GWP refrigerants.',
    case_eyebrow:'CASE STUDY', case_title:'28% Energy Savings in Gourmet Market Renovation Project',
    case_desc:'A 1,200 m² gourmet market in Istanbul renovated its cooling infrastructure with new energy-efficient equipment. Electricity consumption decreased by 28% in the first year.',
    case_btn:'Request Energy Analysis'
  },
  referanslar_page:{
    hero_title:'Our References',
    hero_subtitle:'Selections from store projects established across Turkey and in more than 60 countries.',
    stat_nokta:'Locations', stat_ulke:'Countries', stat_yil:'Years of Experience',
    cta_title:'Join This List',
    cta_subtitle:"Let's determine the best solution for your store together. Our team is ready for quotes and consultation.",
    cta_btn:'Get a Quote'
  }
};

const de = {
  magaza_page:{
    hero_eyebrow:'LADENSYSTEME', hero_title:'Integrierte Ladenlösungen für jeden Sektor',
    hero_subtitle:'Vom Supermarkt bis zur Apotheke, vom Baumarkt zum Café; individuelle Regal- und Gerätesysteme.',
    cta_title:'Welche Lösung ist die richtige für Sie?', cta_subtitle:'Unser Engineering-Team analysiert die Anforderungen Ihres Geschäfts und erstellt einen maßgeschneiderten Lösungsplan.', cta_btn:'Kostenlose Analyse anfragen',
    s01_title:'Supermarkt-Regalsysteme', s01_desc:'Wir entwerfen, fertigen und installieren umfassende Regal- und Displaysysteme für alle Einzelhandelsformate — von Supermärkten bis zu Tankstellenshops. Doppelseitige Gondolregale, Wandregale und Kassensysteme bringen Ihren Ladeplan effizient um.',
    s01_slide1_title:'Hypermarkt & Supermarkt', s01_slide1_sub:'Flexible, langlebige und erweiterbare Regalsysteme.',
    s01_slide2_title:'Kasse, Theke & Ständer', s01_slide2_sub:'POS-Lösungen, die das Kundenerlebnis verbessern.',
    s01_slide3_title:'Tankstellen', s01_slide3_sub:'Kompakte Shop-Ausrüstung für maximale Effizienz.',
    s02_title:'Metzgerei, Fisch & Tiefkühl', s02_desc:'Professionelle Präsentationslösungen ohne Unterbrechung der Kühlkette — von Fleischertheken bis zu Fischauslagen. Gebogene oder flache Glastheken bei +2/+4°C für Fleisch; Edelstahltheken für Fisch; Tiefkühler bei -18°C.',
    s02_slide1_title:'Fleischertheken', s02_slide1_sub:'Professionelle Theken- und Vitrinenlösungen.',
    s02_slide2_title:'Tiefkühlschränke', s02_slide2_sub:'Sichere Tiefkühlpräsentation mit Hochleistungskühlsystemen.',
    s03_title:'Fast Food', s03_desc:'Edelstahlthekensysteme, Warmhaltetheken und Kühlpräsentationsschränke für Fast-Food-Ketten. Serienfertigungskapazität in festen Maßen und Farbstandards ermöglicht schnelle Liefertermine.',
    s03_slide1_title:'Fast-Food-Ketten', s03_slide1_sub:'Ergonomische Thekensysteme und funktionale Serviceausstattung.',
    s03_slide2_title:'Servicetheken & Vitrinen', s03_slide2_sub:'Warm-Kalt-Präsentationsvitrinen und Edelstahl-Thekenlinien integriert.',
    s04_title:'Coffee Shops', s04_desc:'Für Cafés kombinieren wir Barista-Thekenergonomie, Under-Counter-Kühlerintegration und Markenfarbanwendungen in einem Projekt.',
    s04_slide1_title:'Café-Thekensysteme', s04_slide1_sub:'Ergonomische Theken- und Under-Counter-Ausstattungslösungen.',
    s04_slide2_title:'Café-Ketten', s04_slide2_sub:'Serienfertigungsunterstützung mit anpassbaren Oberflächen.',
    s05_title:'Obst & Gemüse-Regale', s05_desc:'Geneigte Regalstrukturen, Farbkontrast-Auslagengestaltungen und offene Regalsysteme für frische Produkte. Schwerkraftfluss-Regale positionieren Produkte immer nach vorne.',
    s05_slide1_title:'Obst- & Gemüseregale', s05_slide1_sub:'Spezielle Schrägregalsysteme für maximale Sichtbarkeit.',
    s05_slide2_title:'Frischbereich-Gestaltung', s05_slide2_sub:'Frischpräsentation mit Farbkontrast und offener Regalstruktur.',
    s06_title:'Bäckerei-Regale', s06_desc:'Drahtbrotregale, wärmegeschützte Gebäckvitrinen und Holzoptik-MDF-Beschichtungen schaffen eine warme Bereichsatmosphäre. Dampfbeständige Epoxidbeschichtung oder Edelstahl garantieren Langlebigkeit.',
    s06_slide1_title:'Brot & Backwaren-Regale', s06_slide1_sub:'Frische Präsentation mit optimierter Regaltiefe und Belüftung.',
    s06_slide2_title:'Konditoreivitrinen', s06_slide2_sub:'Visuelle und hygienische Konditoreiprodukte-Präsentation.'
  },
  servis_page:{
    hero_title:'Technischer Kundendienst und Wartungsunterstützung nach dem Verkauf',
    hero_subtitle:'Wir bleiben auch nach der Installation an Ihrer Seite: technischer Service, Wartung, Ersatzteile und Retrofit.',
    btn_servis:'Serviceanfrage einreichen', btn_destek:'Technischer Support',
    section_eyebrow:'UNSERE LEISTUNGEN', section_title:'Service- und Supportleistungen',
    section_subtitle:'Umfassende Supportleistungen für optimale Geräteleistung.'
  },
  proje_page:{
    hero_eyebrow:'PROJEKT & ENGINEERING', hero_title:'Vollständiges Prozessmanagement vom Konzept bis zur Umsetzung',
    hero_subtitle:'Von der Bedarfsanalyse bis zur Inbetriebnahme in 8 Schritten.',
    btn_start:'Projekt starten', btn_consult:'Engineering-Beratung',
    steps_eyebrow:'PROJEKTPROZESS', steps_title:'Vollständiges Ladenprojekt in 8 Schritten',
    steps_subtitle:'Jedes Projekt durchläuft denselben rigorosen Prozess: vom Design bis zur Lieferung.',
    gallery_eyebrow:'AUS ABGESCHLOSSENEN PROJEKTEN', gallery_title:'Aus dem Feld',
    gallery_subtitle:'Bilder aus Ladenprojekten in verschiedenen Sektoren und Größen.',
    cta_title:'Starten wir Ihr Projekt', cta_subtitle:'Unabhängig von der Größe Ihres Projekts plant unser Team die optimale Lösung.',
    cta_primary:'Angebot einholen', cta_secondary:'Beratung anfragen',
    step_01_title:'Bedarfsanalyse', step_01_desc:'Kundenbedarf, Betriebsziele und Budgetparameter werden detailliert analysiert.',
    step_02_title:'Vor-Ort-Besichtigung', step_02_desc:'Das Geschäft wird vor Ort inspiziert. Raummaße werden aufgenommen.',
    step_03_title:'Konzept & Design', step_03_desc:'Das richtige Produkt, Kapazität und Systemarchitektur werden geplant.',
    step_04_title:'Engineering-Planung', step_04_desc:'Kühllast, Energieverbrauch und Systemanforderungen werden berechnet.',
    step_05_title:'Produktion', step_05_desc:'Die Fertigung beginnt in unserer 11.000 m² Produktionsstätte.',
    step_06_title:'Logistik', step_06_desc:'Alle Geräte werden für pünktliche und sichere Lieferung verpackt.',
    step_07_title:'Vor-Ort-Installation', step_07_desc:'Unser Installationsteam führt Montage und Anschlüsse durch.',
    step_08_title:'Inbetriebnahme & Schulung', step_08_desc:'Systemtests durchgeführt, Leistung verifiziert. Personal wird geschult.'
  },
  surdurulebilirlik_page:{
    hero_title:'Effiziente und verantwortungsvolle Ladensysteme',
    hero_subtitle:'Nokta Dizayn betrachtet Energieeffizienz als Verantwortung gegenüber Geschäftspartnern und der Umwelt.',
    body_text:'Gewerbliche Kühlanlagen sind für 40-60% des Gesamtenergieverbrauchs eines Einzelhandelsgeschäfts verantwortlich.',
    topics_eyebrow:'UNSER ANSATZ', topics_title:'8 Bereiche der Effizienz',
    t01_title:'Geringer Energieverbrauch', t01_desc:'Energieeffiziente Kompressoren, EC-Ventilatormotoren und LED minimieren den Gesamtverbrauch.',
    t02_title:'Richtige Kapazitätsauswahl', t02_desc:'Die richtige Kapazität durch Engineering-Berechnungen erhöht Effizienz und Lebensdauer.',
    t03_title:'Kühlkettensicherheit', t03_desc:'Zuverlässige Kühlleistung schützt Lebensmittelsicherheit und Produktqualität.',
    t04_title:'Betriebskosten senken', t04_desc:'Geringe Energie und lange Wartungsintervalle optimieren die Gesamtbetriebskosten.',
    t05_title:'Langlebige Geräte', t05_desc:'Industriequalität und Qualitätskontrolle garantieren viele Jahre zuverlässige Leistung.',
    t06_title:'Systemoptimierung', t06_desc:'Intelligente Steuerungsplattformen vereinen Energiemanagement und Wartungseffizienz.',
    t07_title:'Effizienz durch Wartung', t07_desc:'Periodische Wartungspläne erhalten die Auslegungseffizienz.',
    t08_title:'Zukunftsfähige Systeme', t08_desc:'Kompatibel mit neuen Kältemitteln niedriger GWP für die Zukunft.',
    case_eyebrow:'FALLSTUDIE', case_title:'28% Energieeinsparung bei Gourmetmarkt-Renovierung',
    case_desc:'Ein 1.200 m² Gourmetmarkt in Istanbul sparte im ersten Jahr 28% Strom durch neue energieeffiziente Kühlgeräte.',
    case_btn:'Energieanalyse anfragen'
  },
  referanslar_page:{
    hero_title:'Unsere Referenzen',
    hero_subtitle:'Auswahl aus Projekten in der Türkei und in mehr als 60 Ländern.',
    stat_nokta:'Standorte', stat_ulke:'Länder', stat_yil:'Jahre Erfahrung',
    cta_title:'Schließen Sie sich dieser Liste an',
    cta_subtitle:'Lassen Sie uns gemeinsam die beste Lösung für Ihr Geschäft bestimmen.',
    cta_btn:'Angebot einholen'
  }
};

const fr = {
  magaza_page:{
    hero_eyebrow:'SYSTÈMES DE MAGASIN', hero_title:'Solutions de Magasin Intégrées pour Chaque Secteur',
    hero_subtitle:"Du supermarché à la pharmacie, de la quincaillerie au café; systèmes de rayonnage et d'équipements sur mesure.",
    cta_title:'Quelle solution vous convient?', cta_subtitle:"Notre équipe analyse les besoins de votre magasin et prépare un plan personnalisé.", cta_btn:'Demander une analyse gratuite',
    s01_title:'Systèmes de Rayonnage Supermarché', s01_desc:"Nous concevons, fabriquons et installons des systèmes de rayonnage pour tous les formats de commerce — des supermarchés aux stations-service. Gondoles double face, rayonnages muraux et présentoirs de caisse.",
    s01_slide1_title:'Hypermarché & Supermarché', s01_slide1_sub:'Systèmes flexibles, durables et extensibles.',
    s01_slide2_title:'Caisse, Comptoir & Présentoirs', s01_slide2_sub:"Solutions POS améliorant l'expérience client.",
    s01_slide3_title:'Stations-service', s01_slide3_sub:'Équipements compacts pour efficacité maximale.',
    s02_title:'Boucherie, Poisson & Surgelés', s02_desc:"Solutions d'exposition professionnelles sans rupture de chaîne du froid — comptoirs de boucherie, étals de poisson, vitrines de surgelés. Comptoirs vitrés à +2/+4°C pour viande; inox pour poisson; -18°C pour surgelés.",
    s02_slide1_title:'Comptoirs de Boucherie', s02_slide1_sub:'Solutions professionnelles pour présentation hygiénique.',
    s02_slide2_title:'Armoires de Surgélation', s02_slide2_sub:'Présentation sécurisée avec systèmes haute capacité.',
    s03_title:'Fast Food', s03_desc:"Comptoirs en inox, présentoirs chauffants et armoires réfrigérées pour restaurants rapides. Production en série dans des dimensions standardisées pour les franchises.",
    s03_slide1_title:'Chaînes Fast Food', s03_slide1_sub:'Systèmes ergonomiques pour service rapide.',
    s03_slide2_title:'Comptoirs & Vitrines', s03_slide2_sub:'Vitrines chaud-froid et lignes de comptoirs intégrées.',
    s04_title:'Coffee Shops', s04_desc:"Pour les cafés, ergonomie barista, réfrigération encastrée et couleurs de marque en un projet. Revêtements personnalisables pour chaque identité de café.",
    s04_slide1_title:'Systèmes de Comptoir', s04_slide1_sub:"Solutions ergonomiques optimisant le flux barista.",
    s04_slide2_title:'Chaînes de Café', s04_slide2_sub:'Production en série avec options personnalisables.',
    s05_title:'Rayons Fruits & Légumes', s05_desc:"Rayonnages inclinés, présentations à contraste de couleurs et systèmes ouverts pour produits frais. Les systèmes à flux gravitationnel gardent les produits toujours en avant.",
    s05_slide1_title:'Rayons Fruits & Légumes', s05_slide1_sub:'Systèmes inclinés pour visibilité maximale.',
    s05_slide2_title:'Aménagement Espace Frais', s05_slide2_sub:"Présentation avec contraste de couleurs et rayonnages ouverts.",
    s06_title:'Rayons Boulangerie', s06_desc:"Présentoirs à pain sur fil, vitrines thermiques et MDF aspect bois pour une atmosphère chaude. Époxy résistant à la vapeur ou inox pour durabilité.",
    s06_slide1_title:'Rayonnages Pain', s06_slide1_sub:'Présentation avec profondeur et ventilation optimisées.',
    s06_slide2_title:'Vitrines Pâtisserie', s06_slide2_sub:'Présentation visuelle et hygiénique avec vitrines thermiques.'
  },
  servis_page:{
    hero_title:'Service Technique et Maintenance Après-Vente',
    hero_subtitle:"Nous restons à vos côtés après l'installation: service technique, maintenance, pièces et retrofit.",
    btn_servis:'Soumettre une demande', btn_destek:'Support technique',
    section_eyebrow:'NOS SERVICES', section_title:'Services de Support',
    section_subtitle:"Services complets pour que vos équipements fonctionnent à efficacité maximale."
  },
  proje_page:{
    hero_eyebrow:'PROJET & INGÉNIERIE', hero_title:'Gestion Complète du Processus du Concept à la Réalisation',
    hero_subtitle:"De l'analyse à la mise en service en 8 étapes.",
    btn_start:'Démarrer votre projet', btn_consult:"Consultation en ingénierie",
    steps_eyebrow:'PROCESSUS DE PROJET', steps_title:'Projet Complet en 8 Étapes',
    steps_subtitle:'Chaque projet suit le même processus rigoureux.',
    gallery_eyebrow:'PROJETS RÉALISÉS', gallery_title:'Du Terrain',
    gallery_subtitle:'Images de projets réalisés dans différents secteurs.',
    cta_title:'Démarrons votre projet', cta_subtitle:"Notre équipe planifie la solution optimale quelle que soit la taille du projet.",
    cta_primary:'Demander un devis', cta_secondary:'Demander une consultation',
    step_01_title:'Analyse des besoins', step_01_desc:'Les besoins et paramètres budgétaires sont analysés en détail.',
    step_02_title:'Visite de site', step_02_desc:'Le local est inspecté sur place. Les mesures sont prises.',
    step_03_title:'Concept & Conception', step_03_desc:'Produit, capacité et architecture système planifiés. Plans 2D/3D préparés.',
    step_04_title:"Planification d'ingénierie", step_04_desc:'Charge de refroidissement et consommation calculées.',
    step_05_title:'Production', step_05_desc:"La fabrication commence dans notre usine de 11 000 m².",
    step_06_title:'Logistique', step_06_desc:'Tous les équipements emballés pour livraison sécurisée.',
    step_07_title:'Installation sur site', step_07_desc:"Notre équipe effectue le montage et les connexions.",
    step_08_title:'Mise en service & Formation', step_08_desc:'Tests effectués, performances vérifiées. Personnel formé.'
  },
  surdurulebilirlik_page:{
    hero_title:'Systèmes de Magasin Efficaces et Responsables',
    hero_subtitle:"Nokta Dizayn adopte l'efficacité énergétique comme responsabilité envers ses partenaires et l'environnement.",
    body_text:"Les systèmes de réfrigération commerciale représentent 40-60% de la consommation d'énergie totale d'un magasin.",
    topics_eyebrow:'NOTRE APPROCHE', topics_title:"8 Domaines d'Efficacité",
    t01_title:"Faible consommation d'énergie", t01_desc:'Compresseurs efficients, moteurs EC et LED minimisent la consommation.',
    t02_title:'Sélection de capacité correcte', t02_desc:'La capacité calculée par ingénierie augmente efficacité et durée de vie.',
    t03_title:'Sécurité de la chaîne du froid', t03_desc:'Refroidissement fiable protège la qualité et sécurité alimentaire.',
    t04_title:"Réduction des coûts d'exploitation", t04_desc:"Faible consommation et longs intervalles de maintenance optimisent le TCO.",
    t05_title:'Équipements longue durée', t05_desc:'Matériaux industriels et contrôle qualité pour performance fiable.',
    t06_title:'Optimisation du système', t06_desc:'Plateformes intelligentes pour gestion énergie et maintenance.',
    t07_title:'Efficacité par la maintenance', t07_desc:'Plans périodiques préservent efficacité et préviennent pannes.',
    t08_title:'Systèmes compatibles avenir', t08_desc:'Compatible avec réfrigérants nouvelle génération à faible GWP.',
    case_eyebrow:'ÉTUDE DE CAS', case_title:"28% d'économies dans un marché gourmet",
    case_desc:"Un marché de 1 200 m² à Istanbul a réduit sa consommation d'électricité de 28% la première année.",
    case_btn:"Demander une analyse énergétique"
  },
  referanslar_page:{
    hero_title:'Nos Références',
    hero_subtitle:"Sélections de projets réalisés en Turquie et dans plus de 60 pays.",
    stat_nokta:'Points de vente', stat_ulke:'Pays', stat_yil:"Ans d'expérience",
    cta_title:'Rejoignez cette liste',
    cta_subtitle:"Déterminons ensemble la meilleure solution pour votre magasin.",
    cta_btn:'Demander un devis'
  }
};

const es = {
  magaza_page:{
    hero_eyebrow:'SISTEMAS DE TIENDA', hero_title:'Soluciones de Tienda Integradas para Cada Sector',
    hero_subtitle:'Desde supermercados hasta farmacias, de ferreterías a cafeterías; sistemas a medida.',
    cta_title:'¿Qué solución le conviene?', cta_subtitle:'Nuestro equipo analiza sus necesidades y prepara un plan personalizado.', cta_btn:'Solicitar análisis gratuito',
    s01_title:'Sistemas de Estanterías Supermercado', s01_desc:'Diseñamos, fabricamos e instalamos sistemas de estanterías para todos los formatos minoristas. Góndolas, estanterías murales, expositores de caja y esquinas personalizadas.',
    s01_slide1_title:'Hipermercado & Supermercado', s01_slide1_sub:'Estanterías flexibles, duraderas y ampliables.',
    s01_slide2_title:'Caja, Mostrador & Expositores', s01_slide2_sub:'Soluciones POS que mejoran la experiencia del cliente.',
    s01_slide3_title:'Estaciones de Servicio', s01_slide3_sub:'Equipos compactos para máxima eficiencia.',
    s02_title:'Carnicería, Pescado y Congelados', s02_desc:'Soluciones de exposición profesionales sin romper la cadena de frío. Mostradores a +2/+4°C para carne; inox con hielo para pescado; -18°C para congelados.',
    s02_slide1_title:'Mostradores de Carnicería', s02_slide1_sub:'Soluciones profesionales para presentación higiénica.',
    s02_slide2_title:'Congeladores', s02_slide2_sub:'Exposición segura con sistemas de alta capacidad.',
    s03_title:'Fast Food', s03_desc:'Mostradores de acero inoxidable, vitrinas calentadoras y armarios refrigerados para cadenas de comida rápida. Producción en serie en dimensiones estándar para franquicias.',
    s03_slide1_title:'Cadenas Fast Food', s03_slide1_sub:'Sistemas ergonómicos para servicio rápido.',
    s03_slide2_title:'Mostradores & Vitrinas', s03_slide2_sub:'Vitrinas caliente-frío y mostradores de inox integrados.',
    s04_title:'Coffee Shops', s04_desc:'Para cafeterías, ergonomía barista, refrigeración bajo mostrador y colores de marca en un proyecto. Revestimientos personalizables para cada identidad.',
    s04_slide1_title:'Sistemas de Mostrador', s04_slide1_sub:'Soluciones ergonómicas optimizando el flujo barista.',
    s04_slide2_title:'Cadenas de Café', s04_slide2_sub:'Producción en serie con opciones personalizables.',
    s05_title:'Sección Frutas y Verduras', s05_desc:'Estanterías inclinadas, contraste de color y sistemas abiertos para productos frescos. El flujo gravitacional mantiene productos siempre hacia adelante.',
    s05_slide1_title:'Expositores de Frescos', s05_slide1_sub:'Estanterías inclinadas para máxima visibilidad.',
    s05_slide2_title:'Zona Fresca', s05_slide2_sub:'Presentación atractiva con contraste de color.',
    s06_title:'Sección de Panadería', s06_desc:'Expositores de alambre, vitrinas térmicas y MDF efecto madera crean ambiente cálido. Epoxi resistente al vapor o acero inoxidable garantizan durabilidad.',
    s06_slide1_title:'Estanterías de Pan', s06_slide1_sub:'Presentación fresca con profundidad y ventilación optimizadas.',
    s06_slide2_title:'Vitrinas de Pastelería', s06_slide2_sub:'Presentación visual e higiénica con vitrinas térmicas.'
  },
  servis_page:{
    hero_title:'Servicio Técnico y Mantenimiento Posventa',
    hero_subtitle:'Permanecemos a su lado después de la instalación: servicio técnico, mantenimiento, repuestos y retrofit.',
    btn_servis:'Enviar solicitud de servicio', btn_destek:'Soporte técnico',
    section_eyebrow:'NUESTROS SERVICIOS', section_title:'Servicios de Soporte',
    section_subtitle:'Servicios de soporte integrales para máxima eficiencia de sus equipos.'
  },
  proje_page:{
    hero_eyebrow:'PROYECTO E INGENIERÍA', hero_title:'Gestión Completa del Proceso del Concepto a la Aplicación',
    hero_subtitle:'Del análisis a la puesta en marcha en 8 pasos.',
    btn_start:'Iniciar su proyecto', btn_consult:'Consultoría de ingeniería',
    steps_eyebrow:'PROCESO DE PROYECTO', steps_title:'Proyecto Completo en 8 Pasos',
    steps_subtitle:'Cada proyecto sigue el mismo proceso riguroso.',
    gallery_eyebrow:'PROYECTOS COMPLETADOS', gallery_title:'Del Campo',
    gallery_subtitle:'Imágenes de proyectos en diferentes sectores y escalas.',
    cta_title:'Iniciemos su proyecto', cta_subtitle:'Nuestro equipo planifica la solución óptima cualquiera sea el tamaño.',
    cta_primary:'Solicitar presupuesto', cta_secondary:'Solicitar consultoría',
    step_01_title:'Análisis de necesidades', step_01_desc:'Necesidades, objetivos y parámetros presupuestarios analizados en detalle.',
    step_02_title:'Visita al sitio', step_02_desc:'El local es inspeccionado. Se toman medidas del espacio.',
    step_03_title:'Concepto & Diseño', step_03_desc:'Producto, capacidad y arquitectura sistema planificados. Planos 2D/3D preparados.',
    step_04_title:'Planificación de ingeniería', step_04_desc:'Carga de refrigeración y consumo calculados con software.',
    step_05_title:'Producción', step_05_desc:'Fabricación en nuestra planta de 11.000 m² según planos aprobados.',
    step_06_title:'Logística', step_06_desc:'Todos los equipos empaquetados para entrega segura y puntual.',
    step_07_title:'Instalación en obra', step_07_desc:'Nuestro equipo realiza montaje y conexiones.',
    step_08_title:'Puesta en marcha y Formación', step_08_desc:'Pruebas realizadas, rendimiento verificado. Personal capacitado.'
  },
  surdurulebilirlik_page:{
    hero_title:'Sistemas de Tienda Eficientes y Responsables',
    hero_subtitle:'Nokta Dizayn adopta la eficiencia energética como responsabilidad hacia sus socios y el medio ambiente.',
    body_text:'Los sistemas de refrigeración comercial representan el 40-60% del consumo energético total de una tienda minorista.',
    topics_eyebrow:'NUESTRO ENFOQUE', topics_title:'8 Áreas de Eficiencia',
    t01_title:'Bajo consumo de energía', t01_desc:'Compresores eficientes, motores EC y LED minimizan el consumo total.',
    t02_title:'Selección correcta de capacidad', t02_desc:'La capacidad correcta aumenta eficiencia y vida útil del equipo.',
    t03_title:'Seguridad de la cadena de frío', t03_desc:'Refrigeración fiable protege la calidad y seguridad alimentaria.',
    t04_title:'Reducción de costos operativos', t04_desc:'Bajo consumo e intervalos de mantenimiento prolongados optimizan el TCO.',
    t05_title:'Equipos de larga duración', t05_desc:'Materiales de calidad industrial garantizan rendimiento fiable por años.',
    t06_title:'Optimización del sistema', t06_desc:'Plataformas inteligentes para gestión de energía y mantenimiento.',
    t07_title:'Eficiencia con mantenimiento', t07_desc:'Planes periódicos preservan la eficiencia de diseño.',
    t08_title:'Sistemas compatibles con el futuro', t08_desc:'Compatible con refrigerantes de nueva generación de bajo GWP.',
    case_eyebrow:'CASO DE ESTUDIO', case_title:'28% de Ahorro Energético en Mercado Gourmet',
    case_desc:'Un mercado de 1.200 m² en Estambul redujo el consumo eléctrico un 28% en el primer año con nuevos equipos.',
    case_btn:'Solicitar análisis energético'
  },
  referanslar_page:{
    hero_title:'Nuestras Referencias',
    hero_subtitle:'Selecciones de proyectos en Turquía y en más de 60 países.',
    stat_nokta:'Puntos', stat_ulke:'Países', stat_yil:'Años de experiencia',
    cta_title:'Únase a esta lista',
    cta_subtitle:'Determinemos juntos la mejor solución para su tienda.',
    cta_btn:'Solicitar presupuesto'
  }
};

const updates = {
  'messages/tr.json': tr,
  'messages/en.json': en,
  'messages/de.json': de,
  'messages/fr.json': fr,
  'messages/es.json': es,
};

Object.entries(updates).forEach(([file, additions]) => {
  const fullPath = path.join(root, file);
  const data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  Object.assign(data, additions);
  fs.writeFileSync(fullPath, JSON.stringify(data, null, 2), 'utf8');
  console.log('Updated:', file);
});
console.log('Done!');
