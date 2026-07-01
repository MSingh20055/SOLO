import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar as CalendarIcon, Target, LayoutDashboard, Menu } from 'lucide-react';
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
    { id: 'leetcode150', label: 'Top 150', icon: Target },
    { id: 'sql50', label: 'SQL 50', icon: LayoutDashboard },
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
      
      <button className="btn-secondary ach-trigger">
        🏅 Achievements
      </button>
    </header>
  );
};
