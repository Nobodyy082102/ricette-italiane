/**
 * Servizio per gestire le ricette su Firestore
 */

import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  QueryConstraint
} from 'firebase/firestore';
import { getDb } from '../firebaseApp';
import { Ricetta } from '@ricette-italiane/shared';

const RECIPES_COLLECTION = 'ricette';

/**
 * Ottieni tutte le ricette
 */
export const getAllRecipes = async (): Promise<Ricetta[]> => {
  const db = getDb();
  const recipesRef = collection(db, RECIPES_COLLECTION);
  const snapshot = await getDocs(recipesRef);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Ricetta));
};

/**
 * Ottieni una ricetta per ID
 */
export const getRecipeById = async (id: string): Promise<Ricetta | null> => {
  const db = getDb();
  const recipeRef = doc(db, RECIPES_COLLECTION, id);
  const snapshot = await getDoc(recipeRef);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data()
  } as Ricetta;
};

/**
 * Ottieni ricette popolari
 */
export const getPopularRecipes = async (limitCount = 10): Promise<Ricetta[]> => {
  const db = getDb();
  const recipesRef = collection(db, RECIPES_COLLECTION);
  const q = query(
    recipesRef,
    orderBy('numeroPreferiti', 'desc'),
    limit(limitCount)
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Ricetta));
};

/**
 * Ottieni ricetta del giorno
 */
export const getRecipeOfTheDay = async (): Promise<Ricetta | null> => {
  const db = getDb();
  const recipesRef = collection(db, RECIPES_COLLECTION);
  const q = query(recipesRef, where('isRicettaDelGiorno', '==', true), limit(1));

  const snapshot = await getDocs(q);
  if (snapshot.empty) {
    return null;
  }

  const doc = snapshot.docs[0];
  return {
    id: doc.id,
    ...doc.data()
  } as Ricetta;
};

/**
 * Cerca ricette con filtri
 */
export const searchRecipes = async (filters: {
  difficolta?: string;
  tipo?: string;
  regione?: string;
  searchText?: string;
}): Promise<Ricetta[]> => {
  const db = getDb();
  const recipesRef = collection(db, RECIPES_COLLECTION);
  const constraints: QueryConstraint[] = [];

  if (filters.difficolta) {
    constraints.push(where('difficolta', '==', filters.difficolta));
  }

  if (filters.tipo) {
    constraints.push(where('tipo', '==', filters.tipo));
  }

  if (filters.regione) {
    constraints.push(where('regione', '==', filters.regione));
  }

  const q = query(recipesRef, ...constraints);
  const snapshot = await getDocs(q);

  let recipes = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Ricetta));

  // Filtro testuale lato client (Firestore non supporta full-text search nativamente)
  if (filters.searchText) {
    const searchLower = filters.searchText.toLowerCase();
    recipes = recipes.filter(recipe =>
      recipe.titolo.toLowerCase().includes(searchLower) ||
      recipe.descrizione.toLowerCase().includes(searchLower) ||
      recipe.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  }

  return recipes;
};

/**
 * Aggiungi una nuova ricetta
 */
export const addRecipe = async (recipe: Omit<Ricetta, 'id'>): Promise<string> => {
  const db = getDb();
  const recipesRef = collection(db, RECIPES_COLLECTION);
  const docRef = await addDoc(recipesRef, recipe);
  return docRef.id;
};

/**
 * Aggiorna una ricetta esistente
 */
export const updateRecipe = async (id: string, updates: Partial<Ricetta>): Promise<void> => {
  const db = getDb();
  const recipeRef = doc(db, RECIPES_COLLECTION, id);
  await updateDoc(recipeRef, updates);
};

/**
 * Elimina una ricetta
 */
export const deleteRecipe = async (id: string): Promise<void> => {
  const db = getDb();
  const recipeRef = doc(db, RECIPES_COLLECTION, id);
  await deleteDoc(recipeRef);
};

/**
 * Incrementa il contatore dei preferiti
 */
export const incrementFavorites = async (id: string): Promise<void> => {
  const db = getDb();
  const recipeRef = doc(db, RECIPES_COLLECTION, id);
  const snapshot = await getDoc(recipeRef);

  if (snapshot.exists()) {
    const currentFavorites = snapshot.data().numeroPreferiti || 0;
    await updateDoc(recipeRef, {
      numeroPreferiti: currentFavorites + 1
    });
  }
};

/**
 * Incrementa il contatore delle visualizzazioni
 */
export const incrementViews = async (id: string): Promise<void> => {
  const db = getDb();
  const recipeRef = doc(db, RECIPES_COLLECTION, id);
  const snapshot = await getDoc(recipeRef);

  if (snapshot.exists()) {
    const currentViews = snapshot.data().visualizzazioni || 0;
    await updateDoc(recipeRef, {
      visualizzazioni: currentViews + 1
    });
  }
};
