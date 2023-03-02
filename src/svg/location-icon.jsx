import React from 'react';

const LocationIcon = ({ color, onClick }) => {
    const style = color ? {color} : {};
    return <i onClick={onClick} style={style} className='fa-solid fa-location-dot'></i>;
}

export default LocationIcon;