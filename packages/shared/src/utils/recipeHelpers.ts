/**
 * Utility functions per le ricette
 */

import { Ricetta, Ingrediente } from '../types';

/**
 * Ricalcola le quantità degli ingredienti in base al numero di porzioni
 */
export const ricalcolaIngredienti = (
  ingredienti: Ingrediente[],
  porzioniOriginali: number,
  nuovePortions: number
): Ingrediente[] => {
  const fattore = nuovePortions / porzioniOriginali;

  return ingredienti.map(ingrediente => ({
    ...ingrediente,
    quantita: Math.round(ingrediente.quantita * fattore * 100) / 100
  }));
};

/**
 * Formatta il tempo in modo leggibile
 */
export const formattaTempo = (minuti: number): string => {
  if (minuti < 60) {
    return `${minuti} min`;
  }

  const ore = Math.floor(minuti / 60);
  const minutiRestanti = minuti % 60;

  if (minutiRestanti === 0) {
    return `${ore} ${ore === 1 ? 'ora' : 'ore'}`;
  }

  return `${ore} ${ore === 1 ? 'ora' : 'ore'} e ${minutiRestanti} min`;
};

/**
 * Ottiene il badge di difficoltà con emoji
 */
export const getDifficoltaBadge = (difficolta: string): string => {
  switch (difficolta) {
    case 'facile':
      return '⭐ Facile';
    case 'media':
      return '⭐⭐ Media';
    case 'difficile':
      return '⭐⭐⭐ Difficile';
    default:
      return '';
  }
};

/**
 * Calcola il tempo totale di una ricetta
 */
export const calcolaTempoTotale = (tempoPreparazione: number, tempoCottura: number): number => {
  return tempoPreparazione + tempoCottura;
};

/**
 * Filtra ricette in base ai criteri
 */
export const filtraRicette = (
  ricette: Ricetta[],
  filtri: {
    difficolta?: string;
    tipo?: string;
    filtriAlimentari?: string[];
    tempoMassimo?: number;
    ricerca?: string;
  }
): Ricetta[] => {
  return ricette.filter(ricetta => {
    // Filtro difficoltà
    if (filtri.difficolta && ricetta.difficolta !== filtri.difficolta) {
      return false;
    }

    // Filtro tipo
    if (filtri.tipo && ricetta.tipo !== filtri.tipo) {
      return false;
    }

    // Filtri alimentari
    if (filtri.filtriAlimentari && filtri.filtriAlimentari.length > 0) {
      const hasTuttiFiltri = filtri.filtriAlimentari.every(filtro =>
        ricetta.filtriAlimentari.includes(filtro as any)
      );
      if (!hasTuttiFiltri) {
        return false;
      }
    }

    // Filtro tempo massimo
    if (filtri.tempoMassimo && ricetta.tempoTotale > filtri.tempoMassimo) {
      return false;
    }

    // Ricerca testuale
    if (filtri.ricerca) {
      const ricercaLower = filtri.ricerca.toLowerCase();
      const trovato =
        ricetta.titolo.toLowerCase().includes(ricercaLower) ||
        ricetta.descrizione.toLowerCase().includes(ricercaLower) ||
        ricetta.tags.some(tag => tag.toLowerCase().includes(ricercaLower)) ||
        ricetta.ingredienti.some(ing => ing.nome.toLowerCase().includes(ricercaLower));

      if (!trovato) {
        return false;
      }
    }

    return true;
  });
};

/**
 * Ordina ricette per popolarità
 */
export const ordinaPerPopolarita = (ricette: Ricetta[]): Ricetta[] => {
  return [...ricette].sort((a, b) => {
    // Prima le ricette del giorno
    if (a.isRicettaDelGiorno && !b.isRicettaDelGiorno) return -1;
    if (!a.isRicettaDelGiorno && b.isRicettaDelGiorno) return 1;

    // Poi per numero di preferiti e valutazione
    const scoreA = a.numeroPreferiti * 0.5 + a.valutazioneMedia * a.numeroValutazioni;
    const scoreB = b.numeroPreferiti * 0.5 + b.valutazioneMedia * b.numeroValutazioni;

    return scoreB - scoreA;
  });
};

/**
 * Crea lista della spesa da una ricetta
 */
export const creaListaSpesa = (ricetta: Ricetta, porzioni?: number) => {
  const porzioniEffettive = porzioni || ricetta.porzioni;
  const ingredientiRicalcolati = ricalcolaIngredienti(
    ricetta.ingredienti,
    ricetta.porzioni,
    porzioniEffettive
  );

  return ingredientiRicalcolati.map(ing => ({
    ingrediente: ing.nome,
    quantita: ing.quantita,
    unita: ing.unita,
    acquistato: false,
    note: ing.note
  }));
};
