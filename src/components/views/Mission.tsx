import React, { useState } from 'react';
import { useSoloSystem } from '../../context/SoloSystemContext';
import { ROADMAP, TOTAL_DAYS, CAT_META } from '../../data/roadmap';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import './views.css';

export const Mission: React.FC = () => {
  const { state, updateTask, updateNote, completeDay, setDay } = useSoloSystem();
  const dayIndex = state.currentDay;
  const dayData = ROADMAP[dayIndex];
  const boss = dayData.boss;
  
  const [localNote, setLocalNote] = useState(state.notes[dayIndex] || '');

  // Generate categories for the current day
  const cats = [];
  for (const key of Object.keys(CAT_META) as (keyof typeof CAT_META)[]) {
    if (dayData[key] && dayData[key]!.length) {
      cats.push({ key, label: CAT_META[key].label, icon: CAT_META[key].icon, tasks: dayData[key]! });
    }
  }

  const totalTasks = cats.reduce((sum, c) => sum + c.tasks.length, 0);
  const map = state.tasksDone[dayIndex] || {};
  const doneTasks = Object.values(map).filter(Boolean).length;
  const progressPct = totalTasks === 0 ? 0 : Math.round((doneTasks / totalTasks) * 100);

  const handleSaveNote = () => {
    updateNote(dayIndex, localNote);
  };

  const handleCompleteDay = () => {
    completeDay(dayIndex);
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="view"
    >
      <div className="mission-nav glass-panel">
        <button 
          className="btn-secondary" 
          disabled={dayIndex === 0}
          onClick={() => setDay(dayIndex - 1)}
        >
          ◀ Previous
        </button>
        <div className="mission-day-indicator">
          <span>Day {dayIndex + 1} / {TOTAL_DAYS}</span>
          {boss && <span className="boss-tag">⚔ BOSS BATTLE</span>}
        </div>
        <button 
          className="btn-secondary" 
          disabled={dayIndex === TOTAL_DAYS - 1}
          onClick={() => setDay(dayIndex + 1)}
        >
          Next ▶
        </button>
      </div>

      <div className="glass-panel mission-panel">
        <div className="mission-header">
          <h2>MISSION — DAY {dayIndex + 1}</h2>
          <div className="day-progress-mini">
            <div className="bar-track small">
              <motion.div 
                className="bar-fill" 
                initial={{ width: 0 }}
                animate={{ width: `${progressPct}%` }}
              />
            </div>
            <span>{progressPct}%</span>
          </div>
        </div>

        <div className="quest-categories">
          {cats.map((cat) => (
            <div key={cat.key} className="quest-cat">
              <div className="quest-cat-title">
                <span>{cat.icon}</span> {cat.label}
              </div>
              {cat.tasks.map((task: any, ti: number) => {
                const key = `${cat.key}_${ti}`;
                const checked = !!map[key];
                const text = typeof task === 'object' ? task.text : task;
                const url = typeof task === 'object' ? task.url : null;
                
                return (
                  <label key={key} className={clsx('quest-task', checked && 'checked')}>
                    <input 
                      type="checkbox" 
                      checked={checked} 
                      onChange={(e) => updateTask(dayIndex, key, e.target.checked)} 
                    />
                    <span className="quest-task-text">{text}</span>
                    {url && (
                      <a href={url} target="_blank" rel="noopener noreferrer" className="quest-task-link" onClick={e => e.stopPropagation()}>
                        🔗 LeetCode
                      </a>
                    )}
                  </label>
                );
              })}
            </div>
          ))}
        </div>

        <div className="notes-block">
          <h4>📝 Notes</h4>
          <textarea 
            value={localNote}
            onChange={(e) => setLocalNote(e.target.value)}
            onBlur={handleSaveNote}
            placeholder="Write down anything you learned, struggled with, or want to revisit..."
          />
        </div>

        <div className="mission-actions">
          {state.completed[dayIndex] ? (
            <motion.span 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="completed-tag"
            >
              ✔ COMPLETED
            </motion.span>
          ) : (
            <button className="btn-primary complete-day-btn" onClick={handleCompleteDay}>
              ✔ Complete Day
            </button>
          )}
        </div>
      </div>
    </motion.section>
  );
};
