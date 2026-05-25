import { SectionHeading } from '@/components/ui/SectionHeading';
import { SolutionCard } from '@/components/cards/SolutionCard';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { SOLUTIONS } from '@/lib/data/solutions';

export function SolutionCards() {
  return (
    <section className="py-24 lg:py-32 bg-white" aria-labelledby="solutions-heading">
      <div className="section-container">
        <FadeInOnScroll>
          <SectionHeading
            eyebrow="SEKTÖR ÇÖZÜMLERİ"
            title="Her Mağaza Formatına Uygun Soğutma ve Reyon Çözümleri"
            subtitle="Süpermarketten endüstriyel tesise, kasaptan gurme markete kadar her işletme formatı için mühendislik tabanlı, uçtan uca soğutma çözümleri sunuyoruz."
            id="solutions-heading"
          />
        </FadeInOnScroll>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SOLUTIONS.map((solution, i) => (
            <FadeInOnScroll key={solution.slug} delay={i * 60}>
              <SolutionCard solution={solution} />
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
