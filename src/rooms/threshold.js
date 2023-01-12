import React, { useEffect, useState } from 'react';
import ExploreSidebar from '../components/explore-sidebar';
import Room from '../components/room';
import ThresholdAssets from '../svg/Threshold_Assets';
import ThresholdGallantOutline from '../svg/Threshold_Gallant_Outline';
import ThresholdMiklosOutline from '../svg/Threshold_Miklos_Outline';
import ThresholdHamiltonOutline from '../svg/Threshold_Hamilton_Outline';
import VTTViewer from '../components/vtt-viewer';
import captions from '../captions/captions.json';

const Threshold = () => {
    const [hoveredSoundbiteID, setHoveredSoundbiteID] = useState(null);
    const [clickedSoundbiteID, setClickedSoundbiteID] = useState(null);
    const [currentSoundbiteID, setCurrentSoundbiteID] = useState(null);
    const [audioTimestamp, setAudioTimestamp] = useState(0);

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
            narratorTimings: [0],
            transcription: `Chanelle Gallant\nFirst you would go down a few stairs. Unfortunately, it was very inaccessible. You go down a few stairs, come in through the door, and there was a little vestibule and, you know, someone behind a glass window who would take your ticket or your money to buy a ticket, your ID. Then you’d be buzzed in. The door was locked. You could only get in once you were buzzed in, which was no doubt security that gay men needed to protect themselves. As an event organizer, there’s a lot of stuff that has to happen around the entrance. So, what I remember is having a clipboard, a headset where we would communicate with other members of the team, my little pen, and people in line. And I would run around with my little clipboard and my headset. I cannot believe I did that in heels, but I probably did. Wow. Ugh. Yeah, no way now. Everybody in the line also got a little spiel, a little anti-oppression spiel on your way in, which I think included stuff around trans women. I think we were really trying, I don’t know how successfully, to deal with the depth of trans misogyny in queer, cis women’s community, which was very intense and just so horrible. So, that’s kinda what I remember most is the buzz around the–. It’s kind of the ugly, industrial, vestibule before you got into the sexy dance floor. Brightly lit. Seriously heavy steel door that only opens by buzzer. The, like, shitty faded carpet that was everywhere. I remember that too because it is hard to walk on carpet in high heels. And then immediately on the other side of it is, like, an illuminated bar and DJ Nik Red on the turntables and people on the dance floor wearing a towel and nothing else. And the buzzer, the door opening. You’re in or you’re out.`,
            citation: 'aa',
            captions: 'Threshold_Gallant_Captions'
        },
        miklos: {
            title: 'HEAR IT FROM LYLA',
            subtitle: 'The Newbie Tour',
            description: 'As a first-timer, patron Lyla Miklos signs up for a tour: sauna, steam room, and swimming pool...oh my!',
            src: '/assets/audio/Threshold_Miklos_Audio.mp3',
            narrators: ['Miklos'],
            narratorTimings: [0],
            transcription: 'b',
            citation: 'bb',
            captions: 'Threshold_Miklos_Captions'
        },
        hamilton: {
            title: 'HEAR IT FROM DIANE',
            subtitle: 'A Warm Welcome',
            description: 'Organizer Diane Hamilton describes the thrill of sharing sexual confidence and connection.',
            src: '/assets/audio/Threshold_Hamilton_Audio.mp3',
            narrators: ['Hamilton'],
            narratorTimings: [0],
            transcription: 'c',
            citation: 'cc',
            captions: 'Threshold_Hamilton_Captions'
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
    
    const updateAudioTimestamp = timestamp => setAudioTimestamp(timestamp);

    return (
        <div className='room-wrapper'>
            {currentSoundbiteID && <VTTViewer captions={captions[soundbites[currentSoundbiteID].captions]} timestamp={audioTimestamp}/>}
            
            <ExploreSidebar
                title='The Threshold'
                descriptions={sidebarParagraphs}
                soundbite={currentSoundbiteID && soundbites[currentSoundbiteID]}
                autoplay={clickedSoundbiteID ? true : false}
                updateParentTimestamp={updateAudioTimestamp}
            />

            <div className='room-container'>
                <div className='room-buffer'></div>
                <Room 
                    id='threshold' 
                    style={{backgroundImage: 'url(/assets/images/threshold/Threshold_Hero.png)'}}
                    soundbite={currentSoundbiteID && soundbites[currentSoundbiteID]}
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