import React from 'react';
import ExploreIconRow from './explore-icon-row';

const ExploreSidebar = ({ title, descriptions, isEntrance }) => {
    return (
        <div className='explore-sidebar'>
            <div className='explore-sidebar-title'>
                <h1>{title}</h1>
            </div>
            <div className='explore-sidebar-descriptions'>
                {descriptions.map((desc, i) => <p key={i}>{desc}</p>)}
            </div>
            {isEntrance && <ExploreIconRow />}
        </div>
    )
}

export default ExploreSidebar;