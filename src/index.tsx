import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import { AppContextProvider } from './core/app-context';

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
