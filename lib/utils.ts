export function slugToTitle(slug: string): string {
  const map: Record<string, string> = {
    'supermarket-hipermarket': 'Süpermarket & Hipermarket',
    'mini-market-convenience': 'Mini Market & Convenience Store',
    'kasap-sarkuteri': 'Kasap & Şarküteri',
    'pastane-kafe-gurme': 'Pastane, Kafe & Gurme Market',
    'petrol-istasyonu': 'Petrol İstasyonu',
    'endustriyel-sogutma': 'Endüstriyel Soğutma',
    'soguk-oda-merkezi-sistem': 'Soğuk Oda & Merkezi Sistem',
    'servis-reyonlari': 'Servis Reyonları',
    'tam-boy-dikey-reyonlar': 'Tam Boy Dikey Reyonlar',
    'yarim-boy-dikey-reyonlar': 'Yarım Boy Dikey Reyonlar',
    'dikey-cam-kapili-dolaplar': 'Dikey Cam Kapılı Dolaplar',
    'havuz-tipi-dolaplar': 'Havuz Tipi Dolaplar',
    'kombine-tip-dolaplar': 'Kombine Tip Dolaplar',
    'kondenser-uniteleri': 'Kondenser Üniteleri',
    'merkezi-sistemler': 'Merkezi Sistemler',
    'chiller-uniteleri': 'Chiller Üniteleri',
    'soguk-oda-cozumleri': 'Soğuk Oda Çözümleri',
  };
  return map[slug] || slug.replace(/-/g, ' ');
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
