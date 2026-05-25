import type { NavItem } from '@/lib/types';

export const NAVIGATION: NavItem[] = [
  {
    label: 'Mağaza Sistemleri',
    children: [
      {
        label: 'Süpermarket & Hipermarket',
        href: '/magaza-sistemleri/supermarket-hipermarket',
        description: 'Büyük ölçekli market formatları için entegre mağaza çözümleri',
        icon: 'ShoppingCart',
      },
      {
        label: 'Mini Market & Convenience',
        href: '/magaza-sistemleri/mini-market-convenience',
        description: 'Kompakt ve verimli mağaza sistemleri',
        icon: 'Store',
      },
      {
        label: 'Kasap, Balık & Premium Gıda',
        href: '/magaza-sistemleri/kasap-balik-premium',
        description: 'Et, balık ve premium gıda bölümleri için özel çözümler',
        icon: 'Fish',
      },
      {
        label: 'Pastane, Kafe & Gurme',
        href: '/magaza-sistemleri/pastane-kafe-gurme',
        description: 'Estetik sunum ve mağaza tasarımı',
        icon: 'Coffee',
      },
      {
        label: 'Petrol İstasyonu Market',
        href: '/magaza-sistemleri/petrol-istasyonu',
        description: 'İstasyon marketleri için kompakt mağaza sistemleri',
        icon: 'Fuel',
      },
    ],
  },
  {
    label: 'Ürünler',
    href: '/urunler',
    groups: [
      {
        slug: 'remote',
        label: 'Remote',
        href: '/urunler/remote',
        tagline: 'Merkezi soğutma sistemine bağlı',
        icon: 'Network',
        children: [
          { label: 'Remote Sütlük', href: '/urunler/remote/remote-sutluk', icon: 'Refrigerator', description: 'MERGA serisi merkezi sistemli sütlük reyonları' },
          { label: 'Remote Şarküteri', href: '/urunler/remote/remote-sarkuteri', icon: 'Beef', description: 'NAVI ve NAVI HYPNOS serisi şarküteri reyonları' },
          { label: 'Remote Derin Dondurucu', href: '/urunler/remote/remote-derin-dondurucu', icon: 'Snowflake', description: 'GRAFIAS serisi derin dondurucular' },
          { label: 'Remote Yatay Freezer', href: '/urunler/remote/remote-yatay-freezer', icon: 'Box', description: 'BAHAM ve IZAR yatay freezer dolapları' },
        ],
      },
      {
        slug: 'plug-in',
        label: 'Plug-In',
        href: '/urunler/plug-in',
        tagline: 'Bağımsız kompresörlü, kolay kurulum',
        icon: 'Zap',
        children: [
          { label: 'Plug-In Sütlük', href: '/urunler/plug-in/plug-in-sutluk', icon: 'Refrigerator', description: 'GATRIA serisi bağımsız kompresörlü sütlük reyonları' },
          { label: 'Plug-In Şarküteri', href: '/urunler/plug-in/plug-in-sarkuteri', icon: 'Beef', description: 'SADIRA serisi plug-in şarküteri reyonları' },
          { label: 'Plug-In Promosyon', href: '/urunler/plug-in/plug-in-promosyon', icon: 'ShoppingBag', description: 'PROPUS ve BRISBANE promosyon dolapları' },
        ],
      },
    ],
  },
  {
    label: 'Proje & Mühendislik',
    href: '/proje-muhendislik',
  },
  {
    label: 'Servis & Destek',
    href: '/servis-destek',
  },
  {
    label: 'Kurumsal',
    children: [
      {
        label: 'Hakkımızda',
        href: '/kurumsal',
        description: 'Şirket tarihimiz, değerlerimiz ve ekibimiz',
        icon: 'Building2',
      },
      {
        label: 'Sürdürülebilirlik',
        href: '/surdurulebilirlik',
        description: 'Enerji verimliliği ve çevre yaklaşımımız',
        icon: 'Leaf',
      },
    ],
  },
  {
    label: 'İletişim',
    href: '/iletisim',
  },
];
