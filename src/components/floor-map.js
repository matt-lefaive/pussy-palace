import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import CloseIcon from '../svg/close-icon';
import LocationIcon from '../svg/location-icon';
import DownCaretIcon from '../svg/down-caret-icon';

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

    useEffect(() => {
        document.getElementById('floor-selector').value = `${currentFloor}`;
    })

    const dropDowns = [
        <ul className='room-dropdown'>
            <Link to="/explore/threshold">
                <li className={
                        `room-dropdown-li 
                        ${room === 'threshold' ? ' room-dropdown-active' : ''}
                        ${hoveredRoom === 'threshold' ? ' room-dropdown-li-hover' : ''}`
                    } 
                    data-path='threshold-path'>
                        1. The Threshold {room === 'threshold' && <LocationIcon />}
                </li>
            </Link>
            <Link to="/explore/dance-floor">
                <li className={
                        `room-dropdown-li 
                        ${room === 'dance-floor' ? ' room-dropdown-active' : ''}
                        ${hoveredRoom === 'dance-floor' ? ' room-dropdown-li-hover' : ''}`
                    }  
                    data-path='dance-floor-path'>
                        2. The Dance Floor {room === 'dance-floor' && <LocationIcon />}
                </li>
            </Link>
            <Link to="/explore/pool">
                <li className={
                        `room-dropdown-li 
                        ${room === 'pool' ? ' room-dropdown-active' : ''}
                        ${hoveredRoom === 'pool' ? ' room-dropdown-li-hover' : ''}`
                    }
                    data-path='pool-path'>
                        3. The Pool {room === 'pool' && <LocationIcon />}
                </li>
            </Link>
            <Link to="/explore/staircases">
                <li className={
                        `room-dropdown-li 
                        ${room === 'staircases' ? ' room-dropdown-active' : ''}
                        ${hoveredRoom === 'staircases' ? ' room-dropdown-li-hover' : ''}`
                    } 
                    data-path='staircases-path'>
                        4. The Staircases {room === 'staircases' && <LocationIcon />}
                </li>
            </Link>
        </ul>,
        <ul className='room-dropdown'>
            <Link to="/explore/cat-walk">
                <li className={
                        `room-dropdown-li 
                        ${room === 'cat-walk' ? ' room-dropdown-active' : ''}
                        ${hoveredRoom === 'cat-walk' ? ' room-dropdown-li-hover' : ''}`
                    } 
                    data-path='cat-walk-path'>
                        5. The Cat Walk {room === 'cat-walk' && <LocationIcon />}
                </li>
            </Link>
            <Link to="/explore/group-sex-room">
                <li className={
                        `room-dropdown-li 
                        ${room === 'group-sex-room' ? ' room-dropdown-active' : ''}
                        ${hoveredRoom === 'group-sex-room' ? ' room-dropdown-li-hover' : ''}`
                    }
                    data-path='group-sex-room-path'>
                        6. The Group Sex Room {room === 'group-sex-room' && <LocationIcon />}
                </li>
            </Link>
            <Link to="/explore/locker-room">
                <li className={
                        `room-dropdown-li 
                        ${room === 'locker-room' ? ' room-dropdown-active' : ''}
                        ${hoveredRoom === 'locker-room' ? ' room-dropdown-li-hover' : ''}`
                    }
                    data-path='locker-room-path'>
                        7. The Locker Room {room === 'locker-room' && <LocationIcon />}
                </li>
            </Link>
        </ul>,
        <ul className='room-dropdown'>
            <Link to="/explore/private-rooms">
                <li className={
                        `room-dropdown-li 
                        ${room === 'private-rooms' ? ' room-dropdown-active' : ''}
                        ${hoveredRoom === 'private-rooms' ? ' room-dropdown-li-hover' : ''}`
                    }
                    data-path='private-rooms-path'>
                        8. The Private Rooms {room === 'private-rooms' && <LocationIcon />}
                </li>
            </Link>
        </ul>,
        <ul className='room-dropdown'>
            <Link to="/explore/photo-booth-temple">
                <li className={
                        `room-dropdown-li 
                        ${room === 'photo-booth-temple' ? ' room-dropdown-active' : ''}
                        ${hoveredRoom === 'photo-booth-temple' ? ' room-dropdown-li-hover' : ''}`
                    }
                    data-path='photo-booth-temple-path'>
                    9. The Photo Booth/Temple {room === 'photo-booth-temple' && <LocationIcon />}
                </li>
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

    const closeIconOnClick = () => {
        document.getElementById('floor-map').className += ' hidden'
        document.getElementById('floor-map-background-layer').className += ' hidden'
    }

    return (
        <>
        <div id='floor-map-background-layer' className='floor-map-background-layer hidden'></div>
        <div id='floor-map' className='floor-map-container hidden'>
            <div className='floor-map-disclaimer'>
                This is the floor plan of the Pussy Palace. Though not historically accurate, it will allow you to traverse freely around the Palace without needing to follow the suggested order.
            </div>
            <div className='floor-map-horizontal-flex-container'>
                <div className='floor-select'>
                    <div className='floor-select-dropdown'>
                        <select 
                            name='floor' 
                            id='floor-selector'
                            onChange={e => setCurrentFloor(Number(e.target.value))}
                            >
                                <option value='1'>THE FIRST FLOOR</option>
                                <option value='2'>THE SECOND FLOOR</option>
                                <option value='3'>THE THIRD FLOOR</option>
                                <option value='4'>THE FOURTH FLOOR</option>
                        </select>
                    </div>
                    <DownCaretIcon onClick={() => document.getElementById('floor-selector').dispatchEvent(new MouseEvent('mousedown'))}/>
                    {currentFloor === 1 && dropDowns[0]}
                    {currentFloor === 2 && dropDowns[1]}
                    {currentFloor === 3 && dropDowns[2]}
                    {currentFloor === 4 && dropDowns[3]}
                </div>
                <div className='room-select-container'>
                    <div className='floor-image'>
                        {currentFloor === 1 && <Floor1 currentRoom={room} setHoveredRoom={setHoveredRoom}/>}
                        {currentFloor === 2 && <Floor2 currentRoom={room} setHoveredRoom={setHoveredRoom}/>}
                        {currentFloor === 3 && <Floor3 currentRoom={room} setHoveredRoom={setHoveredRoom}/>}
                        {currentFloor === 4 && <Floor4 currentRoom={room} setHoveredRoom={setHoveredRoom}/>}
                    </div>
                </div>
                
            </div>
            <div className='floor-map-close-button-wrapper' style={{textAlign: 'right'}}>
                <CloseIcon 
                    onClick={closeIconOnClick}
                    color='black'
                    backgroundColor='#FF5C97'
                    fontSize='30px'
                    borderRadius='50%'
                    border='1px solid black'
                />
            </div>
        </div>
        </>
    );
}

export default FloorMap;