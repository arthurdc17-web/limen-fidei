import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, CircleCheck, Info } from 'lucide-react';
import { PageHero, SectionTitle, Callout, Accordion, SourceNote } from '@/components/ui';
import { MassSimulator } from '@/components/features/MassSimulator';
import { images } from '@/content/images';
import { massRiteInfo } from '@/content/mass';

export const metadata: Metadata = { title: 'Complete Guide to the Catholic Mass', description: 'A beginner-friendly, step-by-step guide to the Mass, with an interactive simulator and explanations of every part.' };

export default function MassPage() {
  return (
    <>
      <PageHero eyebrow="The Mass" title="A Complete Guide to the Catholic Mass" description="You can follow this guide while attending an actual Mass. Every part is explained: what is happening, what the priest does, what you do, whether to stand, sit, or kneel, and what the congregation says." image={images.mass}>
        <Link href="#simulator" className="btn bg-gold text-forest-deep hover:bg-gold-light">Open the interactive simulator <ArrowRight size={16} /></Link>
        <Link href="#before" className="btn border border-ivory/40 text-ivory hover:text-gold">Before Mass</Link>
      </PageHero>

      <div className="container-page py-16">
        <Callout title="If this is your first Mass" tone="green">
          You are welcome here. Sit near the back if you like, follow along when you can, and remain in your place during Communion if you are not receiving. There is nothing you need to know beforehand. Pick up a missalette from the pew — it contains the responses and hymns.
        </Callout>
      </div>

      {/* SIMULATOR */}
      <section className="bg-[var(--bg-alt)] py-14">
        <div className="container-page"><MassSimulator /></div>
      </section>

      {/* BEFORE MASS */}
      <section id="before" className="scroll-mt-28 bg-[var(--surface)] py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[360px_1fr]">
          <div>
            <SectionTitle eyebrow="Before the liturgy" title="Arriving at church" description="A few simple practicalities make everything else easier." />
            <img src={images.nave} alt="Interior of a Catholic church showing the nave and altar" loading="lazy" className="card mt-6 h-64 w-full object-cover" />
          </div>
          <div className="prose-faith max-w-prose">
            <h2>Finding a Catholic church</h2>
            <p>If you do not have a parish in mind, use our <Link href="/churches">church finder</Link> or search online for “Catholic parish near me.” If you can, call the parish office to confirm Mass times — schedules change around holidays. The <Link href="/churches">finder page</Link> explains other reliable ways to check.</p>

            <h2>How early should you arrive?</h2>
            <p>Arrive about ten to fifteen minutes early for a Sunday Mass. That gives you time to park, find the church, use the restroom, take a seat, and settle into prayer. If you arrive late, enter quietly and take the nearest available seat; do not feel embarrassed.</p>

            <h2>What should you wear?</h2>
            <p>There is no strict dress code. Modest, clean, comfortable clothing is respectful — what you would wear to a serious appointment or a family celebration. Some people dress up for Sunday; others come in jeans. What matters is your presence, not your outfit. Hats are normally removed, though religious head coverings are always appropriate.</p>

            <h2>Entering, holy water, and genuflection</h2>
            <p>Near the entrance you will usually find a font of holy water. Dip your fingertips and make the Sign of the Cross: “In the name of the Father, and of the Son, and of the Holy Spirit. Amen.” It recalls your Baptism.</p>
            <p>When you reach your seat, many Catholics genuflect — lower the right knee briefly — toward the altar or tabernacle. If you cannot kneel, a respectful bow works. If you are unsure, just watch what others do. Nobody is watching you.</p>

            <h2>Where to sit and what to do if you are unsure</h2>
            <p>Sit anywhere that is comfortable. Many newcomers choose a seat near the back so they can observe. During the liturgy, stand and sit when the congregation does; if you miss a cue, simply follow a moment later. If you need to cough, sip water, or quietly settle your child, that is fine.</p>
            <p><strong>Local customs genuinely vary.</strong> In some parishes people kneel after the Our Father; in others they stand. In some places people exchange the sign of peace with handshakes; elsewhere a nod is normal. This guide describes the general order, not every parish’s practice.</p>
          </div>
        </div>
      </section>

      {/* ORDER OF MASS */}
      <section className="bg-ivory py-20 dark:bg-[var(--bg)]">
        <div className="container-page">
          <SectionTitle eyebrow="The order of Mass" title="The four major movements" description="The Mass is one prayer with a clear shape: we gather, listen, offer, and are sent. The simulator above gives the detail; these section summaries give the big picture." />
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { n: 'A', title: 'Introductory Rites', text: 'Entrance procession and chant, Sign of the Cross, greeting, Penitential Act, Kyrie, Gloria (when prescribed), and the Collect. We gather as God’s people and turn our hearts toward him.' },
              { n: 'B', title: 'Liturgy of the Word', text: 'First Reading, Responsorial Psalm, Second Reading (when prescribed), Gospel Acclamation, Gospel, homily, Profession of Faith, and Universal Prayer. God speaks, and the Church responds in faith and prayer.' },
              { n: 'C', title: 'Liturgy of the Eucharist', text: 'Preparation of the gifts, Prayer over the Offerings, Eucharistic Prayer (Preface, Sanctus, Consecration, Memorial Acclamation, doxology, Great Amen), Lord’s Prayer, Sign of Peace, and Lamb of God. The Church gives thanks and offers Christ’s sacrifice.' },
              { n: 'D & E', title: 'Communion and Concluding Rites', text: 'Invitation to Communion, reception or spiritual communion, Prayer after Communion, announcements, final blessing, and dismissal. We receive Christ and are sent to live the Gospel.' },
            ].map((s) => (
              <div key={s.n} className="card p-7">
                <span className="font-serif text-5xl text-gold-dark dark:text-gold">{s.n}</span>
                <h3 className="mt-2 font-serif text-2xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL PRESENCE */}
      <section className="bg-forest py-20 text-ivory">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow mb-4">At the heart of the Mass</p>
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">The Real Presence and Transubstantiation</h2>
            <p className="mt-6 leading-8 text-ivory/75">Catholics believe that at the consecration the bread and wine truly become the Body and Blood of Christ — body, blood, soul, and divinity — while their outward appearances remain. The Church calls this change <em>transubstantiation</em>.</p>
            <p className="mt-4 leading-8 text-ivory/75">This is not a claim about chemistry. It is a claim about what Christ said at the Last Supper — “This is my Body… this is my Blood” — and what the Church has believed and celebrated from the beginning. The Mass does not re-crucify Christ; it makes his one saving sacrifice present to us.</p>
            <Link href="/teachings" className="btn mt-7 border border-gold/60 text-gold hover:bg-gold/10">Read more about Eucharistic teaching <ArrowRight size={15} /></Link>
          </div>
          <div className="border border-gold/25 bg-forest-deep/50 p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">In your own words</p>
            <blockquote className="mt-5 font-serif text-2xl leading-9">“Through him, and with him, and in him, O God, almighty Father, in the unity of the Holy Spirit, all glory and honour is yours, for ever and ever.”</blockquote>
            <p className="mt-5 text-sm text-ivory/60">The Great Amen — the congregation’s “yes” to the Eucharistic Prayer.</p>
          </div>
        </div>
      </section>

      {/* COMMUNION */}
      <section className="bg-cream/50 py-20 dark:bg-forest-deep/40">
        <div className="container-page">
          <SectionTitle eyebrow="Communion" title="Receiving — and not receiving — Holy Communion" description="This is the part newcomers worry about most. Here is exactly what to expect." />
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="card p-7">
              <CircleCheck className="text-gold-dark dark:text-gold" size={22} />
              <h3 className="mt-4 font-serif text-2xl">Who may receive</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">Catholics who have been baptised, are free from unconfessed mortal sin, have fasted as required, and have received First Holy Communion. Children receive after their formation and First Communion.</p>
            </div>
            <div className="card p-7">
              <Info className="text-gold-dark dark:text-gold" size={22} />
              <h3 className="mt-4 font-serif text-2xl">If you are not Catholic</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">The Church asks that Communion be received only by those who share its faith in the Eucharist and its full communion. This is not a judgement about you. Stay in your seat or kneel and pray during the procession. You are welcome at Mass and welcome in this church.</p>
            </div>
            <div className="card p-7">
              <BookOpen className="text-gold-dark dark:text-gold" size={22} />
              <h3 className="mt-4 font-serif text-2xl">Spiritual communion</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">If you cannot receive sacramentally, you may make a spiritual communion: “Jesus, I believe that you are truly present in the Blessed Sacrament. I love you above all things and desire to receive you into my soul…” It is a real devotion, but it does not replace the sacrament when reception is possible.</p>
            </div>
          </div>
          <div className="prose-faith mt-12 max-w-prose">
            <h2>How to approach and receive</h2>
            <p>When the invitation “Behold the Lamb of God” is said, join in the response: “Lord, I am not worthy that you should enter under my roof, but only say the word and my soul shall be healed.” Those receiving then walk forward in a procession.</p>
            <p>In most parishes you may receive on the tongue or in your hand. If receiving in the hand, place your left hand under your right, say “Amen,” take the host reverently, and consume it immediately. If a chalice is offered, take a small sip when it is presented. Afterward, return to your seat and spend a few moments in thanksgiving while the Communion hymn is sung.</p>
            <p>If you need a low-gluten host, or if you cannot receive under one form, speak to the priest before Mass. He will help you.</p>
          </div>
        </div>
      </section>

      {/* THE TWO FORMS */}
      <section className="bg-[var(--surface)] py-20">
        <div className="container-page">
          <SectionTitle eyebrow="Two forms of the Roman Rite" title="Novus Ordo and the Traditional Latin Mass" description="Both are the Mass of the Roman Church. Their structure, language, and customs differ, so we keep their instructions separate." />
          <div className="grid gap-6 md:grid-cols-2">
            {(Object.entries(massRiteInfo) as [keyof typeof massRiteInfo, typeof massRiteInfo[keyof typeof massRiteInfo]][]).map(([key, info]) => (
              <div key={key} className="card p-7">
                <h3 className="font-serif text-2xl font-semibold">{info.name}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{info.description}</p>
                <p className="mt-4 text-xs leading-6 text-[var(--text-muted)]"><strong>Note:</strong> {info.note}</p>
                <Link href={`/mass#simulator`} className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-dark dark:text-gold">See the step-by-step walkthrough <ArrowRight size={13} /></Link>
              </div>
            ))}
          </div>
          <Callout title="A note on the older form" tone="gold">The celebration of the 1962 Missal is subject to the Church’s current disciplinary norms, so availability varies by diocese. Check with your local parish before travelling to attend.</Callout>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ivory py-20 dark:bg-[var(--bg)]">
        <div className="container-narrow">
          <SectionTitle eyebrow="Common questions" title="Before you go" />
          <Accordion items={[
            { title: 'Can I attend Mass if I am not Catholic?', content: <p>Yes. Everyone is welcome. Participate as much or as little as feels comfortable, and remain in your place during Communion if you do not receive.</p> },
            { title: 'What if I arrive late or make a mistake?', content: <p>Enter quietly, take a seat, and follow along. Nobody minds. The worst that will happen is that you notice a cue a moment late.</p> },
            { title: 'Do I have to kneel?', content: <p>No. If kneeling is difficult for health or other reasons, sit or bow. In some parishes and seasons the whole congregation stands.</p> },
            { title: 'What is the little book in the pew?', content: <p>A missalette or hymnal. It contains the readings, responses, and hymns for the day. It is there to help you follow — not to test you.</p> },
            { title: 'Can I receive a blessing instead of Communion?', content: <p>Practices vary. In many parishes you can come forward with your arms crossed to receive a blessing; in others it is better to remain in your seat. Ask an usher or the priest locally.</p> },
            { title: 'How long does Mass take?', content: <p>A weekday Mass is often about 30 minutes. A Sunday Mass is usually about an hour. The Easter Vigil is considerably longer.</p> },
          ]} />
          <div className="mt-10"><SourceNote label="Roman Missal, Third Edition; Catechism §1373–1381" url="https://www.usccb.org/prayer-and-worship/the-mass/order-of-mass" ccc="CCC 1346–1381" /></div>
        </div>
      </section>
    </>
  );
}
