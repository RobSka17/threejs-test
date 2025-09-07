import * as THREE from 'three'
import { addRenderAction } from './render-actions'
import { onClickMesh } from './on-click-mesh'

export function addCursorRaycast(params) {
    const {
        scene,
        camera,
        renderer
    } = params

    const raycaster = new THREE.Raycaster()
    const pointer = new THREE.Vector2()
    let rayIntersectObjects = []

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('click', onClick)
    addRenderAction(renderAction)

    function onPointerMove(event) {
        // calculate pointer position in normalized device coordinates
        // (-1 to +1) for both components
        if(!renderer.domElement) return
        const rendererRect = renderer.domElement.getBoundingClientRect()
        pointer.x = ( event.clientX / rendererRect.width ) * 2 - 1
        pointer.y = - ( event.clientY / rendererRect.height ) * 2 + 1
    }

    function renderAction() {
        raycaster.setFromCamera(pointer, camera)
    }

    function onClick()
    {
        rayIntersectObjects = raycaster.intersectObjects(scene.children)
        onClickMesh(rayIntersectObjects)
    }
}