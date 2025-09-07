import { addCursorRaycast } from './three/add-cursor-raycast.js'
import { addGeometry } from './three/add-geometry.js'
import { applyMeshRotation } from './three/apply-mesh-rotation.js'
import { buildBoxGeometry } from './three/build-box-geometry.js'
import { buildCylinderGeometry } from './three/build-cylinder-geometry.js'
import { buildRenderer } from './three/build-renderer.js'
import { buildScene } from './three/build-scene.js'
import { buildSphereGeometry } from './three/build-sphere-geometry.js'
import { renderScene } from './three/render-scene.js'

const { scene, camera, width, height } = buildScene()
const renderer = buildRenderer(width, height)

const rotatingObjects = [
    addGeometry({
        scene,
        geometry: buildBoxGeometry(0.2, 0.2, 0.2),
        rgb: {r: Math.random(), g: Math.random(), b: Math.random()},
        position: { x: 0.5, y: 0.2 }
    }),
    addGeometry({
        scene,
        geometry: buildBoxGeometry(0.1, 0.1, 0.1),
        rgb: {r: Math.random(), g: Math.random(), b: Math.random()},
        position: { x: -0.6, y: -0.4 }
    }),
    addGeometry({
        scene,
        geometry: buildCylinderGeometry(0.1, 0.1, 0.3),
        rgb: {r: Math.random(), g: Math.random(), b: Math.random()},
        position: { x: 0.2, y: -0.3 }
    })
]

addGeometry({
    scene,
    geometry: buildSphereGeometry(0.1),
    rgb: {r: Math.random(), g: Math.random(), b: Math.random()},
    position: { x: -0.3, y: 0.4 }
})

rotatingObjects.forEach(o => applyMeshRotation(o, { x: 0.01, y: 0.01, z: 0 }))

addCursorRaycast({ scene, camera, renderer })
renderScene({ renderer, scene, camera })