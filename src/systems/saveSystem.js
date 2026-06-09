import {

    gameState

}
from '../state/gameState.js';

const SAVE_KEY =

    'monteserinAcademySave';

export function saveGame(){

    localStorage.setItem(

        SAVE_KEY,

        JSON.stringify(

            gameState

        )

    );

}

export function loadGame(){

    const data =

        localStorage.getItem(

            SAVE_KEY

        );

    if(!data){

        return false;

    }

    try{

        const save =

            JSON.parse(data);

        Object.assign(

            gameState,

            save

        );

        return true;

    }

    catch(error){

        console.error(error);

        return false;

    }

}

export function deleteSave(){

    localStorage.removeItem(

        SAVE_KEY

    );

}

export function hasSave(){

    return(

        localStorage.getItem(

            SAVE_KEY

        ) !== null

    );

}