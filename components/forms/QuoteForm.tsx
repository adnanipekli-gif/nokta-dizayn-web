'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { FormField, inputClasses, errorInputClasses } from './FormField';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

type FormData = {
  firmaAdi: string;
  adSoyad: string;
  telefon: string;
  eposta: string;
  sehirUlke?: string;
  mesaj?: string;
  kvkk: boolean;
};

export function QuoteForm() {
  const t = useTranslations('forms');
  const tq = useTranslations('quote_form');
  const [submitted, setSubmitted] = useState(false);

  const schema = z.object({
    firmaAdi: z.string().min(2, t('err_firma')),
    adSoyad: z.string().min(3, t('err_ad_soyad')),
    telefon: z.string().min(10, t('err_telefon')),
    eposta: z.string().email(t('err_eposta')),
    sehirUlke: z.string().optional(),
    mesaj: z.string().optional(),
    kvkk: z.boolean().refine((v) => v, t('err_kvkk')),
  });

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
        <h3 className="font-sora font-semibold text-[#071B34] text-xl mb-2">{tq('success_title')}</h3>
        <p className="text-[#475569] text-sm max-w-sm">
          {tq('success_desc')}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label={t('firma_adi')} required error={errors.firmaAdi?.message} id="firmaAdi">
          <input
            id="firmaAdi"
            {...register('firmaAdi')}
            className={cn(inputClasses, errors.firmaAdi && errorInputClasses)}
            placeholder={t('ph_sirket')}
            aria-describedby={errors.firmaAdi ? 'firmaAdi-error' : undefined}
          />
        </FormField>

        <FormField label={t('ad_soyad')} required error={errors.adSoyad?.message} id="adSoyad">
          <input
            id="adSoyad"
            {...register('adSoyad')}
            className={cn(inputClasses, errors.adSoyad && errorInputClasses)}
            placeholder={t('ph_ad_soyad')}
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label={t('telefon')} required error={errors.telefon?.message} id="telefon">
          <input
            id="telefon"
            type="tel"
            {...register('telefon')}
            className={cn(inputClasses, errors.telefon && errorInputClasses)}
            placeholder={t('ph_tel')}
          />
        </FormField>

        <FormField label={t('eposta')} required error={errors.eposta?.message} id="eposta">
          <input
            id="eposta"
            type="email"
            {...register('eposta')}
            className={cn(inputClasses, errors.eposta && errorInputClasses)}
            placeholder={t('ph_eposta')}
          />
        </FormField>
      </div>

      <FormField label={t('sehir_ulke')} id="sehirUlke">
        <input
          id="sehirUlke"
          {...register('sehirUlke')}
          className={inputClasses}
          placeholder={t('ph_sehir')}
        />
      </FormField>

      <FormField label={t('mesaj')} id="mesaj">
        <textarea
          id="mesaj"
          {...register('mesaj')}
          rows={4}
          className={cn(inputClasses, 'resize-none')}
          placeholder={t('ph_mesaj')}
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
            <a href="/kvkk" className="text-[#0A6DB8] hover:underline" target="_blank">{t('kvkk_link')}</a>
            {t('kvkk_text')}{' '}
            <span className="text-red-600">*</span>
          </span>
        </label>
      </FormField>

      <Button type="submit" variant="primary" size="md" disabled={isSubmitting} fullWidth>
        {isSubmitting ? t('gonderi') : tq('submit')}
      </Button>
    </form>
  );
}
