import React, { useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import SoundbiteScrubber from './soundbite-scrubber';
import PlayIcon from '../svg/play-icon';
import PauseIcon from '../svg/pause-icon';
import TranscriptIcon from '../svg/transcript-icon';
import CCIcon from '../svg/cc-icon';
import VTTViewer from './vtt-viewer';

const SoundbitePlayer = ({ src, autoplay, updateHeadshot, updateParentTimestamp }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [percentPlayed, setPercentPlayed] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [totalTime, setTotalTime] = useState(1);
    const [mediaFragment, setMediaFragment] = useState('');

    useEffect(() => {
        if (isPlaying) {
            document.getElementById('audio-player')
                .play()
                .then(setIsPlaying(true))
                .catch(err => setIsPlaying(false));
        }
    }, [isPlaying, mediaFragment])

    const getAudioTimestamp = sec => {
        sec = Math.round(sec);
        const mins = Math.floor(sec / 60)
        const secs = sec - 60 * mins;
        return `${mins}:${secs < 10 ? `0${secs}` : secs}`;
    }

    const displayTotalTime = () => {
        const audioPlayer = document.getElementById('audio-player');
        setTotalTime(audioPlayer.duration || '0:00');
    }

    const handlePlayPauseClick = () => {
        const audioPlayer = document.getElementById('audio-player');
        if (isPlaying) {
            audioPlayer.pause();
        } else {
            audioPlayer.play();
        }
        setIsPlaying(!isPlaying);
    }

    const handleTranscriptIconClick = () => {
        const transcriptionContainer = document.getElementById('transcription-container');
        if (transcriptionContainer.classList.contains('hidden')) {
            transcriptionContainer.className = 'transcription-container';
        } else {
            transcriptionContainer.className = 'transcription-container hidden';
        }
    }

    const handleCCIconClick = () => {
        const captionContainer = document.getElementById('vtt-viewer');
        if (captionContainer.classList.contains('hidden')) {
            captionContainer.className = 'vtt-viewer';
        } else {
            captionContainer.className = 'vtt-viewer hidden';
        }
    }

    const audioPlayerOnListen = () => {
        const audioPlayer = document.getElementById('audio-player');
        setCurrentTime(audioPlayer.currentTime);
        setPercentPlayed((audioPlayer.currentTime / audioPlayer.duration) * 100);
        updateHeadshot(audioPlayer.currentTime);
        updateParentTimestamp(audioPlayer.currentTime);
    }

    const getPercentFromScrubberClick = p => {
        const audioPlayer = document.getElementById('audio-player')
        setPercentPlayed(p);
        const seconds = audioPlayer.duration * p / 100;
        setCurrentTime(seconds);
        updateHeadshot(seconds);
        updateParentTimestamp(seconds);
        setMediaFragment(`#t=${seconds}`);
    }
    
    return (
        <>
            <ReactAudioPlayer 
                id='audio-player' 
                src={`${src}${mediaFragment}`} 
                onListen={audioPlayerOnListen}
                listenInterval={500}
                autoPlay={false}
                preload='auto'
                onCanPlayThrough={displayTotalTime}
            />
            
            <div className='soundbite-player-container'>
                <div className='play-pause-button-wrapper' onClick={handlePlayPauseClick}>
                    <div>
                        {isPlaying 
                            ? <PauseIcon color={'black'}/> 
                            : <PlayIcon color={'black'}/>
                        }
                    </div>
                </div>
                <div className='soundbite-progress-wrapper'>
                    <SoundbiteScrubber 
                        percent={percentPlayed} 
                        updateParent={getPercentFromScrubberClick} 
                    />
                    <div className='timestamp-container'>
                        <div className='current-time'>
                            {getAudioTimestamp(currentTime)}
                        </div>
                        <div className='total-time'>
                            {getAudioTimestamp(totalTime)}
                        </div>
                    </div>
                </div>
                <div className='transcript-button-wrapper'>
                    <div>
                        <TranscriptIcon onClick={handleTranscriptIconClick}/>
                    </div>
                </div>
                <div className='cc-button-wrapper'>
                    <div>
                        <CCIcon onClick={handleCCIconClick}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SoundbitePlayer;