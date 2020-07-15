import React from 'react';

function Container(props) {
    return (
        <div style={{
            borderStyle: 'solid',
            borderColor: 'black',
            borderWidth: '5px',
            width: '600px',
            height: '600px',
            margin: '0 0 0 34%',
            padding: '20px',
            boxShadow: '0 3px 7px 1px',
            borderRadius: '20px',
            backgroundColor: '#b9d9c1'
        }} className={'Container Container'}>
            {props.children}
        </div>
    );
}

export default Container; 