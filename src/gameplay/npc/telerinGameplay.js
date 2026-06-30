// ======================================================
// TELERIN GAMEPLAY
// ======================================================

import {

    getTelerinNPC

}

from '../../entities/npc/telerinNPC.js';

import {

    telerinBusyDialogue

}

from '../../dialogue/dialogues/telerinBusy.js';

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

    telerinState

}

from './telerinState.js';

// ======================================================
// INTERACTION
// ======================================================

function interactWithTelerin(){

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

            telerinBusyDialogue

        );

        return;

    }

    //--------------------------------------------------
    // Futuras ramas de diálogo
    //--------------------------------------------------

    startDialogue(

        telerinBusyDialogue

    );

}

// ======================================================
// UPDATE
// ======================================================

export function updateTelerinGameplay(){

    const npc =

        getTelerinNPC();

    if(

        !npc

    ){

        return;

    }

    if(

        !telerinState.registered

    ){

        registerInteractable({

            id:'telerin',

            object:npc,

            radius:3,

            interact:interactWithTelerin

        });

        telerinState.registered = true;

    }

}