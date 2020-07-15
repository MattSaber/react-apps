import React from 'react';

function Container(props) {
    return (
        <div style={{
            width: '30%',
            margin: '0 0 0 35%',
            padding: '20px',
            boxShadow: '0 3px 7px 1px',
            borderRadius: '20px',
            backgroundColor: 'lightblue'
        }} className={'Container Container-' + props.colore}>
            {props.children}
        </div>
    );
}

export default Container; 