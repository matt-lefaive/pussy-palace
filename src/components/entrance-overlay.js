import { useEffect } from 'react';

const EntranceOverlay = () => {
    
    useEffect(() => {
        const overlay = document.getElementById('entrance-overlay');
        overlay.style.opacity = 0;
        
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 5000)
    })

    return null;
}

export default EntranceOverlay;