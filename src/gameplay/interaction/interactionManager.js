// ======================================================
// INTERACTION SYSTEM
// Sistema global de interacción.
// Gestiona NPC y Props.
// ======================================================

import {

    runtimeState

}

from '../../state/runtimeState.js';

import {

    showInteraction,

    hideInteraction

}

from '../../interaction/interactionUI.js';

import {

    isDialogueRunning

}

from '../../dialogue/dialogueManager.js';

import {

    getInteractables

}

from './interactionRegistry.js';

import {

    findClosestNPC

}

from '../../entities/npc/npcRegistry.js';

// ======================================================

let currentInteractable = null;

// ======================================================
// UPDATE
// ======================================================

export function updateInteractionSystem(){

    currentInteractable = null;

    //--------------------------------------------------
    // Nunca durante diálogos
    //--------------------------------------------------

    if(

        isDialogueRunning()

    ){

        hideInteraction();

        return;

    }

    //--------------------------------------------------
    // Player
    //--------------------------------------------------

    const player = runtimeState.player;

    if(

        !player

    ){

        hideInteraction();

        return;

    }

    //--------------------------------------------------
    // Buscar NPC cercano
    //--------------------------------------------------

    const closestNPC =

        findClosestNPC(

            player.position

        );

    //--------------------------------------------------
    // Buscar Prop cercano
    //--------------------------------------------------

    let closestProp = null;

    let closestPropDistance = Infinity;

    const interactables =

        getInteractables();

    for(

        const interactable

        of interactables

    ){

        if(

            !interactable.object ||

            !interactable.object.visible

        ){

            continue;

        }

        const distance =

            player.position.distanceTo(

                interactable.object.position

            );

        if(

            distance <= interactable.radius &&

            distance < closestPropDistance

        ){

            closestPropDistance = distance;

            closestProp = interactable;

        }

    }

    //--------------------------------------------------
    // Elegir el objetivo más cercano
    //--------------------------------------------------

    let npcDistance = Infinity;

    if(

        closestNPC

    ){

        npcDistance =

            player.position.distanceTo(

                closestNPC.object.position

            );

    }

    if(

        closestNPC &&

        npcDistance <= closestPropDistance

    ){

        currentInteractable = {

            label : 'Hablar',

            interact : closestNPC.interact

        };

    }

    else if(

        closestProp

    ){

        currentInteractable = closestProp;

    }

    //--------------------------------------------------

    if(

        currentInteractable

    ){

        showInteraction(

            currentInteractable.label ??

            'Interactuar'

        );

    }

    else{

        hideInteraction();

    }

}

// ======================================================
// TRY INTERACTION
// ======================================================

export function tryInteraction(){

    if(

        !currentInteractable

    ){

        return;

    }

    if(

        typeof currentInteractable.interact ===

        'function'

    ){

        currentInteractable.interact();

    }

}

// ======================================================

export function hasInteractionTarget(){

    return currentInteractable !== null;

}

// ======================================================

export function getCurrentInteractable(){

    return currentInteractable;

}
