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

export default function CategoriesScreen() {
  return (
    <Container>
      <Title>Categorie</Title>
      <Text>Qui verranno mostrate tutte le categorie di ricette.</Text>
    </Container>
  );
}
