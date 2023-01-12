import React from 'react';

const CCIcon = ({ color, onClick }) => {
    const style = color ? {color} : {};
    return <i style={style} onClick={onClick} className='fa-regular fa-closed-captioning'></i>;
}

export default CCIcon;