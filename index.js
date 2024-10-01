import React from 'react'
import ReactDOM from 'react-dom';
import './index.css'; // Imports the global stylesheet
import App from './App'; // Imports the main App component
import reportWebVitals from './reportWebVitals'; // Optional for measuring app performance

// Rendering the root component (App) into the HTML's root div
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This points to the root div in public/index.html
);

// Optionally, you can measure performance with reportWebVitals
reportWebVitals();
