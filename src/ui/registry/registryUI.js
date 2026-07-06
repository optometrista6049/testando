/*
========================================================

Monteserin Academy

Registro

========================================================
*/

import {

    lockInput,
    unlockInput

} from "../../systems/inputLockSystem.js";

let initialized = false;

let isOpen = false;

let registryRoot = null;

let registryHeaderIcon = null;

let registryBase = null;

let registryButton = null;

export function createRegistryUI() {

    if (initialized) {

        return;

    }

    initialized = true;

    registryRoot = document.createElement("div");

    registryRoot.id = "registry";

    registryRoot.hidden = true;

    registryHeaderIcon = document.createElement("img");

    registryHeaderIcon.id = "registryHeaderIcon";

    registryHeaderIcon.src = "./assets/ui/register/registerButton.png";

    registryHeaderIcon.alt = "Registro";

    registryHeaderIcon.draggable = false;

    registryRoot.appendChild(registryHeaderIcon);

    document.body.appendChild(registryRoot);

    createRegistryButton();

    registerEvents();

}

export function isRegistryOpen() {

    return isOpen;

}

export function openRegistry() {

    if (isOpen) {

        return;

    }

   isOpen = true;

lockInput("registry");

registryRoot.hidden = false;

console.log("Registro abierto");

}

export function closeRegistry() {

    if (!isOpen) {

        return;

    }

    isOpen = false;

unlockInput("registry");

registryRoot.hidden = true;

console.log("Registro cerrado");

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

function registerEvents() {

    document.addEventListener("keydown", onKeyDown);

    registryButton.addEventListener("click", onButtonClick);

}

function onKeyDown(event) {

    if (event.repeat) {

        return;

    }

    if (event.key !== "r" && event.key !== "R") {

        return;

    }

    toggleRegistry();

}

function onButtonClick() {

    toggleRegistry();

}