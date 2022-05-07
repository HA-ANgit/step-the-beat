import React, { useState } from 'react';
import { Component } from 'react';
import './App.css';

//components
import NavBar from './components/navbar.jsx';
import Footer from './components/footer';
import DrumMachine from './drumMachine';
import Metronome from './Metronome';
import Tempos from './components/tempos';

//Detta är min root component!
class App extends Component {

  state = { 
    tempos : 
    [
        { id: 1, bpm: 60, title: 'minute'},
        { id: 2, bpm: 85, title: 'current bpm'},
        { id: 3, bpm: 110, title: 'accelerated bpm'},
        { id: 4, bpm: 128, title: 'target bpm'},
    ] 
  };

  handleClick = (tempo) => {
      const tempos = [...this.state.tempos]; //Detta är ReactHack no1 som klonar och uppdaterar min state array
      const index = tempos.indexOf(tempo); //Detta definierar vilket object i vår array som har skickats in i metoden
      tempos[index] = {...tempo}; //Här kopierar vi värdet i definierad index från tempo
      tempos[index].bpm++;    //Här ökar vi värdet på vald prop, i detta fallet ++ på bpm
      this.setState({ tempos }); //Här uppdaterar vi vårt state och byter ut till den nya arrayen
      console.log(this.state.tempos[index]);
  };

  handleReset = () => {
      const tempos = this.state.tempos.map( c =>{
          c.bpm = 0;
          c.resetClicked = true;
          return c;
      });
      this.setState({ tempos });
  };

  handleDelete = (tempoId) => { //Min metod som handerar en reset av ett state
      console.log("event handler called", tempoId);
      const currentTempos = this.state.tempos.filter(c => c.id !== tempoId); //Går igenom hela vår array och kollar vilket ID som inte stämmer
      this.setState({ tempos : currentTempos });
  };

  render(){
    return (
      <React.Fragment>
        <header className="App-header">
          <NavBar activeBPM={this.state.tempos.filter(c => c.bpm > 40).length}/>
        </header>
        <main className='container'>
        <h1 className="app-title">I am Drum Machine [┐∵]┘</h1>
            <p>
              En tempo-baserad trummaskin
            </p>
              <DrumMachine/>
              <Metronome/>
              <Tempos tempos={this.state.tempos} onReset={this.handleReset} onStepClick={this.handleClick} onDelete={this.handleDelete}/>
        </main>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;