import type { Metadata } from 'next';
import { Public_Sans } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const sans = Public_Sans({ subsets: ['latin'] });

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
      <body className={sans.className}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
