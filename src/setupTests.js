// Node.js built-in modules
const { Blob, File } = require('node:buffer')
const { TextDecoder, TextEncoder, ReadableStream } = require('node:util')
const Adapter = require('@cfaester/enzyme-adapter-react-18').default
const Enzyme = require('enzyme')

// Setup globals
Object.defineProperties(globalThis, {
    TextDecoder: { value: TextDecoder },
    TextEncoder: { value: TextEncoder },
    ReadableStream: { value: ReadableStream },
    Blob: { value: Blob },
    File: { value: File },
})

// Enzyme setup
Enzyme.configure({ adapter: new Adapter() })
