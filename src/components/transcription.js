import React from 'react';
import CloseIcon from '../svg/close-icon';

const Transcription = ({ text, citation }) => {
    
    const onClickCloseTranscript = () => {
        document.getElementById('transcription-container').className = 'transcription-container hidden';
        document.getElementById('transcript-icon').style.color = 'white';
    }
    
    return (
        
        <div id='transcription-container' className='transcription-container hidden'>
            <div id='transcription-text' style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
                {text}
            </div>
            <div id='citation-title'>
                CITATION
            </div>
            <div id='transcription-citation'>
                {citation}
            </div>
            <div className='floor-map-close-button-wrapper' style={{textAlign: 'right'}}>
                <CloseIcon onClick={onClickCloseTranscript}/>
            </div>
        </div>
    
    )
}

export default Transcription;