import React, { useState, useEffect } from 'react';
import VolumeIcon from '../svg/volume-icon';
import MuteIcon from '../svg/mute-icon';

const AmbientAudioPlayer = ({ src }) => {
    const [isPlaying, setIsPlaying] = useState(true);
    
    useEffect(() => {
        const ambientAudio = document.getElementById('ambient-audio');
        try {
            ambientAudio.play();
            setIsPlaying(true);
        } catch (err) {
            setIsPlaying(false);
        }
    }, [])

    const onPlayerClick = () => {
        const ambientAudio = document.getElementById('ambient-audio');
        if (!isPlaying) {
            ambientAudio.pause();
        } else {
            ambientAudio.play();
        }
        setIsPlaying(!isPlaying);
    }

    return (
        <div className='ambient-audio-player' onClick={onPlayerClick}>
            <audio id='ambient-audio' src={src} style={{display: 'none'}}/>
            {isPlaying
                ? <MuteIcon color='white' align='center'/>
                : <VolumeIcon color='white' align='center'/>
            }
            <div>Ambient Sound</div>
        </div>
    )
}

export default AmbientAudioPlayer;