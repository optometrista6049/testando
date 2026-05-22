import * as THREE from 'three';
import { scene } from '../core/scene.js';
import { collidables } from './collisions.js';
import { snap } from '../utils/snap.js';

function addEntity(mesh,type,x,z,offset=1){

    snap(mesh,x,z,offset);

    mesh.userData.solid = true;

    mesh.userData.type = type;

    scene.add(mesh);

    collidables.push(mesh);
}

addEntity(
    new THREE.Mesh(
        new THREE.BoxGeometry(1,2,1),
        new THREE.MeshStandardMaterial({color:0xffff00})
    ),
    'npc',
    5,
    0,
    1
);
