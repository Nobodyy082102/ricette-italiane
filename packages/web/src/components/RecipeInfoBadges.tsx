import styled from 'styled-components';
import { FaEuroSign, FaLeaf, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { Colors } from '../../../shared/src/constants/colors';
import type { Stagione, OccasioneSpeciale } from '../../../shared/src/types/recipe';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 20px 0;
`;

const Badge = styled.div<{ $color: string; $bgColor: string }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  background: ${props => props.$bgColor};
  color: ${props => props.$color};
  border: 2px solid ${props => props.$color};
  transition: all 0.3s;
  cursor: default;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${props => props.$color}33;
  }

  svg {
    font-size: 16px;
  }
`;

interface RecipeInfoBadgesProps {
  costo?: number;
  stagioni?: Stagione[];
  occasioni?: OccasioneSpeciale[];
  tempoTotale?: number;
}

const getStagioneLabel = (stagione: Stagione): string => {
  switch (stagione) {
    case 'primavera': return '🌸 Primavera';
    case 'estate': return '☀️ Estate';
    case 'autunno': return '🍂 Autunno';
    case 'inverno': return '❄️ Inverno';
    case 'tutto_anno': return '🗓️ Tutto l\'Anno';
    default: return stagione;
  }
};

const getOccasioneLabel = (occasione: OccasioneSpeciale): string => {
  switch (occasione) {
    case 'natale': return '🎄 Natale';
    case 'capodanno': return '🎆 Capodanno';
    case 'pasqua': return '🐣 Pasqua';
    case 'ferragosto': return '🏖️ Ferragosto';
    case 'carnevale': return '🎭 Carnevale';
    case 'domenica': return '☀️ Domenica';
    case 'festa_compleanno': return '🎂 Compleanno';
    default: return occasione;
  }
};

const getCostoColor = (costo: number): { color: string; bg: string; label: string } => {
  if (costo < 10) return { color: '#4CAF50', bg: '#E8F5E9', label: 'Economico' };
  if (costo < 20) return { color: '#FF9800', bg: '#FFF3E0', label: 'Medio' };
  return { color: '#F44336', bg: '#FFEBEE', label: 'Costoso' };
};

export default function RecipeInfoBadges({ costo, stagioni, occasioni, tempoTotale }: RecipeInfoBadgesProps) {
  return (
    <Container>
      {costo !== undefined && (
        <Badge
          $color={getCostoColor(costo).color}
          $bgColor={getCostoColor(costo).bg}
        >
          <FaEuroSign />
          €{costo.toFixed(2)} - {getCostoColor(costo).label}
        </Badge>
      )}

      {tempoTotale && (
        <Badge $color={Colors.rossoPrimario} $bgColor={Colors.rossoPastello}>
          <FaClock />
          {tempoTotale} minuti
        </Badge>
      )}

      {stagioni && stagioni.length > 0 && (
        <>
          {stagioni.map((stagione, index) => (
            <Badge
              key={index}
              $color={Colors.verdePrimario}
              $bgColor={Colors.verdePastello}
            >
              <FaLeaf />
              {getStagioneLabel(stagione)}
            </Badge>
          ))}
        </>
      )}

      {occasioni && occasioni.length > 0 && (
        <>
          {occasioni.map((occasione, index) => (
            <Badge
              key={index}
              $color="#9C27B0"
              $bgColor="#F3E5F5"
            >
              <FaCalendarAlt />
              {getOccasioneLabel(occasione)}
            </Badge>
          ))}
        </>
      )}
    </Container>
  );
}
