import { saints } from './saints';
import { prayers } from './prayers';
import { getPrayer } from './prayers';
import { seasonForDate } from '@/lib/liturgical';

export interface FeaturedReading {
  reference: string;
  text: string;
  reflection: string;
}

/** Verified Scripture excerpts used as suggested reflections (not the official daily lectionary). */
export const featuredReadings: FeaturedReading[] = [
  { reference: 'John 15:12', text: '“This is my commandment: love one another as I love you.”', reflection: 'Christ does not ask for vague goodwill. He asks for a love shaped by his own — practical, patient, and sacrificial.' },
  { reference: 'Matthew 6:33', text: '“Seek first the kingdom of God and his righteousness, and all these things will be given you besides.”', reflection: 'Our anxieties often reveal what we are seeking first. Today, put God’s reign back at the centre.' },
  { reference: 'Philippians 4:6–7', text: '“Do not worry about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.”', reflection: 'Thanksgiving changes the shape of worry. Name one gift before you name one fear.' },
  { reference: 'Luke 15:20', text: '“While he was still a long way off, his father saw him and was moved with compassion.”', reflection: 'The Father sees you coming home. There is no distance he will not cross to welcome a repentant child.' },
  { reference: 'Proverbs 3:5–6', text: '“Trust in the Lord with all your heart, and do not rely on your own insight.”', reflection: 'Trust is not the absence of thought; it is the decision to let God be God when our understanding runs out.' },
  { reference: 'Romans 8:38–39', text: '“Neither death, nor life, nor angels, nor principalities… will be able to separate us from the love of God in Christ Jesus our Lord.”', reflection: 'Nothing you face today lies outside the reach of God’s love in Christ.' },
  { reference: 'Mark 10:45', text: '“The Son of Man did not come to be served but to serve, and to give his life as a ransom for many.”', reflection: 'In the Kingdom, greatness is measured by service. Whom can you serve today, quietly and without applause?' },
  { reference: 'Psalm 23:1', text: '“The Lord is my shepherd; there is nothing I shall want.”', reflection: 'To say the Lord is my shepherd is to admit that I need guidance, provision, and protection.' },
  { reference: 'James 1:17', text: '“Every good gift and every perfect present comes from above, coming down from the Father of lights.”', reflection: 'Receive today as gift. Gratitude is the simplest form of prayer.' },
  { reference: 'Micah 6:8', text: '“You have been told, O man, what is good, and what the Lord requires of you: only to do the right and to love goodness, and to walk humbly with your God.”', reflection: 'God’s demand is surprisingly simple and amazingly demanding: justice, mercy, humility.' },
  { reference: 'John 14:27', text: '“Peace I leave with you; my peace I give to you. Not as the world gives do I give it to you.”', reflection: 'Christ’s peace is not the absence of trouble but the presence of God in the middle of it.' },
  { reference: 'Colossians 3:12', text: '“Put on then, as God’s chosen ones, holy and beloved, heartfelt compassion, kindness, humility, gentleness, and patience.”', reflection: 'The Christian life is a matter of what we “put on” each morning by grace.' },
];

export const dailyPrayerIds = [
  'morning-prayer', 'morning-offering', 'st-michael', 'memorare', 'anima-christi', 'evening-prayer', 'come-holy-spirit',
];

export interface DailyContent {
  date: Date;
  season: ReturnType<typeof seasonForDate>;
  saint: typeof saints[number];
  saintIsFeast: boolean;
  reading: FeaturedReading;
  prayer: NonNullable<ReturnType<typeof getPrayer>>;
  usccbReadingsUrl: string;
}

export function dailyContent(date = new Date()): DailyContent {
  const feast = saints.find((s) => {
    const parts = s.feast.match(/(\d{1,2})\s+(\w+)/);
    if (!parts) return false;
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const m = months.indexOf(parts[2]) + 1;
    return m === date.getMonth() + 1 && Number(parts[1]) === date.getDate();
  });
  const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000);
  const saint = feast || saints[dayOfYear % saints.length];
  const reading = featuredReadings[dayOfYear % featuredReadings.length];
  const prayer = getPrayer(dailyPrayerIds[dayOfYear % dailyPrayerIds.length])!;
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return {
    date,
    season: seasonForDate(date),
    saint,
    saintIsFeast: Boolean(feast),
    reading,
    prayer,
    usccbReadingsUrl: `https://bible.usccb.org/bible/readings/${m}${d}${y}.cfm`,
  };
}

export const featuredTeaching = {
  title: 'The Real Presence',
  summary: 'Catholics believe that in the Eucharist, Christ is present truly, really, and substantially — body, blood, soul, and divinity — under the appearances of bread and wine.',
  href: '/teachings',
  ccc: 'CCC 1373–1381',
};

export const allPrayerCount = prayers.length;
