import { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { FaClock, FaPlay, FaPause, FaStop } from 'react-icons/fa';

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
  flex-wrap: wrap;
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
  const intervalRef = useRef<number | null>(null);

  const playAlarm = useCallback(() => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();

      // Primo beep
      const oscillator1 = audioContext.createOscillator();
      const gainNode1 = audioContext.createGain();

      oscillator1.connect(gainNode1);
      gainNode1.connect(audioContext.destination);
      oscillator1.frequency.value = 800;
      oscillator1.type = 'sine';
      gainNode1.gain.setValueAtTime(0.3, audioContext.currentTime);

      oscillator1.start(audioContext.currentTime);
      oscillator1.stop(audioContext.currentTime + 0.3);

      // Secondo beep (dopo 400ms) - NUOVO oscillator
      setTimeout(() => {
        try {
          const oscillator2 = audioContext.createOscillator();
          const gainNode2 = audioContext.createGain();

          oscillator2.connect(gainNode2);
          gainNode2.connect(audioContext.destination);
          oscillator2.frequency.value = 800;
          oscillator2.type = 'sine';
          gainNode2.gain.setValueAtTime(0.3, audioContext.currentTime);

          oscillator2.start(audioContext.currentTime);
          oscillator2.stop(audioContext.currentTime + 0.3);

          // Cleanup: chiudi l'audio context dopo il secondo beep
          setTimeout(() => {
            audioContext.close().catch(err => console.log('AudioContext already closed', err));
          }, 500);
        } catch (err) {
          console.error('Error in second beep:', err);
        }
      }, 400);

      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('⏰ Timer Scaduto!', {
          body: 'Il tempo di cottura è terminato!',
          icon: '⏰'
        });
      }
    } catch (error) {
      console.error('Error playing alarm:', error);
    }
  }, []);

  // Effetto per gestire il countdown
  useEffect(() => {
    if (isRunning && totalSeconds > 0) {
      intervalRef.current = window.setInterval(() => {
        setTotalSeconds(prev => Math.max(0, prev - 1));
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning, totalSeconds]);

  // Effetto separato per gestire quando il timer raggiunge 0
  useEffect(() => {
    if (isRunning && totalSeconds === 0) {
      setIsRunning(false);
      playAlarm();
    }
  }, [totalSeconds, isRunning, playAlarm]);

  useEffect(() => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    setMinutes(mins);
    setSeconds(secs);
  }, [totalSeconds]);

  const handleStart = () => {
    if (totalSeconds > 0) {
      setIsRunning(true);
      setIsPaused(false);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
    setIsPaused(true);
  };

  const handleStop = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTotalSeconds(0);
  };

  const handleQuickTime = (mins: number) => {
    setTotalSeconds(mins * 60);
    setIsRunning(false);
    setIsPaused(false);
  };

  const handleCustomTime = () => {
    const mins = parseInt((document.getElementById('custom-minutes') as HTMLInputElement)?.value || '0');
    const secs = parseInt((document.getElementById('custom-seconds') as HTMLInputElement)?.value || '0');
    setTotalSeconds(mins * 60 + secs);
    setIsRunning(false);
    setIsPaused(false);
  };

  const requestNotificationPermission = () => {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  };

  useEffect(() => {
    requestNotificationPermission();
  }, []);

  const formatTime = (mins: number, secs: number) => {
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getStatus = (): 'idle' | 'running' | 'paused' | 'finished' => {
    if (totalSeconds === 0 && !isRunning && isPaused) return 'finished';
    if (isRunning) return 'running';
    if (isPaused) return 'paused';
    return 'idle';
  };

  return (
    <Container>
      <Title>
        <FaClock />
        Timer di Cottura
      </Title>

      <TimerDisplay>
        <TimeText $isActive={isRunning}>
          {formatTime(minutes, seconds)}
        </TimeText>
        <StatusBadge $status={getStatus()}>
          {getStatus() === 'running' && '⏱️ In esecuzione'}
          {getStatus() === 'paused' && '⏸️ In pausa'}
          {getStatus() === 'finished' && '✅ Completato'}
          {getStatus() === 'idle' && '💤 Pronto'}
        </StatusBadge>
      </TimerDisplay>

      <ControlsRow>
        <ControlButton
          $variant="start"
          onClick={handleStart}
          disabled={isRunning || totalSeconds === 0}
        >
          <FaPlay />
          {isPaused ? 'Riprendi' : 'Avvia'}
        </ControlButton>

        <ControlButton
          $variant="pause"
          onClick={handlePause}
          disabled={!isRunning}
        >
          <FaPause />
          Pausa
        </ControlButton>

        <ControlButton
          $variant="stop"
          onClick={handleStop}
          disabled={totalSeconds === 0 && !isRunning}
        >
          <FaStop />
          Stop
        </ControlButton>
      </ControlsRow>

      <QuickTimers>
        {[1, 3, 5, 10, 15, 20].map(mins => (
          <QuickTimer key={mins} onClick={() => handleQuickTime(mins)}>
            {mins} min
          </QuickTimer>
        ))}
      </QuickTimers>

      <CustomTimeInput>
        <TimeInput
          id="custom-minutes"
          type="number"
          min="0"
          max="59"
          placeholder="Min"
          defaultValue="0"
        />
        <TimeInput
          id="custom-seconds"
          type="number"
          min="0"
          max="59"
          placeholder="Sec"
          defaultValue="0"
        />
        <SetButton onClick={handleCustomTime}>
          Imposta
        </SetButton>
      </CustomTimeInput>
    </Container>
  );
}
