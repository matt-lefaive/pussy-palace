import React from 'react';

const DownCaretIcon = ({ color, onClick }) => {
    const style = color ? {color} : {};
    return <i onClick={onClick} style={style} className='fa-solid fa-caret-down'></i>;
}

export default DownCaretIcon;