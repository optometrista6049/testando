import * as THREE from 'three';

import { scene }
from '../../core/scene.js';

export function loadPandaNPC(){

    console.log('TEST CUBE');

    const geometry =
        new THREE.BoxGeometry(

            5,
            5,
            5

        );

    const material =
        new THREE.MeshBasicMaterial({

            color:0xff0000

        });

    const cube =
        new THREE.Mesh(

            geometry,
            material

        );

    cube.position.set(

        0,
        5,
        0

    );

    scene.add(cube);

    console.log('CUBE ADDED');

}

}
