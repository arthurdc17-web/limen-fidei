import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileText, Info, Scale } from 'lucide-react';
import { Breadcrumbs, Callout, CheckListItem, PageHero, SectionTitle } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'The terms for using Catholic Companion, including educational-use limits, external links, content changes, and image credits.',
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Terms of Use' }]} />

      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description="These terms explain what Catholic Companion is, what it is not, and how this educational material may be used. Please read them alongside the Privacy Policy."
      />

      <section className="container-narrow py-14">
        <Callout title="Please read this first" tone="gold">
          <p>
            By using this site you agree to these terms. If you do not agree, please do not use the material here. This is an educational website, not a parish, a Church authority, or a provider of personal advice.
          </p>
        </Callout>
      </section>

      <section className="bg-[var(--bg-alt)] py-14">
        <div className="container-narrow">
          <SectionTitle eyebrow="Scope" title="Educational use only" description="The content on this site is provided to help people learn about the Catholic faith. It is offered freely and for general information." />
          <div className="prose-faith max-w-prose">
            <h2>Not pastoral, legal, or medical advice</h2>
            <p>
              Nothing on Catholic Companion is pastoral advice, spiritual direction, legal advice, or medical advice. Guides, quizzes, and explanations are general education and cannot take account of your circumstances. For personal guidance, speak with your parish priest or another qualified person; for legal or health questions, consult the relevant professional.
            </p>
            <h2>No guarantee for external sites</h2>
            <p>
              We link to Scripture, Church documents, and resources published by other organisations. Those sites are independent of Catholic Companion. We do not control their content and do not guarantee their accuracy, availability, or practices. When exact wording matters, check the official source directly.
            </p>
            <h2>External links</h2>
            <p>
              Links are provided for reference and convenience. Following a link is your own choice, and the destination’s terms and privacy policy apply once you leave this site. A link does not mean that Catholic Companion endorses every item published by that organisation.
            </p>
            <h2>Content can change</h2>
            <p>
              We may add, revise, correct, or remove material at any time, particularly when liturgical norms or official texts change. We do not promise that every page will always reflect the most recent local practice; always confirm practical details with your parish or diocese.
            </p>
          </div>
        </div>
      </section>

      <section className="container-narrow py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <Scale size={22} className="text-gold-dark dark:text-gold" aria-hidden="true" />
            <h2 className="mt-4 font-serif text-2xl font-semibold">Acceptable use</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">Use this site lawfully and respectfully. In particular:</p>
            <ul className="mt-4 space-y-3">
              <CheckListItem>Do not attempt to disrupt the site or interfere with anyone else’s use of it.</CheckListItem>
              <CheckListItem>Do not present this educational material as an official statement of the Church or of any diocese.</CheckListItem>
              <CheckListItem>Do not scrape or redistribute the site in a way that misrepresents its content or removes source attributions.</CheckListItem>
              <CheckListItem>Do not use the site to store or transmit sensitive personal information; there is no account or message delivery here.</CheckListItem>
            </ul>
          </div>
          <div>
            <FileText size={22} className="text-gold-dark dark:text-gold" aria-hidden="true" />
            <h2 className="mt-4 font-serif text-2xl font-semibold">Intellectual property and credits</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
              Text on this site is written for this educational resource. Scripture, Church documents, prayers, and other quoted material remain the property of their respective rights holders and are referenced with attribution.
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
              Photographs are sourced from Wikimedia Commons. Each image has its own author and licence terms, listed with a link to the file page on our <Link href="/sources" className="link-gold">sources page</Link>. Please check that page before reusing any image.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-forest py-14 text-ivory">
        <div className="container-narrow">
          <div className="border-l-4 border-gold/60 pl-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Independent educational resource</p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-ivory/80">
              Catholic Companion is an independent educational resource intended to help people learn about the Catholic faith. It is not an official website of the Vatican, the Holy See, or any diocese. Its educational content does not replace sacramental preparation, pastoral guidance, or instruction from a priest or qualified catechist. Always consult your local parish for guidance about becoming Catholic and receiving the sacraments.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/privacy" className="btn bg-gold text-forest-deep hover:bg-gold-light">Read the Privacy Policy <ArrowRight size={15} /></Link>
            <Link href="/sources" className="btn border border-gold/60 text-gold hover:bg-gold/10">View our sources</Link>
          </div>
        </div>
      </section>

      <div className="container-narrow py-10">
        <p className="flex items-start gap-2 text-xs leading-6 text-[var(--text-muted)]">
          <Info size={15} className="mt-0.5 shrink-0 text-gold-dark dark:text-gold" aria-hidden="true" />
          Questions about the site? See the <Link href="/contact" className="link-gold">contact page</Link> for what is available in this deployment.
        </p>
      </div>
    </>
  );
}
