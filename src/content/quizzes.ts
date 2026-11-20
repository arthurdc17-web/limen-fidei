import type { Quiz } from './types';

export const quizzes: Quiz[] = [
  {
    id: 'mass', title: 'Understanding the Mass', description: 'Test what you know about the order of Mass and what happens at each part.',
    questions: [
      { question: 'What are the three major parts of the Mass?', options: ['Introductory Rites, Liturgy of the Word, Liturgy of the Eucharist', 'Reading, sermon, collection', 'Prayer, singing, dismissal'], correct: 0, explanation: 'The Mass begins with the Introductory Rites, continues with the Liturgy of the Word, and culminates in the Liturgy of the Eucharist (which includes the Communion Rite and Concluding Rites).', link: '/mass' },
      { question: 'What do Catholics believe happens at the consecration?', options: ['The bread and wine become symbols only', 'The bread and wine truly become the Body and Blood of Christ', 'The priest becomes Christ'], correct: 1, explanation: 'Catholics believe in the Real Presence: by the power of the Holy Spirit, the substance of bread and wine is changed into Christ’s Body and Blood — transubstantiation.', link: '/teachings#eucharist' },
      { question: 'When is the Gloria omitted at Mass?', options: ['On Sundays', 'During Advent and Lent, and on weekdays', 'At every Mass'], correct: 1, explanation: 'The Gloria is a hymn of joy omitted during the penitential seasons of Advent and Lent and on ordinary weekdays.', link: '/mass' },
      { question: 'What is the correct response to “The Lord be with you”?', options: ['And also with you / And with your spirit', 'Amen', 'Thanks be to God'], correct: 0, explanation: 'The traditional response is “And with your spirit” in current English translations; “And also with you” is used in some places.', link: '/mass' },
      { question: 'What should a person who is not receiving Communion do during the Communion procession?', options: ['Go forward and stand in line', 'Remain in their place and pray', 'Leave the church'], correct: 1, explanation: 'There is no need to go forward. You are welcome to remain in your pew and pray quietly.', link: '/mass#communion' },
      { question: 'What does the word “Mass” come from?', options: ['A Latin word meaning “meal”', 'The Latin missa, meaning “sending” or “dismissal”', 'A Greek word meaning “sacrifice”'], correct: 1, explanation: 'At the end of Mass the people are “sent” to live the Gospel. “Ite, missa est” means “Go, the Mass is ended.”', link: '/faq' },
    ],
  },
  {
    id: 'beliefs', title: 'Catholic Beliefs', description: 'A gentle introduction to the central doctrines of the faith.',
    questions: [
      { question: 'How many Persons are there in God?', options: ['One', 'Two', 'Three'], correct: 2, explanation: 'There are three Persons — Father, Son, and Holy Spirit — in one divine essence. This is the mystery of the Trinity.', link: '/teachings#trinity' },
      { question: 'What does the Incarnation mean?', options: ['God became human in Jesus Christ', 'The Church was founded', 'The Bible was written'], correct: 0, explanation: 'The eternal Son of God took on a fully human nature while remaining fully God.', link: '/teachings#incarnation' },
      { question: 'Which creed is recited at Mass on Sundays?', options: ['The Apostles’ Creed', 'The Nicene Creed', 'The Athanasian Creed'], correct: 1, explanation: 'The Nicene Creed is the profession of faith at Sunday and solemnity Masses; the Apostles’ Creed is used in the Rosary.', link: '/prayers/nicene-creed' },
      { question: 'What is the difference between adoration and veneration?', options: ['They are identical', 'Adoration is for God alone; veneration honours the saints', 'Veneration is for God alone'], correct: 1, explanation: 'Catholics worship God alone and venerate (honour) Mary and the saints, asking them to intercede.', link: '/lessons/catholic-traditions' },
      { question: 'Are grace and salvation earned by good works?', options: ['Yes, if you do enough good', 'No — they are gifts of God, though we cooperate with grace', 'Only by giving money to the Church'], correct: 1, explanation: 'Salvation is God’s gift. Good works are the fruit of grace, not a wage earned independently of God.', link: '/teachings#grace' },
      { question: 'What is the Magisterium?', options: ['A medieval university', 'The teaching office of the Pope and bishops', 'A type of monastery'], correct: 1, explanation: 'The Magisterium is the Church’s teaching authority, serving God’s word in Scripture and Tradition.', link: '/teachings#scripture-tradition' },
    ],
  },
  {
    id: 'sacraments', title: 'The Seven Sacraments', description: 'See how well you know the sacraments of initiation, healing and service.',
    questions: [
      { question: 'Which three are the sacraments of Christian initiation?', options: ['Baptism, Confirmation, Eucharist', 'Penance, Anointing, Matrimony', 'Holy Orders, Confirmation, Eucharist'], correct: 0, explanation: 'Baptism, Confirmation and the Eucharist initiate a person into the Christian life.', link: '/sacraments' },
      { question: 'Which sacraments are called sacraments of healing?', options: ['Baptism and Confirmation', 'Penance and Anointing of the Sick', 'Matrimony and Holy Orders'], correct: 1, explanation: 'Penance heals sin; Anointing of the Sick brings strength and healing in illness.', link: '/sacraments' },
      { question: 'Who ordinarily confirms a Catholic in the Latin Church?', options: ['A deacon', 'A bishop', 'A lay catechist'], correct: 1, explanation: 'The bishop is the ordinary minister of Confirmation; a priest may be delegated in certain circumstances.', link: '/sacraments#confirmation' },
      { question: 'If someone was validly baptised in another Christian church, what happens when they become Catholic?', options: ['They are baptised again', 'They are not rebaptised; they are received, confirmed and receive First Communion', 'They wait one year'], correct: 1, explanation: 'Valid Baptism with water and the Trinitarian formula is never repeated.', link: '/becoming-catholic' },
      { question: 'What does Anointing of the Sick do?', options: ['Guarantees a physical cure', 'Gives strength, peace, forgiveness and spiritual healing', 'Replaces medical treatment'], correct: 1, explanation: 'It gives a special gift of the Holy Spirit; physical healing occurs if it is God’s will.', link: '/sacraments#anointing' },
      { question: 'In Matrimony, who confers the sacrament?', options: ['The priest alone', 'The spouses on each other, with the Church’s witness', 'The bishop'], correct: 1, explanation: 'The couple exchange consent and thereby confer the sacrament on one another; the priest or deacon witnesses it in the name of the Church.', link: '/sacraments#matrimony' },
    ],
  },
  {
    id: 'rosary', title: 'The Rosary', description: 'Check your knowledge of the beads, prayers and mysteries.',
    questions: [
      { question: 'How many Hail Marys are in a complete traditional Rosary?', options: ['33', '50', '59'], correct: 1, explanation: 'There are 50 Hail Marys (five decades of ten), plus three introductory beads sometimes counted separately.', link: '/rosary' },
      { question: 'Which prayer is said on each large bead of a decade?', options: ['Hail Mary', 'Our Father', 'Glory Be'], correct: 1, explanation: 'Each decade begins with an Our Father on the large bead, followed by ten Hail Marys.', link: '/rosary' },
      { question: 'What is prayed after each decade?', options: ['Glory Be (and often the Fatima Prayer)', 'Nicene Creed', 'Act of Contrition'], correct: 0, explanation: 'The Glory Be follows each decade; the Fatima Prayer is a common devotional addition.', link: '/rosary' },
      { question: 'Which mysteries are traditionally prayed on Fridays?', options: ['Joyful', 'Sorrowful', 'Glorious'], correct: 1, explanation: 'The traditional schedule assigns the Sorrowful Mysteries to Tuesday and Friday.', link: '/rosary#mysteries' },
      { question: 'Who added the Luminous Mysteries, and when?', options: ['Pope John Paul II in 2002', 'Pope Pius XII in 1950', 'St Dominic in the 13th century'], correct: 0, explanation: 'St John Paul II proposed the Luminous Mysteries in his apostolic letter Rosarium Virginis Mariae (2002).', link: '/rosary' },
      { question: 'What is the purpose of the mysteries?', options: ['To count the beads correctly', 'To meditate on events in the lives of Jesus and Mary', 'To replace the Mass'], correct: 1, explanation: 'The Rosary is a mental prayer: the beads help us keep count while the mind meditates on the mysteries.', link: '/rosary' },
    ],
  },
  {
    id: 'prayers', title: 'Catholic Prayers', description: 'Identify the prayers and where they belong.',
    questions: [
      { question: 'Which prayer begins “Hail Mary, full of grace”?', options: ['Angelus', 'Hail Mary', 'Memorare'], correct: 1, explanation: 'Its first words come from the angel’s greeting to Mary in Luke 1:28.', link: '/prayers/hail-mary' },
      { question: 'What prayer closes the Rosary after Hail Holy Queen?', options: ['The closing prayer: “O God, whose only begotten Son…”', 'The Nicene Creed', 'The Divine Praises'], correct: 0, explanation: 'The traditional closing prayer asks that we may imitate what the mysteries contain and obtain what they promise.', link: '/prayers/rosary-closing-prayer' },
      { question: 'Which prayer is traditionally said at noon?', options: ['Angelus', 'Compline', 'Stations of the Cross'], correct: 0, explanation: 'The Angelus commemorates the Annunciation and is traditionally prayed at noon.', link: '/prayers/angelus' },
      { question: '“Soul of Christ, sanctify me” is the opening of which prayer?', options: ['Anima Christi', 'Memorare', 'Nicene Creed'], correct: 0, explanation: 'Anima Christi is a medieval prayer to Christ, often said after Communion.', link: '/prayers/anima-christi' },
      { question: 'What is the prayer before meals commonly called?', options: ['Grace', 'Collect', 'Litany'], correct: 0, explanation: 'Saying grace before meals gives thanks to God for his gifts.', link: '/prayers/before-meals' },
    ],
  },
  {
    id: 'history', title: 'Church History', description: 'A few key moments in the story of the Catholic Church.',
    questions: [
      { question: 'In which city was Jesus crucified?', options: ['Rome', 'Jerusalem', 'Antioch'], correct: 1, explanation: 'Jesus was crucified outside the walls of Jerusalem under Pontius Pilate.', link: '/lessons/what-is-catholicism' },
      { question: 'Which council defined that Jesus is “consubstantial with the Father”?', options: ['Nicaea (325)', 'Trent (1545)', 'Vatican II (1962)'], correct: 0, explanation: 'The First Council of Nicaea affirmed the Son’s full divinity; Constantinople (381) completed the Nicene Creed.', link: '/teachings/trinity' },
      { question: 'Who wrote the Rule that shaped Western monasticism?', options: ['St Benedict', 'St Francis', 'St Dominic'], correct: 0, explanation: 'The Rule of St Benedict became the basic text of Western monastic life.', link: '/saints/benedict' },
      { question: 'Which pope convoked the Second Vatican Council?', options: ['Pius XII', 'John XXIII', 'Paul VI'], correct: 1, explanation: 'Pope John XXIII announced the Council in 1959; it opened in 1962.', link: '/sources' },
      { question: 'When was the Catechism of the Catholic Church published?', options: ['1854', '1992', '2005'], correct: 1, explanation: 'The Catechism was promulgated by St John Paul II in 1992.', link: '/sources' },
    ],
  },
  {
    id: 'terminology', title: 'Catholic Terminology', description: 'Learn the vocabulary you will hear in church and Catholic books.',
    questions: [
      { question: 'What does “Eucharist” mean?', options: ['Thanksgiving', 'Sacrifice', 'Sabbath'], correct: 0, explanation: 'It comes from the Greek eucharistia, meaning thanksgiving.', link: '/teachings' },
      { question: 'What is a “parish”?', options: ['A local community of the Church', 'A diocese', 'A religious order'], correct: 0, explanation: 'A parish is a local community of believers, normally with its own church and priest.', link: '/lessons/church-structure' },
      { question: 'What does “Magisterium” refer to?', options: ['The teaching authority of the Church', 'A type of prayer', 'The altar cloth'], correct: 0, explanation: 'The Pope and bishops exercise the Church’s teaching office.', link: '/teachings/scripture-tradition' },
      { question: 'What is a “sacramental”?', options: ['A sacred sign that disposes us to receive grace', 'Another word for sacrament', 'A Church law'], correct: 0, explanation: 'Holy water, blessed candles, and ashes are examples of sacramentals.', link: '/lessons/catholic-traditions' },
      { question: 'What is “latria”?', options: ['Veneration of saints', 'Adoration due to God alone', 'A liturgical season'], correct: 1, explanation: 'Latria is the theological term for the worship and adoration owed only to God.', link: '/teachings' },
    ],
  },
];

export const getQuiz = (id: string) => quizzes.find((q) => q.id === id);
