import { runtimeState }
from '../state/runtimeState.js';

import { gameState }
from '../state/gameState.js';

import {


showInteraction,
hideInteraction


}
from './interactionUI.js';

import {


startDialogue


}
from '../dialogue/dialogueManager.js';

import {


getPandaNPC,
setPandaIdle


}
from '../entities/npc/pandaNPC.js';

let interactionTarget = null;

const pandaIntroDialogue = {


speaker:'Panda',

pages:[

    '¡Hola! Bienvenido a Monteserin Academy.',

    'Me alegra mucho verte por aquí.',

    'Pronto necesitaré tu ayuda para una pequeña tarea.'

]


};

export function updateInteractionSystem(){


const player =
    runtimeState.player;
	
	if(!player){

    hideInteraction();

    return;

}

const panda =
    getPandaNPC();
	
	if(!panda){

    hideInteraction();

    return;

}

if(!player || !panda){

    hideInteraction();
    return;

}

const distance =
    player.position.distanceTo(

        panda.position

    );

if(

    distance < 3 &&
    !gameState.flags.metPanda

){

    interactionTarget =
        'panda';

    showInteraction(
        'Hablar'
    );

}else{

    interactionTarget =
        null;

    hideInteraction();

}


}

export function tryInteraction(){


if(

    interactionTarget !==
    'panda'

) return;

startDialogue(

    pandaIntroDialogue

);

gameState.flags.metPanda =
    true;

setPandaIdle();


}

export function hasInteractionTarget(){

    return interactionTarget !== null;

}
