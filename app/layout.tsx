import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import VideoModal from '@/components/VideoModal';
import { BEFORE_AFTER_OYSTEER } from '@/constants';

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
    <html lang='en'>
      <body className={font.className}>
        <NavBar />
        <main>{children}</main>
        <VideoModal videoId={BEFORE_AFTER_OYSTEER[1].videoUrl} />
        <Footer />
      </body>
    </html>
  );
}
