import * as THREE from 'three';
import { scene } from '../core/scene.js';
import { WORLD_SIZE } from '../core/config.js';
import { rand } from '../utils/random.js';
import { snap } from '../utils/snap.js';
import { collidables } from '../entities/collisions.js';

function createTree(x,z){

    const tree = new THREE.Group();

    const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.25,0.3,2),
        new THREE.MeshStandardMaterial({color:0x8b5a2b})
    );

    const leaves = new THREE.Mesh(
        new THREE.SphereGeometry(1.2,8,8),
        new THREE.MeshStandardMaterial({color:0x2e8b57})
    );

    trunk.position.y = 1;

    leaves.position.y = 3;

    tree.add(trunk);
    tree.add(leaves);

    snap(tree,x,z,0);

    collidables.push(tree);

    scene.add(tree);
}

export function createForest(){

    for(let i=0;i<120;i++){

        const x = (rand()-0.5)*WORLD_SIZE;
        const z = (rand()-0.5)*WORLD_SIZE;

        if(Math.abs(x)<20 && Math.abs(z)<20) continue;

        createTree(x,z);
    }
}
