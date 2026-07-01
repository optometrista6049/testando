// ======================================================
// INTERACTION MANAGER
// Sistema genérico de interacción.
// No conoce NPC, Props ni Misiones.
// ======================================================

import { runtimeState } from '../state/runtimeState.js';

import {

    showInteraction,
    hideInteraction

} from './interactionUI.js';

import {

    isDialogueRunning

} from '../dialogue/dialogueManager.js';

import {

    getInteractables

} from '../gameplay/interaction/interactionRegistry.js';

let currentInteractable = null;

// ======================================================
// UPDATE
// ======================================================

export function updateInteractionSystem(){

    currentInteractable = null;

    //--------------------------------------------------
    // Si hay un diálogo abierto no buscamos interacción
    //--------------------------------------------------

    if(isDialogueRunning()){

        hideInteraction();

        return;

    }

    //--------------------------------------------------
    // Jugador
    //--------------------------------------------------

    const player = runtimeState.player;

    if(!player){

        hideInteraction();

        return;

    }

    //--------------------------------------------------
    // Buscar el interactuable más cercano
    //--------------------------------------------------

    const interactables = getInteractables();

    let closestDistance = Infinity;

    for(const interactable of interactables){

        if(!interactable.object){

            continue;

        }

        if(interactable.object.visible === false){

            continue;

        }

        const distance = player.position.distanceTo(

            interactable.object.position

        );

        const radius = interactable.radius ?? 3;

        if(

            distance <= radius &&

            distance < closestDistance

        ){

            closestDistance = distance;

            currentInteractable = interactable;

        }

    }

    //--------------------------------------------------
    // UI
    //--------------------------------------------------

    if(currentInteractable){

        showInteraction('Hablar');

    }

    else{

        hideInteraction();

    }

}

// ======================================================
// TRY INTERACTION
// ======================================================

export function tryInteraction(){

    if(!currentInteractable){

        return;

    }

    if(isDialogueRunning()){

        return;

    }

    if(

        typeof currentInteractable.interact === 'function'

    ){

        currentInteractable.interact();

    }

}

// ======================================================
// MOBILE
// ======================================================

export function hasInteractionTarget(){

    return currentInteractable !== null;

}
