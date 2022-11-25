import React from 'react';

const Room = ({ id, style, objects }) => {
    return (
        <div 
            id={id} 
            style={style} 
            className='room'
        >
            {objects.map(o => <div className='room-object' id={o.id}>{o.component}</div>)}
        </div>
    )
}

export default Room;