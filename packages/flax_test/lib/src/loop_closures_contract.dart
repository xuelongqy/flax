import 'dart:convert';

import 'package:flax/runtime.dart';
import 'package:test/test.dart';

void flaxLoopClosureContract(FlaxJsRuntime Function() createRuntime) {
  late FlaxJsRuntime runtime;
  setUp(() => runtime = createRuntime());
  tearDown(() => runtime.dispose());

  final loops = <String, (String, String)>{
    'for-of const': (
      'for (const value of [1, 2]) callbacks.push(() => value);',
      '1,2',
    ),
    'for-of let': (
      'for (let value of [1, 2]) callbacks.push(() => value);',
      '1,2',
    ),
    'for let': (
      'for (let value = 1; value <= 2; value++) callbacks.push(() => value);',
      '1,2',
    ),
    'for-in const': (
      'for (const key in {first: 1, second: 2}) callbacks.push(() => key);',
      'first,second',
    ),
    'destructured bindings': (
      '''
for (const [index, {value}] of [[1, {value: 2}], [3, {value: 4}]]) {
  callbacks.push(() => index * 10 + value);
}
''',
      '12,34',
    ),
    'nested loops': (
      '''
for (const outer of [1, 2]) {
  for (const inner of [3, 4]) callbacks.push(() => outer * 10 + inner);
}
''',
      '13,14,23,24',
    ),
    'block shadowing': (
      '''
for (const value of [1, 2]) {
  { const value = 9; callbacks.push(() => value); }
  callbacks.push(() => value);
}
''',
      '9,1,9,2',
    ),
    'var keeps its shared binding': (
      'for (var value of [1, 2]) callbacks.push(() => value);',
      '2,2',
    ),
  };
  for (final entry in loops.entries) {
    test('loop closures: ${entry.key}', () {
      final (loop, expected) = entry.value;
      final result = runtime.evaluate('''
(() => {
  const callbacks = [];
  $loop
  return callbacks.map(fn => fn()).join(',');
})()
''') as FlaxJsString;
      expect(result.value, expected);
    });
  }

  test('loop closures survive evaluation and later Dart calls', () {
    final callbacks = runtime.evaluate('''
(() => {
  const callbacks = [];
  for (const value of [1, 2]) callbacks.push(() => value);
  return callbacks;
})()
''') as FlaxJsObject;
    try {
      for (var i = 0; i < 2; i++) {
        final callback = callbacks.getProperty('$i') as FlaxJsFunction;
        try {
          expect((callback.call(const []) as FlaxJsNumber).value, i + 1);
        } finally {
          callback.release();
        }
      }
    } finally {
      callbacks.release();
    }
  });

  test('loop accessors retain their own fields', () {
    final object = runtime.evaluate('''
(() => {
  const values = {first: 1, second: 2};
  const object = {};
  for (const field of Object.keys(values)) {
    Object.defineProperty(object, field, {
      get() { return values[field]; },
      set(value) { values[field] = value; },
    });
  }
  return object;
})()
''') as FlaxJsObject;
    try {
      expect((object.getProperty('first') as FlaxJsNumber).value, 1);
      expect((object.getProperty('second') as FlaxJsNumber).value, 2);
      object.setProperty('first', const FlaxJsNumber(10));
      expect((object.getProperty('first') as FlaxJsNumber).value, 10);
      expect((object.getProperty('second') as FlaxJsNumber).value, 2);
      object.setProperty('second', const FlaxJsNumber(20));
      expect((object.getProperty('first') as FlaxJsNumber).value, 10);
      expect((object.getProperty('second') as FlaxJsNumber).value, 20);
    } finally {
      object.release();
    }
  });

  const expression = '''
(() => {
  const callbacks = [];
  for (const value of [1, 2]) callbacks.push(() => value);
  return callbacks.map(fn => fn()).join(',');
})()
''';
  test('eval preserves per-iteration bindings', () {
    final result = runtime.evaluate('eval(${jsonEncode(expression)})');
    expect((result as FlaxJsString).value, '1,2');
  });
  test('Function preserves per-iteration bindings', () {
    final source = jsonEncode('return $expression;');
    final result = runtime.evaluate('new Function($source)()');
    expect((result as FlaxJsString).value, '1,2');
  });

  test('Promise loop callbacks wait for the explicit checkpoint', () {
    runtime.evaluate('''
globalThis.capturedValues = [];
for (const value of [1, 2]) {
  Promise.resolve().then(() => capturedValues.push(value));
}
undefined;
''');
    expect(
      (runtime.evaluate('capturedValues.join(",")') as FlaxJsString).value,
      '',
    );
    expect(runtime.drainMicrotasks(), isTrue);
    expect(
      (runtime.evaluate('capturedValues.join(",")') as FlaxJsString).value,
      '1,2',
    );
  });
}
