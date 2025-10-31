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
