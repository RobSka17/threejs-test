import * as THREE from 'three'

export const buildScene = () => {
    const width = 800
    const height = 600

    const camera = new THREE.PerspectiveCamera(70, width/height, 0.01, 10)
    camera.position.z = 1
    const scene = new THREE.Scene()

    return { scene, camera, width, height }
}