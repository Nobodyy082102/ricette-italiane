import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Colors, getRecipeOfTheDay, getPopularRecipes, formattaTempo, getDifficoltaBadge } from '@ricette-italiane/shared';
import { FaStar, FaClock, FaFire, FaHeart } from 'react-icons/fa';

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
  position: relative;
`;

const FavoritesBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.9);
  padding: 6px 12px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 600;
  color: ${Colors.rossoPrimario};
`;

const RecipeInfo = styled.div`
  padding: 15px;
`;

const RecipeTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 10px 0;
  color: ${Colors.testoChiaro};
`;

const RecipeDescription = styled.p`
  font-size: 0.9rem;
  color: ${Colors.testoSecondario};
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: ${Colors.warning};
`;

export default function Home() {
  const navigate = useNavigate();
  const ricettaDelGiorno = getRecipeOfTheDay();
  const ricettePopolari = getPopularRecipes(6);

  const handleRecipeClick = (id: string) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <Container>
      <Header>
        <Title>🇮🇹 Ricette Italiane</Title>
        <Subtitle>Scopri i sapori autentici della cucina italiana</Subtitle>
      </Header>

      <SearchBar placeholder="Cerca ricette, ingredienti..." />

      {ricettaDelGiorno && (
        <Section>
          <SectionTitle>
            <FaFire />
            Ricetta del Giorno
          </SectionTitle>
          <RecipeGrid>
            <RecipeCard onClick={() => handleRecipeClick(ricettaDelGiorno.id)}>
              <RecipeImage>
                {ricettaDelGiorno.fotoUrl}
                <FavoritesBadge>
                  <FaHeart /> {ricettaDelGiorno.numeroPreferiti}
                </FavoritesBadge>
              </RecipeImage>
              <RecipeInfo>
                <RecipeTitle>{ricettaDelGiorno.titolo}</RecipeTitle>
                <RecipeDescription>{ricettaDelGiorno.descrizione}</RecipeDescription>
                <RecipeMeta>
                  <MetaItem>
                    <FaClock />
                    {formattaTempo(ricettaDelGiorno.tempoTotale)}
                  </MetaItem>
                  <Rating>
                    <FaStar /> {ricettaDelGiorno.valutazioneMedia.toFixed(1)}
                  </Rating>
                </RecipeMeta>
                <div style={{ marginTop: '10px' }}>
                  <DifficultyBadge $level={ricettaDelGiorno.difficolta}>
                    {getDifficoltaBadge(ricettaDelGiorno.difficolta)}
                  </DifficultyBadge>
                </div>
              </RecipeInfo>
            </RecipeCard>
          </RecipeGrid>
        </Section>
      )}

      <Section>
        <SectionTitle>
          <FaStar />
          Ricette Popolari
        </SectionTitle>
        <RecipeGrid>
          {ricettePopolari.map(recipe => (
            <RecipeCard key={recipe.id} onClick={() => handleRecipeClick(recipe.id)}>
              <RecipeImage>
                {recipe.fotoUrl}
                <FavoritesBadge>
                  <FaHeart /> {recipe.numeroPreferiti}
                </FavoritesBadge>
              </RecipeImage>
              <RecipeInfo>
                <RecipeTitle>{recipe.titolo}</RecipeTitle>
                <RecipeDescription>{recipe.descrizione}</RecipeDescription>
                <RecipeMeta>
                  <MetaItem>
                    <FaClock />
                    {formattaTempo(recipe.tempoTotale)}
                  </MetaItem>
                  <Rating>
                    <FaStar /> {recipe.valutazioneMedia.toFixed(1)}
                  </Rating>
                </RecipeMeta>
                <div style={{ marginTop: '10px' }}>
                  <DifficultyBadge $level={recipe.difficolta}>
                    {getDifficoltaBadge(recipe.difficolta)}
                  </DifficultyBadge>
                </div>
              </RecipeInfo>
            </RecipeCard>
          ))}
        </RecipeGrid>
      </Section>
    </Container>
  );
}
