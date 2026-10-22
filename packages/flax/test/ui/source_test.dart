import 'package:flax/runtime.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter_test/flutter_test.dart';

import '../support/runtime_tracker.dart';

@pragma('vm:never-inline')
(WeakReference<FlaxJsSource>, FlaxJsFunction) _ephemeralSource(
  FlaxJsRuntime runtime,
) {
  final source = FlaxJsSource('''
(() => {
  class Base { value() { return '中文🙂'; } }
  class Child extends Base {
    #suffix = '\\u0000';
    value() { return super.value() + this.#suffix; }
  }
  const object = new Child();
  return () => object.value();
})()
''', sourceUrl: 'flax:temporary-source');
  return (
    WeakReference(source),
    runtime.evaluateSource(source) as FlaxJsFunction,
  );
}

void main() {
  test(
    'reusable UTF-8 sources preserve isolated globals, reentry and errors',
    () {
      final first = RuntimeTracker();
      final second = RuntimeTracker();
      final nested = FlaxJsSource("'中文🙂'", sourceUrl: 'flax:nested');
      final source = FlaxJsSource('''
globalThis.count = (globalThis.count || 0) + 1;
if (nested() !== '中文🙂') throw Error('Invalid nested source');
count;
''', sourceUrl: 'flax:共享-source');
      try {
        expect(() => source.bytes[0] = 0, throwsUnsupportedError);
        expect(() => source.sourceUrlBytes[0] = 0, throwsUnsupportedError);
        expect(identical(source.bytes, source.bytes), isTrue);
        for (final runtime in [first, second]) {
          runtime.registerHostFunction(
            'nested',
            (_, _) => runtime.evaluateSource(nested),
          );
        }
        expect((first.evaluateSource(source) as FlaxJsNumber).value, 1);
        expect((second.evaluateSource(source) as FlaxJsNumber).value, 1);
        expect((first.evaluateSource(source) as FlaxJsNumber).value, 2);
        second.dispose();
        expect((first.evaluateSource(source) as FlaxJsNumber).value, 3);
        expect(
          () => first.evaluateSource(
            FlaxJsSource(
              "throw new Error('错误🙂')",
              sourceUrl: 'flax:错误-source',
            ),
          ),
          throwsA(
            isA<FlaxJsException>().having(
              (error) => error.toString(),
              'error',
              contains('错误🙂'),
            ),
          ),
        );
        expect(first.evaluateSource(FlaxJsSource('')), isA<FlaxJsUndefined>());
      } finally {
        if (!second.isDisposed) second.dispose();
        first.dispose();
      }
      expect(first.handlesAtDispose, 0);
      expect(second.handlesAtDispose, 0);
    },
  );

  test('JS closures outlive collected reusable source buffers', () async {
    final runtime = RuntimeTracker();
    final (source, function) = _ephemeralSource(runtime);
    try {
      for (var attempt = 0; attempt < 8; attempt++) {
        await flaxTestCollectDartGarbage();
        if (source.target == null) break;
      }
      expect(source.target, isNull);
      runtime.evaluate(flaxTestJsGarbagePressure);
      expect((function.call(const []) as FlaxJsString).value, '中文🙂\u0000');
    } finally {
      function.release();
      runtime.dispose();
    }
    expect(runtime.handlesAtDispose, 0);
  });
}
