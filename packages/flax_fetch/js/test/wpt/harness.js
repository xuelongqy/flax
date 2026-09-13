// Minimal synchronous adapter for the selected complete pinned WPT files.
// Missing testharness APIs deliberately fail; there is no skip or expected-fail list.
globalThis.wptResults = [];
globalThis.assert_equals = (actual, expected, message = '') => {
  if (!Object.is(actual, expected))
    throw Error(`${message}: ${String(actual)} !== ${String(expected)}`);
};
globalThis.assert_true = (value, message) => assert_equals(value, true, message);
globalThis.assert_false = (value, message) => assert_equals(value, false, message);
globalThis.assert_array_equals = (actual, expected, message) => {
  assert_equals(actual.length, expected.length, message);
  for (let i = 0; i < actual.length; i++)
    assert_equals(actual[i], expected[i], message);
};
globalThis.assert_throws_js = (constructor, fn, message = '') => {
  try {
    fn();
  } catch (error) {
    if (error instanceof constructor) return;
    throw error;
  }
  throw Error(`${message}: expected ${constructor.name}`);
};
globalThis.test = (fn, name) => {
  try {
    fn();
    wptResults.push(name);
  } catch (error) {
    throw Error(`${name}: ${error.message}`);
  }
};

globalThis.assert_throws_dom = (name, fn) => {
  try {
    fn();
  } catch (error) {
    if (
      error instanceof DOMException &&
      (error.name === name || (name === 'SYNTAX_ERR' && error.name === 'SyntaxError'))
    )
      return;
    throw error;
  }
  throw Error(`Expected ${name}`);
};
