import * as THREE from 'three'

export const buildRenderer = (width, height) => {
    const rendererParams = {
        antialias: true
    }
    const renderer = new THREE.WebGLRenderer(rendererParams)
    renderer.setSize(width, height)
    return renderer
}