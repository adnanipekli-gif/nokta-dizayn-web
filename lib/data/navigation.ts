import type { NavItem } from '@/lib/types';

export const NAVIGATION: NavItem[] = [
  {
    label: 'Mağaza Sistemleri',
    href: '/magaza-sistemleri',
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
      {
        slug: 'katalog',
        label: 'Ürün Kataloğu',
        href: '/urunler/katalog',
        tagline: 'Tüm ürünleri PDF olarak görüntüle',
        icon: 'BookOpen',
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
    label: 'Referanslar',
    href: '/referanslar',
  },
  {
    label: 'İletişim',
    href: '/iletisim',
  },
];
