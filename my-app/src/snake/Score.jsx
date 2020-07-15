import React, { Component } from 'react'

export default class Score extends Component {
    render() {
        return (
            <div className="col-12 text-center mt-3">
                <label style={{
                    fontSize: '30pt',
                    fontWeight: 'bold'
                }}>Frutti mangiati: {this.props.score - 1}</label>
            </div>
        )
    }
}
