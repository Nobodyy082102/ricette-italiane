import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';
import Categories from './pages/Categories';
import Favorites from './pages/Favorites';
import Search from './pages/Search';
import ShoppingList from './pages/ShoppingList';
import Dashboard from './pages/Dashboard';
import Suggestions from './pages/Suggestions';
import ItalyMap from './pages/ItalyMap';
import Navigation from './components/Navigation';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #F8F9FA;
  color: #212529;
`;

const Content = styled.main`
  padding-bottom: 70px; /* Spazio per bottom navigation */
`;

function App() {
  return (
    <Router basename="/ricette-italiane" future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppContainer>
        <Content>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipe/:id" element={<RecipeDetail />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/search" element={<Search />} />
              <Route path="/shopping-list" element={<ShoppingList />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/suggestions" element={<Suggestions />} />
              <Route path="/italy-map" element={<ItalyMap />} />
            </Routes>
          </Content>
          <Navigation />
        </AppContainer>
      </Router>
  );
}

export default App;
