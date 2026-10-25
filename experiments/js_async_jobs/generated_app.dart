// Real generated NumberBox/JS subclass, mounted in a native Flutter application.
// ignore_for_file: depend_on_referenced_packages, implementation_imports
import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:flax/flax.dart';
import 'package:flax/src/native/native_runtime.dart';
import 'package:flax_test/src/fixtures.dart';
import 'package:flax_test/src/gc.dart';
import 'package:flax_test/src/runtime_tracker.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/widgets.dart';

import '../../packages/flax/.dart_tool/flax/ui/proxy_operators_bindings.dart';
import '../../packages/flax/test/fixtures/proxy_operators.dart';
import 'jobs.dart';

class ProbeRuntime extends FlaxTestRuntimeTracker {
  ProbeRuntime(super.inner);
  AsyncJobs? jobs;
  int deferredCheckpoints = 0;
  @override
  FlaxJsValue evaluate(String source, {String sourceUrl = 'flax:eval'}) {
    if (jobs?.paused == true) {
      throw StateError('Direct JS evaluation attempted during suspension');
    }
    return super.evaluate(source, sourceUrl: sourceUrl);
  }

  @override
  void registerHostFunction(String name, FlaxJsHostFunction callback) {
    super.registerHostFunction(name, (receiver, arguments) {
      final active = jobs;
      if (active != null) active.hostDepth++;
      try {
        return callback(receiver, arguments);
      } finally {
        if (active != null) active.hostDepth--;
      }
    });
  }

  @override
  bool drainMicrotasks({int maxJobsHint = -1}) {
    if (jobs?.paused == true) {
      deferredCheckpoints++;
      // Keep the existing checkpoint pending; never run JS inside an interrupt.
      return false;
    }
    return super.drainMicrotasks(maxJobsHint: maxJobsHint);
  }
}

final boxes = <NumberBox>[];
FlaxObjectBinding track(FlaxObjectBinding type) => FlaxObjectBinding(
  type.id,
  type.getters,
  type.instanceMethods,
  constructors: type.constructors,
  create: (constructor, arguments) {
    final value = type.create(constructor, arguments);
    if (value is NumberBox) boxes.add(value);
    return value;
  },
  disposeMethod: type.disposeMethod,
  aliasOf: type.aliasOf,
  matches: type.matches,
  nativeInput: type.nativeInput,
  methods: type.methods,
  staticGetters: type.staticGetters,
  listenerPairs: type.listenerPairs,
  setters: type.setters,
  supertypes: type.supertypes,
  proxy: type.proxy,
  memberViewOperations: type.memberViewOperations,
  collectionView: type.collectionView,
  memberView: type.memberView,
);

Future<void> main() async {
  final binding = WidgetsFlutterBinding.ensureInitialized();
  final root = Platform.environment['FLAX_SLICE_ROOT']!;
  final assets =
      (jsonDecode(
            File('$root/.local/startup-staging/ui-fixtures.json')
                .readAsStringSync(),
          ) as Map)['flax']
          as Map;
  await flaxTestLoadModuleAssets(assets.cast<String, String>());
  final runtime = ProbeRuntime(FlaxEngine.createRuntime());
  final module = proxy_operatorsBindings;
  final errors = <String>[];
  final checks = <Map<String, Object?>>[];
  void check(String name, bool passed, [Object? detail]) {
    checks.add({'name': name, 'passed': passed, 'detail': detail});
    stdout.writeln('ASYNC_CHECK ${jsonEncode(checks.last)}');
    if (!passed) throw StateError('$name: $detail');
  }

  FlutterError.onError = (details) {
    errors.add(details.toString());
    FlutterError.presentError(details);
  };
  final session = FlaxSession(
    createRuntime: () => runtime,
    source: assets['proxy_operators.js'] as String,
    bindings: FlaxBindingRegistry([
      flutterBindings,
      FlaxBindingModule(
        module.name,
        [
          for (final type in module.types)
            if (type is FlaxObjectBinding) track(type) else type,
        ],
        moduleId: module.moduleId,
        dependencyModules: module.dependencyModules,
        uiProtocol: module.uiProtocol,
        requiredCapabilities: module.requiredCapabilities,
        functions: module.functions,
        dartTypes: module.dartTypes,
        dartShapes: module.dartShapes,
      ),
    ]),
    onError: (error, _) => errors.add('$error'),
  );
  runApp(
    Directionality(
      textDirection: TextDirection.ltr,
      child: DefaultTextStyle(
        style: const TextStyle(fontSize: 20),
        child: FlaxView.page(session: session, name: 'proxy-operators'),
      ),
    ),
  );
  await binding.endOfFrame;
  final jobs = AsyncJobs(
    '$root/.local/async-jobs/native/libflax_async_jobs_probe.dylib',
    runtime,
  );
  runtime.jobs = jobs;
  Flax.experimentScheduleJsJob = (action) {
    unawaited(
      jobs.submit(action).catchError((Object error, StackTrace stack) {
        errors.add('$error\n$stack');
      }),
    );
  };
  var ticks = 0;
  final heartbeat = Timer.periodic(
    const Duration(milliseconds: 2),
    (_) => ticks++,
  );
  var passed = false;
  final rows = <Map<String, Object?>>[];
  try {
    final setup = runtime.evaluate('''
      function spin(n) {
        let checksum = 0;
        for (let i = 0; i < n; i++) checksum = Math.imul(checksum ^ i, 1664525) + 1013904223 | 0;
        return checksum;
      }
      spin(10000000);
      var original = operatorHooks.create(6);
      class PausedBox extends original.constructor {
        #extra = 1;
        operatorAdd(other) {
          const base = super.operatorAdd(other);
          globalThis.checksum = spin(globalThis.spinCount);
          return base + this.#extra;
        }
      }
      var pausedBox = new PausedBox(6);
      globalThis.spinCount = 100000000;
      globalThis.boxWeak = new WeakRef(pausedBox);
    ''');
    if (setup is FlaxJsObject) setup.release();
    final calibration = Stopwatch()..start();
    runtime.evaluate('spin(100000000)');
    final iterations = (100000000 * 2000000 / calibration.elapsedMicroseconds)
        .round();
    runtime.evaluate('spinCount = $iterations');
    final peer = WeakReference(boxes.last);
    for (var index = 0; index < 3; index++) {
      await Future<void>.delayed(const Duration(milliseconds: 100));
      final before = jobs.stats;
      var insideTicks = 0;
      final watch = Stopwatch()..start();
      final result = await jobs.submit(() {
        final priorTicks = ticks;
        try {
          return boxes.last + 2;
        } finally {
          insideTicks = ticks - priorTicks;
        }
      });
      final after = jobs.stats;
      final row = {
        'iteration': index,
        'elapsedMs': watch.elapsedMicroseconds / 1000,
        'result': result,
        'ticks': insideTicks,
        'before': before,
        'after': after,
      };
      rows.add(row);
      check(
        'generated proxy job $index preserves JS inheritance, private field, override and super',
        result == 19,
        row,
      );
      check(
        'generated proxy job $index actually pauses and lets Dart Timer run',
        (after['yields'] as int) > (before['yields'] as int) && insideTicks > 1,
      );
    }
    await jobs.submit(() => runtime.evaluate('spinCount = 0'));
    check(
      'JS-to-Dart and Dart-to-JS still agree after suspension',
      await jobs.submit(
        () =>
            (runtime.evaluate(
                  'pausedBox.operatorAdd(2)',
                ) as FlaxJsNumber).value ==
                19 &&
            boxes.last + 2 == 19,
      ),
    );
    await jobs.submit(() => runtime.evaluate('operatorHooks.fail(true)'));
    Object? failure;
    try {
      await jobs.submit(() => boxes.last + 2);
    } catch (error) {
      failure = error;
    }
    await jobs.submit(() => runtime.evaluate('operatorHooks.fail(false)'));
    check(
      'generated override exception propagates and next job works',
      '$failure'.contains('operator failed') &&
          await jobs.submit(() => boxes.last + 2) == 19,
    );
    await jobs.submit(
      () => runtime.evaluate('original = null; pausedBox = null'),
    );
    boxes.clear();
    for (var i = 0; i < 20; i++) {
      await flaxTestCollectDartGarbage();
      await Future<void>.delayed(const Duration(milliseconds: 100));
      if (peer.target == null &&
          !await jobs.submit(
            () => (runtime.evaluate(
              'boxWeak.deref() !== undefined',
            ) as FlaxJsBoolean).value,
          )) {
        break;
      }
    }
    check(
      'generated proxy and JS subclass reclaim before Session close',
      peer.target == null &&
          !await jobs.submit(
            () => (runtime.evaluate(
              'boxWeak.deref() !== undefined',
            ) as FlaxJsBoolean).value,
          ),
    );
    check(
      'same owner thread throughout generated calls',
      jobs.stats['wrongThread'] == 0,
    );
    check('no unexpected Flutter or Session errors', errors.isEmpty, errors);
    check(
      'whole checkpoints stay outside the suspended JS stack',
      runtime.deferredCheckpoints == 0,
    );
    passed = true;
  } catch (error, stack) {
    errors.add('$error\n$stack');
    stderr.writeln('$error\n$stack');
  } finally {
    await jobs.submit(() => 0);
    for (var i = 0; !jobs.idle && i < 100; i++) {
      await Future<void>.delayed(const Duration(milliseconds: 10));
    }
    Flax.experimentScheduleJsJob = null;
    final native = jobs.stats;
    runtime.jobs = null;
    jobs.close();
    heartbeat.cancel();
    runApp(const SizedBox.shrink());
    await binding.endOfFrame;
    await session.close();
    final inner = runtime.inner as FlaxNativeJsRuntime;
    check(
      'Session close releases tracked handles and runtime',
      runtime.handlesAtDispose == 0 && inner.isDisposed,
    );
    stdout.writeln(
      'ASYNC_RESULT ${jsonEncode({'passed': passed, 'suite': 'generated', 'build': kReleaseMode ? 'release' : 'debug', 'checks': checks, 'rows': <Object?>[], 'generated': rows, 'errors': errors, 'native': native, 'deferredCheckpoints': runtime.deferredCheckpoints})}',
    );
    exit(passed ? 0 : 1);
  }
}
