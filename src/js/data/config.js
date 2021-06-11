import TWEEN from '@tweenjs/tween.js';

// This object contains the state of the app
export default {
  isDev: false,
  isShowingStats: true,
  isLoaded: false,
  isTweening: false,
  isRotating: true,
  isMouseMoving: false,
  isMouseOver: false,
  maxAnisotropy: 1,
  dpr: 1,
  easing: TWEEN.Easing.Quadratic.InOut,
  duration: 500,
  background: {
    color: 0x000000
  },
  model: {
    selected: 0,
    initialTypes: ['gltf', 'object'],
    type: 'gltf'
  },
  models: [
    {
      path: './assets/models/duck.gltf',
      scale: 20,
      type: 'gltf'
    },
    {
      path: './assets/models/Teapot.json',
      scale: 20,
      type: 'object'
    }
  ],
  texture: {
    path: './assets/textures/',
    imageFiles: [
      { name: 'UV', image: 'UV_Grid_Sm.jpg' }
    ]
  },
  mesh: {
    enableHelper: true,
    wireframe: false,
    translucent: false,
    material: {
      color: 0xffffff,
      emissive: 0xffffff
    }
  },
  particles: {
    galaxy: {
      enabled: true,
      size: 1000,
      thetaSpread: 2.2,
      thetaPiMultiplier: 2,
      phiSpread: 0.5,
      stars: {
        color: 0xeeeeee,
        size: 1
      }
    }
  },
  fog: {
    color: 0xffffff,
    near: 0.0008
  },
  camera: {
    fov: 100,
    near: 100,
    far: 5000,
    aspect: 1,
    posX: 0,
    posY: 0,
    posZ: 2000
  },
  controls: {
    autoRotate: true,
    autoRotateSpeed: -0.05,
    rotateSpeed: 0.5,
    zoomSpeed: 0.8,
    minDistance: 200,
    maxDistance: 4000,
    minPolarAngle: Math.PI / 5,
    maxPolarAngle: Math.PI / 1.5,
    minAzimuthAngle: -Infinity,
    maxAzimuthAngle: Infinity,
    enableDamping: true,
    dampingFactor: 0.5,
    enableZoom: true,
    target: {
      x: 0,
      y: 0,
      z: 0
    }
  },
  ambientLight: {
    enabled: true,
    color: 0x141414
  },
  directionalLight: {
    enabled: true,
    color: 0xf0f0f0,
    intensity: 0.4,
    x: -75,
    y: 280,
    z: 150
  },
  shadow: {
    enabled: true,
    helperEnabled: false,
    bias: 0,
    mapWidth: 2048,
    mapHeight: 2048,
    near: 250,
    far: 400,
    top: 100,
    right: 100,
    bottom: -100,
    left: -100
  },
  pointLight: {
    enabled: true,
    color: 0xffffff,
    intensity: 0.34,
    distance: 115,
    x: 0,
    y: 0,
    z: 0
  },
  hemiLight: {
    enabled: true,
    color: 0xc8c8c8,
    groundColor: 0xffffff,
    intensity: 0.55,
    x: 0,
    y: 0,
    z: 0
  }
};
