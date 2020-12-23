export const importSvg = function(resolve) {
    const cache = {}
    resolve.keys().forEach(key => {
        const component = resolve(key)
        component.name = key.slice(2).replace('.', '-')
        cache[key] = component
    })
    return Object.freeze(cache)
}
