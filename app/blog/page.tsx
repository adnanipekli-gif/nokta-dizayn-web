import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Nokta Dizayn",
  description: "Perakende, mağaza tasarımı, soğutma teknolojisi — İç görüşler ve rehberler.",
}

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: number
  category: string
  image?: string
  featured: boolean
}

const blogPosts: BlogPost[] = [
  {
    slug: "perakende-tasarimi-2026",
    title: "2026'da Perakende Tasarımı Trendleri",
    excerpt:
      "Müşteri deneyimi, teknoloji entegrasyonu ve sürdürülebilirlik — 2026'da mağaza tasarımını şekillendiren ana trendler.",
    author: "Adnan İpekli",
    date: "2026-05-03",
    readTime: 8,
    category: "Tasarım",
    featured: true,
  },
  {
    slug: "soğutma-maliyeti-azaltma",
    title: "Ticari Soğutma Maliyeti 40% Nasıl Azaltılır?",
    excerpt:
      "Enerji verimliliği, IoT kontrol ve doğru raf konfigürasyonu — Ecocold üzerinden üç adımda.",
    author: "Adnan İpekli",
    date: "2026-04-28",
    readTime: 6,
    category: "Teknoloji",
    featured: true,
  },
  {
    slug: "raf-tasarimi-satisi-arttirir",
    title: "Raf Tasarımı Satışı %28 Arttırabilir",
    excerpt: "Kategorik düzen, göz hizası konumlandırma, aydınlatma — Pasifik Raf örneği üzerinden.",
    author: "Adnan İpekli",
    date: "2026-04-20",
    readTime: 7,
    category: "Tasarım",
    featured: false,
  },
  {
    slug: "balkan-pazari-firsatlar",
    title: "Balkan Perakende Pazarı — Fırsat Analizi",
    excerpt:
      "Sırbistan, Romanya, Bulgaristan — Türk mağaza sistemleri için yeni pazarlar ve giriş stratejileri.",
    author: "Adnan İpekli",
    date: "2026-04-15",
    readTime: 10,
    category: "Pazar",
    featured: false,
  },
]

export default function BlogPage() {
  const featured = blogPosts.filter((post) => post.featured)
  const others = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-nd-light">
      {/* Header */}
      <section className="bg-gradient-to-r from-nd-teal to-nd-dark text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-nd-cyan">
            Perakende tasarımı, soğutma teknolojisi ve pazar analizleri — Doğrudan deneyimden.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      {featured.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-nd-teal mb-8">Öne Çıkan Yazılar</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featured.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-nd-teal/20 to-nd-cyan/20 flex items-center justify-center text-4xl">
                  📝
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-nd-magenta/20 text-nd-magenta text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-nd-dark/60">{post.readTime} dk</span>
                  </div>

                  <h3 className="text-xl font-bold text-nd-teal group-hover:text-nd-magenta transition-colors mb-3">
                    {post.title}
                  </h3>

                  <p className="text-nd-dark mb-4">{post.excerpt}</p>

                  <div className="flex justify-between items-center pt-4 border-t border-nd-cyan/20">
                    <span className="text-sm text-nd-dark/60">
                      {new Date(post.date).toLocaleDateString("tr-TR")}
                    </span>
                    <span className="text-nd-cyan font-semibold group-hover:text-nd-magenta transition-colors">
                      Devamını Oku →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-nd-teal mb-8">Tüm Yazılar</h2>
        <div className="space-y-4">
          {[...featured, ...others].map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-6 bg-white rounded-lg border border-nd-cyan/20 hover:border-nd-magenta hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-nd-teal group-hover:text-nd-magenta transition-colors">
                      {post.title}
                    </h3>
                    <span className="px-2 py-1 bg-nd-teal/10 text-nd-teal text-xs font-semibold rounded">
                      {post.category}
                    </span>
                  </div>
                  <p className="text-nd-dark text-sm mb-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-nd-dark/60">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{new Date(post.date).toLocaleDateString("tr-TR")}</span>
                    <span>•</span>
                    <span>{post.readTime} dakika okuma</span>
                  </div>
                </div>
                <span className="ml-4 text-nd-cyan group-hover:text-nd-magenta transition-colors font-semibold">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-nd-teal text-white py-16 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Blog Güncellemelerini Al</h2>
          <p className="text-nd-cyan mb-6 text-lg">
            Yeni yazılar ve pazar analizleri doğrudan e-postana ulaşsın.
          </p>
          <form className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-4 py-2 rounded text-nd-dark focus:outline-none"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-nd-magenta hover:bg-nd-magenta/90 rounded font-semibold transition-colors"
            >
              Abone Ol
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
