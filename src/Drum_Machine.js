import React from "react";
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

const soundsName = {
    kit1: "808 Kit",
    kit2: "Pop Kit"
};

const soundsGroup = {
    kit1: kit808,
    kit2: popKit
}

const Triggers = ({ play, sample: { key, url, keyCode } }) => {

    const handleKeydown = (event) => {
        if(event.keyCode === keyCode){
            play(key)
        }
    }

    React.useEffect(() => {
        document.addEventListener("keydown", handleKeydown)
    }, [])

    return (
        <button className="drum-pad" onClick={() => play(key)}> 
            <audio className="clip" id={key} src={url} />
            {key}
        </button>
    )
}
 
const Keyboard = ({ play, kits }) => {
    return kits.map((sample) => <Triggers play={play} sample={sample} />)
}

const ChangeKitController = ({ changeKit }) => (
    <div className="kitController">
        <button onClick={changeKit}>Change Drum Kit</button>
    </div>
)

const Drum_Machine = () => {
    const [kitType, setKitType] = React.useState("808 Kit"); //Detta är vårt startkit
    const [kits, setKit] = React.useState(soundsGroup[kitType])

    const play = (key) => {
        const audio = document.getElementById(key)
        audio.currentTime = 0;
        audio.play()
    }

    const changeKit = () => {
        if(kitType === "808 Kit"){
            setKitType("Pop Kit")
            console.log("Changing to Pop-Kit")
            setKit(soundsGroup.kit1)
        } else {
            setKitType("808 Kit")
            console.log("Changing to 808-Kit")
            setKit(soundsGroup.kit2)
        }
    }
//Problem dår "kits"-variabeln inte vill vara dynamisk på rad 157, just nu hårdkodar jag in kit808 eller PopKit för att byta ljud
    return <div id="drum_machine"> 
        <Keyboard play={play} kits={kit808} /> 
        <ChangeKitController changeKit={changeKit} />
    </div>
}

export default Drum_Machine;

//ReactDOM.render(<Drum_Machine />, document.getElementById("app"));
