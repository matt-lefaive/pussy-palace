import React, { useEffect, useState } from 'react';
import ExploreSidebar from '../components/explore-sidebar';
import Room from '../components/room';
import DanceFloorAssets from '../svg/DanceFloor_Assets';
import DanceFloorMalletteOutline from '../svg/DanceFloor_Mallette_Outline';
import DanceFloorMusicChlorineSexAlcoholOutline from '../svg/DanceFloor_Music-Chlorine-Sex-Alcohol_Outline';
import DanceFloorOlenderOutline from '../svg/DanceFloor_Olender_Outline';
import DanceFloorRidgleyOutline from '../svg/DanceFloor_Ridgley_Outline';
import VTTViewer from '../components/vtt-viewer';
import captions from '../captions/captions.json';

const DanceFloor = () => {
    const [hoveredSoundbiteID, setHoveredSoundbiteID] = useState(null);
    const [clickedSoundbiteID, setClickedSoundbiteID] = useState(null);
    const [currentSoundbiteID, setCurrentSoundbiteID] = useState(null);
    const [audioTimestamp, setAudioTimestamp] = useState(0);

    const sidebarParagraphs = [
        'The buzzer sounds, the threshold door opens, and you’re thrust into a great sea of bodies in various states of dress and undress. People are dancing, chatting, drinking. Laughter, liquor, and the faint smell of chlorine overtake your senses. In the distance, the DJ spins a deep, throbbing bassline that seems to expand and contract the house in time with people’s enjoyment. Sex is in the air. You’re filled with nervous anticipation. You’re wondering if anyone’s looking at you. There’s no time to stop and linger though. You’ve arrived!'
    ];

    const soundbites = {
        'mallette': {
            title: 'HEAR IT FROM TERA',
            subtitle: 'Everyone Wanted a Piece of a Trans Guy',
            description: 'Security Volunteer Tera Mallette describes the seeming diversity of the crowd, queer women’s idolatry of trans men, and the scarcity of trans women at the Palace in the early 2000s.',
            src: '/assets/audio/DanceFloor_Mallette_Audio.mp3',
            narrators: ['Mallette'],
            narratorTimings: [0],
            transcription: `I would say, I mean, it was a relatively diverse crowd in terms of queer lesbians. But then that’s not actually true. I’d say it was about 90% white, and then 10% people of colour. It was a diversity of age. So, you had everything from baby queers all the way up to… Queer folk who are not baby queers. You had very femme-presenting folk, and then you had very masculine-presenting folks. There were some trans guys there, more than a few, but almost no trans women. Like, I can’t remember running into any trans women there. In that respect, I felt very alone. The trans men, they were really popular. Everyone wanted a piece of a trans guy back then. Honestly, this feels bad to say, I almost, kind of, traded on it. Being a trans woman who presented in a masculine way, sometimes I would be perceived as a trans guy. So, certainly, I have some insight into it just because I was trading on it a bit. Highly unethical, I realize but... I really felt for a lot of trans men back then, because there was a lot of erasure of their identity in the queer women’s community, and it kind of felt like some of that was happening there. But at the same time, they seemed to be okay with it, so... [laughs] There was a lot of exoticization happening. I guess the best way to describe it is with an old argument. I’m not going to express my opinion on it, but the argument is, lesbian-identifying people sleeping with trans men, and how that can cause an erasure of identity. Because are they actually seeing the trans men as men if they’re sitting there identifying as lesbian? Is this just a one-time thing, where you’re like, “Ah pfft, I’m lesbian, but every so often, I’ll sleep with a guy?” Or is this like, “I really like trans guys, but I’m a lesbian because they’re not really guys?”`,
            citation: 'Mallette, T. (Narrator). (2022). The dance floor: Everyone wanted a piece of a trans guy [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. https://URL of soundbite webpage location',
            captions: 'DanceFloor_Mallette_Captions'
        },
        'music-chlorine-sex-alcohol': {
            title: 'HEAR IT FROM MANY',
            subtitle: 'Music, Chlorine, Sex, and Alcohol',
            description: 'Multiple Palace-goers illuminate the sights, sounds, and smells of the packed dance floor. Sex is in the air.',
            src: '/assets/audio/DanceFloor_Music-Chlorine-Sex-Alcohol_Audio.mp3',
            narrators: ['McGregor', 'Rowe', 'Hornick', 'Racine'],
            narratorTimings: [0, 31.002, 46.081, 56.07],
            transcription: `Hanlon McGregor\nI see a DJ. I keep thinking that there was kind of a not nice carpet on the floor. And I think that there was encouraging, welcoming signs everywhere, so there’s a lot of paper. [laughs] I feel like a lot of people were drinking. I liked sober sex more. But I’m not sure if I knew that yet. For me, there’s always a little bit of apprehension when lots of people are drunk. I think that alcohol was definitely something I could both smell and sense.\n\nJanet Rowe\nSo, you see lots of women dancing. Really unaware of anything going on. Lots of music, laughter. A little chlorine [laughs] because it was right beside the pool. But sex. The whole place. You could sort of smell sex.\n\nJP Hornick\nYou’ve got to understand, it was packed. Like, it was just packed. You had people who were half naked, or just wearing a towel around their waist. Right? And a pair of flip flops. Or just totally naked.\n\nRenee Racine\nSo, when you’re out at a bar, there’s always music, right? Like, loud thumping music. And so, you don’t have the same sonic sense of a hundred women in a space or 200, 300. There, the music was lower. It wasn’t a dance club. The standout thing for me is the sound of that many women having a really good time. `,
            citation: 'McGregor, H., Rowe, J., Hornick, J., & Racine, R. (Narrators). (2022). The dance floor: Music, chlorine, sex, and alcohol [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. https://URL of soundbite webpage location',
            captions: 'DanceFloor_Music-Chlorine-Sex-Alcohol_Captions'
        },
        'olender': {
            title: 'HEAR IT FROM SABRINA',
            subtitle: 'Talk Before Touch',
            description: 'Patron Sabrina Olender describes the friendly tension of queer women and trans sexual space, the pervasive need to connect socially before physically.',
            src: '/assets/audio/DanceFloor_Olender_Audio.mp3',
            narrators: ['Olender'],
            narratorTimings: [0],
            transcription: `Sabrina Olender\nOne thing that always struck me about the bathhouses is that women and people who are socialized female approach sex a lot differently than I think gay men do. There was quite a bit of socializing, talking and feeling each other out. I think every women-and-trans sex party that I’ve been to, not just at the bathhouse, there’s always this beginning part of socializing where there needs to be some talking, hanging out and hugging and “Hey, how are you? What have you been up to?” And just, sort of a... Yeah, like a connecting point. I think sometimes in our minds, you know, when you think about what’s going to happen, you think you’re just going to arrive and you’re going to grab someone and you’re just going to go shove them in a corner. And that would be great, but that’s not really the way that you get a date. [laughs] It’s friendly, but there is this undercurrent of tension, of sexiness. Something’s going to happen. And people are talking, but they’re looking around. Right? They’re like, “Who’s here? Who am I going to follow? Who’s looking at me? Is anyone looking at me?” Everyone and everything just seems so hot. The whole thing was just hot, hot, hot. And I’m not sure at the time I would say it in these words, but I think everyone felt it, that what was happening was sort of unique and precious. This was not something that was going to happen all the time. And so, I think this feeling of just wanting to grab this moment. Despite any anxiety or trepidation, just wanting to just jump in and just be in it. `,
            citation: 'Olender, S. (Narrator). (2022). The dance floor: Talk before touch [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. https://URL of soundbite webpage location',
            captions: 'DanceFloor_Olender_Captions'
        },
        'ridgley': {
            title: 'HEAR IT FROM ANDREA',
            subtitle: 'No Time to Linger',
            description: 'With wall-to-wall patrons, Andrea Ridgley is always on the move, by-passing crowded areas while moderating a nervous joy.',
            src: '/assets/audio/DanceFloor_Ridgley_Audio.mp3',
            narrators: ['Ridgley'],
            narratorTimings: [0],
            transcription: `Andrea Ridgley\nI can remember being... Not spending a lot of time on the dance floor because it was always crowded, which is great. Like, I love a sweaty dance floor, don’t get me wrong. But it’s such a small dance floor, if I remember correctly, and there was always other things to do. To hear afterwards, what was the estimated...? Like, 350 people or something like that? Like, I don’t know if it ever felt like that, but there were definitely places that were very congested. Lots of people coming and going, passing each other. There was kind of a way of moving through the space. Because there was always someone behind you or in front of you. Unless you were in very particular places in the space, you would have to stop traffic to stop and linger. So, I remember that. That sense of having to go, “Okay, I’m turning right here.” There was always an underlying — in which was my own projection, I’m sure — of anxiety. Nervousness. This idea of, “Who’s there? Who’s seeing me? Who am I seeing?” Classic ex. “Is my ex here? What’s going to happen if I see them?” What I learned later about myself is that even though I express myself outwardly, I’m actually quite anxious. Like, I am a bit of an introvert. That extroverted introvert kind of idea. So, when I get anxious, I tend to get bigger. So, I have lots of memories of, like, the next day going, “Oh my God, what did I say? What did I do?” So, the two biggest emotions: absolute joy and freedom, and intense anxiety and nervousness.`,
            citation: 'Ridgley, A. (Narrator). (2022). The dance floor: No time to linger [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. https://URL of soundbite webpage location',
            captions: 'DanceFloor_Ridgley_Captions'
        }
    }
    
    useEffect(() => {
        const ids = ['mallette', 'music-chlorine-sex-alcohol', 'olender', 'ridgley'];
        for (const id of ids) {
            const el = document.getElementById(`dance-floor-${id}-outline`);
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
                title='The Dance Floor'
                descriptions={sidebarParagraphs}
                soundbite={currentSoundbiteID && soundbites[currentSoundbiteID]}
                autoplay={clickedSoundbiteID ? true : false}
                updateParentTimestamp={updateAudioTimestamp}
            />

            <div className='room-container'>
                <div className='room-buffer'></div>
                <Room 
                    id='dance-floor' 
                    style={{backgroundImage: 'url(/assets/images/explore-hero/Dancefloor_Hero.png)'}}
                    soundbite={currentSoundbiteID && soundbites[currentSoundbiteID]}
                    decorations={[
                        {component: <DanceFloorAssets />, id: 'dance-floor-assets'}
                    ]}
                    objects={[
                        {component: <DanceFloorMalletteOutline />, id: 'dance-floor-mallette-outline'},
                        {component: <DanceFloorMusicChlorineSexAlcoholOutline />, id: 'dance-floor-music-chlorine-sex-alcohol-outline'},
                        {component: <DanceFloorOlenderOutline />, id: 'dance-floor-olender-outline'},
                        {component: <DanceFloorRidgleyOutline />, id: 'dance-floor-ridgley-outline'}
                    ]}
                />
                <div className='room-buffer'></div>
            </div>
        </div>
    )
}

export default DanceFloor;