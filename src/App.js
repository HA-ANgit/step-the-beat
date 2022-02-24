import logo from './logo.svg';
import './App.css';

function App() {

  let audio = new Audio('/Metronome.mp3')

  const metronome = () => {
    audio.play()
  }

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="app-title">I am Drum Machine [┐∵]┘</h1>

        < div id="Metronome" >
      <button onClick={metronome}>Play</button>
        </div >

        <p>
          En tempo-baserad trummaskin
        </p>
        <a
          className="app-link"
          href="https://ha-an.se"
          target="_blank"
        >
          Link to HA-AN
        </a>
      </header>
    </div>
  );
}

export default App;
