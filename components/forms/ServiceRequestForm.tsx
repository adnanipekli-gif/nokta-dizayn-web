'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, Upload } from 'lucide-react';
import { FormField, inputClasses, errorInputClasses } from './FormField';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const schema = z.object({
  firmaAdi: z.string().min(2, 'Firma adı gerekli'),
  yetkiliKisi: z.string().min(3, 'Yetkili kişi adı gerekli'),
  telefon: z.string().min(10, 'Geçerli telefon numarası girin'),
  eposta: z.string().email('Geçerli e-posta adresi girin'),
  lokasyon: z.string().min(2, 'Şehir bilgisi gerekli'),
  urunSistemTipi: z.string().min(1, 'Ürün/sistem tipi seçin'),
  servisKonusu: z.string().min(1, 'Servis konusu seçin'),
  aciklama: z.string().min(10, 'En az 10 karakter açıklama girin'),
  kvkk: z.boolean().refine((v) => v, 'KVKK onayı zorunludur'),
});

type FormData = z.infer<typeof schema>;

const productTypes = [
  { value: '', label: 'Seçiniz...' },
  { value: 'servis-reyonu', label: 'Servis Reyonu' },
  { value: 'dikey-reyon', label: 'Dikey Reyon' },
  { value: 'cam-kapili-dolap', label: 'Cam Kapılı Dolap' },
  { value: 'havuz-dolap', label: 'Havuz Tipi Dolap' },
  { value: 'kondenser', label: 'Kondenser Ünitesi' },
  { value: 'merkezi-sistem', label: 'Merkezi Sistem' },
  { value: 'chiller', label: 'Chiller Ünitesi' },
  { value: 'soguk-oda', label: 'Soğuk Oda' },
  { value: 'diger', label: 'Diğer' },
];

const serviceTopics = [
  { value: '', label: 'Seçiniz...' },
  { value: 'ariza', label: 'Arıza / Acil Servis' },
  { value: 'bakim', label: 'Periyodik Bakım' },
  { value: 'yedek-parca', label: 'Yedek Parça' },
  { value: 'garanti', label: 'Garanti Kapsamı' },
  { value: 'diger', label: 'Diğer' },
];

export function ServiceRequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || []).slice(0, 5);
    setFiles(selected);
  };

  const onSubmit = async (data: FormData) => {
    await fetch('/api/service', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, files: files.map((f) => f.name) }),
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <CheckCircle2 size={32} className="text-green-600" />
        </div>
        <h3 className="font-sora font-semibold text-[#071B34] text-xl mb-2">Servis Talebiniz Alındı</h3>
        <p className="text-[#475569] text-sm max-w-sm">
          Teknik servis ekibimiz en kısa sürede sizinle iletişime geçecektir.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Firma Adı" required error={errors.firmaAdi?.message} id="firmaAdi">
          <input
            id="firmaAdi"
            {...register('firmaAdi')}
            className={cn(inputClasses, errors.firmaAdi && errorInputClasses)}
            placeholder="Şirketinizin adı"
          />
        </FormField>
        <FormField label="Yetkili Kişi" required error={errors.yetkiliKisi?.message} id="yetkiliKisi">
          <input
            id="yetkiliKisi"
            {...register('yetkiliKisi')}
            className={cn(inputClasses, errors.yetkiliKisi && errorInputClasses)}
            placeholder="Adınız ve soyadınız"
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Telefon" required error={errors.telefon?.message} id="telefon-servis">
          <input id="telefon-servis" type="tel" {...register('telefon')} className={cn(inputClasses, errors.telefon && errorInputClasses)} placeholder="+90 5XX XXX XX XX" />
        </FormField>
        <FormField label="E-posta" required error={errors.eposta?.message} id="eposta-servis">
          <input id="eposta-servis" type="email" {...register('eposta')} className={cn(inputClasses, errors.eposta && errorInputClasses)} placeholder="ornek@firma.com" />
        </FormField>
      </div>

      <FormField label="Lokasyon (Şehir)" required error={errors.lokasyon?.message} id="lokasyon">
        <input id="lokasyon" {...register('lokasyon')} className={cn(inputClasses, errors.lokasyon && errorInputClasses)} placeholder="İstanbul" />
      </FormField>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Ürün / Sistem Tipi" required error={errors.urunSistemTipi?.message} id="urunSistemTipi">
          <select id="urunSistemTipi" {...register('urunSistemTipi')} className={cn(inputClasses, 'cursor-pointer', errors.urunSistemTipi && errorInputClasses)}>
            {productTypes.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
          </select>
        </FormField>
        <FormField label="Servis Konusu" required error={errors.servisKonusu?.message} id="servisKonusu">
          <select id="servisKonusu" {...register('servisKonusu')} className={cn(inputClasses, 'cursor-pointer', errors.servisKonusu && errorInputClasses)}>
            {serviceTopics.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
          </select>
        </FormField>
      </div>

      <FormField label="Açıklama" required error={errors.aciklama?.message} id="aciklama">
        <textarea id="aciklama" {...register('aciklama')} rows={4} className={cn(inputClasses, 'resize-none', errors.aciklama && errorInputClasses)} placeholder="Yaşanan arıza veya ihtiyaç hakkında kısa bilgi..." />
      </FormField>

      {/* File upload */}
      <div>
        <label className="text-sm font-medium text-[#071B34] block mb-1.5">
          Fotoğraf / Dosya Ekle <span className="text-[#8D99A8] font-normal">(opsiyonel, max 5 dosya)</span>
        </label>
        <label className="flex items-center gap-3 px-4 py-3 rounded-md border border-dashed border-[#D9E1EA] cursor-pointer hover:border-[#0A6DB8] transition-colors bg-[#F7F9FC]">
          <Upload size={16} className="text-[#8D99A8]" />
          <span className="text-sm text-[#8D99A8]">
            {files.length > 0 ? `${files.length} dosya seçildi` : 'Dosya seç veya sürükle'}
          </span>
          <input type="file" multiple accept="image/*,.pdf" onChange={handleFiles} className="hidden" />
        </label>
      </div>

      <FormField error={errors.kvkk?.message}>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" {...register('kvkk')} className="mt-0.5 w-4 h-4 rounded border-[#D9E1EA] text-[#0A6DB8] focus:ring-[#11B5FF]" />
          <span className="text-sm text-[#475569]">
            <a href="/kvkk" className="text-[#0A6DB8] hover:underline" target="_blank">KVKK Aydınlatma Metni</a>&apos;ni okudum. <span className="text-red-600">*</span>
          </span>
        </label>
      </FormField>

      <Button type="submit" variant="primary" size="md" disabled={isSubmitting} fullWidth>
        {isSubmitting ? 'Gönderiliyor...' : 'Servis Talebini Gönder'}
      </Button>
    </form>
  );
}
