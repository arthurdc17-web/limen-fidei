import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Heart, ScrollText } from 'lucide-react';
import { Breadcrumbs, Callout, PageHero, SectionTitle, SourceNote } from '@/components/ui';
import { PrayerLibrary } from '@/components/features/PrayerLibrary';
import { images } from '@/content/images';

export const metadata: Metadata = {
  title: 'Catholic Prayer Library — Texts, Meanings, and Guidance',
  description: 'Search and bookmark traditional Catholic prayers by category, with the full text, meaning, and advice on when and how to pray them.',
};

export default function PrayersPage() {
  return (
    <>
      <PageHero
        eyebrow="Prayer"
        title="A Library of Catholic Prayer"
        description="Prayer is conversation with God. Here you will find the prayers Catholics use most — in Mass, in the Rosary, at home, and in times of need — with their full texts and explanations."
        image={images.candles}
      >
        <Link href="#library" className="btn bg-gold text-forest-deep hover:bg-gold-light">Browse the library <ArrowRight size={16} /></Link>
        <Link href="/rosary" className="btn border border-ivory/40 text-ivory hover:text-gold">Pray the Rosary</Link>
      </PageHero>

      <Breadcrumbs items={[{ label: 'Prayers' }]} />

      <section className="container-page py-14">
        <Callout title="Prayer is a gift, not a performance" tone="green">
          These texts are guides, not magic formulas. Catholics believe God answers prayer by his own power; the words help us attend to him. Devotions such as chaplets, novenas, and the Rosary are practices of love, not obligations imposed on every Catholic. Some customs differ between parishes and religious orders — follow the practice of the community you are in.
        </Callout>
      </section>

      <section id="library" className="scroll-mt-28 bg-[var(--surface)] py-16">
        <div className="container-page">
          <SectionTitle eyebrow="Explore" title="The prayer library" description="Search by title, theme, or words in the text; filter by category; or show only prayers you have saved." />
          <PrayerLibrary />
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-7">
            <Heart className="text-gold-dark dark:text-gold" size={22} aria-hidden="true" />
            <h2 className="mt-4 font-serif text-2xl font-semibold">How to begin praying</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">Start short and honest. The Sign of the Cross, the Our Father, the Hail Mary, and the Glory Be are the four prayers every beginner can learn. Pray slowly, pay attention to the words, and bring your own needs and thanksgiving to God in your own words too.</p>
            <Link href="/lessons" className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">See the beginner lessons <ArrowRight size={13} /></Link>
          </div>
          <div className="card p-7">
            <ScrollText className="text-gold-dark dark:text-gold" size={22} aria-hidden="true" />
            <h2 className="mt-4 font-serif text-2xl font-semibold">Praying with the Church</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">The Our Father is prayed at every Mass; the Nicene Creed is professed on Sundays and solemnities; the Rosary weaves several of these prayers together with meditations on the life of Christ. Learning them connects your personal prayer to the prayer of the whole Church.</p>
            <Link href="/mass" className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">Read the Mass guide <ArrowRight size={13} /></Link>
          </div>
        </div>
        <div className="mt-10">
          <SourceNote label="USCCB — Prayers and Devotions" url="https://www.usccb.org/prayer-and-worship/prayers-and-devotions" ccc="CCC 2650–2656" />
        </div>
      </section>
    </>
  );
}
