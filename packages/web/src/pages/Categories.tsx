import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Colors, mockRecipes, TipoRicetta, DifficoltaRicetta, RegioneItaliana } from '@ricette-italiane/shared';
import { FaUtensils, FaClock, FaStar } from 'react-icons/fa';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: ${Colors.verdePrimario};
  margin-bottom: 30px;
  text-align: center;
`;

const FilterSection = styled.div`
  background: white;
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const FilterTitle = styled.h3`
  color: ${Colors.verdePrimario};
  margin-bottom: 15px;
  font-size: 1.2rem;
`;

const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: 12px 20px;
  border: 2px solid ${props => props.$active ? Colors.verdePrimario : Colors.grigio300};
  background: ${props => props.$active ? Colors.verdePrimario : 'white'};
  color: ${props => props.$active ? 'white' : Colors.testoChiaro};
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    border-color: ${Colors.verdePrimario};
    ${props => !props.$active && `background: ${Colors.verdePastello};`}
  }
`;

const RecipeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

const RecipeCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const RecipeImage = styled.div`
  width: 100%;
  height: 180px;
  background: linear-gradient(135deg, ${Colors.verdePastello} 0%, ${Colors.rossoPastello} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
`;

const RecipeInfo = styled.div`
  padding: 15px;
`;

const RecipeTitle = styled.h3`
  font-size: 1.1rem;
  margin: 0 0 10px 0;
  color: ${Colors.testoChiaro};
`;

const RecipeMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: ${Colors.testoSecondario};
`;

const NoResults = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: ${Colors.testoSecondario};
  font-size: 1.2rem;
`;

export default function Categories() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const filteredRecipes = mockRecipes.filter(recipe => {
    if (selectedType && recipe.tipo !== selectedType) return false;
    if (selectedDifficulty && recipe.difficolta !== selectedDifficulty) return false;
    if (selectedRegion && recipe.regione !== selectedRegion) return false;
    return true;
  });

  const tipiRicetta = [
    { value: TipoRicetta.PRIMI, label: '🍝 Primi' },
    { value: TipoRicetta.SECONDI, label: '🥩 Secondi' },
    { value: TipoRicetta.CONTORNI, label: '🥗 Contorni' },
    { value: TipoRicetta.DOLCI, label: '🍰 Dolci' },
    { value: TipoRicetta.ANTIPASTI, label: '🍤 Antipasti' },
    { value: TipoRicetta.PIZZE_FOCACCE, label: '🍕 Pizze & Focacce' },
  ];

  const difficolta = [
    { value: DifficoltaRicetta.FACILE, label: '⭐ Facile' },
    { value: DifficoltaRicetta.MEDIA, label: '⭐⭐ Media' },
    { value: DifficoltaRicetta.DIFFICILE, label: '⭐⭐⭐ Difficile' },
  ];

  const regioni = [
    { value: RegioneItaliana.LAZIO, label: 'Lazio' },
    { value: RegioneItaliana.CAMPANIA, label: 'Campania' },
    { value: RegioneItaliana.SICILIA, label: 'Sicilia' },
    { value: RegioneItaliana.LOMBARDIA, label: 'Lombardia' },
    { value: RegioneItaliana.EMILIA_ROMAGNA, label: 'Emilia-Romagna' },
    { value: RegioneItaliana.VENETO, label: 'Veneto' },
    { value: RegioneItaliana.PIEMONTE, label: 'Piemonte' },
    { value: RegioneItaliana.LIGURIA, label: 'Liguria' },
  ];

  const clearFilters = () => {
    setSelectedType(null);
    setSelectedDifficulty(null);
    setSelectedRegion(null);
  };

  return (
    <Container>
      <Title>🗂️ Categorie Ricette</Title>

      <FilterSection>
        <FilterTitle>Tipo di Piatto</FilterTitle>
        <FilterGrid>
          {tipiRicetta.map(tipo => (
            <FilterButton
              key={tipo.value}
              $active={selectedType === tipo.value}
              onClick={() => setSelectedType(selectedType === tipo.value ? null : tipo.value)}
            >
              {tipo.label}
            </FilterButton>
          ))}
        </FilterGrid>
      </FilterSection>

      <FilterSection>
        <FilterTitle>Difficoltà</FilterTitle>
        <FilterGrid>
          {difficolta.map(diff => (
            <FilterButton
              key={diff.value}
              $active={selectedDifficulty === diff.value}
              onClick={() => setSelectedDifficulty(selectedDifficulty === diff.value ? null : diff.value)}
            >
              {diff.label}
            </FilterButton>
          ))}
        </FilterGrid>
      </FilterSection>

      <FilterSection>
        <FilterTitle>Regione</FilterTitle>
        <FilterGrid>
          {regioni.map(reg => (
            <FilterButton
              key={reg.value}
              $active={selectedRegion === reg.value}
              onClick={() => setSelectedRegion(selectedRegion === reg.value ? null : reg.value)}
            >
              {reg.label}
            </FilterButton>
          ))}
        </FilterGrid>
        {(selectedType || selectedDifficulty || selectedRegion) && (
          <div style={{ marginTop: '15px' }}>
            <FilterButton $active={false} onClick={clearFilters}>
              🔄 Rimuovi tutti i filtri
            </FilterButton>
          </div>
        )}
      </FilterSection>

      <div style={{ marginBottom: '20px', color: Colors.testoSecondario }}>
        Trovate <strong>{filteredRecipes.length}</strong> ricette
      </div>

      {filteredRecipes.length > 0 ? (
        <RecipeGrid>
          {filteredRecipes.map(recipe => (
            <RecipeCard key={recipe.id} onClick={() => navigate(`/recipe/${recipe.id}`)}>
              <RecipeImage>{recipe.fotoUrl}</RecipeImage>
              <RecipeInfo>
                <RecipeTitle>{recipe.titolo}</RecipeTitle>
                <RecipeMeta>
                  <span>
                    <FaClock /> {recipe.tempoTotale} min
                  </span>
                  <span>
                    <FaStar style={{ color: Colors.warning }} /> {recipe.valutazioneMedia.toFixed(1)}
                  </span>
                </RecipeMeta>
              </RecipeInfo>
            </RecipeCard>
          ))}
        </RecipeGrid>
      ) : (
        <NoResults>
          Nessuna ricetta trovata con questi filtri.
          <br />
          <button
            onClick={clearFilters}
            style={{
              marginTop: '20px',
              padding: '12px 24px',
              background: Colors.verdePrimario,
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Rimuovi filtri
          </button>
        </NoResults>
      )}
    </Container>
  );
}
