import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portföy | Nokta Dizayn",
  description: "Gerçek Pazar Tasarım Çözümleri — Snowy Market, Taze Pazar, Happy Center case studies.",
  keywords: ["mağaza tasarım", "perakende tasarım Türkiye", "raf sistemi tasarımı"],
}

interface CaseStudy {
  slug: string
  name: string
  client: string
  services: string[]
  image: string
  description: string
  location: string
}

const caseStudies: CaseStudy[] = [
  {
    slug: "snowy-market",
    name: "Snowy Market — Taze Soğutma Vitrini",
    client: "Snowy Market",
    services: ["Ecocold", "Nokta Dizayn"],
    image: "/case-snowy.jpg",
    description: "Merga sütlük + Navi bombe cam kasap vitrini entegrasyonlu premium soğutma çözümü.",
    location: "İstanbul",
  },
  {
    slug: "taze-pazar",
    name: "Taze Pazar — Raf Sistemi Yenileme",
    client: "Taze Pazar Sultanbeyli",
    services: ["Pasifik Raf"],
    image: "/case-taze.jpg",
    description: "29 duvar ünitesi + modüler raf sistemi → Satış artışı, düzenli dizilim.",
    location: "İstanbul",
  },
  {
    slug: "happy-center",
    name: "Happy Center — Entegre Mağaza Çözümü",
    client: "Happy Center",
    services: ["Ecocold", "Pasifik Raf", "Nokta Dizayn"],
    image: "/case-happy.jpg",
    description: "Merkezi soğutma sistemi + raf tasarımı + mağaza planlaması — Tüm hizmetler bir arada.",
    location: "İstanbul",
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-nd-dark to-nd-teal/20">
      {/* Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Portföy
          </h1>
          <p className="text-xl text-nd-cyan mb-2">
            Pazar Zincirleri, Mağazalar, Balkan İşletmeleri için Gerçekleştirilmiş Tasarım Projeleri
          </p>
          <div className="h-1 w-24 bg-nd-magenta mx-auto mt-8"></div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Placeholder Image */}
                <div className="relative h-64 bg-gradient-to-br from-nd-cyan/30 to-nd-teal/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl text-nd-cyan/50 mb-2">🏪</div>
                    <p className="text-sm text-nd-teal/60">{project.client}</p>
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-nd-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-nd-cyan text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="px-3 py-1 bg-nd-magenta/80 text-white text-xs rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Bottom */}
                <div className="bg-white p-4">
                  <h3 className="font-bold text-nd-dark mb-2">{project.name}</h3>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-nd-teal">{project.location}</span>
                    <span className="text-nd-magenta font-semibold">Detay →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-nd-teal text-white text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Projeniz İçin Hazırız</h2>
          <p className="text-lg text-nd-cyan mb-8">
            Mağaza tasarımı, raf sistemi, soğutma çözümleri — Hepsini bir arada sunuyoruz.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-nd-magenta hover:bg-nd-magenta/90 rounded-lg font-semibold transition-colors"
          >
            İletişime Geç
          </Link>
        </div>
      </section>
    </div>
  )
}
