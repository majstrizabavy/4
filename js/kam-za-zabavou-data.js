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

