import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Cross, Scale, ShieldCheck } from 'lucide-react';
import { Accordion, Breadcrumbs, Callout, CheckListItem, FeatureCard, PageHero, SectionTitle } from '@/components/ui';
import { images } from '@/content/images';
import { accuracyNote, doctrinalNotes } from '@/content/sources';

export const metadata: Metadata = {
  title: 'About Catholic Companion',
  description: 'Learn who Catholic Companion is for, how we write and check content, and why this is an independent educational resource.',
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'About' }]} />

      <PageHero
        eyebrow="About"
        title="A companion for the journey"
        description="Catholic Companion is an independent educational website that helps people understand the Catholic faith, learn to pray, and find their way into the life of the Church — one clear, manageable step at a time."
      >
        <Link href="/sources" className="btn border border-ivory/40 text-ivory hover:text-gold">Our sources <ArrowRight size={15} /></Link>
        <Link href="/contact" className="btn border border-ivory/40 text-ivory hover:text-gold">Contact</Link>
      </PageHero>

      {/* MISSION */}
      <section className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:items-center">
          <div className="prose-faith max-w-prose">
            <h2>Our mission</h2>
            <p>
              We want the Catholic faith to be understandable without a head start. That means explaining the Mass before you attend one, printing the prayers in full, describing the sacraments in ordinary language, and showing where each claim comes from.
            </p>
            <p>
              This site was built for the person at the back of the church who does not know when to stand, the friend asking what Catholics believe about the Bible, and the seeker who wants to know what becoming Catholic actually involves. Nothing here assumes you already have the vocabulary.
            </p>
            <p>
              We are not a parish, a diocese, or an official Church publisher. We are an educational resource that points beyond itself — to Scripture, the Catechism, the documents of the Church, and ultimately to your local parish.
            </p>
          </div>
          <img
            src={images.nave}
            alt="Interior of a Catholic church showing the nave and altar"
            loading="lazy"
            className="card h-80 w-full object-cover"
          />
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section className="bg-[var(--bg-alt)] py-16">
        <div className="container-page">
          <SectionTitle
            eyebrow="Who this is for"
            title="Start wherever you are"
            description="You do not need to be Catholic, practising, or even sure yet. Choose the door that fits your question today."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard href="/lessons" title="New to the faith" description="A beginner’s guide to the basics, in a sensible order and without jargon." iconName="book" />
            <FeatureCard href="/mass" title="Visiting a parish" description="Follow the Mass part by part, including what to do and when to stand or kneel." iconName="church" />
            <FeatureCard href="/rosary" title="Learning to pray" description="Prayer texts, the Rosary, and simple rhythms you can use at home." iconName="rosary" />
            <FeatureCard href="/becoming-catholic" title="Considering becoming Catholic" description="The OCIA process explained honestly, from first enquiry to reception." iconName="users" />
          </div>
        </div>
      </section>

      {/* WHAT MAKES IT DIFFERENT */}
      <section className="container-page py-16">
        <SectionTitle
          eyebrow="Our approach"
          title="What makes this site different"
          description="Three commitments shape every page we publish."
        />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card p-7">
            <BookOpen size={22} className="text-gold-dark dark:text-gold" aria-hidden="true" />
            <h3 className="mt-4 font-serif text-2xl font-semibold">Plain language first</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">We define technical terms the first time they appear and keep sentences short. The glossary collects those terms in one searchable place.</p>
          </div>
          <div className="card p-7">
            <Cross size={22} className="text-gold-dark dark:text-gold" aria-hidden="true" />
            <h3 className="mt-4 font-serif text-2xl font-semibold">Local customs are named</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">Catholic practice varies by parish, diocese, and culture. Where it does, we say so rather than presenting one custom as universal.</p>
          </div>
          <div className="card p-7">
            <ShieldCheck size={22} className="text-gold-dark dark:text-gold" aria-hidden="true" />
            <h3 className="mt-4 font-serif text-2xl font-semibold">Sources you can check</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">Each guide points to the Scripture translation, Catechism paragraphs, or Church documents behind it, with links to the official text.</p>
          </div>
        </div>
      </section>

      {/* EDITORIAL PRINCIPLES */}
      <section id="principles" className="scroll-mt-28 bg-[var(--surface)] py-16">
        <div className="container-narrow">
          <SectionTitle
            eyebrow="Editorial principles"
            title="How we handle teaching and accuracy"
            description="We distinguish carefully between what the Church defines, what it teaches authoritatively, and what is a matter of opinion or local practice."
          />
          <Callout title="Our accuracy note" tone="gold">
            <p>{accuracyNote}</p>
          </Callout>
          <h3 className="mb-2 mt-10 font-serif text-2xl font-semibold">Kinds of Church teaching</h3>
          <p className="mb-6 text-sm leading-7 text-[var(--text-muted)]">These distinctions appear throughout the site so that a debated question is never presented as settled, and a changeable rule is never presented as doctrine.</p>
          <Accordion
            items={doctrinalNotes.map((note) => ({
              title: note.title,
              content: <p>{note.text}</p>,
            }))}
          />
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="How to use the site" title="A simple path through the material" />
            <ul className="space-y-4">
              <CheckListItem><Link href="/lessons" className="link-gold">Begin with the beginner’s guide</Link> if you want the big picture first.</CheckListItem>
              <CheckListItem><Link href="/mass" className="link-gold">Open the Mass guide</Link> before your first Sunday visit, or read it afterwards to make sense of what you saw.</CheckListItem>
              <CheckListItem><Link href="/prayers" className="link-gold">Use the prayer library</Link> for full texts and short explanations you can return to.</CheckListItem>
              <CheckListItem><Link href="/glossary" className="link-gold">Search the glossary</Link> whenever a word stops you mid-paragraph.</CheckListItem>
              <CheckListItem><Link href="/sources" className="link-gold">Check the sources</Link> when you want the official wording behind a summary.</CheckListItem>
            </ul>
          </div>
          <div className="card p-7 lg:self-start">
            <Scale size={22} className="text-gold-dark dark:text-gold" aria-hidden="true" />
            <h3 className="mt-4 font-serif text-2xl font-semibold">What this site is not</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">It is not a substitute for sacramental preparation, a parish community, or a conversation with a priest. Quizzes and guides help you learn; they do not make you a member of the Church or dispense you from local requirements.</p>
            <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">Read the <Link href="/terms" className="link-gold">Terms of Use</Link> and <Link href="/privacy" className="link-gold">Privacy Policy</Link> for the practical details.</p>
          </div>
        </div>
      </section>

      {/* INDEPENDENCE */}
      <section className="bg-forest py-16 text-ivory">
        <div className="container-narrow">
          <Callout title="Independent, not official" tone="gold">
            <p>
              Catholic Companion is an independent educational resource intended to help people learn about the Catholic faith. It is not an official website of the Vatican, the Holy See, or any diocese. Its educational content does not replace sacramental preparation, pastoral guidance, or instruction from a priest or qualified catechist. Always consult your local parish for guidance about becoming Catholic and receiving the sacraments.
            </p>
          </Callout>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/sources" className="btn bg-gold text-forest-deep hover:bg-gold-light">View our references <ArrowRight size={15} /></Link>
            <Link href="/contact" className="btn border border-gold/60 text-gold hover:bg-gold/10">Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
