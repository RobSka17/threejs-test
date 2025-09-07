import { addRenderAction } from "./render-actions";

export function applyMeshRotation(mesh, rotation)
{
    addRenderAction(() => {
        mesh.rotation.x += rotation.x
        mesh.rotation.y += rotation.y
        mesh.rotation.z += rotation.z
    })
}