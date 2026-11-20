import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CircleDot, Info, Sparkles } from 'lucide-react';
import { PageHero, SectionTitle, Callout, Accordion, Tabs, SourceNote } from '@/components/ui';
import { RosarySimulator } from '@/components/features/RosarySimulator';
import { images } from '@/content/images';
import { mysteries, mysterySets, weeklyRosarySchedule } from '@/content/mysteries';
import { getPrayer } from '@/content/prayers';

export const metadata: Metadata = { title: 'Interactive Rosary Guide', description: 'Learn and pray the Rosary with complete prayer texts, all twenty mysteries, meditations, and a digital rosary.' };

const rosaryPrayers = ['sign-of-the-cross', 'apostles-creed', 'our-father', 'hail-mary', 'glory-be', 'fatima-prayer', 'hail-holy-queen', 'rosary-closing-prayer'];

export default function RosaryPage() {
  return (
    <>
      <PageHero eyebrow="The Rosary" title="Learn to Pray the Rosary" description="The Rosary is a simple, beautiful way to meditate on the life of Christ with Mary. This guide teaches the structure, gives every prayer in full, and lets you pray along with a digital Rosary." image={images.rosary}>
        <Link href="#pray" className="btn bg-gold text-forest-deep hover:bg-gold-light">Start praying <ArrowRight size={16} /></Link>
        <Link href="#mysteries" className="btn border border-ivory/40 text-ivory hover:text-gold">Explore the mysteries</Link>
      </PageHero>

      <div className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:items-center">
          <div className="prose-faith max-w-prose">
            <h2>What is the Rosary?</h2>
            <p>The Rosary is a devotional prayer made of 150 Hail Marys in its fullest historical form, divided into decades of ten. The familiar Dominican Rosary has five decades — fifty Hail Marys — with Our Fathers, Glory Bes, and meditations on twenty mysteries from the lives of Jesus and Mary.</p>
            <p>The beads are a tool, not the point. The rhythm of the fingers keeps the body gently occupied while the mind enters the mystery. As St John Paul II wrote, the Rosary is “a prayer of the heart” that contemplates Christ with Mary.</p>

            <h2>How is it structured?</h2>
            <p>Begin at the crucifix with the Sign of the Cross and the Apostles’ Creed. On the first large bead pray an Our Father; on the next three small beads pray three Hail Marys for faith, hope, and charity; then a Glory Be. Each decade begins with an Our Father, ten Hail Marys, a Glory Be, and — by a later devotional custom — the Fatima Prayer. Finish with Hail, Holy Queen and the closing prayer.</p>

            <h2>How to hold the beads</h2>
            <p>Hold the crucifix in one hand and begin with the large bead nearest it. Move from bead to bead, one prayer per bead. There is no rule about which hand to use. If you lose your place, return to the last large bead and begin the decade again — nobody is keeping score.</p>

            <h2>How to begin and finish</h2>
            <p>Choose the mysteries for the day, take a quiet breath, and make the Sign of the Cross. Announce the mystery aloud or in your heart before each decade. End with Hail, Holy Queen and the closing prayer, then a final Sign of the Cross. A Rosary takes about fifteen to twenty minutes.</p>
            <Callout title="A devotional practice">The Rosary is a cherished Catholic devotion, not an obligation imposed on every Catholic. It is a gift of prayer, not a test of faith.</Callout>
          </div>
          <div className="card overflow-hidden">
            <img src={images.rosaryPolish} alt="A traditional Catholic rosary with beads and crucifix" loading="lazy" className="h-80 w-full object-cover" />
            <div className="p-6">
              <p className="eyebrow mb-2">The pattern</p>
              <p className="font-serif text-xl">Sign of the Cross → Creed → Our Father → 3 Hail Marys → Glory Be → 5 decades → Hail Holy Queen → Closing prayer</p>
            </div>
          </div>
        </div>
      </div>

      {/* SIMULATOR */}
      <section id="pray" className="scroll-mt-28 bg-[var(--bg-alt)] py-16">
        <div className="container-page"><RosarySimulator /></div>
      </section>

      {/* COMPLETE PRAYERS */}
      <section className="bg-[var(--surface)] py-20">
        <div className="container-page">
          <SectionTitle eyebrow="The texts" title="Complete Rosary prayers" description="Traditional English texts, as prayed in the Roman Rite. Open each one for its meaning and history." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {rosaryPrayers.map((id) => {
              const p = getPrayer(id)!;
              return (
                <Link key={id} href={`/prayers/${id}`} className="card group p-6 transition-colors hover:border-gold">
                  <CircleDot size={18} className="text-gold-dark dark:text-gold" />
                  <h3 className="mt-3 font-serif text-xl font-semibold">{p.title}</h3>
                  <p className="mt-3 whitespace-pre-line font-serif text-sm leading-6 text-[var(--text-muted)] line-clamp-6">{p.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-dark dark:text-gold">Full text and meaning <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* MYSTERIES */}
      <section id="mysteries" className="scroll-mt-28 bg-ivory py-20 dark:bg-[var(--bg)]">
        <div className="container-page">
          <SectionTitle eyebrow="Meditation" title="The four sets of mysteries" description="Each mystery is an event from the life of Christ and Mary. As you pray the ten Hail Marys, reflect on the event, its meaning, and what it asks of you." />
          <div className="space-y-10">
            {mysterySets.map((set) => (
              <div key={set}>
                <div className="mb-5 flex items-baseline gap-4">
                  <h3 className="font-serif text-3xl font-semibold">{set} Mysteries</h3>
                  <div className="h-px flex-1 bg-[var(--border)]" />
                  <span className="text-xs text-[var(--text-muted)]">{set === 'Luminous' ? 'Added in 2002' : 'Traditional'}</span>
                </div>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {mysteries.filter((m) => m.set === set).map((m) => (
                    <article key={m.id} id={m.id} className="card scroll-mt-32 p-6">
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-dark dark:text-gold">Mystery {m.number}</p>
                      <h4 className="mt-1 font-serif text-xl font-semibold">{m.title}</h4>
                      <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{m.explanation}</p>
                      <p className="mt-4 border-l-2 border-gold pl-3 text-xs italic leading-5 text-[var(--text-muted)]">{m.scripture}</p>
                      <div className="mt-4 space-y-2 border-t border-[var(--border)] pt-4 text-xs leading-5">
                        <p><strong>Meditation:</strong> {m.meditation}</p>
                        <p><strong>Intention:</strong> {m.intention}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="bg-forest py-20 text-ivory">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">Tradition</p>
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">The weekly Rosary schedule</h2>
            <p className="mt-5 leading-8 text-ivory/70">A traditional devotional pattern assigns a set of mysteries to each day of the week. Many Catholics follow it; others choose the mysteries according to their prayer needs. Either is completely legitimate.</p>
            <p className="mt-4 text-sm leading-7 text-ivory/60">On Sunday, the mysteries have traditionally varied by liturgical season — often Glorious, or Joyful during Christmastide. This is a devotional schedule, not a strict obligation.</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {weeklyRosarySchedule.map((s) => (
              <div key={s.day} className="flex items-center justify-between border border-gold/25 bg-forest-deep/50 px-5 py-4">
                <span className="font-serif text-lg">{s.day}</span>
                <span className="text-right text-xs font-semibold text-gold">{s.set}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIO */}
      <section className="bg-[var(--surface)] py-20">
        <div className="container-narrow">
          <SectionTitle eyebrow="Audio" title="Praying with audio" description="The digital Rosary above can read each prayer aloud using your device’s built-in speech voice, with pause, resume, speed control, and prayer-by-prayer navigation." />
          <div className="card p-7">
            <div className="flex items-start gap-4">
              <Sparkles className="mt-1 shrink-0 text-gold-dark dark:text-gold" size={22} />
              <div>
                <h3 className="font-serif text-xl">How the narration works</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">Press “Play voice” in the Rosary guide. Your browser will speak the current prayer, then advance to the next bead. Pause stops the voice; Next and Previous move prayer by prayer. A speed selector is provided, and playback may continue in the background where your browser permits it.</p>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">No recorded audio files are bundled with this site. If recordings become available, they can be attached to each prayer through the <code className="rounded bg-[var(--bg-alt)] px-1.5 py-0.5 text-xs">audioUrl</code> field in the prayer content without changing the interface.</p>
              </div>
            </div>
          </div>
          <div className="mt-8"><SourceNote label="St John Paul II, Rosarium Virginis Mariae" url="https://www.vatican.va/holy_father/john_paul_ii/apost_letters/documents/hf_jp-ii_apl_20021016_rosarium-virginis-mariae_en.html" ccc="CCC 971" /></div>
        </div>
      </section>
    </>
  );
}
