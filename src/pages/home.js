import {React, useEffect} from 'react';
import { redirect } from 'react-router-dom';
import DiagonalCircleMenu from '../components/diagonal-circle-menu';
import CollabLogo from '../components/collab-logo'

const Home = () => {
    const SIDE_WIDTH = 600;
    const TRANSITION_SPEED = '1.5s'
    
    const slideWrapper = {
        position: 'relative',
        overflow: 'auto',
        maxWidth: SIDE_WIDTH,
        width: SIDE_WIDTH,
        height: '550px',
        marginTop: '10vh',
    }

    const slide = {
        position: 'absolute',
        left: -SIDE_WIDTH,
        width: SIDE_WIDTH,
        height: 'auto',
        transition: TRANSITION_SPEED
    }

    // Slide-in effects
    useEffect(() => {
        // Paragraph 1 slide-in
        setTimeout(() => {
            document.getElementById('p1').style.transition = TRANSITION_SPEED;
            document.getElementById('p1').style.left = '0px';
        }, 0);

        // Paragraph 2 slide-in
        setTimeout(() => {
            document.getElementById('p2').style.transition = TRANSITION_SPEED;
            document.getElementById('p2').style.left = '0px';
        }, 250);

        // Paragraph 3 slide-in
        setTimeout(() => {
            document.getElementById('p3').style.transition = TRANSITION_SPEED;
            document.getElementById('p3').style.left = '0px';
        }, 500);

        // Paragraph 4 slide-in
        setTimeout(() => {
            document.getElementById('p4').style.transition = TRANSITION_SPEED;
            document.getElementById('p4').style.left = '0px';
        }, 750);

        // Paragraph 5 slide-in
        setTimeout(() => {
            document.getElementById('p5').style.transition = TRANSITION_SPEED;
            document.getElementById('p5').style.left = '0px';
        }, 1000);
    }, []);

    return (
        <div style={{display: 'flex'}}>
            <div class='project-description'>
                <div style={{height: 'auto', width: '175px'}}>
                    <CollabLogo />
                </div>
                <h1 style={{marginTop:'5px'}}>The&nbsp;History&nbsp;of&nbsp;the&nbsp;Pussy&nbsp;Palace</h1>
                <h2 style={{letterSpacing: '5px'}}>A DIGITAL EXHIBIT</h2>
                <div id='p1-wrapper' style={slideWrapper}>
                    <p id='p1' style={slide}>
                        Ever wondered what it's like to visit a queer bathhouse?
                    </p>
                    <p id='p2' style={{...slide, top: '40px'}}>
                        Organized by the Toronto Women’s Bathhouse Committee, the Pussy Palace was a series of sex-positive bathhouse events for queer women and trans people in Toronto, Canada (c. 1998 to mid-2010s). On September 14, 2000, police officers from Toronto’s 52 division interrupted over 350 patrons in what became the last major police raid of a queer bathhouse in Canadian history.  
                    </p>
                    <p id='p3' style={{...slide, top: '170px'}}>
                        A blend of digital art, sound, and text, this exhibit — created by the LGBTQ Oral History Digital Collaboratory (Elspeth Brown, Director) — draws on 36 oral histories with organizers, patrons, and allies of the Pussy Palace. Beginning in the 1970s and concluding in the present, each section of the exhibit opens a different chapter in the history of the Palace events.  
                    </p>
                    <p id='p4' style={{...slide, top: '300px'}}>
                        Enter the timeline to explore the Palace, the infamous 2000 police raid, the early histories that informed this moment of radical sexual culture in Toronto's LGBTQ+ communities, and more! 
                    </p>
                    <p id='p5' style={{...slide, top: '390px'}}>
                        Many thanks to all the narrators for making this digital exhibit possible, as well as to the Collaboratory team; a full list of credits can be found here.  
                    </p>
                </div>
            </div>
            <div className='menu-buffer'></div>
            <div style={{display:'flex', alignItems:'center'}}>
                <DiagonalCircleMenu />
            </div>
            <div className='menu-buffer'></div>
        </div>
    )
}

export default Home;