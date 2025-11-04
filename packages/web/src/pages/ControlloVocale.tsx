import React, { useState } from 'react';

const ControlloVocale: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [lastCommand, setLastCommand] = useState('');

  const comandi = [
    { comando: '"Vai al prossimo step"', azione: 'Passa alla fase successiva della ricetta', icon: '⏭️' },
    { comando: '"Avvia timer 10 minuti"', azione: 'Imposta un timer per la cottura', icon: '⏱️' },
    { comando: '"Ripeti ingredienti"', azione: 'Rilegge la lista degli ingredienti', icon: '🗣️' },
    { comando: '"Zoom ingredienti"', azione: 'Ingrandisce la sezione ingredienti', icon: '🔍' },
    { comando: '"Stop timer"', azione: 'Ferma il timer attivo', icon: '⏹️' },
    { comando: '"Modalità mani libere"', azione: 'Attiva/disattiva controllo vocale continuo', icon: '🙌' }
  ];

  const timersAttivi = [
    { nome: 'Pasta in cottura', rimanente: '4:32', totale: 10 },
    { nome: 'Ragù', rimanente: '45:12', totale: 120 }
  ];

  const frasiRecenti = [
    { testo: 'Vai al prossimo step', orario: '14:23', riconosciuto: true },
    { testo: 'Avvia timer 10 minuti', orario: '14:15', riconosciuto: true },
    { testo: 'Quanta pasta serve?', orario: '14:10', riconosciuto: true },
    { testo: 'Ripeti ingredienti', orario: '14:05', riconosciuto: true }
  ];

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px' }}>
      <div style={{
        background: 'linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)',
        color: 'white',
        padding: '60px 40px',
        borderRadius: '20px',
        marginBottom: '40px',
        boxShadow: '0 10px 30px rgba(155, 89, 182, 0.3)'
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '15px' }}>🎤 Controllo Vocale Hands-Free</h1>
        <p style={{ fontSize: '1.3rem', opacity: 0.95, maxWidth: '800px' }}>
          Cucina senza toccare lo schermo. Comandi vocali per ogni funzione. Perfetto quando hai le mani sporche!
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        <div>
          {/* Microfono Principale */}
          <div style={{
            background: 'white',
            padding: '50px',
            borderRadius: '20px',
            boxShadow: '0 6px 20px rgba(0,0,0,0.12)',
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            <div
              onClick={() => setIsListening(!isListening)}
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: isListening
                  ? 'linear-gradient(135deg, #e74c3c, #c0392b)'
                  : 'linear-gradient(135deg, #9b59b6, #8e44ad)',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px',
                cursor: 'pointer',
                boxShadow: isListening ? '0 0 40px rgba(231, 76, 60, 0.6)' : '0 10px 30px rgba(155, 89, 182, 0.4)',
                transition: 'all 0.3s',
                animation: isListening ? 'pulse 1.5s infinite' : 'none'
              }}
            >
              <div style={{ fontSize: '5rem', marginBottom: '10px' }}>
                {isListening ? '🔴' : '🎤'}
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>
                {isListening ? 'In Ascolto...' : 'Tap per parlare'}
              </div>
            </div>

            {isListening && (
              <div style={{
                padding: '20px',
                background: '#FFF8F0',
                borderRadius: '12px',
                fontSize: '1.3rem',
                color: '#212529',
                marginBottom: '20px',
                minHeight: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {lastCommand || 'In attesa del comando...'}
              </div>
            )}

            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
              <button style={{
                background: '#27ae60',
                color: 'white',
                border: 'none',
                padding: '15px 30px',
                borderRadius: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '1rem'
              }}>
                🙌 Modalità Hands-Free
              </button>
              <button style={{
                background: 'transparent',
                color: '#9b59b6',
                border: '2px solid #9b59b6',
                padding: '15px 30px',
                borderRadius: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '1rem'
              }}>
                ⚙️ Impostazioni
              </button>
            </div>
          </div>

          {/* Lista Comandi */}
          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            marginBottom: '30px'
          }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '25px' }}>📋 Comandi Disponibili</h2>
            <div style={{ display: 'grid', gap: '15px' }}>
              {comandi.map((cmd, idx) => (
                <div key={idx} style={{
                  padding: '20px',
                  background: '#F8F9FA',
                  borderRadius: '12px',
                  display: 'grid',
                  gridTemplateColumns: '60px 1fr',
                  gap: '20px',
                  alignItems: 'center'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #9b59b6, #8e44ad)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem'
                  }}>
                    {cmd.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '5px', color: '#9b59b6' }}>
                      {cmd.comando}
                    </div>
                    <div style={{ fontSize: '0.95rem', color: '#666' }}>
                      {cmd.azione}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frasi Recenti */}
          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '25px' }}>🗣️ Cronologia Comandi</h2>
            <div style={{ display: 'grid', gap: '12px' }}>
              {frasiRecenti.map((frase, idx) => (
                <div key={idx} style={{
                  padding: '15px 20px',
                  background: frase.riconosciuto ? '#F0FFF4' : '#FFF5F5',
                  borderRadius: '10px',
                  borderLeft: `4px solid ${frase.riconosciuto ? '#27ae60' : '#e74c3c'}`,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ fontSize: '1.5rem' }}>
                      {frase.riconosciuto ? '✅' : '❌'}
                    </div>
                    <div>
                      <div style={{ fontSize: '1.05rem', fontWeight: 600 }}>"{frase.testo}"</div>
                    </div>
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#666' }}>
                    {frase.orario}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          {/* Timer Attivi */}
          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            marginBottom: '20px'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>⏱️ Timer Attivi</h3>
            {timersAttivi.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {timersAttivi.map((timer, idx) => (
                  <div key={idx} style={{
                    padding: '20px',
                    background: '#F8F9FA',
                    borderRadius: '12px'
                  }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '10px' }}>
                      {timer.nome}
                    </div>
                    <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#e74c3c', marginBottom: '10px' }}>
                      {timer.rimanente}
                    </div>
                    <div style={{ width: '100%', height: '8px', background: '#E9ECEF', borderRadius: '4px', marginBottom: '10px' }}>
                      <div style={{
                        width: `${(parseFloat(timer.rimanente) / timer.totale) * 100}%`,
                        height: '100%',
                        background: '#e74c3c',
                        borderRadius: '4px'
                      }} />
                    </div>
                    <button style={{
                      width: '100%',
                      background: 'transparent',
                      color: '#e74c3c',
                      border: '2px solid #e74c3c',
                      padding: '10px',
                      borderRadius: '8px',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}>
                      ⏹️ Stop
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{
                padding: '40px 20px',
                textAlign: 'center',
                color: '#999',
                background: '#F8F9FA',
                borderRadius: '10px'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '10px' }}>⏱️</div>
                <p>Nessun timer attivo</p>
              </div>
            )}
          </div>

          {/* Impostazioni Rapide */}
          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            marginBottom: '20px'
          }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '20px' }}>⚙️ Impostazioni</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {[
                { label: 'Attivazione vocale', enabled: true },
                { label: 'Conferma comandi', enabled: false },
                { label: 'Feedback sonoro', enabled: true },
                { label: 'Sveglia timer', enabled: true }
              ].map((setting, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px',
                  background: '#F8F9FA',
                  borderRadius: '8px'
                }}>
                  <span style={{ fontSize: '0.95rem' }}>{setting.label}</span>
                  <div style={{
                    width: '50px',
                    height: '28px',
                    borderRadius: '14px',
                    background: setting.enabled ? '#27ae60' : '#ccc',
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'background 0.3s'
                  }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'white',
                      position: 'absolute',
                      top: '2px',
                      left: setting.enabled ? '24px' : '2px',
                      transition: 'left 0.3s'
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div style={{
            background: 'linear-gradient(135deg, #3498db, #2980b9)',
            color: 'white',
            padding: '25px',
            borderRadius: '15px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>💡</div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Tip del Giorno</h3>
            <p style={{ fontSize: '0.95rem', opacity: 0.95 }}>
              Parla chiaramente e attendi il feedback sonoro prima del prossimo comando
            </p>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              box-shadow: 0 0 40px rgba(231, 76, 60, 0.6);
            }
            50% {
              box-shadow: 0 0 60px rgba(231, 76, 60, 0.9);
            }
          }
        `}
      </style>
    </div>
  );
};

export default ControlloVocale;
