import React, { useState } from 'react';
import { TopNav } from './components/layout/TopNav';
import { Dashboard } from './components/views/Dashboard';
import { motion, AnimatePresence } from 'framer-motion';
import { Mission } from './components/views/Mission';
import { Calendar } from './components/views/Calendar';
import { Stats } from './components/views/Stats';
import { Leetcode150 } from './components/views/Leetcode150';
import { Sql50 } from './components/views/Sql50';

function App() {
  const [currentTab, setTab] = useState('dashboard');

  return (
    <>
      <div className="bg-grid"></div>
      <div className="bg-glow"></div>
      
      <TopNav currentTab={currentTab} setTab={setTab} />
      
      <main>
        <AnimatePresence mode="wait">
          {currentTab === 'dashboard' && <Dashboard key="dashboard" />}
          {currentTab === 'mission' && <Mission key="mission" />}
          {currentTab === 'calendar' && <Calendar key="calendar" />}
          {currentTab === 'stats' && <Stats key="stats" />}
          {currentTab === 'leetcode150' && <Leetcode150 key="leetcode150" />}
          {currentTab === 'sql50' && <Sql50 key="sql50" />}
        </AnimatePresence>
      </main>
    </>
  );
}

export default App;
