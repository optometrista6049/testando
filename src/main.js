import * as THREE from 'three';

import {
  GLTFLoader
} from 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';


// ======================================================
// CORE
// ======================================================

import { scene } from './core/scene.js';

import { camera } from './core/camera.js';

import { renderer } from './core/renderer.js';

import './core/lighting.js';

import { animate } from './core/gameLoop.js';


// ======================================================
// TERRAIN
// ======================================================

import './terrain/terrain.js';

import './terrain/terrainFloor.js';


// ======================================================
// ENVIRONMENT
// ======================================================

import './environment/sky.js';

import {

  generateClouds,
  updateClouds

} from './environment/clouds.js';

import {

  createForest

} from './environment/trees.js';

import {

  generateMountainRange

} from './environment/mountains.js';


// ======================================================
// ENTITIES
// ======================================================

import './entities/entities.js';


// ======================================================
// PLAYER
// ======================================================

import {

  loadPlayer

} from './player/player.js';

import {

  updatePlayer

} from './player/playerController.js';


//========================================
//IMPORTA NPCs
//=========================================
import {

    loadPandaNPC,
    

} from './entities/npc/pandaNPC.js';


// ======================================================
// MOBILE
// ======================================================

import {

  initMobileJoystick

} from './mobile/mobileJoystick.js';


// ======================================================
// SYSTEMS
// ======================================================

import {

  setupInput

} from './systems/inputSystem.js';

import './systems/resizeSystem.js';


// ======================================================
// UI
// ======================================================

import {

  createBootScreen

} from './ui/bootScreen.js';

import {

  createOrientationOverlay,
  enableOrientationOverlay

} from './ui/orientationOverlay.js';


// ======================================================
// START GAME
// ======================================================

function startGame(){
	
  enableOrientationOverlay();	

  setupInput();

  initMobileJoystick();

  generateClouds();

  createForest();

  generateMountainRange();

  loadPlayer();

  animate({

    scene,
    camera,
    renderer,

    updateFunctions:[

      updatePlayer,
      updateClouds,
	  

    ]

  });

}


// ======================================================
// UI INIT
// ======================================================

createOrientationOverlay();

createBootScreen(startGame);
