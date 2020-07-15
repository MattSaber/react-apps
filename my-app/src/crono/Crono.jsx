import React, { Component } from 'react'

export default class Crono extends Component {

    render() {
        const {onStartStop, onResetTake, isRunning, cents, seconds} = this.props;
        const cronoState = isRunning ? 'Stop' : 'Start';
        const takeRun = isRunning ? 'Giro' : 'Reset';
        const newCents = (cents < 10 ? '0' : '') + cents;
        const buttonState = 'mr-3 btn btn-' + (isRunning ? 'info' : 'danger');
        const labelStyle = {
            fontWeight: 'bold',
            fontSize: '25pt'
        };
        return (
            <div>
                <div className="col-12 mt-3">
                    <label className="mt-2" style={labelStyle}>{seconds}:{newCents}</label>
                </div>
                <div className="col-12 mt-5">
                    <button onClick={onResetTake} className={buttonState}>{takeRun}</button>
                    <button onClick={onStartStop} className="btn btn-success">{cronoState}</button>
                </div>
            </div>
        )
    }
}
