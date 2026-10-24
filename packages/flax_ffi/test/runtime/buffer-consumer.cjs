// CommonJS consumption shape used by existing npm packages.
const bare = require('buffer');
const node = require('node:buffer');
module.exports = {
  Buffer: bare.Buffer,
  shared: bare.Buffer === node.Buffer,
  encode: (text) => bare.Buffer.from(text).toString('base64'),
};
