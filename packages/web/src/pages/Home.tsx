import styled from 'styled-components';
import { Colors } from '@ricette-italiane/shared';
import { FaStar, FaClock, FaFire } from 'react-icons/fa';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  text-align: center;
  padding: 30px 0;
  background: linear-gradient(135deg, ${Colors.verdePrimario} 0%, ${Colors.rossoPrimario} 100%);
  color: white;
  border-radius: 15px;
  margin-bottom: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  margin: 10px 0 0 0;
  opacity: 0.9;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: ${Colors.verdePrimario};
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    color: ${Colors.rossoPrimario};
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const RecipeImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, ${Colors.verdePastello} 0%, ${Colors.rossoPastello} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
`;

const RecipeInfo = styled.div`
  padding: 15px;
`;

const RecipeTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 10px 0;
  color: ${Colors.testoChiaro};
`;

const RecipeMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: ${Colors.testoSecondario};
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const DifficultyBadge = styled.span<{ $level: string }>`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  background-color: ${props => {
    switch (props.$level) {
      case 'facile': return Colors.difficoltaFacile;
      case 'media': return Colors.difficoltaMedia;
      case 'difficile': return Colors.difficoltaDifficile;
      default: return Colors.grigio500;
    }
  }};
  color: white;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 15px 20px;
  font-size: 1rem;
  border: 2px solid ${Colors.grigio300};
  border-radius: 25px;
  margin-bottom: 30px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${Colors.verdePrimario};
  }
`;

// Dati mock per il prototipo
const mockRecipes = [
  { id: '1', title: 'Pasta alla Carbonara', difficulty: 'media', time: 30, emoji: '🍝' },
  { id: '2', title: 'Pizza Margherita', difficulty: 'media', time: 90, emoji: '🍕' },
  { id: '3', title: 'Tiramisù', difficulty: 'facile', time: 40, emoji: '🍰' },
  { id: '4', title: 'Risotto alla Milanese', difficulty: 'media', time: 45, emoji: '🍚' },
  { id: '5', title: 'Lasagne alla Bolognese', difficulty: 'difficile', time: 120, emoji: '🥘' },
  { id: '6', title: 'Panna Cotta', difficulty: 'facile', time: 20, emoji: '🍮' },
];

export default function Home() {
  return (
    <Container>
      <Header>
        <Title>🇮🇹 Ricette Italiane</Title>
        <Subtitle>Scopri i sapori autentici della cucina italiana</Subtitle>
      </Header>

      <SearchBar placeholder="Cerca ricette, ingredienti..." />

      <Section>
        <SectionTitle>
          <FaFire />
          Ricetta del Giorno
        </SectionTitle>
        <RecipeGrid>
          <RecipeCard>
            <RecipeImage>🍝</RecipeImage>
            <RecipeInfo>
              <RecipeTitle>Pasta alla Carbonara</RecipeTitle>
              <RecipeMeta>
                <MetaItem>
                  <FaClock />
                  30 min
                </MetaItem>
                <DifficultyBadge $level="media">⭐⭐ Media</DifficultyBadge>
              </RecipeMeta>
            </RecipeInfo>
          </RecipeCard>
        </RecipeGrid>
      </Section>

      <Section>
        <SectionTitle>
          <FaStar />
          Ricette Popolari
        </SectionTitle>
        <RecipeGrid>
          {mockRecipes.map(recipe => (
            <RecipeCard key={recipe.id}>
              <RecipeImage>{recipe.emoji}</RecipeImage>
              <RecipeInfo>
                <RecipeTitle>{recipe.title}</RecipeTitle>
                <RecipeMeta>
                  <MetaItem>
                    <FaClock />
                    {recipe.time} min
                  </MetaItem>
                  <DifficultyBadge $level={recipe.difficulty}>
                    {recipe.difficulty === 'facile' ? '⭐ Facile' :
                     recipe.difficulty === 'media' ? '⭐⭐ Media' :
                     '⭐⭐⭐ Difficile'}
                  </DifficultyBadge>
                </RecipeMeta>
              </RecipeInfo>
            </RecipeCard>
          ))}
        </RecipeGrid>
      </Section>
    </Container>
  );
}
