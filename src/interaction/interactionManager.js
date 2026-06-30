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

    startDialogue,

    isDialogueRunning

}
from '../dialogue/dialogueManager.js';

import {

    findClosestNPC

}
from '../entities/npc/npcRegistry.js';

import {

    pandaIntroDialogue

}
from '../dialogue/dialogues/pandaIntro.js';

import {

    altoBusyDialogue

}
from '../dialogue/dialogues/altoBusy.js';

import {

    telerinBusyDialogue

}
from '../dialogue/dialogues/telerinBusy.js';

import {

    teleronBusyDialogue

}
from '../dialogue/dialogues/teleronBusy.js';

import {

    setPandaIdle

}
from '../entities/npc/pandaNPC.js';



let interactionTarget = null;



// =====================================================
// UPDATE INTERACTION
// =====================================================

export function updateInteractionSystem(){

    if(

        isDialogueRunning()

    ){

        hideInteraction();

        interactionTarget = null;

        return;

    }

    const player =

        runtimeState.player;

    if(

        !player

    ){

        hideInteraction();

        interactionTarget = null;

        return;

    }

    const npc =

        findClosestNPC(

            player.position

        );

    if(

        !npc

    ){

        hideInteraction();

        interactionTarget = null;

        return;

    }

    interactionTarget = npc;

    showInteraction(

        'Hablar'

    );

}



// =====================================================
// TRY INTERACTION
// =====================================================

export function tryInteraction(){

    if(

        !interactionTarget

    ){

        return;

    }

    if(

        isDialogueRunning()

    ){

        return;

    }

    switch(

        interactionTarget.id

    ){

        case 'panda':

            if(

                !gameState.flags.metPanda

            ){

                startDialogue(

                    pandaIntroDialogue

                );

                gameState.flags.metPanda =

                    true;

                setPandaIdle();

            }

            break;

        case 'alto':

            if(

                !gameState.flags.metPanda

            ){

                startDialogue(

                    altoBusyDialogue

                );

            }

            break;

        case 'telerin':

            if(

                !gameState.flags.metPanda

            ){

                startDialogue(

                    telerinBusyDialogue

                );

            }

            break;

        case 'teleron':

            if(

                !gameState.flags.metPanda

            ){

                startDialogue(

                    teleronBusyDialogue

                );

            }

            break;

    }

}



// =====================================================
// HAS TARGET
// =====================================================

export function hasInteractionTarget(){

    return interactionTarget !== null;

}