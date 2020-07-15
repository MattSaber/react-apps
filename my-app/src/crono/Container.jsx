import React from 'react';

function Container(props) {
    return (
        <div style={{
            borderRadius: '25px',
            width: '210px',
            height: '170px',
            margin: '0 0 0 33%',
            boxShadow: '0 3px 7px 1px',
            backgroundColor: 'lightblue'
        }} className={'Container Container'}>
            {props.children}
        </div>
    );
}

export default Container; 