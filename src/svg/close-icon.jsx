import React from 'react';

const CloseIcon = ({ color, onClick }) => {
    const style = color ? {color} : {};
    return <i onClick={onClick} style={style} className='fa-regular fa-circle-xmark'></i>;
}

export default CloseIcon;