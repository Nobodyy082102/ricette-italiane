import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '@ricette-italiane/shared';

const Container = styled(View)`
  flex: 1;
  padding: 20px;
  background-color: ${Colors.sfondoChiaro};
`;

const Title = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  color: ${Colors.verdePrimario};
  margin-bottom: 20px;
`;

export default function FavoritesScreen() {
  return (
    <Container>
      <Title>❤️ I Miei Preferiti</Title>
      <Text>Qui verranno mostrate le tue ricette preferite.</Text>
    </Container>
  );
}
