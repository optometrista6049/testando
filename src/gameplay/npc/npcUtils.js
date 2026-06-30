// ======================================================
// NPC UTILS
// Funciones comunes para todos los NPCs.
// ======================================================

import {

    hasFlag

}

from '../world/worldUtils.js';

// ======================================================
// AVAILABLE
// ======================================================

export function isNPCAvailable(flag){

    if(!flag){

        return true;

    }

    return hasFlag(flag);

}

// ======================================================
// DISTANCE
// ======================================================

export function isPlayerNearNPC(

    player,

    npc,

    distance

){

    if(

        !player ||

        !npc

    ){

        return false;

    }

    return (

        player.position.distanceTo(

            npc.position

        ) <= distance

    );

}