import { useState } from 'react';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight, FaTimes, FaClock, FaCheck } from 'react-icons/fa';
import { Colors } from '../../../shared/src/constants/colors';
import type { PassoProcedimento } from '../../../shared/src/types/recipe';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${Colors.verdePrimario};
  background: rgba(0, 140, 69, 0.1);
`;

const Progress = styled.div`
  flex: 1;
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: 600;
`;

const CloseButton = styled.button`
  background: ${Colors.rossoPrimario};
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 24px;
  transition: all 0.3s;

  &:hover {
    background: ${Colors.rossoScuro};
    transform: scale(1.1);
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  overflow-y: auto;
`;

const StepCard = styled.div`
  max-width: 800px;
  width: 100%;
  background: white;
  border-radius: 20px;
  padding: 60px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

const StepNumber = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  background: ${Colors.verdePrimario};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
  box-shadow: 0 8px 20px rgba(0, 140, 69, 0.3);
`;

const StepDescription = styled.p`
  font-size: 24px;
  line-height: 1.8;
  color: ${Colors.testoChiaro};
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const StepMeta = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 30px;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background: ${Colors.verdePastello};
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  color: ${Colors.verdeScuro};

  svg {
    font-size: 20px;
  }
`;

const Suggestion = styled.div`
  background: ${Colors.warning};
  color: white;
  padding: 20px;
  border-radius: 12px;
  margin-top: 20px;
  font-size: 16px;
  line-height: 1.6;

  &::before {
    content: '💡 ';
    font-size: 24px;
    margin-right: 8px;
  }
`;

const Navigation = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  border-top: 2px solid ${Colors.verdePrimario};
  background: rgba(0, 140, 69, 0.1);
`;

const NavButton = styled.button<{ $variant?: 'primary' }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px 30px;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  flex: 1;

  ${props => props.$variant === 'primary' ? `
    background: ${Colors.verdePrimario};
    color: white;
    justify-content: flex-end;

    &:hover {
      background: ${Colors.verdeScuro};
      transform: translateX(5px);
    }
  ` : `
    background: rgba(255, 255, 255, 0.1);
    color: white;
    justify-content: flex-start;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateX(-5px);
    }
  `}

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    transform: none;
  }

  svg {
    font-size: 20px;
  }
`;

const CompletedBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px;
  background: ${Colors.successo};
  color: white;
  border-radius: 12px;
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;

  svg {
    font-size: 28px;
  }
`;

interface CookingModeProps {
  steps: PassoProcedimento[];
  onClose: () => void;
}

export default function CookingMode({ steps, onClose }: CookingModeProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const goNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goPrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const step = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  return (
    <Overlay>
      <Header>
        <Progress>
          Passo {currentStep + 1} di {steps.length}
        </Progress>
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>
      </Header>

      <Content>
        <StepCard>
          <StepNumber>{step.numero}</StepNumber>
          <StepDescription>{step.descrizione}</StepDescription>

          {(step.tempoCottura || step.suggerimenti) && (
            <StepMeta>
              {step.tempoCottura && (
                <MetaItem>
                  <FaClock />
                  {step.tempoCottura} minuti
                </MetaItem>
              )}
            </StepMeta>
          )}

          {step.suggerimenti && (
            <Suggestion>{step.suggerimenti}</Suggestion>
          )}

          {isLastStep && (
            <CompletedBadge>
              <FaCheck />
              Ultimo passo - Buon appetito!
            </CompletedBadge>
          )}
        </StepCard>
      </Content>

      <Navigation>
        <NavButton onClick={goPrev} disabled={isFirstStep}>
          <FaChevronLeft />
          Precedente
        </NavButton>
        <NavButton $variant="primary" onClick={goNext} disabled={isLastStep}>
          Successivo
          <FaChevronRight />
        </NavButton>
      </Navigation>
    </Overlay>
  );
}
