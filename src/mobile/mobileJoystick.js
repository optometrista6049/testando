import { runtimeState }
from '../state/runtimeState.js';

// =====================================================
// ESTADO JOYSTICK
// =====================================================

const joystick = {

    active:false,

    x:0,
    y:0

};

// =====================================================
// DETECTAR MOVIL
// =====================================================

export function isMobile(){

    return /Android|iPhone|iPad|iPod/i
        .test(navigator.userAgent);

}

// =====================================================
// INIT JOYSTICK
// =====================================================

export function initMobileJoystick(){

    if(!isMobile()) return;

    const stick = document.createElement('div');

    stick.id = 'mobileJoystick';

    stick.style.position = 'fixed';

    stick.style.left = '40px';

    stick.style.bottom = '40px';

    stick.style.width = '120px';

    stick.style.height = '120px';

    stick.style.borderRadius = '50%';

    stick.style.background =
        'rgba(255,255,255,0.15)';

    stick.style.border =
        '2px solid rgba(255,255,255,0.3)';

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

        const dx =
            (touch.clientX - centerX) / 40;

        const dy =
            (touch.clientY - centerY) / 40;

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

// =====================================================
// GET INPUT
// =====================================================

export function getJoystickInput(){

    return joystick;

}