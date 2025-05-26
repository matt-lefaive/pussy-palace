import React, { useEffect, useState } from 'react';
import ExploreSidebar from '../components/explore-sidebar';
import Room from '../components/room';
import CatWalkAssets from '../svg/CatWalk_Assets';
import CatWalkCampbellSmithOutline from '../svg/CatWalk_CampbellSmith_Outline';
import CatWalkDutrizacOutline from '../svg/CatWalk_Dutrizac_Outline';
import CatWalkIrwinOutline from '../svg/CatWalk_Irwin_Outline';
import CatWalkMalletteOutline from '../svg/CatWalk_Mallette_Outline';
import CatWalkRobertonOutline from '../svg/CatWalk_Roberton_Outline';
import CatWalkToughSweetOutline from '../svg/CatWalk_Tough+Sweet_Outline';
import VTTViewer from '../components/vtt-viewer';
import captions from '../captions/captions.json';
import '../styles/cat-walk.css';

const CatWalk = ({ loadObjectEvents }) => {
    const [hoveredSoundbiteID, setHoveredSoundbiteID] = useState(null);
    const [clickedSoundbiteID, setClickedSoundbiteID] = useState(null);
    const [currentSoundbiteID, setCurrentSoundbiteID] = useState(null);
    const [audioTimestamp, setAudioTimestamp] = useState(0);

    const sidebarParagraphs = [
        `You arrive on the second floor and things seem to open up. You’re standing at the base of the main staircase, grasping the big wooden banister. Patrons hug the railing in an endless line, posing, watching, cruising. Everyone’s looking fine. Palace fashion is diverse: leather, lace, latex, and more. It’s about feeling seen, confident, sexy; communicating a certain vibe to potential partners; and making a statement... At least until the clothes come off.`
    ];

    const soundbites = {
        'mallette': {
            title: 'HEAR IT FROM TERA',
            subtitle: '23-inch Bells',
            description: 'Queer women’s spaces, like the Pussy Palace, prompt Tera Mallette to sport a more masculine look, with bellbottoms, tight tank top, and anarchist cap.',
            src: '/assets/audio/CatWalk_Mallette_Audio.mp3',
            narrators: ['Mallette'],
            narratorTimings: [0],
            transcription: `Tera Mallette\nI had a particular look at that time. It was very of that time, maybe a little past that time. It was very raver, so I had these huge, huge pants with, like, these 23-inch bells on each leg. Amazing. They were men’s pants, and I would wear them with a really tight tank top, and usually a military shirt or jacket on top. And probably a military cap with an anarchist symbol on it. When I wore that outfit, it felt safer to be in queer women’s spaces with a more masculine presentation because it made it harder for me to be gauged as trans by people. So, I would often take on a more masculine presentation so that people didn’t… “Oh, trans woman.” `,
            citation: 'Stranges, Alisha, and Elspeth Brown. “Explore the Palace: 23-inch Bells.” Narrated by Tera Mallette. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. The History of the Pussy Palace: A Digital Exhibit. 2024. Audio recording, 0:51.',
            captions: 'CatWalk_Mallette_Captions',
            explicit: false
        },
        'roberton': {
            title: 'HEAR IT FROM TERRI',
            subtitle: 'Leather Femdom',
            description: 'Patron Terri Roberton describes her leather femdom outfit: black corset, fishnet stockings, platform heels, and more.',
            src: '/assets/audio/CatWalk_Roberton_Audio.mp3',
            narrators: ['Roberton'],
            narratorTimings: [0],
            transcription: `Terri Roberton\nI know exactly what I was wearing. I had a black corset and a black, push-up bra and fishnet stockings that I think were really big diamonds. I remember taking extra care with my hair and curling my hair, and making sure that I had lipstick. And having the shaving of the body so that it’s nice and smooth for rubbing up against people. A nice manicure and pedicure. Yeah. Like, the proper preparations for a femme to go out. And the leather dom part just the fun, playful, open, curious attitude that inspires play and welcomes something to happen, some kind of phenomenon. `,
            citation: 'Stranges, Alisha, and Elspeth Brown. “Explore the Palace: Leather Femdom.” Narrated by Terri Roberton. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. The History of the Pussy Palace: A Digital Exhibit. 2024. Audio recording, 0:46.',
            captions: 'CatWalk_Roberton_Captions',
            explicit: false
        },
        'tough-sweet': {
            title: 'HEAR IT FROM MANY',
            subtitle: 'Tough & Sweet',
            description: 'Leather, lace, PVC...what’s not to like? Dynamic duo Ange Beever and Robin Woodward describe their classic “butch and femme” attire.',
            src: '/assets/audio/CatWalk_Tough+Sweet_Audio.mp3',
            narrators: ['Beever', 'Woodward', 'Beever', 'Woodward'],
            narratorTimings: [0, 7.072, 29.08, 35.053],
            transcription: `Ange Beever\nSo, I was definitely wearing a leather vest with no shirt. I had chaps on at some point, but I probably ended up in black underwear.\n\nRobin Woodward\nI was wearing a black bra. It may or may not have been PVC, that part I don’t remember. A pair of black, knee-high boots, and a vintage, pink-satin garter belt. The sort of mix of current and vintage. I mean, it was the new millennium, so it was still a little late ’90s vibe.\n\nAnge Beever\nWe’re like classic butch and femme, right? Leather and lace. Tough and sweet. \n\nRobin Woodward\nWe would have gotten dressed together, so it would have been a, “What do you think about this?” There was definitely a little bit of sex club chic in our minds as we got dressed. Or, at least our version of it at the time. `,
            citation: 'Stranges, Alisha, and Elspeth Brown. “Explore the Palace: Tough & Sweet.” Narrated by Ange Beever and Robin Woodward. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. The History of the Pussy Palace: A Digital Exhibit. 2024. Audio recording, 0:46. ',
            captions: 'CatWalk_Tough+Sweet_Captions',
            explicit: false
        },
        'irwin': {
            title: 'HEAR IT FROM NANCY',
            subtitle: 'Naughty Nancy’s Latex & Toys',
            description: 'Patron Nancy Irwin emphasizes the virtues of latex and teeny, tiny toy bags.',
            src: '/assets/audio/CatWalk_Irwin_Audio.mp3',
            narrators: ['Irwin'],
            narratorTimings: [0],
            transcription: `I would have very commonly worn a latex dress. I may have started out in high heels. I would have ended up not in high heels. Unlike the men, women tended to wear outfits. But those of us who were fucking and doing other kinds of play, I mean, sometimes the outfits just come off. Yeah, you’re talking to somebody… If I was going to a fetish party, which I did a lot of, we would spend hours getting dressed. And we would plan for two days what we were going to wear, but to a bathhouse party? Whatever outfit I wore was minimal, and might end up off. I mean, a latex dress, it’s like woosh. You know, it’s as quick and easy as a tank-top. A slightly long tank-top. That’s the outfit. The bag has lube, gloves, and various toys. We would bring chucks. Chucks are disposable incontinence pads that you can just throw down, and they’re called chucks because you chuck ’em out when you’re done. Some people show up with like a frigging suitcase of toys. I’m lazy. So, I like to have a small collection of fun toys that are easy to use. I don’t have to like swing real hard to throw a flogger. You know, a little tiny rubber one will do quite a trick. So, the outfit, wasn’t the important part, the toy bag’s the important part.`,
            citation: 'Stranges, Alisha, and Elspeth Brown. “Explore the Palace: Naughty Nancy’s Latex & Toys.” Narrated by Nancy Irwin. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. The History of the Pussy Palace: A Digital Exhibit. 2024. Audio recording, 1:34.',
            captions: 'CatWalk_Irwin_Captions',
            explicit: true
        },
        'campbell-smith': {
            title: 'HEAR IT FROM NOELLE',
            subtitle: 'Leather Pants with a Fringe',
            description: 'Bartender Noelle Campbell-Smith rocks leather pants with fringe by Canadian designer Wayne Clark, a gift from her dad.',
            src: '/assets/audio/CatWalk_CampbellSmith_Audio.mp3',
            narrators: ['CampbellSmith'],
            narratorTimings: [0],
            transcription: `Noelle Campbell-Smith\nBecause of my drag persona, I had a signature outfit that I liked to wear. Leather pants with a fringe, a long fringe, really soft ones. A cowboy shirt made of leather and probably a black tank top right underneath, zipped-up and hidden. And perhaps, usually, a cowboy hat. And they weren’t tight leather pants, like... There were only two pairs ever made. They were Wayne Clark’s, who was a Canadian Designer, quite famous Canadian Designer. And he’d made two pairs, and my dad happened to get one of them at an auction. And at some point, he gifted them to me, and they were just the most comfortable things. But I would have dragged up to. So, with sideburns. I wanted to still have that, like, “here I am as your bartender, but I’m special tonight. And I’m here to entertain you a little bit.” Greeting people with enthusiasm. You know, just getting into the spirit. Everybody was in such a good mood and having such a wonderful time, and, yeah, I wanted to, kind of like, amp it up. `,
            citation: 'Stranges, Alisha, and Elspeth Brown. “Explore the Palace: Leather Pants with a Fringe.” Narrated by Noelle Campbell-Smith. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. The History of the Pussy Palace: A Digital Exhibit. 2024. Audio recording, 1:03.',
            captions: 'CatWalk_CampbellSmith_Captions',
            explicit: false
        },
        'dutrizac': {
            title: 'HEAR IT FROM STEPHANIE',
            subtitle: 'Getting Dirty',
            description: 'Patron Stephanie Dutrizac gets messy in her lacy lingerie, reclaiming femme-ness outside the cismale gaze.',
            src: '/assets/audio/CatWalk_Dutrizac_Audio.mp3',
            narrators: ['Dutrizac'],
            narratorTimings: [0],
            transcription: `Stephanie Dutrizac\nFolks I hung out with, we were very much about not standing around in our perfect outfits, but in getting dirty and messy. So, it would have been really slutty, like, lacy stuff. Black and red fish nets with, some kind of, like, lacy lingerie, but very little and very practical, so... When I first came to Toronto, I presented in a very androgynous way. And I came to, sort of, reclaim this femme-ness that I had rejected before. You know, I’m in my early twenties, right? So, I’m exploring what it means to be a feminist, and can you wear heels? And all these stuff that seem ridiculous to me now, but at the time were important things that I was working through. So, I was reclaiming lingerie, reclaiming a bunch of femme stuff for an audience that was women and trans people and butches. By trans, I should mention, I’m using that in a really umbrella, broad way that includes, like, non-binary, gender fluid, butches, bois. Like, that whole spectrum. There was a lot of judgment about being into certain things and meaning that you’re, like, just replicating patriarchal ideas. And the folks I was associating with were really saying, “We don’t give a shit. Like, everyone deserves pleasure. Everyone deserves to express themselves however they want.” And that was my kind of feminism. That’s why I loved the kink scene so much. The body positivity was incredible. Like, there was just so much acceptance of different ages and body types and presentations, and people would shift their presentations in the community over time, and nobody... Like, it was all just celebrated. Like, it felt really comfortable. So, I would have been wearing clothes probably way more femme and quote unquote sexy than I would have in my day-to-day life, because it was a space where I felt excited and safe to present in that way.`,
            citation: 'Stranges, Alisha, and Elspeth Brown. “Explore the Palace: Getting Dirty.” Narrated by Stephanie Dutrizac. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. The History of the Pussy Palace: A Digital Exhibit. 2024. Audio recording, 1:59.',
            captions: 'CatWalk_Dutrizac_Captions',
            explicit: false
        }
    }
    
    useEffect(() => {
        loadObjectEvents('cat-walk', Object.keys(soundbites), setHoveredSoundbiteID, setClickedSoundbiteID);
    }, []);

    useEffect(() => {
        setCurrentSoundbiteID(clickedSoundbiteID ? clickedSoundbiteID : hoveredSoundbiteID)
    }, [clickedSoundbiteID, hoveredSoundbiteID]);
    
    const updateAudioTimestamp = timestamp => setAudioTimestamp(timestamp);

    return (
        <div className='room-wrapper'>
            {currentSoundbiteID && <VTTViewer captions={captions[soundbites[currentSoundbiteID].captions]} timestamp={audioTimestamp}/>}
            
            <ExploreSidebar
                title='The Cat Walk'
                descriptions={sidebarParagraphs}
                soundbite={currentSoundbiteID && soundbites[currentSoundbiteID]}
                autoplay={clickedSoundbiteID ? true : false}
                updateParentTimestamp={updateAudioTimestamp}
            />

            <div className='room-container'>
                <div className='room-buffer'></div>
                <Room 
                    id='cat-walk' 
                    style={{backgroundImage: 'url(/assets/images/explore-hero/CatWalk_Hero.png)'}}
                    soundbite={currentSoundbiteID && soundbites[currentSoundbiteID]}
                    decorations={[
                        {component: <CatWalkAssets />, id: 'cat-walk-assets'}
                    ]}
                    objects={[
                        {component: <CatWalkCampbellSmithOutline />, id: 'cat-walk-campbell-smith-outline'},
                        {component: <CatWalkDutrizacOutline />, id: 'cat-walk-dutrizac-outline'},
                        {component: <CatWalkIrwinOutline />, id: 'cat-walk-irwin-outline'},
                        {component: <CatWalkMalletteOutline />, id: 'cat-walk-mallette-outline'},
                        {component: <CatWalkRobertonOutline />, id: 'cat-walk-roberton-outline'},
                        {component: <CatWalkToughSweetOutline />, id: 'cat-walk-tough-sweet-outline'}
                    ]}
                />
                <div className='room-buffer'></div>
            </div>
        </div>
    )
}

export default CatWalk;