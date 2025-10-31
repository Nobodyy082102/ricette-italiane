import styled from 'styled-components';
import { FaWineBottle, FaThermometerHalf } from 'react-icons/fa';
import { Colors } from '../../../shared/src/constants/colors';
import type { AbbinamentoVino } from '../../../shared/src/types/recipe';

const Container = styled.div`
  background: linear-gradient(135deg, #722F37 0%, #8B4049 100%);
  border-radius: 15px;
  padding: 30px;
  margin: 30px 0;
  color: white;
  box-shadow: 0 8px 20px rgba(114, 47, 55, 0.3);
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.8rem;
  margin-bottom: 25px;
  color: white;

  svg {
    font-size: 2rem;
  }
`;

const WineGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;

const WineCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const WineHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 12px;
`;

const WineName = styled.h3`
  font-size: 1.3rem;
  margin: 0;
  color: #FFD700;
`;

const WineType = styled.span<{ $tipo: string }>`
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  background: ${props => {
    switch (props.$tipo) {
      case 'bianco': return '#F4E4C1';
      case 'rosso': return '#8B2635';
      case 'rosato': return '#E88D9A';
      case 'spumante': return '#FFD700';
      default: return '#ccc';
    }
  }};
  color: ${props => props.$tipo === 'bianco' ? '#333' : 'white'};
`;

const Denomination = styled.div`
  font-size: 13px;
  color: #FFD700;
  margin-bottom: 12px;
  font-style: italic;
`;

const Reason = styled.p`
  font-size: 14px;
  line-height: 1.6;
  margin: 12px 0;
  color: rgba(255, 255, 255, 0.95);
`;

const Temperature = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #87CEEB;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);

  svg {
    font-size: 16px;
  }
`;

interface WinePairingsProps {
  wines: AbbinamentoVino[];
}

export default function WinePairings({ wines }: WinePairingsProps) {
  if (!wines || wines.length === 0) return null;

  return (
    <Container>
      <Title>
        <FaWineBottle /> Abbinamenti Vini
      </Title>
      <WineGrid>
        {wines.map((wine, index) => (
          <WineCard key={index}>
            <WineHeader>
              <WineName>{wine.nome}</WineName>
              <WineType $tipo={wine.tipo}>{wine.tipo}</WineType>
            </WineHeader>
            {wine.denominazione && (
              <Denomination>{wine.denominazione}</Denomination>
            )}
            <Reason>{wine.perche}</Reason>
            <Temperature>
              <FaThermometerHalf />
              Servire a {wine.temperaturaServizio}
            </Temperature>
          </WineCard>
        ))}
      </WineGrid>
    </Container>
  );
}
