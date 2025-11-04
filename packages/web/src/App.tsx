import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

// Pagine esistenti
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';
import Categories from './pages/Categories';
import Favorites from './pages/Favorites';
import Search from './pages/Search';
import ShoppingList from './pages/ShoppingList';
import Dashboard from './pages/Dashboard';
import Suggestions from './pages/Suggestions';
import ItalyMap from './pages/ItalyMap';

// Nuove funzionalità innovative
import FrigoScanner from './pages/FrigoScanner';
import GamificationDashboard from './pages/GamificationDashboard';
import ZeroSprechi from './pages/ZeroSprechi';
import MenuSettimanale from './pages/MenuSettimanale';
import LibroFamiglia from './pages/LibroFamiglia';
import LaboratorioConserve from './pages/LaboratorioConserve';
import MercatoKmZero from './pages/MercatoKmZero';
import CantinaVirtuale from './pages/CantinaVirtuale';
import PlaylistCucina from './pages/PlaylistCucina';
import ModalitaEvento from './pages/ModalitaEvento';
import ControlloVocale from './pages/ControlloVocale';

// Componenti navigazione
import Navigation from './components/Navigation';
import SideMenu from './components/SideMenu';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #F8F9FA;
  color: #212529;
`;

const Content = styled.main`
  padding-bottom: 70px; /* Spazio per bottom navigation */
  padding-top: 20px;
`;

// Placeholder component per pagine in sviluppo
const ComingSoon = styled.div`
  max-width: 800px;
  margin: 100px auto;
  text-align: center;
  padding: 60px 20px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    color: #008C45;
  }

  p {
    font-size: 1.3rem;
    color: #666;
    margin-bottom: 30px;
  }

  .emoji {
    font-size: 5rem;
    margin-bottom: 20px;
  }
`;

const PlaceholderPage: React.FC<{ title: string; emoji: string }> = ({ title, emoji }) => (
  <ComingSoon>
    <div className="emoji">{emoji}</div>
    <h1>{title}</h1>
    <p>Funzionalità in arrivo presto!</p>
    <p style={{ fontSize: '1rem', color: '#999' }}>
      Stiamo lavorando duramente per portarti questa fantastica funzionalità.
    </p>
  </ComingSoon>
);

function App() {
  return (
    <Router basename="/ricette-italiane" future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppContainer>
        <SideMenu />
        <Content>
          <Routes>
            {/* Pagine esistenti */}
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/search" element={<Search />} />
            <Route path="/shopping-list" element={<ShoppingList />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/suggestions" element={<Suggestions />} />
            <Route path="/italy-map" element={<ItalyMap />} />

            {/* Nuove funzionalità innovative implementate */}
            <Route path="/frigo-scanner" element={<FrigoScanner />} />
            <Route path="/gamification" element={<GamificationDashboard />} />

            {/* Nuove funzionalità implementate */}
            <Route path="/zero-sprechi" element={<ZeroSprechi />} />
            <Route path="/menu-settimanale" element={<MenuSettimanale />} />
            <Route path="/libro-famiglia" element={<LibroFamiglia />} />
            <Route path="/laboratorio-conserve" element={<LaboratorioConserve />} />
            <Route path="/mercato-km-zero" element={<MercatoKmZero />} />
            <Route path="/cantina-virtuale" element={<CantinaVirtuale />} />
            <Route path="/playlist-cucina" element={<PlaylistCucina />} />
            <Route path="/modalita-evento" element={<ModalitaEvento />} />
            <Route path="/controllo-vocale" element={<ControlloVocale />} />
          </Routes>
        </Content>
        <Navigation />
      </AppContainer>
    </Router>
  );
}

export default App;
