import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Create a root instance that will render your React application into the HTML element with the ID 'root'.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your application inside a <React.StrictMode> component.
// <React.StrictMode> is a wrapper component that performs various checks and warnings for potential problems in your app.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
