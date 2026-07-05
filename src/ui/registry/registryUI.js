/*
========================================================

Monteserin Academy

Registro

========================================================
*/

let initialized = false;

let isOpen = false;

let registryRoot = null;

let registryButton = null;

let registryBase = null;

export function createRegistryUI() {

    if (initialized) {

        return;

    }

    initialized = true;

    registryRoot = document.createElement("div");

    registryRoot.id = "registry";

    registryRoot.hidden = true;

    document.body.appendChild(registryRoot);
	
	createRegistryButton();

}

export function isRegistryOpen() {

    return isOpen;

}

export function openRegistry() {

    if (isOpen) {

        return;

    }

    isOpen = true;

    registryRoot.hidden = false;

}

export function closeRegistry() {

    if (!isOpen) {

        return;

    }

    isOpen = false;

    registryRoot.hidden = true;

}

export function toggleRegistry() {

    if (isOpen) {

        closeRegistry();

    }

    else {

        openRegistry();

    }

}

function createRegistryButton() {

    registryBase = document.createElement("div");

    registryBase.id = "registryBase";

    document.body.appendChild(registryBase);

    registryButton = document.createElement("img");

    registryButton.id = "registryButton";

    registryButton.src = "./assets/ui/register/registerButton.png";

    registryButton.alt = "Registro";

    registryButton.draggable = false;

    document.body.appendChild(registryButton);

}
