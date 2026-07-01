import React from 'react';
import { useSoloSystem } from '../../context/SoloSystemContext';
import { LEETCODE_150 } from '../../data/leetcode150';
import { motion } from 'framer-motion';
import './views.css';

export const Leetcode150: React.FC = () => {
  const { state, toggleLeetcode150 } = useSoloSystem();

  const total = LEETCODE_150.length;
  const doneCount = LEETCODE_150.filter(q => state.leetcode150Done[q.name]).length;
  const progress = total === 0 ? 0 : Math.round((doneCount / total) * 100);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="view-section"
    >
      <header className="section-header">
        <h2>Top Interview 150</h2>
        <div className="progress-badge">{progress}% Complete</div>
      </header>

      <div className="progress-bar-container">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="question-list">
        {LEETCODE_150.map((q, i) => {
          const isDone = !!state.leetcode150Done[q.name];
          return (
            <div key={i} className={`task-card ${isDone ? 'done' : ''}`} onClick={() => toggleLeetcode150(q.name)}>
              <div className="task-header">
                <span className="task-check">{isDone ? '✅' : '⬜'}</span>
                <span className="task-title" style={{ marginLeft: '10px' }}>{q.name}</span>
                <span className={`difficulty-badge ${q.difficulty.toLowerCase()}`}>{q.difficulty}</span>
              </div>
              <div className="task-actions">
                <a 
                  href={q.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-action"
                  onClick={e => e.stopPropagation()}
                >
                  Solve ↗
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};
