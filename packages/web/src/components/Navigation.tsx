import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaList, FaHeart, FaSearch, FaShoppingCart, FaTrophy } from 'react-icons/fa';
import { Colors } from '../../../shared/src/constants/colors';

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: white;
  border-top: 3px solid ${Colors.verdePrimario};
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const NavItem = styled(Link)<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
  text-decoration: none;
  color: ${props => props.$active ? Colors.verdePrimario : Colors.grigio600};
  transition: all 0.3s ease;

  &:hover {
    color: ${Colors.verdePrimario};
    background-color: ${Colors.verdePastello};
  }

  svg {
    font-size: 24px;
    margin-bottom: 4px;
  }

  span {
    font-size: 12px;
    font-weight: ${props => props.$active ? '600' : '400'};
  }
`;

const navItems = [
  { path: '/', icon: FaHome, label: 'Home' },
  { path: '/categories', icon: FaList, label: 'Categorie' },
  { path: '/search', icon: FaSearch, label: 'Cerca' },
  { path: '/shopping-list', icon: FaShoppingCart, label: 'Spesa' },
  { path: '/favorites', icon: FaHeart, label: 'Preferiti' },
  { path: '/dashboard', icon: FaTrophy, label: 'Profilo' },
];

export default function Navigation() {
  const location = useLocation();

  return (
    <Nav>
      {navItems.map(item => (
        <NavItem
          key={item.path}
          to={item.path}
          $active={location.pathname === item.path}
        >
          <item.icon />
          <span>{item.label}</span>
        </NavItem>
      ))}
    </Nav>
  );
}
