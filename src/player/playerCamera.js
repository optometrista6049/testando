import { camera } from '../core/camera.js';

import {
    fixCameraCollision
} from './playerCameraCollision.js';

import {
    getHeightAt
} from '../terrain/terrainHeight.js';

import {
    runtimeState
} from '../state/runtimeState.js';

// =====================================================
// CAMERA STATE
// =====================================================

runtimeState.cameraState = {

    ax:0,
    ay:0.4,

    drag:false,

    camDistance:8,
    targetDistance:8,

    minZoom:4,
    maxZoom:20

};

const cam = runtimeState.cameraState;

// =====================================================
// DESKTOP CAMERA
// =====================================================

addEventListener("mousedown",()=>{

    cam.drag = true;

});

addEventListener("mouseup",()=>{

    cam.drag = false;

});

addEventListener("mousemove",(e)=>{

    if(!cam.drag) return;

    cam.ax -= e.movementX * 0.005;

    cam.ay -= e.movementY * 0.005;

    cam.ay = Math.max(
        -0.8,
        Math.min(1.2,cam.ay)
    );

});

// =====================================================
// MOBILE CAMERA
// =====================================================

let lastTouchX = 0;
let lastTouchY = 0;

addEventListener("touchstart",(e)=>{

    // ignorar joystick izquierda

    const touch = e.touches[0];

    if(touch.clientX < window.innerWidth * 0.4){

        return;

    }

    cam.drag = true;

    lastTouchX = touch.clientX;

    lastTouchY = touch.clientY;

},{ passive:true });

addEventListener("touchmove",(e)=>{

    // =====================================================
    // PINCH ZOOM
    // =====================================================

    if(e.touches.length === 2){

        const dx =
            e.touches[0].clientX -
            e.touches[1].clientX;

        const dy =
            e.touches[0].clientY -
            e.touches[1].clientY;

        const dist =
            Math.sqrt(dx*dx + dy*dy);

        if(window.lastPinchDistance){

            const delta =
                window.lastPinchDistance - dist;

            cam.targetDistance += delta * 0.01;

            cam.targetDistance = Math.max(

                cam.minZoom,

                Math.min(
                    cam.maxZoom,
                    cam.targetDistance
                )

            );

        }

        window.lastPinchDistance = dist;

        return;

    }

    // reset pinch

    window.lastPinchDistance = null;

    // =====================================================
    // CAMERA DRAG
    // =====================================================

    if(!cam.drag) return;

    if(e.touches.length !== 1) return;

    const touch = e.touches[0];

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

},{ passive:true });

addEventListener("touchend",()=>{

    cam.drag = false;

});

// =====================================================
// ZOOM
// =====================================================

addEventListener("wheel",(e)=>{

    cam.targetDistance += e.deltaY * 0.01;

    cam.targetDistance = Math.max(

        cam.minZoom,

        Math.min(
            cam.maxZoom,
            cam.targetDistance
        )

    );

});

addEventListener("contextmenu",(e)=>{

    e.preventDefault();

});

// =====================================================
// UPDATE ZOOM
// =====================================================

function updateZoom(){

    cam.camDistance +=

        (cam.targetDistance - cam.camDistance)

        * 0.05;

}

// =====================================================
// UPDATE CAMERA
// =====================================================

export function updateCamera(){

    if(!runtimeState.player) return;

    updateZoom();

    const p = runtimeState.player.position;

    const r = cam.camDistance;

    camera.position.x =
        p.x + r*Math.sin(cam.ax)*Math.cos(cam.ay);

    camera.position.z =
        p.z + r*Math.cos(cam.ax)*Math.cos(cam.ay);

    camera.position.y =
        p.y + r*Math.sin(cam.ay);

    const groundCam =

        getHeightAt(
            camera.position.x,
            camera.position.z
        ) + 2;

    if(camera.position.y < groundCam){

        camera.position.y = groundCam;

    }

    camera.lookAt(
        p.x,
        p.y + 1.5,
        p.z
    );

    fixCameraCollision(p);

}

export function getCameraDistance(){

    return cam.camDistance;

}