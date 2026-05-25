import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';

const STEPS = [
  {
    number: '01',
    title: 'İhtiyaç Analizi',
    description: 'Müşteri ihtiyacı ve operasyonel hedefler detaylı analiz edilir.',
  },
  {
    number: '02',
    title: 'Keşif',
    description: 'Mağaza veya tesis yapısı yerinde incelenir, ölçüm ve değerlendirme yapılır.',
  },
  {
    number: '03',
    title: 'Projelendirme',
    description: 'Doğru ürün, kapasite ve sistem mimarisi planlanır.',
  },
  {
    number: '04',
    title: 'Mühendislik Planlama',
    description: 'Soğutma yükü, enerji ve elektrik gereksinimleri hesaplanır.',
  },
  {
    number: '05',
    title: 'Üretim',
    description: 'Kendi tesislerimizde kalite kontrollü üretim süreci yürütülür.',
  },
  {
    number: '06',
    title: 'Kurulum',
    description: 'Saha kurulumu teknik ekip tarafından gerçekleştirilir.',
  },
  {
    number: '07',
    title: 'Devreye Alma',
    description: 'Sistem test edilir, kalibre edilir ve operasyona hazır hale getirilir.',
  },
  {
    number: '08',
    title: 'Satış Sonrası Servis',
    description: 'Bakım, yedek parça ve teknik destek sürekli sağlanır.',
  },
];

export function ProjectProcessTimeline() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden" aria-labelledby="process-heading">
      <div className="section-container">
        <FadeInOnScroll>
          <SectionHeading
            eyebrow="SÜREÇ"
            title="Fikirden Devreye Almaya Uçtan Uca Proje Yönetimi"
            subtitle="Her projeyi metodolojik bir süreçle yönetiyor, her aşamada müşterimizle birlikte ilerliyoruz."
            id="process-heading"
          />
        </FadeInOnScroll>

        {/* Desktop timeline */}
        <div className="mt-16 hidden lg:block">
          {/* First row: 1-4 */}
          <div className="relative">
            <div className="grid grid-cols-4 gap-0">
              {STEPS.slice(0, 4).map((step, i) => (
                <FadeInOnScroll key={step.number} delay={i * 80}>
                  <div className="relative px-6 pt-8">
                    {/* Connector line */}
                    {i < 3 && (
                      <div
                        className="absolute top-10 right-0 left-1/2 h-px border-t border-dashed border-[#11B5FF]/40"
                        aria-hidden="true"
                      />
                    )}
                    {/* Step circle */}
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#071B34] bg-white mb-5 font-mono text-sm font-medium text-[#071B34] hover:border-[#11B5FF] hover:bg-[#11B5FF] hover:text-white transition-all duration-300 cursor-default">
                      {step.number}
                    </div>
                    <h3 className="font-sora font-semibold text-[#071B34] text-base mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#475569] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>

          {/* Vertical connector */}
          <div className="flex justify-end pr-6 my-2">
            <div className="w-px h-8 border-l border-dashed border-[#11B5FF]/40" aria-hidden="true" />
          </div>

          {/* Second row: 5-8 (right to left visual) */}
          <div className="relative">
            <div className="grid grid-cols-4 gap-0">
              {STEPS.slice(4).reverse().map((step, i) => (
                <FadeInOnScroll key={step.number} delay={(i + 4) * 80}>
                  <div className="relative px-6 pt-4 pb-4">
                    {/* Connector line */}
                    {i < 3 && (
                      <div
                        className="absolute top-10 right-0 left-1/2 h-px border-t border-dashed border-[#11B5FF]/40"
                        aria-hidden="true"
                      />
                    )}
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#071B34] bg-white mb-5 font-mono text-sm font-medium text-[#071B34] hover:border-[#11B5FF] hover:bg-[#11B5FF] hover:text-white transition-all duration-300 cursor-default">
                      {step.number}
                    </div>
                    <h3 className="font-sora font-semibold text-[#071B34] text-base mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#475569] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden mt-12 space-y-0">
          {STEPS.map((step, i) => (
            <FadeInOnScroll key={step.number} delay={i * 60}>
              <div className="flex gap-5">
                {/* Left: number + line */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#071B34] bg-white shrink-0 font-mono text-xs font-medium text-[#071B34]">
                    {step.number}
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="w-px flex-1 min-h-[2rem] border-l border-dashed border-[#11B5FF]/40 my-1" aria-hidden="true" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-6">
                  <h3 className="font-sora font-semibold text-[#071B34] text-base mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
