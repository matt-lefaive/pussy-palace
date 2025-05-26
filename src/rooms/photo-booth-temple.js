import React, { useEffect, useState } from 'react';
import ExploreSidebar from '../components/explore-sidebar';
import Room from '../components/room';
import PhotoBoothTempleAssets from '../svg/PhotoBoothTemple_Assets';
import PhotoBoothTempleBrushwoodRoseOutline from '../svg/PhotoBoothTemple_BrushwoodRose_Outline';
import PhotoBoothTempleMiklosOutline from '../svg/PhotoBoothTemple_Miklos_Outline';
import PhotoBoothTempleCapturedForPosterityOutline from '../svg/PhotoBoothTemple_CapturedForPosterity_Outline';
import PhotoBoothTemplePowersOutline from '../svg/PhotoBoothTemple_Powers_Outline';
import VTTViewer from '../components/vtt-viewer';
import captions from '../captions/captions.json';
import '../styles/photo-booth-temple.css';

const PhotoBoothTemple = ({ loadObjectEvents }) => {
    const [hoveredSoundbiteID, setHoveredSoundbiteID] = useState(null);
    const [clickedSoundbiteID, setClickedSoundbiteID] = useState(null);
    const [currentSoundbiteID, setCurrentSoundbiteID] = useState(null);
    const [audioTimestamp, setAudioTimestamp] = useState(0);

    const sidebarParagraphs = [
        `In the attic of the Pussy Palace, a small room off the back staircase does double duty. At times, a resident photographer invites you to pose for a souvenir Polaroid, documenting your night at the bathhouse. Why Polaroids? They’re relatively private mementos, and, keep in mind, digital photography wasn’t yet widely accessible. Consensual voyeurism is more than welcome. You watch as some strike silly poses with friends while others opt for more serious, boudoir photos. Beside you, patrons line the walls, eagerly awaiting a visit with the Temple Priestess. When the Priestess comes on duty, she holds sacred sexual space for patrons looking to ground themselves, ease anxieties, and make the most of their Palace experience. Using a multi-modal, trauma-informed practice that blends feminist and queer theology, somatic arts, ritual, mindfulness, and craft or elemental work, the Priestess invites you to ask her for anything you feel you need. Think: ‘radical hospitality meets BDSM.’`
    ];

    const soundbites = {
        'brushwood-rose': {
            title: 'HEAR IT FROM CHLOË',
            subtitle: 'Instant Solution',
            description: 'The Polaroid’s intimacy and immediacy allows photographer Chloë Brushwood Rose to make queer relational art with Palace patrons.',
            src: '/assets/audio/PhotoBoothTemple_BrushwoodRose_Audio.mp3',
            narrators: ['BrushwoodRose'],
            narratorTimings: [0],
            transcription: `Chloë Brushwood Rose\nIn 2000, Polaroids made a huge comeback because no one had phones. And so, they reissued the Polaroid. And, like, they became, like, the queer... Everyone had them on their fridges. And so, it was like, “Oh, this is a perfect solution to the problem of... How could I do this? Would I take people’s names and then develop the film and get them photographs?” And that didn’t make sense. And so, then it was like, this Polaroid idea came up. And to me, it was just perfect because, yeah, it was instantaneous. It eliminated issues around consent because they would walk out the door with it. I mean, sometimes I wouldn’t even see the photo. Like, sometimes they’d walk away before it developed. I mean, often they’d stay because they’d be excited to look at it with me, and we’d look at it and then they’d, you know, they’d leave. But it was just perfect.\n\nAnd the aesthetic was awesome. Like, Polaroids are just sexy. You can’t take anything with a Polaroid and it doesn’t look sexy. Like, it felt like art to people. It was about the image, but it was also the process, right? Like, it felt like every time someone came in, we were doing relational art together. We were doing this performance art kind of thing where... Like, okay, so groups would come, you know, couples would come, and then people would come with one person then come back with a different person. You know, I had trans women come who had never been photographed as women, and who spoke about this experience and sort of wanted to be photographed in very particular ways. So, some people would come and really want a very particular experience of seeing themselves represented. Other people were just like, “I don’t know what to do.” You know, they were very shy, and so I would say, “Well, just... I don’t know, have fun.” Like, if they were with someone, I was like, “Just make out, and I’ll take a good photo and figure out how to…” \n\nI mean, weirdly I think it was kind of therapeutic. Like, it was this kind of interesting experience, where people used it for a lot of different reasons. Most people wanted the door closed, but then some people loved the idea of the door being open. If there was a line-up, people would watch each other. I mean, it was just fun. And then, you know, like, I once had someone... She was like, “Well, I don’t want my picture taken, but I want to take your picture.” So that’s actually one of the only ones I have, is I have a picture of me. She didn’t want to keep it.\n\nSo, I think the aesthetic was really cool and interesting. The immediacy of it was really wonderful. And it meant that the, like, the experience completed itself right in that moment and could be shared, both with me, but with others and... Like, people would not have been willing to do it, if they couldn’t walk away with that image. Like, they knew that I wasn’t, you know, that I wouldn’t be keeping anything of them. So, I think that was very important. I wish, I mean, now I’m like, “Oh my God, I wish we had all those pictures.” Because it would be such a great collection of photos. But, you know, that’s the nature of it. It’s, like, ephemeral. It disappears.`,
            citation: 'Stranges, Alisha, and Elspeth Brown. “Explore the Palace: Instant Solution.” Narrated by Chloë Brushwood Rose. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. The History of the Pussy Palace: A Digital Exhibit. 2024. Audio recording, 2:39.',
            captions: 'PhotoBoothTemple_BrushwoodRose_Captions',
            explicit: false
        },
        'miklos': {
            title: 'HEAR IT FROM LYLA',
            subtitle: 'I Still Have the Picture',
            description: 'Props, poses, and pictures: Patron Lyla Miklos remembers her time in the photo booth.',
            src: '/assets/audio/PhotoBoothTemple_Miklos_Audio.mp3',
            narrators: ['Miklos'],
            narratorTimings: [0],
            transcription: `Lyla Miklos\nI wish I could remember more about the process. I think there was props and things in the room. Because I still have the pictures, and I do have, like, some diaphanous cloth thing in front of me. So, I think there was stuff you could put in the picture with you, and you could kind of choose your pose and stuff. And since it was a picture, essentially for me, I was like, “Well, this picture[’s] for me.” But, you know, I never had anyone take a nude picture for me. Again, this was just about Lyla beyond sensory overload. I’m like, “I’m going to go do this thing, and I’m going to go do everything at the thing.”`,
            citation: 'Stranges, Alisha, and Elspeth Brown. “Explore the Palace: I Still Have the Picture.” Narrated by Lyla Miklos. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. The History of the Pussy Palace: A Digital Exhibit. 2024. Audio recording, 0:35.',
            captions: 'PhotoBoothTemple_Miklos_Captions',
            explicit: false
        },
        'captured-for-posterity': {
            title: 'HEAR IT FROM MANY',
            subtitle: 'Captured for Posterity',
            description: 'Patrons Andrea Ridgley and Terri Roberton remember the “event of photography” unfolding at the Pussy Palace.',
            src: '/assets/audio/PhotoBoothTemple_Captured-for-Posterity_Audio.mp3',
            narrators: ['Ridgley', 'Roberton', 'Ridgley', 'Roberton'],
            narratorTimings: [0, 3.043, 13.061, 35.002],
            transcription: `Andrea Ridgley\nThere was definitely space given for voyeurism.\n\nTerri Roberton\nI was watching them. I was interested in how they got people to disarm and be comfortable in front of the camera.\n\nAndrea Ridgley\nThere was something really amazing about watching people pose and take up that kind of space and that it was okay to do. You know, growing up having been socialized female, that we’re not allowed to do that, we’re not supposed to do that. People being really interested and engaged in showing off was wonderful.\n\nTerri Roberton\nWell, the possibility that it could be there was definitely capturing for posterity that this event definitely happened. Because I think we weren’t allowed to take photos just randomly because of privacy issues. So, that was a space where it could be recorded, and I think people really liked that and gravitated there to create the images. Like, all through the 80s and 90s there was a lack of any kind of sexuality for women and trans people. Like, there was nothing out there. We were not seeing images of any kind of female sexuality or women’s sexuality, and there was a need for that. There still wasn’t enough imagery out there to actually feel like you belonged anywhere. So, there was this kind of idea that, “Oh, well, we have to create this imagery, otherwise it’s not going to be there for anybody later.”  `,
            citation: 'Stranges, Alisha, and Elspeth Brown. “Explore the Palace: Captured for Posterity.” Narrated by Andrea Ridgley and Terri Roberton. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. The History of the Pussy Palace: A Digital Exhibit. 2024. Audio recording, 1:37.',
            captions: 'PhotoBoothTemple_Captured-for-Posterity_Captions',
            explicit: false
        },
        'powers': {
            title: 'HEAR IT FROM LEANNE',
            subtitle: 'The Temple Priestess',
            description: 'Temple Priestess Leanne Powers describes the tools, rituals, and care with which she welcomed curious guests.',
            src: '/assets/audio/PhotoBoothTemple_Powers_Audio.mp3',
            narrators: ['Powers'],
            narratorTimings: [0],
            transcription: `Leanne Powers\nWithin 10 minutes of it opening, I was there [laughs], for sure. And so, I’d trolley in with my suitcase and connect with the people who were working there, told them I was upstairs when they had their break before everything opened up. I’d go in, close the door, put my hands on all the walls. Take time. Orient myself in terms of the directions and set everything up. And then I would open as soon as I could.\n\nI had, like, a yoga mat, and water and juice and things to kind of help people if they needed it. And then, always had a shelf or something — sometimes I would call it an altar — and just have earth, air, fire, and water represented, as well as, sort of, sensual things. Things that you could use in, like, a small sex ritual, like this thread. So, if someone has a feeling or an understanding, and they want to break a thread, or they want to tie it around their ankle to remind themselves of what they promised with me. Tools, just physical tools. My softest flogger. And then I would hand-make paper, so people could, like, write things down for themselves, or I would write an affirmation, that sort of thing that would help. My smallest mirror [laughs], so people could look at themselves when they were saying things for themselves and feel more grounded. The surface of the water, or a mirror, was one of the oldest tools that practitioners have used. Try to weave that in for femmes and for people to be able to help themselves when they’re dissociative, for example.\n\nSometimes I would offer things. Like, give a Five-Fold Kiss. It’s a pagan term. And I’d kiss the feet. You kiss the crotch area. Kiss the chest, the mouth and the forehead. It was a way to just help someone feel good and protected, or comfortable enough to ask for more. If someone was shy, I could offer a back hug, so stand back-to-back. Sometimes I would ask permission to take off their shoes, and do that slowly and carefully while listening. Lightly hold their feet. Touch pressure points in their feet. Hold their ankles, you know, and talk about grounding. Sometimes someone would just come in and, like, get right on the bed. “I really need to try this.” Or they would just start taking their clothes off. Like, you just never know.\n\nSo, often people would come to the temple and, like, one person was really, really excited, and the other person was, like, excited-scared. [laughs] Or like, more anxiety, right? Like... And trying to figure out safe ways to open to possibilities there, but with enough rules and safety established. Trying to figure out how to negotiate that. So, a couple would come to me and be like, “This one’s excited. This one’s a little scared. Here’s what’s going on with our bodies. What can we do?” So, then I would do something where I might have them touch each other like this. Put a cloth over and around their hands so they could look each other in the eye and breathe, and say the most sweet and wonderful compliments to each other about who they are in each other’s lives. And then being able to say, “This is what I wish for you on your time alone tonight.” And then being able to hold them and initiate sexual contact for each of them, with me and through me, so that their times at the temple, it didn’t just feel like it was, like, the first time.\n\nSo, even though there was, like, sometimes pretty big line-ups, I’d try not to worry about them. The point was to feel like we had as much time as we needed. Luckily, there was a double bed, even. I was the one with the double bed. I was really... It’s the only double bed in the whole place.  `,
            citation: 'Stranges, Alisha, and Elspeth Brown. “Explore the Palace: The Temple Priestess.” Narrated by Leanne Powers. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. The History of the Pussy Palace: A Digital Exhibit. 2024. Audio recording, 3:58.',
            captions: 'PhotoBoothTemple_Powers_Captions',
            explicit: false
        }
    }
    
    useEffect(() => {
        loadObjectEvents('photo-booth-temple', Object.keys(soundbites), setHoveredSoundbiteID, setClickedSoundbiteID);
    }, []);

    useEffect(() => {
        setCurrentSoundbiteID(clickedSoundbiteID ? clickedSoundbiteID : hoveredSoundbiteID)
    }, [clickedSoundbiteID, hoveredSoundbiteID]);
    
    const updateAudioTimestamp = timestamp => setAudioTimestamp(timestamp);

    return (
        <div className='room-wrapper'>
            {currentSoundbiteID && <VTTViewer captions={captions[soundbites[currentSoundbiteID].captions]} timestamp={audioTimestamp}/>}
            
            <ExploreSidebar
                title='The Photo Booth/Temple'
                descriptions={sidebarParagraphs}
                soundbite={currentSoundbiteID && soundbites[currentSoundbiteID]}
                autoplay={clickedSoundbiteID ? true : false}
                updateParentTimestamp={updateAudioTimestamp}
            />

            <div className='room-container'>
                <div className='room-buffer'></div>
                <Room 
                    id='photo-booth-temple' 
                    style={{backgroundImage: 'url(/assets/images/explore-hero/PhotoBoothTemple_Hero.png)'}}
                    soundbite={currentSoundbiteID && soundbites[currentSoundbiteID]}
                    decorations={[
                        {component: <PhotoBoothTempleAssets />, id: 'photo-booth-temple-assets'}
                    ]}
                    objects={[
                        {component: <PhotoBoothTempleBrushwoodRoseOutline />, id: 'photo-booth-temple-brushwood-rose-outline'},
                        {component: <PhotoBoothTempleMiklosOutline />, id: 'photo-booth-temple-miklos-outline'},
                        {component: <PhotoBoothTempleCapturedForPosterityOutline />, id: 'photo-booth-temple-captured-for-posterity-outline'},
                        {component: <PhotoBoothTemplePowersOutline />, id: 'photo-booth-temple-powers-outline'}
                    ]}
                />
                <div className='room-buffer'></div>
            </div>
        </div>
    )
}

export default PhotoBoothTemple;