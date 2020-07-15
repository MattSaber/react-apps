import React, { Component } from 'react';

class TemperatureForm extends Component {   

   render() {
    const { onChangeC, onChangeF, verify, onReset } = this.props;
    const { valueC, valueF } = this.props;
    return(
        <div>
            <label className="ml-4">C°
                <input className="form-control" onChange={onChangeC} type="text" value={valueC}/>
            </label><br/>
            <label className="ml-4">F°
                <input  className="form-control" onChange={onChangeF} type="text" value={valueF}/>
            </label><br/>
            <div className="mt-3">
                <button onClick={verify} className="btn btn-primary ml-4" >Verifica</button>
                <button onClick={onReset} className="btn btn-primary ml-4">Reset</button>
            </div>
        </div>
    );
   }
}

export default TemperatureForm;

