import React, { useEffect, useState } from 'react';
import ExploreSidebar from '../components/explore-sidebar';
import Room from '../components/room';
import StaircasesAssets from '../svg/Staircases_Assets';
import StaircasesBrushwoodRoseOutline from '../svg/Staircases_BrushwoodRose_Outline';
import StaircasesHornickOutline from '../svg/Staircases_Hornick_Outline';
import StaircasesInaccessibilityAtThePalaceOutline from '../svg/Staircases_inAccessibility-at-the-Palace_Outline';
import VTTViewer from '../components/vtt-viewer';
import captions from '../captions/captions.json';
import '../styles/staircases.css'

const Staircases = ({ loadObjectEvents }) => {
    const [hoveredSoundbiteID, setHoveredSoundbiteID] = useState(null);
    const [clickedSoundbiteID, setClickedSoundbiteID] = useState(null);
    const [currentSoundbiteID, setCurrentSoundbiteID] = useState(null);
    const [audioTimestamp, setAudioTimestamp] = useState(0);

    const sidebarParagraphs = [
        `With four stories to explore and no elevator in sight, get ready to climb lots of stairs in this heritage Victorian home. An unfortunate feature of Club Toronto, and of most bathhouse spaces in the city, was its lack of ramps and elevators: events like the Pussy Palace were largely inaccessible for those patrons who were differently-abled. As you ascend from floor to floor, you uncover the building’s numerous nooks and crannies. It’s dark, humid, and disorienting. Curiosity is your only guide.`
    ];

    const soundbites = {
        'inaccessibility-at-the-palace': {
            title: 'HEAR IT FROM MANY',
            subtitle: '(in)Accessibility at the Palace',
            description: 'Three organizers lament the physical inaccessibility of Club Toronto, and of most male bathhouses in the city.',
            src: '/assets/audio/Staircases_inAccessibility-at-the-Palace_Audio.mp3',
            narrators: ['Singh', 'Hornick', 'Jansen'],
            narratorTimings: [0, 10.046, 37.057],
            transcription: `Deb Singh: We could never have a freaking bathhouse that was accessible to people who used wheelchairs. You know? Or people who used mobility devices. Because the fucking places, every single one has a set of stairs.\n\nJP Hornick: There’s so many stairs at Club Toronto. Oh, my goodness. Yeah. And that was a function of men’s bathhouses that were more accessible being unwilling to share space. You know, we ended up with a Thursday night at Club Toronto because it’s the slowest night. You know, they weren’t making money anyway. And so, this was a way for them to make money. But at the places that probably had a steadier income, or weren’t as reliant on an influx of cash, were just not interested in sharing space for a night with women.\n\nCarlyle Jansen: We did have one person who used to come in a wheelchair, and we had volunteers to help them get around. Couple people could pick them up and take them to a different floor, I remember. `,
            citation: 'Singh, D., Hornick, J., & Jansen, C. (Narrators). (2022). The staircases: (in)Accessibility at the palace [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. https://URL of soundbite webpage location ',
            captions: 'Staircases_inAccessibility-at-the-Palace_Captions'
        },
        'brushwood-rose': {
            title: 'HEAR IT FROM CHLOË',
            subtitle: 'Timeless Nights',
            description: 'Resident Palace Photographer Chloë Brushwood Rose vibes on the timeless quality of her nights at the Palace, the endless staircases, the windowless hallways, the dim lighting.',
            src: '/assets/audio/Staircases_BrushwoodRose_Audio.mp3',
            narrators: ['BrushwoodRose'],
            narratorTimings: [0],
            transcription: `Chloë Brushwood Rose: What I remember is carpet, narrow hallways, and staircases going up. Like, it’s a tall structure. No windows, right? Like, completely windowless. So, just, any lighting was kept very dim. Presumably that’s part of what people are going there for, is the dim lighting. I mean, it kind of felt dungeon-y, except that it was not that cool. It was really, like, wood panelling, and carpet. Like, it didn’t strike me as super clean, but we didn’t care about that really. I mean, every hallway kind of looked the same, and... It’s like the timeless, dark… Who knows what time…? It could be 7:00 a.m. in the morning. You have no idea. There were none of the typical markers that helped guide you through a space.`,
            citation: 'Brushwood Rose, C. (Narrator). (2022). The staircases: Timeless nights [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. https://URL of soundbite webpage location',
            captions: 'Staircases_BrushwoodRose_Captions'
        },
        'hornick': {
            title: 'HEAR IT FROM JP',
            subtitle: 'The Sound of Up and Down',
            description: 'Security Volunteer JP Hornick describes the shifting soundscape while ascending from first to fourth floor: from music and chatter, to clanking chains, to flesh on flesh.',
            src: '/assets/audio/Staircases_Hornick_Audio.mp3',
            narrators: ['Hornick'],
            narratorTimings: [0],
            transcription: `JP Hornick: A lot of the time that I spent was around going up and down stairs. The floor always felt either slightly damp [laughs] or, you know, you just knew it was crusty. You can smell the chlorine from the pool a little bit. The heat of all the bodies, and the DJ spinning, and folks dancing. There’s the music. Like, on the first floor, it was the music. People’s conversations happening, and then you walk up the stairs. Then you’re starting to hear folks having sex in the cubicles in the hallway. And you could hear different implements being engaged with in the, sort of, SM areas. Clanking of chains, the sound of leather or flesh on flesh, and people moaning. Clink of bottles, beers being poured out… Or cans, I think it was cans actually, being popped and poured. Skin, there’s a lot of skin. You brush up against people everywhere. To be perfectly blunt, I tried not to touch the floor or the wall.`,
            citation: 'Hornick, J. (Narrator). (2022). The staircases: The sound of up and down [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. https://URL of soundbite webpage location',
            captions: 'Staircases_Hornick_Captions'
        },
    }
    
    useEffect(() => {
        loadObjectEvents('staircases', Object.keys(soundbites), setHoveredSoundbiteID, setClickedSoundbiteID);
    }, []);

    useEffect(() => {
        setCurrentSoundbiteID(clickedSoundbiteID ? clickedSoundbiteID : hoveredSoundbiteID)
    }, [clickedSoundbiteID, hoveredSoundbiteID]);
    
    const updateAudioTimestamp = timestamp => setAudioTimestamp(timestamp);

    return (
        <div className='room-wrapper'>
            {currentSoundbiteID && <VTTViewer captions={captions[soundbites[currentSoundbiteID].captions]} timestamp={audioTimestamp}/>}
            
            <ExploreSidebar
                title='The Staircases'
                descriptions={sidebarParagraphs}
                soundbite={currentSoundbiteID && soundbites[currentSoundbiteID]}
                autoplay={clickedSoundbiteID ? true : false}
                updateParentTimestamp={updateAudioTimestamp}
            />

            <div className='room-container'>
                <div className='room-buffer'></div>
                <Room 
                    id='staircases' 
                    style={{backgroundImage: 'url(/assets/images/explore-hero/Staircases_Hero.png)'}}
                    soundbite={currentSoundbiteID && soundbites[currentSoundbiteID]}
                    decorations={[
                        {component: <StaircasesAssets />, id: 'staircases-assets'}
                    ]}
                    objects={[
                        {component: <StaircasesBrushwoodRoseOutline />, id: 'staircases-brushwood-rose-outline'},
                        {component: <StaircasesHornickOutline />, id: 'staircases-hornick-outline'},
                        {component: <StaircasesInaccessibilityAtThePalaceOutline />, id: 'staircases-inaccessibility-at-the-palace-outline'},
                    ]}
                />
                <div className='room-buffer'></div>
            </div>
        </div>
    )
}

export default Staircases;