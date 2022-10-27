import React from 'react';

const CircleMenu = () => {
    
    const mouseEnterLabel1 = () => document.getElementById('circle-1').style.boxShadow = '0 0 30px #FF5C97';
    const mouseEnterLabel2 = () => document.getElementById('circle-2').style.boxShadow = '0 0 30px #FF5C97';
    const mouseEnterLabel3 = () => document.getElementById('circle-3').style.boxShadow = '0 0 30px #FF5C97';
    const mouseEnterLabel4 = () => document.getElementById('circle-4').style.boxShadow = '0 0 30px #FF5C97';
    const mouseEnterLabel5 = () => document.getElementById('circle-5').style.boxShadow = '0 0 30px #FF5C97';
    const mouseLeaveLabel1 = () => document.getElementById('circle-1').style.boxShadow = '';
    const mouseLeaveLabel2 = () => document.getElementById('circle-2').style.boxShadow = '';
    const mouseLeaveLabel3 = () => document.getElementById('circle-3').style.boxShadow = '';
    const mouseLeaveLabel4 = () => document.getElementById('circle-4').style.boxShadow = '';
    const mouseLeaveLabel5 = () => document.getElementById('circle-5').style.boxShadow = '';
    
    return (
        <div class='circle-menu-container'>
            <div class='semi-circle'></div>
            <div class='image-circle' onClick={() => window.location.href = '/explore'}></div>
            <div 
                id='circle-1' 
                class='menu-circle' 
                onClick={() => window.location.href = '/before'}></div>
            <div 
                id='circle-2' 
                class='menu-circle' 
                onClick={() => window.location.href = '/building'}></div>
            <div 
                id='circle-3' 
                class='menu-circle' 
                onClick={() => window.location.href = '/explore'}></div>
            <div 
                id='circle-4' 
                class='menu-circle' 
                onClick={() => window.location.href = '/raid'}></div>
            <div 
                id='circle-5' 
                class='menu-circle' 
                onClick={() => window.location.href = '/after'}></div>
            <div 
                id='menu-circle-label-1' 
                class='menu-circle-label label-center'
                onMouseEnter={mouseEnterLabel1}
                onMouseLeave={mouseLeaveLabel1}
                onClick={() => window.location.href = '/before'}>
                <div class='menu-circle-label-title'>Before the Palace</div>
                <div class='menu-circle-label-date'>1975 - 1984</div>
            </div>
            <div 
                id='menu-circle-label-2' 
                class='menu-circle-label'
                onMouseEnter={mouseEnterLabel2}
                onMouseLeave={mouseLeaveLabel2}
                onClick={() => window.location.href = '/building'}>
                <div class='menu-circle-label-title'>Building the<br/>Palace</div>
                <div class='menu-circle-label-date'>1998 - 2000</div>
            </div>
            <div 
                id='menu-circle-label-3'
                class='menu-circle-label'
                onMouseEnter={mouseEnterLabel3}
                onMouseLeave={mouseLeaveLabel3}
                onClick={() => window.location.href = '/explore'}>
                <div class='menu-circle-label-title'>Explore the<br/>Palace</div>
                <div class='menu-circle-label-date'>2000</div>
            </div>
            <div 
                id='menu-circle-label-4' 
                class='menu-circle-label'
                onMouseEnter={mouseEnterLabel4}
                onMouseLeave={mouseLeaveLabel4}
                onClick={() => window.location.href = '/raid'}>
                <div class='menu-circle-label-title'>Raid on the<br/>Palace</div>
                <div class='menu-circle-label-date'>2000 - 2005</div>
            </div>
            <div 
                id='menu-circle-label-5' 
                class='menu-circle-label label-center'
                onMouseEnter={mouseEnterLabel5}
                onMouseLeave={mouseLeaveLabel5}
                onClick={() => window.location.href = '/after'}>
                <div class='menu-circle-label-title'>After the Palace</div>
                <div class='menu-circle-label-date'>2021 - 2022</div>
            </div>
            <div id='image-circle-label'>
                <div class='image-circle-label-title'>Explore the Palace</div>
                <div class='image-circle-label-subtitle'>An Average Night</div>
                <div class='image-circle-label-date'>2000</div>
            </div>
        </div>
    )
}

export default CircleMenu;