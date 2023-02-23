import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import CloseIcon from '../svg/close-icon';

import Floor1 from '../svg/Floor1';
import Floor2 from '../svg/Floor2';
import Floor3 from '../svg/Floor3';
import Floor4 from '../svg/Floor4';

const rooms = [
    ['threshold', 'dance-floor', 'pool', 'staircases'],
    ['cat-walk', 'group-sex-room', 'locker-room'],
    ['private-rooms'],
    ['photo-booth-temple']
];


const FloorMap = ({ room }) => {
    const [currentFloor, setCurrentFloor] = useState(() => {
        for (let i = 0; i < rooms.length; i++) if (rooms[i].includes(room)) return i + 1;
        return 1;
    });
    const [hoveredRoom, setHoveredRoom] = useState(null);

    const roomTitleCase = s => {
        if (s === 'the photo booth temple') return 'The Photo Booth/Temple';
        return s.replace(/\w\S*/g, t => {
            return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
        });
    }

    const floorLabelOnClick = e => setCurrentFloor(Number(e.target.dataset.floor));

    const roomNameToDisplay = roomTitleCase(hoveredRoom ? 'The ' + hoveredRoom.replace('-', ' ') : '');

    const dropDowns = [
        <ul className='room-dropdown'>
            <Link to="/explore/threshold">
                <li className={`room-dropdown-li ${room === 'threshold' ? 'pink' : ''}`} data-path='threshold-path'>Threshold</li>
            </Link>
            <Link to="/explore/dance-floor">
                <li className={`room-dropdown-li ${room === 'dance-floor' ? 'pink' : ''}`} data-path='dance-floor-path'>Dance Floor</li>
            </Link>
            <Link to="/explore/pool">
                <li className={`room-dropdown-li ${room === 'pool' ? 'pink' : ''}`} data-path='pool-path'>Pool</li>
            </Link>
            <Link to="/explore/staircases">
                <li className={`room-dropdown-li ${room === 'staircases' ? 'pink' : ''}`} data-path='staircases-path'>Staircases</li>
            </Link>
        </ul>,
        <ul className='room-dropdown'>
            <Link to="/explore/cat-walk">
                <li className={`room-dropdown-li ${room === 'cat-walk' ? 'pink' : ''}`} data-path='cat-walk-path'>Cat Walk</li>
            </Link>
            <Link to="/explore/group-sex-room">
                <li className={`room-dropdown-li ${room === 'group-sex-room' ? 'pink' : ''}`} data-path='group-sex-room-path'>Group Sex Room</li>
            </Link>
            <Link to="/explore/locker-room">
                <li className={`room-dropdown-li ${room === 'locker-room' ? 'pink' : ''}`} data-path='locker-room-path'>Locker Room</li>
            </Link>
        </ul>,
        <ul className='room-dropdown'>
            <Link to="/explore/private-rooms">
                <li className={`room-dropdown-li ${room === 'private-rooms' ? 'pink' : ''}`} data-path='private-rooms-path'>Private Rooms</li>
            </Link>
        </ul>,
        <ul className='room-dropdown'>
            <Link to="/explore/photo-booth-temple">
                <li className={`room-dropdown-li ${room === 'photo-booth-temple' ? 'pink' : ''}`} data-path='photo-booth-temple-path'>Photo Booth/Temple</li>
            </Link>
        </ul>
    ];

    useEffect(() => {
        document.querySelectorAll('.room-dropdown-li').forEach(el => {
            const roomOverlay = document.getElementById(el.dataset.path);
            if (roomOverlay) {
                el.addEventListener('mouseenter', () => roomOverlay.setAttribute('fill', '#FFA1C3'));
                el.addEventListener('mouseleave', () => roomOverlay.setAttribute('fill', '#565656'));
            }
        });
    })

    return (
        <div id='floor-map' className='floor-map-container hidden'>
            <div className='floor-map-horizontal-flex-container'>
                <div className='floor-select'>
                    <div className={`floor-label ${currentFloor === 1 ? 'floor-active' : ''}`} data-floor='1' onClick={floorLabelOnClick}>Floor 1</div>
                    {currentFloor === 1 && dropDowns[0]}
                    <div className={`floor-label ${currentFloor === 2 ? 'floor-active' : ''}`} data-floor='2' onClick={floorLabelOnClick}>Floor 2</div>
                    {currentFloor === 2 && dropDowns[1]}
                    <div className={`floor-label ${currentFloor === 3 ? 'floor-active' : ''}`} data-floor='3' onClick={floorLabelOnClick}>Floor 3</div>
                    {currentFloor === 3 && dropDowns[2]}
                    <div className={`floor-label ${currentFloor === 4 ? 'floor-active' : ''}`} data-floor='4' onClick={floorLabelOnClick}>Floor 4</div>
                    {currentFloor === 4 && dropDowns[3]}
                </div>
                <div className='room-select-container'>
                    <div className='room-name'>
                        {roomNameToDisplay}
                    </div>
                    <div className='floor-image'>
                        {currentFloor === 1 && <Floor1 currentRoom={room} setHoveredRoom={setHoveredRoom}/>}
                        {currentFloor === 2 && <Floor2 currentRoom={room} setHoveredRoom={setHoveredRoom}/>}
                        {currentFloor === 3 && <Floor3 currentRoom={room} setHoveredRoom={setHoveredRoom}/>}
                        {currentFloor === 4 && <Floor4 currentRoom={room} setHoveredRoom={setHoveredRoom}/>}
                    </div>
                </div>
                <div className='close-button-wrapper' style={{textAlign: 'right'}}>
                    <CloseIcon onClick={() => document.getElementById('floor-map').className += ' hidden'}/>
                </div>
            </div>
        </div>
    );
}

export default FloorMap;