import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Cross, Sparkles } from 'lucide-react';
import { PageHero, SectionTitle, Breadcrumbs, Callout, SourceNote } from '@/components/ui';
import { SaintDirectory } from '@/components/features/SaintDirectory';
import { images } from '@/content/images';

export const metadata: Metadata = {
  title: 'Saints Directory — Lives of Holy Men and Women',
  description: 'Search and filter Catholic saints by vocation, historical period, and patronage. Read their biographies, virtues, writings, and prayers.',
};

export default function SaintsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Saints' }]} />

      <PageHero
        eyebrow="The Saints"
        title="A Cloud of Witnesses"
        description="The saints are ordinary men and women whose lives were shaped by grace. Explore their stories, find a patron, and see how holiness takes many different forms — in apostles, bishops, parents, teenagers, monks, and martyrs."
        image={images.madonna}
      >
        <Link href="#directory" className="btn bg-gold text-forest-deep hover:bg-gold-light">Browse the directory <ArrowRight size={16} /></Link>
        <Link href="#about" className="btn border border-ivory/40 text-ivory hover:text-gold">What is a saint?</Link>
      </PageHero>

      <div id="about" className="container-page scroll-mt-28 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-center">
          <div className="prose-faith max-w-prose">
            <h2>Why do Catholics honour saints?</h2>
            <p>Catholics do not worship saints. We honour them as people whose lives show what God&apos;s grace can do, and we ask them to pray with us — just as we might ask a friend to pray for us. The saints are not distant heroes; they were people with ordinary days, difficult choices, and very human struggles.</p>
            <p>Browse the directory below to search by name, filter by vocation or period, or look for a saint associated with a particular patronage. Open any card to read a fuller biography, including virtues, key events, writings, and a prayer.</p>
          </div>
          <aside className="card p-7">
            <Sparkles size={24} className="text-gold-dark dark:text-gold" />
            <h3 className="mt-4 font-serif text-2xl font-semibold">Many paths, one call</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">Some saints were scholars, some were soldiers, some were children. Holiness is not one personality type — it is a life turned toward God in whatever circumstances are given.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="chip"><Cross size={12} /> Faith</span>
              <span className="chip">Hope</span>
              <span className="chip">Charity</span>
            </div>
          </aside>
        </div>
        <Callout title="A note on the images" tone="gold">
          Where an image is available, it is a work of sacred art or a photograph from Wikimedia Commons; it is not necessarily a literal likeness. Individual credits and licence details are listed on our <Link href="/sources">sources page</Link>.
        </Callout>
      </div>

      {/* DIRECTORY */}
      <section id="directory" className="scroll-mt-28 bg-[var(--bg-alt)] py-20">
        <div className="container-page">
          <SectionTitle
            eyebrow="Explore"
            title="Search the saints"
            description="Use the filters to narrow the list. You can combine a search term with any of the dropdown filters."
          />
          <SaintDirectory />
        </div>
      </section>

      <div className="container-narrow py-14">
        <SourceNote label="Saints and blessed — The Holy See" url="https://www.vatican.va/" />
      </div>
    </>
  );
}
