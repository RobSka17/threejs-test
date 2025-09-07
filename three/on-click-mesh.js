import * as THREE from 'three'

export function onClickMesh(intersectObjects) {
    for(let i = 0; i < intersectObjects.length; i++)
    {
        const object = intersectObjects[i]
        setRandomColor(object)
    }
}

function setRandomColor(intersectObject) {
    const r = Math.random()
    const g = Math.random()
    const b = Math.random()
    intersectObject.object.material.color = new THREE.Color(r, g, b)
}