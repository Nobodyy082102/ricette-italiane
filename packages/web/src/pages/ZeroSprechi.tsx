import React, { useState } from 'react';

const ZeroSprechi: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState<number | null>(null);
  const [showUrgentRecipes, setShowUrgentRecipes] = useState(false);
  const [editingIngredient, setEditingIngredient] = useState<number | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);
  const [cookingMode, setCookingMode] = useState<any>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const ingredientiTracciati = [
    { id: 1, nome: 'Mozzarella di Bufala', quantita: '250g', scadenza: '2025-11-07', giorni: 2, categoria: 'Latticini' },
    { id: 2, nome: 'Pomodori San Marzano', quantita: '1kg', scadenza: '2025-11-09', giorni: 4, categoria: 'Verdure' },
    { id: 3, nome: 'Parmigiano Reggiano', quantita: '200g', scadenza: '2025-11-06', giorni: 1, categoria: 'Latticini' },
    { id: 4, nome: 'Basilico Fresco', quantita: '1 mazzo', scadenza: '2025-11-08', giorni: 3, categoria: 'Erbe' }
  ];

  const statistiche = {
    kg_salvati: 24.5,
    risparmio_euro: 187,
    co2_risparmiata: 42,
    streak: 18
  };

  const getUrgenzaColor = (giorni: number) => {
    if (giorni <= 1) return '#CD212A';
    if (giorni <= 3) return '#f39c12';
    return '#27ae60';
  };

  const salvaNeiFavoriti = (ricetta: any) => {
    const favoriti = JSON.parse(localStorage.getItem('ricetteFavorite') || '[]');
    const esisteGia = favoriti.some((r: any) => r.titolo === ricetta.titolo);

    if (!esisteGia) {
      favoriti.push({
        ...ricetta,
        dataAggiunta: new Date().toISOString(),
        origine: 'Zero Sprechi'
      });
      localStorage.setItem('ricetteFavorite', JSON.stringify(favoriti));
      alert(`💚 "${ricetta.titolo}" salvata nei preferiti!\n\nPuoi trovarla nella sezione Preferiti.`);
    } else {
      alert(`ℹ️ "${ricetta.titolo}" è già nei tuoi preferiti!`);
    }
  };

  const ingredienteSelezionato = editingIngredient ? ingredientiTracciati.find(i => i.id === editingIngredient) : null;

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px' }}>
      {/* Modal Modalità Cooking Guidata */}
      {cookingMode && (
        <>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.7)',
              zIndex: 1002,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          />
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
            zIndex: 1003,
            maxWidth: '800px',
            width: '90%',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            {/* Header */}
            <div style={{ marginBottom: '30px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h2 style={{ fontSize: '2rem', color: '#27ae60' }}>👨‍🍳 Modalità Cooking</h2>
                <button
                  onClick={() => {
                    if (confirm('🤔 Vuoi davvero uscire dalla modalità cooking?\n\nIl progresso verrà perso.')) {
                      setCookingMode(null);
                      setCurrentStep(0);
                    }
                  }}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    color: '#666'
                  }}
                >
                  ✕
                </button>
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#666', marginBottom: '20px' }}>{cookingMode.titolo}</h3>

              {/* Barra Progresso */}
              <div style={{ marginBottom: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#666', marginBottom: '8px' }}>
                  <span>Passo {currentStep + 1} di {cookingMode.procedimento.length}</span>
                  <span>{Math.round(((currentStep + 1) / cookingMode.procedimento.length) * 100)}% completato</span>
                </div>
                <div style={{ width: '100%', height: '12px', background: '#E9ECEF', borderRadius: '6px', overflow: 'hidden' }}>
                  <div style={{
                    width: `${((currentStep + 1) / cookingMode.procedimento.length) * 100}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #27ae60, #229954)',
                    transition: 'width 0.3s'
                  }} />
                </div>
              </div>
            </div>

            {/* Passo Corrente */}
            <div style={{
              background: '#F0FFF4',
              padding: '40px',
              borderRadius: '15px',
              marginBottom: '30px',
              border: '3px solid #27ae60',
              minHeight: '200px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '25px'
              }}>
                <div style={{
                  minWidth: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: '#27ae60',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '1.5rem'
                }}>
                  {currentStep + 1}
                </div>
                <h4 style={{ fontSize: '1.3rem', color: '#212529', flex: 1 }}>Passo {currentStep + 1}</h4>
              </div>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#212529' }}>
                {cookingMode.procedimento[currentStep]}
              </p>
            </div>

            {/* Lista Passi */}
            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '15px', color: '#666' }}>📋 Tutti i passi</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '200px', overflowY: 'auto', padding: '10px' }}>
                {cookingMode.procedimento.map((step: string, idx: number) => (
                  <div
                    key={idx}
                    onClick={() => setCurrentStep(idx)}
                    style={{
                      padding: '12px',
                      background: idx === currentStep ? '#27ae60' : idx < currentStep ? '#E8F5E9' : '#F8F9FA',
                      color: idx === currentStep ? 'white' : '#212529',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      if (idx !== currentStep) {
                        e.currentTarget.style.background = '#E8F5E9';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (idx !== currentStep) {
                        e.currentTarget.style.background = idx < currentStep ? '#E8F5E9' : '#F8F9FA';
                      }
                    }}
                  >
                    <span style={{ fontWeight: 700 }}>{idx + 1}.</span>
                    <span style={{ flex: 1 }}>{step.substring(0, 60)}{step.length > 60 ? '...' : ''}</span>
                    {idx < currentStep && <span>✓</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Pulsanti Navigazione */}
            <div style={{ display: 'flex', gap: '15px' }}>
              <button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                style={{
                  flex: 1,
                  background: currentStep === 0 ? '#E9ECEF' : 'transparent',
                  color: currentStep === 0 ? '#999' : '#27ae60',
                  border: '2px solid ' + (currentStep === 0 ? '#E9ECEF' : '#27ae60'),
                  padding: '18px',
                  borderRadius: '12px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  cursor: currentStep === 0 ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                ← Indietro
              </button>
              {currentStep < cookingMode.procedimento.length - 1 ? (
                <button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  style={{
                    flex: 1,
                    background: 'linear-gradient(135deg, #27ae60, #229954)',
                    color: 'white',
                    border: 'none',
                    padding: '18px',
                    borderRadius: '12px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'transform 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  Avanti →
                </button>
              ) : (
                <button
                  onClick={() => {
                    alert(`🎉 Complimenti!\n\nHai completato la preparazione di "${cookingMode.titolo}"!\n\nBuon appetito! 🍽️`);
                    setCookingMode(null);
                    setCurrentStep(0);
                  }}
                  style={{
                    flex: 1,
                    background: 'linear-gradient(135deg, #f39c12, #e67e22)',
                    color: 'white',
                    border: 'none',
                    padding: '18px',
                    borderRadius: '12px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'transform 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  🎉 Completa!
                </button>
              )}
            </div>
          </div>
        </>
      )}

      {/* Modal Ricetta Completa */}
      {selectedRecipe && (
        <>
          <div
            onClick={() => setSelectedRecipe(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.5)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflowY: 'auto',
              padding: '20px'
            }}
          />
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
            zIndex: 1001,
            maxWidth: '700px',
            width: '90%',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '25px' }}>
              <div>
                <h2 style={{ fontSize: '2rem', color: '#27ae60', marginBottom: '10px' }}>{selectedRecipe.titolo}</h2>
                <div style={{ display: 'flex', gap: '15px', fontSize: '0.9rem', color: '#666' }}>
                  <span>⏱️ {selectedRecipe.tempo} min</span>
                  <span>📊 {selectedRecipe.difficolta}</span>
                  <span style={{
                    background: '#27ae60',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '15px',
                    fontWeight: 600
                  }}>
                    {selectedRecipe.match}% Match
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedRecipe(null)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: '#666'
                }}
              >
                ✕
              </button>
            </div>

            {/* Descrizione */}
            <div style={{
              background: '#F0FFF4',
              padding: '20px',
              borderRadius: '12px',
              marginBottom: '25px',
              borderLeft: '4px solid #27ae60'
            }}>
              <p style={{ fontSize: '1rem', color: '#212529', lineHeight: '1.6' }}>
                {selectedRecipe.descrizione}
              </p>
            </div>

            {/* Ingredienti */}
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#212529' }}>📋 Ingredienti</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {selectedRecipe.ingredienti.map((ing: string, idx: number) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px',
                    background: '#F8F9FA',
                    borderRadius: '8px'
                  }}>
                    <span style={{ fontSize: '1.2rem' }}>✓</span>
                    <span style={{ fontSize: '1rem', color: '#212529' }}>{ing}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Procedimento */}
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#212529' }}>👨‍🍳 Procedimento</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {selectedRecipe.procedimento.map((step: string, idx: number) => (
                  <div key={idx} style={{
                    display: 'flex',
                    gap: '15px',
                    padding: '15px',
                    background: '#F8F9FA',
                    borderRadius: '10px'
                  }}>
                    <div style={{
                      minWidth: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      background: '#27ae60',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '0.9rem'
                    }}>
                      {idx + 1}
                    </div>
                    <p style={{ fontSize: '1rem', color: '#212529', lineHeight: '1.6', flex: 1 }}>{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pulsanti Azione */}
            <div style={{ display: 'flex', gap: '15px' }}>
              <button
                onClick={() => {
                  setCookingMode(selectedRecipe);
                  setCurrentStep(0);
                  setSelectedRecipe(null);
                }}
                style={{
                  flex: 1,
                  background: 'linear-gradient(135deg, #27ae60, #229954)',
                  color: 'white',
                  border: 'none',
                  padding: '15px',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                🍳 Inizia a Cucinare
              </button>
              <button
                onClick={() => {
                  salvaNeiFavoriti(selectedRecipe);
                }}
                style={{
                  flex: 1,
                  background: 'transparent',
                  color: '#27ae60',
                  border: '2px solid #27ae60',
                  padding: '15px',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#27ae60';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#27ae60';
                }}
              >
                💚 Salva
              </button>
            </div>
          </div>
        </>
      )}

      {/* Modal Modifica Ingrediente */}
      {editingIngredient && ingredienteSelezionato && (
        <>
          <div
            onClick={() => setEditingIngredient(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.5)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          />
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
            zIndex: 1001,
            maxWidth: '500px',
            width: '90%'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
              <h2 style={{ fontSize: '1.8rem', color: '#3498db' }}>✏️ Modifica Ingrediente</h2>
              <button
                onClick={() => setEditingIngredient(null)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: '#666'
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label htmlFor="edit-nome" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px', color: '#212529' }}>
                  Nome Ingrediente
                </label>
                <input
                  id="edit-nome"
                  name="nome"
                  type="text"
                  defaultValue={ingredienteSelezionato.nome}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '10px',
                    border: '2px solid #E9ECEF',
                    fontSize: '1rem',
                    background: '#F8F9FA'
                  }}
                  readOnly
                />
                <p style={{ fontSize: '0.75rem', color: '#666', marginTop: '5px' }}>Il nome non può essere modificato</p>
              </div>

              <div>
                <label htmlFor="edit-quantita" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px', color: '#212529' }}>
                  Quantità
                </label>
                <input
                  id="edit-quantita"
                  name="quantita"
                  type="text"
                  defaultValue={ingredienteSelezionato.quantita}
                  placeholder="es. 500g, 1kg, 3 pezzi"
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '10px',
                    border: '2px solid #3498db',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div>
                <label htmlFor="edit-scadenza" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px', color: '#212529' }}>
                  Data di Scadenza
                </label>
                <input
                  id="edit-scadenza"
                  name="scadenza"
                  type="date"
                  defaultValue={ingredienteSelezionato.scadenza}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '10px',
                    border: '2px solid #3498db',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div>
                <label htmlFor="edit-categoria" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px', color: '#212529' }}>
                  Categoria
                </label>
                <select
                  id="edit-categoria"
                  name="categoria"
                  defaultValue={ingredienteSelezionato.categoria}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '10px',
                    border: '2px solid #3498db',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">Seleziona categoria</option>
                  <option value="Latticini">🧀 Latticini</option>
                  <option value="Verdure">🥬 Verdure</option>
                  <option value="Frutta">🍎 Frutta</option>
                  <option value="Carne">🥩 Carne</option>
                  <option value="Pesce">🐟 Pesce</option>
                  <option value="Erbe">🌿 Erbe</option>
                  <option value="Dispensa">🌾 Dispensa</option>
                  <option value="Altro">📦 Altro</option>
                </select>
              </div>

              <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                <button
                  onClick={() => {
                    alert(`✅ "${ingredienteSelezionato.nome}" modificato con successo!\n\nLe modifiche sono state salvate.`);
                    setEditingIngredient(null);
                  }}
                  style={{
                    flex: 1,
                    background: 'linear-gradient(135deg, #3498db, #2980b9)',
                    color: 'white',
                    border: 'none',
                    padding: '15px',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'transform 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  ✓ Salva Modifiche
                </button>
                <button
                  onClick={() => setEditingIngredient(null)}
                  style={{
                    flex: 1,
                    background: 'transparent',
                    color: '#666',
                    border: '2px solid #E9ECEF',
                    padding: '15px',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Annulla
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Modal Aggiungi Ingrediente */}
      {showAddModal && (
        <>
          <div
            onClick={() => setShowAddModal(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.5)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          />
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
            zIndex: 1001,
            maxWidth: '500px',
            width: '90%'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
              <h2 style={{ fontSize: '1.8rem', color: '#27ae60' }}>➕ Aggiungi Ingrediente</h2>
              <button
                onClick={() => setShowAddModal(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: '#666'
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label htmlFor="add-nome" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px', color: '#212529' }}>
                  Nome Ingrediente
                </label>
                <input
                  id="add-nome"
                  name="nome"
                  type="text"
                  placeholder="es. Pomodori freschi"
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '10px',
                    border: '2px solid #E9ECEF',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div>
                <label htmlFor="add-quantita" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px', color: '#212529' }}>
                  Quantità
                </label>
                <input
                  id="add-quantita"
                  name="quantita"
                  type="text"
                  placeholder="es. 500g, 1kg, 3 pezzi"
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '10px',
                    border: '2px solid #E9ECEF',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div>
                <label htmlFor="add-scadenza" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px', color: '#212529' }}>
                  Data di Scadenza
                </label>
                <input
                  id="add-scadenza"
                  name="scadenza"
                  type="date"
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '10px',
                    border: '2px solid #E9ECEF',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div>
                <label htmlFor="add-categoria" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px', color: '#212529' }}>
                  Categoria
                </label>
                <select
                  id="add-categoria"
                  name="categoria"
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '10px',
                    border: '2px solid #E9ECEF',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">Seleziona categoria</option>
                  <option value="Latticini">🧀 Latticini</option>
                  <option value="Verdure">🥬 Verdure</option>
                  <option value="Frutta">🍎 Frutta</option>
                  <option value="Carne">🥩 Carne</option>
                  <option value="Pesce">🐟 Pesce</option>
                  <option value="Erbe">🌿 Erbe</option>
                  <option value="Dispensa">🌾 Dispensa</option>
                  <option value="Altro">📦 Altro</option>
                </select>
              </div>

              <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                <button
                  onClick={() => {
                    alert('✅ Ingrediente aggiunto con successo!\n\nL\'AI ti avviserà quando sta per scadere e ti suggerirà ricette per utilizzarlo.');
                    setShowAddModal(false);
                  }}
                  style={{
                    flex: 1,
                    background: 'linear-gradient(135deg, #27ae60, #229954)',
                    color: 'white',
                    border: 'none',
                    padding: '15px',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'transform 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  ✓ Aggiungi
                </button>
                <button
                  onClick={() => setShowAddModal(false)}
                  style={{
                    flex: 1,
                    background: 'transparent',
                    color: '#666',
                    border: '2px solid #E9ECEF',
                    padding: '15px',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Annulla
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #27ae60 0%, #229954 100%)',
        color: 'white',
        padding: '50px 40px',
        borderRadius: '20px',
        marginBottom: '30px',
        boxShadow: '0 10px 30px rgba(39, 174, 96, 0.3)'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '15px' }}>♻️ Zero Sprechi AI</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.95, maxWidth: '700px' }}>
          Riduci gli sprechi alimentari con l'intelligenza artificiale. Traccia le scadenze e ricevi suggerimenti per utilizzare ogni ingrediente.
        </p>
      </div>

      {/* Statistiche Impatto */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        {[
          { label: 'KG Cibo Salvato', value: statistiche.kg_salvati, emoji: '🥬', color: '#27ae60' },
          { label: 'Risparmio €', value: `€${statistiche.risparmio_euro}`, emoji: '💰', color: '#f39c12' },
          { label: 'CO₂ Risparmiata', value: `${statistiche.co2_risparmiata}kg`, emoji: '🌍', color: '#3498db' },
          { label: 'Giorni Consecutivi', value: statistiche.streak, emoji: '🔥', color: '#e74c3c' }
        ].map((stat, idx) => (
          <div key={idx} style={{
            background: 'white',
            padding: '30px',
            borderRadius: '15px',
            textAlign: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>{stat.emoji}</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: stat.color, marginBottom: '5px' }}>
              {stat.value}
            </div>
            <div style={{ fontSize: '0.95rem', color: '#666' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        {/* Ingredienti Tracciati */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '2rem' }}>📦 Dispensa Tracciata</h2>
            <button
              onClick={() => setShowAddModal(true)}
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
              + Aggiungi Ingrediente
            </button>
          </div>

          <div style={{ display: 'grid', gap: '15px' }}>
            {ingredientiTracciati.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedIngredient(item.id)}
                style={{
                  background: 'white',
                  padding: '25px',
                  borderRadius: '15px',
                  boxShadow: selectedIngredient === item.id ? '0 8px 20px rgba(39, 174, 96, 0.3)' : '0 3px 12px rgba(0,0,0,0.1)',
                  borderLeft: `5px solid ${getUrgenzaColor(item.giorni)}`,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  border: selectedIngredient === item.id ? '2px solid #27ae60' : '2px solid transparent',
                  borderLeft: `5px solid ${getUrgenzaColor(item.giorni)}`,
                  transform: selectedIngredient === item.id ? 'scale(1.02)' : 'scale(1)',
                  transition: 'all 0.3s'
                }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', color: '#212529' }}>{item.nome}</h3>
                  <div style={{ display: 'flex', gap: '20px', fontSize: '0.9rem', color: '#666', marginBottom: '12px' }}>
                    <span>📦 {item.quantita}</span>
                    <span>🏷️ {item.categoria}</span>
                    <span>📅 Scade: {new Date(item.scadenza).toLocaleDateString('it-IT')}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditingIngredient(item.id);
                      }}
                      style={{
                        background: '#3498db',
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'transform 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      ✏️ Modifica
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm(`🗑️ Eliminare "${item.nome}"?\n\nQuesta azione non può essere annullata.`)) {
                          alert(`✅ "${item.nome}" eliminato con successo dalla dispensa!`);
                        }
                      }}
                      style={{
                        background: '#e74c3c',
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'transform 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      🗑️ Elimina
                    </button>
                  </div>
                </div>
                <div style={{
                  background: getUrgenzaColor(item.giorni),
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  fontWeight: 600,
                  textAlign: 'center',
                  minWidth: '100px'
                }}>
                  <div style={{ fontSize: '1.5rem' }}>{item.giorni}</div>
                  <div style={{ fontSize: '0.85rem', opacity: 0.95 }}>
                    {item.giorni === 1 ? 'giorno' : 'giorni'}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Ricette Suggerite Anti-Spreco */}
          <div style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>🍝 Ricette Anti-Spreco</h2>
            <div style={{ display: 'grid', gap: '20px' }}>
              {[
                {
                  titolo: 'Caprese con Mozzarella e Basilico',
                  ingredienti: ['Mozzarella di Bufala 250g', 'Basilico Fresco 10 foglie', 'Pomodori San Marzano 300g', 'Olio extravergine d\'oliva 3 cucchiai', 'Sale q.b.', 'Pepe nero q.b.'],
                  match: 95,
                  tempo: 10,
                  difficolta: 'Facile',
                  descrizione: 'Un classico della cucina italiana, perfetto per utilizzare la mozzarella e il basilico in scadenza. Fresco, veloce e delizioso!',
                  procedimento: [
                    'Lavare i pomodori e tagliarli a fette spesse circa 1 cm',
                    'Tagliare la mozzarella di bufala a fette dello stesso spessore dei pomodori',
                    'Disporre in un piatto alternando pomodoro e mozzarella',
                    'Lavare e asciugare le foglie di basilico, distribuirle sui pomodori e mozzarella',
                    'Condire con olio extravergine, sale e pepe nero appena macinato',
                    'Lasciare riposare 5 minuti prima di servire per permettere ai sapori di amalgamarsi'
                  ]
                },
                {
                  titolo: 'Pasta al Parmigiano e Basilico',
                  ingredienti: ['Parmigiano Reggiano 150g', 'Basilico Fresco 1 mazzo', 'Pasta 320g', 'Olio extravergine 4 cucchiai', 'Aglio 1 spicchio', 'Sale q.b.', 'Pepe nero q.b.'],
                  match: 88,
                  tempo: 15,
                  difficolta: 'Facile',
                  descrizione: 'Ricetta semplice e veloce per utilizzare il parmigiano in eccesso. Cremosa e saporita, perfetta per un pranzo veloce.',
                  procedimento: [
                    'Portare a ebollizione abbondante acqua salata per la pasta',
                    'Grattugiare il parmigiano reggiano e metterlo in una ciotola capiente',
                    'Lavare e tritare finemente il basilico fresco',
                    'Cuocere la pasta seguendo i tempi sulla confezione',
                    'Scolare la pasta conservando un mestolo di acqua di cottura',
                    'Versare la pasta nella ciotola con il parmigiano, aggiungere l\'olio e il basilico',
                    'Mantecare energicamente aggiungendo un po\' di acqua di cottura fino a ottenere una crema',
                    'Servire subito con una spolverata di parmigiano e basilico fresco'
                  ]
                }
              ].map((ricetta, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedRecipe(ricetta)}
                  style={{
                    background: 'white',
                    padding: '25px',
                    borderRadius: '15px',
                    boxShadow: '0 3px 12px rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(39, 174, 96, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 3px 12px rgba(0,0,0,0.1)';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '15px' }}>
                    <h3 style={{ fontSize: '1.3rem', flex: 1 }}>{ricetta.titolo}</h3>
                    <div style={{
                      background: '#27ae60',
                      color: 'white',
                      padding: '5px 12px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 600
                    }}>
                      {ricetta.match}% Match
                    </div>
                  </div>
                  <div style={{ marginBottom: '12px', fontSize: '0.9rem', color: '#666' }}>
                    ⏱️ {ricetta.tempo} minuti
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {ricetta.ingredienti.slice(0, 3).map((ing, i) => (
                      <span key={i} style={{
                        padding: '5px 12px',
                        background: 'rgba(39, 174, 96, 0.1)',
                        color: '#27ae60',
                        borderRadius: '15px',
                        fontSize: '0.85rem'
                      }}>
                        ✓ {ing.split(' ')[0]}
                      </span>
                    ))}
                    {ricetta.ingredienti.length > 3 && (
                      <span style={{
                        padding: '5px 12px',
                        background: 'rgba(39, 174, 96, 0.1)',
                        color: '#27ae60',
                        borderRadius: '15px',
                        fontSize: '0.85rem',
                        fontWeight: 600
                      }}>
                        +{ricetta.ingredienti.length - 3} altri
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - Notifiche e Consigli */}
        <div>
          {/* Notifiche Urgenti */}
          <div style={{
            background: 'linear-gradient(135deg, #CD212A, #a11820)',
            color: 'white',
            padding: '25px',
            borderRadius: '15px',
            marginBottom: '20px',
            boxShadow: '0 4px 15px rgba(205, 33, 42, 0.3)'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>⚠️ Attenzione!</h3>
            <div style={{ fontSize: '0.95rem', opacity: 0.95 }}>
              <p style={{ marginBottom: '10px' }}>
                <strong>Parmigiano Reggiano</strong> scade domani
              </p>
              <button
                onClick={() => setShowUrgentRecipes(!showUrgentRecipes)}
                style={{
                  background: 'white',
                  color: '#CD212A',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  width: '100%',
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                {showUrgentRecipes ? '✕ Nascondi Ricette' : '🔍 Trova Ricette'}
              </button>
            </div>
          </div>

          {/* Ricette Urgenti per Parmigiano */}
          {showUrgentRecipes && (
            <div style={{
              background: 'white',
              padding: '25px',
              borderRadius: '15px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              marginBottom: '20px',
              animation: 'slideIn 0.3s ease-out'
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#CD212A' }}>
                🍝 Ricette con Parmigiano Reggiano
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {[
                  {
                    titolo: 'Risotto al Parmigiano',
                    tempo: 25,
                    difficolta: 'Media',
                    match: 98,
                    descrizione: 'Cremoso risotto mantecato con abbondante parmigiano. Un classico della tradizione italiana.',
                    ingredienti: ['Riso Carnaroli 320g', 'Parmigiano Reggiano 150g', 'Brodo vegetale 1L', 'Burro 50g', 'Cipolla 1', 'Vino bianco 1 bicchiere', 'Sale q.b.'],
                    procedimento: [
                      'Preparare il brodo vegetale e tenerlo in caldo',
                      'Tritare finemente la cipolla e rosolarla nel burro',
                      'Aggiungere il riso e tostarlo per 2-3 minuti',
                      'Sfumare con il vino bianco e lasciare evaporare',
                      'Aggiungere il brodo un mestolo alla volta, mescolando continuamente',
                      'A metà cottura, aggiungere metà del parmigiano grattugiato',
                      'Continuare la cottura per circa 18 minuti totali',
                      'Spegnere il fuoco e mantecare con il resto del parmigiano e una noce di burro'
                    ]
                  },
                  {
                    titolo: 'Parmigiana di Melanzane',
                    tempo: 40,
                    difficolta: 'Media',
                    match: 95,
                    descrizione: 'Classico piatto gratinato della cucina del sud Italia, perfetto per utilizzare il parmigiano.',
                    ingredienti: ['Melanzane 800g', 'Parmigiano Reggiano 100g', 'Mozzarella 300g', 'Passata di pomodoro 500g', 'Basilico fresco', 'Olio extravergine', 'Sale q.b.'],
                    procedimento: [
                      'Tagliare le melanzane a fette di 5mm e cospargerle di sale, lasciare riposare 30 minuti',
                      'Sciacquare e asciugare le melanzane, quindi friggerle in abbondante olio',
                      'Preparare la salsa di pomodoro con basilico',
                      'In una pirofila, alternare strati di melanzane, salsa, mozzarella e parmigiano',
                      'Terminare con abbondante parmigiano grattugiato',
                      'Infornare a 180°C per 30 minuti fino a doratura'
                    ]
                  },
                  {
                    titolo: 'Pasta Cacio e Pepe',
                    tempo: 15,
                    difficolta: 'Facile',
                    match: 92,
                    descrizione: 'Ricetta romana semplicissima ma dal risultato strepitoso. Usa il parmigiano in eccesso.',
                    ingredienti: ['Pasta 320g', 'Parmigiano Reggiano 100g', 'Pecorino Romano 50g', 'Pepe nero in grani', 'Sale q.b.'],
                    procedimento: [
                      'Cuocere la pasta in abbondante acqua salata',
                      'Tostare il pepe in una padella fino a renderlo profumato',
                      'Grattugiare parmigiano e pecorino',
                      'In una ciotola mescolare i formaggi con un po\' di acqua di cottura fino a ottenere una crema',
                      'Scolare la pasta al dente conservando l\'acqua',
                      'Versare la pasta nella padella con il pepe, aggiungere la crema di formaggi',
                      'Mantecare velocemente aggiungendo acqua di cottura se necessario'
                    ]
                  },
                  {
                    titolo: 'Gnocchi Burro e Parmigiano',
                    tempo: 20,
                    difficolta: 'Facile',
                    match: 90,
                    descrizione: 'Piatto comfort perfetto per utilizzare il formaggio in eccesso. Semplice ma delizioso.',
                    ingredienti: ['Gnocchi di patate 500g', 'Parmigiano Reggiano 120g', 'Burro 80g', 'Salvia 5-6 foglie', 'Sale q.b.'],
                    procedimento: [
                      'Portare a ebollizione abbondante acqua salata',
                      'Cuocere gli gnocchi e scolarli appena vengono a galla',
                      'In una padella larga sciogliere il burro con la salvia',
                      'Aggiungere gli gnocchi scolati al burro fuso',
                      'Spolverare con abbondante parmigiano grattugiato',
                      'Far saltare per 1 minuto mescolando delicatamente',
                      'Servire subito con altra grattugiata di parmigiano'
                    ]
                  }
                ].map((ricetta, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedRecipe(ricetta)}
                    style={{
                      padding: '20px',
                      background: '#FFF5F5',
                      borderRadius: '12px',
                      borderLeft: '4px solid #CD212A',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(5px)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(205, 33, 42, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: '1.1rem', marginBottom: '8px', color: '#212529' }}>
                        {ricetta.titolo}
                      </h4>
                      <div style={{ display: 'flex', gap: '15px', fontSize: '0.85rem', color: '#666' }}>
                        <span>⏱️ {ricetta.tempo} min</span>
                        <span>📊 {ricetta.difficolta}</span>
                      </div>
                    </div>
                    <div style={{
                      background: '#CD212A',
                      color: 'white',
                      padding: '8px 15px',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: 600
                    }}>
                      {ricetta.match}% Match
                    </div>
                  </div>
                ))}
              </div>
              <p style={{
                marginTop: '20px',
                fontSize: '0.9rem',
                color: '#666',
                textAlign: 'center',
                fontStyle: 'italic'
              }}>
                💡 Trovate 23 ricette totali con Parmigiano Reggiano
              </p>
            </div>
          )}

          {/* Tips AI */}
          <div style={{ background: 'white', padding: '25px', borderRadius: '15px', boxShadow: '0 3px 12px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>💡 Consigli AI</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {[
                { emoji: '🧊', testo: 'Il basilico può essere congelato in olio d\'oliva per conservarlo più a lungo' },
                { emoji: '🧀', testo: 'Il parmigiano si conserva meglio avvolto in carta forno' },
                { emoji: '🥫', testo: 'I pomodori maturi possono essere trasformati in salsa e conservati' }
              ].map((tip, idx) => (
                <div key={idx} style={{
                  padding: '15px',
                  background: '#F8F9FA',
                  borderRadius: '10px',
                  fontSize: '0.9rem'
                }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{tip.emoji}</div>
                  {tip.testo}
                </div>
              ))}
            </div>
          </div>

          {/* Obiettivi Mensili */}
          <div style={{ background: 'white', padding: '25px', borderRadius: '15px', boxShadow: '0 3px 12px rgba(0,0,0,0.1)', marginTop: '20px' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>🎯 Obiettivo Mensile</h3>
            <div style={{ marginBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem' }}>
                <span>Riduzione Sprechi</span>
                <span>18/25 kg</span>
              </div>
              <div style={{ width: '100%', height: '12px', background: '#E9ECEF', borderRadius: '6px', overflow: 'hidden' }}>
                <div style={{ width: '72%', height: '100%', background: 'linear-gradient(90deg, #27ae60, #229954)' }} />
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#666' }}>
              Solo 7 kg per sbloccare il badge "Eco Warrior"! 🌱
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZeroSprechi;
