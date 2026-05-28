import * as THREE from 'three';

import {
    GLTFLoader
}
from 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';

import { scene }
from '../../core/scene.js';

// =====================================================
// PANDA NPC
// =====================================================

let panda;

let mixer;

let currentAction = null;

const actions = {};

// =====================================================
// LOAD PANDA NPC
// =====================================================

export function loadPandaNPC(){

    const loader = new GLTFLoader();

    loader.load(

        './assets/models/npc/Panda.glb',

        (gltf)=>{

            panda = gltf.scene;

            // =================================================
            // POSITION
            // =================================================

            panda.position.set(

                2,   // X
                0,   // Y
                2   // Z

            );

            // =================================================
            // SCALE
            // =================================================

            panda.scale.setScalar(1.5);

            // =================================================
            // ROTATION
            // =================================================

            panda.rotation.y = Math.PI;

            // =================================================
            // SHADOWS
            // =================================================

            panda.traverse((child)=>{

                if(child.isMesh){

                    child.castShadow = true;

                    child.receiveShadow = true;

                }

            });

            // =================================================
            // ADD TO SCENE
            // =================================================

            scene.add(panda);

            // =================================================
            // ANIMATION MIXER
            // =================================================

            mixer =
                new THREE.AnimationMixer(
                    panda
                );

            // =================================================
            // LOAD ALL ANIMATIONS
            // =================================================

            gltf.animations.forEach((clip)=>{

                const action =
                    mixer.clipAction(clip);

                actions[clip.name] = action;

                console.log(

                    'Panda animation found:',
                    clip.name

                );

            });

            // =================================================
            // START WITH WAVE
            // =================================================

            playAnimationByKeyword('wave');

            

        },

        undefined,

        (error)=>{

            console.error(

                'Error loading Panda:',
                error

            );

        }

    );

}

// =====================================================
// FIND ANIMATION
// =====================================================

function findAnimation(keyword){

    keyword = keyword.toLowerCase();

    for(const name in actions){

        if(

            name
            .toLowerCase()
            .includes(keyword)

        ){

            return actions[name];

        }

    }

    return null;

}

// =====================================================
// PLAY ANIMATION BY KEYWORD
// =====================================================

function playAnimationByKeyword(keyword){

    const action =
        findAnimation(keyword);

    if(!action){

        console.warn(

            'Animation not found:',
            keyword

        );

        return;

    }

    // =================================================
    // FADE OUT PREVIOUS
    // =================================================

    if(currentAction){

        currentAction.fadeOut(0.3);

    }

    // =================================================
    // PLAY NEW
    // =================================================

    currentAction = action;

    currentAction
        .reset()
        .fadeIn(0.3)
        .play();

}

// =====================================================
// PUBLIC NPC ANIMATION CONTROL
// =====================================================

export function pandaPlay(animationName){

    playAnimationByKeyword(animationName);

}

// =====================================================
// GET PANDA
// =====================================================

export function getPanda(){

    return panda;

}

// =====================================================
// UPDATE PANDA
// =====================================================

export function updatePandaNPC(delta){

    if(mixer){

        mixer.update(delta);

    }

}
