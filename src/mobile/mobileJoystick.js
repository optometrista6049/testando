import { runtimeState }
from '../state/runtimeState.js';

const joystick = {

    active:false,

    x:0,
    y:0,

    touchId:null

};

export function isMobile(){

    return /Android|iPhone|iPad|iPod/i
        .test(navigator.userAgent);

}

export function initMobileJoystick(){

    if(!isMobile()) return;

    const size = Math.min(

        window.innerWidth * 0.18,
        90

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
        'rgba(255,255,255,0.08)';

    stick.style.border =
        '2px solid rgba(255,255,255,0.18)';

    stick.style.backdropFilter = 'blur(6px)';

    stick.style.zIndex = '999';

    document.body.appendChild(stick);

    let centerX = 0;
    let centerY = 0;

    // =====================================================
    // TOUCH START
    // =====================================================

    addEventListener('touchstart',(e)=>{

        for(const touch of e.changedTouches){

            if(
                touch.clientX >
                window.innerWidth * 0.45
            ) continue;

            joystick.active = true;

            joystick.touchId =
                touch.identifier;

            const rect =
                stick.getBoundingClientRect();

            centerX =
                rect.left + rect.width/2;

            centerY =
                rect.top + rect.height/2;

        }

    },{ passive:true });

    // =====================================================
    // TOUCH MOVE
    // =====================================================

addEventListener('touchmove',(e)=>{

    if(!joystick.active) return;

    for(const touch of e.touches){

        // SOLO touch asignado

        if(
            touch.identifier !==
            joystick.touchId
        ) continue;

        // SOLO mitad izquierda

        if(
            touch.clientX >
            window.innerWidth * 0.45
        ) continue;

        const radius = size * 0.35;

        const dx =
            (touch.clientX - centerX)
            / radius;

        const dy =
            (touch.clientY - centerY)
            / radius;

        joystick.x =
            Math.max(-1,Math.min(1,dx));

        joystick.y =
            Math.max(-1,Math.min(1,-dy));

    }

},{ passive:true });

    // =====================================================
    // TOUCH END
    // =====================================================

    addEventListener('touchend',(e)=>{

        for(const touch of e.changedTouches){

            if(
                touch.identifier !==
                joystick.touchId
            ) continue;

            joystick.active = false;

            joystick.touchId = null;

            joystick.x = 0;

            joystick.y = 0;

        }

    },{ passive:true });

}

export function getJoystickInput(){

    return joystick;

}