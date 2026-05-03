import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nokta Dizayn | Mağaza Tasarımı & Soğutma Çözümleri",
  description:
    "Perakende işletmeleri için mağaza tasarımı, raf sistemleri ve ticari soğutma çözümleri. Türkiye ve Balkan pazarlarına hizmet.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-nd-dark via-nd-teal/5 to-nd-light">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur z-50 border-b border-nd-cyan/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="font-bold text-xl text-nd-teal">Nokta Dizayn</div>
          <div className="flex gap-6 text-sm font-medium">
            <Link href="/portfolio" className="text-nd-dark hover:text-nd-magenta">
              Portföy
            </Link>
            <Link href="/services/ecocold" className="text-nd-dark hover:text-nd-magenta">
              Hizmetler
            </Link>
            <Link href="/blog" className="text-nd-dark hover:text-nd-magenta">
              Blog
            </Link>
            <Link href="/contact" className="text-nd-dark hover:text-nd-magenta">
              İletişim
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl sm:text-7xl font-bold text-white mb-6 tracking-tight">
            Marketler İçin Tasarım, Sistem, Mühendislik
          </h1>
          <p className="text-xl text-nd-cyan mb-8 max-w-3xl mx-auto">
            Mağaza tasarımı + Raf sistemleri + Ticari soğutma — Türkiye ve Balkan pazarlarında 50+ proje.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/portfolio"
              className="px-8 py-3 bg-nd-magenta hover:bg-nd-magenta/90 text-white rounded-lg font-semibold transition-colors"
            >
              Portföyü İncele
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-nd-cyan text-nd-cyan hover:bg-nd-cyan/10 rounded-lg font-semibold transition-colors"
            >
              Teklif Iste
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20">
            <div>
              <div className="text-4xl font-bold text-nd-cyan">50+</div>
              <p className="text-nd-light mt-2">Tamamlanan Proje</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-nd-cyan">25+</div>
              <p className="text-nd-light mt-2">Market Zinciri</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-nd-cyan">3</div>
              <p className="text-nd-light mt-2">Hizmet Alanı</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-nd-teal mb-12 text-center">Hizmetlerimiz</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "❄️",
                name: "Ecocold",
                description: "Enerji-verimli, güvenilir ticari soğutma çözümleri.",
                href: "/services/ecocold",
              },
              {
                icon: "🏪",
                name: "Pasifik Raf",
                description: "Modüler raf sistemleri ile satış hacmi +28% arttırma.",
                href: "/services/pasifik-raf",
              },
              {
                icon: "🎨",
                name: "Nokta Dizayn",
                description: "Mağaza içi tasarım ve müşteri deneyimi optimizasyonu.",
                href: "/services/nokta-dizayn",
              },
            ].map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="p-8 rounded-lg bg-nd-light hover:bg-nd-cyan/10 border border-nd-cyan/20 group transition-all"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-nd-teal group-hover:text-nd-magenta transition-colors mb-3">
                  {service.name}
                </h3>
                <p className="text-nd-dark mb-4">{service.description}</p>
                <span className="text-nd-cyan font-semibold group-hover:text-nd-magenta transition-colors">
                  Detaylar →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">Gerçekleştirilen Projeler</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {[
              {
                name: "Snowy Market",
                excerpt: "€61K soğutma sistemi — +35% enerji tasarrufu",
                href: "/portfolio/snowy-market",
              },
              {
                name: "Taze Pazar",
                excerpt: "29 raf ünitesi — +28% satış artışı",
                href: "/portfolio/taze-pazar",
              },
            ].map((project) => (
              <Link
                key={project.name}
                href={project.href}
                className="p-8 bg-white/5 backdrop-blur border border-nd-cyan/20 rounded-lg hover:border-nd-magenta transition-all group"
              >
                <h3 className="text-2xl font-bold text-white group-hover:text-nd-cyan transition-colors mb-2">
                  {project.name}
                </h3>
                <p className="text-nd-light">{project.excerpt}</p>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/portfolio"
              className="inline-block px-8 py-3 bg-nd-magenta hover:bg-nd-magenta/90 text-white rounded-lg font-semibold transition-colors"
            >
              Tüm Projeleri Gör
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-nd-teal mb-12">Son Yazılar</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {[
              {
                title: "2026'da Perakende Tasarımı Trendleri",
                category: "Tasarım",
                href: "/blog/perakende-tasarimi-2026",
              },
              {
                title: "Soğutma Maliyeti 40% Nasıl Azaltılır?",
                category: "Teknoloji",
                href: "/blog/soğutma-maliyeti-azaltma",
              },
            ].map((post) => (
              <Link
                key={post.title}
                href={post.href}
                className="p-6 rounded-lg border border-nd-cyan/20 hover:border-nd-magenta group transition-all"
              >
                <span className="px-3 py-1 bg-nd-magenta/20 text-nd-magenta text-xs font-semibold rounded-full inline-block mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-nd-teal group-hover:text-nd-magenta transition-colors">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-block text-nd-cyan hover:text-nd-magenta font-semibold"
            >
              Blog'a Git →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-nd-teal text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Projeniz İçin Hazırız</h2>
          <p className="text-xl text-nd-cyan mb-8">
            Mağaza tasarımı, raf sistemi, soğutma çözümleri — Hepsinde deneyim ve başarı.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-nd-magenta hover:bg-nd-magenta/90 rounded-lg font-semibold transition-colors"
          >
            İletişime Geç
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-nd-dark text-nd-light py-12 px-4 sm:px-6 lg:px-8 border-t border-nd-cyan/20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <p className="font-bold text-white mb-4">Nokta Dizayn</p>
            <p className="text-sm">Marketler için tasarım, sistem ve mühendislik çözümleri.</p>
          </div>
          <div>
            <p className="font-semibold text-white mb-3">Hızlı Erişim</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/portfolio" className="hover:text-nd-cyan">
                  Portföy
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-nd-cyan">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-nd-cyan">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white mb-3">Hizmetler</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/ecocold" className="hover:text-nd-cyan">
                  Ecocold
                </Link>
              </li>
              <li>
                <Link href="/services/pasifik-raf" className="hover:text-nd-cyan">
                  Pasifik Raf
                </Link>
              </li>
              <li>
                <Link href="/services/nokta-dizayn" className="hover:text-nd-cyan">
                  Nokta Dizayn
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white mb-3">İletişim</p>
            <p className="text-sm">info@noktadizayn.com.tr</p>
            <p className="text-sm">+90 (212) 123-4567</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-nd-cyan/20 text-center text-sm">
          <p>&copy; 2026 Nokta Dizayn. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </main>
  )
}
