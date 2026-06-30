// ======================================================
// TELERON GAMEPLAY
// ======================================================

import {

    getTeleronNPC

}

from '../../entities/npc/teleronNPC.js';

import {

    teleronBusyDialogue

}

from '../../dialogue/dialogues/teleronBusy.js';

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

    teleronState

}

from './teleronState.js';

// ======================================================
// INTERACTION
// ======================================================

function interactWithTeleron(){

    if(

        isDialogueRunning()

    ){

        return;

    }

    //--------------------------------------------------
    // Todavía no conocemos al Panda
    //--------------------------------------------------

    if(

        !hasFlag(

            'metPanda'

        )

    ){

        startDialogue(

            teleronBusyDialogue

        );

        return;

    }

    //--------------------------------------------------
    // Futuras ramas de diálogo
    //--------------------------------------------------

    startDialogue(

        teleronBusyDialogue

    );

}

// ======================================================
// UPDATE
// ======================================================

export function updateTeleronGameplay(){

    const npc =

        getTeleronNPC();

    if(

        !npc

    ){

        return;

    }

    if(

        !teleronState.registered

    ){

        registerInteractable({

            id:'teleron',

            object:npc,

            radius:3,

            interact:interactWithTeleron

        });

        teleronState.registered = true;

    }

}