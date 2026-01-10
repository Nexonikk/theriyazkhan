import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster"
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Riyaz Ahmed Khan | Revenue-First Sales Leader',
  description: 'Portfolio of Riyaz Ahmed Khan, a Revenue-First Sales Leader with 9+ years of experience in B2B SaaS & EdTech, scaling teams and driving predictable revenue.',
  openGraph: {
    title: 'Riyaz Ahmed Khan | Revenue-First Sales Leader',
    description: 'Portfolio of Riyaz Ahmed Khan, a Revenue-First Sales Leader with 9+ years of experience in B2B SaaS & EdTech.',
    images: [
      {
        url: '/riyaz.png', // Using the profile image as OG image
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Riyaz Ahmed Khan | Revenue-First Sales Leader',
    description: 'Portfolio of Riyaz Ahmed Khan, a Revenue-First Sales Leader with 9+ years of experience in B2B SaaS & EdTech.',
    images: ['/riyaz.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
           <Script
          id="chatbase-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      window.embeddedChatbotConfig = {
        chatbotId: "v9tvusfLSAN1XWm-8H9nq",
        domain: "www.chatbase.co"
      };
    `,
          }}
        />
        <Script
          src="https://www.chatbase.co/embed.min.js"
          strategy="afterInteractive"
          defer
        />
      </body>
    </html>
  );
}
