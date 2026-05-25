'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2 } from 'lucide-react';
import { FormField, inputClasses, errorInputClasses } from './FormField';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const schema = z.object({
  firmaAdi: z.string().min(2, 'Firma adı gerekli'),
  adSoyad: z.string().min(3, 'Ad soyad gerekli'),
  telefon: z.string().min(10, 'Geçerli telefon numarası girin'),
  eposta: z.string().email('Geçerli e-posta adresi girin'),
  sehirUlke: z.string().optional(),
  mesaj: z.string().optional(),
  kvkk: z.boolean().refine((v) => v, 'KVKK onayı zorunludur'),
});

type FormData = z.infer<typeof schema>;

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await fetch('/api/quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <CheckCircle2 size={32} className="text-green-600" />
        </div>
        <h3 className="font-sora font-semibold text-[#071B34] text-xl mb-2">Talebiniz Alındı</h3>
        <p className="text-[#475569] text-sm max-w-sm">
          Ekibimiz en kısa sürede sizinle iletişime geçecektir. Teşekkür ederiz.
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
            aria-describedby={errors.firmaAdi ? 'firmaAdi-error' : undefined}
          />
        </FormField>

        <FormField label="Ad Soyad" required error={errors.adSoyad?.message} id="adSoyad">
          <input
            id="adSoyad"
            {...register('adSoyad')}
            className={cn(inputClasses, errors.adSoyad && errorInputClasses)}
            placeholder="Adınız ve soyadınız"
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Telefon" required error={errors.telefon?.message} id="telefon">
          <input
            id="telefon"
            type="tel"
            {...register('telefon')}
            className={cn(inputClasses, errors.telefon && errorInputClasses)}
            placeholder="+90 5XX XXX XX XX"
          />
        </FormField>

        <FormField label="E-posta" required error={errors.eposta?.message} id="eposta">
          <input
            id="eposta"
            type="email"
            {...register('eposta')}
            className={cn(inputClasses, errors.eposta && errorInputClasses)}
            placeholder="ornek@firma.com"
          />
        </FormField>
      </div>

      <FormField label="Şehir / Ülke" id="sehirUlke">
        <input
          id="sehirUlke"
          {...register('sehirUlke')}
          className={inputClasses}
          placeholder="İstanbul, Türkiye"
        />
      </FormField>

      <FormField label="Mesaj" id="mesaj">
        <textarea
          id="mesaj"
          {...register('mesaj')}
          rows={4}
          className={cn(inputClasses, 'resize-none')}
          placeholder="Projeniz hakkında kısa bilgi verin..."
        />
      </FormField>

      <FormField error={errors.kvkk?.message}>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register('kvkk')}
            className="mt-0.5 w-4 h-4 rounded border-[#D9E1EA] text-[#0A6DB8] focus:ring-[#11B5FF]"
          />
          <span className="text-sm text-[#475569]">
            <a href="/kvkk" className="text-[#0A6DB8] hover:underline" target="_blank">KVKK Aydınlatma Metni</a>
            &apos;ni okudum, kişisel verilerimin işlenmesine onay veriyorum.{' '}
            <span className="text-red-600">*</span>
          </span>
        </label>
      </FormField>

      <Button type="submit" variant="primary" size="md" disabled={isSubmitting} fullWidth>
        {isSubmitting ? 'Gönderiliyor...' : 'Teklif Talebini Gönder'}
      </Button>
    </form>
  );
}
