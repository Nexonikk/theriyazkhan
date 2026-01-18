import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster"
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://theriyazkhan.com'), 
  title: {
    default: 'Riyaz Ahmed Khan | Revenue-First Sales Leader',
    template: '%s | Riyaz Ahmed Khan',
  },
  description: 'Riyaz Ahmed Khan is a Revenue-First Sales Leader with 9+ years of experience in B2B SaaS & EdTech. Specializing in GTM strategy, pipeline scaling, and high-performance team leadership.',
  keywords: [
    'Riyaz Ahmed Khan',
    'Sales Leader',
    'Revenue Operations',
    'GTM Strategy',
    'B2B SaaS',
    'EdTech',
    'Sales Director',
    'Pipeline Generation',
    'Team Leadership',
    'India Sales',
    'Startup Growth',
  ],
  authors: [{ name: 'Riyaz Ahmed Khan' }],
  creator: 'Riyaz Ahmed Khan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://theriyazkhan.com',
    title: 'Riyaz Ahmed Khan | Revenue-First Sales Leader',
    description: 'Scale your revenue with data-backed sales strategies. Explore the portfolio of Riyaz Ahmed Khan.',
    siteName: 'Riyaz Ahmed Khan',
    images: [
      {
        url: '/riyaz.png',
        width: 1200,
        height: 630,
        alt: 'Riyaz Ahmed Khan - Sales Leader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Riyaz Ahmed Khan | Revenue-First Sales Leader',
    description: 'Scale your revenue with data-backed sales strategies. Explore the portfolio of Riyaz Ahmed Khan.',
    images: ['/riyaz.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://theriyazkhan.com',
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
