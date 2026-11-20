import type { Lesson } from './types';

export const lessons: Lesson[] = [
  {
    id: 'what-is-catholicism', number: 1, title: 'What Is Catholicism?',
    intro: 'Before learning what Catholics do, it helps to know who Catholics believe they are following. Catholicism is not primarily a list of rules; it is a relationship with the living God, received through the Church that Christ founded. This lesson introduces the basic story.',
    sections: [
      {
        heading: 'What the Catholic Church is',
        body: [
          'The Catholic Church is the community of people who believe in Jesus Christ, were baptised in his name, and are united with the Pope and the bishops. Its name comes from the Greek word katholikos, meaning “universal” — the Church is meant for every people, place, and time.',
          'Catholics believe the Church was founded by Christ himself. After his Resurrection he said to his apostles: “All power in heaven and on earth has been given to me. Go, therefore, and make disciples of all nations… And behold, I am with you always, until the end of the age” (Matthew 28:18–20).',
          'The Church is both a visible institution and a spiritual reality. It has structures, buildings, and laws, but its heart is the people of God called to holiness and sent to serve the world.',
        ],
        bible: ['Matthew 16:18 — “You are Peter, and on this rock I will build my Church.”', 'Matthew 28:18–20 — the Great Commission'],
        ccc: ['CCC 751–756', 'CCC 783–786'],
        definition: { term: 'Church', text: 'From the Greek ekklesia, “assembly” or “gathering.” The Church is the assembly of those called out of the world to belong to God and to be sent back into the world as witnesses.' },
      },
      {
        heading: 'Who Jesus Christ is',
        body: [
          'Jesus of Nazareth lived in first-century Palestine, was crucified under the Roman governor Pontius Pilate, and was raised from the dead on the third day. Christians believe he is not only a prophet or teacher but the Son of God — God the Son who became human.',
          'Catholic faith rests on the conviction that in Jesus, God entered history. He was conceived by the Holy Spirit and born of the Virgin Mary. His life, miracles, teaching, death, and Resurrection are the centre of the Christian story.',
          'The four Gospels — Matthew, Mark, Luke, and John — are the primary sources for knowing what Jesus said and did.',
        ],
        bible: ['John 1:14 — “And the Word became flesh and made his dwelling among us.”', 'Philippians 2:6–11'],
        ccc: ['CCC 423–429'],
        definition: { term: 'Incarnation', text: 'The belief that the eternal Son of God took on a fully human nature, without ceasing to be God. He is one Person with two natures, divine and human.' },
      },
      {
        heading: 'The Resurrection and salvation',
        body: [
          'The empty tomb and the appearances of the risen Christ are at the centre of Catholic faith. St Paul wrote: “If Christ has not been raised, then our preaching is in vain and your faith is in vain” (1 Corinthians 15:14). The Resurrection is not an idea or a metaphor for Catholics: it is the proclamation that God has conquered death.',
          'Catholics believe that God creates human beings for life with him. Sin damages that relationship and brings death, but God saves us by grace through the life, death, and Resurrection of Jesus. Salvation is a gift to be received, not something earned.',
          'This salvation is now offered to all people. It takes visible form in Baptism, is strengthened in the other sacraments, and is lived out in faith, hope, and charity.',
        ],
        bible: ['1 Corinthians 15:3–5', 'Ephesians 2:8–10', 'Romans 6:4'],
        ccc: ['CCC 638–655', 'CCC 1987–1995'],
        definition: { term: 'Grace', text: 'The free gift of God’s life and help. Grace is not a reward for good behaviour; it is God’s initiative in us, enabling us to believe, to love, and to grow in holiness.' },
      },
      {
        heading: 'What it means to be Catholic',
        body: [
          'To be Catholic is to be baptised, to profess the faith of the Church, to participate in her sacraments — especially the Eucharist — and to live as a disciple in ordinary life. It includes beliefs, but also worship, community, and service.',
          'Catholics are called to holiness: to grow in love of God and neighbour. They are also called to mission: to bring the Good News to others, not by force but by witness and service.',
          'There is wide diversity among Catholics in culture, personality, and opinion. Unity does not mean uniformity; it means sharing one faith, one Baptism, and one Eucharist.',
        ],
        bible: ['John 13:34–35 — “Love one another as I have loved you.”', 'Ephesians 4:4–6'],
        ccc: ['CCC 825–848'],
      },
      {
        heading: 'How Catholicism differs from other Christian traditions',
        body: [
          'Catholics share the central Christian beliefs with Orthodox and most Protestant Christians: the Trinity, the Incarnation, the Resurrection, and salvation through Christ. The differences concern authority, sacraments, and the understanding of the Church.',
          'Catholics believe the Pope, as successor of St Peter, has a universal ministry of unity and teaching. They also believe there are seven sacraments instituted by Christ, and that the Eucharist is truly the Body and Blood of Christ, not only a memorial.',
          'Catholics honour Mary and the saints and ask for their intercession, while reserving worship (adoration) for God alone. Many Protestant traditions do not practise these devotions. These differences should be explained honestly and without caricature.',
        ],
        bible: ['John 21:15–17', '1 Timothy 3:15'],
        ccc: ['CCC 816–822', 'CCC 857–859'],
      },
    ],
    summary: [
      'Catholicism is a relationship with the living God through Christ and his Church.',
      'Jesus is God the Son made man, crucified and risen for our salvation.',
      'Salvation is God’s gift of grace, received in faith and lived in love.',
      'Catholics are united by one faith, one Baptism, and one Eucharist.',
      'Catholics share core Christian beliefs but differ on authority, sacraments, and devotion.',
    ],
    questions: [
      'What does the word “Catholic” mean, and why is it used for the Church?',
      'Why is the Resurrection central to Catholic faith?',
      'What is the difference between grace and a reward?',
      'Name two beliefs Catholics share with other Christians and two areas of difference.',
    ],
  },
  {
    id: 'what-catholics-believe', number: 2, title: 'What Do Catholics Believe?',
    intro: 'Catholic belief is not a collection of detached ideas. It is a unified vision of God, creation, humanity, and the destiny of the world. This lesson explains the major beliefs and introduces the vocabulary you will hear at Mass and in Catholic books.',
    sections: [
      {
        heading: 'The Holy Trinity',
        body: [
          'Catholics believe in one God who is three Persons: the Father, the Son, and the Holy Spirit. The three Persons are distinct from one another, but each is fully God; there is one divine essence, not three gods.',
          'This is a mystery, in the technical sense of a truth that exceeds our understanding but is not contradictory. Analogies can help but always fall short. The Church’s doctrine was clarified in the creeds of Nicaea (325) and Constantinople (381).',
          'Every Catholic prayer begins and ends with the Trinity: the Sign of the Cross, the Gloria, and the blessing at the end of Mass all name the three Persons.',
        ],
        bible: ['Matthew 28:19', 'John 14:16–17', '2 Corinthians 13:13'],
        ccc: ['CCC 232–260'],
        definition: { term: 'Person (divine)', text: 'A distinct “who” within the one God. The Father is not the Son, and the Spirit is not the Father, yet each is fully and wholly God.' },
      },
      {
        heading: 'The Incarnation, Passion, and Resurrection',
        body: [
          'The Son of God assumed a complete human nature — body, mind, and will — and lived among us. He suffered and died, and on the third day rose bodily from the dead. His ascension and the sending of the Spirit complete the paschal mystery.',
          '“Paschal mystery” is the key Catholic word for the saving events of Christ’s Passion, death, Resurrection, and Ascension. The Mass makes this mystery present, not by repeating the Cross but by applying its once-for-all saving power.',
        ],
        bible: ['John 1:14', 'Hebrews 9:12', '1 Peter 1:3'],
        ccc: ['CCC 484–511', 'CCC 571–655'],
        definition: { term: 'Paschal mystery', text: 'The saving events of Christ’s suffering, death, Resurrection, and Ascension, which give us new life and are made present in the liturgy.' },
      },
      {
        heading: 'The Creeds',
        body: [
          'A creed is a short formal statement of faith. The Apostles’ Creed is used in the Rosary and personal prayer; the Nicene Creed is professed at Mass on Sundays and solemnities.',
          'The creeds are not merely human summaries: they express the faith received from the apostles and defined by ecumenical councils. Learning them by heart gives you a reliable map of Catholic belief.',
        ],
        bible: ['Romans 10:9', '2 Timothy 1:13–14'],
        ccc: ['CCC 187–197'],
        definition: { term: 'Dogma', text: 'A truth of faith solemnly defined by the Church as revealed by God. Dogmas are binding, but they are a small subset of everything the Church teaches.' },
      },
      {
        heading: 'The Pope, Scripture, Tradition, and the Magisterium',
        body: [
          'Catholics believe Christ entrusted a teaching authority to the apostles and their successors, the bishops, with the Pope as the successor of Peter and the visible centre of unity. This office is called the Magisterium.',
          'God’s Revelation comes to us through Sacred Scripture and Sacred Tradition. Scripture is the inspired word of God; Tradition is the living transmission of the faith from the apostles through the Church. The Magisterium serves both — it does not invent new revelation.',
          'The Pope’s teaching is not infallible in every statement. The extraordinary, definitive teaching of the Pope or an ecumenical council under the conditions described in CCC 749 and 880 is infallible. Ordinary teaching still deserves respectful assent.',
        ],
        bible: ['Matthew 16:18–19', 'Luke 22:31–32', '2 Timothy 3:16–17', '2 Thessalonians 2:15'],
        ccc: ['CCC 80–95', 'CCC 858–862', 'CCC 888–892'],
        definition: { term: 'Magisterium', text: 'The teaching office of the Church, exercised by the Pope and the bishops in communion with him, to guard and explain the faith.' },
      },
      {
        heading: 'The Real Presence and the Eucharist',
        body: [
          'Catholics believe that when the priest speaks the words of consecration at Mass, the bread and wine truly become the Body and Blood of Christ. The appearances — taste, texture, colour — remain, but the reality is changed. The Church calls this transubstantiation.',
          'This is not a theory about physics; it is a claim about what Christ said and what the Church has believed from the beginning. “This is my Body,” Jesus said at the Last Supper (Mark 14:22). St Paul speaks of sharing in the Body and Blood of Christ in 1 Corinthians 10 and 11.',
          'Communion is the ordinary way to receive the Eucharist worthily. Adoration of the Blessed Sacrament is a related devotion, not the Mass itself.',
        ],
        bible: ['Matthew 26:26–28', 'John 6:51–58', '1 Corinthians 10:16–17'],
        ccc: ['CCC 1373–1381'],
        definition: { term: 'Transubstantiation', text: 'The change of the whole substance of bread and wine into the Body and Blood of Christ, while the appearances (the “species”) remain.' },
      },
      {
        heading: 'The communion of saints, Mary, and the sacraments',
        body: [
          'The Church is not only the living. The “communion of saints” joins the faithful on earth, the souls being purified after death, and the saints in heaven. Because they are one family in Christ, we pray for one another and ask the saints to intercede for us.',
          'Mary is honoured as the Mother of God (Theotokos) because Jesus, her Son, is God. Catholics do not worship her; they venerate her and ask her prayers. Four Marian dogmas are defined: her divine motherhood, perpetual virginity, Immaculate Conception, and Assumption.',
          'The seven sacraments — Baptism, Confirmation, Eucharist, Penance, Anointing of the Sick, Holy Orders, and Matrimony — are visible signs instituted by Christ to give grace.',
        ],
        bible: ['Hebrews 12:1', 'Luke 1:43', 'James 5:14–15'],
        ccc: ['CCC 946–962', 'CCC 963–975', 'CCC 1210–1211'],
        definition: { term: 'Veneration', text: 'Honour and respect due to a holy person or image, radically different from adoration (latria), which is due to God alone.' },
      },
    ],
    summary: [
      'One God in three Persons: Father, Son, and Holy Spirit.',
      'The Son became man, died, and rose for our salvation.',
      'Faith is handed on through Scripture, Tradition, and the teaching Church.',
      'The Eucharist is truly Christ’s Body and Blood.',
      'We are united with the saints, and Mary is honoured as God’s Mother.',
      'The seven sacraments are Christ’s gifts of grace to his Church.',
    ],
    questions: [
      'Why is the Trinity called a mystery rather than a contradiction?',
      'What is the difference between Scripture, Tradition, and the Magisterium?',
      'What does transubstantiation mean?',
      'What is the difference between adoration and veneration?',
    ],
  },
  {
    id: 'bible-and-church', number: 3, title: 'The Bible and the Catholic Church',
    intro: 'Catholics do not read the Bible in isolation from the Church. This lesson explains how the Bible came to be, how Catholics interpret it, and how to begin reading it with confidence.',
    sections: [
      {
        heading: 'The Old and New Testaments',
        body: [
          'The Bible is a library of books written over many centuries. The Old Testament tells of creation, the Law, the prophets, the kings, and the waiting for the Messiah. The New Testament tells of Christ, the apostles, and the early Church.',
          'The heart of the Old Testament is the covenant between God and Israel; the heart of the New Testament is the new covenant in Christ’s blood. The two testaments are not two different religions: Christians read the Old Testament in the light of Christ’s fulfillment.',
        ],
        bible: ['Jeremiah 31:31–34', 'Luke 24:27', 'Hebrews 1:1–2'],
        ccc: ['CCC 120–124'],
      },
      {
        heading: 'The Gospels and the canon',
        body: [
          'The four Gospels — Matthew, Mark, Luke, and John — were written by evangelists who drew on the apostolic testimony. “Gospel” means “good news.” They are not modern biographies but inspired proclamations of who Jesus is and what he did.',
          'The Catholic biblical canon contains 73 books: 46 in the Old Testament and 27 in the New. The seven Old Testament books not found in most modern Protestant Bibles are called deuterocanonical (often “Apocrypha” by Protestants). The Church definitively affirmed the canon at the Council of Trent.',
        ],
        ccc: ['CCC 125–127'],
        definition: { term: 'Canon', text: 'The official list of books recognised as inspired Scripture and part of the Bible.' },
      },
      {
        heading: 'How Catholics interpret Scripture',
        body: [
          'Catholics read the Bible with attention to literary genre, historical context, and the whole of Scripture. Genesis 1, for example, is not read as a modern scientific report; it teaches that God created all things and that creation is good.',
          'The Catechism describes two senses of Scripture: the literal sense (what the author intended to express) and the spiritual sense (what the text signifies about Christ, the Church, and our destiny), which includes the allegorical, moral, and anagogical senses (CCC 115–119).',
          'Interpretation is guided by the rule of faith: no single passage should be read in a way that contradicts the faith professed by the Church. Private interpretation is not the same as interpretation without reason or without the Church.',
        ],
        bible: ['2 Peter 1:20–21', 'Acts 8:30–35'],
        ccc: ['CCC 109–119'],
      },
      {
        heading: 'Scripture and Tradition',
        body: [
          'God’s word does not come only in a book. Jesus did not write a textbook; he chose apostles and sent them to preach. Their teaching, preserved and developed in the Church, is Sacred Tradition.',
          'Scripture and Tradition are not two competing sources. They flow from the same divine revelation and are interpreted together by the Magisterium. Some practices, such as the setting of the Lord’s Day on Sunday, are rooted in Tradition rather than an explicit biblical command.',
        ],
        ccc: ['CCC 80–83'],
      },
      {
        heading: 'How to start reading the Bible',
        body: [
          'If you are new to the Bible, start with the Gospels rather than at Genesis. Mark is short and fast-moving; Luke is orderly and human; John is deep and contemplative. Read a few verses each day rather than trying to finish a book quickly.',
          'A simple method is: (1) ask the Holy Spirit for understanding, (2) read a short passage slowly, (3) notice what it says about God, (4) ask what it asks of you today, (5) close with a short prayer. Writing one sentence in a notebook helps the word take root.',
          'Beginner-friendly Catholic plans include the USCCB daily readings (bible.usccb.org), the Gospel of Mark in 30 days, the Life of Christ in Matthew, or the “ Bible in a Year” with a Catholic guide. A Catholic study Bible, such as the New American Bible Revised Edition (NABRE) edition, provides helpful notes. Your parish may also run a Bible study — joining one makes the reading much easier to sustain.',
        ],
        bible: ['Psalm 119:105 — “Your word is a lamp for my feet.”', '2 Timothy 3:16–17'],
        ccc: ['CCC 131–133'],
      },
    ],
    summary: [
      'The Bible is a library of 73 books in the Catholic canon.',
      'The Gospels proclaim Christ; the Old Testament prepares for him.',
      'Catholics interpret Scripture in its context and in the Church’s rule of faith.',
      'Scripture and Tradition together hand on God’s revelation.',
      'Start small: a few verses a day from a Gospel, with prayer and notes.',
    ],
    questions: [
      'How many books are in the Catholic Bible, and what are the deuterocanonical books?',
      'What is the literal sense of Scripture?',
      'Why do Catholics not rely on private interpretation alone?',
      'Which Gospel would you recommend to a beginner, and why?',
    ],
  },
  {
    id: 'church-structure', number: 4, title: 'Catholic Church Structure',
    intro: 'The Church is a community with a visible structure. Knowing the roles helps you understand who does what at Mass, whom to approach with a question, and how a parish connects to the wider Church.',
    sections: [
      {
        heading: 'The Pope',
        body: [
          'The Pope is the Bishop of Rome and the successor of St Peter. Catholics believe Christ gave Peter a special role of leadership and unity (Matthew 16:18–19; Luke 22:31–32). The Pope’s exact title in official documents is “the Bishop of Rome, Vicar of Jesus Christ, Successor of the Prince of the Apostles, Supreme Pontiff of the Universal Church.”',
          'He is not the “CEO” of the Church. His role is pastoral: to confirm the faith of the bishops and to guard the unity of the Church. He lives in Vatican City and leads the Roman Curia, which assists him in governing the Church.',
        ],
        bible: ['Matthew 16:18–19', 'John 21:15–17'],
        ccc: ['CCC 882–887'],
        definition: { term: 'Holy See', text: 'The office and jurisdiction of the Bishop of Rome, distinct from Vatican City, which is the small state that guarantees his independence.' },
      },
      {
        heading: 'Cardinals, bishops, and synods',
        body: [
          'Cardinals are bishops, usually heads of important dioceses or officials of the Roman Curia, appointed by the Pope. Their principal duty today is to advise him and, when a Pope dies, to elect his successor in a conclave.',
          'Bishops are successors of the apostles. Each governs a diocese (or helps as an auxiliary bishop) and is the ordinary shepherd of that local Church. Bishops of a country or region gather in episcopal conferences; the Synod of Bishops gathers representatives from around the world to advise the Pope.',
        ],
        ccc: ['CCC 886', 'CCC 887'],
      },
      {
        heading: 'Priests, deacons, and parish life',
        body: [
          'Priests are ordained by bishops to preside at Mass, hear confessions, anoint the sick, and shepherd a parish community. A parish priest (pastor) is responsible for a parish; assistant priests (parochial vicars) help him. Religious-order priests may staff a parish on behalf of their community.',
          'Deacons are ordained ministers who assist in the liturgy, proclaim the Gospel, preach, and serve the poor. They may baptise and witness marriages, but they cannot consecrate the Eucharist or hear confessions. In some dioceses, married men may be ordained as permanent deacons.',
          'A parish is a concrete community of believers, usually with a church building, a school or programmes, and a priest. A diocese is a group of parishes under a bishop. Archdioceses are usually larger or historically more important dioceses.',
        ],
        ccc: ['CCC 890–893'],
      },
      {
        heading: 'Religious brothers and sisters',
        body: [
          'Religious men and women belong to communities such as the Franciscans, Dominicans, Benedictines, or Sisters of Charity. They take vows — usually poverty, chastity, and obedience — and live according to the rule of their founder.',
          'They are not part of the hierarchical structure in the same way as bishops and priests, but they are an important part of the Church’s life: teaching, nursing, prayer, missionary work, and service to the poor. A nun is a religious woman who takes solemn vows; “sister” is a broader term.',
        ],
        ccc: ['CCC 914–933'],
      },
      {
        heading: 'When you have a question',
        body: [
          'For practical questions about a parish — Mass times, confession, OCIA, or a sacrament — contact the parish office. For personal pastoral questions, speak with a priest. The priest is bound by the seal of confession for anything said in confession.',
          'For a question about official Church teaching, the Catechism of the Catholic Church and the USCCB website are reliable starting points.',
        ],
      },
    ],
    summary: [
      'The Pope is Bishop of Rome and the visible centre of unity.',
      'Bishops succeed the apostles and shepherd dioceses.',
      'Priests preside at the sacraments; deacons serve in liturgy and charity.',
      'Religious communities live the gospel in a distinctive way.',
      'The parish is your local family of faith; the diocese is the wider local Church.',
    ],
    questions: [
      'What is the Pope’s principal role?',
      'What can a deacon do that a layperson cannot, and what can a priest do that a deacon cannot?',
      'What is the difference between a parish and a diocese?',
      'Where should you go with a question about Church teaching?',
    ],
  },
  {
    id: 'catholic-traditions', number: 5, title: 'Catholic Traditions',
    intro: 'Many Catholic gestures can look strange if nobody has explained them. This lesson answers the most common questions — and draws the crucial line between the worship owed to God and the veneration given to his saints.',
    sections: [
      {
        heading: 'Worship, veneration, and images',
        body: [
          'This distinction is essential. Adoration (latria) is the worship due to God alone. Veneration (dulia) is honour given to the saints; Mary receives a special kind of veneration (hyperdulia) because she is the Mother of God. When Catholics kneel before a statue, they are not worshipping the statue.',
          'The Second Commandment forbids making idols to worship. Images in a church are windows to the reality they represent, not gods. The use of images was defended at the Second Council of Nicaea (787): honour given to an image passes to its prototype.',
          'If a particular image is meaningful to you, you may pray before it. If it is not, you are free simply to pray without one.',
        ],
        bible: ['Exodus 20:4–5', 'Colossians 1:15', 'Revelation 4:10'],
        ccc: ['CCC 2092', 'CCC 2131–2132', 'CCC 2143'],
        definition: { term: 'Icon', text: 'A sacred image, especially in the Eastern tradition, understood as a window into the divine reality it depicts.' },
      },
      {
        heading: 'Holy water, genuflection, and the Sign of the Cross',
        body: [
          'Holy water is water blessed by a priest. At the entrance of a church, dipping your fingers and signing yourself recalls Baptism and asks for purification. It is a sacramental — a sign that disposes us to receive grace — not a magic charm.',
          'Genuflection is lowering the right knee in reverence, traditionally before the Blessed Sacrament. It is a sign of adoration. A deep bow is an alternative when genuflection is difficult.',
          'The Sign of the Cross marks a prayer as Christian and invokes the Trinity. It is used at the start and end of prayer, at Mass, and before and after meals.',
        ],
        ccc: ['CCC 1667–1670', 'CCC 2157'],
      },
      {
        heading: 'Kneeling, crucifixes, and candles',
        body: [
          'Kneeling is a posture of humility and adoration. Catholics kneel especially during the Eucharistic Prayer and at the consecration. In some places people remain standing; follow the custom of the parish rather than worrying about doing it “wrong.”',
          'A crucifix is a cross with the figure of Christ on it. It proclaims that God himself entered into suffering and death. Many Catholic churches place a crucifix prominently near the altar, often with an image of Mary and John beneath it.',
          'Candles symbolise Christ, the light of the world, and our Prayer rising to God. People light votive candles when praying for someone or giving thanks — the candle is a visible sign of an invisible prayer.',
        ],
        bible: ['John 8:12', 'Philippians 2:8', 'Psalm 141:2'],
        ccc: ['CCC 1178'],
      },
      {
        heading: 'Honouring Mary and the saints',
        body: [
          'Catholics honour Mary and the saints because they are holy people who lived lives of faith and now intercede for us. Asking a saint to pray for you is like asking a faithful friend to pray — with the confidence that the saint is close to God.',
          'Only God can answer prayer by his own power. The saints’ role is intercession. The Rosary, novenas, and feast days are devotions — practices of love, not obligations imposed on every Catholic.',
          'Some Catholics have a special devotion to a particular saint; others do not. Both are entirely legitimate.',
        ],
        bible: ['James 5:16', 'Revelation 5:8', 'Hebrews 12:1'],
        ccc: ['CCC 956', 'CCC 966'],
      },
      {
        heading: 'The altar and the church building',
        body: [
          'The altar is the table of the Lord, on which the sacrifice of the Mass is celebrated. It represents Christ himself and is treated with reverence: it may be incensed, kissed, and covered with a cloth. In many churches the tabernacle — the reserved Eucharist — is near the altar.',
          'A Catholic church is not just a meeting hall. It is a sacred space set aside for worship, often oriented toward the east, with an aisle that leads to the altar. Stained glass, statues, and art teach the faith visually.',
        ],
        ccc: ['CCC 1184–1186'],
      },
    ],
    summary: [
      'Adoration is due to God alone; saints receive veneration, not worship.',
      'Holy water, genuflection, and the Sign of the Cross are signs of faith and reverence.',
      'Kneeling, crucifixes, and candles express humility, redemption, and prayer.',
      'Asking saints to intercede is like asking a holy friend to pray for you.',
      'The altar is the table of the Lord and the centre of the church’s sacred space.',
    ],
    questions: [
      'What is the difference between latria and dulia?',
      'Why do Catholics genuflect when entering a church?',
      'What does a votive candle signify?',
      'Do Catholics worship Mary? Explain your answer.',
    ],
  },
];

export const getLesson = (id: string) => lessons.find((l) => l.id === id);
