// ======================================================
// PANDA GAMEPLAY
// ======================================================

import {

    getPandaNPC,

    setPandaIdle

}

from '../../entities/npc/pandaNPC.js';

import {

    pandaIntroDialogue

}

from '../../dialogue/dialogues/pandaIntro.js';

import {

    startDialogue,

    isDialogueRunning

}

from '../../dialogue/dialogueManager.js';

import {

    hasFlag,

    setFlag

}

from '../world/worldUtils.js';

import {

    registerInteractable

}

from '../interaction/interactionRegistry.js';

// ======================================================

import {

    pandaState

}

from './pandaState.js';

// ======================================================

function interactWithPanda(){

    if(

        isDialogueRunning()

    ){

        return;

    }

    if(

        !hasFlag(

            'metPanda'

        )

    ){

        startDialogue(

            pandaIntroDialogue

        );

        setFlag(

            'metPanda'

        );

        setPandaIdle();

        return;

    }

    startDialogue(

        pandaIntroDialogue

    );

}

// ======================================================

export function updatePandaGameplay(){

    const panda =

        getPandaNPC();

    if(

        !panda

    ){

        return;

    }

 if(

    pandaState.registered

){

    return;

}

    registerInteractable({

        id:'panda',

        object:panda,

        radius:3,

        interact:interactWithPanda

    });

    registered = true;

}