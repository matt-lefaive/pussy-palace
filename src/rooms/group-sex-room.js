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
import '../styles/group-sex-room.css'

const GroupSexRoom = () => {
    const [hoveredSoundbiteID, setHoveredSoundbiteID] = useState(null);
    const [clickedSoundbiteID, setClickedSoundbiteID] = useState(null);
    const [currentSoundbiteID, setCurrentSoundbiteID] = useState(null);
    const [audioTimestamp, setAudioTimestamp] = useState(0);

    const sidebarParagraphs = [
        `In this 15x20-foot room, the temperature is rapidly rising. You take in the scene, noticing the available toys and the mix of bodies, all shapes and sizes. People are peeling off clothes and joining in. You wonder: where should I start? A line of people begins to form, and you see one of the volunteers blindfolding a patron. Decision made, you take your place at the end of the line, tingling with anticipation at the unknown.`
    ];

    const soundbites = {
        'ferguson': {
            title: 'HEAR IT FROM T’HAYLA',
            subtitle: 'Mercury Rising',
            description: 'Patron T’Hayla Ferguson describes the sights, sounds, and feelings of the room, with its paddle benches, people, and scenes.',
            src: '/assets/audio/GroupSexRoom_Ferguson_Audio.mp3',
            narrators: ['Ferguson'],
            narratorTimings: [0],
            transcription: `T’Hayla Ferguson\nAt that left end of the room is all kinds of toys. So, paddle benches and a St. Andrew’s cross and a few other accoutrements. It’s not big room, probably no more than 15 by 20, but you can bet there’s got to be 30 to 35 people in that room. So, it’s quite congested, but even within the congestion, they’re making space for each other. Like, everybody’s smiling. There’s people standing in the doorway, looking in, trying to get a peek at what’s going on. The body heat in the place is just cranking up. It’s got to be 78 to 80 degrees in there, and people are peeling off clothes to accommodate the warmth and each other. The different shaped bodies, it’s like an array of colours, and ethnicities, and sizes, and activities. And you’re just kind of standing there thinking, “Wow, this is what it’s supposed to be like to go have fun without shame and without any kind of bodily judgment.” And just, just fucking have fun.\n\nAnd you know, all of the sounds of sex. Flesh thumping against flesh, and the kind of squeegee wet sounds, and the little teeny sounds of people coming and then the great big sounds of people coming. And then, the people who are on that edge, who can’t quite get to it and there’s that kind of tremor of waiting to go over the edge. It’s pure joy. Pure joy.\n\nI think there’s that moment when you’re in that space when you’re with somebody where you’re just... Your naked skin is touching their naked skin, and it just feels like the peak of humanity. That moment, it’s divine. You’re connected at a deeper level, and you’re just in a... It’s hard to describe. I remember coming out of Pussy Palaces thinking, I had such gratitude. You know, I was exhausted. I was kind of used and used up, and fatigued and dazed from the hours. Like, you would be there for seven and eight hours straight, and you’d come out just rung out, but stupefying-ly joyful. You couldn’t say thank you enough to the organizers.`,
            citation: 'Ferguson, T. (Narrator). (2022). The group sex room: Mercury rising [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. https://URL of soundbite webpage location',
            captions: 'GroupSexRoom_Ferguson_Captions'
        },
        'gallant': {
            title: 'HEAR IT FROM CHANELLE',
            subtitle: 'Outer Edges of Sexual Freedom',
            description: 'Organizer Chanelle Gallant emphasizes how community can help one explore sexual power and cross boundaries.',
            src: '/assets/audio/GroupSexRoom_Gallant_Audio.mp3',
            narrators: ['Gallant'],
            narratorTimings: [0],
            transcription: `Chanelle Gallant\nI don’t know, I was a sexual bad girl. I wanted to fuck shit up. This was, like, the best thing on offer. You know what I mean? Yeah, I was like... I wanted to sexually experiment. I wanted to flex my sexual power. I wanted to meet sexual partners. I wanted to have fun. I wanted to break some rules, and I really did all that. I’m not an exhibitionist too. That wasn’t actually part of what it was about for me. It wasn’t about being seen. It was about the energy of the community, certainly. You know, I just wanted to explore the outer edges of sexual freedom. So, there’s a way you can do that in community that is different than I could do in private. `,
            citation: 'Gallant, C. (Narrator). (2022). The group sex room: Outer edges of sexual freedom [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. https://URL of soundbite webpage location',
            captions: 'GroupSexRoom_Gallant_Captions'
        },
        'roberton': {
            title: 'HEAR IT FROM TERRI',
            subtitle: 'Smell of Old Spooge',
            description: 'Patron Terri Roberton describes the smell and feel of occupying a gay men’s bathhouse.',
            src: '/assets/audio/GroupSexRoom_Roberton_Audio.mp3',
            narrators: ['Roberton'],
            narratorTimings: [0],
            transcription: `Terri Roberton\nIt was when it was mostly a guy’s bathhouse, so lots of testosterone. Smell of, like, old spooge. I don’t think they kept it very clean. But it was kind of disgusting and fine. All the furniture had imploded with body fluid. [laughs] Like, every seam and any sofa couch is, like, suspect. So, like, I’m surprised we didn’t all get a cold or something. It smelled like germs in there. And I’m not a clean freak. I love body fluids and stuff, but that place needed to have a clean-up, which I’m glad it finally did. [laughs]`,
            citation: 'Roberton, T. (Narrator). (2022). The group sex room: Smell of old spooge [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. https://URL of soundbite webpage location',
            captions: 'GroupSexRoom_Roberton_Captions'
        },
        'fuck-line': {
            title: 'HEAR IT FROM MANY',
            subtitle: 'The Fuck Line',
            description: 'Multiple patrons describe spontaneously creating a “fuck line” in the group sex room.',
            src: '/assets/audio/GroupSexRoom_Fuck-Line_Audio.V1.mp3', /* TODO */
            narrators: ['Olender', 'Dutrizac', 'Irwin', 'Olender', 'Herlihy', 'Dutrizac', 'Miklos'], /* TODO */
            narratorTimings: [0, 1, 2, 3, 4, 5, 6], /* TODO */
            transcription: `TBA`, /* TODO */
            citation: 'TBA', /* TODO */
            captions: 'GroupSexRoom_Fuck-Line_Captions' /* TODO */
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

export default GroupSexRoom;