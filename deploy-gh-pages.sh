#!/bin/bash

echo "📦 Building app..."
npm run build:web

echo "📤 Deploying to GitHub Pages..."
cd packages/web/dist

# Crea un nuovo git repo nella cartella dist
git init
git add -A
git commit -m "Deploy to GitHub Pages"

# Push al branch gh-pages
git push -f git@github.com:TUO_USERNAME/ricette-italiane.git main:gh-pages

cd ../../..
echo "✅ Deploy completato!"
echo "🌐 La tua app sarà disponibile su: https://TUO_USERNAME.github.io/ricette-italiane"
