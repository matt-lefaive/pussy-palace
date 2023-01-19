import React from 'react';

const MapIcon = ({ color }) => {
    const style = color ? {color} : {};
    return <i style={style} className='fa-solid fa-map'></i>;
}

export default MapIcon;