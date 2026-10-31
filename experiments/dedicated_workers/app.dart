// Built by run_macos.py as a standalone macOS application.
// ignore_for_file: depend_on_referenced_packages
import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:flax/flax.dart';
import 'package:flax_example_support/flax_example_support.dart';
// Internal counters check native retirement after the real AOT application run.
// ignore: implementation_imports
import 'package:flax/src/native/native_runtime.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const SizedBox.shrink());
  final errors = <String>[];
  final result = Completer<String>();
  Flax.moduleAssets = await FlaxModuleAssets.load(
    bundle: FlaxPrefixedAssetBundle(prefix: 'assets'),
    manifest: 'modules/modules.json',
  );
  stdout.writeln('WORKER_PHASE assets loaded');
  final benchmark = await rootBundle.loadString('assets/benchmark.js');
  final permissions = await approveTrustedExamplePermissions(
    'example.worker.benchmark',
    manifest: FlaxPermissionManifest(
      appId: 'example.worker.benchmark',
      defaultLocale: 'en',
      permissions: {
        'flax.wasm': FlaxPermissionDeclaration(
          purpose: const {'en': 'Run the checked-in Worker Wasm API checks'},
        ),
      },
    ),
  );
  late FlaxNativeJsRuntime native;
  final session = FlaxSession(
    permissions: permissions,
    permissionManifest: permissions.application.manifest,
    createRuntime: () {
      final runtime = FlaxEngine.createRuntime();
      native = runtime as FlaxNativeJsRuntime;
      runtime.registerHostFunction('__flaxWorkerBenchmarkDone', (_, args) {
        result.complete((args.single as FlaxJsString).value);
        return const FlaxJsUndefined();
      });
      runtime.registerHostFunction('__flaxWorkerBenchmarkPhase', (_, args) {
        stdout.writeln('WORKER_PHASE ${(args.single as FlaxJsString).value}');
        return const FlaxJsUndefined();
      });
      return runtime;
    },
    entryUri: Uri.parse('flax:///worker-benchmark.js'),
    source:
        "import {runApp,Text} from '@flax/flutter/widgets'; runApp(Text('Worker benchmark'));\n$benchmark",
    bindings: FlaxBindingRegistry([flutterBindings]),
    onError: (error, _) => errors.add(error.toString()),
  );
  Future<void> close() async {
    // Session close waits for the mounted view to release its ownership.
    runApp(const SizedBox.shrink());
    await WidgetsBinding.instance.endOfFrame;
    await session.close();
  }

  try {
    await session.ready.timeout(const Duration(seconds: 60));
    stdout.writeln('WORKER_PHASE session ready');
    runApp(
      Directionality(
        textDirection: TextDirection.ltr,
        child: FlaxView.session(session: session),
      ),
    );
    stdout.writeln('WORKER_PHASE benchmark running');
    final data = jsonDecode(
      await result.future.timeout(const Duration(minutes: 2)),
    ) as Map<String, dynamic>;
    if (errors.isNotEmpty) throw StateError(errors.join('\n'));
    data['system'] = {
      'os': Platform.operatingSystemVersion,
      'dart': Platform.version,
      'mode': kReleaseMode
          ? 'Release'
          : kProfileMode
          ? 'Profile'
          : 'Debug',
      'aot': kReleaseMode || kProfileMode,
      'date': DateTime.now().toUtc().toIso8601String(),
    };
    await close();
    final (channels, workers) = native.workerCountsForTesting();
    data['retired'] = {'channels': channels, 'runtimes': workers};
    if (channels != 0 || workers != 0) {
      throw StateError('Worker native resources were not retired');
    }
    stdout.writeln('WORKER_RESULT ${jsonEncode(data)}');
    exit(0);
  } catch (error, stack) {
    stderr.writeln('$error\n$stack');
    await close();
    exit(1);
  }
}
