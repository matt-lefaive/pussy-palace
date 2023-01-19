import React from 'react';

const HomeIcon = ({ color }) => {
    const style = color ? {color} : {};
    return <i style={style} className='fa-solid fa-house'></i>;
}

export default HomeIcon;