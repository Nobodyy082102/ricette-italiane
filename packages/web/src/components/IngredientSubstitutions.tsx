import styled from 'styled-components';
import { FaExchangeAlt, FaInfoCircle } from 'react-icons/fa';
import { Colors } from '../../../shared/src/constants/colors';
import type { SostituzioneIngrediente } from '../../../shared/src/types/recipe';

const Container = styled.div`
  background: linear-gradient(135deg, #FF6B6B 0%, #FFA07A 100%);
  border-radius: 20px;
  padding: 30px;
  margin: 30px 0;
  color: white;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin: 0 0 20px 0;
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    font-size: 1.6rem;
  }
`;

const SubstitutionsGrid = styled.div`
  display: grid;
  gap: 15px;
`;

const SubstitutionCard = styled.div`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 20px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateX(5px);
  }
`;

const SubstitutionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 12px;
`;

const IngredientLabel = styled.div`
  flex: 1;
  font-weight: 600;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ArrowIcon = styled(FaExchangeAlt)`
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const SubstituteLabel = styled.div`
  flex: 1;
  font-weight: 600;
  font-size: 1.1rem;
  background: rgba(255, 255, 255, 0.3);
  padding: 8px 15px;
  border-radius: 10px;
`;

const ReasonBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.95rem;
  line-height: 1.5;
  opacity: 0.95;
  padding: 10px 15px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin-top: 10px;

  svg {
    flex-shrink: 0;
    margin-top: 3px;
    font-size: 1rem;
  }
`;

const FactorBadge = styled.span`
  background: rgba(255, 255, 255, 0.3);
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-left: 8px;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 20px;
  opacity: 0.8;
  font-size: 1rem;
`;

interface IngredientSubstitutionsProps {
  sostituzioni?: SostituzioneIngrediente[];
}

export default function IngredientSubstitutions({ sostituzioni }: IngredientSubstitutionsProps) {
  if (!sostituzioni || sostituzioni.length === 0) {
    return null;
  }

  return (
    <Container>
      <Title>
        <FaExchangeAlt />
        Sostituzioni Ingredienti
      </Title>

      {sostituzioni.length > 0 ? (
        <SubstitutionsGrid>
          {sostituzioni.map((sost, index) => (
            <SubstitutionCard key={index}>
              <SubstitutionRow>
                <IngredientLabel>
                  {sost.ingredienteOriginale}
                </IngredientLabel>
                <ArrowIcon />
                <SubstituteLabel>
                  {sost.sostituto}
                  {sost.fattoreMoltiplicazione && sost.fattoreMoltiplicazione !== 1 && (
                    <FactorBadge>
                      ×{sost.fattoreMoltiplicazione}
                    </FactorBadge>
                  )}
                </SubstituteLabel>
              </SubstitutionRow>
              <ReasonBox>
                <FaInfoCircle />
                <span>{sost.motivo}</span>
              </ReasonBox>
            </SubstitutionCard>
          ))}
        </SubstitutionsGrid>
      ) : (
        <EmptyState>
          Nessuna sostituzione disponibile per questa ricetta.
        </EmptyState>
      )}
    </Container>
  );
}
