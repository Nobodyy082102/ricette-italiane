# 🚀 Getting Started - Ricette Italiane

Guida rapida per iniziare a sviluppare l'app di ricette italiane.

## 📦 Prerequisiti

- Node.js 18+ e npm
- Git
- (Opzionale) Android Studio per testare l'app mobile su emulatore
- (Opzionale) Expo Go app su smartphone per testare su device reale

## 🏁 Setup Iniziale

### 1. Clona il repository

```bash
git clone https://github.com/Nobodyy082102/ricette-italiane.git
cd ricette-italiane
```

### 2. Installa le dipendenze

```bash
npm install --legacy-peer-deps
```

### 3. Configura Firebase

1. Vai su [Firebase Console](https://console.firebase.google.com/)
2. Crea un nuovo progetto chiamato "ricette-italiane"
3. Abilita:
   - **Firestore Database** (modalità produzione, location: europe-west1)
   - **Storage** (per immagini e video delle ricette)
   - **Authentication** (metodo Email/Password)
4. Ottieni le credenziali:
   - Settings → Project Settings → Your apps → Web app
   - Copia la configurazione Firebase
5. Aggiorna il file `packages/firebase/src/config.ts` con le tue credenziali

## 🌐 Avviare l'App Web

```bash
# Dalla root del progetto
npm run web

# Oppure direttamente nella cartella web
cd packages/web
npm run dev
```

L'app web sarà disponibile su http://localhost:5173

## 📱 Avviare l'App Mobile

```bash
# Dalla root del progetto
npm run mobile

# Oppure direttamente nella cartella mobile
cd packages/mobile
npm start
```

Opzioni:
- Premi `a` per aprire su Android emulator
- Premi `i` per aprire su iOS simulator (solo su Mac)
- Scansiona il QR code con l'app Expo Go sul tuo smartphone

## 🗂️ Struttura del Progetto

```
ricette-italiane/
├── packages/
│   ├── shared/         # Codice condiviso (types, utils, constants)
│   ├── web/            # App React web
│   ├── mobile/         # App React Native
│   └── firebase/       # Configurazione Firebase
├── package.json        # Workspace root
└── README.md
```

## 🔥 Prossimi Passi

### Fase 1: Aggiungere Ricette Mock
- Creare file `packages/shared/src/data/mockRecipes.ts` con ricette di esempio
- Integrare le ricette mock nelle schermate Home

### Fase 2: Implementare Dettagli Ricetta
- Schermata completa con ingredienti, procedimento e video
- Funzionalità "Aggiungi ai preferiti"
- Ricalcolo porzioni

### Fase 3: Categorie e Filtri
- Implementare filtri per difficoltà, tipo, regione
- Filtri alimentari (vegetariano, vegano, senza glutine)
- Ricerca testuale avanzata

### Fase 4: Funzionalità Avanzate
- Timer integrato
- Lista della spesa
- Modalità offline
- Commenti e valutazioni

### Fase 5: Integrazione Firebase
- Caricare ricette vere su Firestore
- Implementare autenticazione utenti
- Sistema di preferiti persistente
- Upload immagini su Storage

### Fase 6: Pubblicazione
- Build production per web (deploy su Vercel/Netlify)
- Build APK per Android (Google Play Store)

## 🛠️ Comandi Utili

```bash
# Eseguire l'app web
npm run web

# Eseguire l'app mobile
npm run mobile

# Build production web
npm run build:web

# Build production mobile
npm run build:mobile

# Lint del codice
npm run lint

# Test (da implementare)
npm test
```

## 📚 Documentazione

- [React Native](https://reactnative.dev/)
- [Expo](https://docs.expo.dev/)
- [React Router](https://reactrouter.com/)
- [Firebase](https://firebase.google.com/docs)
- [Styled Components](https://styled-components.com/)

## 🤝 Contribuire

1. Crea un branch per la tua feature (`git checkout -b feature/nome-feature`)
2. Committa le modifiche (`git commit -m 'Add: nuova feature'`)
3. Push al branch (`git push origin feature/nome-feature`)
4. Apri una Pull Request

## 📝 Note Importanti

### Styled Components su React Native

Il package `styled-components` funziona sia su web che su mobile, ma su React Native usa l'import:
```typescript
import styled from 'styled-components/native';
```

### Firebase Configuration

NON committare mai le credenziali Firebase reali. Usa file `.env` o variabili d'ambiente per production.

### React Navigation

L'app mobile usa React Navigation v6. Per aggiungere nuove schermate:
1. Crea il componente in `packages/mobile/src/screens/`
2. Aggiungi la schermata al navigator in `App.tsx`

## ❓ Problemi Comuni

### "Cannot find module '@ricette-italiane/shared'"

Esegui `npm install` dalla root del progetto per linkare i workspaces.

### Errori di dipendenze

Usa sempre `--legacy-peer-deps` quando installi nuove dipendenze:
```bash
npm install --legacy-peer-deps package-name
```

### Expo non si avvia

Assicurati di avere Expo CLI installato globalmente:
```bash
npm install -g expo-cli
```

## 🎨 Design System

I colori del tema italiano sono definiti in `packages/shared/src/constants/colors.ts`:
- Verde: `#008C45`
- Bianco: `#FFFFFF`
- Rosso: `#CD212A`

---

Happy Coding! 🇮🇹 👨‍🍳
