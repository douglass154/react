import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App.jsx';
import './index.css';

import { CounterContextProvider } from './context/CounterContext.jsx';
import { TitleColorContextProvider } from './context/TitleColorContext.jsx';

createRoot(document.getElementById('root')).render(
   <StrictMode>
      {/* 2 - criando Provider */}
      <CounterContextProvider>
         <TitleColorContextProvider>
            <App />
         </TitleColorContextProvider>
      </CounterContextProvider>
   </StrictMode>
);
