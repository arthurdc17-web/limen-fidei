import { prayers } from '@/content/prayers';
import { saints } from '@/content/saints';
import { teachings } from '@/content/teachings';
import { sacraments } from '@/content/sacraments';
import { lessons } from '@/content/lessons';
import { mysteries } from '@/content/mysteries';
import { faqs } from '@/content/faq';
import { quizzes } from '@/content/quizzes';
import type { SearchItem } from '@/content/types';

export const searchIndex: SearchItem[] = [
  { id: 'home', title: 'Catholic Companion', description: 'Discover the Catholic faith, learn to pray, and grow in Christ.', href: '/', category: 'General', keywords: 'home welcome start' },
  { id: 'mass-guide', title: 'Complete Guide to the Catholic Mass', description: 'A step-by-step guide to the order of Mass, before Mass, and Holy Communion.', href: '/mass', category: 'Mass', keywords: 'liturgy eucharist consecration communion' },
  { id: 'mass-simulator', title: 'Interactive Mass Simulator', description: 'Walk through the Mass part by part, including posture and responses.', href: '/mass#simulator', category: 'Mass', keywords: 'novus ordo latin mass steps' },
  { id: 'rosary-guide', title: 'Interactive Rosary Guide', description: 'Pray the Rosary bead by bead with full prayer texts and meditations.', href: '/rosary', category: 'Rosary', keywords: 'beads mysteries hail mary' },
  ...prayers.map((p) => ({ id: `prayer-${p.id}`, title: p.title, description: `${p.category}. ${p.meaning.slice(0, 150)}…`, href: `/prayers/${p.id}`, category: 'Prayer', keywords: p.tags?.join(' ') || '' })),
  ...saints.map((s) => ({ id: `saint-${s.id}`, title: s.name, description: `${s.vocation} — feast ${s.feast}. ${s.remembered}`, href: `/saints/${s.id}`, category: 'Saint', keywords: `${s.patronage.join(' ')} ${s.period}` })),
  ...teachings.map((t) => ({ id: `teaching-${t.id}`, title: t.title, description: t.summary, href: `/teachings/${t.id}`, category: 'Teaching', keywords: `${t.category} ${(t.terms || []).map((x) => x.term).join(' ')}` })),
  ...sacraments.map((s) => ({ id: `sacrament-${s.id}`, title: s.name, description: s.subtitle, href: `/sacraments/${s.id}`, category: 'Sacrament', keywords: `${s.type} ${s.what.slice(0, 120)}` })),
  ...lessons.map((l) => ({ id: `lesson-${l.id}`, title: `Lesson ${l.number}: ${l.title}`, description: l.intro.slice(0, 170), href: `/lessons/${l.id}`, category: 'Beginner Guide', keywords: 'basics introduction' })),
  ...mysteries.map((m) => ({ id: `mystery-${m.id}`, title: `${m.title} — ${m.set} Mystery`, description: m.explanation.slice(0, 160), href: `/rosary#${m.id}`, category: 'Rosary Mystery', keywords: `${m.scripture} ${m.meditation.slice(0, 80)}` })),
  ...faqs.map((f) => ({ id: `faq-${f.id}`, title: f.question, description: f.answer[0].slice(0, 180), href: `/faq#${f.id}`, category: 'FAQ', keywords: f.category })),
  ...quizzes.map((q) => ({ id: `quiz-${q.id}`, title: `${q.title} Quiz`, description: q.description, href: `/quizzes/${q.id}`, category: 'Quiz', keywords: 'test questions' })),
  { id: 'becoming', title: 'Becoming Catholic — OCIA Guide', description: 'The five stages of the Order of Christian Initiation of Adults, explained.', href: '/becoming-catholic', category: 'Becoming Catholic', keywords: 'convert conversion rcia ocia inquiry' },
  { id: 'confession', title: 'First Confession Guide', description: 'A step-by-step walkthrough, examination of conscience, and explanations.', href: '/confession', category: 'Confession', keywords: 'reconciliation sin penance absolution' },
  { id: 'calendar', title: 'Catholic Calendar and Liturgical Year', description: 'Advent, Christmas, Lent, Easter, Ordinary Time, solemnities, and feast days.', href: '/calendar', category: 'Calendar', keywords: 'seasons feast holy day easter' },
  { id: 'daily-life', title: 'Catholic Daily Life', description: 'Prayer routines, Sunday Mass, fasting, charity, virtues, and community.', href: '/daily-life', category: 'Daily Life', keywords: 'routine habits fasting sunday' },
  { id: 'churches', title: 'Find a Catholic Church', description: 'Search by city, ZIP code, or parish name and confirm details with the parish.', href: '/churches', category: 'Church Finder', keywords: 'parish mass times nearby' },
  { id: 'glossary', title: 'Catholic Glossary', description: 'Key terms explained in plain language.', href: '/glossary', category: 'Terminology', keywords: 'dictionary definition vocabulary' },
  { id: 'sources', title: 'Sources and References', description: 'The Scripture translations, Church documents, and images used on this site.', href: '/sources', category: 'General', keywords: 'catechism vatican usccb references' },
];

export const searchCategories = ['All', 'Prayer', 'Saint', 'Teaching', 'Sacrament', 'Beginner Guide', 'Mass', 'Rosary', 'Rosary Mystery', 'FAQ', 'Quiz', 'Becoming Catholic', 'Confession', 'Calendar', 'Daily Life', 'Church Finder', 'Terminology', 'General'];

export function searchContent(query: string, category = 'All') {
  const q = query.trim().toLowerCase();
  if (!q) return [] as SearchItem[];
  const words = q.split(/\s+/);
  return searchIndex.filter((item) => {
    if (category !== 'All' && item.category !== category) return false;
    const haystack = `${item.title} ${item.description} ${item.category} ${item.keywords || ''}`.toLowerCase();
    return words.every((w) => haystack.includes(w));
  });
}
