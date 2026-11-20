import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Church, ExternalLink, Globe, Info, ShieldCheck } from 'lucide-react';
import { PageHero, SectionTitle, Breadcrumbs, Callout, CheckListItem, SourceNote } from '@/components/ui';
import { ChurchFinder } from '@/components/features/ChurchFinder';
import { images } from '@/content/images';

export const metadata: Metadata = {
  title: 'Find a Catholic Church',
  description: 'Honest guidance for finding a Catholic parish near you: official directories, map searches, and what to confirm directly with the parish or diocese.',
};

export default function ChurchesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Find a Church' }]} />
      <PageHero
        eyebrow="Church finder"
        title="Finding a Catholic Church Near You"
        description="Looking for a parish, a Mass time, or a place to begin? This page gives you trustworthy ways to find one — and tells you plainly what we cannot do."
        image={images.nave}
      >
        <Link href="#finder" className="btn bg-gold text-forest-deep hover:bg-gold-light">Open the finder <ArrowRight size={16} /></Link>
        <a href="https://www.usccb.org/mass-times" target="_blank" rel="noopener noreferrer" className="btn border border-ivory/40 text-ivory hover:text-gold">USCCB Mass Times <ExternalLink size={15} /></a>
      </PageHero>

      <div className="container-page py-16">
        <Callout title="What this page does — and does not do" tone="gold">
          <p>Catholic Companion does <strong>not</strong> maintain a parish database. We do not have up-to-date addresses, phone numbers, or Mass schedules, and we will <strong>never invent local results</strong> or present a made-up parish as if it were real.</p>
          <p className="mb-0 mt-3">Instead, the tool below takes the place information <em>you</em> provide and turns it into reliable next steps: an official directory, a map search, and a short checklist for confirming details with the parish itself.</p>
        </Callout>
      </div>

      <section id="finder" className="scroll-mt-28 bg-[var(--bg-alt)] py-16">
        <div className="container-page"><ChurchFinder /></div>
      </section>

      <section className="bg-[var(--surface)] py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Before you go"
              title="What to confirm directly"
              description="Parish details change — especially around holidays, staffing changes, and renovations. A quick check prevents a disappointing trip."
            />
            <ul className="space-y-3">
              <CheckListItem><strong>Mass times.</strong> Weekend and weekday schedules, plus any Holy Day changes.</CheckListItem>
              <CheckListItem><strong>Confession.</strong> Regular times, and whether appointments are available.</CheckListItem>
              <CheckListItem><strong>OCIA / RCIA contact.</strong> Ask for the parish’s initiation coordinator if you are exploring becoming Catholic.</CheckListItem>
              <CheckListItem><strong>Accessibility.</strong> Step-free entry, accessible restrooms, hearing assistance, and parking.</CheckListItem>
              <CheckListItem><strong>Language.</strong> Whether Mass, confession, or faith formation is offered in a language you use.</CheckListItem>
            </ul>
            <p className="mt-6 flex items-start gap-2 text-sm leading-7 text-[var(--text-muted)]">
              <Info size={16} className="mt-1 shrink-0 text-gold-dark dark:text-gold" />
              The best source is the parish itself: its website, bulletin, or parish office. Diocesan directories are the next most reliable source. Third-party listings can be out of date.
            </p>
          </div>

          <div className="space-y-5">
            <div className="card p-7">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold-dark dark:text-gold"><Globe size={18} /></span>
                <div>
                  <h3 className="font-serif text-2xl font-semibold">Outside the United States</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                    The USCCB directory covers U.S. dioceses. If you are elsewhere, start with your national or regional bishops’ conference, the local diocesan website, or the <a href="https://www.vatican.va/" target="_blank" rel="noopener noreferrer" className="link-gold">Holy See’s website <ExternalLink size={11} className="inline" /></a> for links to local churches. The map search above still works worldwide — just add the city or postal code you are visiting.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-7">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold-dark dark:text-gold"><Church size={18} /></span>
                <div>
                  <h3 className="font-serif text-2xl font-semibold">Eastern Catholic churches</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                    The Catholic Church includes Eastern Catholic churches — such as the Byzantine, Maronite, Melkite, and Syro-Malabar traditions — which are in full communion with Rome but have their own liturgies and hierarchies. Their parishes may be listed under their eparchy or archeparchy rather than a Latin diocese. If you are looking for one, include the tradition in your map query (for example, “Byzantine Catholic church in [city]”) and confirm with the eparchy or parish directly.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-7">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold-dark dark:text-gold"><ShieldCheck size={18} /></span>
                <div>
                  <h3 className="font-serif text-2xl font-semibold">Your search stays private</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                    The text you type is used in your browser to build links. It is not stored, uploaded, or sent to this site. The directory and map links open third-party services with their own privacy practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 dark:bg-[var(--bg)]">
        <div className="container-narrow">
          <SectionTitle eyebrow="More help" title="New to all of this?" description="These guides explain what to expect before you walk through the door." />
          <div className="grid gap-4 sm:grid-cols-3">
            <Link href="/mass" className="card p-5 transition-colors hover:border-gold"><h3 className="font-serif text-lg font-semibold">Guide to the Mass</h3><p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">What happens, and what to do.</p></Link>
            <Link href="/becoming-catholic" className="card p-5 transition-colors hover:border-gold"><h3 className="font-serif text-lg font-semibold">Becoming Catholic</h3><p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">The stages of OCIA explained.</p></Link>
            <Link href="/faq" className="card p-5 transition-colors hover:border-gold"><h3 className="font-serif text-lg font-semibold">Frequently asked questions</h3><p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">Clear answers to common questions.</p></Link>
          </div>
          <div className="mt-10"><SourceNote label="USCCB — Mass Times finder" url="https://www.usccb.org/mass-times" /></div>
        </div>
      </section>
    </>
  );
}
