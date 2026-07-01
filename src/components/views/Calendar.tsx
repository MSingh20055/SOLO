import React from 'react';
import { useSoloSystem } from '../../context/SoloSystemContext';
import { ROADMAP } from '../../data/roadmap';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import './views.css';

export const Calendar: React.FC = () => {
  const { state, setDay } = useSoloSystem();

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="view"
    >
      <div className="glass-panel">
        <h2 className="panel-title">📅 45-Day Mission Calendar</h2>
        
        <div className="calendar-grid">
          {ROADMAP.map((day, i) => {
            const isCompleted = state.completed[i];
            const isCurrent = state.currentDay === i;
            // A day is partial if any task is done but it's not completed
            const map = state.tasksDone[i] || {};
            const doneCount = Object.values(map).filter(Boolean).length;
            const isPartial = doneCount > 0 && !isCompleted;

            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={clsx(
                  'cal-cell',
                  day.boss && 'boss',
                  isCompleted && 'done',
                  isPartial && 'partial',
                  isCurrent && 'current'
                )}
                onClick={() => setDay(i)}
              >
                <div className="cal-day-num">{i + 1}</div>
                <div className="cal-day-pct">
                  {isCompleted ? '✔' : isPartial ? 'In Prog' : ''}
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="legend">
          <span><i className="dot done"></i> Completed</span>
          <span><i className="dot partial"></i> In Progress</span>
          <span><i className="dot boss"></i> Boss Battle</span>
          <span><i className="dot locked"></i> Untouched</span>
        </div>
      </div>
    </motion.section>
  );
};
