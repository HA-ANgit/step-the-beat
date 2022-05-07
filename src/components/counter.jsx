import React, { Component } from 'react';


class Counter extends Component {

    state = { //Detta är hårdkodade värden som ej är dynamiska och som bara finns i state just nu.  
        playing : false,
        //bpm : this.props.tempo.bpm, //här plockar state värdet från "bpm-props" i vår array i tempos.
        beatsPerMeasure: 4, 
        imageUrl: "https://picsum.photos/200"
    }

/*     constructor() {
        super();
        this.stepClick = this.stepClick.bind(this); //Detta reffererar nu till det tidigare sättet att "låsa upp" statet från vår parent Component
    } */

    /*stepClick = product => {
        console.log(product);
        this.setState({ bpm : this.state.bpm +1 });
    };*/ //Denna kod behövs inte långre då jag vill helt förlita mina värden på tempos.jsx array-värden


//Insert Timer här, som kan delas med nuvarande klick / minut

    render() { 
        console.log('props', this.props); //Monitor för värdet på samtliga props i console loggen

        return (
        <React.Fragment>
            {this.props.children}
            <span style={ { fontSize : 30, color : 'green' } } className="bpm_low fade_volume">
                {this.formatCount()}
            </span>
            {/* <button onClick={() => this.stepClick(this.stepClick.product)}>stepClick</button> */}
            <button onClick={() => this.props.onStepClick(this.props.tempo)}>stepClick</button>


            <button onClick={() => this.props.onDelete(this.props.tempo.id)} style={{color : 'red'}}>Delete</button>

            <img src={this.state.imageUrl} alt="" />
        </React.Fragment>
        );
    }

    formatCount(){
        const { bpm } = this.props.tempo;
        return bpm <= 40 ? <p style={ { fontSize : 30, color : 'red' } }>fade volume</p> : bpm; // _ : _ if:else-sats. Vi kan även retunera en plain text eller en funktion här!
    }
}
 
export default Counter;