/**
 * Tipi per il sistema di gamification
 */

export enum LivelloUtente {
  PRINCIPIANTE = 'principiante',
  CUOCO_CASALINGO = 'cuoco_casalingo',
  CHEF_AMATORIALE = 'chef_amatoriale',
  MAESTRO_DI_CUCINA = 'maestro_di_cucina',
  NONNA_CERTIFICATA = 'nonna_certificata'
}

export interface Badge {
  id: string;
  nome: string;
  descrizione: string;
  icona: string; // emoji
  categoria: 'ricette' | 'regioni' | 'difficolta' | 'streak' | 'sociale' | 'speciale';
  requisito: string; // es: "Cucina 5 ricette siciliane"
  sbloccato: boolean;
  dataSblocco?: Date;
}

export interface Achievement {
  id: string;
  titolo: string;
  descrizione: string;
  punti: number;
  progresso: number; // 0-100
  completato: boolean;
}

export interface ProgressoUtente {
  livello: LivelloUtente;
  puntiEsperienza: number;
  puntiPerProssimoLivello: number;
  ricetteCucinate: number;
  regioniEsplorate: Set<string>; // ID regioni
  badge: Badge[];
  streakGiorni: number; // giorni consecutivi
  ultimaAttivita: Date;
}

export interface StatisticheUtente {
  totaleRicetteCucinate: number;
  ricettePiuCucinate: { ricettaId: string; volte: number }[];
  regionePreferita: string;
  difficoltaMedia: number;
  tempoTotaleCucina: number; // minuti
  ricetteQuestoMese: number;
  ricetteQuestoAnno: number;
  categoriaPreferita: string; // primi, secondi, dolci, ecc
}

export interface SfidaSettimanale {
  id: string;
  titolo: string;
  descrizione: string;
  icona: string;
  scadenza: Date;
  puntiRicompensa: number;
  completata: boolean;
  progresso?: number; // 0-100
}
