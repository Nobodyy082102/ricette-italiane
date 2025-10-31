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

export enum Stagione {
  PRIMAVERA = 'primavera',
  ESTATE = 'estate',
  AUTUNNO = 'autunno',
  INVERNO = 'inverno',
  TUTTO_ANNO = 'tutto_anno'
}

export enum OccasioneSpeciale {
  NATALE = 'natale',
  CAPODANNO = 'capodanno',
  PASQUA = 'pasqua',
  FERRAGOSTO = 'ferragosto',
  CARNEVALE = 'carnevale',
  DOMENICA = 'domenica',
  FESTA_COMPLEANNO = 'festa_compleanno'
}

export interface SostituzioneIngrediente {
  ingredienteOriginale: string;
  sostituto: string;
  motivo: string; // es: "Alternativa vegana", "Più economico", "Intolleranza al lattosio"
  fattoreMoltiplicazione?: number; // se le quantità cambiano
}

export interface Ingrediente {
  nome: string;
  quantita: number;
  unita: string; // es: "g", "ml", "pz", "cucchiai", "cucchiaini"
  note?: string;
  stagione?: Stagione; // quando è di stagione questo ingrediente
  costoMedio?: number; // costo in euro
  sostituzioni?: SostituzioneIngrediente[]; // alternative per questo ingrediente
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

export interface AbbinamentoVino {
  nome: string;
  tipo: 'rosso' | 'bianco' | 'rosato' | 'spumante';
  regione: RegioneItaliana;
  denominazione?: string; // es: "Chianti DOCG", "Barolo DOCG"
  perche: string; // spiegazione dell'abbinamento
  temperaturaServizio: string; // es: "16-18°C"
}

export interface ConsiglioDellaNonna {
  testo: string;
  categoria: 'tecnica' | 'ingrediente' | 'conservazione' | 'segreto' | 'storia';
}

export interface StoriaPiatto {
  origine: string; // breve storia dell'origine
  curiosita: string[]; // aneddoti interessanti
  variantiRegionali?: string; // varianti in altre regioni
}

export interface BadgeRicetta {
  id: string;
  nome: string; // es: "Master della Pasta", "Re della Pizza"
  descrizione: string;
  icona: string; // emoji o URL icona
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

  // 🍷 NUOVE FEATURE
  // 1. Abbinamenti Vini
  abbinamentoVini?: AbbinamentoVino[];

  // 2. Consigli della Nonna
  consigliNonna?: ConsiglioDellaNonna[];

  // 3. Storia del Piatto
  storia?: StoriaPiatto;

  // 4. Stagionalità
  stagioneMigliore?: Stagione[];

  // 5. Costo
  costoTotaleStimato?: number; // in euro

  // 6. Occasioni Speciali
  occasioniSpeciali?: OccasioneSpeciale[];

  // 7. Badge associati
  badgeAssociati?: BadgeRicetta[];

  // 8. Difficoltà skills richieste
  skillsRichieste?: string[]; // es: ["impastare", "friggere", "brasare"]

  // 9. Sostituzioni Ingredienti
  sostituzioniIngredienti?: SostituzioneIngrediente[];
}
