// ignore_for_file: depend_on_referenced_packages
import 'dart:convert';
import 'dart:ffi';
import 'dart:io';

import 'package:flax_test/flax_test.dart';
import 'package:flutter_test/flutter_test.dart';

import '../../packages/flax/.dart_tool/flax/ui/proxy_operators_bindings.dart';
import '../../packages/flax/test/fixtures/proxy_operators.dart';
import '../../packages/flax/test/support/owned_harness.dart';
import 'scheduling.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  final fixtures = jsonDecode(
    File('.local/startup-staging/ui-fixtures.json').readAsStringSync(),
  ) as Map;
  flaxTestLoadFixturePackages({
    for (final entry in fixtures.entries)
      entry.key as String: (entry.value as Map).cast<String, String>(),
  });
  setUpAll(() async {
    await flaxTestLoadModuleAssets(
      (fixtures.values.first as Map).cast<String, String>(),
    );
  });
  testWidgets(
    'existing generated proxy keeps inheritance, override and super across pauses',
    (tester) async {
      final values = <NumberBox>[];
      final h = OwnedHarness(
        fixture: 'proxy_operators',
        extra: [proxy_operatorsBindings],
        onCreate: (_, value) {
          if (value is NumberBox) values.add(value);
        },
      );
      Slicing? slicing;
      final path =
          '${Directory.current.path}/.local/js-slicing/native/libflax_slice_probe.dylib';
      final enable = DynamicLibrary.open(path)
          .lookupFunction<Void Function(Int32), void Function(int)>(
            'flax_slice_enable',
          );
      try {
        await tester.pumpWidget(h.app('proxy-operators'));
        slicing = Slicing(path, h.runtime);
        h.execute('''
        globalThis.spinCount = 100000000;
        var original = operatorHooks.create(6);
        class PausedBox extends original.constructor {
          #extra = 1;
          operatorAdd(other) {
            let result = 0;
            for (let i = 0; i < spinCount; i++) result = (result + i) | 0;
            globalThis.checksum = result;
            return super.operatorAdd(other) + this.#extra;
          }
        }
        var pausedBox = new PausedBox(6);
      ''');
        for (final count in [100000000, 1600000000]) {
          h.execute('spinCount = $count');
          await tester.runAsync(() async {
            final watch = Stopwatch()..start();
            enable(1);
            try {
              expect(values.last + 2, 19);
            } finally {
              enable(0);
            }
            stdout.writeln(
              'GENERATED_SLICE_STATS ${jsonEncode({'iterations': count, 'elapsedMs': watch.elapsedMilliseconds, 'native': slicing!.stats})}',
            );
          });
        }
        expect(
          slicing.stats['yields'],
          greaterThan(0),
          reason: '${slicing.stats}',
        );
        expect(h.number('pausedBox.operatorAdd(2)'), 19);
        expect(h.errors, isEmpty);
      } finally {
        slicing?.close();
        await h.finish(tester);
      }
    },
  );
}
