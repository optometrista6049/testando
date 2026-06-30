// ======================================================
// INTERACTION REGISTRY
// Registro global de objetos interactuables.
// ======================================================

const interactables = [];

// ======================================================
// REGISTER
// ======================================================

export function registerInteractable(interactable){

    interactables.push({

        label:'Hablar',

        radius:3,

        ...interactable

    });

}

// ======================================================
// UNREGISTER
// ======================================================

export function unregisterInteractable(id){

    const index = interactables.findIndex(

        item => item.id === id

    );

    if(index >= 0){

        interactables.splice(index,1);

    }

}

// ======================================================
// CLEAR
// Muy útil para cambiar de escena,
// cargar partida,
// reiniciar mapa, etc.
// ======================================================

export function clearInteractables(){

    interactables.length = 0;

}

// ======================================================
// GETTERS
// ======================================================

export function getInteractables(){

    return interactables;

}