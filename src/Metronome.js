import React from "react";
import './Metronome.css';
import metronome1 from './Metronome.mp3';
import metronome2 from './Metronome2.mp3';

class Metronome extends React.Component {
    constructor (props) {
        super (props)

        this.state = {
            playing : false,
            count : 0,
            bpm : 100,
            beatsPerMeasure: 4
        }

        this.metronome1 = new Audio(metronome1)
        this.metronome2 = new Audio(metronome2)
    }

    handleBPMChange = event => {
        const bpm = event.target.value

        if (this.state.playing) {
            //Stoppar nuvarande räknaren
            clearInterval(this.timer)
            this.timer = setInterval(this.playClick, (60/ bpm) * 1000);

            //sätter nytt target BPM, och nollställer räknaren
            this.setState({
                count: 0,
                bpm
            })
        } else {
            //Annars, enbart uppdatera bpm
            this.setState({bpm});
        }
    }

    startStop = () => {
        if(this.state.playing) {
            //Stannar nuvarande räknaren
            clearInterval(this.timer)
            this.setState({
                playing: false
            });
        } else {
            //Startar timern med nuvarande BPM
            this.timer = setInterval(this.playClick(60 / this.state.bpm) * 1000);
            this.setState(
                {
                    //Börjar spela klicket direkt (efter setState)
                    count: 0,
                    playing: true
                },
                this.playClick
            );
        }
    }

    playClick = () => {
        const {count, beatsPerMeasure } = this.state;
        var counting = 1;

        //Första klicket kommer låta annorlunda än dom andra
        if (count % beatsPerMeasure === 0) {
            this.metronome1.play();
            console.log(counting + "st beat");
        } else {
            this.metronome2.play();
            counting ++;
            console.log(counting + " beat");
        }

        this.setState(state => ({
            count: (state.count + 1) % state.beatsPerMeasure
        }));
    }

    render() {
        const { playing, bpm } = this.state;
        return (
            <div className="metronome">
                <div className="bpm-slider">
                    <div>{bpm} STEPS / MINUTE</div>
                    <input 
                        type="range" 
                        min="30" 
                        max="140" 
                        value={bpm}
                        onChange={this.handleBPMChange} 
                    />
                </div>
                <button onClick={this.startStop}>{playing ? "Stop" : "Start"}</button>
            </div>
        );
    }
}

export default Metronome;