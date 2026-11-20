import type { TeachingTopic } from './types';

export const teachingCategories = [
  'Fundamental Theology',
  'Moral Theology',
  'Mary and the Saints',
  'Church Authority',
  'Philosophical Foundations',
] as const;

const ccc = (...labels: string[]): string[] => labels;

export const teachings: TeachingTopic[] = [
  {
    id: 'trinity', category: 'Fundamental Theology', title: 'The Holy Trinity',
    summary: 'One God in three Persons — Father, Son, and Holy Spirit — each fully God, distinct from one another, yet one in essence.',
    body: [
      'The Trinity is the central mystery of Christian faith. God is not a solitary monad but a communion of three Persons who share one divine nature. The Father begets the Son; the Spirit proceeds from the Father (and, in the Western tradition, from the Father and the Son). These processions are eternal, not events in time.',
      'The doctrine was clarified by the Councils of Nicaea (325) and Constantinople (381) to protect two truths: there is only one God, and the Son and the Spirit are truly divine, not created beings.',
      'The Trinity is not a mathematical puzzle to be solved but a mystery to be contemplated. The Church’s analogies — light, water, a family — hint at it but never exhaust it. In practice, every prayer is addressed to the Father, through the Son, in the Holy Spirit.',
    ],
    scripture: ['Matthew 28:19', 'John 1:1–18', 'John 14:15–17', '2 Corinthians 13:13'],
    ccc: ccc('CCC 232–260'),
    terms: [{ term: 'Hypostasis / Person', text: 'A distinct reality within the one God, not a separate being or “part” of God.' }, { term: 'Consubstantial', text: 'Of the same substance or essence; the Nicene Creed says the Son is consubstantial with the Father.' }],
    source: { label: 'Catechism: The Holy Trinity', url: 'https://www.vatican.va/archive/ENG0015/__P1J.HTM' },
  },
  {
    id: 'incarnation', category: 'Fundamental Theology', title: 'The Incarnation',
    summary: 'The eternal Son of God assumed a complete human nature and became man, remaining one Person with two natures.',
    body: [
      'At the Annunciation, Mary consented to conceive by the Holy Spirit the child who is the Son of God. The Word of God did not merely inhabit a human body; he truly became human, with a human mind, will, and emotions, while remaining fully divine.',
      'The Council of Chalcedon (451) defined that Christ is one Person in two natures, “without confusion, without change, without division, without separation.” This guards both the fullness of his divinity and the fullness of his humanity.',
      'The Incarnation means that God has entered creation from within. It is the basis of Christian hope: human nature has been assumed, healed, and raised in Christ.',
    ],
    scripture: ['John 1:14', 'Philippians 2:5–11', 'Hebrews 4:15'],
    ccc: ccc('CCC 484–511'),
    terms: [{ term: 'Theotokos', text: '“God-bearer” or Mother of God — a title affirmed at Ephesus (431) to protect the belief that the child Mary bore is God the Son incarnate.' }],
  },
  {
    id: 'original-sin', category: 'Fundamental Theology', title: 'Original Sin',
    summary: 'The fallen state into which humanity is born, a consequence of the first sin, transmitted not by imitation but by propagation.',
    body: [
      'The Church teaches that the first human beings were created in grace and destined for life with God. By sin they lost that gift, and their descendants are born without the original holiness that Adam and Eve possessed. This is called original sin.',
      'Original sin is not a personal fault in the newborn. It is a wounded condition: human nature is inclined to sin (concupiscence) and subject to death. Baptism removes original sin, though the inclination to sin remains and must be struggled against with grace.',
      'The doctrine guards two truths: evil is real and not part of God’s good creation, and human beings are nevertheless capable of moral choice and responsible for their actions.',
    ],
    scripture: ['Genesis 3', 'Romans 5:12–21', 'Psalm 51:5'],
    ccc: ccc('CCC 396–412'),
  },
  {
    id: 'grace', category: 'Fundamental Theology', title: 'Grace',
    summary: 'God’s free, undeserved gift of his life and help, which makes conversion, holiness, and salvation possible.',
    body: [
      'Grace is not a substance or a reward but God’s own life given to us. Sanctifying grace is the stable disposition of the soul that makes us pleasing to God and members of his family. Actual grace is God’s particular help in a moment of decision or action.',
      'Grace is always initiated by God, but it does not destroy human freedom. Catholic teaching rejects both Pelagianism (the idea that we can save ourselves by our own efforts) and a fatalism that denies real human cooperation.',
      'The sacraments are the ordinary means by which grace is given, but God is not bound by them.',
    ],
    scripture: ['Ephesians 2:8–10', 'Romans 8:14–17', 'John 15:1–17'],
    ccc: ccc('CCC 1987–2029'),
  },
  {
    id: 'salvation', category: 'Fundamental Theology', title: 'Salvation',
    summary: 'God’s saving work, accomplished through Christ’s death and Resurrection and received in faith, Baptism, and a life of charity.',
    body: [
      'Salvation is deliverance from sin and death and the gift of eternal life with God. Catholics believe that Christ’s sacrifice on the Cross was once-for-all and perfectly sufficient, and that the sacraments apply its saving power to us.',
      'Faith alone is not sufficient if it remains without works and without Baptism; the Letter of James insists that “faith without works is dead” (James 2:26). At the same time, good works are themselves the fruit of grace, not a way of earning salvation.',
      'The Church also teaches that those who have never heard the Gospel but seek God sincerely can be saved — a truth sometimes called the desire for Baptism.',
    ],
    scripture: ['Romans 5:1–11', 'James 2:14–26', '1 Timothy 2:4–6'],
    ccc: ccc('CCC 1987–1995', 'CCC 1257–1261'),
  },
  {
    id: 'redemption', category: 'Fundamental Theology', title: 'Redemption',
    summary: 'Christ’s ransom of humanity from sin and death through his suffering, death, and Resurrection.',
    body: [
      'The word “redemption” evokes the liberation of a slave: Christ pays the price of our freedom, not with silver or gold but with his own blood (1 Peter 1:18–19). His death is a sacrifice that expiates sin and reconciles us to the Father.',
      'Catholic theology, following St Anselm and St Thomas Aquinas, understands the Cross as satisfaction for sin offered by one who is both fully human (able to represent us) and fully divine (worthy of infinite merit). Other models — ransom, victory over death, moral example — illuminate different aspects of the same mystery.',
    ],
    scripture: ['1 Peter 1:18–19', 'Hebrews 9:11–15', 'Colossians 1:13–20'],
    ccc: ccc('CCC 571–616'),
  },
  {
    id: 'resurrection', category: 'Fundamental Theology', title: 'The Resurrection',
    summary: 'Christ rose bodily from the dead on the third day, the foundation of Christian faith and the promise of our own resurrection.',
    body: [
      'The Gospels and St Paul testify that the tomb was empty and that the risen Christ appeared to many witnesses. The Resurrection is not a symbolic story about hope surviving death; it is the proclamation of a real event that changed history.',
      'For Catholics, the Resurrection confirms Christ’s divinity, vindicates his teaching, and opens the way for our own bodily resurrection. The Creed’s words “I look forward to the resurrection of the dead” are not an optional embellishment.',
    ],
    scripture: ['1 Corinthians 15:1–28', 'Matthew 28:1–20', 'Luke 24:1–53'],
    ccc: ccc('CCC 638–658'),
  },
  {
    id: 'eternal-life', category: 'Fundamental Theology', title: 'Heaven, Hell, and Purgatory',
    summary: 'The Church’s teaching on the final destiny of the human person: communion with God, definitive self-exclusion from him, or purification before entrance into glory.',
    body: [
      'Heaven is the definitive state of communion with God, in which the blessed see God face to face and are fully alive. It is the gift of God’s mercy to those who die in his grace.',
      'Hell is the self-chosen, definitive separation from God. The Church teaches that it is real and eternal; she does not declare any particular human being to be in hell. God desires all to be saved, but he does not force love.',
      'Purgatory is the purification of those who die in God’s grace but still have attachment to sin or unpaid temporal consequences. It is not a “second chance” after death but the final application of God’s mercy. Catholics have traditionally prayed for the dead, as 2 Maccabees 12:46 attests.',
    ],
    scripture: ['John 14:1–6', 'Matthew 25:31–46', '2 Maccabees 12:42–46', '1 Corinthians 3:15'],
    ccc: ccc('CCC 1023–1060'),
    terms: [{ term: 'Temporal punishment', text: 'The earthly or posthumous consequences of sin that remain even after guilt has been forgiven; addressed by penance, indulgences, and prayer.' }],
  },
  {
    id: 'natural-law', category: 'Moral Theology', title: 'Natural Law',
    summary: 'The moral order rooted in human nature and accessible to reason, which Catholic teaching sees as grounded in God’s creative wisdom.',
    body: [
      'Natural law is not a list of rules invented by the Church. It is the idea that human beings, by their very nature, have purposes and goods — life, family, friendship, truth, community — and that reason can discern which actions protect or violate those goods.',
      'St Thomas Aquinas gave the classical formulation: law is “an ordinance of reason for the common good, made by him who has care of the community, and promulgated” (Summa Theologiae I-II, q.90, a.4). Human law is just when it conforms to this deeper rational and moral order.',
      'Catholic social teaching and sexual ethics both draw on natural law. It is contested in modern philosophy, so it should be explained patiently rather than assumed.',
    ],
    scripture: ['Romans 1:19–20', 'Romans 2:14–16', 'Wisdom 13:1–9'],
    ccc: ccc('CCC 1954–1960'),
    terms: [{ term: 'Synderesis', text: 'The natural habit of the practical reason by which we grasp first moral principles, such as “do good and avoid evil.”' }],
  },
  {
    id: 'ten-commandments', category: 'Moral Theology', title: 'The Ten Commandments',
    summary: 'The Decalogue given to Moses, which Catholic moral teaching treats as a fundamental statement of God’s will for human life.',
    body: [
      'The Ten Commandments (Exodus 20; Deuteronomy 5) are divided into duties toward God and duties toward neighbour. Jesus did not abolish them; he summed them up in the two great commandments of love of God and love of neighbour (Matthew 22:36–40).',
      'Catholic catechesis often numbers them as: (1) no other gods; (2) no graven images; (3) keep God’s name holy; (4) keep the Sabbath; (5) honour parents; (6) do not kill; (7) do not commit adultery; (8) do not steal; (9) do not bear false witness; (10) do not covet.',
      'The commandments are a path of freedom, not a burden: they protect the goods that make human life flourish.',
    ],
    scripture: ['Exodus 20:1–17', 'Matthew 22:34–40', 'John 14:15'],
    ccc: ccc('CCC 2052–2089'),
  },
  {
    id: 'beatitudes', category: 'Moral Theology', title: 'The Beatitudes',
    summary: 'The blessings pronounced by Jesus in the Sermon on the Mount, which reveal the kingdom’s surprising values.',
    body: [
      'In Matthew 5:3–12, Jesus blesses the poor in spirit, those who mourn, the meek, those who hunger for righteousness, the merciful, the pure of heart, the peacemakers, and those persecuted for righteousness’ sake.',
      'The Beatitudes are not a list of feelings to cultivate but a portrait of the kingdom and of the kind of person who belongs to it. They reverse ordinary expectations: power, wealth, and reputation are not the measure of blessing.',
      'They are also a promise: God is on the side of the vulnerable, and the final verdict belongs to him.',
    ],
    scripture: ['Matthew 5:3–12', 'Luke 6:20–26'],
    ccc: ccc('CCC 1716–1729'),
  },
  {
    id: 'seven-deadly-sins', category: 'Moral Theology', title: 'The Seven Deadly Sins',
    summary: 'Deep-rooted patterns of sin — pride, greed, envy, wrath, lust, gluttony, and sloth — that give rise to many other sins.',
    body: [
      'The tradition of the seven deadly (or capital) sins developed in the desert Fathers and was systematised by Pope Gregory I and St Thomas Aquinas. “Capital” does not mean “unforgivable” but that these vices are sources or heads of other sins.',
      'Pride is considered the root of all sin because it puts the self in God’s place. The corresponding virtues are humility, generosity, charity, patience, chastity, temperance, and diligence.',
      'Understanding these patterns helps us name what is actually going on in our moral lives — not to produce guilt, but to seek healing.',
    ],
    ccc: ccc('CCC 1864'),
    terms: [{ term: 'Vice', text: 'A settled habit of acting wrongly, formed by repeated choices and contrary to the corresponding virtue.' }],
  },
  {
    id: 'virtues', category: 'Moral Theology', title: 'Cardinal and Theological Virtues',
    summary: 'Four human virtues — prudence, justice, fortitude, temperance — and three God-given virtues — faith, hope, charity.',
    body: [
      'A virtue is a stable disposition to do the good easily and with delight. The cardinal virtues are called “cardinal” from the Latin cardo, “hinge,” because other moral virtues turn on them. They can be cultivated by practice and are accessible to reason.',
      'The theological virtues — faith, hope, and love — are infused by God into the soul at Baptism. Their object is God himself: we believe in him, hope in his promises, and love him above all things. They are not merely human qualities raised to a higher level.',
      'Charity (caritas) is the greatest: it is the very life of God in us and the form of all the virtues.',
    ],
    scripture: ['1 Corinthians 13:4–13', 'Proverbs 8:12–21'],
    ccc: ccc('CCC 1803–1829'),
  },
  {
    id: 'conscience', category: 'Moral Theology', title: 'Conscience',
    summary: 'The inner judgement of practical reason by which a person discerns whether an action is right or wrong.',
    body: [
      'Conscience is not simply a feeling or an opinion. It is the human person’s God-given capacity to apply moral knowledge to a concrete choice. It must be formed by Scripture, the Church’s teaching, reason, and honest self-examination.',
      'A person must follow their certain conscience, even if it is mistaken about the facts; but they also have a duty to inform their conscience. "Invincible ignorance" excuses from fault only when the person could not have known the truth through reasonable diligence.',
      'A scrupulous conscience, which sees sin where there is none, needs gentle guidance from a priest or spiritual director.',
    ],
    scripture: ['Romans 2:14–16', '1 Timothy 1:5', 'John 8:31–32'],
    ccc: ccc('CCC 1776–1802'),
  },
  {
    id: 'mortal-venial', category: 'Moral Theology', title: 'Mortal and Venial Sin',
    summary: 'A distinction based on the gravity of the sin, the knowledge and consent of the person, and its effect on the life of grace.',
    body: [
      'A mortal sin is a grave violation of God’s law, committed with sufficient reflection and full consent. It destroys sanctifying grace in the soul and, if unrepented, excludes a person from communion with God. Confession is the ordinary means of forgiveness.',
      'A venial sin is a less serious failure or a grave sin committed without full knowledge or consent. It wounds but does not destroy the life of grace, and can be forgiven by acts of repentance, prayer, and receiving Communion.',
      'The distinction is not meant to produce anxiety. It helps us understand what is at stake and where God’s mercy is most needed.',
    ],
    scripture: ['1 John 5:16–17', 'Matthew 12:31–32'],
    ccc: ccc('CCC 1854–1864'),
  },
  {
    id: 'works-of-mercy', category: 'Moral Theology', title: 'The Works of Mercy',
    summary: 'Concrete acts of compassion — corporal and spiritual — through which Christians serve Christ in the poor and the hurting.',
    body: [
      'The traditional corporal works of mercy are: feed the hungry, give drink to the thirsty, clothe the naked, shelter the homeless, visit the sick, visit prisoners, and bury the dead. The spiritual works are: admonish sinners, instruct the ignorant, counsel the doubtful, comfort the sorrowful, bear wrongs patiently, forgive offences willingly, and pray for the living and the dead.',
      'These are not optional extras for especially holy people. Jesus identifies himself with the hungry, the sick, and the stranger (Matthew 25:31–46), and the parable of the Good Samaritan shows that love is practical.',
      'Every parish has people who need mercy — and every person can give something, even if it is only a kind word or a prayer.',
    ],
    scripture: ['Matthew 25:31–46', 'Luke 10:25–37', 'James 2:13'],
    ccc: ccc('CCC 2447'),
  },
  {
    id: 'social-teaching', category: 'Moral Theology', title: 'Catholic Social Teaching',
    summary: 'The body of principles about human dignity, the common good, solidarity, and the preferential option for the poor.',
    body: [
      'Catholic social teaching developed especially from Pope Leo XIII’s Rerum Novarum (1891) through the Second Vatican Council and the encyclicals of later popes. It neither endorses unbounded capitalism nor class struggle; it asks whether economic and political systems serve human dignity.',
      'Its central themes include the dignity of every person, the common good, the universal destination of goods, the preferential option for the poor, the rights of workers, solidarity, care for creation, and peace.',
      'The Church’s social teaching is not a political party platform. Catholics may disagree about the best policies while sharing these principles.',
    ],
    scripture: ['Genesis 1:26–28', 'Luke 4:18–19', 'Acts 2:44–45'],
    ccc: ccc('CCC 2419–2463'),
    source: { label: 'USCCB: Catholic Social Teaching', url: 'https://www.usccb.org/issues-and-action/catholic-social-teaching' },
  },
  {
    id: 'mary-mother-of-god', category: 'Mary and the Saints', title: 'Mary, Mother of God',
    summary: 'Mary is truly the Mother of God because the child she bore is God the Son incarnate — a title defined at the Council of Ephesus in 431.',
    body: [
      'Calling Mary Theotokos (“God-bearer”) does not mean that she is the source of Christ’s divinity. It protects the belief that the one person she carried in her womb was the eternal Son of God, who took human nature from her.',
      'Catholics honour Mary as the first and greatest disciple, the woman who said “yes” to God on behalf of humanity. Her faith, obedience, and humility are a model for every believer.',
      'The four Marian dogmas — divine motherhood, perpetual virginity, Immaculate Conception, and Assumption — define who Mary is in relation to Christ and his saving work.',
    ],
    scripture: ['Luke 1:26–56', 'John 2:1–11', 'Galatians 4:4'],
    ccc: ccc('CCC 963–975'),
  },
  {
    id: 'immaculate-conception', category: 'Mary and the Saints', title: 'The Immaculate Conception',
    summary: 'Mary was conceived without original sin, preserved by God’s grace in view of Christ’s saving merits.',
    body: [
      'The dogma, defined by Pope Pius IX in 1854, does not mean that Mary was conceived by a virgin (a common misunderstanding). It means that from the first instant of her existence she was free from original sin.',
      'This was possible because of the grace of Christ, applied to her in anticipation of his Cross. Mary was not saved apart from Christ; she was saved by him in a unique way.',
      'The feast is celebrated on 8 December, nine months before the feast of the Nativity of Mary on 8 September.',
    ],
    scripture: ['Genesis 3:15', 'Luke 1:28'],
    ccc: ccc('CCC 490–492'),
  },
  {
    id: 'assumption', category: 'Mary and the Saints', title: 'The Assumption of Mary',
    summary: 'Mary was taken up body and soul into heavenly glory at the end of her earthly life — defined as dogma in 1950.',
    body: [
      'Pope Pius XII defined the Assumption in the apostolic constitution Munificentissimus Deus, drawing on Scripture, the liturgy, and the constant tradition of the Church. The dogma does not specify whether Mary died before being assumed.',
      'The Assumption shows the destiny promised to all who belong to Christ: the resurrection of the body and life everlasting with God. It is a celebration of hope, not an isolated privilege.',
      'The feast on 15 August is a Holy Day of Obligation in many countries.',
    ],
    scripture: ['Genesis 3:15', '1 Corinthians 15:20–23', 'Revelation 12:1–2'],
    ccc: ccc('CCC 493–494'),
  },
  {
    id: 'perpetual-virginity', category: 'Mary and the Saints', title: 'The Perpetual Virginity of Mary',
    summary: 'Mary remained a virgin before, during, and after the birth of Christ — a doctrine held from the early Church.',
    body: [
      'The doctrine, affirmed by ecumenical councils and the popes, holds that Mary’s conception of Jesus was virginal, that her giving birth did not violate her physical integrity, and that she remained a virgin throughout her life.',
      'The Gospel references to Jesus’ “brothers and sisters” are understood in the tradition as relatives, not children of Mary; the wording of the original languages allows this reading.',
      'The doctrine is not based on a negative view of marriage but on Mary’s unique consecration to God for a unique mission.',
    ],
    scripture: ['Luke 1:34', 'Matthew 1:24–25', 'John 19:25–27'],
    ccc: ccc('CCC 495–498'),
  },
  {
    id: 'intercession', category: 'Mary and the Saints', title: 'Intercession of the Saints',
    summary: 'The saints pray for us before God; Catholics ask for their help just as they would ask a friend to pray.',
    body: [
      'The communion of saints means that the bonds of Christ’s love are not broken by death. The saints in heaven are alive in God, aware of the Church’s needs, and intercede for us (Revelation 5:8).',
      'Asking a saint to pray does not take anything away from Christ’s unique mediation: it depends on it. “There is one mediator between God and men, the man Christ Jesus” (1 Timothy 2:5) — but the many members of Christ’s body share in that one mediation.',
      'No saint acts independently of God. Any answer to prayer comes from God alone.',
    ],
    scripture: ['1 Timothy 2:1–5', 'Revelation 5:8', 'James 5:16'],
    ccc: ccc('CCC 954–962'),
  },
  {
    id: 'canonization-relics', category: 'Mary and the Saints', title: 'Canonisation, Relics, and Patron Saints',
    summary: 'How the Church recognises saints, why relics are honoured, and how particular saints become patrons of places and causes.',
    body: [
      'Canonisation is the Church’s definitive judgement that a deceased person lived a life of heroic virtue and is in heaven with God. It follows a careful investigation of the person’s life, writings, and reported miracles. The Church does not make a person holy; she recognises God’s work.',
      'Relics — remains or objects associated with a saint — are venerated, not worshipped. Honouring a relic honours the person and ultimately God, who made them holy. The Second Vatican Council called for abuses in this area to be corrected.',
      'A patron saint is a saint invoked for a particular place, occupation, illness, or cause. Patronage reflects the saint’s life, legend, or long-standing practice of the faithful.',
    ],
    scripture: ['Hebrews 11:1–12:2', 'Acts 19:11–12'],
    ccc: ccc('CCC 828', 'CCC 1674–1676'),
  },
  {
    id: 'papacy', category: 'Church Authority', title: 'The Papacy',
    summary: 'The Bishop of Rome succeeds St Peter and serves as the visible centre of unity and the guardian of the faith.',
    body: [
      'The papacy rests on Christ’s words to Peter in Matthew 16:18–19, John 21:15–17, and Luke 22:31–32. Catholic teaching understands these as giving Peter and his successors a unique ministry of confirming the faith and shepherding the whole Church.',
      'The First Vatican Council (1869–70) defined the conditions of papal infallibility: the Pope, as supreme teacher, can define a doctrine concerning faith or morals to be held by the whole Church without error when he intends to do so. This is a rare, solemn act — not a claim that every papal remark is infallible.',
      'The Second Vatican Council emphasised that papal authority is pastoral and collegial: the Pope exercises it together with the bishops, not instead of them.',
    ],
    scripture: ['Matthew 16:18–19', 'John 21:15–17', 'Luke 22:31–32'],
    ccc: ccc('CCC 880–887'),
    source: { label: 'Vatican I: Pastor Aeternus', url: 'https://www.vatican.va/archive/hist_councils/i-vatican_council/documents/vat-i_const_18700718_pastor-aeternus_en.html' },
  },
  {
    id: 'apostolic-succession', category: 'Church Authority', title: 'Apostolic Succession',
    summary: 'Bishops stand in a continuous line of ordained ministry reaching back to the apostles.',
    body: [
      'Christ chose the apostles and sent them as the Father sent him. The apostles in turn ordained bishops and presbyters to continue their work. Through the laying on of hands, the Church understands herself as apostolic in origin, teaching, and ministry.',
      'Apostolic succession is not a mechanical chain of ordinations; it includes continuity in faith, sacraments, and mission. The Church has always treated valid orders and valid sacraments as signs of this continuity.',
      'Anglican and Orthodox ordinations are assessed differently by the Catholic Church; dialogue on these questions continues.',
    ],
    scripture: ['Matthew 10:1–7', 'Acts 1:15–26', '2 Timothy 1:6–7', 'Titus 1:5'],
    ccc: ccc('CCC 857–862'),
  },
  {
    id: 'councils-magisterium', category: 'Church Authority', title: 'Ecumenical Councils and the Magisterium',
    summary: 'The Church’s teaching office, exercised by Pope and bishops, and the great councils that defined the faith.',
    body: [
      'An ecumenical council is a gathering of all the bishops of the Church, convoked by the Pope, to discern and define matters of faith, morals, and discipline. Seven are generally recognised as ecumenical in the first millennium, followed by Lateran IV, Lyons I and II, Vienne, Constance, Basel-Ferrara-Florence, Trent, Vatican I, and Vatican II.',
      'The Magisterium includes both the ordinary teaching of the Pope and bishops and the extraordinary teaching of a council or papal definition. Not every document carries the same weight; the Catechism distinguishes degrees of authority.',
      'The sensus fidelium — the faith of the believing people — is not a poll, but the Church listens to it as a sign of the Spirit’s presence.',
    ],
    scripture: ['Acts 15:1–35', 'Matthew 18:18'],
    ccc: ccc('CCC 888–892'),
  },
  {
    id: 'scripture-tradition', category: 'Church Authority', title: 'Sacred Scripture and Sacred Tradition',
    summary: 'Two inseparable modes of God’s revelation: the inspired books and the living transmission of the apostolic faith.',
    body: [
      'At the Second Vatican Council, Dei Verbum taught that Scripture and Tradition flow from the same divine wellspring and together form one sacred deposit of faith. Scripture is the word of God written under inspiration; Tradition is that word living on in the Church.',
      'The Church does not claim a second, independent revelation. Nor does she treat Tradition as an excuse to change the Gospel. Both are served by the Magisterium, which is itself within them rather than above them.',
      'Knowing this helps explain why Catholics do not treat “Sola Scriptura” as sufficient: the canon of Scripture itself was recognised and handed on by the Church.',
    ],
    scripture: ['2 Timothy 3:14–17', '2 Thessalonians 2:15', 'John 20:30–31'],
    ccc: ccc('CCC 80–95'),
    source: { label: 'Dei Verbum (Vatican II)', url: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_en.html' },
  },
  {
    id: 'aquinas', category: 'Philosophical Foundations', title: 'Saint Thomas Aquinas',
    summary: 'The Dominican theologian (1225–1274) whose synthesis of faith and Aristotelian reason shapes Catholic theology.',
    body: [
      'Thomas Aquinas taught at Paris and Naples and wrote the Summa Theologiae, a vast structured treatment of God, creation, human nature, ethics, and Christ. His method was to raise objections, answer them with reason and revelation, and draw careful distinctions.',
      'His central conviction was that grace does not destroy nature but perfects it. Since all truth comes from God, reason and faith cannot ultimately contradict one another.',
      '“Thomism” is not the only Catholic theology, but the Church repeatedly recommends Thomas as a master and guide. The Catechism cites him frequently.',
    ],
    ccc: ccc('CCC 61'),
    source: { label: 'Summa Theologiae (English)', url: 'https://www.newadvent.org/summa/' },
  },
  {
    id: 'faith-and-reason', category: 'Philosophical Foundations', title: 'Faith and Reason',
    summary: 'Catholic teaching holds that faith and reason are complementary ways of knowing, both grounded in God as the source of truth.',
    body: [
      'Faith is not a leap opposed to reason. It is a reasoned trust in God who reveals himself, supported by signs and testimony. At the same time, faith goes beyond what reason alone can establish: the Trinity and the Incarnation are known because God has revealed them.',
      'The Second Vatican Council’s Pastoral Constitution Gaudium et Spes insists that the Church respects the legitimate autonomy of human reason and the findings of the sciences.',
      'When apparent conflicts arise, Catholics are called to patient investigation: either the interpretation of Scripture needs refinement, or the scientific claim needs revision, or both.',
    ],
    scripture: ['1 Peter 3:15 — “Always be ready to give an explanation…”', 'Romans 12:2'],
    ccc: ccc('CCC 159', 'CCC 170'),
    source: { label: 'Gaudium et Spes §59', url: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651207_gaudium-et-spes_en.html' },
  },
  {
    id: 'virtue-ethics', category: 'Philosophical Foundations', title: 'Virtue Ethics',
    summary: 'An approach to morality focused on character, habits, and the kind of person one becomes, rather than only on rules.',
    body: [
      'In the Aristotelian-Thomistic tradition, the moral life is about becoming a certain kind of person. Virtues are stable habits of choosing the good, formed by repeated action, education, friendship, and grace.',
      'Rules matter, but they do not cover every situation. A prudent person learns to see what the good requires here and now, with attention to circumstances and consequences.',
      'Catholic virtue ethics is completed by the theological virtues, which orient human character toward God and union with him.',
    ],
    ccc: ccc('CCC 1803–1810'),
  },
  {
    id: 'existence-of-god', category: 'Philosophical Foundations', title: 'The Existence of God',
    summary: 'Classical arguments for God’s existence, from causality, motion, contingency, design, and moral experience.',
    body: [
      'St Thomas Aquinas’s “Five Ways” reason from features of the world to a first cause, an unmoved mover, a necessary being, a source of order, and an intelligent governor. They are not proofs that compel assent like a mathematical theorem; they are arguments that make belief reasonable.',
      'Other paths include the moral argument (objective moral obligation points to a lawgiver), the existential experience of contingency, and the witness of religious experience. Vatican I taught that God’s existence can be known by reason from created things.',
      'Catholics do not believe in God because the arguments are irrefutable; they believe because God has revealed himself, and reason confirms what faith holds.',
    ],
    ccc: ccc('CCC 46–48'),
    source: { label: 'Summa Theologiae I, q.2, a.3', url: 'https://www.newadvent.org/summa/1002.htm' },
  },
  {
    id: 'objective-morality', category: 'Philosophical Foundations', title: 'Objective Morality and Human Nature',
    summary: 'Catholic ethics holds that some acts are right or wrong independently of preference or culture, because human nature has a real purpose.',
    body: [
      'If human beings were only bundles of desires, moral disagreement would be a negotiation between preferences. Catholic teaching holds instead that persons have a nature with real goods — life, truth, family, friendship, and communion with God — and that actions can either honour or damage those goods.',
      'This is the basis of the Church’s claims about intrinsic evil: certain acts are wrong regardless of intention or consequences, because they directly violate a fundamental good. The Catechism states that “there does not exist a ‘good’ intention (for example, a desire to save souls) that would make an intrinsically evil act good” (CCC 1759).',
      'Human freedom is therefore not the power to do whatever one wants, but the capacity to choose the good. Objective morality, far from restricting freedom, is its condition.',
    ],
    scripture: ['Romans 1:18–32', 'Jeremiah 2:13'],
    ccc: ccc('CCC 1749–1761', 'CCC 1954–1960'),
  },
];

export const getTeaching = (id: string) => teachings.find((t) => t.id === id);
