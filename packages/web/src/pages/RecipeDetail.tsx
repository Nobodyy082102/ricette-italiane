import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaClock, FaUser, FaStar, FaHeart, FaShoppingCart, FaArrowLeft, FaPlay, FaCheck } from 'react-icons/fa';
import { Colors } from '../../../shared/src/constants/colors';
import { getRecipeById } from '../../../shared/src/data/mockRecipes';
import { formattaTempo, getDifficoltaBadge, ricalcolaIngredienti, creaListaSpesa } from '../../../shared/src/utils/recipeHelpers';
import type { Ricetta } from '../../../shared/src/types/recipe';

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

  useEffect(() => {
    if (id) {
      const foundRecipe = getRecipeById(id);
      setRecipe(foundRecipe);
      if (foundRecipe) {
        setPortions(foundRecipe.porzioni);
      }
    }
  }, [id]);

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

  const ingredientiRicalcolati = ricalcolaIngredienti(
    recipe.ingredienti,
    recipe.porzioni,
    porzioni
  );

  const handleAddToFavorites = () => {
    setIsFavorite(!isFavorite);
    // TODO: salvare in localStorage
  };

  const handleAddToShoppingList = () => {
    const lista = creaListaSpesa(recipe, porzioni);
    console.log('Lista della spesa:', lista);
    // TODO: salvare in localStorage
    alert('Ingredienti aggiunti alla lista della spesa!');
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
                onClick={() => setPortions(Math.max(1, porzioni - 1))}
                disabled={porzioni <= 1}
              >
                −
              </PortionButton>
              <span style={{ fontWeight: 'bold', minWidth: '30px', textAlign: 'center' }}>
                {porzioni}
              </span>
              <PortionButton onClick={() => setPortions(porzioni + 1)}>
                +
              </PortionButton>
            </PortionControl>
          </SectionTitle>

          <IngredientsList>
            {ingredientiRicalcolati.map((ing, index) => (
              <IngredientItem key={index}>
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
          <SectionTitle>Procedimento</SectionTitle>
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

      <Tags>
        {recipe.tags.map((tag, index) => (
          <Tag key={index}>#{tag}</Tag>
        ))}
      </Tags>
    </Container>
  );
}
