import React, { Component } from 'react';
import CounterComponent from './CounterComponent';

class Counters extends Component {
   
    render() {
        const { onReset, counters, onDelete, onIncrement } = this.props;
        return (
            <div>
                <button onClick={this.props.onResetAll} className="btn btn-primary btn-sm m-2">Reset</button>
                {counters.map(elem => (
                    <CounterComponent 
                        key={elem.id}
                        onIncrement={onIncrement}
                        onDelete={onDelete} 
                        onResetCounter={onReset} 
                        counter={elem}>     
                    </CounterComponent>
                    ))}
            </div>
        );
    }
}

export default Counters;