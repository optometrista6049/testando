import {

    gameState

}
from '../state/gameState.js';

let accumulator = 0;

export function updatePlayTime(delta){

    accumulator += delta;

    if(accumulator >= 1){

        gameState.playTime +=

            accumulator;

        accumulator = 0;

    }

}