import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaSearch, FaClock, FaStar } from 'react-icons/fa';
import { Colors } from '../../../shared/src/constants/colors';
import { mockRecipes } from '../../../shared/src/data/mockRecipes';
import { filtraRicette, formattaTempo } from '../../../shared/src/utils/recipeHelpers';

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

const SearchBox = styled.div`
  background: white;
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 15px 20px 15px 50px;
  font-size: 1.1rem;
  border: 2px solid ${Colors.grigio300};
  border-radius: 12px;
  margin-bottom: 20px;

  &:focus {
    outline: none;
    border-color: ${Colors.verdePrimario};
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 50px;
  top: 47px;
  color: ${Colors.testoSecondario};
  font-size: 1.2rem;
`;

const FilterRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 20px;
`;

const Select = styled.select`
  padding: 12px;
  border: 2px solid ${Colors.grigio300};
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${Colors.verdePrimario};
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

export default function Search() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [type, setType] = useState('');
  const [maxTime, setMaxTime] = useState('');

  const filteredRecipes = filtraRicette(mockRecipes, {
    ricerca: searchText,
    difficolta: difficulty || undefined,
    tipo: type || undefined,
    tempoMassimo: maxTime ? parseInt(maxTime) : undefined,
  });

  return (
    <Container>
      <Title>🔍 Cerca Ricette</Title>

      <SearchBox style={{ position: 'relative' }}>
        <SearchIcon />
        <SearchInput
          type="text"
          placeholder="Cerca per nome, ingrediente, tag..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <FilterRow>
          <Select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            <option value="">Tutte le difficoltà</option>
            <option value="facile">⭐ Facile</option>
            <option value="media">⭐⭐ Media</option>
            <option value="difficile">⭐⭐⭐ Difficile</option>
          </Select>

          <Select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Tutti i tipi</option>
            <option value="primi">🍝 Primi</option>
            <option value="secondi">🥩 Secondi</option>
            <option value="contorni">🥗 Contorni</option>
            <option value="dolci">🍰 Dolci</option>
            <option value="antipasti">🍤 Antipasti</option>
            <option value="pizze_focacce">🍕 Pizze & Focacce</option>
          </Select>

          <Select value={maxTime} onChange={(e) => setMaxTime(e.target.value)}>
            <option value="">Qualsiasi tempo</option>
            <option value="30">Fino a 30 min</option>
            <option value="60">Fino a 1 ora</option>
            <option value="120">Fino a 2 ore</option>
          </Select>
        </FilterRow>
      </SearchBox>

      <div style={{ marginBottom: '20px', color: Colors.testoSecondario }}>
        Trovate <strong>{filteredRecipes.length}</strong> ricette
      </div>

      <RecipeGrid>
        {filteredRecipes.map(recipe => (
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
