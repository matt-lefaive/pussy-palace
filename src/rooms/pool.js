import React, { useEffect, useState } from 'react';
import ExploreSidebar from '../components/explore-sidebar';
import Room from '../components/room';
import PoolAssets from '../svg/Pool_Assets';
import PoolCampbellSmithOutline from '../svg/Pool_CampbellSmith_Outline';
import PoolChanOutline from '../svg/Pool_Chan_Outline';
import PoolCupidBoardOutline from '../svg/Pool_Cupid-Board_Outline';
import PoolMcGregorOutline from '../svg/Pool_McGregor_Outline';
import VTTViewer from '../components/vtt-viewer';
import captions from '../captions/captions.json';
import '../styles/pool.css'

const Pool = () => {
    const [hoveredSoundbiteID, setHoveredSoundbiteID] = useState(null);
    const [clickedSoundbiteID, setClickedSoundbiteID] = useState(null);
    const [currentSoundbiteID, setCurrentSoundbiteID] = useState(null);
    const [audioTimestamp, setAudioTimestamp] = useState(0);

    const sidebarParagraphs = [
        `SPLASH! Welcome to the pool, a Pussy Palace highlight. Twilight lighting, warm silky water, and erotic scenes in every corner. You consider getting naked and diving in. You don’t want to miss your chance to let it all hang out right in downtown Toronto. A good place to spark a new connection, find your next hookup, or take a respite from the crowded dance floor.`
    ];

    const soundbites = {
        'campbell-smith': {
            title: 'HEAR IT FROM NOELLE',
            subtitle: 'Sex Everywhere',
            description: 'Volunteer Bartender Noelle Campbell-Smith revels in the extroverted eroticism on the pool deck.',
            src: '/assets/audio/Pool_CampbellSmith_Audio.mp3',
            narrators: ['CampbellSmith'],
            narratorTimings: [0],
            transcription: `Noelle Campbell-Smith\nPeople were having sex beside the pool, on the pool deck. You know, just going at it. And I was like, “Oh!” I kind of thought there would be these clinical, private rooms. And a lot people... There would just be sort of like a quiet hallway. You know, “Shh, everybody’s having sex in here.” [laughs] It was much more like, “No everybody’s having sex everywhere.”`,
            citation: 'Campbell-Smith, N. (Narrator). (2022). The pool: Sex everywhere [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. https://URL of soundbite webpage location ',
            captions: 'Pool_CampbellSmith_Captions'
        },
        'chan': {
            title: 'HEAR IT FROM B. K.',
            subtitle: 'A Deep Turquoise, Lit from Below',
            description: 'Organizer Karen B. K. Chan basks in the sensory experience of the pool: cool summer nights, warm silky water, the feel of a Gin and Tonic in hand.',
            src: '/assets/audio/Pool_Chan_Audio.mp3',
            narrators: ['Chan'],
            narratorTimings: [0],
            transcription: `Karen B. K. Chan\nI see the pool as a deep turquoise colour, lit from below. I see a lot of people kind of draped and hanging out around the perimeter of the pool area, on benches. Some in the pool, some kind of parts of themselves in the pool, but outside of the pool. People are in various states of dress and undress. Someone’s walking by with a stack of towels, trying to get back to the laundry room. The night is cool, and the sky is dark, and there’s, like, a breeze. The water is warmish and is silky and soft. And it’s just sort of...swishing, swishing around. There’s, like, faint music coming from inside and it gets louder every time somebody opens the door. I keep hearing, like, ice in my glass. Although, I think we weren’t allowed to drink on the patio. But that’s part of the feeling of having a gin and tonic. It feels kind of misty, kind of foggy. It feels magical, like a stolen summer night. `,
            citation: 'Chan, B. K. (Narrator). (2022). The pool: A deep turquoise, lit from below [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. https://URL of soundbite webpage location',
            captions: 'Pool_Chan_Captions'
        },
        'mcgregor': {
            title: 'HEAR IT FROM HANLON',
            subtitle: 'I’d Much Rather Be Naked',
            description: 'In safer spaces, like the Pussy Palace, patron Hanlon McGregor prefers nudity to bathing suits, embracing the opportunity to come as they are.',
            src: '/assets/audio/Pool_McGregor_Audio.mp3',
            narrators: ['McGregor'],
            narratorTimings: [0],
            transcription: `Hanlon McGregor\nBack then, I had a lot of dysphoria about my body. And so, it makes perfect sense now that I’ve come out as a trans man, but I didn’t like female bathing suits at all. So, the idea of going into the pool in a female bathing suit was also something that I was like, “How am I going to navigate this?” I’d much rather be naked than wear a bathing suit. I was spending a lot of energy trying to figure out what to wear, and how to put myself together, and how much stuff to bring. I know that I preferred to be nude in public. Like, in sex parties, that I preferred nudity. It’s kind of like Isadora Duncan talked about. Full nudity is much less provocative than only covering up a little. And I think I just felt more free and myself. As myself as I could be when I was naked. And so, I think I spent a lot of time in a towel when it comes right down to it, with like a bag of stuff. I was much more free in these safer spaces than I was in general. It was 2000. I was having to do temp work. I was having to basically put on a costume to go to work and pretend to be, like, a corporate drone. And because I was an artist and an actor, I sort of played the role. And I always thought of myself almost like a double agent. My clothes never felt like me. In that space, yeah, it was kind of like... I could be powerful. Nobody’s asking like, “What’s your job? What kind of car do you drive?” It’s about who you are. It’s about who you express yourself to be. It’s about your connection with other people, or at least that’s how I viewed it.`,
            citation: 'McGregor, H. (Narrator). (2022). The pool: I’d much rather be naked [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. https://URL of soundbite webpage location',
            captions: 'Pool_McGregor_Captions'
        },
        'cupid-board': {
            title: 'HEAR IT FROM MANY',
            subtitle: 'The Cupid Board',
            description: 'Multiple people recall the Cupid Board staged on the pool deck — one of many planned icebreakers that encouraged connection between newbies.',
            src: '/assets/audio/Pool_Cupid-Board_Audio.mp3',
            narrators: ['Vogels', 'Miklos', 'Vogels', 'Hornick'],
            narratorTimings: [0, 3.036, 14.062, 37.076],
            transcription: `Josey Vogels\nI remember there being a cupid board, which I thought was kind of fun.\n\nLyla Miklos\nYou could put a number on your chest and then people would write, like, love note things. And there was an area, a board where... And you’d look throughout the night. “Did someone send me a note?”\n\nJosey Vogels\nI think I made a joke in my column, at the time, that it was all very polite as opposed to… As a commentary on, culturally, female sexuality versus male sexuality being a little more overt and less polite and empathetic, whereas I felt the environment there was very inclusive and feel-good.\n\nJP Hornick\nThese aren’t spaces that were... That women and trans folk were used to, invited into, had long-standing mores and cultural practices or norms around. And so, having to establish those from the ground up, I really commend the committee for a lot of what they were pretty forward-thinking in what they were trying to do. And some people had like... People who were involved in the leather community, sure, already knew what to do in these spaces, or had a sense of what they wanted to do with this kind of space. But I really think that it was something different, that the committee didn’t just take that for granted, you know? That they really tried to anticipate and make it feel good, like a space that people could reclaim. `,
            citation: 'Vogels, J., Miklos, L., & Hornick, J. (Narrators). (2022). The pool: The cupid board [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. https://URL of soundbite webpage location',
            captions: 'Pool_Cupid-Board_Captions'
        }
    }
    
    useEffect(() => {
        const ids = ['campbell-smith', 'chan', 'mcgregor', 'cupid-board'];
        for (const id of ids) {
            const el = document.getElementById(`pool-${id}-outline`);
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
                title='The Pool'
                descriptions={sidebarParagraphs}
                soundbite={currentSoundbiteID && soundbites[currentSoundbiteID]}
                autoplay={clickedSoundbiteID ? true : false}
                updateParentTimestamp={updateAudioTimestamp}
            />

            <div className='room-container'>
                <div className='room-buffer'></div>
                <Room 
                    id='pool' 
                    style={{backgroundImage: 'url(/assets/images/explore-hero/Pool_Hero.png)'}}
                    soundbite={currentSoundbiteID && soundbites[currentSoundbiteID]}
                    decorations={[
                        {component: <PoolAssets />, id: 'pool-assets'}
                    ]}
                    objects={[
                        {component: <PoolCampbellSmithOutline />, id: 'pool-campbell-smith-outline'},
                        {component: <PoolChanOutline />, id: 'pool-chan-outline'},
                        {component: <PoolCupidBoardOutline />, id: 'pool-cupid-board-outline'},
                        {component: <PoolMcGregorOutline />, id: 'pool-mcgregor-outline'}
                    ]}
                />
                <div className='room-buffer'></div>
            </div>
        </div>
    )
}

export default Pool;