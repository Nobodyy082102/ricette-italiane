/**
 * Types per Libro di Famiglia Digitale
 */

export enum TipoContenuto {
  RICETTA_TESTO = 'ricetta_testo',
  RICETTA_MANOSCRITTA = 'ricetta_manoscritta',
  NOTA_VOCALE = 'nota_vocale',
  FOTO_STORICA = 'foto_storica',
  VIDEO = 'video',
  ANEDDOTO = 'aneddoto'
}

export enum StatoOCR {
  IN_ATTESA = 'in_attesa',
  ELABORAZIONE = 'elaborazione',
  COMPLETATO = 'completato',
  ERRORE = 'errore',
  REVISIONE_NECESSARIA = 'revisione_necessaria'
}

export interface MembroFamiglia {
  id: string;
  nome: string;
  cognome: string;
  relazione: string; // es: "Nonna paterna", "Zia Maria", "Mamma"
  fotoUrl?: string;
  annoNascita?: number;
  annoMorte?: number;
  biografia?: string;
  luogoOrigine: string;
  numeroRicetteContribuite: number;
}

export interface RicettaFamiliare {
  id: string;
  titoloOriginale: string;
  membroFamigliaId: string;
  nomemembro: string;
  relazione: string;
  dataCreazione: Date; // quando è stata aggiunta al libro digitale
  annoApprossimativo?: number; // anno approssimativo della ricetta originale
  occasioneOrigine?: string; // es: "Natali degli anni '60"

  // Contenuto originale
  contenutoOriginale: {
    tipo: TipoContenuto;
    urlFile?: string; // foto ricetta scritta a mano, audio, video
    trascrizione?: string; // testo trascritto (manuale o OCR)
    statoOCR?: StatoOCR;
    confidenzaOCR?: number; // 0-100
  };

  // Ricetta strutturata (conversione dalla originale)
  ricettaStrutturata?: {
    ingredienti: string[];
    procedimento: string[];
    note: string[];
    tempoPreparazione?: number;
    porzioni?: number;
  };

  // Metadati storici
  storiaRicetta: string; // racconto di come è nata la ricetta
  ricordi: Ricordo[]; // ricordi legati a questa ricetta
  variazioniNelTempo: string[]; // come è cambiata negli anni

  // Media associati
  fotoStoriche: FotoStorica[];
  noteVocali: NotaVocale[];

  // Interazioni famiglia
  commentiFamiglia: CommentoFamiliare[];
  numeroVolteRipreparata: number;
  ultimaPreparazione?: Date;

  // Privacy
  isPrivata: boolean; // visibile solo alla famiglia
  famigliaCondivisa: string[]; // userIds membri famiglia
  permessiModifica: string[]; // chi può modificare
}

export interface FotoStorica {
  id: string;
  url: string;
  descrizione: string;
  anno?: number;
  luogo?: string;
  personeNellaFoto: string[]; // nomi delle persone
  dataCaricamento: Date;
}

export interface NotaVocale {
  id: string;
  urlAudio: string;
  durata: number; // secondi
  membroFamigliaId: string;
  nomeMembro: string;
  trascrizione?: string;
  dataRegistrazione?: Date;
  dataCaricamento: Date;
  descrizione: string;
}

export interface Ricordo {
  id: string;
  userId: string;
  userName: string;
  testo: string;
  emoji?: string;
  dataCreazione: Date;
  likes: number;
}

export interface CommentoFamiliare {
  id: string;
  userId: string;
  userName: string;
  relazione: string;
  testo: string;
  dataCreazione: Date;
  risposte: CommentoFamiliare[];
}

export interface LibroFamiglia {
  id: string;
  nomeFamiglia: string;
  cognomeFamiglia: string;
  descrizione?: string;
  fotoCopertina?: string;
  regioineOrigine: string[];

  // Contenuto
  ricette: RicettaFamiliare[];
  membri: MembroFamiglia[];

  // Statistiche
  dataCreazione: Date;
  ultimoAggiornamento: Date;
  numeroRicetteTotali: number;
  numeroGenerazioni: number;

  // Condivisione
  proprietarioId: string;
  membriConAccesso: {
    userId: string;
    userName: string;
    ruolo: 'proprietario' | 'editore' | 'lettore';
    dataAggiunta: Date;
  }[];

  // Privacy
  isPubblico: boolean;
  codiceInvito?: string; // per invitare membri famiglia
}

export interface ProcessoOCR {
  id: string;
  ricettaFamiliareId: string;
  immagineOriginale: string;
  immaginePreprocessata?: string;
  testoEstratto: string;
  confidenza: number;
  stato: StatoOCR;
  errori?: string[];
  suggerimentiCorrezioni: {
    testoOriginale: string;
    testoProposto: string;
    confidenza: number;
  }[];
  dataInizio: Date;
  dataCompletamento?: Date;
}

export interface AlberoGenealogicoCulinario {
  famigliaId: string;
  nodi: {
    membroId: string;
    nome: string;
    relazione: string;
    ricetteOriginali: string[]; // IDs ricette create da questo membro
    ricetteTramandate: string[]; // IDs ricette imparate da altri
    generazione: number;
  }[];
  collegamenti: {
    da: string; // membroId
    a: string; // membroId
    ricettaTramandata: string; // ricettaId
    anno?: number;
  }[];
}

export interface StatisticheFamiglia {
  numeroTotaleRicette: number;
  numeroMembriContributori: number;
  numeroGenerazioni: number;
  regioniRappresentate: string[];
  ricettaPiuAntica: {
    ricettaId: string;
    titolo: string;
    anno: number;
  };
  membroPiuProduttivo: {
    membroId: string;
    nome: string;
    numeroRicette: number;
  };
  ricettaPiuRipreparata: {
    ricettaId: string;
    titolo: string;
    volte: number;
  };
}
