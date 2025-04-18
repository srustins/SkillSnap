import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // optional: for global styles
import App from './App'; // THIS is the important line to check!
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

