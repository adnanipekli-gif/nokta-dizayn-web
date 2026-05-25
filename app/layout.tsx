import type { ReactNode } from 'react';

// Minimal root layout — html/body are provided by app/[locale]/layout.tsx
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
