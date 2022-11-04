import {React, useState, useEffect} from 'react';

const DiagonalCircleMenu = () => {
    
    const [activeCircle, setActiveCircle] = useState(3);
    const [backgroundImage, setBackgroundImage] = useState(`url(/assets/images/home/Home_Explore_Thumbnail_BG100_pink.png)`);
    const [largeCircleLabelText, setLargeCircleLabelText] = useState({title: 'Explore the Palace', subtitle: 'An Average Night', date:'2000'})

    // Update the large circle based on which small circle was last hovered over
    useEffect(() => {
        // Change background image
        setBackgroundImage([
            `url(/assets/images/home/Home_Before_Thumbnail_BG100_pink.png)`,
            `url(/assets/images/home/Home_Building_Thumbnail_BG100_pink.png)`,
            `url(/assets/images/home/Home_Explore_Thumbnail_BG100_pink.png)`,
            `url(/assets/images/home/Home_Raid_Thumbnail_BG100_pink.png)`,
            `url(/assets/images/home/Home_After_Thumbnail_BG100_pink.png)`
        ][activeCircle - 1]);

        // Change label text
        setLargeCircleLabelText([
            {title: 'Before the Palace', subtitle: 'Policing and Toronto\'s QTBIPOC Communities', date:'1975 - 1984'},
            {title: 'Building the Palace', subtitle: 'Radical Sex Organizing', date:'1998 - 2000'},
            {title: 'Explore the Palace', subtitle: 'An Average Night', date:'2000'},
            {title: 'Raid on the Palace', subtitle: 'The Night of 2000 Pussies', date:'2000 - 2005'},
            {title: 'After the Palace', subtitle: 'Researcher Reflections', date:'2021 - 2022'}
        ][activeCircle - 1]);

        // Hide "recommended start" label as appropriate
        document.getElementById('recommended-start').style.visibility = activeCircle === 3 ? 'visible' : 'hidden';
    }, [activeCircle])
    
    const onMouseEnterCover = e => setActiveCircle(Number(e.target.id.replace('circle-', '').replace('-cover', '')));
    
    
    return (
        <div className="line-menu-container">
            <span id="recommended-start">Recommended Start</span>
            <div id="large-circle-label">
                <div className='large-circle-label-title'>{largeCircleLabelText.title}</div>
                <div className='circle-title'>{largeCircleLabelText.subtitle}</div>
                <div className='circle-subtitle'>{largeCircleLabelText.date}</div>
            </div>
            <div id='diagonal'></div>
            <div id='circle-1-cover' onMouseEnter={onMouseEnterCover}></div>
            <div id='circle-2-cover' onMouseEnter={onMouseEnterCover}></div>
            <div id='circle-3-cover' onMouseEnter={onMouseEnterCover}></div>
            <div id='circle-4-cover' onMouseEnter={onMouseEnterCover}></div>
            <div id='circle-5-cover' onMouseEnter={onMouseEnterCover}></div>
            <div id='circle-1' className='small-circle'></div>
            <div id='circle-2' className='small-circle'></div>
            <div id='circle-3' className='small-circle'></div>
            <div id='circle-4' className='small-circle'></div>
            <div id='circle-5' className='small-circle'></div>
            <div id='circle-label-1' className='small-circle-label'>
                <div className='circle-title'>Before the Palace</div>
                <div className='circle-subtitle'>1975 - 1984</div>
            </div>
            <div id='circle-label-2' className='small-circle-label'>
                <div className='circle-title'>Building the Palace</div>
                <div className='circle-subtitle'>1998 - 2000</div>
            </div>
            <div id='circle-label-3' className='small-circle-label'>
                <div className='circle-title'>Explore the Palace</div>
                <div className='circle-subtitle'>2000</div>
            </div>
            <div id='circle-label-4' className='small-circle-label'>
                <div className='circle-title'>Raid on the Palace</div>
                <div className='circle-subtitle'>2000 - 2005</div>
            </div>
            <div id='circle-label-5' className='small-circle-label'>
                <div className='circle-title'>After the Palace</div>
                <div className='circle-subtitle'>2021-2022</div>
            </div>
            <div id='large-circle' style={{backgroundImage: backgroundImage}}></div>
        </div>
    )
}

export default DiagonalCircleMenu;