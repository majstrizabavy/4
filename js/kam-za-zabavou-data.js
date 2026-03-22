/* Verejne akcie pre rezim "Kam za zabavou".
   Kazda akcia ma vlastny zaznam, aby sa neskor dala prehladne doplnat.
   `poster` a `moreInfoUrl` su nepovinne. Ak chybaju, modal ukaze bezpecny placeholder.
   Odporucana cesta pre plagaty:
   assets/images/365-dni-zabavy/kam-za-zabavou/05-maj/nazov-plagatu.jpg
*/

const publicEventMonths = [
  { key: '01', number: '01', name: 'Janu&aacute;r', accent: 'var(--pink)' },
  { key: '02', number: '02', name: 'Febru&aacute;r', accent: 'var(--violet)' },
  { key: '03', number: '03', name: 'Marec', accent: 'var(--cyan)' },
  { key: '04', number: '04', name: 'Apr&iacute;l', accent: 'var(--pink)' },
  { key: '05', number: '05', name: 'M&aacute;j', accent: 'var(--violet)' },
  { key: '06', number: '06', name: 'J&uacute;n', accent: 'var(--cyan)' },
  { key: '07', number: '07', name: 'J&uacute;l', accent: 'var(--violet)' },
  { key: '08', number: '08', name: 'August', accent: 'var(--pink)' },
  { key: '09', number: '09', name: 'September', accent: 'var(--violet)' },
  { key: '10', number: '10', name: 'Okt&oacute;ber', accent: 'var(--pink)' },
  { key: '11', number: '11', name: 'November', accent: 'var(--cyan)' },
  { key: '12', number: '12', name: 'December', accent: 'var(--violet)' }
];

const publicEventCities = [
  { key: 'all', name: 'Vsetky mesta' },
  { key: 'bratislava', name: 'Bratislava' },
  { key: 'trnava', name: 'Trnava' },
  { key: 'trencin', name: 'Trencin' },
  { key: 'nitra', name: 'Nitra' },
  { key: 'nove-zamky', name: 'Nove Zamky' },
  { key: 'zilina', name: 'Zilina' },
  { key: 'banska-bystrica', name: 'Banska Bystrica' },
  { key: 'presov', name: 'Presov' },
  { key: 'kosice', name: 'Kosice' }
];

const publicEvents = [
  {
    id: 'bratislava-novorocny-mestsky-karneval',
    month: '01',
    cityKey: 'bratislava',
    title: 'Novoro&#269;n&yacute; mestsk&yacute; karneval',
    when: '18. janu&aacute;r 2026',
    where: 'centrum mesta, Bratislava',
    poster: '',
    moreInfoUrl: ''
  },
  {
    id: 'trnava-zimny-vecer-na-namesti',
    month: '02',
    cityKey: 'trnava',
    title: 'Zimn&yacute; ve&#269;er na n&aacute;mest&iacute;',
    when: '14. febru&aacute;r 2026',
    where: 'Troji&#269;n&eacute; n&aacute;mestie, Trnava',
    poster: '',
    moreInfoUrl: ''
  },
  {
    id: 'nitra-jarne-afterwork-stretnutie',
    month: '03',
    cityKey: 'nitra',
    title: 'Jarn&eacute; afterwork stretnutie',
    when: '22. marec 2026',
    where: 'mestsk&aacute; z&oacute;na, Nitra',
    poster: '',
    moreInfoUrl: ''
  },
  {
    id: 'nove-zamky-den-otvorenych-dveri',
    month: '04',
    cityKey: 'nove-zamky',
    title: 'De&#328; otvoren&yacute;ch dver&iacute; s programom pre rodiny',
    when: '12. apr&iacute;l 2026',
    where: 'Mestsk&eacute; kult&uacute;rne centrum, Nov&eacute; Z&aacute;mky',
    poster: 'assets/images/365-dni-zabavy/kam-za-zabavou/04-april/novezamky-dod.png',
    moreInfoUrl: 'assets/images/365-dni-zabavy/kam-za-zabavou/04-april/novezamky-dod.png'
  },
  {
    id: 'banska-bystrica-christianalex-live',
    month: '04',
    cityKey: 'banska-bystrica',
    title: 'Christian Alex live session',
    when: '26. apr&iacute;l 2026',
    where: 'Urban stage, Bansk&aacute; Bystrica',
    poster: 'assets/images/365-dni-zabavy/kam-za-zabavou/04-april/christianalex-BB.jpeg',
    moreInfoUrl: 'assets/images/365-dni-zabavy/kam-za-zabavou/04-april/christianalex-BB.jpeg'
  },
  {
    id: 'presov-stretnime-sa-v-uliciach',
    month: '05',
    cityKey: 'presov',
    title: 'Stretnime sa v uliciach',
    when: '17. m&aacute;j 2026',
    where: 'pe&scaron;ia z&oacute;na, Pre&scaron;ov',
    poster: '',
    moreInfoUrl: ''
  },
  {
    id: 'zilina-den-deti-pod-holym-nebom',
    month: '06',
    cityKey: 'zilina',
    title: 'De&#328; det&iacute; pod hol&yacute;m nebom',
    when: '1. j&uacute;n 2026',
    where: 'park podujat&iacute;, &#381;ilina',
    poster: '',
    moreInfoUrl: ''
  },
  {
    id: 'bratislava-letny-open-air-vecer',
    month: '07',
    cityKey: 'bratislava',
    title: 'Letn&yacute; open air ve&#269;er',
    when: '11. j&uacute;l 2026',
    where: 'mestsk&aacute; terasa, Bratislava',
    poster: '',
    moreInfoUrl: ''
  },
  {
    id: 'kosice-hudba-na-namesti',
    month: '08',
    cityKey: 'kosice',
    title: 'Hudba na n&aacute;mest&iacute;',
    when: '9. august 2026',
    where: 'Hlavn&aacute; ulica, Ko&scaron;ice',
    poster: '',
    moreInfoUrl: ''
  },
  {
    id: 'trnava-jesenny-mestsky-social',
    month: '09',
    cityKey: 'trnava',
    title: 'Jesenn&yacute; mestsk&yacute; social',
    when: '20. september 2026',
    where: 'promen&aacute;da mesta, Trnava',
    poster: '',
    moreInfoUrl: ''
  },
  {
    id: 'nitra-halloween-night-special',
    month: '10',
    cityKey: 'nitra',
    title: 'Halloween night special',
    when: '31. okt&oacute;ber 2026',
    where: 'mestsk&yacute; klub, Nitra',
    poster: '',
    moreInfoUrl: ''
  },
  {
    id: 'presov-indoor-community-night',
    month: '11',
    cityKey: 'presov',
    title: 'Indoor community night',
    when: '15. november 2026',
    where: 'event hall, Pre&scaron;ov',
    poster: '',
    moreInfoUrl: ''
  },
  {
    id: 'zilina-vianocny-vecer-v-meste',
    month: '12',
    cityKey: 'zilina',
    title: 'Viano&#269;n&yacute; ve&#269;er v meste',
    when: '13. december 2026',
    where: 'viano&#269;n&eacute; meste&#269;ko, &#381;ilina',
    poster: '',
    moreInfoUrl: ''
  }
];
