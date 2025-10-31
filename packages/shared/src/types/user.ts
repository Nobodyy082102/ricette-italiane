/**
 * Tipi per gli utenti
 */

export interface Preferenze {
  filtriAlimentariPreferiti: string[];
  difficoltaPreferita?: string;
  regioniPreferite: string[];
  temaScuro: boolean;
  notificheAttive: boolean;
  linguaPreferita: 'it' | 'en';
}

export interface User {
  id: string;
  email: string;
  nome: string;
  cognome?: string;
  photoUrl?: string;

  // Preferenze
  preferenze: Preferenze;

  // Ricette salvate
  ricettePreferite: string[]; // array di recipe IDs
  ricetteSalvate: string[]; // per modalità offline

  // Lista della spesa
  listaSpesa: {
    ingrediente: string;
    quantita: number;
    unita: string;
    acquistato: boolean;
  }[];

  // Statistiche
  ricetteProvate: string[];
  ricetteValutate: string[];

  // Metadata
  dataRegistrazione: Date;
  ultimoAccesso: Date;
}
