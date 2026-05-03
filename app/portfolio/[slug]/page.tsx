import Link from "next/link"
import { notFound } from "next/navigation"
import { Metadata } from "next"

interface CaseStudyDetail {
  slug: string
  name: string
  client: string
  location: string
  year: number
  services: string[]
  challenge: string
  solution: string
  results: string[]
  images: string[]
  technologies: string[]
  ecocoldProducts?: string[]
  pasifikProducts?: string[]
}

const caseStudies: Record<string, CaseStudyDetail> = {
  "snowy-market": {
    slug: "snowy-market",
    name: "Snowy Market — Taze Soğutma Vitrini",
    client: "Snowy Market",
    location: "İstanbul",
    year: 2025,
    services: ["Ecocold", "Nokta Dizayn", "Konsültasyon"],
    challenge:
      "Eski ve verimsiz soğutma vitrini → Güvenilir, enerji tasarruflı, müşteri çekici çözüme geçiş.",
    solution:
      "Ecocold Merga sütlük sistemi + Navi bombe cam kasap vitrini + merkezi soğutma entegrasyonu → Premium görünüm + operasyonel verimlilik.",
    results: [
      "Enerji tüketimi %35 azaldı",
      "Ürün taze tutma süresi %40 arttı",
      "Müşteri memnuniyeti 4.8/5 puan",
    ],
    images: ["/case-snowy-1.jpg", "/case-snowy-2.jpg"],
    technologies: ["Ecocold", "Merkezi Soğutma", "IoT Kontrol"],
    ecocoldProducts: ["Merga Sütlük", "Navi Bombe Cam Kasap Vitrini", "Merkezi Soğutma Sistemi"],
  },
  "taze-pazar": {
    slug: "taze-pazar",
    name: "Taze Pazar — Raf Sistemi Yenileme",
    client: "Taze Pazar Sultanbeyli",
    location: "İstanbul",
    year: 2025,
    services: ["Pasifik Raf", "Nokta Dizayn", "Kurulum"],
    challenge:
      "29 duvar alanı → Kaotik dizilim, az satış, müşteri navigasyon sorunu.",
    solution:
      "Pasifik raf sistemi → Modüler tasarım, ürün kategorilerine göre organize, LED aydınlatma, satış göz hizasında konumlandırma.",
    results: [
      "Satış hacmi %28 arttı",
      "Ürün yitimleri (shrinkage) %15 azaldı",
      "Müşteri mağazada kalış süresi %22 arttı",
    ],
    images: ["/case-taze-1.jpg", "/case-taze-2.jpg"],
    technologies: ["Modüler Raf Sistemi", "LED Aydınlatma", "Ürün Lokasyon Yazılımı"],
    pasifikProducts: ["29 Duvar Ünitesi", "Modüler Tabanlar", "LED Aydınlatma Kitleri"],
  },
  "happy-center": {
    slug: "happy-center",
    name: "Happy Center — Entegre Mağaza Çözümü",
    client: "Happy Center",
    location: "İstanbul",
    year: 2026,
    services: ["Ecocold", "Pasifik Raf", "Nokta Dizayn", "Proje Yönetimi"],
    challenge:
      "Yeni mağaza açılışı — 0'dan 100'e tasarım, tedarik ve kurulum.",
    solution:
      "Entegre proje: Ecocold merkezi soğutma sistemi + Pasifik modüler raf + Nokta Dizayn tam iç tasarım → Açılıştan itibaren operasyonel mükemmellik.",
    results: [
      "Açılış zamanında tamamlandı",
      "İlk ay satış hedefi %18 aşıldı",
      "Operasyonel verimlilik %90 + KPI sağlandı",
    ],
    images: ["/case-happy-1.jpg", "/case-happy-2.jpg", "/case-happy-3.jpg"],
    technologies: ["Merkezi Soğutma", "Modüler Raf", "POS Entegrasyonu"],
    ecocoldProducts: ["Merkezi Soğutma Sistemi", "Display Vitrini"],
    pasifikProducts: ["Raf Sistemi", "Depo Üniteleri"],
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const study = caseStudies[params.slug]
  if (!study) return {}

  return {
    title: `${study.name} | Nokta Dizayn`,
    description: study.challenge,
  }
}

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }))
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies[params.slug]

  if (!study) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-nd-light">
      {/* Back Link */}
      <div className="bg-white border-b border-nd-cyan/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/portfolio" className="text-nd-cyan hover:text-nd-magenta flex items-center gap-2">
            ← Portföye Dön
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-nd-teal to-nd-dark text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-nd-cyan text-sm mb-2">Case Study</p>
          <h1 className="text-5xl font-bold mb-4">{study.name}</h1>
          <p className="text-lg text-nd-light mb-6 max-w-2xl">{study.challenge}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div>
              <p className="text-nd-cyan text-sm">Müşteri</p>
              <p className="font-semibold">{study.client}</p>
            </div>
            <div>
              <p className="text-nd-cyan text-sm">Konum</p>
              <p className="font-semibold">{study.location}</p>
            </div>
            <div>
              <p className="text-nd-cyan text-sm">Yıl</p>
              <p className="font-semibold">{study.year}</p>
            </div>
            <div>
              <p className="text-nd-cyan text-sm">Hizmetler</p>
              <p className="font-semibold text-sm">{study.services.length} Hizmet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Challenge */}
            <div>
              <h2 className="text-3xl font-bold text-nd-teal mb-4">Sorun</h2>
              <p className="text-lg text-nd-dark leading-relaxed">{study.challenge}</p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-3xl font-bold text-nd-teal mb-4">Çözüm</h2>
              <p className="text-lg text-nd-dark leading-relaxed">{study.solution}</p>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-3xl font-bold text-nd-teal mb-4">Sonuçlar</h2>
              <ul className="space-y-3">
                {study.results.map((result, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-nd-magenta font-bold text-lg mt-1">✓</span>
                    <span className="text-lg text-nd-dark">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Services */}
            <div className="bg-white p-6 rounded-lg border border-nd-cyan/20">
              <h3 className="font-bold text-nd-teal mb-4">Hizmetler</h3>
              <div className="space-y-2">
                {study.services.map((service) => (
                  <div key={service} className="px-3 py-2 bg-nd-teal/10 text-nd-teal rounded text-sm font-medium">
                    {service}
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-white p-6 rounded-lg border border-nd-cyan/20">
              <h3 className="font-bold text-nd-teal mb-4">Teknoloji</h3>
              <div className="space-y-2">
                {study.technologies.map((tech) => (
                  <div key={tech} className="text-sm text-nd-dark flex items-center gap-2">
                    <span className="w-2 h-2 bg-nd-cyan rounded-full"></span>
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Ecocold Products */}
            {study.ecocoldProducts && (
              <div className="bg-white p-6 rounded-lg border border-nd-magenta/20">
                <h3 className="font-bold text-nd-magenta mb-4">Ecocold Ürünleri</h3>
                <ul className="space-y-2">
                  {study.ecocoldProducts.map((product) => (
                    <li key={product} className="text-sm text-nd-dark">
                      • {product}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Pasifik Products */}
            {study.pasifikProducts && (
              <div className="bg-white p-6 rounded-lg border border-nd-cyan/20">
                <h3 className="font-bold text-nd-cyan mb-4">Pasifik Raf Ürünleri</h3>
                <ul className="space-y-2">
                  {study.pasifikProducts.map((product) => (
                    <li key={product} className="text-sm text-nd-dark">
                      • {product}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-nd-teal text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Benzer Proje mi Gerekli?</h2>
          <p className="text-xl text-nd-cyan mb-8">Mağaza tasarım, soğutma, raf sistemi — Hepsinde deneyimli.</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-nd-magenta hover:bg-nd-magenta/90 rounded-lg font-semibold transition-colors"
          >
            Proje Detaylarını Paylaş
          </Link>
        </div>
      </section>
    </div>
  )
}
