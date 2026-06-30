// ======================================================
// GAMEPLAY ENTITY ENGINE
// Punto único de entrada del motor de entidades
// ======================================================

// ------------------------------------------------------
// TYPES
// ------------------------------------------------------

export {

    InteractiveEntityTypes

}

from './InteractiveEntityTypes.js';

// ------------------------------------------------------
// ENTITY FACTORY
// ------------------------------------------------------

export {

    createInteractiveEntity

}

from './InteractiveEntity.js';

// ------------------------------------------------------
// REGISTRY
// ------------------------------------------------------

export {

    registerInteractiveEntity,

    unregisterInteractiveEntity,

    getInteractiveEntity,

    getAllInteractiveEntities,

    getEnabledInteractiveEntities,

    getSpawnedInteractiveEntities,

    updateInteractiveEntities,

    clearInteractiveRegistry

}

from './InteractiveEntityRegistry.js';