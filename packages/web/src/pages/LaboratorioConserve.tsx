import React, { useState } from 'react';

const LaboratorioConserve: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const progettiAttivi = [
    {
      id: 1,
      nome: 'Pomodori Pelati',
      tipo: 'Conserva',
      dataInizio: '2025-10-15',
      giorniRimasti: 45,
      temperatura: '18°C',
      stato: 'In Corso',
      foto: 'https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?w=400'
    },
    {
      id: 2,
      nome: 'Kimchi Piccante',
      tipo: 'Fermentazione',
      dataInizio: '2025-10-28',
      giorniRimasti: 12,
      temperatura: '20°C',
      stato: 'Fermentazione',
      foto: 'https://images.unsplash.com/photo-1631708697400-ca9e94656d3e?w=400'
    },
    {
      id: 3,
      nome: 'Marmellata di Fichi',
      tipo: 'Conserva',
      dataInizio: '2025-10-20',
      giorniRimasti: 30,
      temperatura: '17°C',
      stato: 'Stagionatura',
      foto: 'https://images.unsplash.com/photo-1599599811240-34f6393c3160?w=400'
    }
  ];

  const ricetteConserve = [
    { nome: 'Giardiniera Classica', difficolta: 'Media', tempo: '120 min', stagione: 'Estate' },
    { nome: 'Passata di Pomodoro', difficolta: 'Facile', tempo: '180 min', stagione: 'Estate' },
    { nome: 'Melanzane sott\'olio', difficolta: 'Media', tempo: '90 min', stagione: 'Estate' },
    { nome: 'Marmellata di Arance', difficolta: 'Facile', tempo: '60 min', stagione: 'Inverno' }
  ];

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px' }}>
      <div style={{
        background: 'linear-gradient(135deg, #16a085 0%, #117a65 100%)',
        color: 'white',
        padding: '60px 40px',
        borderRadius: '20px',
        marginBottom: '40px',
        boxShadow: '0 10px 30px rgba(22, 160, 133, 0.3)'
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '15px' }}>🫙 Laboratorio Conserve</h1>
        <p style={{ fontSize: '1.3rem', opacity: 0.95, maxWidth: '800px' }}>
          Crea e monitora le tue conserve e fermentazioni. Timer intelligenti, promemoria e guide complete.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '25px' }}>⏱️ Progetti Attivi</h2>
          <div style={{ display: 'grid', gap: '20px' }}>
            {progettiAttivi.map((progetto) => (
              <div
                key={progetto.id}
                onClick={() => setSelectedProject(progetto.id)}
                style={{
                  background: 'white',
                  padding: '25px',
                  borderRadius: '15px',
                  boxShadow: selectedProject === progetto.id ? '0 8px 25px rgba(22, 160, 133, 0.3)' : '0 4px 15px rgba(0,0,0,0.1)',
                  display: 'grid',
                  gridTemplateColumns: '150px 1fr',
                  gap: '25px',
                  cursor: 'pointer',
                  border: selectedProject === progetto.id ? '3px solid #16a085' : '3px solid transparent',
                  transform: selectedProject === progetto.id ? 'scale(1.02)' : 'scale(1)',
                  transition: 'all 0.3s'
                }}>
                <img src={progetto.foto} alt={progetto.nome} style={{
                  width: '150px',
                  height: '150px',
                  objectFit: 'cover',
                  borderRadius: '10px'
                }} />
                <div>
                  <div style={{
                    display: 'inline-block',
                    background: '#16a085',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '15px',
                    fontSize: '0.85rem',
                    marginBottom: '10px'
                  }}>
                    {progetto.tipo}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{progetto.nome}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                    <div>
                      <div style={{ fontSize: '0.85rem', color: '#666' }}>Giorni rimasti</div>
                      <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#16a085' }}>
                        {progetto.giorniRimasti}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', color: '#666' }}>Temperatura</div>
                      <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#e74c3c' }}>
                        {progetto.temperatura}
                      </div>
                    </div>
                  </div>
                  <div style={{
                    padding: '12px',
                    background: '#F8F9FA',
                    borderRadius: '10px',
                    fontSize: '0.9rem',
                    color: '#666'
                  }}>
                    📅 Iniziato il {new Date(progetto.dataInizio).toLocaleDateString('it-IT')}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '25px' }}>📚 Ricette Conserve</h2>
            <div style={{ display: 'grid', gap: '15px' }}>
              {ricetteConserve.map((ricetta, idx) => (
                <div key={idx} style={{
                  background: 'white',
                  padding: '20px',
                  borderRadius: '12px',
                  boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{ricetta.nome}</h4>
                    <div style={{ display: 'flex', gap: '15px', fontSize: '0.9rem', color: '#666' }}>
                      <span>📊 {ricetta.difficolta}</span>
                      <span>⏱️ {ricetta.tempo}</span>
                      <span>🌱 {ricetta.stagione}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => alert(`🫙 Iniziando progetto "${ricetta.nome}"!\n\nTi guideremo passo dopo passo nella preparazione della conserva con timer automatici e promemoria per ogni fase.`)}
                    style={{
                      background: '#16a085',
                      color: 'white',
                      border: 'none',
                      padding: '12px 24px',
                      borderRadius: '10px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'transform 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    Inizia
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div style={{
            background: 'linear-gradient(135deg, #f39c12, #e67e22)',
            color: 'white',
            padding: '30px',
            borderRadius: '15px',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '15px' }}>🔔</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Prossimo Controllo</h3>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '10px' }}>2 ore</div>
            <p style={{ fontSize: '0.95rem', opacity: 0.95 }}>Kimchi - Controllo pH</p>
          </div>

          <div style={{ background: 'white', padding: '25px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '20px' }}>💡 Tips del Giorno</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {[
                'Sterilizza sempre i barattoli prima dell\'uso',
                'Controlla che i coperchi facciano "click"',
                'Conserva in luogo fresco e buio'
              ].map((tip, idx) => (
                <div key={idx} style={{
                  padding: '15px',
                  background: '#F8F9FA',
                  borderRadius: '10px',
                  fontSize: '0.9rem',
                  borderLeft: '4px solid #16a085'
                }}>
                  {tip}
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            marginTop: '20px'
          }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>📊 Statistiche</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#666' }}>Barattoli prodotti</span>
                <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>47</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#666' }}>Progetti completati</span>
                <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>12</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#666' }}>Tasso successo</span>
                <span style={{ fontWeight: 700, fontSize: '1.2rem', color: '#27ae60' }}>94%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaboratorioConserve;
