import React from 'react';
import IconHeadphones from '../svg/Icon_Headphones';
import IconGlowingObjectOutline from '../svg/Icon_Glowing_Object_Outline';
import IconExplicit from '../svg/Icon_Explicit';

const ExploreIconRow = () => {
    return (
        <div id='explore-icon-row'>
            <div style={{display: 'flex'}}>
                <div className='icon-row-flex-child'>
                    <IconHeadphones />
                </div>
                <div className='icon-row-flex-child duck-background'>
                    <div className='duck-icon-bounder'>
                        <IconGlowingObjectOutline />
                    </div>
                </div>
                <div className='icon-row-flex-child'>
                    <IconExplicit />
                </div>
            </div> 
            <div style={{display: 'flex'}}>
                <div className='icon-row-flex-child'>
                    <p>Wear Headphones</p>
                </div>
                <div className='icon-row-flex-child'>
                    <p>Click Glowing Objects</p>
                </div>
                <div className='icon-row-flex-child'>
                    <p>Explicit Content</p>
                </div>
            </div> 
        </div>
    )
}

export default ExploreIconRow;