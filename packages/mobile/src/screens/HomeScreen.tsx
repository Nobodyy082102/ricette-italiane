import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '@ricette-italiane/shared';

const Container = styled(ScrollView)`
  flex: 1;
  background-color: ${Colors.sfondoChiaro};
`;

const Header = styled(View)`
  background: linear-gradient(135deg, ${Colors.verdePrimario} 0%, ${Colors.rossoPrimario} 100%);
  padding: 30px 20px;
  align-items: center;
`;

const HeaderText = styled(Text)`
  color: white;
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
`;

const Section = styled(View)`
  padding: 20px;
`;

const SectionTitle = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  color: ${Colors.verdePrimario};
  margin-bottom: 15px;
`;

const RecipeCard = styled(View)`
  background-color: white;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 15px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 3;
`;

const RecipeTitle = styled(Text)`
  font-size: 18px;
  font-weight: 600;
  color: ${Colors.testoChiaro};
  margin-bottom: 8px;
`;

const RecipeMeta = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const MetaText = styled(Text)`
  color: ${Colors.testoSecondario};
  font-size: 14px;
`;

const DifficultyBadge = styled(Text)<{ level: string }>`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  color: white;
  background-color: ${props => {
    switch (props.level) {
      case 'facile': return Colors.difficoltaFacile;
      case 'media': return Colors.difficoltaMedia;
      case 'difficile': return Colors.difficoltaDifficile;
      default: return Colors.grigio500;
    }
  }};
`;

const mockRecipes = [
  { id: '1', title: '🍝 Pasta alla Carbonara', difficulty: 'media', time: '30 min' },
  { id: '2', title: '🍕 Pizza Margherita', difficulty: 'media', time: '90 min' },
  { id: '3', title: '🍰 Tiramisù', difficulty: 'facile', time: '40 min' },
  { id: '4', title: '🍚 Risotto alla Milanese', difficulty: 'media', time: '45 min' },
];

export default function HomeScreen() {
  return (
    <Container>
      <Header>
        <HeaderText>Scopri i sapori autentici della cucina italiana</HeaderText>
      </Header>

      <Section>
        <SectionTitle>🔥 Ricetta del Giorno</SectionTitle>
        <RecipeCard>
          <RecipeTitle>🍝 Pasta alla Carbonara</RecipeTitle>
          <RecipeMeta>
            <MetaText>⏱️ 30 min</MetaText>
            <DifficultyBadge level="media">⭐⭐ Media</DifficultyBadge>
          </RecipeMeta>
        </RecipeCard>
      </Section>

      <Section>
        <SectionTitle>⭐ Ricette Popolari</SectionTitle>
        {mockRecipes.map(recipe => (
          <RecipeCard key={recipe.id}>
            <RecipeTitle>{recipe.title}</RecipeTitle>
            <RecipeMeta>
              <MetaText>⏱️ {recipe.time}</MetaText>
              <DifficultyBadge level={recipe.difficulty}>
                {recipe.difficulty === 'facile' ? '⭐ Facile' :
                 recipe.difficulty === 'media' ? '⭐⭐ Media' :
                 '⭐⭐⭐ Difficile'}
              </DifficultyBadge>
            </RecipeMeta>
          </RecipeCard>
        ))}
      </Section>
    </Container>
  );
}
