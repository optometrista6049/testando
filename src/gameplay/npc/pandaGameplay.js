// ======================================================
// PANDA GAMEPLAY
// ======================================================

import {

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

// ======================================================
// INTERACTION
// ======================================================

export function interactWithPanda(){

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
// UPDATE
// ======================================================

export function updatePandaGameplay(){

    // Reservado para futuras IA,
    // movimientos,
    // misiones,
    // etc.

}
