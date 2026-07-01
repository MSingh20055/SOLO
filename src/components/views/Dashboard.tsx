import React from 'react';
import { useSoloSystem } from '../../context/SoloSystemContext';
import { TOTAL_DAYS, BOSS_DAYS_1IDX } from '../../data/roadmap';
import clsx from 'clsx';
import './views.css';
import { motion } from 'framer-motion';

export const Dashboard: React.FC = () => {
  const { state, setDay, computeStreak, rankForLevel, xpThreshold } = useSoloSystem();
  
  const rank = rankForLevel(state.level);
  const need = xpThreshold(state.level);
  const done = state.completed.filter(Boolean).length;

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="view"
    >
      <div className="glass-panel hunter-card">
        <div className="hunter-left">
          <div className="rank-badge">{rank.letter}</div>
          <div>
            <h1>{rank.name}</h1>
            <p className="muted">Player • Placement Arc</p>
          </div>
        </div>
        <div className="hunter-right">
          <div className="stat-block">
            <span className="stat-label">LEVEL</span>
            <span className="stat-value">{state.level}</span>
          </div>
          <div className="stat-block">
            <span className="stat-label">STREAK</span>
            <span className="stat-value">🔥 {computeStreak()}</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
