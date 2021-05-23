import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Global } from './GlobalStyles';
import { DarkModeProvider } from './lib/darkModeContext';

ReactDOM.render(
  <React.StrictMode>
    <DarkModeProvider>
      <Global />
      <App />
    </DarkModeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
