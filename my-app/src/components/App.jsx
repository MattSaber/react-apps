import React, { Component } from 'react';
import Navbar from './Navbar';
import Counters from './Counters';

class App extends Component {

    state = {
        counters: [
            { id: 1, value: 1 },
            { id: 2, value: 0 },
            { id: 3, value: 1 },
            { id: 4, value: 0 }
        ]
    };
    
    constructor() {
        super();
        this.handleDelete = this.handleDelete.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleResetCounter = this.handleResetCounter.bind(this);
    }
    
    handleIncrement(counter) {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    }
    
    handleResetCounter(counter) {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value = 0;
        this.setState({counters});
    }
    
    
    handleDelete(counterID) {
        const counters = this.state.counters.filter(c => c.id !== counterID);
        this.setState({counters});
    }
    
    handleReset() {
        const counters = this.state.counters.map(elem => {
            elem.value = 0;
            return elem;
        });
        this.setState({counters});
    }
    

   render() {
    return(
        <div>
            <Navbar totalCounters={this.state.counters.filter(elem => elem.value > 0).length}/>
            <main className="container">
                <Counters
                    counters={this.state.counters}
                    onReset={this.handleResetCounter}
                    onIncrement={this.handleIncrement}
                    onDelete={this.handleDelete}
                    onResetAll={this.handleReset}
                />
            </main>
        </div>
    );
   }
}

export default App;

