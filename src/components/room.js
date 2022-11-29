import React from 'react';
import AmbientAudioPlayer from './ambient-audio-player';

const Room = ({ id, style, objects, decorations, ambient }) => {
    return (
        <div 
            id={id} 
            style={style} 
            className='room'
        >
            {objects.map(o => <div className='room-object' id={o.id} key={o.id}>{o.component}</div>)}
            {decorations.map(d => <div className='room-decoration' id={d.id} key={d.id}>{d.component}</div>)}
            {ambient && <AmbientAudioPlayer src={ambient}/>}
        </div>
    )
}

export default Room;