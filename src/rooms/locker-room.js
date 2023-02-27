import React, { useEffect, useState } from 'react';
import ExploreSidebar from '../components/explore-sidebar';
import Room from '../components/room';
import LockerRoomAssets from '../svg/LockerRoom_Assets';
import LockerRoomChanOutline from '../svg/LockerRoom_Chan_Outline';
import LockerRoomDutrizacOutline from '../svg/LockerRoom_Dutrizac_Outline';
import LockerRoomPerryOutline from '../svg/LockerRoom_Perry_Outline';
import LockerRoomRacineOutline from '../svg/LockerRoom_Racine_Outline';
import VTTViewer from '../components/vtt-viewer';
import captions from '../captions/captions.json';
import '../styles/locker-room.css'

const LockerRoom = () => {
    const [hoveredSoundbiteID, setHoveredSoundbiteID] = useState(null);
    const [clickedSoundbiteID, setClickedSoundbiteID] = useState(null);
    const [currentSoundbiteID, setCurrentSoundbiteID] = useState(null);
    const [audioTimestamp, setAudioTimestamp] = useState(0);

    const sidebarParagraphs = [
        `You head to the second-floor locker room to stow your street clothes, primp, and preen. You hear muffled music coming from the floor below, joyful chit chat, soft whispers. Some patrons are sharing a tender moment, some are amping themselves up. Others are taking a break, having a snack, looking for something they lost. Like everywhere else, it’s hot and humid, but mostly quiet — a port in the storm.`
    ];

    const soundbites = {
        'chan': {
            title: 'HEAR IT FROM B.K.',
            subtitle: 'Sexualized on My Own Terms',
            description: 'Organizer Karen B.K. Chan finds the freedom to be sexualized on her own terms.',
            src: '/assets/audio/LockerRoom_Chan_Audio.mp3',
            narrators: ['Chan'],
            narratorTimings: [0],
            transcription: `I was experimenting with what it would feel like to be sexualized on terms that are mine. My early life was the opposite of that. I felt, like, zero sexualization as a “not out” but “out” just because of how I looked, ostracized, freak of nature. And I identify as someone who was, like, sexually curious very early. And so, it felt like I had been waiting for, like, two decades to be a sexual person. And so, I had a lot of catching up to do. I really wanted to be seen as desirable. And so, I was experimenting with: What does it mean to be a sexualizable, to be a desirable, person? And then, I was also having fun. And so, I really saw the bathhouse as, like, a fun place where, like, anything goes. And if I want to wear a rubber duck on my head, then that’s great. The more I was a part of organizing it, the more freedom I felt to say, “This is my house. So, I can be how I want.”`,
            citation: 'Chan, K. B. K. (Narrator). (2022). The locker room: Sexualized on my own terms [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. https://URL of soundbite webpage location',
            captions: 'LockerRoom_Chan_Captions'
        },
        'dutrizac': {
            title: 'HEAR IT FROM STEPHANIE',
            subtitle: 'Lockers then Strut',
            description: 'Patron Stephanie Dutrizac grooves on the Palace’s smelly, humid, kinky vibe.',
            src: '/assets/audio/LockerRoom_Dutrizac_Audio.mp3',
            narrators: ['Dutrizac'],
            narratorTimings: [0],
            transcription: `We probably ran right to the lockers to get ourselves organized. Take off our street clothes, got ourselves all dressed up, and then kind of got ready. And then, probably right after that, I would have walked around and, like, surveyed the space and did a bit of strutting and did a bit of walkabout. It was dirty, [laughs] smelly, cramped, dark and humid. And I loved all of it. It felt like a gay men’s space that we were taking over. And as a leather, kinky pervert, that is super exciting.`,
            citation: 'Dutrizac, S. (Narrator). (2022). The locker room: Lockers then strut [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. https://URL of soundbite webpage location',
            captions: 'LockerRoom_Dutrizac_Captions'
        },
        'perry': {
            title: 'HEAR IT FROM LYNDA J.',
            subtitle: 'The Lost Flogger',
            description: 'Patron Lynda J. Perry loses a favourite flogger, one she bought at NYC’s Hellfire Club. ',
            src: '/assets/audio/LockerRoom_Perry_Audio.mp3',
            narrators: ['Perry'],
            narratorTimings: [0],
            transcription: `I’m sort of like in the locker room, but I’m not connecting with anybody in the locker room. I don’t know why I’m there. I don’t know, maybe I just wanted to get away from a crowded space or something. Except, I think I was looking for something that I couldn’t find. Ended up losing my flogger there. Yeah, the nice one with the ball, the crystal ball on it, on the top. You know, there’s a place in New York called the Hellfire Club. I don’t think it exists anymore. And it would be closer to... Almost like a gay male place, in a way. A lot of the men who went there were wankers. [laughs] And they would just wank right on the floor. Like, it was all full of semen. But it was a scene. But sometimes people go in there and sell things, like whips and things that they make or have, and that’s where I got it.`,
            citation: 'Perry, L. J. (Narrator). (2022). The locker room: The lost flogger [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. https://URL of soundbite webpage location',
            captions: 'LockerRoom_Perry_Captions'
        },
        'racine': {
            title: 'HEAR IT FROM RENEE',
            subtitle: 'Slippery When Wet',
            description: 'Security Volunteer Renee Racine reflects on the locker room’s sensory elements: colours, smells, and textures. ',
            src: '/assets/audio/LockerRoom_Racine_Audio.mp3',
            narrators: ['Racine'],
            narratorTimings: [0],
            transcription: `Renee Racine\nI spent a fair amount of time in the locker area, before my shift, because there were hours before I went on shift. I was talking to someone; she had recently been broken up with by her girlfriend. She was awfully cute, and I was just, you know, consoling her. You know, we were sitting on the floor with our backs against the lockers. It smelled like chlorine, a little bit like sweat. And it was greenish. But, overall, it was that warm red of the lobby that I would call out as my overarching colour. The steam. The wet walls. Slippery. Slippery under your touch. Something that is transient; it’s only there for a minute and then it’s gone.   `,
            citation: 'Racine, R. (Narrator). (2022). The locker room: Slippery when wet [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. https://URL of soundbite webpage location',
            captions: 'LockerRoom_Racine_Captions'
        },
    }
    
    useEffect(() => {
        const ids = ['chan', 'dutrizac', 'perry', 'racine'];
        for (const id of ids) {
            const el = document.getElementById(`locker-room-${id}-outline`);
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
                title='The Locker Room'
                descriptions={sidebarParagraphs}
                soundbite={currentSoundbiteID && soundbites[currentSoundbiteID]}
                autoplay={clickedSoundbiteID ? true : false}
                updateParentTimestamp={updateAudioTimestamp}
            />

            <div className='room-container'>
                <div className='room-buffer'></div>
                <Room 
                    id='locker-room' 
                    style={{backgroundImage: 'url(/assets/images/explore-hero/LockerRoom_Hero.png)'}}
                    soundbite={currentSoundbiteID && soundbites[currentSoundbiteID]}
                    decorations={[
                        {component: <LockerRoomAssets />, id: 'locker-room-assets'}
                    ]}
                    objects={[
                        {component: <LockerRoomChanOutline />, id: 'locker-room-chan-outline'},
                        {component: <LockerRoomDutrizacOutline />, id: 'locker-room-dutrizac-outline'},
                        {component: <LockerRoomPerryOutline />, id: 'locker-room-perry-outline'},
                        {component: <LockerRoomRacineOutline />, id: 'locker-room-racine-outline'}
                    ]}
                />
                <div className='room-buffer'></div>
            </div>
        </div>
    )
}

export default LockerRoom;