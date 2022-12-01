import React from 'react';

const CCIcon = ({ color }) => {
    const style = color ? {color} : {};
    return <i style={style} className='fa-regular fa-closed-captioning'></i>;
}

export default CCIcon;