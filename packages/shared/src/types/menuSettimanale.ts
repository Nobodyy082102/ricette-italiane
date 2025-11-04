/**
 * Types per Menu Settimanale Intelligente
 */

export enum TipoPasto {
  COLAZIONE = 'colazione',
  SPUNTINO_MATTINA = 'spuntino_mattina',
  PRANZO = 'pranzo',
  MERENDA = 'merenda',
  CENA = 'cena',
  DOPOCENA = 'dopocena'
}

export enum GiornoSettimana {
  LUNEDI = 'lunedi',
  MARTEDI = 'martedi',
  MERCOLEDI = 'mercoledi',
  GIOVEDI = 'giovedi',
  VENERDI = 'venerdi',
  SABATO = 'sabato',
  DOMENICA = 'domenica'
}

export enum ObiettivoDieta {
  EQUILIBRATO = 'equilibrato',
  DIMAGRIMENTO = 'dimagrimento',
  AUMENTO_MASSA = 'aumento_massa',
  MANTENIMENTO = 'mantenimento',
  VEGETARIANO = 'vegetariano',
  VEGANO = 'vegano',
  LOW_CARB = 'low_carb',
  MEDITERRANEO = 'mediterraneo'
}

export enum StrategiaSpesa {
  ECONOMICO = 'economico', // minimizza costi
  QUALITA = 'qualita', // ingredienti premium
  BILANCIATO = 'bilanciato',
  VELOCE = 'veloce', // ricette rapide
  ZERO_SPRECHI = 'zero_sprechi' // riutilizzo ingredienti
}

export interface PastoGiornaliero {
  id: string;
  giorno: GiornoSettimana;
  data: Date;
  tipoPasto: TipoPasto;
  ricettaId?: string;
  titoloRicetta?: string;
  descrizione?: string;

  // Nutrizionali
  calorie: number;
  proteine: number;
  carboidrati: number;
  grassi: number;

  // Timing
  oraPrevista: string; // es: "13:00"
  tempoPrepara zione: number; // minuti

  // Ingredienti
  ingredienti: string[];

  // Stato
  isPre parato: boolean;
  isConsumato: boolean;
  note?: string;

  // Varianti
  variantiSuggerite?: string[]; // IDs ricette alternative
}

export interface MenuSettimanale {
  id: string;
  userId: string;
  settimana: number; // numero settimana anno
  anno: number;
  dataInizio: Date;
  dataFine: Date;

  // Configurazione
  numeroPersone: number;
  obiettivoDieta: ObiettivoDieta;
  strategiaSpesa: StrategiaSpesa;
  budget: number; // euro settimanali

  // Pasti
  pasti: PastoGiornaliero[];

  // Riassunto nutrizionale
  totaleNutrizionale: {
    calorieTotali: number;
    calorieGiornaliereMedia: number;
    proteineTotali: number;
    carboidratiTotali: number;
    grassiTotali: number;
    fibreTotali: number;
    bilanciamento: {
      proteine: number; // percentuale
      carboidrati: number;
      grassi: number;
    };
  };

  // Lista spesa
  listaSpesa: ListaSpesa;

  // Costi
  costoTotaleStimato: number;
  costoPerPersona: number;
  rispetaBudget: boolean;

  // Ottimizzazioni
  ingredientiRiutilizzati: {
    ingrediente: string;
    numeroRicette: number;
    quantitaTotale: number;
  }[];

  // Varietà
  regioniRappresentate: string[];
  tipiPiattoVarieta: { [tipo: string]: number };

  // Stato
  isGenerato: boolean;
  isAttivo: boolean;
  dataGenerazione: Date;
}

export interface ListaSpesa {
  menuId: string;
  dataCreazione: Date;
  ultimoAggiornamento: Date;

  // Ingredienti organizzati per categoria
  categorieSpesa: {
    categoria: string; // es: "Frutta e Verdura", "Carne e Pesce"
    ingredienti: IngredienteSpesa[];
    costoCategoria: number;
  }[];

  // Totali
  numeroArticoli: number;
  costoTotale: number;

  // Negozi suggeriti
  negozi Suggeriti: {
    nomeNegozio: string;
    tipoNegozio: 'supermercato' | 'mercato' | 'produttore_locale' | 'online';
    distanza?: number; // km
    risparmioStimato?: number; // euro
    articoliDisponibili: string[];
  }[];

  // Stato
  articoliAcquistati: string[];
  percentualeCompletamento: number;
  isCompletata: boolean;
}

export interface IngredienteSpesa {
  nome: string;
  quantita: number;
  unita: string;
  prezzoUnitario: number;
  prezzoTotale: number;

  // Utilizzo
  ricetteUtilizzo: string[]; // IDs ricette che usano questo ingrediente
  giorniUtilizzo: GiornoSettimana[];

  // Opzioni
  sostituzioniPossibili?: {
    ingrediente: string;
    differenzaPrezzo: number;
  }[];

  // Stato
  isAcquistato: boolean;
  isDisponibileInCasa: boolean;
  isOpzionale: boolean;

  // Metadata
  categoria: string;
  stagionale: boolean;
  biologico?: boolean;
  kmZero?: boolean;
}

export interface PreferenzePianificazione {
  userId: string;

  // Famiglia
  numeroPersone: number;
  eta: {
    adulti: number;
    bambini: number;
  };
  allergie: string[];
  intolleranze: string[];
  preferenzeAlimentari: string[]; // es: ["Amo il pesce", "Non mi piacciono i funghi"]

  // Dieta
  obiettivoDieta: ObiettivoDieta;
  calorieGiornaliere: number;
  macronutrienti: {
    proteine: number; // percentuale
    carboidrati: number;
    grassi: number;
  };

  // Budget e tempo
  budgetSettimanale: number;
  strategiaSpesa: StrategiaSpesa;
  tempoMaxPreparazione: number; // minuti per pasto

  // Preferenze culinarie
  regioniPreferite: string[];
  tipiPiattoPreferiti: string[];
  livelloDifficoltaMax: 'facile' | 'media' | 'difficile';

  // Giorni speciali
  giorniPranzoFuoriCasa: GiornoSettimana[]; // es: lavoro
  giorniCenaElegante: GiornoSettimana[];  // es: weekend

  // Rotazione
  frequenzaRotazioneRicette: number; // settimane prima di ripetere ricetta
  evitaRipetizioniIngrediente: boolean;

  // Sostenibilità
  prioritaKmZero: boolean;
  prioritaBiologico: boolean;
  prioritaStagionale: boolean;
}

export interface SuggerimentoAIMenu {
  id: string;
  tipo: 'sostituzione_ricetta' | 'ottimizzazione_costi' | 'bilanciamento_nutrizionale' | 'varieta';
  priorita: 'alta' | 'media' | 'bassa';
  titolo: string;
  descrizione: string;
  benefici: string[]; // es: ["Risparmio 5€", "Più proteine"]
  cambiantiSuggeriti: {
    pastoId: string;
    ricettaCorrente: string;
    ricettaSuggerita: string;
    motivazione: string;
  };
  impatto: {
    variazioneCosto: number; // può essere negativo (risparmio)
    variazioneCalorie: number;
    variazioneTempoPrep: number;
  };
}

export interface PianoMensile {
  userId: string;
  mese: number;
  anno: number;
  menuSettimanali: MenuSettimanale[];

  // Statistiche mensili
  statistiche: {
    costoTotale: number;
    calorieMedie: number;
    ricetteDiverse: number;
    regioniEsplorate: string[];
    ingredientiPiuUsati: { nome: string; frequenza: number }[];
    risparmiOttenuto: number; // rispetto a budget iniziale
  };

  // Feedback
  ricettePiuApprezzate: { ricettaId: string; valutazione: number }[];
  ricetteDaEvitare: string[];
}

export interface AnalisiMenu {
  menuId: string;

  // Nutrizionale
  bilanciamentoNutrizionale: {
    punteggio: number; // 0-100
    proteine: 'basso' | 'ottimale' | 'alto';
    carboidrati: 'basso' | 'ottimale' | 'alto';
    grassi: 'basso' | 'ottimale' | 'alto';
    fibre: 'basso' | 'ottimale' | 'alto';
    vitamine: { [vitamina: string]: 'basso' | 'ottimale' | 'alto' };
  };

  // Varietà
  varietaCulinaria: {
    punteggio: number; // 0-100
    regioniDiverse: number;
    tipiPiattoDiversi: number;
    ingredientiDiversi: number;
  };

  // Economico
  analisiCosti: {
    punteggio: number; // 0-100
    rispettoBudget: boolean;
    costoPerPasto: number;
    confrontoMediaNazionale: number; // percentuale differenza
    opportunitaRisparmio: string[];
  };

  // Sostenibilità
  sostenibilita: {
    punteggio: number; // 0-100
    percentualeKmZero: number;
    percentualeStagionale: number;
    percentualeBio: number;
    improntaCarbonica: number; // kg CO2
  };

  // Fattibilità
  fattibilita: {
    punteggio: number; // 0-100
    tempoMedioPreparazione: number;
    difficoltaMedia: string;
    attrezzaturaNecessaria: string[];
    competenzeRichieste: string[];
  };

  // Raccomandazioni
  raccomandazioni: string[];
  puntiForza: string[];
  areeMiglioramento: string[];
}

export interface TemplateMenu {
  id: string;
  nome: string;
  descrizione: string;
  categoria: 'famiglia' | 'coppia' | 'single' | 'sportivo' | 'vegetariano' | 'economico';
  numeroPersone: number;
  durataSettimane: number;
  strutturaPasti: PastoGiornaliero[];
  isPersonalizzabile: boolean;
  popolarita: number;
  numeroUtilizzi: number;
}
