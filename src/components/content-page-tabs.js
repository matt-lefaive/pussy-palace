import React, { useState } from 'react';
import '../styles/content-page-tabs.css';

const ContentPageTabs = ({ titles, content }) => {
    const [currentTab, setCurrentTab] = useState(0);

    return (
        <div className='content-page-tabs'>
            <div className='content-page-tabs-panel'>
                {titles.map((title, i) => {
                    return (
                        <div
                            id={title.id}
                            role='tab'
                            aria-selected={currentTab === i}
                            className={`content-page-tab-title${currentTab === i ? '-active' : ''}`}
                            key={`content-page-tab-title-${i}`}
                            onClick={() => setCurrentTab(i)}
                        >
                            {title.name}
                        </div>
                    )
                })}
            </div>
            <div className='content-page-tabs-content'>
                {content.map((jsx, i) => {
                    return (
                        <div
                            className={`content-page-tab-content ${currentTab === i ? '' : 'hidden'}`}
                            key={`content-page-tab-content-${i}`}
                        >
                            {jsx}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ContentPageTabs;