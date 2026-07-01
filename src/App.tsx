import { useState } from 'react';
import { TopNav } from './components/layout/TopNav';
import { Dashboard } from './components/views/Dashboard';
import { Mission } from './components/views/Mission';
import { Calendar } from './components/views/Calendar';
import { Stats } from './components/views/Stats';
import { SoloSystemProvider } from './context/SoloSystemContext';
import { AnimatePresence } from 'framer-motion';

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
        </AnimatePresence>
      </main>
    </>
  );
}

export default App;
