import React, { useState } from 'react';

const MercatoKmZero: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('tutti');

  const produttori = [
    {
      id: 1,
      nome: 'Fattoria Bio San Giuseppe',
      distanza: 3.2,
      citta: 'Modena',
      prodotti: ['🥬 Verdure', '🥚 Uova', '🍯 Miele'],
      certificazioni: ['Bio', 'KM0'],
      rating: 4.9,
      foto: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400'
    },
    {
      id: 2,
      nome: 'Caseificio Valle Verde',
      distanza: 5.8,
      citta: 'Reggio Emilia',
      prodotti: ['🧀 Formaggi', '🥛 Latte', '🧈 Burro'],
      certificazioni: ['DOP', 'Bio'],
      rating: 5.0,
      foto: 'https://images.unsplash.com/photo-1486365227551-f3f90034a57c?w=400'
    },
    {
      id: 3,
      nome: 'Orto di Marco',
      distanza: 1.5,
      citta: 'Bologna',
      prodotti: ['🍅 Pomodori', '🥒 Ortaggi', '🌿 Erbe'],
      certificazioni: ['KM0', 'Naturale'],
      rating: 4.8,
      foto: 'https://images.unsplash.com/photo-1495570689269-d883b1224443?w=400'
    }
  ];

  const prodottiInVendita = [
    { nome: 'Pomodori San Marzano', prezzo: 3.50, unita: 'kg', produttore: 'Orto di Marco', foto: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=200' },
    { nome: 'Parmigiano Reggiano 24 mesi', prezzo: 18.00, unita: 'kg', produttore: 'Caseificio Valle Verde', foto: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=200' },
    { nome: 'Uova Fresche Bio', prezzo: 4.50, unita: '6 pz', produttore: 'Fattoria Bio San Giuseppe', foto: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=200' },
    { nome: 'Miele Millefiori', prezzo: 12.00, unita: '500g', produttore: 'Fattoria Bio San Giuseppe', foto: 'https://images.unsplash.com/photo-1587049352846-4a222e784738?w=200' }
  ];

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px' }}>
      <div style={{
        background: 'linear-gradient(135deg, #27ae60 0%, #229954 100%)',
        color: 'white',
        padding: '60px 40px',
        borderRadius: '20px',
        marginBottom: '40px',
        boxShadow: '0 10px 30px rgba(39, 174, 96, 0.3)'
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '15px' }}>🌾 Mercato a KM Zero</h1>
        <p style={{ fontSize: '1.3rem', opacity: 0.95, maxWidth: '800px' }}>
          Acquista direttamente dai produttori locali. Fresco, sostenibile, a KM 0.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '25px' }}>👨‍🌾 Produttori Vicini</h2>
          <div style={{ display: 'grid', gap: '25px' }}>
            {produttori.map((prod) => (
              <div key={prod.id} style={{
                background: 'white',
                padding: '25px',
                borderRadius: '15px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                display: 'grid',
                gridTemplateColumns: '180px 1fr',
                gap: '25px'
              }}>
                <img src={prod.foto} alt={prod.nome} style={{
                  width: '180px',
                  height: '180px',
                  objectFit: 'cover',
                  borderRadius: '12px'
                }} />
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                    <div>
                      <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{prod.nome}</h3>
                      <div style={{ fontSize: '0.95rem', color: '#666' }}>
                        📍 {prod.citta} • 🚗 {prod.distanza} km
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.5rem', color: '#f39c12' }}>⭐ {prod.rating}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '15px' }}>
                    {prod.prodotti.map((p, idx) => (
                      <span key={idx} style={{
                        padding: '6px 12px',
                        background: '#F8F9FA',
                        borderRadius: '15px',
                        fontSize: '0.9rem'
                      }}>
                        {p}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
                    {prod.certificazioni.map((cert, idx) => (
                      <span key={idx} style={{
                        padding: '5px 12px',
                        background: '#27ae60',
                        color: 'white',
                        borderRadius: '12px',
                        fontSize: '0.85rem',
                        fontWeight: 600
                      }}>
                        ✓ {cert}
                      </span>
                    ))}
                  </div>

                  <button style={{
                    background: '#27ae60',
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '10px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    width: '100%'
                  }}>
                    🛒 Visita Negozio
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '25px' }}>🛍️ Prodotti in Evidenza</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
              {prodottiInVendita.map((prod, idx) => (
                <div key={idx} style={{
                  background: 'white',
                  padding: '20px',
                  borderRadius: '15px',
                  boxShadow: '0 3px 12px rgba(0,0,0,0.08)',
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr',
                  gap: '15px',
                  alignItems: 'center'
                }}>
                  <img src={prod.foto} alt={prod.nome} style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                    borderRadius: '10px'
                  }} />
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>{prod.nome}</h4>
                    <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '8px' }}>
                      {prod.produttore}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#27ae60' }}>
                        €{prod.prezzo}
                      </div>
                      <div style={{ fontSize: '0.9rem', color: '#666' }}>
                        /{prod.unita}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            marginBottom: '20px'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>🛒 Carrello</h3>
            <div style={{
              padding: '60px 20px',
              textAlign: 'center',
              color: '#999',
              background: '#F8F9FA',
              borderRadius: '10px'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🛒</div>
              <p>Il tuo carrello è vuoto</p>
            </div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #3498db, #2980b9)',
            color: 'white',
            padding: '25px',
            borderRadius: '15px',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🌍</div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Impatto Sostenibile</h3>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '5px' }}>42 kg</div>
            <p style={{ fontSize: '0.95rem', opacity: 0.95 }}>CO₂ risparmiata questo mese</p>
          </div>

          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>📊 I Tuoi Acquisti</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#666' }}>Ordini totali</span>
                <span style={{ fontWeight: 700 }}>23</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#666' }}>Produttori supportati</span>
                <span style={{ fontWeight: 700 }}>8</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#666' }}>KM percorsi</span>
                <span style={{ fontWeight: 700, color: '#27ae60' }}>87 km</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MercatoKmZero;
