/**
 * Types per Cantina Virtuale + Sommelier AI
 */

export enum TipoVino {
  ROSSO = 'rosso',
  BIANCO = 'bianco',
  ROSATO = 'rosato',
  SPUMANTE = 'spumante',
  PASSITO = 'passito',
  LIQUOROSO = 'liquoroso'
}

export enum ClassificazioneQualita {
  DOCG = 'docg', // Denominazione di Origine Controllata e Garantita
  DOC = 'doc', // Denominazione di Origine Controllata
  IGT = 'igt', // Indicazione Geografica Tipica
  VINO_DA_TAVOLA = 'vino_da_tavola'
}

export enum CorpoVino {
  LEGGERO = 'leggero',
  MEDIO = 'medio',
  CORPOSO = 'corposo',
  MOLTO_CORPOSO = 'molto_corposo'
}

export enum StatoMaturazione {
  DA_INVECCHIARE = 'da_invecchiare',
  IN_EVOLUZIONE = 'in_evoluzione',
  OTTIMALE = 'ottimale',
  MATURO = 'maturo',
  DA_BERE_PRESTO = 'da_bere_presto'
}

export interface Vino {
  id: string;
  nome: string;
  cantina: string; // produttore
  denominazione?: string; // es: "Chianti Classico DOCG"
  classificazione: ClassificazioneQualita;

  // Tipologia
  tipo: TipoVino;
  annoVendemmia: number;
  regioneProduzione: string;
  zonaProduzione?: string; // es: "Montalcino", "Langhe"

  // Vitigni
  vitigni: {
    nome: string;
    percentuale: number;
  }[];

  // Caratteristiche organolettiche
  caratteristiche: {
    colore: string;
    profumo: string[];
    sapore: string[];
    corpo: CorpoVino;
    alcol: number; // percentuale
    acidita: 'bassa' | 'media' | 'alta';
    tannicita?: 'bassa' | 'media' | 'alta'; // solo rossi
    dolcezza?: 'secco' | 'abboccato' | 'amabile' | 'dolce';
  };

  // Servizio
  temperaturaServizio: {
    min: number;
    max: number;
  };
  bicchiereConsigliato: string;
  decantaggioConsigliato: boolean;
  tempoDecantaggio?: number; // minuti

  // Abbinamenti
  abbinamenti: string[]; // tipi di piatti
  ricetteSuggerite: string[]; // IDs ricette

  // Conservazione
  potenzialeInvecchiamento: number; // anni
  statoMaturazione: StatoMaturazione;
  annoOttimale: number; // anno in cui beere

  // Prezzo e disponibilità
  prezzoMedio: number; // euro
  reperibilita: 'facile' | 'media' | 'difficile' | 'raro';

  // Media
  fotoEtichetta: string;
  fotoBottiglia?: string;

  // Valutazioni
  punteggioWineAdvocate?: number; // 0-100
  punteggioGamberoRosso?: number; // 1-3 bicchieri
  punteggioDecanter?: number; // 0-100
  valutazioneUtenti: number; // media 1-5
  numeroValutazioni: number;
}

export interface BottigliaInCantina {
  id: string;
  vinoId: string;
  userId: string;

  // Dettagli acquisto
  dataAcquisto: Date;
  prezzoAcquisto: number;
  luogoAcquisto: string;
  numeroBottiglie: number;

  // Posizione in cantina
  posizione: {
    scaffale?: string;
    ripiano?: number;
    posizione?: string;
  };

  // Stato
  numeroBottiglieRimanenti: number;
  statoMaturazione: StatoMaturazione;
  annoOttimaleConsumo: number;

  // Valutazione personale
  valutazionePersonale?: {
    punteggio: number; // 1-5
    noteDegustazione: string;
    dataDegustazione: Date;
    occasione?: string;
    abbinamentoPiatto?: string;
  }[];

  // Promemoria
  alertConsumazione: boolean;
  dataAlertConsumazione?: Date;

  // Note
  note: string;
  fotoBottiglia?: string;
}

export interface CantinaVirtuale {
  userId: string;
  nomeСantina: string;
  descrizione?: string;

  // Collezione
  bottiglie: BottigliaInCantina[];
  numeroBottiglieTotali: number;
  valoreTotale: number;

  // Organizzazione
  scaffali: {
    id: string;
    nome: string;
    capacita: number;
    bottigliePresenti: number;
    temperaturaMedia?: number;
  }[];

  // Statistiche
  statistiche: {
    tipoVinoPiuComune: TipoVino;
    regionePiuRappresentata: string;
    annataMedia: number;
    valoreBottigliaPiuPregiata: number;
    numeroVitigniDiversi: number;
    numeroDenominazioni: number;
  };

  // Wishlist
  wishlist: string[]; // IDs vini desiderati

  // Impostazioni
  impostazioni: {
    temperaturaIdeale: number;
    umiditaIdeale: number;
    notificheAbilitare: boolean;
    promemoriaDegustazione: boolean;
  };
}

export interface SchedaDegustazione {
  id: string;
  userId: string;
  bottigliaId: string;
  vinoId: string;
  dataDegustazione: Date;

  // Contesto
  occasione: string; // es: "Cena con amici", "Solo a casa"
  luogo?: string;
  abbinamentoPiatto?: string;
  ricettaAbbinataId?: string;
  numeroPersone: number;

  // Analisi visiva
  analisiVisiva: {
    colore: string;
    limpidezza: 'limpido' | 'velato' | 'opaco';
    intensita: 'tenue' | 'media' | 'intensa';
    sfumature: string[];
  };

  // Analisi olfattiva
  analisiOlfattiva: {
    intensita: 'debole' | 'media' | 'intensa';
    complessita: 'semplice' | 'complesso' | 'molto_complesso';
    aromi: string[]; // es: ["frutti rossi", "spezie", "vaniglia"]
    difetti?: string[];
  };

  // Analisi gustativa
  analisiGustativa: {
    corpo: CorpoVino;
    alcol: 'basso' | 'medio' | 'alto';
    acidita: 'bassa' | 'media' | 'alta' | 'vivace';
    tannicita?: 'morbidi' | 'equilibrati' | 'astringenti';
    dolcezza: 'secco' | 'abboccato' | 'dolce';
    equilibrio: 'scarso' | 'buono' | 'ottimo';
    persistenza: 'breve' | 'media' | 'lunga' | 'molto_lunga';
    retrogusto: string;
  };

  // Valutazione globale
  valutazioneGlobale: {
    punteggio: number; // 1-5
    qualitaPrezzoGiudizio: 'scarso' | 'buono' | 'ottimo' | 'eccellente';
    ripetereAcquisto: boolean;
    commenti: string;
  };

  // Media
  foto: string[];

  // Condivisione
  isCondivisa: boolean;
  likes: number;
  commenti: CommentoDegustazione[];
}

export interface CommentoDegustazione {
  id: string;
  userId: string;
  userName: string;
  testo: string;
  dataCreazione: Date;
}

export interface SuggestioneSommelier {
  id: string;
  tipo: 'abbinamento_ricetta' | 'vino_da_comprare' | 'momento_bere' | 'temperatura' | 'decantaggio';
  priorita: 'alta' | 'media' | 'bassa';
  titolo: string;
  descrizione: string;
  vinoId?: string;
  bottigliaId?: string;
  ricettaId?: string;
  motivazione: string;
  dataCreazione: Date;
}

export interface RicercaVino {
  query?: string;
  filtri: {
    tipo?: TipoVino[];
    regione?: string[];
    classificazione?: ClassificazioneQualita[];
    annoMin?: number;
    annoMax?: number;
    prezzoMin?: number;
    prezzoMax?: number;
    corpo?: CorpoVino[];
    vitigno?: string[];
  };
  ordinamento: 'nome' | 'prezzo' | 'anno' | 'valutazione' | 'popolarita';
  risultati: Vino[];
}

export interface AbbinamentoCiboVino {
  ricettaId: string;
  titoloRicetta: string;
  viniSuggeriti: {
    vinoId: string;
    nomeVino: string;
    motivazione: string;
    punteggioAbbinamento: number; // 0-100
    temperaturaServizio: string;
    ordineServizio?: number; // se ci sono vini multipli per portate diverse
  }[];
  noteSommelier: string;
}

export interface CorsoVino {
  id: string;
  titolo: string;
  descrizione: string;
  livello: 'principiante' | 'intermedio' | 'avanzato' | 'sommelier';
  durata: number; // minuti
  numeroLezioni: number;
  lezioni: {
    numero: number;
    titolo: string;
    durata: number;
    contenuto: string;
    videoUrl?: string;
    quiz?: {
      domanda: string;
      risposte: string[];
      rispostaCorretta: number;
    }[];
  }[];
  certificato: boolean;
}

export interface EventoVino {
  id: string;
  titolo: string;
  descrizione: string;
  tipo: 'degustazione' | 'corso' | 'visita_cantina' | 'abbinamento_cibo';
  dataEvento: Date;
  luogo: string;
  online: boolean;
  cantinaCoinvolta?: string;
  viniInDegustazione: string[]; // IDs vini
  costo: number;
  maxPartecipanti?: number;
  partecipantiIscritti: string[];
}
