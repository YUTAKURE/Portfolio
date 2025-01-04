import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
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
  const gaId = 'G-QNXBRYD7JQ';

  return (
    <html lang="en">
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
          async
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}
        </Script>
      </head>
      <body className={notosansjp.className}>
        <div className="">{children}</div>

        <footer className="pb-5 bg-secondary-light dark:bg-primary-dark duration-500">
          <div className="text-center text-xs text-gray-400 translate-y-2">
            Copyright © All rights reserved | YUTA KUREBAYASHI
          </div>
        </footer>
      </body>
    </html>
  );
}
