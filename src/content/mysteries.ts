import type { Mystery, MysterySet } from './types';
import { getPrayer } from './prayers';

export type { MysterySet } from './types';

export const mysteries: Mystery[] = [
  // JOYFUL
  {
    id: 'joyful-1', set: 'Joyful', number: 1, title: 'The Annunciation',
    explanation: 'The angel Gabriel is sent to Mary in Nazareth, greeting her as “full of grace” and telling her that she will conceive a son who will be called the Son of the Most High. Mary asks how this can be, and the angel explains that the Holy Spirit will come upon her. Her reply — “Behold, I am the handmaid of the Lord; let it be to me according to your word” — is the model of Christian obedience.',
    scripture: 'Luke 1:26–38 — “And Mary said, Behold, I am the handmaid of the Lord; let it be to me according to your word.”',
    meditation: 'Where in my life am I being invited to say “yes” to God, even though I do not understand the whole plan? What would it cost me to trust him?',
    intention: 'For openness to God’s will and for the courage to say yes to him.',
  },
  {
    id: 'joyful-2', set: 'Joyful', number: 2, title: 'The Visitation',
    explanation: 'Mary travels to the hill country of Judah to visit her cousin Elizabeth, who is pregnant with John the Baptist. When Mary greets her, Elizabeth’s baby leaps in her womb and she is filled with the Holy Spirit, calling Mary “the mother of my Lord.” Mary responds with the Magnificat, a hymn of praise that rejoices in God’s goodness to the lowly.',
    scripture: 'Luke 1:39–56 — “My soul magnifies the Lord, and my spirit rejoices in God my Savior.”',
    meditation: 'Do I bring Christ to others simply by my presence? How can I be a source of joy and encouragement to someone this week?',
    intention: 'For families, for expectant mothers, and for the grace to bring Christ to those we meet.',
  },
  {
    id: 'joyful-3', set: 'Joyful', number: 3, title: 'The Nativity',
    explanation: 'Joseph and Mary travel to Bethlehem for the census. Finding no room at the inn, Jesus is born and laid in a manger. The angels announce the good news to shepherds in the fields, who come to see the child. The birth of Jesus in poverty reveals that God enters human history in humility and nearness.',
    scripture: 'Luke 2:1–20 — “For I bring you good news of great joy that will be for all the people.”',
    meditation: 'God chose a stable and a manger. Where do I look for God — in power and comfort, or in the quiet and ordinary places of my life?',
    intention: 'For the poor, for families celebrating Christmas, and for a childlike trust in God.',
  },
  {
    id: 'joyful-4', set: 'Joyful', number: 4, title: 'The Presentation',
    explanation: 'Forty days after his birth, Mary and Joseph bring Jesus to the Temple in Jerusalem to present him to the Lord, as the Law of Moses required. The priest Simeon, guided by the Spirit, recognises the child as the promised Messiah and calls him “a light for revelation to the Gentiles.” He also tells Mary that a sword will pierce her heart.',
    scripture: 'Luke 2:22–40 — “My eyes have seen your salvation, which you have prepared in sight of all peoples.”',
    meditation: 'Like Simeon, am I waiting expectantly for God? Do I hold my life — and the people I love — as a gift entrusted to God?',
    intention: 'For the consecration of families and for those who wait in hope for God’s promises.',
  },
  {
    id: 'joyful-5', set: 'Joyful', number: 5, title: 'The Finding of Jesus in the Temple',
    explanation: 'At the age of twelve, Jesus goes with his parents to Jerusalem for the Passover. When they leave, he remains behind in the Temple. After three days of searching, Mary and Joseph find him among the teachers, listening and asking questions. Jesus says, “Did you not know that I must be in my Father’s house?” He then returns with them and is obedient to them.',
    scripture: 'Luke 2:41–52 — “And Jesus increased in wisdom and in stature, and in favor with God and man.”',
    meditation: 'What does it mean to “seek and find” God when I feel he is absent? How can I grow in wisdom and obedience?',
    intention: 'For young people, for students, and for the grace to seek God with a persevering heart.',
  },

  // SORROWFUL
  {
    id: 'sorrowful-1', set: 'Sorrowful', number: 1, title: 'The Agony in the Garden',
    explanation: 'After the Last Supper, Jesus goes with Peter, James, and John to the Garden of Gethsemane. He is overcome with sorrow and prays, “Abba, Father, all things are possible to you. Remove this cup from me; yet not what I will but what you will.” An angel strengthens him, and he accepts the Father’s will.',
    scripture: 'Mark 14:32–42 — “Not what I will, but what you will.”',
    meditation: 'When life feels heavy, can I bring my fear honestly to God and still say “not my will but yours”?',
    intention: 'For people who are anxious, overwhelmed, or facing a difficult decision.',
  },
  {
    id: 'sorrowful-2', set: 'Sorrowful', number: 2, title: 'The Scourging at the Pillar',
    explanation: 'Jesus is handed over to the Roman governor and, although Pilate finds no fault in him, he is beaten at the pillar. The Prophet Isaiah foresaw this: “by his wounds we are healed.” Christians see in this suffering the cost of forgiveness and the depth of God’s solidarity with human pain.',
    scripture: 'Isaiah 53:5 — “He was pierced for our offenses, crushed for our sins… By his wounds we are healed.”',
    meditation: 'What suffering do I carry, and how does it help to know that Christ was wounded for us?',
    intention: 'For the sick, for victims of violence, and for the grace to offer our pain to God.',
  },
  {
    id: 'sorrowful-3', set: 'Sorrowful', number: 3, title: 'The Crowning with Thorns',
    explanation: 'The soldiers mock Jesus as king, dressing him in a purple cloak and placing a crown of thorns on his head. They strike him and spit on him. The true King of the universe is treated as a fool — and yet he remains silent and faithful to the Father’s plan.',
    scripture: 'John 19:1–5 — “And Pilate came out again and said to them, Behold, I bring him out to you.”',
    meditation: 'How do I respond when I am mocked or misunderstood? Can I find dignity in being faithful rather than being admired?',
    intention: 'For those who are humiliated, bullied, or rejected, and for humility of heart.',
  },
  {
    id: 'sorrowful-4', set: 'Sorrowful', number: 4, title: 'The Carrying of the Cross',
    explanation: 'Jesus is made to carry his cross toward Golgotha. He falls under its weight, and Simon of Cyrene is compelled to help him. Jesus tells the women who weep for him to weep rather for themselves and their children. The way of the Cross becomes the way of discipleship: “Whoever wishes to come after me must deny himself, take up his cross, and follow me.”',
    scripture: 'Luke 23:26–32; Matthew 16:24 — “Take up your cross and follow me.”',
    meditation: 'What cross is mine to carry today? Who is the “Simon” God has sent to help me — and who might need my help?',
    intention: 'For people who feel weighed down, and for the grace to help others carry their burdens.',
  },
  {
    id: 'sorrowful-5', set: 'Sorrowful', number: 5, title: 'The Crucifixion',
    explanation: 'Jesus is nailed to the Cross at Golgotha. Above him is the inscription “Jesus the Nazorean, the King of the Jews.” He prays for those who crucify him — “Father, forgive them, they know not what they do” — and entrusts his Mother to the disciple whom he loved. At the ninth hour he cries out, “It is finished,” and gives up his spirit.',
    scripture: 'John 19:16–30; Luke 23:33–46 — “Father, into your hands I commend my spirit.”',
    meditation: 'What does it mean that God himself died for sinners? How can I live as someone who has been forgiven?',
    intention: 'For the Conversion of sinners, for the dying, and for a deeper love of Christ crucified.',
  },

  // GLORIOUS
  {
    id: 'glorious-1', set: 'Glorious', number: 1, title: 'The Resurrection',
    explanation: 'On the third day, the tomb is found empty. Mary Magdalene and the other women meet the risen Christ, who tells them, “Do not be afraid. Go and tell my brothers to go to Galilee, and there they will see me.” The Resurrection is the foundation of Christian faith: Christ is truly alive, and death has been conquered.',
    scripture: 'Matthew 28:1–10; 1 Corinthians 15:3–5 — “He was raised on the third day in accordance with the Scriptures.”',
    meditation: 'Where do I need the hope of the Resurrection today? What looks like an ending that God can make new?',
    intention: 'For renewed faith in the risen Lord and for those who have lost hope.',
  },
  {
    id: 'glorious-2', set: 'Glorious', number: 2, title: 'The Ascension',
    explanation: 'Forty days after the Resurrection, Jesus leads the apostles to Bethany and is taken up into heaven, now seated at the right hand of the Father. Before he goes, he promises the Holy Spirit and commissions them: “You will be my witnesses… to the ends of the earth.” His ascension is our hope: where he has gone, we are called to follow.',
    scripture: 'Luke 24:50–53; Acts 1:1–11 — “This Jesus who has been taken up from you into heaven will return in the same way.”',
    meditation: 'Christ has gone ahead of me. Am I living as a witness to him in ordinary places?',
    intention: 'For the Church’s mission and for courage to bear witness to Christ.',
  },
  {
    id: 'glorious-3', set: 'Glorious', number: 3, title: 'The Descent of the Holy Spirit',
    explanation: 'Ten days after the Ascension, on Pentecost, the apostles are gathered in the upper room when the Holy Spirit descends upon them as a rushing wind and tongues of fire. They begin to speak in different languages, and Peter preaches so that about three thousand are baptised that day. The Church is born, publicly and powerfully.',
    scripture: 'Acts 2:1–11 — “All were filled with the Holy Spirit and began to speak in other languages.”',
    meditation: 'What gifts has the Holy Spirit given me, and how am I using them for the common good?',
    intention: 'For the Holy Spirit’s guidance and for unity in the Church.',
  },
  {
    id: 'glorious-4', set: 'Glorious', number: 4, title: 'The Assumption of Mary',
    explanation: 'The Church teaches as dogma that Mary, at the end of her earthly life, was taken up body and soul into heavenly glory. This was defined by Pope Pius XII in 1950. It shows the destiny that awaits all who belong to Christ: the resurrection of the body and life everlasting.',
    scripture: 'cf. Genesis 3:15; 1 Corinthians 15:20–23; Revelation 12:1–2',
    meditation: 'My body and my life are not disposable. How does the promise of bodily resurrection change how I treat myself and others?',
    intention: 'For a deeper hope in eternal life and for respect for the human body.',
  },
  {
    id: 'glorious-5', set: 'Glorious', number: 5, title: 'The Coronation of Mary',
    explanation: 'Mary is honoured as Queen of Heaven and earth, not by her own merit but because of her Son, the true King. This mystery also points to the reward promised to all the saints: to share in God’s life and to reign with Christ. The Rosary ends with this vision of glory, as Hail Holy Queen celebrates her who is “our life, our sweetness and our hope.”',
    scripture: 'Revelation 12:1 — “A great sign appeared in the sky, a woman clothed with the sun, with the moon under her feet.”',
    meditation: 'If this is the end of the story, how should I live the middle of it?',
    intention: 'For perseverance, for the grace of final repentance, and for the intercession of Mary.',
  },

  // LUMINOUS
  {
    id: 'luminous-1', set: 'Luminous', number: 1, title: 'The Baptism of Jesus',
    explanation: 'Jesus goes to the Jordan to be baptised by John. When he comes out of the water, the heavens are opened, the Spirit descends like a dove, and a voice says, “This is my beloved Son, with whom I am well pleased.” The public ministry of Christ begins, and the Father reveals who he is.',
    scripture: 'Matthew 3:13–17 — “This is my beloved Son, with whom I am well pleased.”',
    meditation: 'I, too, was claimed by God in Baptism. Do I live as a beloved son or daughter of the Father?',
    intention: 'For all who are preparing for Baptism and for a renewed sense of our own baptismal identity.',
  },
  {
    id: 'luminous-2', set: 'Luminous', number: 2, title: 'The Wedding at Cana',
    explanation: 'At a wedding in Cana, Mary tells Jesus, “They have no wine.” Jesus replies, “Woman, what does that have to do with us? My hour has not yet come.” Mary says to the servants, “Do whatever he tells you.” Jesus turns water into wine — the first of his signs — revealing his glory, and his disciples believe in him.',
    scripture: 'John 2:1–11 — “Do whatever he tells you.”',
    meditation: 'Where is God asking me to trust him even when the timing seems wrong? What “ordinary water” can Christ transform in my life?',
    intention: 'For married couples, for families, and for trust in God’s timing.',
  },
  {
    id: 'luminous-3', set: 'Luminous', number: 3, title: 'The Proclamation of the Kingdom of God',
    explanation: 'Jesus travels through Galilee proclaiming the Good News of the Kingdom, calling people to repentance and inviting them to believe. He announces that the Kingdom of God is at hand — a reign of mercy, justice, and peace that begins in the hearts of those who follow him.',
    scripture: 'Mark 1:14–20 — “The kingdom of God is at hand. Repent, and believe in the gospel.”',
    meditation: 'What would change if I truly believed God’s kingdom is already at work in the world? How can I live that today?',
    intention: 'For the spread of the Gospel and for a heart open to conversion.',
  },
  {
    id: 'luminous-4', set: 'Luminous', number: 4, title: 'The Transfiguration',
    explanation: 'Jesus takes Peter, James, and John up a high mountain. His face shines like the sun and his clothes become dazzling white; Moses and Elijah appear with him, and a voice from the cloud says, “This is my beloved Son… listen to him.” The apostles catch a foretaste of the glory that awaits Christ and those who belong to him.',
    scripture: 'Matthew 17:1–9 — “This is my beloved Son, with whom I am well pleased; listen to him.”',
    meditation: 'Do I make time to listen to Christ in prayer and in his word, especially when life is noisy?',
    intention: 'For a deeper love of prayer and the grace to listen to God’s word.',
  },
  {
    id: 'luminous-5', set: 'Luminous', number: 5, title: 'The Institution of the Eucharist',
    explanation: 'At the Last Supper, Jesus takes bread, blesses and breaks it, and gives it to the apostles saying, “This is my body.” He then takes the cup and says, “This is my blood of the covenant, which is poured out for many for the forgiveness of sins.” Catholics believe that in the Eucharist Christ is truly present — body, blood, soul, and divinity.',
    scripture: 'Matthew 26:26–30; 1 Corinthians 11:23–26 — “Do this in remembrance of me.”',
    meditation: 'How does it change my life to believe that Christ gives himself to me in the Eucharist?',
    intention: 'For reverence at Mass, for those who cannot receive Communion, and for priests.',
  },
];

export const mysterySets: MysterySet[] = ['Joyful', 'Sorrowful', 'Glorious', 'Luminous'];

export const getMystery = (set: MysterySet, number: number) =>
  mysteries.find((m) => m.set === set && m.number === number)!;

export type RosaryStepKind =
  | 'sign'
  | 'creed'
  | 'our-father'
  | 'hail-mary'
  | 'glory'
  | 'fatima'
  | 'hail-holy-queen'
  | 'closing';

export interface RosaryStep {
  index: number;
  kind: RosaryStepKind;
  label: string;
  prayerId: string;
  instruction: string;
  decade: number;
  mysteryNumber?: number;
  progress: number;
}

export function buildRosary(set: MysterySet, includeFatima = true): RosaryStep[] {
  const steps: RosaryStep[] = [];
  const push = (kind: RosaryStepKind, label: string, prayerId: string, instruction: string, decade = 0, mysteryNumber?: number) => {
    steps.push({ index: steps.length, kind, label, prayerId, instruction, decade, mysteryNumber, progress: 0 });
  };
  push('sign', 'Sign of the Cross', 'sign-of-the-cross', 'Begin by making the Sign of the Cross.');
  push('creed', 'Apostles’ Creed', 'apostles-creed', 'At the crucifix, profess your faith.');
  push('our-father', 'Our Father — first bead', 'our-father', 'On the large bead nearest the crucifix, pray the Our Father.');
  for (let i = 1; i <= 3; i++) push('hail-mary', `Hail Mary — introductory bead ${i} of 3`, 'hail-mary', `On the next small bead, pray a Hail Mary. Intention ${i} of 3: faith, hope, and charity.`);
  push('glory', 'Glory Be', 'glory-be', 'On the next large bead, pray the Glory Be.');

  for (let d = 1; d <= 5; d++) {
    push('our-father', `Decade ${d} — Our Father`, 'our-father', `Announce the ${d === 1 ? 'first' : d === 2 ? 'second' : d === 3 ? 'third' : d === 4 ? 'fourth' : 'fifth'} mystery: “${getMystery(set, d).title}.” Then pray an Our Father on the large bead.`, d, d);
    for (let b = 1; b <= 10; b++) push('hail-mary', `Decade ${d} — Hail Mary ${b} of 10`, 'hail-mary', `On small bead ${b} of 10, pray a Hail Mary while meditating on the mystery.`, d, d);
    push('glory', `Decade ${d} — Glory Be`, 'glory-be', 'On the separating bead, pray the Glory Be.', d, d);
    if (includeFatima) push('fatima', `Decade ${d} — Fatima Prayer`, 'fatima-prayer', 'Pray the Fatima Prayer (a devotional addition).', d, d);
  }

  push('hail-holy-queen', 'Hail, Holy Queen', 'hail-holy-queen', 'At the centre medal, pray Hail, Holy Queen.');
  push('closing', 'Closing Prayer', 'rosary-closing-prayer', 'Conclude with the closing prayer.');
  push('sign', 'Sign of the Cross', 'sign-of-the-cross', 'Finish with the Sign of the Cross.');

  return steps.map((s, i) => ({ ...s, index: i, progress: Math.round(((i + 1) / steps.length) * 100) }));
}

export const weeklyRosarySchedule = [
  { day: 'Monday', set: 'Joyful' },
  { day: 'Tuesday', set: 'Sorrowful' },
  { day: 'Wednesday', set: 'Glorious' },
  { day: 'Thursday', set: 'Luminous' },
  { day: 'Friday', set: 'Sorrowful' },
  { day: 'Saturday', set: 'Joyful' },
  { day: 'Sunday', set: 'Glorious or Joyful' },
] as const;

export function suggestedSetForToday(date = new Date()): MysterySet {
  const day = date.getDay();
  if (day === 1 || day === 6) return 'Joyful';
  if (day === 2 || day === 5) return 'Sorrowful';
  if (day === 3 || day === 0) return 'Glorious';
  return 'Luminous';
}
