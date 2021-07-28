import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import { AppContextProvider } from './core/app-context';

// TODO: 1. read documentation on how to use context 2. create Button Components as discussed -> single responsible (about 40 min)
ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
