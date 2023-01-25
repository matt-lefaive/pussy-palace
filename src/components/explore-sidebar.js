import React, { useEffect } from 'react';
import ExploreIconRow from './explore-icon-row';
import Soundbite from './soundbite';

const ExploreSidebar = ({ title, descriptions, soundbite, autoplay, isEntrance, updateParentTimestamp }) => {
    
    return (
        <div id='explore-sidebar' className='explore-sidebar'>
            <div className='explore-sidebar-title'>
                <h1>{title}</h1>
            </div>
            <div className='explore-sidebar-descriptions'>
                {descriptions.map((desc, i) => <p key={i}>{desc}</p>)}
            </div>
            {isEntrance && <ExploreIconRow />}
            <div className='soundbite-buffer'></div>
            {soundbite &&
                <Soundbite 
                    title={soundbite.title}
                    subtitle={soundbite.subtitle}
                    description={soundbite.description}
                    src={soundbite.src}
                    narrators={soundbite.narrators}
                    narratorTimings={soundbite.narratorTimings}
                    autoplay={autoplay}
                    updateParentTimestamp={updateParentTimestamp}
                />
            }
        </div>
    )
}

export default ExploreSidebar;