import * as THREE from 'three'

export function addGeometry(params) {
    const {
        scene,
        geometry,
        position,
        rgb
    } = params

    const {
        r,
        g,
        b
    } = rgb

    const material = new THREE.MeshBasicMaterial()
    material.color = new THREE.Color(r, g, b)
    const mesh = new THREE.Mesh(geometry, material)
    if(position) {
        mesh.position.x = position.x
        mesh.position.y = position.y
    }
    scene.add(mesh)
    return mesh
}