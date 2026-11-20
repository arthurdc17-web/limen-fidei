export type SeasonKey = 'Advent' | 'Christmas' | 'Ordinary' | 'Lent' | 'Holy Week' | 'Easter' | 'Triduum';

export interface SeasonInfo {
  key: SeasonKey;
  name: string;
  color: string;
  description: string;
  start: Date;
  end: Date;
}

const sundayBefore = (date: Date) => {
  const d = new Date(date);
  d.setDate(d.getDate() - d.getDay());
  return d;
};
const sundayAfter = (date: Date) => {
  const d = new Date(date);
  d.setDate(d.getDate() + (7 - d.getDay()) % 7);
  return d;
};

/** Computes the Gregorian date of Easter using the Meeus/Jones/Butcher algorithm. */
export function easterSunday(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

export function liturgicalCalendar(year: number) {
  const easter = easterSunday(year);
  const ashWednesday = new Date(easter); ashWednesday.setDate(easter.getDate() - 46);
  const palmSunday = new Date(easter); palmSunday.setDate(easter.getDate() - 7);
  const holyThursday = new Date(easter); holyThursday.setDate(easter.getDate() - 3);
  const goodFriday = new Date(easter); goodFriday.setDate(easter.getDate() - 2);
  const holySaturday = new Date(easter); holySaturday.setDate(easter.getDate() - 1);
  const pentecost = new Date(easter); pentecost.setDate(easter.getDate() + 49);
  const baptismOfLord = sundayAfter(new Date(year, 0, 6));
  const adventStart = sundayBefore(new Date(year, 10, 30));
  const nextAdventStart = sundayBefore(new Date(year + 1, 10, 30));

  return { easter, ashWednesday, palmSunday, holyThursday, goodFriday, holySaturday, pentecost, baptismOfLord, adventStart, nextAdventStart };
}

export function seasonForDate(date: Date): SeasonInfo {
  const year = date.getFullYear();
  const c = liturgicalCalendar(year);
  const t = date.getTime();
  const mk = (key: SeasonKey, name: string, color: string, description: string, start: Date, end: Date): SeasonInfo => ({ key, name, color, description, start, end });

  if (t >= c.adventStart.getTime() && t <= new Date(year, 11, 24).getTime())
    return mk('Advent', 'Advent', 'Violet', 'A season of hopeful waiting and preparation for the coming of Christ. The word comes from the Latin adventus, “coming.”', c.adventStart, new Date(year, 11, 24));
  if (t >= new Date(year, 11, 25).getTime())
    return mk('Christmas', 'Christmas', 'White', 'We celebrate the Incarnation — God becoming man in Christ — and the manifestation of God’s saving love to the world.', new Date(year, 11, 25), c.baptismOfLord);
  if (t >= new Date(year, 0, 1).getTime() && t <= c.baptismOfLord.getTime())
    return mk('Christmas', 'Christmas', 'White', 'We celebrate the Incarnation — God becoming man in Christ — and the manifestation of God’s saving love to the world.', new Date(year, 0, 1), c.baptismOfLord);
  if (t >= c.holyThursday.getTime() && t <= c.easter.getTime())
    return mk('Triduum', 'The Sacred Triduum', 'Red / White', 'The three holiest days of the year: the Mass of the Lord’s Supper, Good Friday, and the Easter Vigil. The Church enters the paschal mystery of Christ.', c.holyThursday, c.easter);
  if (t >= c.palmSunday.getTime() && t < c.holyThursday.getTime())
    return mk('Holy Week', 'Holy Week', 'Red', 'The final week of Lent, recalling Christ’s entry into Jerusalem, his Passion, and his death for our salvation.', c.palmSunday, c.holyThursday);
  if (t >= c.ashWednesday.getTime() && t < c.palmSunday.getTime())
    return mk('Lent', 'Lent', 'Violet', 'A forty-day season of prayer, fasting, almsgiving, and repentance, preparing us for the joy of Easter.', c.ashWednesday, c.palmSunday);
  if (t > c.pentecost.getTime() && t < c.adventStart.getTime())
    return mk('Ordinary', 'Ordinary Time', 'Green', 'The longest season of the year, when the Church grows in faith and discipleship. “Ordinary” means “numbered,” not “unimportant.”', new Date(c.pentecost), c.adventStart);
  if (t > c.baptismOfLord.getTime() && t < c.ashWednesday.getTime())
    return mk('Ordinary', 'Ordinary Time', 'Green', 'The weeks after Christmas focus on the public ministry of Jesus and the beginning of his mission.', c.baptismOfLord, c.ashWednesday);
  if (t > c.easter.getTime() && t <= c.pentecost.getTime())
    return mk('Easter', 'Easter', 'White', 'The fifty days of joy celebrating the Resurrection, the Ascension, and the outpouring of the Holy Spirit at Pentecost.', c.easter, c.pentecost);
  return mk('Ordinary', 'Ordinary Time', 'Green', 'The Church lives the mystery of Christ in the ordinary rhythm of everyday life.', new Date(year, 0, 1), new Date(year, 11, 31));
}

export const formatDate = (d: Date, opts?: Intl.DateTimeFormatOptions) =>
  d.toLocaleDateString('en-US', opts || { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

export function holyDays(year: number) {
  const c = liturgicalCalendar(year);
  const ascension = new Date(c.easter); ascension.setDate(c.easter.getDate() + 39);
  return [
    { name: 'Solemnity of Mary, Mother of God', date: new Date(year, 0, 1), universal: true, note: 'Octave of Christmas; in some countries transferred to Sunday.' },
    { name: 'Epiphany', date: new Date(year, 0, 6), universal: true, note: 'In the US, transferred to the Sunday between 2 and 8 January.' },
    { name: 'Baptism of the Lord', date: c.baptismOfLord, universal: true, note: 'End of the Christmas season.' },
    { name: 'Ash Wednesday', date: c.ashWednesday, universal: true, note: 'Beginning of Lent; a day of fasting and abstinence.' },
    { name: 'Palm Sunday', date: c.palmSunday, universal: true, note: 'Beginning of Holy Week.' },
    { name: 'Holy Thursday', date: c.holyThursday, universal: true, note: 'Mass of the Lord’s Supper.' },
    { name: 'Good Friday', date: c.goodFriday, universal: true, note: 'Day of fasting and abstinence; Passion liturgy.' },
    { name: 'Holy Saturday', date: c.holySaturday, universal: true, note: 'Easter Vigil after nightfall.' },
    { name: 'Easter Sunday', date: c.easter, universal: true, note: 'The Resurrection of the Lord — the greatest feast of the year.' },
    { name: 'Ascension', date: ascension, universal: true, note: 'Transferred to the seventh Sunday of Easter in many dioceses, including most of the US.' },
    { name: 'Pentecost', date: c.pentecost, universal: true, note: 'Outpouring of the Holy Spirit; end of Eastertide.' },
    { name: 'Immaculate Conception', date: new Date(year, 11, 8), universal: true, note: 'Holy Day of Obligation in many countries, including the US.' },
    { name: 'Christmas Day', date: new Date(year, 11, 25), universal: true, note: 'The Nativity of the Lord.' },
    { name: 'St Stephen, First Martyr', date: new Date(year, 11, 26), universal: true, note: 'Feast.' },
    { name: 'Holy Innocents', date: new Date(year, 11, 28), universal: true, note: 'Feast.' },
  ];
}

export const liturgicalSeasonNotes = [
  { name: 'Advent', meaning: 'Waiting and preparation for Christ’s coming — both his birth at Bethlehem and his return in glory.', color: 'Violet', practices: ['Advent wreath', 'Daily Scripture reading', 'Penitential fasting in some traditions'] },
  { name: 'Christmas', meaning: 'Celebration of the Incarnation and the birth of Christ; the season of God’s gift to the world.', color: 'White', practices: ['Midnight Mass or Christmas Mass', 'Family prayer', 'Carols and crèche'] },
  { name: 'Ordinary Time', meaning: 'The numbered weeks of the year, devoted to the ministry of Christ and the growth of the Church.', color: 'Green', practices: ['Sunday Mass', 'Lectio divina', 'Works of mercy'] },
  { name: 'Lent', meaning: 'Forty days of conversion, prayer, fasting, and almsgiving, looking toward Easter.', color: 'Violet', practices: ['Fasting and abstinence', 'Stations of the Cross', 'Confession', 'Almsgiving'] },
  { name: 'Holy Week', meaning: 'The commemoration of Christ’s Passion, death, and the mysteries that bring us to Easter.', color: 'Red', practices: ['Palm Sunday procession', 'Tenebrae', 'Stations of the Cross'] },
  { name: 'Easter', meaning: 'The fifty days of joy after the Resurrection, including the Ascension and Pentecost.', color: 'White', practices: ['Easter Vigil', 'Alleluia returns to the liturgy', 'Pentecost prayer to the Holy Spirit'] },
];
