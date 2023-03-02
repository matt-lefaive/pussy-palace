import React from 'react';

const CloseIcon = ({ color, backgroundColor, fontSize, border, borderRadius, onClick }) => {
    const style = {
        color: color ? color : 'white',
        backgroundColor: backgroundColor ? backgroundColor : 'rgba(0,0,0,0)',
        border: border ? border : '0px solid black',
        borderRadius: borderRadius ? borderRadius : '0',
        fontSize: fontSize ? fontSize : '16px'
    }
    return <i onClick={onClick} style={style} className='fa-regular fa-circle-xmark'></i>;
}

export default CloseIcon;