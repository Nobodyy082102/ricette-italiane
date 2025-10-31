# Firebase Configuration

Questo package contiene la configurazione Firebase e i servizi per l'app Ricette Italiane.

## Setup Iniziale

### 1. Crea un progetto Firebase

1. Vai su [Firebase Console](https://console.firebase.google.com/)
2. Clicca su "Aggiungi progetto"
3. Segui il wizard di setup

### 2. Configura Firestore Database

1. Nel menu laterale, clicca su "Firestore Database"
2. Clicca su "Crea database"
3. Scegli la modalità di produzione
4. Seleziona una location (es: europe-west1 per Europa)

### 3. Configura Storage

1. Nel menu laterale, clicca su "Storage"
2. Clicca su "Inizia"
3. Accetta le regole di default (le modificheremo dopo)

### 4. Configura Authentication

1. Nel menu laterale, clicca su "Authentication"
2. Clicca su "Inizia"
3. Abilita "Email/Password" come metodo di accesso

### 5. Ottieni le credenziali

1. Clicca sull'icona impostazioni (⚙️) vicino a "Panoramica del progetto"
2. Clicca su "Impostazioni progetto"
3. Scorri fino a "Le tue app"
4. Clicca sull'icona web (</>)
5. Registra l'app e copia la configurazione

### 6. Aggiorna config.ts

Copia i valori dalla console Firebase nel file `src/config.ts`:

```typescript
export const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "ricette-italiane.firebaseapp.com",
  projectId: "ricette-italiane",
  storageBucket: "ricette-italiane.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

## Regole di Sicurezza

### Firestore Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permetti lettura a tutti
    match /ricette/{recipeId} {
      allow read: if true;
      allow write: if request.auth != null;
    }

    // Solo utenti autenticati possono scrivere
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### Storage Rules

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /ricette/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## Uso

```typescript
import { initializeFirebase, getAllRecipes } from '@ricette-italiane/firebase';

// Inizializza Firebase
initializeFirebase();

// Ottieni ricette
const recipes = await getAllRecipes();
```
