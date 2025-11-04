import React from 'react';

const GamificationDashboard: React.FC = () => {
  const xpProgress = (12500 / 15000) * 100;

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px' }}>
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '40px',
        borderRadius: '20px',
        marginBottom: '30px',
        boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Ciao, Chef Marco! 👋</h1>
        <div style={{ fontSize: '1.5rem', opacity: 0.95, marginBottom: '15px' }}>
          🏆 Livello: CHEF
        </div>
        <div style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '15px' }}>
          🏆 Maestro della Pasta
        </div>

        <div style={{
          width: '100%',
          maxWidth: '400px',
          height: '30px',
          background: 'rgba(255,255,255,0.3)',
          borderRadius: '15px',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <div style={{
            width: `${xpProgress}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #f39c12, #f1c40f)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 600,
            fontSize: '0.9rem'
          }}>
            12500 / 15000 XP
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginTop: '20px' }}>
          {[
            { label: 'Ricette', value: 47 },
            { label: 'Regioni', value: 3 },
            { label: 'Badge', value: 6 }
          ].map((stat, idx) => (
            <div key={idx} style={{
              background: 'rgba(255,255,255,0.2)',
              padding: '20px',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '5px' }}>{stat.value}</div>
              <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px', marginBottom: '30px' }}>
        <div>
          <div style={{ background: 'white', borderRadius: '15px', padding: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '25px' }}>🔥 Sfide Attive</h2>
            <div style={{ display: 'grid', gap: '20px' }}>
              {[
                { titolo: '🍝 Maestro della Pasta Fresca', progresso: 2, totale: 3, xp: 500 },
                { titolo: '🗺️ Giro d\'Italia Culinario', progresso: 3, totale: 5, xp: 1000 },
                { titolo: '👨‍🍳 Chef del Giorno', progresso: 0, totale: 1, xp: 100 }
              ].map((sfida, idx) => {
                const percent = (sfida.progresso / sfida.totale) * 100;
                return (
                  <div key={idx} style={{
                    border: '2px solid #008C45',
                    borderRadius: '12px',
                    padding: '20px',
                    cursor: 'pointer'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                      <div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{sfida.titolo}</h3>
                      </div>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', color: '#666' }}>
                        <span>Progresso</span>
                        <span>{sfida.progresso} / {sfida.totale}</span>
                      </div>
                      <div style={{ width: '100%', height: '10px', background: '#E9ECEF', borderRadius: '5px', overflow: 'hidden' }}>
                        <div style={{ width: `${percent}%`, height: '100%', background: 'linear-gradient(90deg, #008C45, #27ae60)' }} />
                      </div>
                    </div>
                    <div style={{ color: '#008C45', fontWeight: 600, fontSize: '0.9rem' }}>
                      ⭐ +{sfida.xp} XP
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ background: 'white', borderRadius: '15px', padding: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', marginTop: '30px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '25px' }}>🏅 I Tuoi Badge</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '15px' }}>
              {['⭐ Primo Piatto', '🍕 Chef Napoletano', '🍝 Maestro Pasta', '🍰 Re Dolci', '🗺️ Esploratore', '🔥 Settimana'].map((badge, idx) => (
                <div key={idx} style={{
                  background: idx < 4 ? 'linear-gradient(135deg, #008C45, #27ae60)' : '#F8F9FA',
                  padding: '20px 15px',
                  borderRadius: '12px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  opacity: idx < 4 ? 1 : 0.5
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>{badge.split(' ')[0]}</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{badge.split(' ').slice(1).join(' ')}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div style={{
            background: 'linear-gradient(135deg, #f39c12, #e67e22)',
            color: 'white',
            padding: '25px',
            borderRadius: '15px',
            textAlign: 'center',
            marginBottom: '20px'
          }}>
            <div style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '10px' }}>
              🔥 7
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>Giorni Consecutivi</div>
            <div style={{ fontSize: '0.9rem', opacity: 0.9, marginTop: '10px' }}>
              Record: 12 giorni 🏆
            </div>
          </div>

          <div style={{ background: 'white', borderRadius: '15px', padding: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>📊 Statistiche</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <div style={{ marginBottom: '8px', fontWeight: 600 }}>Difficoltà</div>
                <div style={{ fontSize: '0.9rem', color: '#666' }}>
                  Facili: 20<br />
                  Medie: 18<br />
                  Difficili: 9
                </div>
              </div>
              <div>
                <div style={{ marginBottom: '8px', fontWeight: 600 }}>Preferenze</div>
                <div style={{ fontSize: '0.9rem', color: '#666' }}>
                  Piatto: Primi<br />
                  Regione: Campania
                </div>
              </div>
              <div>
                <div style={{ marginBottom: '8px', fontWeight: 600 }}>Tempo in Cucina</div>
                <div style={{ fontSize: '0.9rem', color: '#666' }}>
                  39h 0m totali
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamificationDashboard;
