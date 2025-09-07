import { renderActions } from './render-actions'

export function renderScene(params) {
    const {
        renderer,
        scene,
        camera
    } = params

    renderer.setAnimationLoop(animate)
    document.body.appendChild(renderer.domElement)

    function animate(time) {
        renderActions.forEach(r => r())
        renderer.render(scene, camera)
    }
}