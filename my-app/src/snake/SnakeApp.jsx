import React, { Component } from 'react'
import Container from './Container'
import Score from './Score';
import BackButton from '../components/BackButton';

export default class SnakeApp extends Component {

    state = {
        snake: 1,
        positionX: [0],
        positionY: [0],
        fruits: [],
        direction: 'down',
        isRunning: false
    }

    componentDidMount() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillStyle='green';
        ctx.fillRect(this.state.positionX, this.state.positionY, 40, 40);
        document.addEventListener("keypress", this.logKey);
    }

    logKey = (e) => {
        switch(e.key) {
            case 'a': this.setState({direction: 'left'});
                break;
            case 'w': this.setState({direction: 'up'});
                break;
            case 's': this.setState({direction: 'down'});
                break;
            case ' ': this.handleStartStopClick(); 
                break;
            default: this.setState({direction: 'right'});
                break;
        }
    }

    handleStartStopClick = () => {
        if (this.state.isRunning) {
            this.setState({isRunning: false});
            clearInterval(this.tickInterval);
        } else {
            this.tickInterval = setInterval(this.move, 150);
            this.setState({isRunning: true});
        }
    }

    move = () => {
        switch(this.state.direction) {
            case 'down': this.goDown();
                break;
            case 'up': this.goUp();
                break;
            case 'right': this.goRight();
                break;
            default: this.goLeft();
                break;
        } 
    }

    goDown = () => {
        const x = this.state.positionX[0];
        const y = this.state.positionY[0];
        let newPos = [y + 20];
        if (newPos[0] >= 500) {
            newPos = [0];
        } 
        const ctx = this.refs.canvas.getContext('2d');
        this.eatFruit(x, newPos);
        ctx.clearRect(x, y, 40, 40);
        ctx.fillRect(x, newPos, 40, 40);
        this.setState({
            positionY: newPos
        });
        this.generateFruit();
    }

    goUp = () => {
        const x = this.state.positionX[0];
        const y = this.state.positionY[0];
        let newPos = [y - 20];
        if (newPos[0] < 0) {
            newPos = [500];
        } 
        const ctx = this.refs.canvas.getContext('2d');
        this.eatFruit(x, newPos);
        ctx.clearRect(x, y, 40, 40);
        ctx.fillRect(x, newPos, 40, 40);
        this.setState({
            positionY: newPos
        });
        this.generateFruit();
    }

    goRight = () => {
        const x = this.state.positionX[0];
        const y = this.state.positionY[0];
        let newPos = [x + 20];
        if (newPos[0] >= 500) {
            newPos = [0];
        } 
        const ctx = this.refs.canvas.getContext('2d');
        this.eatFruit(newPos, y);
        ctx.clearRect(x, y, 40, 40);
        ctx.fillRect(newPos, y, 40, 40);
        this.setState({
            positionX: newPos
        });
        this.generateFruit();
        
    }

    goLeft = () => {
        const x = this.state.positionX[0];
        const y = this.state.positionY[0];
        let newPos = [x - 20];
        if (newPos[0] < 0) {
            newPos = [500];
        } 
        const ctx = this.refs.canvas.getContext('2d');
        this.eatFruit(newPos, y);
        ctx.clearRect(x, y, 40, 40);
        ctx.fillRect(newPos, y, 40, 40);
        this.setState({
            positionX: newPos
        });
        this.generateFruit();
        
    }

    changeDown = () => {
        this.setState({direction: 'down'});
    }

    changeLeft = () => {
        this.setState({direction: 'left'});
    }

    changeRight = () => {
        this.setState({direction: 'right'});
    }

    changeUp = () => {
        this.setState({direction: 'up'});
    }

    generateFruit = () => {
        if (this.state.fruits.length === 0) {
            let randomX = Math.floor(Math.random() * 30);
            let randomY = Math.floor(Math.random() * 30);
            if (randomX <= 12 && randomY <= 12) {
                randomX *= 40;
                randomY *= 40;
                const ctx = this.refs.canvas.getContext('2d');
                ctx.fillRect(randomX, randomY, 30, 30);
                this.state.fruits.push(randomX);
                this.state.fruits.push(randomY);
            }
        }
    }

    eatFruit = (x, y) => {       
        if (this.state.fruits[0] == x && this.state.fruits[1] == y) {
            const snake = this.state.snake + 1;
            const positionX = this.state.positionX;
            const positionY = this.state.positionY;
            console.log(positionX);
            positionX.push(parseInt(x + 40));
            positionY.push(parseInt(y + 40));
            this.setState({
                fruits: [],
                snake,
                positionX,
                positionY
            });
        }
    }

    render() {
        const startStopLabel = this.state.isRunning ? 'Stop' : 'Start';
        return (
            <div>
                <Score score={this.state.snake}/>
                <Container>
                    <canvas ref="canvas" width={600} height={600}/>
                </Container>
                <div className="col-12 text-center mt-3">
                    <button onClick={this.handleStartStopClick} className="mr-3 btn btn-warning">
                        {startStopLabel}
                    </button>
                    <BackButton/>        
                </div>
            </div>
        )
    }
}
