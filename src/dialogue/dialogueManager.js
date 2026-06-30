import { dialogueState }
from './dialogueState.js';

import {

    showDialogue,

    closeDialogue

}
from './dialogueUI.js';

export function startDialogue(dialogue){

    if(dialogueState.locked){

        return;

    }

    dialogueState.locked = true;

    showDialogue(dialogue);

}

export function finishDialogue(){

    closeDialogue();

    dialogueState.locked = false;

}

export function isDialogueRunning(){

    return dialogueState.active;

}