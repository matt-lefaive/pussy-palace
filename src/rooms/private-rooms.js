import React, { useEffect, useState } from 'react';
import ExploreSidebar from '../components/explore-sidebar';
import Room from '../components/room';
import PrivateRoomsAssets from '../svg/PrivateRooms_Assets';
import PrivateRoomsRowsOfRoomsOutline from '../svg/PrivateRooms_RowsOfRooms_Outline';
import PrivateRoomsPerryOutline from '../svg/PrivateRooms_Perry_Outline';
import PrivateRoomsMcGregorOutline from '../svg/PrivateRooms_McGregor_Outline';
import PrivateRoomsFergusonOutline from '../svg/PrivateRooms_Ferguson_Outline';
import VTTViewer from '../components/vtt-viewer';
import captions from '../captions/captions.json';
import '../styles/private-rooms.css';

const PrivateRooms = ({ loadObjectEvents }) => {
    const [hoveredSoundbiteID, setHoveredSoundbiteID] = useState(null);
    const [clickedSoundbiteID, setClickedSoundbiteID] = useState(null);
    const [currentSoundbiteID, setCurrentSoundbiteID] = useState(null);
    const [audioTimestamp, setAudioTimestamp] = useState(0);

    const sidebarParagraphs = [
        `Get a room! Here at the Pussy Palace, you can... As long as you arrived early enough. Reservations are first come first served. Rows and rows of little closets form a labyrinth of semi-private space. Yes, there were doors, but the walls were open at the top and bottom. Sound travels. With nothing but a metal frame, rubber mattress, and single bed sheet, this ain’t the Four Seasons, but no one seems to mind. If you’re looking for a modicum of privacy, these tiny bunkers can provide. Or not. If you’re feeling generous, leave the door ajar. Someone’s sure to sneak a peek or join in — with consent, of course.`
    ];

    const soundbites = {
        'rows-of-rooms': {
            title: 'HEAR IT FROM MANY',
            subtitle: 'Rows of Rooms',
            description: 'Three patrons describe the upper floors’ private rooms.',
            src: '/assets/audio/PrivateRooms_Rows-of-Rooms_Audio.mp3',
            narrators: ['Blakk', 'Perry', 'Blakk', 'Irwin', 'Perry', 'Irwin'],
            narratorTimings: [0, 6.8, 16.91, 23.07, 32.59, 40.15],
            transcription: `Lukas Blakk\nThe upper floors were more, like, mirrored hallways and then, like, the tiny little rooms with the, like, plastic-covered beds.\n\nLynda J. Perry\nThey had these rooms that seemed like it was rows. Rows of rooms with beds, almost army style or something. You know, like, little bed and mattress.\n\nLukas Blakk\nAnd the doors did not… They weren’t floor to ceiling doors. They had, like, room on top and maybe on the bottom.\n\nNancy Irwin\nAnd you had to get there early to get the best rooms. Because if you didn’t, you didn’t get a room. I mean, a room was better than no room.\n\nLynda J. Perry\nAnd people were, you know, using those rooms to have… It seemed like mostly sex going on there.\n\nNancy Irwin\nA room was a place you could invite people to come and play with you. You know, if you wanted privacy. You could also go hide in a room and just close the door, and listen to what was going on all around you. Or you could invite someone in. I mean, there were monogamous couples who went to these parties, and, you know, they’d go in a room together and they’d do whatever they felt like doing in that room, and just enjoy. You know? Or they’d do whatever they felt like doing out in the open, and they remained monogamous. `,
            citation: 'Blakk, L., Perry, L. J., & Irwin, N. (Narrators). (2022). The private rooms: Rows of rooms [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. https://URL of soundbite webpage location',
            captions: 'PrivateRooms_Rows-of-Rooms_Captions'
        },
        'perry': {
            title: 'HEAR IT FROM LYNDA J.',
            subtitle: 'Magic Wand Voyeur ',
            description: 'Patron Lynda J. Perry illuminates the subtle choreography of connecting in a scene.',
            src: '/assets/audio/PrivateRooms_Perry_Audio.mp3',
            narrators: ['Perry'],
            narratorTimings: [0],
            transcription: `Lynda J. Perry\nSomeone was getting fucked. I don’t know, fisted or with a dildo, so I had to stop and, you know, check it out, and check them out. I had my Magic Wand, so I was offering it. And also, I invited myself to watch. And I was more a voyeur. Like, I wouldn’t just watch without asking. Yeah, voyeurism has to be consensual or very clandestine. It would have been nice if there was more BDSM going on at those events. It’s more interesting, for me, anyway. Like, to watch people using equipment, and just doing all kinds of things. Like, it’s so amazing to watch. It’s like trust and love. You know, love of the person’s body, and wanting to give them an experience, like, an ecstatic experience. That’s more something that I would be into. First, I think I have to feel some kind of connection. But not necessarily, like, a big, heavy, deep one, or... You read body language too. You know, you watch somebody’s response, so you touch them in a certain way, or with a certain thing. And I always like to start really slowly and sort of subtly. Trying to connect with where they are, what they’re feeling. What they want to feel more, or less. You know, and they go somewhere. And connection. Connecting with everything. It’s like a language, or something. Or a dance you’re doing together, and I think it’s great. But, you know, the Pussy Palace is different. And a lot of times people they want to just maybe consume. They want to consume. And you’re not going to have a real sensitive… But I think it was a very good thing those particular events. `,
            citation: 'Perry, L. J. (Narrator). (2022). The private rooms: Magic wand voyeur [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. https://URL of soundbite webpage location',
            captions: 'PrivateRooms_Perry_Captions'
        },
        'mcgregor': {
            title: 'HEAR IT FROM HANLON',
            subtitle: 'Mercenary Isn’t the Right Word',
            description: 'Anticipation and excitement: Patron Hanlon McGregor captures the allure of the private rooms.',
            src: '/assets/audio/PrivateRooms_McGregor_Audio.mp3',
            narrators: ['McGregor'],
            narratorTimings: [0],
            transcription: `Hanlon McGregor\nSo, I was seeing someone at the time. And both of us, although we were in consensual open relationships, it was hard to figure out where to connect. There wasn’t an easy way to have privacy. So, when we found out about Pussy Palace, we were like, “Oh yeah, we need to go to that together and get a private room, and...” I remember there sort of being a contrast between the energy and the physical space. Like, in our room, the walls were very hard, the bed was kind of small, and, if I remember rightly, it had a gym mat kind of feeling to it. It just felt very… Mercenary isn’t the right word, but, like, pared down. And I didn’t care. But I think that there was sort of this need to accept that this is what it is, this is what’s possible. But there was, like, an excitement too. It had that feeling of: you’re in a very intentional space, you’re anticipating what’s going to happen, and it seems like anything could happen. And I also have the feeling that there was some kind of thing where other people were waiting for the room, or there was a limited number of rooms. And so, we were conscious of the longer we held that room, the less chance someone else would have. So, I think that, at some point, we turned in our key so someone else could use the room. It was very special. Yes, the room could have been cushier. Like, if every room had been like a hotel room, or whatever. But it just felt like you couldn’t get more perfect, in terms of feeling like you were inside this womb space that was protected. It was fantastic. `,
            citation: 'McGregor, H. (Narrator). (2022). The private rooms: Mercenary isn’t the right word [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. https://URL of soundbite webpage location',
            captions: 'PrivateRooms_McGregor_Captions'
        },
        'ferguson': {
            title: 'HEAR IT FROM T’HAYLA',
            subtitle: 'Does Anybody Have Lube?',
            description: 'Sex can be social, with a little help from your friends, as Patron T’Hayla Ferguson explains.',
            src: '/assets/audio/PrivateRooms_Ferguson_Audio.mp3',
            narrators: ['Ferguson'],
            narratorTimings: [0],
            transcription: `T’Hayla Ferguson\nPeople are standing in the hall talking. People are in the next room having sex. And people from the room are yelling out, “Does anybody have lube?” And three bottles of lube go in like bombs because it’s like, “Oh you need lube? Here, have lube.” It’s social. I mean, I know the guys that go to the bathhouse all the time. They never talk to anybody, they never look anybody in the eye, they don’t know anybody’s name, and they would not interact with each other. And it’s like, “Oh hell.” We’re here, we’re going to talk in the stairwell. We’re going to be standing in the kitchen gabbing about stuff while somebody’s boiling a dick in a bowl to get it clean for the next player. It’s way more communal. And it’s just like, “Wow, this is great. Can we live here? Take the place over permanently?”`,
            citation: 'Ferguson, T. (Narrator). (2022). The private rooms: Does anybody have lube? [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. https://URL of soundbite webpage location',
            captions: 'PrivateRooms_Ferguson_Captions'
        }
    }
    
    useEffect(() => {
        loadObjectEvents('private-rooms', Object.keys(soundbites), setHoveredSoundbiteID, setClickedSoundbiteID);
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
                    id='private-rooms' 
                    style={{backgroundImage: 'url(/assets/images/explore-hero/PrivateRooms_Hero.png)'}}
                    soundbite={currentSoundbiteID && soundbites[currentSoundbiteID]}
                    decorations={[
                        {component: <PrivateRoomsAssets />, id: 'private-rooms-assets'}
                    ]}
                    objects={[
                        {component: <PrivateRoomsRowsOfRoomsOutline />, id: 'private-rooms-rows-of-rooms-outline'},
                        {component: <PrivateRoomsPerryOutline />, id: 'private-rooms-perry-outline'},
                        {component: <PrivateRoomsMcGregorOutline />, id: 'private-rooms-mcgregor-outline'},
                        {component: <PrivateRoomsFergusonOutline />, id: 'private-rooms-ferguson-outline'}
                    ]}
                />
                <div className='room-buffer'></div>
            </div>
        </div>
    )
}

export default PrivateRooms;