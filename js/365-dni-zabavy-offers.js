/* 365 dni zabavy offers
   Tento subor drzi iba ponuky akcii pre planner modal.
*/
window.plannerOfferData = {
  'karnevaly': {
    eyebrow: 'JANUÁR',
    title: 'Karnevaly',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'kids',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre karnevaly',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-jan&event=Karnevaly&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný karnevalový program pre menší priestor alebo krátky čas.',
            price: 'od 350 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie a súťaže', 'karnevalová atmosféra', 'vhodné pre menšiu skupinu deti'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Karnevaly&scope=program&variant=MZ%20Start&price=od%20350%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Silnejší karnevalový blok s viacerými vstupmi a väčšou energiou.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['hudba, súťaže a zapojenie deti', 'silnejší flow celého programu', 'odporúčaný variant pre bežný karneval'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Karnevaly&scope=program&variant=MZ%20Show&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Väčší karnevalový program pre väčší počet deti alebo väčší priestor.',
            price: 'od 750 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah programu', 'viac vstupov a silnejší zážitok', 'vhodné pre väčší školský alebo obecný karneval'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Karnevaly&scope=program&variant=MZ%20Majster&price=od%20750%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre karnevaly',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-jan&event=Karnevaly&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší doplnok, ktorý rýchlo oživí karnevalovú akciu.',
            price: 'od 150 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['menšia atrakcia alebo doplnok', 'vhodné do triedy alebo sály', 'rýchle nasadenie na miesto'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Karnevaly&scope=atrakcie&variant=MZ%20Start&price=od%20150%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia s viditeľnejším efektom pre deti aj rodičov.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo show doplnok', 'silnejší efekt počas akcie', 'vhodné pre stredne veľký karneval'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Karnevaly&scope=atrakcie&variant=MZ%20Show&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Karnevalová zóna alebo väčší balík atrakcií pre silnejší zážitok.',
            price: 'od 899 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia viacerých atrakcií', 'väčšia kapacita a väčší efekt', 'vhodné pre väčšie podujatie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Karnevaly&scope=atrakcie&variant=MZ%20Majster&price=od%20899%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej karnevalovej akcie',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-jan&event=Karnevaly&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základná kombinácia programu a atrakcií pre menší karneval.',
            price: 'od 690 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'základná koordinácia', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Karnevaly&scope=komplet&variant=MZ%20Start&price=od%20690%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom pre väčšinu karnevalov.',
            price: 'od 990 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a plynulý flow', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Karnevaly&scope=komplet&variant=MZ%20Show&price=od%20990%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet pre väčší priestor, väčší počet deti a vyšší efekt.',
            price: 'od 1 450 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'silnejší wow efekt a väčšia kapacita', 'riešenie pre silný termín alebo väčšie podujatie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Karnevaly&scope=komplet&variant=MZ%20Majster&price=od%201450%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'novorocne-akcie': {
    eyebrow: 'JANUÁR',
    title: 'Novoročné akcie',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'goodbye',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre novoročné akcie',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-jan&event=Novorocne%20akcie&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jednoduchý novoročný program pre menšiu komunitnú alebo rodinnú akciu.',
            price: 'od 250 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovaný blok', 'ľahký rozbeh akcie', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Novorocne%20akcie&scope=program&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Silnejší novoročný program s väčšou energiou a väčším zážitkom.',
            price: 'od 450 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie a aktivácie', 'dobrý pomer medzi cenou a efektom', 'odporúčaný variant pre väčšinu akcii'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Novorocne%20akcie&scope=program&variant=MZ%20Show&price=od%20450%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Väčší programový variant pre väčší priestor alebo väčšie publikum.',
            price: 'od 750 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah programu', 'silnejší wow efekt', 'vhodné pre väčšie verejné alebo firemné akcie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Novorocne%20akcie&scope=program&variant=MZ%20Majster&price=od%20750%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre novoročné akcie',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-jan&event=Novorocne%20akcie&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší doplnok, ktorý rýchlo oživí novoročnú akciu.',
            price: 'od 150 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['menšia atrakcia alebo doplnok', 'vhodné pre menší priestor', 'rýchle oživenie programu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Novorocne%20akcie&scope=atrakcie&variant=MZ%20Start&price=od%20150%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia pre viditeľnejší zážitok hostí.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo interaktívny prvok', 'silnejší efekt počas akcie', 'vhodné pre väčšiu skupinu hostí'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Novorocne%20akcie&scope=atrakcie&variant=MZ%20Show&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Zóna alebo balík atrakcií pre výražnejší novoročný event.',
            price: 'od 899 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['viac atrakcií alebo eventová zóna', 'väčšia kapacita a väčší vizuálny efekt', 'vhodné pre väčší termín alebo silnejšie podujatie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Novorocne%20akcie&scope=atrakcie&variant=MZ%20Majster&price=od%20899%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej novoročnej akcie',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-jan&event=Novorocne%20akcie&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný komplet pre menšiu novoročnú akciu alebo komunitné stretnutie.',
            price: 'od 690 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Novorocne%20akcie&scope=komplet&variant=MZ%20Start&price=od%20690%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Vyvážený komplet variant s dobrým pomerom cena a zážitok.',
            price: 'od 990 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a vyvážené tempo', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Novorocne%20akcie&scope=komplet&variant=MZ%20Show&price=od%20990%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet s väčším rozsahom a väčším efektom pre hostí.',
            price: 'od 1 450 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a väčší wow efekt', 'riešenie pre vyššíe nároky a väčšie akcie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Novorocne%20akcie&scope=komplet&variant=MZ%20Majster&price=od%201450%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'zimne-programy': {
    eyebrow: 'JANUÁR',
    title: 'Zimné programy',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'school',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty zimného programu',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-jan&event=Zimne%20programy&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný zimný program pre deti, rodiny alebo menší priestor.',
            price: 'od 250 EUR',
            posterLabel: 'Variant programu',
            bullets: ['zimný zábavný blok', 'zapojenie deti a rodín', 'vhodné pre menšiu akciu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Zimne%20programy&scope=program&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Silnejší zimný program s väčšou energiou a väčším flow akcie.',
            price: 'od 450 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie a aktivácie', 'vyvážený zimný program', 'odporúčaný variant pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Zimne%20programy&scope=program&variant=MZ%20Show&price=od%20450%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší zimný program pre väčší event, pódium alebo väčšiu skupinu hostí.',
            price: 'od 750 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah a dramaturgia', 'silnejší wow efekt', 'vhodné pre väčší priestor a väčšiu akciu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Zimne%20programy&scope=program&variant=MZ%20Majster&price=od%20750%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre zimné programy',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-jan&event=Zimne%20programy&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší doplnok alebo atrakcia pre zimný event.',
            price: 'od 150 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['menšia atrakcia alebo doplnok', 'rýchle nasadenie na miesto', 'vhodné ako oživenie programu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Zimne%20programy&scope=atrakcie&variant=MZ%20Start&price=od%20150%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia s viditeľnejším efektom pre zimnú akciu.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo interaktívny prvok', 'silnejší efekt pre hostí', 'vhodné pre stredne velku akciu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Zimne%20programy&scope=atrakcie&variant=MZ%20Show&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Zóna alebo balík atrakcií pre výražný zimný zážitok.',
            price: 'od 899 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo balík viacerých atrakcií', 'väčšia kapacita a silnejší efekt', 'vhodné pre väčšie podujatie alebo den v meste'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Zimne%20programy&scope=atrakcie&variant=MZ%20Majster&price=od%20899%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletného zimného programu',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-jan&event=Zimne%20programy&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základná kombinácia programu a atrakcií pre menšiu zimnú akciu.',
            price: 'od 690 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia organizácia', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Zimne%20programy&scope=komplet&variant=MZ%20Start&price=od%20690%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrou cenou.',
            price: 'od 990 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a plynulý flow', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Zimne%20programy&scope=komplet&variant=MZ%20Show&price=od%20990%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet pre väčší zimný event s väčším rozsahom a väčším efektom.',
            price: 'od 1 450 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a väčší wow efekt', 'vhodné pre väčšiu akciu alebo väčší priestor'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Zimne%20programy&scope=komplet&variant=MZ%20Majster&price=od%201450%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'firemne-vecierky': {
    eyebrow: 'JANUÁR',
    title: 'Firemné večierky',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'summer',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre firemné večierky',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-jan&event=Firemne%20vecierky&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný programový variant pre menší firemny večierok alebo internú akciu.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo zábavný blok', 'vhodné pre menšiu firemnú skupinu', 'rychly format bez zbytocnych komplikacii'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Firemne%20vecierky&scope=program&variant=MZ%20Start&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší programový variant pre väčšinu firemnych vecierkov.',
            price: 'od 850 EUR',
            posterLabel: 'Variant programu',
            bullets: ['silnejší zážitok a väčší flow akcie', 'dobrý pomer medzi cenou a efektom', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Firemne%20vecierky&scope=program&variant=MZ%20Show&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší programový variant pre väčší priestor, pódium alebo väčšiu firmu.',
            price: 'od 1 400 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah a silnejší wow efekt', 'väčšia energia pre publikum', 'vhodné pre silný firemny termín'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Firemne%20vecierky&scope=program&variant=MZ%20Majster&price=od%201400%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre firemné večierky',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-jan&event=Firemne%20vecierky&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší interaktívny prvok alebo doplnok pre firemnú akciu.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['doplnok alebo menšia atrakcia', 'vhodné pre menší priestor', 'rýchle oživenie programu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Firemne%20vecierky&scope=atrakcie&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia pre silnejší zážitok hostí a väčší event vibe.',
            price: 'od 400 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo interaktívny prvok', 'silnejší efekt pre hostí', 'vhodné pre väčšinu firemnych akcii'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Firemne%20vecierky&scope=atrakcie&variant=MZ%20Show&price=od%20400%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Zóna alebo balík atrakcií pre väčší firemny event a vyšší zážitok.',
            price: 'od 1 190 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia atrakcií', 'väčšia kapacita a väčší efekt', 'vhodné pre väčší event alebo firemny večierok'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Firemne%20vecierky&scope=atrakcie&variant=MZ%20Majster&price=od%201190%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletného riešenia pre firemné večierky',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-jan&event=Firemne%20vecierky&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný komplet pre menší firemny večierok alebo internú akciu.',
            price: 'od 1 290 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší firemny rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Firemne%20vecierky&scope=komplet&variant=MZ%20Start&price=od%201290%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrým event flow.',
            price: 'od 1 550 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a organizácia v jednom', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Firemne%20vecierky&scope=komplet&variant=MZ%20Show&price=od%201550%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet s väčším rozsahom, väčším timom a väčším efektom.',
            price: 'od 2 190 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a väčší wow efekt', 'riešenie pre silný firemny termín alebo väčší event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jan&event=Firemne%20vecierky&scope=komplet&variant=MZ%20Majster&price=od%202190%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'valentinske-akcie': {
    eyebrow: 'FEBRUAR',
    title: 'Valentínske akcie',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'goodbye',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre valentínske akcie',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-feb&event=Valentinske%20akcie&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jemný programový blok pre menšiu valentínsku akciu alebo prevádzku.',
            price: 'od 250 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovaný alebo hudobný blok', 'príjemná atmosféra', 'vhodné pre menší priestor'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Valentinske%20akcie&scope=program&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Silnejší valentinsky program s väčšou atmosferou a väčším zážitkom.',
            price: 'od 450 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vyvážený zážitok a tempo akcie', 'silnejší emotivny efekt', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Valentinske%20akcie&scope=program&variant=MZ%20Show&price=od%20450%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Vyražnejsi stage alebo eventový program pre väčší priestor a väčšie publikum.',
            price: 'od 750 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah programu', 'väčší wow efekt a dramaturgia', 'vhodné pre väčšie valentínske podujatie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Valentinske%20akcie&scope=program&variant=MZ%20Majster&price=od%20750%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre valentínske akcie',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-feb&event=Valentinske%20akcie&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší doplnok alebo atrakcia na oživenie valentínskej akcie.',
            price: 'od 150 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['menší doplnok alebo interaktívny prvok', 'rýchle nasadenie na miesto', 'vhodné pre komornejsi format'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Valentinske%20akcie&scope=atrakcie&variant=MZ%20Start&price=od%20150%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia pre silnejší zážitok hostí a väčší event vibe.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo zažitkovy prvok', 'silnejší efekt pre hostí', 'vhodné pre väčšinu akcii'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Valentinske%20akcie&scope=atrakcie&variant=MZ%20Show&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Balik atrakcií alebo zóna pre silnejšie valentínske podujatie.',
            price: 'od 899 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia viacerých prvkov', 'väčší vizuálny efekt', 'vhodné pre väčší event alebo prevádzku'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Valentinske%20akcie&scope=atrakcie&variant=MZ%20Majster&price=od%20899%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej valentínskej akcie',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-feb&event=Valentinske%20akcie&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základná kombinácia programu a atrakcií pre komornejsiu akciu.',
            price: 'od 690 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Valentinske%20akcie&scope=komplet&variant=MZ%20Start&price=od%20690%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrou cenou.',
            price: 'od 990 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a plynulý flow', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Valentinske%20akcie&scope=komplet&variant=MZ%20Show&price=od%20990%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet pre väčší event, väčší priestor alebo vyšší wow efekt.',
            price: 'od 1 450 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a väčší zážitok', 'riešenie pre silnejšie podujatie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Valentinske%20akcie&scope=komplet&variant=MZ%20Majster&price=od%201450%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'plesy': {
    eyebrow: 'FEBRUAR',
    title: 'Plesy',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'summer',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre plesy',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-feb&event=Plesy&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný programový variant pre menší ples alebo spoločenský vecer.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo sprievodny blok', 'prijemny spoločenský format', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Plesy&scope=program&variant=MZ%20Start&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Silnejší programový variant pre väčšinu plesov a spoločenských akcii.',
            price: 'od 850 EUR',
            posterLabel: 'Variant programu',
            bullets: ['vyvážené tempo večera', 'silnejší zážitok pre hostí', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Plesy&scope=program&variant=MZ%20Show&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší programový variant pre väčší ples, pódium alebo väčšie publikum.',
            price: 'od 1 400 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah a silnejší wow efekt', 'väčšia dramaturgia večera', 'vhodné pre väčší ples alebo gala format'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Plesy&scope=program&variant=MZ%20Majster&price=od%201400%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre plesy',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-feb&event=Plesy&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší doplnok alebo atrakcia, ktora doplni plesovy vecer.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['menší interaktívny prvok', 'vhodné pre spoločenský format', 'rýchle oživenie večera'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Plesy&scope=atrakcie&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia pre silnejší zážitok a väčší eventový efekt.',
            price: 'od 400 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo show doplnok', 'silnejší efekt pre hostí', 'vhodné pre väčšinu plesov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Plesy&scope=atrakcie&variant=MZ%20Show&price=od%20400%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Balik atrakcií alebo väčšia eventová zóna pre silný spoločenský zážitok.',
            price: 'od 1 190 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo viac atrakcií', 'väčší efekt a väčšia kapacita', 'vhodné pre väčší ples alebo gala vecer'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Plesy&scope=atrakcie&variant=MZ%20Majster&price=od%201190%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletného riešenia pre plesy',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-feb&event=Plesy&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný komplet pre menší ples alebo spoločenský vecer.',
            price: 'od 1 290 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Plesy&scope=komplet&variant=MZ%20Start&price=od%201290%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a plynulým flow večera.',
            price: 'od 1 550 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a organizácia v jednom', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Plesy&scope=komplet&variant=MZ%20Show&price=od%201550%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet s väčším rozsahom, väčším timom a väčším efektom.',
            price: 'od 2 190 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a väčší wow efekt', 'riešenie pre väčší ples alebo gala format'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Plesy&scope=komplet&variant=MZ%20Majster&price=od%202190%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'firemne-eventy': {
    eyebrow: 'FEBRUAR',
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
        customHref: 'navrhni-si-akciu.html?source=planner-feb&event=Firemne%20eventy&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný programový variant pre menší firemny event alebo internú akciu.',
            price: 'od 500 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie alebo zábavný blok', 'vhodné pre menšiu firemnú skupinu', 'rychly format bez zbytocnych komplikacii'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Firemne%20eventy&scope=program&variant=MZ%20Start&price=od%20500%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší programový variant pre väčšinu firemnych eventov.',
            price: 'od 850 EUR',
            posterLabel: 'Variant programu',
            bullets: ['silnejší zážitok a väčší flow akcie', 'dobrý pomer medzi cenou a efektom', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Firemne%20eventy&scope=program&variant=MZ%20Show&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší programový variant pre väčší priestor, pódium alebo väčšiu firmu.',
            price: 'od 1 400 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah a silnejší wow efekt', 'väčšia energia pre publikum', 'vhodné pre silný firemny termín'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Firemne%20eventy&scope=program&variant=MZ%20Majster&price=od%201400%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre firemné eventy',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-feb&event=Firemne%20eventy&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Menší interaktívny prvok alebo doplnok pre firemnú akciu.',
            price: 'od 250 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['doplnok alebo menšia atrakcia', 'vhodné pre menší priestor', 'rýchle oživenie programu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Firemne%20eventy&scope=atrakcie&variant=MZ%20Start&price=od%20250%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Väčšia atrakcia pre silnejší zážitok hostí a väčší event vibe.',
            price: 'od 400 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčšia atrakcia alebo interaktívny prvok', 'silnejší efekt pre hostí', 'vhodné pre väčšinu firemnych akcii'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Firemne%20eventy&scope=atrakcie&variant=MZ%20Show&price=od%20400%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Zóna alebo balík atrakcií pre väčší firemny event a vyšší zážitok.',
            price: 'od 1 190 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['zóna alebo kombinácia atrakcií', 'väčšia kapacita a väčší efekt', 'vhodné pre väčší event alebo firemny format'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Firemne%20eventy&scope=atrakcie&variant=MZ%20Majster&price=od%201190%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletného riešenia pre firemné eventy',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-feb&event=Firemne%20eventy&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základný komplet pre menší firemny event alebo internú akciu.',
            price: 'od 1 290 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program aj atrakcie v jednom', 'jednoduchšia koordinácia', 'vhodné pre menší firemny rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Firemne%20eventy&scope=komplet&variant=MZ%20Start&price=od%201290%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s vyváženým zážitkom a dobrým event flow.',
            price: 'od 1 550 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a organizácia v jednom', 'balíkové zvýhodnenie oproti samostatným službám', 'odporúčaná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-feb&event=Firemne%20eventy&scope=komplet&variant=MZ%20Show&price=od%201550%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Najsilnejší komplet s väčším rozsahom, väčším timom a väčším efektom.',
            price: 'od 2 190 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['väčší rozsah programu aj atrakcií', 'väčšia kapacita a väčší wow efekt', 'riešenie pre silný firemny termín alebo väčší event'],
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
            lead: 'Silnejší program pre väčší priestor, silnejšiu návštevnosť alebo výražnejší wow efekt.',
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
            lead: 'Výražnejší eventový program pre väčší priestor alebo väčšie publikum.',
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
            lead: 'Väčšia atrakcia pre silnejší zážitok návštevníkov a výražnejší event vibe.',
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
            lead: 'Silnejší program pre väčší priestor, silnejšiu návštevnosť alebo výražnejší wow efekt.',
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
            lead: 'Výražnejší eventový program pre väčší priestor alebo väčšie publikum.',
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
            lead: 'Väčšia atrakcia pre silnejší zážitok návštevníkov a výražnejší event vibe.',
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
            lead: 'Väčšia atrakcia pre silnejší zážitok návštevníkov a výražnejší event vibe.',
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
            lead: 'Väčšia atrakcia pre silnejší zážitok návštevníkov a výražnejší event vibe.',
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
            lead: 'Väčšia atrakcia pre silnejší zážitok návštevníkov a výražnejší event vibe.',
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
            lead: 'Väčšia atrakcia pre silnejší zážitok návštevníkov a výražnejší event vibe.',
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
            lead: 'Najčastejší variant kompletnej letnéj akcie s dobrým flow a atmosférou.',
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
            lead: 'Väčšia atrakcia pre silnejší zážitok návštevníkov a výražnejší event vibe.',
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
            lead: 'Väčšia atrakcia pre silnejší zážitok hostí a výražnejší halloween efekt.',
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
            lead: 'Väčšia atrakcia pre silnejší zážitok hostí a výražnejší tematický efekt.',
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
            lead: 'Silnejší program pre väčší priestor, väčšie publikum alebo výražnejší wow efekt.',
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
            lead: 'Väčšia atrakcia pre silnejší zážitok návštevníkov a výražnejší event vibe.',
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
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'kids',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre Den deti',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-jun&event=Den%20deti&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jednoduchý zábavný blok pre menšiu akciu alebo kratší čas.',
            price: 'od 450 EUR',
            posterLabel: 'Variant programu',
            bullets: ['animator alebo moderátor', 'súťaže a zapojenie deti', 'rychly format bez veľkéj produkcie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Den%20deti&scope=program&variant=Start%20programu&price=od%20450%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Silnejší program s väčšou energiou a jasnym flow akcie.',
            price: 'od 850 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie a súťaže', 'programové vstupy počas akcie', 'vyvážený variant pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Den%20deti&scope=program&variant=Moderovany%20program&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Len program pre väčší priestor, pódium alebo viac vstupov.',
            price: 'od 1 400 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah a dramaturgia', 'viac časti programu počas dňa', 'silnejší zážitok pre väčšie publikum'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Den%20deti&scope=program&variant=Stage%20program&price=od%201400%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre Den deti',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-jun&event=Den%20deti&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Základné doplnky pre klienta, ktorý už program má a chce ho len ozivit.',
            price: 'od 350 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['malovanie na tvar alebo tvorivý kútik', 'jedna menšia atrakcia', 'jednoduché nasadenie na miesto'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Den%20deti&scope=atrakcie&variant=Mini%20zabava&price=od%20350%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Oblubeny variant s viacerými prvkami pre deti aj rodičov.',
            price: 'od 900 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['kombinácia 2 až 3 atrakcií', 'maskot, kreativna aktivita alebo nafukovadlo', 'vyšší efekt bez kompletnej produkcie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Den%20deti&scope=atrakcie&variant=Rodinna%20zona&price=od%20900%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejší mix atrakcií pre väčšie termíny a väčší počet deti.',
            price: 'od 1 700 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['viac stanovíšť a atrakcií', 'väčšia kapacita pre priechodnosť', 'silný vizuálny efekt počas celej akcie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Den%20deti&scope=atrakcie&variant=Velka%20atrakciova%20zona&price=od%201700%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie pre Den deti',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-jun&event=Den%20deti&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Program a zakladne doplnky pre menšiu alebo jednoduchšie nastavenú akciu.',
            price: 'od 900 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['programový blok aj doplnky', 'základná koordinácia na mieste', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Den%20deti&scope=komplet&variant=Easy%20event&price=od%20900%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší variant pre klienta, ktorý chce viditelny zážitok bez chaosu.',
            price: 'od 1 800 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['moderovanie, program aj atrakcie', 'vyvážený flow počas celého dňa', 'silná voľba pre väčšinu junovych akcii'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Den%20deti&scope=komplet&variant=Event%20Plus&price=od%201800%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Kompletné riešenie od konceptu po realizáciu pre väčší termín.',
            price: 'od 3 200 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie, animátori aj koordinácia', 'väčší rozsah a viac stanovíšť', 'riešenie pre akciu, na ktorej zalezi'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Den%20deti&scope=komplet&variant=Den%20deti%20na%20mieru&price=od%203200%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'skolske-akcie': {
    eyebrow: 'JUN',
    title: 'Skolske akcie',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'school',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre skolske akcie',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-jun&event=Skolske%20akcie&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jednoduchý format pre krátky školský den alebo jednu čast programu.',
            price: 'od 400 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovaný blok', 'súťaže a aktivacia', 'lahka organizácia pre školu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Skolske%20akcie&scope=program&variant=Skolsky%20blok&price=od%20400%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Silnejší školský program s väčšou interakciou a energiou.',
            price: 'od 850 EUR',
            posterLabel: 'Variant programu',
            bullets: ['viac vstupov počas dňa', 'moderovanie a zapojenie publika', 'vhodné pre bežný školský event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Skolske%20akcie&scope=program&variant=Program%20Plus&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Len program pre väčší priestor, pódium alebo väčší ročník.',
            price: 'od 1 350 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah programu', 'rezia a tempo celého bloku', 'silnejší wow efekt pre väčší event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Skolske%20akcie&scope=program&variant=Stage%20skola&price=od%201350%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre školy',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-jun&event=Skolske%20akcie&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jedna až dve jednoduché aktivity na doplnenie školského programu.',
            price: 'od 320 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['tvoriva alebo pohybova aktivita', 'rýchle rozlozenie na mieste', 'vhodné aj do menšíeho priestoru'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Skolske%20akcie&scope=atrakcie&variant=Aktivna%20stanica&price=od%20320%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Vyvážený set atrakcií pre beznu skolsku akciu alebo den deti v skole.',
            price: 'od 780 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['2 až 3 doplnky alebo atrakcie', 'lepší pohyb deti medzi stanovíšťami', 'viditeľnejší efekt počas celého dňa'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Skolske%20akcie&scope=atrakcie&variant=Skolska%20fun%20zona&price=od%20780%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejší Len atrakcie pre väčšie školy alebo spolocne akcie.',
            price: 'od 1 450 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčší rozsah a viac stanovíšť', 'väčšia kapacita pre viac tried', 'vhodné pre väčšie dvory a arealy'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Skolske%20akcie&scope=atrakcie&variant=Velka%20skolska%20zona&price=od%201450%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej skolskej akcie',
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
            bullets: ['programový blok a doplnky', 'základná koordinácia', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Skolske%20akcie&scope=komplet&variant=Skola%20Easy&price=od%20850%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší školský variant s programom, atrakciami a dobrým tempom.',
            price: 'od 1 650 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie aj moderovanie', 'vyvažena organizácia dňa', 'silný zážitok pre väčšinu skol'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Skolske%20akcie&scope=komplet&variant=Skola%20Plus&price=od%201650%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Kompletné riešenie pre väčší školský event alebo väčší areal.',
            price: 'od 2 900 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a rezia dňa', 'väčší rozsah a viac ludi v time', 'individualne riešenie podľa zadania'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Skolske%20akcie&scope=komplet&variant=Skola%20na%20mieru&price=od%202900%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'rozlucky-so-skolou': {
    eyebrow: 'JUN',
    title: 'Rozlúčky so školou',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'goodbye',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre rozlucku so skolou',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-jun&event=Rozlucky%20so%20skolou&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Kratší zábavný blok pre triedu, ročník alebo menší školský priestor.',
            price: 'od 390 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie a zabava', 'zapojenie deti do diania', 'jednoduchy format bez veľkéj techniky'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Rozlucky%20so%20skolou&scope=program&variant=Easy%20rozlucka&price=od%20390%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Zabavnejsi program s väčšou energiou, hudbou a interakciou.',
            price: 'od 760 EUR',
            posterLabel: 'Variant programu',
            bullets: ['súťaže, hudba a moderátor', 'väčšie tempo počas celého bloku', 'obľúbená voľba pre junove rozlúčky'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Rozlucky%20so%20skolou&scope=program&variant=Party%20blok&price=od%20760%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejší programový zaver roka pre väčší priestor alebo viac tried.',
            price: 'od 1 250 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah a viac vstupov', 'silnejšia dramaturgia dňa', 'väčšia eventová nálada a efekt'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Rozlucky%20so%20skolou&scope=program&variant=Finale%20show&price=od%201250%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre rozlucku',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-jun&event=Rozlucky%20so%20skolou&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jednoduché oživenie rozlúčky jednou aktivitou alebo jedným stanovišťom.',
            price: 'od 290 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['jeden doplnok alebo atrakcia', 'rýchle nasadenie na miesto', 'vhodné ako doplnenie hotoveho programu'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Rozlucky%20so%20skolou&scope=atrakcie&variant=Fun%20doplnok&price=od%20290%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Vyvážený mix atrakcií pre zabavnejsiu rozlucku s väčším pohybom deti.',
            price: 'od 690 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['2 až 3 prvky alebo stanovíšťia', 'kombinácia pohybu a zabavy', 'dobrý efekt bez kompletnej produkcie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Rozlucky%20so%20skolou&scope=atrakcie&variant=Party%20zona&price=od%20690%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejšia atrakciová zóna pre väčší ročník, školu alebo väčší dvor.',
            price: 'od 1 300 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčší rozsah atrakcií', 'lepšia priechodnosť a viac zábavy naraz', 'vhodné pre silný junovy termín'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Rozlucky%20so%20skolou&scope=atrakcie&variant=Rozluckova%20arena&price=od%201300%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej rozlúčky so skolou',
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
            bullets: ['programový blok aj doplnky', 'základná koordinácia', 'vhodné pre menšiu rozlucku'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Rozlucky%20so%20skolou&scope=komplet&variant=Rozlucka%20Easy&price=od%20790%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší komplet variant s programom, hudbou a atrakciami.',
            price: 'od 1 450 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program, atrakcie a moderovanie', 'vyvážené tempo celej akcie', 'silná voľba pre väčšinu skol'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Rozlucky%20so%20skolou&scope=komplet&variant=Rozlucka%20Plus&price=od%201450%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Kompletna eventová rozlucka s väčším rozsahom a silnejším efektom.',
            price: 'od 2 500 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['kompletna organizácia, program aj atrakcie', 'väčší tim a väčší rozsah', 'riešenie pre akciu, ktoru si maju pamatat'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Rozlucky%20so%20skolou&scope=komplet&variant=Rozlucka%20na%20mieru&price=od%202500%20EUR#planner-form'
          }
        ]
      }
    }
  },
  'vitaj-leto': {
    eyebrow: 'JUN',
    title: 'Vitaj leto',
    subtitle: 'Vyber si, či chceš program, atrakcie alebo komplet akciu.',
    previewTheme: 'summer',
    customLabel: 'Mám inú predstavu',
    offerFilters: {
      program: {
        label: 'Program',
        subtitle: '3 orientačné varianty programu pre Vitaj leto',
        note: 'Finálna ponuka závisí od veľkosti akcie, lokality a rozsahu programu.',
        previewTag: 'PROGRAM',
        previewKicker: 'Program',
        customHref: 'navrhni-si-akciu.html?source=planner-jun&event=Vitaj%20leto&scope=program#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jednoduchý letný blok na otvorenie sezony alebo menšiu obecnú akciu.',
            price: 'od 450 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovaný vstup', 'lahka letna atmosféra', 'rýchle oživenie podujatia'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Vitaj%20leto&scope=program&variant=Warm%20up%20program&price=od%20450%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Vyvážený letný program pre publikum, rodiny alebo den obce.',
            price: 'od 920 EUR',
            posterLabel: 'Variant programu',
            bullets: ['moderovanie a aktivácie', 'viac vstupov počas akcie', 'dobrý pomer medzi efektom a rozpočetom'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Vitaj%20leto&scope=program&variant=Open%20air%20program&price=od%20920%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Silnejší stage variant pre väčší letný termín alebo väčšie publikum.',
            price: 'od 1 550 EUR',
            posterLabel: 'Variant programu',
            bullets: ['väčší rozsah a pódium energia', 'silnejší letný wow efekt', 'vhodné pre väčší priestor a väčší počet ludi'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Vitaj%20leto&scope=program&variant=Summer%20show&price=od%201550%20EUR#planner-form'
          }
        ]
      },
      attractions: {
        label: 'Atrakcie',
        subtitle: '3 orientačné varianty atrakcií a doplnkov pre Vitaj leto',
        note: 'Máte už program? Atrakcie si môžete jednoducho doobjednať ako doplnok k vašej akcii.',
        previewTag: 'ATRAKCIE',
        previewKicker: 'Atrakcie',
        customHref: 'navrhni-si-akciu.html?source=planner-jun&event=Vitaj%20leto&scope=atrakcie#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Jedna alebo dve letné atrakcie pre klienta, ktorý už program má.',
            price: 'od 350 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['jedna atrakcia alebo stánok', 'ľahké rozloženie na mieste', 'vhodné na rýchle oživenie akcie'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Vitaj%20leto&scope=atrakcie&variant=Letny%20doplnok&price=od%20350%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Oblubeny mix atrakcií pre rodiny, deti alebo obecne podujatie.',
            price: 'od 880 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['2 až 3 letné prvky alebo atrakcie', 'vyšší pohyb ludi v zone', 'vhodné pre bežný letný event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Vitaj%20leto&scope=atrakcie&variant=Letna%20fun%20zona&price=od%20880%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Väčšia atrakciová zóna pre silný letný termín a väčší priestor.',
            price: 'od 1 650 EUR',
            posterLabel: 'Variant atrakcií',
            bullets: ['väčší rozsah a viac stanovíšť', 'silný vizuál a väčšia kapacita', 'vhodné pre väčší letný event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Vitaj%20leto&scope=atrakcie&variant=Open%20air%20zona&price=od%201650%20EUR#planner-form'
          }
        ]
      },
      full: {
        label: 'Komplet',
        subtitle: '3 orientačné varianty kompletnej akcie Vitaj leto',
        note: 'Kompletný balík zahŕňa program aj atrakcie v jednom, bez starostí s organizáciou.',
        previewTag: 'KOMPLET',
        previewKicker: 'Komplet akcia',
        customHref: 'navrhni-si-akciu.html?source=planner-jun&event=Vitaj%20leto&scope=komplet#planner-form',
        offers: [
          {
            name: 'MZ Start',
            lead: 'Program a doplnky pre jednoduchšie otvorenie leta alebo menšiu akciu.',
            price: 'od 950 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['program a atrakcie v zakladnom rozsahu', 'jednoducha koordinácia na mieste', 'vhodné pre menší rozpočet'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Vitaj%20leto&scope=komplet&variant=Leto%20Easy&price=od%20950%20EUR#planner-form'
          },
          {
            name: 'MZ Show',
            lead: 'Najčastejší variant kompletnej letnéj akcie s dobrým flow a atmosferou.',
            price: 'od 1 950 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['moderovanie, program aj atrakcie', 'vyvážený letný zážitok pre publikum', 'silná voľba pre väčšinu klientov'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Vitaj%20leto&scope=komplet&variant=Leto%20Plus&price=od%201950%20EUR#planner-form'
          },
          {
            name: 'MZ Majster',
            lead: 'Kompletna letna produkcia s väčším rozsahom, väčším timom a väčším efektom.',
            price: 'od 3 400 EUR',
            posterLabel: 'Variant kompletnej akcie',
            bullets: ['Komplet akcia od návrhu po realizáciu', 'väčší rozsah programu a atrakcií', 'riešenie pre silný termín a väčší event'],
            orderHref: 'navrhni-si-akciu.html?source=planner-jun&event=Vitaj%20leto&scope=komplet&variant=Leto%20na%20mieru&price=od%203400%20EUR#planner-form'
          }
        ]
      }
    }
  }
};





