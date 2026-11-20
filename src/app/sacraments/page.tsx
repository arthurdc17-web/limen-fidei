import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Church, GraduationCap, Heart, Info } from 'lucide-react';
import { Breadcrumbs, Callout, FeatureCard, PageHero, SectionTitle, SourceNote } from '@/components/ui';
import { sacraments, sacramentTypes, typeExplanation } from '@/content/sacraments';
import { images } from '@/content/images';

export const metadata: Metadata = {
  title: 'The Seven Sacraments — God’s Gifts of Grace',
  description: 'Learn what each of the seven Catholic sacraments is, why the Church celebrates it, and how the three types of sacrament shape Christian life.',
};

const typeIcons = { Initiation: Church, Healing: Heart, 'Service of Communion': GraduationCap } as const;

// String keys are used for FeatureCard because server components cannot pass
// Lucide component functions across the client boundary.
const typeIconNames = {
  Initiation: 'church',
  Healing: 'heart',
  'Service of Communion': 'users',
} as const;

export default function SacramentsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Sacraments"
        title="Seven Signs of God’s Grace"
        description="Catholics believe Christ instituted seven sacraments: visible signs that give the grace they signify. They mark every stage of Christian life, from birth in the faith to service, healing, and family."
        image={images.altar}
      >
        <Link href="#seven" className="btn bg-gold text-forest-deep hover:bg-gold-light">See the seven sacraments <ArrowRight size={16} /></Link>
        <Link href="/mass" className="btn border border-ivory/40 text-ivory hover:text-gold">The Mass and Eucharist</Link>
      </PageHero>

      <Breadcrumbs items={[{ label: 'Sacraments' }]} />

      <section className="container-page py-14">
        <Callout title="What a sacrament is" tone="green">
          The seven sacraments are visible signs instituted by Christ to give grace. Grace is God’s free gift of his life and help — not a reward for good behaviour. In each sacrament the Church celebrates an encounter with Christ, who acts through the minister and the community. The outward sign is real and bodily: water, oil, bread and wine, words, and the laying on of hands.
        </Callout>
      </section>

      {/* THREE TYPES */}
      <section className="bg-[var(--surface)] py-20">
        <div className="container-page">
          <SectionTitle eyebrow="Three kinds of sacrament" title="A shape for the whole Christian life" description="The Church traditionally groups the seven sacraments according to the need they meet and the vocation they serve." />
          <div className="grid gap-6 md:grid-cols-3">
            {sacramentTypes.map((type) => {
              const Icon = typeIcons[type];
              const count = sacraments.filter((s) => s.type === type).length;
              return (
                <article key={type} className="card flex h-full flex-col p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold-dark dark:text-gold"><Icon size={20} aria-hidden="true" /></span>
                  <h3 className="mt-5 font-serif text-2xl font-semibold">{type}</h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-gold-dark dark:text-gold">{count} {count === 1 ? 'sacrament' : 'sacraments'}</p>
                  <p className="mt-4 flex-1 text-sm leading-7 text-[var(--text-muted)]">{typeExplanation[type]}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ALL SEVEN */}
      <section id="seven" className="container-page scroll-mt-28 py-20">
        <SectionTitle eyebrow="The complete list" title="All seven sacraments" description="Open any sacrament for its biblical foundations, the way it is celebrated, its effects, and the preparation required." />
        <div className="space-y-14">
          {sacramentTypes.map((type) => (
            <div key={type}>
              <div className="mb-5 flex flex-wrap items-baseline gap-4">
                <h3 className="font-serif text-3xl font-semibold">{type}</h3>
                <div className="h-px flex-1 bg-[var(--border)]" />
                <span className="text-xs text-[var(--text-muted)]">{typeExplanation[type]}</span>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {sacraments.filter((s) => s.type === type).map((sacrament) => (
                  <FeatureCard
                    key={sacrament.id}
                    href={`/sacraments/${sacrament.id}`}
                    title={sacrament.name}
                    description={sacrament.subtitle}
                    iconName={typeIconNames[sacrament.type]}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DISCIPLINE NOTE */}
      <section className="bg-forest py-16 text-ivory">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
          <div>
            <p className="eyebrow mb-3">Local practice</p>
            <h2 className="font-serif text-3xl font-semibold">The grace is one; the customs can differ</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-ivory/70">The age at which Confirmation is celebrated, the form of the rite, whether the chalice is offered at Communion, and other details are matters of discipline and local custom. They can vary between dioceses and between the Latin and Eastern Churches. The parish office or your priest can tell you what applies where you live.</p>
          </div>
          <div className="border border-gold/25 bg-forest-deep/50 p-7">
            <Info size={20} className="text-gold" aria-hidden="true" />
            <h3 className="mt-4 font-serif text-xl font-semibold">Not sure where to begin?</h3>
            <p className="mt-3 text-sm leading-7 text-ivory/70">If you are preparing for Baptism, Confirmation, or First Communion, the OCIA and parish formation process will guide you step by step.</p>
            <Link href="/becoming-catholic" className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold">Read the OCIA guide <ArrowRight size={13} /></Link>
          </div>
        </div>
      </section>

      <section className="container-narrow py-14">
        <SourceNote label="Catechism of the Catholic Church" url="https://www.vatican.va/archive/ENG0015/_INDEX.HTM" ccc="CCC 1210–1211" />
      </section>
    </>
  );
}
