import Image from 'next/image';
import { Building2, Users, CheckSquare, Globe } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';

export async function ProductionPowerBlock() {
  const t = await getTranslations('production');

  const items = [
    { icon: Building2,   title: t('item_1_title'), description: t('item_1_desc') },
    { icon: Users,       title: t('item_2_title'), description: t('item_2_desc') },
    { icon: CheckSquare, title: t('item_3_title'), description: t('item_3_desc') },
    { icon: Globe,       title: t('item_4_title'), description: t('item_4_desc') },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#F7F9FC]" aria-labelledby="production-heading">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeInOnScroll>
            <Image
              src="/dolap-üretim.png"
              alt="Nokta Dizayn"
              width={960}
              height={720}
              className="w-full h-auto rounded-3xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeInOnScroll>

          <FadeInOnScroll delay={100}>
            <SectionHeading
              eyebrow={t('eyebrow')}
              title={t('title')}
              className="mb-10"
              id="production-heading"
            />
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.title} className="flex items-start gap-4 group">
                  <span className="p-2.5 rounded-xl bg-[#E9EEF3] text-[#0A6DB8] group-hover:bg-[#071B34] group-hover:text-white transition-colors duration-300 shrink-0">
                    <item.icon size={18} strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="font-semibold text-[#071B34] text-base">{item.title}</p>
                    <p className="text-sm text-[#475569] mt-0.5 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
