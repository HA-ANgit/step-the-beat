import React, { useState } from 'react';
import { Component } from 'react';
import './App.css';

//components
import Drum_Machine from './Drum_Machine';
import Metronome from './Metronome';

//Detta är min root component!
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-title">I am Drum Machine [┐∵]┘</h1>
        <p>
          En tempo-baserad trummaskin
        </p>
        <Drum_Machine/>
        <Metronome/>
      </header>
    </div>
  );
}

export default App;