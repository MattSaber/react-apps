import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        var style = {
            borderTop: "1px solid grey",
            backgroundColor: '#0d1a32',
            color: 'white',
            textAlign: "center",
            boxSizing: 'borderBox',
            padding: "20px",
            position: "fixed",
            left: "0",
            bottom: "0",
            height: "100px",
            width: "100%",
        };
        return (
            <div style={style}>
                Questo è il footer.
            </div>
        )
    }
}
