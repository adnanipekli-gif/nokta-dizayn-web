import { NextResponse } from 'next/server';

const DRIVE_ID = '1SCss5_-ADJSqFeYHd4M8y0uSGYmhObVl';
const DRIVE_URL = `https://drive.usercontent.google.com/download?id=${DRIVE_ID}&export=download&confirm=t`;

export async function GET() {
  const res = await fetch(DRIVE_URL);
  if (!res.ok) {
    return new NextResponse('PDF yüklenemedi', { status: 502 });
  }
  const buffer = await res.arrayBuffer();
  return new NextResponse(buffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
