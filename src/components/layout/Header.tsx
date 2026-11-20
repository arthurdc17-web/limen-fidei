'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BookOpen, CalendarDays, ChevronDown, Church, Cross, Menu, Moon, Search, Sun, X, Heart, GraduationCap, ScrollText } from 'lucide-react';
import { useUser } from '@/components/providers/UserProvider';

const navGroups = [
  {
    label: 'Learn', icon: BookOpen,
    items: [
      { href: '/lessons', label: 'Beginner’s Guide', desc: 'Start from the very beginning' },
      { href: '/teachings', label: 'Catholic Teachings', desc: 'Doctrine explained clearly' },
      { href: '/sacraments', label: 'The Seven Sacraments', desc: 'God’s gifts of grace' },
      { href: '/saints', label: 'Saints Directory', desc: 'Lives of holy men and women' },
      { href: '/glossary', label: 'Catholic Glossary', desc: 'Plain-language definitions' },
    ],
  },
  {
    label: 'Practice', icon: ScrollText,
    items: [
      { href: '/mass', label: 'Guide to the Mass', desc: 'Follow along at Mass' },
      { href: '/rosary', label: 'Interactive Rosary', desc: 'Pray bead by bead' },
      { href: '/prayers', label: 'Prayer Library', desc: 'Traditional Catholic prayers' },
      { href: '/confession', label: 'Confession Guide', desc: 'A first-time walkthrough' },
      { href: '/daily-life', label: 'Catholic Daily Life', desc: 'Faith in ordinary days' },
    ],
  },
  {
    label: 'Journey', icon: Cross,
    items: [
      { href: '/becoming-catholic', label: 'Becoming Catholic', desc: 'The OCIA process explained' },
      { href: '/calendar', label: 'Liturgical Calendar', desc: 'Seasons, feasts, and readings' },
      { href: '/churches', label: 'Find a Church', desc: 'Locate a nearby parish' },
      { href: '/quizzes', label: 'Quizzes', desc: 'Learn as you go' },
    ],
  },
];

export function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme, bookmarks } = useUser();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => { setMobileOpen(false); setOpenGroup(null); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-forest-deep text-ivory shadow-lg no-print">
      <div className="border-b border-white/5 bg-forest/60">
        <div className="container-page flex h-8 items-center justify-between text-[11px] tracking-wide text-gold/90">
          <span className="hidden sm:inline">Discover the Faith. Learn to Pray. Grow in Christ.</span>
          <div className="flex items-center gap-4 sm:gap-5">
            <Link href="/search" className="inline-flex items-center gap-1.5 hover:text-gold-light"><Search size={13} /> Search</Link>
            <Link href="/account" className="inline-flex items-center gap-1.5 hover:text-gold-light"><Heart size={13} /> My Space{bookmarks.length > 0 ? ` (${bookmarks.length})` : ''}</Link>
            <button onClick={toggleTheme} aria-label={mounted && theme === 'dark' ? 'Light mode — switch to light reading mode' : 'Dark mode — switch to dark reading mode'} className="inline-flex items-center gap-1.5 hover:text-gold-light">
              {mounted && theme === 'dark' ? <Sun size={13} /> : <Moon size={13} />}
              <span className="hidden sm:inline">{mounted && theme === 'dark' ? 'Light' : 'Dark'} mode</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container-page flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 text-gold transition-colors group-hover:bg-gold group-hover:text-forest-deep"><Cross size={20} strokeWidth={1.6} /></span>
          <span className="leading-tight">
            <span className="block font-serif text-[22px] font-semibold tracking-wide">Catholic Companion</span>
            <span className="hidden text-[10px] uppercase tracking-[0.2em] text-gold/80 sm:block">Faith · Prayer · Growth</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navGroups.map((group) => (
            <div key={group.label} className="relative" onMouseEnter={() => setOpenGroup(group.label)} onMouseLeave={() => setOpenGroup(null)}>
              <button
                onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}
                onFocus={() => setOpenGroup(group.label)}
                aria-expanded={openGroup === group.label}
                className="inline-flex items-center gap-1 rounded-sm px-3 py-2 text-sm font-medium text-ivory/90 hover:bg-white/5 hover:text-gold"
              >
                {group.label}<ChevronDown size={14} className={openGroup === group.label ? 'rotate-180 transition-transform' : 'transition-transform'} />
              </button>
              {openGroup === group.label && (
                <div className="absolute left-0 top-full w-72 border border-gold/25 bg-forest-deep p-2 shadow-2xl">
                  {group.items.map((item) => (
                    <Link key={item.href} href={item.href} className="block px-3 py-2.5 hover:bg-white/5">
                      <span className="block text-sm font-medium text-ivory">{item.label}</span>
                      <span className="block text-xs text-ivory/55">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/mass" className="rounded-sm px-3 py-2 text-sm font-medium text-ivory/90 hover:bg-white/5 hover:text-gold">Mass Guide</Link>
          <Link href="/rosary" className="rounded-sm px-3 py-2 text-sm font-medium text-ivory/90 hover:bg-white/5 hover:text-gold">Rosary</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/becoming-catholic" className="btn hidden bg-gold px-4 py-2 text-forest-deep hover:bg-gold-light md:inline-flex">Start Your Journey</Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileOpen} className="rounded-sm border border-white/20 p-2.5 text-ivory lg:hidden">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="max-h-[calc(100vh-104px)] overflow-y-auto border-t border-white/10 bg-forest-deep px-5 py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="mb-3 flex items-center gap-2">
            <button onClick={toggleTheme} className="btn-secondary btn-sm !border-white/20 !text-ivory">{mounted && theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />} {mounted && theme === 'dark' ? 'Light mode' : 'Dark mode'}</button>
            <Link href="/search" className="btn-secondary btn-sm !border-white/20 !text-ivory"><Search size={14} /> Search</Link>
            <Link href="/account" className="btn-secondary btn-sm !border-white/20 !text-ivory"><Heart size={14} /> My Space</Link>
          </div>
          {navGroups.map((group) => (
            <div key={group.label} className="border-b border-white/10 py-1">
              <button onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)} className="flex w-full items-center justify-between py-3 text-left text-sm font-semibold uppercase tracking-wider text-gold">
                <span className="flex items-center gap-2"><group.icon size={16} /> {group.label}</span>
                <ChevronDown size={16} className={openGroup === group.label ? 'rotate-180 transition-transform' : ''} />
              </button>
              {openGroup === group.label && (
                <div className="pb-2">
                  {group.items.map((item) => <Link key={item.href} href={item.href} className="block py-2 pl-6 text-sm text-ivory/85">{item.label}</Link>)}
                </div>
              )}
            </div>
          ))}
          <div className="grid grid-cols-2 gap-2 pt-4">
            <Link href="/mass" className="btn-secondary !border-gold/50 !text-ivory"><ScrollText size={16} /> Mass Guide</Link>
            <Link href="/rosary" className="btn-secondary !border-gold/50 !text-ivory"><Cross size={16} /> Rosary</Link>
          </div>
          <Link href="/becoming-catholic" className="btn mt-3 w-full bg-gold text-forest-deep">Start Your Journey</Link>
        </nav>
      )}
    </header>
  );
}
