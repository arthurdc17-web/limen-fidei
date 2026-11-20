import Link from 'next/link';
import { Cross, Mail } from 'lucide-react';

const columns = [
  {
    title: 'Explore',
    links: [
      { href: '/lessons', label: 'Beginner’s Guide' },
      { href: '/teachings', label: 'Catholic Teachings' },
      { href: '/sacraments', label: 'The Seven Sacraments' },
      { href: '/saints', label: 'Saints Directory' },
      { href: '/glossary', label: 'Catholic Glossary' },
    ],
  },
  {
    title: 'Pray & Worship',
    links: [
      { href: '/mass', label: 'Mass Guide' },
      { href: '/rosary', label: 'Rosary Guide' },
      { href: '/prayers', label: 'Prayer Library' },
      { href: '/confession', label: 'Confession Guide' },
      { href: '/daily-life', label: 'Catholic Daily Life' },
    ],
  },
  {
    title: 'Your Journey',
    links: [
      { href: '/becoming-catholic', label: 'Becoming Catholic' },
      { href: '/calendar', label: 'Liturgical Calendar' },
      { href: '/churches', label: 'Catholic Church Finder' },
      { href: '/quizzes', label: 'Quizzes' },
      { href: '/account', label: 'My Space' },
    ],
  },
  {
    title: 'About',
    links: [
      { href: '/about', label: 'About Catholic Companion' },
      { href: '/contact', label: 'Contact' },
      { href: '/sources', label: 'Sources and References' },
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Use' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-forest-deep text-ivory no-print">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/60 text-gold"><Cross size={22} strokeWidth={1.5} /></span>
              <span className="font-serif text-2xl font-semibold">Catholic Companion</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-ivory/65">A welcoming place to discover the faith, learn to pray, and grow in Christ — at your own pace, with no prior knowledge assumed.</p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light"><Mail size={15} /> Get in touch</Link>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => <li key={l.href}><Link href={l.href} className="text-sm text-ivory/70 hover:text-gold-light">{l.label}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="max-w-5xl text-xs leading-6 text-ivory/55">
            Catholic Companion is an independent educational resource intended to help people learn about the Catholic faith. It is not an official website of the Vatican, the Holy See, or any diocese. Its educational content does not replace sacramental preparation, pastoral guidance, or instruction from a priest or qualified catechist. Always consult your local parish for guidance about becoming Catholic and receiving the sacraments.
          </p>
          <div className="mt-6 flex flex-col justify-between gap-3 text-xs text-ivory/70 sm:flex-row">
            <span>© {new Date().getFullYear()} Catholic Companion. Built to serve beginners and seekers.</span>
            <span>Discover the Faith. Learn to Pray. Grow in Christ.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
