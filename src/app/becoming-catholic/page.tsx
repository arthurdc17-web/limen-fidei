import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Church, Heart, ScrollText, Users, type LucideIcon } from 'lucide-react';
import { PageHero, SectionTitle, Breadcrumbs, Callout, Accordion, CheckListItem, SourceNote, FeatureCard } from '@/components/ui';
import { ociaStages, situations, beginnerChecklist, firstMassTips } from '@/content/becoming';
import { images } from '@/content/images';

export const metadata: Metadata = {
  title: 'Becoming Catholic — The OCIA Journey Explained',
  description: 'A clear, welcoming guide to the Order of Christian Initiation of Adults (OCIA): the stages, your first Mass, different baptism histories, and practical next steps.',
};

const stageIcons: LucideIcon[] = [BookOpen, Users, Heart, Church, ScrollText];

export default function BecomingCatholicPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Becoming Catholic' }]} />

      <PageHero
        eyebrow="Becoming Catholic"
        title="You Are Welcome Here"
        description="If you are curious about the Catholic faith, you do not need to have anything figured out. OCIA — the Order of Christian Initiation of Adults — is a gradual, honest journey of discovery, question-asking, and prayer. Take it at your own pace."
        image={images.nave}
      >
        <Link href="#stages" className="btn bg-gold text-forest-deep hover:bg-gold-light">Explore the stages <ArrowRight size={16} /></Link>
        <Link href="#first-mass" className="btn border border-ivory/40 text-ivory hover:text-gold">Your first Mass</Link>
        <Link href="/churches" className="btn border border-ivory/40 text-ivory hover:text-gold">Find a parish</Link>
      </PageHero>

      <div className="container-page py-16">
        <Callout title="You are welcome here" tone="green">
          You do not need to be Catholic to attend Mass, to ask questions, or to visit a parish office. Coming to church as a visitor is the simplest first step. There is no test to pass and no knowledge you are expected to have already.
        </Callout>

        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
          <div className="prose-faith max-w-prose">
            <h2>What is OCIA?</h2>
            <p>OCIA stands for the <em>Order of Christian Initiation of Adults</em>. It is the Church&apos;s process for adults who wish to become Catholic, and for those who were baptised Catholic but have not yet received First Communion or Confirmation. You may also hear it called by its older name, RCIA.</p>
            <p>The word <em>initiation</em> is important. This is not simply a course of information. It is a gradual entrance into the life of a Christian community: hearing Scripture, praying together, serving others, and learning what the Church believes. You bring your own story and your own questions; there is no single &ldquo;type&rdquo; of person who belongs.</p>

            <h2>What if my situation is complicated?</h2>
            <p>It probably is not unusual. People come to OCIA after years of searching, after raising a family, after a Protestant baptism, after an Orthodox upbringing, or after being away from the Church for a long time. The sections below describe the common starting points. A priest or OCIA director can confirm which path applies to you.</p>
          </div>

          <aside className="card p-7">
            <p className="eyebrow mb-3">Good to know</p>
            <ul className="space-y-4">
              <CheckListItem>You may attend Mass as a visitor at any time.</CheckListItem>
              <CheckListItem>Inquiry carries no commitment.</CheckListItem>
              <CheckListItem>Ask any question, even a difficult one.</CheckListItem>
              <CheckListItem>Bring your baptism details if you have them.</CheckListItem>
              <CheckListItem>A sponsor and a community walk with you.</CheckListItem>
            </ul>
          </aside>
        </div>

        <Callout title="Local practice varies" tone="gold">
          The shape of OCIA is described in universal Church norms, but the practical details are set by each diocese and parish. The length of each stage, the schedule of meetings, and the exact rites used can differ. Always follow the guidance of your local parish and diocese.
        </Callout>
      </div>

      {/* STAGES */}
      <section id="stages" className="scroll-mt-28 bg-[var(--bg-alt)] py-20">
        <div className="container-page">
          <SectionTitle
            eyebrow="The journey"
            title="What to expect at each stage"
            description="OCIA unfolds in five movements. Each one has its own purpose, and none of them is a test you can fail."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ociaStages.map((stage, i) => {
              const Icon = stageIcons[i % stageIcons.length];
              return (
                <article key={stage.id} className="card flex h-full flex-col p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 text-gold-dark dark:text-gold"><Icon size={19} /></span>
                    <span className="font-serif text-4xl leading-none text-gold/50">{String(stage.number).padStart(2, '0')}</span>
                  </div>
                  <h3 className="mt-6 font-serif text-2xl font-semibold leading-tight">{stage.title}</h3>
                  <p className="mt-3 text-sm font-medium leading-6 text-gold-dark dark:text-gold">{stage.purpose}</p>
                  <ul className="mt-5 flex-1 space-y-3">
                    {stage.points.map((point) => <CheckListItem key={point}>{point}</CheckListItem>)}
                  </ul>
                  <p className="mt-6 border-t border-[var(--border)] pt-4 text-xs italic leading-5 text-[var(--text-muted)]">{stage.note}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SITUATIONS */}
      <section className="bg-[var(--surface)] py-20">
        <div className="container-narrow">
          <SectionTitle
            eyebrow="Different starting points"
            title="Wherever you are coming from"
            description="Your baptism history affects which rites you celebrate, not whether you are welcome. Open the cases below to find the one closest to your experience."
          />
          <Accordion
            items={situations.map((s) => ({
              title: s.title,
              content: (
                <>
                  <p>{s.body}</p>
                  <p className="rounded-sm border-l-2 border-gold bg-[var(--bg-alt)] px-4 py-3 text-sm not-italic"><strong>In short:</strong> {s.key}</p>
                </>
              ),
            }))}
          />
          <Callout title="Speak with your parish" tone="gold">
            Only a priest or diocesan OCIA director can confirm your particular situation, especially where validity of baptism or previous sacraments is concerned. Bring any baptismal certificate or record you have; if you cannot find one, say so honestly.
          </Callout>
        </div>
      </section>

      {/* FIRST MASS */}
      <section id="first-mass" className="scroll-mt-28 bg-ivory py-20 dark:bg-[var(--bg)]">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_400px] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Before you begin"
              title="What happens at a first Mass"
              description="Many people say that attending Mass was the moment the faith stopped feeling abstract. You are welcome to come simply to observe."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {firstMassTips.map((tip) => (
                <div key={tip} className="card p-5">
                  <p className="text-sm leading-6">{tip}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/mass" className="btn-primary">Read the Mass guide <ArrowRight size={15} /></Link>
              <Link href="/churches" className="btn-secondary">Find a Catholic church</Link>
            </div>
          </div>
          <div className="card overflow-hidden">
            <img src={images.stainedGlass} alt="Stained glass window depicting scenes from the life of Jesus" loading="lazy" className="h-80 w-full object-cover" />
            <div className="p-6">
              <p className="eyebrow mb-2">You do not have to receive</p>
              <p className="font-serif text-lg leading-7">If you are not Catholic, remain in your place during Communion and pray. No one will think less of you for it. Most people are simply glad that you are there.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT STEPS */}
      <section className="bg-forest py-20 text-ivory">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Practical next steps</p>
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">A simple checklist to begin</h2>
            <p className="mt-5 leading-8 text-ivory/75">You do not need to finish this list before contacting a parish. Pick the first item, then the next.</p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {beginnerChecklist.map((item, i) => (
              <li key={item.label} className="flex gap-3 border border-gold/20 bg-forest-deep/50 p-5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/60 font-serif text-xs text-gold">{i + 1}</span>
                <span className="text-sm leading-6 text-ivory/85">{item.label}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/prayers" className="btn bg-gold text-forest-deep hover:bg-gold-light">Learn the basic prayers <ArrowRight size={15} /></Link>
            <Link href="/confession" className="btn border border-ivory/40 text-ivory hover:text-gold">Understanding Confession</Link>
          </div>
        </div>
      </section>

      {/* CONTINUE EXPLORING */}
      <section className="bg-[var(--surface)] py-20">
        <div className="container-page">
          <SectionTitle eyebrow="Keep exploring" title="Helpful places to go next" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard href="/churches" iconName="church" title="Find a parish" description="Locate a Catholic church near you and get in touch with its office." />
            <FeatureCard href="/sacraments" iconName="heart" title="The seven sacraments" description="Understand the gifts of grace you will receive on the journey." />
            <FeatureCard href="/confession" iconName="scroll" title="First Confession" description="A gentle, step-by-step walkthrough of God's mercy in confession." />
            <FeatureCard href="/prayers" iconName="book" title="Prayer library" description="Learn the prayers of the Church, with full texts and explanations." />
          </div>
          <div className="mt-12 max-w-3xl">
            <SourceNote label="USCCB — Order of Christian Initiation of Adults" url="https://www.usccb.org/" />
          </div>
        </div>
      </section>
    </>
  );
}
