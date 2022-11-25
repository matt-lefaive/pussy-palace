import React from 'react';

const ExploreSidebar = ({ title, descriptions, hasHomeButton }) => {
    return (
        <div className='explore-sidebar'>
            <div className='explore-sidebar-title'>
                <h1>{title}</h1>
            </div>
            <div className='explore-sidebar-descriptions'>
                {descriptions.map((desc, i) => <p key={i}>{desc}</p>)}
            </div>
        </div>
    )
}

export default ExploreSidebar;