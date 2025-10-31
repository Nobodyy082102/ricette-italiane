import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Colors } from '@ricette-italiane/shared';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: ${Colors.verdePrimario};
`;

export default function RecipeDetail() {
  const { id } = useParams();

  return (
    <Container>
      <Title>Dettagli Ricetta #{id}</Title>
      <p>Questa pagina sarà implementata con tutti i dettagli della ricetta.</p>
    </Container>
  );
}
