import React from "react";
import './drumMachine.css';

import Kick1 from './808_kit/Kick.wav';
import Snare1 from './808_kit/Clap.wav';
import Clap1 from './808_kit/Snare.wav';
import HHC1 from './808_kit/HH_Closed.wav';
import HHO1 from './808_kit/HH_Open.wav';
import Perc1 from './808_kit/Perc.wav';
import Kick2 from './Pop_kit/Kick.wav';
import Snare2 from './Pop_kit/Clap.wav';
import Clap2 from './Pop_kit/Snare.wav';
import HHC2 from './Pop_kit/HH_Closed.wav';
import HHO2 from './Pop_kit/HH_Open.wav';
import Perc2 from './Pop_kit/Perc.wav'; 

/** Min root-component */

//Skapa en dynamisk variabel som hämtar data för dessa kit
const kit808 = [
    {
        keyCode: 81,
        key: 'Q',
        id: '808-BD',
        url: Kick1
    },
    {
        keyCode: 87,
        key: 'W',
        id: '808-SN',
        url: Snare1
    },
    {
        keyCode: 69,
        key: 'E',
        id: '808-CL',
        url: Clap1
    },
    {
        keyCode: 65,
        key: 'A',
        id: '808-HHC',
        url: HHC1
    },
    {
        keyCode: 83,
        key: 'S',
        id: '808-HHO',
        url: HHO1
    },
    {
        keyCode: 68,
        key: 'D',
        id: '808-PRC',
        url: Perc1
    }
];

const popKit = [
    {
        keyCode: 81,
        key: 'Q',
        id: 'Pop-BD',
        url: Kick2
    },
    {
        keyCode: 87,
        key: 'W',
        id: 'Pop-SN',
        url: Snare2
    },
    {
        keyCode: 69,
        key: 'E',
        id: 'Pop-CL',
        url: Clap2
    },
    {
        keyCode: 65,
        key: 'A',
        id: 'Pop-HHC',
        url: HHC2
    },
    {
        keyCode: 83,
        key: 'S',
        id: 'Pop-HHO',
        url: HHO2
    },
    {
        keyCode: 68,
        key: 'D',
        id: 'Pop-PRC',
        url: Perc2
    }
];

const kitName = {
    kit1: "808 Kit",
    kit2: "Pop Kit"
};

const kitGroup = {
    kit1: kit808,
    kit2: popKit
}

const Triggers = ({ play, deactivateAudio, sample: { id, key, url, keyCode } }) => { //Trigger hook som låter ljud provspelas med knapptryck

    const pressKey = (event) => {
        if(keyCode === event.keyCode){
            const audio = document.getElementById(key);
            play(key, id);
            deactivateAudio(audio)
        }
    }

    React.useEffect(() => { 
        document.addEventListener("keydown", pressKey)
    }, [])

    return (
        <button value="test" id={keyCode} className="drum-pad" onClick={() => play(key, id)}> 
            <audio className="clip" id={key} src={url} />
            {key}
        </button>
    );
}

const Keyboard = ({ play, kits, power, deactivateAudio }) => (
    <div className="keyboard">
    {power 
      ? kits.map((sample) => <Triggers key={sample.id} sample={sample} play={play} deactivateAudio={deactivateAudio} />)
      : kits.map((sample) => <Triggers sample={{...sample, url: "#" }} play={play} deactivateAudio={deactivateAudio} />)        
    }
  </div>
);

const DrumController = ({ stop, name, power, volume, handleVolumeChange, changeKit }) => (
    <div className="controller">
      <button onClick={stop}>Turn Power {power ? 'OFF' : 'ON'}</button>
      <h2>Volume: %{Math.round(volume * 100)}</h2>
      <input
        max="1"
        min="0"
        step='0.01'
        type="range"
        value={volume}
        onChange={handleVolumeChange}
        />
      <h2 id="display" >{name}</h2>
      <button onClick={changeKit}>Change Sounds Group</button>
    </div>
  );
  
const DrumMachine = () => {
    const [power, setPower] = React.useState(true);
    const [volume, setVolume] = React.useState(1);
    const [soundType, setSoundType] = React.useState("kit1"); //Detta är vårt startkit
    const [soundName, setSoundName] = React.useState("");
    const [kits, setKit] = React.useState(kitGroup[soundType])  

    const deactivateAudio = (audio) => {
        setTimeout(() => {
          audio.parentElement.style.backgroundColor = "#ffffff"
          audio.parentElement.style.color = "#000000"
        }, 300)
      }

    const play = (key, sample) => {
        setSoundName(sample)
        const audio = document.getElementById(key)
        audio.currentTime = 0;
        audio.play()
        deactivateAudio(audio)
    }

    const stop = () => {
        setPower(!power)
     }

    const changeKit = () => {
        setSoundName("")
        if(soundType === "kit1"){
            setSoundType("kit2")
            console.log("Changing to Pop-Kit") 
            setKit(kitGroup.kit2)
        } else {
            setSoundType("kit1")
            console.log("Changing to 808-Kit")
            setKit(kitGroup.kit1)
        }
    }

    const handleVolumeChange = event => {
        setVolume(event.target.value)
    }

    const setKeyVolume = () => {
        const audioes = kits.map(sample => document.getElementById(sample.key)); //kits är en dynamisk variabel som tidigare var hårdkodad
        audioes.forEach(audio => {
          if(audio) {
            audio.volume = volume;
          }
        }) 
      }

    return (
        <div className="drum_machine" id="drum_machine"> 
            {setKeyVolume()}
            <div className="wrapper">
                <Keyboard play={play} kits={kits} power={power} deactivateAudio={deactivateAudio} 
/> 
                <DrumController 
                stop={stop}
                power={power}
                volume={volume}
                handleVolumeChange={handleVolumeChange} 
                changeKit={changeKit} 
                name={soundName || kitName[soundType]} />
            </div>
        </div>
  )
};

export default DrumMachine;