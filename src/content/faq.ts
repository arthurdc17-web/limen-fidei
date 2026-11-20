import type { FAQ } from './types';

export const faqCategories = ['All', 'Mass & Worship', 'Mary & Saints', 'Sin & Confession', 'Bible & Teaching', 'Becoming Catholic'];

export const faqs: FAQ[] = [
  {
    id: 'sunday-worship', category: 'Mass & Worship', question: 'Why do Catholics worship on Sunday?',
    answer: [
      'Catholics keep Sunday as the Lord’s Day because Jesus rose from the dead on the first day of the week. The practice goes back to the apostles; the Book of Acts describes the disciples gathering “on the first day of the week” to break bread (Acts 20:7).',
      'The Old Testament Sabbath (Saturday) was fulfilled in Christ. Christians did not simply transfer the Sabbath laws to Sunday: Sunday celebrates the new creation begun in the Resurrection. God’s people still need a day of rest, worship, and mercy.',
      'The Catechism teaches that Sunday Mass is the centre of the Christian life and that the faithful have an obligation to participate unless prevented by a serious reason (CCC 2175–2181).',
    ],
    scripture: 'Acts 20:7; Revelation 1:10', ccc: 'CCC 2174–2181',
  },
  {
    id: 'pray-to-mary', category: 'Mary & Saints', question: 'Why do Catholics pray to Mary?',
    answer: [
      'Catholics do not worship Mary. Worship (adoration) belongs to God alone. When Catholics “pray to Mary,” they are asking her to intercede — to pray to God on their behalf, as a holy mother and friend.',
      'Mary is honoured because she is the Mother of God: the child she bore is the eternal Son of God made man. She is also the first disciple and a model of faith and obedience. The Hail Mary begins with the Bible’s own words to her (Luke 1:28, 42).',
      'Asking for Mary’s prayers does not replace prayer to God. Every Catholic prayer is ultimately addressed to the Father, through Christ, in the Holy Spirit.',
    ],
    scripture: 'Luke 1:26–56; John 2:1–11', ccc: 'CCC 963–975',
  },
  {
    id: 'pray-to-saints', category: 'Mary & Saints', question: 'Why do Catholics pray to saints?',
    answer: [
      'Catholics believe the saints are alive in God and able to intercede for us. This follows from the “communion of saints”: death does not cut us off from the family of Christ.',
      'Asking a saint for their prayers is like asking a trusted friend to pray for you. The saint has no power of his or her own; all grace comes from God through Christ.',
      'The Church distinguishes veneration (honour given to a holy person) from adoration (worship due to God alone).',
    ],
    scripture: 'Revelation 5:8; James 5:16; Hebrews 12:1', ccc: 'CCC 954–962',
  },
  {
    id: 'confess-to-priest', category: 'Sin & Confession', question: 'Why do Catholics confess to priests?',
    answer: [
      'Catholics believe Jesus gave the apostles and their successors the ministry of forgiving sins: “If you forgive the sins of any, they are forgiven them” (John 20:23). In confession, the priest acts as a minister of Christ and of the Church.',
      'Confessing aloud to another person also brings sin into the light, helps us take responsibility, and allows the priest to offer wise counsel. The priest is strictly bound never to reveal what he hears.',
      'God can forgive sin without confession — but Christ chose to give us this sacrament as the ordinary, visible way of receiving his mercy after Baptism.',
    ],
    scripture: 'John 20:19–23; Matthew 16:19', ccc: 'CCC 1420–1498',
  },
  {
    id: 'statues', category: 'Mary & Saints', question: 'Why do Catholics have statues?',
    answer: [
      'Statues and images remind us of the people and mysteries of the faith. They are not gods and are not worshipped. Catholics honour the person represented, not the material object.',
      'The Second Council of Nicaea (787) taught that the honour shown to an image passes to its prototype — the person depicted. This is the same principle behind flags and photographs of loved ones.',
      'The Second Commandment forbids making an image to worship as God. The Church has always rejected idolatry while defending the legitimate use of sacred art.',
    ],
    scripture: 'Exodus 20:4–5; Colossians 1:15', ccc: 'CCC 2131–2132',
  },
  {
    id: 'kneel', category: 'Mass & Worship', question: 'Why do Catholics kneel?',
    answer: [
      'Kneeling is a ancient gesture of respect, humility, and adoration. In Mass, Catholics kneel especially during the Eucharistic Prayer, because Christ is truly present in the Eucharist.',
      'Some people kneel when entering a church to honour the reserved Blessed Sacrament in the tabernacle. If kneeling is difficult, a bow is an appropriate alternative.',
      'Practices vary: in some parishes and seasons everyone stands; in others people kneel for longer. Follow the custom of the parish.',
    ],
    ccc: 'CCC 1378',
  },
  {
    id: 'incense', category: 'Mass & Worship', question: 'Why do Catholics use incense?',
    answer: [
      'Incense is used in the Bible as a sign of prayer ascending to God and of the honour due to God’s presence (see Psalm 141:2 and Revelation 5:8). In the liturgy it also marks the altar, the Gospel book, the gifts, and the people as sacred.',
      'The smoke rising and spreading is a powerful image of prayer and of God’s blessing filling the assembly.',
      'The use of incense is a matter of liturgical custom and is more common on solemnities and in the older form of the Mass.',
    ],
    scripture: 'Psalm 141:2; Revelation 5:8', ccc: 'CCC 1189',
  },
  {
    id: 'real-presence', category: 'Mass & Worship', question: 'Why do Catholics believe in the Real Presence?',
    answer: [
      'At the Last Supper Jesus said over the bread, “This is my Body,” and over the cup, “This is my Blood” (Mark 14:22–24). St Paul warns that receiving the Eucharist unworthily is an offence against “the Body and Blood of the Lord” (1 Corinthians 11:27).',
      'The Church has believed from the beginning that the Eucharist is not merely a symbol. The change is called transubstantiation: the substance of bread and wine becomes Christ’s Body and Blood while the appearances remain.',
      'This is a mystery of faith. Catholics do not claim to explain how it happens mechanically; they trust Christ’s words and the Church’s witness.',
    ],
    scripture: 'Mark 14:22–24; John 6:51–58; 1 Corinthians 10–11', ccc: 'CCC 1373–1381',
  },
  {
    id: 'pope', category: 'Bible & Teaching', question: 'Why do Catholics have a Pope?',
    answer: [
      'Catholics believe Christ gave St Peter a unique role among the apostles: “You are Peter, and on this rock I will build my Church” (Matthew 16:18), and “Feed my sheep” (John 21:17). The Pope is understood as Peter’s successor in the see of Rome.',
      'His purpose is unity: to keep the bishops and the faithful one in faith and sacraments. This service is pastoral, not monarchical in the secular sense.',
      'The Pope can be wrong in ordinary conversation or judgements; the Church teaches defined papal infallibility only under very specific conditions.',
    ],
    scripture: 'Matthew 16:18–19; John 21:15–17; Luke 22:31–32', ccc: 'CCC 880–887',
  },
  {
    id: 'non-catholics-mass', category: 'Mass & Worship', question: 'Can non-Catholics attend Mass?',
    answer: [
      'Yes. All are welcome to attend Catholic Mass. If you are visiting for the first time, you do not need to know what to do — sit, stand, and kneel with the congregation as you feel comfortable, or simply observe.',
      'It is courteous to arrive before Mass begins and to stand when the congregation stands for the Gospel. Dress modestly and turn off your phone.',
      'You are not expected to receive Communion. You are welcome to remain in your place and pray.',
    ],
  },
  {
    id: 'non-catholics-communion', category: 'Mass & Worship', question: 'Can non-Catholics receive Communion?',
    answer: [
      'In general, no. Catholic teaching reserves Holy Communion for Catholics who are in full communion with the Church and properly disposed. The reason is that Communion is a sign of unity in faith and sacraments, not a statement that outsiders are unwelcome.',
      'There are narrow exceptions: members of Eastern Orthodox churches may receive under certain conditions, and in danger of death a non-Catholic may receive if they share the Catholic faith in the Eucharist. A priest can explain the discipline.',
      'If you are not receiving, remain in your pew or kneel and pray. Nobody will think badly of you. Many people who are not yet Catholic still feel moved by the invocation “Behold the Lamb of God.”',
    ],
    ccc: 'CCC 1400–1401',
  },
  {
    id: 'bibles', category: 'Bible & Teaching', question: 'What is the difference between Catholic and Protestant Bibles?',
    answer: [
      'Both contain the same New Testament (27 books). The Catholic Old Testament has 46 books, while most Protestant Bibles have 39. The additional seven books are called deuterocanonical by Catholics and “Apocrypha” by many Protestants: Tobit, Judith, Wisdom, Sirach, Baruch, and 1 and 2 Maccabees, plus additions to Daniel and Esther.',
      'The Catholic canon was affirmed by the Councils of Hippo, Carthage, and Trent. The Reformers adopted the shorter Hebrew canon in the sixteenth century.',
      'Catholics also use translations that follow the Hebrew and Greek texts and include footnotes from Catholic scholarship, such as the New American Bible Revised Edition (NABRE).',
    ],
    ccc: 'CCC 120–127',
  },
  {
    id: 'purgatory', category: 'Bible & Teaching', question: 'Why do Catholics believe in Purgatory?',
    answer: [
      'Purgatory is a state of purification after death for those who die in God’s grace but are not yet fully free from sin’s effects. It is not a “second chance” or a place of punishment apart from God’s mercy.',
      'The belief rests on God’s justice and holiness: nothing imperfect can enter heaven, and many people die with unfinished love. The practice of praying for the dead is ancient — see 2 Maccabees 12:42–46 and 2 Timothy 1:16–18.',
      'The Council of Trent defined the doctrine, and the Catechism teaches that the faithful on earth can help the souls in purgatory by prayer, almsgiving, and the Mass.',
    ],
    scripture: '2 Maccabees 12:42–46; 1 Corinthians 3:15', ccc: 'CCC 1030–1032',
  },
  {
    id: 'baptism-again', category: 'Becoming Catholic', question: 'Can someone become Catholic without being baptized again?',
    answer: [
      'Yes. The Catholic Church recognises Baptism performed with water in the name of the Father, and of the Son, and of the Holy Spirit, even when administered by another Christian community. It is never repeated.',
      'A person who has already been validly baptised is received into the Catholic Church through a liturgy of reception: profession of faith, Confirmation, and First Holy Communion.',
      'Only an unbaptised person is baptised in the full OCIA rite at the Easter Vigil. A priest or OCIA director can determine the correct path after reviewing the circumstances.',
    ],
    ccc: 'CCC 1271',
  },
  {
    id: 'mortal-venial', category: 'Sin & Confession', question: 'What is the difference between mortal and venial sin?',
    answer: [
      'A mortal sin is a grave sin committed with full knowledge and deliberate consent. It destroys the life of grace in the soul and requires confession for forgiveness.',
      'A venial sin is a less serious failure, or a grave sin committed without full knowledge or consent. It weakens but does not destroy grace.',
      'Jesus warns seriously about sin not to frighten us, but because he loves us and knows what damages us. God’s mercy is always available to the genuinely repentant.',
    ],
    ccc: 'CCC 1854–1864',
  },
  {
    id: 'missed-mass', category: 'Mass & Worship', question: 'What happens if someone misses Sunday Mass?',
    answer: [
      'Catholics are obliged to participate in Mass on Sundays and Holy Days of Obligation, unless excused by illness, care of others, or another serious reason. Missing Mass through laziness or carelessness is a sin.',
      'The obligation is not a tax or a test of membership: Sunday Mass is where the Church gathers to hear God’s word and receive the Eucharist. The Church asks us to be present because the relationship matters.',
      'If you have missed Mass and feel troubled, speak to a priest in confession. If you have been away for a long time, there is no need to be afraid: the Church wants to welcome you back.',
    ],
    ccc: 'CCC 2175–2181',
  },
  {
    id: 'holy-day', category: 'Mass & Worship', question: 'What is a Holy Day of Obligation?',
    answer: [
      'A Holy Day of Obligation is a day on which Catholics are required to attend Mass, in addition to Sundays. The list varies by country and is set by the Church’s universal law together with local episcopal conferences.',
      'In the United States, the principal holy days are the Immaculate Conception (8 December), Christmas (25 December), the Solemnity of Mary (1 January), Ascension (a Thursday or Sunday), the Assumption (15 August), and All Saints’ Day (1 November).',
      'Check with your local parish or diocese, because some solemnities are transferred to Sunday in particular regions.',
    ],
    ccc: 'CCC 2177–2181',
  },
];

export const getFaq = (id: string) => faqs.find((f) => f.id === id);
