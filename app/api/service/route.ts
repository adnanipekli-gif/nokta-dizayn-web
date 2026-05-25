import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  firmaAdi: z.string().min(2),
  yetkiliKisi: z.string().min(3),
  telefon: z.string().min(10),
  eposta: z.string().email(),
  lokasyon: z.string().min(2),
  urunSistemTipi: z.string(),
  servisKonusu: z.string(),
  aciklama: z.string().min(10),
  files: z.array(z.string()).optional(),
  kvkk: z.boolean(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    // TODO: send email, create service ticket
    console.log('[SERVICE REQUEST]', data);

    return NextResponse.json(
      { success: true, message: 'Servis talebiniz alınmıştır.' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: 'Sunucu hatası.' }, { status: 500 });
  }
}
