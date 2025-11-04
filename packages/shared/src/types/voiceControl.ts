/**
 * Types per Controllo Vocale Hands-Free
 */

export enum StatoVoiceControl {
  IDLE = 'idle',
  LISTENING = 'listening',
  PROCESSING = 'processing',
  SPEAKING = 'speaking',
  ERROR = 'error'
}

export enum TipoComando {
  NAVIGAZIONE = 'navigazione',
  RICETTA = 'ricetta',
  TIMER = 'timer',
  INGREDIENTI = 'ingredienti',
  STEP = 'step',
  VOLUME = 'volume',
  RIPETI = 'ripeti',
  AIUTO = 'aiuto',
  PLAYLIST = 'playlist',
  ANNOTAZIONE = 'annotazione',
  ALTRO = 'altro'
}

export enum LinguaVoice {
  ITALIANO = 'it-IT',
  ITALIANO_DIALETTO = 'it-IT-dialect',
  INGLESE = 'en-US',
  SPAGNOLO = 'es-ES',
  FRANCESE = 'fr-FR'
}

export enum VoceAssistente {
  FEMMINILE_STANDARD = 'femminile_standard',
  MASCHILE_STANDARD = 'maschile_standard',
  FEMMINILE_NONNA = 'femminile_nonna', // voce anziana calda
  MASCHILE_CHEF = 'maschile_chef', // voce autorevole
  NEUTRALE = 'neutrale'
}

export interface ComandoVocale {
  id: string;
  testoRiconosciuto: string;
  testoNormalizzato: string; // senza accenti, lowercase
  confidenza: number; // 0-100
  lingua: LinguaVoice;

  // Classificazione
  tipo: TipoComando;
  intenzione: string; // es: "vai_prossimo_step", "avvia_timer"
  parametri: { [key: string]: any };

  // Contesto
  sessioneId: string;
  ricettaCorrente?: string;
  stepCorrente?: number;

  // Timing
  timestamp: Date;
  durataRegistrazione: number; // millisecondi

  // Esecuzione
  azione: AzioneVocale;
  isEseguito: boolean;
  errore?: string;
}

export interface AzioneVocale {
  tipo: string; // es: "navigate", "start_timer", "repeat"
  parametri: any;
  confermaRichiesta: boolean;
  feedbackVocale: string; // cosa dire all'utente
  feedbackVisivo?: string; // cosa mostrare su schermo
}

export interface SessioneVoice {
  id: string;
  userId: string;
  dataInizio: Date;
  dataFine?: Date;

  // Contesto
  modalita: 'cucina' | 'navigazione' | 'apprendimento' | 'libera';
  ricettaAttiva?: string;
  stepCorrente?: number;
  playlistAttiva?: string;

  // Stato
  statoCorrente: StatoVoiceControl;
  isManiLibere: boolean; // sempre attivo o push-to-talk
  isAscoltoAttivo: boolean;

  // Comandi
  comandiEseguiti: ComandoVocale[];
  numeroComandi: number;

  // Timer attivi
  timerAttivi: TimerVocale[];

  // Annotazioni vocali
  noteVocali: NotaVocaleUtente[];

  // Configurazione
  voceAssistente: VoceAssistente;
  velocitaVoce: number; // 0.5-2.0
  volumeRisposte: number; // 0-100
  lingua: LinguaVoice;

  // Performance
  tempoMedioRisposta: number; // millisecondi
  accuratezzaMedia: number; // percentuale comandi capiti correttamente
}

export interface TimerVocale {
  id: string;
  sessioneId: string;
  nomeTimer: string; // es: "Timer pasta", "Timer forno"
  durata: number; // secondi
  tempoRimanente: number;
  dataInizio: Date;
  dataFine: Date;

  // Associazione
  ricettaId?: string;
  stepRicetta?: number;

  // Notifiche
  notificaVocale: boolean;
  notificaVisiva: boolean;
  notificaVibrazione: boolean;

  // Intervalli intermedi
  notificheIntermedie: {
    secondi: number; // es: 300 = notifica a 5 min rimanenti
    messaggio: string;
    riprodotta: boolean;
  }[];

  // Stato
  isAttivo: boolean;
  isPausato: boolean;
  isCompletato: boolean;

  // Audio fine timer
  suonoFine: string; // nome file audio
  ripetizioneSuono: number;
}

export interface NotaVocaleUtente {
  id: string;
  sessioneId: string;
  userId: string;

  // Audio
  urlAudio: string;
  durata: number; // secondi
  trascrizione?: string;

  // Contesto
  ricettaId?: string;
  stepRicetta?: number;
  tipoNota: 'osservazione' | 'modifica' | 'promemoria' | 'valutazione';

  // Metadata
  dataCreazione: Date;
  tags: string[];
  isImportante: boolean;
}

export interface ConfigurazioneVoice {
  userId: string;

  // Attivazione
  modalitaManiLibere: boolean; // sempre attivo
  parolaAttivazioneCustom?: string; // es: "Hey Cucina"
  sensibilitaMicrofono: number; // 1-10

  // Voce
  vocePreferita: VoceAssistente;
  velocitaVoce: number; // 0.5 (lento) - 2.0 (veloce)
  volumeAssistente: number; // 0-100
  tono: 'normale' | 'allegro' | 'professionale';

  // Lingua
  linguaPrimaria: LinguaVoice;
  lingueSecondarie: LinguaVoice[];
  capisceDialetto: boolean;

  // Comportamento
  confermeVocali: boolean; // chiede conferma prima di azioni importanti
  feedbackVerboso: boolean; // risposte dettagliate o concise
  interruzioniPermesse: boolean; // può interrompere l'assistente

  // Contesto
  ricordaContesto: boolean; // ricorda di cosa si stava parlando
  durataMemoriaContesto: number; // minuti

  // Privacy
  salvaRegistrazioni: boolean;
  usaDatiPerMiglioramenti: boolean;

  // Accessibilità
  velocitaParlataUtente: 'lenta' | 'normale' | 'veloce';
  pauseLungheTraFrasi: boolean;
  ripetiAutomaicamenteComandi: boolean;

  // Notifiche
  notificaErroriRiconoscimento: boolean;
  suggerisciComandiAlternativi: boolean;
}

export interface ComandoPersonalizzato {
  id: string;
  userId: string;
  fraseAttivazione: string;
  varianti: string[]; // modi alternativi di dire la stessa cosa
  azione: AzioneVocale;
  categoria: TipoComando;
  descrizione: string;
  numeroUtilizzi: number;
  isAttivo: boolean;
  dataCreazione: Date;
}

export interface GuideComandi {
  categoria: TipoComando;
  comandi: {
    frase: string;
    varianti: string[];
    descrizione: string;
    esempi: string[];
    contestoRichiesto?: string; // es: "Durante una ricetta"
  }[];
}

export interface FeedbackVocale {
  comandoId: string;
  userId: string;
  testoRiconosciuto: string;
  azioneEseguita: string;

  // Valutazione
  riconoscimentoCorretto: boolean;
  azioneCorretta: boolean;
  valutazione: number; // 1-5
  commento?: string;

  // Correzione
  testoCorretto?: string; // cosa l'utente voleva davvero dire
  azioneDesiderata?: string;

  // Metadata
  dataFeedback: Date;
}

export interface StatisticheVoiceControl {
  userId: string;
  periodo: 'settimana' | 'mese' | 'totale';

  // Utilizzo
  numeroSessioniTotali: number;
  durataMediaSessione: number; // minuti
  numeroComandi Totali: number;
  comandiPerSessione: number; // media

  // Accuracy
  percentualeRiconoscimentoCorretto: number;
  percentualeAzioniCorrette: number;
  comandiPiuUsati: {
    comando: string;
    frequenza: number;
  }[];
  comandiConPiuErrori: {
    comando: string;
    errori: number;
  }[];

  // Performance
  tempoMedioRisposta: number; // millisecondi
  tempoMedimoEsecuzione: number;

  // Contesto
  modalitaPiuUsata: string;
  ricetteConVoice: number;
  timerCreati: number;
  noteVocaliCreate: number;

  // Miglioramenti
  accuratezzaTrend: number[]; // array accuratezza per settimana
  comandiAppresi: number; // comandi personalizzati creati
}

export interface ContestoConversazione {
  sessioneId: string;
  ultimiComandi: ComandoVocale[]; // ultimi 10 comandi
  temaCorrente: string; // es: "ricetta_carbonara", "timer"
  entitaMenzionate: {
    tipo: 'ricetta' | 'ingrediente' | 'timer' | 'step';
    valore: string;
    ultimaMenzione: Date;
  }[];

  // Memoria
  ricordaDa: Date; // da quando ricorda il contesto
  scadeIl: Date; // quando dimentica
  isContestoAttivo: boolean;
}

export interface ErroreVoice {
  id: string;
  sessioneId: string;
  tipo: 'riconoscimento' | 'comprensione' | 'esecuzione' | 'network' | 'microfono';
  messaggio: string;
  dettagliTecnici: string;
  comandoTentato?: string;
  timestamp: Date;

  // Recupero
  tentativoRecupero: boolean;
  comandoAlternativoSuggerito?: string;
  isRisolto: boolean;
}

export interface ModalitaCucinaVocale {
  sessioneId: string;
  ricettaId: string;

  // Navigazione step
  stepCorrente: number;
  numeroStepTotali: number;

  // Timer attivi per questa ricetta
  timerAttivi: TimerVocale[];

  // Lettura automatica
  letturaAutomaticaStep: boolean; // legge ogni step automaticamente
  attesaConfermaStep: boolean; // aspetta "ho finito" prima di andare avanti

  // Promemoria
  promemoriaTempoCottura: boolean;
  promemoriaMescolare: boolean;

  // Ingredienti
  leggiIngridientiiPrima: boolean;
  ripetiIngredientiSeRichiesto: boolean;

  // Assistenza
  suggerisciTecniche: boolean; // spiega tecniche se richiesto
  avvisaPassaggiCritici: boolean; // "Attenzione, questo passaggio è delicato"

  // Emergenze
  comandiEmergenza: {
    "metti in pausa": () => void;
    "help": () => void;
    "ricomincia": () => void;
  };
}

export interface IntegrazioneMusicaVoice {
  sessioneId: string;
  playlistCorrenteId?: string;
  branoCorrenteId?: string;

  // Controlli disponibili
  comandiDisponibili: string[]; // ["play", "pausa", "avanti", "indietro", "volume"]

  // Sincronizzazione
  volumeMusicaDuranteVoice: number; // abbassa musica quando parla l'assistente
  pausaMusicaDuranteComandi: boolean;

  // Contestuale
  cambiaPlaylistPerRicetta: boolean; // cambia musica in base alla ricetta
}
