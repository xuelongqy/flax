import 'dart:ffi';

import 'package:ffi/ffi.dart';
import 'package:flax/src/native/native_runtime.dart';
import 'package:flax/src/native/runtime_bindings.g.dart';
import 'package:test/test.dart';

void main() {
  const flutter = 'ab2912035e160d9cad6306df307576da6128ebdb';
  const dart = 'fa8c1270c374c1346931583a17c3b7f278d3822d';
  const oldFlutter = 'c197ca5199e9ee5661e865596c9c07294dfab51c';
  const oldDart = '416e33b0ffaef062a60ec966bb8c82ed2b83f128';

  void rejects(
    String flutterRevision,
    String dartRevision,
    String stage, {
    bool completeGc = true,
  }) => using((arena) {
    final api = arena<FlaxApi>();
    api.ref
      ..version = 2
      ..struct_size = sizeOf<FlaxApi>();
    final gc = arena<FlaxEngineGcApi>();
    gc.ref
      ..version = FLAX_ENGINE_GC_VERSION
      ..struct_size = sizeOf<FlaxEngineGcApi>()
      ..flutter_revision = flutterRevision.toNativeUtf8(allocator: arena).cast()
      ..dart_revision = dartRevision.toNativeUtf8(allocator: arena).cast();
    if (completeGc) {
      // These pointers are only checked for null. A null binding table below
      // deliberately rejects the fixture before any engine call can execute.
      gc.ref
        ..bind_value = Pointer<Void>.fromAddress(1).cast()
        ..bind_peer = Pointer<Void>.fromAddress(1).cast()
        ..register_host = Pointer<Void>.fromAddress(1).cast()
        ..cell_count = Pointer<Void>.fromAddress(1).cast();
    }
    expect(
      () => FlaxNativeJsRuntime.fromEngine(api, gc, nullptr),
      throwsA(isA<UnsupportedError>().having((e) => e.message, 'stage', stage)),
    );
  });

  test('engine validation accepts only the target Flutter and Dart pair', () {
    for (final pair in [
      (oldFlutter, oldDart),
      (oldFlutter, dart),
      (flutter, oldDart),
    ]) {
      rejects(
        pair.$1,
        pair.$2,
        'Incompatible Flax Flutter engine or GC extension',
      );
    }
    // The exact target pair must reach the next independent boundary check.
    rejects(flutter, dart, 'Incompatible Flax binding engine extension');
  });

  test('target revision pins do not bypass GC function-table checks', () {
    rejects(
      flutter,
      dart,
      'Incompatible Flax Flutter engine or GC extension',
      completeGc: false,
    );
  });
}
