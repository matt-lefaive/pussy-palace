import React, { useEffect } from 'react';
import ExploreSidebar from '../components/explore-sidebar';
import Room from '../components/room';
import EntranceAssets from '../svg/Entrance_Assets';
import EntranceDoor from '../svg/Entrance_Door';

const Explore = () => {
    const photoFadeOut = {
        transition: 'opacity 5s ease',
        backgroundImage: 'url(/assets/images/entrance/Entrance_Photo.png)',
        zIndex: 5,
        position: 'absolute',
        opacity: 1
    }

    const sidebarParagraphs = [
        'The Pussy Palace was a series of radical sex parties for queer women and trans people in Toronto. Established in 1998 by the Toronto Women’s Bathhouse Committee (TWBC), and running for just over a decade, the majority of Palace events were hosted at Club Toronto — a working-class, gay men’s bathhouse sheltered inside a converted, four-story, Victorian mansion at the corner of Mutual St. and Carlton St., near Toronto’s “gay” village.',  
        'The TWBC rented the space twice a year for one night only. Pre-social media, organizers spread the word through flyer campaigns, email listservs, and good, old-fashioned word of mouth. Given the scarcity of bathhouse spaces designed specifically for queer women and trans folks, these were sell-out events that attracted upwards of 350 patrons. Doors opened at dusk and closed at dawn. By 9:00 p.m., there was quite a line outside the club, full of people buzzing with excitement and nervous energy.',  
        'Attendees remember the Palace as an electric, liberating, carefully curated, and subversive space where lesbians, queer women, trans, and gender expansive folks could explore sexuality in ways often reserved for cisgender gay men. For many, the Palace offered a rare opportunity to dance, flirt, feel sexy, hook up, swim naked outside in downtown Toronto, claim physical and figurative space, and investigate the limits of personal pleasure and shared desire without hesitation or apology.', 
        'We invite you to explore the Palace for yourself, listen to first-person accounts of the joys and tensions present within its many rooms, and get a sense for what it was like to attend “an average night” at the Palace, if there ever was such a thing.',
        'Among the Palace’s four floors, there are nine locations to visit. Explore locations in any order — whatever tickles your fancy. Each location showcases 3-6 audio soundbites, with an average duration of 1-3 minutes.',
        'Enjoy!' 
    ];

    
    /*
    useEffect(() => {
        // Position the cover photo properly over the background image, then fade out
        const photoFader = document.getElementById('photo');
        const entranceRoom = document.getElementById('entrance');
        photoFader.style.top = `${document.querySelector('.room-buffer').offsetHeight}px`;
        photoFader.style.opacity = 0;
        setTimeout(() => {
            photoFader.style.display = 'none';
        }, 5000)
    })*/
    
    return (
        <div className='room-wrapper'>
            <ExploreSidebar
                title='Explore the Palace'
                descriptions={sidebarParagraphs}
            />
            <div className='room-container'>
                <div className='room-buffer'></div>
                <Room 
                    id='entrance' 
                    style={{backgroundImage: 'url(/assets/images/entrance/Entrance_Hero.png)'}}
                    objects={[
                        {component: <EntranceDoor/>, id:'entrance-door'}
                    ]}
                />
                <div className='room-buffer'></div>
            </div>
        </div>
    )
}

export default Explore;