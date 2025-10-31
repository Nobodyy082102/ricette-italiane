import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaShoppingCart, FaTrash, FaCheck, FaPlus } from 'react-icons/fa';
import { Colors } from '../../../shared/src/constants/colors';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: ${Colors.verdePrimario};
  margin-bottom: 30px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 80px 20px;
  color: ${Colors.testoSecondario};
`;

const EmptyIcon = styled.div`
  font-size: 5rem;
  margin-bottom: 20px;
`;

const ActionBar = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;

const Button = styled.button<{ $variant?: 'primary' | 'danger' }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  ${props => props.$variant === 'danger' ? `
    background: ${Colors.errore};
    color: white;

    &:hover {
      background: ${Colors.rossoScuro};
    }
  ` : `
    background: ${Colors.verdePrimario};
    color: white;

    &:hover {
      background: ${Colors.verdeScuro};
    }
  `}
`;

const RecipeGroup = styled.div`
  background: white;
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const RecipeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 2px solid ${Colors.verdePrimario};
`;

const RecipeTitle = styled.h2`
  color: ${Colors.verdePrimario};
  font-size: 1.5rem;
  margin: 0;
`;

const RecipeInfo = styled.span`
  color: ${Colors.testoSecondario};
  font-size: 14px;
`;

const IngredientsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const IngredientItem = styled.li<{ $purchased: boolean }>`
  padding: 15px;
  border-bottom: 1px solid ${Colors.grigio200};
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.3s;
  background: ${props => props.$purchased ? Colors.verdePastello : 'transparent'};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${props => props.$purchased ? Colors.verdePastello : Colors.grigio100};
  }
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 24px;
  height: 24px;
  cursor: pointer;
  accent-color: ${Colors.verdePrimario};
`;

const IngredientInfo = styled.div<{ $purchased: boolean }>`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: ${props => props.$purchased ? 'line-through' : 'none'};
  opacity: ${props => props.$purchased ? 0.6 : 1};
`;

const IngredientName = styled.span`
  color: ${Colors.testoChiaro};
  font-weight: 500;
  font-size: 16px;
`;

const IngredientQuantity = styled.span`
  color: ${Colors.testoSecondario};
  font-weight: 600;
  font-size: 16px;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: ${Colors.errore};
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  &:hover {
    background: ${Colors.rossoPastello};
  }
`;

const Stats = styled.div`
  background: ${Colors.verdePastello};
  padding: 15px 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 15px;
`;

const Stat = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${Colors.verdePrimario};
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: ${Colors.testoSecondario};
  text-transform: uppercase;
`;

interface ShoppingItem {
  id: string;
  ricettaId: string;
  ricettaTitolo: string;
  ingrediente: string;
  quantita: number;
  unita: string;
  note?: string;
  acquistato: boolean;
}

export default function ShoppingList() {
  const navigate = useNavigate();
  const [items, setItems] = useState<ShoppingItem[]>([]);

  useEffect(() => {
    // Carica lista da localStorage
    const saved = localStorage.getItem('shoppingList');
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  const saveItems = (newItems: ShoppingItem[]) => {
    setItems(newItems);
    localStorage.setItem('shoppingList', JSON.stringify(newItems));
  };

  const togglePurchased = (id: string) => {
    const newItems = items.map(item =>
      item.id === id ? { ...item, acquistato: !item.acquistato } : item
    );
    saveItems(newItems);
  };

  const deleteItem = (id: string) => {
    const newItems = items.filter(item => item.id !== id);
    saveItems(newItems);
  };

  const clearPurchased = () => {
    const newItems = items.filter(item => !item.acquistato);
    saveItems(newItems);
  };

  const clearAll = () => {
    if (window.confirm('Vuoi davvero eliminare tutta la lista della spesa?')) {
      saveItems([]);
    }
  };

  // Raggruppa per ricetta
  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.ricettaId]) {
      acc[item.ricettaId] = {
        titolo: item.ricettaTitolo,
        items: []
      };
    }
    acc[item.ricettaId].items.push(item);
    return acc;
  }, {} as Record<string, { titolo: string; items: ShoppingItem[] }>);

  const totalItems = items.length;
  const purchasedItems = items.filter(item => item.acquistato).length;
  const remainingItems = totalItems - purchasedItems;

  if (totalItems === 0) {
    return (
      <Container>
        <Title>
          <FaShoppingCart /> Lista della Spesa
        </Title>
        <EmptyState>
          <EmptyIcon>🛒</EmptyIcon>
          <h2>La tua lista è vuota</h2>
          <p>Aggiungi ingredienti dalle ricette per creare la tua lista della spesa!</p>
          <Button style={{ marginTop: '20px' }} onClick={() => navigate('/')}>
            <FaPlus /> Esplora Ricette
          </Button>
        </EmptyState>
      </Container>
    );
  }

  return (
    <Container>
      <Title>
        <FaShoppingCart /> Lista della Spesa
      </Title>

      <Stats>
        <Stat>
          <StatValue>{totalItems}</StatValue>
          <StatLabel>Totale</StatLabel>
        </Stat>
        <Stat>
          <StatValue>{purchasedItems}</StatValue>
          <StatLabel>Acquistati</StatLabel>
        </Stat>
        <Stat>
          <StatValue>{remainingItems}</StatValue>
          <StatLabel>Da comprare</StatLabel>
        </Stat>
      </Stats>

      <ActionBar>
        {purchasedItems > 0 && (
          <Button $variant="primary" onClick={clearPurchased}>
            <FaCheck /> Rimuovi acquistati
          </Button>
        )}
        <Button $variant="danger" onClick={clearAll}>
          <FaTrash /> Svuota lista
        </Button>
      </ActionBar>

      {Object.entries(groupedItems).map(([ricettaId, group]) => (
        <RecipeGroup key={ricettaId}>
          <RecipeHeader>
            <RecipeTitle>{group.titolo}</RecipeTitle>
            <RecipeInfo>
              {group.items.filter(i => i.acquistato).length} / {group.items.length} acquistati
            </RecipeInfo>
          </RecipeHeader>

          <IngredientsList>
            {group.items.map(item => (
              <IngredientItem key={item.id} $purchased={item.acquistato}>
                <Checkbox
                  checked={item.acquistato}
                  onChange={() => togglePurchased(item.id)}
                />
                <IngredientInfo $purchased={item.acquistato}>
                  <IngredientName>
                    {item.ingrediente}
                    {item.note && (
                      <span style={{ fontSize: '12px', color: Colors.testoSecondario }}> ({item.note})</span>
                    )}
                  </IngredientName>
                  <IngredientQuantity>
                    {item.quantita} {item.unita}
                  </IngredientQuantity>
                </IngredientInfo>
                <DeleteButton onClick={() => deleteItem(item.id)}>
                  <FaTrash />
                </DeleteButton>
              </IngredientItem>
            ))}
          </IngredientsList>
        </RecipeGroup>
      ))}
    </Container>
  );
}
