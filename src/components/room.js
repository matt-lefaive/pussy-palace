import React from 'react';
import AmbientAudioPlayer from './ambient-audio-player';

const Room = ({ id, style, objects, ambient }) => {
    return (
        <div 
            id={id} 
            style={style} 
            className='room'
        >
            {objects.map(o => <div className='room-object' id={o.id} key={o.id}>{o.component}</div>)}
            {ambient && <AmbientAudioPlayer src={ambient}/>}
        </div>
    )
}

export default Room;