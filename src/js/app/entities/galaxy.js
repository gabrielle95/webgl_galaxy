import * as THREE from 'three';
import GalaxyHelpers from '../../utils/galaxyHelpers';
import Config from '../../data/config';

export default class Galaxy {
  constructor(particles) {
    this.particles =  particles;
    this.scene = this.particles.scene;
    this.entity = null;
  }

  make() {

    this.particles.make()();

    const galaxyParticlePositions = GalaxyHelpers.galaxyParticlePositions(
      Config.particles.galaxy.size,
      Config.particles.galaxy.thetaSpread,
      Config.particles.galaxy.thetaPiMultiplier,
      Config.particles.galaxy.phiSpread
    );
  
    this.particles.setAttribute('position', new THREE.Float32BufferAttribute(galaxyParticlePositions, 3));

    this.entity = this.particles.place([0, 0, 0], [0, 0, 0], Config.particles.galaxy.stars.color, Config.particles.galaxy.stars.size);
    this.entity.visible = Config.particles.galaxy.enabled;

    this.scene.add(this.entity);
  }

  destroy() {
    this.scene.remove(this.entity);
  }

  setVisible(value) {
    this.entity.visible = value;
  }
}
