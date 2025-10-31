# 🇮🇹 Ricette Italiane - App Mobile & Web

App completa per ricette della cucina italiana, disponibile sia come app mobile (Android) che web.

## 🚀 Caratteristiche Principali

- 📱 **App Mobile**: React Native per Android (pubblicabile su Google Play Store)
- 🌐 **App Web**: React con design responsive
- 🔥 **Backend**: Firebase (Database, Auth, Storage)
- 🎨 **Design**: Tema italiano moderno con colori della bandiera
- 🍝 **100+ Ricette**: Ricette italiane classiche e regionali

## 📋 Funzionalità

### Ricette
- Ricerca avanzata e filtri (vegetariano, vegano, senza glutine, ecc.)
- Categorie per difficoltà (Facile, Media, Difficile)
- Categorie per tipo (Primi, Secondi, Contorni, Dolci, ecc.)
- Ricette regionali
- Video tutorial integrati
- Foto step-by-step

### Funzionalità Speciali
- ⏱️ Timer integrato per la cottura
- 🎤 Modalità "Mani libere" con comandi vocali
- 🛒 Lista della spesa automatica
- ⭐ Preferiti e salvataggio ricette
- 📱 Modalità offline
- 🔢 Ricalcolo porzioni automatico
- 💬 Commenti e valutazioni

## 🛠️ Struttura del Progetto

```
ricette-italiane/
├── packages/
│   ├── mobile/         # App React Native
│   ├── web/            # App React Web
│   ├── shared/         # Codice condiviso
│   └── firebase/       # Configurazione Firebase
└── package.json        # Monorepo workspace
```

## 🏃‍♂️ Come Iniziare

### Installazione
```bash
npm install
```

### Sviluppo
```bash
# Web app
npm run web

# Mobile app
npm run mobile
```

### Build
```bash
# Web production build
npm run build:web

# Mobile production build
npm run build:mobile
```

## 🎨 Design

Design moderno e pulito con:
- Colori ispirati alla bandiera italiana (verde, bianco, rosso)
- Navigazione intuitiva con bottom navigation
- Interfaccia ottimizzata per l'uso in cucina
- Supporto tema chiaro/scuro

## 📄 Licenza

MIT

---

Made with ❤️ for Italian cuisine lovers
