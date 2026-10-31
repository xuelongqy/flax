import 'dart:convert';
import 'dart:io';

import 'package:flax/flax.dart';
// This standalone acceptance harness uses the workspace's Flutter test runner.
// ignore: depend_on_referenced_packages
import 'package:flutter_test/flutter_test.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  test(
    'measure real Dedicated Worker costs in the maintained engine',
    () async {
      Flax.moduleAssets ??= await FlaxModuleAssets.load(
        bundle: FlaxDirectoryAssetBundle(
          Directory('.local/ui-module-inventory'),
        ),
        manifest: 'modules/modules.json',
      );
      late FlaxJsRuntime runtime;
      final session = FlaxSession(
        createRuntime: () => runtime = FlaxEngine.createRuntime(),
        source: "import {runApp,Text} from '@flax/flutter/widgets'; runApp(Text('Host ready'));",
        bindings: FlaxBindingRegistry([flutterBindings]),
      );
      try {
        await session.ready;
        runtime.evaluate(
          File('experiments/dedicated_workers/benchmark.js').readAsStringSync(),
        );
        final clock = Stopwatch()..start();
        while (clock.elapsed < const Duration(minutes: 2)) {
          runtime.drainMicrotasks();
          final result = runtime.getGlobal('workerBenchmark');
          if (result is FlaxJsString) {
            final data = jsonDecode(result.value) as Map<String, dynamic>;
            expect(data['smallRoundtrip']['n'], 100);
            expect(data['copyRoundtrip']['n'], 20);
            expect(data['transferRoundtrip']['n'], 20);
            data['system'] = {
              'os': Platform.operatingSystemVersion,
              'dart': Platform.version,
              'mode': 'Debug',
              'date': DateTime.now().toUtc().toIso8601String(),
            };
            File('experiments/dedicated_workers/results-macos.json')
                .writeAsStringSync(
                  '${const JsonEncoder.withIndent('  ').convert(data)}\n',
                );
            return;
          }
          await Future<void>.delayed(const Duration(milliseconds: 1));
        }
        fail('Worker benchmark timed out');
      } finally {
        await session.close();
      }
    },
    timeout: const Timeout(Duration(minutes: 3)),
  );
}
