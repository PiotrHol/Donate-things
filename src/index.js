import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './scss/main.scss';
// eslint-disable-next-line
import app from "./firebase";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);