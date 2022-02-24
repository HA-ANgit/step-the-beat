import React from "react";
import '.Metronome.css';

import metronomeSample from 'public/drum_kit';

class Metronome extends React.Component {
    constructor (props) {
        super (props)

        this.state ={
            playing : false,
            count : 0,
            bpm : 100,
            beatsPerMeasure: 4
        }

        this.metronomeSample = new Audio(metronomeSample)
    }

}