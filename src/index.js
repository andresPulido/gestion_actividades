import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import { App } from './App';
//ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));


document.body.style.margin = 0;
document.body.style.height = '100%';  //{ margin: 0, height: '100%', overflow: 'hidden' };
document.body.style.overflow = 'hidden';
createRoot(document.getElementById('root')).render(<App />); // <React.StrictMode><App /></React.StrictMode>