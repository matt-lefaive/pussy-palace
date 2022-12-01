import React from 'react';

const PauseIcon = ({ color }) => {
    const style = color ? {color} : {};
    return <i style={style} className='fa-solid fa-pause'></i>;
}

export default PauseIcon;