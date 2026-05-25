import type { ServiceItem } from '@/lib/types';

export const SERVICES: ServiceItem[] = [
  {
    slug: 'teknik-servis',
    name: 'Teknik Servis',
    shortDescription: 'Arıza durumlarında hızlı müdahale ve uzman teknik destek.',
    longDescription:
      'Nokta Dizayn teknik servis ekibi, soğutma sistemlerinde yaşanan arızalara hızlı müdahale eder. Deneyimli mühendis ve teknisyenlerden oluşan sahadaki ekibimiz, problem kaynağını tespit ederek kalıcı çözüm üretir.',
    icon: 'Wrench',
    features: [
      'Hızlı yanıt süresi',
      'Uzman teknik kadro',
      'Gerçek parça kullanımı',
      'Kalıcı çözüm odaklı yaklaşım',
      'Servis raporu ve garantisi',
    ],
  },
  {
    slug: 'bakim-anlasmalari',
    name: 'Bakım Anlaşmaları',
    shortDescription: 'Periyodik bakım ve önleyici servis programları ile sistemin ömrünü uzatın.',
    longDescription:
      'Periyodik bakım planları, soğutma sisteminin en yüksek verimde çalışmasını sağlar. Planlı bakım; beklenmedik arızaları önler, enerji tüketimini optimize eder ve ekipman ömrünü uzatır.',
    icon: 'Calendar',
    features: [
      'Yıllık veya altı aylık bakım programları',
      'Filtre, sızdırmazlık ve gaz kontrolü',
      'Enerji performans testi',
      'Bakım protokolü ve sertifika',
      'Öncelikli servis garatnisi',
    ],
  },
  {
    slug: 'yedek-parca',
    name: 'Yedek Parça',
    shortDescription: 'Orijinal ve alternatif yedek parça temin ve hızlı teslimat.',
    longDescription:
      'Stokta tutulan geniş yedek parça yelpazesiyle ekipmanınızın kesintisiz çalışmasını güvence altına alın. Kompresör, fan motoru, termostat, kapı contası ve daha birçok parça kısa sürede temin edilir.',
    icon: 'Package',
    features: [
      'Geniş parça stoku',
      'Orijinal veya eşdeğer parça seçeneği',
      'Hızlı kargo ve teslimat',
      'Teknik danışmanlık dahil',
    ],
  },
  {
    slug: 'garanti-surecleri',
    name: 'Garanti Süreçleri',
    shortDescription: 'Garanti kapsamındaki arıza ve sorunlarda hızlı çözüm süreci.',
    longDescription:
      'Tüm Nokta Dizayn ürünleri garanti belgesiyle teslim edilir. Garanti kapsamında oluşan arızalar için öncelikli müdahale ve parça değişimi yapılır. Garanti şartları ve süresi ürüne göre belirlenir.',
    icon: 'ShieldCheck',
    features: [
      'Standart 2 yıl ürün garantisi',
      'Garanti arızalarında ücretsiz işçilik',
      'Orijinal parça kullanımı',
      'Garanti belgesi ile teslim',
    ],
  },
  {
    slug: 'servis-talebi',
    name: 'Servis Talebi',
    shortDescription: 'Çevrimiçi form ile hızlı servis talebi oluşturun.',
    longDescription:
      'Online servis talep formumuzu doldurun, ekibimiz en kısa sürede size ulaşsın. Arıza tipi, ürün bilgisi ve aciliyet durumuna göre öncelikli rotalama yapılmaktadır.',
    icon: 'ClipboardList',
    features: [
      'Çevrimiçi form ile kolay talep',
      'Fotoğraf ve dosya ekleyebilme',
      'Aciliyet seçeneği',
      'Talep takip numarası',
    ],
  },
  {
    slug: 'enerji-verimliligi-kontrolu',
    name: 'Enerji Verimliliği Kontrolü',
    shortDescription: 'Mevcut sisteminizin enerji performansını analiz edin ve tasarruf fırsatlarını keşfedin.',
    longDescription:
      'Sahadaki uzman ekibimiz, mevcut soğutma sisteminizin enerji tüketimini ölçer ve analiz eder. Sistem verimsizliklerini tespit eder, iyileştirme önerilerini raporlar. Gerçekleştirilen optimizasyonlarla enerji maliyetlerinizi düşürün.',
    icon: 'Zap',
    features: [
      'Saha enerji ölçümü',
      'Detaylı verimlilik raporu',
      'Optimizasyon önerileri',
      'Tasarruf potansiyeli hesabı',
      'Uygulama için teknik destek',
    ],
  },
  {
    slug: 'retrofit-yenileme',
    name: 'Retrofit & Yenileme',
    shortDescription: 'Mevcut ekipmanınızı modernize edin: daha verimli, daha güvenilir.',
    longDescription:
      'Eski soğutma ekipmanınızı tamamen değiştirmek yerine kilit bileşenleri güncelleyerek sisteminizi modernize edin. Kompresör değişimi, kontrol sistemi güncellemesi ve soğutucu akışkan dönüşümü başlıca retrofit seçenekleri arasında yer almaktadır.',
    icon: 'RefreshCw',
    features: [
      'Kompresör ve motor yenileme',
      'Kontrol sistemi modernizasyonu',
      'Soğutucu akışkan dönüşümü',
      'Enerji performans iyileştirmesi',
      'Kısmi veya tam yenileme seçeneği',
    ],
  },
];
