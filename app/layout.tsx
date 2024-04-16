import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import VideoModal from '@/components/VideoModal';
import { BEFORE_AFTER_OYSTEER } from '@/constants';
import { Suspense } from 'react';

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Oyster Reef',
  description: 'Fujairah Research Center',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={font.className}>
        <NavBar />
        <main>{children}</main>
        <Suspense>
          <VideoModal />
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
