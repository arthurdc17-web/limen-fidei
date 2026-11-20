export interface SourceGroup {
  title: string;
  description: string;
  items: { name: string; url: string; note: string }[];
}

export const sourceGroups: SourceGroup[] = [
  {
    title: 'Scripture',
    description: 'Catholic Companion uses the New American Bible, Revised Edition (NABRE) for Scripture quotations unless otherwise indicated.',
    items: [
      { name: 'USCCB — The Holy Bible (NABRE)', url: 'https://bible.usccb.org/', note: 'Free official Catholic Bible text and daily readings.' },
      { name: 'USCCB — Daily Readings', url: 'https://bible.usccb.org/bible/readings', note: 'The official lectionary readings for each day.' },
    ],
  },
  {
    title: 'Catechism and Holy See',
    description: 'The Catechism of the Catholic Church is the primary reference for doctrinal summaries throughout this site.',
    items: [
      { name: 'Catechism of the Catholic Church (English)', url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM', note: 'Second Edition, including the revisions to the Catechism.' },
      { name: 'The Holy See', url: 'https://www.vatican.va/', note: 'Papal encyclicals, apostolic exhortations, and conciliar documents.' },
      { name: 'Dei Verbum — Dogmatic Constitution on Divine Revelation', url: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_en.html', note: 'Scripture, Tradition, and the Magisterium.' },
      { name: 'Sacrosanctum Concilium — Constitution on the Sacred Liturgy', url: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_en.html', note: 'The liturgical reforms of Vatican II.' },
      { name: 'Summorum Pontificum and subsequent norms', url: 'https://www.vatican.va/', note: 'For questions about the celebration of the Extraordinary Form.' },
    ],
  },
  {
    title: 'Bishops and liturgical documents',
    description: 'National bishops’ conferences provide practical guidance for local practice.',
    items: [
      { name: 'USCCB — Prayers and Devotions', url: 'https://www.usccb.org/prayer-and-worship/prayers-and-devotions', note: 'Approved texts of common Catholic prayers.' },
      { name: 'USCCB — Catholic Social Teaching', url: 'https://www.usccb.org/issues-and-action/catholic-social-teaching', note: 'Themes and documents of Catholic social doctrine.' },
      { name: 'USCCB — Order of Christian Initiation of Adults', url: 'https://www.usccb.org/', note: 'Diocesan norms and formation resources.' },
      { name: 'Roman Missal, Third Edition (USCCB)', url: 'https://www.usccb.org/prayer-and-worship/the-mass/order-of-mass', note: 'The texts and rubrics of the Mass in the United States.' },
    ],
  },
  {
    title: 'Historical and spiritual writers',
    description: 'Writings of saints and Doctors of the Church used for meditations and philosophical background.',
    items: [
      { name: 'St Thomas Aquinas — Summa Theologiae', url: 'https://www.newadvent.org/summa/', note: 'Classic synthesis of theology and philosophy.' },
      { name: 'St Augustine — Confessions', url: 'https://www.newadvent.org/fathers/1101.htm', note: 'Autobiography and spiritual classic.' },
      { name: 'St Thérèse of Lisieux — The Story of a Soul', url: 'https://www.vatican.va/', note: 'Her autobiography and the “little way.”' },
      { name: 'St John Paul II — Rosarium Virginis Mariae', url: 'https://www.vatican.va/holy_father/john_paul_ii/apost_letters/documents/hf_jp-ii_apl_20021016_rosarium-virginis-mariae_en.html', note: 'The Luminous Mysteries and the Rosary.' },
    ],
  },
  {
    title: 'Photography',
    description: 'Photographs used on this site are sourced from Wikimedia Commons. Individual licence terms and author credits are available on each file page.',
    items: [
      { name: 'Wikimedia Commons — Categories', url: 'https://commons.wikimedia.org/wiki/Category:Catholicism', note: 'Images of churches, sacred art, liturgical objects, and saints.' },
    ],
  },
];

export const doctrinalNotes = [
  {
    title: 'Defined dogma',
    text: 'A truth revealed by God and solemnly defined by the Church (for example, the Assumption of Mary). The faithful are obliged to assent to defined dogmas.',
  },
  {
    title: 'Doctrine',
    text: 'A teaching of the Church that is authoritative but not solemnly defined as dogma. It still requires religious submission of mind and will.',
  },
  {
    title: 'Discipline',
    text: 'A Church rule or practice that can change (for example, the Friday abstinence law or the form of the Mass). Discipline is not the same as doctrine.',
  },
  {
    title: 'Theological opinion',
    text: 'A plausible explanation that is not definitively taught. Theologians may disagree on these questions in good faith.',
  },
  {
    title: 'Private devotion',
    text: 'A spiritual practice recommended by a saint, a visionary, or popular tradition. It is not required of the faithful, even if approved.',
  },
];

export const accuracyNote = 'This website is an educational resource. Where a practice varies by culture, parish, or diocese, we say so. Where a question is disputed among theologians, we identify it as such rather than presenting one opinion as definitive. For personal pastoral guidance, consult your parish priest.';
