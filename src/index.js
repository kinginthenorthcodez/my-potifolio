import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ReactGA from 'react-ga';

const TRACKING_ID = 'UA-254114084-1'; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
