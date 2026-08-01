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

function buildLayout() {

    const gridPanel = document.createElement("section");
    gridPanel.id = "inventoryGridPanel";

    const infoPanel = document.createElement("section");
    infoPanel.id = "inventoryInfoPanel";

    inventoryModule.appendChild(gridPanel);
    inventoryModule.appendChild(infoPanel);
}