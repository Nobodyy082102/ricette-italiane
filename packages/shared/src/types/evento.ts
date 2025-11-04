/**
 * Types per Modalità Evento - Pianificazione cene e pranzi
 */

export enum TipoEvento {
  CENA_ROMANTICA = 'cena_romantica',
  PRANZO_FAMIGLIA = 'pranzo_famiglia',
  CENA_AMICI = 'cena_amici',
  COMPLEANNO = 'compleanno',
  ANNIVERSARIO = 'anniversario',
  NATALE = 'natale',
  CAPODANNO = 'capodanno',
  PASQUA = 'pasqua',
  FERRAGOSTO = 'ferragosto',
  BATTESIMO = 'battesimo',
  COMUNIONE = 'comunione',
  LAUREA = 'laurea',
  BUFFET = 'buffet',
  APERITIVO = 'aperitivo',
  BRUNCH = 'brunch',
  CENA_AZIENDALE = 'cena_aziendale',
  ALTRO = 'altro'
}

export enum FasePreparazione {
  PIANIFICAZIONE = 'pianificazione',
  SPESA = 'spesa',
  PREP_ANTICIPO = 'preparazione_anticipo',
  GIORNO_PRIMA = 'giorno_prima',
  GIORNO_EVENTO = 'giorno_evento',
  SERVIZIO = 'servizio',
  COMPLETATO = 'completato'
}

export enum StatoTask {
  DA_FARE = 'da_fare',
  IN_CORSO = 'in_corso',
  COMPLETATO = 'completato',
  SALTATO = 'saltato'
}

export interface Evento {
  id: string;
  userId: string;
  nomeEvento: string;
  tipo: TipoEvento;
  descrizione: string;

  // Data e ora
  dataEvento: Date;
  oraInizio: string; // es: "20:00"
  durataStimata: number; // ore

  // Partecipanti
  numeroOspiti: number;
  ospiti: {
    nome: string;
    allergie?: string[];
    intolleranze?: string[];
    preferenze?: string[];
    isDietaSpeciale: boolean;
  }[];

  // Location
  luogo: string;
  isACasa: boolean;

  // Menu
  menu: MenuEvento;

  // Budget
  budgetTotale: number;
  costoStimato: number;
  costoPerPersona: number;

  // Pianificazione
  faseCorrente: FasePreparazione;
  progressoPercentuale: number; // 0-100

  // Timeline
  timeline: TimelineEvento;

  // Lista spesa
  listaSpesaEvento: {
    ingrediente: string;
    quantita: number;
    unita: string;
    costo: number;
    acquistat o: boolean;
    categoria: string;
  }[];

  // Task
  task: TaskEvento[];

  // Attrezzatura
  attrezzaturaNecessaria: string[];
  attrezzaturaMancante: string[];

  // Note
  note: string;
  fotoispirazione: string[];

  // Stato
  isConfermato: boolean;
  isPubblico: boolean;
  dataCreazione: Date;
  ultimoAggiornamento: Date;
}

export interface MenuEvento {
  eventoId: string;

  // Struttura menu
  portate: Portata[];
  numeroPortate: number;

  // Timing
  tempoPreparazioneTotale: number; // minuti
  tempoCucinaTotale: number; // minuti
  durataServizio: number; // minuti

  // Caratteristiche
  stile: 'tradizionale' | 'moderno' | 'fusion' | 'regionale' | 'elegante' | 'rustico';
  tema?: string; // es: "Mare", "Montagna", "Toscana"

  // Vini
  abbinamentoVini: {
    portataId: string;
    vinoId?: string;
    nomeVino: string;
    tipoVino: string;
    quantitaNecessaria: number; // bottiglie
    temperaturaServizio: string;
    ordineServizio: number;
  }[];

  // Totali nutrizionali
  calorieTotali: number;
  caloriePerPersona: number;

  // Validazione
  isEquilibrato: boolean;
  variazioniDisponibili: string[];
  compatibilitaAllergie: boolean;
}

export interface Portata {
  id: string;
  menuId: string;
  ordine: number;
  tipoPortata: 'antipasto' | 'primo' | 'secondo' | 'contorno' | 'dolce' | 'frutta' | 'caffe';
  nome: string;

  // Ricette
  ricettaPrincipaleId: string;
  titoloRicetta: string;
  fotoRicetta: string;
  ricetteAlternative?: string[]; // IDs

  // Timing
  tempoPreparazione: number; // minuti
  tempoCottura: number;
  quando Preparare: Date; // momento specifico preparazione
  quandoServire: Date;

  // Stato preparazione
  preparataAnticipo: boolean;
  giorniAnticipoMax: number; // quanti giorni prima si può preparare
  istruzioniConservazione?: string;

  // Caratteristiche
  difficolta: 'facile' | 'media' | 'difficile';
  servizioCaldo: boolean;
  temperaturaServizio: number; // °C

  // Presentazione
  istruzioniImpiattamento: string;
  decorazioni: string[];
  piattieriaConsigliata: string;

  // Quantità
  porzioniPerPersona: number;
  quantitaTotale: string;

  // Stato
  isPronta: boolean;
  isServita: boolean;
  note: string;
}

export interface TimelineEvento {
  eventoId: string;
  dataEvento: Date;

  // Momenti chiave
  momenti: MomentoTimeline[];

  // Contatori
  giorniMancanti: number;
  oreMancanti: number;
  prossimoTaskImportante?: TaskEvento;

  // Sincronizzazione
  tuttoPronetoPerOra: { [ora: string]: boolean };
  alertRitardi: {
    task: string;
    ritardoMinuti: number;
    impatto: 'basso' | 'medio' | 'alto';
  }[];
}

export interface MomentoTimeline {
  id: string;
  timelineId: string;
  dataOra: Date;
  oraPrevista: string;
  tipo: 'spesa' | 'preparazione' | 'cottura' | 'refrigerazione' | 'servizio' | 'altro';
  titolo: string;
  descrizione: string;
  durata: number; // minuti
  portateCollegate?: string[]; // IDs portate
  taskCollegati: string[]; // IDs task

  // Stato
  isCompletato: boolean;
  isCritico: boolean; // momento fondamentale che non può slittare
  dipendeDa?: string[]; // IDs altri momenti

  // Alert
  alertMinutiPrima: number;
  haNotifica: boolean;
}

export interface TaskEvento {
  id: string;
  eventoId: string;
  titolo: string;
  descrizione: string;
  categoria: 'spesa' | 'preparazione' | 'pulizie' | 'allestimento' | 'cucina' | 'servizio' | 'altro';

  // Timing
  dataOraInizio: Date;
  dataOraFine: Date;
  durata: number; // minuti
  fasePreparazione: FasePreparazione;

  // Priorità
  priorita: 'bassa' | 'media' | 'alta' | 'critica';
  isCritico: boolean;

  // Dipendenze
  dipendeDa: string[]; // IDs altri task
  bloccaTask: string[]; // IDs task che dipendono da questo

  // Assegnazione
  assegnatoA?: string; // se si cucina in team
  luogo?: string; // dove va fatto

  // Stato
  stato: StatoTask;
  progressoPercentuale: number;

  // Promemoria
  notificaMinutiPrima: number;
  haNotifica: boolean;

  // Note
  note: string;
  checklistSottoTask?: {
    descrizione: string;
    completato: boolean;
  }[];
}

export interface TemplateEvento {
  id: string;
  nome: string;
  descrizione: string;
  tipoEvento: TipoEvento;
  numeroOspitiMin: number;
  numeroOspitiMax: number;

  // Menu predefinito
  portateTemplate: {
    tipo: string;
    ricettaSuggerita: string;
    alternative: string[];
  }[];

  // Budget
  budgetStimatoMin: number;
  budgetStimatoMax: number;

  // Timing
  giorniPreparazioneConsigliati: number;
  durataEventoMedia: number; // ore

  // Popolarità
  numeroUtilizzi: number;
  valutazioneMedia: number;
  recensioni: {
    userId: string;
    commento: string;
    valutazione: number;
    data: Date;
  }[];

  // Consigli
  consigli: string[];
  erroriComuni: string[];
}

export interface ChecklistEvento {
  eventoId: string;
  categorie: {
    nome: string; // es: "3 giorni prima", "Il giorno prima", "Il giorno stesso"
    items: {
      testo: string;
      completato: boolean;
      importante: boolean;
    }[];
  }[];
  progressoTotale: number; // 0-100
}

export interface CalcolatorePortate {
  numeroOspiti: number;
  tipoEvento: TipoEvento;
  durataEvento: number;

  // Suggerimenti quantità
  quantitaSuggerite: {
    categoria: string; // es: "Antipasti", "Primi"
    quantitaPerPersona: number;
    unita: string;
    quantitaTotale: number;
    note: string;
  }[];

  // Bevande
  bevandeSuggerite: {
    tipo: string; // "Vino bianco", "Acqua", "Caffè"
    quantitaPerPersona: number;
    quantitaTotale: number;
    unita: string;
  }[];

  // Pane e grissini
  paneGrissini: {
    quantita: number;
    tipo: string;
  };
}

export interface PianoDiServizio {
  eventoId: string;

  // Ordine servizio
  sequenzaPortate: {
    portataId: string;
    ordine: number;
    oraPrevista: string;
    durataServizio: number; // minuti
    istruzioni: string;
  }[];

  // Mise en place
  tavola: {
    postiATavola: number;
    disposizionePosti?: string; // URL immagine schema
    piattieriaPerPortata: { [portata: string]: string[] };
    bicchieri: string[];
    posate: string[];
    decorazioniTavola: string[];
  };

  // Temperatura e conservazione
  piattiCaldi: string[];
  piattiFreddi: string[];
  istruzioniMantenimentoTemperatura: string[];

  // Emergenze
  pianB: {
    problema: string;
    soluzione: string;
  }[];
}
