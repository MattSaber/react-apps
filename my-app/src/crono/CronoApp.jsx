import React, { Component } from 'react'
import Container from './Container'
import Crono from './Crono'
import Report from './Report'
import ReportContainer from './ReportContainer'
import BackButton from '../components/BackButton'

export default class CronoApp extends Component {

    state = {
        seconds: 0,
        cents: 0,
        isRunning: false,
        takeList: []
    }

    constructor() {
        super();
        this.handleStartClick = this.handleStartClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.doTick = this.doTick.bind(this);
    }

    handleStartClick() {
        if (this.state.isRunning) {
            this.setState({isRunning: false});
            clearInterval(this.tickInterval);
        } else {
            this.setState({isRunning: true});
            this.tickInterval = setInterval(this.doTick, 10);
        }
    }

    handleResetClick() {
        if (!this.state.isRunning) {
            clearInterval(this.tickInterval);
            this.setState({
                seconds: 0,
                cents: 0,
                isRunning: false,
                takeList: []
            });
        } else {
            const takeList = this.state.takeList;
            const newCents = (this.state.cents < 10 ? '0' : '') + this.state.cents.toString();
            takeList.push(this.state.seconds.toString() + ':' + newCents);
            if (takeList.length === 15) {
                takeList.shift();
            }
            this.setState({
                takeList
            });
        }
    }

    doTick() {
        let cents = this.state.cents + 1;
        let seconds = this.state.seconds;
        if(cents === 100) {
            cents = 0;
            seconds += 1;
        }
        this.setState({seconds, cents});
    }

    render() {
        const titleStyle = {
            fontWeight: 'bold',
            fontSize: '20pt'
        };
        return (
            <div>
                <div className="col-12 text-center mt-5">
                    <label style={titleStyle}>CRONOMETRO</label>
                </div>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4 text-center">
                        <Container>
                            <div className="col-12">
                                <Crono 
                                    onStartStop={this.handleStartClick} 
                                    onResetTake={this.handleResetClick}
                                    cents={this.state.cents}
                                    seconds={this.state.seconds}
                                    isRunning={this.state.isRunning}
                                />
                            </div>
                        </Container>
                        <div className="mt-4">
                            <ReportContainer takeList={this.state.takeList}>
                                <Report list={this.state.takeList}/>
                            </ReportContainer>
                            <div className="mt-3">
                                <BackButton/>
                            </div>
                        </div>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        )
    }
}
