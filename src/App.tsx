import React from 'react';
import { render } from 'react-dom';
import './App.scss';
import App from './pages/Home';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
