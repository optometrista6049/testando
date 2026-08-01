// ======================================================
// INVENTORY MODULE V2
// Arquitectura limpia - Versión inicial
// ======================================================

let inventoryModule;

export function createInventoryModuleV2() {

    inventoryModule = document.createElement("section");
    inventoryModule.id = "inventoryModule";

    buildLayout();

    return inventoryModule;
}

function buildLayout(){

    const body = document.createElement("div");
    body.id = "inventoryBody";

    const gridPanel = document.createElement("section");
    gridPanel.id = "inventoryGridPanel";

    const slots = document.createElement("div");
    slots.id = "inventorySlots";

    for (let i = 0; i < 20; i++) {

    const cell = document.createElement("div");

    cell.className = "inventoryCell empty";

    cell.dataset.slot = i;

    slots.appendChild(cell);

}

    const infoPanel = document.createElement("section");
    infoPanel.id = "inventoryInfoPanel";

    gridPanel.appendChild(slots);

    body.appendChild(gridPanel);
    body.appendChild(infoPanel);

    inventoryModule.appendChild(body);

}
