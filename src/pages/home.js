import React from 'react';
import CircleMenu from '../components/circle-menu';
import PPOHPLogo from '../components/ppohp-logo';

const Home = () => {
    return (
        <div style={{display: 'flex'}}>
            <div style={{flex: '2', marginLeft: '7.4%', maxWidth: '680px'}}>
                <h1>The History of the Pussy Palace</h1>
                <h2 style={{letterSpacing: '5px'}}>A DIGITAL EXHIBIT</h2>
                <p>
                    In 2021, the LGBTQ Oral History Digital Collaboratory collected 36 
                    interviews with organizers, patrons, and allies of the Pussy Palace 
                    -- a series of exclusive bathhouse events for queer women and trans 
                    people in Toronto. Drawing largely on audio recordings of our 
                    narrators' oral testimonies, this digital exhibit explores the 
                    history of the Pussy Palace and the infamous September 2000 police 
                    raid on the "Night of 2000 Pussies" event -- the last major police 
                    raid on a queer bathhouse in Canadian history. We invite you to visit 
                    the Palace, immerse yourself in the space, and learn about the 
                    histories that informed this moment of radical sexual culture in 
                    Toronto's LGBTQ+ communities. 
                    <span class='pink'> <strong>The website will discuss the changes 
                    the Pussy Palace went through, allow users to explore the palace at 
                    its peak, and learn about the raid on the palace and its aftermath.</strong></span>
                </p>
                <p style={{fontStyle:'bold', fontSize:'24px'}}>
                    CONTENT WARNING: The exhibit showcases explicit sexual content and vivid
                    memories of anti-queer and trans, police hostility.
                </p>
                <div style={{maxWidth: '280px', margin:'100px auto 0 auto'}}>
                    <PPOHPLogo />
                </div>
            </div>
            <CircleMenu />
        </div>
    )
}

export default Home;