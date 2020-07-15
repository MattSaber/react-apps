import React, { Component } from 'react';

class CounterComponent extends Component {

    render() {
        console.log(this.props);
        return(
            <div>
                <h4>Counter #{this.props.counter.id}</h4>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">Increment</button>
                <button onClick={() => this.props.onResetCounter(this.props.counter)} className="btn btn-info btn-sm m-2">Reset</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const count = this.props.counter.value;
        return count === 0 ? <h1>Zero</h1> : count;
    }
}

export default CounterComponent;