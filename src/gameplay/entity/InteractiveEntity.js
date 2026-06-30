// ======================================================
// INTERACTIVE ENTITY
// Base común para cualquier entidad interactiva
// ======================================================

import {

    createEntityState

}

from './EntityState.js';

import { InteractiveEntityTypes } from './InteractiveEntityTypes.js';

export function createInteractiveEntity(config = {}){

    return {

        //-------------------------------------------------
        // Identidad
        //-------------------------------------------------

        id: config.id ?? '',

        type: config.type ?? InteractiveEntityTypes.OBJECT,

        //-------------------------------------------------
        // Mundo
        //-------------------------------------------------

        object: config.object ?? null,

        interactionDistance:

            config.interactionDistance ?? 3,

        //-------------------------------------------------
        // Estado
        //-------------------------------------------------

        enabled:

            config.enabled ?? true,

        visible:

            config.visible ?? true,

        spawned:

            config.spawned ?? true,

        currentState:

            config.currentState ?? 'idle',

        //-------------------------------------------------
        // Funciones
        //-------------------------------------------------

        interact:

            config.interact ??

            (()=>{}),

        update:

            config.update ??

            (()=>{}),

        spawn:

            config.spawn ??

            (()=>{}),

        despawn:

            config.despawn ??

            (()=>{}),

        canInteract:

            config.canInteract ??

            (()=>true)

    };

}