import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { SoloSystemProvider } from './context/SoloSystemContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SoloSystemProvider>
      <App />
    </SoloSystemProvider>
  </StrictMode>,
);
