import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './modals.css';

interface BaseModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  onClick?: () => void;
}

const Backdrop: React.FC<BaseModalProps> = ({ children, onClick }: any) => (
  <motion.div
    className="modal-backdrop"
    onClick={onClick}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {children}
  </motion.div>
);

export const LevelUpModal: React.FC<{ isOpen: boolean; level: number; onClose: () => void }> = ({ isOpen, level, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Backdrop onClick={onClose}>
          <motion.div 
            className="modal-content levelup-card"
            onClick={e => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: 'spring', bounce: 0.5 }}
          >
            <div className="levelup-rays"></div>
            <h2>LEVEL UP</h2>
            <p className="levelup-level">LEVEL {level}</p>
            <p className="levelup-sub">A new power awakens within you.</p>
            <button className="btn-primary" onClick={onClose}>Continue</button>
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

export const DayCompleteModal: React.FC<{ isOpen: boolean; dayIndex: number; xp: number; onClose: () => void }> = ({ isOpen, dayIndex, xp, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Backdrop onClick={onClose}>
          <motion.div 
            className="modal-content levelup-card"
            onClick={e => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: 'spring', bounce: 0.5 }}
          >
            <div className="levelup-rays"></div>
            <h2 className="quest-clear">QUEST CLEAR</h2>
            <p className="levelup-sub">Day {dayIndex + 1} Mission Complete</p>
            <p className="xp-earned">+{xp} XP</p>
            <button className="btn-primary" onClick={onClose}>Continue</button>
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};
