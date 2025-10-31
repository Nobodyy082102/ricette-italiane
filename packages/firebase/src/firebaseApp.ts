/**
 * Inizializzazione Firebase App
 */

import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth';
import { getStorage, FirebaseStorage } from 'firebase/storage';
import { firebaseConfig } from './config';

let app: FirebaseApp;
let db: Firestore;
let auth: Auth;
let storage: FirebaseStorage;

/**
 * Inizializza Firebase se non già inizializzato
 */
export const initializeFirebase = () => {
  if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    auth = getAuth(app);
    storage = getStorage(app);
  }

  return { app, db, auth, storage };
};

/**
 * Ottieni l'istanza Firestore
 */
export const getDb = (): Firestore => {
  if (!db) {
    initializeFirebase();
  }
  return db;
};

/**
 * Ottieni l'istanza Auth
 */
export const getAuthInstance = (): Auth => {
  if (!auth) {
    initializeFirebase();
  }
  return auth;
};

/**
 * Ottieni l'istanza Storage
 */
export const getStorageInstance = (): FirebaseStorage => {
  if (!storage) {
    initializeFirebase();
  }
  return storage;
};
