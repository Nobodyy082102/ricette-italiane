/**
 * Types per Playlist Cucina Regionale - Musica contestuale
 */

export enum TipoPlaylist {
  REGIONALE = 'regionale',
  OCCASIONE = 'occasione',
  MOOD = 'mood',
  ARTISTA = 'artista',
  PERSONALIZZATA = 'personalizzata'
}

export enum MoodCucina {
  RILASSANTE = 'rilassante',
  ENERGICO = 'energico',
  ROMANTICO = 'romantico',
  FESTOSO = 'festoso',
  TRADIZIONALE = 'tradizionale',
  MODERNO = 'moderno'
}

export interface Brano {
  id: string;
  titolo: string;
  artista: string;
  album?: string;
  durata: number; // secondi

  // Links streaming
  spotifyUrl?: string;
  appleMusicUrl?: string;
  youtubeUrl?: string;
  deezerUrl?: string;

  // Metadata
  anno?: number;
  genere: string[];
  regione?: string; // regione italiana associata
  lingua: 'italiano' | 'dialetto' | 'strumentale' | 'altro';
  dialetto?: string;

  // Mood
  mood: MoodCucina[];
  energia: number; // 1-10
  bpm?: number;

  // Popolarità
  numeroAscolti: number;
  likes: number;

  // Preview
  previewUrl?: string; // 30 secondi anteprima
  coverUrl?: string;
}

export interface Playlist {
  id: string;
  nome: string;
  descrizione: string;
  coverUrl: string;
  tipo: TipoPlaylist;

  // Contenuto
  brani: Brano[];
  numeroBrani: number;
  durataTotale: number; // secondi

  // Categorizzazione
  regione?: string;
  occasione?: string; // es: "Cena di Natale", "Domenica in famiglia"
  mood?: MoodCucina;

  // Metadata
  curataDa?: string; // nome curatore
  isUfficiale: boolean;
  isCollaborativa: boolean;
  dataCreazione: Date;
  ultimoAggiornamento: Date;

  // Social
  numeroFollowers: number;
  numeroAscolti: number;
  numeroCondivisioni: number;

  // Privacy
  isPubblica: boolean;
  isModificabile: boolean;
}

export interface PlaylistRegionale extends Playlist {
  regione: string;
  artistiLocali: string[];
  strumentiTradizionali: string[]; // es: ["Mandolino", "Fisarmonica"]
  festeTradizionali: string[]; // feste regionali associate
  ricetteSuggerite: string[]; // IDs ricette regionali
}

export interface SessioneAscolto {
  id: string;
  userId: string;
  playlistId: string;
  ricettaInPreparazione?: string; // ID ricetta che si sta cucinando

  // Riproduzione
  dataInizio: Date;
  dataFine?: Date;
  durata: number; // secondi
  branoCorrente?: Brano;
  posizioneBrano: number; // indice nella playlist
  tempoRiproduzione: number; // secondi

  // Interazioni
  braniSaltati: string[];
  braniPreferiti: string[];
  volume: number; // 0-100

  // Contesto
  modalitaManiLibere: boolean;
  ricettaCompletata: boolean;
}

export interface PodcastCucina {
  id: string;
  titolo: string;
  descrizione: string;
  host: string[];
  coverUrl: string;

  // Categorizzazione
  categoria: 'ricette' | 'storia' | 'interviste' | 'tecniche' | 'cultura';
  regioneFocus?: string;

  // Episodi
  episodi: EpisodioPodcast[];
  numeroEpisodi: number;

  // Metadata
  lingua: string;
  frequenzaUscite: 'giornaliero' | 'settimanale' | 'mensile';
  isPremium: boolean;

  // Social
  numeroIscritti: number;
  valutazioneMedia: number;
}

export interface EpisodioPodcast {
  id: string;
  podcastId: string;
  numeroEpisodio: number;
  stagione?: number;
  titolo: string;
  descrizione: string;
  durata: number; // secondi
  dataUscita: Date;
  audioUrl: string;

  // Contenuto
  argomenti: string[];
  ricetteMenzionate: string[]; // IDs ricette
  ospiti?: string[];

  // Timeline
  capitoli: {
    inizio: number; // secondi
    titolo: string;
    descrizione?: string;
  }[];

  // Interazioni
  numeroAscolti: number;
  likes: number;
  commenti: CommentoPodcast[];
}

export interface CommentoPodcast {
  id: string;
  userId: string;
  userName: string;
  testo: string;
  timestamp?: number; // secondi nell'episodio
  dataCreazione: Date;
  likes: number;
}

export interface PreferenzeMusicali {
  userId: string;

  // Generi preferiti
  generiPreferiti: string[];
  artistiPreferiti: string[];
  regioniPreferite: string[];

  // Mood
  moodPreferito: MoodCucina[];

  // Comportamento
  playlistSeguite: string[];
  podcastSeguiti: string[];
  braniPreferiti: string[];

  // Impostazioni
  volumePredefinito: number;
  qualitaAudio: 'bassa' | 'media' | 'alta' | 'lossless';
  riproduzioneAutomatica: boolean;
  modalitaManiLibereDefault: boolean;

  // Privacy
  condividiAttivitaAscolto: boolean;
  mostraStoriaAscolti: boolean;
}

export interface RaccomandazioneMusicale {
  id: string;
  tipo: 'playlist' | 'brano' | 'podcast' | 'artista';
  contenuto: Playlist | Brano | PodcastCucina;
  motivazione: string; // es: "Perfetto per ricette napoletane"
  score: number; // 0-100, rilevanza
  basatoSu: 'cronologia' | 'ricetta_attuale' | 'regione' | 'mood' | 'popolare';
}

export interface Collaborazione {
  id: string;
  titoloCollab: string;
  descrizione: string;
  artista: string;
  ricettaCollegata?: string; // ID ricetta
  tipoCollab: 'playlist' | 'evento_live' | 'video_ricetta' | 'podcast';
  dataInizio: Date;
  dataFine?: Date;
  isEsclusiva: boolean;
  mediaUrl: string[]; // foto, video
}

export interface ControlloVocale {
  comandoVocale: string;
  azione: 'play' | 'pause' | 'next' | 'previous' | 'volume_up' | 'volume_down' | 'playlist' | 'artista';
  parametri?: any;
  timestamp: Date;
  ricettaContesto?: string;
}
