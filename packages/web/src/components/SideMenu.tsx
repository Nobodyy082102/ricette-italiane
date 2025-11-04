import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import {
  FaBars,
  FaTimes,
  FaHome,
  FaList,
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaTrophy,
  FaCamera,
  FaGraduationCap,
  FaGamepad,
  FaMicrophone,
  FaBook,
  FaMapMarkedAlt,
  FaRecycle,
  FaMusic,
  FaFlask,
  FaWineGlass,
  FaCalendarAlt,
  FaClock,
  FaChalkboardTeacher,
  FaMap
} from 'react-icons/fa';

const MenuButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 2000;
  background: #008C45;
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  }
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  z-index: 1998;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s;
`;

const Menu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${props => props.$isOpen ? '0' : '-350px'};
  width: 350px;
  height: 100vh;
  background: white;
  z-index: 1999;
  transition: left 0.3s ease;
  overflow-y: auto;
  box-shadow: 2px 0 20px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    width: 280px;
    left: ${props => props.$isOpen ? '0' : '-280px'};
  }
`;

const MenuHeader = styled.div`
  padding: 30px 25px;
  background: linear-gradient(135deg, #008C45, #27ae60);
  color: white;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 24px;
  padding: 5px;
`;

const MenuTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 8px;
`;

const MenuSubtitle = styled.p`
  font-size: 0.95rem;
  opacity: 0.95;
`;

const MenuContent = styled.div`
  padding: 20px 0;
`;

const MenuSection = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h3`
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #666;
  padding: 0 25px;
  margin-bottom: 12px;
  letter-spacing: 0.5px;
`;

const MenuItem = styled(Link)<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 14px 25px;
  text-decoration: none;
  color: ${props => props.$active ? '#008C45' : '#212529'};
  background: ${props => props.$active ? 'rgba(0, 140, 69, 0.1)' : 'transparent'};
  border-left: 4px solid ${props => props.$active ? '#008C45' : 'transparent'};
  transition: all 0.2s;
  font-size: 0.95rem;

  &:hover {
    background: rgba(0, 140, 69, 0.1);
    padding-left: 30px;
  }

  svg {
    font-size: 20px;
    min-width: 20px;
  }
`;

const Badge = styled.span<{ color?: string }>`
  margin-left: auto;
  padding: 3px 10px;
  background: ${props => props.color || '#CD212A'};
  color: white;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
`;

const SideMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    {
      section: 'Principale',
      items: [
        { path: '/', icon: FaHome, label: 'Home' },
        { path: '/categories', icon: FaList, label: 'Categorie' },
        { path: '/search', icon: FaSearch, label: 'Cerca Ricette' },
        { path: '/favorites', icon: FaHeart, label: 'Preferiti' },
        { path: '/shopping-list', icon: FaShoppingCart, label: 'Lista Spesa' }
      ]
    },
    {
      section: 'Funzionalità AI',
      items: [
        { path: '/frigo-scanner', icon: FaCamera, label: 'Frigo Scanner', badge: 'AI' },
        { path: '/zero-sprechi', icon: FaRecycle, label: 'Zero Sprechi', badge: 'AI' },
        { path: '/menu-settimanale', icon: FaCalendarAlt, label: 'Menu Settimanale', badge: 'Smart' }
      ]
    },
    {
      section: 'Esperienze',
      items: [
        { path: '/libro-famiglia', icon: FaBook, label: 'Libro di Famiglia' },
        { path: '/laboratorio-conserve', icon: FaFlask, label: 'Lab. Conserve' }
      ]
    },
    {
      section: 'Community & Shop',
      items: [
        { path: '/mercato-km-zero', icon: FaMapMarkedAlt, label: 'Mercato KM Zero' },
        { path: '/cantina-virtuale', icon: FaWineGlass, label: 'Cantina Virtuale' },
        { path: '/playlist-cucina', icon: FaMusic, label: 'Playlist Cucina' }
      ]
    },
    {
      section: 'Strumenti',
      items: [
        { path: '/modalita-evento', icon: FaClock, label: 'Modalità Evento' },
        { path: '/controllo-vocale', icon: FaMicrophone, label: 'Hands-Free', badge: 'Beta' },
        { path: '/italy-map', icon: FaMap, label: 'Mappa Italia' }
      ]
    },
    {
      section: 'Profilo',
      items: [
        { path: '/gamification', icon: FaGamepad, label: 'Sfide & Badge' },
        { path: '/dashboard', icon: FaTrophy, label: 'Il Mio Profilo' }
      ]
    }
  ];

  return (
    <>
      <MenuButton onClick={toggleMenu}>
        <FaBars size={20} />
      </MenuButton>

      <Overlay $isOpen={isOpen} onClick={closeMenu} />

      <Menu $isOpen={isOpen}>
        <MenuHeader>
          <CloseButton onClick={closeMenu}>
            <FaTimes />
          </CloseButton>
          <MenuTitle>Ricette Italiane</MenuTitle>
          <MenuSubtitle>La tua cucina digitale completa</MenuSubtitle>
        </MenuHeader>

        <MenuContent>
          {menuItems.map((section, idx) => (
            <MenuSection key={idx}>
              <SectionTitle>{section.section}</SectionTitle>
              {section.items.map((item) => (
                <MenuItem
                  key={item.path}
                  to={item.path}
                  $active={location.pathname === item.path}
                  onClick={closeMenu}
                >
                  <item.icon />
                  <span>{item.label}</span>
                  {item.badge && <Badge>{item.badge}</Badge>}
                </MenuItem>
              ))}
            </MenuSection>
          ))}
        </MenuContent>
      </Menu>
    </>
  );
};

export default SideMenu;
