import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaLightbulb, FaCloudRain, FaSun, FaSnowflake, FaCalendarDay, FaClock, FaStar, FaLeaf } from 'react-icons/fa';
import { Colors } from '../../../shared/src/constants/colors';
import { mockRecipes } from '../../../shared/src/data/mockRecipes';
import { formattaTempo } from '../../../shared/src/utils/recipeHelpers';

const Container = styled.div`
  max-width: 1200px;
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

const SuggestionCard = styled.div`
  background: linear-gradient(135deg, ${Colors.verdePrimario} 0%, ${Colors.verdeScuro} 100%);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 30px;
  color: white;
  box-shadow: 0 10px 30px rgba(0, 140, 69, 0.3);
`;

const SuggestionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const SuggestionReason = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.95;
  margin-bottom: 25px;
`;

const ContextInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 25px;
`;

const ContextBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;

  svg {
    font-size: 16px;
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

const SectionTitle = styled.h2`
  color: ${Colors.verdePrimario};
  font-size: 1.5rem;
  margin: 40px 0 20px 0;
`;

export default function Suggestions() {
  const navigate = useNavigate();
  const [currentContext, setCurrentContext] = useState({
    giorno: '',
    ora: 0,
    stagione: '',
    meteo: ''
  });

  useEffect(() => {
    const now = new Date();
    const giorni = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
    const mese = now.getMonth() + 1;

    let stagione = '';
    if (mese >= 3 && mese <= 5) stagione = 'primavera';
    else if (mese >= 6 && mese <= 8) stagione = 'estate';
    else if (mese >= 9 && mese <= 11) stagione = 'autunno';
    else stagione = 'inverno';

    // Simula meteo (in produzione useresti API meteo)
    const meteoRandom = Math.random();
    let meteo = '';
    if (meteoRandom < 0.3) meteo = 'pioggia';
    else if (meteoRandom < 0.6) meteo = 'nuvoloso';
    else meteo = 'sole';

    setCurrentContext({
      giorno: giorni[now.getDay()],
      ora: now.getHours(),
      stagione,
      meteo
    });
  }, []);

  // Algoritmo suggerimenti intelligenti
  const getSuggestions = () => {
    const { giorno, ora, stagione, meteo } = currentContext;

    // Domenica = pranzo lungo
    if (giorno === 'Domenica' && ora >= 11 && ora <= 14) {
      return {
        motivo: `È ${giorno} ed è l'ora perfetta per un pranzo tradizionale in famiglia! 🍝`,
        ricette: mockRecipes.filter(r =>
          r.occasioniSpeciali?.includes('domenica' as any) || r.tempoTotale > 60
        ).slice(0, 3),
        contesto: [
          { icon: <FaCalendarDay />, text: giorno },
          { icon: <FaClock />, text: `${ora}:00 - Ora di pranzo` }
        ]
      };
    }

    // Pioggia = comfort food
    if (meteo === 'pioggia') {
      return {
        motivo: 'Fuori piove... è il momento perfetto per un piatto caldo e confortante! ☔',
        ricette: mockRecipes.filter(r =>
          r.tipo === 'primi' || r.tags.includes('comfort')
        ).slice(0, 3),
        contesto: [
          { icon: <FaCloudRain />, text: 'Pioggia' },
          { icon: <FaSnowflake />, text: 'Piatto caldo consigliato' }
        ]
      };
    }

    // Sera tardi = veloce
    if (ora >= 19 && ora <= 21) {
      return {
        motivo: 'È sera e hai poco tempo? Ecco ricette veloci ma deliziose! ⚡',
        ricette: mockRecipes.filter(r => r.tempoTotale <= 30).slice(0, 3),
        contesto: [
          { icon: <FaClock />, text: `${ora}:00 - Cena` },
          { icon: <FaLightbulb />, text: 'Ricette veloci' }
        ]
      };
    }

    // Estate = leggero
    if (stagione === 'estate') {
      return {
        motivo: 'È estate! Ti consiglio piatti freschi e leggeri perfetti per la stagione ☀️',
        ricette: mockRecipes.filter(r =>
          r.stagioneMigliore?.includes('estate' as any) ||
          r.filtriAlimentari?.includes('vegetariano' as any)
        ).slice(0, 3),
        contesto: [
          { icon: <FaSun />, text: 'Estate' },
          { icon: <FaLeaf />, text: 'Piatti leggeri' }
        ]
      };
    }

    // Default: ricette popolari
    return {
      motivo: 'Ecco le ricette più amate della community! 🌟',
      ricette: mockRecipes.filter(r => r.isPopolari).slice(0, 3),
      contesto: [
        { icon: <FaStar />, text: 'Popolari' }
      ]
    };
  };

  const suggestion = getSuggestions();

  return (
    <Container>
      <Title>
        <FaLightbulb /> Cosa Cucino Oggi?
      </Title>
      <Subtitle>
        Suggerimenti intelligenti basati su giorno, ora, stagione e meteo
      </Subtitle>

      <SuggestionCard>
        <SuggestionTitle>
          💡 Perfetto per te oggi
        </SuggestionTitle>
        <SuggestionReason>{suggestion.motivo}</SuggestionReason>

        <ContextInfo>
          {suggestion.contesto.map((ctx, idx) => (
            <ContextBadge key={idx}>
              {ctx.icon}
              {ctx.text}
            </ContextBadge>
          ))}
        </ContextInfo>
      </SuggestionCard>

      <RecipeGrid>
        {suggestion.ricette.length > 0 ? (
          suggestion.ricette.map(recipe => (
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
          ))
        ) : (
          <p>Nessun suggerimento disponibile al momento.</p>
        )}
      </RecipeGrid>

      <SectionTitle>📚 Altre Ricette Popolari</SectionTitle>
      <RecipeGrid>
        {mockRecipes.filter(r => r.isPopolari).slice(3, 6).map(recipe => (
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
