import React from 'react';
import ExploreSidebar from '../components/explore-sidebar';
import Room from '../components/room';

const Pool = () => {
    return (
        <div className='room-wrapper'>
            <ExploreSidebar />
            <div className='room-container'>
                <div className='room-buffer'></div>
                <Room />
                <div className='room-buffer'></div>
            </div>
        </div>
    )
}

export default Pool;