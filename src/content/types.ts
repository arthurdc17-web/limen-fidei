export type SourceRef = { label: string; url?: string };

export type PrayerCategory =
  | 'Essential Prayers'
  | 'Marian Prayers'
  | 'Traditional Devotions'
  | 'Daily Prayers'
  | 'Chaplets & Devotions';

export interface Prayer {
  id: string;
  title: string;
  category: PrayerCategory;
  text: string;
  meaning: string;
  when: string;
  how: string;
  history?: string;
  audioUrl?: string;
  source?: SourceRef;
  tags?: string[];
}

export type MysterySet = 'Joyful' | 'Sorrowful' | 'Glorious' | 'Luminous';

export interface Mystery {
  id: string;
  set: MysterySet;
  number: number;
  title: string;
  explanation: string;
  scripture: string;
  meditation: string;
  intention: string;
}

export type Posture =
  | 'Stand'
  | 'Sit'
  | 'Kneel'
  | 'Stand or sit'
  | 'As appropriate'
  | 'Stand (kneeling is customary in some places)'
  | 'Sit, then stand as appropriate'
  | 'Stand (some kneel after the Sanctus; follow local custom)'
  | 'Stand or kneel (local custom)'
  | 'Kneel (local custom varies)'
  | 'Kneel or stand'
  | 'Kneel or stand (local custom)'
  | 'Stand or kneel at the Communion rail, according to local custom'
  | 'Kneel or sit'
  | 'Sit or stand (local custom)'
  | 'Stand (or remain kneeling briefly)'
  | 'Sit, then stand'
  | 'Stand, then sit'
  | 'Stand, with a genuflection'
  | 'Stand, then kneel or stand for the blessing'
  | 'Stand or sit (local custom)';

export interface MassStep {
  id: string;
  section: string;
  title: string;
  happening: string;
  priest: string;
  congregation: string;
  posture: Posture;
  words: string;
  why: string;
}

export interface LessonSection {
  heading: string;
  body: string[];
  bible?: string[];
  ccc?: string[];
  definition?: { term: string; text: string };
}

export interface Lesson {
  id: string;
  number: number;
  title: string;
  intro: string;
  sections: LessonSection[];
  summary: string[];
  questions: string[];
}

export interface TeachingTopic {
  id: string;
  category: string;
  title: string;
  summary: string;
  body: string[];
  scripture?: string[];
  ccc?: string[];
  terms?: { term: string; text: string }[];
  source?: SourceRef;
}

export interface Sacrament {
  id: string;
  name: string;
  type: 'Initiation' | 'Healing' | 'Service of Communion';
  subtitle: string;
  what: string;
  why: string;
  biblical: string[];
  celebration: string[];
  effects: string[];
  who: string;
  preparation: string[];
  teaching: string[];
  ccc: string[];
}

export interface Saint {
  id: string;
  name: string;
  feast: string;
  dates: string;
  vocation: string;
  period: string;
  patronage: string[];
  biography: string[];
  background: string;
  virtues: string[];
  events: string[];
  writings: string;
  prayer: string;
  remembered: string;
  image?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string[];
  category: string;
  scripture?: string;
  ccc?: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  link?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
}

export interface SearchItem {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
  keywords?: string;
}

export interface ChurchResult {
  name: string;
  address: string;
  website?: string;
  phone?: string;
  note: string;
}
