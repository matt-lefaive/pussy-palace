import React from 'react';

const TranscriptIcon = ({ color }) => {
    const style = color ? {color} : {};
    return <i style={style} className='fa-regular fa-file-lines'></i>;
}

export default TranscriptIcon;