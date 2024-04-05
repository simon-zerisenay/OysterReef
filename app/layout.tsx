import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import VideoModal from '@/components/VideoModal';

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
        <VideoModal videoId='VBJyLfOyNsM' />
        <Footer />
      </body>
    </html>
  );
}
