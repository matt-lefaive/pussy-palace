import React, { useEffect, useState } from 'react';
import SoundbitePlayer from './soundbite-player';
import BeeverNameTitle from '../svg/Beever_Name+Title';
import BrushwoodRoseNameTitle from '../svg/BrushwoodRose_Name+Title';
import CampbellSmithNameTitle from '../svg/CampbellSmith_Name+Title';
import ChanNameTitle from '../svg/Chan_Name+Title';
import DutrizacNameTitle from '../svg/Dutrizac_Name+Title';
import GallantNameTitle from '../svg/Gallant_Name+Title';
import HamiltonNameTitle from '../svg/Hamilton_Name+Title';
import HornickNameTitle from '../svg/Hornick_Name+Title';
import IrwinNameTitle from '../svg/Irwin_Name+Title';
import JansenNameTitle from '../svg/Jansen_Name+Title';
import MalletteNameTitle from '../svg/Mallette_Name+Title';
import McGregorNameTitle from '../svg/McGregor_Name+Title';
import MiklosNameTitle from '../svg/Miklos_Name+Title';
import OlenderNameTitle from '../svg/Olender_Name+Title';
import RacineNameTitle from '../svg/Racine_Name+Title';
import RidgleyNameTitle from '../svg/Ridgley_Name+Title';
import RobertonNameTitle from '../svg/Roberton_Name+Title';
import RoweNameTitle from '../svg/Rowe_Name+Title';
import SinghNameTitle from '../svg/Singh_Name+Title';
import VogelsNameTitle from '../svg/Vogels_Name+Title';
import WoodwardNameTitle from '../svg/Woodward_Name+Title';

const Soundbite = ({ title, subtitle, description, src, narrators, narratorTimings, autoplay, updateParentTimestamp }) => {
    const [narratorHeadshotIndex, setNarratorHeadshotIndex] = useState(0);
    const [narratorHeadshot, setNarratorHeadshot] = useState(narrators[narratorHeadshotIndex]);

    const updateHeadshot = timestamp => {
        if (narratorTimings.length > 1) {
            // Find last timing that is less than current timestamp
            let i = narratorTimings.length - 1;
            for (i; i >= 0; i--) {
                if (narratorTimings[i] < timestamp) {
                    break;
                }
            }
            if (i === -1) i = 0;
            if (narratorHeadshotIndex !== i) setNarratorHeadshotIndex(i);
        }
    }

    useEffect(() => {
        setNarratorHeadshot(narrators[narratorHeadshotIndex]);
    }, [narratorHeadshotIndex, narrators]);

    const image = () => {
        try {
            return require(`../../public/assets/images/headshots/${narratorHeadshot}.png`);
        } catch (e) {
            return require(`../../public/assets/images/headshots/${narrators[0]}.png`)
        }
    }

    return (
        <div className='soundbite'>
            <h2 className='soundbite-title'>{title}</h2>
            <h3 className='soundbite-subtitle'>{subtitle}</h3>
            <div className='soundbite-description'>{description}</div>
            <div className='soundbite-narrator'>
                <div className='narrator-name-title'>
                    {narratorHeadshot === 'Beever' && <BeeverNameTitle />}
                    {narratorHeadshot === 'BrushwoodRose' && <BrushwoodRoseNameTitle />}
                    {narratorHeadshot === 'CampbellSmith' && <CampbellSmithNameTitle />}
                    {narratorHeadshot === 'Chan' && <ChanNameTitle />}
                    {narratorHeadshot === 'Dutrizac' && <DutrizacNameTitle />}
                    {narratorHeadshot === 'Gallant' && <GallantNameTitle />}
                    {narratorHeadshot === 'Hamilton' && <HamiltonNameTitle />}
                    {narratorHeadshot === 'Hornick' && <HornickNameTitle />}
                    {narratorHeadshot === 'Irwin' && <IrwinNameTitle />}
                    {narratorHeadshot === 'Jansen' && <JansenNameTitle />}
                    {narratorHeadshot === 'Mallette' && <MalletteNameTitle />}
                    {narratorHeadshot === 'McGregor' && <McGregorNameTitle />}
                    {narratorHeadshot === 'Miklos' && <MiklosNameTitle />}
                    {narratorHeadshot === 'Olender' && <OlenderNameTitle />}
                    {narratorHeadshot === 'Racine' && <RacineNameTitle />}
                    {narratorHeadshot === 'Ridgley' && <RidgleyNameTitle />}
                    {narratorHeadshot === 'Roberton' && <RobertonNameTitle />}
                    {narratorHeadshot === 'Rowe' && <RoweNameTitle />}
                    {narratorHeadshot === 'Singh' && <SinghNameTitle />}
                    {narratorHeadshot === 'Vogels' && <VogelsNameTitle />}
                    {narratorHeadshot === 'Woodward' && <WoodwardNameTitle />}
                </div>
                <img src={image()} alt=''/>
            </div>
            <SoundbitePlayer
                src={src} 
                autoplay={autoplay} 
                updateHeadshot={updateHeadshot}
                updateParentTimestamp={updateParentTimestamp}
            />
        </div>
    )
}

export default Soundbite;