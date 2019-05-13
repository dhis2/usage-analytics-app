import pretty from 'pretty'

const test = val => {
    const isReactWrapper = val.constructor.name === 'ReactWrapper'
    return isReactWrapper
}

const print = depth => wrapper => {
    const hasChildren = wrapper.exists()
    const name = wrapper.name()
    const childElements = hasChildren && wrapper.children().getElements()

    if (childElements.length === 0) {
        // prettier-ignore
        return (
            `<${name}>
                ${wrapper.text()}
            </${name}>`
        )
    }

    if (!hasChildren || depth === 0) {
        return `<${name} />`
    }

    // prettier-ignore
    return pretty(
        `<${name}>
            ${wrapper.children().map(print(depth - 1)).join('')}
        </${name}>`
    )
}

const createSerializer = depth => ({
    print: wrapper => print(depth)(wrapper.children()),
    test,
})

module.exports = createSerializer
