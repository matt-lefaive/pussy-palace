import React from 'react';
import { Link } from 'react-router-dom';
import LeftArrow from '../svg/left-arrow';
import RightArrow from '../svg/right-arrow';
import HomeIcon from '../svg/home-icon';
import MapIcon from '../svg/map-icon';

const NavBar = ({ room }) => {
    
    const rooms = [
        {id: 'entrance', url: '/explore/entrance', text: 'EXIT THE PALACE'},
        {id: 'threshold', url: '/explore/threshold', text: 'TO THE THRESHOLD'},
        {id: 'dance-floor', url: '/explore/dance-floor', text: 'TO THE DANCE FLOOR'},
        {id: 'pool', url: '/explore/pool', text: 'TO THE POOL'},
        {id: 'staircases', url: '/explore/staircases', text: 'TO THE STAIRCASES'},
        {id: 'cat-walk', url: '/explore/cat-walk', text: 'TO THE CAT WALK'},
        {id: 'locker-room', url: '/explore/locker-room', text: 'TO THE LOCKER ROOM'},
        {id: 'group-sex-room', url: '/explore/group-sex-room', text: 'TO THE GROUP SEX ROOM'},
        {id: 'private-rooms', url: '/explore/private-rooms', text: 'TO THE PRIVATE ROOMS'},
        {id: 'photo-booth-temple', url: '/explore/photo-booth-temple', text: 'TO THE PHOTO BOOTH/TEMPLE'},
        {id: 'raid', url: '/raid', text: 'LEARN ABOUT THE RAID'}
    ];

    const nextRoom = rooms[rooms.findIndex(x => x.id === room) + 1];

    const prevRoom = room !== 'entrance' ? rooms[rooms.findIndex(x => x.id === room) - 1] : null;
    
    const showNavBar = room === 'entrance' ? ' hidden' : '';

    const navBarWidth = document.querySelector('.room-container')?.clientWidth - 96 + ' px !important' || 0;

    const floorMapOnClick = () => {
        const floorMap = document.getElementById('floor-map');
        const floorMapBackgroundLayer = document.getElementById('floor-map-background-layer');
        if (floorMap.classList.contains('hidden')) {
            floorMap.className = 'floor-map-container';
            floorMapBackgroundLayer.className = 'floor-map-background-layer';
        } else {
            floorMap.className = 'floor-map-container hidden';
            floorMapBackgroundLayer.className = 'floor-map-background-layer hidden';
        }
    }

    return (
        <div className={'navigation-panel' + showNavBar} style={{width: navBarWidth}}>
            {prevRoom && <Link className='previous-room-button' to={prevRoom.url}><LeftArrow /> {prevRoom.text}</Link>}
            <div className='navigation-menu-buffer'></div>
            <a className='home-button' href='/#skip'>
                <HomeIcon /> Home
            </a>
            <div className='map-button' onClick={floorMapOnClick}>
                <MapIcon /> Map
            </div>
            <div className='navigation-menu-buffer'></div>
            {nextRoom && <Link className='next-room-button' to={nextRoom.url}>{nextRoom.text} <RightArrow /></Link>}
        </div>
    )
}

export default NavBar;