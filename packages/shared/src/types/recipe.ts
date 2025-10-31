/**
 * Tipi per le ricette italiane
 */

export enum DifficoltaRicetta {
  FACILE = 'facile',
  MEDIA = 'media',
  DIFFICILE = 'difficile'
}

export enum TipoRicetta {
  PRIMI = 'primi',
  SECONDI = 'secondi',
  CONTORNI = 'contorni',
  DOLCI = 'dolci',
  ANTIPASTI = 'antipasti',
  PIZZE_FOCACCE = 'pizze_focacce',
  REGIONALI = 'regionali'
}

export enum FiltroAlimentare {
  VEGETARIANO = 'vegetariano',
  VEGANO = 'vegano',
  SENZA_GLUTINE = 'senza_glutine',
  SENZA_LATTOSIO = 'senza_lattosio'
}

export enum RegioneItaliana {
  ABRUZZO = 'abruzzo',
  BASILICATA = 'basilicata',
  CALABRIA = 'calabria',
  CAMPANIA = 'campania',
  EMILIA_ROMAGNA = 'emilia_romagna',
  FRIULI_VENEZIA_GIULIA = 'friuli_venezia_giulia',
  LAZIO = 'lazio',
  LIGURIA = 'liguria',
  LOMBARDIA = 'lombardia',
  MARCHE = 'marche',
  MOLISE = 'molise',
  PIEMONTE = 'piemonte',
  PUGLIA = 'puglia',
  SARDEGNA = 'sardegna',
  SICILIA = 'sicilia',
  TOSCANA = 'toscana',
  TRENTINO_ALTO_ADIGE = 'trentino_alto_adige',
  UMBRIA = 'umbria',
  VALLE_DAOSTA = 'valle_daosta',
  VENETO = 'veneto'
}

export interface Ingrediente {
  nome: string;
  quantita: number;
  unita: string; // es: "g", "ml", "pz", "cucchiai", "cucchiaini"
  note?: string;
}

export interface PassoProcedimento {
  numero: number;
  descrizione: string;
  fotoUrl?: string;
  tempoCottura?: number; // in minuti
  suggerimenti?: string;
}

export interface ValoriNutrizionali {
  calorie: number;
  proteine: number; // grammi
  carboidrati: number; // grammi
  grassi: number; // grammi
  fibre?: number; // grammi
}

export interface Commento {
  id: string;
  userId: string;
  userName: string;
  userPhotoUrl?: string;
  testo: string;
  valutazione: number; // 1-5 stelle
  dataCreazione: Date;
}

export interface Ricetta {
  id: string;
  titolo: string;
  descrizione: string;
  fotoUrl: string;
  videoUrl?: string; // YouTube o storage proprio

  // Categorizzazione
  difficolta: DifficoltaRicetta;
  tipo: TipoRicetta;
  regione?: RegioneItaliana;
  filtriAlimentari: FiltroAlimentare[];

  // Ingredienti e procedimento
  ingredienti: Ingrediente[];
  procedimento: PassoProcedimento[];

  // Tempi
  tempoPreparazione: number; // minuti
  tempoCottura: number; // minuti
  tempoTotale: number; // minuti

  // Porzioni
  porzioni: number;

  // Info nutrizionali (opzionale)
  valoriNutrizionali?: ValoriNutrizionali;

  // Social e interazioni
  commenti: Commento[];
  valutazioneMedia: number;
  numeroValutazioni: number;
  numeroPreferiti: number;

  // Metadata
  dataCreazione: Date;
  dataUltimaModifica: Date;
  autore: string;
  tags: string[];

  // Popolarità
  visualizzazioni: number;
  isPopolari?: boolean;
  isRicettaDelGiorno?: boolean;
}
