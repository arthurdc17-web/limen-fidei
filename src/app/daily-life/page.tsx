import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, CalendarDays, Cross, Heart, ScrollText, Users } from 'lucide-react';
import { PageHero, SectionTitle, Breadcrumbs, Callout, FeatureCard, SourceNote } from '@/components/ui';
import { DailyRoutine } from '@/components/features/DailyRoutine';
import { dailyContent } from '@/content/daily';
import { images } from '@/content/images';

export const metadata: Metadata = {
  title: 'Catholic Daily Life — Practical Habits for Ordinary Days',
  description: 'Prayer, Sunday Mass, fasting and abstinence, almsgiving, works of mercy, virtues, community, and rest — with a customisable daily prayer routine.',
};

export default function DailyLifePage() {
  const today = new Date();
  const daily = dailyContent(today);

  const habits = [
    {
      title: 'Prayer',
      icon: BookOpen,
      text: 'Prayer is simply attention turned toward God. Begin with the prayers of the Church, then speak to him in your own words. A short, honest prayer each day is more fruitful than an ambitious plan you abandon.',
      href: '/prayers',
      link: 'Explore the prayer library',
    },
    {
      title: 'Sunday Mass',
      icon: Cross,
      text: 'The Sunday Eucharist is the centre of Catholic life. Catholics are obliged to attend Mass on Sundays and holy days, unless prevented by a serious reason. The Church asks us to prepare ourselves and to arrive with a willingness to listen.',
      href: '/mass',
      link: 'Prepare for Mass',
    },
    {
      title: 'Fasting and abstinence',
      icon: CalendarDays,
      text: 'Fasting trains desire. The Church asks Catholics to fast on Ash Wednesday and Good Friday and to abstain from meat on the Fridays of Lent. Exact obligations and ages vary by diocese, so check your local norms — the point is conversion, not rule-keeping for its own sake.',
      href: '/calendar',
      link: 'See the liturgical calendar',
    },
    {
      title: 'Almsgiving',
      icon: Heart,
      text: 'Giving money, time, or attention to someone in need is a concrete way to love God and neighbour. Give freely, without seeking applause, and consider supporting work that serves the poor in your own community.',
      href: '/calendar',
      link: 'Lent and almsgiving',
    },
    {
      title: 'Works of mercy',
      icon: Users,
      text: 'The traditional works of mercy give practical shape to charity: feeding the hungry, visiting the sick and imprisoned, burying the dead, instructing the ignorant, counselling the doubtful, comforting the sorrowful, and forgiving offences.',
      href: '/sacraments',
      link: 'Grace for the journey',
    },
    {
      title: 'Virtues',
      icon: ScrollText,
      text: 'The four cardinal virtues — prudence, justice, fortitude, and temperance — order our choices. Faith, hope, and charity orient us toward God. Virtues grow by repetition, like any habit, with grace and practice working together.',
      href: '/confession',
      link: 'Examine your habits',
    },
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: 'Catholic Daily Life' }]} />

      <PageHero
        eyebrow="Faith in Ordinary Days"
        title="How Catholics Live Their Faith"
        description="Holiness is not reserved for extraordinary moments. It is formed in ordinary days: a morning prayer, a Sunday Mass, a fast kept quietly, a kindness offered without an audience, and rest that trusts God to hold the world."
        image={images.candles}
      >
        <Link href="#routine" className="btn bg-gold text-forest-deep hover:bg-gold-light">Build a prayer routine <ArrowRight size={16} /></Link>
        <Link href="#habits" className="btn border border-ivory/40 text-ivory hover:text-gold">The basic habits</Link>
      </PageHero>

      <div className="container-page py-16">
        <Callout title="Small and steady" tone="green">
          You do not have to do everything at once. Pick one or two habits that fit your actual life, practise them consistently, and let the rest wait. The Christian life is a long obedience, not a single heroic weekend.
        </Callout>

        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-center">
          <div className="prose-faith max-w-prose">
            <h2>A rhythm, not a checklist</h2>
            <p>Catholic spiritual life has a rhythm of gathering and being sent. At Mass we hear the Word and receive the Eucharist; at home and at work we carry that grace into ordinary choices. Prayer, fasting, and almsgiving are not ways of earning God&apos;s love — they are ways of making room for it.</p>
            <p>The Church gives us a calendar of seasons to shape this rhythm. In Advent we wait; at Christmas we celebrate; in Lent we turn back to God; at Easter we rejoice; in Ordinary Time we grow. Your own days can follow the same pattern in miniature.</p>
          </div>
          <div className="card p-7">
            <p className="eyebrow mb-3">Today&apos;s reflection</p>
            <p className="font-serif text-xl leading-8">{daily.reading.text}</p>
            <p className="mt-3 text-xs font-semibold text-gold-dark dark:text-gold">{daily.reading.reference}</p>
            <p className="mt-4 border-t border-[var(--border)] pt-4 text-sm leading-7 text-[var(--text-muted)]">{daily.reading.reflection}</p>
            <a href={daily.usccbReadingsUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-dark dark:text-gold">Official daily readings <ArrowRight size={13} /></a>
          </div>
        </div>
      </div>

      {/* HABITS */}
      <section id="habits" className="scroll-mt-28 bg-[var(--bg-alt)] py-20">
        <div className="container-page">
          <SectionTitle
            eyebrow="The basic habits"
            title="Eight ways to live the faith"
            description="These practices support one another. Prayer leads to Mass; Mass sends us out in mercy; mercy needs rest to be sustained."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {habits.map((habit) => {
              const Icon = habit.icon;
              return (
                <article key={habit.title} className="card flex h-full flex-col p-7">
                  <Icon size={22} className="text-gold-dark dark:text-gold" />
                  <h3 className="mt-4 font-serif text-2xl font-semibold">{habit.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-[var(--text-muted)]">{habit.text}</p>
                  <Link href={habit.href} className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">{habit.link} <ArrowRight size={13} /></Link>
                </article>
              );
            })}

            <article className="card flex h-full flex-col p-7">
              <Heart size={22} className="text-gold-dark dark:text-gold" />
              <h3 className="mt-4 font-serif text-2xl font-semibold">Community</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-[var(--text-muted)]">Faith is not a private hobby. The Church is a family: a parish to belong to, people to pray with, and older and younger Christians to learn from. Sponsor, small group, or ministry — find your place.</p>
              <Link href="/churches" className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">Find a parish <ArrowRight size={13} /></Link>
            </article>

            <article className="card flex h-full flex-col p-7">
              <CalendarDays size={22} className="text-gold-dark dark:text-gold" />
              <h3 className="mt-4 font-serif text-2xl font-semibold">Rest</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-[var(--text-muted)]">Rest is part of creation&apos;s design, not a reward for finishing everything. Keep a holy day, sleep enough, spend time outdoors, and allow silence. An exhausted person has little left to give.</p>
              <Link href="/calendar" className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">See the seasons <ArrowRight size={13} /></Link>
            </article>
          </div>
        </div>
      </section>

      {/* ROUTINE */}
      <section id="routine" className="scroll-mt-28 bg-[var(--surface)] py-20">
        <div className="container-page">
          <SectionTitle
            eyebrow="Your plan"
            title="A prayer routine you can keep"
            description="Start with a few minutes, adjust as you go, and let the goal fit your real schedule. Your routine stays in this browser."
          />
          <DailyRoutine />
        </div>
      </section>

      {/* GO DEEPER */}
      <section className="bg-forest py-20 text-ivory">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Go deeper</p>
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">The Church&apos;s toolbox for daily life</h2>
            <p className="mt-5 leading-8 text-ivory/75">Everything on this site exists to help you live the faith in ordinary circumstances. These are the most useful places to start.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard href="/prayers" iconName="book" title="Prayer library" description="Full texts and explanations of the Church's everyday prayers." />
            <FeatureCard href="/mass" iconName="cross" title="Guide to the Mass" description="Follow along at Mass, step by step, wherever you are." />
            <FeatureCard href="/rosary" iconName="rosary" title="The Rosary" description="Pray with the mysteries of Christ's life using a digital guide." />
            <FeatureCard href="/confession" iconName="scroll" title="Confession" description="A gentle walkthrough of reconciliation and a private examination." />
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/calendar" className="btn bg-gold text-forest-deep hover:bg-gold-light">Liturgical calendar <ArrowRight size={15} /></Link>
            <Link href="/sacraments" className="btn border border-ivory/40 text-ivory hover:text-gold">The seven sacraments</Link>
          </div>
        </div>
      </section>

      <div className="container-narrow py-14">
        <SourceNote
          label="USCCB — Catholic Social Teaching"
          url="https://www.usccb.org/issues-and-action/catholic-social-teaching"
          ccc="CCC 1803–1829"
        />
        <p className="mt-6 text-xs leading-6 text-[var(--text-muted)]">Disciplines such as fasting and holy days are set by Church authority and applied locally. Where practice varies, follow the guidance of your bishop and parish.</p>
      </div>
    </>
  );
}
