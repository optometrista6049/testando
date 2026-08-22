// ======================================================
// MISSION MANAGER
// Control básico de la progresión de misiones
// ======================================================

import { missionState }
from '../state/missionState.js';


// ======================================================
// INICIAR MISIÓN
// ======================================================

export function startMission(

    missionId,
    objectives = {}

){

    if(missionState.activeMissionId){

        console.warn(
            'Ya existe una misión activa:',
            missionState.activeMissionId
        );

        return false;

    }

    missionState.activeMissionId =
        missionId;

    missionState.activeMissionStatus =
        'active';

    missionState.objectives =
        { ...objectives };

    return true;

}


// ======================================================
// CONSULTAR MISIÓN ACTIVA
// ======================================================

export function getActiveMission(){

    return missionState.activeMissionId;

}


// ======================================================
// COMPROBAR SI UNA MISIÓN ESTÁ ACTIVA
// ======================================================

export function isMissionActive(

    missionId

){

    return (

        missionState.activeMissionId ===
        missionId

        &&

        missionState.activeMissionStatus ===
        'active'

    );

}


// ======================================================
// COMPLETAR OBJETIVO
// ======================================================

export function completeObjective(

    objectiveId

){

    if(
        !missionState.activeMissionId
    ){

        return false;

    }

    if(
        !(objectiveId in missionState.objectives)
    ){

        return false;

    }

    missionState.objectives[objectiveId] =
        true;

    return true;

}


// ======================================================
// COMPROBAR OBJETIVO
// ======================================================

export function isObjectiveCompleted(

    objectiveId

){

    return (

        missionState.objectives[objectiveId] ===
        true

    );

}


// ======================================================
// COMPROBAR TODOS LOS OBJETIVOS
// ======================================================

export function areAllObjectivesCompleted(){

    const objectives =
        Object.values(
            missionState.objectives
        );

    if(objectives.length === 0){

        return false;

    }

    return objectives.every(
        completed => completed === true
    );

}


// ======================================================
// COMPLETAR MISIÓN
// ======================================================

export function completeActiveMission(){

    if(
        !missionState.activeMissionId
    ){

        return false;

    }

    if(
        !areAllObjectivesCompleted()
    ){

        return false;

    }

    missionState.activeMissionStatus =
        'completed';

    return true;

}


// ======================================================
// ESTADO ACTUAL
// ======================================================

export function getMissionState(){

    return {

        activeMissionId:
            missionState.activeMissionId,

        activeMissionStatus:
            missionState.activeMissionStatus,

        objectives:
            { ...missionState.objectives }

    };

}

