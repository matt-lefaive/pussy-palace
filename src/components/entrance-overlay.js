import { useEffect } from 'react';

const EntranceOverlay = () => {
    
    const MIN_WIDTH = 800;

    const resize = () => {
        const overlay = document.getElementById('entrance-overlay');
        const sidebarDiv = document.getElementById('explore-sidebar');
        if (overlay && sidebarDiv) {
            const width = Math.max(window.innerWidth - sidebarDiv.offsetWidth, MIN_WIDTH);
            const height = (2160 / 2800) * width;
            overlay.style.setProperty('width', `${width}px`);
            overlay.style.setProperty('height', `${height}px`);
        }
    }

    useEffect(() => {
        const overlay = document.getElementById('entrance-overlay');
        overlay.style.opacity = 0;
        
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 5000);

        resize();
        window.addEventListener('resize', resize);
    })

    return null;
}

export default EntranceOverlay;