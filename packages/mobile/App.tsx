import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from 'styled-components/native';
import { LightTheme } from '@ricette-italiane/shared';
import Icon from 'react-native-vector-icons/FontAwesome';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import CategoriesScreen from './src/screens/CategoriesScreen';
import SearchScreen from './src/screens/SearchScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: LightTheme.primary,
            tabBarInactiveTintColor: 'gray',
            headerStyle: {
              backgroundColor: LightTheme.primary,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: '🇮🇹 Ricette Italiane',
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" size={size} color={color} />
              ),
              tabBarLabel: 'Home',
            }}
          />
          <Tab.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              title: 'Categorie',
              tabBarIcon: ({ color, size }) => (
                <Icon name="list" size={size} color={color} />
              ),
              tabBarLabel: 'Categorie',
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              title: 'Cerca',
              tabBarIcon: ({ color, size }) => (
                <Icon name="search" size={size} color={color} />
              ),
              tabBarLabel: 'Cerca',
            }}
          />
          <Tab.Screen
            name="Favorites"
            component={FavoritesScreen}
            options={{
              title: 'Preferiti',
              tabBarIcon: ({ color, size }) => (
                <Icon name="heart" size={size} color={color} />
              ),
              tabBarLabel: 'Preferiti',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
