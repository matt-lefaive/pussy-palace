import React from 'react';

const MuteIcon = ({ color }) => {
    const style = color ? {color} : {};
    return <i style={style} className='fa-solid fa-volume-xmark'></i>;
}

export default MuteIcon;