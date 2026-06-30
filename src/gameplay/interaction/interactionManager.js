// ======================================================
// INTERACTION SYSTEM
// Sistema global de interacción del juego.
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

// ======================================================

let currentInteractable = null;

// ======================================================
// UPDATE
// ======================================================

export function updateInteractionSystem(){

    currentInteractable = null;

    //--------------------------------------------------
    // Nunca permitir interacción durante diálogos
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
    // Buscar interactuable cercano
    //--------------------------------------------------

    const interactables = getInteractables();

    for(const interactable of interactables){

        if(

            !interactable.object

        ){

            continue;

        }

        const distance =

            player.position.distanceTo(

                interactable.object.position

            );

        if(

            distance <= interactable.radius

        ){

            currentInteractable = interactable;

            showInteraction(

                interactable.label ??

                'Hablar'

            );

            return;

        }

    }

    //--------------------------------------------------

    hideInteraction();

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

        typeof currentInteractable.interact === 'function'

    ){

        currentInteractable.interact();

    }

}

// ======================================================
// GETTERS
// ======================================================

export function hasInteractionTarget(){

    return currentInteractable !== null;

}

export function getCurrentInteractable(){

    return currentInteractable;

}