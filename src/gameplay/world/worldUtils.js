// ======================================================
// WORLD UTILS
// Funciones comunes para manipular el estado global
// del mundo.
// ======================================================

import { worldState } from './worldState.js';

// ======================================================
// FLAGS
// ======================================================

export function hasFlag(flag){

    return worldState.flags[flag] === true;

}

export function setFlag(flag){

    worldState.flags[flag] = true;

}

export function clearFlag(flag){

    worldState.flags[flag] = false;

}

export function toggleFlag(flag){

    worldState.flags[flag] =

        !worldState.flags[flag];

}

// ======================================================
// VALUES
// ======================================================

export function getValue(key){

    return worldState.values[key];

}

export function setValue(key,value){

    worldState.values[key] = value;

}

export function increaseValue(key,amount=1){

    if(worldState.values[key] === undefined){

        worldState.values[key] = 0;

    }

    worldState.values[key] += amount;

}

export function decreaseValue(key,amount=1){

    if(worldState.values[key] === undefined){

        worldState.values[key] = 0;

    }

    worldState.values[key] -= amount;

}

// ======================================================
// WEATHER
// ======================================================

export function getWeather(){

    return worldState.weather;

}

export function setWeather(weather){

    worldState.weather = weather;

}

// ======================================================
// TIME
// ======================================================

export function getTime(){

    return worldState.time;

}

export function setTime(time){

    worldState.time = time;

}