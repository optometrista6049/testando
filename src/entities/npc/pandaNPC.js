import * as THREE from 'three';

import { loadModel }
from '../../systems/modelLoader.js';

import { collidables }
from '../collisions.js';

import {
    registerWorldObject
}
from '../../systems/visibilitySystem.js';

import {
    registerNPC
}
from './npcRegistry.js';

let PandaNPC;

let mixer;

let currentAction;

const actions = {};



// =====================================================
// LOAD PANDA NPC
// =====================================================

export function loadPandaNPC(){

    console.log(
        'LOAD PANDA NPC'
    );

    loadModel(

        './assets/models/npc/PandaNPC.glb',

        16,

        14,

        1.8,

        (model,gltf)=>{

            console.log(
                'PANDA MODEL LOADED'
            );

            PandaNPC = model;

            registerNPC({

                id:'panda',

                object:PandaNPC,

                interactionDistance:3

            });

            registerWorldObject(

                PandaNPC,

                'npc'

            );

            PandaNPC.lookAt(

                0,

                PandaNPC.position.y,

                0

            );

            PandaNPC.userData.radius =

                0.9;

            collidables.push(

                PandaNPC

            );

            mixer =

                new THREE.AnimationMixer(

                    PandaNPC

                );

            gltf.animations.forEach(

                (clip)=>{

                    actions[clip.name] =

                        mixer.clipAction(

                            clip

                        );

                    console.log(

                        'PandaNPC animation:',

                        clip.name

                    );

                }

            );

            playAnimationByKeyword(

                'wave'

            );

        }

    );

}



// =====================================================
// FIND ANIMATION
// =====================================================

function findAnimation(keyword){

    keyword =

        keyword.toLowerCase();

    for(

        const name

        in actions

    ){

        if(

            name

            .toLowerCase()

            .includes(

                keyword

            )

        ){

            return actions[name];

        }

    }

    return null;

}



// =====================================================
// PLAY ANIMATION
// =====================================================

export function playAnimationByKeyword(

    keyword

){

    const action =

        findAnimation(

            keyword

        );

    if(!action){

        console.warn(

            'Animation not found:',

            keyword

        );

        return;

    }

    if(currentAction){

        currentAction.fadeOut(

            0.3

        );

    }

    currentAction = action;

    currentAction.reset();

    currentAction.fadeIn(

        0.3

    );

    currentAction.setLoop(

        THREE.LoopRepeat

    );

    currentAction.play();

}



// =====================================================
// UPDATE
// =====================================================

export function updatePandaNPC(delta){

    if(

        !PandaNPC ||

        !PandaNPC.visible

    ){

        return;

    }

    if(mixer){

        mixer.update(

            delta

        );

    }

}



// =====================================================
// GETTERS
// =====================================================

export function getPandaNPC(){

    return PandaNPC;

}



// =====================================================
// PANDA HELPERS
// =====================================================

export function setPandaIdle(){

    playAnimationByKeyword(

        'idle'

    );

}