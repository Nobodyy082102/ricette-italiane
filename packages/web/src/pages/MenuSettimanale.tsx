import React, { useState } from 'react';

const MenuSettimanale: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState('lunedi');

  const menuSettimana = {
    lunedi: {
      pranzo: { nome: 'Pasta alla Carbonara', calorie: 650, tempo: 25 },
      cena: { nome: 'Insalata Caprese', calorie: 320, tempo: 10 }
    },
    martedi: {
      pranzo: { nome: 'Risotto ai Funghi', calorie: 580, tempo: 35 },
      cena: { nome: 'Pollo alla Cacciatora', calorie: 450, tempo: 40 }
    },
    mercoledi: {
      pranzo: { nome: 'Lasagne al Forno', calorie: 720, tempo: 60 },
      cena: { nome: 'Zuppa di Farro', calorie: 280, tempo: 30 }
    },
    giovedi: {
      pranzo: { nome: 'Gnocchi al Pesto', calorie: 520, tempo: 20 },
      cena: { nome: 'Branzino al Forno', calorie: 380, tempo: 35 }
    },
    venerdi: {
      pranzo: { nome: 'Pizza Margherita', calorie: 680, tempo: 45 },
      cena: { nome: 'Vellutata di Zucca', calorie: 240, tempo: 25 }
    },
    sabato: {
      pranzo: { nome: 'Ossobuco alla Milanese', calorie: 780, tempo: 90 },
      cena: { nome: 'Bruschette Miste', calorie: 350, tempo: 15 }
    },
    domenica: {
      pranzo: { nome: 'Arrosto con Patate', calorie: 850, tempo: 75 },
      cena: { nome: 'Minestrone', calorie: 290, tempo: 30 }
    }
  };

  const giorni = [
    { key: 'lunedi', label: 'Lun', fullLabel: 'Lunedì' },
    { key: 'martedi', label: 'Mar', fullLabel: 'Martedì' },
    { key: 'mercoledi', label: 'Mer', fullLabel: 'Mercoledì' },
    { key: 'giovedi', label: 'Gio', fullLabel: 'Giovedì' },
    { key: 'venerdi', label: 'Ven', fullLabel: 'Venerdì' },
    { key: 'sabato', label: 'Sab', fullLabel: 'Sabato' },
    { key: 'domenica', label: 'Dom', fullLabel: 'Domenica' }
  ];

  const analisi = {
    calorieGiornaliere: 1450,
    costoPrevisto: 42,
    tempoInCucina: 185,
    ingredientiNecessari: 28
  };

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '50px 40px',
        borderRadius: '20px',
        marginBottom: '30px',
        boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '15px' }}>📅 Menu Settimanale AI</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.95, maxWidth: '700px' }}>
          Menu personalizzato bilanciato e ottimizzato per gusto, salute e budget. Generato con intelligenza artificiale.
        </p>
        <button
          onClick={() => alert('🔄 Rigenerando menu settimanale!\n\nL\'AI sta creando un nuovo menu personalizzato basato sui tuoi gusti, budget e obiettivi nutrizionali.\n\nPreferenze: Cucina italiana, Budget medio, 1400-1600 kcal/giorno')}
          style={{
            marginTop: '20px',
            background: 'white',
            color: '#667eea',
            border: 'none',
            padding: '12px 30px',
            borderRadius: '10px',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          🔄 Rigenera Menu
        </button>
      </div>

      {/* Analisi Settimanale */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        {[
          { label: 'Calorie Medie/Giorno', value: analisi.calorieGiornaliere, emoji: '🔥', unit: 'kcal' },
          { label: 'Costo Previsto', value: analisi.costoPrevisto, emoji: '💰', unit: '€' },
          { label: 'Tempo in Cucina', value: analisi.tempoInCucina, emoji: '⏱️', unit: 'min' },
          { label: 'Ingredienti Totali', value: analisi.ingredientiNecessari, emoji: '🛒', unit: '' }
        ].map((stat, idx) => (
          <div key={idx} style={{
            background: 'white',
            padding: '25px',
            borderRadius: '15px',
            textAlign: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{stat.emoji}</div>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: '#667eea', marginBottom: '5px' }}>
              {stat.value}{stat.unit}
            </div>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Selezione Giorno */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '30px', overflowX: 'auto', paddingBottom: '10px' }}>
        {giorni.map((giorno) => (
          <button
            key={giorno.key}
            onClick={() => setSelectedDay(giorno.key)}
            style={{
              minWidth: '100px',
              padding: '15px 20px',
              background: selectedDay === giorno.key ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'white',
              color: selectedDay === giorno.key ? 'white' : '#212529',
              border: selectedDay === giorno.key ? 'none' : '2px solid #E9ECEF',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: selectedDay === giorno.key ? '0 4px 15px rgba(102, 126, 234, 0.3)' : '0 2px 8px rgba(0,0,0,0.05)',
              transition: 'all 0.3s'
            }}
          >
            <div style={{ fontSize: '0.85rem', opacity: 0.9, marginBottom: '5px' }}>{giorno.label}</div>
            <div>{giorno.fullLabel.slice(0, 3)}</div>
          </button>
        ))}
      </div>

      {/* Menu del Giorno Selezionato */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px', marginBottom: '40px' }}>
        {['pranzo', 'cena'].map((pasto) => {
          const piatto = menuSettimana[selectedDay as keyof typeof menuSettimana][pasto as 'pranzo' | 'cena'];
          return (
            <div key={pasto} style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}>
              <div style={{
                display: 'inline-block',
                background: pasto === 'pranzo' ? '#f39c12' : '#9b59b6',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: 600,
                marginBottom: '20px'
              }}>
                {pasto === 'pranzo' ? '☀️ Pranzo' : '🌙 Cena'}
              </div>

              <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#212529' }}>
                {piatto.nome}
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '25px' }}>
                <div style={{ padding: '15px', background: '#F8F9FA', borderRadius: '10px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#e74c3c' }}>{piatto.calorie}</div>
                  <div style={{ fontSize: '0.85rem', color: '#666' }}>Calorie</div>
                </div>
                <div style={{ padding: '15px', background: '#F8F9FA', borderRadius: '10px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#3498db' }}>{piatto.tempo}'</div>
                  <div style={{ fontSize: '0.85rem', color: '#666' }}>Preparazione</div>
                </div>
              </div>

              <button
                onClick={() => alert(`📖 Aprendo ricetta "${piatto.nome}"!\n\nTroverai:\n✓ Ingredienti completi\n✓ Procedimento passo-passo\n✓ Valori nutrizionali\n✓ Suggerimenti dello chef\n\nTempo: ${piatto.tempo} minuti\nCalorie: ${piatto.calorie} kcal`)}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  color: 'white',
                  border: 'none',
                  padding: '15px',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  marginBottom: '10px',
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                📖 Vedi Ricetta
              </button>

              <button
                onClick={() => alert(`🔄 Cambiando piatto per ${pasto === 'pranzo' ? 'pranzo' : 'cena'}!\n\nL'AI sta cercando alternative simili a "${piatto.nome}" con:\n✓ Calorie simili (±100 kcal)\n✓ Tempo di preparazione simile\n✓ Ingredienti di stagione\n✓ Budget compatibile`)}
                style={{
                  width: '100%',
                  background: 'transparent',
                  color: '#667eea',
                  border: '2px solid #667eea',
                  padding: '15px',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#667eea';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#667eea';
                }}
              >
                🔄 Cambia Piatto
              </button>
            </div>
          );
        })}
      </div>

      {/* Lista della Spesa */}
      <div style={{ background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
          <h2 style={{ fontSize: '2rem' }}>🛒 Lista della Spesa</h2>
          <button
            onClick={() => alert('📤 Esportando lista della spesa!\n\nScegli il formato:\n✓ PDF stampabile\n✓ Email\n✓ Note smartphone\n✓ App lista spesa\n\nLa lista include tutti i 28 ingredienti necessari per la settimana, organizzati per categoria.')}
            style={{
              background: '#27ae60',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '10px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            📤 Esporta Lista
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '15px' }}>
          {[
            { categoria: '🥩 Proteine', items: ['Pollo 500g', 'Branzino 400g', 'Uova x6'] },
            { categoria: '🥬 Verdure', items: ['Pomodori 1kg', 'Zucchine 500g', 'Insalata'] },
            { categoria: '🧀 Latticini', items: ['Mozzarella 250g', 'Parmigiano 200g', 'Burro'] },
            { categoria: '🌾 Dispensa', items: ['Pasta 1kg', 'Riso 500g', 'Farina'] }
          ].map((cat, idx) => (
            <div key={idx} style={{
              padding: '20px',
              background: '#F8F9FA',
              borderRadius: '12px'
            }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', color: '#212529' }}>{cat.categoria}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {cat.items.map((item, i) => (
                  <li key={i} style={{
                    padding: '8px 0',
                    borderBottom: i < cat.items.length - 1 ? '1px solid #E9ECEF' : 'none',
                    fontSize: '0.9rem',
                    color: '#666'
                  }}>
                    ☐ {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSettimanale;
