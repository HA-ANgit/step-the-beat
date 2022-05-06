import React, { Component } from 'react';


class Counter extends Component {

    state = {
        playing : false,
        count : 40,
        bpm : 100,
        beatsPerMeasure: 4,
        imageUrl: "https://picsum.photos/200"
    }

/*     constructor() {
        super();
        this.stepClick = this.stepClick.bind(this); //Detta reffererar nu till det tidigare sättet att "låsa upp" statet från vår parent Component
    } */

    stepClick = () => {
        this.setState({ count : this.state.count +1 })
    };

//Insert Timer här, som kan delas med nuvarande klick / minut

    render() { 
        return (
        <React.Fragment>
            <span style={ { fontSize : 30, color : 'red' } } className="bpm_low fade_volume">{this.formatCount()}</span>
            <button onClick={this.stepClick} className="button" id="button">stepClick</button>
            <img src={this.state.imageUrl} alt="" />
        </React.Fragment>
        );
    }

    formatCount(){
        const { count } = this.state;
        return count <= 40 ? <p>fade volume</p> : count; //Vi kan även retunera en plain text eller en funktion här!
    }
}
 
export default Counter;