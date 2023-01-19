import React from 'react';

const LeftArrowIcon = ({ color }) => {
    const style = color ? {color} : {};
    return <i style={style} className='fa-solid fa-left-long'></i>;
}

export default LeftArrowIcon;