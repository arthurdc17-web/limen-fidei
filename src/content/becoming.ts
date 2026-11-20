export const ociaStages = [
  {
    id: 'inquiry', number: 1, title: 'Inquiry',
    purpose: 'Getting to know the Church and asking honest questions.',
    points: [
      'You meet the priest or OCIA director and share your story — no prior knowledge required.',
      'You are free to ask anything, including difficult questions. Nothing is off limits.',
      'You learn the basics: who Jesus is, what Catholics believe, and what happens at Mass.',
      'You may attend Mass and parish events to see the community firsthand.',
      'There is no commitment at this stage. You are simply exploring.',
    ],
    note: 'Inquiry can last a few weeks or much longer. Everyone begins at their own pace.',
  },
  {
    id: 'catechumenate', number: 2, title: 'Catechumenate',
    purpose: 'A period of formation in faith, Scripture, prayer, and Christian living.',
    points: [
      'Catechesis explains the Creed, the sacraments, prayer, moral life, and the Church.',
      'You hear Scripture proclaimed and learn how to read it in the Church.',
      'You begin to pray, to fast, and to serve others — not as a test, but as training in discipleship.',
      'The community supports you with sponsors, prayer, and celebration of the Word of God.',
      'The length varies according to the person and the diocese; it is often, but not always, about a year.',
    ],
    note: 'This is a time of conversion, not merely a class. It involves the whole person: mind, heart, and habits.',
  },
  {
    id: 'purification', number: 3, title: 'Purification and Enlightenment',
    purpose: 'The final weeks of prayer and self-examination before the Easter sacraments.',
    points: [
      'Traditionally this coincides with the season of Lent.',
      'You examine your life more deeply and make a sincere act of repentance.',
      'The community prays for you through the Scrutinies — prayers of healing and deliverance.',
      'You learn the rites you will celebrate at the Easter Vigil.',
      'You celebrate the Sacrament of Penance before receiving the Easter sacraments.',
    ],
    note: 'The Scrutinies are not dramatic exorcisms; they are solemn prayers for freedom from sin and strengthening in faith.',
  },
  {
    id: 'sacraments', number: 4, title: 'Sacraments of Initiation',
    purpose: 'Baptism (where needed), Confirmation, and First Holy Communion.',
    points: [
      'For the unbaptised: Baptism at the Easter Vigil, followed immediately by Confirmation and First Communion.',
      'For those already validly baptised: a Liturgy of Reception, profession of faith, Confirmation, and First Communion.',
      'The parish community gathers to rejoice with you — this is a public, family celebration.',
      'You are now a full member of the Catholic Church, with a place at the table of the Eucharist.',
    ],
    note: 'The Easter Vigil is the oldest and most beautiful setting for initiation, but other times are possible for good reasons.',
  },
  {
    id: 'mystagogy', number: 5, title: 'Mystagogy',
    purpose: 'Understanding and living what you have received.',
    points: [
      'Mystagogy means “instruction in the mysteries.” It is the period after initiation, traditionally the seven weeks of Easter.',
      'You reflect on the sacraments you received and on your experience of the Easter Vigil.',
      'You learn how to pray, how to receive the Eucharist, and how to live as a Catholic in ordinary life.',
      'You are invited into parish life: a ministry, a small group, or service to others.',
      'You are no longer a guest — you belong.',
    ],
    note: 'Formation does not end at the Easter Vigil. Christian life is a lifelong journey.',
  },
];

export const situations = [
  {
    id: 'unbaptized', title: 'I have never been baptised',
    body: 'You will be baptised in the Easter Vigil if you complete the OCIA process. Baptism washes away original sin and all personal sin, gives you the life of God, and makes you a member of the Church. You will then be confirmed and receive your first Holy Communion in the same liturgy.',
    key: 'Full OCIA → Baptism, Confirmation, First Communion at the Easter Vigil.',
  },
  {
    id: 'protestant', title: 'I was baptised in a Protestant church',
    body: 'The Catholic Church recognises Baptism performed with water in the name of the Father, Son, and Holy Spirit. You will not be baptised again. After a period of catechesis and a profession of faith, you will be received into the Catholic Church, confirmed, and receive First Holy Communion.',
    key: 'No rebaptism → Reception, Confirmation, First Communion.',
  },
  {
    id: 'orthodox', title: 'I am Eastern Orthodox',
    body: 'The Orthodox Churches have valid sacraments and apostolic succession. An Orthodox Christian entering full communion with the Catholic Church is received by a profession of faith; no rebaptism or re-ordination occurs. The exact liturgical form depends on the person’s background and the norms of the receiving Church.',
    key: 'Full communion by profession of faith; sacraments are recognised.',
  },
  {
    id: 'incomplete-initiation', title: 'I was baptised Catholic but never received First Communion or Confirmation',
    body: 'You are already Catholic. You do not need to enter OCIA as an unbaptised person, but you do need preparation. Speak with a priest: he will arrange catechesis for First Holy Communion and Confirmation, often through the parish’s religious education or a local programme.',
    key: 'You belong already; the remaining sacraments are received with preparation.',
  },
  {
    id: 'returning', title: 'I am returning to the Church after time away',
    body: 'You are welcome. There is no waiting period and no need to be embarrassed. Go to Mass, contact the parish office, and speak to a priest. The Sacrament of Penance (Confession) is the ordinary way to be reconciled, especially if you have been away for a long time. If you received Confirmation and First Communion, you simply resume participating in parish life.',
    key: 'A warm welcome, confession if you wish, and a fresh start.',
  },
];

export const beginnerChecklist = [
  { label: 'Attend Mass at a local Catholic parish (you are welcome as a visitor).', done: false },
  { label: 'Call or email the parish office and ask about OCIA.', done: false },
  { label: 'Ask whether the parish has an OCIA director and when the next inquiry begins.', done: false },
  { label: 'Explain your baptism history: date, place, and which church community.', done: false },
  { label: 'Ask which path applies to your situation (baptism, reception, or confirmation).', done: false },
  { label: 'Get a Catholic Bible (NABRE or a Catholic study Bible) or use bible.usccb.org.', done: false },
  { label: 'Learn the Sign of the Cross, Our Father, Hail Mary, and Glory Be.', done: false },
  { label: 'Read the Beginner’s Guide lessons 1–3.', done: false },
  { label: 'Visit the parish website and check Mass and confession times.', done: false },
  { label: 'Ask a priest or OCIA director any question — no question is too basic.', done: false },
];

export const firstMassTips = [
  'Arrive 10–15 minutes early so you can find a seat and settle in.',
  'You do not need to dress formally; modest, clean clothing is respectful.',
  'Dip your fingers in holy water and make the Sign of the Cross if you wish.',
  'Stand, sit, and kneel with the congregation — but do not worry if you miss a cue.',
  'You do not have to receive Communion. Stay in your place and pray.',
  'Pick up a missalette from the pew to follow the responses.',
  'Nobody is checking whether you know what to do. Most people are simply glad you are there.',
];
