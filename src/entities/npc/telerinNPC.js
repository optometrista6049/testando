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

let TelerinNPC;

let mixer;

let currentAction;

const actions = {};



// =====================================================
// LOAD TELERIN NPC
// =====================================================

export function loadTelerinNPC(){

    console.log(
        'LOAD TELERIN NPC'
    );

    loadModel(

        './assets/models/npc/TelerinNPC.glb',

        -4,

        2,

        1.8,

        (model,gltf)=>{

            console.log(
                'TELERIN MODEL LOADED'
            );

            TelerinNPC = model;

            registerNPC({

                id:'telerin',

                object:TelerinNPC,

                interactionDistance:3

            });

            registerWorldObject(

                TelerinNPC,

                'npc'

            );

            TelerinNPC.lookAt(

                0,

                TelerinNPC.position.y,

                0

            );

            TelerinNPC.userData.radius =

                0.9;

            collidables.push(

                TelerinNPC

            );

            mixer =

                new THREE.AnimationMixer(

                    TelerinNPC

                );

            gltf.animations.forEach(

                (clip)=>{

                    actions[clip.name] =

                        mixer.clipAction(

                            clip

                        );

                    console.log(

                        'TelerinNPC animation:',

                        clip.name

                    );

                }

            );

            playAnimationByKeyword(

                'idle'

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

export function updateTelerinNPC(delta){

    if(

        !TelerinNPC ||

        !TelerinNPC.visible

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

export function getTelerinNPC(){

    return TelerinNPC;

}