import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Web vitals reporting has been disabled because the optional "web-vitals"
// dependency may not always be installed in deployment environments. If you
// want to re-enable performance measurements, reinstall the dependency and
// invoke the reporter here.
