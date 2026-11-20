import type { Metadata } from 'next';
import { ShieldCheck } from 'lucide-react';
import { PageHero, Breadcrumbs } from '@/components/ui';
import { AccountDashboard } from '@/components/features/AccountDashboard';

export const metadata: Metadata = {
  title: 'Your Account',
  description: 'View and manage the bookmarks, saved lessons, quiz scores, recent views, learning path, Rosary progress, and preferences stored in your browser.',
};

export default function AccountPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Your Account' }]} />
      <PageHero
        eyebrow="Your space"
        title="Your Learning Dashboard"
        description="Everything you have saved or achieved on this site, gathered in one place — with clear controls to export it or remove it."
        compact
      >
        <span className="chip border-gold/50 text-ivory"><ShieldCheck size={14} /> Private to this browser</span>
      </PageHero>

      <section className="bg-[var(--bg-alt)] py-14">
        <div className="container-page"><AccountDashboard /></div>
      </section>
    </>
  );
}
