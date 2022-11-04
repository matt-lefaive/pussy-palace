import React from 'react';
import Title from './title';

const SideMenu = ({ active }) => {
    return (
        <div class='sidemenu'>
            <Title />
            <a href='/before' class={active === 'before' ? 'active' : ''}>BEFORE THE PALACE</a>
            <a href='/building' class={active === 'building' ? 'active' : ''}>BUILDING THE PALACE</a>
            <a href='/explore' class={active === 'explore' ? 'active' : ''}>EXPLORE THE PALACE</a>
            <a href='/raid' class={active === 'raid' ? 'active' : ''}>RAID ON THE PALACE</a>
            <a href='/after' class={active === 'after' ? 'active' : ''}>AFTER THE PALACE</a>
        </div>
    )
}

export default SideMenu;