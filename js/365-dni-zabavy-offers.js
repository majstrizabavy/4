/* 365 dni zabavy offers
   Tento subor drzi iba ponuky akcii pre planner modal.
*/
window.plannerOfferData = {
  'karnevaly': {
    eyebrow: 'JANUAR',
    title: 'Karnevaly',
    subtitle: 'Vyber si, ci chces program, atrakcie alebo komplet akciu.',
    previewTheme: 'kids',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientacne varianty programu pre karnevaly',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-jan&event=Karnevaly&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Zakladny karnevalovy program pre mensi priestor alebo kratky cas.',
            price: 'od 350 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie a sutaze', 'karnevalova atmosfera', 'vhodne pre mensiu skupinu deti'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Karnevaly&scope=program&variant=MZ%20Start&price=od%20350%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Silnejsi karnevalovy blok s viacerymi vstupmi a vacsou energiou.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['hudba, sutaze a zapojenie deti', 'silnejsi flow celeho programu', 'odporucany variant pre bezny karneval'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Karnevaly&scope=program&variant=MZ%20Show&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Vacsi karnevalovy program pre vacsi pocet deti alebo vacsi priestor.',
            price: 'od 750 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vacsi rozsah programu', 'viac vstupov a silnejsi zazitok', 'vhodne pre vacsi skolsky alebo obecny karneval'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Karnevaly&scope=program&variant=MZ%20Majster&price=od%20750%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientacne varianty atrakcii a doplnkov pre karnevaly',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-jan&event=Karnevaly&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Mensi doplnok, ktory rychlo oivi karnevalovu akciu.',
            price: 'od 150 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['mensia atrakcia alebo doplnok', 'vhodne do triedy alebo saly', 'rychle nasadenie na miesto'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Karnevaly&scope=atrakcie&variant=MZ%20Start&price=od%20150%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Vacsia atrakcia s viditelnejsim efektom pre deti aj rodicov.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['vacsia atrakcia alebo show doplnok', 'silnejsi efekt pocas akcie', 'vhodne pre stredne velky karneval'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Karnevaly&scope=atrakcie&variant=MZ%20Show&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Karnevalova zona alebo vacsi balik atrakcii pre silnejsi zazitok.',
            price: 'od 899 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['zona alebo kombinacia viacerych atrakcii', 'vacsia kapacita a vacsi efekt', 'vhodne pre vacsie podujatie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Karnevaly&scope=atrakcie&variant=MZ%20Majster&price=od%20899%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientacne varianty kompletnej karnevalovej akcie',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-jan&event=Karnevaly&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Zakladna kombinacia programu a atrakcii pre mensi karneval.',
            price: 'od 690 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'zakladna koordinacia', 'vhodne pre mensi rozpocet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Karnevaly&scope=komplet&variant=MZ%20Start&price=od%20690%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najcastejsi komplet variant s vyvazenym zazitkom pre vacsinu karnevalov.',
            price: 'od 990 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a plynuly flow', 'balikove zvyhodnenie oproti samostatnym sluzbam', 'odporucana volba pre vacsinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Karnevaly&scope=komplet&variant=MZ%20Show&price=od%20990%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejsi komplet pre vacsi priestor, vacsi pocet deti a vyssi efekt.',
            price: 'od 1 450 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['vacsi rozsah programu aj atrakcii', 'silnejsi wow efekt a vacsia kapacita', 'riesenie pre silny termin alebo vacsie podujatie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Karnevaly&scope=komplet&variant=MZ%20Majster&price=od%201450%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'novorocne-akcie': {
    eyebrow: 'JANUAR',
    title: 'Novoročné akcie',
    subtitle: 'Vyber si, ci chces program, atrakcie alebo komplet akciu.',
    previewTheme: 'goodbye',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientacne varianty programu pre novorocne akcie',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-jan&event=Novorocne%20akcie&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jednoduchy novorocny program pre mensiu komunitnu alebo rodinnu akciu.',
            price: 'od 250 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovany blok', 'lahky rozbeh akcie', 'vhodne pre mensi rozpocet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Novorocne%20akcie&scope=program&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Silnejsi novorocny program s vacsou energiou a vacsim zazitkom.',
            price: 'od 450 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie a aktivacie', 'dobry pomer medzi cenou a efektom', 'odporucany variant pre vacsinu akcii'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Novorocne%20akcie&scope=program&variant=MZ%20Show&price=od%20450%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Vacsi programovy variant pre vacsi priestor alebo vacsie publikum.',
            price: 'od 750 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vacsi rozsah programu', 'silnejsi wow efekt', 'vhodne pre vacsie verejne alebo firemne akcie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Novorocne%20akcie&scope=program&variant=MZ%20Majster&price=od%20750%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientacne varianty atrakcii a doplnkov pre novorocne akcie',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-jan&event=Novorocne%20akcie&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Mensi doplnok, ktory rychlo oivi novorocnu akciu.',
            price: 'od 150 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['mensia atrakcia alebo doplnok', 'vhodne pre mensi priestor', 'rychle ozivenie programu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Novorocne%20akcie&scope=atrakcie&variant=MZ%20Start&price=od%20150%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Vacsia atrakcia pre viditelnejsi zazitok hosti.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['vacsia atrakcia alebo interaktivny prvok', 'silnejsi efekt pocas akcie', 'vhodne pre vacsiu skupinu hosti'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Novorocne%20akcie&scope=atrakcie&variant=MZ%20Show&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Zona alebo balik atrakcii pre vyraznejsi novorocny event.',
            price: 'od 899 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['viac atrakcii alebo eventova zona', 'vacsia kapacita a vacsi vizualny efekt', 'vhodne pre vacsi termin alebo silnejsie podujatie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Novorocne%20akcie&scope=atrakcie&variant=MZ%20Majster&price=od%20899%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientacne varianty kompletnej novorocnej akcie',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-jan&event=Novorocne%20akcie&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Zakladny komplet pre mensiu novorocnu akciu alebo komunitne stretnutie.',
            price: 'od 690 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchsia koordinacia', 'vhodne pre mensi rozpocet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Novorocne%20akcie&scope=komplet&variant=MZ%20Start&price=od%20690%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Vyvazeny komplet variant s dobrym pomerom cena a zazitok.',
            price: 'od 990 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a vyvazene tempo', 'balikove zvyhodnenie oproti samostatnym sluzbam', 'odporucana volba pre vacsinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Novorocne%20akcie&scope=komplet&variant=MZ%20Show&price=od%20990%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejsi komplet s vacsim rozsahom a vacsim efektom pre hosti.',
            price: 'od 1 450 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['vacsi rozsah programu aj atrakcii', 'vacsia kapacita a vacsi wow efekt', 'riesenie pre vyssie naroky a vacsie akcie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Novorocne%20akcie&scope=komplet&variant=MZ%20Majster&price=od%201450%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'zimne-programy': {
    eyebrow: 'JANUAR',
    title: 'Zimné programy',
    subtitle: 'Vyber si, ci chces program, atrakcie alebo komplet akciu.',
    previewTheme: 'school',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientacne varianty zimneho programu',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-jan&event=Zimne%20programy&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Zakladny zimny program pre deti, rodiny alebo mensi priestor.',
            price: 'od 250 EUR',
            posterLabel: 'Variant programu',
            bullets: ['zimny zabavny blok', 'zapojenie deti a rodin', 'vhodne pre mensiu akciu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Zimne%20programy&scope=program&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Silnejsi zimny program s vacsou energiou a vacsim flow akcie.',
            price: 'od 450 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie a aktivacie', 'vyvazeny zimny program', 'odporucany variant pre vacsinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Zimne%20programy&scope=program&variant=MZ%20Show&price=od%20450%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejsi zimny program pre vacsi event, podium alebo vacsiu skupinu hosti.',
            price: 'od 750 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vacsi rozsah a dramaturgia', 'silnejsi wow efekt', 'vhodne pre vacsi priestor a vacsiu akciu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Zimne%20programy&scope=program&variant=MZ%20Majster&price=od%20750%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientacne varianty atrakcii a doplnkov pre zimne programy',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-jan&event=Zimne%20programy&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Mensi doplnok alebo atrakcia pre zimny event.',
            price: 'od 150 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['mensia atrakcia alebo doplnok', 'rychle nasadenie na miesto', 'vhodne ako oivenie programu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Zimne%20programy&scope=atrakcie&variant=MZ%20Start&price=od%20150%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Vacsia atrakcia s viditelnejsim efektom pre zimnu akciu.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['vacsia atrakcia alebo interaktivny prvok', 'silnejsi efekt pre hosti', 'vhodne pre stredne velku akciu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Zimne%20programy&scope=atrakcie&variant=MZ%20Show&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Zona alebo balik atrakcii pre vyrazny zimny zazitok.',
            price: 'od 899 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['zona alebo balik viacerych atrakcii', 'vacsia kapacita a silnejsi efekt', 'vhodne pre vacsie podujatie alebo den v meste'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Zimne%20programy&scope=atrakcie&variant=MZ%20Majster&price=od%20899%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientacne varianty kompletneho zimneho programu',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-jan&event=Zimne%20programy&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Zakladna kombinacia programu a atrakcii pre mensiu zimnu akciu.',
            price: 'od 690 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchsia organizacia', 'vhodne pre mensi rozpocet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Zimne%20programy&scope=komplet&variant=MZ%20Start&price=od%20690%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najcastejsi komplet variant s vyvazenym zazitkom a dobrou cenou.',
            price: 'od 990 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a plynuly flow', 'balikove zvyhodnenie oproti samostatnym sluzbam', 'odporucana volba pre vacsinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Zimne%20programy&scope=komplet&variant=MZ%20Show&price=od%20990%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejsi komplet pre vacsi zimny event s vacsim rozsahom a vacsim efektom.',
            price: 'od 1 450 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['vacsi rozsah programu aj atrakcii', 'vacsia kapacita a vacsi wow efekt', 'vhodne pre vacsiu akciu alebo vacsi priestor'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Zimne%20programy&scope=komplet&variant=MZ%20Majster&price=od%201450%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'firemne-vecierky': {
    eyebrow: 'JANUAR',
    title: 'Firemné večierky',
    subtitle: 'Vyber si, ci chces program, atrakcie alebo komplet akciu.',
    previewTheme: 'summer',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientacne varianty programu pre firemne vecierky',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-jan&event=Firemne%20vecierky&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Zakladny programovy variant pre mensi firemny vecierok alebo internu akciu.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo zabavny blok', 'vhodne pre mensiu firemnu skupinu', 'rychly format bez zbytocnych komplikacii'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Firemne%20vecierky&scope=program&variant=MZ%20Start&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najcastejsi programovy variant pre vacsinu firemnych vecierkov.',
            price: 'od 850 EUR',
            posterLabel: 'Variant programu',
            bullets: ['silnejsi zazitok a vacsi flow akcie', 'dobry pomer medzi cenou a efektom', 'odporucana volba pre vacsinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Firemne%20vecierky&scope=program&variant=MZ%20Show&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejsi programovy variant pre vacsi priestor, podium alebo vacsiu firmu.',
            price: 'od 1 400 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vacsi rozsah a silnejsi wow efekt', 'vacsia energia pre publikum', 'vhodne pre silny firemny termin'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Firemne%20vecierky&scope=program&variant=MZ%20Majster&price=od%201400%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientacne varianty atrakcii a doplnkov pre firemne vecierky',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-jan&event=Firemne%20vecierky&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Mensi interaktivny prvok alebo doplnok pre firemnu akciu.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['doplnok alebo mensia atrakcia', 'vhodne pre mensi priestor', 'rychle oivenie programu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Firemne%20vecierky&scope=atrakcie&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Vacsia atrakcia pre silnejsi zazitok hosti a vacsi event vibe.',
            price: 'od 400 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['vacsia atrakcia alebo interaktivny prvok', 'silnejsi efekt pre hosti', 'vhodne pre vacsinu firemnych akcii'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Firemne%20vecierky&scope=atrakcie&variant=MZ%20Show&price=od%20400%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Zona alebo balik atrakcii pre vacsi firemny event a vyssi zazitok.',
            price: 'od 1 190 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['zona alebo kombinacia atrakcii', 'vacsia kapacita a vacsi efekt', 'vhodne pre vacsi event alebo firemny vecierok'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Firemne%20vecierky&scope=atrakcie&variant=MZ%20Majster&price=od%201190%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientacne varianty kompletneho riesenia pre firemne vecierky',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-jan&event=Firemne%20vecierky&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Zakladny komplet pre mensi firemny vecierok alebo internu akciu.',
            price: 'od 1 290 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchsia koordinacia', 'vhodne pre mensi firemny rozpocet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Firemne%20vecierky&scope=komplet&variant=MZ%20Start&price=od%201290%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najcastejsi komplet variant s vyvazenym zazitkom a dobrym event flow.',
            price: 'od 1 550 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a organizacia v jednom', 'balikove zvyhodnenie oproti samostatnym sluzbam', 'odporucana volba pre vacsinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Firemne%20vecierky&scope=komplet&variant=MZ%20Show&price=od%201550%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejsi komplet s vacsim rozsahom, vacsim timom a vacsim efektom.',
            price: 'od 2 190 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['vacsi rozsah programu aj atrakcii', 'vacsia kapacita a vacsi wow efekt', 'riesenie pre silny firemny termin alebo vacsi event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Firemne%20vecierky&scope=komplet&variant=MZ%20Majster&price=od%202190%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'valentinske-akcie': {
    eyebrow: 'FEBRUAR',
    title: 'Valentínske akcie',
    subtitle: 'Vyber si, ci chces program, atrakcie alebo komplet akciu.',
    previewTheme: 'goodbye',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientacne varianty programu pre valentínske akcie',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-feb&event=Valentinske%20akcie&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jemny programovy blok pre mensiu valentinsku akciu alebo prevadzku.',
            price: 'od 250 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovany alebo hudobny blok', 'prijemna atmosfera', 'vhodne pre mensi priestor'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Valentinske%20akcie&scope=program&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Silnejsi valentinsky program s vacsou atmosferou a vacsim zazitkom.',
            price: 'od 450 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vyvazeny zazitok a tempo akcie', 'silnejsi emotivny efekt', 'odporucana volba pre vacsinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Valentinske%20akcie&scope=program&variant=MZ%20Show&price=od%20450%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Vyraznejsi stage alebo eventovy program pre vacsi priestor a vacsie publikum.',
            price: 'od 750 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vacsi rozsah programu', 'vacsi wow efekt a dramaturgia', 'vhodne pre vacsie valentinske podujatie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Valentinske%20akcie&scope=program&variant=MZ%20Majster&price=od%20750%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientacne varianty atrakcii a doplnkov pre valentínske akcie',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-feb&event=Valentinske%20akcie&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Mensi doplnok alebo atrakcia na oivenie valentinskej akcie.',
            price: 'od 150 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['mensi doplnok alebo interaktivny prvok', 'rychle nasadenie na miesto', 'vhodne pre komornejsi format'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Valentinske%20akcie&scope=atrakcie&variant=MZ%20Start&price=od%20150%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Vacsia atrakcia pre silnejsi zazitok hosti a vacsi event vibe.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['vacsia atrakcia alebo zazitkovy prvok', 'silnejsi efekt pre hosti', 'vhodne pre vacsinu akcii'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Valentinske%20akcie&scope=atrakcie&variant=MZ%20Show&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Balik atrakcii alebo zona pre silnejsie valentinske podujatie.',
            price: 'od 899 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['zona alebo kombinacia viacerych prvkov', 'vacsi vizualny efekt', 'vhodne pre vacsi event alebo prevadzku'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Valentinske%20akcie&scope=atrakcie&variant=MZ%20Majster&price=od%20899%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientacne varianty kompletnej valentínskej akcie',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-feb&event=Valentinske%20akcie&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Zakladna kombinacia programu a atrakcii pre komornejsiu akciu.',
            price: 'od 690 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchsia koordinacia', 'vhodne pre mensi rozpocet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Valentinske%20akcie&scope=komplet&variant=MZ%20Start&price=od%20690%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najcastejsi komplet variant s vyvazenym zazitkom a dobrou cenou.',
            price: 'od 990 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a plynuly flow', 'balikove zvyhodnenie oproti samostatnym sluzbam', 'odporucana volba pre vacsinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Valentinske%20akcie&scope=komplet&variant=MZ%20Show&price=od%20990%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejsi komplet pre vacsi event, vacsi priestor alebo vyssi wow efekt.',
            price: 'od 1 450 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['vacsi rozsah programu aj atrakcii', 'vacsia kapacita a vacsi zazitok', 'riesenie pre silnejsie podujatie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Valentinske%20akcie&scope=komplet&variant=MZ%20Majster&price=od%201450%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'plesy': {
    eyebrow: 'FEBRUAR',
    title: 'Plesy',
    subtitle: 'Vyber si, ci chces program, atrakcie alebo komplet akciu.',
    previewTheme: 'summer',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientacne varianty programu pre plesy',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-feb&event=Plesy&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Zakladny programovy variant pre mensi ples alebo spolocensky vecer.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo sprievodny blok', 'prijemny spolocensky format', 'vhodne pre mensi rozpocet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Plesy&scope=program&variant=MZ%20Start&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Silnejsi programovy variant pre vacsinu plesov a spolocenskych akcii.',
            price: 'od 850 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vyvazene tempo vecera', 'silnejsi zazitok pre hosti', 'odporucana volba pre vacsinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Plesy&scope=program&variant=MZ%20Show&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejsi programovy variant pre vacsi ples, podium alebo vacsie publikum.',
            price: 'od 1 400 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vacsi rozsah a silnejsi wow efekt', 'vacsia dramaturgia vecera', 'vhodne pre vacsi ples alebo gala format'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Plesy&scope=program&variant=MZ%20Majster&price=od%201400%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientacne varianty atrakcii a doplnkov pre plesy',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-feb&event=Plesy&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Mensi doplnok alebo atrakcia, ktora doplni plesovy vecer.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['mensi interaktivny prvok', 'vhodne pre spolocensky format', 'rychle ozivenie vecera'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Plesy&scope=atrakcie&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Vacsia atrakcia pre silnejsi zazitok a vacsi eventovy efekt.',
            price: 'od 400 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['vacsia atrakcia alebo show doplnok', 'silnejsi efekt pre hosti', 'vhodne pre vacsinu plesov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Plesy&scope=atrakcie&variant=MZ%20Show&price=od%20400%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Balik atrakcii alebo vacsia eventova zona pre silny spolocensky zazitok.',
            price: 'od 1 190 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['zona alebo viac atrakcii', 'vacsi efekt a vacsia kapacita', 'vhodne pre vacsi ples alebo gala vecer'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Plesy&scope=atrakcie&variant=MZ%20Majster&price=od%201190%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientacne varianty kompletneho riesenia pre plesy',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-feb&event=Plesy&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Zakladny komplet pre mensi ples alebo spolocensky vecer.',
            price: 'od 1 290 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchsia koordinacia', 'vhodne pre mensi rozpocet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Plesy&scope=komplet&variant=MZ%20Start&price=od%201290%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najcastejsi komplet variant s vyvazenym zazitkom a plynulym flow vecera.',
            price: 'od 1 550 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a organizacia v jednom', 'balikove zvyhodnenie oproti samostatnym sluzbam', 'odporucana volba pre vacsinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Plesy&scope=komplet&variant=MZ%20Show&price=od%201550%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejsi komplet s vacsim rozsahom, vacsim timom a vacsim efektom.',
            price: 'od 2 190 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['vacsi rozsah programu aj atrakcii', 'vacsia kapacita a vacsi wow efekt', 'riesenie pre vacsi ples alebo gala format'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Plesy&scope=komplet&variant=MZ%20Majster&price=od%202190%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'firemne-eventy': {
    eyebrow: 'FEBRUAR',
    title: 'Firemné eventy',
    subtitle: 'Vyber si, ci chces program, atrakcie alebo komplet akciu.',
    previewTheme: 'summer',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientacne varianty programu pre firemne eventy',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-feb&event=Firemne%20eventy&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Zakladny programovy variant pre mensi firemny event alebo internu akciu.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo zabavny blok', 'vhodne pre mensiu firemnu skupinu', 'rychly format bez zbytocnych komplikacii'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Firemne%20eventy&scope=program&variant=MZ%20Start&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najcastejsi programovy variant pre vacsinu firemnych eventov.',
            price: 'od 850 EUR',
            posterLabel: 'Variant programu',
            bullets: ['silnejsi zazitok a vacsi flow akcie', 'dobry pomer medzi cenou a efektom', 'odporucana volba pre vacsinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Firemne%20eventy&scope=program&variant=MZ%20Show&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejsi programovy variant pre vacsi priestor, podium alebo vacsiu firmu.',
            price: 'od 1 400 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vacsi rozsah a silnejsi wow efekt', 'vacsia energia pre publikum', 'vhodne pre silny firemny termin'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Firemne%20eventy&scope=program&variant=MZ%20Majster&price=od%201400%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientacne varianty atrakcii a doplnkov pre firemne eventy',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-feb&event=Firemne%20eventy&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Mensi interaktivny prvok alebo doplnok pre firemnu akciu.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['doplnok alebo mensia atrakcia', 'vhodne pre mensi priestor', 'rychle oivenie programu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Firemne%20eventy&scope=atrakcie&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Vacsia atrakcia pre silnejsi zazitok hosti a vacsi event vibe.',
            price: 'od 400 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['vacsia atrakcia alebo interaktivny prvok', 'silnejsi efekt pre hosti', 'vhodne pre vacsinu firemnych akcii'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Firemne%20eventy&scope=atrakcie&variant=MZ%20Show&price=od%20400%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Zona alebo balik atrakcii pre vacsi firemny event a vyssi zazitok.',
            price: 'od 1 190 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['zona alebo kombinacia atrakcii', 'vacsia kapacita a vacsi efekt', 'vhodne pre vacsi event alebo firemny format'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Firemne%20eventy&scope=atrakcie&variant=MZ%20Majster&price=od%201190%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientacne varianty kompletneho riesenia pre firemne eventy',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-feb&event=Firemne%20eventy&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Zakladny komplet pre mensi firemny event alebo internu akciu.',
            price: 'od 1 290 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchsia koordinacia', 'vhodne pre mensi firemny rozpocet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Firemne%20eventy&scope=komplet&variant=MZ%20Start&price=od%201290%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najcastejsi komplet variant s vyvazenym zazitkom a dobrym event flow.',
            price: 'od 1 550 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a organizacia v jednom', 'balikove zvyhodnenie oproti samostatnym sluzbam', 'odporucana volba pre vacsinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Firemne%20eventy&scope=komplet&variant=MZ%20Show&price=od%201550%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejsi komplet s vacsim rozsahom, vacsim timom a vacsim efektom.',
            price: 'od 2 190 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['vacsi rozsah programu aj atrakcii', 'vacsia kapacita a vacsi wow efekt', 'riesenie pre silny firemny termin alebo vacsi event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Firemne%20eventy&scope=komplet&variant=MZ%20Majster&price=od%202190%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'dni-otvorenych-dveri': {
    eyebrow: 'MAREC',
    title: 'Dni otvorených dverí',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'summer',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre dni otvorených dverí',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-mar&event=Dni%20otvoren%C3%BDch%20dver%C3%AD&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný programový blok pre menší deň otvorených dverí alebo kratší čas.',
            price: 'od 250 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo krátky vstup', 'jednoduché zapojenie hostí', 'vhodné pre menší priestor'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=Dni%20otvoren%C3%BDch%20dver%C3%AD&scope=program&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší variant programu s lepším flow a silnejším zážitkom.',
            price: 'od 450 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vyvážený programový formát', 'viac vstupov počas akcie', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=Dni%20otvoren%C3%BDch%20dver%C3%AD&scope=program&variant=MZ%20Show&price=od%20450%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejší program pre väčší priestor, silnejšiu návštevnosť alebo výraznejší wow efekt.',
            price: 'od 750 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah a dramaturgia', 'silnejší wow efekt pre hostí', 'vhodné pre silnejší eventový formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=Dni%20otvoren%C3%BDch%20dver%C3%AD&scope=program&variant=MZ%20Majster&price=od%20750%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre dni otvorených dverí',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-mar&event=Dni%20otvoren%C3%BDch%20dver%C3%AD&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší doplnok alebo interaktívny prvok na oživenie akcie.',
            price: 'od 150 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['menší doplnok alebo atrakcia', 'rýchle nasadenie na miesto', 'vhodné pre komornejší formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=Dni%20otvoren%C3%BDch%20dver%C3%AD&scope=atrakcie&variant=MZ%20Start&price=od%20150%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia pre silnejší zážitok návštevníkov a lepší eventový efekt.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo zóna', 'lepší vizuálny efekt', 'vhodné pre väčšinu akcií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=Dni%20otvoren%C3%BDch%20dver%C3%AD&scope=atrakcie&variant=MZ%20Show&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Balík atrakcií alebo väčšia zóna pre vyššiu návštevnosť a silnejší wow efekt.',
            price: 'od 899 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia viacerých prvkov', 'vyššia kapacita pre hostí', 'vhodné pre silnejší event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=Dni%20otvoren%C3%BDch%20dver%C3%AD&scope=atrakcie&variant=MZ%20Majster&price=od%20899%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre dni otvorených dverí',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-mar&event=Dni%20otvoren%C3%BDch%20dver%C3%AD&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základná kombinácia programu a atrakcií pre menší formát akcie.',
            price: 'od 690 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=Dni%20otvoren%C3%BDch%20dver%C3%AD&scope=komplet&variant=MZ%20Start&price=od%20690%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrou cenou.',
            price: 'od 990 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a plynulý flow', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=Dni%20otvoren%C3%BDch%20dver%C3%AD&scope=komplet&variant=MZ%20Show&price=od%20990%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet pre väčší event, silnejšiu návštevnosť alebo vyšší wow efekt.',
            price: 'od 1 450 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a silnejší zážitok', 'riešenie pre silnejší eventový formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=Dni%20otvoren%C3%BDch%20dver%C3%AD&scope=komplet&variant=MZ%20Majster&price=od%201450%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'den-zien': {
    eyebrow: 'MAREC',
    title: 'Deň žien',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'goodbye',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre Deň žien',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-mar&event=De%C5%88%20%C5%BEien&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jemný programový blok pre menšie podujatie alebo komornejší priestor.',
            price: 'od 250 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovaný alebo hudobný blok', 'príjemná atmosféra', 'vhodné pre menší priestor'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=De%C5%88%20%C5%BEien&scope=program&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Silnejší program s väčšou atmosférou a vyváženým zážitkom.',
            price: 'od 450 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vyvážený zážitok a tempo akcie', 'silnejší emotívny efekt', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=De%C5%88%20%C5%BEien&scope=program&variant=MZ%20Show&price=od%20450%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Výraznejší eventový program pre väčší priestor alebo väčšie publikum.',
            price: 'od 750 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah programu', 'silnejšia dramaturgia a wow efekt', 'vhodné pre väčšie podujatie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=De%C5%88%20%C5%BEien&scope=program&variant=MZ%20Majster&price=od%20750%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre Deň žien',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-mar&event=De%C5%88%20%C5%BEien&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší doplnok alebo atrakcia na príjemné oživenie akcie.',
            price: 'od 150 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['menší doplnok alebo interaktívny prvok', 'rýchle nasadenie na miesto', 'vhodné pre komornejší formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=De%C5%88%20%C5%BEien&scope=atrakcie&variant=MZ%20Start&price=od%20150%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia alebo zážitkový prvok pre silnejší efekt pre hostí.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo zóna', 'silnejší efekt pre hostí', 'vhodné pre väčšinu akcií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=De%C5%88%20%C5%BEien&scope=atrakcie&variant=MZ%20Show&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Balík atrakcií alebo zóna pre silnejšie podujatie a väčší wow efekt.',
            price: 'od 899 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia viacerých prvkov', 'väčší vizuálny efekt', 'vhodné pre väčšie podujatie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=De%C5%88%20%C5%BEien&scope=atrakcie&variant=MZ%20Majster&price=od%20899%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre Deň žien',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-mar&event=De%C5%88%20%C5%BEien&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základná kombinácia programu a atrakcií pre komornejšiu akciu.',
            price: 'od 690 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=De%C5%88%20%C5%BEien&scope=komplet&variant=MZ%20Start&price=od%20690%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrou cenou.',
            price: 'od 990 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a plynulý flow', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=De%C5%88%20%C5%BEien&scope=komplet&variant=MZ%20Show&price=od%20990%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet pre väčší event, väčší priestor alebo vyšší wow efekt.',
            price: 'od 1 450 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a väčší zážitok', 'riešenie pre silnejšie podujatie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=De%C5%88%20%C5%BEien&scope=komplet&variant=MZ%20Majster&price=od%201450%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'velkonocne-programy': {
    eyebrow: 'MAREC',
    title: 'Veľkonočné programy',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'kids',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre veľkonočné programy',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-mar&event=Ve%C4%BEkono%C4%8Dn%C3%A9%20programy&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný veľkonočný program pre menšiu akciu alebo kratší čas.',
            price: 'od 250 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo súťaže', 'veľkonočná atmosféra', 'vhodné pre menšiu skupinu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=Ve%C4%BEkono%C4%8Dn%C3%A9%20programy&scope=program&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší programový variant s lepšou energiou a silnejším flow akcie.',
            price: 'od 450 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vyvážený zážitok a tempo akcie', 'viac vstupov počas akcie', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=Ve%C4%BEkono%C4%8Dn%C3%A9%20programy&scope=program&variant=MZ%20Show&price=od%20450%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejší program pre väčší priestor, väčšie publikum alebo silnejší wow efekt.',
            price: 'od 750 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah programu', 'silnejší wow efekt a dramaturgia', 'vhodné pre silnejší eventový formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=Ve%C4%BEkono%C4%8Dn%C3%A9%20programy&scope=program&variant=MZ%20Majster&price=od%20750%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre veľkonočné programy',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-mar&event=Ve%C4%BEkono%C4%8Dn%C3%A9%20programy&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší doplnok alebo atrakcia na oživenie veľkonočnej akcie.',
            price: 'od 150 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['menší doplnok alebo interaktívny prvok', 'rýchle nasadenie na miesto', 'vhodné pre komornejší formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=Ve%C4%BEkono%C4%8Dn%C3%A9%20programy&scope=atrakcie&variant=MZ%20Start&price=od%20150%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia pre silnejší zážitok hostí a lepší eventový efekt.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo zóna', 'silnejší efekt pre hostí', 'vhodné pre väčšinu akcií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=Ve%C4%BEkono%C4%8Dn%C3%A9%20programy&scope=atrakcie&variant=MZ%20Show&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Balík atrakcií alebo zóna pre silnejšie podujatie a väčší wow efekt.',
            price: 'od 899 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia viacerých prvkov', 'väčší vizuálny efekt', 'vhodné pre väčšie podujatie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=Ve%C4%BEkono%C4%8Dn%C3%A9%20programy&scope=atrakcie&variant=MZ%20Majster&price=od%20899%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre veľkonočné programy',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-mar&event=Ve%C4%BEkono%C4%8Dn%C3%A9%20programy&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základná kombinácia programu a atrakcií pre menšiu alebo jednoduchšiu akciu.',
            price: 'od 690 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=Ve%C4%BEkono%C4%8Dn%C3%A9%20programy&scope=komplet&variant=MZ%20Start&price=od%20690%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrou cenou.',
            price: 'od 990 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a plynulý flow', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=Ve%C4%BEkono%C4%8Dn%C3%A9%20programy&scope=komplet&variant=MZ%20Show&price=od%20990%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet pre väčšie podujatie, väčší priestor alebo vyšší wow efekt.',
            price: 'od 1 450 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a väčší zážitok', 'riešenie pre silnejšie podujatie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=Ve%C4%BEkono%C4%8Dn%C3%A9%20programy&scope=komplet&variant=MZ%20Majster&price=od%201450%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'velkonocne-trhy': {
    eyebrow: 'MAREC',
    title: 'Veľkonočné trhy',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'summer',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre veľkonočné trhy',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-mar&event=Ve%C4%BEkono%C4%8Dn%C3%A9%20trhy&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný programový blok pre menší veľkonočný trh alebo kratší čas.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo krátky vstup', 'veľkonočná atmosféra', 'vhodné pre menší verejný formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=Ve%C4%BEkono%C4%8Dn%C3%A9%20trhy&scope=program&variant=MZ%20Start&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší variant programu s lepším flow a silnejším zážitkom pre návštevníkov.',
            price: 'od 850 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vyvážený programový formát', 'viac vstupov počas akcie', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=Ve%C4%BEkono%C4%8Dn%C3%A9%20trhy&scope=program&variant=MZ%20Show&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejší program pre väčší verejný priestor, pódium alebo väčší počet návštevníkov.',
            price: 'od 1 400 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah a dramaturgia', 'silnejší wow efekt pre publikum', 'vhodné pre silnejší verejný event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=Ve%C4%BEkono%C4%8Dn%C3%A9%20trhy&scope=program&variant=MZ%20Majster&price=od%201400%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre veľkonočné trhy',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-mar&event=Ve%C4%BEkono%C4%8Dn%C3%A9%20trhy&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší atrakčný doplnok pre oživenie veľkonočných trhov.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['doplnok alebo menšia atrakcia', 'rýchle nasadenie na miesto', 'vhodné pre menší priestor'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=Ve%C4%BEkono%C4%8Dn%C3%A9%20trhy&scope=atrakcie&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia pre silnejší zážitok návštevníkov a výraznejší event vibe.',
            price: 'od 400 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo zóna', 'silnejší efekt pre hostí', 'vhodné pre väčšinu verejných akcií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=Ve%C4%BEkono%C4%8Dn%C3%A9%20trhy&scope=atrakcie&variant=MZ%20Show&price=od%20400%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Balík atrakcií alebo väčšia zóna pre vyššiu návštevnosť a silnejší wow efekt.',
            price: 'od 1 190 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia atrakcií', 'vyššia kapacita pre návštevníkov', 'vhodné pre väčší verejný event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=Ve%C4%BEkono%C4%8Dn%C3%A9%20trhy&scope=atrakcie&variant=MZ%20Majster&price=od%201190%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre veľkonočné trhy',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-mar&event=Ve%C4%BEkono%C4%8Dn%C3%A9%20trhy&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný komplet pre menší trh alebo jednoduchšie nastavenú akciu.',
            price: 'od 1 290 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=Ve%C4%BEkono%C4%8Dn%C3%A9%20trhy&scope=komplet&variant=MZ%20Start&price=od%201290%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrou cenou.',
            price: 'od 1 550 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a organizácia v jednom', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=Ve%C4%BEkono%C4%8Dn%C3%A9%20trhy&scope=komplet&variant=MZ%20Show&price=od%201550%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet pre väčší trh, väčší priestor alebo silnejší wow efekt.',
            price: 'od 2 190 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a silnejší zážitok', 'riešenie pre silnejší verejný event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-mar&event=Ve%C4%BEkono%C4%8Dn%C3%A9%20trhy&scope=komplet&variant=MZ%20Majster&price=od%202190%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'dni-otvorenych-dveri-april': {
    eyebrow: 'APRIL',
    title: 'Dni otvorených dverí',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'summer',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre dni otvorených dverí',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-apr&event=Dni%20otvoren%C3%BDch%20dver%C3%AD&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný programový blok pre menší deň otvorených dverí alebo kratší čas.',
            price: 'od 250 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo krátky vstup', 'jednoduché zapojenie hostí', 'vhodné pre menší priestor'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Dni%20otvoren%C3%BDch%20dver%C3%AD&scope=program&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší variant programu s lepším flow a silnejším zážitkom.',
            price: 'od 450 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vyvážený programový formát', 'viac vstupov počas akcie', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Dni%20otvoren%C3%BDch%20dver%C3%AD&scope=program&variant=MZ%20Show&price=od%20450%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejší program pre väčší priestor, silnejšiu návštevnosť alebo výraznejší wow efekt.',
            price: 'od 750 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah a dramaturgia', 'silnejší wow efekt pre hostí', 'vhodné pre silnejší eventový formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Dni%20otvoren%C3%BDch%20dver%C3%AD&scope=program&variant=MZ%20Majster&price=od%20750%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre dni otvorených dverí',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-apr&event=Dni%20otvoren%C3%BDch%20dver%C3%AD&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší doplnok alebo interaktívny prvok na oživenie akcie.',
            price: 'od 150 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['menší doplnok alebo atrakcia', 'rýchle nasadenie na miesto', 'vhodné pre komornejší formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Dni%20otvoren%C3%BDch%20dver%C3%AD&scope=atrakcie&variant=MZ%20Start&price=od%20150%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia pre silnejší zážitok návštevníkov a lepší eventový efekt.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo zóna', 'lepší vizuálny efekt', 'vhodné pre väčšinu akcií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Dni%20otvoren%C3%BDch%20dver%C3%AD&scope=atrakcie&variant=MZ%20Show&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Balík atrakcií alebo väčšia zóna pre vyššiu návštevnosť a silnejší wow efekt.',
            price: 'od 899 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia viacerých prvkov', 'vyššia kapacita pre hostí', 'vhodné pre silnejší event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Dni%20otvoren%C3%BDch%20dver%C3%AD&scope=atrakcie&variant=MZ%20Majster&price=od%20899%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre dni otvorených dverí',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-apr&event=Dni%20otvoren%C3%BDch%20dver%C3%AD&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základná kombinácia programu a atrakcií pre menší formát akcie.',
            price: 'od 690 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Dni%20otvoren%C3%BDch%20dver%C3%AD&scope=komplet&variant=MZ%20Start&price=od%20690%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrou cenou.',
            price: 'od 990 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a plynulý flow', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Dni%20otvoren%C3%BDch%20dver%C3%AD&scope=komplet&variant=MZ%20Show&price=od%20990%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet pre väčší event, silnejšiu návštevnosť alebo vyšší wow efekt.',
            price: 'od 1 450 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a silnejší zážitok', 'riešenie pre silnejší eventový formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Dni%20otvoren%C3%BDch%20dver%C3%AD&scope=komplet&variant=MZ%20Majster&price=od%201450%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'zapisy-ms-zs': {
    eyebrow: 'APRIL',
    title: 'Zápisy do MŠ a ZŠ',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'school',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre zápisy do MŠ a ZŠ',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-apr&event=Zapisy%20do%20MS%20a%20ZS&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jednoduchý programový blok pre menší zápis alebo kratší čas.',
            price: 'od 350 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovaný blok', 'zapojenie detí a rodičov', 'vhodné pre menší školský priestor'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Zapisy%20do%20MS%20a%20ZS&scope=program&variant=MZ%20Start&price=od%20350%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší školský variant s väčšou interakciou a lepším flow akcie.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['viac vstupov počas akcie', 'moderovanie a zapojenie publika', 'odporúčaná voľba pre väčšinu škôl'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Zapisy%20do%20MS%20a%20ZS&scope=program&variant=MZ%20Show&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejší školský program pre väčší priestor, väčší nápor hostí alebo väčší wow efekt.',
            price: 'od 750 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah programu', 'silnejšia dramaturgia a rytmus akcie', 'vhodné pre silnejší školský termín'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Zapisy%20do%20MS%20a%20ZS&scope=program&variant=MZ%20Majster&price=od%20750%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre zápisy do MŠ a ZŠ',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-apr&event=Zapisy%20do%20MS%20a%20ZS&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jedna alebo dve jednoduché aktivity na doplnenie školského zápisu.',
            price: 'od 150 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['menší doplnok alebo aktivita', 'rýchle rozloženie na mieste', 'vhodné aj do menšieho priestoru'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Zapisy%20do%20MS%20a%20ZS&scope=atrakcie&variant=MZ%20Start&price=od%20150%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Vyvážený set atrakcií pre bežný školský zápis s lepším efektom.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo 2 prvky', 'lepší pohyb detí medzi stanovišťami', 'viditeľnejší efekt počas akcie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Zapisy%20do%20MS%20a%20ZS&scope=atrakcie&variant=MZ%20Show&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejšia atrakciová zóna pre väčší školský zápis alebo silnejší termín.',
            price: 'od 899 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčší rozsah a viac stanovíšť', 'vyššia kapacita pre viac detí naraz', 'vhodné pre väčší areál alebo silný termín'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Zapisy%20do%20MS%20a%20ZS&scope=atrakcie&variant=MZ%20Majster&price=od%20899%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre zápisy do MŠ a ZŠ',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-apr&event=Zapisy%20do%20MS%20a%20ZS&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jednoduchší školský zápis s programom a niekoľkými doplnkami.',
            price: 'od 690 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'základná koordinácia', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Zapisy%20do%20MS%20a%20ZS&scope=komplet&variant=MZ%20Start&price=od%20690%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší školský variant s programom, atrakciami a dobrým tempom.',
            price: 'od 990 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie aj moderovanie', 'vyvážená organizácia akcie', 'odporúčaná voľba pre väčšinu škôl'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Zapisy%20do%20MS%20a%20ZS&scope=komplet&variant=MZ%20Show&price=od%20990%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Kompletné riešenie pre väčší školský zápis alebo silnejší školský event.',
            price: 'od 1 450 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a silnejší wow efekt', 'individuálnejšie riešenie podujatia'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Zapisy%20do%20MS%20a%20ZS&scope=komplet&variant=MZ%20Majster&price=od%201450%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'velkonocne-akcie': {
    eyebrow: 'APRIL',
    title: 'Veľkonočné akcie',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'kids',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre veľkonočné akcie',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-apr&event=Velkonocne%20akcie&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný veľkonočný program pre menšiu akciu alebo kratší čas.',
            price: 'od 250 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo súťaže', 'veľkonočná atmosféra', 'vhodné pre menšiu skupinu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Velkonocne%20akcie&scope=program&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší programový variant s lepšou energiou a silnejším flow akcie.',
            price: 'od 450 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vyvážený zážitok a tempo akcie', 'viac vstupov počas akcie', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Velkonocne%20akcie&scope=program&variant=MZ%20Show&price=od%20450%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejší program pre väčší priestor, väčšie publikum alebo silnejší wow efekt.',
            price: 'od 750 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah programu', 'silnejší wow efekt a dramaturgia', 'vhodné pre silnejší eventový formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Velkonocne%20akcie&scope=program&variant=MZ%20Majster&price=od%20750%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre veľkonočné akcie',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-apr&event=Velkonocne%20akcie&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší doplnok alebo atrakcia na oživenie veľkonočnej akcie.',
            price: 'od 150 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['menší doplnok alebo interaktívny prvok', 'rýchle nasadenie na miesto', 'vhodné pre komornejší formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Velkonocne%20akcie&scope=atrakcie&variant=MZ%20Start&price=od%20150%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia pre silnejší zážitok hostí a lepší eventový efekt.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo zóna', 'silnejší efekt pre hostí', 'vhodné pre väčšinu akcií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Velkonocne%20akcie&scope=atrakcie&variant=MZ%20Show&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Balík atrakcií alebo zóna pre silnejšie podujatie a väčší wow efekt.',
            price: 'od 899 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia viacerých prvkov', 'väčší vizuálny efekt', 'vhodné pre väčšie podujatie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Velkonocne%20akcie&scope=atrakcie&variant=MZ%20Majster&price=od%20899%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre veľkonočné akcie',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-apr&event=Velkonocne%20akcie&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základná kombinácia programu a atrakcií pre menšiu alebo jednoduchšiu akciu.',
            price: 'od 690 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Velkonocne%20akcie&scope=komplet&variant=MZ%20Start&price=od%20690%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrou cenou.',
            price: 'od 990 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a plynulý flow', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Velkonocne%20akcie&scope=komplet&variant=MZ%20Show&price=od%20990%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet pre väčšie podujatie, väčší priestor alebo vyšší wow efekt.',
            price: 'od 1 450 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a väčší zážitok', 'riešenie pre silnejšie podujatie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Velkonocne%20akcie&scope=komplet&variant=MZ%20Majster&price=od%201450%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'firemne-akcie-april': {
    eyebrow: 'APRIL',
    title: 'Firemné akcie',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'summer',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre firemné akcie',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-apr&event=Firemne%20akcie&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný programový variant pre menšiu firemnú akciu alebo interné stretnutie.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo zábavný blok', 'vhodné pre menšiu firemnú skupinu', 'rýchly formát bez zbytočných komplikácií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Firemne%20akcie&scope=program&variant=MZ%20Start&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší programový variant pre väčšinu firemných akcií.',
            price: 'od 850 EUR',
            posterLabel: 'Variant programu',
            bullets: ['silnejší zážitok a väčší flow akcie', 'dobrý pomer medzi cenou a efektom', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Firemne%20akcie&scope=program&variant=MZ%20Show&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší programový variant pre väčší priestor, pódium alebo väčšiu firmu.',
            price: 'od 1 400 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah a silnejší wow efekt', 'väčšia energia pre publikum', 'vhodné pre silný firemný termín'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Firemne%20akcie&scope=program&variant=MZ%20Majster&price=od%201400%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre firemné akcie',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-apr&event=Firemne%20akcie&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší interaktívny prvok alebo doplnok pre firemnú akciu.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['doplnok alebo menšia atrakcia', 'vhodné pre menší priestor', 'rýchle oživenie programu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Firemne%20akcie&scope=atrakcie&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia pre silnejší zážitok hostí a väčší event vibe.',
            price: 'od 400 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo interaktívny prvok', 'silnejší efekt pre hostí', 'vhodné pre väčšinu firemných akcií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Firemne%20akcie&scope=atrakcie&variant=MZ%20Show&price=od%20400%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Zóna alebo balík atrakcií pre väčší firemný event a vyšší zážitok.',
            price: 'od 1 190 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia atrakcií', 'väčšia kapacita a väčší efekt', 'vhodné pre väčší event alebo firemný formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Firemne%20akcie&scope=atrakcie&variant=MZ%20Majster&price=od%201190%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre firemné akcie',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-apr&event=Firemne%20akcie&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný komplet pre menšiu firemnú akciu alebo interné stretnutie.',
            price: 'od 1 290 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší firemný rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Firemne%20akcie&scope=komplet&variant=MZ%20Start&price=od%201290%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrým event flow.',
            price: 'od 1 550 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a organizácia v jednom', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Firemne%20akcie&scope=komplet&variant=MZ%20Show&price=od%201550%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet s väčším rozsahom, väčším tímom a väčším efektom.',
            price: 'od 2 190 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a väčší wow efekt', 'riešenie pre silný firemný termín alebo väčší event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-apr&event=Firemne%20akcie&scope=komplet&variant=MZ%20Majster&price=od%202190%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'majove-oslavy': {
    eyebrow: 'MAJ',
    title: '1. máj / Májové oslavy',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'summer',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre májové oslavy',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-may&event=1.%20maj%20%2F%20Majove%20oslavy&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný programový blok pre menšiu májovú oslavu alebo kratší čas.',
            price: 'od 250 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo krátky vstup', 'príjemná sviatočná atmosféra', 'vhodné pre menší priestor'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=1.%20maj%20%2F%20Majove%20oslavy&scope=program&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší programový variant s lepším flow a silnejším zážitkom.',
            price: 'od 450 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vyvážený programový formát', 'viac vstupov počas akcie', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=1.%20maj%20%2F%20Majove%20oslavy&scope=program&variant=MZ%20Show&price=od%20450%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejší program pre väčší priestor, väčšie publikum alebo silnejší wow efekt.',
            price: 'od 750 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah a dramaturgia', 'silnejší wow efekt pre hostí', 'vhodné pre silnejší eventový formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=1.%20maj%20%2F%20Majove%20oslavy&scope=program&variant=MZ%20Majster&price=od%20750%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre májové oslavy',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-may&event=1.%20maj%20%2F%20Majove%20oslavy&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší doplnok alebo interaktívny prvok na oživenie akcie.',
            price: 'od 150 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['menší doplnok alebo atrakcia', 'rýchle nasadenie na miesto', 'vhodné pre komornejší formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=1.%20maj%20%2F%20Majove%20oslavy&scope=atrakcie&variant=MZ%20Start&price=od%20150%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia pre silnejší zážitok návštevníkov a lepší eventový efekt.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo zóna', 'lepší vizuálny efekt', 'vhodné pre väčšinu akcií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=1.%20maj%20%2F%20Majove%20oslavy&scope=atrakcie&variant=MZ%20Show&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Balík atrakcií alebo väčšia zóna pre vyššiu návštevnosť a silnejší wow efekt.',
            price: 'od 899 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia viacerých prvkov', 'vyššia kapacita pre hostí', 'vhodné pre silnejší event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=1.%20maj%20%2F%20Majove%20oslavy&scope=atrakcie&variant=MZ%20Majster&price=od%20899%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre májové oslavy',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-may&event=1.%20maj%20%2F%20Majove%20oslavy&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základná kombinácia programu a atrakcií pre menší formát akcie.',
            price: 'od 690 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=1.%20maj%20%2F%20Majove%20oslavy&scope=komplet&variant=MZ%20Start&price=od%20690%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrou cenou.',
            price: 'od 990 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a plynulý flow', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=1.%20maj%20%2F%20Majove%20oslavy&scope=komplet&variant=MZ%20Show&price=od%20990%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet pre väčší event, silnejšiu návštevnosť alebo vyšší wow efekt.',
            price: 'od 1 450 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a silnejší zážitok', 'riešenie pre silnejší eventový formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=1.%20maj%20%2F%20Majove%20oslavy&scope=komplet&variant=MZ%20Majster&price=od%201450%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'den-matiek': {
    eyebrow: 'MAJ',
    title: 'Deň matiek',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'goodbye',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre Deň matiek',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-may&event=Den%20matiek&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jemný programový blok pre menšie podujatie alebo komornejší priestor.',
            price: 'od 250 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovaný alebo hudobný blok', 'príjemná atmosféra', 'vhodné pre menší priestor'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=Den%20matiek&scope=program&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Silnejší program s väčšou atmosférou a vyváženým zážitkom.',
            price: 'od 450 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vyvážený zážitok a tempo akcie', 'silnejší emotívny efekt', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=Den%20matiek&scope=program&variant=MZ%20Show&price=od%20450%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Výraznejší eventový program pre väčší priestor alebo väčšie publikum.',
            price: 'od 750 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah programu', 'silnejšia dramaturgia a wow efekt', 'vhodné pre väčšie podujatie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=Den%20matiek&scope=program&variant=MZ%20Majster&price=od%20750%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre Deň matiek',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-may&event=Den%20matiek&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší doplnok alebo atrakcia na príjemné oživenie akcie.',
            price: 'od 150 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['menší doplnok alebo interaktívny prvok', 'rýchle nasadenie na miesto', 'vhodné pre komornejší formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=Den%20matiek&scope=atrakcie&variant=MZ%20Start&price=od%20150%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia alebo zážitkový prvok pre silnejší efekt pre hostí.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo zóna', 'silnejší efekt pre hostí', 'vhodné pre väčšinu akcií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=Den%20matiek&scope=atrakcie&variant=MZ%20Show&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Balík atrakcií alebo zóna pre silnejšie podujatie a väčší wow efekt.',
            price: 'od 899 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia viacerých prvkov', 'väčší vizuálny efekt', 'vhodné pre väčšie podujatie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=Den%20matiek&scope=atrakcie&variant=MZ%20Majster&price=od%20899%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre Deň matiek',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-may&event=Den%20matiek&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základná kombinácia programu a atrakcií pre komornejšiu akciu.',
            price: 'od 690 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=Den%20matiek&scope=komplet&variant=MZ%20Start&price=od%20690%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrou cenou.',
            price: 'od 990 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a plynulý flow', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=Den%20matiek&scope=komplet&variant=MZ%20Show&price=od%20990%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet pre väčší event, väčší priestor alebo vyšší wow efekt.',
            price: 'od 1 450 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a väčší zážitok', 'riešenie pre silnejšie podujatie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=Den%20matiek&scope=komplet&variant=MZ%20Majster&price=od%201450%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'majalesy': {
    eyebrow: 'MAJ',
    title: 'Majálesy',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'summer',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre majálesy',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-may&event=Majalesy&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný programový blok pre menší majáles alebo kratší čas.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo krátky vstup', 'eventová atmosféra', 'vhodné pre menší verejný formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=Majalesy&scope=program&variant=MZ%20Start&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší variant programu s lepším flow a silnejším zážitkom pre návštevníkov.',
            price: 'od 850 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vyvážený programový formát', 'viac vstupov počas akcie', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=Majalesy&scope=program&variant=MZ%20Show&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejší program pre väčší verejný priestor, pódium alebo väčší počet návštevníkov.',
            price: 'od 1 400 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah a dramaturgia', 'silnejší wow efekt pre publikum', 'vhodné pre silnejší verejný event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=Majalesy&scope=program&variant=MZ%20Majster&price=od%201400%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre majálesy',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-may&event=Majalesy&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší atrakčný doplnok pre oživenie majálesu.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['doplnok alebo menšia atrakcia', 'rýchle nasadenie na miesto', 'vhodné pre menší priestor'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=Majalesy&scope=atrakcie&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia pre silnejší zážitok návštevníkov a výraznejší event vibe.',
            price: 'od 400 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo zóna', 'silnejší efekt pre hostí', 'vhodné pre väčšinu verejných akcií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=Majalesy&scope=atrakcie&variant=MZ%20Show&price=od%20400%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Balík atrakcií alebo väčšia zóna pre vyššiu návštevnosť a silnejší wow efekt.',
            price: 'od 1 190 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia atrakcií', 'vyššia kapacita pre návštevníkov', 'vhodné pre väčší verejný event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=Majalesy&scope=atrakcie&variant=MZ%20Majster&price=od%201190%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre majálesy',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-may&event=Majalesy&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný komplet pre menší majáles alebo jednoduchšie nastavenú akciu.',
            price: 'od 1 290 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=Majalesy&scope=komplet&variant=MZ%20Start&price=od%201290%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrou cenou.',
            price: 'od 1 550 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a organizácia v jednom', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=Majalesy&scope=komplet&variant=MZ%20Show&price=od%201550%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet pre väčší majáles, väčší priestor alebo silnejší wow efekt.',
            price: 'od 2 190 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a silnejší zážitok', 'riešenie pre silnejší verejný event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=Majalesy&scope=komplet&variant=MZ%20Majster&price=od%202190%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'family-day-maj': {
    eyebrow: 'MAJ',
    title: 'Family day',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'summer',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre Family day',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-may&event=Family%20day&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný programový variant pre menší Family day alebo internú akciu.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo zábavný blok', 'vhodné pre menšiu skupinu', 'rýchly formát bez zbytočných komplikácií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=Family%20day&scope=program&variant=MZ%20Start&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší programový variant pre väčšinu Family day akcií.',
            price: 'od 850 EUR',
            posterLabel: 'Variant programu',
            bullets: ['silnejší zážitok a väčší flow akcie', 'dobrý pomer medzi cenou a efektom', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=Family%20day&scope=program&variant=MZ%20Show&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší programový variant pre väčší priestor, väčšiu firmu alebo väčší crowd.',
            price: 'od 1 400 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah a silnejší wow efekt', 'väčšia energia pre publikum', 'vhodné pre silný firemný termín'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=Family%20day&scope=program&variant=MZ%20Majster&price=od%201400%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre Family day',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-may&event=Family%20day&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší interaktívny prvok alebo doplnok pre Family day.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['doplnok alebo menšia atrakcia', 'vhodné pre menší priestor', 'rýchle oživenie programu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=Family%20day&scope=atrakcie&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia pre silnejší zážitok hostí a väčší event vibe.',
            price: 'od 400 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo interaktívny prvok', 'silnejší efekt pre hostí', 'vhodné pre väčšinu Family day akcií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=Family%20day&scope=atrakcie&variant=MZ%20Show&price=od%20400%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Zóna alebo balík atrakcií pre väčší Family day a vyšší zážitok.',
            price: 'od 1 190 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia atrakcií', 'väčšia kapacita a väčší efekt', 'vhodné pre väčší event alebo firemný formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=Family%20day&scope=atrakcie&variant=MZ%20Majster&price=od%201190%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre Family day',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-may&event=Family%20day&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný komplet pre menší Family day alebo internú akciu.',
            price: 'od 1 290 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší firemný rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=Family%20day&scope=komplet&variant=MZ%20Start&price=od%201290%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrým event flow.',
            price: 'od 1 550 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a organizácia v jednom', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=Family%20day&scope=komplet&variant=MZ%20Show&price=od%201550%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet s väčším rozsahom, väčším tímom a väčším efektom.',
            price: 'od 2 190 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a väčší wow efekt', 'riešenie pre silný firemný termín alebo väčší event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-may&event=Family%20day&scope=komplet&variant=MZ%20Majster&price=od%202190%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'letne-tabory': {
    eyebrow: 'JUL',
    title: 'Letné tábory',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'school',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre letné tábory',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-jul&event=Letne%20tabory&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný táborový blok pre menšiu skupinu alebo kratší čas.',
            price: 'od 350 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovaný blok alebo hry', 'zapojenie detí do diania', 'vhodné pre menšiu skupinu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Letne%20tabory&scope=program&variant=MZ%20Start&price=od%20350%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší programový variant s väčšou energiou a lepším flow tábora.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['viac vstupov počas dňa', 'moderovanie a interakcia', 'odporúčaná voľba pre väčšinu táborov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Letne%20tabory&scope=program&variant=MZ%20Show&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejší program pre väčší tábor, väčší areál alebo viac skupín naraz.',
            price: 'od 750 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah a silnejší wow efekt', 'väčšia kapacita a tempo', 'vhodné pre silnejší táborový termín'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Letne%20tabory&scope=program&variant=MZ%20Majster&price=od%20750%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre letné tábory',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-jul&event=Letne%20tabory&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jedna alebo dve jednoduché aktivity na doplnenie táborového programu.',
            price: 'od 150 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['menší doplnok alebo aktivita', 'rýchle rozloženie na mieste', 'vhodné aj do menšieho priestoru'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Letne%20tabory&scope=atrakcie&variant=MZ%20Start&price=od%20150%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Vyvážený set atrakcií pre bežný tábor s lepším efektom.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo 2 prvky', 'lepší pohyb detí medzi stanovišťami', 'viditeľnejší efekt počas dňa'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Letne%20tabory&scope=atrakcie&variant=MZ%20Show&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejšia atrakciová zóna pre väčší tábor alebo silnejší termín.',
            price: 'od 899 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčší rozsah a viac stanovíšť', 'vyššia kapacita pre viac detí naraz', 'vhodné pre väčší areál alebo silný termín'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Letne%20tabory&scope=atrakcie&variant=MZ%20Majster&price=od%20899%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre letné tábory',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-jul&event=Letne%20tabory&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jednoduchší táborový deň s programom a niekoľkými doplnkami.',
            price: 'od 690 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'základná koordinácia', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Letne%20tabory&scope=komplet&variant=MZ%20Start&price=od%20690%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší táborový variant s programom, atrakciami a dobrým tempom.',
            price: 'od 990 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie aj moderovanie', 'vyvážená organizácia akcie', 'odporúčaná voľba pre väčšinu táborov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Letne%20tabory&scope=komplet&variant=MZ%20Show&price=od%20990%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Kompletné riešenie pre väčší tábor alebo silnejší táborový event.',
            price: 'od 1 450 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a silnejší wow efekt', 'individuálnejšie riešenie dňa'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Letne%20tabory&scope=komplet&variant=MZ%20Majster&price=od%201450%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'festivaly-jul': {
    eyebrow: 'JUL',
    title: 'Festivaly',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'summer',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre festivaly',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-jul&event=Festivaly&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný programový blok pre menší festival alebo kratší čas.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo krátky vstup', 'festivalová atmosféra', 'vhodné pre menší verejný formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Festivaly&scope=program&variant=MZ%20Start&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší variant programu s lepším flow a silnejším zážitkom pre návštevníkov.',
            price: 'od 850 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vyvážený programový formát', 'viac vstupov počas akcie', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Festivaly&scope=program&variant=MZ%20Show&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejší program pre väčší verejný priestor, pódium alebo väčší počet návštevníkov.',
            price: 'od 1 400 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah a dramaturgia', 'silnejší wow efekt pre publikum', 'vhodné pre silnejší verejný event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Festivaly&scope=program&variant=MZ%20Majster&price=od%201400%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre festivaly',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-jul&event=Festivaly&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší atrakčný doplnok pre oživenie festivalu.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['doplnok alebo menšia atrakcia', 'rýchle nasadenie na miesto', 'vhodné pre menší priestor'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Festivaly&scope=atrakcie&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia pre silnejší zážitok návštevníkov a výraznejší event vibe.',
            price: 'od 400 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo zóna', 'silnejší efekt pre hostí', 'vhodné pre väčšinu verejných akcií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Festivaly&scope=atrakcie&variant=MZ%20Show&price=od%20400%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Balík atrakcií alebo väčšia zóna pre vyššiu návštevnosť a silnejší wow efekt.',
            price: 'od 1 190 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia atrakcií', 'vyššia kapacita pre návštevníkov', 'vhodné pre väčší verejný event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Festivaly&scope=atrakcie&variant=MZ%20Majster&price=od%201190%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre festivaly',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-jul&event=Festivaly&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný komplet pre menší festival alebo jednoduchšie nastavenú akciu.',
            price: 'od 1 290 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Festivaly&scope=komplet&variant=MZ%20Start&price=od%201290%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrou cenou.',
            price: 'od 1 550 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a organizácia v jednom', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Festivaly&scope=komplet&variant=MZ%20Show&price=od%201550%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet pre väčší festival, väčší priestor alebo silnejší wow efekt.',
            price: 'od 2 190 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a silnejší zážitok', 'riešenie pre silnejší verejný event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Festivaly&scope=komplet&variant=MZ%20Majster&price=od%202190%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'sportove-dni-jul': {
    eyebrow: 'JUL',
    title: 'Športové dni',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'summer',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre športové dni',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-jul&event=Sportove%20dni&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný športový blok pre menšiu skupinu alebo kratší čas.',
            price: 'od 350 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo súťaže', 'pohyb a zapojenie účastníkov', 'vhodné pre menší priestor'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Sportove%20dni&scope=program&variant=MZ%20Start&price=od%20350%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší športový variant s väčšou energiou a lepším flow akcie.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['viac vstupov počas akcie', 'moderovanie a aktivity', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Sportove%20dni&scope=program&variant=MZ%20Show&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejší športový program pre väčší areál, viac účastníkov alebo vyšší wow efekt.',
            price: 'od 750 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah a silnejší wow efekt', 'väčšia kapacita a tempo', 'vhodné pre silnejší športový termín'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Sportove%20dni&scope=program&variant=MZ%20Majster&price=od%20750%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre športové dni',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-jul&event=Sportove%20dni&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jedna alebo dve jednoduché športové aktivity na doplnenie programu.',
            price: 'od 150 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['menší doplnok alebo aktivita', 'rýchle rozloženie na mieste', 'vhodné aj do menšieho priestoru'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Sportove%20dni&scope=atrakcie&variant=MZ%20Start&price=od%20150%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Vyvážený set atrakcií pre bežný športový deň s lepším efektom.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo 2 prvky', 'lepší pohyb účastníkov medzi stanovišťami', 'viditeľnejší efekt počas dňa'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Sportove%20dni&scope=atrakcie&variant=MZ%20Show&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejšia atrakciová zóna pre väčší športový deň alebo silnejší termín.',
            price: 'od 899 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčší rozsah a viac stanovíšť', 'vyššia kapacita pre viac ľudí naraz', 'vhodné pre väčší areál alebo silný termín'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Sportove%20dni&scope=atrakcie&variant=MZ%20Majster&price=od%20899%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre športové dni',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-jul&event=Sportove%20dni&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jednoduchší športový deň s programom a niekoľkými doplnkami.',
            price: 'od 690 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'základná koordinácia', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Sportove%20dni&scope=komplet&variant=MZ%20Start&price=od%20690%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší športový variant s programom, atrakciami a dobrým tempom.',
            price: 'od 990 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie aj moderovanie', 'vyvážená organizácia akcie', 'odporúčaná voľba pre väčšinu športových dní'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Sportove%20dni&scope=komplet&variant=MZ%20Show&price=od%20990%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Kompletné riešenie pre väčší športový deň alebo silnejší event.',
            price: 'od 1 450 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a silnejší wow efekt', 'individuálnejšie riešenie dňa'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Sportove%20dni&scope=komplet&variant=MZ%20Majster&price=od%201450%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'jarmoky-jul': {
    eyebrow: 'JUL',
    title: 'Jarmoky',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'summer',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre jarmoky',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-jul&event=Jarmoky&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný programový blok pre menší jarmok alebo kratší čas.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo krátky vstup', 'jarmočná atmosféra', 'vhodné pre menší verejný formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Jarmoky&scope=program&variant=MZ%20Start&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší variant programu s lepším flow a silnejším zážitkom pre návštevníkov.',
            price: 'od 850 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vyvážený programový formát', 'viac vstupov počas akcie', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Jarmoky&scope=program&variant=MZ%20Show&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejší program pre väčší verejný priestor, pódium alebo väčší počet návštevníkov.',
            price: 'od 1 400 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah a dramaturgia', 'silnejší wow efekt pre publikum', 'vhodné pre silnejší verejný event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Jarmoky&scope=program&variant=MZ%20Majster&price=od%201400%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre jarmoky',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-jul&event=Jarmoky&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší atrakčný doplnok pre oživenie jarmoku.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['doplnok alebo menšia atrakcia', 'rýchle nasadenie na miesto', 'vhodné pre menší priestor'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Jarmoky&scope=atrakcie&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia pre silnejší zážitok návštevníkov a výraznejší event vibe.',
            price: 'od 400 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo zóna', 'silnejší efekt pre hostí', 'vhodné pre väčšinu verejných akcií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Jarmoky&scope=atrakcie&variant=MZ%20Show&price=od%20400%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Balík atrakcií alebo väčšia zóna pre vyššiu návštevnosť a silnejší wow efekt.',
            price: 'od 1 190 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia atrakcií', 'vyššia kapacita pre návštevníkov', 'vhodné pre väčší verejný event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Jarmoky&scope=atrakcie&variant=MZ%20Majster&price=od%201190%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre jarmoky',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-jul&event=Jarmoky&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný komplet pre menší jarmok alebo jednoduchšie nastavenú akciu.',
            price: 'od 1 290 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Jarmoky&scope=komplet&variant=MZ%20Start&price=od%201290%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrou cenou.',
            price: 'od 1 550 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a organizácia v jednom', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Jarmoky&scope=komplet&variant=MZ%20Show&price=od%201550%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet pre väčší jarmok, väčší priestor alebo silnejší wow efekt.',
            price: 'od 2 190 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a silnejší zážitok', 'riešenie pre silnejší verejný event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jul&event=Jarmoky&scope=komplet&variant=MZ%20Majster&price=od%202190%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'dni-obci-a-miest': {
    eyebrow: 'AUGUST',
    title: 'Dni obcí a miest',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'summer',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre dni obcí a miest',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-aug&event=Dni%20obci%20a%20miest&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný programový blok pre menšie obecné alebo mestské podujatie.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo krátky vstup', 'komunitná atmosféra', 'vhodné pre menší verejný formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Dni%20obci%20a%20miest&scope=program&variant=MZ%20Start&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší variant programu s lepším flow a silnejším zážitkom pre návštevníkov.',
            price: 'od 850 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vyvážený programový formát', 'viac vstupov počas akcie', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Dni%20obci%20a%20miest&scope=program&variant=MZ%20Show&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejší program pre väčší verejný priestor, pódium alebo väčší počet návštevníkov.',
            price: 'od 1 400 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah a dramaturgia', 'silnejší wow efekt pre publikum', 'vhodné pre silnejší verejný event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Dni%20obci%20a%20miest&scope=program&variant=MZ%20Majster&price=od%201400%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre dni obcí a miest',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-aug&event=Dni%20obci%20a%20miest&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší atrakčný doplnok pre oživenie dňa obce alebo mesta.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['doplnok alebo menšia atrakcia', 'rýchle nasadenie na miesto', 'vhodné pre menší priestor'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Dni%20obci%20a%20miest&scope=atrakcie&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia pre silnejší zážitok návštevníkov a výraznejší event vibe.',
            price: 'od 400 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo zóna', 'silnejší efekt pre hostí', 'vhodné pre väčšinu verejných akcií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Dni%20obci%20a%20miest&scope=atrakcie&variant=MZ%20Show&price=od%20400%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Balík atrakcií alebo väčšia zóna pre vyššiu návštevnosť a silnejší wow efekt.',
            price: 'od 1 190 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia atrakcií', 'vyššia kapacita pre návštevníkov', 'vhodné pre väčší verejný event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Dni%20obci%20a%20miest&scope=atrakcie&variant=MZ%20Majster&price=od%201190%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre dni obcí a miest',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-aug&event=Dni%20obci%20a%20miest&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný komplet pre menšie obecné alebo mestské podujatie.',
            price: 'od 1 290 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Dni%20obci%20a%20miest&scope=komplet&variant=MZ%20Start&price=od%201290%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrou cenou.',
            price: 'od 1 550 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a organizácia v jednom', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Dni%20obci%20a%20miest&scope=komplet&variant=MZ%20Show&price=od%201550%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet pre väčší obecný alebo mestský event s väčším wow efektom.',
            price: 'od 2 190 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a silnejší zážitok', 'riešenie pre silnejší verejný event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Dni%20obci%20a%20miest&scope=komplet&variant=MZ%20Majster&price=od%202190%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'family-day-august': {
    eyebrow: 'AUGUST',
    title: 'Family day',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'summer',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre Family day',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-aug&event=Family%20day&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný programový variant pre menší Family day alebo internú akciu.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo zábavný blok', 'vhodné pre menšiu skupinu', 'rýchly formát bez zbytočných komplikácií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Family%20day&scope=program&variant=MZ%20Start&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší programový variant pre väčšinu Family day akcií.',
            price: 'od 850 EUR',
            posterLabel: 'Variant programu',
            bullets: ['silnejší zážitok a väčší flow akcie', 'dobrý pomer medzi cenou a efektom', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Family%20day&scope=program&variant=MZ%20Show&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší programový variant pre väčší priestor, väčšiu firmu alebo väčší crowd.',
            price: 'od 1 400 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah a silnejší wow efekt', 'väčšia energia pre publikum', 'vhodné pre silný firemný termín'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Family%20day&scope=program&variant=MZ%20Majster&price=od%201400%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre Family day',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-aug&event=Family%20day&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší interaktívny prvok alebo doplnok pre Family day.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['doplnok alebo menšia atrakcia', 'vhodné pre menší priestor', 'rýchle oživenie programu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Family%20day&scope=atrakcie&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia pre silnejší zážitok hostí a väčší event vibe.',
            price: 'od 400 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo interaktívny prvok', 'silnejší efekt pre hostí', 'vhodné pre väčšinu Family day akcií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Family%20day&scope=atrakcie&variant=MZ%20Show&price=od%20400%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Zóna alebo balík atrakcií pre väčší Family day a vyšší zážitok.',
            price: 'od 1 190 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia atrakcií', 'väčšia kapacita a väčší efekt', 'vhodné pre väčší event alebo firemný formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Family%20day&scope=atrakcie&variant=MZ%20Majster&price=od%201190%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre Family day',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-aug&event=Family%20day&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný komplet pre menší Family day alebo internú akciu.',
            price: 'od 1 290 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší firemný rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Family%20day&scope=komplet&variant=MZ%20Start&price=od%201290%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrým event flow.',
            price: 'od 1 550 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a organizácia v jednom', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Family%20day&scope=komplet&variant=MZ%20Show&price=od%201550%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet s väčším rozsahom, väčším tímom a väčším efektom.',
            price: 'od 2 190 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a väčší wow efekt', 'riešenie pre silný firemný termín alebo väčší event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Family%20day&scope=komplet&variant=MZ%20Majster&price=od%202190%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'festivaly-august': {
    eyebrow: 'AUGUST',
    title: 'Festivaly',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'summer',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre festivaly',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-aug&event=Festivaly&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný programový blok pre menší festival alebo kratší čas.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo krátky vstup', 'festivalová atmosféra', 'vhodné pre menší verejný formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Festivaly&scope=program&variant=MZ%20Start&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší variant programu s lepším flow a silnejším zážitkom pre návštevníkov.',
            price: 'od 850 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vyvážený programový formát', 'viac vstupov počas akcie', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Festivaly&scope=program&variant=MZ%20Show&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejší program pre väčší verejný priestor, pódium alebo väčší počet návštevníkov.',
            price: 'od 1 400 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah a dramaturgia', 'silnejší wow efekt pre publikum', 'vhodné pre silnejší verejný event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Festivaly&scope=program&variant=MZ%20Majster&price=od%201400%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre festivaly',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-aug&event=Festivaly&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší atrakčný doplnok pre oživenie festivalu.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['doplnok alebo menšia atrakcia', 'rýchle nasadenie na miesto', 'vhodné pre menší priestor'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Festivaly&scope=atrakcie&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia pre silnejší zážitok návštevníkov a výraznejší event vibe.',
            price: 'od 400 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo zóna', 'silnejší efekt pre hostí', 'vhodné pre väčšinu verejných akcií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Festivaly&scope=atrakcie&variant=MZ%20Show&price=od%20400%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Balík atrakcií alebo väčšia zóna pre vyššiu návštevnosť a silnejší wow efekt.',
            price: 'od 1 190 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia atrakcií', 'vyššia kapacita pre návštevníkov', 'vhodné pre väčší verejný event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Festivaly&scope=atrakcie&variant=MZ%20Majster&price=od%201190%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre festivaly',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-aug&event=Festivaly&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný komplet pre menší festival alebo jednoduchšie nastavenú akciu.',
            price: 'od 1 290 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Festivaly&scope=komplet&variant=MZ%20Start&price=od%201290%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrou cenou.',
            price: 'od 1 550 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a organizácia v jednom', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Festivaly&scope=komplet&variant=MZ%20Show&price=od%201550%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet pre väčší festival, väčší priestor alebo silnejší wow efekt.',
            price: 'od 2 190 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a silnejší zážitok', 'riešenie pre silnejší verejný event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Festivaly&scope=komplet&variant=MZ%20Majster&price=od%202190%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'rozlucka-s-letom': {
    eyebrow: 'AUGUST',
    title: 'Rozlúčka s letom',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'summer',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre rozlúčku s letom',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-aug&event=Rozlucka%20s%20letom&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jednoduchý letný blok na uzavretie sezóny alebo menšiu akciu.',
            price: 'od 450 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovaný vstup', 'ľahká letná atmosféra', 'rýchle oživenie podujatia'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Rozlucka%20s%20letom&scope=program&variant=MZ%20Start&price=od%20450%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Vyvážený letný program pre publikum, rodiny alebo deň obce.',
            price: 'od 920 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie a aktivácie', 'viac vstupov počas akcie', 'dobrý pomer medzi efektom a rozpočtom'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Rozlucka%20s%20letom&scope=program&variant=MZ%20Show&price=od%20920%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejší stage variant pre väčší letný termín alebo väčšie publikum.',
            price: 'od 1 550 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah a pódiová energia', 'silnejší letný wow efekt', 'vhodné pre väčší priestor a väčší počet ľudí'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Rozlucka%20s%20letom&scope=program&variant=MZ%20Majster&price=od%201550%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre rozlúčku s letom',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-aug&event=Rozlucka%20s%20letom&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jedna alebo dve letné atrakcie pre klienta, ktorý už program má.',
            price: 'od 350 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['jedna atrakcia alebo stánok', 'ľahké rozloženie na mieste', 'vhodné na rýchle oživenie akcie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Rozlucka%20s%20letom&scope=atrakcie&variant=MZ%20Start&price=od%20350%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Obľúbený mix atrakcií pre rodiny, deti alebo obecné podujatie.',
            price: 'od 880 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['2 až 3 letné prvky alebo atrakcie', 'vyšší pohyb ľudí v zóne', 'vhodné pre bežný letný event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Rozlucka%20s%20letom&scope=atrakcie&variant=MZ%20Show&price=od%20880%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Väčšia atrakciová zóna pre silný letný termín a väčší priestor.',
            price: 'od 1 650 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčší rozsah a viac stanovišť', 'silný vizuál a väčšia kapacita', 'vhodné pre väčší letný event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Rozlucka%20s%20letom&scope=atrakcie&variant=MZ%20Majster&price=od%201650%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre rozlúčku s letom',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-aug&event=Rozlucka%20s%20letom&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Program a doplnky pre jednoduchšie ukončenie leta alebo menšiu akciu.',
            price: 'od 950 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program a atrakcie v základnom rozsahu', 'jednoduchá koordinácia na mieste', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Rozlucka%20s%20letom&scope=komplet&variant=MZ%20Start&price=od%20950%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší variant kompletnej letnej akcie s dobrým flow a atmosférou.',
            price: 'od 1 950 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['moderovanie, program aj atrakcie', 'vyvážený letný zážitok pre publikum', 'silná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Rozlucka%20s%20letom&scope=komplet&variant=MZ%20Show&price=od%201950%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Kompletná letná produkcia s väčším rozsahom, väčším tímom a väčším efektom.',
            price: 'od 3 400 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['komplet akcia od návrhu po realizáciu', 'väčší rozsah programu a atrakcií', 'riešenie pre silný termín a väčší event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-aug&event=Rozlucka%20s%20letom&scope=komplet&variant=MZ%20Majster&price=od%203400%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'otvorenie-skolskeho-roka': {
    eyebrow: 'SEPTEMBER',
    title: 'Otvorenie školského roka',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'school',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre otvorenie školského roka',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-sep&event=Otvorenie%20skolskeho%20roka&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jednoduchý formát pre kratší školský blok alebo menší priestor.',
            price: 'od 350 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovaný blok', 'zapojenie detí a publika', 'vhodné pre menší školský formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Otvorenie%20skolskeho%20roka&scope=program&variant=MZ%20Start&price=od%20350%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší školský variant s väčšou energiou a lepším flow akcie.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['viac vstupov počas akcie', 'moderovanie a interakcia', 'odporúčaná voľba pre väčšinu škôl'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Otvorenie%20skolskeho%20roka&scope=program&variant=MZ%20Show&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejší program pre väčší priestor, väčší nápor detí alebo väčší wow efekt.',
            price: 'od 750 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah programu', 'silnejšia dramaturgia a rytmus akcie', 'vhodné pre silnejší školský termín'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Otvorenie%20skolskeho%20roka&scope=program&variant=MZ%20Majster&price=od%20750%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre otvorenie školského roka',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-sep&event=Otvorenie%20skolskeho%20roka&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jedna alebo dve jednoduché aktivity na doplnenie školského programu.',
            price: 'od 150 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['menší doplnok alebo aktivita', 'rýchle rozloženie na mieste', 'vhodné aj do menšieho priestoru'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Otvorenie%20skolskeho%20roka&scope=atrakcie&variant=MZ%20Start&price=od%20150%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Vyvážený set atrakcií pre bežný školský štart s lepším efektom.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo 2 prvky', 'lepší pohyb detí medzi stanovišťami', 'viditeľnejší efekt počas akcie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Otvorenie%20skolskeho%20roka&scope=atrakcie&variant=MZ%20Show&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejšia atrakciová zóna pre väčší školský štart alebo silnejší termín.',
            price: 'od 899 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčší rozsah a viac stanovíšť', 'vyššia kapacita pre viac detí naraz', 'vhodné pre väčší areál alebo silný termín'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Otvorenie%20skolskeho%20roka&scope=atrakcie&variant=MZ%20Majster&price=od%20899%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre otvorenie školského roka',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-sep&event=Otvorenie%20skolskeho%20roka&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jednoduchší školský štart s programom a niekoľkými doplnkami.',
            price: 'od 690 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'základná koordinácia', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Otvorenie%20skolskeho%20roka&scope=komplet&variant=MZ%20Start&price=od%20690%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší školský variant s programom, atrakciami a dobrým tempom.',
            price: 'od 990 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie aj moderovanie', 'vyvážená organizácia akcie', 'odporúčaná voľba pre väčšinu škôl'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Otvorenie%20skolskeho%20roka&scope=komplet&variant=MZ%20Show&price=od%20990%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Kompletné riešenie pre väčší školský štart alebo silnejší školský event.',
            price: 'od 1 450 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a silnejší wow efekt', 'individuálnejšie riešenie dňa'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Otvorenie%20skolskeho%20roka&scope=komplet&variant=MZ%20Majster&price=od%201450%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'skolske-akcie-september': {
    eyebrow: 'SEPTEMBER',
    title: 'Školské akcie',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'school',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre školské akcie',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-sep&event=Skolske%20akcie&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jednoduchý formát pre krátky školský deň alebo jednu časť programu.',
            price: 'od 400 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovaný blok', 'súťaže a aktivácia', 'ľahká organizácia pre školu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Skolske%20akcie&scope=program&variant=MZ%20Start&price=od%20400%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Silnejší školský program s väčšou interakciou a energiou.',
            price: 'od 850 EUR',
            posterLabel: 'Variant programu',
            bullets: ['viac vstupov počas dňa', 'moderovanie a zapojenie publika', 'vhodné pre bežný školský event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Skolske%20akcie&scope=program&variant=MZ%20Show&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejší program pre väčší priestor, pódium alebo väčší ročník.',
            price: 'od 1 350 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah programu', 'réžia a tempo celého bloku', 'silnejší wow efekt pre väčší event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Skolske%20akcie&scope=program&variant=MZ%20Majster&price=od%201350%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre školské akcie',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-sep&event=Skolske%20akcie&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jedna až dve jednoduché aktivity na doplnenie školského programu.',
            price: 'od 320 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['tvorivá alebo pohybová aktivita', 'rýchle rozloženie na mieste', 'vhodné aj do menšieho priestoru'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Skolske%20akcie&scope=atrakcie&variant=MZ%20Start&price=od%20320%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Vyvážený set atrakcií pre bežnú školskú akciu alebo deň detí v škole.',
            price: 'od 780 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['2 až 3 doplnky alebo atrakcie', 'lepší pohyb detí medzi stanovišťami', 'viditeľnejší efekt počas celého dňa'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Skolske%20akcie&scope=atrakcie&variant=MZ%20Show&price=od%20780%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejšie atrakcie pre väčšie školy alebo spoločné školské akcie.',
            price: 'od 1 450 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčší rozsah a viac stanovíšť', 'väčšia kapacita pre viac tried', 'vhodné pre väčšie dvory a areály'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Skolske%20akcie&scope=atrakcie&variant=MZ%20Majster&price=od%201450%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej školskej akcie',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-sep&event=Skolske%20akcie&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jednoduchšia školská akcia s programom a niekoľkými doplnkami.',
            price: 'od 850 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['programový blok a doplnky', 'základná koordinácia', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Skolske%20akcie&scope=komplet&variant=MZ%20Start&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší školský variant s programom, atrakciami a dobrým tempom.',
            price: 'od 1 650 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie aj moderovanie', 'vyvážená organizácia dňa', 'silný zážitok pre väčšinu škôl'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Skolske%20akcie&scope=komplet&variant=MZ%20Show&price=od%201650%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Kompletné riešenie pre väčší školský event alebo väčší areál.',
            price: 'od 2 900 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a réžia dňa', 'väčší rozsah a viac ľudí v tíme', 'individuálne riešenie podľa zadania'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Skolske%20akcie&scope=komplet&variant=MZ%20Majster&price=od%202900%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'dni-obci-a-miest-september': {
    eyebrow: 'SEPTEMBER',
    title: 'Dni obcí a miest',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'summer',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre dni obcí a miest',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-sep&event=Dni%20obci%20a%20miest&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný programový blok pre menšie obecné alebo mestské podujatie.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo krátky vstup', 'komunitná atmosféra', 'vhodné pre menší verejný formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Dni%20obci%20a%20miest&scope=program&variant=MZ%20Start&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší variant programu s lepším flow a silnejším zážitkom pre návštevníkov.',
            price: 'od 850 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vyvážený programový formát', 'viac vstupov počas akcie', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Dni%20obci%20a%20miest&scope=program&variant=MZ%20Show&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejší program pre väčší verejný priestor, pódium alebo väčší počet návštevníkov.',
            price: 'od 1 400 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah a dramaturgia', 'silnejší wow efekt pre publikum', 'vhodné pre silnejší verejný event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Dni%20obci%20a%20miest&scope=program&variant=MZ%20Majster&price=od%201400%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre dni obcí a miest',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-sep&event=Dni%20obci%20a%20miest&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší atrakčný doplnok pre oživenie dňa obce alebo mesta.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['doplnok alebo menšia atrakcia', 'rýchle nasadenie na miesto', 'vhodné pre menší priestor'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Dni%20obci%20a%20miest&scope=atrakcie&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia pre silnejší zážitok návštevníkov a výraznejší event vibe.',
            price: 'od 400 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo zóna', 'silnejší efekt pre hostí', 'vhodné pre väčšinu verejných akcií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Dni%20obci%20a%20miest&scope=atrakcie&variant=MZ%20Show&price=od%20400%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Balík atrakcií alebo väčšia zóna pre vyššiu návštevnosť a silnejší wow efekt.',
            price: 'od 1 190 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia atrakcií', 'vyššia kapacita pre návštevníkov', 'vhodné pre väčší verejný event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Dni%20obci%20a%20miest&scope=atrakcie&variant=MZ%20Majster&price=od%201190%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre dni obcí a miest',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-sep&event=Dni%20obci%20a%20miest&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný komplet pre menšie obecné alebo mestské podujatie.',
            price: 'od 1 290 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Dni%20obci%20a%20miest&scope=komplet&variant=MZ%20Start&price=od%201290%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrou cenou.',
            price: 'od 1 550 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a organizácia v jednom', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Dni%20obci%20a%20miest&scope=komplet&variant=MZ%20Show&price=od%201550%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet pre väčší obecný alebo mestský event s väčším wow efektom.',
            price: 'od 2 190 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a silnejší zážitok', 'riešenie pre silnejší verejný event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Dni%20obci%20a%20miest&scope=komplet&variant=MZ%20Majster&price=od%202190%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'firemne-akcie-september': {
    eyebrow: 'SEPTEMBER',
    title: 'Firemné akcie',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'summer',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre firemné akcie',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-sep&event=Firemne%20akcie&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný programový variant pre menšiu firemnú akciu alebo interné stretnutie.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo zábavný blok', 'vhodné pre menšiu firemnú skupinu', 'rýchly formát bez zbytočných komplikácií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Firemne%20akcie&scope=program&variant=MZ%20Start&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší programový variant pre väčšinu firemných akcií.',
            price: 'od 850 EUR',
            posterLabel: 'Variant programu',
            bullets: ['silnejší zážitok a väčší flow akcie', 'dobrý pomer medzi cenou a efektom', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Firemne%20akcie&scope=program&variant=MZ%20Show&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší programový variant pre väčší priestor, pódium alebo väčšiu firmu.',
            price: 'od 1 400 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah a silnejší wow efekt', 'väčšia energia pre publikum', 'vhodné pre silný firemný termín'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Firemne%20akcie&scope=program&variant=MZ%20Majster&price=od%201400%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre firemné akcie',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-sep&event=Firemne%20akcie&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší interaktívny prvok alebo doplnok pre firemnú akciu.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['doplnok alebo menšia atrakcia', 'vhodné pre menší priestor', 'rýchle oživenie programu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Firemne%20akcie&scope=atrakcie&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia pre silnejší zážitok hostí a väčší event vibe.',
            price: 'od 400 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo interaktívny prvok', 'silnejší efekt pre hostí', 'vhodné pre väčšinu firemných akcií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Firemne%20akcie&scope=atrakcie&variant=MZ%20Show&price=od%20400%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Zóna alebo balík atrakcií pre väčší firemný event a vyšší zážitok.',
            price: 'od 1 190 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia atrakcií', 'väčšia kapacita a väčší efekt', 'vhodné pre väčší event alebo firemný formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Firemne%20akcie&scope=atrakcie&variant=MZ%20Majster&price=od%201190%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre firemné akcie',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-sep&event=Firemne%20akcie&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný komplet pre menšiu firemnú akciu alebo interné stretnutie.',
            price: 'od 1 290 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší firemný rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Firemne%20akcie&scope=komplet&variant=MZ%20Start&price=od%201290%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrým event flow.',
            price: 'od 1 550 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a organizácia v jednom', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Firemne%20akcie&scope=komplet&variant=MZ%20Show&price=od%201550%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet s väčším rozsahom, väčším tímom a väčším efektom.',
            price: 'od 2 190 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a väčší wow efekt', 'riešenie pre silný firemný termín alebo väčší event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-sep&event=Firemne%20akcie&scope=komplet&variant=MZ%20Majster&price=od%202190%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'halloween-programy': {
    eyebrow: 'OKTOBER',
    title: 'Halloween programy',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'goodbye',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre Halloween programy',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-oct&event=Halloween%20programy&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný halloween blok pre menší priestor alebo kratší čas.',
            price: 'od 250 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovaný blok alebo súťaže', 'halloweenska atmosféra', 'vhodné pre menší formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Halloween%20programy&scope=program&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší halloween program s lepším flow a silnejším zážitkom.',
            price: 'od 450 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vyvážený programový formát', 'viac vstupov počas akcie', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Halloween%20programy&scope=program&variant=MZ%20Show&price=od%20450%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejší halloween program pre väčší priestor, väčšie publikum alebo silnejší wow efekt.',
            price: 'od 750 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah programu', 'silnejšia dramaturgia a wow efekt', 'vhodné pre silnejší eventový formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Halloween%20programy&scope=program&variant=MZ%20Majster&price=od%20750%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre Halloween programy',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-oct&event=Halloween%20programy&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší doplnok alebo atrakcia na oživenie halloween akcie.',
            price: 'od 150 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['menší doplnok alebo interaktívny prvok', 'rýchle nasadenie na miesto', 'vhodné pre komornejší formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Halloween%20programy&scope=atrakcie&variant=MZ%20Start&price=od%20150%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia pre silnejší zážitok hostí a výraznejší halloween efekt.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo zóna', 'silnejší efekt pre hostí', 'vhodné pre väčšinu akcií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Halloween%20programy&scope=atrakcie&variant=MZ%20Show&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Balík atrakcií alebo zóna pre silnejšie podujatie a väčší wow efekt.',
            price: 'od 899 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia viacerých prvkov', 'väčší vizuálny efekt', 'vhodné pre väčšie podujatie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Halloween%20programy&scope=atrakcie&variant=MZ%20Majster&price=od%20899%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre Halloween programy',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-oct&event=Halloween%20programy&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základná kombinácia programu a atrakcií pre menšiu alebo jednoduchšiu akciu.',
            price: 'od 690 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Halloween%20programy&scope=komplet&variant=MZ%20Start&price=od%20690%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrou cenou.',
            price: 'od 990 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a plynulý flow', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Halloween%20programy&scope=komplet&variant=MZ%20Show&price=od%20990%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet pre väčší event, väčší priestor alebo vyšší wow efekt.',
            price: 'od 1 450 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a väčší zážitok', 'riešenie pre silnejšie podujatie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Halloween%20programy&scope=komplet&variant=MZ%20Majster&price=od%201450%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'strasidelne-eventy': {
    eyebrow: 'OKTOBER',
    title: 'Strašidelné eventy',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'goodbye',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre strašidelné eventy',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-oct&event=Strasidelne%20eventy&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný strašidelný program pre menší event alebo kratší čas.',
            price: 'od 250 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovaný blok alebo súťaže', 'tematická atmosféra', 'vhodné pre menší formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Strasidelne%20eventy&scope=program&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší strašidelný program s lepším flow a silnejším zážitkom.',
            price: 'od 450 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vyvážený programový formát', 'viac vstupov počas akcie', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Strasidelne%20eventy&scope=program&variant=MZ%20Show&price=od%20450%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejší strašidelný program pre väčší priestor, väčšie publikum alebo silnejší wow efekt.',
            price: 'od 750 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah programu', 'silnejšia dramaturgia a wow efekt', 'vhodné pre silnejší eventový formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Strasidelne%20eventy&scope=program&variant=MZ%20Majster&price=od%20750%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre strašidelné eventy',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-oct&event=Strasidelne%20eventy&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší doplnok alebo atrakcia na oživenie strašidelnej akcie.',
            price: 'od 150 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['menší doplnok alebo interaktívny prvok', 'rýchle nasadenie na miesto', 'vhodné pre komornejší formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Strasidelne%20eventy&scope=atrakcie&variant=MZ%20Start&price=od%20150%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia pre silnejší zážitok hostí a výraznejší tematický efekt.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo zóna', 'silnejší efekt pre hostí', 'vhodné pre väčšinu akcií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Strasidelne%20eventy&scope=atrakcie&variant=MZ%20Show&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Balík atrakcií alebo zóna pre silnejšie podujatie a väčší wow efekt.',
            price: 'od 899 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia viacerých prvkov', 'väčší vizuálny efekt', 'vhodné pre väčšie podujatie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Strasidelne%20eventy&scope=atrakcie&variant=MZ%20Majster&price=od%20899%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre strašidelné eventy',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-oct&event=Strasidelne%20eventy&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základná kombinácia programu a atrakcií pre menšiu alebo jednoduchšiu akciu.',
            price: 'od 690 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Strasidelne%20eventy&scope=komplet&variant=MZ%20Start&price=od%20690%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrou cenou.',
            price: 'od 990 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a plynulý flow', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Strasidelne%20eventy&scope=komplet&variant=MZ%20Show&price=od%20990%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet pre väčší event, väčší priestor alebo vyšší wow efekt.',
            price: 'od 1 450 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a väčší zážitok', 'riešenie pre silnejšie podujatie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Strasidelne%20eventy&scope=komplet&variant=MZ%20Majster&price=od%201450%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'teambuildingy-oktober': {
    eyebrow: 'OKTOBER',
    title: 'Teambuildingy',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'summer',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre teambuildingy',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-oct&event=Teambuildingy&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný programový variant pre menší tím alebo kratší firemný blok.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo tímová aktivita', 'vhodné pre menšiu skupinu', 'rýchly formát bez komplikácií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Teambuildingy&scope=program&variant=MZ%20Start&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší teambuildingový variant s lepším flow a silnejším zážitkom.',
            price: 'od 850 EUR',
            posterLabel: 'Variant programu',
            bullets: ['silnejší zážitok a väčší flow akcie', 'dobrý pomer medzi cenou a efektom', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Teambuildingy&scope=program&variant=MZ%20Show&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší programový variant pre väčší tím, väčší priestor alebo vyšší wow efekt.',
            price: 'od 1 400 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah a silnejší wow efekt', 'väčšia energia pre publikum', 'vhodné pre silný firemný termín'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Teambuildingy&scope=program&variant=MZ%20Majster&price=od%201400%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre teambuildingy',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-oct&event=Teambuildingy&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší interaktívny prvok alebo doplnok pre teambuilding.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['doplnok alebo menšia atrakcia', 'vhodné pre menší priestor', 'rýchle oživenie programu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Teambuildingy&scope=atrakcie&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia pre silnejší zážitok tímu a väčší event vibe.',
            price: 'od 400 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo interaktívny prvok', 'silnejší efekt pre hostí', 'vhodné pre väčšinu firemných akcií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Teambuildingy&scope=atrakcie&variant=MZ%20Show&price=od%20400%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Zóna alebo balík atrakcií pre väčší tím a vyšší zážitok.',
            price: 'od 1 190 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia atrakcií', 'väčšia kapacita a väčší efekt', 'vhodné pre väčší event alebo firemný formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Teambuildingy&scope=atrakcie&variant=MZ%20Majster&price=od%201190%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre teambuildingy',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-oct&event=Teambuildingy&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný komplet pre menší teambuilding alebo internú akciu.',
            price: 'od 1 290 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší firemný rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Teambuildingy&scope=komplet&variant=MZ%20Start&price=od%201290%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrým event flow.',
            price: 'od 1 550 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a organizácia v jednom', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Teambuildingy&scope=komplet&variant=MZ%20Show&price=od%201550%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet s väčším rozsahom, väčším tímom a väčším efektom.',
            price: 'od 2 190 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a väčší wow efekt', 'riešenie pre silný firemný termín alebo väčší event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Teambuildingy&scope=komplet&variant=MZ%20Majster&price=od%202190%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'firemne-eventy-oktober': {
    eyebrow: 'OKTOBER',
    title: 'Firemné eventy',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'summer',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre firemné eventy',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-oct&event=Firemne%20eventy&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný programový variant pre menší firemný event alebo internú akciu.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo zábavný blok', 'vhodné pre menšiu firemnú skupinu', 'rýchly formát bez zbytočných komplikácií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Firemne%20eventy&scope=program&variant=MZ%20Start&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší programový variant pre väčšinu firemných eventov.',
            price: 'od 850 EUR',
            posterLabel: 'Variant programu',
            bullets: ['silnejší zážitok a väčší flow akcie', 'dobrý pomer medzi cenou a efektom', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Firemne%20eventy&scope=program&variant=MZ%20Show&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší programový variant pre väčší priestor, pódium alebo väčšiu firmu.',
            price: 'od 1 400 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah a silnejší wow efekt', 'väčšia energia pre publikum', 'vhodné pre silný firemný termín'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Firemne%20eventy&scope=program&variant=MZ%20Majster&price=od%201400%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre firemné eventy',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-oct&event=Firemne%20eventy&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší interaktívny prvok alebo doplnok pre firemnú akciu.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['doplnok alebo menšia atrakcia', 'vhodné pre menší priestor', 'rýchle oživenie programu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Firemne%20eventy&scope=atrakcie&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia pre silnejší zážitok hostí a väčší event vibe.',
            price: 'od 400 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo interaktívny prvok', 'silnejší efekt pre hostí', 'vhodné pre väčšinu firemných akcií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Firemne%20eventy&scope=atrakcie&variant=MZ%20Show&price=od%20400%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Zóna alebo balík atrakcií pre väčší firemný event a vyšší zážitok.',
            price: 'od 1 190 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia atrakcií', 'väčšia kapacita a väčší efekt', 'vhodné pre väčší event alebo firemný formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Firemne%20eventy&scope=atrakcie&variant=MZ%20Majster&price=od%201190%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre firemné eventy',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-oct&event=Firemne%20eventy&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný komplet pre menší firemný event alebo internú akciu.',
            price: 'od 1 290 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší firemný rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Firemne%20eventy&scope=komplet&variant=MZ%20Start&price=od%201290%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrým event flow.',
            price: 'od 1 550 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a organizácia v jednom', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Firemne%20eventy&scope=komplet&variant=MZ%20Show&price=od%201550%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet s väčším rozsahom, väčším tímom a väčším efektom.',
            price: 'od 2 190 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a väčší wow efekt', 'riešenie pre silný firemný termín alebo väčší event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-oct&event=Firemne%20eventy&scope=komplet&variant=MZ%20Majster&price=od%202190%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'firemne-eventy-november': {
    eyebrow: 'NOVEMBER',
    title: 'Firemné eventy',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'summer',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre firemné eventy',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-nov&event=Firemne%20eventy&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný programový variant pre menší firemný event alebo internú akciu.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo zábavný blok', 'vhodné pre menšiu firemnú skupinu', 'rýchly formát bez zbytočných komplikácií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Firemne%20eventy&scope=program&variant=MZ%20Start&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší programový variant pre väčšinu firemných eventov.',
            price: 'od 850 EUR',
            posterLabel: 'Variant programu',
            bullets: ['silnejší zážitok a väčší flow akcie', 'dobrý pomer medzi cenou a efektom', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Firemne%20eventy&scope=program&variant=MZ%20Show&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší programový variant pre väčší priestor, pódium alebo väčšiu firmu.',
            price: 'od 1 400 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah a silnejší wow efekt', 'väčšia energia pre publikum', 'vhodné pre silný firemný termín'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Firemne%20eventy&scope=program&variant=MZ%20Majster&price=od%201400%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre firemné eventy',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-nov&event=Firemne%20eventy&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší interaktívny prvok alebo doplnok pre firemnú akciu.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['doplnok alebo menšia atrakcia', 'vhodné pre menší priestor', 'rýchle oživenie programu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Firemne%20eventy&scope=atrakcie&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia pre silnejší zážitok hostí a väčší event vibe.',
            price: 'od 400 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo interaktívny prvok', 'silnejší efekt pre hostí', 'vhodné pre väčšinu firemných akcií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Firemne%20eventy&scope=atrakcie&variant=MZ%20Show&price=od%20400%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Zóna alebo balík atrakcií pre väčší firemný event a vyšší zážitok.',
            price: 'od 1 190 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia atrakcií', 'väčšia kapacita a väčší efekt', 'vhodné pre väčší event alebo firemný formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Firemne%20eventy&scope=atrakcie&variant=MZ%20Majster&price=od%201190%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre firemné eventy',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-nov&event=Firemne%20eventy&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný komplet pre menší firemný event alebo internú akciu.',
            price: 'od 1 290 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší firemný rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Firemne%20eventy&scope=komplet&variant=MZ%20Start&price=od%201290%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrým event flow.',
            price: 'od 1 550 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a organizácia v jednom', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Firemne%20eventy&scope=komplet&variant=MZ%20Show&price=od%201550%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet s väčším rozsahom, väčším tímom a väčším efektom.',
            price: 'od 2 190 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a väčší wow efekt', 'riešenie pre silný firemný termín alebo väčší event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Firemne%20eventy&scope=komplet&variant=MZ%20Majster&price=od%202190%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'teambuildingy-november': {
    eyebrow: 'NOVEMBER',
    title: 'Teambuildingy',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'summer',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre teambuildingy',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-nov&event=Teambuildingy&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný programový variant pre menší tím alebo kratší firemný blok.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo tímová aktivita', 'vhodné pre menšiu skupinu', 'rýchly formát bez komplikácií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Teambuildingy&scope=program&variant=MZ%20Start&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší teambuildingový variant s lepším flow a silnejším zážitkom.',
            price: 'od 850 EUR',
            posterLabel: 'Variant programu',
            bullets: ['silnejší zážitok a väčší flow akcie', 'dobrý pomer medzi cenou a efektom', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Teambuildingy&scope=program&variant=MZ%20Show&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší programový variant pre väčší tím, väčší priestor alebo vyšší wow efekt.',
            price: 'od 1 400 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah a silnejší wow efekt', 'väčšia energia pre publikum', 'vhodné pre silný firemný termín'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Teambuildingy&scope=program&variant=MZ%20Majster&price=od%201400%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre teambuildingy',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-nov&event=Teambuildingy&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší interaktívny prvok alebo doplnok pre teambuilding.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['doplnok alebo menšia atrakcia', 'vhodné pre menší priestor', 'rýchle oživenie programu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Teambuildingy&scope=atrakcie&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia pre silnejší zážitok tímu a väčší event vibe.',
            price: 'od 400 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo interaktívny prvok', 'silnejší efekt pre hostí', 'vhodné pre väčšinu firemných akcií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Teambuildingy&scope=atrakcie&variant=MZ%20Show&price=od%20400%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Zóna alebo balík atrakcií pre väčší tím a vyšší zážitok.',
            price: 'od 1 190 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia atrakcií', 'väčšia kapacita a väčší efekt', 'vhodné pre väčší event alebo firemný formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Teambuildingy&scope=atrakcie&variant=MZ%20Majster&price=od%201190%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre teambuildingy',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-nov&event=Teambuildingy&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný komplet pre menší teambuilding alebo internú akciu.',
            price: 'od 1 290 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší firemný rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Teambuildingy&scope=komplet&variant=MZ%20Start&price=od%201290%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrým event flow.',
            price: 'od 1 550 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a organizácia v jednom', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Teambuildingy&scope=komplet&variant=MZ%20Show&price=od%201550%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet s väčším rozsahom, väčším tímom a väčším efektom.',
            price: 'od 2 190 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a väčší wow efekt', 'riešenie pre silný firemný termín alebo väčší event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Teambuildingy&scope=komplet&variant=MZ%20Majster&price=od%202190%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'husacie-hody': {
    eyebrow: 'NOVEMBER',
    title: 'Husacie hody',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'goodbye',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre husacie hody',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-nov&event=Husacie%20hody&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný programový blok pre menšie komunitné alebo gastro podujatie.',
            price: 'od 250 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo krátky vstup', 'príjemná atmosféra', 'vhodné pre menší priestor'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Husacie%20hody&scope=program&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší programový variant s lepším flow a silnejším zážitkom pre hostí.',
            price: 'od 450 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vyvážený programový formát', 'viac vstupov počas akcie', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Husacie%20hody&scope=program&variant=MZ%20Show&price=od%20450%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejší program pre väčší priestor, väčšie publikum alebo výraznejší wow efekt.',
            price: 'od 750 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah programu', 'silnejšia dramaturgia a wow efekt', 'vhodné pre silnejší eventový formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Husacie%20hody&scope=program&variant=MZ%20Majster&price=od%20750%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre husacie hody',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-nov&event=Husacie%20hody&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší doplnok alebo atrakcia na oživenie podujatia.',
            price: 'od 150 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['menší doplnok alebo interaktívny prvok', 'rýchle nasadenie na miesto', 'vhodné pre komornejší formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Husacie%20hody&scope=atrakcie&variant=MZ%20Start&price=od%20150%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia alebo zážitkový prvok pre silnejší efekt pre hostí.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo zóna', 'silnejší efekt pre hostí', 'vhodné pre väčšinu akcií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Husacie%20hody&scope=atrakcie&variant=MZ%20Show&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Balík atrakcií alebo zóna pre silnejšie podujatie a väčší wow efekt.',
            price: 'od 899 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia viacerých prvkov', 'väčší vizuálny efekt', 'vhodné pre väčšie podujatie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Husacie%20hody&scope=atrakcie&variant=MZ%20Majster&price=od%20899%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre husacie hody',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-nov&event=Husacie%20hody&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základná kombinácia programu a atrakcií pre menšie alebo jednoduchšie podujatie.',
            price: 'od 690 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Husacie%20hody&scope=komplet&variant=MZ%20Start&price=od%20690%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrou cenou.',
            price: 'od 990 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a plynulý flow', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Husacie%20hody&scope=komplet&variant=MZ%20Show&price=od%20990%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet pre väčší event, väčší priestor alebo vyšší wow efekt.',
            price: 'od 1 450 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a väčší zážitok', 'riešenie pre silnejšie podujatie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Husacie%20hody&scope=komplet&variant=MZ%20Majster&price=od%201450%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'predvianocne-vecierky': {
    eyebrow: 'NOVEMBER',
    title: 'Predvianočné večierky',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'goodbye',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre predvianočné večierky',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-nov&event=Predvianocne%20vecierky&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný programový variant pre menší večierok alebo interné stretnutie.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo zábavný blok', 'vhodné pre menšiu skupinu', 'rýchly formát bez zbytočných komplikácií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Predvianocne%20vecierky&scope=program&variant=MZ%20Start&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší programový variant s lepším flow a silnejším zážitkom pre hostí.',
            price: 'od 850 EUR',
            posterLabel: 'Variant programu',
            bullets: ['silnejší zážitok a väčší flow akcie', 'dobrý pomer medzi cenou a efektom', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Predvianocne%20vecierky&scope=program&variant=MZ%20Show&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší programový variant pre väčší priestor, pódium alebo väčšiu firmu.',
            price: 'od 1 400 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah a silnejší wow efekt', 'väčšia energia pre publikum', 'vhodné pre silný firemný termín'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Predvianocne%20vecierky&scope=program&variant=MZ%20Majster&price=od%201400%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre predvianočné večierky',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-nov&event=Predvianocne%20vecierky&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší interaktívny prvok alebo doplnok pre večierok.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['doplnok alebo menšia atrakcia', 'vhodné pre menší priestor', 'rýchle oživenie programu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Predvianocne%20vecierky&scope=atrakcie&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia pre silnejší zážitok hostí a väčší event vibe.',
            price: 'od 400 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo interaktívny prvok', 'silnejší efekt pre hostí', 'vhodné pre väčšinu firemných akcií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Predvianocne%20vecierky&scope=atrakcie&variant=MZ%20Show&price=od%20400%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Zóna alebo balík atrakcií pre väčší večierok a vyšší zážitok.',
            price: 'od 1 190 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia atrakcií', 'väčšia kapacita a väčší efekt', 'vhodné pre väčší event alebo firemný formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Predvianocne%20vecierky&scope=atrakcie&variant=MZ%20Majster&price=od%201190%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre predvianočné večierky',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-nov&event=Predvianocne%20vecierky&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný komplet pre menší večierok alebo internú akciu.',
            price: 'od 1 290 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší firemný rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Predvianocne%20vecierky&scope=komplet&variant=MZ%20Start&price=od%201290%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrým event flow.',
            price: 'od 1 550 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a organizácia v jednom', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Predvianocne%20vecierky&scope=komplet&variant=MZ%20Show&price=od%201550%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet s väčším rozsahom, väčším tímom a väčším efektom.',
            price: 'od 2 190 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a väčší wow efekt', 'riešenie pre silný firemný termín alebo väčší event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-nov&event=Predvianocne%20vecierky&scope=komplet&variant=MZ%20Majster&price=od%202190%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'mikulasske-akcie': {
    eyebrow: 'DECEMBER',
    title: 'Mikulášske akcie',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'kids',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre Mikulášske akcie',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-dec&event=Mikulasske%20akcie&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný mikulášsky program pre menší priestor alebo kratší čas.',
            price: 'od 350 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovaný blok alebo vstup Mikuláša', 'vianočná atmosféra', 'vhodné pre menšiu skupinu detí'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Mikulasske%20akcie&scope=program&variant=MZ%20Start&price=od%20350%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší mikulášsky program s väčšou energiou a lepším flow akcie.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['viac vstupov počas akcie', 'moderovanie a interakcia', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Mikulasske%20akcie&scope=program&variant=MZ%20Show&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejší mikulášsky program pre väčší priestor, väčšiu skupinu alebo väčší wow efekt.',
            price: 'od 750 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah programu', 'silnejšia dramaturgia a wow efekt', 'vhodné pre silnejší mikulášsky termín'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Mikulasske%20akcie&scope=program&variant=MZ%20Majster&price=od%20750%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre Mikulášske akcie',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-dec&event=Mikulasske%20akcie&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jedna alebo dve jednoduché aktivity na doplnenie mikulášskeho programu.',
            price: 'od 150 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['menší doplnok alebo aktivita', 'rýchle rozloženie na mieste', 'vhodné aj do menšieho priestoru'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Mikulasske%20akcie&scope=atrakcie&variant=MZ%20Start&price=od%20150%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Vyvážený set atrakcií pre bežnú mikulášsku akciu s lepším efektom.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo 2 prvky', 'lepší pohyb detí medzi stanovišťami', 'viditeľnejší efekt počas akcie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Mikulasske%20akcie&scope=atrakcie&variant=MZ%20Show&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejšia atrakciová zóna pre väčší mikulášsky event alebo silnejší termín.',
            price: 'od 899 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčší rozsah a viac stanovíšť', 'vyššia kapacita pre viac detí naraz', 'vhodné pre väčší areál alebo silný termín'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Mikulasske%20akcie&scope=atrakcie&variant=MZ%20Majster&price=od%20899%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre Mikulášske akcie',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-dec&event=Mikulasske%20akcie&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jednoduchšia mikulášska akcia s programom a niekoľkými doplnkami.',
            price: 'od 690 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'základná koordinácia', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Mikulasske%20akcie&scope=komplet&variant=MZ%20Start&price=od%20690%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší mikulášsky variant s programom, atrakciami a dobrým tempom.',
            price: 'od 990 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie aj moderovanie', 'vyvážená organizácia akcie', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Mikulasske%20akcie&scope=komplet&variant=MZ%20Show&price=od%20990%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Kompletné riešenie pre väčší mikulášsky event alebo silnejší decembrový termín.',
            price: 'od 1 450 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a silnejší wow efekt', 'individuálnejšie riešenie dňa'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Mikulasske%20akcie&scope=komplet&variant=MZ%20Majster&price=od%201450%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'vianocne-vecierky': {
    eyebrow: 'DECEMBER',
    title: 'Vianočné večierky',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'goodbye',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre Vianočné večierky',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-dec&event=Vianocne%20vecierky&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný programový variant pre menší večierok alebo interné stretnutie.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo zábavný blok', 'vhodné pre menšiu skupinu', 'rýchly formát bez zbytočných komplikácií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Vianocne%20vecierky&scope=program&variant=MZ%20Start&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší programový variant s lepším flow a silnejším zážitkom pre hostí.',
            price: 'od 850 EUR',
            posterLabel: 'Variant programu',
            bullets: ['silnejší zážitok a väčší flow akcie', 'dobrý pomer medzi cenou a efektom', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Vianocne%20vecierky&scope=program&variant=MZ%20Show&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší programový variant pre väčší priestor, pódium alebo väčšiu firmu.',
            price: 'od 1 400 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah a silnejší wow efekt', 'väčšia energia pre publikum', 'vhodné pre silný firemný termín'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Vianocne%20vecierky&scope=program&variant=MZ%20Majster&price=od%201400%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre Vianočné večierky',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-dec&event=Vianocne%20vecierky&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší interaktívny prvok alebo doplnok pre večierok.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['doplnok alebo menšia atrakcia', 'vhodné pre menší priestor', 'rýchle oživenie programu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Vianocne%20vecierky&scope=atrakcie&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia pre silnejší zážitok hostí a väčší event vibe.',
            price: 'od 400 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo interaktívny prvok', 'silnejší efekt pre hostí', 'vhodné pre väčšinu firemných akcií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Vianocne%20vecierky&scope=atrakcie&variant=MZ%20Show&price=od%20400%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Zóna alebo balík atrakcií pre väčší večierok a vyšší zážitok.',
            price: 'od 1 190 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia atrakcií', 'väčšia kapacita a väčší efekt', 'vhodné pre väčší event alebo firemný formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Vianocne%20vecierky&scope=atrakcie&variant=MZ%20Majster&price=od%201190%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre Vianočné večierky',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-dec&event=Vianocne%20vecierky&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný komplet pre menší večierok alebo internú akciu.',
            price: 'od 1 290 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší firemný rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Vianocne%20vecierky&scope=komplet&variant=MZ%20Start&price=od%201290%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrým event flow.',
            price: 'od 1 550 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a organizácia v jednom', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Vianocne%20vecierky&scope=komplet&variant=MZ%20Show&price=od%201550%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet s väčším rozsahom, väčším tímom a väčším efektom.',
            price: 'od 2 190 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a väčší wow efekt', 'riešenie pre silný firemný termín alebo väčší event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Vianocne%20vecierky&scope=komplet&variant=MZ%20Majster&price=od%202190%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'vianocne-trhy': {
    eyebrow: 'DECEMBER',
    title: 'Vianočné trhy',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'goodbye',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre Vianočné trhy',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-dec&event=Vianocne%20trhy&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný programový blok pre menší vianočný trh alebo kratší čas.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo krátky vstup', 'vianočná atmosféra', 'vhodné pre menší verejný formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Vianocne%20trhy&scope=program&variant=MZ%20Start&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší variant programu s lepším flow a silnejším zážitkom pre návštevníkov.',
            price: 'od 850 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vyvážený programový formát', 'viac vstupov počas akcie', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Vianocne%20trhy&scope=program&variant=MZ%20Show&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejší program pre väčší verejný priestor, pódium alebo väčší počet návštevníkov.',
            price: 'od 1 400 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah a dramaturgia', 'silnejší wow efekt pre publikum', 'vhodné pre silnejší verejný event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Vianocne%20trhy&scope=program&variant=MZ%20Majster&price=od%201400%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre Vianočné trhy',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-dec&event=Vianocne%20trhy&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší atrakčný doplnok pre oživenie vianočných trhov.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['doplnok alebo menšia atrakcia', 'rýchle nasadenie na miesto', 'vhodné pre menší priestor'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Vianocne%20trhy&scope=atrakcie&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia pre silnejší zážitok návštevníkov a výraznejší event vibe.',
            price: 'od 400 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo zóna', 'silnejší efekt pre hostí', 'vhodné pre väčšinu verejných akcií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Vianocne%20trhy&scope=atrakcie&variant=MZ%20Show&price=od%20400%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Balík atrakcií alebo väčšia zóna pre vyššiu návštevnosť a silnejší wow efekt.',
            price: 'od 1 190 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia atrakcií', 'vyššia kapacita pre návštevníkov', 'vhodné pre väčší verejný event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Vianocne%20trhy&scope=atrakcie&variant=MZ%20Majster&price=od%201190%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre Vianočné trhy',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-dec&event=Vianocne%20trhy&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný komplet pre menší vianočný trh alebo jednoduchšie nastavenú akciu.',
            price: 'od 1 290 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Vianocne%20trhy&scope=komplet&variant=MZ%20Start&price=od%201290%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrou cenou.',
            price: 'od 1 550 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a organizácia v jednom', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Vianocne%20trhy&scope=komplet&variant=MZ%20Show&price=od%201550%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet pre väčší vianočný trh, väčší priestor alebo silnejší wow efekt.',
            price: 'od 2 190 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a silnejší zážitok', 'riešenie pre silnejší verejný event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Vianocne%20trhy&scope=komplet&variant=MZ%20Majster&price=od%202190%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'silvestrovske-akcie': {
    eyebrow: 'DECEMBER',
    title: 'Silvestrovské akcie',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'goodbye',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre Silvestrovské akcie',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-dec&event=Silvestrovske%20akcie&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný silvestrovský blok pre menší priestor alebo kratší čas.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo krátky vstup', 'silvestrovská atmosféra', 'vhodné pre menší formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Silvestrovske%20akcie&scope=program&variant=MZ%20Start&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší silvestrovský program s lepším flow a silnejším zážitkom.',
            price: 'od 850 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vyvážený programový formát', 'viac vstupov počas akcie', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Silvestrovske%20akcie&scope=program&variant=MZ%20Show&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejší silvestrovský program pre väčší priestor, väčšie publikum alebo vyšší wow efekt.',
            price: 'od 1 400 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah programu', 'silnejšia dramaturgia a wow efekt', 'vhodné pre silný koncoročný event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Silvestrovske%20akcie&scope=program&variant=MZ%20Majster&price=od%201400%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre Silvestrovské akcie',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-dec&event=Silvestrovske%20akcie&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší interaktívny prvok alebo doplnok na oživenie silvestrovskej akcie.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['doplnok alebo menšia atrakcia', 'vhodné pre menší priestor', 'rýchle oživenie programu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Silvestrovske%20akcie&scope=atrakcie&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia pre silnejší zážitok hostí a väčší event vibe.',
            price: 'od 400 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo interaktívny prvok', 'silnejší efekt pre hostí', 'vhodné pre väčšinu silvestrovských akcií'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Silvestrovske%20akcie&scope=atrakcie&variant=MZ%20Show&price=od%20400%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Zóna alebo balík atrakcií pre väčšiu silvestrovskú akciu a vyšší zážitok.',
            price: 'od 1 190 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia atrakcií', 'väčšia kapacita a väčší efekt', 'vhodné pre väčší eventový formát'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Silvestrovske%20akcie&scope=atrakcie&variant=MZ%20Majster&price=od%201190%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre Silvestrovské akcie',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-dec&event=Silvestrovske%20akcie&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný komplet pre menšiu silvestrovskú akciu alebo jednoduchšie nastavený večer.',
            price: 'od 1 290 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Silvestrovske%20akcie&scope=komplet&variant=MZ%20Start&price=od%201290%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrou cenou.',
            price: 'od 1 550 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a organizácia v jednom', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Silvestrovske%20akcie&scope=komplet&variant=MZ%20Show&price=od%201550%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet s väčším rozsahom, väčším tímom a väčším efektom.',
            price: 'od 2 190 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a väčší wow efekt', 'riešenie pre silný koncoročný event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-dec&event=Silvestrovske%20akcie&scope=komplet&variant=MZ%20Majster&price=od%202190%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'den-deti': {
    eyebrow: 'JUN',
    title: 'Den deti',
    subtitle: 'Vyber si, ci chces program, atrakcie alebo komplet akciu.',
    previewTheme: 'kids',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientacne varianty programu pre Den deti',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-jun&event=Den%20deti&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jednoduchy zabavny blok pre mensiu akciu alebo kratsi cas.',
            price: 'od 450 EUR',
            posterLabel: 'Variant programu',
            bullets: ['animator alebo moderator', 'sutaze a zapojenie deti', 'rychly format bez velkej produkcie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Den%20deti&scope=program&variant=Start%20programu&price=od%20450%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Silnejsi program s vacsou energiou a jasnym flow akcie.',
            price: 'od 850 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie a sutaze', 'programove vstupy pocas akcie', 'vyvazeny variant pre vacsinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Den%20deti&scope=program&variant=Moderovany%20program&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Len program pre vacsi priestor, podium alebo viac vstupov.',
            price: 'od 1 400 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vacsi rozsah a dramaturgia', 'viac casti programu pocas dna', 'silnejsi zazitok pre vacsie publikum'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Den%20deti&scope=program&variant=Stage%20program&price=od%201400%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientacne varianty atrakcii a doplnkov pre Den deti',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-jun&event=Den%20deti&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Zakladne doplnky pre klienta, ktory uz program ma a chce ho len ozivit.',
            price: 'od 350 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['malovanie na tvar alebo tvorivy kutik', 'jedna mensia atrakcia', 'jednoduche nasadenie na miesto'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Den%20deti&scope=atrakcie&variant=Mini%20zabava&price=od%20350%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Oblubeny variant s viacerymi prvkami pre deti aj rodicov.',
            price: 'od 900 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['kombinacia 2 az 3 atrakcii', 'maskot, kreativna aktivita alebo nafukovadlo', 'vyssi efekt bez kompletnej produkcie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Den%20deti&scope=atrakcie&variant=Rodinna%20zona&price=od%20900%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejsi mix atrakcii pre vacsie terminy a vacsi pocet deti.',
            price: 'od 1 700 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['viac stanovist a atrakcii', 'vacsia kapacita pre priechodnost', 'silny vizualny efekt pocas celej akcie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Den%20deti&scope=atrakcie&variant=Velka%20atrakciova%20zona&price=od%201700%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientacne varianty kompletnej akcie pre Den deti',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-jun&event=Den%20deti&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Program a zakladne doplnky pre mensiu alebo jednoduchsie nastavenu akciu.',
            price: 'od 900 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['programovy blok aj doplnky', 'zakladna koordinacia na mieste', 'vhodne pre mensi rozpocet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Den%20deti&scope=komplet&variant=Easy%20event&price=od%20900%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najcastejsi variant pre klienta, ktory chce viditelny zazitok bez chaosu.',
            price: 'od 1 800 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['moderovanie, program aj atrakcie', 'vyvazeny flow pocas celeho dna', 'silna volba pre vacsinu junovych akcii'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Den%20deti&scope=komplet&variant=Event%20Plus&price=od%201800%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Kompletne riesenie od konceptu po realizaciu pre vacsi termin.',
            price: 'od 3 200 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie, animatori aj koordinacia', 'vacsi rozsah a viac stanovist', 'riesenie pre akciu, na ktorej zalezi'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Den%20deti&scope=komplet&variant=Den%20deti%20na%20mieru&price=od%203200%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'skolske-akcie': {
    eyebrow: 'JUN',
    title: 'Skolske akcie',
    subtitle: 'Vyber si, ci chces program, atrakcie alebo komplet akciu.',
    previewTheme: 'school',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientacne varianty programu pre skolske akcie',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-jun&event=Skolske%20akcie&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jednoduchy format pre kratky skolsky den alebo jednu cast programu.',
            price: 'od 400 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovany blok', 'sutaze a aktivacia', 'lahka organizacia pre skolu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Skolske%20akcie&scope=program&variant=Skolsky%20blok&price=od%20400%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Silnejsi skolsky program s vacsou interakciou a energiou.',
            price: 'od 850 EUR',
            posterLabel: 'Variant programu',
            bullets: ['viac vstupov pocas dna', 'moderovanie a zapojenie publika', 'vhodne pre bezny skolsky event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Skolske%20akcie&scope=program&variant=Program%20Plus&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Len program pre vacsi priestor, podium alebo vacsi rocnik.',
            price: 'od 1 350 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vacsi rozsah programu', 'rezia a tempo celeho bloku', 'silnejsi wow efekt pre vacsi event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Skolske%20akcie&scope=program&variant=Stage%20skola&price=od%201350%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientacne varianty atrakcii a doplnkov pre skoly',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-jun&event=Skolske%20akcie&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jedna az dve jednoduche aktivity na doplnenie skolskeho programu.',
            price: 'od 320 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['tvoriva alebo pohybova aktivita', 'rychle rozlozenie na mieste', 'vhodne aj do mensieho priestoru'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Skolske%20akcie&scope=atrakcie&variant=Aktivna%20stanica&price=od%20320%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Vyvazeny set atrakcii pre beznu skolsku akciu alebo den deti v skole.',
            price: 'od 780 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['2 az 3 doplnky alebo atrakcie', 'lepsi pohyb deti medzi stanovistami', 'viditelnejsi efekt pocas celeho dna'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Skolske%20akcie&scope=atrakcie&variant=Skolska%20fun%20zona&price=od%20780%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejsi Len atrakcie pre vacsie skoly alebo spolocne akcie.',
            price: 'od 1 450 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['vacsi rozsah a viac stanovist', 'vacsia kapacita pre viac tried', 'vhodne pre vacsie dvory a arealy'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Skolske%20akcie&scope=atrakcie&variant=Velka%20skolska%20zona&price=od%201450%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientacne varianty kompletnej skolskej akcie',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-jun&event=Skolske%20akcie&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jednoduchsia skolska akcia s programom a niekolkymi doplnkami.',
            price: 'od 850 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['programovy blok a doplnky', 'zakladna koordinacia', 'vhodne pre mensi rozpocet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Skolske%20akcie&scope=komplet&variant=Skola%20Easy&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najcastejsi skolsky variant s programom, atrakciami a dobrym tempom.',
            price: 'od 1 650 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie aj moderovanie', 'vyvazena organizacia dna', 'silny zazitok pre vacsinu skol'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Skolske%20akcie&scope=komplet&variant=Skola%20Plus&price=od%201650%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Kompletne riesenie pre vacsi skolsky event alebo vacsi areal.',
            price: 'od 2 900 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a rezia dna', 'vacsi rozsah a viac ludi v time', 'individualne riesenie podla zadania'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Skolske%20akcie&scope=komplet&variant=Skola%20na%20mieru&price=od%202900%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'rozlucky-so-skolou': {
    eyebrow: 'JUN',
    title: 'Rozlucky so skolou',
    subtitle: 'Vyber si, ci chces program, atrakcie alebo komplet akciu.',
    previewTheme: 'goodbye',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientacne varianty programu pre rozlucku so skolou',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-jun&event=Rozlucky%20so%20skolou&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Kratsi zabavny blok pre triedu, rocnik alebo mensi skolsky priestor.',
            price: 'od 390 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie a zabava', 'zapojenie deti do diania', 'jednoduchy format bez velkej techniky'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Rozlucky%20so%20skolou&scope=program&variant=Easy%20rozlucka&price=od%20390%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Zabavnejsi program s vacsou energiou, hudbou a interakciou.',
            price: 'od 760 EUR',
            posterLabel: 'Variant programu',
            bullets: ['sutaze, hudba a moderator', 'vacsie tempo pocas celeho bloku', 'oblubena volba pre junove rozlucky'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Rozlucky%20so%20skolou&scope=program&variant=Party%20blok&price=od%20760%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejsi programovy zaver roka pre vacsi priestor alebo viac tried.',
            price: 'od 1 250 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vacsi rozsah a viac vstupov', 'silnejsia dramaturgia dna', 'vacsia eventova nalada a efekt'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Rozlucky%20so%20skolou&scope=program&variant=Finale%20show&price=od%201250%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientacne varianty atrakcii a doplnkov pre rozlucku',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-jun&event=Rozlucky%20so%20skolou&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jednoduche oivenie rozlucky jednou aktivitou alebo jednym stanovistom.',
            price: 'od 290 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['jeden doplnok alebo atrakcia', 'rychle nasadenie na miesto', 'vhodne ako doplnenie hotoveho programu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Rozlucky%20so%20skolou&scope=atrakcie&variant=Fun%20doplnok&price=od%20290%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Vyvazeny mix atrakcii pre zabavnejsiu rozlucku s vacsim pohybom deti.',
            price: 'od 690 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['2 az 3 prvky alebo stanovistia', 'kombinacia pohybu a zabavy', 'dobry efekt bez kompletnej produkcie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Rozlucky%20so%20skolou&scope=atrakcie&variant=Party%20zona&price=od%20690%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejsia atrakciova zona pre vacsi rocnik, skolu alebo vacsi dvor.',
            price: 'od 1 300 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['vacsi rozsah atrakcii', 'lepsia priechodnost a viac zabavy naraz', 'vhodne pre silny junovy termin'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Rozlucky%20so%20skolou&scope=atrakcie&variant=Rozluckova%20arena&price=od%201300%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientacne varianty kompletnej rozlucky so skolou',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-jun&event=Rozlucky%20so%20skolou&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Program a doplnky pre jednoduchu, ale pekne uchopenu rozlucku.',
            price: 'od 790 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['programovy blok aj doplnky', 'zakladna koordinacia', 'vhodne pre mensiu rozlucku'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Rozlucky%20so%20skolou&scope=komplet&variant=Rozlucka%20Easy&price=od%20790%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najcastejsi komplet variant s programom, hudbou a atrakciami.',
            price: 'od 1 450 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a moderovanie', 'vyvazene tempo celej akcie', 'silna volba pre vacsinu skol'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Rozlucky%20so%20skolou&scope=komplet&variant=Rozlucka%20Plus&price=od%201450%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Kompletna eventova rozlucka s vacsim rozsahom a silnejsim efektom.',
            price: 'od 2 500 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['kompletna organizacia, program aj atrakcie', 'vacsi tim a vacsi rozsah', 'riesenie pre akciu, ktoru si maju pamatat'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Rozlucky%20so%20skolou&scope=komplet&variant=Rozlucka%20na%20mieru&price=od%202500%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'vitaj-leto': {
    eyebrow: 'JUN',
    title: 'Vitaj leto',
    subtitle: 'Vyber si, ci chces program, atrakcie alebo komplet akciu.',
    previewTheme: 'summer',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientacne varianty programu pre Vitaj leto',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-jun&event=Vitaj%20leto&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jednoduchy letny blok na otvorenie sezony alebo mensiu obecnu akciu.',
            price: 'od 450 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovany vstup', 'lahka letna atmosfera', 'rychle ozivenie podujatia'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Vitaj%20leto&scope=program&variant=Warm%20up%20program&price=od%20450%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Vyvazeny letny program pre publikum, rodiny alebo den obce.',
            price: 'od 920 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie a aktivacie', 'viac vstupov pocas akcie', 'dobry pomer medzi efektom a rozpocetom'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Vitaj%20leto&scope=program&variant=Open%20air%20program&price=od%20920%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejsi stage variant pre vacsi letny termin alebo vacsie publikum.',
            price: 'od 1 550 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vacsi rozsah a podium energia', 'silnejsi letny wow efekt', 'vhodne pre vacsi priestor a vacsi pocet ludi'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Vitaj%20leto&scope=program&variant=Summer%20show&price=od%201550%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientacne varianty atrakcii a doplnkov pre Vitaj leto',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-jun&event=Vitaj%20leto&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jedna alebo dve letne atrakcie pre klienta, ktory uz program ma.',
            price: 'od 350 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['jedna atrakcia alebo stanok', 'lahke rozlozenie na mieste', 'vhodne na rychle oivenie akcie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Vitaj%20leto&scope=atrakcie&variant=Letny%20doplnok&price=od%20350%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Oblubeny mix atrakcii pre rodiny, deti alebo obecne podujatie.',
            price: 'od 880 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['2 az 3 letne prvky alebo atrakcie', 'vyssi pohyb ludi v zone', 'vhodne pre bezny letny event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Vitaj%20leto&scope=atrakcie&variant=Letna%20fun%20zona&price=od%20880%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Vacsia atrakciova zona pre silny letny termin a vacsi priestor.',
            price: 'od 1 650 EUR',
            posterLabel: 'Variant atrakcii',
            bullets: ['vacsi rozsah a viac stanovist', 'silny vizual a vacsia kapacita', 'vhodne pre vacsi letny event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Vitaj%20leto&scope=atrakcie&variant=Open%20air%20zona&price=od%201650%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientacne varianty kompletnej akcie Vitaj leto',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-jun&event=Vitaj%20leto&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Program a doplnky pre jednoduchsie otvorenie leta alebo mensiu akciu.',
            price: 'od 950 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program a atrakcie v zakladnom rozsahu', 'jednoducha koordinacia na mieste', 'vhodne pre mensi rozpocet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Vitaj%20leto&scope=komplet&variant=Leto%20Easy&price=od%20950%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najcastejsi variant kompletnej letnej akcie s dobrym flow a atmosferou.',
            price: 'od 1 950 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['moderovanie, program aj atrakcie', 'vyvazeny letny zazitok pre publikum', 'silna volba pre vacsinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Vitaj%20leto&scope=komplet&variant=Leto%20Plus&price=od%201950%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Kompletna letna produkcia s vacsim rozsahom, vacsim timom a vacsim efektom.',
            price: 'od 3 400 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['Komplet akcia od navrhu po realizaciu', 'vacsi rozsah programu a atrakcii', 'riesenie pre silny termin a vacsi event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Vitaj%20leto&scope=komplet&variant=Leto%20na%20mieru&price=od%203400%20EUR#planner-form'
          }
        ]
      }
    }
  }
};

