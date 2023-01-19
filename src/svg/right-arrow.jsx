import React from 'react';

const RightArrowIcon = ({ color }) => {
    const style = color ? {color} : {};
    return <i style={style} className='fa-solid fa-right-long'></i>;
}

export default RightArrowIcon;