import * as THREE from 'three';

import {

    runtimeState

} from '../state/runtimeState.js';

import {

    loadModel

} from '../systems/modelLoader.js';

export function loadPlayer(){

    loadModel(

        'assets/models/RobotAnimado.glb',

        0,
        0,

        1.4,

        function(model,gltf,offset){

            runtimeState.player = model;

            runtimeState.playerHeightOffset = offset;

            // =========================
            // ANIMATION MIXER
            // =========================

            runtimeState.mixer =
                new THREE.AnimationMixer(model);

            // =========================
            // LOAD ANIMATIONS
            // =========================

            gltf.animations.forEach((clip)=>{

                const action =
                    runtimeState.mixer.clipAction(clip);

                runtimeState.actions[
                    clip.name.toLowerCase()
                ] = action;

            });

        }

    );

}