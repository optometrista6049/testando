/*
========================================================

Monteserin Academy

Inventory Module

========================================================
*/

let inventoryRoot = null;

let inventoryGrid = null;

let inventoryInfo = null;

let inventorySlots = null;

let inventoryPreview = null;

let inventoryPreviewImage = null;

let inventoryTitle = null;

let inventoryDescription = null;

/*========================================================
CREAR MÓDULO
========================================================*/

export function createInventoryModule(){

    if(inventoryRoot){

        return inventoryRoot;

    }

    buildModule();
	
	

    return inventoryRoot;

}

/*========================================================
CONSTRUIR MÓDULO
========================================================*/

function buildModule(){

    inventoryRoot = document.createElement("div");

    inventoryRoot.id = "inventoryModule";

    buildLeftPanel();

    buildRightPanel();

}
/*========================================================
PANEL IZQUIERDO
========================================================*/

function buildLeftPanel(){

    inventoryGrid = document.createElement("div");

    inventoryGrid.id = "inventoryGrid";

    inventoryRoot.appendChild(

        inventoryGrid

    );

    buildSlots();

}

/*========================================================
CREAR GRID
========================================================*/

function buildSlots(){

    inventorySlots = document.createElement("div");

    inventorySlots.id = "inventorySlots";

    inventoryGrid.appendChild(

        inventorySlots

    );

    createInventoryCells();

}

/*========================================================
CREAR 20 CASILLAS
========================================================*/

function createInventoryCells(){

    for(

        let i = 0;

        i < 20;

        i++

    ){

        const cell =

            document.createElement("div");

        cell.className =

            "inventoryCell empty";

        cell.dataset.slot = i;

        inventorySlots.appendChild(

            cell

        );

    }

}
/*========================================================
PANEL DERECHO
========================================================*/

function buildRightPanel(){

    inventoryInfo = document.createElement("div");

    inventoryInfo.id = "inventoryInfo";

    inventoryRoot.appendChild(

        inventoryInfo

    );

    buildPreview();

}

/*========================================================
CONTENEDOR PRINCIPAL
========================================================*/

function buildPreview(){

    inventoryPreview = document.createElement("div");
    inventoryPreview.id = "inventoryPreview";

    inventoryInfo.appendChild(inventoryPreview);

    const header = document.createElement("div");
    header.id = "inventoryPreviewHeader";

    const info = document.createElement("div");
    info.id = "inventoryPreviewInfo";

    const actions = document.createElement("div");
    actions.id = "inventoryPreviewActions";

    const body = document.createElement("div");
    body.id = "inventoryPreviewBody";

    inventoryPreview.appendChild(header);
    inventoryPreview.appendChild(body);

    header.appendChild(info);
    header.appendChild(actions);

    buildPreviewImage(header);
    buildTitle(info);
    buildDescription(body);

}

/*========================================================
TÍTULO
========================================================*/

function buildTitle(parent){

    inventoryTitle = document.createElement("div");

    inventoryTitle.id = "inventoryTitle";

    inventoryTitle.textContent =
        "Selecciona un objeto";

    parent.appendChild(
        inventoryTitle
    );

}

/*========================================================
IMAGEN PREVIEW
========================================================*/

function buildPreviewImage(parent){

    inventoryPreviewImage =
        document.createElement("img");

    inventoryPreviewImage.id =
        "inventoryPreviewImage";

    inventoryPreviewImage.draggable = false;

    inventoryPreviewImage.alt = "";

    inventoryPreviewImage.style.display = "none";

    parent.appendChild(
        inventoryPreviewImage
    );

}

/*========================================================
DESCRIPCIÓN
========================================================*/

function buildDescription(parent){

    inventoryDescription =
        document.createElement("div");

    inventoryDescription.id =
        "inventoryDescription";

    inventoryDescription.textContent =
        "Los objetos del inventario mostrarán aquí su información cuando sean seleccionados.";

    parent.appendChild(
        inventoryDescription
    );

}
/*========================================================
ACTUALIZAR TÍTULO
========================================================*/

export function setInventoryTitle(text){

    if(!inventoryTitle){

        return;

    }

    inventoryTitle.textContent = text;

}

/*========================================================
ACTUALIZAR DESCRIPCIÓN
========================================================*/

export function setInventoryDescription(text){

    if(!inventoryDescription){

        return;

    }

    inventoryDescription.textContent = text;

}

/*========================================================
ACTUALIZAR IMAGEN
========================================================*/

export function setInventoryPreviewImage(path){

    if(!inventoryPreviewImage){

        return;

    }

    if(!path){

        inventoryPreviewImage.style.display =

            "none";

        inventoryPreviewImage.removeAttribute(

            "src"

        );

        return;

    }

    inventoryPreviewImage.src = path;

    inventoryPreviewImage.style.display =

        "block";

}

/*========================================================
OBTENER CONTENEDOR PRINCIPAL
========================================================*/

export function getInventoryModule(){

    return inventoryRoot;

}

/*========================================================
LIMPIAR INFORMACIÓN
========================================================*/

export function clearInventoryPreview(){
	
	setInventoryPreviewImage(null);

    setInventoryTitle(

        "Selecciona un objeto"

    );

    setInventoryDescription(

        "Los objetos del inventario mostrarán aquí su información cuando sean seleccionados."

    );

}

/*========================================================
RESETEAR INVENTARIO
========================================================*/

export function resetInventoryModule(){

    clearInventoryPreview();

    if(!inventorySlots){

        return;

    }

    const cells =

        inventorySlots.children;

    for(

        let i = 0;

        i < cells.length;

        i++

    ){

        cells[i].className =

            "inventoryCell empty";

        cells[i].innerHTML = "";

    }

}
/*========================================================
ACTUALIZAR ICONO DE UNA CASILLA
========================================================*/

export function setInventorySlotIcon(

    slot,

    iconPath

){

    if(

        !inventorySlots ||

        slot < 0 ||

        slot >= inventorySlots.children.length

    ){

        return;

    }

    const cell =

        inventorySlots.children[slot];

    cell.innerHTML = "";

    if(!iconPath){

        cell.className =

            "inventoryCell empty";

        return;

    }

    const img =

        document.createElement("img");

    img.src = iconPath;

    img.draggable = false;

    img.alt = "";

    cell.appendChild(img);

    cell.className =

        "inventoryCell occupied";

}

/*========================================================
SELECCIONAR CASILLA
========================================================*/

export function selectInventorySlot(slot){

    if(!inventorySlots){

        return;

    }

    const cells =

        inventorySlots.children;

    for(

        let i = 0;

        i < cells.length;

        i++

    ){

        cells[i].classList.remove(

            "selected"

        );

    }

    if(

        slot >= 0 &&

        slot < cells.length

    ){

        cells[slot]

            .classList

            .add(

                "selected"

            );

    }

}

/*========================================================
EXPORTACIÓN POR DEFECTO
========================================================*/

export default {

    createInventoryModule,

    getInventoryModule,

    setInventoryTitle,

    setInventoryDescription,
	
	setInventoryPreviewImage,

    clearInventoryPreview,
	

    resetInventoryModule,

    setInventorySlotIcon,

    selectInventorySlot

};