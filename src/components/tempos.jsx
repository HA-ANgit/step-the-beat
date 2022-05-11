import React, { Component } from 'react';
import Counter from './counter';

class Tempos extends Component {

    render() { 
        console.log("Tempos - rendered"); //Test - För debugging

    const { onReset, onDelete, onStepClick, tempos } = this.props;  //Destructing arguments

        return (
        <div>
             <button onClick={onReset} style={{color : 'orange', fontWeight : 'bold'}}>Reset</button>
             <h2>CURRENT STATE VALUES</h2>
            { tempos.map(tempo => <Counter key={tempo.id} onDelete={onDelete} onStepClick={onStepClick} tempo={tempo} >
                <h4>Title: {tempo.title}</h4> 
            </Counter>)}    
        </div>);
    }
}
 
export default Tempos;