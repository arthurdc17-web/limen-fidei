import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, Breadcrumbs, Callout } from '@/components/ui';
import { SearchClient } from '@/components/features/SearchClient';

export const metadata: Metadata = {
  title: 'Search Catholic Companion',
  description: 'Search prayers, saints, teachings, sacraments, guides, quizzes, and frequently asked questions across Catholic Companion.',
};

export default function SearchPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Search' }]} />
      <PageHero
        eyebrow="Site search"
        title="Search Catholic Companion"
        description="Find a prayer, a saint, an explanation of the Mass, an answer to a common question, or a quiz to test what you have learned."
        compact
      />

      <div className="container-page py-12">
        <Callout title="This search covers this site only" tone="gold">
          It searches Catholic Companion pages — titles, descriptions, categories, and keywords. It does not search the wider internet, and it is not a parish database. For local churches, use the <Link href="/churches" className="link-gold">church finder guidance</Link>.
        </Callout>
      </div>

      <section className="bg-[var(--bg-alt)] py-14">
        <div className="container-narrow"><SearchClient /></div>
      </section>
    </>
  );
}
