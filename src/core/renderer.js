import * as THREE from 'three';

import { camera } from './camera.js';

export const renderer = new THREE.WebGLRenderer({

    antialias:true

});

renderer.setSize(

    window.innerWidth,

    window.innerHeight

);

renderer.setPixelRatio(

    window.devicePixelRatio

);

document.body.appendChild(

    renderer.domElement

);

// ======================================
// RESIZE
// ======================================

window.addEventListener('resize', ()=>{

    camera.aspect =
        window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(

        window.innerWidth,

        window.innerHeight

    );

});