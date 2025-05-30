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

const GroupSexRoom = ({ loadObjectEvents }) => {
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
            citation: 'Stranges, Alisha, and Elspeth Brown. “Explore the Palace: Mercury Rising.” Narrated by T’Hayla Ferguson. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. The History of the Pussy Palace: A Digital Exhibit. 2024. Audio recording, 2:16. ',
            captions: 'GroupSexRoom_Ferguson_Captions',
            explicit: true
        },
        'gallant': {
            title: 'HEAR IT FROM CHANELLE',
            subtitle: 'Outer Edges of Sexual Freedom',
            description: 'Organizer Chanelle Gallant emphasizes how community can help one explore sexual power and cross boundaries.',
            src: '/assets/audio/GroupSexRoom_Gallant_Audio.mp3',
            narrators: ['Gallant'],
            narratorTimings: [0],
            transcription: `Chanelle Gallant\nI don’t know, I was a sexual bad girl. I wanted to fuck shit up. This was, like, the best thing on offer. You know what I mean? Yeah, I was like... I wanted to sexually experiment. I wanted to flex my sexual power. I wanted to meet sexual partners. I wanted to have fun. I wanted to break some rules, and I really did all that. I’m not an exhibitionist too. That wasn’t actually part of what it was about for me. It wasn’t about being seen. It was about the energy of the community, certainly. You know, I just wanted to explore the outer edges of sexual freedom. So, there’s a way you can do that in community that is different than I could do in private. `,
            citation: 'Stranges, Alisha, and Elspeth Brown. “Explore the Palace: Outer Edges of Sexual Freedom.” Narrated by Chanelle Gallant. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. The History of the Pussy Palace: A Digital Exhibit. 2024. Audio recording, 0:44.',
            captions: 'GroupSexRoom_Gallant_Captions',
            explicit: false
        },
        'roberton': {
            title: 'HEAR IT FROM TERRI',
            subtitle: 'Smell of Old Spooge',
            description: 'Patron Terri Roberton describes the smell and feel of occupying a gay men’s bathhouse.',
            src: '/assets/audio/GroupSexRoom_Roberton_Audio.mp3',
            narrators: ['Roberton'],
            narratorTimings: [0],
            transcription: `Terri Roberton\nIt was when it was mostly a guy’s bathhouse, so lots of testosterone. Smell of, like, old spooge. I don’t think they kept it very clean. But it was kind of disgusting and fine. All the furniture had imploded with body fluid. [laughs] Like, every seam and any sofa couch is, like, suspect. So, like, I’m surprised we didn’t all get a cold or something. It smelled like germs in there. And I’m not a clean freak. I love body fluids and stuff, but that place needed to have a clean-up, which I’m glad it finally did. [laughs]`,
            citation: 'Stranges, Alisha, and Elspeth Brown. “Explore the Palace: Smell of Old Spooge.” Narrated by Terri Roberton. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. The History of the Pussy Palace: A Digital Exhibit. 2024. Audio recording, 0:44.',
            captions: 'GroupSexRoom_Roberton_Captions',
            explicit: true
        },
        'fuck-line': {
            title: 'HEAR IT FROM MANY',
            subtitle: 'The Fuck Line',
            description: 'Multiple patrons describe spontaneously creating a “fuck line” in the group sex room.',
            src: '/assets/audio/GroupSexRoom_Fuck-Line_Audio.V3.mp3',
            narrators: ['Olender', 'Dutrizac', 'Irwin', 'Olender', 'Herlihy', 'Dutrizac'], 
            narratorTimings: [0, 5, 53.5, 73.5, 85, 111.5],
            transcription: `Sabrina Olender \nSo, a bunch of us decided it would be great fun to create a fuck line. \n \nStephanie Dutrizac  \nWe took over this one big space that was called the group sex room. We spread the word beforehand about what was going to happen so that there would be, like, rumours and people would hear about it. I was at the door and my role was to manage the flow in and out and to get people’s consent before they went in. And there was a line up. Like, people were very excited. [laughs] And I would say, “Hi, welcome to the fuck line. This is what’s going to happen to you.” You know, “You’re going to be blindfolded, and you’re going to get fucked and you’re not going to know who’s fucking you. And you can’t ask who later, and you will never fucking know.” Which was super-hot for lots of people. And my friend, her job, she was the lube and gloves girl. And her job was to continuously give new gloves [laughs] to the tops. \n \nNancy Irwin \nThere were three fucking benches, which for those of us who frequent these kind of places, it’s something that you kneel on, and your ass is up in the air, and it usually has an angle down like this. And then there’s a place for your elbows. Right? So, it’s comfortable, and, you know, you’re comfortable.  \n \nSabrina Olender \nAnd every two minutes, you’re going to be moved from chair to chair, and then the bell’s going to ring, and you go down the line. [laughs] It ended up being a very popular space for the time that we were there. \n \nNia Herlihy \nI just saw a whole bunch of women lined up for something, and they were all sort of chatting, and they were lined up, and I was curious as to, “Oh, what are they lined up for? What is this?” So, I went past them to just kind of peek my head in. And then it was the girlfriend of my ex who was kind of heading this event, and she saw me, and she must have thought I was in line. I remember walking out of there going, “I can’t believe that just happened, and I’m sorry for butting in line, everybody. I didn’t mean it.” \n \nStephanie Dutrizac  \nI remember, like, talking about consent too, about what would happen, is there anything you want or don’t want. And then I did a little bit of, like, checking in, aftercare afterwards. So, it was definitely, like, a BDSM thing that wasn’t for everybody. But for people who participated, it was, like, super exciting to have that kind of complete anonymous sex and give yourself permission to do that.  `, 
            citation: 'Stranges, Alisha, and Elspeth Brown. “Explore the Palace: The Fuck Line.” Narrated by Sabrina Olender, Stephanie Dutrizac, Nancy Irwin, and Nia Herlihy. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. The History of the Pussy Palace: A Digital Exhibit. 2024. Audio recording, 2:16.', /* TODO */
            captions: 'GroupSexRoom_FuckLine_Captions',
            explicit: true
        }
    }
    
    useEffect(() => {
        loadObjectEvents('group-sex-room', Object.keys(soundbites), setHoveredSoundbiteID, setClickedSoundbiteID);
    }, []);

    useEffect(() => {
        setCurrentSoundbiteID(clickedSoundbiteID ? clickedSoundbiteID : hoveredSoundbiteID)
    }, [clickedSoundbiteID, hoveredSoundbiteID]);
    
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