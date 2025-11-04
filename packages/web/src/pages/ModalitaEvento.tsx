import React, { useState } from 'react';

const ModalitaEvento: React.FC = () => {
  const [numeroOspiti, setNumeroOspiti] = useState(8);

  const eventoEsempio = {
    nome: 'Cena di San Valentino',
    data: '2025-11-14',
    ora: '20:00',
    ospiti: 8,
    tipo: 'Cena Romantica',
    budget: 25
  };

  const menuEvento = [
    { portata: 'Antipasto', piatto: 'Bruschette Miste', tempo: 20, tempoServi: '19:40' },
    { portata: 'Primo', piatto: 'Tagliatelle al Tartufo', tempo: 35, tempoServizio: '20:00' },
    { portata: 'Secondo', piatto: 'Ossobuco alla Milanese', tempo: 90, tempoServizio: '20:40' },
    { portata: 'Dolce', piatto: 'Tiramisù', tempo: 30, tempoServizio: '21:20' }
  ];

  const timeline = [
    { ora: '17:00', attivita: '🛒 Inizia preparazione', status: 'pending' },
    { ora: '17:30', attivita: '🔪 Prepara ingredienti Ossobuco', status: 'pending' },
    { ora: '18:30', attivita: '🍳 Inizia cottura Ossobuco', status: 'pending' },
    { ora: '19:30', attivita: '🍝 Prepara pasta fresca', status: 'pending' },
    { ora: '19:45', attivita: '🍞 Prepara bruschette', status: 'pending' },
    { ora: '20:00', attivita: '👥 Ospiti arrivano', status: 'pending' },
    { ora: '20:00', attivita: '🍽️ Servi antipasto', status: 'pending' }
  ];

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px' }}>
      <div style={{
        background: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)',
        color: 'white',
        padding: '60px 40px',
        borderRadius: '20px',
        marginBottom: '40px',
        boxShadow: '0 10px 30px rgba(243, 156, 18, 0.3)'
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '15px' }}>🎉 Modalità Evento</h1>
        <p style={{ fontSize: '1.3rem', opacity: 0.95, maxWidth: '800px' }}>
          Organizza cene e eventi perfetti. Timeline automatica, coordinamento portate e gestione timing.
        </p>
        <button style={{
          marginTop: '20px',
          background: 'white',
          color: '#f39c12',
          border: 'none',
          padding: '15px 30px',
          borderRadius: '12px',
          fontSize: '1rem',
          fontWeight: 600,
          cursor: 'pointer'
        }}>
          ➕ Crea Nuovo Evento
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        <div>
          {/* Dettagli Evento */}
          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            marginBottom: '30px'
          }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>📋 Dettagli Evento</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '8px' }}>
                  Nome Evento
                </label>
                <input
                  type="text"
                  value={eventoEsempio.nome}
                  readOnly
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '2px solid #E9ECEF',
                    fontSize: '1rem'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '8px' }}>
                  Tipo Evento
                </label>
                <select style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '2px solid #E9ECEF',
                  fontSize: '1rem'
                }}>
                  <option>Cena Romantica</option>
                  <option>Pranzo Familiare</option>
                  <option>Aperitivo</option>
                  <option>Buffet</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '8px' }}>
                  Data e Ora
                </label>
                <input
                  type="datetime-local"
                  value={`${eventoEsempio.data}T${eventoEsempio.ora}`}
                  readOnly
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '2px solid #E9ECEF',
                    fontSize: '1rem'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '8px' }}>
                  Numero Ospiti
                </label>
                <input
                  type="number"
                  value={numeroOspiti}
                  onChange={(e) => setNumeroOspiti(parseInt(e.target.value))}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '2px solid #E9ECEF',
                    fontSize: '1rem'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Menu dell'Evento */}
          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            marginBottom: '30px'
          }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>🍽️ Menu dell'Evento</h2>
            <div style={{ display: 'grid', gap: '15px' }}>
              {menuEvento.map((item, idx) => (
                <div key={idx} style={{
                  padding: '20px',
                  background: '#F8F9FA',
                  borderRadius: '12px',
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr 120px',
                  gap: '20px',
                  alignItems: 'center'
                }}>
                  <div style={{
                    background: '#f39c12',
                    color: 'white',
                    padding: '10px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}>
                    {item.portata}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{item.piatto}</h4>
                    <div style={{ fontSize: '0.9rem', color: '#666' }}>
                      ⏱️ {item.tempo} minuti preparazione
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '3px' }}>Servire alle</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f39c12' }}>
                      {item.tempoServizio}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button style={{
              marginTop: '20px',
              width: '100%',
              background: 'transparent',
              color: '#f39c12',
              border: '2px solid #f39c12',
              padding: '15px',
              borderRadius: '10px',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '1rem'
            }}>
              ➕ Aggiungi Portata
            </button>
          </div>

          {/* Timeline */}
          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>⏰ Timeline Preparazione</h2>
            <div style={{ position: 'relative', paddingLeft: '40px' }}>
              <div style={{
                position: 'absolute',
                left: '15px',
                top: '10px',
                bottom: '10px',
                width: '3px',
                background: '#E9ECEF'
              }} />
              {timeline.map((step, idx) => (
                <div key={idx} style={{
                  position: 'relative',
                  marginBottom: '25px',
                  paddingLeft: '15px'
                }}>
                  <div style={{
                    position: 'absolute',
                    left: '-32px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: step.status === 'completed' ? '#27ae60' : '#f39c12',
                    border: '3px solid white',
                    boxShadow: '0 0 0 2px #E9ECEF'
                  }} />
                  <div style={{
                    background: '#F8F9FA',
                    padding: '15px',
                    borderRadius: '10px'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '3px' }}>
                          {step.attivita}
                        </div>
                      </div>
                      <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f39c12' }}>
                        {step.ora}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          {/* Countdown */}
          <div style={{
            background: 'linear-gradient(135deg, #e74c3c, #c0392b)',
            color: 'white',
            padding: '30px',
            borderRadius: '15px',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '1.2rem', marginBottom: '10px', opacity: 0.95 }}>
              Tempo all'evento
            </div>
            <div style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '10px' }}>
              9 giorni
            </div>
            <div style={{ fontSize: '1.5rem', opacity: 0.95 }}>
              4h 23m
            </div>
          </div>

          {/* Checklist */}
          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            marginBottom: '20px'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>✅ Checklist</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { task: 'Lista della spesa', done: true },
                { task: 'Preparare tavola', done: false },
                { task: 'Controllo ingredienti', done: true },
                { task: 'Playlist musica', done: false }
              ].map((item, idx) => (
                <label key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px',
                  background: '#F8F9FA',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}>
                  <input type="checkbox" checked={item.done} readOnly style={{ width: '20px', height: '20px' }} />
                  <span style={{
                    fontSize: '0.95rem',
                    textDecoration: item.done ? 'line-through' : 'none',
                    color: item.done ? '#999' : '#212529'
                  }}>
                    {item.task}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Budget */}
          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>💰 Budget</h3>
            <div style={{ marginBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.9rem', color: '#666' }}>€{eventoEsempio.budget} /ospite</span>
                <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>€{eventoEsempio.budget * numeroOspiti}</span>
              </div>
              <div style={{ width: '100%', height: '10px', background: '#E9ECEF', borderRadius: '5px' }}>
                <div style={{ width: '65%', height: '100%', background: '#27ae60', borderRadius: '5px' }} />
              </div>
              <div style={{ fontSize: '0.85rem', color: '#666', marginTop: '8px' }}>
                Speso: €130 di €{eventoEsempio.budget * numeroOspiti}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalitaEvento;
