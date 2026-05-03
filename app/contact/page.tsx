"use client"

import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulated form submission (replace with actual API call)
    console.log("Form submitted:", formData)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-nd-light">
      {/* Hero */}
      <section className="bg-gradient-to-r from-nd-teal to-nd-dark text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">İletişime Geç</h1>
          <p className="text-xl text-nd-cyan">
            Proje detaylarını paylaş — 24 saat içinde geri dönüş vereceğiz.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-md border border-nd-cyan/20">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✓</div>
                  <h2 className="text-2xl font-bold text-nd-teal mb-2">Başarıyla Gönderildi!</h2>
                  <p className="text-nd-dark">
                    Mesajınız alındı. En kısa sürede sizinle iletişime geçeceğiz.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-nd-teal mb-2">
                        Adınız *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-nd-cyan/20 rounded-lg focus:outline-none focus:border-nd-magenta"
                        placeholder="Adınız"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-nd-teal mb-2">
                        E-posta *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-nd-cyan/20 rounded-lg focus:outline-none focus:border-nd-magenta"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-nd-teal mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-nd-cyan/20 rounded-lg focus:outline-none focus:border-nd-magenta"
                        placeholder="+90 (xxx) xxx-xxxx"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-nd-teal mb-2">
                        Şirket / İşletme
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-nd-cyan/20 rounded-lg focus:outline-none focus:border-nd-magenta"
                        placeholder="Şirketi ismi"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-nd-teal mb-2">
                      İlgilendiğiniz Hizmet
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-nd-cyan/20 rounded-lg focus:outline-none focus:border-nd-magenta"
                    >
                      <option value="">Seçin...</option>
                      <option value="ecocold">Ecocold — Soğutma Çözümleri</option>
                      <option value="pasifik">Pasifik Raf — Raf Sistemleri</option>
                      <option value="nokta">Nokta Dizayn — Mağaza Tasarımı</option>
                      <option value="tumu">Hepsi Bir Arada</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-nd-teal mb-2">
                      Mesaj *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-nd-cyan/20 rounded-lg focus:outline-none focus:border-nd-magenta resize-none"
                      placeholder="Proje detaylarını, bütçe aralığını, zaman çerçevesini paylaşın..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-nd-magenta hover:bg-nd-magenta/90 text-white rounded-lg font-semibold transition-colors"
                  >
                    Gönder
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Info Card */}
            <div className="bg-white p-6 rounded-lg border border-nd-cyan/20 shadow-sm">
              <h3 className="font-bold text-nd-teal mb-4">Hızlı İletişim</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-nd-cyan">E-posta</p>
                  <p className="font-semibold text-nd-dark">info@noktadizayn.com.tr</p>
                </div>
                <div>
                  <p className="text-sm text-nd-cyan">Telefon</p>
                  <p className="font-semibold text-nd-dark">+90 (212) 123-4567</p>
                </div>
                <div>
                  <p className="text-sm text-nd-cyan">Ofis</p>
                  <p className="font-semibold text-nd-dark">İstanbul, Sancaktepe</p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white p-6 rounded-lg border border-nd-magenta/20 shadow-sm">
              <h3 className="font-bold text-nd-magenta mb-4">Hizmetlerimiz</h3>
              <ul className="space-y-2">
                <li className="text-sm text-nd-dark flex items-center gap-2">
                  <span className="text-nd-magenta">❄️</span> Ecocold — Soğutma
                </li>
                <li className="text-sm text-nd-dark flex items-center gap-2">
                  <span className="text-nd-magenta">🏪</span> Pasifik Raf — Raf Sistemi
                </li>
                <li className="text-sm text-nd-dark flex items-center gap-2">
                  <span className="text-nd-magenta">🎨</span> Nokta Dizayn — İç Tasarım
                </li>
              </ul>
            </div>

            {/* Response Time */}
            <div className="bg-nd-teal/10 p-6 rounded-lg border border-nd-teal/30">
              <p className="text-sm text-nd-teal">
                <span className="font-bold">Yanıt Süresi:</span> Pazartesi-Cuma 9-18:00 arasında 24 saat içinde.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-white border-t border-nd-cyan/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-nd-teal mb-6">Ofisimizi Ziyaret Et</h2>
          <div className="h-96 bg-nd-light rounded-lg flex items-center justify-center">
            <p className="text-nd-dark text-lg">📍 İstanbul, Sancaktepe — Harita entegrasyonu yakında</p>
          </div>
        </div>
      </section>
    </div>
  )
}
