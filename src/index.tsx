import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './app';

const root = ReactDOM.createRoot(document.getElementsByTagName('body')[0]);
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
