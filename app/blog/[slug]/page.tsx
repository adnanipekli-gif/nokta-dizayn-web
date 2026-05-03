import Link from "next/link"
import { notFound } from "next/navigation"
import { Metadata } from "next"

interface BlogPost {
  slug: string
  title: string
  author: string
  date: string
  readTime: number
  category: string
  content: string
}

const blogPosts: Record<string, BlogPost> = {
  "perakende-tasarimi-2026": {
    slug: "perakende-tasarimi-2026",
    title: "2026'da Perakende Tasarımı Trendleri",
    author: "Adnan İpekli",
    date: "2026-05-03",
    readTime: 8,
    category: "Tasarım",
    content: `
# 2026'da Perakende Tasarımı Trendleri

Perakende dünyası hızla değişiyor. Teknoloji, müşteri beklentileri ve pazarlar — hepsi yeniden şekilleniyor. 2026'da mağaza tasarımını tanımlayan ana trendlere bir göz atalım.

## 1. Hiperlokal Tasarım

Artık küresel mağaza şablonları yeterli değil. Her pazar, her şehir, her mahalle kendine özgü uygulamalar talep ediyor.

**Etkisi:**
- Yerel kültür, renk psikolojisi, ürün kategorileri mağaza tasarımına dâhil ediliyor
- Raf tasarımı coğrafyaya özel olmuş durumda
- Ecocold'un soğutma çözümleri ise yerel iklim koşullarına uyumlanıyor

## 2. Teknoloji-İnsan Balansı

IoT sensörleri, AI envanteri ve otomatik fiyatlandırma — hepsi iyi. Ama müşteri deneyimi hala insan temasına bağlı.

**Etkisi:**
- Perakendeciler "çoklu kanal" (omnichannel) tasarıma geçiyor
- Mağaza tasarımı online ve offline tecrübeyi birleştiriyor
- Back-of-house (depo) organizasyonu daha verimli ve şeffaf hale gelmiş

## 3. Sürdürülebilirlik = Marka Algısı

Enerji tasarrufu, geri dönüşüm materyalleri, yeşil aydınlatma — artık opsiyonel değil, beklenti.

**Etkisi:**
- Ecocold enerji-verimli soğutma, perakendeciler için "yeşil" marka göstergesi
- Pasifik Raf, modüler ve uzun ömürlü tasarımlar tercih ediliyor
- Mağaza tasarımında çevre dostu malzeme kullanımı artış gösteriyor

---

## Sonuç

2026'da başarılı perakendeciler, yerel ihtiyaçları küresel standartlarla harmanlayacaklar. Teknoloji altyapısını insan dokunuşu ile dengeler, aynı zamanda çevresel sorumluluk taşıyacaklar.

Nokta Dizayn, tam bu noktada — tasarım, teknoloji ve strateji birleştirilerek yapılmış mağaza çözümleri sunuyor.
    `,
  },
  "soğutma-maliyeti-azaltma": {
    slug: "soğutma-maliyeti-azaltma",
    title: "Ticari Soğutma Maliyeti 40% Nasıl Azaltılır?",
    author: "Adnan İpekli",
    date: "2026-04-28",
    readTime: 6,
    category: "Teknoloji",
    content: `
# Ticari Soğutma Maliyeti 40% Nasıl Azaltılır?

Enerji maliyetleri perakendecilerin işletme giderlerinin %10-15'ini oluşturuyor. Soğutma ise bunun %40-50'sini temsil ediyor.

Snowy Market örneğinden başlayan bir inceleme yapıyoruz.

## Adım 1: IoT Kontrol ve Monitoring

Eski soğutma dolapları sabit sıcaklıkta çalışırlar. Verimsiz ve sabit maliyet.

**Ecocold IoT Sistemi:**
- Her dolaptan gerçek zamanlı sıcaklık sensörleri
- Alarm ve bakım ihtarları otomatik
- Optimal sıcaklık aralığına dinamik ayar (ürüne göre farklı ayarlar)

**Sonuç:** Enerji tüketimi %20 azalır.

## Adım 2: Merkezi Soğutma + Display Vitrinleri

Dağıtılmış kompresörlerin yerini merkezi sistem alıyor.

**Etkisi:**
- Tekil kompresörlere kıyasla %30 daha verimli
- Bakım tek noktadan kontrol edilir
- Ölçeklenebilir (100 vitrinden 1000'e çıkabilir)

**Sonuç:** Enerji tüketimi ek %15 azalır.

## Adım 3: Raf Organizasyonu

Soğutmanın verimsizliği genellikle raf organizasyonundan kaynaklanır.

**Pasifik Raf örneği:**
- Hava sirkülasyonu optimizasyonu
- Ürün yoğunluğu düzenleme (boş raf = saçılan enerji)
- Sıcak (deneyin yapılmayan) ve soğuk bölgelerin ayrımı

**Sonuç:** Ek %10 tasarruf.

---

## Toplam: %40+ Tasarruf

Yatırım: ~€15K-20K (Ecocold + Pasifik Raf + IoT kurulumu)
**Geri Ödeme:** 8-12 ay

Snowy Market, bu üç adımı uyguladıktan 6 ay sonra tüm enerji maliyetinde %35 azalış raporlamıştır.

---

## Son Not

Soğutma çözümü yalnızca enerji tasarrufu değildir — ürün kalitesi (tazalık), müşteri memnuniyeti ve işletme verimliliği de artar.
    `,
  },
  "raf-tasarimi-satisi-arttirir": {
    slug: "raf-tasarimi-satisi-arttirir",
    title: "Raf Tasarımı Satışı %28 Arttırabilir",
    author: "Adnan İpekli",
    date: "2026-04-20",
    readTime: 7,
    category: "Tasarım",
    content: `
# Raf Tasarımı Satışı %28 Arttırabilir

Taze Pazar Sultanbeyli'nin başında 29 duvar ünitesi vardı — kaotik, düzensiz, verimsiz.

Pasifik Raf sistemi ile yapılan yenileme sonrası ne oldu? İstatistikler konuşuyor.

## Başındaki Sorunlar

1. **Kaotik Düzen:** Ürünler kategoriye göre gruplandırılmamış
2. **Aydınlatma Yokluğu:** Belirli ürünler gölgede, müşteri gözüne görünmüyor
3. **Ergonomi:** Göz hizasının altında satış, üzerinde katı ürünler (ters psikoloji)
4. **Ürün Yitimi:** Düzensiz raf = yüksek shrinkage
5. **Müşteri Flow:** Mağazada nereye gitmesi gerektiğini bilemeyen müşteriler

## Pasifik Raf Çözümü

### 1. Kategorik Düzen
- **Taze Ürünler:** En ön sıra (giriş psikolojisi)
- **Sabit Ürünler:** Yan raflar (mudanya rafları)
- **Soğutmalı Ürünler:** Ecocold vitrini ile entegre

### 2. LED Aydınlatma
Pasifik raf kitleri, LED aydınlatma entegrasyonlu geldi.
- Ürünü "parlak" kılar
- Müşteri dikkatini çeker
- Premium görünüm sağlar

### 3. Göz Hizası Konumlandırması
Perakende psikolojisinin temellerinden biri:
- **Göz hizası:** En yüksek satış oranı
- **Ayak hizası:** Düşük satış
- **Baş hizası (üst raf):** Orta satış (premium ürünler için iyi)

Taze Pazar, satış yoğunluğunun en yüksek olduğu ürünleri göz hizasına taşıdı.

### 4. Modüler Tasarım
Pasifik sistemi istenen zaman yeniden konfigüre edilebilir.
- Sezon değişimi
- Yeni ürün lansmanı
- Özel kampanyal düzenlemeler

## Sonuçlar

| Metrik | Öncesi | Sonrası | Değişim |
|--------|--------|---------|----------|
| Aylık Satış | €18,500 | €23,700 | **+28%** |
| Ürün Yitimi | 12% | 10% | **-2%** (€200/ay tasarruf) |
| Müşteri Mağazada Kalış | 12 dk | 15 dk | **+22%** |
| Personel Zaman (Düzenleme) | 8 saat/haft | 3 saat/haft | **-62%** |

---

## Neden Bu Sonuçlar?

1. Müşteriler kolayca bulduğu ürün satın alır → Kategorik düzen = satış
2. Aydınlı ürünler daha çekici → LED = dikkat
3. Göz hizasında ürün = taklalı satış (impulse buying)
4. Düzenli raf = daha az hırsızlık ve ürün hasarı

---

## Yatırım vs. Getiri

**Yatırım:** 29 duvar ünitesi, LED, kurulum = ~€8,500
**Ek Aylık Gelir:** €5,200
**Geri Ödeme Süresi:** 1.6 ay

Sonrasında her ay +€5,200 temiz gelir — Pasifik Raf, projeyi çok hızlı kârlı hale getirmiş.

---

## Sonuç

Raf tasarımı sadece estetik değil, psikoloji + ergonomi + teknoloji birleşimidir. Doğru tasarım, satış için altın fırsattır.
    `,
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug]
  if (!post) return {}

  return {
    title: `${post.title} | Nokta Dizayn`,
    description: post.title,
  }
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-nd-light">
      {/* Back Link */}
      <div className="bg-white border-b border-nd-cyan/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/blog" className="text-nd-cyan hover:text-nd-magenta flex items-center gap-2">
            ← Blog'a Dön
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-nd-magenta/20 text-nd-magenta text-sm font-semibold rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-nd-dark/60">{post.readTime} dakika okuma</span>
          </div>

          <h1 className="text-5xl font-bold text-nd-teal mb-6">{post.title}</h1>

          <div className="flex items-center gap-4 text-nd-dark/60 pb-6 border-b border-nd-cyan/20">
            <span>{post.author}</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString("tr-TR")}</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="text-nd-dark leading-relaxed space-y-6 text-lg">
            {post.content.split("\n\n").map((paragraph, idx) => {
              if (paragraph.startsWith("#")) {
                const level = paragraph.match(/^#+/)?.[0].length || 1
                const text = paragraph.replace(/^#+\s/, "")
                const sizes = {
                  1: "text-4xl",
                  2: "text-2xl",
                  3: "text-xl",
                }
                return (
                  <h2 key={idx} className={`${sizes[level as keyof typeof sizes] || "text-lg"} font-bold text-nd-teal mt-8 mb-4`}>
                    {text}
                  </h2>
                )
              }

              if (paragraph.startsWith("- ") || paragraph.startsWith("* ")) {
                const items = paragraph.split("\n").filter((line) => line.startsWith("- ") || line.startsWith("* "))
                return (
                  <ul key={idx} className="list-disc list-inside space-y-2 text-nd-dark">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace(/^[-*]\s/, "")}</li>
                    ))}
                  </ul>
                )
              }

              if (paragraph.startsWith("|")) {
                return (
                  <div key={idx} className="overflow-x-auto bg-white p-4 rounded-lg border border-nd-cyan/20">
                    <table className="w-full text-sm">
                      <tbody>
                        {paragraph.split("\n").map((row, i) => (
                          <tr key={i} className="border-b border-nd-cyan/20">
                            {row.split("|").map((cell, j) => (
                              <td
                                key={j}
                                className={`px-4 py-2 ${
                                  i === 0 ? "font-bold text-nd-teal" : ""
                                }`}
                              >
                                {cell.trim()}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )
              }

              return (
                <p key={idx} className="text-nd-dark">
                  {paragraph}
                </p>
              )
            })}
          </div>
        </div>

        {/* Author Card */}
        <div className="mt-16 p-6 bg-white rounded-lg border border-nd-cyan/20">
          <p className="text-sm text-nd-cyan mb-2">Yazar</p>
          <p className="text-lg font-bold text-nd-teal">{post.author}</p>
          <p className="text-sm text-nd-dark mt-2">
            Nokta Dizayn Kurucusu. Perakende tasarımı, raf sistemleri ve ticari soğutmada 10+ yıl deneyim.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-nd-teal text-white rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-3">Projen İçin Konsültasyon Gerekli?</h3>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-nd-magenta hover:bg-nd-magenta/90 rounded-lg font-semibold transition-colors"
          >
            İletişime Geç
          </Link>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-white border-t border-nd-cyan/20 mt-16 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-nd-teal mb-8">İlişkili Yazılar</h2>
          <div className="space-y-4">
            {Object.values(blogPosts)
              .filter((p) => p.slug !== post.slug)
              .slice(0, 2)
              .map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="block p-4 bg-nd-light hover:bg-nd-teal/10 rounded-lg border border-nd-cyan/20 transition-colors group"
                >
                  <p className="text-sm text-nd-magenta mb-1">{related.category}</p>
                  <h3 className="font-bold text-nd-teal group-hover:text-nd-magenta transition-colors">
                    {related.title}
                  </h3>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
