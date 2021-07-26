import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';

ReactDOM.render(
  //<React.StrictMode> </React.StrictMode>
  // <AppContext> // TODO: 1. read documentation on how to use context 2. create Button Components as discussed -> single responsible (about 40 min)
    <App />,
  // </AppContext>,
  document.getElementById('root')
);
