import React, { useEffect, useState } from 'react';
import SoundbitePlayer from './soundbite-player';

const Soundbite = ({ title, subtitle, description, src, narrators, narratorTimings, autoplay, updateParentTimestamp }) => {
    const [narratorHeadshotIndex, setNarratorHeadshotIndex] = useState(0);
    const [narratorHeadshot, setNarratorHeadshot] = useState(narrators[narratorHeadshotIndex]);

    const updateHeadshot = timestamp => {
        if (narratorTimings.length > 1) {
            // Find last timing that is less than current timestamp
            let i = narratorTimings.length - 1;
            for (i; i >= 0; i--) {
                if (narratorTimings[i] < timestamp) {
                    break;
                }
            }
            if (narratorHeadshotIndex !== i) setNarratorHeadshotIndex(i);
        }
    }

    useEffect(() => {
        setNarratorHeadshot(narrators[narratorHeadshotIndex]);
    }, [narratorHeadshotIndex, narrators]);

    return (
        <div className='soundbite'>
            <h2 className='soundbite-title'>{title}</h2>
            <h3 className='soundbite-subtitle'>{subtitle}</h3>
            <div className='soundbite-description'>{description}</div>
            <div className='soundbite-narrator'>
                <img src={require(`../../public/assets/images/headshots/${narratorHeadshot}.png`)} alt=''/>
            </div>
            <SoundbitePlayer 
                src={src} 
                autoplay={autoplay} 
                updateHeadshot={updateHeadshot}
                updateParentTimestamp={updateParentTimestamp}/>
        </div>
    )
}

export default Soundbite;