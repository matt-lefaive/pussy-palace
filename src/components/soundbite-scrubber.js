import React from 'react';

const SoundbiteScrubber = ({ percent, updateParent }) => {
    const BAR_HEIGHT = 8;
    const KNOB_HEIGHT = 12;
    const KNOB_WIDTH = 2;
  
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
                style={{left: `calc(${percent}% - ${KNOB_WIDTH / 2}px)`}}
                draggable='true'>
            </div>
            <div id='soundbite-scrubber' className='soundbite-scrubber'>
                <div id='scrubber-left' style={left}/>
                <div id='srubber-right' style={right}/>
            </div>
        </div>
        
    )
}

export default SoundbiteScrubber;