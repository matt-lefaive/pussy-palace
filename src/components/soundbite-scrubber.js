import React from 'react';

const SoundbiteScrubber = ({ percent, updateParent, onScrub }) => {
    const BAR_HEIGHT = 8;
    const KNOB_HEIGHT = 24;
    
    const left = {
        backgroundColor: '#FF5C97',
        height: BAR_HEIGHT,
        flexGrow: percent,
        borderTopLeftRadius: BAR_HEIGHT / 2,
        borderBottomLeftRadius: BAR_HEIGHT / 2,
        marginTop: (KNOB_HEIGHT - BAR_HEIGHT) / 2
    }

    const right = {
        backgroundColor: 'white',
        height: BAR_HEIGHT,
        flexGrow: 100 - percent,
        borderTopRightRadius: BAR_HEIGHT / 2,
        borderBottomRightRadius: BAR_HEIGHT / 2,
        marginTop: (KNOB_HEIGHT - BAR_HEIGHT) / 2
    }

    const scrubberBarOnClickHandler = e => {
        const bar = document.getElementById('soundbite-scrubber');
        const relativePosition = e.clientX - bar.getBoundingClientRect().left;
        const totalWidth = getBarWidth();
        //setPercentage((relativePosition / totalWidth) * 100);
        updateParent((relativePosition / totalWidth) * 100);
    }

    const getBarWidth = () => document.getElementById('soundbite-scrubber').getBoundingClientRect().width;


    return (
        <div 
            style={{
                    position: 'relative',
                    height: KNOB_HEIGHT
                }}
            onClick={scrubberBarOnClickHandler}
            >
            <div 
                id='soundbite-scrubber-knob'
                className='soundbite-scrubber-knob' 
                style={{left: `calc(${percent}% - ${KNOB_HEIGHT / 2}px)`}}
                draggable='true'>
            </div>
            <div id='soundbite-scrubber' className='soundbite-scrubber'>
                <div style={left}/>
                <div style={right}/>
            </div>
        </div>
        
    )
}

export default SoundbiteScrubber;