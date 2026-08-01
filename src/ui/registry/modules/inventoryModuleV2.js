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

    const infoPanel = document.createElement("section");
    infoPanel.id = "inventoryInfoPanel";

    gridPanel.appendChild(slots);

    body.appendChild(gridPanel);
    body.appendChild(infoPanel);

    inventoryModule.appendChild(body);

}
