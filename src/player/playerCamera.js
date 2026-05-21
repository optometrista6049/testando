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

// =========================
// ESTADO CAMARA
// =========================

runtimeState.cameraState = {

    ax: 0,
    ay: 0.4,

    drag: false,

    camDistance: 8,
    targetDistance: 8,

    minZoom: 4,
    maxZoom: 20

};

const cam = runtimeState.cameraState;

// =========================
// MOUSE
// =========================

addEventListener("mousedown",()=>{

    cam.drag = true;

});

addEventListener("mouseup",()=>{

    cam.drag = false;

});

addEventListener("mousemove",e=>{

    if(!cam.drag) return;

    cam.ax -= e.movementX * 0.005;

    cam.ay -= e.movementY * 0.005;

    cam.ay = Math.max(
        -0.8,
        Math.min(1.2, cam.ay)
    );

});

// =========================
// ZOOM RUEDA
// =========================

addEventListener("wheel", e => {

    cam.targetDistance += e.deltaY * 0.01;

    cam.targetDistance = Math.max(
        cam.minZoom,
        Math.min(
            cam.maxZoom,
            cam.targetDistance
        )
    );

});

// =========================
// BLOQUEAR CLICK DERECHO
// =========================

addEventListener("contextmenu", e => {

    e.preventDefault();

});

// =========================
// ZOOM SUAVE
// =========================

function updateZoom(){

    cam.camDistance +=
        (cam.targetDistance - cam.camDistance)
        * 0.05;

}

// =========================
// UPDATE CAMERA
// =========================

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

// =========================
// GETTERS
// =========================

export function getCameraDistance(){

    return cam.camDistance;

}