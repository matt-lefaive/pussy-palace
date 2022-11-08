import {React, useEffect} from 'react';
//import { redirect } from 'react-router-dom';
import DiagonalCircleMenu from '../components/diagonal-circle-menu';
import CollabLogo from '../components/collab-logo'

const Home = () => {
    const SIDE_WIDTH = 600;
    const TRANSITION_SPEED = '1.5s'
    
    const descriptionWrapper = {
        position: 'relative',
        overflow: 'auto',
        maxWidth: SIDE_WIDTH,
        width: SIDE_WIDTH,
        height: '550px',
        marginTop: '10vh',
    }

    const fadeOut = {
        visibility: 'hidden',
        opacity: 0,
        transition: `visibility 0s ${TRANSITION_SPEED}, opacity ${TRANSITION_SPEED} linear` 
    }

    const blackScreen = {
        backgroundColor:'black', 
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
    }

    // Fade-in effects
    useEffect(() => {
        const black1 = document.getElementById('black-1');
        const black2 = document.getElementById('black-2');
        
        black1.style.transition = fadeOut.transition;
        black1.style.opacity = fadeOut.opacity;
        black1.style.visibility = fadeOut.visibility;
        
        setTimeout(() => {
            black2.style.transition = fadeOut.transition;
            black2.style.opacity = fadeOut.opacity;
            black2.style.visibility = fadeOut.visibility;
        }, 2000)
    });

    return (
        <>
            <div id='black-1' style={{...blackScreen, zIndex: 5}}></div>
            <div id='black-2' style={{...blackScreen, zIndex: 3}}></div>
            <div style={{display: 'flex'}}>
                <div className='project-description'>
                    <div style={{height: 'auto', width: '175px'}}>
                        <CollabLogo />
                    </div>
                    <h1 style={{marginTop:'5px'}}>The&nbsp;History&nbsp;of&nbsp;the&nbsp;Pussy&nbsp;Palace</h1>
                    <h2 style={{letterSpacing: '5px'}}>A DIGITAL EXHIBIT</h2>
                    <div id='description-wrapper' style={descriptionWrapper}>
                        <p id='p1' style={{position:'relative', zIndex:4}}>
                            Ever wondered what it's like to visit a queer bathhouse?
                        </p>
                        <p id='p2'>
                            Organized by the Toronto Women’s Bathhouse Committee, the Pussy Palace was a series of sex-positive bathhouse events for queer women and trans people in Toronto, Canada (c. 1998 to mid-2010s). On September 14, 2000, police officers from Toronto’s 52 division interrupted over 350 patrons in what became the last major police raid of a queer bathhouse in Canadian history.  
                        </p>
                        <p id='p3'>
                            A blend of digital art, sound, and text, this exhibit — created by the LGBTQ Oral History Digital Collaboratory (Elspeth Brown, Director) — draws on 36 oral histories with organizers, patrons, and allies of the Pussy Palace. Beginning in the 1970s and concluding in the present, each section of the exhibit opens a different chapter in the history of the Palace events.  
                        </p>
                        <p id='p4'>
                            Enter the timeline to explore the Palace, the infamous 2000 police raid, the early histories that informed this moment of radical sexual culture in Toronto's LGBTQ+ communities, and more! 
                        </p>
                        <p id='p5'>
                            Many thanks to all the narrators for making this digital exhibit possible.  
                        </p>
                    </div>
                </div>
                <div className='menu-buffer'></div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <DiagonalCircleMenu />
                </div>
                <div className='menu-buffer'></div>
            </div>
        </>
    )
}

export default Home;