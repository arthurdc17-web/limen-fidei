import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CalendarDays, Church, Info, Sparkles, Sun } from 'lucide-react';
import { PageHero, SectionTitle, Breadcrumbs, Callout, Accordion, SourceNote } from '@/components/ui';
import { easterSunday, formatDate, holyDays, liturgicalCalendar, liturgicalSeasonNotes, seasonForDate } from '@/lib/liturgical';
import { dailyContent } from '@/content/daily';
import { images } from '@/content/images';

/** Rendered per request so "today" always means the visitor's current date. */
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Liturgical Calendar — Seasons, Feasts, and Readings',
  description: 'Discover the current liturgical season, upcoming holy days and season changes, and how Advent, Christmas, Lent, Easter, and Ordinary Time shape the Christian year.',
};

const DAY_MS = 86_400_000;
const addDays = (date: Date, days: number) => {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
};

interface SeasonChange { name: string; key: string; color: string; date: Date }

/** Walks forward day by day and reports each point where seasonForDate changes. */
function upcomingSeasonChanges(from: Date, limit = 6): SeasonChange[] {
  const changes: SeasonChange[] = [];
  const cursor = addDays(from, 1);
  let previousKey = seasonForDate(from).key;

  for (let i = 0; i < 400 && changes.length < limit; i += 1) {
    const info = seasonForDate(cursor);
    if (info.key !== previousKey) {
      changes.push({ name: info.name, key: info.key, color: info.color, date: new Date(cursor) });
      previousKey = info.key;
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return changes;
}

interface UpcomingHolyDay { name: string; date: Date; note: string; days: number }

function upcomingHolyDays(from: Date, limit = 8): UpcomingHolyDay[] {
  const year = from.getFullYear();
  return [...holyDays(year), ...holyDays(year + 1)]
    .map((day) => ({ ...day, days: Math.ceil((day.date.getTime() - from.getTime()) / DAY_MS) }))
    .filter((day) => day.days >= 0)
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, limit);
}

const longDate: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
const shortDate: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'long', day: 'numeric' };

export default function CalendarPage() {
  const today = new Date();
  const season = seasonForDate(today);
  const calendar = liturgicalCalendar(today.getFullYear());
  const liturgicalYear = today >= calendar.adventStart ? today.getFullYear() + 1 : today.getFullYear();
  const feasts = upcomingHolyDays(today);
  const changes = upcomingSeasonChanges(today);
  const readingsUrl = dailyContent(today).usccbReadingsUrl;
  const seasonNotes = liturgicalSeasonNotes.filter((note) => ['Advent', 'Christmas', 'Lent', 'Easter', 'Ordinary Time'].includes(note.name));

  return (
    <>
      <Breadcrumbs items={[{ label: 'Liturgical Calendar' }]} />

      <PageHero
        eyebrow="The Christian Year"
        title="The Liturgical Calendar"
        description="The Church does not keep time merely by the clock. Her year is a story: waiting, celebrating, repenting, rejoicing, and growing in ordinary days. See where the Church is today and what is coming next."
        image={images.stainedGlass}
      >
        <a href={readingsUrl} target="_blank" rel="noopener noreferrer" className="btn bg-gold text-forest-deep hover:bg-gold-light">Today&apos;s readings <ArrowRight size={16} /></a>
        <Link href="#seasons" className="btn border border-ivory/40 text-ivory hover:text-gold">The seasons</Link>
      </PageHero>

      {/* TODAY */}
      <div className="container-page py-16">
        <SectionTitle
          eyebrow="Today in the Church"
          title="Where we are now"
          description="Calculated from the Church's calendar rules for the current year — no fixed dates assumed."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="card flex flex-col p-7">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 text-gold-dark dark:text-gold"><Sparkles size={19} /></span>
            <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">Current liturgical season</p>
            <h3 className="mt-2 font-serif text-3xl font-semibold">{season.name}</h3>
            <p className="mt-4 flex-1 text-sm leading-7 text-[var(--text-muted)]">{season.description}</p>
            <p className="mt-6 border-t border-[var(--border)] pt-4 text-xs text-[var(--text-muted)]">Liturgical colour: <strong className="text-[var(--text)]">{season.color}</strong></p>
          </article>

          <article className="card flex flex-col p-7">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 text-gold-dark dark:text-gold"><CalendarDays size={19} /></span>
            <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">Today&apos;s date</p>
            <h3 className="mt-2 font-serif text-2xl font-semibold leading-snug">{formatDate(today, longDate)}</h3>
            <p className="mt-4 flex-1 text-sm leading-7 text-[var(--text-muted)]">The civil date and the Church&apos;s calendar run together, but the liturgical year follows its own rhythm of seasons and feasts.</p>
            <p className="mt-6 border-t border-[var(--border)] pt-4 text-xs text-[var(--text-muted)]">Liturgical year: <strong className="text-[var(--text)]">{liturgicalYear}</strong></p>
          </article>

          <article className="card flex flex-col p-7">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 text-gold-dark dark:text-gold"><Sun size={19} /></span>
            <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">Easter this year</p>
            <h3 className="mt-2 font-serif text-2xl font-semibold leading-snug">{formatDate(easterSunday(today.getFullYear()), { weekday: 'long', month: 'long', day: 'numeric' })}</h3>
            <p className="mt-4 flex-1 text-sm leading-7 text-[var(--text-muted)]">Easter is the hinge of the whole year. The dates of Lent, Ascension, Pentecost, and Ordinary Time are calculated from it.</p>
            <p className="mt-6 border-t border-[var(--border)] pt-4 text-xs text-[var(--text-muted)]">Next year: <strong className="text-[var(--text)]">{formatDate(easterSunday(today.getFullYear() + 1), { month: 'long', day: 'numeric', year: 'numeric' })}</strong></p>
          </article>
        </div>
      </div>

      {/* UPCOMING HOLY DAYS */}
      <section className="bg-[var(--bg-alt)] py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionTitle eyebrow="Looking ahead" title="Upcoming holy days" description="The next universal celebrations and observances on the Church's calendar." />
            <div className="card divide-y divide-[var(--border)] px-6">
              {feasts.map((feast) => (
                <div key={`${feast.name}-${feast.date.toISOString()}`} className="flex flex-wrap items-baseline justify-between gap-2 py-4">
                  <div>
                    <p className="font-serif text-lg font-semibold">{feast.name}</p>
                    <p className="mt-0.5 text-xs leading-5 text-[var(--text-muted)]">{feast.note}</p>
                  </div>
                  <p className="text-right text-xs font-semibold text-gold-dark dark:text-gold">{formatDate(feast.date, shortDate)}</p>
                </div>
              ))}
            </div>
            <Callout title="Local norms matter" tone="gold">
              Several notes above mention transfers to Sunday or diocesan variations. Holy days of obligation differ between countries and even between dioceses, so confirm obligations with your local parish.
            </Callout>
          </div>

          <div>
            <SectionTitle eyebrow="Season changes" title="What comes next" description="Each entry is a point where the Church moves into a new liturgical season." />
            <div className="card divide-y divide-[var(--border)] px-6">
              {changes.map((change) => (
                <div key={`${change.key}-${change.date.toISOString()}`} className="flex flex-wrap items-center justify-between gap-3 py-4">
                  <div>
                    <p className="font-serif text-lg font-semibold">{change.name}</p>
                    <p className="mt-0.5 text-xs text-[var(--text-muted)]">{change.color}</p>
                  </div>
                  <p className="text-xs font-semibold text-gold-dark dark:text-gold">{formatDate(change.date, shortDate)}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 flex items-start gap-2 text-xs leading-6 text-[var(--text-muted)]"><Info size={14} className="mt-1 shrink-0 text-gold-dark dark:text-gold" /> The Sacred Triduum is treated as its own sacred three-day stretch rather than an ordinary season, so it appears here as a distinct change.</p>
          </div>
        </div>
      </section>

      {/* SEASONS */}
      <section id="seasons" className="scroll-mt-28 bg-[var(--surface)] py-20">
        <div className="container-page">
          <SectionTitle
            eyebrow="The shape of the year"
            title="Advent, Christmas, Lent, Easter, and Ordinary Time"
            description="The Church's seasons are not merely decorations. Each one trains a different aspect of Christian life."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {seasonNotes.map((note) => (
              <article key={note.name} className="card flex h-full flex-col p-7">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-serif text-2xl font-semibold">{note.name}</h3>
                  <span className="chip">{note.color}</span>
                </div>
                <p className="mt-4 flex-1 text-sm leading-7 text-[var(--text-muted)]">{note.meaning}</p>
                <div className="mt-6 border-t border-[var(--border)] pt-4">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-gold-dark dark:text-gold">Common practices</p>
                  <ul className="flex flex-wrap gap-1.5">
                    {note.practices.map((practice) => <li key={practice} className="chip">{practice}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY EASTER MOVES */}
      <section className="bg-forest py-20 text-ivory">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_380px] lg:items-center">
          <div>
            <p className="eyebrow mb-4">A moving feast</p>
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Why does Easter change date each year?</h2>
            <p className="mt-6 leading-8 text-ivory/75">Easter celebrates the Resurrection, and the Church links it to the Passover season. It is kept on the first Sunday after the paschal full moon — the full moon that falls on or after the spring equinox. Because the lunar cycle and the civil calendar do not line up perfectly, the date moves within a fixed range each year.</p>
            <p className="mt-4 leading-8 text-ivory/75">Everything else follows from that one date: Ash Wednesday falls forty-six days before Easter, Ascension forty days after it, and Pentecost fifty days after it. That is why the calendar page calculates rather than lists fixed dates.</p>
            <Link href="/daily-life" className="btn mt-8 bg-gold text-forest-deep hover:bg-gold-light">Living the seasons <ArrowRight size={15} /></Link>
          </div>
          <div className="border border-gold/25 bg-forest-deep/60 p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">Key dates calculated for {today.getFullYear()}</p>
            <dl className="mt-6 space-y-5 text-sm">
              <div><dt className="text-ivory/60">Ash Wednesday</dt><dd className="mt-1 font-serif text-lg">{formatDate(calendar.ashWednesday, longDate)}</dd></div>
              <div><dt className="text-ivory/60">Easter Sunday</dt><dd className="mt-1 font-serif text-lg">{formatDate(calendar.easter, longDate)}</dd></div>
              <div><dt className="text-ivory/60">Pentecost</dt><dd className="mt-1 font-serif text-lg">{formatDate(calendar.pentecost, longDate)}</dd></div>
              <div><dt className="text-ivory/60">Advent begins</dt><dd className="mt-1 font-serif text-lg">{formatDate(calendar.adventStart, longDate)}</dd></div>
            </dl>
          </div>
        </div>
      </section>

      {/* READINGS & QUESTIONS */}
      <section className="bg-[var(--bg-alt)] py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionTitle eyebrow="Pray with the Church" title="Today's readings" description="This page gives the shape of the year. The Church's official readings for each day are published by the USCCB." />
            <div className="card p-7">
              <Church size={24} className="text-gold-dark dark:text-gold" />
              <p className="mt-4 font-serif text-xl leading-8">Read, reflect, and bring what you notice into prayer. The daily readings follow the same liturgical seasons described above.</p>
              <a href={readingsUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">Open USCCB daily readings <ArrowRight size={15} /></a>
            </div>
            <div className="mt-8 max-w-2xl"><SourceNote label="USCCB — Daily Readings" url="https://bible.usccb.org/bible/readings" /></div>
          </div>
          <div>
            <SectionTitle eyebrow="Common questions" title="Understanding the calendar" />
            <Accordion defaultOpen={0} items={[
              { title: 'Is “Ordinary Time” unimportant?', content: <p>No. “Ordinary” comes from the word for “numbered” — these are the counted weeks of the year. They make up the longest stretch of the Christian year, when the Church grows in faith and discipleship.</p> },
              { title: 'Why is Advent violet and Easter white?', content: <p>Liturgical colours express the character of a season. Violet marks penitence and preparation in Advent and Lent; white signifies joy and the Resurrection in Christmas and Easter; red marks Passion and Pentecost; green is the colour of Ordinary Time and growth.</p> },
              { title: 'Does every diocese keep the same holy days?', content: <p>The universal Church sets the feasts, but some solemnities may be transferred to Sunday or observed differently by national bishops&apos; conferences. Check your diocese for what applies where you live.</p> },
              { title: 'What is the Sacred Triduum?', content: <p>The Sacred Triduum begins with the Mass of the Lord&apos;s Supper on Holy Thursday, continues through Good Friday and Holy Saturday, and closes with the Easter Vigil. It is the Church&apos;s holiest three days, not simply three ordinary liturgies.</p> },
            ]} />
          </div>
        </div>
      </section>
    </>
  );
}
