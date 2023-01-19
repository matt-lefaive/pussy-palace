import React from 'react';

const TranscriptIcon = ({ id, color, onClick }) => {
    const style = color ? {color} : {};
    return <i id={id} onClick={onClick} style={style} className='fa-regular fa-file-lines'></i>;
}

export default TranscriptIcon;