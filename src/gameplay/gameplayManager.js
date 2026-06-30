// ======================================================
// GAMEPLAY MANAGER
// Punto de entrada de toda la lógica del juego.
// ======================================================

import {

    updatePandaGameplay

}

from './npc/pandaGameplay.js';

import {

    updateAltoGameplay

}

from './npc/altoGameplay.js';

import {

    updateTelerinGameplay

}

from './npc/telerinGameplay.js';

import {

    updateTeleronGameplay

}

from './npc/teleronGameplay.js';

// ======================================================
// UPDATE GAMEPLAY
// ======================================================

export function updateGameplay(delta){

    //--------------------------------------------------
    // NPC
    //--------------------------------------------------

    updatePandaGameplay();

    updateAltoGameplay();

    updateTelerinGameplay();

    updateTeleronGameplay();

    //--------------------------------------------------
    // ANIMALS
    //--------------------------------------------------

    // updateAnimalsGameplay(delta);

    //--------------------------------------------------
    // PROPS
    //--------------------------------------------------

    // updatePropsGameplay(delta);

    //--------------------------------------------------
    // QUESTS
    //--------------------------------------------------

    // updateQuestGameplay(delta);

}