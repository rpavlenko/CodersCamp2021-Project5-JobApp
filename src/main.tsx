import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';
import ColorModeContextProvider from './themes/ColorModeContext';
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ColorModeContextProvider>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </ColorModeContextProvider>
  </React.StrictMode>,
);
