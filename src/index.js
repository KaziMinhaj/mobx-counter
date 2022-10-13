import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Counter from "./Counter";

const root = ReactDOM.createRoot(document.getElementById('root'));

const counter = new Counter();

root.render(
  <React.StrictMode>
    <App counter = {counter} />
  </React.StrictMode>
);

