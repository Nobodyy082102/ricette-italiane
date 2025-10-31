import styled from 'styled-components';
import { FaBook, FaMapMarkerAlt, FaLightbulb } from 'react-icons/fa';
import { Colors } from '../../../shared/src/constants/colors';
import type { StoriaPiatto } from '../../../shared/src/types/recipe';

const Container = styled.div`
  background: linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%);
  border-radius: 15px;
  padding: 30px;
  margin: 30px 0;
  border: 2px solid ${Colors.verdePrimario};
  box-shadow: 0 4px 15px rgba(0, 140, 69, 0.1);
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.8rem;
  color: ${Colors.verdePrimario};
  margin-bottom: 25px;

  svg {
    font-size: 1.8rem;
  }
`;

const OriginSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  border-left: 4px solid ${Colors.verdePrimario};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const SectionLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${Colors.verdePrimario};
  letter-spacing: 1px;
  margin-bottom: 12px;

  svg {
    font-size: 16px;
  }
`;

const OriginText = styled.p`
  font-size: 15px;
  line-height: 1.8;
  color: ${Colors.testoChiaro};
  margin: 0;
`;

const CuriositiesGrid = styled.div`
  display: grid;
  gap: 15px;
  margin-bottom: 20px;
`;

const CuriosityCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 18px;
  border-left: 4px solid ${Colors.rossoPrimario};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const CuriosityText = styled.p`
  font-size: 14px;
  line-height: 1.7;
  color: ${Colors.testoChiaro};
  margin: 0;

  &::before {
    content: '💡 ';
    margin-right: 8px;
  }
`;

const VariantsSection = styled.div`
  background: ${Colors.verdePastello};
  border-radius: 12px;
  padding: 20px;
  border: 2px dashed ${Colors.verdePrimario};
`;

const VariantsText = styled.p`
  font-size: 14px;
  line-height: 1.7;
  color: ${Colors.verdeScuro};
  margin: 0;
  font-style: italic;
`;

interface DishHistoryProps {
  storia: StoriaPiatto;
}

export default function DishHistory({ storia }: DishHistoryProps) {
  if (!storia) return null;

  return (
    <Container>
      <Title>
        <FaBook /> Storia del Piatto
      </Title>

      <OriginSection>
        <SectionLabel>
          <FaMapMarkerAlt />
          Origine
        </SectionLabel>
        <OriginText>{storia.origine}</OriginText>
      </OriginSection>

      {storia.curiosita && storia.curiosita.length > 0 && (
        <>
          <SectionLabel style={{ marginBottom: '15px' }}>
            <FaLightbulb />
            Curiosità
          </SectionLabel>
          <CuriositiesGrid>
            {storia.curiosita.map((curiosita, index) => (
              <CuriosityCard key={index}>
                <CuriosityText>{curiosita}</CuriosityText>
              </CuriosityCard>
            ))}
          </CuriositiesGrid>
        </>
      )}

      {storia.variantiRegionali && (
        <VariantsSection>
          <SectionLabel style={{ color: Colors.verdeScuro, marginBottom: '12px' }}>
            🗺️ Varianti Regionali
          </SectionLabel>
          <VariantsText>{storia.variantiRegionali}</VariantsText>
        </VariantsSection>
      )}
    </Container>
  );
}
