const { TextDecoder, TextEncoder, ReadableStream } = require("node:util");
const { Blob, File } = require("node:buffer");

Object.defineProperties(globalThis, {
  TextDecoder: { value: TextDecoder },
  TextEncoder: { value: TextEncoder },
  ReadableStream: { value: ReadableStream },
  Blob: { value: Blob },
  File: { value: File },
});

// ✅ Proper Enzyme setup
const Enzyme = require('enzyme');
const Adapter = require('@cfaester/enzyme-adapter-react-18').default;

Enzyme.configure({ adapter: new Adapter() });
