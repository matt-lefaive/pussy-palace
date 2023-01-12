import React from 'react';


const VTTViewer = ({ captions, timestamp }) => {
    // Return the caption where start <= timestamp < end
    const currentCaption = captions.find(x => x.start <= timestamp*1000 && timestamp*1000 < x.end)?.text;

    return (
        <div id='vtt-viewer' className='vtt-viewer hidden'>
           {currentCaption}
        </div>
    )
}

export default VTTViewer;