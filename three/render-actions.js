export const renderActions = new Set()

export function addRenderAction(action) {
    renderActions.add(action)
}