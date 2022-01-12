import React from 'react';
import ReactDOM from 'react-dom';
// Provider
import mainProvider from './context/mainProvider';
// Components
import App from './components/App';
// Style
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <mainProvider>
      <App />
    </mainProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
