import { runtimeState }
from '../state/runtimeState.js';

const joystick = {

    active:false,

    x:0,
    y:0

};

export function isMobile(){

    return /Android|iPhone|iPad|iPod/i
        .test(navigator.userAgent);

}

export function initMobileJoystick(){

    if(!isMobile()) return;

    const size = Math.min(

        window.innerWidth * 0.22,
        110

    );

    const stick = document.createElement('div');

    stick.id = 'mobileJoystick';

    stick.style.position = 'fixed';

    stick.style.left = '20px';

    stick.style.bottom = '20px';

    stick.style.width = `${size}px`;

    stick.style.height = `${size}px`;

    stick.style.borderRadius = '50%';

    stick.style.background =
        'rgba(255,255,255,0.12)';

    stick.style.border =
        '2px solid rgba(255,255,255,0.25)';

    stick.style.backdropFilter = 'blur(4px)';

    stick.style.zIndex = '999';

    document.body.appendChild(stick);

    let centerX = 0;
    let centerY = 0;

    stick.addEventListener('touchstart',(e)=>{

        joystick.active = true;

        const rect =
            stick.getBoundingClientRect();

        centerX = rect.left + rect.width/2;

        centerY = rect.top + rect.height/2;

    });

    stick.addEventListener('touchmove',(e)=>{

        if(!joystick.active) return;

        const touch = e.touches[0];

        const radius = size * 0.35;

        const dx =
            (touch.clientX - centerX) / radius;

        const dy =
            (touch.clientY - centerY) / radius;

        joystick.x =
            Math.max(-1,Math.min(1,dx));

        joystick.y =
            Math.max(-1,Math.min(1,dy * -1));

    });

    stick.addEventListener('touchend',()=>{

        joystick.active = false;

        joystick.x = 0;

        joystick.y = 0;

    });

}

export function getJoystickInput(){

    return joystick;

}