import React, { useState } from 'react';
import { Component } from 'react';
import './App.css';

//components
import DrumMachine from './drumMachine';
import Metronome from './Metronome';
import Tempos from './components/tempos';

//Detta är min root component!
function App() {

  let audio = new Audio('/Metronome.mp3')

  const metronome = () => {
    audio.play()
  }

  return (

    <div className="App">
      <header className="App-header">
        <h1 className="app-title">I am Drum Machine [┐∵]┘</h1>

        < div id="Metronome" >
      <button onClick={metronome}>Play</button>
        </div >

        <p>
          En tempo-baserad trummaskin
        </p>
        <DrumMachine/>
        <Metronome/>
        <Tempos/>
      </header>
    </div>
  );
}

export default App;