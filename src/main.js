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

import {

    createMainMenu

}
from './ui/mainMenu.js';

import {

    updatePlayTime

}
from './systems/timeSystem.js';


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


import {

    createRockField

}
from './environment/rocks.js';


//========================================
//CONTROL DE VISIBILIDAD
//============================================
import {

    updateVisibilitySystem

}
from './systems/visibilitySystem.js';


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
//======================================================
//CARGAMOS NPCs
//==========================================================
import {

    loadPandaNPC,
    updatePandaNPC

}
from './entities/npc/pandaNPC.js';


import {

    loadAltoNPC,
    updateAltoNPC

}
from './entities/npc/altoNPC.js';

import {

    loadTelerinNPC,
    updateTelerinNPC

}
from './entities/npc/telerinNPC.js';

import {

    loadTeleronNPC,
    updateTeleronNPC

}
from './entities/npc/teleronNPC.js';

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

//=========================================
//IMPORT PARA EL DEBUG DE POSICION DEL PLAYER
//=============================================
import {

    initworldEditor,
    updateworldEditor

}
from './debug/worldEditor.js';


// ======================================================
// START GAME
// ======================================================

function startGame(){
	
  enableOrientationOverlay();	

  setupInput();

  initMobileJoystick();

  generateClouds();
  
  createForest();
  
  createRockField();

  generateMountainRange();

  loadPlayer();

initworldEditor();

loadPandaNPC();

loadAltoNPC();

loadTelerinNPC();

loadTeleronNPC();

  animate({

    scene,
    camera,
    renderer,

    updateFunctions:[

      

    updatePlayer,

    updateClouds,
	
	updatePlayTime,

    updatePandaNPC,

    updateAltoNPC,

    updateTelerinNPC,

    updateTeleronNPC,

    updateworldEditor,
	
	updateVisibilitySystem

	  
    ]

  });

}


// ======================================================
// UI INIT
// ======================================================

createOrientationOverlay();

createBootScreen(

    ()=>{

        createMainMenu(

            startGame

        );

    }

);