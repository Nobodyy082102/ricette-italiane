# 🇮🇹 Ricette Italiane - App Mobile & Web

App completa per ricette della cucina italiana, disponibile sia come app mobile (Android) che web.

**Repository**: https://github.com/Nobodyy082102/ricette-italiane

## ✨ Features Implementate

### 🍝 Database Ricette
- **20 ricette italiane autentiche** con dettagli completi
- Ricette famose: Carbonara, Pizza Margherita, Tiramisù, Risotto, Lasagne, Arancini, Panna Cotta, e molte altre
- Ogni ricetta include:
  - Ingredienti con quantità precise
  - Procedimento step-by-step con timing
  - Valori nutrizionali
  - Difficoltà e tempo di preparazione
  - Regione di origine
  - Tags e descrizioni

### 🌐 App Web (Completa e Funzionante)
- ✅ **Home Page** con ricetta del giorno e ricette popolari
- ✅ **Dettagli Ricetta Completi**:
  - Ricalcolo automatico ingredienti per porzioni
  - Procedimento con timing di ogni step
  - Valori nutrizionali
  - Aggiungi ai preferiti
  - Genera lista della spesa
  - Link a video tutorial
- ✅ **Categorie con Filtri**:
  - Filtro per tipo (Primi, Secondi, Dolci, ecc.)
  - Filtro per difficoltà (Facile, Media, Difficile)
  - Filtro per regione italiana
- ✅ **Ricerca Avanzata**:
  - Ricerca testuale (nome, ingrediente, tag)
  - Filtri per difficoltà, tipo, tempo massimo
  - Risultati in tempo reale
- ✅ **Preferiti** con localStorage persistente
- ✅ **Bottom Navigation** per navigazione veloce
- ✅ **Design Responsive** con tema italiano (verde-bianco-rosso)

### 📱 App Mobile (Setup Completo)
- ✅ React Native con Expo configurato
- ✅ Bottom Tab Navigation
- ✅ Schermate base (Home, Categorie, Cerca, Preferiti)
- ⚠️ Da completare: integrazione dati mock e schermate dettagliate

### 🔧 Architettura Tecnica
- **Monorepo** con npm workspaces
- **Package Shared**: Types, utilities, constants, e dati condivisi
- **Package Web**: App React con Vite
- **Package Mobile**: App React Native con Expo
- **Package Firebase**: Configurazione e servizi (pronto per integrazione)

## 🚀 Quick Start

### Prerequisiti
- Node.js 18+
- npm
- Git

### Installazione
```bash
git clone https://github.com/Nobodyy082102/ricette-italiane.git
cd ricette-italiane
npm install --legacy-peer-deps
```

### Avvia l'App Web
```bash
npm run web
```
Apri http://localhost:5173 nel browser

### Avvia l'App Mobile
```bash
npm run mobile
```
Scansiona il QR code con Expo Go app

## 📁 Struttura del Progetto

```
ricette-italiane/
├── packages/
│   ├── shared/              # Codice condiviso
│   │   ├── src/
│   │   │   ├── types/       # Ricetta, User, enums
│   │   │   ├── constants/   # Colori tema italiano
│   │   │   ├── utils/       # Helper functions
│   │   │   └── data/        # Mock recipes (20 ricette)
│   │   └── package.json
│   │
│   ├── web/                 # App React Web ✅ COMPLETA
│   │   ├── src/
│   │   │   ├── pages/
│   │   │   │   ├── Home.tsx           # Con ricette reali
│   │   │   │   ├── RecipeDetail.tsx  # Completa con tutte le features
│   │   │   │   ├── Categories.tsx    # Con filtri funzionanti
│   │   │   │   ├── Search.tsx        # Ricerca avanzata
│   │   │   │   └── Favorites.tsx     # Con localStorage
│   │   │   └── components/
│   │   │       └── Navigation.tsx    # Bottom nav
│   │   └── package.json
│   │
│   ├── mobile/              # App React Native
│   │   ├── App.tsx          # Bottom tab navigation
│   │   ├── src/screens/     # Screens base
│   │   └── package.json
│   │
│   └── firebase/            # Configurazione Firebase
│       ├── src/
│       │   ├── config.ts
│       │   ├── firebaseApp.ts
│       │   └── services/recipeService.ts
│       └── README.md
│
├── package.json             # Workspace root
├── README.md                # Questo file
└── GETTING_STARTED.md       # Guida dettagliata
```

## 🎨 Tech Stack

### Frontend
- **React 19** - Framework UI
- **React Native 0.81 + Expo 54** - Mobile
- **Vite 7** - Build tool
- **TypeScript 5** - Type safety
- **Styled Components 6** - Styling
- **React Router 6** - Web navigation
- **React Navigation 6** - Mobile navigation

### Backend (Pronto ma non ancora integrato)
- **Firebase**:
  - Firestore Database
  - Storage (per immagini)
  - Authentication
  - Hosting

### Tools
- **npm Workspaces** - Monorepo
- **ESLint** - Linting
- **Git** - Version control

## 🎯 Funzionalità Implementate

### ✅ Completate (Web)
- [x] Database 20 ricette italiane mock
- [x] Home con ricetta del giorno e popolari
- [x] Dettagli ricetta con ricalcolo porzioni
- [x] Lista ingredienti dinamica
- [x] Procedimento step-by-step con timing
- [x] Valori nutrizionali
- [x] Categorie con filtri multipli
- [x] Ricerca avanzata testuale
- [x] Sistema preferiti con localStorage
- [x] Bottom navigation
- [x] Design responsive tema italiano
- [x] Routing completo
- [x] Genera lista della spesa

### 📋 Da Implementare (Mobile)
- [ ] Aggiornare Home mobile con dati reali
- [ ] Schermata dettagli ricetta mobile
- [ ] Categorie e filtri mobile
- [ ] Ricerca mobile
- [ ] Preferiti con AsyncStorage
- [ ] Timer cottura integrato
- [ ] Modalità "Mani libere" (comandi vocali)
- [ ] Modalità offline

### 🔮 Future (Opzionali)
- [ ] Integrare Firebase per persistenza cloud
- [ ] Upload foto ricette
- [ ] Sistema commenti e valutazioni
- [ ] Notifiche push
- [ ] Condivisione social
- [ ] Build APK per Google Play Store
- [ ] Deploy web su Vercel/Netlify

## 📸 Screenshot / Demo

**Web App**: http://localhost:5173
- Home: Ricetta del giorno + 6 ricette popolari
- Dettagli: Tutti i dettagli con ricalcolo ingredienti
- Categorie: Filtri per tipo, difficoltà, regione
- Ricerca: Cerca per nome, ingrediente, tempo
- Preferiti: Salvataggio locale persistente

**Mobile App**: Expo Go
- Struttura base con bottom tabs
- Design system condiviso con web

## 🤝 Contribuire

```bash
# Crea feature branch
git checkout -b feature/nome-feature

# Commit changes
git commit -m "feat: descrizione feature"

# Push to branch
git push origin feature/nome-feature

# Apri Pull Request
```

## 📚 Documentazione

- **GETTING_STARTED.md** - Guida completa setup
- **packages/firebase/README.md** - Setup Firebase
- Documentazione TypeScript inline nel codice

## 🐛 Known Issues

- Mobile app ha solo la struttura base, mancano dati e dettagli
- Firebase configurato ma non ancora integrato
- Alcuni warning di dipendenze (usare `--legacy-peer-deps`)

## 📝 Note

- L'app web è completamente funzionante e testabile subito
- Le ricette sono dati mock ma molto dettagliati
- Il design è responsive e ottimizzato per uso in cucina
- Codebase pulito, modulare e ben commentato

## 📞 Support

Per domande o problemi:
- GitHub Issues: https://github.com/Nobodyy082102/ricette-italiane/issues

## 📜 License

MIT

---

**Made with ❤️ and 🍝 for Italian cuisine lovers**

🤖 Generated with [Claude Code](https://claude.com/claude-code)
