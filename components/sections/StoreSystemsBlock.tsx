import { SectionHeading } from '@/components/ui/SectionHeading';
import { SolutionCard } from '@/components/cards/SolutionCard';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { SOLUTIONS } from '@/lib/data/solutions';

export function StoreSystemsBlock() {
  return (
    <section className="py-24 lg:py-32 bg-white" aria-labelledby="store-systems-heading">
      <div className="section-container">
        <FadeInOnScroll>
          <SectionHeading
            eyebrow="MAĞAZA SİSTEMLERİ"
            title="Her Mağaza Formatına Özel Entegre Çözümler"
            subtitle="Süpermarketten franchise zincirine, kasap bölümünden gurme markete — soğutmadan rafa, kasadan mobilyaya bütünleşik mağaza kurulumu."
            id="store-systems-heading"
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
