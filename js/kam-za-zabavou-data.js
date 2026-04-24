/* Verejne akcie pre rezim "Kam za zabavou".
   Kazda akcia ma vlastny zaznam, aby sa neskor dala prehladne doplnat.
   `poster` a `moreInfoUrl` su nepovinne. Ak chybaju, modal ukaze bezpecny placeholder.
   Odporucana cesta pre plagaty:
   assets/images/365-dni-zabavy/kam-za-zabavou/05-maj/nazov-plagatu.jpg
*/

const publicEventMonths = [
  { key: '01', number: '01', name: 'Janu&aacute;r', accent: 'var(--brand-tint)' },
  { key: '02', number: '02', name: 'Febru&aacute;r', accent: 'var(--brand-primary)' },
  { key: '03', number: '03', name: 'Marec', accent: 'var(--brand-secondary)' },
  { key: '04', number: '04', name: 'Apr&iacute;l', accent: 'var(--brand-tint)' },
  { key: '05', number: '05', name: 'M&aacute;j', accent: 'var(--brand-primary)' },
  { key: '06', number: '06', name: 'J&uacute;n', accent: 'var(--brand-secondary)' },
  { key: '07', number: '07', name: 'J&uacute;l', accent: 'var(--brand-primary)' },
  { key: '08', number: '08', name: 'August', accent: 'var(--brand-tint)' },
  { key: '09', number: '09', name: 'September', accent: 'var(--brand-primary)' },
  { key: '10', number: '10', name: 'Okt&oacute;ber', accent: 'var(--brand-tint)' },
  { key: '11', number: '11', name: 'November', accent: 'var(--brand-secondary)' },
  { key: '12', number: '12', name: 'December', accent: 'var(--brand-primary)' }
];

const publicEventCities = [
  { key: 'bratislava', name: 'Bratislava a okolie' },
  { key: 'trnava', name: 'Trnava a okolie' },
  { key: 'trencin', name: 'Trenčín a okolie' },
  { key: 'nitra', name: 'Nitra a okolie' },
  { key: 'nove-zamky', name: 'Nové Zámky a okolie' },
  { key: 'zilina', name: 'Žilina a okolie' },
  { key: 'banska-bystrica', name: 'Banská Bystrica a okolie' },
  { key: 'presov', name: 'Prešov a okolie' },
  { key: 'kosice', name: 'Košice a okolie' }
];

const publicEvents = [
  {
    id: 'bratislava-novorocny-mestsky-karneval',
    month: '01',
    isoDate: '2026-01-18',
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
    isoDate: '2026-02-14',
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
    isoDate: '2026-03-22',
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
    isoDate: '2026-04-12',
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
    isoDate: '2026-04-26',
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
    isoDate: '2026-05-17',
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
    isoDate: '2026-06-01',
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
    isoDate: '2026-07-11',
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
    isoDate: '2026-08-09',
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
    isoDate: '2026-09-20',
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
    isoDate: '2026-10-31',
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
    isoDate: '2026-11-15',
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
    isoDate: '2026-12-13',
    cityKey: 'zilina',
    title: 'Viano&#269;n&yacute; ve&#269;er v meste',
    when: '13. december 2026',
    where: 'viano&#269;n&eacute; meste&#269;ko, &#381;ilina',
    poster: '',
    moreInfoUrl: ''
  }
];

