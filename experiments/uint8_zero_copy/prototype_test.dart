// Runs from packages/flax with that package's Flutter test dependencies.
// ignore_for_file: depend_on_referenced_packages, avoid_print

import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:flax/flax.dart';
// ignore: implementation_imports
import 'package:flax/src/native/native_runtime.dart';

import 'diagnostics.dart';

import 'package:flax_test/flax_test.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

FlaxNativeJsRuntime _runtime() =>
    FlaxEngine.createRuntime() as FlaxNativeJsRuntime;

void _set(FlaxNativeJsRuntime runtime, String name, FlaxJsObject object) {
  final global = runtime.evaluate('globalThis') as FlaxJsObject;
  global.setProperty(name, object);
  global.release();
}

void _execute(FlaxNativeJsRuntime runtime, String source) {
  final result = runtime.evaluate('$source; undefined;');
  if (result is FlaxJsObject) result.release();
}

int _number(FlaxNativeJsRuntime runtime, String source) =>
    (runtime.evaluate(source) as FlaxJsNumber).value.toInt();

void _report(String caseName, Map<String, Object> values) {
  // Machine-readable evidence is kept in the ignored experiment test log.
  print('ZERO_COPY ${jsonEncode({'case': caseName, ...values})}');
}

Future<void> _collect(FlaxNativeJsRuntime runtime) async {
  for (var turn = 0; turn < 3; turn++) {
    runtime.drainMicrotasks();
    runtime.prototypeCollect(young: turn == 0, compact: turn != 0);
    await Future<void>.delayed(const Duration(milliseconds: 10));
  }
}

@pragma('vm:never-inline')
Uint8List _dartOnly(FlaxNativeJsRuntime runtime) {
  final bytes = Uint8List(4096);
  final array = runtime.createUint8Array(bytes);
  _set(runtime, 'temporary', array);
  _execute(
    runtime,
    'globalThis.weak = new WeakRef(temporary); delete temporary',
  );
  array.release();
  return bytes;
}

@pragma('vm:never-inline')
WeakReference<Uint8List> _jsOnly(FlaxNativeJsRuntime runtime) {
  final bytes = Uint8List.fromList(List.filled(4096, 0));
  bytes[0] = 23;
  final array = runtime.createUint8Array(bytes);
  _set(runtime, 'bytes', array);
  array.release();
  return WeakReference(bytes);
}

@pragma('vm:never-inline')
bool _alive(WeakReference<Uint8List> bytes) => bytes.target != null;

@pragma('vm:never-inline')
Uint8List _imported(FlaxNativeJsRuntime runtime) {
  final array = runtime.evaluate('new Uint8Array(1024 * 1024)') as FlaxJsObject;
  final bytes = runtime.readUint8Array(array);
  array.release();
  return bytes;
}

@pragma('vm:never-inline')
void _checkClosedBytes(List<Uint8List> roots) {
  for (final bytes in roots) {
    expect(bytes[0], 179);
    bytes[2] = 191;
    expect(bytes[2], 191);
  }
}

Future<void> _released(FlaxNativeJsRuntime runtime, int pins) async {
  for (var turn = 0; turn < 10; turn++) {
    await _collect(runtime);
    if (flaxPrototypeUint8Stats()['pins'] == pins) return;
  }
  expect(flaxPrototypeUint8Stats()['pins'], pins);
}

Future<void> _loadSessionAssets() async {
  final directory = Directory('../../.local/ui-module-inventory/modules');
  await flaxTestLoadModuleAssets({
    for (final file in directory.listSync().whereType<File>())
      'modules/${file.uri.pathSegments.last}': file.readAsStringSync(),
  });
}

void main() {
  if (Platform.environment['FLAX_VERIFY_HERMES'] == '1') {
    test('Hermes accounts shared bytes through adoption and transfer', () async {
      final runtime = _runtime();
      try {
        await _collect(runtime);
        final before = flaxUint8JsExternalBytes();
        const size = 1024 * 1024;
        final js = runtime.evaluate(
          'globalThis.accounted = new Uint8Array($size); accounted',
        ) as FlaxJsObject;
        final allocated = flaxUint8JsExternalBytes();
        final dart = runtime.readUint8Array(js);
        final adopted = flaxUint8JsExternalBytes();
        js.release();
        expect(allocated - before, greaterThanOrEqualTo(size));
        expect(adopted - before, greaterThanOrEqualTo(size));
        runtime.evaluate(
          'accounted = new Uint8Array(accounted.buffer.transfer()); undefined;',
        );
        await _collect(runtime);
        expect(flaxUint8JsExternalBytes() - before, greaterThanOrEqualTo(size));
        runtime.evaluate('accounted[0] = 23; undefined;');
        expect(dart[0], 23);
        runtime.evaluate('accounted = null; undefined;');
        await _collect(runtime);
        expect(flaxUint8JsExternalBytes(), before);
        _report('hermes-memory-accounting', {
          'allocated': allocated - before,
          'adopted': adopted - before,
          'released': true,
        });
      } finally {
        runtime.dispose();
      }
    });
  }
  TestWidgetsFlutterBinding.ensureInitialized();

  test(
    'native bytes share addresses and mutations across compacting GC',
    () async {
      final runtime = _runtime();
      try {
        final bytes = Uint8List(1024 * 1024);
        bytes[0] = 7;
        final array = runtime.createUint8Array(bytes);
        _set(runtime, 'bytes', array);
        final address = flaxPrototypeUint8Address(bytes);
        expect(runtime.prototypeJsAddress(array), address);
        expect(_number(runtime, 'bytes[0]'), 7);
        _execute(runtime, 'bytes[0] = 19; bytes[bytes.length - 1] = 255');
        expect(bytes[0], 19);
        expect(bytes.last, 255);
        bytes[1] = 41;
        expect(_number(runtime, 'bytes[1]'), 41);
        await _collect(runtime);
        expect(flaxPrototypeUint8Address(bytes), address);
        expect(runtime.prototypeJsAddress(array), address);
        expect(bytes[0], 19);
        expect(_number(runtime, 'bytes[1]'), 41);
        _report('bidirectional', {
          'bytes': bytes.length,
          'dartAddress': address,
          'jsAddress': runtime.prototypeJsAddress(array),
          'dartSawJsWrite': bytes[0],
          'jsSawDartWrite': _number(runtime, 'bytes[1]'),
          'stableAfterYoungAndCompactingGc': true,
        });
        array.release();
      } finally {
        runtime.dispose();
      }
    },
  );

  test(
    'JS subarrays and a synchronous Dart echo share the original storage',
    () {
      final runtime = _runtime();
      try {
        final array = runtime.evaluate('''
        globalThis.full = new Uint8Array(1024 * 1024);
        full[123] = 71;
        globalThis.slice = full.subarray(123, 223);
        slice;
      ''') as FlaxJsObject;
        final bytes = runtime.readUint8Array(array);
        final full = runtime.getGlobal('full') as FlaxJsObject;
        final address = flaxPrototypeUint8Address(bytes);
        expect(address, runtime.prototypeJsAddress(array));
        expect(address - runtime.prototypeJsAddress(full), 123);
        expect(bytes.length, 100);
        expect(bytes[0], 71);
        bytes[1] = 83;
        expect(_number(runtime, 'full[124]'), 83);
        _execute(runtime, 'full[125] = 97');
        expect(bytes[2], 97);
        final dartSlice = Uint8List.sublistView(bytes, 2, 7);
        final sliceArray = runtime.createUint8Array(dartSlice);
        expect(runtime.prototypeJsAddress(sliceArray), address + 2);
        _set(runtime, 'dartSlice', sliceArray);
        _execute(runtime, 'dartSlice[0] = 99');
        expect(bytes[2], 99);
        sliceArray.release();
        runtime.registerHostFunction('echo', (_, args) {
          final incoming = runtime.readUint8Array(args.single as FlaxJsObject);
          incoming[3] = 101;
          return runtime.createUint8Array(incoming);
        });
        final echoed =
            runtime.evaluate('globalThis.echoed = echo(slice)') as FlaxJsObject;
        expect(runtime.prototypeJsAddress(echoed), address);
        expect(_number(runtime, 'full[126]'), 101);
        _execute(runtime, 'echoed[4] = 103');
        expect(bytes[4], 103);
        final callbackRoots = <Uint8List>[];
        runtime.registerHostFunction('newDartBytes', (_, args) {
          final result = Uint8List.fromList([11, 23, 31, 47]);
          callbackRoots.add(result);
          return runtime.createUint8Array(result);
        });
        final fresh = runtime.evaluate(
          'globalThis.fresh = newDartBytes()',
        ) as FlaxJsObject;
        _execute(runtime, 'fresh[0] = 53');
        expect(callbackRoots.single[0], 53);
        callbackRoots.single[1] = 61;
        expect(_number(runtime, 'fresh[1]'), 61);
        fresh.release();
        _report('js-subarray-and-dart-echo', {
          'offset': 123,
          'length': bytes.length,
          'sameAddress': true,
          'callbackKeptStorage': true,
        });
        echoed.release();
        full.release();
        array.release();
      } finally {
        runtime.dispose();
      }
    },
  );

  test(
    'Dart alone keeps bytes alive after the JS wrapper is collected',
    () async {
      final runtime = _runtime();
      try {
        await _collect(runtime);
        final before = flaxPrototypeUint8Stats();
        final roots = [_dartOnly(runtime)];
        final weak = WeakReference(roots.single);
        await _collect(runtime);
        expect(
          (runtime.evaluate(
            'weak.deref() === undefined',
          ) as FlaxJsBoolean).value,
          isTrue,
        );
        expect(flaxPrototypeUint8Stats()['pins'], before['pins']);
        roots.single[0] = 137;
        expect(roots.single[0], 137);
        roots.clear();
        await _collect(runtime);
        expect(_alive(weak), isFalse);
        _report('dart-only-owner', {
          'jsWrapperCollected': true,
          'dartObjectCollectedAfterLastRoot': true,
          'pinReleasedWhileDartStillAlive': true,
        });
      } finally {
        runtime.dispose();
      }
    },
  );

  test(
    'JS alone retains the original Dart bytes and releases the final pin',
    () async {
      final runtime = _runtime();
      try {
        await _collect(runtime);
        final before = flaxPrototypeUint8Stats();
        final weak = _jsOnly(runtime);
        await _collect(runtime);
        expect(_alive(weak), isTrue);
        expect(flaxPrototypeUint8Stats()['dartViews'], before['dartViews']);
        expect(flaxPrototypeUint8Stats()['pins'], before['pins']! + 1);
        expect(_number(runtime, 'bytes[0]'), 23);
        _execute(runtime, 'bytes[1] = 149');
        expect(_number(runtime, 'bytes[1]'), 149);
        _execute(runtime, 'delete bytes');
        await _released(runtime, before['pins']!);
        expect(_alive(weak), isFalse);
        expect(flaxPrototypeUint8Stats()['pinnedPages'], before['pinnedPages']);
        _report('js-only-owner', {
          'originalDartObjectRetainedByJs': true,
          'collectedAfterJsRelease': true,
          'pinsReturnedToBaseline': true,
        });
      } finally {
        runtime.dispose();
      }
    },
  );

  for (final jsOrigin in [false, true]) {
    for (final resize in [null, 2048, 8192]) {
      test(
        'transfer ${resize ?? 'same size'} from ${jsOrigin ? 'JS' : 'Dart'} detaches JS and preserves Dart bytes',
        () async {
          final runtime = _runtime();
          try {
            final array = jsOrigin
                ? runtime.evaluate('new Uint8Array(4096)') as FlaxJsObject
                : runtime.createUint8Array(Uint8List(4096));
            final bytes = runtime.readUint8Array(array);
            bytes[0] = 151;
            bytes.last = 157;
            _set(runtime, 'bytes', array);
            final originalAddress = flaxPrototypeUint8Address(bytes);
            var moved = runtime.evaluate(
              'globalThis.moved = new Uint8Array(bytes.buffer.transfer(${resize ?? ''}))',
            ) as FlaxJsObject;
            final movedAddress = runtime.prototypeJsAddress(moved);
            final shared = movedAddress == originalAddress;
            expect(shared, resize == null);
            expect(_number(runtime, 'bytes.byteLength'), 0);
            expect(_number(runtime, 'bytes.buffer.byteLength'), 0);
            expect(() => runtime.readUint8Array(array), throwsArgumentError);
            expect(bytes.length, 4096);
            expect(bytes[0], 151);
            expect(bytes.last, 157);
            expect(_number(runtime, 'moved.length'), resize ?? 4096);
            expect(_number(runtime, 'moved[0]'), 151);
            await _collect(runtime);
            if (shared) {
              expect(flaxPrototypeUint8Address(bytes), originalAddress);
              expect(runtime.prototypeJsAddress(moved), originalAddress);
              final pins = flaxPrototypeUint8Stats()['pins'];
              final again = runtime.evaluate(
                'globalThis.moved = new Uint8Array(moved.buffer.transfer(4096))',
              ) as FlaxJsObject;
              expect(
                (moved.getProperty('byteLength') as FlaxJsNumber).value,
                0,
              );
              moved.release();
              moved = again;
              await _collect(runtime);
              expect(runtime.prototypeJsAddress(moved), originalAddress);
              expect(flaxPrototypeUint8Address(bytes), originalAddress);
              expect(flaxPrototypeUint8Stats()['pins'], pins);
            }
            bytes[0] = 163;
            expect(_number(runtime, 'moved[0]'), shared ? 163 : 151);
            _execute(runtime, 'moved[1] = 167');
            expect(bytes[1], shared ? 167 : 0);
            if (resize == 8192) expect(_number(runtime, 'moved[8191]'), 0);
            _execute(runtime, 'delete bytes; delete moved');
            moved.release();
            array.release();
            await _collect(runtime);
            expect(bytes[0], 163);
            bytes[2] = 173;
            expect(bytes[2], 173);
            _report('transfer-${resize ?? 'same-size'}', {
              'sameStorageAfterTransfer': shared,
              'stableAfterTransferGc': true,
              'repeatedSameSizeTransfer': resize == null,
              'origin': jsOrigin ? 'JS' : 'Dart',
              'dartBytesSurviveDetachmentAndGc': true,
              'originalBytes': bytes.length,
              'transferredBytes': resize ?? 4096,
            });
          } finally {
            runtime.dispose();
          }
        },
      );
    }
  }

  test('unsafe inputs fail without leaving an unusable runtime', () {
    final runtime = _runtime();
    try {
      final shared = (runtime.evaluate(
        'typeof SharedArrayBuffer === "function"',
      ) as FlaxJsBoolean).value;
      final resizable = (runtime.evaluate(
        'new ArrayBuffer(8, {maxByteLength: 16}).resizable === true',
      ) as FlaxJsBoolean).value;
      for (final source in [
        '({buffer: new ArrayBuffer(8), byteOffset: 0, byteLength: 8})',
        'new Int8Array(8)',
        'new Uint8ClampedArray(8)',
        if (shared) 'new Uint8Array(new SharedArrayBuffer(8))',
        if (resizable)
          'new Uint8Array(new ArrayBuffer(8, {maxByteLength: 16}))',
        'new Uint8Array(8).buffer',
      ]) {
        final object = runtime.evaluate(source) as FlaxJsObject;
        expect(() => runtime.readUint8Array(object), throwsArgumentError);
        object.release();
      }
      final ordinary = runtime.createUint8Array(Uint8List(8));
      expect(runtime.readUint8Array(ordinary), hasLength(8));
      ordinary.release();
      final external = Uint8List(8);
      expect(
        () => runtime.createUint8Array(external.asUnmodifiableView()),
        throwsArgumentError,
      );
      expect(
        () => runtime.createUint8Array(Uint8List(0).asUnmodifiableView()),
        throwsArgumentError,
      );
      final empty = Uint8List(0);
      final emptyArray = runtime.createUint8Array(empty);
      expect(runtime.readUint8Array(emptyArray), isEmpty);
      _set(runtime, 'emptyBytes', emptyArray);
      final transferredEmpty = runtime.evaluate(
        'new Uint8Array(emptyBytes.buffer.transfer())',
      ) as FlaxJsObject;
      expect(runtime.readUint8Array(transferredEmpty), isEmpty);
      expect(() => runtime.readUint8Array(emptyArray), throwsArgumentError);
      expect(empty, isEmpty);
      transferredEmpty.release();
      emptyArray.release();
      expect(_number(runtime, '2 + 3'), 5);
      _report('engine-buffer-features', {
        'shared': shared,
        'resizable': resizable,
        'transfer': true,
      });
    } finally {
      runtime.dispose();
    }
  });

  testWidgets('real session close preserves Dart storage and other sessions', (
    tester,
  ) async {
    await tester.runAsync(_loadSessionAssets);
    final errors = <Object>[];
    final runtimes = <FlaxNativeJsRuntime>[];
    final source = flaxTestFixtureSource('ui', packageName: 'flax');
    final sessions = List.generate(
      2,
      (_) => FlaxSession(
        createRuntime: () {
          final runtime = _runtime();
          runtimes.add(runtime);
          return runtime;
        },
        source: source,
        bindings: FlaxBindingRegistry([flutterBindings]),
        onError: (error, _) => errors.add(error),
      ),
    );
    await tester.pumpWidget(
      Directionality(
        textDirection: TextDirection.ltr,
        child: Row(
          children: [
            for (final session in sessions)
              Expanded(child: FlaxView.session(session: session)),
          ],
        ),
      ),
    );
    expect(errors, isEmpty);
    expect(runtimes, hasLength(2));
    final owner = runtimes[0];
    final survivor = runtimes[1];
    await tester.runAsync(() => _collect(owner));
    final before = flaxPrototypeUint8Stats();
    final roots = [_dartOnly(owner), _imported(owner)];
    final weakRoots = roots.map(WeakReference<Uint8List>.new).toList();
    final closedArray = owner.createUint8Array(roots.first);
    await tester.pumpWidget(
      Directionality(
        textDirection: TextDirection.ltr,
        child: FlaxView.session(session: sessions[1]),
      ),
    );
    await flaxTestCloseSession(tester, sessions[0]);
    expect(owner.isDisposed, isTrue);
    expect(survivor.isDisposed, isFalse);
    expect(() => closedArray.getProperty('length'), throwsStateError);
    expect(() => owner.createUint8Array(roots.first), throwsStateError);
    closedArray.release();
    await tester.runAsync(() => _collect(survivor));
    for (var index = 0; index < roots.length; index++) {
      roots[index][0] = 179;
      final exported = survivor.createUint8Array(roots[index]);
      _set(survivor, 'retained', exported);
      expect(
        survivor.prototypeJsAddress(exported),
        flaxPrototypeUint8Address(roots[index]),
      );
      expect(_number(survivor, 'retained[0]'), 179);
      _execute(survivor, 'retained[1] = 181; delete retained');
      expect(roots[index][1], 181);
      exported.release();
    }
    await flaxTestUnmount(tester);
    await flaxTestCloseSession(tester, sessions[1]);
    expect(survivor.isDisposed, isTrue);
    _checkClosedBytes(roots);
    roots.clear();
    final collector = _runtime();
    try {
      await tester.runAsync(() => _released(collector, before['pins']!));
      expect(weakRoots.any(_alive), isFalse);
      expect(flaxPrototypeUint8Stats()['pinnedPages'], before['pinnedPages']);
      expect(flaxPrototypeUint8Stats()['dartViews'], before['dartViews']);
      expect(flaxPrototypeUint8Stats()['liveStores'], before['liveStores']);
      _report('session-close', {
        'bothSessionsClosed': true,
        'dartBytesSurvived': true,
        'otherSessionReusedSameStorage': true,
        'originalDartObjectsCollected': true,
        'jsAllocatedStorageAlsoReclaimed': true,
        'closedJsFacadeRejected': true,
        'remainingDartViews': flaxPrototypeUint8Stats()['dartViews']!,
        'remainingStores': flaxPrototypeUint8Stats()['liveStores']!,
        'remainingPins': flaxPrototypeUint8Stats()['pins']!,
        'remainingPinnedPages': flaxPrototypeUint8Stats()['pinnedPages']!,
      });
    } finally {
      collector.dispose();
    }
  });
}
