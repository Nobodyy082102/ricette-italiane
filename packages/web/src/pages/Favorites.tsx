import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Colors, getRecipeById, formattaTempo } from '@ricette-italiane/shared';
import { FaClock, FaStar, FaHeart } from 'react-icons/fa';

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

const EmptyState = styled.div`
  text-align: center;
  padding: 80px 20px;
  color: ${Colors.testoSecondario};
`;

const EmptyIcon = styled.div`
  font-size: 5rem;
  margin-bottom: 20px;
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

const RecipeMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: ${Colors.testoSecondario};
`;

export default function Favorites() {
  const navigate = useNavigate();
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  useEffect(() => {
    // Carica preferiti da localStorage
    const saved = localStorage.getItem('favorites');
    if (saved) {
      setFavoriteIds(JSON.parse(saved));
    }
  }, []);

  const favoriteRecipes = favoriteIds
    .map(id => getRecipeById(id))
    .filter(recipe => recipe !== undefined);

  if (favoriteRecipes.length === 0) {
    return (
      <Container>
        <Title>❤️ I Miei Preferiti</Title>
        <EmptyState>
          <EmptyIcon>💔</EmptyIcon>
          <h2>Nessuna ricetta nei preferiti</h2>
          <p>Esplora le ricette e aggiungi le tue preferite!</p>
        </EmptyState>
      </Container>
    );
  }

  return (
    <Container>
      <Title>❤️ I Miei Preferiti</Title>
      <div style={{ marginBottom: '20px', color: Colors.testoSecondario }}>
        Hai <strong>{favoriteRecipes.length}</strong> ricette preferite
      </div>

      <RecipeGrid>
        {favoriteRecipes.map(recipe => recipe && (
          <RecipeCard key={recipe.id} onClick={() => navigate(`/recipe/${recipe.id}`)}>
            <RecipeImage>{recipe.fotoUrl}</RecipeImage>
            <RecipeInfo>
              <RecipeTitle>{recipe.titolo}</RecipeTitle>
              <RecipeMeta>
                <span>
                  <FaClock /> {formattaTempo(recipe.tempoTotale)}
                </span>
                <span>
                  <FaStar style={{ color: Colors.warning }} /> {recipe.valutazioneMedia.toFixed(1)}
                </span>
              </RecipeMeta>
            </RecipeInfo>
          </RecipeCard>
        ))}
      </RecipeGrid>
    </Container>
  );
}
