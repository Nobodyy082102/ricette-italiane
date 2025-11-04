/**
 * Types per Zero Sprechi AI - Tracking scadenze e suggerimenti
 */

export enum StatoIngrediente {
  FRESCO = 'fresco',
  BUONO = 'buono',
  DA_CONSUMARE_PRESTO = 'da_consumare_presto',
  IN_SCADENZA = 'in_scadenza',
  SCADUTO = 'scaduto'
}

export enum CategoriaDispensa {
  FRIGO = 'frigo',
  FREEZER = 'freezer',
  DISPENSA = 'dispensa',
  CANTINA = 'cantina',
  ALTRO = 'altro'
}

export interface IngredienteTracciato {
  id: string;
  nome: string;
  categoria: string;
  quantita: number;
  unita: string;

  // Scadenze
  dataAcquisto: Date;
  dataScadenza: Date;
  giorniAllaScadenza: number;
  stato: StatoIngrediente;

  // Localizzazione
  posizione: CategoriaDispensa;
  scaffale?: string; // es: "Piano superiore", "Porta"

  // Valore
  prezzoAcquisto?: number;
  valoreResiduo: number; // prezzo x quantità rimasta

  // Tracking
  quantitaOriginale: number;
  percentualeConsumo: number; // 0-100

  // Suggerimenti
  ricetteSuggerite: string[]; // IDs ricette che usano questo ingrediente
  prioritaUtilizzo: 'alta' | 'media' | 'bassa';
}

export interface NotificaScadenza {
  id: string;
  ingredienteId: string;
  nomeIngrediente: string;
  tipo: 'scadenza_imminente' | 'scaduto' | 'promemoria';
  messaggio: string;
  dataNotifica: Date;
  giorniAllaScadenza: number;
  isLetta: boolean;
  azioni: {
    tipo: 'vedi_ricette' | 'rimuovi' | 'estendi_scadenza';
    label: string;
  }[];
}

export interface RicettaAntiSpreco {
  ricettaId: string;
  titoloRicetta: string;
  fotoUrl: string;
  difficolta: string;
  tempoTotale: number;

  // Match con ingredienti
  ingredientiInScadenzaUtilizzati: string[];
  numeroIngredientiSalvati: number;
  valoreEconomicoSalvato: number;

  // Priorità
  priorita: number; // calcolata in base a scadenze
  motivazione: string; // es: "Salva 3 ingredienti in scadenza domani"
  urgenza: 'alta' | 'media' | 'bassa';
}

export interface StatisticheSprechi {
  userId: string;
  periodo: 'settimana' | 'mese' | 'anno' | 'totale';

  // Risparmio
  ingredientiSalvati: number;
  valoreEconomicoRisparmiato: number; // euro
  kg CO2Evitati: number;
  kgCiboSalvato: number;

  // Sprechi
  ingredientiScaduti: number;
  valoreEconomicoSprecato: number;
  kgCiboSprecato: number;

  // Dettagli
  categorieConPiuSprechi: {
    categoria: string;
    numeroIngredienti: number;
    valoreSpreco: number;
  }[];
  ricettePiuUtiliAntiSpreco: {
    ricettaId: string;
    volteUsata: number;
    ingredientiSalvati: number;
  }[];

  // Confronti
  mediaUtenti: number; // valore medio sprechi altri utenti
  posizionClassifica: number;
  percentileSpreco: number; // 0-100, più basso è meglio
}

export interface SuggerimentoAI {
  id: string;
  tipo: 'ricetta' | 'conservazione' | 'acquisto' | 'donazione';
  priorita: 'alta' | 'media' | 'bassa';
  titolo: string;
  descrizione: string;
  motivazione: string;
  ingredientiCoinvolti: string[];
  azioniSuggerite: {
    tipo: string;
    label: string;
    url?: string;
  }[];
  stimaRisparmio?: number; // euro
  dataCreazione: Date;
  isAttivo: boolean;
}

export interface Dispensa {
  userId: string;
  ultimoAggiornamento: Date;
  ingredientiTracciati: IngredienteTracciato[];

  // Organizzazione
  frigo: IngredienteTracciato[];
  freezer: IngredienteTracciato[];
  dispensa: IngredienteTracciato[];

  // Statistiche rapide
  numeroTotaleIngredienti: number;
  numeroIngredientiInScadenza: number;
  numeroIngredientiScaduti: number;
  valoreInventario: number;
  valoreARischio: number; // valore ingredienti in scadenza
}

export interface ReportMensile {
  userId: string;
  mese: number;
  anno: number;

  // Riepilogo
  ingredientiGestiti: number;
  percentualeSpreco: number;
  valoreRisparmiato: number;
  valoreSprecato: number;

  // Andamento
  confrontoMeseScorso: {
    variazioneSpreco: number; // positivo = miglioramento
    variazioneRisparmio: number;
  };

  // Obiettivi
  obiettiveSpreco: number; // target percentuale
  obiettivo Raggiunto: boolean;

  // Consigli
  consigliPersonalizzati: string[];
  badgeOttenuti: string[];
}

export interface AlertScadenza {
  id: string;
  userId: string;
  ingredienteId: string;
  tipoAlert: 'oggi' | 'domani' | '3_giorni' | 'settimana';
  messaggio: string;
  ricetteSuggeriteIds: string[];
  dataAlert: Date;
  isGestito: boolean;
  azioneIntrapresa?: 'cucinato' | 'congelato' | 'donato' | 'eliminato';
}

export interface ConfigurazioneAntiSpreco {
  userId: string;

  // Notifiche
  notificheAttive: boolean;
  preavvisoGiorni: number[]; // es: [1, 3, 7] = notifica a 7, 3, 1 giorno
  orarioNotifiche: string; // es: "18:00"

  // Tracking automatico
  trackingAutomatico: boolean;
  integrazioneSpesa: boolean; // integra con scanner frigo

  // Obiettivi
  obiettiveSprecoMensile: number; // percentuale target
  budgetMensileSpesa: number;

  // Preferenze
  prioritaRicette: 'veloce' | 'economico' | 'salutare' | 'tradizionale';
  accettaRicetteSvuotaFrigo: boolean;
}

export interface DonazioneAlimentare {
  id: string;
  userId: string;
  ingredienti: {
    ingredienteId: string;
    nome: string;
    quantita: number;
    unita: string;
  }[];
  organizzazioneDestinataria?: string;
  datadonazione: Date;
  valoreStimato: number;
  note?: string;
  certificatoDonazione?: string; // URL certificato fiscale
}
