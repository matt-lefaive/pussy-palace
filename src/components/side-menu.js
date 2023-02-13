import React from 'react';
import Title from './title';
import CollabLogo from './collab-logo';

const SideMenu = ({ active }) => {
    return (
        <div className='sidemenu'>
            <div style={{height: 'auto', width: '175px'}}>
                <CollabLogo />
            </div>
            <Title />
            <div className='sidemenu-links-wrapper'>
                <a href='/before' class={active === 'before' ? 'active' : ''}>BEFORE THE PALACE</a>
                <a href='/building' class={active === 'building' ? 'active' : ''}>BUILDING THE PALACE</a>
                <a href='/explore/entrance' class={active === 'explore' ? 'active' : ''}>EXPLORE THE PALACE</a>
                <a href='/raid' class={active === 'raid' ? 'active' : ''}>RAID ON THE PALACE</a>
                <a href='/after' class={active === 'after' ? 'active' : ''}>AFTER THE PALACE</a>
                <a href='/credits' class={active === 'credits' ? 'active' : ''}>CREDITS</a>
            </div>
        </div>
    )
}

export default SideMenu;