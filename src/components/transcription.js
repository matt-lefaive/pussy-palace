import React from 'react';
import CloseIcon from '../svg/close-icon';

const Transcription = ({ text, citation }) => {
    
    const onClickCloseTranscript = () => document.getElementById('transcription-container').className = 'transcription-container hidden';
    
    return (
        <div id='transcription-container' className='transcription-container hidden'>
            <div className='close-button-wrapper' style={{textAlign: 'right'}}>
                <CloseIcon onClick={onClickCloseTranscript}/>
            </div>
            <div id='transcription-text' style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
                {text}
            </div>
            <div id='citation-title'>
                CITATION
            </div>
            <div id='transcription-citation'>
                {citation}
            </div>
        </div>
    )
}

export default Transcription;