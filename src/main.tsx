import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ColorModeContextProvider from './themes/ColorModeContext';
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ColorModeContextProvider>
      <CssBaseline />
      <App />
    </ColorModeContextProvider>
  </React.StrictMode>,
);
