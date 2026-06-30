// ======================================================
// INTERACTIVE ENTITY REGISTRY
// Registro global de entidades interactivas
// ======================================================

const entities = new Map();

// ======================================================
// REGISTER
// ======================================================

export function registerInteractiveEntity(entity){

    if(!entity || !entity.id){

        console.warn(

            'InteractiveEntity without id.'

        );

        return;

    }

    entities.set(

        entity.id,

        entity

    );

}

// ======================================================
// UNREGISTER
// ======================================================

export function unregisterInteractiveEntity(id){

    entities.delete(id);

}

// ======================================================
// GET
// ======================================================

export function getInteractiveEntity(id){

    return entities.get(id);

}

// ======================================================
// GET ALL
// ======================================================

export function getAllInteractiveEntities(){

    return Array.from(

        entities.values()

    );

}

// ======================================================
// GET ENABLED
// ======================================================

export function getEnabledInteractiveEntities(){

    return getAllInteractiveEntities()

        .filter(

            entity => entity.enabled

        );

}

// ======================================================
// GET SPAWNED
// ======================================================

export function getSpawnedInteractiveEntities(){

    return getAllInteractiveEntities()

        .filter(

            entity => entity.spawned

        );

}

// ======================================================
// UPDATE ALL
// ======================================================

export function updateInteractiveEntities(delta){

    for(

        const entity

        of entities.values()

    ){

        if(

            !entity.enabled ||

            !entity.spawned

        ){

            continue;

        }

        entity.update(delta);

    }

}

// ======================================================
// CLEAR
// ======================================================

export function clearInteractiveRegistry(){

    entities.clear();

}