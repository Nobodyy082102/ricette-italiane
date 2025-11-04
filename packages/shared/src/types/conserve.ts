/**
 * Types per Laboratorio Conserve - Arte della conservazione
 */

export enum TipoConserva {
  PASSATA = 'passata',
  SOTTOLI = 'sottoli',
  SOTTOLIO = 'sottolio',
  SOTTACETI = 'sottaceti',
  MARMELLATA = 'marmellata',
  CONFETTURA = 'confettura',
  COMPOSTA = 'composta',
  LIQUORE = 'liquore',
  LIMONCELLO = 'limoncello',
  FORMAGGIO = 'formaggio',
  SALAME = 'salame',
  CONSERVA_POMODORO = 'conserva_pomodoro',
  CONSERVA_FRUTTA = 'conserva_frutta',
  FERMENTATO = 'fermentato',
  ALTRO = 'altro'
}

export enum StatoLavorazione {
  IN_PREPARAZIONE = 'in_preparazione',
  IN_FERMENTAZIONE = 'in_fermentazione',
  IN_STAGIONATURA = 'in_stagionatura',
  IN_CONSERVAZIONE = 'in_conservazione',
  PRONTO = 'pronto',
  CONSUMATO = 'consumato',
  SCADUTO = 'scaduto'
}

export enum FaseProcesso {
  PREPARAZIONE_INGREDIENTI = 'preparazione_ingredienti',
  COTTURA = 'cottura',
  STERILIZZAZIONE = 'sterilizzazione',
  INVASETTAMENTO = 'invasettamento',
  FERMENTAZIONE = 'fermentazione',
  STAGIONATURA = 'stagionatura',
  CONTROLLO = 'controllo',
  COMPLETATO = 'completato'
}

export interface RicettaConserva {
  id: string;
  titolo: string;
  descrizione: string;
  tipo: TipoConserva;
  fotoUrl: string;
  videoUrl?: string;

  // Difficoltà e tempi
  difficolta: 'facile' | 'media' | 'difficile' | 'esperto';
  tempoPreparazione: number; // minuti
  tempoLavorazione: number; // ore/giorni
  tempoFermentazione?: number; // giorni
  tempoStagionatura?: number; // giorni/mesi
  tempoCottura?: number; // minuti

  // Ingredienti
  ingredienti: {
    nome: string;
    quantita: number;
    unita: string;
    note?: string;
  }[];

  // Procedimento
  procedimento: {
    fase: FaseProcesso;
    numero: number;
    descrizione: string;
    durata?: number; // minuti
    temperatura?: number; // °C
    note?: string;
  }[];

  // Attrezzatura necessaria
  attrezzatura: string[]; // es: ["Vasetti sterilizzati", "Termometro", "Pentola capiente"]

  // Conservazione
  durataConservazione: number; // giorni
  metodoConservazione: string; // es: "Luogo fresco e buio", "In frigo dopo apertura"
  temperaturaConservazione: string; // es: "15-20°C"

  // Safety
  avvertenze: string[];
  controlliSicurezza: string[]; // controlli periodici necessari

  // Metadata
  regioneOrigine?: string;
  stagioneMigliore: string[];
  diffusione: 'molto_comune' | 'comune' | 'raro' | 'tradizionale';
}

export interface ProgettoConserva {
  id: string;
  userId: string;
  ricettaConservaId: string;
  nomeProgetto: string;
  tipo: TipoConserva;

  // Date
  dataInizio: Date;
  dataFinePrevisione: Date;
  dataCompletamento?: Date;

  // Stato
  statoCorrente: StatoLavorazione;
  faseCorrente: FaseProcesso;
  progressoPercentuale: number; // 0-100

  // Produzione
  numeroBatch: string; // es: "PASSATA-2024-001"
  quantitaProdotta: number;
  unitaMisura: string; // es: "vasetti", "kg", "litri"

  // Ingredienti usati
  ingredientiUtilizzati: {
    nome: string;
    quantita: number;
    unita: string;
    costo?: number;
  }[];
  costoTotale: number;

  // Tracking fermentazione/stagionatura
  timeline: TimelineConserva[];
  temperatureRegistrate: {
    data: Date;
    temperatura: number;
    umidita?: number;
    note?: string;
  }[];

  // Timer e promemoria
  timerAttivi: TimerConserva[];
  controlliProgrammati: ControlloConserva[];

  // Note e osservazioni
  note: string;
  fotoProgresso: {
    data: Date;
    url: string;
    descrizione: string;
  }[];

  // Risultato
  valutazioneFinale?: {
    sapore: number; // 1-5
    consistenza: number;
    aspetto: number;
    note: string;
  };

  // Condivisione
  isCondiviso: boolean;
  vasetti Distribuiti?: {
    destinatario: string;
    data: Date;
    numeroVasetti: number;
  }[];
}

export interface TimelineConserva {
  id: string;
  progettoId: string;
  data: Date;
  fase: FaseProcesso;
  titolo: string;
  descrizione: string;
  completato: boolean;
  fotoUrl?: string;
  alert?: boolean;
}

export interface TimerConserva {
  id: string;
  progettoId: string;
  tipo: 'fermentazione' | 'stagionatura' | 'cottura' | 'controllo' | 'scadenza';
  titolo: string;
  descrizione: string;
  dataInizio: Date;
  dataFine: Date;
  durataTotale: number; // minuti/ore/giorni
  durataRimanente: number;
  isAttivo: boolean;
  notificaScadenza: boolean;
  intervalloControllo?: number; // giorni tra controlli
  prossimoControlloData?: Date;
}

export interface ControlloConserva {
  id: string;
  progettoId: string;
  dataControllo: Date;
  tipoControllo: 'visivo' | 'olfattivo' | 'temperatura' | 'ph' | 'degustazione';
  risultato: 'ottimo' | 'buono' | 'accettabile' | 'problematico' | 'da_eliminare';
  note: string;
  parametriMisurati?: {
    temperatura?: number;
    umidita?: number;
    ph?: number;
    [key: string]: any;
  };
  fotoControllo?: string;
  azioniIntraprese?: string[];
}

export interface DispensaConserve {
  userId: string;
  conserve: {
    progettoId: string;
    nome: string;
    tipo: TipoConserva;
    quantitaRimanente: number;
    quantitaOriginale: number;
    dataCreazione: Date;
    dataScadenza: Date;
    stato: StatoLavorazione;
    posizione: string; // es: "Scaffale 2, ripiano alto"
    fotoUrl?: string;
  }[];
  statistiche: {
    numeroTotaleProgettiAttivi: number;
    numeroTotaleProgettiCompletati: number;
    vasettiTotaliProdotti: number;
    vasettiInDispensa: number;
    tipoConservaPiuProdotto: TipoConserva;
  };
}

export interface ComunityConserve {
  progetti: ProgettoConserva[];
  ricette: RicettaConserva[];
  utentiAttivi: {
    userId: string;
    userName: string;
    numeroProgettiCompletati: number;
    specialita: TipoConserva[];
  }[];
  eventi: EventoConserve[];
}

export interface EventoConserve {
  id: string;
  titolo: string;
  descrizione: string;
  tipo: 'workshop' | 'sfida' | 'festa' | 'scambio';
  dataEvento: Date;
  luogo?: string;
  online: boolean;
  conservaTema: TipoConserva;
  partecipanti: string[];
  maxPartecipanti?: number;
  ricetta Insegnata?: string;
}

export interface GuideConserve {
  id: string;
  titolo: string;
  categoria: 'sterilizzazione' | 'fermentazione' | 'stagionatura' | 'sicurezza' | 'attrezzatura';
  contenuto: string;
  videoUrl?: string;
  fotoUrl: string[];
  livello: 'principiante' | 'intermedio' | 'avanzato';
  tempoLettura: number; // minuti
}

export interface CalendarioStagionale {
  mese: number;
  anno: number;
  conserveSuggerite: {
    tipo: TipoConserva;
    ricettaId: string;
    motivo: string; // es: "Pomodori di stagione"
  }[];
  ingredientiDiStagione: string[];
}

export interface AlertSicurezza {
  id: string;
  progettoId: string;
  tipo: 'muffa' | 'odore_anomalo' | 'colore_alterato' | 'gonfiore_vasetto' | 'temperatura_alta';
  priorita: 'alta' | 'media' | 'bassa';
  messaggio: string;
  azioniRaccomand ate: string[];
  dataAlert: Date;
  isGestito: boolean;
}
