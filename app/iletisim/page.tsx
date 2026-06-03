'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { MapPin, Phone, Mail, Clock, Users } from 'lucide-react';
import { Placeholder } from '@/components/ui/Placeholder';
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

const departments = [
  { name: 'Satış', email: 'satis@noktadizayn.com.tr', phone: '+90 (216) 313 67 67' },
  { name: 'Teknik Servis', email: 'servis@noktadizayn.com.tr', phone: '+90 (216) 313 67 67' },
  { name: 'İhracat', email: 'export@noktadizayn.com.tr', phone: '+90 (216) 313 67 67' },
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
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#071B34] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" aria-hidden="true" />
        <div className="section-container relative z-10">
          <p className="eyebrow text-[#11B5FF] mb-4">// İLETİŞİM</p>
          <h1 className="text-white">Projenizi Birlikte Planlayalım</h1>
          <p className="text-[#E9EEF3]/70 mt-4 max-w-xl text-lg">
            Teklif, servis talebi, proje danışmanlığı veya genel sorularınız için bizimle iletişime geçin.
          </p>
        </div>
        <div className="hero-bottom-glow" aria-hidden="true" />
        <div className="hero-bottom-fade" aria-hidden="true" />
      </section>

      <div className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Form section */}
            <div className="lg:col-span-2">
              {/* Tab selector */}
              <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Form tipi seçin">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-[#071B34] text-white'
                        : 'bg-[#E9EEF3] text-[#475569] hover:bg-[#D9E1EA]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Form panel */}
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

            {/* Contact info */}
            <aside className="lg:col-span-1 space-y-5">
              {/* Address & contacts */}
              <div className="rounded-2xl border border-[#D9E1EA] overflow-hidden bg-white">
                <div className="px-5 py-4 bg-[#071B34]">
                  <p className="eyebrow text-[#11B5FF]">// İLETİŞİM BİLGİLERİ</p>
                </div>
                <div className="p-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-[#0A6DB8] mt-0.5 shrink-0" />
                    <p className="text-sm text-[#475569] leading-relaxed">
                      Emek Mahallesi, Şems Caddesi No:7<br />
                      Sancaktepe, İstanbul, Türkiye
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-[#0A6DB8] shrink-0" />
                    <a href="tel:+902163136767" className="text-sm text-[#475569] hover:text-[#0A6DB8] transition-colors">
                      +90 (216) 313 67 67
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-[#0A6DB8] shrink-0" />
                    <a href="mailto:bilgi@noktadizayn.com.tr" className="text-sm text-[#475569] hover:text-[#0A6DB8] transition-colors">
                      bilgi@noktadizayn.com.tr
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

              {/* Departments */}
              <div className="rounded-2xl border border-[#D9E1EA] overflow-hidden bg-white">
                <div className="px-5 py-4 bg-[#F7F9FC] border-b border-[#D9E1EA]">
                  <div className="flex items-center gap-2">
                    <Users size={14} className="text-[#0A6DB8]" />
                    <p className="text-sm font-semibold text-[#071B34]">Departmanlar</p>
                  </div>
                </div>
                {departments.map((dept, i) => (
                  <div key={dept.name} className={`p-5 ${i < departments.length - 1 ? 'border-b border-[#D9E1EA]' : ''}`}>
                    <p className="font-semibold text-[#071B34] text-sm mb-1">{dept.name}</p>
                    <a href={`mailto:${dept.email}`} className="text-xs text-[#8D99A8] hover:text-[#0A6DB8] block transition-colors">
                      {dept.email}
                    </a>
                    <a href={`tel:${dept.phone.replace(/\s/g, '')}`} className="text-xs text-[#8D99A8] hover:text-[#0A6DB8] transition-colors">
                      {dept.phone}
                    </a>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <Placeholder
                category="map"
                aspectRatio="4:3"
                icon="MapPin"
                label="HARİTA"
                className="rounded-2xl"
              />
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
