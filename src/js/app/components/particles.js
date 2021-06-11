import * as THREE from 'three';

import Material from './material';

// This helper class can be used to create and then place particles in the scene
export default class Particles {
  constructor(scene) {
    this.scene = scene;
    this.geo = null;
  }

  make() {
    return () => {
      this.geo = new THREE.BufferGeometry();
    };
  }

  place(position, rotation, colorHex = 0xeeeeee, particleSize = 1) {

    const material = new Material(colorHex, particleSize).points;

    const points = new THREE.Points(this.geo, material);

    // Use ES6 spread to set position and rotation from passed in array
    points.position.set(...position);
    points.rotation.set(...rotation);

    this.scene.add(points);
    return points;
  }

  setAttribute(attributeName, attributeBufferFloat32) {
    this.geo.setAttribute(attributeName, attributeBufferFloat32);
  }
}
