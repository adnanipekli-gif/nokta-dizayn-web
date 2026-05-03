import Link from "next/link"
import { notFound } from "next/navigation"
import { Metadata } from "next"

interface ServiceDetail {
  slug: string
  name: string
  description: string
  longDescription: string
  benefits: string[]
  features: string[]
  targetMarket: string[]
  caseStudies: string[]
  icon: string
}

const services: Record<string, ServiceDetail> = {
  ecocold: {
    slug: "ecocold",
    name: "Ecocold — Ticari Soğutma Çözümleri",
    description: "Enerji-verimli, güvenilir, ölçeklenebilir soğutma dolapları.",
    longDescription:
      "Perakende işletmeleri için profesyonel soğutma çözümleri. Merga sütlük sisteminden başlayarak, Navi bombe cam kasap vitrinine, merkezi soğutma ünitlerine kadar — hepsinde Ecocold'un deneyimi sizin yanında. Enerji tüketimi optimize edilmiş, IoT kontrollü, uzun ömürlü ekipmanlar.",
    benefits: [
      "Enerji maliyeti 35% düşürüldü (geçmiş müşteriler)",
      "Ürün tazalığı +40% arttı",
      "Merkezi kontrol sistemi — IoT entegrasyonlu",
      "Garantili bakım ve yedek parça desteği",
    ],
    features: [
      "Merga Sütlük Sistemi",
      "Navi Bombe Cam Kasap Vitrini",
      "Display Raf Vitrinleri",
      "Merkezi Soğutma Sistemi (scalable)",
      "Smart Kontrol Paneli",
      "Alarm ve Monitoring",
    ],
    targetMarket: ["Market Zincirleri", "Kasap Dükkanları", "Gıda Ticareti", "Balkan İşletmeleri"],
    caseStudies: ["Snowy Market", "Happy Center", "Taze Pazar"],
    icon: "❄️",
  },
  "pasifik-raf": {
    slug: "pasifik-raf",
    name: "Pasifik Raf — Modüler Raf Sistemleri",
    description: "Esnek, güvenilir, müşteri deneyimini yükseltecek raf çözümleri.",
    longDescription:
      "Perakende mağazalarında satış ve tanıtım için tasarlanmış modüler raf sistemleri. Kategorik düzen, LED aydınlatma, müşteri göz hizası konumlandırma — her detay satış hedefine alıntılanmış. 29 duvar ünitesi veya 50+ — skalabel ve ekonomik.",
    benefits: [
      "Satış hacmi +28% arttı",
      "Ürün yitimi (shrinkage) -15% azaldı",
      "Müşteri mağazada kalış süresi +22% arttı",
      "Kurulum ve bakım kolayı",
    ],
    features: [
      "Modüler Raf Sistemi (1.2m - 2.4m yükseklik)",
      "LED Aydınlatma Entegrasyonu",
      "Döner Tablalar",
      "Kanca ve Asma Setleri",
      "Depo Üniteleri",
      "Ürün Lokasyon Yazılımı",
    ],
    targetMarket: ["Süpermarket Zinciri", "İhtiyaç Malları Dükkanı", "Balkan Perakendecileri"],
    caseStudies: ["Taze Pazar", "Happy Center"],
    icon: "🏪",
  },
  "nokta-dizayn": {
    slug: "nokta-dizayn",
    name: "Nokta Dizayn — Mağaza İç Tasarımı",
    description: "Markanız için mağaza deneyimi tasarla — toza, flow'a, psikolojiye kadar.",
    longDescription:
      "Mağaza tasarımından başka bir şey değildir: müşteri deneyimi, satış psikolojisi, işletme verimliliği. Biz her açıdan — mimarî, aydınlatma, renk psikolojisi, depo ergonomisi — tasarlıyoruz. Ecocold ve Pasifik Raf ile entegre, end-to-end çözüm.",
    benefits: [
      "Müşteri memnuniyeti +4.8/5",
      "İlk ziyaretten satışa dönüş +32%",
      "Personel verimliliği +18% arttı",
      "Marka algısı premium hale geldi",
    ],
    features: [
      "Mağaza Planı ve Layout Tasarımı",
      "Renk ve Psikoloji Konsültasyonu",
      "Aydınlatma Tasarımı (mimarî ve satış)",
      "Depo Düzeni (back-of-house)",
      "Müşteri Flow Haritası",
      "3D Visualizasyon (Spline)",
    ],
    targetMarket: ["Market Zincirleri", "Premium Mağazalar", "Balkan Ekspansiyon"],
    caseStudies: ["Happy Center", "Snowy Market", "Taze Pazar"],
    icon: "🎨",
  },
}

export async function generateMetadata({ params }: { params: { service: string } }): Promise<Metadata> {
  const service = services[params.service]
  if (!service) return {}

  return {
    title: `${service.name} | Nokta Dizayn`,
    description: service.description,
  }
}

export function generateStaticParams() {
  return Object.keys(services).map((service) => ({ service }))
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const service = services[params.service]

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-nd-light">
      {/* Back Link */}
      <div className="bg-white border-b border-nd-cyan/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-nd-cyan hover:text-nd-magenta flex items-center gap-2">
            ← Ana Sayfa
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-r from-nd-teal to-nd-dark text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-6xl mb-6">{service.icon}</div>
          <h1 className="text-5xl font-bold mb-4">{service.name}</h1>
          <p className="text-xl text-nd-cyan">{service.description}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Content */}
          <div className="md:col-span-2 space-y-12">
            {/* Overview */}
            <div>
              <h2 className="text-3xl font-bold text-nd-teal mb-4">Hizmet Özeti</h2>
              <p className="text-lg text-nd-dark leading-relaxed">{service.longDescription}</p>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-nd-teal mb-6">Faydalar</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white border-l-4 border-nd-magenta rounded shadow-sm"
                  >
                    <p className="text-nd-dark">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-nd-teal mb-6">Özellikler</h2>
              <ul className="grid md:grid-cols-2 gap-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-nd-dark">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-nd-cyan/20 text-nd-cyan font-bold text-sm">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Target Market */}
            <div className="bg-white p-6 rounded-lg border border-nd-cyan/20 shadow-sm">
              <h3 className="font-bold text-nd-teal mb-4">Hedef Pazarlar</h3>
              <ul className="space-y-2">
                {service.targetMarket.map((market) => (
                  <div key={market} className="text-sm text-nd-dark flex items-center gap-2">
                    <span className="w-2 h-2 bg-nd-magenta rounded-full"></span>
                    {market}
                  </div>
                ))}
              </ul>
            </div>

            {/* Case Studies */}
            <div className="bg-white p-6 rounded-lg border border-nd-magenta/20 shadow-sm">
              <h3 className="font-bold text-nd-magenta mb-4">Case Studies</h3>
              <ul className="space-y-2">
                {service.caseStudies.map((study) => (
                  <Link
                    key={study}
                    href="/portfolio"
                    className="text-sm text-nd-teal hover:text-nd-magenta flex items-center gap-2 transition-colors"
                  >
                    → {study}
                  </Link>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="block w-full px-6 py-3 bg-nd-magenta hover:bg-nd-magenta/90 text-white rounded-lg font-semibold text-center transition-colors shadow-md"
            >
              Teklif Iste
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-nd-cyan/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-nd-teal mb-8 text-center">Diğer Hizmetler</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.values(services)
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="p-6 bg-nd-light hover:bg-nd-teal/10 rounded-lg border border-nd-cyan/20 transition-colors group"
                >
                  <div className="text-5xl mb-4">{s.icon}</div>
                  <h3 className="font-bold text-nd-teal mb-2 group-hover:text-nd-magenta transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-sm text-nd-dark">{s.description}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
