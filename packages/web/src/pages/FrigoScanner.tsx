import React, { useState, useRef } from 'react';

const FrigoScanner: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setIsScanning(true);
        setTimeout(() => setIsScanning(false), 2000);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#008C45', fontSize: '2.5rem', marginBottom: '10px' }}>
          📸 Frigo Scanner AI
        </h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>
          Scatta una foto al tuo frigo e scopri cosa puoi cucinare!
        </p>
      </div>

      <div style={{ background: 'white', borderRadius: '15px', padding: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', marginBottom: '30px' }}>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => fileInputRef.current?.click()}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '15px 30px',
              fontSize: '1.1rem',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              background: 'linear-gradient(135deg, #008C45, #007a3d)',
              color: 'white',
              fontWeight: 600
            }}
          >
            📷 Carica Immagine
          </button>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageSelect}
        />

        {selectedImage && (
          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <img src={selectedImage} alt="Scansione" style={{ maxWidth: '100%', maxHeight: '400px', borderRadius: '10px' }} />
            {isScanning && (
              <div style={{ marginTop: '20px', fontSize: '1.2rem', color: '#008C45', fontWeight: 600 }}>
                🔍 Analisi in corso con AI...
              </div>
            )}
            {!isScanning && (
              <div style={{ marginTop: '20px' }}>
                <h3 style={{ color: '#008C45' }}>✅ Ingredienti Riconosciuti:</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px', marginTop: '20px' }}>
                  {['Pomodori', 'Mozzarella', 'Basilico', 'Pasta'].map((item, idx) => (
                    <div key={idx} style={{ background: '#f8f9fa', padding: '15px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                      <strong>{item}</strong>
                      <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '8px' }}>
                        Confidenza: {90 + idx}%
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '40px', background: 'linear-gradient(135deg, rgba(0,140,69,0.1), rgba(205,33,42,0.1))', borderRadius: '15px', padding: '30px' }}>
                  <h3 style={{ color: '#212529' }}>🍝 Ricette Suggerite</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', marginTop: '20px' }}>
                    <div style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                      <div style={{ padding: '20px' }}>
                        <div style={{ background: '#27ae60', color: 'white', display: 'inline-block', padding: '6px 12px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 600, marginBottom: '10px' }}>
                          95% Match
                        </div>
                        <h4 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Pasta al Pomodoro</h4>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>
                          ✅ Hai: Pasta, Pomodori, Basilico<br />
                          ❌ Mancano: Olio, Aglio (€3.50)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FrigoScanner;
