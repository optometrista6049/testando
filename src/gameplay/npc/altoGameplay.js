// ======================================================
// ALTO GAMEPLAY
// ======================================================

import {

    getAltoNPC

}

from '../../entities/npc/altoNPC.js';

import {

    altoBusyDialogue

}

from '../../dialogue/dialogues/altoBusy.js';

import {

    startDialogue,

    isDialogueRunning

}

from '../../dialogue/dialogueManager.js';

import {

    hasFlag

}

from '../world/worldUtils.js';

import {

    registerInteractable

}

from '../interaction/interactionRegistry.js';

import {

    altoState

}

from './altoState.js';

// ======================================================
// INTERACTION
// ======================================================

function interactWithAlto(){

    if(

        isDialogueRunning()

    ){

        return;

    }

    //--------------------------------------------------
    // Antes de conocer al Panda
    //--------------------------------------------------

    if(

        !hasFlag(

            'metPanda'

        )

    ){

        startDialogue(

            altoBusyDialogue

        );

        return;

    }

    //--------------------------------------------------
    // Aquí irán futuros estados
    //--------------------------------------------------

    startDialogue(

        altoBusyDialogue

    );

}

// ======================================================
// UPDATE
// ======================================================

export function updateAltoGameplay(){

    const alto =

        getAltoNPC();

    if(

        !alto

    ){

        return;

    }

    //--------------------------------------------------
    // Registro único
    //--------------------------------------------------

    if(

        !altoState.registered

    ){

        registerInteractable({

            id:'alto',

            object:alto,

            radius:3,

            interact:interactWithAlto

        });

        altoState.registered = true;

    }

}