import 'dart:isolate';
import 'dart:typed_data';

import 'package:flax/runtime.dart';
import 'package:test/test.dart';

const _jobsSource = r'''globalThis.events = ['sync'];
Promise.resolve()
  .then(() => events.push('first'))
  .then(() => events.push('second'))
  .then(() => {
    throw new Error('handled rejection');
  })
  .catch(() => events.push('caught'));
undefined;
''';

double _number(FlaxJsValue value) => (value as FlaxJsNumber).value;
String _string(FlaxJsValue value) => (value as FlaxJsString).value;

void flaxRuntimeContract(FlaxJsRuntime Function() createRuntime) {
  late FlaxJsRuntime runtime;
  setUp(() => runtime = createRuntime());
  tearDown(() => runtime.dispose());

  test('bulk bytes copy views and transfer actually detaches every view', () {
    final bytes = Uint8List.fromList([0, 127, 255, 8]);
    final buffer = runtime.createArrayBuffer(bytes);
    bytes[0] = 99;
    expect(runtime.readBytes(buffer), [0, 127, 255, 8]);
    final global = runtime.evaluate('globalThis') as FlaxJsObject;
    global.setProperty('binary', buffer);
    global.release();
    for (final source in [
      'new Uint8Array(binary, 1, 2)',
      'new DataView(binary, 2, 1)',
      'new Uint8Array(binary, 4, 0)',
    ]) {
      final view = runtime.evaluate(source) as FlaxJsObject;
      final result = runtime.readBytes(view);
      expect(
        result,
        source.contains('1, 2')
            ? [127, 255]
            : source.contains('2, 1')
            ? [255]
            : isEmpty,
      );
      view.release();
    }
    final other = createRuntime();
    try {
      expect(() => other.readBytes(buffer), throwsArgumentError);
    } finally {
      other.dispose();
    }
    final moved = runtime.evaluate(
      'globalThis.oldView = new Uint8Array(binary); binary.transfer(6)',
    ) as FlaxJsObject;
    expect(runtime.readBytes(moved), [0, 127, 255, 8, 0, 0]);
    expect(
      _number(runtime.evaluate('binary.byteLength + oldView.byteLength')),
      0,
    );
    expect(() => runtime.readBytes(buffer), throwsArgumentError);
    for (final expression in [
      'new Uint8Array(binary)',
      'new DataView(binary)',
      'binary.transfer()',
    ]) {
      expect(
        () => runtime.evaluate(expression),
        throwsA(isA<FlaxJsException>()),
      );
    }
    final view = runtime.getGlobal('oldView') as FlaxJsObject;
    expect(() => runtime.readBytes(view), throwsArgumentError);
    view.release();
    moved.release();
    buffer.release();
    final empty = runtime.createArrayBuffer(Uint8List(0));
    expect(runtime.readBytes(empty), isEmpty);
    empty.release();
    expect(() => runtime.readBytes(empty), throwsStateError);
  });

  test('frozen and sealed copied buffers still transfer using the original intrinsic', () {
    final transfer = runtime.evaluate(r'''(buffer, freeze, length) => {
      const view = new Uint8Array(buffer);
      const dataView = new DataView(buffer);
      if (freeze) Object.freeze(buffer); else Object.seal(buffer);
      const moved = buffer.transfer(length);
      let detached = false; try { dataView.byteLength; } catch (_) { detached = true; }
      if (buffer.byteLength !== 0 || view.byteLength !== 0 || !detached) throw Error('Old views remain attached');
      return moved;
    }''') as FlaxJsFunction;
    try {
      for (final frozen in [true, false]) {
        for (final length in [0, 2, 6]) {
          final buffer = runtime.createArrayBuffer(
            Uint8List.fromList([1, 2, 3]),
          );
          final moved = transfer.call([
            buffer,
            FlaxJsBoolean(frozen),
            FlaxJsNumber(length.toDouble()),
          ]) as FlaxJsObject;
          expect(runtime.readBytes(moved), [
            for (var i = 0; i < length; i++) i < 3 ? i + 1 : 0,
          ]);
          moved.release();
          buffer.release();
        }
      }
      final original = runtime.evaluate('ArrayBuffer') as FlaxJsFunction;
      final global = runtime.evaluate('globalThis') as FlaxJsObject;
      try {
        runtime.evaluate(
          'globalThis.ArrayBuffer = function() { throw Error("Application constructor called"); }; undefined;',
        );
        final buffer = runtime.createArrayBuffer(Uint8List(0));
        final moved = transfer.call([
          buffer,
          const FlaxJsBoolean(true),
          const FlaxJsNumber(0),
        ]) as FlaxJsObject;
        expect(runtime.readBytes(moved), isEmpty);
        moved.release();
        buffer.release();
      } finally {
        global.setProperty('ArrayBuffer', original);
        original.release();
        global.release();
      }
    } finally {
      transfer.release();
    }
  });

  for (final mutation in [
    "globalThis.eval = () => { evalCalls++; return 'WRONG'; }",
    'delete globalThis.eval',
    "Object.defineProperty(globalThis, 'eval', {get() { evalCalls++; throw new Error('eval accessed'); }})",
  ]) {
    test('UTF-16 ignores modified eval: $mutation', () {
      runtime.registerHostFunction('echo', (_, args) => args.single);
      final echo = runtime.getGlobal('echo') as FlaxJsFunction;
      final object = runtime.evaluate('({})') as FlaxJsObject;
      runtime.evaluate('globalThis.evalCalls = 0; $mutation; undefined');
      try {
        for (final text in [
          '',
          'ASCII',
          '中文🌱',
          'a\u0000b',
          String.fromCharCodes([0xd800, 0, 0xdc00]),
        ]) {
          expect(
            _string(echo.call([FlaxJsString(text)])).codeUnits,
            text.codeUnits,
          );
          object.setProperty(text, FlaxJsString(text));
          expect(_string(object.getProperty(text)).codeUnits, text.codeUnits);
        }
        expect(_string(runtime.evaluate(r'"中文\ud800"')).codeUnits, [
          0x4e2d,
          0x6587,
          0xd800,
        ]);
        expect(_number(runtime.evaluate('evalCalls')), 0);
      } finally {
        echo.release();
        object.release();
      }
    });
  }

  for (final target in ['own', 'prototype']) {
    for (final property in [
      'value: false',
      'value: true',
      "get() { detachedCalls++; throw new Error('detached accessed'); }",
    ]) {
      test('byte reads ignore $target detached property: $property', () {
        final values = runtime.evaluate('''
          globalThis.detachedCalls = 0;
          (() => {
            const live = new ArrayBuffer(4);
            new Uint8Array(live).set([10, 20, 30, 40]);
            const empty = new ArrayBuffer(0);
            const moved = new ArrayBuffer(4);
            const movedEmpty = new ArrayBuffer(0);
            const oldTyped = new Uint8Array(moved);
            const oldData = new DataView(moved);
            moved.transfer(); movedEmpty.transfer();
            const objects = {live, empty, moved, movedEmpty, oldTyped, oldData,
              typed: new Uint8Array(live, 1, 2), data: new DataView(live, 2, 1)};
            for (const object of ${target == 'own' ? '[live, empty, moved, movedEmpty]' : '[ArrayBuffer.prototype]'}) {
              Object.defineProperty(object, 'detached', {configurable: true, $property});
            }
            return objects;
          })()
        ''') as FlaxJsObject;
        try {
          for (final entry in <String, List<int>>{
            'live': [10, 20, 30, 40],
            'empty': [],
            'typed': [20, 30],
            'data': [30],
          }.entries) {
            final buffer = values.getProperty(entry.key) as FlaxJsObject;
            try {
              expect(runtime.readBytes(buffer), entry.value);
            } finally {
              buffer.release();
            }
          }
          for (final name in ['moved', 'movedEmpty', 'oldTyped', 'oldData']) {
            final buffer = values.getProperty(name) as FlaxJsObject;
            try {
              // DataView's intrinsic range getter itself rejects detachment.
              expect(
                () => runtime.readBytes(buffer),
                name == 'oldData'
                    ? throwsA(isA<FlaxJsException>())
                    : throwsArgumentError,
              );
            } finally {
              buffer.release();
            }
          }
          expect(_number(runtime.evaluate('detachedCalls')), 0);
          expect(_number(runtime.evaluate('21 * 2')), 42);
        } finally {
          values.release();
        }
      });
    }
  }

  test('primitive values preserve their JS distinctions', () {
    expect(runtime.evaluate('undefined'), isA<FlaxJsUndefined>());
    expect(runtime.evaluate('null'), isA<FlaxJsNull>());
    expect((runtime.evaluate('true') as FlaxJsBoolean).value, isTrue);
    expect(_number(runtime.evaluate('NaN')).isNaN, isTrue);
    expect(_number(runtime.evaluate('Infinity')), double.infinity);
    expect(_number(runtime.evaluate('-0')).isNegative, isTrue);
    runtime.registerHostFunction('echo', (_, arguments) => arguments.single);
    final echo = runtime.getGlobal('echo') as FlaxJsFunction;
    for (final value in ['', 'Hello 世界 🌱', 'a\u0000b']) {
      expect(_string(echo.call([FlaxJsString(value)])), value);
    }
    expect(echo.call([const FlaxJsUndefined()]), isA<FlaxJsUndefined>());
    expect(echo.call([const FlaxJsNull()]), isA<FlaxJsNull>());
    echo.release();
  });

  test('objects retain identity and support properties', () {
    final first =
        runtime.evaluate('globalThis.item = {value: 1}') as FlaxJsObject;
    final second = runtime.getGlobal('item') as FlaxJsObject;
    expect(first.strictEquals(second), isTrue);
    first.setProperty('名字🌱', const FlaxJsString('value'));
    expect(_string(second.getProperty('名字🌱')), 'value');
    final retained = first.retain();
    first.release();
    expect(() => first.getProperty('value'), throwsStateError);
    expect(_number(retained.getProperty('value')), 1);
    first.release();
    retained.release();
    second.release();
  });

  test('UTF-16 strings and property names preserve unpaired surrogates', () {
    final unusual = String.fromCharCodes([0xd800, 0, 0xdc00]);
    final object = runtime.evaluate('({})') as FlaxJsObject;
    object.setProperty(unusual, FlaxJsString(unusual));
    expect(_string(object.getProperty(unusual)).codeUnits, unusual.codeUnits);
    expect(_string(runtime.evaluate(r'"\ud800"')).codeUnits, [0xd800]);
    object.release();
  });

  test('runtime objects cannot be sent to another isolate', () async {
    await expectLater(
      Isolate.spawn<FlaxJsRuntime>((value) => value.dispose(), runtime),
      throwsArgumentError,
    );
  });

  test('calls functions with arguments and an explicit primitive receiver', () {
    final function = runtime.evaluate(
      '(function(x) { "use strict"; return this + x; })',
    ) as FlaxJsFunction;
    expect(
      _number(
        function.call([
          const FlaxJsNumber(2),
        ], thisValue: const FlaxJsNumber(40)),
      ),
      42,
    );
    function.release();
  });

  test('JS calls Dart synchronously, including nested Dart and JS calls', () {
    runtime.registerHostFunction(
      'inner',
      (_, args) => FlaxJsNumber(_number(args.single) + 1),
    );
    runtime.registerHostFunction('outer', (_, args) {
      final inner = runtime.getGlobal('inner') as FlaxJsFunction;
      try {
        return inner.call(args);
      } finally {
        inner.release();
      }
    });
    expect(_number(runtime.evaluate('outer(41)')), 42);
  });

  test('exceptions are per call and recover across nested calls', () {
    runtime.registerHostFunction(
      'fail',
      (_, _) => throw StateError('inner failure'),
    );
    runtime.registerHostFunction('recover', (_, _) {
      expect(() => runtime.evaluate('fail()'), throwsA(isA<FlaxJsException>()));
      return runtime.evaluate('6 * 7');
    });
    expect(_number(runtime.evaluate('recover()')), 42);
    expect(
      () => runtime.evaluate(
        'throw new Error("expected")',
        sourceUrl: 'fixture.js',
      ),
      throwsA(
        isA<FlaxJsException>()
            .having((e) => e.message, 'message', contains('expected'))
            .having((e) => e.jsStack, 'stack', contains('fixture.js')),
      ),
    );
    expect(() => runtime.evaluate('const ='), throwsA(isA<FlaxJsException>()));
    expect(_number(runtime.evaluate('1 + 2')), 3);
    expect(
      _string(runtime.evaluate('try { fail(); } catch (e) { e.message; }')),
      contains('inner failure'),
    );
  });

  test('borrowed callback references expire and retained ones survive', () {
    late FlaxJsObject borrowed;
    late FlaxJsObject retained;
    runtime.registerHostFunction('capture', (_, args) {
      borrowed = args.single as FlaxJsObject;
      retained = borrowed.retain();
      return borrowed;
    });
    final result = runtime.evaluate('capture({answer: 42})') as FlaxJsObject;
    expect(() => borrowed.getProperty('answer'), throwsStateError);
    expect(result.strictEquals(retained), isTrue);
    expect(_number(retained.getProperty('answer')), 42);
    retained.release();
    result.release();
  });

  test('getter and setter callbacks can reenter the runtime', () {
    runtime.registerHostFunction(
      'valueFromDart',
      (_, _) => runtime.evaluate('21 * 2'),
    );
    final object = runtime.evaluate(
      '({get answer() { return valueFromDart(); }, set answer(v) { globalThis.saved = valueFromDart() + v; }})',
    ) as FlaxJsObject;
    expect(_number(object.getProperty('answer')), 42);
    object.setProperty('answer', const FlaxJsNumber(1));
    expect(_number(runtime.getGlobal('saved')), 43);
    object.release();
  });

  test('foreign references are rejected without corrupting either runtime', () {
    final other = createRuntime();
    try {
      final foreign = other.evaluate('({})') as FlaxJsObject;
      final local = runtime.evaluate('({})') as FlaxJsObject;
      expect(() => local.setProperty('foreign', foreign), throwsArgumentError);
      expect(() => local.strictEquals(foreign), throwsArgumentError);
      final fn = runtime.evaluate('(x => x)') as FlaxJsFunction;
      expect(() => fn.call([foreign]), throwsArgumentError);
      expect(_number(fn.call([const FlaxJsNumber(7)])), 7);
      foreign.release();
      local.release();
      fn.release();
    } finally {
      other.dispose();
    }
  });

  test(
    'replacing a global host function keeps older JS references callable',
    () {
      runtime.registerHostFunction('host', (_, _) => const FlaxJsNumber(1));
      final original = runtime.getGlobal('host') as FlaxJsFunction;
      runtime.registerHostFunction('host', (_, _) => const FlaxJsNumber(2));
      expect(_number(original.call([])), 1);
      expect(_number(runtime.evaluate('host()')), 2);
      original.release();
    },
  );

  test('a throwing global setter can retain a registered host function', () {
    runtime.evaluate('''
      Object.defineProperty(globalThis, 'captureThenThrow', {
        set: function(fn) {
          globalThis.capturedHost = fn;
          throw new Error('setter failed after retaining function');
        }
      });
    ''');
    expect(
      () => runtime.registerHostFunction(
        'captureThenThrow',
        (_, args) => args.single,
      ),
      throwsA(isA<FlaxJsException>()),
    );
    expect(_number(runtime.evaluate('capturedHost(42)')), 42);
  });

  test('microtasks run only at explicit checkpoints', () {
    runtime.evaluate(_jobsSource);
    expect(_string(runtime.evaluate('events.join(",")')), 'sync');
    expect(runtime.drainMicrotasks(), isTrue);
    expect(
      _string(runtime.evaluate('events.join(",")')),
      'sync,first,second,caught',
    );
    runtime.registerHostFunction('drainInside', (_, _) {
      expect(() => runtime.drainMicrotasks(), throwsStateError);
      return const FlaxJsUndefined();
    });
    runtime.evaluate('drainInside()');
    expect(() => runtime.drainMicrotasks(maxJobsHint: -2), throwsArgumentError);
  });

  test(
    'active disposal is rejected and later disposal invalidates references',
    () {
      runtime.registerHostFunction('disposeInside', (_, _) {
        expect(() => runtime.dispose(), throwsStateError);
        return const FlaxJsNumber(42);
      });
      expect(_number(runtime.evaluate('disposeInside()')), 42);
      final object = runtime.evaluate('({})') as FlaxJsObject;
      runtime.dispose();
      expect(runtime.isDisposed, isTrue);
      expect(object.isReleased, isTrue);
      expect(() => object.getProperty('x'), throwsStateError);
      expect(() => runtime.evaluate('1'), throwsStateError);
      object.release();
      runtime.dispose();
    },
  );

  test('repeated teardown releases live references and pending jobs', () {
    for (var i = 0; i < 50; i++) {
      final instance = createRuntime();
      var called = false;
      instance.registerHostFunction('later', (_, _) {
        called = true;
        return const FlaxJsUndefined();
      });
      instance.evaluate(
        'Promise.resolve().then(later); ({retained: new Array(100)})',
      );
      instance.dispose();
      expect(called, isFalse);
    }
  });
}
