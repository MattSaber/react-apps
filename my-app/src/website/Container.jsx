import React from 'react';

function Container(props) {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#0d1a32',
        }} className={'Container Container-' + props.colore}>
            {props.children}
        </div>
    );
}

export default Container; 