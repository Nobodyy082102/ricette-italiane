/**
 * Configurazione Firebase
 *
 * IMPORTANTE: Prima di usare l'app, devi:
 * 1. Creare un progetto Firebase su https://console.firebase.google.com/
 * 2. Abilitare Firestore Database
 * 3. Abilitare Storage (per immagini e video)
 * 4. Abilitare Authentication (Email/Password)
 * 5. Copiare la tua configurazione qui sotto
 */

export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Nota: Per production, considera di usare variabili d'ambiente
// export const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID
// };
