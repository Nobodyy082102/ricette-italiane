import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaTrophy, FaFire, FaStar, FaMedal, FaChartLine } from 'react-icons/fa';
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
  font-size: 2.5rem;
`;

const ProfileCard = styled.div`
  background: linear-gradient(135deg, ${Colors.verdePrimario} 0%, ${Colors.verdeScuro} 100%);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 30px;
  color: white;
  box-shadow: 0 10px 30px rgba(0, 140, 69, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '👨‍🍳';
    position: absolute;
    top: -30px;
    right: -30px;
    font-size: 200px;
    opacity: 0.1;
  }
`;

const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 20px;
`;

const UserInfo = styled.div`
  flex: 1;
`;

const UserName = styled.h2`
  font-size: 2.2rem;
  margin: 0 0 10px 0;
`;

const UserLevel = styled.div`
  font-size: 1.3rem;
  opacity: 0.9;
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    font-size: 1.5rem;
    color: #FFD700;
  }
`;

const StreakBadge = styled.div`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 20px 30px;
  text-align: center;
  border: 2px solid rgba(255, 255, 255, 0.3);
`;

const StreakNumber = styled.div`
  font-size: 3rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  svg {
    color: #FF6B6B;
  }
`;

const StreakLabel = styled.div`
  font-size: 14px;
  opacity: 0.9;
  margin-top: 5px;
`;

const ProgressBar = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  height: 30px;
  margin-top: 20px;
  overflow: hidden;
  position: relative;
`;

const ProgressFill = styled.div<{ $progress: number }>`
  background: linear-gradient(90deg, #FFD700 0%, #FFA500 100%);
  height: 100%;
  width: ${props => props.$progress}%;
  transition: width 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
  font-weight: bold;
  font-size: 14px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const StatCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const StatIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 15px;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${Colors.verdePrimario};
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: ${Colors.testoSecondario};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const SectionTitle = styled.h2`
  color: ${Colors.verdePrimario};
  font-size: 1.8rem;
  margin: 40px 0 20px 0;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const BadgesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const BadgeCard = styled.div<{ $unlocked: boolean }>`
  background: ${props => props.$unlocked ? 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)' : Colors.grigio200};
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  opacity: ${props => props.$unlocked ? 1 : 0.5};
  position: relative;

  &:hover {
    transform: ${props => props.$unlocked ? 'scale(1.05)' : 'none'};
    box-shadow: ${props => props.$unlocked ? '0 8px 20px rgba(255, 215, 0, 0.4)' : 'none'};
  }
`;

const BadgeIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 10px;
`;

const BadgeName = styled.div<{ $unlocked: boolean }>`
  font-weight: 600;
  font-size: 14px;
  color: ${props => props.$unlocked ? 'white' : Colors.testoSecondario};
  margin-bottom: 5px;
`;

const BadgeDescription = styled.div<{ $unlocked: boolean }>`
  font-size: 11px;
  color: ${props => props.$unlocked ? 'rgba(255,255,255,0.9)' : Colors.testoSecondario};
  line-height: 1.4;
`;

const LockIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  opacity: 0.5;
`;

export default function Dashboard() {
  const [stats, setStats] = useState({
    livello: 'Cuoco Casalingo',
    punti: 450,
    puntiPerProssimoLivello: 1000,
    streak: 7,
    ricetteCucinate: 15,
    ricetteQuestoMese: 8,
    regioniEsplorate: 5,
    difficoltaMedia: 2.3
  });

  const [badges, setBadges] = useState([
    { id: '1', nome: 'Primo Piatto', icon: '🍝', descrizione: 'Hai cucinato la tua prima ricetta!', unlocked: true },
    { id: '2', nome: 'Amante della Pasta', icon: '🍝', descrizione: 'Cucina 5 ricette di pasta', unlocked: true },
    { id: '3', nome: 'Maestro Pizza', icon: '🍕', descrizione: 'Cucina 3 pizze perfette', unlocked: true },
    { id: '4', nome: 'Dolce Vita', icon: '🍰', descrizione: 'Prepara 5 dolci', unlocked: false },
    { id: '5', nome: 'Giro d\'Italia', icon: '🗺️', descrizione: 'Cucina ricette da 10 regioni diverse', unlocked: false },
    { id: '6', nome: 'Streaker', icon: '🔥', descrizione: 'Cucina per 7 giorni consecutivi', unlocked: true },
    { id: '7', nome: 'Master Chef', icon: '👨‍🍳', descrizione: 'Cucina 50 ricette', unlocked: false },
    { id: '8', nome: 'Nonna Certificata', icon: '👵', descrizione: 'Raggiungi il livello massimo', unlocked: false }
  ]);

  const progressPercentage = (stats.punti / stats.puntiPerProssimoLivello) * 100;
  const unlockedBadges = badges.filter(b => b.unlocked).length;

  return (
    <Container>
      <Title>🏆 Il Mio Profilo</Title>

      <ProfileCard>
        <ProfileHeader>
          <UserInfo>
            <UserName>Ciao, Cuoco! 👨‍🍳</UserName>
            <UserLevel>
              <FaStar />
              {stats.livello}
            </UserLevel>
          </UserInfo>

          <StreakBadge>
            <StreakNumber>
              <FaFire />
              {stats.streak}
            </StreakNumber>
            <StreakLabel>Giorni Consecutivi</StreakLabel>
          </StreakBadge>
        </ProfileHeader>

        <div>
          <div style={{ marginBottom: '10px', opacity: 0.9 }}>
            {stats.punti} / {stats.puntiPerProssimoLivello} XP
          </div>
          <ProgressBar>
            <ProgressFill $progress={progressPercentage}>
              {Math.round(progressPercentage)}%
            </ProgressFill>
          </ProgressBar>
        </div>
      </ProfileCard>

      <StatsGrid>
        <StatCard>
          <StatIcon>📚</StatIcon>
          <StatValue>{stats.ricetteCucinate}</StatValue>
          <StatLabel>Ricette Cucinate</StatLabel>
        </StatCard>

        <StatCard>
          <StatIcon>📅</StatIcon>
          <StatValue>{stats.ricetteQuestoMese}</StatValue>
          <StatLabel>Questo Mese</StatLabel>
        </StatCard>

        <StatCard>
          <StatIcon>🗺️</StatIcon>
          <StatValue>{stats.regioniEsplorate}/20</StatValue>
          <StatLabel>Regioni Esplorate</StatLabel>
        </StatCard>

        <StatCard>
          <StatIcon>⭐</StatIcon>
          <StatValue>{stats.difficoltaMedia.toFixed(1)}/3</StatValue>
          <StatLabel>Difficoltà Media</StatLabel>
        </StatCard>
      </StatsGrid>

      <SectionTitle>
        <FaMedal /> Badge Sbloccati ({unlockedBadges}/{badges.length})
      </SectionTitle>

      <BadgesGrid>
        {badges.map(badge => (
          <BadgeCard key={badge.id} $unlocked={badge.unlocked}>
            {!badge.unlocked && <LockIcon>🔒</LockIcon>}
            <BadgeIcon>{badge.icon}</BadgeIcon>
            <BadgeName $unlocked={badge.unlocked}>{badge.nome}</BadgeName>
            <BadgeDescription $unlocked={badge.unlocked}>
              {badge.descrizione}
            </BadgeDescription>
          </BadgeCard>
        ))}
      </BadgesGrid>
    </Container>
  );
}
