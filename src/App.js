import React, { useState } from 'react';
import { Component } from 'react';
import './App.css';

//components
import DrumMachine from './drumMachine';
import Metronome from './Metronome';
import Counter from './components/counter';

//Detta är min root component!
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-title">I am Drum Machine [┐∵]┘</h1>
        <p>
          En tempo-baserad trummaskin
        </p>
        <DrumMachine/>
        <Metronome/>
        <Counter/>
      </header>
    </div>
  );
}

export default App;