import * as THREE from 'three';
import { scene } from '../core/scene.js';
import { WORLD_SIZE } from '../core/config.js';
import { getHeightAt } from './terrainHeight.js';

const geo = new THREE.PlaneGeometry(WORLD_SIZE, WORLD_SIZE, 120, 120);

geo.rotateX(-Math.PI/2);

const pos = geo.attributes.position;

const colors = [];

for(let i=0;i<pos.count;i++){

    const x = pos.getX(i);
    const z = pos.getZ(i);

    const h = getHeightAt(x,z);

    pos.setY(i,h);

    let c;

    if(h<1) c=new THREE.Color(0x3a7a3a);
    else if(h<3) c=new THREE.Color(0x4c8f4c);
    else if(h<5) c=new THREE.Color(0x7a7a7a);
    else c=new THREE.Color(0xaaaaaa);

    colors.push(c.r,c.g,c.b);
}

geo.setAttribute(
    'color',
    new THREE.Float32BufferAttribute(colors,3)
);

geo.computeVertexNormals();

const floor = new THREE.Mesh(
    geo,
    new THREE.MeshStandardMaterial({ vertexColors:true })
);

scene.add(floor);
