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
	
	// ======================================================
// CABECERA
// ======================================================

const previewHeader = document.createElement("div");
previewHeader.id = "inventoryPreviewHeader";

// Miniatura

const previewImage = document.createElement("div");
previewImage.id = "inventoryPreviewImage";

// Nombre

const previewTitle = document.createElement("div");
previewTitle.id = "inventoryPreviewTitle";
previewTitle.textContent = "Selecciona un objeto";

previewHeader.appendChild(previewImage);
previewHeader.appendChild(previewTitle);

// ======================================================
// DESCRIPCIÓN
// ======================================================

const description = document.createElement("div");
description.id = "inventoryDescription";
description.textContent =
    "Selecciona un objeto del inventario para ver su información.";

// ======================================================
// ACCIONES
// ======================================================

const actions = document.createElement("div");
actions.id = "inventoryActions";

const openButton = document.createElement("button");
openButton.id = "inventoryOpenButton";
openButton.textContent = "Abrir";

const saveButton = document.createElement("button");
saveButton.id = "inventorySaveButton";
saveButton.textContent = "Guardar";

actions.appendChild(openButton);
actions.appendChild(saveButton);

// ======================================================
// ENSAMBLAJE
// ======================================================

// ======================================================
// CONTENEDOR INTERNO DEL PANEL DERECHO
// (misma filosofía que los diálogos)
// ======================================================

const infoContent = document.createElement("div");
infoContent.id = "inventoryInfoContent";

// ======================================================
// ENSAMBLAJE DEL PANEL DERECHO
// ======================================================

infoContent.appendChild(previewHeader);
infoContent.appendChild(description);
infoContent.appendChild(actions);

infoPanel.appendChild(infoContent);

// ======================================================
// ENSAMBLAJE GENERAL
// ======================================================

body.appendChild(gridPanel);
body.appendChild(infoPanel);

inventoryModule.appendChild(body);

}
