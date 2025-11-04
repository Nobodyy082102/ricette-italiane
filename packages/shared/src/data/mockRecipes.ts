/**
 * Database Mock di Ricette Italiane
 * Collezione di ricette classiche della cucina italiana
 */

import {
  Ricetta,
  DifficoltaRicetta,
  TipoRicetta,
  FiltroAlimentare,
  RegioneItaliana,
  Stagione,
  OccasioneSpeciale
} from '../types';

export const mockRecipes: Ricetta[] = [
  {
    id: '1',
    titolo: 'Pasta alla Carbonara',
    descrizione: 'Il piatto romano per eccellenza, cremoso e saporito con guanciale, uova e pecorino.',
    fotoUrl: '🍝',
    videoUrl: 'https://www.youtube.com/watch?v=example1',
    difficolta: DifficoltaRicetta.MEDIA,
    tipo: TipoRicetta.PRIMI,
    regione: RegioneItaliana.LAZIO,
    filtriAlimentari: [],
    ingredienti: [
      { nome: 'Spaghetti', quantita: 320, unita: 'g' },
      { nome: 'Guanciale', quantita: 150, unita: 'g' },
      { nome: 'Uova', quantita: 3, unita: 'pz', note: 'solo tuorli' },
      { nome: 'Pecorino Romano', quantita: 80, unita: 'g', note: 'grattugiato' },
      { nome: 'Pepe nero', quantita: 1, unita: 'q.b.' },
      { nome: 'Sale', quantita: 1, unita: 'q.b.' }
    ],
    procedimento: [
      {
        numero: 1,
        descrizione: 'Metti una pentola di acqua salata sul fuoco per la pasta.',
        tempoCottura: 5
      },
      {
        numero: 2,
        descrizione: 'Taglia il guanciale a listarelle e fallo rosolare in una padella fino a renderlo croccante.',
        tempoCottura: 8
      },
      {
        numero: 3,
        descrizione: 'In una ciotola, sbatti i tuorli con il pecorino grattugiato e il pepe nero.',
      },
      {
        numero: 4,
        descrizione: 'Cuoci gli spaghetti al dente, scolali e versali nella padella con il guanciale.',
        tempoCottura: 9
      },
      {
        numero: 5,
        descrizione: 'Spegni il fuoco, aggiungi il composto di uova e mescola velocemente per creare una crema.',
        suggerimenti: 'Non cuocere le uova! Devono rimanere cremose.'
      }
    ],
    tempoPreparazione: 10,
    tempoCottura: 20,
    tempoTotale: 30,
    porzioni: 4,
    valoriNutrizionali: {
      calorie: 520,
      proteine: 22,
      carboidrati: 58,
      grassi: 21
    },
    commenti: [],
    valutazioneMedia: 4.8,
    numeroValutazioni: 1247,
    numeroPreferiti: 3421,
    dataCreazione: new Date('2024-01-01'),
    dataUltimaModifica: new Date('2024-01-01'),
    autore: 'Chef Romano',
    tags: ['pasta', 'carbonara', 'romano', 'tradizionale', 'guanciale'],
    visualizzazioni: 15234,
    isPopolari: true,
    isRicettaDelGiorno: true,

    // 🍷 NUOVE FEATURE INNOVATIVE
    abbinamentoVini: [
      {
        nome: 'Frascati Superiore',
        tipo: 'bianco',
        regione: RegioneItaliana.LAZIO,
        denominazione: 'Frascati Superiore DOCG',
        perche: 'Il Frascati bilancia perfettamente la ricchezza della carbonara con la sua freschezza e sapidità. La mineralità del vino pulisce il palato tra un boccone e l\'altro.',
        temperaturaServizio: '10-12°C'
      },
      {
        nome: 'Trebbiano d\'Abruzzo',
        tipo: 'bianco',
        regione: RegioneItaliana.ABRUZZO,
        perche: 'Vino fresco e sapido che contrasta la grassezza del guanciale mantenendo l\'armonia con il pecorino.',
        temperaturaServizio: '10-12°C'
      }
    ],

    consigliNonna: [
      {
        testo: 'Il segreto della carbonara perfetta? SPEGNI IL FUOCO prima di aggiungere le uova! Altrimenti farai una frittata, non una crema.',
        categoria: 'segreto'
      },
      {
        testo: 'Il guanciale va tagliato a listarelle spesse almeno mezzo centimetro. Troppo sottile diventa secco e perde sapore!',
        categoria: 'tecnica'
      },
      {
        testo: 'Mia nonna diceva sempre: "La carbonara si fa con i TUORLI, chi mette l\'albume non sa cucinare!" E aveva ragione.',
        categoria: 'ingrediente'
      },
      {
        testo: 'Se la crema è troppo densa, aggiungi un mestolo di acqua di cottura della pasta. È il trucco dei romani veri!',
        categoria: 'tecnica'
      }
    ],

    storia: {
      origine: 'La carbonara nasce a Roma negli anni \'40. L\'origine è dibattuta: alcuni dicono dai carbonai (da cui il nome), altri dai soldati americani che mischiavano bacon e uova con la pasta italiana.',
      curiosita: [
        'La ricetta "ufficiale" prevede solo guanciale, ma storicamente potrebbe essere nata con il bacon americano durante la Seconda Guerra Mondiale',
        'A Roma esiste una "guerra" culinaria: panna SI o panna NO? La risposta tradizionale è un netto NO!',
        'Il 6 aprile si celebra il "Carbonara Day", festa internazionale dedicata a questo piatto'
      ],
      variantiRegionali: 'In alcune zone del Lazio si usa anche la pancetta, ma i puristi romani insistono: SOLO guanciale!'
    },

    stagioneMigliore: [Stagione.TUTTO_ANNO],

    costoTotaleStimato: 8.50,

    occasioniSpeciali: [OccasioneSpeciale.DOMENICA],

    badgeAssociati: [
      {
        id: 'master_carbonara',
        nome: 'Master della Carbonara',
        descrizione: 'Hai preparato la carbonara perfetta senza fare la frittata!',
        icona: '🍝'
      }
    ],

    skillsRichieste: ['mantecare', 'timing', 'rosolare'],

    sostituzioniIngredienti: [
      {
        ingredienteOriginale: 'Guanciale',
        sostituto: 'Pancetta affumicata',
        motivo: 'Se non trovi il guanciale, la pancetta affumicata è una valida alternativa. Non sarà "la vera carbonara romana" ma il risultato sarà comunque ottimo!',
        fattoreMoltiplicazione: 1
      },
      {
        ingredienteOriginale: 'Pecorino Romano',
        sostituto: 'Parmigiano Reggiano',
        motivo: 'Il Parmigiano è più dolce e meno sapido del Pecorino, ma funziona bene se non hai il Pecorino. Puoi anche fare un mix 50-50 dei due formaggi.',
        fattoreMoltiplicazione: 1
      },
      {
        ingredienteOriginale: 'Uova intere',
        sostituto: 'Solo tuorli (4-5 tuorli)',
        motivo: 'La ricetta tradizionale usa SOLO i tuorli! Se hai usato uova intere e vuoi migliorare, passa ai soli tuorli per una crema più ricca e vellutata.',
        fattoreMoltiplicazione: 1.3
      },
      {
        ingredienteOriginale: 'Spaghetti',
        sostituto: 'Rigatoni o Mezze Maniche',
        motivo: 'A Roma molti preferiscono i rigatoni per la carbonara: la crema entra dentro la pasta! Prova questa variante, è deliziosa.',
        fattoreMoltiplicazione: 1
      }
    ]
  },

  {
    id: '2',
    titolo: 'Pizza Margherita',
    descrizione: 'La regina delle pizze: semplice, perfetta, con pomodoro, mozzarella e basilico.',
    fotoUrl: '🍕',
    difficolta: DifficoltaRicetta.MEDIA,
    tipo: TipoRicetta.PIZZE_FOCACCE,
    regione: RegioneItaliana.CAMPANIA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO],
    ingredienti: [
      { nome: 'Farina 00', quantita: 500, unita: 'g' },
      { nome: 'Acqua tiepida', quantita: 300, unita: 'ml' },
      { nome: 'Lievito di birra fresco', quantita: 15, unita: 'g' },
      { nome: 'Sale', quantita: 10, unita: 'g' },
      { nome: 'Olio extravergine', quantita: 2, unita: 'cucchiai' },
      { nome: 'Pomodori pelati', quantita: 400, unita: 'g' },
      { nome: 'Mozzarella', quantita: 250, unita: 'g' },
      { nome: 'Basilico fresco', quantita: 10, unita: 'foglie' }
    ],
    procedimento: [
      {
        numero: 1,
        descrizione: 'Sciogli il lievito nell\'acqua tiepida. Impasta con farina, sale e olio fino ad ottenere un impasto liscio.',
        tempoCottura: 15
      },
      {
        numero: 2,
        descrizione: 'Lascia lievitare l\'impasto coperto per 2-3 ore fino al raddoppio.',
        tempoCottura: 150
      },
      {
        numero: 3,
        descrizione: 'Stendi l\'impasto in forma circolare, condisci con pomodoro schiacciato.',
      },
      {
        numero: 4,
        descrizione: 'Aggiungi la mozzarella a pezzetti, un filo d\'olio e inforna a 250°C per 12-15 minuti.',
        tempoCottura: 13
      },
      {
        numero: 5,
        descrizione: 'Sforna e guarnisci con foglie di basilico fresco.',
        suggerimenti: 'Il forno deve essere molto caldo, idealmente 300°C.'
      }
    ],
    tempoPreparazione: 30,
    tempoCottura: 180,
    tempoTotale: 210,
    porzioni: 4,
    valoriNutrizionali: {
      calorie: 280,
      proteine: 12,
      carboidrati: 45,
      grassi: 7
    },
    commenti: [],
    valutazioneMedia: 4.9,
    numeroValutazioni: 2134,
    numeroPreferiti: 4521,
    dataCreazione: new Date('2024-01-02'),
    dataUltimaModifica: new Date('2024-01-02'),
    autore: 'Pizzaiolo Napoletano',
    tags: ['pizza', 'margherita', 'napoletana', 'lievitato'],
    visualizzazioni: 18934,
    isPopolari: true,

    // 🍷 NUOVE FEATURE INNOVATIVE
    abbinamentoVini: [
      {
        nome: 'Falanghina del Sannio',
        tipo: 'bianco',
        regione: RegioneItaliana.CAMPANIA,
        denominazione: 'Falanghina del Sannio DOC',
        perche: 'La Falanghina è il vino perfetto per la pizza napoletana: fresco, sapido e con note agrumate che esaltano il pomodoro e la mozzarella senza sovrastarli.',
        temperaturaServizio: '10-12°C'
      },
      {
        nome: 'Gragnano Rosso',
        tipo: 'rosso',
        regione: RegioneItaliana.CAMPANIA,
        denominazione: 'Gragnano DOC',
        perche: 'Un rosso leggero e leggermente frizzante, tipico della tradizione napoletana. L\'abbinamento classico delle pizzerie storiche di Napoli!',
        temperaturaServizio: '14-16°C'
      }
    ],

    consigliNonna: [
      {
        testo: 'La vera pizza napoletana si fa con la mozzarella di bufala DOP! Ma attenzione: va strizzata bene altrimenti la pizza esce acquosa.',
        categoria: 'ingrediente'
      },
      {
        testo: 'Il segreto dell\'impasto perfetto? L\'acqua deve essere TIEPIDA, mai calda! Altrimenti uccidi il lievito e la pizza non lievita.',
        categoria: 'tecnica'
      },
      {
        testo: 'Mia nonna pizzaiola mi insegnò: l\'impasto va steso a MANO, mai col mattarello! Il mattarello schiaccia le bolle d\'aria che rendono il cornicione soffice.',
        categoria: 'segreto'
      },
      {
        testo: 'Il basilico va messo DOPO la cottura, non prima! Altrimenti brucia e diventa amaro.',
        categoria: 'tecnica'
      }
    ],

    storia: {
      origine: 'La Pizza Margherita nasce a Napoli nel 1889. Il pizzaiolo Raffaele Esposito la creò in onore della Regina Margherita di Savoia, usando i colori della bandiera italiana: rosso (pomodoro), bianco (mozzarella), verde (basilico).',
      curiosita: [
        'La storia della Regina Margherita potrebbe essere una leggenda marketing! Alcuni storici sostengono che la pizza con pomodoro e mozzarella esisteva già da decenni.',
        'La vera Pizza Margherita napoletana è certificata dall\'Associazione Verace Pizza Napoletana (AVPN) con regole rigorosissime: solo forno a legna a 485°C, cottura 60-90 secondi!',
        'Nel 2017 l\'Arte dei Pizzaiuoli Napoletani è stata dichiarata Patrimonio Immateriale dell\'Umanità UNESCO'
      ],
      variantiRegionali: 'A Roma si fa la "pizza romana" con impasto più sottile e croccante. In Liguria usano il pesto al posto del basilico. Ma i napoletani dicono: "Solo a Napoli è vera pizza!"'
    },

    stagioneMigliore: [Stagione.TUTTO_ANNO],

    costoTotaleStimato: 5.50,

    occasioniSpeciali: [OccasioneSpeciale.DOMENICA, OccasioneSpeciale.FESTA_COMPLEANNO],

    badgeAssociati: [
      {
        id: 'pizzaiolo_esperto',
        nome: 'Pizzaiolo Esperto',
        descrizione: 'Hai preparato una Pizza Margherita degna di Napoli!',
        icona: '🍕'
      },
      {
        id: 'maestro_lievitazione',
        nome: 'Maestro della Lievitazione',
        descrizione: 'Il tuo impasto è lievitato alla perfezione!',
        icona: '🫓'
      }
    ],

    skillsRichieste: ['impastare', 'lievitazione', 'stendere_impasto', 'gestione_forno']
  },

  {
    id: '3',
    titolo: 'Tiramisù',
    descrizione: 'Il dolce italiano più famoso al mondo: savoiardi, caffè, mascarpone e cacao.',
    fotoUrl: '🍰',
    difficolta: DifficoltaRicetta.FACILE,
    tipo: TipoRicetta.DOLCI,
    regione: RegioneItaliana.VENETO,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO],
    ingredienti: [
      { nome: 'Savoiardi', quantita: 300, unita: 'g' },
      { nome: 'Mascarpone', quantita: 500, unita: 'g' },
      { nome: 'Uova fresche', quantita: 4, unita: 'pz' },
      { nome: 'Zucchero', quantita: 100, unita: 'g' },
      { nome: 'Caffè espresso', quantita: 300, unita: 'ml', note: 'freddo' },
      { nome: 'Cacao amaro', quantita: 2, unita: 'cucchiai' },
      { nome: 'Marsala', quantita: 2, unita: 'cucchiai', note: 'facoltativo' }
    ],
    procedimento: [
      {
        numero: 1,
        descrizione: 'Separa i tuorli dagli albumi. Monta i tuorli con lo zucchero fino a ottenere una crema chiara.',
      },
      {
        numero: 2,
        descrizione: 'Incorpora il mascarpone ai tuorli montati mescolando delicatamente.',
      },
      {
        numero: 3,
        descrizione: 'Monta gli albumi a neve fermissima e incorporali al composto di mascarpone.',
      },
      {
        numero: 4,
        descrizione: 'Immergi velocemente i savoiardi nel caffè e disponili in una pirofila.',
        suggerimenti: 'Non inzuppare troppo i savoiardi o diventeranno mollissimi.'
      },
      {
        numero: 5,
        descrizione: 'Copri con uno strato di crema al mascarpone. Ripeti gli strati. Spolverizza con cacao e lascia riposare in frigo per 4 ore.',
        tempoCottura: 240
      }
    ],
    tempoPreparazione: 30,
    tempoCottura: 240,
    tempoTotale: 270,
    porzioni: 8,
    valoriNutrizionali: {
      calorie: 380,
      proteine: 8,
      carboidrati: 32,
      grassi: 25
    },
    commenti: [],
    valutazioneMedia: 4.9,
    numeroValutazioni: 3421,
    numeroPreferiti: 5632,
    dataCreazione: new Date('2024-01-03'),
    dataUltimaModifica: new Date('2024-01-03'),
    autore: 'Pasticcere Veneto',
    tags: ['tiramisù', 'dolce', 'mascarpone', 'caffè', 'freddo'],
    visualizzazioni: 21453,
    isPopolari: true,

    // 🍷 NUOVE FEATURE INNOVATIVE
    abbinamentoVini: [
      {
        nome: 'Moscato d\'Asti',
        tipo: 'bianco',
        regione: RegioneItaliana.PIEMONTE,
        denominazione: 'Moscato d\'Asti DOCG',
        perche: 'Il Moscato dolce e leggermente frizzante è l\'abbinamento perfetto per il tiramisù: la sua dolcezza aromatica bilancia il cacao amaro e esalta il mascarpone.',
        temperaturaServizio: '6-8°C'
      },
      {
        nome: 'Recioto di Soave',
        tipo: 'bianco',
        regione: RegioneItaliana.VENETO,
        denominazione: 'Recioto di Soave DOCG',
        perche: 'Un vino dolce veneto che sposa perfettamente il dolce regionale. Le note mielate e di frutta secca completano l\'esperienza del tiramisù.',
        temperaturaServizio: '10-12°C'
      },
      {
        nome: 'Marsala Superiore',
        tipo: 'rosso',
        regione: RegioneItaliana.SICILIA,
        denominazione: 'Marsala Superiore DOC',
        perche: 'Se usi il Marsala nella ricetta, abbinalo anche al bicchiere! Un Marsala dolce crea un\'armonia perfetta con il dolce.',
        temperaturaServizio: '12-14°C'
      }
    ],

    consigliNonna: [
      {
        testo: 'Il vero tiramisù si fa con le uova CRUDE! Ma usa solo uova freschissime e di qualità. Se hai dubbi, usa uova pastorizzate.',
        categoria: 'ingrediente'
      },
      {
        testo: 'Il segreto del caffè perfetto? Deve essere FREDDO e NON zuccherato! Altrimenti i savoiardi si sfaldano e il tiramisù diventa troppo dolce.',
        categoria: 'tecnica'
      },
      {
        testo: 'Mia nonna pasticcera diceva: "Un secondo nel caffè basta!" I savoiardi devono solo bagnarsi, non inzupparsi. Devono restare un po\' croccanti dentro.',
        categoria: 'segreto'
      },
      {
        testo: 'Il tiramisù va fatto la sera prima! Più riposa in frigo, più i sapori si amalgamano. Quello del giorno stesso è buono, quello del giorno dopo è DIVINO.',
        categoria: 'conservazione'
      },
      {
        testo: 'Il cacao in polvere va setacciato sulla superficie con un colino fine. E abbondante! Non essere tirchio col cacao, è quello che fa la differenza!',
        categoria: 'tecnica'
      }
    ],

    storia: {
      origine: 'Il tiramisù nasce in Veneto negli anni \'60-70, ma l\'origine esatta è dibattuta. Treviso e Siena si contendono la paternità. La ricetta diventa famosa negli anni \'80 conquistando il mondo.',
      curiosita: [
        'Il nome "Tiramisù" significa letteralmente "tirami su", riferito all\'effetto energizzante del caffè e delle uova',
        'La storia romantica vuole che sia stato inventato per "tirare su" i soldati feriti, ma è probabilmente una leggenda',
        'Esiste una versione friulana chiamata "Tirimi-sù" che sostituisce il caffè con il vino bianco!',
        'In Toscana rivendicano che il tiramisù derivi dal "dolce Duca di Siena", un dolce mediceo del 1600'
      ],
      variantiRegionali: 'Ogni regione ha la sua versione: in Piemonte aggiungono nocciole, in Sicilia pistacchi, in Friuli usano grappa al posto del Marsala. Ma i veneti dicono: "L\'originale è quello col caffè!"'
    },

    stagioneMigliore: [Stagione.TUTTO_ANNO],

    costoTotaleStimato: 12.00,

    occasioniSpeciali: [OccasioneSpeciale.NATALE, OccasioneSpeciale.CAPODANNO, OccasioneSpeciale.DOMENICA, OccasioneSpeciale.FESTA_COMPLEANNO],

    badgeAssociati: [
      {
        id: 'maestro_tiramisu',
        nome: 'Maestro del Tiramisù',
        descrizione: 'Hai preparato un tiramisù da pasticceria!',
        icona: '🍰'
      },
      {
        id: 'montatore_perfetto',
        nome: 'Montatore Perfetto',
        descrizione: 'I tuoi albumi a neve sono perfetti!',
        icona: '🥚'
      }
    ],

    skillsRichieste: ['montare_uova', 'assemblaggio_dolci', 'gestione_temperatura']
  },

  {
    id: '4',
    titolo: 'Risotto alla Milanese',
    descrizione: 'Il risotto giallo mantecato, profumato di zafferano e burro.',
    fotoUrl: '🍚',
    difficolta: DifficoltaRicetta.MEDIA,
    tipo: TipoRicetta.PRIMI,
    regione: RegioneItaliana.LOMBARDIA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO, FiltroAlimentare.SENZA_GLUTINE],
    ingredienti: [
      { nome: 'Riso Carnaroli', quantita: 320, unita: 'g' },
      { nome: 'Brodo vegetale', quantita: 1, unita: 'l' },
      { nome: 'Cipolla', quantita: 1, unita: 'pz', note: 'piccola' },
      { nome: 'Vino bianco', quantita: 100, unita: 'ml' },
      { nome: 'Zafferano', quantita: 1, unita: 'bustina' },
      { nome: 'Burro', quantita: 80, unita: 'g' },
      { nome: 'Parmigiano Reggiano', quantita: 60, unita: 'g', note: 'grattugiato' },
      { nome: 'Sale e pepe', quantita: 1, unita: 'q.b.' }
    ],
    procedimento: [
      {
        numero: 1,
        descrizione: 'Trita finemente la cipolla e falla soffriggere nel burro fino a renderla trasparente.',
        tempoCottura: 5
      },
      {
        numero: 2,
        descrizione: 'Aggiungi il riso e tostalo per 2 minuti mescolando.',
        tempoCottura: 2
      },
      {
        numero: 3,
        descrizione: 'Sfuma con il vino bianco e lascia evaporare.',
        tempoCottura: 2
      },
      {
        numero: 4,
        descrizione: 'Aggiungi il brodo poco alla volta, mescolando continuamente. Dopo 10 minuti aggiungi lo zafferano.',
        tempoCottura: 18,
        suggerimenti: 'Il risotto deve essere cremoso ma i chicchi al dente.'
      },
      {
        numero: 5,
        descrizione: 'A fine cottura, manteca con burro e parmigiano fuori dal fuoco.',
      }
    ],
    tempoPreparazione: 10,
    tempoCottura: 30,
    tempoTotale: 40,
    porzioni: 4,
    valoriNutrizionali: {
      calorie: 420,
      proteine: 11,
      carboidrati: 62,
      grassi: 14
    },
    commenti: [],
    valutazioneMedia: 4.7,
    numeroValutazioni: 892,
    numeroPreferiti: 2341,
    dataCreazione: new Date('2024-01-04'),
    dataUltimaModifica: new Date('2024-01-04'),
    autore: 'Chef Milanese',
    tags: ['risotto', 'zafferano', 'milanese', 'mantecato'],
    visualizzazioni: 9823,
    isPopolari: true
  },

  {
    id: '5',
    titolo: 'Lasagne alla Bolognese',
    descrizione: 'Lasagne al forno con ragù alla bolognese e besciamella.',
    fotoUrl: '🥘',
    difficolta: DifficoltaRicetta.DIFFICILE,
    tipo: TipoRicetta.PRIMI,
    regione: RegioneItaliana.EMILIA_ROMAGNA,
    filtriAlimentari: [],
    ingredienti: [
      { nome: 'Sfoglia fresca', quantita: 500, unita: 'g' },
      { nome: 'Carne macinata', quantita: 500, unita: 'g', note: 'mista' },
      { nome: 'Passata di pomodoro', quantita: 500, unita: 'g' },
      { nome: 'Latte', quantita: 500, unita: 'ml' },
      { nome: 'Farina', quantita: 50, unita: 'g' },
      { nome: 'Burro', quantita: 100, unita: 'g' },
      { nome: 'Parmigiano', quantita: 150, unita: 'g' },
      { nome: 'Cipolla, carota, sedano', quantita: 1, unita: 'trito' },
      { nome: 'Vino rosso', quantita: 100, unita: 'ml' }
    ],
    procedimento: [
      {
        numero: 1,
        descrizione: 'Prepara il ragù: soffriggi il trito, aggiungi la carne, sfuma col vino e cuoci con pomodoro per 2 ore.',
        tempoCottura: 120
      },
      {
        numero: 2,
        descrizione: 'Prepara la besciamella: sciogli il burro, aggiungi la farina, poi il latte caldo mescolando.',
        tempoCottura: 10
      },
      {
        numero: 3,
        descrizione: 'In una teglia, alterna strati di sfoglia, ragù, besciamella e parmigiano.',
      },
      {
        numero: 4,
        descrizione: 'Termina con besciamella e parmigiano. Inforna a 180°C per 30 minuti.',
        tempoCottura: 30
      }
    ],
    tempoPreparazione: 40,
    tempoCottura: 180,
    tempoTotale: 220,
    porzioni: 6,
    valoriNutrizionali: {
      calorie: 580,
      proteine: 28,
      carboidrati: 42,
      grassi: 32
    },
    commenti: [],
    valutazioneMedia: 4.8,
    numeroValutazioni: 1543,
    numeroPreferiti: 3892,
    dataCreazione: new Date('2024-01-05'),
    dataUltimaModifica: new Date('2024-01-05'),
    autore: 'Nonna Emiliana',
    tags: ['lasagne', 'bolognese', 'forno', 'ragù'],
    visualizzazioni: 13452,
    isPopolari: true
  },

  {
    id: '6',
    titolo: 'Panna Cotta',
    descrizione: 'Dessert al cucchiaio delicato e cremoso, servito con coulis ai frutti di bosco.',
    fotoUrl: '🍮',
    difficolta: DifficoltaRicetta.FACILE,
    tipo: TipoRicetta.DOLCI,
    regione: RegioneItaliana.PIEMONTE,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO, FiltroAlimentare.SENZA_GLUTINE],
    ingredienti: [
      { nome: 'Panna fresca', quantita: 500, unita: 'ml' },
      { nome: 'Zucchero', quantita: 80, unita: 'g' },
      { nome: 'Colla di pesce', quantita: 8, unita: 'g' },
      { nome: 'Vaniglia', quantita: 1, unita: 'bacca' },
      { nome: 'Frutti di bosco', quantita: 200, unita: 'g', note: 'per coulis' }
    ],
    procedimento: [
      {
        numero: 1,
        descrizione: 'Ammolla la colla di pesce in acqua fredda per 10 minuti.',
      },
      {
        numero: 2,
        descrizione: 'Scalda la panna con zucchero e vaniglia senza farla bollire.',
        tempoCottura: 5
      },
      {
        numero: 3,
        descrizione: 'Aggiungi la colla di pesce strizzata e mescola fino a completo scioglimento.',
      },
      {
        numero: 4,
        descrizione: 'Versa negli stampini e lascia rassodare in frigo per almeno 4 ore.',
        tempoCottura: 240
      },
      {
        numero: 5,
        descrizione: 'Servi sformando su un piatto e guarnendo con coulis ai frutti di bosco.',
        suggerimenti: 'Per sformare, immergi velocemente lo stampino in acqua calda.'
      }
    ],
    tempoPreparazione: 15,
    tempoCottura: 245,
    tempoTotale: 260,
    porzioni: 6,
    valoriNutrizionali: {
      calorie: 320,
      proteine: 3,
      carboidrati: 22,
      grassi: 24
    },
    commenti: [],
    valutazioneMedia: 4.6,
    numeroValutazioni: 674,
    numeroPreferiti: 1823,
    dataCreazione: new Date('2024-01-06'),
    dataUltimaModifica: new Date('2024-01-06'),
    autore: 'Pasticcere Piemontese',
    tags: ['panna cotta', 'dolce', 'freddo', 'cremoso'],
    visualizzazioni: 7234
  },

  {
    id: '7',
    titolo: 'Spaghetti alle Vongole',
    descrizione: 'Primo piatto di mare profumato, con vongole fresche, aglio e prezzemolo.',
    fotoUrl: '🍝',
    difficolta: DifficoltaRicetta.MEDIA,
    tipo: TipoRicetta.PRIMI,
    regione: RegioneItaliana.CAMPANIA,
    filtriAlimentari: [FiltroAlimentare.SENZA_LATTOSIO],
    ingredienti: [
      { nome: 'Spaghetti', quantita: 320, unita: 'g' },
      { nome: 'Vongole veraci', quantita: 1, unita: 'kg' },
      { nome: 'Aglio', quantita: 3, unita: 'spicchi' },
      { nome: 'Prezzemolo fresco', quantita: 1, unita: 'mazzo' },
      { nome: 'Vino bianco', quantita: 100, unita: 'ml' },
      { nome: 'Olio extravergine', quantita: 4, unita: 'cucchiai' },
      { nome: 'Peperoncino', quantita: 1, unita: 'pz', note: 'facoltativo' }
    ],
    procedimento: [
      {
        numero: 1,
        descrizione: 'Lascia spurgare le vongole in acqua salata per 2 ore.',
        tempoCottura: 120
      },
      {
        numero: 2,
        descrizione: 'In una padella capiente, rosola l\'aglio nell\'olio. Aggiungi le vongole e il vino.',
        tempoCottura: 3
      },
      {
        numero: 3,
        descrizione: 'Copri e fai aprire le vongole a fuoco alto. Togli quelle che non si aprono.',
        tempoCottura: 5
      },
      {
        numero: 4,
        descrizione: 'Cuoci gli spaghetti al dente, scolali e versali nella padella con le vongole.',
        tempoCottura: 9
      },
      {
        numero: 5,
        descrizione: 'Salta tutto insieme, aggiungi il prezzemolo tritato e servi subito.',
        suggerimenti: 'Non aggiungere formaggio! È un piatto di mare.'
      }
    ],
    tempoPreparazione: 130,
    tempoCottura: 20,
    tempoTotale: 150,
    porzioni: 4,
    valoriNutrizionali: {
      calorie: 380,
      proteine: 18,
      carboidrati: 58,
      grassi: 8
    },
    commenti: [],
    valutazioneMedia: 4.7,
    numeroValutazioni: 1123,
    numeroPreferiti: 2567,
    dataCreazione: new Date('2024-01-07'),
    dataUltimaModifica: new Date('2024-01-07'),
    autore: 'Chef di Mare',
    tags: ['spaghetti', 'vongole', 'mare', 'napoletano'],
    visualizzazioni: 11234
  },

  {
    id: '8',
    titolo: 'Cacio e Pepe',
    descrizione: 'La semplicità romana: solo pecorino, pepe e pasta. Perfezione pura.',
    fotoUrl: '🍝',
    difficolta: DifficoltaRicetta.MEDIA,
    tipo: TipoRicetta.PRIMI,
    regione: RegioneItaliana.LAZIO,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO],
    ingredienti: [
      { nome: 'Spaghetti', quantita: 320, unita: 'g' },
      { nome: 'Pecorino Romano', quantita: 120, unita: 'g', note: 'grattugiato' },
      { nome: 'Pepe nero', quantita: 2, unita: 'cucchiaini', note: 'macinato fresco' },
      { nome: 'Sale', quantita: 1, unita: 'q.b.' }
    ],
    procedimento: [
      {
        numero: 1,
        descrizione: 'Tosta il pepe in una padella per un minuto per liberare gli aromi.',
        tempoCottura: 1
      },
      {
        numero: 2,
        descrizione: 'Cuoci gli spaghetti in abbondante acqua salata fino a 2 minuti prima del termine cottura.',
        tempoCottura: 7
      },
      {
        numero: 3,
        descrizione: 'In una ciotola, mescola il pecorino con un po\' di acqua di cottura per creare una crema.',
      },
      {
        numero: 4,
        descrizione: 'Scola la pasta e versala nella padella con il pepe. Aggiungi la crema di pecorino.',
      },
      {
        numero: 5,
        descrizione: 'Manteca fuori dal fuoco aggiungendo acqua di cottura se necessario.',
        suggerimenti: 'La temperatura è fondamentale: non troppo calda o il pecorino si impasta!'
      }
    ],
    tempoPreparazione: 5,
    tempoCottura: 12,
    tempoTotale: 17,
    porzioni: 4,
    valoriNutrizionali: {
      calorie: 450,
      proteine: 18,
      carboidrati: 58,
      grassi: 16
    },
    commenti: [],
    valutazioneMedia: 4.6,
    numeroValutazioni: 876,
    numeroPreferiti: 2134,
    dataCreazione: new Date('2024-01-08'),
    dataUltimaModifica: new Date('2024-01-08'),
    autore: 'Trattoria Romana',
    tags: ['cacio e pepe', 'pecorino', 'romano', 'semplice'],
    visualizzazioni: 8934
  },

  {
    id: '9',
    titolo: 'Parmigiana di Melanzane',
    descrizione: 'Melanzane fritte con pomodoro, mozzarella e parmigiano al forno.',
    fotoUrl: '🍆',
    difficolta: DifficoltaRicetta.MEDIA,
    tipo: TipoRicetta.SECONDI,
    regione: RegioneItaliana.SICILIA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO],
    ingredienti: [
      { nome: 'Melanzane', quantita: 1, unita: 'kg' },
      { nome: 'Passata di pomodoro', quantita: 700, unita: 'g' },
      { nome: 'Mozzarella', quantita: 400, unita: 'g' },
      { nome: 'Parmigiano', quantita: 100, unita: 'g' },
      { nome: 'Basilico', quantita: 20, unita: 'foglie' },
      { nome: 'Aglio', quantita: 2, unita: 'spicchi' },
      { nome: 'Olio per friggere', quantita: 1, unita: 'l' }
    ],
    procedimento: [
      {
        numero: 1,
        descrizione: 'Taglia le melanzane a fette di 0.5cm, salale e lasciale spurgare per 30 minuti.',
        tempoCottura: 30
      },
      {
        numero: 2,
        descrizione: 'Prepara il sugo: soffriggi l\'aglio, aggiungi pomodoro e basilico. Cuoci 20 minuti.',
        tempoCottura: 20
      },
      {
        numero: 3,
        descrizione: 'Asciuga le melanzane e friggile in olio bollente fino a doratura.',
        tempoCottura: 15
      },
      {
        numero: 4,
        descrizione: 'In una teglia, alterna strati di melanzane, sugo, mozzarella e parmigiano.',
      },
      {
        numero: 5,
        descrizione: 'Inforna a 180°C per 30 minuti fino a gratinatura dorata.',
        tempoCottura: 30
      }
    ],
    tempoPreparazione: 45,
    tempoCottura: 95,
    tempoTotale: 140,
    porzioni: 6,
    valoriNutrizionali: {
      calorie: 380,
      proteine: 18,
      carboidrati: 22,
      grassi: 24
    },
    commenti: [],
    valutazioneMedia: 4.8,
    numeroValutazioni: 1432,
    numeroPreferiti: 3214,
    dataCreazione: new Date('2024-01-09'),
    dataUltimaModifica: new Date('2024-01-09'),
    autore: 'Nonna Siciliana',
    tags: ['parmigiana', 'melanzane', 'forno', 'sicilia'],
    visualizzazioni: 12453
  },

  {
    id: '10',
    titolo: 'Ossobuco alla Milanese',
    descrizione: 'Stinco di vitello brasato lentamente, servito con gremolata e risotto giallo.',
    fotoUrl: '🍖',
    difficolta: DifficoltaRicetta.DIFFICILE,
    tipo: TipoRicetta.SECONDI,
    regione: RegioneItaliana.LOMBARDIA,
    filtriAlimentari: [FiltroAlimentare.SENZA_GLUTINE, FiltroAlimentare.SENZA_LATTOSIO],
    ingredienti: [
      { nome: 'Ossobuco di vitello', quantita: 4, unita: 'pz', note: 'alti 3-4cm' },
      { nome: 'Farina', quantita: 50, unita: 'g' },
      { nome: 'Burro', quantita: 50, unita: 'g' },
      { nome: 'Vino bianco', quantita: 200, unita: 'ml' },
      { nome: 'Brodo di carne', quantita: 500, unita: 'ml' },
      { nome: 'Cipolla, carota, sedano', quantita: 1, unita: 'trito' },
      { nome: 'Pomodoro', quantita: 200, unita: 'g', note: 'pelati' },
      { nome: 'Prezzemolo, aglio, scorza limone', quantita: 1, unita: 'misto', note: 'per gremolata' }
    ],
    procedimento: [
      {
        numero: 1,
        descrizione: 'Lega gli ossibuchi con spago da cucina, infarinali leggermente.',
      },
      {
        numero: 2,
        descrizione: 'Rosola gli ossibuchi nel burro su tutti i lati fino a doratura.',
        tempoCottura: 10
      },
      {
        numero: 3,
        descrizione: 'Sfuma col vino, aggiungi il trito di verdure, i pomodori e il brodo.',
        tempoCottura: 5
      },
      {
        numero: 4,
        descrizione: 'Copri e cuoci a fuoco dolce per 2 ore, rigirando a metà cottura.',
        tempoCottura: 120,
        suggerimenti: 'La carne deve staccarsi dall\'osso facilmente.'
      },
      {
        numero: 5,
        descrizione: 'Prepara la gremolata tritando prezzemolo, aglio e scorza di limone. Cospargi prima di servire.',
      }
    ],
    tempoPreparazione: 20,
    tempoCottura: 140,
    tempoTotale: 160,
    porzioni: 4,
    valoriNutrizionali: {
      calorie: 520,
      proteine: 42,
      carboidrati: 12,
      grassi: 32
    },
    commenti: [],
    valutazioneMedia: 4.9,
    numeroValutazioni: 543,
    numeroPreferiti: 1432,
    dataCreazione: new Date('2024-01-10'),
    dataUltimaModifica: new Date('2024-01-10'),
    autore: 'Chef Lombardo',
    tags: ['ossobuco', 'milanese', 'brasato', 'vitello'],
    visualizzazioni: 6754
  },

  {
    id: '11',
    titolo: 'Caprese',
    descrizione: 'Insalata fresca con mozzarella di bufala, pomodori e basilico.',
    fotoUrl: '🥗',
    difficolta: DifficoltaRicetta.FACILE,
    tipo: TipoRicetta.ANTIPASTI,
    regione: RegioneItaliana.CAMPANIA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO, FiltroAlimentare.SENZA_GLUTINE],
    ingredienti: [
      { nome: 'Mozzarella di bufala', quantita: 250, unita: 'g' },
      { nome: 'Pomodori cuore di bue', quantita: 3, unita: 'pz' },
      { nome: 'Basilico fresco', quantita: 15, unita: 'foglie' },
      { nome: 'Olio extravergine', quantita: 4, unita: 'cucchiai' },
      { nome: 'Sale', quantita: 1, unita: 'q.b.' },
      { nome: 'Origano', quantita: 1, unita: 'pizzico', note: 'facoltativo' }
    ],
    procedimento: [
      {
        numero: 1,
        descrizione: 'Taglia i pomodori a fette spesse circa 1 cm.',
      },
      {
        numero: 2,
        descrizione: 'Taglia la mozzarella a fette della stessa dimensione.',
      },
      {
        numero: 3,
        descrizione: 'Disponi nel piatto alternando fette di pomodoro e mozzarella.',
      },
      {
        numero: 4,
        descrizione: 'Decora con foglie di basilico fresco.',
      },
      {
        numero: 5,
        descrizione: 'Condisci con olio extravergine, sale e una spolverata di origano.',
        suggerimenti: 'Usa ingredienti di qualità: la semplicità esalta ogni sapore.'
      }
    ],
    tempoPreparazione: 10,
    tempoCottura: 0,
    tempoTotale: 10,
    porzioni: 4,
    valoriNutrizionali: {
      calorie: 220,
      proteine: 12,
      carboidrati: 6,
      grassi: 17
    },
    commenti: [],
    valutazioneMedia: 4.5,
    numeroValutazioni: 432,
    numeroPreferiti: 987,
    dataCreazione: new Date('2024-01-11'),
    dataUltimaModifica: new Date('2024-01-11'),
    autore: 'Trattoria Campana',
    tags: ['caprese', 'insalata', 'mozzarella', 'fresco', 'estivo'],
    visualizzazioni: 5234
  },

  {
    id: '12',
    titolo: 'Pasta al Pesto Genovese',
    descrizione: 'Trofie con il famoso pesto alla genovese: basilico, pinoli, aglio e parmigiano.',
    fotoUrl: '🍝',
    difficolta: DifficoltaRicetta.FACILE,
    tipo: TipoRicetta.PRIMI,
    regione: RegioneItaliana.LIGURIA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO],
    ingredienti: [
      { nome: 'Trofie o trenette', quantita: 320, unita: 'g' },
      { nome: 'Basilico genovese', quantita: 50, unita: 'g', note: 'foglie fresche' },
      { nome: 'Pinoli', quantita: 30, unita: 'g' },
      { nome: 'Aglio', quantita: 1, unita: 'spicchio' },
      { nome: 'Parmigiano Reggiano', quantita: 50, unita: 'g' },
      { nome: 'Pecorino sardo', quantita: 20, unita: 'g' },
      { nome: 'Olio extravergine ligure', quantita: 100, unita: 'ml' },
      { nome: 'Sale grosso', quantita: 1, unita: 'pizzico' },
      { nome: 'Patate', quantita: 150, unita: 'g', note: 'facoltativo' },
      { nome: 'Fagiolini', quantita: 100, unita: 'g', note: 'facoltativo' }
    ],
    procedimento: [
      {
        numero: 1,
        descrizione: 'Lava e asciuga delicatamente le foglie di basilico.',
      },
      {
        numero: 2,
        descrizione: 'Nel mortaio (o frullatore), pesta basilico, aglio, pinoli e sale fino a ottenere una crema.',
      },
      {
        numero: 3,
        descrizione: 'Aggiungi i formaggi grattugiati e incorpora l\'olio a filo continuando a mescolare.',
      },
      {
        numero: 4,
        descrizione: 'Cuoci la pasta con patate a cubetti e fagiolini. Scola al dente.',
        tempoCottura: 11
      },
      {
        numero: 5,
        descrizione: 'Diluisci il pesto con un po\' di acqua di cottura e condisci la pasta.',
        suggerimenti: 'Non riscaldare mai il pesto: perderebbe il suo colore verde brillante!'
      }
    ],
    tempoPreparazione: 15,
    tempoCottura: 12,
    tempoTotale: 27,
    porzioni: 4,
    valoriNutrizionali: {
      calorie: 480,
      proteine: 14,
      carboidrati: 54,
      grassi: 24
    },
    commenti: [],
    valutazioneMedia: 4.7,
    numeroValutazioni: 1234,
    numeroPreferiti: 2876,
    dataCreazione: new Date('2024-01-12'),
    dataUltimaModifica: new Date('2024-01-12'),
    autore: 'Nonna Ligure',
    tags: ['pesto', 'genovese', 'basilico', 'liguria', 'mortaio'],
    visualizzazioni: 10234
  },

  {
    id: '13',
    titolo: 'Arancini Siciliani',
    descrizione: 'Palle di riso ripiene, impanate e fritte, con ragù e piselli.',
    fotoUrl: '🍙',
    difficolta: DifficoltaRicetta.MEDIA,
    tipo: TipoRicetta.ANTIPASTI,
    regione: RegioneItaliana.SICILIA,
    filtriAlimentari: [],
    ingredienti: [
      { nome: 'Riso per risotto', quantita: 500, unita: 'g' },
      { nome: 'Zafferano', quantita: 1, unita: 'bustina' },
      { nome: 'Carne macinata', quantita: 300, unita: 'g' },
      { nome: 'Piselli', quantita: 150, unita: 'g' },
      { nome: 'Passata di pomodoro', quantita: 200, unita: 'g' },
      { nome: 'Mozzarella', quantita: 150, unita: 'g', note: 'a cubetti' },
      { nome: 'Pangrattato', quantita: 200, unita: 'g' },
      { nome: 'Uova', quantita: 3, unita: 'pz' },
      { nome: 'Olio per friggere', quantita: 1, unita: 'l' }
    ],
    procedimento: [
      {
        numero: 1,
        descrizione: 'Cuoci il riso con lo zafferano, lascia raffreddare e aggiungi un uovo.',
        tempoCottura: 18
      },
      {
        numero: 2,
        descrizione: 'Prepara il ragù con carne macinata, pomodoro e piselli.',
        tempoCottura: 30
      },
      {
        numero: 3,
        descrizione: 'Forma delle palle con il riso, creando un buco al centro. Riempi con ragù e mozzarella.',
      },
      {
        numero: 4,
        descrizione: 'Passa gli arancini nell\'uovo sbattuto e poi nel pangrattato.',
      },
      {
        numero: 5,
        descrizione: 'Friggi in olio bollente fino a doratura completa.',
        tempoCottura: 8,
        suggerimenti: 'Devono essere dorati uniformemente su tutta la superficie.'
      }
    ],
    tempoPreparazione: 40,
    tempoCottura: 60,
    tempoTotale: 100,
    porzioni: 8,
    valoriNutrizionali: {
      calorie: 420,
      proteine: 16,
      carboidrati: 48,
      grassi: 18
    },
    commenti: [],
    valutazioneMedia: 4.8,
    numeroValutazioni: 987,
    numeroPreferiti: 2345,
    dataCreazione: new Date('2024-01-13'),
    dataUltimaModifica: new Date('2024-01-13'),
    autore: 'Street Food Siciliano',
    tags: ['arancini', 'sicilia', 'fritto', 'street food', 'riso'],
    visualizzazioni: 9876
  },

  {
    id: '14',
    titolo: 'Amatriciana',
    descrizione: 'Pasta con guanciale, pomodoro e pecorino. Un classico laziale.',
    fotoUrl: '🍝',
    difficolta: DifficoltaRicetta.FACILE,
    tipo: TipoRicetta.PRIMI,
    regione: RegioneItaliana.LAZIO,
    filtriAlimentari: [],
    ingredienti: [
      { nome: 'Bucatini o spaghetti', quantita: 320, unita: 'g' },
      { nome: 'Guanciale', quantita: 150, unita: 'g' },
      { nome: 'Pomodori pelati', quantita: 400, unita: 'g' },
      { nome: 'Pecorino Romano', quantita: 80, unita: 'g', note: 'grattugiato' },
      { nome: 'Vino bianco', quantita: 50, unita: 'ml' },
      { nome: 'Peperoncino', quantita: 1, unita: 'pz' },
      { nome: 'Sale', quantita: 1, unita: 'q.b.' }
    ],
    procedimento: [
      {
        numero: 1,
        descrizione: 'Taglia il guanciale a listarelle e fallo rosolare fino a renderlo croccante.',
        tempoCottura: 8
      },
      {
        numero: 2,
        descrizione: 'Sfuma con il vino bianco e lascia evaporare.',
        tempoCottura: 2
      },
      {
        numero: 3,
        descrizione: 'Aggiungi i pomodori pelati schiacciati e il peperoncino. Cuoci 15 minuti.',
        tempoCottura: 15
      },
      {
        numero: 4,
        descrizione: 'Cuoci la pasta al dente, scolala e versala nel sugo.',
        tempoCottura: 11
      },
      {
        numero: 5,
        descrizione: 'Manteca con abbondante pecorino e servi immediatamente.',
        suggerimenti: 'L\'amatriciana originale NON prevede aglio e cipolla!'
      }
    ],
    tempoPreparazione: 10,
    tempoCottura: 36,
    tempoTotale: 46,
    porzioni: 4,
    valoriNutrizionali: {
      calorie: 520,
      proteine: 20,
      carboidrati: 58,
      grassi: 22
    },
    commenti: [],
    valutazioneMedia: 4.7,
    numeroValutazioni: 765,
    numeroPreferiti: 1987,
    dataCreazione: new Date('2024-01-14'),
    dataUltimaModifica: new Date('2024-01-14'),
    autore: 'Trattoria Amatriciana',
    tags: ['amatriciana', 'guanciale', 'lazio', 'pomodoro'],
    visualizzazioni: 8234
  },

  {
    id: '15',
    titolo: 'Focaccia Genovese',
    descrizione: 'Focaccia soffice e sottile, condita con olio extravergine e sale grosso.',
    fotoUrl: '🥖',
    difficolta: DifficoltaRicetta.MEDIA,
    tipo: TipoRicetta.PIZZE_FOCACCE,
    regione: RegioneItaliana.LIGURIA,
    filtriAlimentari: [FiltroAlimentare.VEGANO],
    ingredienti: [
      { nome: 'Farina 00', quantita: 500, unita: 'g' },
      { nome: 'Acqua', quantita: 300, unita: 'ml' },
      { nome: 'Lievito di birra', quantita: 12, unita: 'g' },
      { nome: 'Olio extravergine ligure', quantita: 80, unita: 'ml' },
      { nome: 'Sale fino', quantita: 10, unita: 'g' },
      { nome: 'Sale grosso', quantita: 1, unita: 'q.b.', note: 'per superficie' }
    ],
    procedimento: [
      {
        numero: 1,
        descrizione: 'Sciogli il lievito in acqua tiepida. Impasta con farina, sale e metà dell\'olio.',
        tempoCottura: 10
      },
      {
        numero: 2,
        descrizione: 'Lascia lievitare coperto per 2 ore fino al raddoppio.',
        tempoCottura: 120
      },
      {
        numero: 3,
        descrizione: 'Stendi l\'impasto in una teglia unta, lascia riposare 30 minuti.',
        tempoCottura: 30
      },
      {
        numero: 4,
        descrizione: 'Fai i classici buchi con le dita, irrora con olio e cospargi di sale grosso.',
      },
      {
        numero: 5,
        descrizione: 'Inforna a 220°C per 15-18 minuti fino a doratura.',
        tempoCottura: 17,
        suggerimenti: 'Deve essere dorata sopra ma rimanere morbida all\'interno.'
      }
    ],
    tempoPreparazione: 20,
    tempoCottura: 177,
    tempoTotale: 197,
    porzioni: 8,
    valoriNutrizionali: {
      calorie: 280,
      proteine: 6,
      carboidrati: 42,
      grassi: 10
    },
    commenti: [],
    valutazioneMedia: 4.6,
    numeroValutazioni: 543,
    numeroPreferiti: 1432,
    dataCreazione: new Date('2024-01-15'),
    dataUltimaModifica: new Date('2024-01-15'),
    autore: 'Fornaio Ligure',
    tags: ['focaccia', 'genovese', 'lievitato', 'liguria'],
    visualizzazioni: 7123
  },

  {
    id: '16',
    titolo: 'Cannoli Siciliani',
    descrizione: 'Croccante cialda fritta ripiena di ricotta dolce con gocce di cioccolato.',
    fotoUrl: '🥐',
    difficolta: DifficoltaRicetta.DIFFICILE,
    tipo: TipoRicetta.DOLCI,
    regione: RegioneItaliana.SICILIA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO],
    ingredienti: [
      { nome: 'Farina 00', quantita: 300, unita: 'g' },
      { nome: 'Zucchero', quantita: 30, unita: 'g' },
      { nome: 'Burro', quantita: 30, unita: 'g' },
      { nome: 'Marsala', quantita: 50, unita: 'ml' },
      { nome: 'Ricotta di pecora', quantita: 500, unita: 'g' },
      { nome: 'Zucchero a velo', quantita: 150, unita: 'g' },
      { nome: 'Gocce di cioccolato', quantita: 100, unita: 'g' },
      { nome: 'Scorza d\'arancia candita', quantita: 50, unita: 'g', note: 'a pezzetti' },
      { nome: 'Pistacchi tritati', quantita: 50, unita: 'g', note: 'per decorare' }
    ],
    procedimento: [
      {
        numero: 1,
        descrizione: 'Prepara la pasta: impasta farina, zucchero, burro e marsala. Lascia riposare 30 minuti.',
        tempoCottura: 30
      },
      {
        numero: 2,
        descrizione: 'Stendi la pasta sottile, ritaglia cerchi di 10cm e avvolgili sui cilindri metallici.',
      },
      {
        numero: 3,
        descrizione: 'Friggi le cialde in olio bollente fino a doratura. Sgocciola e lascia raffreddare.',
        tempoCottura: 3
      },
      {
        numero: 4,
        descrizione: 'Setaccia la ricotta, mescolala con zucchero a velo, gocce di cioccolato e canditi.',
      },
      {
        numero: 5,
        descrizione: 'Riempi i cannoli con la crema e decora le estremità con pistacchi.',
        suggerimenti: 'Riempi i cannoli solo al momento di servire per mantenerli croccanti!'
      }
    ],
    tempoPreparazione: 45,
    tempoCottura: 40,
    tempoTotale: 85,
    porzioni: 12,
    valoriNutrizionali: {
      calorie: 380,
      proteine: 10,
      carboidrati: 42,
      grassi: 19
    },
    commenti: [],
    valutazioneMedia: 4.9,
    numeroValutazioni: 1876,
    numeroPreferiti: 4321,
    dataCreazione: new Date('2024-01-16'),
    dataUltimaModifica: new Date('2024-01-16'),
    autore: 'Pasticceria Siciliana',
    tags: ['cannoli', 'sicilia', 'ricotta', 'fritto', 'dolce'],
    visualizzazioni: 16234
  },

  {
    id: '17',
    titolo: 'Saltimbocca alla Romana',
    descrizione: 'Fettine di vitello con prosciutto crudo e salvia, saltate nel burro.',
    fotoUrl: '🥩',
    difficolta: DifficoltaRicetta.FACILE,
    tipo: TipoRicetta.SECONDI,
    regione: RegioneItaliana.LAZIO,
    filtriAlimentari: [FiltroAlimentare.SENZA_GLUTINE, FiltroAlimentare.SENZA_LATTOSIO],
    ingredienti: [
      { nome: 'Fettine di vitello', quantita: 8, unita: 'pz', note: 'sottili' },
      { nome: 'Prosciutto crudo', quantita: 8, unita: 'fette' },
      { nome: 'Salvia fresca', quantita: 16, unita: 'foglie' },
      { nome: 'Burro', quantita: 60, unita: 'g' },
      { nome: 'Vino bianco', quantita: 100, unita: 'ml' },
      { nome: 'Farina', quantita: 30, unita: 'g' },
      { nome: 'Sale e pepe', quantita: 1, unita: 'q.b.' }
    ],
    procedimento: [
      {
        numero: 1,
        descrizione: 'Batti leggermente le fettine di carne per renderle più sottili.',
      },
      {
        numero: 2,
        descrizione: 'Su ogni fettina posa una fetta di prosciutto e 2 foglie di salvia. Ferma con uno stuzzicadenti.',
      },
      {
        numero: 3,
        descrizione: 'Infarinali leggermente sul lato senza prosciutto.',
      },
      {
        numero: 4,
        descrizione: 'Sciogli il burro in padella e cuoci i saltimbocca per 2-3 minuti per lato.',
        tempoCottura: 6
      },
      {
        numero: 5,
        descrizione: 'Sfuma con vino bianco e lascia restringere il sugo. Servi subito.',
        tempoCottura: 2,
        suggerimenti: 'Cottura rapida: la carne deve rimanere tenera!'
      }
    ],
    tempoPreparazione: 15,
    tempoCottura: 10,
    tempoTotale: 25,
    porzioni: 4,
    valoriNutrizionali: {
      calorie: 320,
      proteine: 32,
      carboidrati: 4,
      grassi: 18
    },
    commenti: [],
    valutazioneMedia: 4.6,
    numeroValutazioni: 432,
    numeroPreferiti: 1234,
    dataCreazione: new Date('2024-01-17'),
    dataUltimaModifica: new Date('2024-01-17'),
    autore: 'Trattoria Romana',
    tags: ['saltimbocca', 'vitello', 'romano', 'salvia', 'veloce'],
    visualizzazioni: 5432
  },

  {
    id: '18',
    titolo: 'Caponata Siciliana',
    descrizione: 'Contorno agrodolce di melanzane con pomodoro, olive e capperi.',
    fotoUrl: '🍆',
    difficolta: DifficoltaRicetta.MEDIA,
    tipo: TipoRicetta.CONTORNI,
    regione: RegioneItaliana.SICILIA,
    filtriAlimentari: [FiltroAlimentare.VEGANO, FiltroAlimentare.SENZA_GLUTINE],
    ingredienti: [
      { nome: 'Melanzane', quantita: 800, unita: 'g' },
      { nome: 'Pomodori pelati', quantita: 400, unita: 'g' },
      { nome: 'Sedano', quantita: 200, unita: 'g' },
      { nome: 'Cipolla', quantita: 1, unita: 'pz' },
      { nome: 'Olive verdi', quantita: 100, unita: 'g' },
      { nome: 'Capperi sotto sale', quantita: 50, unita: 'g' },
      { nome: 'Aceto di vino', quantita: 50, unita: 'ml' },
      { nome: 'Zucchero', quantita: 30, unita: 'g' },
      { nome: 'Olio extravergine', quantita: 100, unita: 'ml' },
      { nome: 'Pinoli', quantita: 30, unita: 'g' }
    ],
    procedimento: [
      {
        numero: 1,
        descrizione: 'Taglia le melanzane a cubetti e friggile in olio. Metti da parte.',
        tempoCottura: 15
      },
      {
        numero: 2,
        descrizione: 'Sbollenta il sedano tagliato a pezzi per 5 minuti. Soffriggi la cipolla.',
        tempoCottura: 10
      },
      {
        numero: 3,
        descrizione: 'Aggiungi pomodori, olive, capperi e pinoli. Cuoci 10 minuti.',
        tempoCottura: 10
      },
      {
        numero: 4,
        descrizione: 'Unisci le melanzane e il sedano. Aggiungi aceto e zucchero per il sapore agrodolce.',
      },
      {
        numero: 5,
        descrizione: 'Cuoci a fuoco dolce per 15 minuti. Lascia raffreddare prima di servire.',
        tempoCottura: 15,
        suggerimenti: 'La caponata è ancora più buona il giorno dopo!'
      }
    ],
    tempoPreparazione: 25,
    tempoCottura: 50,
    tempoTotale: 75,
    porzioni: 6,
    valoriNutrizionali: {
      calorie: 220,
      proteine: 3,
      carboidrati: 18,
      grassi: 16
    },
    commenti: [],
    valutazioneMedia: 4.5,
    numeroValutazioni: 321,
    numeroPreferiti: 876,
    dataCreazione: new Date('2024-01-18'),
    dataUltimaModifica: new Date('2024-01-18'),
    autore: 'Cucina Siciliana',
    tags: ['caponata', 'sicilia', 'melanzane', 'agrodolce', 'contorno'],
    visualizzazioni: 4321
  },

  {
    id: '19',
    titolo: 'Gelato alla Crema',
    descrizione: 'Gelato artigianale cremoso fatto in casa con latte, panna e uova.',
    fotoUrl: '🍨',
    difficolta: DifficoltaRicetta.MEDIA,
    tipo: TipoRicetta.DOLCI,
    regione: RegioneItaliana.EMILIA_ROMAGNA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO, FiltroAlimentare.SENZA_GLUTINE],
    ingredienti: [
      { nome: 'Latte intero', quantita: 500, unita: 'ml' },
      { nome: 'Panna fresca', quantita: 250, unita: 'ml' },
      { nome: 'Tuorli d\'uovo', quantita: 6, unita: 'pz' },
      { nome: 'Zucchero', quantita: 150, unita: 'g' },
      { nome: 'Vaniglia', quantita: 1, unita: 'bacca' }
    ],
    procedimento: [
      {
        numero: 1,
        descrizione: 'Scalda latte e panna con la vaniglia fino a 80°C senza bollire.',
        tempoCottura: 10
      },
      {
        numero: 2,
        descrizione: 'Sbatti i tuorli con lo zucchero fino a ottenere un composto chiaro e spumoso.',
      },
      {
        numero: 3,
        descrizione: 'Versa il latte caldo sui tuorli mescolando continuamente.',
      },
      {
        numero: 4,
        descrizione: 'Riporta sul fuoco dolce e cuoci mescolando fino a 85°C (crema inglese).',
        tempoCottura: 8,
        suggerimenti: 'Non superare 85°C o le uova cuoceranno!'
      },
      {
        numero: 5,
        descrizione: 'Lascia raffreddare completamente, poi versa nella gelatiera e manteca per 30-40 minuti.',
        tempoCottura: 35
      }
    ],
    tempoPreparazione: 20,
    tempoCottura: 53,
    tempoTotale: 73,
    porzioni: 8,
    valoriNutrizionali: {
      calorie: 280,
      proteine: 6,
      carboidrati: 24,
      grassi: 18
    },
    commenti: [],
    valutazioneMedia: 4.8,
    numeroValutazioni: 765,
    numeroPreferiti: 1987,
    dataCreazione: new Date('2024-01-19'),
    dataUltimaModifica: new Date('2024-01-19'),
    autore: 'Gelateria Artigianale',
    tags: ['gelato', 'crema', 'artigianale', 'dolce', 'freddo'],
    visualizzazioni: 8765
  },

  {
    id: '20',
    titolo: 'Polpette al Sugo',
    descrizione: 'Polpette di carne morbide cotte nel sugo di pomodoro.',
    fotoUrl: '🍝',
    difficolta: DifficoltaRicetta.FACILE,
    tipo: TipoRicetta.SECONDI,
    regione: RegioneItaliana.CAMPANIA,
    filtriAlimentari: [],
    ingredienti: [
      { nome: 'Carne macinata', quantita: 500, unita: 'g', note: 'mista' },
      { nome: 'Pane raffermo', quantita: 100, unita: 'g' },
      { nome: 'Latte', quantita: 100, unita: 'ml' },
      { nome: 'Uova', quantita: 2, unita: 'pz' },
      { nome: 'Parmigiano', quantita: 50, unita: 'g' },
      { nome: 'Prezzemolo', quantita: 1, unita: 'mazzo' },
      { nome: 'Aglio', quantita: 1, unita: 'spicchio' },
      { nome: 'Passata di pomodoro', quantita: 700, unita: 'g' },
      { nome: 'Basilico', quantita: 10, unita: 'foglie' }
    ],
    procedimento: [
      {
        numero: 1,
        descrizione: 'Ammolla il pane nel latte. Mescola carne, pane strizzato, uova, parmigiano, prezzemolo e aglio.',
      },
      {
        numero: 2,
        descrizione: 'Forma delle polpette della dimensione di una noce e passale nella farina.',
      },
      {
        numero: 3,
        descrizione: 'Rosola le polpette in padella con olio fino a doratura.',
        tempoCottura: 8
      },
      {
        numero: 4,
        descrizione: 'Aggiungi la passata di pomodoro e il basilico. Sala e cuoci a fuoco dolce per 30 minuti.',
        tempoCottura: 30
      },
      {
        numero: 5,
        descrizione: 'Servi con pasta o pane per fare la scarpetta nel sugo!',
        suggerimenti: 'Le polpette devono essere morbide: non stringerle troppo!'
      }
    ],
    tempoPreparazione: 25,
    tempoCottura: 40,
    tempoTotale: 65,
    porzioni: 4,
    valoriNutrizionali: {
      calorie: 420,
      proteine: 32,
      carboidrati: 22,
      grassi: 22
    },
    commenti: [],
    valutazioneMedia: 4.7,
    numeroValutazioni: 654,
    numeroPreferiti: 1765,
    dataCreazione: new Date('2024-01-20'),
    dataUltimaModifica: new Date('2024-01-20'),
    autore: 'Cucina della Nonna',
    tags: ['polpette', 'sugo', 'carne', 'tradizionale'],
    visualizzazioni: 7654
  },

  // ============ NUOVE RICETTE ITALIANE CLASSICHE ============

  {
    id: '21',
    titolo: 'Risotto alla Milanese',
    descrizione: 'Il risotto lombardo per eccellenza, cremoso e dorato con il prezioso zafferano.',
    fotoUrl: '🍚',
    difficolta: DifficoltaRicetta.MEDIA,
    tipo: TipoRicetta.PRIMI,
    regione: RegioneItaliana.LOMBARDIA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO],
    ingredienti: [
      { nome: 'Riso Carnaroli', quantita: 320, unita: 'g' },
      { nome: 'Zafferano', quantita: 1, unita: 'bustina' },
      { nome: 'Brodo di carne', quantita: 1, unita: 'L' },
      { nome: 'Cipolla', quantita: 1, unita: 'pz' },
      { nome: 'Burro', quantita: 80, unita: 'g' },
      { nome: 'Parmigiano', quantita: 100, unita: 'g' },
      { nome: 'Vino bianco', quantita: 100, unita: 'ml' },
      { nome: 'Sale', quantita: 1, unita: 'q.b.' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Trita finemente la cipolla e falla imbiondire nel burro.', tempoCottura: 5 },
      { numero: 2, descrizione: 'Aggiungi il riso e tostalo per 2-3 minuti mescolando.', tempoCottura: 3 },
      { numero: 3, descrizione: 'Sfuma con il vino bianco e lascia evaporare.', tempoCottura: 2 },
      { numero: 4, descrizione: 'Aggiungi il brodo un mestolo alla volta, mescolando continuamente.', tempoCottura: 16 },
      { numero: 5, descrizione: 'A metà cottura, sciogli lo zafferano in un po\' di brodo e aggiungilo al risotto.' },
      { numero: 6, descrizione: 'Manteca con burro e parmigiano per 2 minuti a fuoco spento.' }
    ],
    tempoPreparazione: 10,
    tempoCottura: 25,
    tempoTotale: 35,
    porzioni: 4,
    valoriNutrizionali: { calorie: 450, proteine: 12, carboidrati: 65, grassi: 15 },
    commenti: [],
    valutazioneMedia: 4.8,
    numeroValutazioni: 982,
    numeroPreferiti: 2841,
    dataCreazione: new Date('2024-02-01'),
    dataUltimaModifica: new Date('2024-02-01'),
    autore: 'Chef Milanese',
    tags: ['risotto', 'zafferano', 'milanese', 'lombardia'],
    visualizzazioni: 12543,
    isPopolari: true
  },

  {
    id: '22',
    titolo: 'Pizza Margherita',
    descrizione: 'La pizza napoletana più famosa al mondo: pomodoro, mozzarella e basilico.',
    fotoUrl: '🍕',
    difficolta: DifficoltaRicetta.MEDIA,
    tipo: TipoRicetta.PRIMI,
    regione: RegioneItaliana.CAMPANIA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO],
    ingredienti: [
      { nome: 'Farina 00', quantita: 500, unita: 'g' },
      { nome: 'Acqua', quantita: 300, unita: 'ml' },
      { nome: 'Lievito di birra', quantita: 3, unita: 'g' },
      { nome: 'Sale', quantita: 10, unita: 'g' },
      { nome: 'Passata di pomodoro', quantita: 300, unita: 'g' },
      { nome: 'Mozzarella', quantita: 250, unita: 'g' },
      { nome: 'Basilico fresco', quantita: 10, unita: 'foglie' },
      { nome: 'Olio extravergine', quantita: 4, unita: 'cucchiai' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Prepara l\'impasto mescolando farina, acqua, lievito e sale. Impasta fino a ottenere un composto liscio.' },
      { numero: 2, descrizione: 'Lascia lievitare l\'impasto coperto per 2 ore a temperatura ambiente.' },
      { numero: 3, descrizione: 'Stendi l\'impasto in una teglia rotonda, creando un bordo più spesso.' },
      { numero: 4, descrizione: 'Distribuisci la passata di pomodoro, aggiungi la mozzarella a pezzi e un filo d\'olio.' },
      { numero: 5, descrizione: 'Inforna a 250°C per 12-15 minuti fino a doratura.', tempoCottura: 15 },
      { numero: 6, descrizione: 'Sforna e guarnisci con basilico fresco.' }
    ],
    tempoPreparazione: 20,
    tempoCottura: 15,
    tempoTotale: 155,
    porzioni: 2,
    valoriNutrizionali: { calorie: 680, proteine: 28, carboidrati: 95, grassi: 22 },
    commenti: [],
    valutazioneMedia: 4.9,
    numeroValutazioni: 3241,
    numeroPreferiti: 8932,
    dataCreazione: new Date('2024-02-02'),
    dataUltimaModifica: new Date('2024-02-02'),
    autore: 'Pizzaiolo Napoletano',
    tags: ['pizza', 'margherita', 'napoletana', 'pomodoro', 'mozzarella'],
    visualizzazioni: 28765,
    isPopolari: true,
    isRicettaDelGiorno: false
  },

  {
    id: '23',
    titolo: 'Arancini Siciliani',
    descrizione: 'Le famose palle di riso fritte ripiene di ragù, piselli e mozzarella.',
    fotoUrl: '🍙',
    difficolta: DifficoltaRicetta.DIFFICILE,
    tipo: TipoRicetta.ANTIPASTI,
    regione: RegioneItaliana.SICILIA,
    filtriAlimentari: [],
    ingredienti: [
      { nome: 'Riso per risotto', quantita: 400, unita: 'g' },
      { nome: 'Zafferano', quantita: 1, unita: 'bustina' },
      { nome: 'Carne macinata', quantita: 300, unita: 'g' },
      { nome: 'Piselli', quantita: 150, unita: 'g' },
      { nome: 'Passata di pomodoro', quantita: 200, unita: 'g' },
      { nome: 'Mozzarella', quantita: 150, unita: 'g' },
      { nome: 'Pangrattato', quantita: 200, unita: 'g' },
      { nome: 'Uova', quantita: 2, unita: 'pz' },
      { nome: 'Olio per friggere', quantita: 1, unita: 'L' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Cuoci il riso in brodo con lo zafferano, lascialo raffreddare.', tempoCottura: 18 },
      { numero: 2, descrizione: 'Prepara il ragù con carne, pomodoro e piselli.', tempoCottura: 30 },
      { numero: 3, descrizione: 'Forma delle palle di riso, crea una cavità e riempi con ragù e mozzarella.' },
      { numero: 4, descrizione: 'Passa gli arancini nell\'uovo sbattuto e poi nel pangrattato.' },
      { numero: 5, descrizione: 'Friggi in abbondante olio caldo finché dorati.', tempoCottura: 8 },
      { numero: 6, descrizione: 'Scola su carta assorbente e servi caldi.' }
    ],
    tempoPreparazione: 40,
    tempoCottura: 56,
    tempoTotale: 96,
    porzioni: 8,
    valoriNutrizionali: { calorie: 380, proteine: 18, carboidrati: 42, grassi: 16 },
    commenti: [],
    valutazioneMedia: 4.7,
    numeroValutazioni: 876,
    numeroPreferiti: 2341,
    dataCreazione: new Date('2024-02-03'),
    dataUltimaModifica: new Date('2024-02-03'),
    autore: 'Nonna Siciliana',
    tags: ['arancini', 'sicilia', 'fritti', 'riso', 'ragù'],
    visualizzazioni: 9876,
    isPopolari: true
  },

  {
    id: '24',
    titolo: 'Parmigiana di Melanzane',
    descrizione: 'Il classico piatto del Sud Italia con melanzane fritte, pomodoro e mozzarella.',
    fotoUrl: '🍆',
    difficolta: DifficoltaRicetta.MEDIA,
    tipo: TipoRicetta.SECONDI,
    regione: RegioneItaliana.SICILIA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO],
    ingredienti: [
      { nome: 'Melanzane', quantita: 1000, unita: 'g' },
      { nome: 'Passata di pomodoro', quantita: 500, unita: 'g' },
      { nome: 'Mozzarella', quantita: 300, unita: 'g' },
      { nome: 'Parmigiano', quantita: 100, unita: 'g' },
      { nome: 'Basilico', quantita: 1, unita: 'mazzo' },
      { nome: 'Olio per friggere', quantita: 500, unita: 'ml' },
      { nome: 'Aglio', quantita: 2, unita: 'spicchi' },
      { nome: 'Sale', quantita: 1, unita: 'q.b.' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Taglia le melanzane a fette di 5mm, cospar gile di sale e lasciale spurgare per 30 minuti.' },
      { numero: 2, descrizione: 'Sciacqua e asciuga le melanzane, poi friggile in olio caldo.', tempoCottura: 15 },
      { numero: 3, descrizione: 'Prepara un sugo con pomodoro, aglio e basilico.', tempoCottura: 20 },
      { numero: 4, descrizione: 'In una teglia, alterna strati di melanzane, sugo, mozzarella e parmigiano.' },
      { numero: 5, descrizione: 'Inforna a 180°C per 30 minuti.', tempoCottura: 30 },
      { numero: 6, descrizione: 'Lascia riposare 10 minuti prima di servire.' }
    ],
    tempoPreparazione: 45,
    tempoCottura: 65,
    tempoTotale: 110,
    porzioni: 6,
    valoriNutrizionali: { calorie: 420, proteine: 18, carboidrati: 28, grassi: 28 },
    commenti: [],
    valutazioneMedia: 4.8,
    numeroValutazioni: 1543,
    numeroPreferiti: 4231,
    dataCreazione: new Date('2024-02-04'),
    dataUltimaModifica: new Date('2024-02-04'),
    autore: 'Cucina del Sud',
    tags: ['parmigiana', 'melanzane', 'sicilia', 'vegetariano'],
    visualizzazioni: 16782,
    isPopolari: true
  },

  {
    id: '25',
    titolo: 'Ossobuco alla Milanese',
    descrizione: 'Il secondo piatto milanese per eccellenza, tenero e saporito con la gremolata.',
    fotoUrl: '🍖',
    difficolta: DifficoltaRicetta.MEDIA,
    tipo: TipoRicetta.SECONDI,
    regione: RegioneItaliana.LOMBARDIA,
    filtriAlimentari: [],
    ingredienti: [
      { nome: 'Ossobuco di vitello', quantita: 4, unita: 'fette' },
      { nome: 'Farina', quantita: 50, unita: 'g' },
      { nome: 'Burro', quantita: 50, unita: 'g' },
      { nome: 'Vino bianco', quantita: 200, unita: 'ml' },
      { nome: 'Brodo di carne', quantita: 500, unita: 'ml' },
      { nome: 'Cipolla', quantita: 1, unita: 'pz' },
      { nome: 'Carota', quantita: 1, unita: 'pz' },
      { nome: 'Sedano', quantita: 1, unita: 'gambo' },
      { nome: 'Prezzemolo', quantita: 1, unita: 'mazzo' },
      { nome: 'Limone', quantita: 1, unita: 'pz' },
      { nome: 'Aglio', quantita: 1, unita: 'spicchio' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Infaritarle fette di ossobuco e rosolarle nel burro finché dorate.', tempoCottura: 10 },
      { numero: 2, descrizione: 'Aggiungi il soffritto di cipolla, carota e sedano.' },
      { numero: 3, descrizione: 'Sfuma con vino bianco e lascia evaporare.' },
      { numero: 4, descrizione: 'Aggiungi il brodo e cuoci a fuoco lento coperto per 1.5 ore.', tempoCottura: 90 },
      { numero: 5, descrizione: 'Prepara la gremolata tritando prezzemolo, scorza di limone e aglio.' },
      { numero: 6, descrizione: 'Servi l\'ossobuco con la gremolata sopra.' }
    ],
    tempoPreparazione: 20,
    tempoCottura: 100,
    tempoTotale: 120,
    porzioni: 4,
    valoriNutrizionali: { calorie: 580, proteine: 45, carboidrati: 12, grassi: 38 },
    commenti: [],
    valutazioneMedia: 4.9,
    numeroValutazioni: 764,
    numeroPreferiti: 1987,
    dataCreazione: new Date('2024-02-05'),
    dataUltimaModifica: new Date('2024-02-05'),
    autore: 'Trattoria Milanese',
    tags: ['ossobuco', 'milanese', 'vitello', 'lombardia'],
    visualizzazioni: 8765,
    isPopolari: true
  },

  {
    id: '26',
    titolo: 'Spaghetti all\'Amatriciana',
    descrizione: 'Pasta con guanciale croccante, pomodoro e pecorino romano - la gloria di Amatrice.',
    fotoUrl: '🍝',
    difficolta: DifficoltaRicetta.FACILE,
    tipo: TipoRicetta.PRIMI,
    regione: RegioneItaliana.LAZIO,
    filtriAlimentari: [],
    ingredienti: [
      { nome: 'Spaghetti', quantita: 400, unita: 'g' },
      { nome: 'Guanciale', quantita: 150, unita: 'g' },
      { nome: 'Pomodori pelati', quantita: 400, unita: 'g' },
      { nome: 'Pecorino Romano', quantita: 80, unita: 'g' },
      { nome: 'Vino bianco', quantita: 50, unita: 'ml' },
      { nome: 'Peperoncino', quantita: 1, unita: 'pz' },
      { nome: 'Sale', quantita: 1, unita: 'qb' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Taglia il guanciale a listarelle e rosola in padella fino a quando diventa croccante.', tempoCottura: 8 },
      { numero: 2, descrizione: 'Sfuma con vino bianco e lascia evaporare.' },
      { numero: 3, descrizione: 'Aggiungi i pomodori pelati schiacciati e il peperoncino. Cuoci 15 minuti.', tempoCottura: 15 },
      { numero: 4, descrizione: 'Cuoci gli spaghetti al dente in acqua salata bollente.', tempoCottura: 9 },
      { numero: 5, descrizione: 'Scola la pasta e mantecala nel sugo. Aggiungi pecorino grattugiato.' },
      { numero: 6, descrizione: 'Servi con altro pecorino e peperoncino a piacere.' }
    ],
    tempoPreparazione: 10,
    tempoCottura: 25,
    tempoTotale: 35,
    porzioni: 4,
    valoriNutrizionali: { calorie: 520, proteine: 18, carboidrati: 72, grassi: 18 },
    commenti: [],
    valutazioneMedia: 4.8,
    numeroValutazioni: 2156,
    numeroPreferiti: 4321,
    dataCreazione: new Date('2024-02-06'),
    dataUltimaModifica: new Date('2024-02-06'),
    autore: 'Trattoria Romana',
    tags: ['amatriciana', 'pasta', 'guanciale', 'lazio'],
    visualizzazioni: 15234,
    isPopolari: true
  },

  {
    id: '27',
    titolo: 'Spaghetti alle Vongole',
    descrizione: 'Pasta con vongole veraci, aglio, prezzemolo e peperoncino - il mare nel piatto.',
    fotoUrl: '🦪',
    difficolta: DifficoltaRicetta.MEDIA,
    tipo: TipoRicetta.PRIMI,
    regione: RegioneItaliana.CAMPANIA,
    filtriAlimentari: [FiltroAlimentare.PESCE],
    ingredienti: [
      { nome: 'Spaghetti', quantita: 400, unita: 'g' },
      { nome: 'Vongole veraci', quantita: 1, unita: 'kg' },
      { nome: 'Aglio', quantita: 3, unita: 'spicchi' },
      { nome: 'Prezzemolo fresco', quantita: 1, unita: 'mazzo' },
      { nome: 'Vino bianco', quantita: 100, unita: 'ml' },
      { nome: 'Olio extravergine', quantita: 80, unita: 'ml' },
      { nome: 'Peperoncino', quantita: 1, unita: 'pz' },
      { nome: 'Sale', quantita: 1, unita: 'qb' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Lascia spurgare le vongole in acqua salata per 2 ore.', tempoCottura: 120 },
      { numero: 2, descrizione: 'Rosola aglio e peperoncino in olio, poi aggiungi le vongole.', tempoCottura: 3 },
      { numero: 3, descrizione: 'Sfuma con vino bianco e copri. Cuoci finché si aprono le vongole.', tempoCottura: 5 },
      { numero: 4, descrizione: 'Cuoci gli spaghetti al dente e scolali conservando un po\' d\'acqua.', tempoCottura: 9 },
      { numero: 5, descrizione: 'Salta la pasta con le vongole, aggiungi prezzemolo tritato.' },
      { numero: 6, descrizione: 'Manteca con un filo d\'olio crudo e servi subito.' }
    ],
    tempoPreparazione: 130,
    tempoCottura: 20,
    tempoTotale: 150,
    porzioni: 4,
    valoriNutrizionali: { calorie: 450, proteine: 22, carboidrati: 68, grassi: 12 },
    commenti: [],
    valutazioneMedia: 4.9,
    numeroValutazioni: 3245,
    numeroPreferiti: 5876,
    dataCreazione: new Date('2024-02-07'),
    dataUltimaModifica: new Date('2024-02-07'),
    autore: 'Trattoria Napoletana',
    tags: ['vongole', 'spaghetti', 'pesce', 'campania'],
    visualizzazioni: 18765,
    isPopolari: true
  },

  {
    id: '28',
    titolo: 'Focaccia Genovese',
    descrizione: 'Focaccia alta e soffice con olio extravergine e sale grosso - la regina della Liguria.',
    fotoUrl: '🥖',
    difficolta: DifficoltaRicetta.MEDIA,
    tipo: TipoRicetta.ANTIPASTI,
    regione: RegioneItaliana.LIGURIA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO],
    ingredienti: [
      { nome: 'Farina 0', quantita: 500, unita: 'g' },
      { nome: 'Acqua tiepida', quantita: 300, unita: 'ml' },
      { nome: 'Olio extravergine', quantita: 100, unita: 'ml' },
      { nome: 'Lievito di birra', quantita: 15, unita: 'g' },
      { nome: 'Sale fino', quantita: 10, unita: 'g' },
      { nome: 'Sale grosso', quantita: 1, unita: 'qb' },
      { nome: 'Zucchero', quantita: 5, unita: 'g' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Sciogli lievito e zucchero in acqua tiepida.' },
      { numero: 2, descrizione: 'Impasta farina, acqua con lievito, 50ml olio e sale fino.', tempoCottura: 10 },
      { numero: 3, descrizione: 'Fai lievitare coperto per 2-3 ore finché raddoppia.', tempoCottura: 150 },
      { numero: 4, descrizione: 'Stendi l\'impasto in teglia unta, fai buchi con le dita.' },
      { numero: 5, descrizione: 'Versa olio sulla superficie e lascia riposare 30 minuti.', tempoCottura: 30 },
      { numero: 6, descrizione: 'Cospargi sale grosso e inforna a 220°C per 20 minuti.', tempoCottura: 20 }
    ],
    tempoPreparazione: 30,
    tempoCottura: 210,
    tempoTotale: 240,
    porzioni: 8,
    valoriNutrizionali: { calorie: 280, proteine: 6, carboidrati: 42, grassi: 10 },
    commenti: [],
    valutazioneMedia: 4.7,
    numeroValutazioni: 1876,
    numeroPreferiti: 3456,
    dataCreazione: new Date('2024-02-08'),
    dataUltimaModifica: new Date('2024-02-08'),
    autore: 'Forno Genovese',
    tags: ['focaccia', 'liguria', 'pane', 'lievitati'],
    visualizzazioni: 12345
  },

  {
    id: '29',
    titolo: 'Bistecca alla Fiorentina',
    descrizione: 'Taglio di carne di razza chianina cotto alla brace - l\'orgoglio della Toscana.',
    fotoUrl: '🥩',
    difficolta: DifficoltaRicetta.MEDIA,
    tipo: TipoRicetta.SECONDI,
    regione: RegioneItaliana.TOSCANA,
    filtriAlimentari: [FiltroAlimentare.SENZA_GLUTINE, FiltroAlimentare.SENZA_LATTOSIO],
    ingredienti: [
      { nome: 'Bistecca con osso (Chianina)', quantita: 1200, unita: 'g', note: 'alta 4-5cm' },
      { nome: 'Sale grosso', quantita: 1, unita: 'qb' },
      { nome: 'Pepe nero', quantita: 1, unita: 'qb' },
      { nome: 'Olio extravergine', quantita: 30, unita: 'ml' },
      { nome: 'Limone', quantita: 1, unita: 'pz', note: 'opzionale' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Porta la bistecca a temperatura ambiente 1 ora prima.' },
      { numero: 2, descrizione: 'Prepara brace ardente con carbonella o legna di quercia.' },
      { numero: 3, descrizione: 'Griglia la bistecca 5 minuti per lato a fiamma alta.', tempoCottura: 10 },
      { numero: 4, descrizione: 'Metti in piedi sull\'osso per 2-3 minuti.', tempoCottura: 3 },
      { numero: 5, descrizione: 'Sala abbondantemente su entrambi i lati.' },
      { numero: 6, descrizione: 'Servi al sangue con filo d\'olio e pepe (limone opzionale).' }
    ],
    tempoPreparazione: 5,
    tempoCottura: 13,
    tempoTotale: 18,
    porzioni: 2,
    valoriNutrizionali: { calorie: 680, proteine: 72, carboidrati: 0, grassi: 42 },
    commenti: [],
    valutazioneMedia: 4.9,
    numeroValutazioni: 2987,
    numeroPreferiti: 4567,
    dataCreazione: new Date('2024-02-09'),
    dataUltimaModifica: new Date('2024-02-09'),
    autore: 'Macelleria Toscana',
    tags: ['bistecca', 'fiorentina', 'carne', 'toscana'],
    visualizzazioni: 16543,
    isPopolari: true
  },

  {
    id: '30',
    titolo: 'Tiramisù Classico',
    descrizione: 'Il dolce italiano più famoso al mondo con savoiardi, mascarpone e caffè.',
    fotoUrl: '🍰',
    difficolta: DifficoltaRicetta.FACILE,
    tipo: TipoRicetta.DOLCI,
    regione: RegioneItaliana.VENETO,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO],
    ingredienti: [
      { nome: 'Savoiardi', quantita: 300, unita: 'g' },
      { nome: 'Mascarpone', quantita: 500, unita: 'g' },
      { nome: 'Uova fresche', quantita: 4, unita: 'pz' },
      { nome: 'Zucchero', quantita: 100, unita: 'g' },
      { nome: 'Caffè espresso', quantita: 300, unita: 'ml' },
      { nome: 'Cacao amaro', quantita: 30, unita: 'g' },
      { nome: 'Marsala', quantita: 30, unita: 'ml', note: 'opzionale' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Prepara caffè espresso e lascia raffreddare completamente.' },
      { numero: 2, descrizione: 'Separa tuorli e albumi. Monta i tuorli con 70g di zucchero.' },
      { numero: 3, descrizione: 'Aggiungi il mascarpone ai tuorli montati e mescola delicatamente.' },
      { numero: 4, descrizione: 'Monta gli albumi a neve con 30g di zucchero fino a picchi fermi.' },
      { numero: 5, descrizione: 'Incorpora albumi alla crema di mascarpone con movimenti dal basso.' },
      { numero: 6, descrizione: 'Inzuppa i savoiardi nel caffè e crea il primo strato in pirofila.' },
      { numero: 7, descrizione: 'Copri con crema al mascarpone e ripeti per secondo strato.' },
      { numero: 8, descrizione: 'Copri con pellicola e riponi in frigo per almeno 4 ore.', tempoCottura: 240 },
      { numero: 9, descrizione: 'Prima di servire, spolvera abbondante cacao amaro.' }
    ],
    tempoPreparazione: 30,
    tempoCottura: 240,
    tempoTotale: 270,
    porzioni: 8,
    valoriNutrizionali: { calorie: 380, proteine: 8, carboidrati: 35, grassi: 22 },
    commenti: [],
    valutazioneMedia: 4.9,
    numeroValutazioni: 4567,
    numeroPreferiti: 8765,
    dataCreazione: new Date('2024-02-10'),
    dataUltimaModifica: new Date('2024-02-10'),
    autore: 'Pasticceria Veneta',
    tags: ['tiramisù', 'dolce', 'mascarpone', 'veneto'],
    visualizzazioni: 23456,
    isPopolari: true
  },

  {
    id: '31',
    titolo: 'Pasta alla Norma',
    descrizione: 'Pasta con melanzane fritte, pomodoro e ricotta salata - omaggio a Bellini.',
    fotoUrl: '🍆',
    difficolta: DifficoltaRicetta.FACILE,
    tipo: TipoRicetta.PRIMI,
    regione: RegioneItaliana.SICILIA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO],
    ingredienti: [
      { nome: 'Pasta (rigatoni o penne)', quantita: 400, unita: 'g' },
      { nome: 'Melanzane', quantita: 2, unita: 'pz', note: 'medie' },
      { nome: 'Pomodori pelati', quantita: 400, unita: 'g' },
      { nome: 'Ricotta salata', quantita: 100, unita: 'g' },
      { nome: 'Basilico fresco', quantita: 1, unita: 'mazzo' },
      { nome: 'Aglio', quantita: 2, unita: 'spicchi' },
      { nome: 'Olio per friggere', quantita: 500, unita: 'ml' },
      { nome: 'Olio extravergine', quantita: 50, unita: 'ml' },
      { nome: 'Sale', quantita: 1, unita: 'qb' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Taglia le melanzane a cubetti, salale e lasciale spurgare 30 minuti.' },
      { numero: 2, descrizione: 'Asciuga le melanzane e friggile in olio bollente fino a doratura.', tempoCottura: 15 },
      { numero: 3, descrizione: 'Prepara il sugo: rosola aglio in olio, aggiungi pomodori e basilico.', tempoCottura: 20 },
      { numero: 4, descrizione: 'Cuoci la pasta al dente in acqua salata bollente.', tempoCottura: 10 },
      { numero: 5, descrizione: 'Scola la pasta e condiscila con sugo e melanzane fritte.' },
      { numero: 6, descrizione: 'Servi con ricotta salata grattugiata e basilico fresco.' }
    ],
    tempoPreparazione: 40,
    tempoCottura: 45,
    tempoTotale: 85,
    porzioni: 4,
    valoriNutrizionali: { calorie: 520, proteine: 16, carboidrati: 75, grassi: 18 },
    commenti: [],
    valutazioneMedia: 4.8,
    numeroValutazioni: 2345,
    numeroPreferiti: 4123,
    dataCreazione: new Date('2024-02-11'),
    dataUltimaModifica: new Date('2024-02-11'),
    autore: 'Trattoria Catanese',
    tags: ['norma', 'pasta', 'melanzane', 'sicilia'],
    visualizzazioni: 14567,
    isPopolari: true
  },

  {
    id: '32',
    titolo: 'Cacio e Pepe',
    descrizione: 'La semplicità romana: solo pasta, pecorino, pepe e acqua di cottura.',
    fotoUrl: '🧀',
    difficolta: DifficoltaRicetta.MEDIA,
    tipo: TipoRicetta.PRIMI,
    regione: RegioneItaliana.LAZIO,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO],
    ingredienti: [
      { nome: 'Spaghetti o tonnarelli', quantita: 400, unita: 'g' },
      { nome: 'Pecorino Romano', quantita: 200, unita: 'g' },
      { nome: 'Pepe nero in grani', quantita: 20, unita: 'g' },
      { nome: 'Sale', quantita: 1, unita: 'qb' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Tosta il pepe in grani in padella e pestalo grossolanamente.', tempoCottura: 2 },
      { numero: 2, descrizione: 'Cuoci la pasta al dente, conservando 2 tazze di acqua di cottura.', tempoCottura: 9 },
      { numero: 3, descrizione: 'Grattugia finemente il pecorino e mettilo in una ciotola.' },
      { numero: 4, descrizione: 'Scola la pasta 2 minuti prima del tempo e trasferiscila in padella.' },
      { numero: 5, descrizione: 'Aggiungi pepe e acqua di cottura, manteca vigorosamente.' },
      { numero: 6, descrizione: 'Togli dal fuoco, aggiungi pecorino e manteca fino a crema vellutata.' },
      { numero: 7, descrizione: 'Servi immediatamente con altro pecorino e pepe.' }
    ],
    tempoPreparazione: 5,
    tempoCottura: 12,
    tempoTotale: 17,
    porzioni: 4,
    valoriNutrizionali: { calorie: 480, proteine: 22, carboidrati: 68, grassi: 14 },
    commenti: [],
    valutazioneMedia: 4.7,
    numeroValutazioni: 3456,
    numeroPreferiti: 5678,
    dataCreazione: new Date('2024-02-12'),
    dataUltimaModifica: new Date('2024-02-12'),
    autore: 'Osteria Romana',
    tags: ['cacio', 'pepe', 'pecorino', 'lazio'],
    visualizzazioni: 19876,
    isPopolari: true
  },

  {
    id: '33',
    titolo: 'Ribollita Toscana',
    descrizione: 'Zuppa di cavolo nero, fagioli e pane raffermo - il comfort food toscano.',
    fotoUrl: '🥣',
    difficolta: DifficoltaRicetta.FACILE,
    tipo: TipoRicetta.PRIMI,
    regione: RegioneItaliana.TOSCANA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO, FiltroAlimentare.VEGANO],
    ingredienti: [
      { nome: 'Fagioli cannellini', quantita: 300, unita: 'g', note: 'secchi ammollati' },
      { nome: 'Cavolo nero', quantita: 300, unita: 'g' },
      { nome: 'Pane toscano raffermo', quantita: 200, unita: 'g' },
      { nome: 'Pomodori pelati', quantita: 200, unita: 'g' },
      { nome: 'Carote', quantita: 2, unita: 'pz' },
      { nome: 'Sedano', quantita: 2, unita: 'coste' },
      { nome: 'Cipolla', quantita: 1, unita: 'pz' },
      { nome: 'Aglio', quantita: 2, unita: 'spicchi' },
      { nome: 'Olio extravergine', quantita: 80, unita: 'ml' },
      { nome: 'Brodo vegetale', quantita: 1.5, unita: 'l' },
      { nome: 'Sale e pepe', quantita: 1, unita: 'qb' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Lessare i fagioli in acqua per 1.5 ore fino a morbidi.', tempoCottura: 90 },
      { numero: 2, descrizione: 'Soffriggi cipolla, carota, sedano e aglio tritati in olio.', tempoCottura: 10 },
      { numero: 3, descrizione: 'Aggiungi cavolo nero tagliato, fagioli, pomodori e brodo.', tempoCottura: 5 },
      { numero: 4, descrizione: 'Cuoci a fuoco lento per 40 minuti mescolando spesso.', tempoCottura: 40 },
      { numero: 5, descrizione: 'Aggiungi il pane raffermo a pezzi e lascia riposare.' },
      { numero: 6, descrizione: 'Il giorno dopo, riscalda (ribollisci) e servi con olio crudo.', tempoCottura: 10 }
    ],
    tempoPreparazione: 30,
    tempoCottura: 155,
    tempoTotale: 185,
    porzioni: 6,
    valoriNutrizionali: { calorie: 320, proteine: 14, carboidrati: 48, grassi: 10 },
    commenti: [],
    valutazioneMedia: 4.6,
    numeroValutazioni: 1234,
    numeroPreferiti: 2345,
    dataCreazione: new Date('2024-02-13'),
    dataUltimaModifica: new Date('2024-02-13'),
    autore: 'Trattoria Fiorentina',
    tags: ['ribollita', 'zuppa', 'toscana', 'fagioli'],
    visualizzazioni: 9876
  },

  {
    id: '34',
    titolo: 'Cannoli Siciliani',
    descrizione: 'Cialde croccanti ripiene di ricotta dolce con gocce di cioccolato e canditi.',
    fotoUrl: '🥐',
    difficolta: DifficoltaRicetta.DIFFICILE,
    tipo: TipoRicetta.DOLCI,
    regione: RegioneItaliana.SICILIA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO],
    ingredienti: [
      { nome: 'Farina', quantita: 300, unita: 'g' },
      { nome: 'Strutto', quantita: 30, unita: 'g' },
      { nome: 'Marsala', quantita: 80, unita: 'ml' },
      { nome: 'Zucchero', quantita: 30, unita: 'g' },
      { nome: 'Cacao amaro', quantita: 10, unita: 'g' },
      { nome: 'Ricotta di pecora', quantita: 500, unita: 'g' },
      { nome: 'Zucchero a velo', quantita: 150, unita: 'g' },
      { nome: 'Gocce di cioccolato', quantita: 100, unita: 'g' },
      { nome: 'Canditi', quantita: 50, unita: 'g' },
      { nome: 'Pistacchi tritati', quantita: 30, unita: 'g' },
      { nome: 'Olio per friggere', quantita: 1, unita: 'l' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Impasta farina, strutto, zucchero, cacao e Marsala. Riposa 1 ora.' },
      { numero: 2, descrizione: 'Stendi la pasta sottile e ritaglia cerchi di 10cm di diametro.' },
      { numero: 3, descrizione: 'Avvolgi i dischi su cannelli e friggi in olio a 180°C.', tempoCottura: 15 },
      { numero: 4, descrizione: 'Lascia raffreddare e sfila le cialde dai cannelli.' },
      { numero: 5, descrizione: 'Setaccia la ricotta e mescolala con zucchero a velo.' },
      { numero: 6, descrizione: 'Aggiungi gocce di cioccolato e canditi alla crema di ricotta.' },
      { numero: 7, descrizione: 'Riempi i cannoli con la crema usando una sac-à-poche.' },
      { numero: 8, descrizione: 'Decora le estremità con pistacchi tritati e spolverizza zucchero a velo.' }
    ],
    tempoPreparazione: 90,
    tempoCottura: 15,
    tempoTotale: 105,
    porzioni: 12,
    valoriNutrizionali: { calorie: 320, proteine: 8, carboidrati: 38, grassi: 16 },
    commenti: [],
    valutazioneMedia: 4.9,
    numeroValutazioni: 2876,
    numeroPreferiti: 5432,
    dataCreazione: new Date('2024-02-14'),
    dataUltimaModifica: new Date('2024-02-14'),
    autore: 'Pasticceria Palermitana',
    tags: ['cannoli', 'dolce', 'ricotta', 'sicilia'],
    visualizzazioni: 17654,
    isPopolari: true
  },

  {
    id: '35',
    titolo: 'Polenta con Funghi Porcini',
    descrizione: 'Polenta cremosa con funghi porcini trifolati - il calore delle montagne.',
    fotoUrl: '🍄',
    difficolta: DifficoltaRicetta.MEDIA,
    tipo: TipoRicetta.PRIMI,
    regione: RegioneItaliana.LOMBARDIA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO, FiltroAlimentare.SENZA_GLUTINE],
    ingredienti: [
      { nome: 'Farina di mais per polenta', quantita: 300, unita: 'g' },
      { nome: 'Acqua', quantita: 1.5, unita: 'l' },
      { nome: 'Funghi porcini freschi', quantita: 500, unita: 'g' },
      { nome: 'Aglio', quantita: 2, unita: 'spicchi' },
      { nome: 'Prezzemolo', quantita: 1, unita: 'mazzo' },
      { nome: 'Burro', quantita: 80, unita: 'g' },
      { nome: 'Parmigiano', quantita: 100, unita: 'g' },
      { nome: 'Olio extravergine', quantita: 60, unita: 'ml' },
      { nome: 'Sale e pepe', quantita: 1, unita: 'qb' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Porta l\'acqua salata a ebollizione e versa la farina a pioggia.' },
      { numero: 2, descrizione: 'Cuoci la polenta mescolando continuamente per 45 minuti.', tempoCottura: 45 },
      { numero: 3, descrizione: 'Pulisci i funghi con un panno e tagliali a fette.' },
      { numero: 4, descrizione: 'Rosola aglio in olio, aggiungi funghi e cuoci a fuoco vivo.', tempoCottura: 10 },
      { numero: 5, descrizione: 'Aggiungi prezzemolo tritato, sale e pepe ai funghi.' },
      { numero: 6, descrizione: 'Manteca la polenta con burro e parmigiano.' },
      { numero: 7, descrizione: 'Servi la polenta cremosa con i funghi trifolati sopra.' }
    ],
    tempoPreparazione: 15,
    tempoCottura: 55,
    tempoTotale: 70,
    porzioni: 4,
    valoriNutrizionali: { calorie: 420, proteine: 14, carboidrati: 52, grassi: 18 },
    commenti: [],
    valutazioneMedia: 4.7,
    numeroValutazioni: 1567,
    numeroPreferiti: 2987,
    dataCreazione: new Date('2024-02-15'),
    dataUltimaModifica: new Date('2024-02-15'),
    autore: 'Rifugio Montano',
    tags: ['polenta', 'funghi', 'porcini', 'lombardia'],
    visualizzazioni: 11234
  },

  {
    id: '36',
    titolo: 'Vitello Tonnato',
    descrizione: 'Fettine di vitello freddo con salsa tonnata - il classico piemontese.',
    fotoUrl: '🍖',
    difficolta: DifficoltaRicetta.MEDIA,
    tipo: TipoRicetta.SECONDI,
    regione: RegioneItaliana.PIEMONTE,
    filtriAlimentari: [FiltroAlimentare.SENZA_GLUTINE, FiltroAlimentare.SENZA_LATTOSIO],
    ingredienti: [
      { nome: 'Girello di vitello', quantita: 800, unita: 'g' },
      { nome: 'Tonno sott\'olio', quantita: 200, unita: 'g' },
      { nome: 'Acciughe', quantita: 4, unita: 'filetti' },
      { nome: 'Capperi', quantita: 30, unita: 'g' },
      { nome: 'Maionese', quantita: 200, unita: 'g' },
      { nome: 'Vino bianco', quantita: 200, unita: 'ml' },
      { nome: 'Carota, sedano, cipolla', quantita: 1, unita: 'trito' },
      { nome: 'Limone', quantita: 1, unita: 'pz' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Lessa il vitello in acqua con vino, verdure e sale per 90 minuti.', tempoCottura: 90 },
      { numero: 2, descrizione: 'Lascia raffreddare il vitello nel suo brodo.' },
      { numero: 3, descrizione: 'Frulla tonno, acciughe, capperi, maionese e poco brodo di cottura.' },
      { numero: 4, descrizione: 'Taglia il vitello a fette sottili.' },
      { numero: 5, descrizione: 'Disponi le fette in un piatto e coprile con la salsa tonnata.' },
      { numero: 6, descrizione: 'Lascia riposare in frigo 2 ore. Guarnisci con capperi e limone.' }
    ],
    tempoPreparazione: 30,
    tempoCottura: 90,
    tempoTotale: 120,
    porzioni: 6,
    valoriNutrizionali: { calorie: 380, proteine: 38, carboidrati: 2, grassi: 24 },
    commenti: [],
    valutazioneMedia: 4.8,
    numeroValutazioni: 1876,
    numeroPreferiti: 3456,
    dataCreazione: new Date('2024-02-16'),
    dataUltimaModifica: new Date('2024-02-16'),
    autore: 'Trattoria Torinese',
    tags: ['vitello', 'tonnato', 'piemonte', 'freddo'],
    visualizzazioni: 13456,
    isPopolari: true
  },

  {
    id: '37',
    titolo: 'Orecchiette con Cime di Rapa',
    descrizione: 'Pasta tipica pugliese con cime di rapa, aglio e peperoncino.',
    fotoUrl: '🥬',
    difficolta: DifficoltaRicetta.FACILE,
    tipo: TipoRicetta.PRIMI,
    regione: RegioneItaliana.PUGLIA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO, FiltroAlimentare.VEGANO],
    ingredienti: [
      { nome: 'Orecchiette fresche', quantita: 400, unita: 'g' },
      { nome: 'Cime di rapa', quantita: 600, unita: 'g' },
      { nome: 'Aglio', quantita: 4, unita: 'spicchi' },
      { nome: 'Acciughe', quantita: 4, unita: 'filetti', note: 'opzionale' },
      { nome: 'Peperoncino', quantita: 2, unita: 'pz' },
      { nome: 'Olio extravergine', quantita: 80, unita: 'ml' },
      { nome: 'Sale', quantita: 1, unita: 'qb' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Pulisci le cime di rapa e lessale in acqua salata bollente.', tempoCottura: 8 },
      { numero: 2, descrizione: 'Nella stessa acqua, cuoci le orecchiette.', tempoCottura: 12 },
      { numero: 3, descrizione: 'Rosola aglio, peperoncino e acciughe in olio.', tempoCottura: 3 },
      { numero: 4, descrizione: 'Aggiungi le cime di rapa scolate e salta in padella.' },
      { numero: 5, descrizione: 'Scola le orecchiette e mantecale con le cime di rapa.' },
      { numero: 6, descrizione: 'Servi con un filo d\'olio crudo.' }
    ],
    tempoPreparazione: 15,
    tempoCottura: 25,
    tempoTotale: 40,
    porzioni: 4,
    valoriNutrizionali: { calorie: 420, proteine: 14, carboidrati: 68, grassi: 12 },
    commenti: [],
    valutazioneMedia: 4.7,
    numeroValutazioni: 2134,
    numeroPreferiti: 3987,
    dataCreazione: new Date('2024-02-17'),
    dataUltimaModifica: new Date('2024-02-17'),
    autore: 'Trattoria Barese',
    tags: ['orecchiette', 'cime di rapa', 'puglia', 'pasta'],
    visualizzazioni: 15678
  },

  {
    id: '38',
    titolo: 'Caprese',
    descrizione: 'Insalata di mozzarella, pomodoro e basilico - semplicità campana.',
    fotoUrl: '🍅',
    difficolta: DifficoltaRicetta.FACILE,
    tipo: TipoRicetta.ANTIPASTI,
    regione: RegioneItaliana.CAMPANIA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO, FiltroAlimentare.SENZA_GLUTINE],
    ingredienti: [
      { nome: 'Mozzarella di bufala', quantita: 400, unita: 'g' },
      { nome: 'Pomodori maturi', quantita: 4, unita: 'pz' },
      { nome: 'Basilico fresco', quantita: 1, unita: 'mazzo' },
      { nome: 'Olio extravergine', quantita: 60, unita: 'ml' },
      { nome: 'Sale', quantita: 1, unita: 'qb' },
      { nome: 'Origano', quantita: 1, unita: 'qb', note: 'opzionale' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Taglia i pomodori a fette di 1cm di spessore.' },
      { numero: 2, descrizione: 'Taglia la mozzarella a fette dello stesso spessore.' },
      { numero: 3, descrizione: 'Alterna fette di pomodoro e mozzarella in un piatto.' },
      { numero: 4, descrizione: 'Disponi foglie di basilico fresco tra le fette.' },
      { numero: 5, descrizione: 'Condisci con olio extravergine, sale e origano.' },
      { numero: 6, descrizione: 'Lascia riposare 10 minuti prima di servire.' }
    ],
    tempoPreparazione: 10,
    tempoCottura: 0,
    tempoTotale: 10,
    porzioni: 4,
    valoriNutrizionali: { calorie: 280, proteine: 16, carboidrati: 6, grassi: 22 },
    commenti: [],
    valutazioneMedia: 4.9,
    numeroValutazioni: 3456,
    numeroPreferiti: 6789,
    dataCreazione: new Date('2024-02-18'),
    dataUltimaModifica: new Date('2024-02-18'),
    autore: 'Ristorante Capri',
    tags: ['caprese', 'mozzarella', 'insalata', 'campania'],
    visualizzazioni: 21345,
    isPopolari: true
  },

  {
    id: '39',
    titolo: 'Panna Cotta',
    descrizione: 'Dolce al cucchiaio piemontese con crema di latte e vaniglia.',
    fotoUrl: '🍮',
    difficolta: DifficoltaRicetta.FACILE,
    tipo: TipoRicetta.DOLCI,
    regione: RegioneItaliana.PIEMONTE,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO, FiltroAlimentare.SENZA_GLUTINE],
    ingredienti: [
      { nome: 'Panna fresca', quantita: 500, unita: 'ml' },
      { nome: 'Latte', quantita: 200, unita: 'ml' },
      { nome: 'Zucchero', quantita: 100, unita: 'g' },
      { nome: 'Gelatina in fogli', quantita: 8, unita: 'g' },
      { nome: 'Vaniglia', quantita: 1, unita: 'bacca' },
      { nome: 'Frutti di bosco', quantita: 200, unita: 'g', note: 'per guarnire' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Ammolla la gelatina in acqua fredda per 10 minuti.' },
      { numero: 2, descrizione: 'Scalda panna, latte, zucchero e vaniglia senza far bollire.', tempoCottura: 5 },
      { numero: 3, descrizione: 'Strizza la gelatina e scioglila nella crema calda.' },
      { numero: 4, descrizione: 'Versa in stampini monoporzione.' },
      { numero: 5, descrizione: 'Lascia raffreddare e metti in frigo per 4 ore.', tempoCottura: 240 },
      { numero: 6, descrizione: 'Sforma e guarnisci con frutti di bosco.' }
    ],
    tempoPreparazione: 15,
    tempoCottura: 245,
    tempoTotale: 260,
    porzioni: 6,
    valoriNutrizionali: { calorie: 320, proteine: 4, carboidrati: 22, grassi: 24 },
    commenti: [],
    valutazioneMedia: 4.8,
    numeroValutazioni: 2987,
    numeroPreferiti: 5432,
    dataCreazione: new Date('2024-02-19'),
    dataUltimaModifica: new Date('2024-02-19'),
    autore: 'Pasticceria Torinese',
    tags: ['panna cotta', 'dolce', 'piemonte', 'vaniglia'],
    visualizzazioni: 17890,
    isPopolari: true
  },

  {
    id: '40',
    titolo: 'Pasta alla Gricia',
    descrizione: 'La versione romana senza pomodoro: guanciale, pecorino e pepe.',
    fotoUrl: '🥓',
    difficolta: DifficoltaRicetta.FACILE,
    tipo: TipoRicetta.PRIMI,
    regione: RegioneItaliana.LAZIO,
    filtriAlimentari: [],
    ingredienti: [
      { nome: 'Rigatoni', quantita: 400, unita: 'g' },
      { nome: 'Guanciale', quantita: 200, unita: 'g' },
      { nome: 'Pecorino Romano', quantita: 150, unita: 'g' },
      { nome: 'Pepe nero', quantita: 1, unita: 'qb' },
      { nome: 'Sale', quantita: 1, unita: 'qb' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Taglia il guanciale a listarelle e rosola fino a croccantezza.', tempoCottura: 10 },
      { numero: 2, descrizione: 'Cuoci i rigatoni al dente in acqua salata.', tempoCottura: 11 },
      { numero: 3, descrizione: 'Grattugia il pecorino finemente.' },
      { numero: 4, descrizione: 'Scola la pasta conservando acqua di cottura.' },
      { numero: 5, descrizione: 'Manteca pasta con guanciale, pecorino e acqua di cottura.' },
      { numero: 6, descrizione: 'Aggiungi abbondante pepe nero e servi.' }
    ],
    tempoPreparazione: 5,
    tempoCottura: 21,
    tempoTotale: 26,
    porzioni: 4,
    valoriNutrizionali: { calorie: 580, proteine: 24, carboidrati: 68, grassi: 24 },
    commenti: [],
    valutazioneMedia: 4.8,
    numeroValutazioni: 2456,
    numeroPreferiti: 4567,
    dataCreazione: new Date('2024-02-20'),
    dataUltimaModifica: new Date('2024-02-20'),
    autore: 'Osteria Romana',
    tags: ['gricia', 'guanciale', 'pecorino', 'lazio'],
    visualizzazioni: 16789,
    isPopolari: true
  },

  {
    id: '41',
    titolo: 'Cassata Siciliana',
    descrizione: 'Torta siciliana con pan di spagna, ricotta e frutta candita.',
    fotoUrl: '🎂',
    difficolta: DifficoltaRicetta.DIFFICILE,
    tipo: TipoRicetta.DOLCI,
    regione: RegioneItaliana.SICILIA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO],
    ingredienti: [
      { nome: 'Pan di Spagna', quantita: 1, unita: 'disco', note: '24cm' },
      { nome: 'Ricotta di pecora', quantita: 800, unita: 'g' },
      { nome: 'Zucchero', quantita: 200, unita: 'g' },
      { nome: 'Gocce di cioccolato', quantita: 150, unita: 'g' },
      { nome: 'Canditi misti', quantita: 150, unita: 'g' },
      { nome: 'Pistacchi', quantita: 80, unita: 'g' },
      { nome: 'Rosolio o Maraschino', quantita: 100, unita: 'ml' },
      { nome: 'Glassa reale verde', quantita: 300, unita: 'g' },
      { nome: 'Marzapane', quantita: 200, unita: 'g' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Setaccia la ricotta e mescola con zucchero, gocce e canditi.' },
      { numero: 2, descrizione: 'Taglia il pan di Spagna in 3 dischi orizzontali.' },
      { numero: 3, descrizione: 'Bagna i dischi con rosolio diluito.' },
      { numero: 4, descrizione: 'Fodera uno stampo con marzapane e disponi il primo disco.' },
      { numero: 5, descrizione: 'Alterna strati di pan di Spagna e crema di ricotta.' },
      { numero: 6, descrizione: 'Lascia rassodare in frigo per 6 ore.', tempoCottura: 360 },
      { numero: 7, descrizione: 'Sforma e ricopri con glassa reale verde.' },
      { numero: 8, descrizione: 'Decora con frutta candita e pistacchi tritati.' }
    ],
    tempoPreparazione: 90,
    tempoCottura: 360,
    tempoTotale: 450,
    porzioni: 12,
    valoriNutrizionali: { calorie: 420, proteine: 10, carboidrati: 52, grassi: 20 },
    commenti: [],
    valutazioneMedia: 4.9,
    numeroValutazioni: 1876,
    numeroPreferiti: 3654,
    dataCreazione: new Date('2024-02-21'),
    dataUltimaModifica: new Date('2024-02-21'),
    autore: 'Pasticceria Palermitana',
    tags: ['cassata', 'sicilia', 'ricotta', 'dolce'],
    visualizzazioni: 14567
  },

  {
    id: '42',
    titolo: 'Tortellini in Brodo',
    descrizione: 'Pasta ripiena emiliana servita nel brodo di carne - tradizione natalizia.',
    fotoUrl: '🥟',
    difficolta: DifficoltaRicetta.DIFFICILE,
    tipo: TipoRicetta.PRIMI,
    regione: RegioneItaliana.EMILIA_ROMAGNA,
    filtriAlimentari: [],
    ingredienti: [
      { nome: 'Tortellini freschi', quantita: 400, unita: 'g' },
      { nome: 'Brodo di carne', quantita: 2, unita: 'l' },
      { nome: 'Parmigiano', quantita: 80, unita: 'g', note: 'grattugiato' },
      { nome: 'Noce moscata', quantita: 1, unita: 'qb' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Prepara un brodo di carne con manzo, pollo e verdure. Cuoci 3 ore.', tempoCottura: 180 },
      { numero: 2, descrizione: 'Filtra il brodo e portalo a bollore.' },
      { numero: 3, descrizione: 'Cuoci i tortellini nel brodo bollente per 3-4 minuti.', tempoCottura: 4 },
      { numero: 4, descrizione: 'Servi in ciotole con il brodo caldo.' },
      { numero: 5, descrizione: 'Aggiungi parmigiano grattugiato e noce moscata.' }
    ],
    tempoPreparazione: 30,
    tempoCottura: 184,
    tempoTotale: 214,
    porzioni: 4,
    valoriNutrizionali: { calorie: 380, proteine: 22, carboidrati: 42, grassi: 14 },
    commenti: [],
    valutazioneMedia: 4.9,
    numeroValutazioni: 3456,
    numeroPreferiti: 6543,
    dataCreazione: new Date('2024-02-22'),
    dataUltimaModifica: new Date('2024-02-22'),
    autore: 'Osteria Bolognese',
    tags: ['tortellini', 'brodo', 'emilia', 'natale'],
    visualizzazioni: 19876,
    isPopolari: true
  },

  {
    id: '43',
    titolo: 'Caponata Siciliana',
    descrizione: 'Contorno agrodolce di melanzane, sedano, capperi e olive.',
    fotoUrl: '🍆',
    difficolta: DifficoltaRicetta.MEDIA,
    tipo: TipoRicetta.CONTORNI,
    regione: RegioneItaliana.SICILIA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO, FiltroAlimentare.VEGANO],
    ingredienti: [
      { nome: 'Melanzane', quantita: 800, unita: 'g' },
      { nome: 'Sedano', quantita: 300, unita: 'g' },
      { nome: 'Pomodoro', quantita: 300, unita: 'g' },
      { nome: 'Olive verdi', quantita: 100, unita: 'g' },
      { nome: 'Capperi', quantita: 50, unita: 'g' },
      { nome: 'Cipolla', quantita: 1, unita: 'pz' },
      { nome: 'Aceto di vino', quantita: 100, unita: 'ml' },
      { nome: 'Zucchero', quantita: 30, unita: 'g' },
      { nome: 'Olio per friggere', quantita: 500, unita: 'ml' },
      { nome: 'Basilico', quantita: 1, unita: 'mazzo' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Taglia le melanzane a cubetti e friggile in olio.', tempoCottura: 15 },
      { numero: 2, descrizione: 'Sbollenta il sedano tagliato a pezzi per 5 minuti.', tempoCottura: 5 },
      { numero: 3, descrizione: 'Rosola la cipolla, aggiungi pomodoro e cuoci 10 minuti.', tempoCottura: 10 },
      { numero: 4, descrizione: 'Aggiungi sedano, melanzane, olive e capperi.' },
      { numero: 5, descrizione: 'Condisci con aceto e zucchero, cuoci 15 minuti.', tempoCottura: 15 },
      { numero: 6, descrizione: 'Lascia riposare. Servi fredda con basilico fresco.' }
    ],
    tempoPreparazione: 30,
    tempoCottura: 45,
    tempoTotale: 75,
    porzioni: 6,
    valoriNutrizionali: { calorie: 220, proteine: 4, carboidrati: 18, grassi: 16 },
    commenti: [],
    valutazioneMedia: 4.7,
    numeroValutazioni: 1678,
    numeroPreferiti: 2987,
    dataCreazione: new Date('2024-02-23'),
    dataUltimaModifica: new Date('2024-02-23'),
    autore: 'Trattoria Catanese',
    tags: ['caponata', 'melanzane', 'sicilia', 'agrodolce'],
    visualizzazioni: 12456
  },

  {
    id: '44',
    titolo: 'Saltimbocca alla Romana',
    descrizione: 'Fettine di vitello con prosciutto e salvia - piatto romano veloce.',
    fotoUrl: '🥩',
    difficolta: DifficoltaRicetta.FACILE,
    tipo: TipoRicetta.SECONDI,
    regione: RegioneItaliana.LAZIO,
    filtriAlimentari: [FiltroAlimentare.SENZA_GLUTINE, FiltroAlimentare.SENZA_LATTOSIO],
    ingredienti: [
      { nome: 'Fettine di vitello', quantita: 8, unita: 'pz' },
      { nome: 'Prosciutto crudo', quantita: 8, unita: 'fette' },
      { nome: 'Salvia fresca', quantita: 16, unita: 'foglie' },
      { nome: 'Burro', quantita: 60, unita: 'g' },
      { nome: 'Vino bianco', quantita: 150, unita: 'ml' },
      { nome: 'Farina', quantita: 50, unita: 'g' },
      { nome: 'Sale e pepe', quantita: 1, unita: 'qb' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Batti leggermente le fettine di vitello.' },
      { numero: 2, descrizione: 'Su ogni fettina metti prosciutto e 2 foglie di salvia. Ferma con stuzzicadenti.' },
      { numero: 3, descrizione: 'Infarinali leggermente.' },
      { numero: 4, descrizione: 'Rosola i saltimbocca nel burro 2 minuti per lato.', tempoCottura: 4 },
      { numero: 5, descrizione: 'Sfuma con vino bianco e lascia ridurre.', tempoCottura: 3 },
      { numero: 6, descrizione: 'Servi con il fondo di cottura.' }
    ],
    tempoPreparazione: 15,
    tempoCottura: 7,
    tempoTotale: 22,
    porzioni: 4,
    valoriNutrizionali: { calorie: 320, proteine: 42, carboidrati: 4, grassi: 14 },
    commenti: [],
    valutazioneMedia: 4.8,
    numeroValutazioni: 2345,
    numeroPreferiti: 4123,
    dataCreazione: new Date('2024-02-24'),
    dataUltimaModifica: new Date('2024-02-24'),
    autore: 'Osteria Romana',
    tags: ['saltimbocca', 'vitello', 'lazio', 'prosciutto'],
    visualizzazioni: 15678,
    isPopolari: true
  },

  {
    id: '45',
    titolo: 'Pasta e Fagioli',
    descrizione: 'Zuppa densa veneta con pasta mista e fagioli borlotti.',
    fotoUrl: '🫘',
    difficolta: DifficoltaRicetta.FACILE,
    tipo: TipoRicetta.PRIMI,
    regione: RegioneItaliana.VENETO,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO, FiltroAlimentare.VEGANO],
    ingredienti: [
      { nome: 'Fagioli borlotti secchi', quantita: 300, unita: 'g' },
      { nome: 'Pasta mista', quantita: 200, unita: 'g' },
      { nome: 'Pomodoro', quantita: 200, unita: 'g' },
      { nome: 'Sedano, carota, cipolla', quantita: 1, unita: 'trito' },
      { nome: 'Aglio', quantita: 2, unita: 'spicchi' },
      { nome: 'Rosmarino', quantita: 2, unita: 'rametti' },
      { nome: 'Olio extravergine', quantita: 60, unita: 'ml' },
      { nome: 'Brodo vegetale', quantita: 1.5, unita: 'l' },
      { nome: 'Sale e pepe', quantita: 1, unita: 'qb' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Ammolla i fagioli per 12 ore, poi lessali per 90 minuti.', tempoCottura: 90 },
      { numero: 2, descrizione: 'Frulla metà dei fagioli con poco brodo.' },
      { numero: 3, descrizione: 'Soffriggi il trito di verdure con aglio e rosmarino.', tempoCottura: 8 },
      { numero: 4, descrizione: 'Aggiungi pomodoro, fagioli interi, crema di fagioli e brodo.', tempoCottura: 5 },
      { numero: 5, descrizione: 'Porta a bollore e aggiungi la pasta. Cuoci 10 minuti.', tempoCottura: 10 },
      { numero: 6, descrizione: 'Servi con olio crudo e pepe nero.' }
    ],
    tempoPreparazione: 20,
    tempoCottura: 113,
    tempoTotale: 133,
    porzioni: 6,
    valoriNutrizionali: { calorie: 340, proteine: 16, carboidrati: 58, grassi: 8 },
    commenti: [],
    valutazioneMedia: 4.7,
    numeroValutazioni: 2876,
    numeroPreferiti: 4321,
    dataCreazione: new Date('2024-02-25'),
    dataUltimaModifica: new Date('2024-02-25'),
    autore: 'Osteria Veneta',
    tags: ['pasta', 'fagioli', 'zuppa', 'veneto'],
    visualizzazioni: 13456
  },

  {
    id: '46',
    titolo: 'Trofie al Pesto',
    descrizione: 'Pasta corta ligure con il vero pesto genovese al mortaio.',
    fotoUrl: '🌿',
    difficolta: DifficoltaRicetta.MEDIA,
    tipo: TipoRicetta.PRIMI,
    regione: RegioneItaliana.LIGURIA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO],
    ingredienti: [
      { nome: 'Trofie fresche', quantita: 400, unita: 'g' },
      { nome: 'Basilico genovese', quantita: 100, unita: 'g' },
      { nome: 'Pinoli', quantita: 30, unita: 'g' },
      { nome: 'Parmigiano', quantita: 50, unita: 'g' },
      { nome: 'Pecorino sardo', quantita: 30, unita: 'g' },
      { nome: 'Aglio', quantita: 1, unita: 'spicchio' },
      { nome: 'Olio extravergine ligure', quantita: 100, unita: 'ml' },
      { nome: 'Sale grosso', quantita: 1, unita: 'qb' },
      { nome: 'Patate', quantita: 200, unita: 'g', note: 'opzionale' },
      { nome: 'Fagiolini', quantita: 150, unita: 'g', note: 'opzionale' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Lava il basilico e asciugalo delicatamente.' },
      { numero: 2, descrizione: 'Nel mortaio, pesta aglio e sale grosso.' },
      { numero: 3, descrizione: 'Aggiungi basilico e pinoli, pesta fino a crema.' },
      { numero: 4, descrizione: 'Incorpora formaggi grattugiati e olio a filo.' },
      { numero: 5, descrizione: 'Cuoci le trofie con patate e fagiolini.', tempoCottura: 12 },
      { numero: 6, descrizione: 'Scola e manteca con il pesto diluito con acqua di cottura.' }
    ],
    tempoPreparazione: 25,
    tempoCottura: 12,
    tempoTotale: 37,
    porzioni: 4,
    valoriNutrizionali: { calorie: 520, proteine: 16, carboidrati: 70, grassi: 20 },
    commenti: [],
    valutazioneMedia: 4.9,
    numeroValutazioni: 4123,
    numeroPreferiti: 7654,
    dataCreazione: new Date('2024-02-26'),
    dataUltimaModifica: new Date('2024-02-26'),
    autore: 'Trattoria Genovese',
    tags: ['trofie', 'pesto', 'liguria', 'basilico'],
    visualizzazioni: 22345,
    isPopolari: true
  },

  {
    id: '47',
    titolo: 'Brasato al Barolo',
    descrizione: 'Carne brasata nel vino Barolo - il secondo piemontese per eccellenza.',
    fotoUrl: '🍷',
    difficolta: DifficoltaRicetta.DIFFICILE,
    tipo: TipoRicetta.SECONDI,
    regione: RegioneItaliana.PIEMONTE,
    filtriAlimentari: [FiltroAlimentare.SENZA_GLUTINE, FiltroAlimentare.SENZA_LATTOSIO],
    ingredienti: [
      { nome: 'Girello di manzo', quantita: 1200, unita: 'g' },
      { nome: 'Vino Barolo', quantita: 750, unita: 'ml' },
      { nome: 'Cipolla, carota, sedano', quantita: 300, unita: 'g' },
      { nome: 'Chiodi di garofano', quantita: 3, unita: 'pz' },
      { nome: 'Bacche di ginepro', quantita: 6, unita: 'pz' },
      { nome: 'Alloro', quantita: 2, unita: 'foglie' },
      { nome: 'Burro', quantita: 50, unita: 'g' },
      { nome: 'Brodo di carne', quantita: 500, unita: 'ml' },
      { nome: 'Sale e pepe', quantita: 1, unita: 'qb' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Metti la carne in marinatura con vino, verdure e spezie per 12 ore.' },
      { numero: 2, descrizione: 'Scola la carne e asciugala. Filtra la marinata.' },
      { numero: 3, descrizione: 'Rosola la carne in burro su tutti i lati.', tempoCottura: 15 },
      { numero: 4, descrizione: 'Aggiungi le verdure della marinata e sfuma col vino filtrato.' },
      { numero: 5, descrizione: 'Aggiungi brodo, copri e cuoci a fuoco lento 3 ore.', tempoCottura: 180 },
      { numero: 6, descrizione: 'Taglia la carne a fette e servi con il sugo ristretto.' }
    ],
    tempoPreparazione: 30,
    tempoCottura: 195,
    tempoTotale: 225,
    porzioni: 6,
    valoriNutrizionali: { calorie: 420, proteine: 48, carboidrati: 4, grassi: 18 },
    commenti: [],
    valutazioneMedia: 4.9,
    numeroValutazioni: 1987,
    numeroPreferiti: 3654,
    dataCreazione: new Date('2024-02-27'),
    dataUltimaModifica: new Date('2024-02-27'),
    autore: 'Ristorante Piemontese',
    tags: ['brasato', 'barolo', 'piemonte', 'vino'],
    visualizzazioni: 16789,
    isPopolari: true
  },

  {
    id: '48',
    titolo: 'Supplì al Telefono',
    descrizione: 'Arancini romani con ragù e mozzarella filante.',
    fotoUrl: '📞',
    difficolta: DifficoltaRicetta.MEDIA,
    tipo: TipoRicetta.ANTIPASTI,
    regione: RegioneItaliana.LAZIO,
    filtriAlimentari: [],
    ingredienti: [
      { nome: 'Riso per risotti', quantita: 400, unita: 'g' },
      { nome: 'Ragù di carne', quantita: 300, unita: 'g' },
      { nome: 'Mozzarella', quantita: 200, unita: 'g' },
      { nome: 'Parmigiano', quantita: 80, unita: 'g' },
      { nome: 'Uova', quantita: 3, unita: 'pz' },
      { nome: 'Pangrattato', quantita: 200, unita: 'g' },
      { nome: 'Olio per friggere', quantita: 1, unita: 'l' },
      { nome: 'Sale', quantita: 1, unita: 'qb' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Cuoci il riso in acqua salata per 15 minuti.', tempoCottura: 15 },
      { numero: 2, descrizione: 'Scola il riso e mescola con ragù, parmigiano e 1 uovo.' },
      { numero: 3, descrizione: 'Lascia raffreddare completamente il composto.' },
      { numero: 4, descrizione: 'Forma delle polpette ovali con cubetto di mozzarella al centro.' },
      { numero: 5, descrizione: 'Passa i supplì in uovo sbattuto e pangrattato.' },
      { numero: 6, descrizione: 'Friggi in olio a 170°C fino a doratura.', tempoCottura: 8 },
      { numero: 7, descrizione: 'Servi caldi e goditi il filo di mozzarella!' }
    ],
    tempoPreparazione: 45,
    tempoCottura: 23,
    tempoTotale: 68,
    porzioni: 8,
    valoriNutrizionali: { calorie: 380, proteine: 16, carboidrati: 42, grassi: 16 },
    commenti: [],
    valutazioneMedia: 4.8,
    numeroValutazioni: 3456,
    numeroPreferiti: 6543,
    dataCreazione: new Date('2024-02-28'),
    dataUltimaModifica: new Date('2024-02-28'),
    autore: 'Pizzeria Romana',
    tags: ['supplì', 'fritto', 'lazio', 'mozzarella'],
    visualizzazioni: 18765,
    isPopolari: true
  },

  {
    id: '49',
    titolo: 'Baba al Rum',
    descrizione: 'Dolce napoletano soffice imbevuto di rum.',
    fotoUrl: '🍾',
    difficolta: DifficoltaRicetta.DIFFICILE,
    tipo: TipoRicetta.DOLCI,
    regione: RegioneItaliana.CAMPANIA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO],
    ingredienti: [
      { nome: 'Farina', quantita: 250, unita: 'g' },
      { nome: 'Uova', quantita: 4, unita: 'pz' },
      { nome: 'Burro', quantita: 100, unita: 'g' },
      { nome: 'Lievito di birra', quantita: 15, unita: 'g' },
      { nome: 'Zucchero per l\'impasto', quantita: 30, unita: 'g' },
      { nome: 'Zucchero per lo sciroppo', quantita: 400, unita: 'g' },
      { nome: 'Acqua', quantita: 500, unita: 'ml' },
      { nome: 'Rum scuro', quantita: 150, unita: 'ml' },
      { nome: 'Panna montata', quantita: 200, unita: 'ml', note: 'per servire' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Sciogli il lievito con poco latte tiepido e zucchero.' },
      { numero: 2, descrizione: 'Impasta farina, uova, lievito e burro morbido.', tempoCottura: 15 },
      { numero: 3, descrizione: 'Fai lievitare per 2 ore finché raddoppia.', tempoCottura: 120 },
      { numero: 4, descrizione: 'Versa negli stampini per babà riempiendo a metà.' },
      { numero: 5, descrizione: 'Inforna a 180°C per 20 minuti.', tempoCottura: 20 },
      { numero: 6, descrizione: 'Prepara lo sciroppo con acqua, zucchero e rum.' },
      { numero: 7, descrizione: 'Immergi i babà nello sciroppo finché ben imbevuti.' },
      { numero: 8, descrizione: 'Servi con panna montata.' }
    ],
    tempoPreparazione: 30,
    tempoCottura: 155,
    tempoTotale: 185,
    porzioni: 12,
    valoriNutrizionali: { calorie: 340, proteine: 6, carboidrati: 48, grassi: 12 },
    commenti: [],
    valutazioneMedia: 4.8,
    numeroValutazioni: 2345,
    numeroPreferiti: 4567,
    dataCreazione: new Date('2024-03-01'),
    dataUltimaModifica: new Date('2024-03-01'),
    autore: 'Pasticceria Napoletana',
    tags: ['babà', 'rum', 'napoli', 'dolce'],
    visualizzazioni: 15432
  },

  {
    id: '50',
    titolo: 'Pasta alla Puttanesca',
    descrizione: 'Pasta con pomodoro, olive, capperi e acciughe - sapore intenso.',
    fotoUrl: '🫒',
    difficolta: DifficoltaRicetta.FACILE,
    tipo: TipoRicetta.PRIMI,
    regione: RegioneItaliana.CAMPANIA,
    filtriAlimentari: [],
    ingredienti: [
      { nome: 'Spaghetti', quantita: 400, unita: 'g' },
      { nome: 'Pomodori pelati', quantita: 400, unita: 'g' },
      { nome: 'Olive nere di Gaeta', quantita: 100, unita: 'g' },
      { nome: 'Capperi', quantita: 30, unita: 'g' },
      { nome: 'Acciughe', quantita: 6, unita: 'filetti' },
      { nome: 'Aglio', quantita: 2, unita: 'spicchi' },
      { nome: 'Peperoncino', quantita: 1, unita: 'pz' },
      { nome: 'Prezzemolo', quantita: 1, unita: 'mazzo' },
      { nome: 'Olio extravergine', quantita: 60, unita: 'ml' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Rosola aglio e peperoncino in olio, aggiungi acciughe.', tempoCottura: 3 },
      { numero: 2, descrizione: 'Aggiungi pomodori schiacciati, olive e capperi.', tempoCottura: 15 },
      { numero: 3, descrizione: 'Cuoci il sugo per 15 minuti a fuoco medio.' },
      { numero: 4, descrizione: 'Cuoci gli spaghetti al dente.', tempoCottura: 9 },
      { numero: 5, descrizione: 'Scola e manteca con il sugo.' },
      { numero: 6, descrizione: 'Aggiungi prezzemolo fresco tritato e servi.' }
    ],
    tempoPreparazione: 10,
    tempoCottura: 27,
    tempoTotale: 37,
    porzioni: 4,
    valoriNutrizionali: { calorie: 480, proteine: 16, carboidrati: 72, grassi: 14 },
    commenti: [],
    valutazioneMedia: 4.7,
    numeroValutazioni: 3987,
    numeroPreferiti: 6234,
    dataCreazione: new Date('2024-03-02'),
    dataUltimaModifica: new Date('2024-03-02'),
    autore: 'Trattoria Napoletana',
    tags: ['puttanesca', 'pasta', 'olive', 'capperi'],
    visualizzazioni: 17654,
    isPopolari: true
  },

  {
    id: '51',
    titolo: 'Frittata di Pasta',
    descrizione: 'Recupero creativo napoletano: pasta avanzata trasformata in frittata.',
    fotoUrl: '🍳',
    difficolta: DifficoltaRicetta.FACILE,
    tipo: TipoRicetta.SECONDI,
    regione: RegioneItaliana.CAMPANIA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO],
    ingredienti: [
      { nome: 'Pasta avanzata', quantita: 400, unita: 'g' },
      { nome: 'Uova', quantita: 6, unita: 'pz' },
      { nome: 'Parmigiano', quantita: 80, unita: 'g' },
      { nome: 'Mozzarella', quantita: 150, unita: 'g' },
      { nome: 'Basilico', quantita: 10, unita: 'foglie' },
      { nome: 'Olio extravergine', quantita: 40, unita: 'ml' },
      { nome: 'Sale e pepe', quantita: 1, unita: 'qb' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Sbatti le uova con parmigiano, sale e pepe.' },
      { numero: 2, descrizione: 'Mescola la pasta avanzata con le uova.' },
      { numero: 3, descrizione: 'Aggiungi mozzarella a cubetti e basilico.' },
      { numero: 4, descrizione: 'Scalda l\'olio in padella antiaderente.' },
      { numero: 5, descrizione: 'Versa il composto e cuoci 8 minuti per lato.', tempoCottura: 16 },
      { numero: 6, descrizione: 'Servi calda o a temperatura ambiente.' }
    ],
    tempoPreparazione: 10,
    tempoCottura: 16,
    tempoTotale: 26,
    porzioni: 4,
    valoriNutrizionali: { calorie: 420, proteine: 22, carboidrati: 38, grassi: 18 },
    commenti: [],
    valutazioneMedia: 4.6,
    numeroValutazioni: 1876,
    numeroPreferiti: 2987,
    dataCreazione: new Date('2024-03-03'),
    dataUltimaModifica: new Date('2024-03-03'),
    autore: 'Cucina Napoletana',
    tags: ['frittata', 'pasta', 'recupero', 'napoli'],
    visualizzazioni: 11234
  },

  {
    id: '52',
    titolo: 'Sfogliatelle Ricce',
    descrizione: 'Dolce napoletano croccante con ripieno di ricotta e canditi.',
    fotoUrl: '🥐',
    difficolta: DifficoltaRicetta.DIFFICILE,
    tipo: TipoRicetta.DOLCI,
    regione: RegioneItaliana.CAMPANIA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO],
    ingredienti: [
      { nome: 'Farina', quantita: 500, unita: 'g' },
      { nome: 'Strutto', quantita: 200, unita: 'g' },
      { nome: 'Ricotta', quantita: 500, unita: 'g' },
      { nome: 'Semolino', quantita: 100, unita: 'g' },
      { nome: 'Zucchero', quantita: 250, unita: 'g' },
      { nome: 'Uova', quantita: 2, unita: 'pz' },
      { nome: 'Canditi', quantita: 100, unita: 'g' },
      { nome: 'Cannella', quantita: 1, unita: 'cucchiaino' },
      { nome: 'Vaniglia', quantita: 1, unita: 'bacca' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Prepara la pasta sfoglia con farina, acqua e strutto. Riposa 2 ore.' },
      { numero: 2, descrizione: 'Cuoci semolino nel latte con zucchero e vaniglia.', tempoCottura: 10 },
      { numero: 3, descrizione: 'Mescola ricotta, semolino, uova, canditi e cannella.' },
      { numero: 4, descrizione: 'Stendi la pasta molto sottile e spennella con strutto fuso.' },
      { numero: 5, descrizione: 'Arrotola stretto e taglia a fette di 1.5cm.' },
      { numero: 6, descrizione: 'Allarga ogni fetta formando un cono e riempi.' },
      { numero: 7, descrizione: 'Inforna a 200°C per 25 minuti.', tempoCottura: 25 }
    ],
    tempoPreparazione: 120,
    tempoCottura: 35,
    tempoTotale: 155,
    porzioni: 15,
    valoriNutrizionali: { calorie: 360, proteine: 8, carboidrati: 42, grassi: 18 },
    commenti: [],
    valutazioneMedia: 4.9,
    numeroValutazioni: 2987,
    numeroPreferiti: 5432,
    dataCreazione: new Date('2024-03-04'),
    dataUltimaModifica: new Date('2024-03-04'),
    autore: 'Pasticceria Napoletana',
    tags: ['sfogliatelle', 'napoli', 'ricotta', 'dolce'],
    visualizzazioni: 19876
  },

  {
    id: '53',
    titolo: 'Coda alla Vaccinara',
    descrizione: 'Coda di bue stufata - piatto povero romano diventato prelibatezza.',
    fotoUrl: '🍖',
    difficolta: DifficoltaRicetta.DIFFICILE,
    tipo: TipoRicetta.SECONDI,
    regione: RegioneItaliana.LAZIO,
    filtriAlimentari: [FiltroAlimentare.SENZA_GLUTINE, FiltroAlimentare.SENZA_LATTOSIO],
    ingredienti: [
      { nome: 'Coda di bue', quantita: 1500, unita: 'g', note: 'a pezzi' },
      { nome: 'Pomodori pelati', quantita: 500, unita: 'g' },
      { nome: 'Sedano', quantita: 300, unita: 'g' },
      { nome: 'Cipolla, carota', quantita: 200, unita: 'g' },
      { nome: 'Vino bianco', quantita: 300, unita: 'ml' },
      { nome: 'Chiodi di garofano', quantita: 3, unita: 'pz' },
      { nome: 'Cannella', quantita: 1, unita: 'stecca' },
      { nome: 'Cacao amaro', quantita: 10, unita: 'g' },
      { nome: 'Pinoli', quantita: 30, unita: 'g' },
      { nome: 'Uvetta', quantita: 30, unita: 'g' },
      { nome: 'Olio extravergine', quantita: 60, unita: 'ml' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Rosola i pezzi di coda in olio fino a doratura.', tempoCottura: 20 },
      { numero: 2, descrizione: 'Aggiungi cipolla e carota tritati, sfuma col vino.' },
      { numero: 3, descrizione: 'Aggiungi pomodori, spezie, cacao e copri d\'acqua.' },
      { numero: 4, descrizione: 'Cuoci a fuoco lento coperto per 3.5 ore.', tempoCottura: 210 },
      { numero: 5, descrizione: 'Aggiungi sedano tagliato, uvetta e pinoli.' },
      { numero: 6, descrizione: 'Cuoci ancora 30 minuti finché il sedano è tenero.', tempoCottura: 30 }
    ],
    tempoPreparazione: 30,
    tempoCottura: 260,
    tempoTotale: 290,
    porzioni: 6,
    valoriNutrizionali: { calorie: 520, proteine: 42, carboidrati: 12, grassi: 34 },
    commenti: [],
    valutazioneMedia: 4.7,
    numeroValutazioni: 1234,
    numeroPreferiti: 2345,
    dataCreazione: new Date('2024-03-05'),
    dataUltimaModifica: new Date('2024-03-05'),
    autore: 'Osteria Testaccio',
    tags: ['coda', 'vaccinara', 'roma', 'lazio'],
    visualizzazioni: 10987
  },

  {
    id: '54',
    titolo: 'Sarde a Beccafico',
    descrizione: 'Sarde farcite siciliane con pangrattato, pinoli e uvetta.',
    fotoUrl: '🐟',
    difficolta: DifficoltaRicetta.MEDIA,
    tipo: TipoRicetta.SECONDI,
    regione: RegioneItaliana.SICILIA,
    filtriAlimentari: [FiltroAlimentare.PESCE],
    ingredienti: [
      { nome: 'Sarde fresche', quantita: 12, unita: 'pz' },
      { nome: 'Pangrattato', quantita: 100, unita: 'g' },
      { nome: 'Pinoli', quantita: 40, unita: 'g' },
      { nome: 'Uvetta', quantita: 40, unita: 'g' },
      { nome: 'Prezzemolo', quantita: 1, unita: 'mazzo' },
      { nome: 'Arance', quantita: 2, unita: 'pz' },
      { nome: 'Alloro', quantita: 6, unita: 'foglie' },
      { nome: 'Olio extravergine', quantita: 80, unita: 'ml' },
      { nome: 'Sale e pepe', quantita: 1, unita: 'qb' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Pulisci le sarde eliminando testa, lische e interiora. Apri a libro.' },
      { numero: 2, descrizione: 'Tosta il pangrattato in olio, aggiungi pinoli, uvetta e prezzemolo.' },
      { numero: 3, descrizione: 'Farcisci ogni sarda con il composto e arrotola.' },
      { numero: 4, descrizione: 'Disponi le sarde in teglia alternando con foglie di alloro.' },
      { numero: 5, descrizione: 'Irrora con succo d\'arancia e olio.' },
      { numero: 6, descrizione: 'Inforna a 180°C per 20 minuti.', tempoCottura: 20 }
    ],
    tempoPreparazione: 45,
    tempoCottura: 20,
    tempoTotale: 65,
    porzioni: 4,
    valoriNutrizionali: { calorie: 340, proteine: 28, carboidrati: 18, grassi: 18 },
    commenti: [],
    valutazioneMedia: 4.8,
    numeroValutazioni: 1567,
    numeroPreferiti: 2876,
    dataCreazione: new Date('2024-03-06'),
    dataUltimaModifica: new Date('2024-03-06'),
    autore: 'Trattoria Palermitana',
    tags: ['sarde', 'beccafico', 'sicilia', 'pesce'],
    visualizzazioni: 12345
  },

  {
    id: '55',
    titolo: 'Gnocchi alla Sorrentina',
    descrizione: 'Gnocchi al forno con pomodoro, mozzarella e basilico.',
    fotoUrl: '🧈',
    difficolta: DifficoltaRicetta.MEDIA,
    tipo: TipoRicetta.PRIMI,
    regione: RegioneItaliana.CAMPANIA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO],
    ingredienti: [
      { nome: 'Gnocchi di patate', quantita: 800, unita: 'g' },
      { nome: 'Pomodori pelati', quantita: 500, unita: 'g' },
      { nome: 'Mozzarella fiordilatte', quantita: 300, unita: 'g' },
      { nome: 'Parmigiano', quantita: 80, unita: 'g' },
      { nome: 'Basilico fresco', quantita: 1, unita: 'mazzo' },
      { nome: 'Aglio', quantita: 2, unita: 'spicchi' },
      { nome: 'Olio extravergine', quantita: 50, unita: 'ml' },
      { nome: 'Sale', quantita: 1, unita: 'qb' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Prepara il sugo: rosola aglio in olio, aggiungi pomodori e basilico.', tempoCottura: 20 },
      { numero: 2, descrizione: 'Cuoci gli gnocchi in acqua salata bollente per 2 minuti.', tempoCottura: 2 },
      { numero: 3, descrizione: 'Scola gli gnocchi e condisci con il sugo.' },
      { numero: 4, descrizione: 'Disponi metà gnocchi in pirofila, aggiungi mozzarella a cubetti.' },
      { numero: 5, descrizione: 'Copri con il resto degli gnocchi, sugo e parmigiano.' },
      { numero: 6, descrizione: 'Inforna a 200°C per 15 minuti fino a gratinatura.', tempoCottura: 15 }
    ],
    tempoPreparazione: 20,
    tempoCottura: 37,
    tempoTotale: 57,
    porzioni: 4,
    valoriNutrizionali: { calorie: 520, proteine: 20, carboidrati: 62, grassi: 20 },
    commenti: [],
    valutazioneMedia: 4.8,
    numeroValutazioni: 3456,
    numeroPreferiti: 5678,
    dataCreazione: new Date('2024-03-07'),
    dataUltimaModifica: new Date('2024-03-07'),
    autore: 'Trattoria Sorrentina',
    tags: ['gnocchi', 'sorrentina', 'campania', 'mozzarella'],
    visualizzazioni: 16789,
    isPopolari: true
  },

  {
    id: '56',
    titolo: 'Cotoletta alla Milanese',
    descrizione: 'Costoletta di vitello impanata e fritta - il simbolo di Milano.',
    fotoUrl: '🍖',
    difficolta: DifficoltaRicetta.FACILE,
    tipo: TipoRicetta.SECONDI,
    regione: RegioneItaliana.LOMBARDIA,
    filtriAlimentari: [],
    ingredienti: [
      { nome: 'Costolette di vitello con osso', quantita: 4, unita: 'pz', note: 'alte 2cm' },
      { nome: 'Uova', quantita: 3, unita: 'pz' },
      { nome: 'Pangrattato', quantita: 200, unita: 'g' },
      { nome: 'Burro chiarificato', quantita: 150, unita: 'g' },
      { nome: 'Sale', quantita: 1, unita: 'qb' },
      { nome: 'Limone', quantita: 2, unita: 'pz', note: 'per servire' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Batti leggermente le costolette senza assottigliarle troppo.' },
      { numero: 2, descrizione: 'Passa le cotolette in uova sbattute con sale.' },
      { numero: 3, descrizione: 'Impana abbondantemente con pangrattato.' },
      { numero: 4, descrizione: 'Friggi nel burro chiarificato 4 minuti per lato.', tempoCottura: 8 },
      { numero: 5, descrizione: 'Scola su carta assorbente.' },
      { numero: 6, descrizione: 'Servi immediatamente con spicchi di limone.' }
    ],
    tempoPreparazione: 15,
    tempoCottura: 8,
    tempoTotale: 23,
    porzioni: 4,
    valoriNutrizionali: { calorie: 480, proteine: 38, carboidrati: 22, grassi: 28 },
    commenti: [],
    valutazioneMedia: 4.8,
    numeroValutazioni: 3456,
    numeroPreferiti: 6543,
    dataCreazione: new Date('2024-03-08'),
    dataUltimaModifica: new Date('2024-03-08'),
    autore: 'Ristorante Milanese',
    tags: ['cotoletta', 'milanese', 'lombardia', 'fritto'],
    visualizzazioni: 20987,
    isPopolari: true
  },

  {
    id: '57',
    titolo: 'Panzanella Toscana',
    descrizione: 'Insalata estiva con pane raffermo, pomodori e verdure.',
    fotoUrl: '🥗',
    difficolta: DifficoltaRicetta.FACILE,
    tipo: TipoRicetta.CONTORNI,
    regione: RegioneItaliana.TOSCANA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO, FiltroAlimentare.VEGANO],
    ingredienti: [
      { nome: 'Pane toscano raffermo', quantita: 300, unita: 'g' },
      { nome: 'Pomodori maturi', quantita: 500, unita: 'g' },
      { nome: 'Cetrioli', quantita: 2, unita: 'pz' },
      { nome: 'Cipolla rossa', quantita: 1, unita: 'pz' },
      { nome: 'Basilico fresco', quantita: 1, unita: 'mazzo' },
      { nome: 'Aceto di vino rosso', quantita: 50, unita: 'ml' },
      { nome: 'Olio extravergine', quantita: 100, unita: 'ml' },
      { nome: 'Sale e pepe', quantita: 1, unita: 'qb' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Bagna il pane raffermo in acqua e strizza bene.' },
      { numero: 2, descrizione: 'Sbricola il pane in una ciotola.' },
      { numero: 3, descrizione: 'Taglia pomodori, cetrioli e cipolla a pezzi.' },
      { numero: 4, descrizione: 'Mescola tutto con basilico spezzettato.' },
      { numero: 5, descrizione: 'Condisci con olio, aceto, sale e pepe.' },
      { numero: 6, descrizione: 'Lascia riposare in frigo 30 minuti prima di servire.' }
    ],
    tempoPreparazione: 20,
    tempoCottura: 0,
    tempoTotale: 20,
    porzioni: 4,
    valoriNutrizionali: { calorie: 280, proteine: 6, carboidrati: 38, grassi: 12 },
    commenti: [],
    valutazioneMedia: 4.6,
    numeroValutazioni: 1876,
    numeroPreferiti: 2987,
    dataCreazione: new Date('2024-03-09'),
    dataUltimaModifica: new Date('2024-03-09'),
    autore: 'Trattoria Toscana',
    tags: ['panzanella', 'toscana', 'insalata', 'estivo'],
    visualizzazioni: 11234
  },

  {
    id: '58',
    titolo: 'Baccalà alla Vicentina',
    descrizione: 'Stoccafisso cotto lentamente nel latte - specialità veneta.',
    fotoUrl: '🐟',
    difficolta: DifficoltaRicetta.MEDIA,
    tipo: TipoRicetta.SECONDI,
    regione: RegioneItaliana.VENETO,
    filtriAlimentari: [FiltroAlimentare.PESCE, FiltroAlimentare.SENZA_GLUTINE],
    ingredienti: [
      { nome: 'Stoccafisso ammollato', quantita: 1000, unita: 'g' },
      { nome: 'Cipolle', quantita: 400, unita: 'g' },
      { nome: 'Acciughe', quantita: 6, unita: 'filetti' },
      { nome: 'Parmigiano', quantita: 80, unita: 'g' },
      { nome: 'Latte', quantita: 500, unita: 'ml' },
      { nome: 'Olio extravergine', quantita: 150, unita: 'ml' },
      { nome: 'Prezzemolo', quantita: 1, unita: 'mazzo' },
      { nome: 'Sale e pepe', quantita: 1, unita: 'qb' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Taglia lo stoccafisso a pezzi regolari.' },
      { numero: 2, descrizione: 'Rosola le cipolle affettate in olio per 20 minuti.', tempoCottura: 20 },
      { numero: 3, descrizione: 'In teglia, alterna strati di pesce, cipolle, acciughe e parmigiano.' },
      { numero: 4, descrizione: 'Copri con latte e olio.' },
      { numero: 5, descrizione: 'Cuoci a fuoco dolcissimo per 4 ore mescolando delicatamente.', tempoCottura: 240 },
      { numero: 6, descrizione: 'Servi con polenta e prezzemolo.' }
    ],
    tempoPreparazione: 30,
    tempoCottura: 260,
    tempoTotale: 290,
    porzioni: 6,
    valoriNutrizionali: { calorie: 380, proteine: 42, carboidrati: 8, grassi: 20 },
    commenti: [],
    valutazioneMedia: 4.7,
    numeroValutazioni: 1234,
    numeroPreferiti: 2345,
    dataCreazione: new Date('2024-03-10'),
    dataUltimaModifica: new Date('2024-03-10'),
    autore: 'Ristorante Vicentino',
    tags: ['baccalà', 'stoccafisso', 'veneto', 'vicenza'],
    visualizzazioni: 9876
  },

  {
    id: '59',
    titolo: 'Stracciatella Romana',
    descrizione: 'Zuppa di brodo con uova e parmigiano - comfort food romano.',
    fotoUrl: '🥣',
    difficolta: DifficoltaRicetta.FACILE,
    tipo: TipoRicetta.PRIMI,
    regione: RegioneItaliana.LAZIO,
    filtriAlimentari: [FiltroAlimentare.SENZA_GLUTINE],
    ingredienti: [
      { nome: 'Brodo di carne', quantita: 1.5, unita: 'l' },
      { nome: 'Uova', quantita: 4, unita: 'pz' },
      { nome: 'Parmigiano', quantita: 100, unita: 'g' },
      { nome: 'Semolino', quantita: 30, unita: 'g' },
      { nome: 'Noce moscata', quantita: 1, unita: 'qb' },
      { nome: 'Sale', quantita: 1, unita: 'qb' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Sbatti le uova con parmigiano, semolino e noce moscata.' },
      { numero: 2, descrizione: 'Porta il brodo a ebollizione.' },
      { numero: 3, descrizione: 'Versa il composto di uova nel brodo mescolando vigorosamente.', tempoCottura: 2 },
      { numero: 4, descrizione: 'Cuoci 2-3 minuti mescolando per formare fiocchi.' },
      { numero: 5, descrizione: 'Servi immediatamente in ciotole calde.' }
    ],
    tempoPreparazione: 10,
    tempoCottura: 5,
    tempoTotale: 15,
    porzioni: 4,
    valoriNutrizionali: { calorie: 220, proteine: 16, carboidrati: 8, grassi: 14 },
    commenti: [],
    valutazioneMedia: 4.6,
    numeroValutazioni: 1567,
    numeroPreferiti: 2234,
    dataCreazione: new Date('2024-03-11'),
    dataUltimaModifica: new Date('2024-03-11'),
    autore: 'Osteria Romana',
    tags: ['stracciatella', 'zuppa', 'brodo', 'lazio'],
    visualizzazioni: 8765
  },

  {
    id: '60',
    titolo: 'Pasta alla Trapanese',
    descrizione: 'Pesto siciliano con pomodori, mandorle e basilico.',
    fotoUrl: '🍅',
    difficolta: DifficoltaRicetta.FACILE,
    tipo: TipoRicetta.PRIMI,
    regione: RegioneItaliana.SICILIA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO, FiltroAlimentare.VEGANO],
    ingredienti: [
      { nome: 'Busiate o spaghetti', quantita: 400, unita: 'g' },
      { nome: 'Pomodori maturi', quantita: 500, unita: 'g' },
      { nome: 'Mandorle pelate', quantita: 100, unita: 'g' },
      { nome: 'Basilico fresco', quantita: 50, unita: 'g' },
      { nome: 'Aglio', quantita: 2, unita: 'spicchi' },
      { nome: 'Pecorino siciliano', quantita: 60, unita: 'g', note: 'opzionale' },
      { nome: 'Olio extravergine', quantita: 100, unita: 'ml' },
      { nome: 'Sale', quantita: 1, unita: 'qb' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Tosta leggermente le mandorle in padella.' },
      { numero: 2, descrizione: 'Pela i pomodori e tagliali a pezzi.' },
      { numero: 3, descrizione: 'Pesta nel mortaio mandorle, aglio e basilico.' },
      { numero: 4, descrizione: 'Aggiungi pomodori e olio, pesta fino a ottenere una crema.' },
      { numero: 5, descrizione: 'Cuoci la pasta al dente.', tempoCottura: 11 },
      { numero: 6, descrizione: 'Manteca con il pesto e servi con pecorino.' }
    ],
    tempoPreparazione: 20,
    tempoCottura: 11,
    tempoTotale: 31,
    porzioni: 4,
    valoriNutrizionali: { calorie: 550, proteine: 16, carboidrati: 72, grassi: 22 },
    commenti: [],
    valutazioneMedia: 4.8,
    numeroValutazioni: 2345,
    numeroPreferiti: 4123,
    dataCreazione: new Date('2024-03-12'),
    dataUltimaModifica: new Date('2024-03-12'),
    autore: 'Trattoria Trapanese',
    tags: ['trapanese', 'pesto', 'sicilia', 'mandorle'],
    visualizzazioni: 13456,
    isPopolari: true
  },

  {
    id: '61',
    titolo: 'Frico Friulano',
    descrizione: 'Croccante tortino di formaggio e patate - delizia friulana.',
    fotoUrl: '🧀',
    difficolta: DifficoltaRicetta.MEDIA,
    tipo: TipoRicetta.ANTIPASTI,
    regione: RegioneItaliana.FRIULI_VENEZIA_GIULIA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO, FiltroAlimentare.SENZA_GLUTINE],
    ingredienti: [
      { nome: 'Montasio stagionato', quantita: 300, unita: 'g' },
      { nome: 'Patate', quantita: 300, unita: 'g' },
      { nome: 'Burro', quantita: 40, unita: 'g' },
      { nome: 'Sale e pepe', quantita: 1, unita: 'qb' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Gratta il formaggio montasio.' },
      { numero: 2, descrizione: 'Pela e taglia le patate a julienne sottile.' },
      { numero: 3, descrizione: 'Mescola formaggio e patate.' },
      { numero: 4, descrizione: 'Sciogli il burro in padella antiaderente.' },
      { numero: 5, descrizione: 'Disponi il composto e schiaccia formando un disco.', tempoCottura: 8 },
      { numero: 6, descrizione: 'Gira e cuoci l\'altro lato fino a doratura.', tempoCottura: 8 },
      { numero: 7, descrizione: 'Servi croccante e caldo.' }
    ],
    tempoPreparazione: 15,
    tempoCottura: 16,
    tempoTotale: 31,
    porzioni: 4,
    valoriNutrizionali: { calorie: 380, proteine: 18, carboidrati: 20, grassi: 26 },
    commenti: [],
    valutazioneMedia: 4.7,
    numeroValutazioni: 1456,
    numeroPreferiti: 2678,
    dataCreazione: new Date('2024-03-13'),
    dataUltimaModifica: new Date('2024-03-13'),
    autore: 'Osteria Friulana',
    tags: ['frico', 'friuli', 'formaggio', 'montasio'],
    visualizzazioni: 10234
  },

  {
    id: '62',
    titolo: 'Pastiera Napoletana',
    descrizione: 'Torta di grano e ricotta - il dolce pasquale napoletano per eccellenza.',
    fotoUrl: '🌾',
    difficolta: DifficoltaRicetta.DIFFICILE,
    tipo: TipoRicetta.DOLCI,
    regione: RegioneItaliana.CAMPANIA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO],
    ingredienti: [
      { nome: 'Pasta frolla', quantita: 500, unita: 'g' },
      { nome: 'Grano cotto', quantita: 300, unita: 'g' },
      { nome: 'Ricotta', quantita: 600, unita: 'g' },
      { nome: 'Zucchero', quantita: 300, unita: 'g' },
      { nome: 'Uova', quantita: 5, unita: 'pz' },
      { nome: 'Latte', quantita: 300, unita: 'ml' },
      { nome: 'Canditi', quantita: 100, unita: 'g' },
      { nome: 'Acqua di fiori d\'arancio', quantita: 30, unita: 'ml' },
      { nome: 'Cannella', quantita: 1, unita: 'cucchiaino' },
      { nome: 'Vaniglia', quantita: 1, unita: 'bacca' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Cuoci il grano nel latte con vaniglia fino ad assorbimento.', tempoCottura: 30 },
      { numero: 2, descrizione: 'Setaccia la ricotta e mescola con zucchero e tuorli.' },
      { numero: 3, descrizione: 'Aggiungi grano, canditi, acqua di fiori e cannella.' },
      { numero: 4, descrizione: 'Monta gli albumi a neve e incorporali delicatamente.' },
      { numero: 5, descrizione: 'Fodra una tortiera con la frolla, versa il ripieno.' },
      { numero: 6, descrizione: 'Decora con strisce di frolla a griglia.' },
      { numero: 7, descrizione: 'Inforna a 180°C per 90 minuti.', tempoCottura: 90 }
    ],
    tempoPreparazione: 60,
    tempoCottura: 120,
    tempoTotale: 180,
    porzioni: 12,
    valoriNutrizionali: { calorie: 420, proteine: 12, carboidrati: 52, grassi: 18 },
    commenti: [],
    valutazioneMedia: 4.9,
    numeroValutazioni: 3876,
    numeroPreferiti: 7123,
    dataCreazione: new Date('2024-03-14'),
    dataUltimaModifica: new Date('2024-03-14'),
    autore: 'Pasticceria Napoletana',
    tags: ['pastiera', 'pasqua', 'napoli', 'ricotta'],
    visualizzazioni: 21456,
    isPopolari: true
  },

  {
    id: '63',
    titolo: 'Farinata Genovese',
    descrizione: 'Focaccia bassa di farina di ceci - street food ligure.',
    fotoUrl: '🥞',
    difficolta: DifficoltaRicetta.FACILE,
    tipo: TipoRicetta.ANTIPASTI,
    regione: RegioneItaliana.LIGURIA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO, FiltroAlimentare.VEGANO, FiltroAlimentare.SENZA_GLUTINE],
    ingredienti: [
      { nome: 'Farina di ceci', quantita: 300, unita: 'g' },
      { nome: 'Acqua', quantita: 900, unita: 'ml' },
      { nome: 'Olio extravergine', quantita: 80, unita: 'ml' },
      { nome: 'Sale', quantita: 10, unita: 'g' },
      { nome: 'Pepe nero', quantita: 1, unita: 'qb' },
      { nome: 'Rosmarino', quantita: 1, unita: 'rametto', note: 'opzionale' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Mescola farina di ceci con acqua e sale.' },
      { numero: 2, descrizione: 'Lascia riposare l\'impasto per 4 ore.', tempoCottura: 240 },
      { numero: 3, descrizione: 'Schiumala superficie eliminando le impurità.' },
      { numero: 4, descrizione: 'Aggiungi olio e mescola bene.' },
      { numero: 5, descrizione: 'Versa in teglia da forno alta 5mm.' },
      { numero: 6, descrizione: 'Inforna a 220°C per 20-25 minuti.', tempoCottura: 25 },
      { numero: 7, descrizione: 'Servi calda con pepe nero.' }
    ],
    tempoPreparazione: 15,
    tempoCottura: 265,
    tempoTotale: 280,
    porzioni: 6,
    valoriNutrizionali: { calorie: 240, proteine: 8, carboidrati: 28, grassi: 10 },
    commenti: [],
    valutazioneMedia: 4.7,
    numeroValutazioni: 2345,
    numeroPreferiti: 3987,
    dataCreazione: new Date('2024-03-15'),
    dataUltimaModifica: new Date('2024-03-15'),
    autore: 'Friggitoria Genovese',
    tags: ['farinata', 'ceci', 'liguria', 'genova'],
    visualizzazioni: 14567
  },

  {
    id: '64',
    titolo: 'Agnolotti del Plin',
    descrizione: 'Ravioli piemontesi ripieni di carne - tradizione delle Langhe.',
    fotoUrl: '🥟',
    difficolta: DifficoltaRicetta.DIFFICILE,
    tipo: TipoRicetta.PRIMI,
    regione: RegioneItaliana.PIEMONTE,
    filtriAlimentari: [],
    ingredienti: [
      { nome: 'Sfoglia all\'uovo', quantita: 500, unita: 'g' },
      { nome: 'Arrosto di vitello', quantita: 300, unita: 'g' },
      { nome: 'Salsiccia', quantita: 150, unita: 'g' },
      { nome: 'Prosciutto cotto', quantita: 100, unita: 'g' },
      { nome: 'Spinaci lessati', quantita: 200, unita: 'g' },
      { nome: 'Parmigiano', quantita: 100, unita: 'g' },
      { nome: 'Uova', quantita: 2, unita: 'pz' },
      { nome: 'Burro', quantita: 100, unita: 'g' },
      { nome: 'Salvia', quantita: 10, unita: 'foglie' },
      { nome: 'Noce moscata', quantita: 1, unita: 'qb' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Tritata finemente carni, spinaci, aggiungi parmigiano, uova e noce moscata.' },
      { numero: 2, descrizione: 'Stendi la sfoglia molto sottile.' },
      { numero: 3, descrizione: 'Disponi mucchietti di ripieno ogni 3cm sulla sfoglia.' },
      { numero: 4, descrizione: 'Copri con altra sfoglia e pizzica (plin) tra i mucchietti.' },
      { numero: 5, descrizione: 'Taglia formando quadratini.' },
      { numero: 6, descrizione: 'Cuoci in acqua salata per 3 minuti.', tempoCottura: 3 },
      { numero: 7, descrizione: 'Condisci con burro e salvia rosolati.' }
    ],
    tempoPreparazione: 90,
    tempoCottura: 3,
    tempoTotale: 93,
    porzioni: 6,
    valoriNutrizionali: { calorie: 520, proteine: 28, carboidrati: 48, grassi: 24 },
    commenti: [],
    valutazioneMedia: 4.9,
    numeroValutazioni: 1876,
    numeroPreferiti: 3456,
    dataCreazione: new Date('2024-03-16'),
    dataUltimaModifica: new Date('2024-03-16'),
    autore: 'Osteria Piemontese',
    tags: ['agnolotti', 'plin', 'piemonte', 'ravioli'],
    visualizzazioni: 11234
  },

  {
    id: '65',
    titolo: 'Panforte di Siena',
    descrizione: 'Dolce speziato medievale con frutta secca e miele.',
    fotoUrl: '🍯',
    difficolta: DifficoltaRicetta.MEDIA,
    tipo: TipoRicetta.DOLCI,
    regione: RegioneItaliana.TOSCANA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO],
    ingredienti: [
      { nome: 'Mandorle', quantita: 200, unita: 'g' },
      { nome: 'Nocciole', quantita: 200, unita: 'g' },
      { nome: 'Fichi secchi', quantita: 150, unita: 'g' },
      { nome: 'Canditi misti', quantita: 150, unita: 'g' },
      { nome: 'Miele', quantita: 200, unita: 'g' },
      { nome: 'Zucchero', quantita: 150, unita: 'g' },
      { nome: 'Farina', quantita: 80, unita: 'g' },
      { nome: 'Cacao amaro', quantita: 20, unita: 'g' },
      { nome: 'Cannella, chiodi, noce moscata', quantita: 10, unita: 'g', note: 'misto spezie' },
      { nome: 'Ostie per dolci', quantita: 2, unita: 'pz' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Tosta mandorle e nocciole e tritale grossolanamente.' },
      { numero: 2, descrizione: 'Trita fichi e canditi a pezzetti.' },
      { numero: 3, descrizione: 'Scalda miele e zucchero fino a 120°C.', tempoCottura: 10 },
      { numero: 4, descrizione: 'Mescola frutta secca, farina, cacao e spezie.' },
      { numero: 5, descrizione: 'Aggiungi lo sciroppo di miele e amalgama velocemente.' },
      { numero: 6, descrizione: 'Versa in tortiera foderata con ostie.' },
      { numero: 7, descrizione: 'Inforna a 150°C per 30 minuti.', tempoCottura: 30 },
      { numero: 8, descrizione: 'Spolvera con zucchero a velo.' }
    ],
    tempoPreparazione: 30,
    tempoCottura: 40,
    tempoTotale: 70,
    porzioni: 12,
    valoriNutrizionali: { calorie: 340, proteine: 8, carboidrati: 42, grassi: 16 },
    commenti: [],
    valutazioneMedia: 4.8,
    numeroValutazioni: 2234,
    numeroPreferiti: 3987,
    dataCreazione: new Date('2024-03-17'),
    dataUltimaModifica: new Date('2024-03-17'),
    autore: 'Pasticceria Senese',
    tags: ['panforte', 'siena', 'toscana', 'spezie'],
    visualizzazioni: 13456
  },

  {
    id: '66',
    titolo: 'Pasta alla Carbonara',
    descrizione: 'Il piatto romano simbolo della cucina italiana nel mondo.',
    fotoUrl: '🥓',
    difficolta: DifficoltaRicetta.MEDIA,
    tipo: TipoRicetta.PRIMI,
    regione: RegioneItaliana.LAZIO,
    filtriAlimentari: [],
    ingredienti: [
      { nome: 'Rigatoni o spaghetti', quantita: 400, unita: 'g' },
      { nome: 'Guanciale', quantita: 200, unita: 'g' },
      { nome: 'Tuorli d\'uovo', quantita: 4, unita: 'pz' },
      { nome: 'Uovo intero', quantita: 1, unita: 'pz' },
      { nome: 'Pecorino Romano', quantita: 100, unita: 'g' },
      { nome: 'Pepe nero', quantita: 1, unita: 'qb' },
      { nome: 'Sale', quantita: 1, unita: 'qb' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Taglia il guanciale a listarelle e rosola fino a croccantezza.', tempoCottura: 10 },
      { numero: 2, descrizione: 'Sbatti tuorli, uovo e pecorino grattugiato in una ciotola.' },
      { numero: 3, descrizione: 'Aggiungi abbondante pepe nero.' },
      { numero: 4, descrizione: 'Cuoci la pasta al dente.', tempoCottura: 11 },
      { numero: 5, descrizione: 'Scola la pasta conservando acqua di cottura.' },
      { numero: 6, descrizione: 'Manteca pasta con guanciale, poi aggiungi crema di uova fuori dal fuoco.' },
      { numero: 7, descrizione: 'Aggiungi acqua di cottura se serve per cremosità.' }
    ],
    tempoPreparazione: 10,
    tempoCottura: 21,
    tempoTotale: 31,
    porzioni: 4,
    valoriNutrizionali: { calorie: 620, proteine: 26, carboidrati: 68, grassi: 28 },
    commenti: [],
    valutazioneMedia: 4.9,
    numeroValutazioni: 8765,
    numeroPreferiti: 15432,
    dataCreazione: new Date('2024-03-18'),
    dataUltimaModifica: new Date('2024-03-18'),
    autore: 'Trattoria Romana',
    tags: ['carbonara', 'guanciale', 'roma', 'lazio'],
    visualizzazioni: 45678,
    isPopolari: true,
    isRicettaDelGiorno: true
  },

  {
    id: '67',
    titolo: 'Peperonata',
    descrizione: 'Contorno classico di peperoni stufati con pomodoro.',
    fotoUrl: '🫑',
    difficolta: DifficoltaRicetta.FACILE,
    tipo: TipoRicetta.CONTORNI,
    regione: RegioneItaliana.PIEMONTE,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO, FiltroAlimentare.VEGANO, FiltroAlimentare.SENZA_GLUTINE],
    ingredienti: [
      { nome: 'Peperoni misti', quantita: 800, unita: 'g' },
      { nome: 'Pomodori pelati', quantita: 300, unita: 'g' },
      { nome: 'Cipolla', quantita: 1, unita: 'pz' },
      { nome: 'Aglio', quantita: 2, unita: 'spicchi' },
      { nome: 'Basilico', quantita: 1, unita: 'mazzo' },
      { nome: 'Olio extravergine', quantita: 60, unita: 'ml' },
      { nome: 'Aceto', quantita: 20, unita: 'ml', note: 'opzionale' },
      { nome: 'Sale', quantita: 1, unita: 'qb' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Pulisci i peperoni eliminando semi e filamenti. Taglia a listarelle.' },
      { numero: 2, descrizione: 'Rosola cipolla e aglio in olio.', tempoCottura: 5 },
      { numero: 3, descrizione: 'Aggiungi i peperoni e falli appassire.' },
      { numero: 4, descrizione: 'Unisci i pomodori e cuoci a fuoco medio per 30 minuti.', tempoCottura: 30 },
      { numero: 5, descrizione: 'Aggiungi basilico e aceto a fine cottura.' },
      { numero: 6, descrizione: 'Servi tiepida o fredda.' }
    ],
    tempoPreparazione: 20,
    tempoCottura: 35,
    tempoTotale: 55,
    porzioni: 6,
    valoriNutrizionali: { calorie: 140, proteine: 2, carboidrati: 14, grassi: 8 },
    commenti: [],
    valutazioneMedia: 4.6,
    numeroValutazioni: 1987,
    numeroPreferiti: 3234,
    dataCreazione: new Date('2024-03-19'),
    dataUltimaModifica: new Date('2024-03-19'),
    autore: 'Cucina Tradizionale',
    tags: ['peperonata', 'peperoni', 'contorno', 'estivo'],
    visualizzazioni: 12345
  },

  {
    id: '68',
    titolo: 'Gelato alla Crema',
    descrizione: 'Gelato artigianale italiano cremoso e vellutato.',
    fotoUrl: '🍦',
    difficolta: DifficoltaRicetta.MEDIA,
    tipo: TipoRicetta.DOLCI,
    regione: RegioneItaliana.EMILIA_ROMAGNA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO, FiltroAlimentare.SENZA_GLUTINE],
    ingredienti: [
      { nome: 'Latte intero', quantita: 500, unita: 'ml' },
      { nome: 'Panna fresca', quantita: 200, unita: 'ml' },
      { nome: 'Tuorli d\'uovo', quantita: 6, unita: 'pz' },
      { nome: 'Zucchero', quantita: 150, unita: 'g' },
      { nome: 'Vaniglia', quantita: 1, unita: 'bacca' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Scalda latte e panna con la vaniglia senza far bollire.', tempoCottura: 5 },
      { numero: 2, descrizione: 'Sbatti tuorli con zucchero fino a sbiancamento.' },
      { numero: 3, descrizione: 'Versa il latte sui tuorli mescolando.' },
      { numero: 4, descrizione: 'Cuoci a bagnomaria a 85°C mescolando sempre.', tempoCottura: 10 },
      { numero: 5, descrizione: 'Lascia raffreddare completamente in frigo.', tempoCottura: 180 },
      { numero: 6, descrizione: 'Versa in gelatiera e manteca 30 minuti.', tempoCottura: 30 },
      { numero: 7, descrizione: 'Riponi in freezer per rassodare.' }
    ],
    tempoPreparazione: 20,
    tempoCottura: 225,
    tempoTotale: 245,
    porzioni: 8,
    valoriNutrizionali: { calorie: 280, proteine: 6, carboidrati: 28, grassi: 16 },
    commenti: [],
    valutazioneMedia: 4.9,
    numeroValutazioni: 3456,
    numeroPreferiti: 6789,
    dataCreazione: new Date('2024-03-20'),
    dataUltimaModifica: new Date('2024-03-20'),
    autore: 'Gelateria Artigianale',
    tags: ['gelato', 'crema', 'dolce', 'artigianale'],
    visualizzazioni: 19876,
    isPopolari: true
  },

  {
    id: '69',
    titolo: 'Acciughe al Verde',
    descrizione: 'Antipasto piemontese con acciughe e salsa verde.',
    fotoUrl: '🐟',
    difficolta: DifficoltaRicetta.FACILE,
    tipo: TipoRicetta.ANTIPASTI,
    regione: RegioneItaliana.PIEMONTE,
    filtriAlimentari: [FiltroAlimentare.PESCE, FiltroAlimentare.SENZA_GLUTINE, FiltroAlimentare.SENZA_LATTOSIO],
    ingredienti: [
      { nome: 'Acciughe sotto sale', quantita: 12, unita: 'filetti' },
      { nome: 'Prezzemolo', quantita: 1, unita: 'mazzo' },
      { nome: 'Aglio', quantita: 2, unita: 'spicchi' },
      { nome: 'Capperi', quantita: 30, unita: 'g' },
      { nome: 'Aceto di vino', quantita: 30, unita: 'ml' },
      { nome: 'Olio extravergine', quantita: 100, unita: 'ml' },
      { nome: 'Pane tostato', quantita: 8, unita: 'fette', note: 'per servire' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Dissala le acciughe in acqua fredda per 30 minuti.' },
      { numero: 2, descrizione: 'Asciuga e disponi le acciughe in un piatto.' },
      { numero: 3, descrizione: 'Trita finemente prezzemolo, aglio e capperi.' },
      { numero: 4, descrizione: 'Emulsiona con olio e aceto formando una salsa verde.' },
      { numero: 5, descrizione: 'Versa la salsa sulle acciughe.' },
      { numero: 6, descrizione: 'Lascia marinare 1 ora in frigo.' },
      { numero: 7, descrizione: 'Servi con pane tostato.' }
    ],
    tempoPreparazione: 15,
    tempoCottura: 0,
    tempoTotale: 15,
    porzioni: 4,
    valoriNutrizionali: { calorie: 220, proteine: 14, carboidrati: 8, grassi: 16 },
    commenti: [],
    valutazioneMedia: 4.7,
    numeroValutazioni: 1234,
    numeroPreferiti: 2345,
    dataCreazione: new Date('2024-03-21'),
    dataUltimaModifica: new Date('2024-03-21'),
    autore: 'Osteria Piemontese',
    tags: ['acciughe', 'verde', 'piemonte', 'antipasto'],
    visualizzazioni: 8765
  },

  {
    id: '70',
    titolo: 'Acquacotta Maremmana',
    descrizione: 'Zuppa povera toscana con pane, verdure e uovo.',
    fotoUrl: '🥚',
    difficolta: DifficoltaRicetta.FACILE,
    tipo: TipoRicetta.PRIMI,
    regione: RegioneItaliana.TOSCANA,
    filtriAlimentari: [FiltroAlimentare.VEGETARIANO],
    ingredienti: [
      { nome: 'Pane toscano raffermo', quantita: 300, unita: 'g' },
      { nome: 'Pomodori maturi', quantita: 400, unita: 'g' },
      { nome: 'Sedano', quantita: 2, unita: 'coste' },
      { nome: 'Cipolla', quantita: 1, unita: 'pz' },
      { nome: 'Basilico', quantita: 1, unita: 'mazzo' },
      { nome: 'Uova', quantita: 4, unita: 'pz' },
      { nome: 'Pecorino', quantita: 80, unita: 'g' },
      { nome: 'Olio extravergine', quantita: 60, unita: 'ml' },
      { nome: 'Sale e pepe', quantita: 1, unita: 'qb' }
    ],
    procedimento: [
      { numero: 1, descrizione: 'Rosola cipolla e sedano tritati in olio.', tempoCottura: 8 },
      { numero: 2, descrizione: 'Aggiungi pomodori a pezzi e cuoci 20 minuti.', tempoCottura: 20 },
      { numero: 3, descrizione: 'Aggiungi acqua bollente e basilico.' },
      { numero: 4, descrizione: 'In ciotole, disponi fette di pane e pecorino.' },
      { numero: 5, descrizione: 'Versa la zuppa bollente sul pane.' },
      { numero: 6, descrizione: 'Rompi un uovo per ciotola sulla zuppa.' },
      { numero: 7, descrizione: 'Lascia cuocere l\'uovo con il calore residuo.' }
    ],
    tempoPreparazione: 15,
    tempoCottura: 28,
    tempoTotale: 43,
    porzioni: 4,
    valoriNutrizionali: { calorie: 380, proteine: 16, carboidrati: 42, grassi: 16 },
    commenti: [],
    valutazioneMedia: 4.6,
    numeroValutazioni: 987,
    numeroPreferiti: 1876,
    dataCreazione: new Date('2024-03-22'),
    dataUltimaModifica: new Date('2024-03-22'),
    autore: 'Trattoria Maremmana',
    tags: ['acquacotta', 'zuppa', 'toscana', 'maremma'],
    visualizzazioni: 7654
  }
];

// Helper function per ottenere ricette per ID
export const getRecipeById = (id: string): Ricetta | undefined => {
  return mockRecipes.find(recipe => recipe.id === id);
};

// Helper function per ottenere ricette popolari
export const getPopularRecipes = (limit: number = 6): Ricetta[] => {
  return mockRecipes
    .filter(r => r.isPopolari)
    .sort((a, b) => b.numeroPreferiti - a.numeroPreferiti)
    .slice(0, limit);
};

// Helper function per ottenere ricetta del giorno
export const getRecipeOfTheDay = (): Ricetta | undefined => {
  return mockRecipes.find(r => r.isRicettaDelGiorno);
};

// Helper function per ottenere ricette per regione
export const getRecipesByRegion = (regione: RegioneItaliana): Ricetta[] => {
  return mockRecipes.filter(r => r.regione === regione);
};

// Helper function per ottenere ricette per tipo
export const getRecipesByType = (tipo: TipoRicetta): Ricetta[] => {
  return mockRecipes.filter(r => r.tipo === tipo);
};

// Helper function per ottenere ricette per difficoltà
export const getRecipesByDifficulty = (difficolta: DifficoltaRicetta): Ricetta[] => {
  return mockRecipes.filter(r => r.difficolta === difficolta);
};
