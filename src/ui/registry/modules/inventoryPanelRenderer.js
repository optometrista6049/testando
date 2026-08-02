// ======================================================
// INVENTORY PANEL RENDERER
// ======================================================

export function renderInventoryPanel(state){

    switch(state.type){

        case "empty":
            renderEmpty();
            break;

        case "document":
            renderDocument(state.item);
            break;

        case "item":
            renderItem(state.item);
            break;

    }

}

function renderEmpty(){

    console.log("EMPTY");

}

function renderDocument(item){

    console.log("DOCUMENT", item);

}

function renderItem(item){

    console.log("ITEM", item);

}