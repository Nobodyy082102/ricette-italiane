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
  const [displayTime, setDisplayTime] = useState('00:00');
  const [status, setStatus] = useState<'idle' | 'running' | 'paused' | 'finished'>('idle');

  // Use refs for timer state to avoid re-renders
  const totalSecondsRef = useRef(0);
  const isRunningRef = useRef(false);
  const intervalRef = useRef<number | null>(null);
  const isMountedRef = useRef(true);

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, []);

  const updateDisplay = useCallback(() => {
    if (isMountedRef.current) {
      setDisplayTime(formatTime(totalSecondsRef.current));
    }
  }, [formatTime]);

  const playAlarm = useCallback(() => {
    if (!isMountedRef.current) return;

    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();

      const playBeep = (delay: number) => {
        setTimeout(() => {
          if (!isMountedRef.current) {
            audioContext.close();
            return;
          }

          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();

          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);
          oscillator.frequency.value = 800;
          oscillator.type = 'sine';
          gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);

          oscillator.start(audioContext.currentTime);
          oscillator.stop(audioContext.currentTime + 0.3);

          if (delay === 400) {
            setTimeout(() => audioContext.close(), 500);
          }
        }, delay);
      };

      playBeep(0);
      playBeep(400);

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

  const tick = useCallback(() => {
    if (!isMountedRef.current || !isRunningRef.current) return;

    totalSecondsRef.current = Math.max(0, totalSecondsRef.current - 1);
    updateDisplay();

    if (totalSecondsRef.current === 0) {
      isRunningRef.current = false;
      if (isMountedRef.current) {
        setStatus('finished');
        playAlarm();
      }
    }
  }, [updateDisplay, playAlarm]);

  // Single effect for the timer - no dependencies on state
  useEffect(() => {
    isMountedRef.current = true;

    // Request notification permission on mount
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }

    return () => {
      isMountedRef.current = false;
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  const handleStart = () => {
    if (totalSecondsRef.current > 0 && !isRunningRef.current) {
      isRunningRef.current = true;
      setStatus('running');

      // Clear any existing interval
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      // Start new interval
      intervalRef.current = window.setInterval(tick, 1000);
    }
  };

  const handlePause = () => {
    if (isRunningRef.current) {
      isRunningRef.current = false;
      setStatus('paused');

      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
  };

  const handleStop = () => {
    isRunningRef.current = false;
    totalSecondsRef.current = 0;
    setStatus('idle');
    updateDisplay();

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleQuickTime = (mins: number) => {
    handleStop();
    totalSecondsRef.current = mins * 60;
    updateDisplay();
  };

  const handleCustomTime = () => {
    const mins = parseInt((document.getElementById('custom-minutes') as HTMLInputElement)?.value || '0');
    const secs = parseInt((document.getElementById('custom-seconds') as HTMLInputElement)?.value || '0');
    handleStop();
    totalSecondsRef.current = mins * 60 + secs;
    updateDisplay();
  };

  return (
    <Container>
      <Title>
        <FaClock />
        Timer di Cottura
      </Title>

      <TimerDisplay>
        <TimeText $isActive={status === 'running'}>
          {displayTime}
        </TimeText>
        <StatusBadge $status={status}>
          {status === 'running' && '⏱️ In esecuzione'}
          {status === 'paused' && '⏸️ In pausa'}
          {status === 'finished' && '✅ Completato'}
          {status === 'idle' && '💤 Pronto'}
        </StatusBadge>
      </TimerDisplay>

      <ControlsRow>
        <ControlButton
          $variant="start"
          onClick={handleStart}
          disabled={status === 'running' || totalSecondsRef.current === 0}
        >
          <FaPlay />
          {status === 'paused' ? 'Riprendi' : 'Avvia'}
        </ControlButton>

        <ControlButton
          $variant="pause"
          onClick={handlePause}
          disabled={status !== 'running'}
        >
          <FaPause />
          Pausa
        </ControlButton>

        <ControlButton
          $variant="stop"
          onClick={handleStop}
          disabled={totalSecondsRef.current === 0 && status === 'idle'}
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
