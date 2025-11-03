#!/bin/bash

echo "📦 Building app..."
cd packages/web
npm install
npm run build

echo "📤 Deploying to GitHub Pages..."
cd dist

# Crea un nuovo git repo nella cartella dist
git init
git add -A
git commit -m "Deploy to GitHub Pages"

# Push al branch gh-pages
git push -f https://github.com/Nobodyy082102/ricette-italiane.git master:gh-pages

cd ../..
echo "✅ Deploy completato!"
echo "🌐 La tua app sarà disponibile su: https://nobodyy082102.github.io/ricette-italiane"
