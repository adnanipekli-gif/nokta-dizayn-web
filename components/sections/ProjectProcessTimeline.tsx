import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';

const STEPS = [
  { number: '01', title: 'İhtiyaç Analizi',       description: 'Hedefler, format ve bütçe parametreleri belirlenir.' },
  { number: '02', title: 'Keşif Ziyareti',         description: 'Saha ölçümleri alınır, teknik kısıtlar tespit edilir.' },
  { number: '03', title: 'Projelendirme',           description: 'Düzen çizimleri ve ekipman listesi hazırlanır.' },
  { number: '04', title: 'Mühendislik',             description: 'Soğutma, enerji ve elektrik hesapları yapılır.' },
  { number: '05', title: 'Üretim',                  description: 'Onaylı çizimlere göre tesiste imalat başlar.' },
  { number: '06', title: 'Lojistik',                description: 'Ambalajlama ve saha teslimat planı oluşturulur.' },
  { number: '07', title: 'Kurulum & Devreye Alma', description: 'Montaj tamamlanır, sistem test edilir.' },
  { number: '08', title: 'Satış Sonrası Servis',   description: 'Eğitim, bakım ve teknik destek sürekli sağlanır.' },
];

export function ProjectProcessTimeline() {
  return (
    <section
      className="py-24 lg:py-32 bg-[#04101F] relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="absolute inset-0 blueprint-grid opacity-[0.04]" aria-hidden="true" />

      <div className="section-container relative z-10">

        {/* Heading */}
        <FadeInOnScroll className="text-center mb-16 lg:mb-20">
          <p className="eyebrow text-[#11B5FF] mb-4">SÜREÇ</p>
          <h2 id="process-heading" className="text-white max-w-2xl mx-auto">
            Fikirden Devreye Almaya Uçtan Uca Proje Yönetimi
          </h2>
          <p className="text-[#E9EEF3]/50 mt-4 max-w-lg mx-auto leading-relaxed">
            Her projeyi metodolojik bir süreçle yönetiyor, her aşamada müşterimizle birlikte ilerliyoruz.
          </p>
        </FadeInOnScroll>

        {/* ── Desktop: tek satır ── */}
        <div className="hidden lg:block">
          <div className="relative">

            {/* Bağlantı çizgisi */}
            <div
              className="absolute top-[2.375rem] left-[calc(100%/16)] right-[calc(100%/16)] h-px"
              style={{ background: 'linear-gradient(to right, transparent, rgba(17,181,255,0.4) 8%, rgba(17,181,255,0.4) 92%, transparent)' }}
              aria-hidden="true"
            />

            <div className="grid grid-cols-8 gap-2">
              {STEPS.map((step, i) => (
                <FadeInOnScroll key={step.number} delay={i * 60}>
                  <div className="group flex flex-col items-center text-center px-1">

                    {/* Düğüm */}
                    <div className="relative z-10 w-[4.75rem] h-[4.75rem] rounded-full bg-[#071B34] border-2 border-[#11B5FF]/40 flex items-center justify-center mb-5 group-hover:border-[#11B5FF] group-hover:bg-[#11B5FF]/10 transition-all duration-300">
                      <span className="font-mono text-sm font-bold text-[#11B5FF]">
                        {step.number}
                      </span>
                    </div>

                    {/* Başlık */}
                    <h3 className="font-sora font-semibold text-white text-sm leading-snug mb-2 group-hover:text-[#11B5FF] transition-colors duration-200">
                      {step.title}
                    </h3>

                    {/* Açıklama */}
                    <p className="text-xs text-[#E9EEF3]/45 leading-relaxed">
                      {step.description}
                    </p>

                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mobile: 2 kolon 4+4 ── */}
        <div className="lg:hidden">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8">
            {STEPS.map((step, i) => (
              <FadeInOnScroll key={step.number} delay={i * 50}>
                <div className="flex gap-3 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#071B34] border border-[#11B5FF]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-mono text-xs font-bold text-[#11B5FF]">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="font-sora font-semibold text-white text-base mb-1 leading-snug">{step.title}</h3>
                    <p className="text-sm text-[#E9EEF3]/40 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
