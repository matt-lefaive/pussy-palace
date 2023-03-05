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
                <a href='/before' className={active === 'before' ? 'active' : ''}>BEFORE THE PALACE</a>
                <a href='/building' className={active === 'building' ? 'active' : ''}>BUILDING THE PALACE</a>
                <a href='/explore/entrance' className={active === 'explore' ? 'active' : ''}>EXPLORE THE PALACE</a>
                <a href='/raid' className={active === 'raid' ? 'active' : ''}>RAID ON THE PALACE</a>
                <a href='/after' className={active === 'after' ? 'active' : ''}>AFTER THE PALACE</a>
                <a href='/credits' className={active === 'credits' ? 'active' : ''}>CREDITS</a>
            </div>
        </div>
    )
}

export default SideMenu;