import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import ColorModeContextProvider from './themes/ColorModeContext';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ColorModeContextProvider>
      <BrowserRouter>
        <CssBaseline />
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ColorModeContextProvider>
  </React.StrictMode>,
);
