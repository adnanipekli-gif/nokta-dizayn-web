// Unreachable — next-intl middleware routes all requests to app/[locale]/page.tsx
// This file only exists to satisfy Next.js file-system router expectations.
import { redirect } from 'next/navigation';
export default function RootPage() {
  redirect('/');
}
