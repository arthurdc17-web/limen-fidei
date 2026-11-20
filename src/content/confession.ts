export interface ConfessionStep {
  id: string;
  title: string;
  what: string;
  say: string;
  note: string;
}

export const confessionSteps: ConfessionStep[] = [
  {
    id: 'before', title: 'Before you go',
    what: 'Find the parish’s confession times on the website or noticeboard. Some parishes offer confessions after a weekday Mass or on Saturday afternoons; many now require an appointment. Arrive a few minutes early and bring a written list of sins if that helps you remember.',
    say: 'A simple prayer: “Lord, help me to be honest and to trust in your mercy.”',
    note: 'You do not need to memorise formulas or dress specially. Confession is private; no one will see what you say.',
  },
  {
    id: 'enter', title: 'Entering the confessional',
    what: 'Go into the confession booth or the room where the priest is waiting. In many churches you kneel behind a screen; face-to-face confession is also common. The priest will greet you and may make the Sign of the Cross with you.',
    say: 'Priest: “In the name of the Father, and of the Son, and of the Holy Spirit. Amen.” Then perhaps: “How long has it been since your last confession?”',
    note: 'If it is your first confession, say so. The priest will guide you gently through the process.',
  },
  {
    id: 'confess', title: 'Confessing your sins',
    what: 'Tell the priest what you have done wrong as specifically as you can. Begin with the most serious sins. For mortal sins, try to give the kind of sin and how many times. You do not need to give unnecessary details or names of other people.',
    say: '“Father, I have not been to Mass on several Sundays without a good reason. I have lied to my employer three times. I have been unkind to my sister.”',
    note: 'The priest is bound by the seal of confession: he can never reveal anything you say, to anyone, for any reason.',
  },
  {
    id: 'counsel', title: 'Counsel and penance',
    what: 'The priest may ask a clarifying question or offer advice. He will then suggest a penance — usually a prayer, a small act of charity, or a sacrifice. Accept it as a way of turning back to God, not as a payment for forgiveness.',
    say: '“For your penance, say the Our Father and Hail Mary once, and try to call your sister this week.”',
    note: 'If a penance seems too difficult, it is appropriate to say so respectfully.',
  },
  {
    id: 'contrition', title: 'Act of Contrition',
    what: 'You express sorrow for your sins and your intention to change. The priest may invite you to say it yourself or say it together.',
    say: '“My God, I am sorry for my sins with all my heart… I firmly intend, with your help, to do penance, to sin no more, and to avoid whatever leads me to sin. Our Savior Jesus Christ suffered and died for us. In his name, my God, have mercy. Amen.”',
    note: 'The important thing is genuine sorrow and a real intention to amend — not perfect wording.',
  },
  {
    id: 'absolution', title: 'Absolution',
    what: 'The priest extends his hands (or makes the Sign of the Cross) and pronounces the prayer of absolution. This is the moment of forgiveness: God acts through the ministry of the Church.',
    say: '“I absolve you from your sins in the name of the Father, and of the Son, and of the Holy Spirit. Amen.” Then: “Give thanks to the Lord, for he is good.”',
    note: 'If you did not confess a mortal sin because you forgot it, it is still forgiven; mention it at your next confession.',
  },
  {
    id: 'afterward', title: 'Afterwards',
    what: 'Thank the priest, leave the confessional, and carry out your penance as soon as you can. Spend a few moments in thanksgiving. If you feel peace, rest in it; if you feel nothing, your sins are still forgiven — feelings are not the measure of God’s mercy.',
    say: '“Thank you, Lord, for forgiving me. Help me to live differently.”',
    note: 'You may return to Confession as often as you wish. Frequent confession is a healthy spiritual practice.',
  },
];

export const examinationSections = [
  {
    title: 'Love of God — The First Three Commandments',
    intro: 'Ask how you have responded to God who loves you.',
    questions: [
      'Have I made time for prayer, or has God been pushed to the edges of my life?',
      'Have I been superstitious, or treated God as a magical tool rather than a loving Father?',
      'Have I used God’s name carelessly, in anger, or in jokes?',
      'Have I skipped Sunday Mass without a serious reason? Have I been fully present when I attended?',
      'Have I taken part in other worship that contradicts my faith in Christ?',
      'Have I been grateful for God’s gifts, or have I complained and taken everything for granted?',
    ],
  },
  {
    title: 'Love of Neighbour — The Other Commandments',
    intro: 'Ask how you have treated the people God has placed in your life.',
    questions: [
      'Have I honoured my parents, elders, and those with authority over me? Or have I been disrespectful and dismissive?',
      'Have I harmed anyone by my words, gossip, anger, or violence — even in my heart?',
      'Have I been faithful in my commitments to my spouse, family, and friends?',
      'Have I taken or kept what was not mine, cheated, or been careless with money that belongs to others?',
      'Have I lied, exaggerated, or allowed others to believe something false?',
      'Have I coveted what someone else has, or envied their success?',
    ],
  },
  {
    title: 'Personal Responsibility',
    intro: 'Look honestly at your habits and choices.',
    questions: [
      'Where have I chosen the easier wrong rather than the harder right?',
      'Have I blamed others for my own choices?',
      'Have I knowingly placed myself in situations that lead me to sin?',
      'Have I neglected my duties at work, at school, or at home?',
      'Have I cared for my body and mind responsibly, or abused them?',
    ],
  },
  {
    title: 'Relationships',
    intro: 'Consider the quality of your love.',
    questions: [
      'Have I listened to the people I love, or have I only waited to speak?',
      'Have I been patient with those who are difficult, slow, or different from me?',
      'Have I held grudges or refused to apologise?',
      'Have I treated people as objects, or as persons made in God’s image?',
      'Have I been present to the lonely, the sick, or the poor?',
    ],
  },
  {
    title: 'Honesty',
    intro: 'Truth is the foundation of trust.',
    questions: [
      'Where have I been dishonest with myself about my motives?',
      'Have I concealed the truth to avoid consequences?',
      'Have I misrepresented myself to others?',
      'Have I been honest in my use of money, time, and other people’s trust?',
    ],
  },
  {
    title: 'Charity and Justice',
    intro: 'Faith that does not bear fruit in love is dead (James 2:26).',
    questions: [
      'Have I given to those in need according to my ability?',
      'Have I ignored injustice because it did not affect me?',
      'Have I spoken up for someone who was treated unfairly?',
      'Have I been generous with my time and attention?',
      'Have I cared for creation, which belongs to God and to future generations?',
    ],
  },
  {
    title: 'Virtues and Habits',
    intro: 'Holiness is not one big gesture but a pattern of small choices.',
    questions: [
      'Which virtue do I most need: prudence, justice, fortitude, temperance, faith, hope, or charity?',
      'What small, concrete habit could I practise this week?',
      'What is the first step back when I fall?',
      'Am I growing in peace, joy, and self-control, or in restlessness and selfishness?',
    ],
  },
];

export const sinExplanations = [
  {
    term: 'Sin',
    text: 'An offense against God and a breach of his law, arising from a free choice to do what is wrong. Sin harms the sinner, other people, and the whole human family.',
  },
  {
    term: 'Mortal sin',
    text: 'A grave sin committed with full knowledge and deliberate consent. It destroys sanctifying grace and requires Confession for forgiveness. Three conditions must be present: grave matter, sufficient reflection, and full consent.',
  },
  {
    term: 'Venial sin',
    text: 'A less serious sin, or a grave sin committed without full knowledge or consent. It weakens the life of grace but does not destroy it.',
  },
  {
    term: 'Repentance (contrition)',
    text: 'Sorrow for sin and a firm intention to change. Perfect contrition is sorrow born of love for God; imperfect contrition is sorrow born of fear of punishment or the ugliness of sin. Both can lead to forgiveness in confession.',
  },
  {
    term: 'Absolution',
    text: 'The priest’s declaration, in Christ’s name, that the penitent’s sins are forgiven. The priest acts as an instrument of God’s mercy, not as the source of it.',
  },
  {
    term: 'Penance',
    text: 'A prayer or good work given by the priest after confession. It helps repair the damage of sin and trains us in a new way of living.',
  },
];

export const confessionDisclaimer = 'This guide is educational and does not replace pastoral advice. For personal questions about sin, scrupulous doubts, or your particular circumstances, speak with a priest. Catholic Companion never asks you to submit private confessions or sensitive personal information online.';
