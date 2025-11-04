/**
 * Types per il sistema di Gamification
 */

export enum LivelloCulinario {
  APPRENDISTA = 'apprendista',
  CUOCO = 'cuoco',
  CHEF = 'chef',
  MAESTRO = 'maestro',
  GRAN_MAESTRO = 'gran_maestro'
}

export enum TipoBadge {
  REGIONALE = 'regionale', // Badge per regioni
  TECNICA = 'tecnica', // Badge per tecniche culinarie
  TIPO_PIATTO = 'tipo_piatto', // Badge per tipi di piatti
  SFIDA = 'sfida', // Badge per completamento sfide
  MAESTRIA = 'maestria', // Badge per raggiungimento obiettivi
  SPECIALE = 'speciale' // Badge evento speciale
}

export enum StatoSfida {
  ATTIVA = 'attiva',
  COMPLETATA = 'completata',
  SCADUTA = 'scaduta',
  NON_INIZIATA = 'non_iniziata'
}

export interface Badge {
  id: string;
  nome: string;
  descrizione: string;
  icona: string; // emoji o URL
  tipo: TipoBadge;
  rarità: 'comune' | 'raro' | 'epico' | 'leggendario';
  puntiXP: number; // punti esperienza per sbloccare
  requisiti: string[]; // es: ["Cucina 5 ricette siciliane", "Raggiunge livello Cuoco"]
  dataOttenimento?: Date;
  isOttenuto: boolean;
}

export interface Sfida {
  id: string;
  titolo: string;
  descrizione: string;
  tipo: 'giornaliera' | 'settimanale' | 'mensile' | 'speciale';
  obiettivo: string; // es: "Cucina 3 ricette con melanzane"
  progressoCorrente: number;
  progressoTotale: number;
  ricompensa: {
    puntiXP: number;
    badge?: Badge;
    titolo?: string; // titolo speciale sbloccato
  };
  dataInizio: Date;
  dataFine: Date;
  stato: StatoSfida;
  iconaSfida: string;
}

export interface ProfiloGiocatore {
  userId: string;
  userName: string;
  userPhotoUrl?: string;
  livelloCorrente: LivelloCulinario;
  puntiXP: number; // punti esperienza totali
  puntiXPPerLivelloSuccessivo: number;
  numeroRicetteCucinate: number;
  numeroRicettePreferite: number;
  badgeOttenuti: Badge[];
  sfideCompletate: Sfida[];
  sfideAttive: Sfida[];
  titoli: string[]; // titoli speciali ottenuti
  titoloAttivo?: string; // titolo mostrato nel profilo
  regioniCompletate: string[]; // regioni con almeno una ricetta cucinata
  progressoRegioni: { [regione: string]: number }; // numero ricette per regione
  statistiche: {
    ricetteFaciliCompletate: number;
    ricetteMediaCompletate: number;
    ricetteDifficiliCompletate: number;
    tipoPiattoPreferito: string;
    regionePreferita: string;
    streakGiorni: number; // giorni consecutivi di attività
    massimoStreak: number;
    tempoTotaleCucina: number; // minuti totali passati a cucinare
  };
}

export interface ClassificaGiocatore {
  posizione: number;
  userId: string;
  userName: string;
  userPhotoUrl?: string;
  livello: LivelloCulinario;
  puntiXP: number;
  numeroRicetteCucinate: number;
  badgeCount: number;
  titoloAttivo?: string;
}

export interface Quest {
  id: string;
  titolo: string;
  descrizione: string;
  tipo: 'giornaliera' | 'settimanale' | 'storia' | 'nascosta';
  passi: {
    numero: number;
    descrizione: string;
    completato: boolean;
  }[];
  ricompensaFinale: {
    puntiXP: number;
    badge?: Badge;
    ricettaSpecialeSbloccata?: string; // ID ricetta segreta
  };
  progressoPercentuale: number;
  isCompletata: boolean;
}

export interface EventoSpeciale {
  id: string;
  nome: string;
  descrizione: string;
  dataInizio: Date;
  dataFine: Date;
  tema: string; // es: "Mese della Pasta", "Estate Siciliana"
  sfideEsclusive: Sfida[];
  badgeEsclusivi: Badge[];
  classificaEvento: ClassificaGiocatore[];
  ricompenseSpeciali: string[];
}
