import React from 'react';

const CloseIcon = ({ onClick }) => {
    
    const style = {
        backgroundColor: '#FF5C97',
        borderRadius: '50%',
        height: '30px',
        border: '3px solid black',
        textAlign: 'center',
        verticalAlign: 'middle',
        lineHeight: '28px',
        boxSizing: 'border-box',
        color: 'black',
        fontWeight: 900,
        zIndex: 100
    }

    return <div style={style} onClick={onClick}>✕</div>
}

export default CloseIcon;