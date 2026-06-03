'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, Upload } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { FormField, inputClasses, errorInputClasses } from './FormField';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

type FormData = {
  firmaAdi: string;
  yetkiliKisi: string;
  telefon: string;
  eposta: string;
  lokasyon: string;
  servisKonusu: string;
  aciklama: string;
  kvkk: boolean;
};

export function ServiceRequestForm() {
  const t = useTranslations('forms');
  const ts = useTranslations('service_form');
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const schema = z.object({
    firmaAdi: z.string().min(2, t('err_firma')),
    yetkiliKisi: z.string().min(3, t('err_ad_soyad')),
    telefon: z.string().min(10, t('err_telefon')),
    eposta: z.string().email(t('err_eposta')),
    lokasyon: z.string().min(2, t('err_lokasyon')),
    servisKonusu: z.string().min(1, t('err_servis')),
    aciklama: z.string().min(10, t('err_aciklama')),
    kvkk: z.boolean().refine((v) => v, t('err_kvkk')),
  });

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

  const serviceTopics = [
    { value: '', label: ts('topic_select') },
    { value: 'ariza', label: ts('topic_ariza') },
    { value: 'bakim', label: ts('topic_bakim') },
    { value: 'yedek-parca', label: ts('topic_yedek') },
    { value: 'garanti', label: ts('topic_garanti') },
    { value: 'diger', label: ts('topic_diger') },
  ];

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <CheckCircle2 size={32} className="text-green-600" />
        </div>
        <h3 className="font-sora font-semibold text-[#071B34] text-xl mb-2">{ts('success_title')}</h3>
        <p className="text-[#475569] text-sm max-w-sm">
          {ts('success_desc')}
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
          />
        </FormField>
        <FormField label={t('yetkili_kisi')} required error={errors.yetkiliKisi?.message} id="yetkiliKisi">
          <input
            id="yetkiliKisi"
            {...register('yetkiliKisi')}
            className={cn(inputClasses, errors.yetkiliKisi && errorInputClasses)}
            placeholder={t('ph_ad_soyad')}
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label={t('telefon')} required error={errors.telefon?.message} id="telefon-servis">
          <input id="telefon-servis" type="tel" {...register('telefon')} className={cn(inputClasses, errors.telefon && errorInputClasses)} placeholder={t('ph_tel')} />
        </FormField>
        <FormField label={t('eposta')} required error={errors.eposta?.message} id="eposta-servis">
          <input id="eposta-servis" type="email" {...register('eposta')} className={cn(inputClasses, errors.eposta && errorInputClasses)} placeholder={t('ph_eposta')} />
        </FormField>
      </div>

      <FormField label={t('lokasyon')} required error={errors.lokasyon?.message} id="lokasyon">
        <input id="lokasyon" {...register('lokasyon')} className={cn(inputClasses, errors.lokasyon && errorInputClasses)} placeholder="Istanbul" />
      </FormField>

      <FormField label={t('servis_konusu')} required error={errors.servisKonusu?.message} id="servisKonusu">
        <select id="servisKonusu" {...register('servisKonusu')} className={cn(inputClasses, 'cursor-pointer', errors.servisKonusu && errorInputClasses)}>
          {serviceTopics.map((topic) => <option key={topic.value} value={topic.value}>{topic.label}</option>)}
        </select>
      </FormField>

      <FormField label={t('aciklama')} required error={errors.aciklama?.message} id="aciklama">
        <textarea id="aciklama" {...register('aciklama')} rows={4} className={cn(inputClasses, 'resize-none', errors.aciklama && errorInputClasses)} placeholder={t('ph_mesaj')} />
      </FormField>

      {/* File upload */}
      <div>
        <label className="text-sm font-medium text-[#071B34] block mb-1.5">
          {ts('file_label')} <span className="text-[#8D99A8] font-normal">{ts('file_optional')}</span>
        </label>
        <label className="flex items-center gap-3 px-4 py-3 rounded-md border border-dashed border-[#D9E1EA] cursor-pointer hover:border-[#0A6DB8] transition-colors bg-[#F7F9FC]">
          <Upload size={16} className="text-[#8D99A8]" />
          <span className="text-sm text-[#8D99A8]">
            {files.length > 0 ? ts('file_selected', { n: files.length }) : ts('file_select')}
          </span>
          <input type="file" multiple accept="image/*,.pdf" onChange={handleFiles} className="hidden" />
        </label>
      </div>

      <FormField error={errors.kvkk?.message}>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" {...register('kvkk')} className="mt-0.5 w-4 h-4 rounded border-[#D9E1EA] text-[#0A6DB8] focus:ring-[#11B5FF]" />
          <span className="text-sm text-[#475569]">
            <a href="/kvkk" className="text-[#0A6DB8] hover:underline" target="_blank">{t('kvkk_link')}</a>{t('kvkk_read')} <span className="text-red-600">*</span>
          </span>
        </label>
      </FormField>

      <Button type="submit" variant="primary" size="md" disabled={isSubmitting} fullWidth>
        {isSubmitting ? t('gonderi') : ts('submit')}
      </Button>
    </form>
  );
}
