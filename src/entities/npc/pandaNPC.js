import * as THREE from 'three';

import {
    GLTFLoader
}
from 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';

import { scene }
from '../../core/scene.js';

// =====================================================
// LOAD PANDA NPC
// =====================================================

export function loadPandaNPC(){

    const loader = new GLTFLoader();

    loader.load(

        './assets/models/npc/Panda.glb',

        (gltf)=>{

            console.log('PANDA LOADED');

            const panda = gltf.scene;

            // =================================================
            // VERY VISIBLE POSITION
            // =================================================

            panda.position.set(

                0,
                5,
                0

            );

            // =================================================
            // VERY LARGE SCALE
            // =================================================

            panda.scale.set(

                10,
                10,
                10

            );

            // =================================================
            // FORCE VISIBILITY
            // =================================================

            panda.visible = true;

            // =================================================
            // DEBUG MATERIAL
            // =================================================

            panda.traverse((child)=>{

                if(child.isMesh){

                    console.log('MESH FOUND');

                    child.visible = true;

                    child.castShadow = true;

                    child.receiveShadow = true;

                }

            });

            // =================================================
            // ADD TO SCENE
            // =================================================

            scene.add(panda);

            console.log('PANDA ADDED');

        },

        undefined,

        (error)=>{

            console.error(
                'PANDA LOAD ERROR:',
                error
            );

        }

    );

}
