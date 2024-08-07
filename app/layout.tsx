import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
// import Header from '@/components/Header';

const notosansjp = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'YK Portfolio',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notosansjp.className}>
        <div className="">{children}</div>

        <footer className="pb-5 bg-secondary-light dark:bg-primary-dark duration-500">
          <div className="text-center text-xs text-gray-400">
            Copyright © All rights reserved | YUTA KUREBAYASHI
          </div>
        </footer>
      </body>
    </html>
  );
}
