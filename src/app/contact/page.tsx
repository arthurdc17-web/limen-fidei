import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Info, Mail } from 'lucide-react';
import { Breadcrumbs, Callout, PageHero, SectionTitle } from '@/components/ui';
import { ContactPanel } from '@/components/features/ContactPanel';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'How to get in touch with Catholic Companion, draft a message locally, and find answers in the FAQ and sources pages.',
};

export default function ContactPage() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || '';

  return (
    <>
      <Breadcrumbs items={[{ label: 'Contact' }]} />

      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="Questions about the site, a correction to report, or a suggestion to share? This page explains what is available and gives you a safe way to draft your message."
      >
        <Link href="/faq" className="btn border border-ivory/40 text-ivory hover:text-gold">Read the FAQ <ArrowRight size={15} /></Link>
      </PageHero>

      <section className="container-narrow py-14">
        <Callout title="An educational demo, not pastoral advice" tone="gold">
          <p>
            Catholic Companion is an educational demonstration website. We do not provide pastoral advice, spiritual direction, or answers to personal pastoral questions through this site. For anything personal or urgent, please speak with your parish priest or another qualified person in your community.
          </p>
        </Callout>

        {contactEmail ? (
          <div className="card mt-8 flex flex-wrap items-center justify-between gap-4 p-6 sm:p-7">
            <div className="flex items-start gap-3">
              <Mail size={20} className="mt-0.5 shrink-0 text-gold-dark dark:text-gold" aria-hidden="true" />
              <div>
                <h2 className="font-serif text-xl font-semibold">Email the site team</h2>
                <p className="mt-1 text-sm leading-7 text-[var(--text-muted)]">A contact address is configured for this deployment. Opening it uses your own email application.</p>
              </div>
            </div>
            <a href={`mailto:${contactEmail}`} className="btn-primary">Write an email <ArrowRight size={15} /></a>
          </div>
        ) : (
          <Callout title="No messaging service is configured" tone="red">
            <p>
              This deployment has no contact email address configured, so there is no way to send a message to the site team from this page. Nothing you type here is transmitted, and there is no form that delivers mail.
            </p>
            <p className="mt-3">
              You can still draft and copy a message with the tool below, check the <Link href="/faq" className="link-gold">frequently asked questions</Link>, or review the <Link href="/sources" className="link-gold">sources and references</Link> behind our content.
            </p>
          </Callout>
        )}
      </section>

      <section className="bg-[var(--bg-alt)] py-14">
        <div className="container-narrow">
          <SectionTitle
            eyebrow="Write it here"
            title="Compose a message safely"
            description="Your draft stays in this browser tab. Copy it for your own records, or, if an address is configured, open it in your email app."
          />
          <ContactPanel contactEmail={contactEmail} />
        </div>
      </section>

      <section className="container-narrow py-14">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="card p-6">
            <Info size={20} className="text-gold-dark dark:text-gold" aria-hidden="true" />
            <h2 className="mt-3 font-serif text-xl font-semibold">Looking for an answer?</h2>
            <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">The FAQ covers common questions about learning the faith, prayer, and how this site works.</p>
            <Link href="/faq" className="link-gold mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">Go to the FAQ <ArrowRight size={14} aria-hidden="true" /></Link>
          </div>
          <div className="card p-6">
            <Info size={20} className="text-gold-dark dark:text-gold" aria-hidden="true" />
            <h2 className="mt-3 font-serif text-xl font-semibold">Checking a claim?</h2>
            <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">Every guide links back to its sources. Read the official texts for authoritative teaching.</p>
            <Link href="/sources" className="link-gold mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">See our sources <ArrowRight size={14} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
