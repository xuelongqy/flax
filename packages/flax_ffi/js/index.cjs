// Node 22+ supports synchronous require of ESM; bundlers resolve the same source.
const api = require('./index.js');
module.exports = Object.assign({}, api.default, api);
