/* 365 dni zabavy data
   Tento subor drzi iba mesiace pre rezim "Naplanuj si akciu".
*/
window.yearPlannerData = {
  custom: {
    gridId: 'yearGridCustom',
    months: [
      // JANUAR
      {
        number: '01',
        name: 'JANUAR',
        title: 'karnevaly, novoro&#269;n&eacute; akcie, zimn&eacute; programy, firemn&eacute; ve&#269;ierky',
        hint: 'Moderovanie &bull; Program &bull; Maskoti &bull; Animatori',
        accent: 'var(--brand-primary)',
        plannerEvents: [
          { id: 'karnevaly', label: 'Karnevaly' },
          { id: 'novorocne-akcie', label: 'Novoročné akcie' },
          { id: 'zimne-programy', label: 'Zimné programy' },
          { id: 'firemne-vecierky', label: 'Firemné večierky' }
        ]
      },
      // FEBRUAR
      {
        number: '02',
        name: 'FEBRUAR',
        title: 'karnevaly, valent&iacute;nske akcie, plesy, firemn&eacute; eventy',
        hint: 'Maskoti &bull; Animatori &bull; Hudobny program &bull; Sutaze',
        accent: 'var(--brand-tint)',
        plannerEvents: [
          { id: 'karnevaly', label: 'Karnevaly' },
          { id: 'valentinske-akcie', label: 'Valentínske akcie' },
          { id: 'plesy', label: 'Plesy' },
          { id: 'firemne-eventy', label: 'Firemné eventy' }
        ]
      },
      // MAREC
      {
        number: '03',
        name: 'MAREC',
        title: 'dni otvoren&yacute;ch dver&iacute;, De&#328; &#382;ien, ve&#318;kono&#269;n&eacute; programy, ve&#318;kono&#269;n&eacute; trhy',
        hint: 'Moderovanie &bull; Program &bull; Rodinne zony &bull; Tematicke akcie',
        accent: 'var(--brand-secondary)',
        plannerEvents: [
          { id: 'dni-otvorenych-dveri', label: 'Dni otvorených dverí' },
          { id: 'den-zien', label: 'Deň žien' },
          { id: 'velkonocne-programy', label: 'Veľkonočné programy' },
          { id: 'velkonocne-trhy', label: 'Veľkonočné trhy' }
        ]
      },
      // APRIL
      {
        number: '04',
        name: 'APRIL',
        title: 'dni otvoren&yacute;ch dver&iacute;, z&aacute;pisy do M&Scaron; a Z&Scaron;, ve&#318;kono&#269;n&eacute; akcie, firemn&eacute; akcie',
        hint: 'Tvorive dielne &bull; Program &bull; Rodinne zony &bull; Animatori',
        accent: 'var(--brand-primary)',
        plannerEvents: [
          { id: 'dni-otvorenych-dveri-april', label: 'Dni otvorených dverí' },
          { id: 'zapisy-ms-zs', label: 'Zápisy do MŠ a ZŠ' },
          { id: 'velkonocne-akcie', label: 'Veľkonočné akcie' },
          { id: 'firemne-akcie-april', label: 'Firemné akcie' }
        ]
      },
      // MAJ
      {
        number: '05',
        name: 'MAJ',
        title: '1. m&aacute;j / m&aacute;jov&eacute; oslavy, De&#328; matiek, maj&aacute;lesy, family day',
        hint: 'Stage program &bull; Family day &bull; Chill zony &bull; Moderovanie',
        accent: 'var(--brand-tint)',
        plannerEvents: [
          { id: 'majove-oslavy', label: '1. máj / Májové oslavy' },
          { id: 'den-matiek', label: 'Deň matiek' },
          { id: 'majalesy', label: 'Majálesy' },
          { id: 'family-day-maj', label: 'Family day' }
        ]
      },
      // JUN
      {
        number: '06',
        name: 'JUN',
        title: 'De&#328; det&iacute;, &scaron;kolsk&eacute; akcie, rozl&uacute;&#269;ky so &scaron;kolou, Vitaj leto',
        hint: 'Atrakcie &bull; Animatori &bull; Detske vystupenia &bull; Moderovanie',
        accent: 'var(--brand-secondary)',
        plannerEvents: [
          { id: 'den-deti', label: 'Den deti' },
          { id: 'skolske-akcie', label: 'Skolske akcie' },
          { id: 'rozlucky-so-skolou', label: 'Rozlucky so skolou' },
          { id: 'vitaj-leto', label: 'Vitaj leto' }
        ]
      },
      // JUL
      {
        number: '07',
        name: 'JUL',
        title: 'letn&eacute; t&aacute;bory, festivaly, &scaron;portov&eacute; dni, jarmoky',
        hint: 'Stage show &bull; Turnaje &bull; Vecerny program &bull; Moderovanie',
        accent: 'var(--brand-primary)',
        plannerEvents: [
          { id: 'letne-tabory', label: 'Letné tábory' },
          { id: 'festivaly-jul', label: 'Festivaly' },
          { id: 'sportove-dni-jul', label: 'Športové dni' },
          { id: 'jarmoky-jul', label: 'Jarmoky' }
        ]
      },
      // AUGUST
      {
        number: '08',
        name: 'AUGUST',
        title: 'dni obc&iacute; a miest, family day, festivaly, rozl&uacute;&#269;ka s letom',
        hint: 'Hudba &bull; Gastro zony &bull; Zazitkove aktivity &bull; Program na podium',
        accent: 'var(--brand-secondary)',
        plannerEvents: [
          { id: 'dni-obci-a-miest', label: 'Dni obcí a miest' },
          { id: 'family-day-august', label: 'Family day' },
          { id: 'festivaly-august', label: 'Festivaly' },
          { id: 'rozlucka-s-letom', label: 'Rozlúčka s letom' }
        ]
      },
      // SEPTEMBER
      {
        number: '09',
        name: 'SEPTEMBER',
        title: 'otvorenie &scaron;kolsk&eacute;ho roka, &scaron;kolsk&eacute; akcie, dni obc&iacute; a miest, firemn&eacute; akcie',
        hint: 'Moderovanie &bull; Program &bull; Rodinne zony &bull; Eventovy support',
        accent: 'var(--brand-primary)',
        plannerEvents: [
          { id: 'otvorenie-skolskeho-roka', label: 'Otvorenie školského roka' },
          { id: 'skolske-akcie-september', label: 'Školské akcie' },
          { id: 'dni-obci-a-miest-september', label: 'Dni obcí a miest' },
          { id: 'firemne-akcie-september', label: 'Firemné akcie' }
        ]
      },
      // OKTOBER
      {
        number: '10',
        name: 'OKTOBER',
        title: 'Halloween programy, stra&scaron;ideln&eacute; eventy, teambuildingy, firemn&eacute; eventy',
        hint: 'Dekor &bull; Show &bull; Hostesky &bull; Game zony',
        accent: 'var(--brand-tint)',
        plannerEvents: [
          { id: 'halloween-programy', label: 'Halloween programy' },
          { id: 'strasidelne-eventy', label: 'Strašidelné eventy' },
          { id: 'teambuildingy-oktober', label: 'Teambuildingy' },
          { id: 'firemne-eventy-oktober', label: 'Firemné eventy' }
        ]
      },
      // NOVEMBER
      {
        number: '11',
        name: 'NOVEMBER',
        title: 'firemn&eacute; eventy, teambuildingy, husacie hody, predviano&#269;n&eacute; ve&#269;ierky',
        hint: 'Quizy &bull; Turnaje &bull; Firemny program &bull; Moderovanie',
        accent: 'var(--brand-primary)',
        plannerEvents: [
          { id: 'firemne-eventy-november', label: 'Firemné eventy' },
          { id: 'teambuildingy-november', label: 'Teambuildingy' },
          { id: 'husacie-hody', label: 'Husacie hody' },
          { id: 'predvianocne-vecierky', label: 'Predvianočné večierky' }
        ]
      },
      // DECEMBER
      {
        number: '12',
        name: 'DECEMBER',
        title: 'mikul&aacute;&scaron;ske akcie, viano&#269;n&eacute; ve&#269;ierky, viano&#269;n&eacute; trhy, silvestrovsk&eacute; akcie',
        hint: 'Mikulas &bull; Gala vecer &bull; Vianocny program &bull; Animatori',
        accent: 'var(--brand-primary)',
        plannerEvents: [
          { id: 'mikulasske-akcie', label: 'Mikulášske akcie' },
          { id: 'vianocne-vecierky', label: 'Vianočné večierky' },
          { id: 'vianocne-trhy', label: 'Vianočné trhy' },
          { id: 'silvestrovske-akcie', label: 'Silvestrovské akcie' }
        ]
      }
    ]
  }
};



