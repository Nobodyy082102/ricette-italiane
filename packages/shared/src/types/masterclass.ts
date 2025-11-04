/**
 * Types per Masterclass con Chef Stellati
 */

export enum LivelMasterclass {
  PRINCIPIANTE = 'principiante',
  INTERMEDIO = 'intermedio',
  AVANZATO = 'avanzato',
  PROFESSIONALE = 'professionale'
}

export enum TipoMasterclass {
  VIDEO_ON_DEMAND = 'video_on_demand',
  LIVE_STREAMING = 'live_streaming',
  WORKSHOP_PRESENZA = 'workshop_presenza',
  CORSO_COMPLETO = 'corso_completo',
  LEZIONE_SINGOLA = 'lezione_singola'
}

export enum StatoIscrizione {
  DISPONIBILE = 'disponibile',
  ISCRIZIONNE_APERTA = 'iscrizione_aperta',
  POSTI_LIMITATI = 'posti_limitati',
  SOLD_OUT = 'sold_out',
  IN_CORSO = 'in_corso',
  COMPLETATO = 'completato'
}

export interface ChefStellato {
  id: string;
  nome: string;
  cognome: string;
  fotoUrl: string;
  biografiaBreve: string;
  biografiaCompleta: string;

  // Riconoscimenti
  stelleMichelin: number;
  altriRiconoscimenti: string[]; // es: ["50 Best Restaurants", "Gambero Rosso"]

  // Ristorante
  nomeRistorante: string;
  cittaRistorante: string;
  stelleRistorante: number;

  // Specializzazioni
  specialita: string[]; // es: ["Cucina moderna", "Pasta fresca"]
  stile: string; // es: "Cucina contemporanea italiana"
  filosofiaCulinaria: string;

  // Social
  instagramHandle?: string;
  websiteUrl?: string;
  numeroFollowers: number;

  // Masterclass
  masterclassAttive: number;
  numeroStudenti: number;
  valutazioneMedia: number;

  // Esclusività
  isEsclusivo: boolean; // disponibile solo su questa piattaforma
}

export interface Masterclass {
  id: string;
  chefId: string;
  nomeChef: string;
  fotoChef: string;

  // Info base
  titolo: string;
  sottotitolo: string;
  descrizione: string;
  descrizioneCompleta: string;
  fotoCopertina: string;
  videoTrailer: string; // 1-2 min anteprima

  // Tipologia
  tipo: TipoMasterclass;
  livello: LivelMasterclass;
  categoria: string; // es: "Pasta", "Dolci", "Tecniche base"

  // Contenuto
  lezioni: LezioneMasterclass[];
  numeroLezioni: number;
  durataTotale: number; // minuti
  ricetteInsegnate: string[]; // IDs ricette

  // Skills insegnate
  tecnicheInsegnate: string[]; // es: ["Sfoglia a mano", "Cottura arrosto"]
  competenzeAcquisite: string[];
  attrezzaturaNecessaria: string[];

  // Programmazione (per live)
  dataInizio?: Date;
  dataFine?: Date;
  orarioLezioni?: string;
  frequenza?: 'giornaliero' | 'settimanale' | 'weekend';

  // Partecipazione
  maxPartecipanti?: number;
  partecipantiIscritti: number;
  statoIscrizione: StatoIscrizione;

  // Prezzo
  prezzo: number;
  prezzoOriginale?: number; // se c'è sconto
  hasPromo: boolean;
  incluso: string[]; // es: ["Certificato", "Ricettario PDF", "Supporto 1:1"]

  // Certificazione
  certificatoFinale: boolean;
  tipoСertificato?: string;

  // Interattività
  hasQA: boolean; // Q&A con lo chef
  hasAssegnamenti: boolean;
  hasComunita: boolean; // accesso a community studenti

  // Requisiti
  prerequisiti: string[];
  livelloRichiesto: LivelMasterclass;

  // Valutazioni
  valutazioneMedia: number;
  numeroValutazioni: number;
  recensioni: RecensioneMasterclass[];

  // Metadata
  linguaInsegnamento: string;
  sottotitoliDisponibili: string[];
  dataCreazione: Date;
  ultimoAggiornamento: Date;

  // Popolarità
  numeroStudenti: number;
  numeroCompletamenti: number;
  tassoCompletamento: number; // percentuale

  // Badges
  isBestSeller: boolean;
  isNuovo: boolean;
  isEsclusivo: boolean;
}

export interface LezioneMasterclass {
  id: string;
  masterclassId: string;
  numeroLezione: number;
  titolo: string;
  descrizione: string;

  // Contenuto
  videoUrl: string;
  durata: number; // minuti
  thumbnailUrl: string;

  // Struttura lezione
  capitoli: {
    titolo: string;
    timestamp: number; // secondi dall'inizio
    durata: number;
    descrizione: string;
  }[];

  // Materiali
  materialiDownload: {
    tipo: 'pdf' | 'video' | 'immagine' | 'altro';
    nome: string;
    url: string;
    dimensione: number; // bytes
  }[];

  // Ricette
  ricettePrincipali: string[]; // IDs ricette
  ricetteSecondarie: string[];

  // Interazione
  hasAssegnamento: boolean;
  assegnamento?: {
    titolo: string;
    descrizione: string;
    scadenza?: Date;
    tipoConsegna: 'foto' | 'video' | 'testo';
  };

  // Stato utente
  isCompletata: boolean;
  progressoVideo: number; // percentuale
  ultimoTimestamp: number; // ultimo secondo visualizzato
  note: string;

  // Anteprima
  isAnteprimaGratuita: boolean;
}

export interface IscrMasterclass {
  id: string;
  userId: string;
  masterclassId: string;
  dataIscrizione: Date;

  // Pagamento
  prezzoPageato: number;
  metodoPagamento: string;
  hasAccessoVitalizio: boolean;
  dataScadenzaAccesso?: Date;

  // Progresso
  lezioniCompletate: string[]; // IDs lezioni
  progressoPercentuale: number;
  ultimaLezioneVista: string;
  tempoTotaleVisualizzato: number; // minuti

  // Assegnamenti
  assegnamentiCompletati: {
    lezioneId: string;
    dataConsegna: Date;
    urlConsegna: string; // foto/video caricato
    feedbackChef?: string;
    voto?: number; // 1-5
  }[];

  // Interazioni
  domandeFatte: {
    lezioneId: string;
    domanda: string;
    data: Date;
    risposta?: string;
    dataRisposta?: Date;
  }[];

  // Certificato
  hasCompletato: boolean;
  dataCompletamento?: Date;
  certificatoUrl?: string;

  // Valutazione
  hasRecensione: boolean;
  recensioneId?: string;

  // Preferiti
  lezioniPreferite: string[];
  ricettePreferite: string[];
  notePersonali: {
    lezioneId: string;
    timestamp: number;
    nota: string;
    data: Date;
  }[];
}

export interface RecensioneMasterclass {
  id: string;
  masterclassId: string;
  userId: string;
  userName: string;
  userPhotoUrl?: string;

  // Valutazione
  valutazioneGenerale: number; // 1-5
  valutazioneContenuto: number;
  valutazioneChef: number;
  valutazioneRapportoQualitaPrezzo: number;

  // Recensione
  titolo: string;
  testo: string;
  dataCreazione: Date;

  // Verifica
  isAcquistoVerificato: boolean;
  haCompletatoCorso: boolean;

  // Dettagli
  cosaPiaciuto: string[];
  cosaMigliorare: string[];
  consigliataA: LivelMasterclass[];

  // Interazioni
  likes: number;
  isUtile: number; // quanti hanno trovato utile questa recensione
  commenti: CommentoRecensione[];

  // Risposta chef
  rispostaChef?: {
    testo: string;
    data: Date;
  };
}

export interface CommentoRecensione {
  id: string;
  recensioneId: string;
  userId: string;
  userName: string;
  testo: string;
  dataCreazione: Date;
}

export interface SerieCorsi {
  id: string;
  titolo: string;
  descrizione: string;
  chefId: string;

  // Masterclass incluse
  masterclassIds: string[];
  numeroCorsi: number;
  duratatotale: number; // minuti

  // Prezzo bundle
  prezzoSingoli: number; // somma prezzi individuali
  prezzoBundle: number;
  risparmio: number;

  // Progressione
  ordineSuggerito: string[]; // IDs masterclass in ordine

  // Certificazione speciale
  certificatoSerieCompleta: boolean;
  titoloRilasciato?: string; // es: "Master in Pasta Fresca"

  // Popolarità
  numeroIscritti: number;
  valutazioneMedia: number;
}

export interface LiveSession {
  id: string;
  masterclassId: string;
  chefId: string;
  titolo: string;
  descrizione: string;

  // Programmazione
  dataOra: Date;
  durata: number; // minuti
  timezone: string;

  // Streaming
  urlStreaming: string;
  platformaStreaming: string; // es: "Zoom", "YouTube Live"

  // Partecipazione
  maxPartecipanti: number;
  partecipantiIscritti: string[]; // userIds
  partecipantiPresenti: string[]; // durante la live

  // Chat
  chatAttiva: boolean;
  messaggiChat: {
    userId: string;
    userName: string;
    messaggio: string;
    timestamp: Date;
  }[];

  // Q&A
  domandeQA: {
    userId: string;
    userName: string;
    domanda: string;
    likes: number;
    rispostaChef?: string;
    timestampRisposta?: Date;
  }[];

  // Registrazione
  registrazioneDisponibile: boolean;
  urlRegistrazione?: string;
  accessoRegistrazioneFinoAl?: Date;

  // Stato
  isTerminata: boolean;
  isRegistrata: boolean;
}

export interface CertificatoCompletamento {
  id: string;
  userId: string;
  userName: string;
  masterclassId: string;
  titoloMasterclass: string;
  chefId: string;
  nomeChef: string;

  // Date
  dataIscrizione: Date;
  dataCompletamento: Date;
  durataCorso: number; // giorni

  // Dettagli completamento
  lezioniCompletate: number;
  percentualeCompletamento: number;
  voteMedio?: number; // se ci sono stati assegnamenti valutati

  // Certificato
  numeroCertificato: string; // es: "MC-2024-00123"
  urlCertificatoPDF: string;
  codicevVerifica: string; // per verificare autenticità

  // Validità
  dataEmissione: Date;
  dataScadenza?: Date; // alcuni certificati possono scadere

  // Condivisione
  isCondiviso: boolean;
  urlCondivisione?: string; // link pubblico per mostrare certificato
}

export interface SuggerimentoMasterclass {
  masterclassId: string;
  motivazione: string;
  punteggio: number; // 0-100, rilevanza
  basatoSu: 'cronologia' | 'livello' | 'interesse' | 'popolare' | 'nuovo';
}
