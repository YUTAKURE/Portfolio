import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
// import Header from '@/components/Header';
// import { ThemeProvider } from '@/components/theme-provider';

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
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        <div className="">{children}</div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
