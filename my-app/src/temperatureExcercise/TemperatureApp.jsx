import React, { Component } from 'react';
import TemperatureForm from './TemperatureForm';
import Container from './Container';
import BackButton from '../components/BackButton';

class TemperatureApp extends Component {

    state = {
        valueC: 0,
        valueF: 32
    }

    constructor() {
        super();
        this.handleReset = this.handleReset.bind(this);
        this.handleOnChangeC = this.handleOnChangeC.bind(this);
        this.handleOnChangeF = this.handleOnChangeF.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleReset() {
        const valueC = 0;
        const valueF = 32;
        this.setState({
            valueC, valueF
        });
    }

    handleOnChangeC(event) {
        const valueC = event.target.value;
        const valueF = (valueC * 9/5) + 32;
        this.setState({
            valueC, valueF
        });
    }

    handleOnChangeF(event) {
        const valueF = event.target.value;
        const valueC = (valueF - 32) * 5/9;
        this.setState({
            valueC, valueF
        });
    }

    handleOnClick() {
        const message = this.state.valueC >= 100 ? 
                        "L'acqua sta bollendo!" : "Non ancora..";
        alert(message);
    }

   render() {
        const titleStyle = {
            fontWeight: 'bold',
            fontSize: '20pt'
        };
    return(
        <div>
            <div className="col-12 text-center mt-5">
                <label style={titleStyle}>CONVERTITORE TEMPERATURA</label>
            </div>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 text-center">
                    <Container colore="blue">
                        <div className="row">
                            <TemperatureForm 
                                onChangeC={this.handleOnChangeC}
                                onChangeF={this.handleOnChangeF}
                                verify={this.handleOnClick}
                                valueC={this.state.valueC}
                                valueF={this.state.valueF}
                                onReset={this.handleReset}
                            />
                        </div>
                    </Container>
                    <div className="mt-3">
                        <BackButton/>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>


    );
   }
}

export default TemperatureApp;

