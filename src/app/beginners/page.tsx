import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Church, Cross, GraduationCap, ScrollText } from 'lucide-react';
import {
  Accordion, Breadcrumbs, Callout, CheckListItem, FeatureCard, PageHero, SectionTitle, SourceNote,
} from '@/components/ui';
import { lessons } from '@/content/lessons';
import { getPrayer } from '@/content/prayers';
import type { Prayer } from '@/content/types';
import { beginnerChecklist, firstMassTips } from '@/content/becoming';
import { images } from '@/content/images';

export const metadata: Metadata = {
  title: 'Beginner’s Guide to Catholicism — Start Here',
  description: 'A welcoming starting point for anyone new to the Catholic faith: five lessons, core terms, first Mass tips, and a simple path forward.',
};

export default function BeginnersPage() {
  const keyTerms: { term: string; text: string }[] = [];
  lessons.forEach((lesson) => lesson.sections.forEach((section) => {
    if (section.definition) keyTerms.push(section.definition);
  }));

  const corePrayers = ['sign-of-the-cross', 'our-father', 'hail-mary', 'glory-be']
    .map((id) => getPrayer(id))
    .filter((prayer): prayer is Prayer => Boolean(prayer));

  const startPath = [
    { n: 1, title: 'Come to Mass', text: 'Everyone is welcome. Sit near the back, follow when you can, and stay in your place during Communion if you are not receiving.', href: '/mass', label: 'Read the Mass guide', icon: Church },
    { n: 2, title: 'Read lessons 1–3', text: 'Learn who Jesus is, what Catholics believe, and how the Bible and the Church belong together.', href: '/lessons', label: 'Open the lessons', icon: BookOpen },
    { n: 3, title: 'Learn four core prayers', text: 'The Sign of the Cross, the Our Father, the Hail Mary, and the Glory Be are enough to begin.', href: '/prayers', label: 'Browse the prayer library', icon: ScrollText },
    { n: 4, title: 'Ask about OCIA', text: 'The Order of Christian Initiation of Adults is the Church’s ordinary path for becoming Catholic. Inquiry carries no commitment.', href: '/becoming-catholic', label: 'See how OCIA works', icon: GraduationCap },
    { n: 5, title: 'Keep learning', text: 'The sacraments are the visible signs of God’s grace. Explore them at your own pace.', href: '/sacraments', label: 'Explore the seven sacraments', icon: Cross },
  ];

  return (
    <>
      <PageHero
        eyebrow="Beginner’s Guide"
        title="New to Catholicism? Start Here."
        description="You do not need to know anything before you begin. This page gives you a simple path: a few lessons, a handful of terms, and practical advice for your first Mass."
        image={images.hero}
      >
        <Link href="/lessons" className="btn bg-gold text-forest-deep hover:bg-gold-light">Start the five lessons <ArrowRight size={16} /></Link>
        <Link href="/becoming-catholic" className="btn border border-ivory/40 text-ivory hover:text-gold">Becoming Catholic <ArrowRight size={16} /></Link>
      </PageHero>

      <Breadcrumbs items={[{ label: 'Beginners' }]} />

      <section className="container-page py-14">
        <Callout title="You are welcome here" tone="green">
          Catholicism is not a test you have to pass before you belong. It is a relationship with the living God, learned slowly, in community. Bring your questions — the Church has room for honest inquiry, and nothing you ask is too basic. Where customs differ between parishes or dioceses, this guide says so.
        </Callout>
      </section>

      {/* WHERE TO START */}
      <section className="bg-[var(--surface)] py-20">
        <div className="container-page">
          <SectionTitle eyebrow="A simple path" title="Where to start" description="Five small steps, in a sensible order. Move at your own pace; there is no deadline." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {startPath.map((step) => (
              <article key={step.n} className="card flex h-full flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-5xl leading-none text-gold-dark dark:text-gold">{step.n}</span>
                  <step.icon size={20} className="text-gold-dark dark:text-gold" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-[var(--text-muted)]">{step.text}</p>
                <Link href={step.href} className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">
                  {step.label} <ArrowRight size={13} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* THE FIVE LESSONS */}
      <section className="container-page py-20">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <SectionTitle eyebrow="The fundamentals" title="The five beginner lessons" description="Short, plain-language explanations of the faith, written for someone hearing it for the first time." />
          <Link href="/lessons" className="btn-secondary btn-sm">See the full guide <ArrowRight size={14} /></Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lessons.map((lesson) => (
            <Link key={lesson.id} href={`/lessons/${lesson.id}`} className="card group flex h-full flex-col p-7 transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-soft">
              <div className="flex items-center justify-between">
                <span className="font-serif text-4xl text-gold-dark dark:text-gold">{String(lesson.number).padStart(2, '0')}</span>
                <span className="chip">Lesson {lesson.number} of {lessons.length}</span>
              </div>
              <h3 className="mt-3 font-serif text-2xl font-semibold leading-snug">{lesson.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-[var(--text-muted)]">{lesson.intro}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">
                Read the lesson <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* TERMS */}
      <section className="bg-ivory py-20 dark:bg-[var(--bg-alt)]">
        <div className="container-narrow">
          <SectionTitle eyebrow="Vocabulary" title="Terms you will hear" description="Catholic faith has a vocabulary of its own. These short definitions come from the beginner lessons; the glossary has many more." />
          <Accordion
            items={keyTerms.slice(0, 10).map((term) => ({ title: term.term, content: <p>{term.text}</p> }))}
          />
          <div className="mt-8">
            <Link href="/glossary" className="btn-secondary btn-sm">Browse the full glossary <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* CORE PRAYERS FROM THE CHECKLIST */}
      <section className="container-page py-20">
        <SectionTitle eyebrow="From the checklist" title="Four prayers to learn first" description="The beginner checklist names these four prayers. Each is short enough to learn quickly, and each opens a different part of Catholic prayer." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {corePrayers.map((prayer) => (
            <Link key={prayer.id} href={`/prayers/${prayer.id}`} className="card group flex h-full flex-col p-6">
              <h3 className="font-serif text-xl font-semibold group-hover:text-gold-dark dark:group-hover:text-gold">{prayer.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-[var(--text-muted)]">{prayer.meaning}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">Full text <ArrowRight size={13} /></span>
            </Link>
          ))}
        </div>
      </section>

      {/* FIRST MASS */}
      <section className="container-page py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[380px_1fr]">
          <div>
            <img src={images.nave} alt="Interior of a Catholic church with the altar and nave" loading="lazy" className="card h-80 w-full object-cover" />
            <p className="mt-3 text-xs leading-5 text-[var(--text-muted)]">A parish church: the nave leads toward the altar, the table of the Lord.</p>
          </div>
          <div>
            <SectionTitle eyebrow="Your first Sunday" title="Tips for your first Mass" description="Practical details that make a first visit much easier." />
            <ul className="space-y-3">
              {firstMassTips.map((tip) => <CheckListItem key={tip}>{tip}</CheckListItem>)}
            </ul>
            <Link href="/mass" className="btn-primary mt-8">Read the complete Mass guide <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="bg-[var(--surface)] py-20">
        <div className="container-narrow">
          <SectionTitle eyebrow="First steps" title="A beginner’s checklist" description="You do not have to finish this list to be welcome. It simply turns vague intentions into concrete actions." />
          <div className="card p-8">
            <ul className="space-y-4">
              {beginnerChecklist.map((item) => <CheckListItem key={item.label} done={item.done}>{item.label}</CheckListItem>)}
            </ul>
          </div>
          <Callout title="A question about your situation?" tone="gold">
            Baptism history, previous marriages, and earlier church memberships all affect the path into full communion. None of them is an obstacle to asking. Speak with a parish priest or OCIA director; the <Link href="/becoming-catholic" className="link-gold">becoming Catholic guide</Link> explains the common situations.
          </Callout>
        </div>
      </section>

      {/* KEEP GOING */}
      <section className="container-page py-20">
        <SectionTitle eyebrow="Go deeper" title="Where to go next" description="Pick the part of the faith you most want to understand." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard href="/lessons" iconName="book" title="Beginner’s Guide" description="All five lessons, with Scripture references, Catechism numbers, and review questions." />
          <FeatureCard href="/becoming-catholic" iconName="users" title="Becoming Catholic" description="The five stages of OCIA, what to expect, and how different baptism histories are handled." />
          <FeatureCard href="/prayers" iconName="scroll" title="Prayer Library" description="Traditional prayers with the full text, meaning, and guidance on when and how to pray them." />
          <FeatureCard href="/teachings" iconName="sparkles" title="Catholic Teachings" description="Clear explanations of doctrine, moral teaching, and the philosophical background." />
        </div>
        <div className="mt-12"><SourceNote label="Catechism of the Catholic Church" url="https://www.vatican.va/archive/ENG0015/_INDEX.HTM" ccc="CCC 1–3" /></div>
      </section>
    </>
  );
}
