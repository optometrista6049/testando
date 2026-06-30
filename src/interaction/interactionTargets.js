import { gameState }
from '../state/gameState.js';

import {

    getPandaNPC

}
from '../entities/npc/pandaNPC.js';

import {

    getAltoNPC

}
from '../entities/npc/altoNPC.js';

import {

    getTelerinNPC

}
from '../entities/npc/telerinNPC.js';

import {

    getTeleronNPC

}
from '../entities/npc/teleronNPC.js';

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

export const interactionTargets = [

    {

        id:'panda',

        getObject:getPandaNPC,

        dialogue:pandaIntroDialogue,

        distance:3,

        condition(){

            return !gameState.flags.metPanda;

        }

    },

    {

        id:'alto',

        getObject:getAltoNPC,

        dialogue:altoBusyDialogue,

        distance:3,

        condition(){

            return !gameState.flags.metPanda;

        }

    },

    {

        id:'telerin',

        getObject:getTelerinNPC,

        dialogue:telerinBusyDialogue,

        distance:3,

        condition(){

            return !gameState.flags.metPanda;

        }

    },

    {

        id:'teleron',

        getObject:getTeleronNPC,

        dialogue:teleronBusyDialogue,

        distance:3,

        condition(){

            return !gameState.flags.metPanda;

        }

    }

];