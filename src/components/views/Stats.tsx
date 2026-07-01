import React, { useState, useEffect } from 'react';
import { useSoloSystem } from '../../context/SoloSystemContext';
import { TOTAL_DAYS } from '../../data/roadmap';
import { motion } from 'framer-motion';
import './views.css';

export const Stats: React.FC = () => {
  const { state, computeStreak, rankForLevel } = useSoloSystem();
  
  const rank = rankForLevel(state.level);
  const doneDays = state.completed.filter(Boolean).length;
  
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [pomoType, setPomoType] = useState(25);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(t => t - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      // Play a notification sound here in a full app
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(pomoType * 60);
  };
  
  const handlePomoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = parseInt(e.target.value);
    setPomoType(val);
    setIsActive(false);
    setTimeLeft(val * 60);
  };

  const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const secs = (timeLeft % 60).toString().padStart(2, '0');

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="view"
    >
      <div className="dash-grid">
        <div className="glass-panel">
          <h3 className="panel-title">📊 Progress Overview</h3>
          <ul className="stat-list">
            <li><span>Current Rank</span><strong>{rank.name}</strong></li>
            <li><span>Level</span><strong>{state.level}</strong></li>
            <li><span>Total XP Earned</span><strong>{state.xp} XP</strong></li>
            <li><span>Days Completed</span><strong>{doneDays} / {TOTAL_DAYS}</strong></li>
            <li><span>Current Streak</span><strong>{computeStreak()} days</strong></li>
          </ul>
        </div>
        
        <div className="glass-panel">
          <h3 className="panel-title">⏱ Pomodoro Timer</h3>
          <div className="pomodoro">
            <div className="pomodoro-display">{mins}:{secs}</div>
            <div className="pomodoro-controls">
              <button className="btn-secondary" onClick={toggleTimer}>
                {isActive ? 'Pause' : 'Start'}
              </button>
              <button className="btn-secondary" onClick={resetTimer}>Reset</button>
              <select className="pomo-select" value={pomoType} onChange={handlePomoChange}>
                <option value="25">25 min — Focus</option>
                <option value="50">50 min — Deep Work</option>
                <option value="5">5 min — Break</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
