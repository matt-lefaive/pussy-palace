import React, { useState } from 'react';
import '../styles/credits-expander.css';

const CreditsExpander = ({ content }) => {
    const [creditsVisible, setCreditsVisible] = useState(false);

    let expanderIcon = creditsVisible ? '—' : '+';

    return (
        <div className='credits-expander'>
            <div className='credits-button-wrapper'>
                <a href='#' onClick={() => setCreditsVisible(!creditsVisible)}>Credits</a>
                <span onClick={() => setCreditsVisible(!creditsVisible)}>{expanderIcon}</span>
            </div>
            <div className='credits-content'>
                {creditsVisible && content}
            </div>
        </div>
    )
}

export default CreditsExpander;