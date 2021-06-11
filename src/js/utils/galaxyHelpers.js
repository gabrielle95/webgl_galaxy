import * as THREE from 'three';

export default class GalaxyHelpers {

  static normalRandom(mean, std) {
    let n = 0;
  
    for (let i = 1; i <= 12; i++) {
      n += Math.random();
    }
  
    return (n - 6) * std + mean;
  }

  static galaxyParticlePositions(galaxySize = 1000, thetaSpread = 2.2, thetaPiMultiplier = 2, phiSpread = 0.5) {
    let norm = 0;
    const positions = [];

    for (let i = 0; i < galaxySize; i++) {
      norm = this.normalRandom(0.5, 0.5);
      const thetaVariation = THREE.Math.randFloatSpread(thetaSpread);
      const theta = norm * Math.PI * thetaPiMultiplier + thetaVariation;
      const phi = THREE.Math.randFloatSpread(phiSpread);
      const distance = norm * galaxySize;

      // Arms
      positions.push(-distance * Math.cos(theta) * Math.cos(phi));
      positions.push(-distance * Math.sin(theta) * Math.sin(phi));
      positions.push( distance * Math.sin(theta));

      positions.push( distance * Math.cos(theta) * Math.cos(phi));
      positions.push( distance * Math.sin(theta) * Math.sin(phi));
      positions.push(-distance * Math.sin(theta));

    }

    return positions;  
  }
}
  
