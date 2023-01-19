import React from 'react';

const CCIcon = ({ id, color, onClick }) => {
    const style = color ? {color} : {};
    return <i id={id} style={style} onClick={onClick} className='fa-regular fa-closed-captioning'></i>;
}

export default CCIcon;