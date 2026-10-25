// Minimal bridge fixtures on the maintained runtime, not generated API replacements.
// ignore_for_file: depend_on_referenced_packages, implementation_imports
import 'dart:typed_data';

import 'package:flax/runtime.dart';
import 'package:flax/src/native/native_runtime.dart';
import 'package:flax_test/src/gc.dart';

import 'scheduling.dart';

typedef Check = void Function(String, bool, [Object?]);

class DartBase {
  String describe() => 'DartBase';
}

class DartProxy extends DartBase {
  DartProxy(this.slicing, this.iterations);
  final Slicing slicing;
  final int iterations;

  @override
  String describe() => (slicing.evaluate(
    'child.describe($iterations)',
    slice: true,
  ) as FlaxJsString).value;

  String describeSuper() => super.describe();
}

void languageContracts(Slicing slicing, int iterations, Check check) {
  final runtime = slicing.runtime;
  final proxy = DartProxy(slicing, iterations);
  var baseCalls = 0;
  runtime.registerHostFunction('__baseDescribe', (_, _) {
    slicing.hostDepth++;
    try {
      baseCalls++;
      return FlaxJsString(proxy.describeSuper());
    } finally {
      slicing.hostDepth--;
    }
  });
  runtime.evaluate('''
    globalThis.finallyCalls = 0;
    globalThis.child = new (class Child extends class Base {
      describe() { return __baseDescribe(); }
    } {
      #suffix = '/override';
      describe(n) {
        const before = super.describe();
        spin(n);
        return before + this.#suffix + '/' + super.describe();
      }
      fail(n) {
        try { spin(n); throw new Error('after pause'); }
        finally { finallyCalls++; }
      }
    })();
  ''');
  final before = slicing.stats['yields'] as int;
  check(
    'Dart calls JS override, private field and real Dart super across pauses',
    proxy.describe() == 'DartBase/override/DartBase' && baseCalls == 2,
  );
  check('override actually paused', (slicing.stats['yields'] as int) > before);
  Object? failure;
  try {
    slicing.evaluate('child.fail(${iterations ~/ 4})', slice: true);
  } catch (error) {
    failure = error;
  }
  check(
    'exception and finally survive pauses',
    '$failure'.contains('after pause') &&
        (runtime.evaluate('finallyCalls') as FlaxJsNumber).value == 1,
  );
  check(
    'runtime usable after exception',
    (runtime.evaluate('child.describe(0)') as FlaxJsString).value ==
        'DartBase/override/DartBase',
  );
  runtime.evaluate(
    'delete globalThis.child; delete globalThis.__baseDescribe;',
  );
}

class Owner {
  int value = 7;
  FlaxJsFunction? callback;
}

@pragma('vm:never-inline')
WeakReference<Owner> makeCycle(FlaxJsRuntime runtime) {
  final owner = Owner();
  runtime.registerHostFunction(
    'tick',
    (_, _) => FlaxJsNumber((++owner.value).toDouble()),
  );
  runtime.evaluate('''
    globalThis.root = new (class {
      #offset = 10;
      tick = globalThis.tick;
      run(n = 0) { spin(n); return this.tick() + this.#offset; }
    })();
    delete globalThis.tick;
    globalThis.weak = new WeakRef(root);
  ''');
  owner.callback = runtime.evaluate('root.run.bind(root)') as FlaxJsFunction;
  return WeakReference(owner);
}

@pragma('vm:never-inline')
bool alive(WeakReference<Owner> owner) => owner.target != null;

Future<Map<String, Object?>> gcContracts(
  Slicing slicing,
  int iterations,
  Check check,
  void Function(void Function()? callback) frameHook,
) async {
  final runtime = slicing.runtime as FlaxNativeJsRuntime;
  final weak = makeCycle(runtime);
  var pausedFrames = 0, allocated = 0, lostDuringPause = false;
  final window = <Uint8List>[];
  frameHook(() {
    if (!slicing.paused) return;
    pausedFrames++;
    lostDuringPause |= !alive(weak);
    // Real Dart allocation pressure while the original JS stack is suspended.
    // Bounded live memory; this does not delete bridge roots or force cleanup.
    if (allocated < 120) {
      window.add(Uint8List(1024 * 1024));
      allocated++;
      if (window.length > 12) window.removeAt(0);
    }
  });
  final start = DateTime.now();
  final nativeBefore = slicing.stats;
  try {
    final result = slicing.evaluate('''
      (() => { const current = root; delete globalThis.root;
        return current.run($iterations); })()
    ''', slice: true) as FlaxJsNumber;
    check(
      'suspended JS stack retains Dart callback target under pressure',
      result.value == 18 && pausedFrames > 0 && !lostDuringPause,
      {
        'pausedFrames': pausedFrames,
        'allocatedMiB': allocated,
        'nativeBefore': nativeBefore,
        'nativeAfter': slicing.stats,
      },
    );
  } finally {
    frameHook(null);
    window.clear();
  }
  final resumed = DateTime.now();
  await reclaimed(runtime, weak, check, 'JS stack root');

  final dartWeak = makeCycle(runtime);
  final dartRoots = [dartWeak.target!];
  runtime.evaluate('delete globalThis.root');
  await flaxTestCollectDartGarbage();
  await Future<void>.delayed(const Duration(milliseconds: 1200));
  check(
    'Dart business root retains JS private fields and callback identity',
    alive(dartWeak) &&
        (dartRoots.single.callback!.call([]) as FlaxJsNumber).value == 18,
  );
  dartRoots.clear();
  await reclaimed(runtime, dartWeak, check, 'Dart root');
  return {
    'pausedFrames': pausedFrames,
    'allocatedMiB': allocated,
    'busyMs': resumed.difference(start).inMicroseconds / 1000,
    'reclamationAndDartRootMs':
        DateTime.now().difference(resumed).inMicroseconds / 1000,
    'remainingCells': runtime.bridgeCellCount,
    'remainingCallbacks': runtime.bridgeCallbackCount,
  };
}

Future<void> reclaimed(
  FlaxNativeJsRuntime runtime,
  WeakReference<Owner> weak,
  Check check,
  String root,
) async {
  var jsAlive = true;
  for (var i = 0; i < 80; i++) {
    await Future<void>.delayed(const Duration(milliseconds: 100));
    jsAlive =
        (runtime.evaluate('weak.deref() !== undefined') as FlaxJsBoolean).value;
    runtime.drainMicrotasks();
    if (!alive(weak) && !jsAlive && runtime.bridgeCellCount == 0) {
      if (runtime.bridgeCallbackCount == 0) break;
      await flaxTestCollectDartGarbage();
    }
  }
  check(
    '$root: both weak peers and native cells reclaimed without unregister',
    !alive(weak) &&
        !jsAlive &&
        runtime.bridgeCellCount == 0 &&
        runtime.bridgeCallbackCount == 0,
    {
      'dartAlive': alive(weak),
      'jsAlive': jsAlive,
      'cells': runtime.bridgeCellCount,
      'callbacks': runtime.bridgeCallbackCount,
    },
  );
}
