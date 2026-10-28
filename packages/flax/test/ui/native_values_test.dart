import 'dart:typed_data';

import 'package:flax/runtime.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter_test/flutter_test.dart';

const _constructors = [
  'ArrayBuffer',
  'Int8Array',
  'Uint8Array',
  'Uint8ClampedArray',
  'Int16Array',
  'Uint16Array',
  'Int32Array',
  'Uint32Array',
  'BigInt64Array',
  'BigUint64Array',
  'Float32Array',
  'Float64Array',
  'DataView',
];

TypedData _data(Object value) =>
    value is ByteBuffer ? value.asUint8List() : value as TypedData;
Uint8List _bytes(Object value) {
  final data = _data(value);
  return data.buffer.asUint8List(data.offsetInBytes, data.lengthInBytes);
}

Object _view(
  ByteBuffer buffer,
  FlaxBufferType type, {
  int offset = 8,
  int length = 16,
}) => switch (type) {
  FlaxBufferType.byteBuffer => buffer,
  FlaxBufferType.int8 => buffer.asInt8List(offset, length),
  FlaxBufferType.uint8 => buffer.asUint8List(offset, length),
  FlaxBufferType.uint8Clamped => buffer.asUint8ClampedList(offset, length),
  FlaxBufferType.int16 => buffer.asInt16List(offset, length ~/ 2),
  FlaxBufferType.uint16 => buffer.asUint16List(offset, length ~/ 2),
  FlaxBufferType.int32 => buffer.asInt32List(offset, length ~/ 4),
  FlaxBufferType.uint32 => buffer.asUint32List(offset, length ~/ 4),
  FlaxBufferType.int64 => buffer.asInt64List(offset, length ~/ 8),
  FlaxBufferType.uint64 => buffer.asUint64List(offset, length ~/ 8),
  FlaxBufferType.float32 => buffer.asFloat32List(offset, length ~/ 4),
  FlaxBufferType.float64 => buffer.asFloat64List(offset, length ~/ 8),
  FlaxBufferType.byteData => buffer.asByteData(offset, length),
};

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  test(
    'binary snapshots isolate mutations and survive GC, transfer and disposal',
    () async {
      final runtime = FlaxEngine.createRuntime();
      Uint8List keepOnlySnapshotSubview() {
        final source = Uint8List.fromList([0, 11, 22, 0]);
        final buffer = runtime.createArrayBuffer(
          Uint8List.sublistView(source, 1, 3).asUnmodifiableView(),
        );
        final global = runtime.evaluate('globalThis') as FlaxJsObject;
        try {
          global.setProperty('snapshotBuffer', buffer);
          source[1] = 99;
          expect(runtime.readBytes(buffer), [11, 22]);
          final snapshot = runtime.readBytes(buffer);
          snapshot[0] = 77;
          expect(runtime.readBytes(buffer), [11, 22]);
          final exported = runtime.createUint8Array(snapshot);
          try {
            global.setProperty('snapshotExport', exported);
            runtime.evaluate('snapshotExport[1] = 44;');
            expect(snapshot, [77, 44]);
            expect(runtime.readBytes(buffer), [11, 22]);
          } finally {
            exported.release();
          }
          runtime.evaluate(
            'new Uint8Array(snapshotBuffer)[1] = 33; snapshotBuffer = snapshotBuffer.transfer();',
          );
          expect(snapshot, [77, 44]);
          expect(() => runtime.readBytes(buffer), throwsArgumentError);
          final empty = runtime.createArrayBuffer(Uint8List(0));
          try {
            expect(runtime.readBytes(empty), isEmpty);
          } finally {
            empty.release();
          }
          final resizable = runtime.evaluate(
            'new ArrayBuffer(2, {maxByteLength: 4})',
          ) as FlaxJsObject;
          try {
            global.setProperty('snapshotResizable', resizable);
            final beforeResize = runtime.readBytes(resizable);
            expect(beforeResize, [0, 0]);
            // Exercise resize only when the runtime exposes resizable buffers.
            if ((runtime.evaluate(
              'snapshotResizable.resizable === true',
            ) as FlaxJsBoolean).value) {
              runtime.evaluate('snapshotResizable.resize(4);');
              expect(runtime.readBytes(resizable), [0, 0, 0, 0]);
              expect(beforeResize, [0, 0]);
            }
          } finally {
            resizable.release();
          }
          // Keep only a derived view so GC can collect the original snapshot wrapper.
          return Uint8List.sublistView(snapshot, 1, 2);
        } finally {
          global.release();
          buffer.release();
        }
      }

      late Uint8List survivingView;
      try {
        survivingView = keepOnlySnapshotSubview();
      } finally {
        runtime.dispose();
      }
      await flaxTestCollectDartGarbage();
      survivingView[0] = 88;
      expect(survivingView, [88]);
    },
  );

  test('BigInt crosses evaluation, properties, host callbacks and fast calls exactly', () {
    final runtime = FlaxEngine.createRuntime();
    final huge = BigInt.parse(
      '12345678901234567890123456789012345678901234567890',
    );
    final global = runtime.evaluate('globalThis') as FlaxJsObject;
    final add = runtime.evaluate('(n) => n + 1n') as FlaxJsFunction;
    FlaxJsValue echo(FlaxJsValue _, List<FlaxJsValue> args) => args.single;
    runtime.registerHostFunction('nativeBigEcho', echo);
    try {
      for (final value in [BigInt.zero, BigInt.one, -BigInt.one, huge, -huge]) {
        global.setProperty('nativeBig', FlaxJsBigInt(value));
        expect(
          (runtime.evaluate('nativeBigEcho(nativeBig)') as FlaxJsBigInt).value,
          value,
        );
        expect(
          (add.call([FlaxJsBigInt(value)]) as FlaxJsBigInt).value,
          value + BigInt.one,
        );
        expect((global.getProperty('nativeBig') as FlaxJsBigInt).value, value);
      }
      runtime.evaluate(
        'BigInt.prototype.toString = () => "spoofed"; globalThis.BigInt = () => 0n;',
      );
      expect(
        (runtime.evaluate('12345678901234567890n') as FlaxJsBigInt).value,
        BigInt.parse('12345678901234567890'),
      );
      expect(
        (add.call([FlaxJsBigInt(huge)]) as FlaxJsBigInt).value,
        huge + BigInt.one,
      );
    } finally {
      add.release();
      global.release();
      runtime.dispose();
    }
  });

  test('all native binary views share Dart ranges and preserve overlapping aliases', () async {
    final runtime = FlaxEngine.createRuntime();
    final global = runtime.evaluate('globalThis') as FlaxJsObject;
    final original = Uint8List(32);
    runtime.evaluate('globalThis.allNativeViews = [];');
    try {
      for (final type in FlaxBufferType.values) {
        original.fillRange(0, original.length, 0);
        final source = _view(original.buffer, type);
        final shared = runtime.createSharedBuffer(source);
        try {
          global.setProperty('nativeView', shared);
          runtime.evaluate('allNativeViews.push(nativeView);');
          expect(
            (runtime.evaluate(
              'Object.prototype.toString.call(nativeView)',
            ) as FlaxJsString).value,
            '[object ${_constructors[type.index]}]',
          );
          runtime.evaluate(
            'globalThis.nativeBytes = nativeView instanceof ArrayBuffer ? new Uint8Array(nativeView) : new Uint8Array(nativeView.buffer, nativeView.byteOffset, nativeView.byteLength); nativeBytes[0] = 91;',
          );
          expect(_bytes(source).first, 91, reason: type.name);
          final imported = runtime.readSharedBuffer(shared, type);
          expect(
            _bytes(imported).length,
            _bytes(source).length,
            reason: type.name,
          );
          _bytes(imported)[1] = 73;
          expect(_bytes(source)[1], 73, reason: type.name);
          expect(
            (runtime.evaluate('nativeBytes[1]') as FlaxJsNumber).value,
            73,
          );
          expect(
            () => runtime.readSharedBuffer(
              shared,
              type == FlaxBufferType.uint8
                  ? FlaxBufferType.int8
                  : FlaxBufferType.uint8,
            ),
            throwsArgumentError,
          );
        } finally {
          shared.release();
        }
      }
      runtime.evaluate(flaxTestJsGarbagePressure);
      await flaxTestCollectDartGarbage();
      original[8] = 112;
      expect(
        (runtime.evaluate(
          'allNativeViews.every(v => (v instanceof ArrayBuffer ? new Uint8Array(v)[8] : new Uint8Array(v.buffer, v.byteOffset, v.byteLength)[0]) === 112)',
        ) as FlaxJsBoolean).value,
        isTrue,
      );
    } finally {
      global.release();
      runtime.dispose();
    }
  });

  test('JS-origin binary views retain bytes through transfer and runtime disposal', () async {
    final runtime = FlaxEngine.createRuntime();
    final retained = <Object>[];
    try {
      for (final type in FlaxBufferType.values) {
        final name = _constructors[type.index];
        final width =
            type.index >= 8 && type.index <= 9 || type == FlaxBufferType.float64
            ? 8
            : type.index >= 6 && type.index <= 7 ||
                  type == FlaxBufferType.float32
            ? 4
            : type.index >= 4 && type.index <= 5
            ? 2
            : 1;
        final expression = type == FlaxBufferType.byteBuffer
            ? 'nativeStore'
            : 'new $name(nativeStore, 8, ${16 ~/ width})';
        final js = runtime.evaluate(
          'globalThis.nativeStore = new ArrayBuffer(32); new Uint8Array(nativeStore).fill(7); $expression',
        ) as FlaxJsObject;
        final value = runtime.readSharedBuffer(js, type);
        retained.add(value);
        _bytes(value)[0] = 42;
        runtime.evaluate('globalThis.movedStore = nativeStore.transfer();');
        expect(_bytes(value).first, 42, reason: type.name);
        runtime.evaluate(
          'new Uint8Array(movedStore)[${type == FlaxBufferType.byteBuffer ? 0 : 8}] = 61;',
        );
        expect(_bytes(value).first, 61, reason: type.name);
        runtime.evaluate(
          'globalThis.resizedStore = movedStore.transfer(64); new Uint8Array(resizedStore)[${type == FlaxBufferType.byteBuffer ? 0 : 8}] = 10;',
        );
        expect(_bytes(value).first, 61);
        _bytes(value)[1] = 93;
        expect(_bytes(value)[1], 93);
        expect(
          (runtime.evaluate(
            'new Uint8Array(resizedStore)[${type == FlaxBufferType.byteBuffer ? 1 : 9}]',
          ) as FlaxJsNumber).value,
          7,
        );
        js.release();
      }
      runtime.evaluate('nativeStore = movedStore = resizedStore = null;');
      runtime.evaluate(flaxTestJsGarbagePressure);
      await flaxTestCollectDartGarbage();
      for (final value in retained) {
        expect(_bytes(value).first, 61);
      }
    } finally {
      runtime.dispose();
    }
    for (final value in retained) {
      expect(_bytes(value).first, 61);
      _bytes(value)[2] = 81;
      expect(_bytes(value)[2], 81);
    }
  });

  test('readonly views and readonly buffers cannot gain JS write access', () {
    final runtime = FlaxEngine.createRuntime();
    final readonly = <TypedData>[
      Int8List(1).asUnmodifiableView(),
      Uint8List(1).asUnmodifiableView(),
      Uint8ClampedList(1).asUnmodifiableView(),
      Int16List(1).asUnmodifiableView(),
      Uint16List(1).asUnmodifiableView(),
      Int32List(1).asUnmodifiableView(),
      Uint32List(1).asUnmodifiableView(),
      Int64List(1).asUnmodifiableView(),
      Uint64List(1).asUnmodifiableView(),
      Float32List(1).asUnmodifiableView(),
      Float64List(1).asUnmodifiableView(),
      ByteData(8).asUnmodifiableView(),
    ];
    try {
      for (final value in readonly) {
        expect(() => runtime.createSharedBuffer(value), throwsArgumentError);
        expect(
          () => runtime.createSharedBuffer(value.buffer),
          throwsArgumentError,
        );
      }
      expect(
        () => runtime.createSharedBuffer(Float32x4List(1)),
        throwsArgumentError,
      );
      for (final source in [
        '[]',
        'Object.create(DataView.prototype)',
        'Object.create(ArrayBuffer.prototype)',
        '({[Symbol.toStringTag]: "Int16Array", buffer: new ArrayBuffer(8), byteOffset: 0, byteLength: 8})',
      ]) {
        final value = runtime.evaluate(source) as FlaxJsObject;
        try {
          expect(
            () => runtime.readSharedBuffer(value, FlaxBufferType.int16),
            throwsArgumentError,
          );
        } finally {
          value.release();
        }
      }
    } finally {
      runtime.dispose();
    }
  });
}
