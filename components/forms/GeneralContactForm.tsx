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
  adSoyad: string;
  telefon: string;
  eposta: string;
  konu: string;
  mesaj: string;
  kvkk: boolean;
};

interface GeneralContactFormProps {
  type?: 'genel' | 'danismanlik';
}

export function GeneralContactForm({ type = 'genel' }: GeneralContactFormProps) {
  const t = useTranslations('forms');
  const tc = useTranslations('contact_form');
  const [submitted, setSubmitted] = useState(false);

  const schema = z.object({
    adSoyad: z.string().min(3, t('err_ad_soyad')),
    telefon: z.string().min(10, t('err_telefon')),
    eposta: z.string().email(t('err_eposta')),
    konu: z.string().min(2, t('err_konu')),
    mesaj: z.string().min(10, t('err_mesaj_min')),
    kvkk: z.boolean().refine((v) => v, t('err_kvkk')),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, type }),
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <CheckCircle2 size={32} className="text-green-600" />
        </div>
        <h3 className="font-sora font-semibold text-[#071B34] text-xl mb-2">{tc('success_title')}</h3>
        <p className="text-[#475569] text-sm max-w-sm">
          {tc('success_desc')}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label={t('ad_soyad')} required error={errors.adSoyad?.message} id="adSoyadGenel">
          <input id="adSoyadGenel" {...register('adSoyad')} className={cn(inputClasses, errors.adSoyad && errorInputClasses)} placeholder={t('ph_ad_soyad')} />
        </FormField>
        <FormField label={t('telefon')} required error={errors.telefon?.message} id="telefonGenel">
          <input id="telefonGenel" type="tel" {...register('telefon')} className={cn(inputClasses, errors.telefon && errorInputClasses)} placeholder={t('ph_tel')} />
        </FormField>
      </div>

      <FormField label={t('eposta')} required error={errors.eposta?.message} id="epostaGenel">
        <input id="epostaGenel" type="email" {...register('eposta')} className={cn(inputClasses, errors.eposta && errorInputClasses)} placeholder={t('ph_eposta')} />
      </FormField>

      <FormField label={t('konu')} required error={errors.konu?.message} id="konuGenel">
        <input
          id="konuGenel"
          {...register('konu')}
          className={cn(inputClasses, errors.konu && errorInputClasses)}
          placeholder={type === 'danismanlik' ? tc('ph_konu_danismanlik') : tc('ph_konu_genel')}
        />
      </FormField>

      <FormField label={t('mesaj')} required error={errors.mesaj?.message} id="mesajGenel">
        <textarea id="mesajGenel" {...register('mesaj')} rows={5} className={cn(inputClasses, 'resize-none', errors.mesaj && errorInputClasses)} placeholder={tc('ph_mesaj')} />
      </FormField>

      <FormField error={errors.kvkk?.message}>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" {...register('kvkk')} className="mt-0.5 w-4 h-4 rounded border-[#D9E1EA] text-[#0A6DB8] focus:ring-[#11B5FF]" />
          <span className="text-sm text-[#475569]">
            <a href="/kvkk" className="text-[#0A6DB8] hover:underline" target="_blank">{t('kvkk_link')}</a>{t('kvkk_read')} <span className="text-red-600">*</span>
          </span>
        </label>
      </FormField>

      <Button type="submit" variant="primary" size="md" disabled={isSubmitting} fullWidth>
        {isSubmitting ? t('gonderi') : tc('submit')}
      </Button>
    </form>
  );
}
