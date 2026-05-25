import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  adSoyad: z.string().min(3),
  telefon: z.string().min(10),
  eposta: z.string().email(),
  konu: z.string().min(2),
  mesaj: z.string().min(10),
  kvkk: z.boolean(),
  type: z.enum(['genel', 'danismanlik']).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    // TODO: send email, CRM integration
    console.log('[CONTACT REQUEST]', data);

    return NextResponse.json(
      { success: true, message: 'Mesajınız alınmıştır.' },
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
