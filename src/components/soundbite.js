import React, { useEffect, useState } from 'react';
import SoundbitePlayer from './soundbite-player';
import ReactAudioPlayer from 'react-audio-player';

const Soundbite = ({ title, subtitle, description, src, narrators, narratorTimings, startPlaying }) => {

    return (
        <div className='soundbite'>
            <h2 className='soundbite-title'>{title}</h2>
            <h3 className='soundbite-subtitle'>{subtitle}</h3>
            <div className='soundbite-description'>{description}</div>
            <div className='soundbite-narrator'>
                <img />
            </div>
            <SoundbitePlayer src={src}/>
        </div>
    )
}

export default Soundbite;