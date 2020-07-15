import React from 'react'

function ReportContainer(props) {
    const containerHeight = (props.takeList.length * 24) + 50;
    const height = containerHeight.toString() + 'px';
    return (
        <div style={{
            borderRadius: '25px',
            width: '210px',
            height: height,
            margin: '0 0 0 33%',
            boxShadow: '0 3px 7px 1px',
            backgroundColor: 'lightblue'
        }} className={'ReportContainer ReportContainer'}>
            {props.children}
        </div>
    );
    
}

export default ReportContainer;
