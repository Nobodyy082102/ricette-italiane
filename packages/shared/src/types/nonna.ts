/**
 * Types per Cucina con la Nonna Virtuale
 */

export enum DialettoRegionale {
  ITALIANO_STANDARD = 'italiano_standard',
  NAPOLETANO = 'napoletano',
  SICILIANO = 'siciliano',
  ROMANO = 'romano',
  MILANESE = 'milanese',
  VENEZIANO = 'veneziano',
  FIORENTINO = 'fiorentino',
  BOLOGNESE = 'bolognese',
  BARESE = 'barese',
  SARDO = 'sardo',
  PIEMONTESE = 'piemontese',
  ALTRO = 'altro'
}

export interface Nonna {
  id: string;
  nome: string;
  cognome: string;
  eta: number;
  regione: string;
  citta: string;
  dialetto: DialettoRegionale;
  fotoUrl: string;
  biografiaBreve: string;
  specialita: string[]; // es: ["Pasta fresca", "Dolci siciliani"]
  numeroRicette: number;
  numeroFollowers: number;
  isVerificata: boolean; // nonna "certificata"
  aneddoti: string[]; // storie personali
  mottoDiVita?: string;
}

export interface VideoNonna {
  id: string;
  nonnaId: string;
  ricettaId: string;
  titoloVideo: string;
  descrizione: string;
  urlVideo: string;
  thumbnailUrl: string;
  durata: number; // secondi
  lingua: 'dialetto' | 'italiano' | 'entrambi';
  haSottotitoli: boolean;
  sottotitoliDisponibili: string[]; // es: ["it", "en", "it-dialetto"]
  visualizzazioni: number;
  likes: number;
  commenti: CommentoVideo[];
  dataCaricamento: Date;
  timestamp: {
    inizio: number; // secondi
    fine: number;
    descrizione: string; // es: "Preparazione impasto"
    etichetta: string;
  }[];
}

export interface CommentoVideo {
  id: string;
  userId: string;
  userName: string;
  testo: string;
  dataCreazione: Date;
  likes: number;
  risposte: CommentoVideo[];
}

export interface RicettaDellaNonna {
  ricettaBaseId: string;
  nonnaId: string;
  varianteDellaNonna: string; // cosa cambia rispetto alla ricetta base
  segreti: string[]; // segreti tramandati
  storiaPersonale: string; // come la nonna ha imparato questa ricetta
  videoTutorial?: VideoNonna;
  audioPronuncia?: string; // URL audio della nonna che pronuncia ingredienti
  ingredientiDialetto?: { [ingrediente: string]: string }; // traduzione in dialetto
  noteManoscritte?: string; // URL immagine ricetta scritta a mano
  dedicaA?: string; // "Questa ricetta è dedicata a mia madre..."
}

export interface SessioneCucinaConNonna {
  id: string;
  userId: string;
  nonnaId: string;
  ricettaId: string;
  dataInizio: Date;
  dataFine?: Date;
  videoCorrente: VideoNonna;
  progressoVideo: number; // percentuale completamento
  noteUtente: string[]; // note prese durante la sessione
  domandeFatte: Domanda[];
  ricettaCompletata: boolean;
  valutazioneEsperienza?: {
    stelle: number;
    commento: string;
    difficoltaPercepita: string;
  };
}

export interface Domanda {
  id: string;
  userId: string;
  testodomanda: string;
  dataCreazione: Date;
  risposte: Risposta[];
  isRispostaDallaNonna: boolean;
}

export interface Risposta {
  id: string;
  userId: string;
  userName: string;
  isNonna: boolean;
  testo: string;
  audioUrl?: string; // se la nonna risponde con audio
  dataCreazione: Date;
  likes: number;
}

export interface CommunityNonne {
  nonne: Nonna[];
  ricetteDelleCommunity: RicettaDellaNonna[];
  videoPopolari: VideoNonna[];
  eventilive: EventoLive[];
}

export interface EventoLive {
  id: string;
  nonnaId: string;
  titolo: string;
  descrizione: string;
  ricettaDelGiorno: string;
  dataEvento: Date;
  durata: number; // minuti
  maxPartecipanti: number;
  partecipantiIscritti: string[]; // userIds
  urlStreaming: string;
  chatAttiva: boolean;
  isTerminato: boolean;
  registrazioneDisponibile?: string; // URL registrazione
}

export interface TraduzioneDialettale {
  ingrediente: string;
  italiano: string;
  dialetto: string;
  dialettoTipo: DialettoRegionale;
  pronunciaFonetica: string;
  audioUrl?: string;
}
