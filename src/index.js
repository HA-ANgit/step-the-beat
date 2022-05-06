import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Metronome from './Metronome';
import Drum_Machine from './Drum_Machine';


ReactDOM.render(
  /** App blir min root-component */
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); 

<div id="drum_machine"></div>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
