import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaClock, FaPlay, FaPause, FaStop, FaBell } from 'react-icons/fa';
import { Colors } from '../../../shared/src/constants/colors';

const Container = styled.div`
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%);
  border-radius: 15px;
  padding: 30px;
  margin: 30px 0;
  color: white;
  box-shadow: 0 8px 20px rgba(255, 107, 107, 0.3);
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.8rem;
  margin-bottom: 25px;
  color: white;
`;

const TimerDisplay = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const TimeText = styled.div<{ $isActive: boolean }>`
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Courier New', monospace;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  animation: ${props => props.$isActive ? 'pulse 2s infinite' : 'none'};

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
`;

const ControlsRow = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 25px;
`;

const ControlButton = styled.button<{ $variant?: 'start' | 'pause' | 'stop' }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 15px 25px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  background: ${props => {
    switch (props.$variant) {
      case 'start': return '#4CAF50';
      case 'pause': return '#FFA726';
      case 'stop': return '#EF5350';
      default: return 'white';
    }
  }};
  color: white;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const QuickTimers = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
  margin-top: 20px;
`;

const QuickTimer = styled.button`
  padding: 12px;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: white;
  }
`;

const CustomTimeInput = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const TimeInput = styled.input`
  width: 80px;
  padding: 12px;
  border: 2px solid white;
  border-radius: 8px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.9);
  color: #333;

  &:focus {
    outline: none;
    background: white;
  }
`;

const SetButton = styled.button`
  padding: 12px 20px;
  background: white;
  color: #FF6B6B;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
  }
`;

const StatusBadge = styled.div<{ $status: 'idle' | 'running' | 'paused' | 'finished' }>`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-top: 15px;
  background: ${props => {
    switch (props.$status) {
      case 'running': return '#4CAF50';
      case 'paused': return '#FFA726';
      case 'finished': return '#EF5350';
      default: return 'rgba(255, 255, 255, 0.3)';
    }
  }};
`;

export default function CookingTimer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isRunning && totalSeconds > 0) {
      intervalRef.current = setInterval(() => {
        setTotalSeconds(prev => {
          if (prev <= 1) {
            playAlarm();
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, totalSeconds]);

  const playAlarm = () => {
    // Usa l'API Web Audio per creare un beep
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 1);

    // Notifica browser se supportata
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('⏰ Timer Scaduto!', {
        body: 'Il tempo di cottura è terminato!',
        icon: '⏰'
      });
    }
  };

  const startTimer = () => {
    if (totalSeconds > 0) {
      setIsRunning(true);
      setIsPaused(false);

      // Richiedi permesso notifiche
      if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
      }
    }
  };

  const pauseTimer = () => {
    setIsRunning(false);
    setIsPaused(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTotalSeconds(0);
  };

  const setQuickTimer = (mins: number) => {
    setTotalSeconds(mins * 60);
    setIsRunning(false);
    setIsPaused(false);
  };

  const setCustomTimer = () => {
    const total = minutes * 60 + seconds;
    if (total > 0) {
      setTotalSeconds(total);
      setIsRunning(false);
      setIsPaused(false);
    }
  };

  const displayMinutes = Math.floor(totalSeconds / 60);
  const displaySeconds = totalSeconds % 60;

  const getStatus = (): 'idle' | 'running' | 'paused' | 'finished' => {
    if (totalSeconds === 0 && !isRunning) return 'idle';
    if (isRunning) return 'running';
    if (isPaused) return 'paused';
    if (totalSeconds === 0 && isPaused) return 'finished';
    return 'idle';
  };

  const getStatusText = () => {
    switch (getStatus()) {
      case 'running': return '⏱️ In corso...';
      case 'paused': return '⏸️ In pausa';
      case 'finished': return '🔔 Completato!';
      default: return '⏰ Imposta un timer';
    }
  };

  return (
    <Container>
      <Title>
        <FaClock /> Timer di Cottura
      </Title>

      <TimerDisplay>
        <TimeText $isActive={isRunning}>
          {String(displayMinutes).padStart(2, '0')}:{String(displaySeconds).padStart(2, '0')}
        </TimeText>
        <StatusBadge $status={getStatus()}>
          {getStatusText()}
        </StatusBadge>
      </TimerDisplay>

      <ControlsRow>
        {!isRunning ? (
          <ControlButton $variant="start" onClick={startTimer} disabled={totalSeconds === 0}>
            <FaPlay /> Avvia
          </ControlButton>
        ) : (
          <ControlButton $variant="pause" onClick={pauseTimer}>
            <FaPause /> Pausa
          </ControlButton>
        )}
        <ControlButton $variant="stop" onClick={stopTimer} disabled={totalSeconds === 0 && !isPaused}>
          <FaStop /> Reset
        </ControlButton>
      </ControlsRow>

      <QuickTimers>
        <QuickTimer onClick={() => setQuickTimer(1)}>1 min</QuickTimer>
        <QuickTimer onClick={() => setQuickTimer(3)}>3 min</QuickTimer>
        <QuickTimer onClick={() => setQuickTimer(5)}>5 min</QuickTimer>
        <QuickTimer onClick={() => setQuickTimer(10)}>10 min</QuickTimer>
        <QuickTimer onClick={() => setQuickTimer(15)}>15 min</QuickTimer>
        <QuickTimer onClick={() => setQuickTimer(20)}>20 min</QuickTimer>
      </QuickTimers>

      <CustomTimeInput>
        <TimeInput
          type="number"
          min="0"
          max="99"
          placeholder="Min"
          value={minutes || ''}
          onChange={(e) => setMinutes(Math.max(0, Math.min(99, parseInt(e.target.value) || 0)))}
        />
        <TimeInput
          type="number"
          min="0"
          max="59"
          placeholder="Sec"
          value={seconds || ''}
          onChange={(e) => setSeconds(Math.max(0, Math.min(59, parseInt(e.target.value) || 0)))}
        />
        <SetButton onClick={setCustomTimer}>Imposta</SetButton>
      </CustomTimeInput>
    </Container>
  );
}
