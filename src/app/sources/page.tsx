import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Camera, ExternalLink, Info } from 'lucide-react';
import { Accordion, Breadcrumbs, Callout, PageHero, SectionTitle } from '@/components/ui';
import { imageCredits, commonsFileUrl } from '@/content/images';
import { accuracyNote, doctrinalNotes, sourceGroups } from '@/content/sources';

export const metadata: Metadata = {
  title: 'Sources and References',
  description: 'The Scripture translation, Catechism, Vatican and bishops’ documents, and photograph credits used by Catholic Companion.',
};

export default function SourcesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Sources and References' }]} />

      <PageHero
        eyebrow="References"
        title="Sources and References"
        description="Good learning is checkable. Here you will find the official texts we rely on, the distinctions we use when describing Church teaching, and the credits for every photograph on the site."
      >
        <Link href="/terms" className="btn border border-ivory/40 text-ivory hover:text-gold">Terms of Use <ArrowRight size={15} /></Link>
      </PageHero>

      <div className="container-narrow py-14">
        <Callout title="Our accuracy commitment" tone="gold">
          <p>{accuracyNote}</p>
        </Callout>
      </div>

      {/* SOURCE GROUPS */}
      <section className="bg-[var(--bg-alt)] py-16">
        <div className="container-page">
          <SectionTitle
            eyebrow="The library"
            title="Where our material comes from"
            description="Every link below leads to the publisher or official body responsible for the text. Links open in a new tab."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {sourceGroups.map((group) => (
              <section key={group.title} aria-labelledby={`sources-${group.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}`} className="card p-6 sm:p-8">
                <h3 id={`sources-${group.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}`} className="font-serif text-2xl font-semibold">{group.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{group.description}</p>
                <ul className="mt-5 divide-y divide-[var(--border)] border-t border-[var(--border)]">
                  {group.items.map((item) => (
                    <li key={item.name} className="py-4">
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="link-gold inline-flex items-start gap-1.5 font-medium">
                        <span>{item.name}</span><ExternalLink size={12} className="mt-1 shrink-0" aria-hidden="true" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                      <p className="mt-1 text-sm leading-6 text-[var(--text-muted)]">{item.note}</p>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSLATIONS */}
      <section className="container-narrow py-16">
        <SectionTitle eyebrow="Scripture" title="About the Bible translation" />
        <div className="prose-faith max-w-prose">
          <p>
            Our default translation for Scripture quotations is the New American Bible, Revised Edition (NABRE), as listed in the Scripture section above. The NABRE is published by the United States Conference of Catholic Bishops and is the translation used for the Mass readings in the United States, with adaptations proper to the lectionary.
          </p>
          <p>
            Some quotations on this site come from traditional English prayer texts or from an official document that supplies its own translation of a verse. Where that happens, we identify the source rather than quietly changing the wording. Different translations can vary significantly, so consult the linked official text when exact wording matters.
          </p>
          <p>
            The Bible links above lead to the USCCB’s free text and daily readings. For study notes and the authoritative liturgical text, use the official resources rather than this educational summary.
          </p>
        </div>
        <div className="mt-8 flex items-start gap-3 border-l-4 border-gold/60 p-5">
          <BookOpen size={20} className="mt-0.5 shrink-0 text-gold-dark dark:text-gold" aria-hidden="true" />
          <p className="text-sm leading-7 text-[var(--text-muted)]">
            For authoritative teaching, always consult official sources: the Catechism of the Catholic Church, the documents of the Holy See, and guidance from your own bishop or parish.
          </p>
        </div>
      </section>

      {/* DOCTRINAL NOTES */}
      <section className="bg-[var(--surface)] py-16">
        <div className="container-narrow">
          <SectionTitle
            eyebrow="How we word things"
            title="Kinds of Church teaching"
            description="These distinctions help us avoid presenting a theological opinion as a definition, or a changeable discipline as unchanging doctrine."
          />
          <Accordion
            items={doctrinalNotes.map((note) => ({
              title: note.title,
              content: <p>{note.text}</p>,
            }))}
          />
        </div>
      </section>

      {/* IMAGE CREDITS */}
      <section className="container-page py-16">
        <SectionTitle
          eyebrow="Photography"
          title="Image credits"
          description="Photographs are served from Wikimedia Commons. Each file has its own author and licence; follow the file link for the full details before reusing an image."
        />
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] text-left text-sm">
              <thead className="border-b border-[var(--border)] bg-[var(--surface)] text-xs uppercase tracking-wider text-[var(--text-muted)]">
                <tr>
                  <th scope="col" className="px-5 py-3 font-semibold">Image</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Commons file</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {imageCredits.map((credit) => (
                  <tr key={credit.file}>
                    <th scope="row" className="px-5 py-3 font-medium text-[var(--text)]">{credit.title}</th>
                    <td className="px-5 py-3">
                      <a href={commonsFileUrl(credit.file)} target="_blank" rel="noopener noreferrer" className="link-gold inline-flex items-center gap-1.5">
                        View file page <ExternalLink size={12} aria-hidden="true" /><span className="sr-only">for {credit.title} (opens in a new tab)</span>
                      </a>
                    </td>
                    <td className="px-5 py-3 text-[var(--text-muted)]">{credit.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-5 flex items-start gap-2 text-sm leading-7 text-[var(--text-muted)]">
          <Camera size={16} className="mt-1 shrink-0 text-gold-dark dark:text-gold" aria-hidden="true" />
          Additional images may appear on individual pages; each is credited in the same way through its Wikimedia Commons file.
        </p>
      </section>

      <section className="bg-forest py-14 text-ivory">
        <div className="container-narrow text-center">
          <Info size={26} className="mx-auto text-gold" aria-hidden="true" />
          <h2 className="mt-5 font-serif text-3xl font-semibold sm:text-4xl">Check the original</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-ivory/70">
            This site is a guide, not the authority. Consult the official sources linked above for authoritative teaching, and your local parish for practical guidance.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/about" className="btn bg-gold text-forest-deep hover:bg-gold-light">About this site <ArrowRight size={15} /></Link>
            <Link href="/contact" className="btn border border-gold/60 text-gold hover:bg-gold/10">Contact</Link>
          </div>
        </div>
      </section>
    </>
  );
}
