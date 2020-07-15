import React, { Component } from 'react'

export default class Navbar extends Component {
    
    render() {
        const navStyle = {
            width: '100%'
        };
        return (
            <nav style={navStyle} className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand" href="/">
                    <img alt="logoIcon" width="100" src={require("./images/logo.png")}/>
                </a>          
            </nav>
        )
    }
}
