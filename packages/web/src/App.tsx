import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { LightTheme } from '@ricette-italiane/shared';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';
import Categories from './pages/Categories';
import Favorites from './pages/Favorites';
import Search from './pages/Search';
import Navigation from './components/Navigation';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
`;

const Content = styled.main`
  padding-bottom: 70px; /* Spazio per bottom navigation */
`;

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <Router>
        <AppContainer>
          <Content>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipe/:id" element={<RecipeDetail />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </Content>
          <Navigation />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
