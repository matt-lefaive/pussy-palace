import React from 'react';

const PlayIcon = ({ color }) => {
    const style = color ? {color} : {};
    return <i style={style} className='fa-solid fa-play'></i>;
}

export default PlayIcon;