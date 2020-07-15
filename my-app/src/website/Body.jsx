import React, { Component } from 'react'

export default class Body extends Component {
    render() {
        const titleStyle = {
            fontWeight: 'bold',
            fontSize: '35pt',
            fontStyle: 'italic'
        };
        const style = {
            backgroundColor: '#0d1a32',
            color: 'white',
            textAlign: "center",
            boxSizing: 'borderBox',
            padding: "20px",
            position: "fixed",
            left: "0",
            right: "0",
            height: "100%",
            width: "100%",
        };
        return (
            <div style={style}>
                <div className="row mt-5">
                    <div className="col-12 mt-5"><label style={titleStyle}>LE MIE APP</label></div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <a className='mr-5' href="/siteApp">
                            <img width='200' alt="thermoApp" src={require("./images/logoCV.jpg")}/>
                        </a>
                        <a className="mr-5" href="/chrono">
                            <img width='200' alt="chronoApp" src={require("./images/logoChrono.jpg")}/>
                        </a>
                        <a className="mr-5" href="/snake">
                            <img width='200' alt="snakeApp" src={require("./images/logoSnake.png")}/>
                        </a>
                        <a href="/termo">
                            <img width='200' alt="thermoApp" src={require("./images/logoThermo.png")}/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
