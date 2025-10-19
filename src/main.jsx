// src/main.jsx
import './index.css'; // ← Pastikan ini ada, atau ganti dengan import tailwind langsung
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);