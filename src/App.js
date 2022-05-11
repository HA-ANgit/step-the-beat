import React, { useState } from 'react';
import { Component } from 'react';
import './App.css';

//components
import NavBar from './components/navbar.jsx';
import Footer from './components/footer';
import DrumMachine from './drumMachine';
import Metronome from './Metronome';
import Tempos from './components/tempos';
import CreateUserPage from './pages/CreateUserPage';

//Detta är min root component!
class App extends Component {

  state = {   //Lift the state from all the components! Incl Metronome & Tempobar + Drumsection
    tempos : 
    [
        { id: 1, bpm: 60, title: 'minute' },
        { id: 2, bpm: 85, title: 'current bpm' },
        { id: 3, bpm: 110, title: 'accelerated bpm' },
        { id: 4, bpm: 128, title: 'target bpm' },
    ] 
  };

  constructor (props) {        //Test - Reacthook mount - Constructorn äre rätt ställe att inita props i klassen, denna kallas en gång
    super(props);
    console.log("App - Constructor", this.props);
    //this.state = this.props.something;
  }

  componentDidMount() { //Test - Lifecyckle hook Mount
    //Ajax call till ex en server
    console.log("App - Monted");
    //this.setState({ tempos })
  }

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
    console.log("App - rendered");

    return (
      <div className='container'>
        <header className="App-header">
          <NavBar activeBPM={this.state.tempos.filter(c => c.bpm > 40).length}/>
        </header>
        <main className='container'>
        <h1 className="app-title">I am Drum Machine [┐∵]┘</h1>
            <p>
              En tempo-baserad trummaskin som är {this.handleReset.resetClicked ? 'Startad' : 'Avstängd'} {/* If-loop som kikar på state, dock inte uppdateras */}
            </p>
              <DrumMachine/>
              <Metronome targetBPM="Här kommer BPMprops styra vår Metronom som i slutändan blir våran sequencer"/>
              <Tempos tempos={this.state.tempos} onReset={this.handleReset} onStepClick={this.handleClick} onDelete={this.handleDelete}/>
        </main>
        <Footer/>
        <h3>Test av UserPage:</h3>
        <CreateUserPage/>
      </div>
    );
  }
}

export default App;