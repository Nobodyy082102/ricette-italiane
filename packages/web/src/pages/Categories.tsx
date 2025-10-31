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

export default function Categories() {
  return (
    <Container>
      <Title>Categorie</Title>
      <p>Qui verranno mostrate tutte le categorie di ricette.</p>
    </Container>
  );
}
