import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'GILANG JAYA UTAMA - Perusahaan Konstruksi Profesional',
  description:
    'Perusahaan konstruksi profesional yang bergerak dalam pembangunan gedung, rumah, renovasi dan berbagai proyek konstruksi.',
  metadataBase: new URL('https://gilangjayautama.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}