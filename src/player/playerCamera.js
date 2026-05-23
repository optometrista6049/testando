import { camera }
from '../core/camera.js';

import { fixCameraCollision }
from './playerCameraCollision.js';

import {

    getHeightAt

} from '../terrain/terrainHeight.js';

import {

    runtimeState

} from '../state/runtimeState.js';

// =====================================================
// CAMERA STATE
// =====================================================

const cam = runtimeState.camera;

// =====================================================
// DESKTOP
// =====================================================

let drag = false;

addEventListener("mousedown",()=>{

    drag = true;

});

addEventListener("mouseup",()=>{

    drag = false;

});

addEventListener("mousemove",e=>{

    if(!drag) return;

    cam.ax -= e.movementX * 0.005;

    cam.ay -= e.movementY * 0.005;

    cam.ay = Math.max(

        -0.8,

        Math.min(1.2,cam.ay)

    );

});

// =====================================================
// MOBILE TOUCH SYSTEM
// =====================================================

let lastTouchX = 0;
let lastTouchY = 0;

let cameraTouchId = null;

let pinchDistance = null;

// =====================================================
// TOUCH START
// =====================================================

addEventListener("touchstart",(e)=>{

    // pinch detectado

    if(e.touches.length === 2){

        pinchDistance = null;

        return;

    }

    for(const touch of e.changedTouches){

        // SOLO mitad derecha pantalla

        if(

            touch.clientX <
            window.innerWidth * 0.35

        ) continue;

        cameraTouchId =
            touch.identifier;

        lastTouchX = touch.clientX;

        lastTouchY = touch.clientY;

    }

},{ passive:true });

// =====================================================
// TOUCH MOVE
// =====================================================

addEventListener("touchmove",(e)=>{

    // =====================================================
    // PINCH ZOOM
    // =====================================================



// pinch SOLO si hay 2 dedos en derecha

// =====================================================
// TWO FINGER ZOOM
// SOLO LADO DERECHO
// =====================================================

const rightTouches = [];

for(const touch of e.touches){

    if(
        touch.clientX >
        window.innerWidth * 0.35
    ){

        rightTouches.push(touch);

    }

}

// =====================================================
// ZOOM
// =====================================================

if(rightTouches.length === 2){

    const avgY =

        (
            rightTouches[0].clientY +
            rightTouches[1].clientY
        ) * 0.5;

    if(pinchDistance !== null){

        const delta =
            avgY - pinchDistance;

        const zoomSpeed =

            window.innerWidth < 700
            ? 0.03
            : 0.02;

        cam.targetDistance +=
            delta * zoomSpeed;

        cam.targetDistance = Math.max(

            cam.minZoom,

            Math.min(

                cam.maxZoom,

                cam.targetDistance

            )

        );

    }

    pinchDistance = avgY;

    return;

}

pinchDistance = null;

    // =====================================================
    // CAMERA DRAG
    // =====================================================

    for(const touch of e.touches){

        if(

            touch.identifier !==
            cameraTouchId

        ) continue;

        const dx =
            touch.clientX - lastTouchX;

        const dy =
            touch.clientY - lastTouchY;

        cam.ax -= dx * 0.005;

        cam.ay -= dy * 0.005;

        cam.ay = Math.max(

            -0.8,

            Math.min(1.2,cam.ay)

        );

        lastTouchX = touch.clientX;

        lastTouchY = touch.clientY;

    }

},{ passive:true });

// =====================================================
// TOUCH END
// =====================================================

addEventListener("touchend",(e)=>{

    for(const touch of e.changedTouches){

        if(

            touch.identifier ===
            cameraTouchId

        ){

            cameraTouchId = null;

        }

    }

});

// =====================================================
// WHEEL ZOOM
// =====================================================

addEventListener("wheel", e => {

    cam.targetDistance +=
        e.deltaY * 0.01;

    cam.targetDistance = Math.max(

        cam.minZoom,

        Math.min(
            cam.maxZoom,
            cam.targetDistance
        )

    );

});

// =====================================================
// BLOCK CONTEXT MENU
// =====================================================

addEventListener("contextmenu", e => {

    e.preventDefault();

});

// =====================================================
// SMOOTH ZOOM
// =====================================================

function updateZoom(){

    cam.distance +=

        (
            cam.targetDistance -
            cam.distance
        ) * 0.08;

}

// =====================================================
// UPDATE CAMERA
// =====================================================

export function updateCamera(){

    if(!runtimeState.player) return;

    updateZoom();

    const p = runtimeState.player.position;

    const r = cam.distance;

    camera.position.x =

        p.x +

        r *

        Math.sin(cam.ax) *

        Math.cos(cam.ay);

    camera.position.z =

        p.z +

        r *

        Math.cos(cam.ax) *

        Math.cos(cam.ay);

    camera.position.y =

        p.y +

        r *

        Math.sin(cam.ay);

    // =====================================================
    // GROUND LIMIT
    // =====================================================

    const groundCam =

        getHeightAt(

            camera.position.x,
            camera.position.z

        ) + 2;

    if(camera.position.y < groundCam){

        camera.position.y = groundCam;

    }

    // =====================================================
    // COLLISION
    // =====================================================

    fixCameraCollision(p);

    // =====================================================
    // LOOK PLAYER
    // =====================================================

    camera.lookAt(

        p.x,
        p.y + 1.5,
        p.z

    );

}

// =====================================================
// EXPORTS
// =====================================================

export function getCameraDistance(){

    return cam.distance;

}