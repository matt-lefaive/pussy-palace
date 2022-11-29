import React from 'react';

const VolumeIcon = ({ color }) => {
    const style = color ? {color} : {};
    return <i style={style} className='fa-solid fa-volume-low'></i>;
}

export default VolumeIcon;