import React, { useEffect, useState } from 'react';
import AmbientAudioPlayer from './ambient-audio-player';
import Transcription from './transcription';
import NavBar from './nav-bar';
import FloorMap from './floor-map';

const Room = ({ id, style, objects, decorations, ambient, soundbite }) => {

    const MIN_WIDTH = 800;

    const resize = () => {
        const roomDiv = document.getElementById(id);
        const sidebarDiv = document.getElementById('explore-sidebar');
        if (roomDiv && sidebarDiv) {
            const width = Math.max(window.innerWidth - sidebarDiv.offsetWidth, MIN_WIDTH);
            const height = (2160 / 2800) * width;
            roomDiv.style.setProperty('width', `${width}px`);
            roomDiv.style.setProperty('height', `${height}px`);
        }
    }

    useEffect(() => {
        resize();
        window.addEventListener('resize', resize);
    });

    return (
        <div id={id} style={style} className='room'>
            <NavBar room={id}/>
            <FloorMap room={id}/>
            {objects.map(o => {
                return (
                    <div 
                        className='room-object' 
                        id={o.id} 
                        key={o.id} 
                        tabIndex='0'>
                            {o.component}
                    </div>
                )
            })}
            {decorations.map(d => <div className='room-decoration' id={d.id} key={d.id}>{d.component}</div>)}
            {ambient && <AmbientAudioPlayer src={ambient}/>}
            {soundbite && <Transcription text={soundbite.transcription} citation={soundbite.citation}/>}
        </div>
    )
}

export default Room;