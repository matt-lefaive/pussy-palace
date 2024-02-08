import React from 'react';
import '../styles/sticky-submenu.css';

const StickySubmenu = ({ items }) => {
    return (
        <div className='sticky-submenu'>
            {items && items.map((item, i) => <a href={item.href}>{item.name}</a>)}
        </div>
    )
}

export default StickySubmenu;