/**
 * Types per Frigo Scanner - Riconoscimento ingredienti AI
 */

export enum StatoScansione {
  IDLE = 'idle',
  SCANNING = 'scanning',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  ERROR = 'error'
}

export enum CategoriaIngrediente {
  VERDURA = 'verdura',
  FRUTTA = 'frutta',
  CARNE = 'carne',
  PESCE = 'pesce',
  LATTICINI = 'latticini',
  CEREALI = 'cereali',
  LEGUMI = 'legumi',
  SPEZIE = 'spezie',
  CONDIMENTI = 'condimenti',
  ALTRO = 'altro'
}

export interface IngredienteRiconosciuto {
  nome: string;
  nomeNormalizzato: string; // nome standardizzato per matching ricette
  categoria: CategoriaIngrediente;
  confidenza: number; // 0-100, confidence del riconoscimento AI
  boundingBox?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  quantitaStimata?: {
    valore: number;
    unita: string;
    metodoStima: 'ai' | 'manuale' | 'predefinito';
  };
  dataScadenzaStimata?: Date;
  condizioneStimata?: 'fresco' | 'medio' | 'da_consumare_presto';
}

export interface RisultatoScansione {
  id: string;
  dataScansione: Date;
  fotoOriginale: string; // URL o base64
  fotoAnnotata?: string; // foto con bounding boxes
  ingredientiRiconosciuti: IngredienteRiconosciuto[];
  numeroIngredientiTotali: number;
  statoScansione: StatoScansione;
  errorMessage?: string;
  tempoElaborazione: number; // millisecondi
  modelVersion: string; // versione del modello AI usato
}

export interface DisponibilitaFrigo {
  userId: string;
  ultimoAggiornamento: Date;
  ingredientiDisponibili: IngredienteRiconosciuto[];
  scansioni: RisultatoScansione[];
}

export interface SuggerimentoRicetta {
  ricettaId: string;
  titoloRicetta: string;
  fotoUrl: string;
  matchPercentuale: number; // 0-100, quanti ingredienti hai
  ingredientiPresenti: string[]; // ingredienti che hai
  ingredientiMancanti: string[]; // ingredienti da comprare
  costoIngredientiMancanti: number; // stima in euro
  numeroIngredientiMancanti: number;
  priorita: 'alta' | 'media' | 'bassa'; // basata su match e scadenze
  motivazione: string; // es: "Hai melanzane che scadono domani"
}

export interface AnalisiSprechi {
  ingredientiInScadenza: IngredienteRiconosciuto[]; // scadono entro 3 giorni
  ingredientiScaduti: IngredienteRiconosciuto[];
  valoreEconomicoPotenzialeSpreco: number; // in euro
  ricetteSuggeriteAntiSpreco: SuggerimentoRicetta[];
  statistiche: {
    numeroScansioni: number;
    ingredientiSalvatiDalloSpreco: number;
    risparmioDenaro: number;
    risparmioCO2: number; // kg CO2 evitati
  };
}

export interface ConfigurazioneScanner {
  abilitaNotificheScadenze: boolean;
  giorniPreavvisoScadenza: number; // default 3
  categorieEscluse: CategoriaIngrediente[];
  linguaRiconoscimento: 'it' | 'en' | 'auto';
  qualitaImmagine: 'bassa' | 'media' | 'alta';
  salvaStoriaScansioni: boolean;
}
