import styled from 'styled-components';
import { Colors } from '@ricette-italiane/shared';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: ${Colors.verdePrimario};
`;

export default function Search() {
  return (
    <Container>
      <Title>🔍 Cerca Ricette</Title>
      <p>Qui verrà implementata la ricerca avanzata con filtri.</p>
    </Container>
  );
}
