import styled from 'styled-components';
import { Colors } from '../../../shared/src/constants/colors';
import type { ConsiglioDellaNonna } from '../../../shared/src/types/recipe';

const Container = styled.div`
  background: linear-gradient(135deg, #FFF5E6 0%, #FFE4B5 100%);
  border-radius: 15px;
  padding: 30px;
  margin: 30px 0;
  border: 3px solid ${Colors.rossoPrimario};
  box-shadow: 0 8px 20px rgba(205, 33, 42, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: '👵';
    position: absolute;
    top: -20px;
    right: -20px;
    font-size: 150px;
    opacity: 0.1;
    transform: rotate(15deg);
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: ${Colors.rossoPrimario};
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Georgia', serif;

  &::before {
    content: '👵';
    font-size: 2.2rem;
  }
`;

const TipsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const TipCard = styled.div<{ $categoria: string }>`
  background: white;
  border-radius: 12px;
  padding: 18px 22px;
  border-left: 5px solid ${props => {
    switch (props.$categoria) {
      case 'segreto': return '#FF6B6B';
      case 'tecnica': return '#4ECDC4';
      case 'ingrediente': return '#95E1D3';
      case 'conservazione': return '#FFD93D';
      case 'storia': return '#C68B59';
      default: return Colors.verdePrimario;
    }
  }};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: relative;
  transition: all 0.3s;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const CategoryBadge = styled.span<{ $categoria: string }>`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 10px;
  background: ${props => {
    switch (props.$categoria) {
      case 'segreto': return '#FFE5E5';
      case 'tecnica': return '#E0F7F4';
      case 'ingrediente': return '#E8F8F5';
      case 'conservazione': return '#FFF9E6';
      case 'storia': return '#F5EFE6';
      default: return Colors.verdePastello;
    }
  }};
  color: ${props => {
    switch (props.$categoria) {
      case 'segreto': return '#D32F2F';
      case 'tecnica': return '#00897B';
      case 'ingrediente': return '#2E7D32';
      case 'conservazione': return '#F57C00';
      case 'storia': return '#5D4037';
      default: return Colors.verdeScuro;
    }
  }};
`;

const CategoryIcon = styled.span`
  margin-right: 6px;
`;

const TipText = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: ${Colors.testoChiaro};
  margin: 0;
  font-style: italic;
  quotes: '"' '"' "'" "'";

  &::before {
    content: open-quote;
    font-size: 2em;
    line-height: 0;
    margin-right: 5px;
    vertical-align: -0.4em;
    color: ${Colors.rossoPrimario};
    font-family: Georgia, serif;
  }
`;

interface GrandmaTipsProps {
  tips: ConsiglioDellaNonna[];
}

const getCategoryIcon = (categoria: string): string => {
  switch (categoria) {
    case 'segreto': return '🔐';
    case 'tecnica': return '🎯';
    case 'ingrediente': return '🥬';
    case 'conservazione': return '📦';
    case 'storia': return '📖';
    default: return '💡';
  }
};

const getCategoryLabel = (categoria: string): string => {
  switch (categoria) {
    case 'segreto': return 'Segreto';
    case 'tecnica': return 'Tecnica';
    case 'ingrediente': return 'Ingrediente';
    case 'conservazione': return 'Conservazione';
    case 'storia': return 'Storia';
    default: return 'Consiglio';
  }
};

export default function GrandmaTips({ tips }: GrandmaTipsProps) {
  if (!tips || tips.length === 0) return null;

  return (
    <Container>
      <Title>I Consigli della Nonna</Title>
      <TipsList>
        {tips.map((tip, index) => (
          <TipCard key={index} $categoria={tip.categoria}>
            <CategoryBadge $categoria={tip.categoria}>
              <CategoryIcon>{getCategoryIcon(tip.categoria)}</CategoryIcon>
              {getCategoryLabel(tip.categoria)}
            </CategoryBadge>
            <TipText>{tip.testo}</TipText>
          </TipCard>
        ))}
      </TipsList>
    </Container>
  );
}
