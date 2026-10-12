// Runs with the experiment's isolated Flutter tester.
// ignore_for_file: depend_on_referenced_packages, implementation_imports, avoid_print

import 'dart:convert';
import 'dart:typed_data';

import 'package:flax/flax.dart';
import 'package:flax/src/native/native_runtime.dart';

import 'diagnostics.dart';

import 'package:flutter_test/flutter_test.dart';

@pragma('vm:never-inline')
Uint8List _ordinary(int length) => Uint8List(length);

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  test('ordinary Uint8List addresses under young and compacting GC', () {
    final runtime = FlaxEngine.createRuntime() as FlaxNativeJsRuntime;
    try {
      final observations = <Map<String, Object>>[];
      for (final length in [16, 64, 4096, 65536, 131072, 262144, 1048576]) {
        final bytes = _ordinary(length);
        bytes[0] = 17;
        bytes[4] = 31;
        final view = Uint8List.sublistView(bytes, 4, 12);
        final before = flaxPrototypeUint8Address(bytes);
        runtime.prototypeCollect(young: true, compact: false);
        final young = flaxPrototypeUint8Address(bytes);
        runtime.prototypeCollect(compact: true);
        final compact = flaxPrototypeUint8Address(bytes);
        expect(bytes[0], 17);
        expect(view[0], 31);
        expect(flaxPrototypeUint8Address(view), compact + 4);
        observations.add({
          'length': length,
          'before': before,
          'afterYoung': young,
          'afterCompact': compact,
          'youngMoved': young != before,
          'compactMoved': compact != young,
        });
      }
      print('ORDINARY_HEAP ${jsonEncode(observations)}');
      expect(observations.any((row) => row['youngMoved'] == true), isTrue);
    } finally {
      runtime.dispose();
    }
  });
}
