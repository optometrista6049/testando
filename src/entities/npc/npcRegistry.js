const npcRegistry = new Map();

export function registerNPC(data){

    if(!data){

        console.warn(
            'registerNPC: datos no válidos.'
        );

        return;

    }

    if(!data.id){

        console.warn(
            'registerNPC: falta id.'
        );

        return;

    }

    npcRegistry.set(

        data.id,

        data

    );

}

export function unregisterNPC(id){

    npcRegistry.delete(id);

}

export function getNPC(id){

    return npcRegistry.get(id);

}

export function getAllNPCs(){

    return Array.from(

        npcRegistry.values()

    );

}

export function findClosestNPC(

    playerPosition

){

    let closestNPC = null;

    let closestDistance = Infinity;

    for(

        const npc

        of npcRegistry.values()

    ){

        if(

            !npc.object ||

            !npc.object.visible

        ){

            continue;

        }

        const distance =

            playerPosition.distanceTo(

                npc.object.position

            );

        const maxDistance =

            npc.interactionDistance ??

            3;

        if(

            distance <= maxDistance &&

            distance < closestDistance

        ){

            closestDistance = distance;

            closestNPC = npc;

        }

    }

    return closestNPC;

}