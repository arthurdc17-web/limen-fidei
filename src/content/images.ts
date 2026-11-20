/**
 * Photographs sourced from Wikimedia Commons. Credits and licence details are
 * listed on /sources. Remote URLs are used so the repository stays lightweight.
 */
// Wikimedia's thumbnail service serves a limited set of generated widths.
// Requesting an arbitrary size can return HTTP 400, so map to supported buckets.
const thumbWidth = (width: number) => (width >= 1600 ? 1920 : 1280);
const commons = (path: string, width = 1280) =>
  `https://thumb.wikimedia.org/wikipedia/commons/thumb/${path}/${thumbWidth(width)}px-${path.split('/').pop()}`;

export const images = {
  hero: commons('e/e1/Int%C3%A9rieur_de_la_basilique-cath%C3%A9drale_Notre-Dame_de_Qu%C3%A9bec_01.jpg', 1600),
  nave: commons('1/1b/Holy_Trinity_Catholic_Church_%28Trinity%2C_Indiana%29_-_altar_and_nave%2C_rear.jpg', 1200),
  stPeter: commons('9/93/S._Pietro_May_2022-15.jpg', 1200),
  stainedGlass: commons('b/b7/Chartres_stained_window_complete_-_The_life_of_Jesus_-_retouched_final_version_MK_10.jpg', 1200),
  resurrectionGlass: commons('9/9e/Resurrection_of_Christ_stained_glass_Saint_Peter_and_Paul_Cathedral_Saint_Petersburg.jpg', 1000),
  mass: commons('6/6c/Priest_celebrating_Mass_at_Altar_of_Leo_I_in_St._Peter%27s_Basilica.jpg', 1200),
  rosary: commons('4/4d/Rosary_2006-01-16.jpg', 1000),
  rosaryPolish: commons('6/60/2023_R%C3%B3%C5%BCaniec.jpg', 1000),
  crucifix: commons('7/7c/Main_crucifix%2C_Christ_the_King_Catholic_Church%2C_Auckland.jpg', 1000),
  mary: commons('c/cd/Statue_of_Our_Lady_of_Lourdes_in_Rosary_Square.jpg', 1000),
  madonna: commons('c/c0/Madonna_and_Child_with_Two_Angels_-_Pietro_Perugino_-_Louvre_INV_719.jpg', 1000),
  candles: commons('8/85/Paschal_Candles_-_Annunciation%2C_Toronto.jpg', 1000),
  francis: commons('5/56/Francis_of_Assisi_-_Annibale_Carracci.jpg', 1000),
  joseph: commons('2/2c/Guido_Reni_-_Saint_Joseph_and_the_Christ_Child_-_Google_Art_Project.jpg', 1000),
  bible: commons('3/33/The_Holy_Land_and_the_Bible%3B_%281888%29_%2814781452532%29.jpg', 1000),
  altar: commons('9/94/D%C3%BClmen%2C_Heilig-Kreuz-Kirche%2C_Altar_--_2019_--_3113-7.jpg', 1000),
};

export const imageCredits = [
  { title: 'Intérieur de la basilique-cathédrale Notre-Dame de Québec', file: 'Intérieur_de_la_basilique-cathédrale_Notre-Dame_de_Québec_01.jpg', source: 'Wikimedia Commons' },
  { title: 'Holy Trinity Catholic Church, Indiana — altar and nave', file: 'Holy_Trinity_Catholic_Church_(Trinity,_Indiana)_-_altar_and_nave,_rear.jpg', source: 'Wikimedia Commons' },
  { title: 'St Peter’s Basilica, Rome', file: 'S._Pietro_May_2022-15.jpg', source: 'Wikimedia Commons' },
  { title: 'Chartres stained glass — The Life of Jesus', file: 'Chartres_stained_window_complete_-_The_life_of_Jesus_-_retouched_final_version_MK_10.jpg', source: 'Wikimedia Commons' },
  { title: 'Resurrection stained glass, Saint Peter and Paul Cathedral, Saint Petersburg', file: 'Resurrection_of_Christ_stained_glass_Saint_Peter_and_Paul_Cathedral_Saint_Petersburg.jpg', source: 'Wikimedia Commons' },
  { title: 'Priest celebrating Mass at the Altar of Leo I, St Peter’s Basilica', file: "Priest_celebrating_Mass_at_Altar_of_Leo_I_in_St._Peter's_Basilica.jpg", source: 'Wikimedia Commons' },
  { title: 'Rosary', file: 'Rosary_2006-01-16.jpg', source: 'Wikimedia Commons' },
  { title: 'Traditional rosary', file: '2023_Różaniec.jpg', source: 'Wikimedia Commons' },
  { title: 'Main crucifix, Christ the King Catholic Church, Auckland', file: 'Main_crucifix,_Christ_the_King_Catholic_Church,_Auckland.jpg', source: 'Wikimedia Commons' },
  { title: 'Our Lady of Lourdes, Rosary Square', file: 'Statue_of_Our_Lady_of_Lourdes_in_Rosary_Square.jpg', source: 'Wikimedia Commons' },
  { title: 'Madonna and Child with Two Angels — Perugino', file: 'Madonna_and_Child_with_Two_Angels_-_Pietro_Perugino_-_Louvre_INV_719.jpg', source: 'Wikimedia Commons / Louvre' },
  { title: 'Paschal candles, Annunciation, Toronto', file: 'Paschal_Candles_-_Annunciation,_Toronto.jpg', source: 'Wikimedia Commons' },
  { title: 'Saint Francis of Assisi — Annibale Carracci', file: 'Francis_of_Assisi_-_Annibale_Carracci.jpg', source: 'Wikimedia Commons' },
  { title: 'Saint Joseph and the Christ Child — Guido Reni', file: 'Guido_Reni_-_Saint_Joseph_and_the_Christ_Child_-_Google_Art_Project.jpg', source: 'Wikimedia Commons' },
  { title: 'The Holy Land and the Bible (1888)', file: 'The_Holy_Land_and_the_Bible;_(1888)_(14781452532).jpg', source: 'Wikimedia Commons' },
  { title: 'Altar of the Holy Cross Church, Dülmen', file: 'Dülmen,_Heilig-Kreuz-Kirche,_Altar_--_2019_--_3113-7.jpg', source: 'Wikimedia Commons' },
];

export const commonsFileUrl = (file: string) =>
  `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file).replace(/%2F/g, '/')}`;
