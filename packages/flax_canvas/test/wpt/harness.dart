// Only the WPT assertions and scheduling used by the selected worker cases.
const wptHarness = r'''
  const pending = [];
  let completed = 0, assertions = 0;
  function fail(message) { throw Error(message); }
  function _assert(value, message = 'assertion') { ++assertions; if (!value) fail(message); }
  function _assertSame(actual, expected, message = '') {
    _assert(actual === expected, message + ': expected ' + expected + ', got ' + actual);
  }
  function _assertDifferent(actual, expected, message = '') {
    _assert(actual !== expected, message + ': unexpectedly ' + actual);
  }
  const assert_true = _assert, assert_equals = _assertSame, assert_not_equals = _assertDifferent;
  function assert_false(value, message) { _assert(!value, message); }
  function assert_regexp_match(value, expression, message) {
    _assert(expression.test(value), message || String(value) + ' did not match ' + expression);
  }
  function assert_throws_dom(name, action) {
    let caught;
    try { action(); } catch (error) { caught = error; }
    check_dom_exception(name, caught);
  }
  function check_dom_exception(name, error) {
    const aliases = { INDEX_SIZE_ERR:'IndexSizeError', INVALID_STATE_ERR:'InvalidStateError',
      NOT_SUPPORTED_ERR:'NotSupportedError', SYNTAX_ERR:'SyntaxError' };
    name = aliases[name] || name;
    _assert(error instanceof DOMException && error.name === name,
            'expected DOMException ' + name + ', got ' + error);
  }
  function promise_rejects_dom(t, name, promise) {
    return Promise.resolve(promise).then(
      () => fail('expected rejection: ' + name),
      error => check_dom_exception(name, error));
  }
  async function fetch(path) {
    const encoded = globalThis.__wptImages[path];
    if (encoded === undefined) throw Error('Missing pinned WPT asset: ' + path);
    const bytes = Uint8Array.from(atob(encoded), c => c.charCodeAt(0));
    return { blob: async () => new Blob([bytes], {type:'image/png'}) };
  }
  function assert_throws_js(type, action) {
    let caught;
    try { action(); } catch (error) { caught = error; }
    _assert(caught instanceof type, 'expected ' + type.name + ', got ' + caught);
  }
  function assert_approx_equals(actual, expected, tolerance, message = '') {
    _assert(Math.abs(actual - expected) <= tolerance,
            message + ': expected ' + expected + ' +/- ' + tolerance + ', got ' + actual);
  }
  function _assertPixelApprox(canvas, x, y, r, g, b, a, tolerance = 2) {
    const rgba = canvas.getContext('2d').getImageData(x, y, 1, 1).data;
    [r, g, b, a].forEach((v, i) => assert_approx_equals(rgba[i], v, tolerance, 'pixel ' + x + ',' + y + ' channel ' + i));
  }
  function _assertPixel(canvas, x, y, r, g, b, a) {
    _assertPixelApprox(canvas, x, y, r, g, b, a, 0);
  }
  // Selected geometry cases use DOMPoint only as a data dictionary.
  class DOMPoint {
    constructor(x = 0, y = 0, z = 0, w = 1) { Object.assign(this, {x, y, z, w}); }
  }
  function async_test() {
    return {
      step(fn) { fn(); },
      step_func(fn) { return fn; },
      done() { ++completed; }
    };
  }
  function promise_test(fn) { pending.push(Promise.resolve().then(() => fn({}))); ++completed; }
  function importScripts() {}
  function done() {}
  // These exact font bytes are preloaded into Flutter by the Dart test.
  class FontFace { load() { return Promise.resolve(this); } }
  const self = { fonts: { add() {}, ready: Promise.resolve() } };
''';
