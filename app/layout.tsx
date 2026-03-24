import type { Metadata } from 'next';
import { JetBrains_Mono, Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Header from '@/components/layout/Header';
import TabNav from '@/components/layout/TabNav';
import Footer from '@/components/layout/Footer';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://help-me-survive-college.vercel.app'),
  title: {
    default: 'help-me-survive-college — ESE, Attendance & CGPA Calculators',
    template: '%s | help-me-survive-college',
  },
  description:
    'Free college calculators. Calculate minimum ESE marks needed for every grade, track attendance and plan bunks, compute CGPA by semester or subject. No login required.',
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body>
        <Header />
        <TabNav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
