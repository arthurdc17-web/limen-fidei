import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { UserProvider } from '@/components/providers/UserProvider';

export const metadata: Metadata = {
  title: { default: 'Catholic Companion — Discover the Faith. Learn to Pray. Grow in Christ.', template: '%s | Catholic Companion' },
  description: 'A beginner-friendly Catholic educational platform. Learn about the Mass, the Rosary, Catholic prayers, teachings, sacraments, and becoming Catholic.',
  keywords: ['Catholic', 'Mass', 'Rosary', 'Catholic prayers', 'OCIA', 'Catechism', 'sacraments', 'Catholic saints'],
  openGraph: { title: 'Catholic Companion', description: 'Discover the Catholic Faith. Learn to Pray. Grow in Christ.', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var s=JSON.parse(localStorage.getItem('catholic-companion-v1')||'{}');if(s.theme==='dark')document.documentElement.classList.add('dark')}catch(e){}`,
          }}
        />
      </head>
      <body>
        <UserProvider>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-2 focus:text-forest-deep">Skip to main content</a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
