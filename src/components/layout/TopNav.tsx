import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar as CalendarIcon, Target, LayoutDashboard } from 'lucide-react';
import clsx from 'clsx';
import './layout.css';

interface TopNavProps {
  currentTab: string;
  setTab: (tab: string) => void;
}

export const TopNav: React.FC<TopNavProps> = ({ currentTab, setTab }) => {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'mission', label: 'Mission', icon: Target },
    { id: 'calendar', label: 'Calendar', icon: CalendarIcon },
    { id: 'stats', label: 'Statistics', icon: Trophy },
  ];

  return (
    <header className="topbar">
      <div className="brand">
        <span className="brand-glyph">◈</span>
        <span className="brand-text">SOLO SYSTEM</span>
      </div>
      
      <nav className="tabs">
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setTab(tab.id)}
              className={clsx('tab-btn', isActive && 'active')}
            >
              <Icon size={16} />
              <span>{tab.label}</span>
              {isActive && (
                <motion.div
                  className="tab-indicator"
                  layoutId="activeTab"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </nav>
      
      <div style={{ display: 'flex', gap: '10px' }}>
        <a 
          href="https://docs.google.com/spreadsheets/d/14eT0uVprFkHc-BGHh8_VihNUsZJ5YdV7L1Ix9z3IhKQ/edit?gid=234757707#gid=234757707" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-secondary ach-trigger"
          style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
        >
          📊 DSA Sheet
        </a>
        <button className="btn-secondary ach-trigger">
          🏅 Achievements
        </button>
      </div>
    </header>
  );
};
