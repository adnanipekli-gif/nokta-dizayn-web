'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { ServiceRequestForm } from '@/components/forms/ServiceRequestForm';
import { GeneralContactForm } from '@/components/forms/GeneralContactForm';

type FormType = 'teklif' | 'servis' | 'danismanlik' | 'genel';

const tabs: { id: FormType; label: string }[] = [
  { id: 'teklif', label: 'Teklif Al' },
  { id: 'servis', label: 'Servis Talebi' },
  { id: 'danismanlik', label: 'Proje Danışmanlığı' },
  { id: 'genel', label: 'Genel İletişim' },
];


function IletisimContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<FormType>('teklif');

  useEffect(() => {
    const formParam = searchParams.get('form') as FormType;
    if (formParam && tabs.find((t) => t.id === formParam)) {
      setActiveTab(formParam);
    }
  }, [searchParams]);

  return (
    <>
      <section className="pt-32 pb-16 bg-[#071B34] relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/iletisim.png" alt="" fill className="object-cover object-center" priority sizes="100vw" />
          <div className="absolute inset-0 bg-[#071B34]/65" />
        </div>
        <div className="absolute inset-0 blueprint-grid opacity-10" aria-hidden="true" />
        <div className="section-container relative z-10">
          <h1 className="text-white">Projenizi Birlikte Planlayalım</h1>
          <p className="text-[#E9EEF3]/70 mt-4 max-w-xl text-lg">
            Teklif, servis talebi, proje danışmanlığı veya genel sorularınız için bizimle iletişime geçin.
          </p>
        </div>
      </section>

      <div className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Form tipi seçin">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2.5 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-[#071B34] text-white'
                        : 'bg-[#E9EEF3] text-[#475569] hover:bg-[#D9E1EA]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div
                role="tabpanel"
                className="p-6 lg:p-8 rounded-2xl border border-[#D9E1EA] bg-white"
                aria-label={tabs.find((t) => t.id === activeTab)?.label}
              >
                <h2 className="font-sora font-semibold text-[#071B34] text-xl mb-6">
                  {tabs.find((t) => t.id === activeTab)?.label}
                </h2>

                {activeTab === 'teklif' && <QuoteForm />}
                {activeTab === 'servis' && <ServiceRequestForm />}
                {activeTab === 'danismanlik' && <GeneralContactForm type="danismanlik" />}
                {activeTab === 'genel' && <GeneralContactForm type="genel" />}
              </div>
            </div>

            <aside className="lg:col-span-1 space-y-5">
              <div className="rounded-2xl border border-[#D9E1EA] overflow-hidden bg-white">
                <div className="p-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-[#0A6DB8] mt-0.5 shrink-0" />
                    <p className="text-sm text-[#475569] leading-relaxed">
                      Merkez Mah. Sanayi Cad. No:1<br />
                      Bağcılar, İstanbul, 34200 Türkiye
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-[#0A6DB8] shrink-0" />
                    <a href="tel:+902121234567" className="text-sm text-[#475569] hover:text-[#0A6DB8] transition-colors">
                      +90 (212) 123 45 67
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-[#0A6DB8] shrink-0" />
                    <a href="mailto:info@noktadizayn.com.tr" className="text-sm text-[#475569] hover:text-[#0A6DB8] transition-colors">
                      info@noktadizayn.com.tr
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={16} className="text-[#0A6DB8] mt-0.5 shrink-0" />
                    <p className="text-sm text-[#475569] leading-snug">
                      Pzt – Cum: 08:30 – 18:00<br />
                      Cmt: 09:00 – 14:00
                    </p>
                  </div>
                </div>
              </div>


            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

export default function IletisimPage() {
  return (
    <Suspense fallback={null}>
      <IletisimContent />
    </Suspense>
  );
}
