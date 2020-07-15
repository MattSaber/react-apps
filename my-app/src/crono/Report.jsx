import React, { Component } from 'react'

export default class Report extends Component {

    generateList() {
        return this.props.list.map(elem => <li key={elem}>{elem}</li>);
    }

    render() {
        const titleStyle = {
            fontWeight: 'bold',
            fontSize: '15pt'
        };
        const listStyle = {
            listStyle: 'none'
        };
        return (
            <div>
                <label style={titleStyle}>Ultimi 15 giri</label>
                <ul style={listStyle}>
                    {this.generateList()}
                </ul>
            </div>
        )
    }
}
