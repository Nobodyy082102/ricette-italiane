import React, { useState } from 'react';

const LibroFamiglia: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'timeline'>('grid');
  const [selectedRecipe, setSelectedRecipe] = useState<number | null>(null);

  const ricetteFamiglia = [
    {
      id: 1,
      titolo: 'Ragù della Nonna Maria',
      autore: 'Nonna Maria',
      anno: 1952,
      generazione: 'Nonna',
      foto: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400',
      storia: 'Ricetta tramandata da 3 generazioni',
      note: 'Cuocere almeno 4 ore'
    },
    {
      id: 2,
      titolo: 'Torta di Mele di Zia Rosa',
      autore: 'Zia Rosa',
      anno: 1978,
      generazione: 'Genitori',
      foto: 'https://images.unsplash.com/photo-1587241321921-91a834d82ffc?w=400',
      storia: 'Ogni domenica a pranzo',
      note: 'Usare solo mele renette'
    },
    {
      id: 3,
      titolo: 'Gnocchi del Nonno Pietro',
      autore: 'Nonno Pietro',
      anno: 1965,
      generazione: 'Nonno',
      foto: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?w=400',
      storia: 'Fatti ogni giovedì',
      note: 'Patate schiacciate a mano'
    }
  ];

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #8B4513 0%, #654321 100%)',
        color: 'white',
        padding: '60px 40px',
        borderRadius: '20px',
        marginBottom: '40px',
        boxShadow: '0 10px 30px rgba(139, 69, 19, 0.3)',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '15px', fontFamily: 'Georgia, serif' }}>
          📖 Libro di Famiglia Digitale
        </h1>
        <p style={{ fontSize: '1.3rem', opacity: 0.95, maxWidth: '800px', margin: '0 auto 30px' }}>
          Conserva e tramanda le ricette della tua famiglia. Digitalizza ricette scritte a mano con OCR AI.
        </p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <button
            onClick={() => alert('📸 Funzione Scansione OCR: Carica una foto di una ricetta scritta a mano e l\'AI la digitalizzerà automaticamente!')}
            style={{
              background: 'white',
              color: '#8B4513',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            📸 Scansiona Ricetta
          </button>
          <button
            onClick={() => alert('✍️ Apre il form per scrivere una nuova ricetta di famiglia con campi per ingredienti, procedimento e storia familiare')}
            style={{
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              border: '2px solid white',
              padding: '15px 30px',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            ✍️ Scrivi Nuova Ricetta
          </button>
        </div>
      </div>

      {/* Albero Genealogico delle Ricette */}
      <div style={{ marginBottom: '40px', background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 6px 20px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '30px', textAlign: 'center' }}>
          🌳 Albero Genealogico delle Ricette
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
          {[
            { gen: 'Bisnonni', count: 12, emoji: '👴👵', color: '#8B4513' },
            { gen: 'Nonni', count: 24, emoji: '👴👵', color: '#A0522D' },
            { gen: 'Genitori', count: 31, emoji: '👨👩', color: '#CD853F' },
            { gen: 'Mie', count: 8, emoji: '🙋', color: '#DEB887' }
          ].map((item, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: item.color,
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem',
                marginBottom: '15px',
                margin: '0 auto 15px'
              }}>
                {item.emoji}
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '5px' }}>{item.count}</div>
              <div style={{ fontSize: '0.95rem', color: '#666' }}>{item.gen}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Toggle View Mode */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '2rem' }}>📚 Le Mie Ricette di Famiglia</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => setViewMode('grid')}
            style={{
              background: viewMode === 'grid' ? '#8B4513' : 'white',
              color: viewMode === 'grid' ? 'white' : '#8B4513',
              border: '2px solid #8B4513',
              padding: '10px 20px',
              borderRadius: '10px',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            🎴 Griglia
          </button>
          <button
            onClick={() => setViewMode('timeline')}
            style={{
              background: viewMode === 'timeline' ? '#8B4513' : 'white',
              color: viewMode === 'timeline' ? 'white' : '#8B4513',
              border: '2px solid #8B4513',
              padding: '10px 20px',
              borderRadius: '10px',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            📅 Timeline
          </button>
        </div>
      </div>

      {/* Ricette Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px' }}>
        {ricetteFamiglia.map((ricetta) => (
          <div
            key={ricetta.id}
            onClick={() => setSelectedRecipe(ricetta.id)}
            style={{
              background: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: selectedRecipe === ricetta.id ? '0 8px 30px rgba(139, 69, 19, 0.4)' : '0 6px 20px rgba(0,0,0,0.12)',
              cursor: 'pointer',
              transition: 'transform 0.3s',
              border: selectedRecipe === ricetta.id ? '3px solid #8B4513' : '3px solid #DEB887',
              transform: selectedRecipe === ricetta.id ? 'scale(1.02)' : 'scale(1)'
            }}
          >
            <div style={{ position: 'relative' }}>
              <img src={ricetta.foto} alt={ricetta.titolo} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
              <div style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: '#8B4513',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                fontWeight: 700,
                fontSize: '0.9rem'
              }}>
                {ricetta.anno}
              </div>
              <div style={{
                position: 'absolute',
                bottom: '15px',
                left: '15px',
                background: 'rgba(255,255,255,0.95)',
                color: '#8B4513',
                padding: '8px 16px',
                borderRadius: '20px',
                fontWeight: 600,
                fontSize: '0.9rem'
              }}>
                {ricetta.generazione}
              </div>
            </div>

            <div style={{ padding: '25px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', fontFamily: 'Georgia, serif', color: '#8B4513' }}>
                {ricetta.titolo}
              </h3>

              <div style={{ marginBottom: '15px', color: '#666', fontSize: '0.95rem' }}>
                <div style={{ marginBottom: '8px' }}>
                  👤 <strong>{ricetta.autore}</strong>
                </div>
                <div style={{ marginBottom: '8px' }}>
                  📜 {ricetta.storia}
                </div>
                <div style={{
                  padding: '12px',
                  background: '#FFF8DC',
                  borderLeft: '4px solid #8B4513',
                  borderRadius: '8px',
                  fontStyle: 'italic'
                }}>
                  💡 {ricetta.note}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`📖 Apertura ricetta completa: ${ricetta.titolo}\n\nIngred ienti, procedimento completo e storia della ricetta verranno mostrati qui.`);
                  }}
                  style={{
                    flex: 1,
                    background: '#8B4513',
                    color: 'white',
                    border: 'none',
                    padding: '12px',
                    borderRadius: '10px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  📖 Leggi
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`📤 Condividendo "${ricetta.titolo}" con la famiglia!\n\nLa ricetta verrà inviata via email o social ai familiari selezionati.`);
                  }}
                  style={{
                    flex: 1,
                    background: 'transparent',
                    color: '#8B4513',
                    border: '2px solid #8B4513',
                    padding: '12px',
                    borderRadius: '10px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  📤 Condividi
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Funzionalità OCR */}
      <div style={{
        marginTop: '60px',
        background: 'linear-gradient(135deg, #F8F9FA, #E9ECEF)',
        padding: '50px',
        borderRadius: '20px'
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', textAlign: 'center' }}>
          🤖 Digitalizzazione con AI
        </h2>
        <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#666', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
          Scansiona ricette scritte a mano o stampate. La nostra AI riconosce ingredienti, quantità e procedimenti automaticamente.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px' }}>
          {[
            { emoji: '📸', titolo: 'Scatta Foto', desc: 'Fotografa la ricetta scritta a mano' },
            { emoji: '🔍', titolo: 'OCR AI', desc: 'Riconoscimento automatico del testo' },
            { emoji: '✏️', titolo: 'Revisiona', desc: 'Controlla e correggi se necessario' },
            { emoji: '💾', titolo: 'Salva', desc: 'Aggiungi al tuo libro digitale' }
          ].map((step, idx) => (
            <div key={idx} style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
            }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '15px' }}>{step.emoji}</div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#8B4513' }}>{step.titolo}</h4>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibroFamiglia;
