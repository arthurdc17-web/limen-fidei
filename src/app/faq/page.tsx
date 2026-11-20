import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ExternalLink, HelpCircle, Info } from 'lucide-react';
import { PageHero, SectionTitle, Breadcrumbs, Callout, SourceNote } from '@/components/ui';
import { FaqBrowser } from '@/components/features/SearchClient';
import { faqs, faqCategories } from '@/content/faq';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Clear, honest answers to common questions about Catholic Mass, Mary and the saints, confession, the Bible, and becoming Catholic.',
};

export default function FaqPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'FAQ' }]} />
      <PageHero
        eyebrow="Questions & answers"
        title="Frequently Asked Questions"
        description={`Short answers to the questions people ask most — drawn from Scripture, the Catechism, and the practice of the Church. Browse ${faqs.length} questions across ${faqCategories.length - 1} topics.`}
      >
        <Link href="#questions" className="btn bg-gold text-forest-deep hover:bg-gold-light">Browse the questions <ArrowRight size={16} /></Link>
        <Link href="/contact" className="btn border border-ivory/40 text-ivory hover:text-gold">Contact us</Link>
      </PageHero>

      <div className="container-page py-14">
        <Callout title="Ask your parish" tone="green">
          <p className="mb-0">
            These answers describe the general teaching and practice of the Catholic Church. Local customs genuinely vary, and only a priest or parish can advise you about your own circumstances. If you have a personal question — about confession, marriage, becoming Catholic, or anything else — please speak with your parish priest or the parish office. You can also use our <Link href="/contact" className="link-gold">contact page <ExternalLink size={11} className="inline" /></Link> to ask about this site.
          </p>
        </Callout>
      </div>

      <section id="questions" className="scroll-mt-28 bg-[var(--bg-alt)] py-16">
        <div className="container-narrow">
          <SectionTitle
            eyebrow="Search and filter"
            title="All questions"
            description="Type a word to search answers, or filter by topic. Every question has its own link, so you can share a direct answer with someone else."
          />
          <FaqBrowser />
        </div>
      </section>

      <section className="bg-[var(--surface)] py-16">
        <div className="container-narrow">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="card p-6">
              <HelpCircle size={20} className="text-gold-dark dark:text-gold" />
              <h3 className="mt-3 font-serif text-xl font-semibold">Where these answers come from</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
                Each answer is checked against the Catechism and, where relevant, Scripture. We name the references so you can read the source yourself rather than taking our word for it.
              </p>
              <Link href="/sources" className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">See our sources <ArrowRight size={14} /></Link>
            </div>
            <div className="card p-6">
              <Info size={20} className="text-gold-dark dark:text-gold" />
              <h3 className="mt-3 font-serif text-xl font-semibold">Still looking?</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
                Try the site search for a specific topic, or find a parish to ask in person. We would rather point you to a real person than guess at a pastoral answer.
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <Link href="/search" className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">Search the site <ArrowRight size={14} /></Link>
                <Link href="/churches" className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">Find a church <ArrowRight size={14} /></Link>
              </div>
            </div>
          </div>
          <div className="mt-10"><SourceNote label="Catechism of the Catholic Church; New American Bible, Revised Edition" url="https://www.vatican.va/archive/ENG0015/_INDEX.HTM" /></div>
        </div>
      </section>
    </>
  );
}
