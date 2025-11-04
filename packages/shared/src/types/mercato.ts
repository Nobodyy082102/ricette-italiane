/**
 * Types per Mercato a KM Zero - Produttori locali
 */

export enum TipoProduttore {
  AGRICOLTORE = 'agricoltore',
  ALLEVATORE = 'allevatore',
  PESCATORE = 'pescatore',
  CASEIFICIO = 'caseificio',
  PANIFICIO = 'panificio',
  VIVAIO = 'vivaio',
  ERBORISTA = 'erborista',
  MERCATO_CONTADINO = 'mercato_contadino',
  COOPERATIVA = 'cooperativa'
}

export enum CertificazioneProdotto {
  BIO = 'bio',
  DOP = 'dop',
  IGP = 'igp',
  DOCG = 'docg',
  DOC = 'doc',
  PAT = 'pat', // Prodotto Agroalimentare Tradizionale
  SLOW_FOOD = 'slow_food',
  KM_ZERO = 'km_zero',
  COMMERCIO_EQUO = 'commercio_equo'
}

export enum DisponibilitaProdotto {
  DISPONIBILE = 'disponibile',
  LIMITATA = 'limitata',
  TERMINATO = 'terminato',
  PREORDINE = 'preordine',
  STAGIONALE = 'stagionale'
}

export interface Produttore {
  id: string;
  nome: string;
  tipo: TipoProduttore;
  descrizione: string;
  storia?: string;

  // Localizzazione
  indirizzo: string;
  citta: string;
  provincia: string;
  regione: string;
  cap: string;
  coordinate: {
    latitudine: number;
    longitudine: number;
  };

  // Contatti
  telefono?: string;
  email?: string;
  sitoWeb?: string;
  paginaSocial?: {
    facebook?: string;
    instagram?: string;
  };

  // Media
  fotoCopertina: string;
  fotoGalleria: string[];
  videoPresentation?: string;

  // Certificazioni
  certificazioni: CertificazioneProdotto[];

  // Prodotti
  prodottiDisponibili: ProdottoLocale[];
  categorieProdotti: string[];

  // Orari e modalità
  orariApertura: {
    giorno: 'lunedi' | 'martedi' | 'mercoledi' | 'giovedi' | 'venerdi' | 'sabato' | 'domenica';
    aperto: boolean;
    orarioInizio?: string; // es: "08:00"
    orarioFine?: string; // es: "18:00"
  }[];
  modalitaVendita: ('vendita_diretta' | 'consegna_domicilio' | 'punto_ritiro' | 'mercato' | 'online')[];

  // Valutazioni
  valutazioneMedia: number;
  numeroRecensioni: number;
  recensioni: RecensioneProduttore[];

  // Statistiche
  distanzaDaUtente?: number; // km
  numeroClienti: number;
  dataApertura?: Date;
  isVerificato: boolean;
}

export interface ProdottoLocale {
  id: string;
  produttoreId: string;
  nome: string;
  descrizione: string;
  categoria: string; // es: "Verdure", "Formaggi", "Carne"
  fotoUrl: string;

  // Prezzo
  prezzo: number; // euro
  unitaMisura: string; // es: "kg", "pz", "l"
  prezzoAlKg?: number; // per confronti

  // Disponibilità
  disponibilita: DisponibilitaProdotto;
  quantitaDisponibile?: number;
  stagionalita: string[]; // mesi disponibili

  // Qualità
  certificazioni: CertificazioneProdotto[];
  origine: string; // es: "Raccolto nella valle del..."
  metodoProduzione?: string;

  // Nutrizionali
  valoriNutrizionali?: {
    caloriePer100g: number;
    proteine: number;
    carboidrati: number;
    grassi: number;
  };

  // Metadata
  dataRaccolta?: Date;
  dataScadenza?: Date;
  conservazione?: string; // istruzioni conservazione
}

export interface RecensioneProduttore {
  id: string;
  userId: string;
  userName: string;
  produttoreId: string;
  valutazione: number; // 1-5
  titolo: string;
  testo: string;
  dataCreazione: Date;
  prodottiAcquistati: string[]; // nomi prodotti
  fotoRecensione?: string[];
  likes: number;
  rispostaProuttore?: {
    testo: string;
    data: Date;
  };
}

export interface MercatoContadino {
  id: string;
  nome: string;
  descrizione: string;
  coordinate: {
    latitudine: number;
    longitudine: number;
  };
  indirizzo: string;
  citta: string;

  // Programma
  giorniApertura: string[];
  orario: string;
  frequenza: 'settimanale' | 'mensile' | 'permanente';

  // Produttori presenti
  produttoriPartecipanti: string[]; // IDs produttori
  numeroBancarelle: number;

  // Info
  fotoMercato: string[];
  servizi: string[]; // es: "Parcheggio", "Area bimbi", "Bar"

  // Eventi
  eventiSpeciali: EventoMercato[];
}

export interface EventoMercato {
  id: string;
  mercatoId: string;
  titolo: string;
  descrizione: string;
  data: Date;
  durata: number; // ore
  tipo: 'degustazione' | 'workshop' | 'festa' | 'sagra';
  produttoriCoinvolti: string[];
}

export interface NotificaDisponibilita {
  id: string;
  userId: string;
  produttoreId: string;
  prodottoId: string;
  nomeProdotto: string;
  messaggio: string;
  dataNotifica: Date;
  isLetta: boolean;
  tipo: 'disponibilita' | 'prezzo_ridotto' | 'novita' | 'stagione';
}

export interface PreferenzeMercato {
  userId: string;
  raggioRicerca: number; // km
  categoriePreferite: string[];
  certificazioniPreferite: CertificazioneProdotto[];
  notificheAttive: boolean;
  produttoriSeguiti: string[]; // IDs produttori
  prodottiOsservati: string[]; // IDs prodotti
  storiaAcquisti: {
    produttoreId: string;
    prodottoId: string;
    data: Date;
    prezzo: number;
  }[];
}

export interface MappaProduttori {
  centro: {
    latitudine: number;
    longitudine: number;
  };
  zoom: number;
  produttori: Produttore[];
  mercati: MercatoContadino[];
  filtriAttivi: {
    tipiProduttore: TipoProduttore[];
    certificazioni: CertificazioneProdotto[];
    distanzaMassima: number;
    soloAperti: boolean;
  };
}
