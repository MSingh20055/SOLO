import React, { createContext, useContext, useState, useEffect } from 'react';
import { STORAGE_KEY, ROADMAP, TOTAL_DAYS, RANKS } from '../data/roadmap';

export interface AppState {
  currentDay: number;
  tasksDone: Record<string, boolean>[];
  completed: boolean[];
  notes: Record<number, string>;
  xp: number;
  level: number;
  lastCompletedIndex: number;
  leetcode150Done: Record<string, boolean>;
  sql50Done: Record<string, boolean>;
}

interface SoloSystemContextType {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
  updateTask: (dayIndex: number, taskKey: string, done: boolean) => void;
  updateNote: (dayIndex: number, note: string) => void;
  completeDay: (dayIndex: number) => { xpGained: number; leveledUp: boolean };
  setDay: (dayIndex: number) => void;
  computeStreak: () => number;
  rankForLevel: (level: number) => typeof RANKS[0];
  xpThreshold: (level: number) => number;
  toggleLeetcode150: (name: string) => void;
  toggleSql50: (name: string) => void;
}

const defaultState = (): AppState => ({
  currentDay: 0,
  tasksDone: ROADMAP.map(() => ({})),
  completed: ROADMAP.map(() => false),
  notes: {},
  xp: 0,
  level: 1,
  lastCompletedIndex: -1,
  leetcode150Done: {},
  sql50Done: {},
});

const SoloSystemContext = createContext<SoloSystemContextType | undefined>(undefined);

export const SoloSystemProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      return { ...defaultState(), ...parsed };
    } catch (e) {
      return defaultState();
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const updateTask = (dayIndex: number, taskKey: string, done: boolean) => {
    setState((prev) => {
      const newTasksDone = [...prev.tasksDone];
      newTasksDone[dayIndex] = { ...newTasksDone[dayIndex], [taskKey]: done };
      return { ...prev, tasksDone: newTasksDone };
    });
  };

  const updateNote = (dayIndex: number, note: string) => {
    setState((prev) => ({
      ...prev,
      notes: { ...prev.notes, [dayIndex]: note }
    }));
  };

  const xpThreshold = (level: number) => 500 + (level - 1) * 150;

  const completeDay = (dayIndex: number) => {
    let leveledUp = false;
    const xpGained = 150; // default for completing day
    
    setState((prev) => {
      const newCompleted = [...prev.completed];
      newCompleted[dayIndex] = true;
      
      let newXp = prev.xp + xpGained;
      let newLevel = prev.level;
      
      while (newXp >= xpThreshold(newLevel)) {
        newXp -= xpThreshold(newLevel);
        newLevel++;
        leveledUp = true;
      }
      
      return {
        ...prev,
        completed: newCompleted,
        xp: newXp,
        level: newLevel,
        lastCompletedIndex: dayIndex
      };
    });
    
    return { xpGained, leveledUp };
  };

  const setDay = (dayIndex: number) => {
    if (dayIndex >= 0 && dayIndex < TOTAL_DAYS) {
      setState(prev => ({ ...prev, currentDay: dayIndex }));
    }
  };

  const toggleLeetcode150 = (name: string) => {
    setState(prev => ({
      ...prev,
      leetcode150Done: { ...prev.leetcode150Done, [name]: !prev.leetcode150Done?.[name] }
    }));
  };

  const toggleSql50 = (name: string) => {
    setState(prev => ({
      ...prev,
      sql50Done: { ...prev.sql50Done, [name]: !prev.sql50Done?.[name] }
    }));
  };

  const computeStreak = () => {
    let streak = 0;
    for (let i = 0; i < state.completed.length; i++) {
      if (state.completed[i]) streak++;
      else break;
    }
    return streak;
  };

  const rankForLevel = (level: number) => {
    return RANKS.find(r => level >= r.min && level <= r.max) || RANKS[RANKS.length - 1];
  };

  return (
    <SoloSystemContext.Provider value={{
      state,
      setState,
      updateTask,
      updateNote,
      completeDay,
      setDay,
      computeStreak,
      rankForLevel,
      xpThreshold,
      toggleLeetcode150,
      toggleSql50
    }}>
      {children}
    </SoloSystemContext.Provider>
  );
};

export const useSoloSystem = () => {
  const context = useContext(SoloSystemContext);
  if (!context) throw new Error('useSoloSystem must be used within SoloSystemProvider');
  return context;
};
