import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  firmaAdi: z.string().min(2),
  adSoyad: z.string().min(3),
  telefon: z.string().min(10),
  eposta: z.string().email(),
  sehirUlke: z.string().optional(),
  urunGrubu: z.array(z.string()),
  projiTipi: z.string(),
  mesaj: z.string().optional(),
  kvkk: z.boolean(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    // TODO: send email, save to DB, CRM integration
    console.log('[QUOTE REQUEST]', data);

    return NextResponse.json(
      { success: true, message: 'Teklif talebiniz alınmıştır.' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: 'Sunucu hatası.' },
      { status: 500 }
    );
  }
}
