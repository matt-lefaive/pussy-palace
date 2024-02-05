import React, { useState }  from 'react';
import '../styles/tab-panel.css';

const TabPanel = ({ mode, tabs, content, alts }) => {
    const [currentTab, setCurrentTab] = useState(0);

    return (
        <div>
            <div className='tab-panel' role='tablist'>
                {tabs.map((x, i) => {
                    if (mode === 'text') {
                        return (
                            <div 
                                role='tab'
                                aria-selected={currentTab === i}
                                className={`tab-text${currentTab === i ? '-active' : ''}`}
                                key={`tab-text-${i}`}
                                onClick={() => setCurrentTab(i)}
                            >
                                {x}
                            </div>
                        )
                    } else if (mode === 'logo') {
                        return (
                            <div 
                                role='tab'
                                aria-selected={currentTab === i}
                                className={`tab-logo${currentTab === i ? ' tab-logo-active' : ''}`}
                                key={`tab-logo-${i}`}
                            >
                                <img 
                                    src={`../../assets/images/logos/${x}_${currentTab === i ? 'Pink' : 'White'}.png`} 
                                    onClick={() => setCurrentTab(i)}
                                    alt={alts[i]}
                                />
                            </div>
                        )
                    } else {
                        return (
                            <div 
                                role='tab'
                                aria-selected={currentTab === i}
                            >
                                {x}
                            </div>
                        )
                    }
                })}
            </div>
            <div className='tab-panel-content' role='tabpanel'>
                {content.map((c, i) => {
                    return (
                        <div
                            className={`tab-content ${currentTab === i ? '' : 'hidden'}`}
                            key={`tab-content-${i}`}
                        >
                            {c}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TabPanel;