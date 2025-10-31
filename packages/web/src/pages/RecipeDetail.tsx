import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaClock, FaUser, FaStar, FaHeart, FaShoppingCart, FaArrowLeft, FaPlay, FaCheck } from 'react-icons/fa';
import { Colors } from '../../../shared/src/constants/colors';
import { getRecipeById } from '../../../shared/src/data/mockRecipes';
import { formattaTempo, getDifficoltaBadge, ricalcolaIngredienti, creaListaSpesa } from '../../../shared/src/utils/recipeHelpers';
import type { Ricetta } from '../../../shared/src/types/recipe';
import WinePairings from '../components/WinePairings';
import GrandmaTips from '../components/GrandmaTips';
import DishHistory from '../components/DishHistory';
import CookingTimer from '../components/CookingTimer';
import CookingMode from '../components/CookingMode';
import RecipeInfoBadges from '../components/RecipeInfoBadges';
import IngredientSubstitutions from '../components/IngredientSubstitutions';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: ${Colors.verdePrimario};
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
  padding: 8px 12px;
  border-radius: 8px;
  transition: background 0.3s;

  &:hover {
    background: ${Colors.verdePastello};
  }
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, ${Colors.verdePastello} 0%, ${Colors.rossoPastello} 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: ${Colors.verdePrimario};
  margin-bottom: 15px;
  font-size: 2.5rem;
`;

const Description = styled.p`
  color: ${Colors.testoSecondario};
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const MetaInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${Colors.testoSecondario};
  font-size: 16px;

  svg {
    color: ${Colors.rossoPrimario};
  }
`;

const DifficultyBadge = styled.span<{ $level: string }>`
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 14px;
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

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  color: ${Colors.warning};
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const ActionButton = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 25px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  ${props => props.$variant === 'primary' ? `
    background: ${Colors.rossoPrimario};
    color: white;

    &:hover {
      background: ${Colors.rossoScuro};
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(205, 33, 42, 0.3);
    }
  ` : `
    background: ${Colors.grigio200};
    color: ${Colors.testoChiaro};

    &:hover {
      background: ${Colors.grigio300};
    }
  `}
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const Section = styled.section`
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const SectionTitle = styled.h2`
  color: ${Colors.verdePrimario};
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.8rem;
`;

const PortionControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
`;

const PortionButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid ${Colors.verdePrimario};
  background: white;
  color: ${Colors.verdePrimario};
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: ${Colors.verdePrimario};
    color: white;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const IngredientsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const IngredientItem = styled.li`
  padding: 12px 0;
  border-bottom: 1px solid ${Colors.grigio200};
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`;

const IngredientName = styled.span`
  color: ${Colors.testoChiaro};
  font-weight: 500;
`;

const IngredientQuantity = styled.span`
  color: ${Colors.testoSecondario};
  font-weight: 600;
`;

const StepsList = styled.ol`
  list-style: none;
  counter-reset: step-counter;
  padding: 0;
`;

const StepItem = styled.li`
  counter-increment: step-counter;
  margin-bottom: 25px;
  padding-left: 60px;
  position: relative;

  &::before {
    content: counter(step-counter);
    position: absolute;
    left: 0;
    top: 0;
    width: 40px;
    height: 40px;
    background: ${Colors.verdePrimario};
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const StepDescription = styled.p`
  color: ${Colors.testoChiaro};
  line-height: 1.6;
  margin-bottom: 8px;
`;

const StepTiming = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${Colors.rossoPrimario};
  font-size: 14px;
  font-weight: 600;
  margin-top: 8px;
`;

const StepSuggestion = styled.div`
  background: ${Colors.verdePastello};
  padding: 10px 15px;
  border-radius: 8px;
  margin-top: 10px;
  color: ${Colors.verdeScuro};
  font-style: italic;
  font-size: 14px;

  &::before {
    content: '💡 ';
  }
`;

const VideoSection = styled.div`
  margin-top: 40px;
  background: ${Colors.grigio100};
  border-radius: 15px;
  padding: 30px;
  text-align: center;
`;

const VideoButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  background: ${Colors.rossoPrimario};
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: ${Colors.rossoScuro};
    transform: translateY(-2px);
  }
`;

const NutritionalInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const NutritionalItem = styled.div`
  text-align: center;
  padding: 15px;
  background: ${Colors.grigio100};
  border-radius: 10px;
`;

const NutritionalValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${Colors.verdePrimario};
`;

const NutritionalLabel = styled.div`
  font-size: 12px;
  color: ${Colors.testoSecondario};
  text-transform: uppercase;
  margin-top: 5px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
`;

const Tag = styled.span`
  padding: 6px 12px;
  background: ${Colors.grigio200};
  border-radius: 20px;
  font-size: 14px;
  color: ${Colors.testoSecondario};
`;

export default function RecipeDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Ricetta | undefined>();
  const [porzioni, setPortions] = useState(4);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showCookingMode, setShowCookingMode] = useState(false);

  useEffect(() => {
    if (id) {
      const foundRecipe = getRecipeById(id);
      setRecipe(foundRecipe);
      if (foundRecipe) {
        setPortions(foundRecipe.porzioni);

        // Controlla se la ricetta è già nei preferiti
        const saved = localStorage.getItem('favorites');
        const favorites: string[] = saved ? JSON.parse(saved) : [];
        setIsFavorite(favorites.includes(foundRecipe.id));
      }
    }
  }, [id]);

  // Ricalcola ingredienti quando cambiano le porzioni
  // IMPORTANTE: useMemo deve essere chiamato prima di qualsiasi return anticipato
  const ingredientiRicalcolati = useMemo(() => {
    if (!recipe) return [];
    console.log('🔄 Ricalcolo ingredienti per', porzioni, 'porzioni');
    return ricalcolaIngredienti(
      recipe.ingredienti,
      recipe.porzioni,
      porzioni
    );
  }, [recipe, porzioni]);

  if (!recipe) {
    return (
      <Container>
        <BackButton onClick={() => navigate(-1)}>
          <FaArrowLeft /> Torna indietro
        </BackButton>
        <Title>Ricetta non trovata</Title>
      </Container>
    );
  }

  const handleAddToFavorites = () => {
    if (!recipe) {
      console.error('❌ Ricetta non trovata');
      return;
    }

    // Carica preferiti esistenti da localStorage
    const saved = localStorage.getItem('favorites');
    const favorites: string[] = saved ? JSON.parse(saved) : [];

    if (isFavorite) {
      // Rimuovi dai preferiti
      const newFavorites = favorites.filter(id => id !== recipe.id);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      setIsFavorite(false);
      console.log('💔 Rimossa dai preferiti:', recipe.titolo);
    } else {
      // Aggiungi ai preferiti
      const newFavorites = [...favorites, recipe.id];
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      setIsFavorite(true);
      console.log('❤️ Aggiunta ai preferiti:', recipe.titolo);
    }
  };

  const handleAddToShoppingList = () => {
    const lista = creaListaSpesa(recipe, porzioni);

    // Carica lista esistente da localStorage
    const saved = localStorage.getItem('shoppingList');
    const existingItems = saved ? JSON.parse(saved) : [];

    // Crea nuovi item con formato completo
    const newItems = lista.map(item => ({
      id: `${recipe.id}-${item.ingrediente}-${Date.now()}-${Math.random()}`,
      ricettaId: recipe.id,
      ricettaTitolo: recipe.titolo,
      ingrediente: item.ingrediente,
      quantita: item.quantita,
      unita: item.unita,
      note: item.note,
      acquistato: false
    }));

    // Aggiungi alla lista esistente
    const updatedList = [...existingItems, ...newItems];
    localStorage.setItem('shoppingList', JSON.stringify(updatedList));

    console.log('✅ Ingredienti aggiunti alla lista della spesa:', newItems);

    // Naviga alla pagina lista spesa
    navigate('/shopping-list');
  };

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>
        <FaArrowLeft /> Torna indietro
      </BackButton>

      <Header>
        <ImageContainer>{recipe.fotoUrl}</ImageContainer>

        <InfoSection>
          <div>
            <Title>{recipe.titolo}</Title>
            <Description>{recipe.descrizione}</Description>

            <RecipeInfoBadges
              costo={recipe.costoTotaleStimato}
              stagioni={recipe.stagioneMigliore}
              occasioni={recipe.occasioniSpeciali}
              tempoTotale={recipe.tempoTotale}
            />

            <MetaInfo>
              <MetaItem>
                <FaClock />
                {formattaTempo(recipe.tempoTotale)}
              </MetaItem>
              <MetaItem>
                <FaUser />
                {porzioni} porzioni
              </MetaItem>
              <DifficultyBadge $level={recipe.difficolta}>
                {getDifficoltaBadge(recipe.difficolta)}
              </DifficultyBadge>
            </MetaInfo>

            <Rating>
              <FaStar /> {recipe.valutazioneMedia.toFixed(1)}
              <span style={{ fontSize: '14px', color: Colors.testoSecondario }}>
                ({recipe.numeroValutazioni} valutazioni)
              </span>
            </Rating>
          </div>

          <ActionButtons>
            <ActionButton
              $variant="primary"
              onClick={handleAddToFavorites}
            >
              <FaHeart /> {isFavorite ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}
            </ActionButton>
            <ActionButton onClick={handleAddToShoppingList}>
              <FaShoppingCart /> Lista spesa
            </ActionButton>
          </ActionButtons>
        </InfoSection>
      </Header>

      <ContentGrid>
        <Section>
          <SectionTitle>
            Ingredienti
            <PortionControl>
              <span>Porzioni:</span>
              <PortionButton
                onClick={() => {
                  const nuove = Math.max(1, porzioni - 1);
                  console.log('📉 Riducendo porzioni da', porzioni, 'a', nuove);
                  setPortions(nuove);
                }}
                disabled={porzioni <= 1}
              >
                −
              </PortionButton>
              <span style={{ fontWeight: 'bold', minWidth: '30px', textAlign: 'center' }}>
                {porzioni}
              </span>
              <PortionButton onClick={() => {
                const nuove = porzioni + 1;
                console.log('📈 Aumentando porzioni da', porzioni, 'a', nuove);
                setPortions(nuove);
              }}>
                +
              </PortionButton>
            </PortionControl>
          </SectionTitle>

          <IngredientsList>
            {ingredientiRicalcolati.map((ing, index) => (
              <IngredientItem key={`${ing.nome}-${index}-${porzioni}`}>
                <IngredientName>
                  {ing.nome}
                  {ing.note && <span style={{ fontSize: '12px', color: Colors.testoSecondario }}> ({ing.note})</span>}
                </IngredientName>
                <IngredientQuantity>
                  {ing.quantita} {ing.unita}
                </IngredientQuantity>
              </IngredientItem>
            ))}
          </IngredientsList>
        </Section>

        <Section>
          <SectionTitle>
            Procedimento
            <ActionButton
              $variant="primary"
              onClick={() => setShowCookingMode(true)}
              style={{ fontSize: '14px', padding: '10px 20px' }}
            >
              👨‍🍳 Modalità Cooking
            </ActionButton>
          </SectionTitle>
          <StepsList>
            {recipe.procedimento.map((step) => (
              <StepItem key={step.numero}>
                <StepDescription>{step.descrizione}</StepDescription>
                {step.tempoCottura && (
                  <StepTiming>
                    <FaClock /> {formattaTempo(step.tempoCottura)}
                  </StepTiming>
                )}
                {step.suggerimenti && (
                  <StepSuggestion>{step.suggerimenti}</StepSuggestion>
                )}
              </StepItem>
            ))}
          </StepsList>
        </Section>
      </ContentGrid>

      {recipe.valoriNutrizionali && (
        <Section>
          <SectionTitle>Valori Nutrizionali (per porzione)</SectionTitle>
          <NutritionalInfo>
            <NutritionalItem>
              <NutritionalValue>{Math.round(recipe.valoriNutrizionali.calorie / recipe.porzioni * porzioni / porzioni)}</NutritionalValue>
              <NutritionalLabel>Calorie</NutritionalLabel>
            </NutritionalItem>
            <NutritionalItem>
              <NutritionalValue>{Math.round(recipe.valoriNutrizionali.proteine / recipe.porzioni * porzioni / porzioni)}g</NutritionalValue>
              <NutritionalLabel>Proteine</NutritionalLabel>
            </NutritionalItem>
            <NutritionalItem>
              <NutritionalValue>{Math.round(recipe.valoriNutrizionali.carboidrati / recipe.porzioni * porzioni / porzioni)}g</NutritionalValue>
              <NutritionalLabel>Carboidrati</NutritionalLabel>
            </NutritionalItem>
            <NutritionalItem>
              <NutritionalValue>{Math.round(recipe.valoriNutrizionali.grassi / recipe.porzioni * porzioni / porzioni)}g</NutritionalValue>
              <NutritionalLabel>Grassi</NutritionalLabel>
            </NutritionalItem>
          </NutritionalInfo>
        </Section>
      )}

      {recipe.videoUrl && (
        <VideoSection>
          <SectionTitle style={{ color: Colors.testoChiaro }}>Video Tutorial</SectionTitle>
          <VideoButton onClick={() => window.open(recipe.videoUrl, '_blank')}>
            <FaPlay /> Guarda il video
          </VideoButton>
        </VideoSection>
      )}

      {/* ⏱️ TIMER DI COTTURA */}
      <CookingTimer />

      {/* 🆕 NUOVE SEZIONI INNOVATIVE */}
      {recipe.storia && <DishHistory storia={recipe.storia} />}

      {recipe.consigliNonna && recipe.consigliNonna.length > 0 && (
        <GrandmaTips tips={recipe.consigliNonna} />
      )}

      {recipe.abbinamentoVini && recipe.abbinamentoVini.length > 0 && (
        <WinePairings wines={recipe.abbinamentoVini} />
      )}

      {recipe.sostituzioniIngredienti && recipe.sostituzioniIngredienti.length > 0 && (
        <IngredientSubstitutions sostituzioni={recipe.sostituzioniIngredienti} />
      )}

      <Tags>
        {recipe.tags.map((tag, index) => (
          <Tag key={index}>#{tag}</Tag>
        ))}
      </Tags>

      {/* 👨‍🍳 MODALITÀ COOKING */}
      {showCookingMode && (
        <CookingMode
          steps={recipe.procedimento}
          onClose={() => setShowCookingMode(false)}
        />
      )}
    </Container>
  );
}
