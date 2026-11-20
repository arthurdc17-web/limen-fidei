import Link from 'next/link';
import { ArrowRight, CalendarDays, CircleDot, Cross, Library, ScrollText } from 'lucide-react';
import { FeatureCard, SectionTitle, SourceNote } from '@/components/ui';
import { images } from '@/content/images';
import { dailyContent, featuredTeaching } from '@/content/daily';
import { formatDate } from '@/lib/liturgical';

const features = [
  { href: '/mass', title: 'Understanding the Mass', description: 'Follow every part of Mass, with the responses, posture, and meaning explained.', image: images.mass, iconName: 'church' as const },
  { href: '/rosary', title: 'Learning the Rosary', description: 'Pray along with the beads, the prayers, and the four sets of mysteries.', image: images.rosary, iconName: 'rosary' as const },
  { href: '/prayers', title: 'Catholic Prayers', description: 'Traditional prayers with full texts, explanations, and helpful context.', image: images.crucifix, iconName: 'scroll' as const },
  { href: '/teachings', title: 'Catholic Teachings', description: 'Clear explanations of the faith, from the Trinity to Catholic social teaching.', image: images.stainedGlass, iconName: 'book' as const },
  { href: '/sacraments', title: 'The Seven Sacraments', description: 'What each sacrament is, what happens, and how to prepare to receive it.', image: images.altar, iconName: 'sparkles' as const },
  { href: '/becoming-catholic', title: 'Becoming Catholic', description: 'The OCIA process explained step by step, whatever your starting point.', image: images.nave, iconName: 'users' as const },
  { href: '/saints', title: 'Saints and Their Lives', description: 'Meet men and women who lived the faith with courage, joy, and holiness.', image: images.francis, iconName: 'landmark' as const },
  { href: '/daily-life', title: 'Catholic Daily Life', description: 'Practical ways to pray, fast, serve, and live your faith every day.', image: images.candles, iconName: 'heart-handshake' as const },
];

export default function HomePage() {
  const daily = dailyContent();

  return (
    <>
      {/* HERO */}
      <section className="relative isolate min-h-[600px] overflow-hidden bg-forest-deep text-ivory md:min-h-[680px]">
        <img src={images.hero} alt="Sunlit interior of a historic Catholic cathedral with a marble altar" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="hero-overlay absolute inset-0" />
        <div className="pattern-cross absolute inset-0 opacity-30" />
        <div className="container-page relative flex min-h-[600px] flex-col justify-center py-20 md:min-h-[680px]">
          <div className="max-w-3xl animate-fadeUp">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-forest-deep/40 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold"><Cross size={13} /> A companion for the journey of faith</p>
            <h1 className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">Discover the<br /><span className="text-gold">Catholic Faith.</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-ivory/85 sm:text-lg">Whether you are attending your first Mass, learning the Rosary, exploring Catholic teachings, or preparing to become Catholic, we are here to guide you every step of the way.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/beginners" className="btn bg-gold px-7 py-3.5 text-forest-deep hover:bg-gold-light">Start Your Journey <ArrowRight size={17} /></Link>
              <Link href="/teachings" className="btn border border-ivory/40 text-ivory hover:border-gold hover:text-gold">Explore the Faith</Link>
            </div>
            <p className="mt-7 text-xs text-ivory/55">No prior knowledge needed. Everything here is explained from the beginning.</p>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="bg-ivory py-20 dark:bg-[var(--bg)]">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow mb-4">Welcome</p>
            <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">A Guide for Every Step of Your Faith Journey</h2>
            <div className="mt-5 h-px w-16 bg-gold" />
            <p className="mt-6 leading-8 text-[var(--text-muted)]">Catholicism has a rich history, beautiful traditions, ancient prayers, profound teachings, and seven sacraments. If you are new to all of this, it can feel like a language you do not yet speak.</p>
            <p className="mt-4 leading-8 text-[var(--text-muted)]">Catholic Companion brings it together in one accessible place. You can learn what happens at Mass before you attend, discover how to pray the Rosary one bead at a time, understand what Catholics believe and why, and find out what becoming Catholic actually involves.</p>
            <p className="mt-4 leading-8 text-[var(--text-muted)]">Move at your own pace. Ask every question. Nobody here expects you to know something already.</p>
            <Link href="/beginners" className="btn-primary mt-8">Begin with the basics <ArrowRight size={16} /></Link>
          </div>
          <div className="relative">
            <div className="card overflow-hidden">
              <img src={images.stainedGlass} alt="Detail of a medieval stained glass window depicting scenes from the life of Christ" loading="lazy" className="h-[420px] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden w-56 border border-gold/40 bg-forest-deep p-5 text-ivory shadow-soft sm:block">
              <p className="font-serif text-3xl text-gold">2,000</p>
              <p className="mt-1 text-xs leading-5 text-ivory/70">years of faith, Scripture, prayer, and sacred tradition</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="bg-cream/60 py-20 dark:bg-forest-deep/40">
        <div className="container-page">
          <SectionTitle eyebrow="Explore" title="Where would you like to begin?" description="Choose a path. Each guide is written for someone starting from zero." center />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => <FeatureCard key={f.href} {...f} />)}
          </div>
        </div>
      </section>

      {/* DAILY CATHOLIC CONTENT */}
      <section className="bg-forest py-20 text-ivory">
        <div className="container-page">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow mb-3">For today · {formatDate(daily.date, { weekday: 'long', month: 'long', day: 'numeric' })}</p>
              <h2 className="font-serif text-3xl font-semibold sm:text-4xl">A little faith for every day</h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-ivory/65">A simple daily rhythm: know the season, read a little Scripture, learn about a saint, and pray.</p>
            </div>
            <div className="chip !border-gold/40 !text-gold"><CalendarDays size={14} /> {daily.season.name}</div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="border border-gold/25 bg-forest-deep/50 p-6">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-gold">Saint of the Day</p>
              <h3 className="font-serif text-2xl leading-tight">{daily.saint.name}</h3>
              <p className="mt-2 text-xs text-gold/80">Feast: {daily.saint.feast}</p>
              <p className="mt-3 text-sm leading-6 text-ivory/70">{daily.saint.remembered}</p>
              <Link href={`/saints/${daily.saint.id}`} className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:text-gold-light">Read the story <ArrowRight size={13} /></Link>
              {!daily.saintIsFeast && <p className="mt-3 text-[11px] leading-5 text-ivory/70">A saint to read about today; today is not a universal feast of this saint in the general calendar.</p>}
            </div>
            <div className="border border-gold/25 bg-forest-deep/50 p-6">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-gold">Scripture for Reflection</p>
              <p className="text-xs font-semibold text-gold/80">{daily.reading.reference}</p>
              <blockquote className="mt-3 font-serif text-xl leading-8 text-ivory">“{daily.reading.text.replace(/[“”]/g, '')}”</blockquote>
              <p className="mt-4 text-sm leading-6 text-ivory/65">{daily.reading.reflection}</p>
              <a href={daily.usccbReadingsUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:text-gold-light">Today’s official readings <ArrowRight size={13} /></a>
            </div>
            <div className="border border-gold/25 bg-forest-deep/50 p-6">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-gold">Daily Prayer</p>
              <h3 className="font-serif text-2xl">{daily.prayer.title}</h3>
              <p className="mt-3 line-clamp-4 whitespace-pre-line font-serif text-base leading-7 text-ivory/75">{daily.prayer.text}</p>
              <Link href={`/prayers/${daily.prayer.id}`} className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:text-gold-light">Full prayer and meaning <ArrowRight size={13} /></Link>
            </div>
            <div className="border border-gold/25 bg-forest-deep/50 p-6">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-gold">Liturgical Season</p>
              <h3 className="font-serif text-2xl">{daily.season.name}</h3>
              <p className="mt-3 text-sm leading-6 text-ivory/70">{daily.season.description}</p>
              <p className="mt-4 text-xs text-gold/80">Liturgical colour: {daily.season.color}</p>
              <div className="mt-4 border-t border-white/10 pt-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">Featured Teaching</p>
                <p className="mt-2 font-serif text-lg">{featuredTeaching.title}</p>
                <p className="mt-1 text-xs leading-5 text-ivory/60">{featuredTeaching.ccc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEGINNER BANNER */}
      <section className="relative overflow-hidden bg-ivory py-20 dark:bg-[var(--bg)]">
        <div className="container-page">
          <div className="card grid overflow-hidden md:grid-cols-2">
            <div className="p-9 md:p-14">
              <p className="eyebrow mb-4">A gentle start</p>
              <h2 className="font-serif text-3xl font-semibold sm:text-4xl">New to Catholicism?</h2>
              <p className="mt-5 leading-8 text-[var(--text-muted)]">You do not need to know everything before beginning. Start with the basics and learn at your own pace.</p>
              <p className="mt-4 leading-8 text-[var(--text-muted)]">Our five beginner lessons explain who Jesus is, what Catholics believe, how to read the Bible, how the Church is structured, and why Catholics pray the way they do — with no assumptions and no jargon.</p>
              <Link href="/beginners" className="btn-primary mt-7">Beginner’s Guide <ArrowRight size={16} /></Link>
            </div>
            <div className="relative min-h-[300px] bg-forest">
              <img src={images.madonna} alt="Renaissance painting of the Madonna and Child with angels" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 font-serif text-2xl leading-snug text-ivory">“Come to me, all you who labor and are burdened, and I will give you rest.”</p>
              <p className="absolute bottom-3 left-6 text-xs text-gold">Matthew 11:28</p>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS STRIP */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)] py-16">
        <div className="container-page grid gap-8 md:grid-cols-3">
          {[
            { icon: CircleDot, title: 'Pray the Rosary', text: 'A digital rosary that follows the real beads — with every prayer, mystery, and meditation.', href: '/rosary' },
            { icon: ScrollText, title: 'Follow the Mass', text: 'Move through the Mass step by step, in either the Ordinary or Extraordinary Form.', href: '/mass#simulator' },
            { icon: Library, title: 'Find a prayer', text: 'Search a library of traditional Catholic prayers, organised by category and need.', href: '/prayers' },
          ].map((item) => (
            <Link key={item.title} href={item.href} className="group flex gap-4 border-l-2 border-gold/50 pl-5">
              <item.icon size={24} className="shrink-0 text-gold-dark dark:text-gold" />
              <div><h3 className="font-serif text-xl font-semibold group-hover:text-gold-dark dark:group-hover:text-gold">{item.title}</h3><p className="mt-1 text-sm leading-6 text-[var(--text-muted)]">{item.text}</p></div>
            </Link>
          ))}
        </div>
        <div className="container-page mt-10"><SourceNote label="Scripture: NABRE, USCCB" url="https://bible.usccb.org/" /></div>
      </section>
    </>
  );
}
