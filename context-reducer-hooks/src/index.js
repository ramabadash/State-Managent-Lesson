import React from 'react';
import ReactDOM from 'react-dom';
// Provider
import MainProvider from './context/MainProvider';
// Components
import App from './components/App';
// Style
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
