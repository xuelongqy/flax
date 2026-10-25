// Alternate entrypoint in the experimental worktree, using the real engine.
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
import '../js_slicing/app.dart' as ui;
import '../js_slicing/contracts.dart' as contracts;
import '../js_worker/app.dart' show gaps;
import 'handoff.dart';

final checks = <Map<String, Object?>>[];
final errors = <String>[];
final rows = <Map<String, Object?>>[];
void check(String name, bool passed, [Object? detail]) {
  checks.add({'name': name, 'passed': passed, 'detail': detail});
  stdout.writeln('HANDOFF_CHECK ${jsonEncode(checks.last)}');
  if (!passed) throw StateError('$name: $detail');
}

void execute(FlaxJsRuntime runtime, String source) =>
    runtime.evaluate('$source; undefined;');

Future<void> emptyBridge(FlaxNativeJsRuntime runtime) async {
  for (var i = 0; i < 30; i++) {
    await flaxTestCollectDartGarbage();
    await Future<void>.delayed(const Duration(milliseconds: 100));
    if (runtime.bridgeCellCount == 0 && runtime.bridgeCallbackCount == 0) break;
  }
  check(
    'handoff begins with no Dart peers or callbacks',
    runtime.bridgeCellCount == 0 && runtime.bridgeCallbackCount == 0,
    {
      'cells': runtime.bridgeCellCount,
      'callbacks': runtime.bridgeCallbackCount,
    },
  );
}

Future<Map<String, Object?>> measure(
  Handoff handoff,
  String source,
  String mode,
) async {
  ui.shellKey.currentState!.scroll.jumpTo(0);
  await Future<void>.delayed(const Duration(milliseconds: 300));
  final gesture = ui.dragList();
  final start = ui.clock.elapsedMicroseconds;
  Future<void>? pressure;
  int? gcStart, gcEnd;
  var gcWhileRunning = false;
  final timer = mode == 'worker-with-dart-gc'
      ? Timer(const Duration(milliseconds: 250), () {
          gcStart = ui.clock.elapsedMicroseconds;
          gcWhileRunning = handoff.workerRunning;
          stdout.writeln('HANDOFF_GC_START $gcStart');
          pressure = flaxTestCollectDartGarbage().then((_) {
            gcEnd = ui.clock.elapsedMicroseconds;
            stdout.writeln('HANDOFF_GC_END $gcEnd');
          });
        })
      : null;
  final native = await handoff.initialize(source, background: mode != 'ui');
  final end = ui.clock.elapsedMicroseconds;
  timer?.cancel();
  await pressure;
  await gesture;
  await Future<void>.delayed(const Duration(milliseconds: 200));
  final active = ui.frames
      .where((f) => f['time']! >= start && f['time']! <= end)
      .toList();
  final row = <String, Object?>{
    'mode': mode,
    'loadMs': (end - start) / 1000,
    'sourceBytes': utf8.encode(source).length,
    'frames': gaps(
      ui.frames.map((f) => f['time']!.toInt()).toList(),
      start,
      end,
    ),
    'heartbeat': gaps(ui.heartbeats, start, end),
    'framesDuringLoad': active.length,
    'animationValuesDuringLoad': active
        .map((f) => f['animation'])
        .toSet()
        .length,
    'scrollPositionsDuringLoad': active.map((f) => f['scroll']).toSet().length,
    'timerTicksDuringLoad': ui.heartbeats
        .where((t) => t >= start && t <= end)
        .length,
    'requestedGcMs': gcStart == null || gcEnd == null
        ? null
        : (gcEnd! - gcStart!) / 1000,
    'gcWhileRunning': gcWhileRunning,
    'gcRequestedAtMs': gcStart == null ? null : (gcStart! - start) / 1000,
    'native': native,
  };
  rows.add(row);
  stdout.writeln('HANDOFF_ROW ${jsonEncode(row)}');
  check('$mode initialization completes', native['ok'] == true, native);
  check(
    '$mode uses the expected thread',
    (native['uiThread'] == native['executionThread']) == (mode == 'ui'),
    native,
  );
  check(
    '$mode preserves closure, private field, prototype and super',
    (handoff.runtime.evaluate(
      'handoff.closure() === 42 && handoff.instance instanceof handoff.Base && handoff.instance instanceof handoff.Child',
    ) as FlaxJsBoolean).value,
  );
  handoff.runtime.drainMicrotasks();
  check(
    '$mode Promise microtask runs after UI adoption',
    (handoff.runtime.evaluate('handoff.microtasks()') as FlaxJsNumber).value ==
        1,
  );
  Object? failure;
  try {
    handoff.runtime.evaluate('handoff.instance.fail()');
  } catch (error) {
    failure = error;
  }
  check(
    '$mode exception, finally and captured mutable state survive',
    '$failure'.contains('handoff failure') &&
        (handoff.runtime.evaluate('handoff.closure()') as FlaxJsNumber).value ==
            43,
  );
  return row;
}

@pragma('vm:never-inline')
WeakReference<contracts.Owner> makeCycle(FlaxNativeJsRuntime runtime) {
  final owner = contracts.Owner();
  runtime.registerHostFunction(
    'tick',
    (_, _) => FlaxJsNumber((++owner.value).toDouble()),
  );
  execute(
    runtime,
    'globalThis.root = handoff.makeOwner(tick); delete globalThis.tick; globalThis.weak = new WeakRef(root)',
  );
  owner.callback = runtime.evaluate('root.run.bind(root)') as FlaxJsFunction;
  return WeakReference(owner);
}

Future<void> cycles(Handoff handoff) async {
  final runtime = handoff.runtime;
  final jsRoot = makeCycle(runtime);
  await flaxTestCollectDartGarbage();
  check(
    'JS business root retains real Dart callback target after handoff',
    contracts.alive(jsRoot) &&
        (runtime.evaluate('root.run()') as FlaxJsNumber).value == 18,
  );
  Object? rejected;
  try {
    await handoff.initialize('1', background: true);
  } catch (error) {
    rejected = error;
  }
  check(
    'worker entry rejects a runtime with active Dart peers',
    '$rejected'.contains('empty Dart bridge'),
  );
  execute(runtime, 'delete globalThis.root');
  await contracts.reclaimed(runtime, jsRoot, check, 'handoff JS root');
  final dartRoot = makeCycle(runtime);
  final roots = [dartRoot.target!];
  execute(runtime, 'delete globalThis.root');
  await flaxTestCollectDartGarbage();
  await Future<void>.delayed(const Duration(milliseconds: 1100));
  check(
    'Dart business root retains background-created JS factory closure',
    contracts.alive(dartRoot) &&
        (roots.single.callback!.call([]) as FlaxJsNumber).value == 18,
  );
  roots.clear();
  await contracts.reclaimed(runtime, dartRoot, check, 'handoff Dart root');
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

Future<void> generated(FlaxNativeJsRuntime native, String root) async {
  final fixtures =
      (jsonDecode(
            File('$root/.local/startup-staging/ui-fixtures.json')
                .readAsStringSync(),
          ) as Map)['flax']
          as Map;
  await flaxTestLoadModuleAssets(fixtures.cast<String, String>());
  final runtime = FlaxTestRuntimeTracker(native);
  final module = proxy_operatorsBindings;
  final session = FlaxSession(
    createRuntime: () => runtime,
    source: fixtures['proxy_operators.js'] as String,
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
  final started = Stopwatch()..start();
  try {
    runApp(
      Directionality(
        textDirection: TextDirection.ltr,
        child: DefaultTextStyle(
          style: const TextStyle(fontSize: 18),
          child: FlaxView.page(session: session, name: 'proxy-operators'),
        ),
      ),
    );
    await WidgetsBinding.instance.endOfFrame;
    final mountUs = started.elapsedMicroseconds;
    execute(runtime, '''
      globalThis.original = operatorHooks.create(6);
      globalThis.AdoptedBox = handoff.makeBoxClass(original.constructor);
      globalThis.adoptedBox = new AdoptedBox(6);
      globalThis.boxWeak = new WeakRef(adoptedBox);
    ''');
    final weak = WeakReference(boxes.last);
    check(
      'real generated proxy preserves JS override, lexical super and private state',
      boxes.last + 2 == 22 &&
          (runtime.evaluate(
                'adoptedBox.operatorAdd(2)',
              ) as FlaxJsNumber).value ==
              22,
    );
    check(
      'generated object keeps its JS inheritance chain',
      (runtime.evaluate(
        'adoptedBox instanceof AdoptedBox && adoptedBox instanceof original.constructor',
      ) as FlaxJsBoolean).value,
    );
    execute(runtime, 'operatorHooks.fail(true)');
    Object? failure;
    try {
      boxes.last + 2;
    } catch (error) {
      failure = error;
    }
    execute(runtime, 'operatorHooks.fail(false)');
    check(
      'generated super exception reaches Dart and subsequent calls recover',
      '$failure'.contains('operator failed') && boxes.last + 2 == 22,
    );
    boxes.clear();
    execute(runtime, 'original = null');
    await flaxTestCollectDartGarbage();
    check(
      'generated JS business root keeps its Dart proxy alive',
      weak.target != null &&
          (runtime.evaluate(
                'adoptedBox.operatorAdd(2)',
              ) as FlaxJsNumber).value ==
              22,
    );
    final roots = [weak.target!];
    execute(runtime, 'adoptedBox = null');
    await flaxTestCollectDartGarbage();
    check(
      'generated Dart business root keeps JS override and private state alive',
      roots.single + 2 == 22,
    );
    roots.clear();
    for (var i = 0; i < 30; i++) {
      await flaxTestCollectDartGarbage();
      await Future<void>.delayed(const Duration(milliseconds: 100));
      if (weak.target == null &&
          !(runtime.evaluate(
            'boxWeak.deref() !== undefined',
          ) as FlaxJsBoolean).value) {
        break;
      }
    }
    check(
      'generated Dart and JS weak peers reclaim before Session close',
      weak.target == null &&
          !(runtime.evaluate(
            'boxWeak.deref() !== undefined',
          ) as FlaxJsBoolean).value,
    );
    stdout.writeln(
      'HANDOFF_GENERATED ${jsonEncode({'mountUs': mountUs, 'cellsBeforeClose': native.bridgeCellCount})}',
    );
  } finally {
    boxes.clear();
    runApp(const SizedBox.shrink());
    await WidgetsBinding.instance.endOfFrame;
    await session.close();
    check(
      'Session close releases runtime and tracked handles',
      native.isDisposed && runtime.handlesAtDispose == 0,
      {'handlesAtDispose': runtime.handlesAtDispose},
    );
  }
}

Future<void> main() async {
  final binding = WidgetsFlutterBinding.ensureInitialized();
  final root = Platform.environment['FLAX_HANDOFF_ROOT']!;
  FlutterError.onError = (details) {
    errors.add(details.toString());
    FlutterError.presentError(details);
  };
  binding.addPersistentFrameCallback((_) {
    final state = ui.shellKey.currentState;
    if (state != null && state.scroll.hasClients) {
      ui.frames.add({
        'time': ui.clock.elapsedMicroseconds,
        'animation': state.animation.value,
        'scroll': state.scroll.offset,
      });
    }
  });
  final heartbeat = Timer.periodic(
    const Duration(milliseconds: 2),
    (_) => ui.heartbeats.add(ui.clock.elapsedMicroseconds),
  );
  runApp(ui.Shell(key: ui.shellKey));
  await binding.endOfFrame;
  await Future<void>.delayed(const Duration(milliseconds: 600));
  final creation = Stopwatch()..start();
  final runtime = FlaxEngine.createRuntime() as FlaxNativeJsRuntime;
  final createUs = creation.elapsedMicroseconds;
  final handoff = Handoff(
    '$root/.local/js-handoff/native/libflax_handoff_probe.dylib',
    runtime,
  );
  var passed = false;
  try {
    await emptyBridge(runtime);
    final text = StringBuffer('globalThis.sourceFunctions = [\n');
    for (var i = 0; i < 30000; i++) {
      text.writeln('function module$i(value) { return value + $i; },');
    }
    text.writeln('];');
    text.writeln(
      File('$root/experiments/js_handoff/bootstrap.js').readAsStringSync(),
    );
    // A script block permits repeated initialization without redeclaring globals.
    final source = '{${text.toString()}}';
    for (final mode in ['ui', 'worker', 'worker-with-dart-gc']) {
      // Distinct source keys avoid crediting a warm V8 compilation cache as a
      // threading improvement; the executable workload is identical.
      await measure(handoff, '$source\n// $mode', mode);
    }
    for (final failure in {
      'syntax error': 'const = ;',
      'runtime error': 'throw new Error("background initialization failed")',
    }.entries) {
      final result = await handoff.initialize(failure.value, background: true);
      check(
        'background ${failure.key} returns ownership and preserves prior closure',
        result['ok'] == false &&
            (result['error'] as String).isNotEmpty &&
            (runtime.evaluate('handoff.closure()') as FlaxJsNumber).value == 43,
        result,
      );
    }
    await cycles(handoff);
    handoff.close();
    await generated(runtime, root);
    check('no Flutter or Session errors', errors.isEmpty, errors);
    passed = true;
  } catch (error, stack) {
    errors.add('$error\n$stack');
    stderr.writeln('$error\n$stack');
  } finally {
    heartbeat.cancel();
    if (!handoff.busy) {
      handoff.close();
      if (!runtime.isDisposed) runtime.dispose();
    }
    stdout.writeln(
      'HANDOFF_RESULT ${jsonEncode({'passed': passed, 'build': kReleaseMode ? 'release' : 'debug', 'createRuntimeUs': createUs, 'checks': checks, 'rows': rows, 'errors': errors})}',
    );
    exit(passed ? 0 : 1);
  }
}
