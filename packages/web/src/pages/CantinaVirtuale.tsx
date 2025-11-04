import React, { useState } from 'react';

const CantinaVirtuale: React.FC = () => {
  const [selectedWine, setSelectedWine] = useState<number | null>(null);

  const viniInCantina = [
    {
      id: 1,
      nome: 'Barolo DOCG 2018',
      produttore: 'Marchesi di Barolo',
      regione: 'Piemonte',
      tipo: 'Rosso',
      annata: 2018,
      bottiglie: 6,
      valutazione: 95,
      prezzo: 45,
      foto: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400',
      note: 'Perfetto con carni rosse'
    },
    {
      id: 2,
      nome: 'Amarone della Valpolicella',
      produttore: 'Allegrini',
      regione: 'Veneto',
      tipo: 'Rosso',
      annata: 2016,
      bottiglie: 3,
      valutazione: 93,
      prezzo: 52,
      foto: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=400',
      note: 'Da invecchiare ancora 5 anni'
    },
    {
      id: 3,
      nome: 'Franciacorta Brut',
      produttore: 'Ca\' del Bosco',
      regione: 'Lombardia',
      tipo: 'Spumante',
      annata: 2019,
      bottiglie: 12,
      valutazione: 91,
      prezzo: 28,
      foto: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400',
      note: 'Ottimo per aperitivi'
    }
  ];

  const abbinamenti = [
    { ricetta: 'Ossobuco alla Milanese', vino: 'Barolo DOCG', match: 98 },
    { ricetta: 'Risotto ai Funghi Porcini', vino: 'Amarone', match: 95 },
    { ricetta: 'Antipasti Misti', vino: 'Franciacorta Brut', match: 92 }
  ];

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px' }}>
      <div style={{
        background: 'linear-gradient(135deg, #8e44ad 0%, #6c3483 100%)',
        color: 'white',
        padding: '60px 40px',
        borderRadius: '20px',
        marginBottom: '40px',
        boxShadow: '0 10px 30px rgba(142, 68, 173, 0.3)'
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '15px' }}>🍷 Cantina Virtuale</h1>
        <p style={{ fontSize: '1.3rem', opacity: 0.95, maxWidth: '800px' }}>
          Gestisci la tua collezione di vini con consigli del sommelier AI. Abbinamenti perfetti per ogni piatto.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        {[
          { label: 'Bottiglie Totali', value: 21, emoji: '🍾', color: '#8e44ad' },
          { label: 'Valore Cantina', value: '€2.847', emoji: '💎', color: '#e74c3c' },
          { label: 'Regioni', value: 8, emoji: '🗺️', color: '#3498db' },
          { label: 'Vini Premium', value: 5, emoji: '⭐', color: '#f39c12' }
        ].map((stat, idx) => (
          <div key={idx} style={{
            background: 'white',
            padding: '25px',
            borderRadius: '15px',
            textAlign: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{stat.emoji}</div>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: stat.color, marginBottom: '5px' }}>
              {stat.value}
            </div>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '25px' }}>🍇 La Mia Collezione</h2>
          <div style={{ display: 'grid', gap: '20px' }}>
            {viniInCantina.map((vino) => (
              <div key={vino.id} style={{
                background: 'white',
                padding: '25px',
                borderRadius: '15px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                display: 'grid',
                gridTemplateColumns: '150px 1fr',
                gap: '25px',
                cursor: 'pointer',
                border: selectedWine === vino.id ? '3px solid #8e44ad' : 'none'
              }}
              onClick={() => setSelectedWine(vino.id)}
              >
                <img src={vino.foto} alt={vino.nome} style={{
                  width: '150px',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '10px'
                }} />
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <div>
                      <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{vino.nome}</h3>
                      <div style={{ fontSize: '0.95rem', color: '#666' }}>
                        {vino.produttore} • {vino.regione}
                      </div>
                    </div>
                    <div style={{
                      background: '#8e44ad',
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontWeight: 700,
                      height: 'fit-content'
                    }}>
                      {vino.valutazione}/100
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '15px' }}>
                    <div style={{ padding: '12px', background: '#F8F9FA', borderRadius: '10px', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>Tipo</div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>{vino.tipo}</div>
                    </div>
                    <div style={{ padding: '12px', background: '#F8F9FA', borderRadius: '10px', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>Annata</div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>{vino.annata}</div>
                    </div>
                    <div style={{ padding: '12px', background: '#F8F9FA', borderRadius: '10px', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}>Bottiglie</div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>{vino.bottiglie}</div>
                    </div>
                  </div>

                  <div style={{
                    padding: '12px',
                    background: '#FFF8F0',
                    borderRadius: '10px',
                    fontSize: '0.9rem',
                    borderLeft: '4px solid #8e44ad',
                    marginBottom: '10px'
                  }}>
                    💡 {vino.note}
                  </div>

                  <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#e74c3c' }}>
                    €{vino.prezzo} /bottiglia
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '25px' }}>🍽️ Abbinamenti Consigliati</h2>
            <div style={{ display: 'grid', gap: '15px' }}>
              {abbinamenti.map((abb, idx) => (
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
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{abb.ricetta}</h4>
                    <div style={{ fontSize: '0.95rem', color: '#666' }}>
                      🍷 {abb.vino}
                    </div>
                  </div>
                  <div style={{
                    background: '#27ae60',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '20px',
                    fontWeight: 700
                  }}>
                    {abb.match}% Match
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div style={{
            background: 'linear-gradient(135deg, #e74c3c, #c0392b)',
            color: 'white',
            padding: '25px',
            borderRadius: '15px',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🎯</div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Consiglio del Sommelier</h3>
            <p style={{ fontSize: '0.95rem', opacity: 0.95 }}>
              Il tuo Barolo 2018 è perfetto per essere degustato ora con un brasato al vino rosso
            </p>
          </div>

          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            marginBottom: '20px'
          }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>🌡️ Condizioni Cantina</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.9rem', color: '#666' }}>Temperatura</span>
                  <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>14°C</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: '#E9ECEF', borderRadius: '4px' }}>
                  <div style={{ width: '70%', height: '100%', background: '#27ae60', borderRadius: '4px' }} />
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.9rem', color: '#666' }}>Umidità</span>
                  <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>68%</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: '#E9ECEF', borderRadius: '4px' }}>
                  <div style={{ width: '68%', height: '100%', background: '#3498db', borderRadius: '4px' }} />
                </div>
              </div>
            </div>
          </div>

          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>📈 Investimento</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#666' }}>Valore acquisto</span>
                <span style={{ fontWeight: 700 }}>€2.450</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#666' }}>Valore attuale</span>
                <span style={{ fontWeight: 700 }}>€2.847</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '12px', borderTop: '2px solid #E9ECEF' }}>
                <span style={{ color: '#27ae60', fontWeight: 600 }}>Rendimento</span>
                <span style={{ fontWeight: 700, fontSize: '1.2rem', color: '#27ae60' }}>+16.2%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CantinaVirtuale;
