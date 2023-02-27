import React, { useEffect, useState } from 'react';
import ExploreSidebar from '../components/explore-sidebar';
import Room from '../components/room';
import GroupSexRoomAssets from '../svg/GroupSexRoom_Assets';
import GroupSexRoomFergusonOutline from '../svg/GroupSexRoom_Ferguson_Outline';
import GroupSexRoomFuckLineOutline from '../svg/GroupSexRoom_Fuck-Line_Outline';
import GroupSexRoomGallantOutline from '../svg/GroupSexRoom_Gallant_Outline';
import GroupSexRoomRobertonOutline from '../svg/GroupSexRoom_Roberton_Outline';
import VTTViewer from '../components/vtt-viewer';
import captions from '../captions/captions.json';

const PrivateRooms = () => {
    const [hoveredSoundbiteID, setHoveredSoundbiteID] = useState(null);
    const [clickedSoundbiteID, setClickedSoundbiteID] = useState(null);
    const [currentSoundbiteID, setCurrentSoundbiteID] = useState(null);
    const [audioTimestamp, setAudioTimestamp] = useState(0);

    const sidebarParagraphs = [
        `Get a room! Here at the Pussy Palace, you can... As long as you arrived early enough. Reservations are first come first served. Rows and rows of little closets form a labyrinth of semi-private space. Yes, there were doors, but the walls were open at the top and bottom. Sound travels. With nothing but a metal frame, rubber mattress, and single bed sheet, this ain’t the Four Seasons, but no one seems to mind. If you’re looking for a modicum of privacy, these tiny bunkers can provide. Or not. If you’re feeling generous, leave the door ajar. Someone’s sure to sneak a peek or join in — with consent, of course.`
    ];

    const soundbites = {
        '': {
            title: 'HEAR IT FROM ',
            subtitle: '',
            description: '',
            src: '/assets/audio/PrivateRooms__Audio.mp3',
            narrators: [''],
            narratorTimings: [0],
            transcription: ``,
            citation: '',
            captions: 'PrivateRooms__Captions'
        }
    }
    
    useEffect(() => {
        const ids = ['ferguson', 'gallant', 'roberton', 'fuck-line'];
        for (const id of ids) {
            const el = document.getElementById(`group-sex-room-${id}-outline`);
            el.addEventListener('mouseenter', () => setHoveredSoundbiteID(id));
            el.addEventListener('mouseleave', () => setHoveredSoundbiteID(null));
            el.addEventListener('click', () => setClickedSoundbiteID(id));
        }
    }, []);

    useEffect(() => {
        setCurrentSoundbiteID(clickedSoundbiteID ? clickedSoundbiteID : hoveredSoundbiteID)
    }, [clickedSoundbiteID, hoveredSoundbiteID])
    
    const updateAudioTimestamp = timestamp => setAudioTimestamp(timestamp);

    return (
        <div className='room-wrapper'>
            {currentSoundbiteID && <VTTViewer captions={captions[soundbites[currentSoundbiteID].captions]} timestamp={audioTimestamp}/>}
            
            <ExploreSidebar
                title='The Group Sex Room'
                descriptions={sidebarParagraphs}
                soundbite={currentSoundbiteID && soundbites[currentSoundbiteID]}
                autoplay={clickedSoundbiteID ? true : false}
                updateParentTimestamp={updateAudioTimestamp}
            />

            <div className='room-container'>
                <div className='room-buffer'></div>
                <Room 
                    id='group-sex-room' 
                    style={{backgroundImage: 'url(/assets/images/explore-hero/GroupSexRoom_Hero.png)'}}
                    soundbite={currentSoundbiteID && soundbites[currentSoundbiteID]}
                    decorations={[
                        {component: <GroupSexRoomAssets />, id: 'group-sex-room-assets'}
                    ]}
                    objects={[
                        {component: <GroupSexRoomFergusonOutline />, id: 'group-sex-room-ferguson-outline'},
                        {component: <GroupSexRoomFuckLineOutline />, id: 'group-sex-room-fuck-line-outline'},
                        {component: <GroupSexRoomGallantOutline />, id: 'group-sex-room-gallant-outline'},
                        {component: <GroupSexRoomRobertonOutline />, id: 'group-sex-room-roberton-outline'}
                    ]}
                />
                <div className='room-buffer'></div>
            </div>
        </div>
    )
}

export default PrivateRooms;