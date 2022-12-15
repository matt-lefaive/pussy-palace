import React, { useEffect, useState } from 'react';
import ExploreSidebar from '../components/explore-sidebar';
import Room from '../components/room';
import ThresholdAssets from '../svg/Threshold_Assets';
import ThresholdGallantOutline from '../svg/Threshold_Gallant_Outline';
import ThresholdMiklosOutline from '../svg/Threshold_Miklos_Outline';
import ThresholdHamiltonOutline from '../svg/Threshold_Hamilton_Outline';

const Threshold = () => {
    const [hoveredSoundbiteID, setHoveredSoundbiteID] = useState(null);
    const [clickedSoundbiteID, setClickedSoundbiteID] = useState(null);
    const [currentSoundbiteID, setCurrentSoundbiteID] = useState(null);

    const sidebarParagraphs = [
        'You enter through the triangle archway, turn left and head promptly downstairs. At the end of the hall, an entrance booth where you exchange a ticket for a towel and locker key. A volunteer informs you of the newbie tour of the space — rendezvous at the first-floor staircase, if you’re interested. To the right of the booth, a locked door, and behind it, the Palace proper. You wait to be buzzed in. The threshold, neither public nor private, is your passageway to another world.'
    ];

    const soundbites = {
        gallant: { 
            title: 'HEAR IT FROM CHANELLE',
            subtitle: 'I Remember the Buzz',
            description: 'Organizer Channelle Gallant describes the entry into the Palace: the line-up, her clipboard, the carpet, the buzz.',
            src: '/assets/audio/Threshold_Gallant_Audio.mp3',
            narrators: ['Gallant'],
            narratorTimings: [0]
        },
        miklos: {
            title: 'HEAR IT FROM LYLA',
            subtitle: 'The Newbie Tour',
            description: 'As a first-timer, patron Lyla Miklos signs up for a tour: sauna, steam room, and swimming pool...oh my!',
            src: '/assets/audio/Threshold_Miklos_Audio.mp3',
            narrators: ['Miklos'],
            narratorTimings: [0]
        },
        hamilton: {
            title: 'HEAR IT FROM DIANE',
            subtitle: 'A Warm Welcome',
            description: 'Organizer Diane Hamilton describes the thrill of sharing sexual confidence and connection.',
            src: '/assets/audio/Threshold_Hamilton_Audio.mp3',
            narrators: ['Hamilton'],
            narratorTimings: [0]
        }
    }
    
    useEffect(() => {
        const ids = ['gallant', 'miklos', 'hamilton'];
        for (const id of ids) {
            const el = document.getElementById(`threshold-${id}-outline`);
            el.addEventListener('mouseenter', () => setHoveredSoundbiteID(id));
            el.addEventListener('mouseleave', () => setHoveredSoundbiteID(null));
            el.addEventListener('click', () => setClickedSoundbiteID(id));
        }
    }, []);

    useEffect(() => {
        setCurrentSoundbiteID(clickedSoundbiteID ? clickedSoundbiteID : hoveredSoundbiteID)
    }, [clickedSoundbiteID, hoveredSoundbiteID])
    
    return (
        <div className='room-wrapper'>
            <ExploreSidebar
                title='The Threshold'
                descriptions={sidebarParagraphs}
                soundbite={currentSoundbiteID && soundbites[currentSoundbiteID]}
                autoplay={clickedSoundbiteID ? true : false}
            />
            <div className='room-container'>
                <div className='room-buffer'></div>
                <Room 
                    id='threshold' 
                    style={{backgroundImage: 'url(/assets/images/threshold/Threshold_Hero.png)'}}
                    decorations={[
                        {component: <ThresholdAssets />, id: 'threshold-assets'}
                    ]}
                    objects={[
                        {component: <ThresholdGallantOutline />, id: 'threshold-gallant-outline'},
                        {component: <ThresholdMiklosOutline />, id: 'threshold-miklos-outline'},
                        {component: <ThresholdHamiltonOutline />, id: 'threshold-hamilton-outline'}
                    ]}
                />
                <div className='room-buffer'></div>
            </div>
        </div>
    )
}

export default Threshold;