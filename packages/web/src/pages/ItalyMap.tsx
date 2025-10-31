import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaMapMarkedAlt, FaUtensils } from 'react-icons/fa';
import { Colors } from '../../../shared/src/constants/colors';
import { mockRecipes } from '../../../shared/src/data/mockRecipes';
import { RegioneItaliana } from '../../../shared/src/types/recipe';

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: ${Colors.verdePrimario};
  margin-bottom: 15px;
  text-align: center;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const Subtitle = styled.p`
  text-align: center;
  color: ${Colors.testoSecondario};
  font-size: 1.1rem;
  margin-bottom: 40px;
`;

const RegionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 40px;
`;

const RegionCard = styled.div<{ $selected: boolean }>`
  background: ${props => props.$selected
    ? `linear-gradient(135deg, ${Colors.verdePrimario} 0%, ${Colors.verdeScuro} 100%)`
    : 'white'
  };
  color: ${props => props.$selected ? 'white' : Colors.testoChiaro};
  padding: 20px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 3px solid ${props => props.$selected ? Colors.verdePrimario : 'transparent'};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    border-color: ${Colors.verdePrimario};
  }
`;

const RegionEmoji = styled.div`
  font-size: 2.5rem;
`;

const RegionName = styled.div`
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
`;

const RecipeCount = styled.div`
  font-size: 0.85rem;
  opacity: 0.9;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const RecipesSection = styled.div`
  margin-top: 30px;
`;

const SectionTitle = styled.h2`
  color: ${Colors.verdePrimario};
  font-size: 1.8rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
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
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
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

const RecipeDescription = styled.p`
  font-size: 0.9rem;
  color: ${Colors.testoSecondario};
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: ${Colors.testoSecondario};
  font-size: 1.1rem;
`;

// Emoji per regione
const regionEmojis: Record<RegioneItaliana, string> = {
  [RegioneItaliana.ABRUZZO]: '🏔️',
  [RegioneItaliana.BASILICATA]: '🌄',
  [RegioneItaliana.CALABRIA]: '🌶️',
  [RegioneItaliana.CAMPANIA]: '🍕',
  [RegioneItaliana.EMILIA_ROMAGNA]: '🥓',
  [RegioneItaliana.FRIULI_VENEZIA_GIULIA]: '🍷',
  [RegioneItaliana.LAZIO]: '🏛️',
  [RegioneItaliana.LIGURIA]: '🌊',
  [RegioneItaliana.LOMBARDIA]: '🧈',
  [RegioneItaliana.MARCHE]: '🐟',
  [RegioneItaliana.MOLISE]: '🌾',
  [RegioneItaliana.PIEMONTE]: '🍫',
  [RegioneItaliana.PUGLIA]: '🫒',
  [RegioneItaliana.SARDEGNA]: '🐑',
  [RegioneItaliana.SICILIA]: '🍊',
  [RegioneItaliana.TOSCANA]: '🍷',
  [RegioneItaliana.TRENTINO_ALTO_ADIGE]: '⛰️',
  [RegioneItaliana.UMBRIA]: '🌿',
  [RegioneItaliana.VALLE_DAOSTA]: '🏔️',
  [RegioneItaliana.VENETO]: '🎭'
};

// Nomi user-friendly delle regioni
const regionNames: Record<RegioneItaliana, string> = {
  [RegioneItaliana.ABRUZZO]: 'Abruzzo',
  [RegioneItaliana.BASILICATA]: 'Basilicata',
  [RegioneItaliana.CALABRIA]: 'Calabria',
  [RegioneItaliana.CAMPANIA]: 'Campania',
  [RegioneItaliana.EMILIA_ROMAGNA]: 'Emilia-Romagna',
  [RegioneItaliana.FRIULI_VENEZIA_GIULIA]: 'Friuli-Venezia Giulia',
  [RegioneItaliana.LAZIO]: 'Lazio',
  [RegioneItaliana.LIGURIA]: 'Liguria',
  [RegioneItaliana.LOMBARDIA]: 'Lombardia',
  [RegioneItaliana.MARCHE]: 'Marche',
  [RegioneItaliana.MOLISE]: 'Molise',
  [RegioneItaliana.PIEMONTE]: 'Piemonte',
  [RegioneItaliana.PUGLIA]: 'Puglia',
  [RegioneItaliana.SARDEGNA]: 'Sardegna',
  [RegioneItaliana.SICILIA]: 'Sicilia',
  [RegioneItaliana.TOSCANA]: 'Toscana',
  [RegioneItaliana.TRENTINO_ALTO_ADIGE]: 'Trentino-Alto Adige',
  [RegioneItaliana.UMBRIA]: 'Umbria',
  [RegioneItaliana.VALLE_DAOSTA]: "Valle d'Aosta",
  [RegioneItaliana.VENETO]: 'Veneto'
};

export default function ItalyMap() {
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState<RegioneItaliana | null>(null);

  // Conta ricette per regione
  const getRecipeCountByRegion = (regione: RegioneItaliana): number => {
    return mockRecipes.filter(r => r.regione === regione).length;
  };

  // Ottieni ricette per regione selezionata
  const getRecipesByRegion = (regione: RegioneItaliana) => {
    return mockRecipes.filter(r => r.regione === regione);
  };

  const handleRegionClick = (regione: RegioneItaliana) => {
    setSelectedRegion(regione === selectedRegion ? null : regione);
  };

  const handleRecipeClick = (id: string) => {
    navigate(`/recipe/${id}`);
  };

  // Ordina regioni per nome
  const sortedRegions = Object.values(RegioneItaliana).sort((a, b) =>
    regionNames[a].localeCompare(regionNames[b])
  );

  const selectedRegionRecipes = selectedRegion ? getRecipesByRegion(selectedRegion) : [];

  return (
    <Container>
      <Title>
        <FaMapMarkedAlt /> Mappa Italia
      </Title>
      <Subtitle>
        Esplora le ricette tradizionali regione per regione
      </Subtitle>

      <RegionsGrid>
        {sortedRegions.map(regione => {
          const count = getRecipeCountByRegion(regione);
          return (
            <RegionCard
              key={regione}
              $selected={selectedRegion === regione}
              onClick={() => handleRegionClick(regione)}
            >
              <RegionEmoji>{regionEmojis[regione]}</RegionEmoji>
              <RegionName>{regionNames[regione]}</RegionName>
              <RecipeCount>
                <FaUtensils />
                {count} {count === 1 ? 'ricetta' : 'ricette'}
              </RecipeCount>
            </RegionCard>
          );
        })}
      </RegionsGrid>

      {selectedRegion && (
        <RecipesSection>
          <SectionTitle>
            <FaUtensils />
            Ricette del {regionNames[selectedRegion]}
          </SectionTitle>

          {selectedRegionRecipes.length > 0 ? (
            <RecipeGrid>
              {selectedRegionRecipes.map(recipe => (
                <RecipeCard key={recipe.id} onClick={() => handleRecipeClick(recipe.id)}>
                  <RecipeImage>{recipe.fotoUrl}</RecipeImage>
                  <RecipeInfo>
                    <RecipeTitle>{recipe.titolo}</RecipeTitle>
                    <RecipeDescription>{recipe.descrizione}</RecipeDescription>
                  </RecipeInfo>
                </RecipeCard>
              ))}
            </RecipeGrid>
          ) : (
            <EmptyState>
              Nessuna ricetta disponibile per questa regione al momento.
              <br />
              Stiamo lavorando per aggiungerne di nuove! 🍝
            </EmptyState>
          )}
        </RecipesSection>
      )}

      {!selectedRegion && (
        <EmptyState>
          👆 Seleziona una regione per esplorare le sue ricette tipiche
        </EmptyState>
      )}
    </Container>
  );
}
