import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Heart, Info, ScrollText, ShieldCheck } from 'lucide-react';
import { PageHero, SectionTitle, Breadcrumbs, Callout, Accordion, SourceNote } from '@/components/ui';
import { ExaminationOfConscience } from '@/components/features/ExaminationOfConscience';
import { confessionSteps, sinExplanations, confessionDisclaimer } from '@/content/confession';
import { images } from '@/content/images';

export const metadata: Metadata = {
  title: 'A First Confession — Step by Step',
  description: 'A gentle, practical guide to the Sacrament of Penance: what to say, what happens, what sin means, and a private examination of conscience tool.',
};

export default function ConfessionPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Confession Guide' }]} />

      <PageHero
        eyebrow="The Sacrament of Mercy"
        title="A First Confession, Step by Step"
        description="Confession can feel daunting the first time. This guide tells you exactly what happens, what you can say, and what the Church teaches about sin and forgiveness. Read it slowly; there is no rush."
        image={images.candles}
      >
        <Link href="#steps" className="btn bg-gold text-forest-deep hover:bg-gold-light">The walkthrough <ArrowRight size={16} /></Link>
        <Link href="#examination" className="btn border border-ivory/40 text-ivory hover:text-gold">Examination of conscience</Link>
      </PageHero>

      <div className="container-page py-16">
        <Callout title="A private, educational guide" tone="green">
          What you read here is for your own preparation. This site never asks you to submit a confession, a list of sins, or sensitive personal information online. If you have personal or pastoral questions, speak with a priest in person.
        </Callout>

        <SectionTitle
          eyebrow="The language of mercy"
          title="Sin, repentance, and forgiveness"
          description="A few plain definitions make the rest of the guide much easier to follow."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sinExplanations.map((term) => (
            <article key={term.term} className="card p-6">
              <h3 className="font-serif text-xl font-semibold text-gold-dark dark:text-gold">{term.term}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{term.text}</p>
            </article>
          ))}
        </div>
      </div>

      {/* STEPS */}
      <section id="steps" className="scroll-mt-28 bg-[var(--bg-alt)] py-20">
        <div className="container-narrow">
          <SectionTitle
            eyebrow="The walkthrough"
            title="What happens, one step at a time"
            description="Open each step when you need it. The first is already open, and you can move through them in order."
          />
          <Accordion
            items={confessionSteps.map((step, i) => ({
              title: `${i + 1}. ${step.title}`,
              content: (
                <>
                  <p>{step.what}</p>
                  <p className="border-l-2 border-gold pl-4 font-serif text-lg italic leading-8">{step.say}</p>
                  <p className="text-sm"><strong>Good to know:</strong> {step.note}</p>
                </>
              ),
            }))}
          />
        </div>
      </section>

      {/* WHAT TO SAY */}
      <section className="bg-[var(--surface)] py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_380px] lg:items-start">
          <div>
            <SectionTitle
              eyebrow="What to say"
              title="The words, in plain language"
              description="These are the phrases from the walkthrough, gathered in one place. You are not required to memorise them — the priest will help you."
            />
            <ol className="space-y-4">
              {confessionSteps.filter((s) => ['enter', 'confess', 'contrition', 'absolution'].includes(s.id)).map((step, i) => (
                <li key={step.id} className="card p-6">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-gold-dark dark:text-gold">{i + 1}. {step.title}</p>
                  <p className="font-serif text-lg leading-8">{step.say}</p>
                </li>
              ))}
            </ol>
            <Callout title="If you forget the words" tone="gold">
              Say it in your own words. Genuine sorrow and honesty matter far more than perfect phrasing. If it is your first confession, begin by telling the priest — that is enough to get started.
            </Callout>
          </div>

          <aside className="card p-7">
            <ShieldCheck size={24} className="text-gold-dark dark:text-gold" />
            <h3 className="mt-4 font-serif text-2xl font-semibold">The seal of confession</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">The priest is bound by the seal of confession: he can never reveal anything you say, to anyone, for any reason. What you say in confession stays in confession.</p>
            <div className="mt-6 border-t border-[var(--border)] pt-5">
              <h4 className="font-serif text-lg font-semibold">Finding a confession time</h4>
              <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">Check your parish website or noticeboard. Many parishes offer times after weekday Mass or on Saturday afternoons; some require an appointment.</p>
              <Link href="/churches" className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-dark dark:text-gold">Find a parish <ArrowRight size={13} /></Link>
            </div>
          </aside>
        </div>
      </section>

      {/* EXAMINATION */}
      <section id="examination" className="scroll-mt-28 bg-ivory py-20 dark:bg-[var(--bg)]">
        <div className="container-page">
          <SectionTitle
            eyebrow="Preparing your heart"
            title="An examination of conscience"
            description="Use these prompts as a gentle prayer aid before confession. Work through as many or as few as you like."
          />
          <ExaminationOfConscience />
        </div>
      </section>

      {/* PASTORAL NOTE */}
      <section className="bg-forest py-20 text-ivory">
        <div className="container-narrow">
          <div className="flex items-start gap-4">
            <Heart size={26} className="mt-1 shrink-0 text-gold" />
            <div>
              <p className="eyebrow mb-3">Mercy, not anxiety</p>
              <h2 className="font-serif text-3xl font-semibold sm:text-4xl">You can come back as often as you like</h2>
              <p className="mt-5 leading-8 text-ivory/75">Frequent confession is a healthy spiritual practice, not a sign that you are failing. If you feel peace after absolution, rest in it. If you feel nothing, your sins are still forgiven — feelings are not the measure of God&apos;s mercy.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/daily-life" className="btn bg-gold text-forest-deep hover:bg-gold-light">Faith in daily life <ArrowRight size={15} /></Link>
                <Link href="/becoming-catholic" className="btn border border-ivory/40 text-ivory hover:text-gold">New to the Church?</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-narrow py-14">
        <Callout title="Pastoral and privacy note" tone="red">
          <p>{confessionDisclaimer}</p>
          <p className="mt-3 flex items-start gap-2"><Info size={14} className="mt-0.5 shrink-0" /> The examination tool above keeps your selections only in this page while it is open. It has no account, no submission, and no storage — closing or refreshing the page clears it.</p>
        </Callout>
        <SourceNote
          label="Catechism of the Catholic Church — The Sacrament of Penance and Reconciliation"
          url="https://www.vatican.va/archive/ENG0015/_INDEX.HTM"
          ccc="CCC 1422–1498"
        />
        <p className="mt-6 flex items-center gap-2 text-xs text-[var(--text-muted)]"><ScrollText size={13} /> Prepared for education and personal reflection; it does not replace advice from your parish priest.</p>
      </div>
    </>
  );
}
