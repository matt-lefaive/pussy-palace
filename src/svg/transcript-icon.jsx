import React from 'react';

const TranscriptIcon = ({ color, onClick }) => {
    const style = color ? {color} : {};
    return <i onClick={onClick} style={style} className='fa-regular fa-file-lines'></i>;
}

export default TranscriptIcon;