import 'dart:typed_data';
import 'dart:isolate';

import 'package:flax/runtime.dart';
// Internal counters verify native reclamation without exposing application GC APIs.
// ignore: implementation_imports
import 'package:flax/src/native/native_runtime.dart';
import 'package:test/test.dart' hide test;
import 'package:test/test.dart' as tests;

class _Owner {
  int value = 7;
  FlaxJsFunction? callback;
}

final _owners = Expando<_Owner>();

@pragma('vm:never-inline')
(Object, WeakReference<_Owner>) _expandoCycle(FlaxNativeJsRuntime runtime) {
  final anchor = Object();
  final owner = _cycle(runtime, false);
  _owners[anchor] = owner.target;
  return (anchor, owner);
}

@pragma('vm:never-inline')
WeakReference<_Owner> _cycle(FlaxNativeJsRuntime runtime, bool jsRoot) {
  final owner = _Owner();
  runtime.registerHostFunction(
    'tick',
    (_, _) => FlaxJsNumber((++owner.value).toDouble()),
  );
  runtime.evaluate('''
    globalThis.root = new (class {
      #offset = 10;
      tick = globalThis.tick;
      run() { return this.tick() + this.#offset; }
    })();
    delete globalThis.tick;
    globalThis.weak = new WeakRef(root);
  ''');
  owner.callback = runtime.evaluate('root.run.bind(root)') as FlaxJsFunction;
  if (!jsRoot) runtime.evaluate('delete globalThis.root');
  return WeakReference(owner);
}

@pragma('vm:never-inline')
bool _dartAlive(WeakReference<_Owner> owner) => owner.target != null;

bool _jsAlive(FlaxNativeJsRuntime runtime) {
  final alive = runtime.evaluate('weak.deref() !== undefined') as FlaxJsBoolean;
  runtime.drainMicrotasks();
  return alive.value;
}

@pragma('vm:never-inline')
(WeakReference<_Owner>, List<FlaxJsFunction>) _directRoots(
  FlaxNativeJsRuntime runtime, {
  required bool chain,
}) {
  final owner = _Owner();
  runtime.registerHostFunction(
    'leaf',
    (_, _) => FlaxJsNumber((++owner.value).toDouble()),
  );
  final leaf = runtime.evaluate('leaf') as FlaxJsFunction;
  owner.callback = leaf;
  if (chain) {
    runtime.registerHostFunction('head', (_, _) => leaf.call([]));
  }
  final root = runtime.evaluate(chain ? 'head' : 'leaf') as FlaxJsFunction;
  runtime.evaluate('''
    globalThis.weak = new WeakRef(leaf);
    delete globalThis.leaf;
    delete globalThis.head;
  ''');
  return (WeakReference(owner), [root]);
}

Future<void> _allocationPressure() async {
  final window = <Uint8List>[];
  for (var i = 0; i < 400; i++) {
    window.add(Uint8List(256 * 1024));
    if (window.length > 100) window.removeAt(0);
    if (i % 20 == 0) await Future<void>.delayed(Duration.zero);
  }
}

@pragma('vm:never-inline')
WeakReference<_Owner> _sharedCycle(
  FlaxNativeJsRuntime first,
  FlaxNativeJsRuntime second,
) {
  final owner = _Owner();
  FlaxJsValue tick(FlaxJsValue _, List<FlaxJsValue> _) =>
      FlaxJsNumber((++owner.value).toDouble());
  first.registerHostFunction('sharedTick', tick);
  second.registerHostFunction('sharedTick', tick);
  owner.callback = first.evaluate('sharedTick') as FlaxJsFunction;
  second.evaluate('globalThis.weak = new WeakRef(sharedTick)');
  return WeakReference(owner);
}

Future<void> _reclaimed(
  FlaxNativeJsRuntime runtime,
  WeakReference<_Owner> owner,
) async {
  for (var i = 0; i < 80; i++) {
    await Future<void>.delayed(const Duration(milliseconds: 100));
    // Weak targets clear before Dart runs the queued callable finalizers.
    if (!_dartAlive(owner) &&
        !_jsAlive(runtime) &&
        runtime.bridgeCellCount == 0 &&
        runtime.bridgeCallbackCount == 0) {
      return;
    }
  }
  expect(_dartAlive(owner), isFalse, reason: 'Dart business cycle retained');
  expect(_jsAlive(runtime), isFalse, reason: 'JS business cycle retained');
  expect(runtime.bridgeCellCount, 0, reason: 'Native metadata retained');
  expect(runtime.bridgeCallbackCount, 0, reason: 'Callable cleanup incomplete');
}

/// Real custom-engine GC checks, reusable in headless and application runners.
void flaxEngineGcContract({
  void Function(String, dynamic Function())? registerTest,
}) {
  final test = registerTest ?? tests.test;
  test(
    'background Dart isolates reject runtime creation before allocation',
    () async {
      final message = await Isolate.run(() {
        try {
          FlaxEngine.createRuntime();
          return 'unexpected runtime';
        } catch (error) {
          return error.toString();
        }
      });
      expect(message, contains('Flax requires the Flutter UI isolate'));
    },
  );
  test(
    'engine contexts isolate globals, microtasks and reference ownership',
    () async {
      final first = FlaxEngine.createRuntime();
      final second = FlaxEngine.createRuntime();
      try {
        first.evaluate(
          'globalThis.value = 1; Promise.resolve().then(() => value = 2)',
        );
        second.evaluate(
          'globalThis.value = 10; Promise.resolve().then(() => value = 20)',
        );
        first.drainMicrotasks();
        expect((first.evaluate('value') as FlaxJsNumber).value, 2);
        expect((second.evaluate('value') as FlaxJsNumber).value, 10);
        final foreign = first.evaluate('({})') as FlaxJsObject;
        final local = second.evaluate('({})') as FlaxJsObject;
        try {
          expect(
            () => local.setProperty('foreign', foreign),
            throwsArgumentError,
          );
        } finally {
          foreign.release();
          local.release();
        }
        first.dispose();
        second.drainMicrotasks();
        expect((second.evaluate('value') as FlaxJsNumber).value, 20);
      } finally {
        first.dispose();
        second.dispose();
      }
    },
  );

  test('either business owner retains real private fields and callback identity', () async {
    final runtime = FlaxEngine.createRuntime() as FlaxNativeJsRuntime;
    try {
      final weak = _cycle(runtime, true);
      final roots = <_Owner>[weak.target!];
      // Allocation pressure uses ordinary Dart GC, not a test-only gc() entry.
      final window = <Uint8List>[];
      for (var i = 0; i < 400; i++) {
        window.add(Uint8List(256 * 1024));
        if (window.length > 100) window.removeAt(0);
        if (i % 20 == 0) await Future<void>.delayed(Duration.zero);
      }
      expect(_dartAlive(weak), isTrue);
      expect(_jsAlive(runtime), isTrue);
      expect((runtime.evaluate('root.run()') as FlaxJsNumber).value, 18);
      runtime.evaluate('delete globalThis.root');
      await Future<void>.delayed(const Duration(milliseconds: 1200));
      expect((roots.single.callback!.call([]) as FlaxJsNumber).value, 19);
      roots.clear();
      await _reclaimed(runtime, weak);
      expect(runtime.bridgeCellCount, 0);
    } finally {
      runtime.dispose();
    }
  });

  test(
    'sessions share a Dart owner without sharing JS references or shutdown',
    () async {
      final first = FlaxEngine.createRuntime() as FlaxNativeJsRuntime;
      final second = FlaxEngine.createRuntime() as FlaxNativeJsRuntime;
      try {
        final owner = _sharedCycle(first, second);
        first.dispose();
        await Future<void>.delayed(const Duration(milliseconds: 1200));
        expect(_dartAlive(owner), isTrue);
        expect((second.evaluate('sharedTick()') as FlaxJsNumber).value, 8);
        second.evaluate('delete globalThis.sharedTick');
        await _reclaimed(second, owner);
        expect(second.bridgeCellCount, 0);
        expect(second.bridgeCallbackCount, 0);
      } finally {
        first.dispose();
        second.dispose();
      }
    },
  );

  for (final chain in [false, true]) {
    test(
      chain
          ? 'Dart roots propagate through direct JS and Dart callback chains'
          : 'Dart callback facades retain direct targets through allocation GC',
      () async {
        final runtime = FlaxEngine.createRuntime() as FlaxNativeJsRuntime;
        try {
          final (owner, roots) = _directRoots(runtime, chain: chain);
          await _allocationPressure();
          expect(_dartAlive(owner), isTrue);
          expect(_jsAlive(runtime), isTrue);
          expect((roots.single.call([]) as FlaxJsNumber).value, 8);
          roots.clear();
          await _reclaimed(runtime, owner);
        } finally {
          runtime.dispose();
        }
      },
    );
  }

  test(
    'JS-only roots retain unmarked Dart targets through allocation GC',
    () async {
      final runtime = FlaxEngine.createRuntime() as FlaxNativeJsRuntime;
      try {
        final owner = _cycle(runtime, true);
        await _allocationPressure();
        expect(_dartAlive(owner), isTrue);
        expect((runtime.evaluate('root.run()') as FlaxJsNumber).value, 18);
        runtime.evaluate('delete globalThis.root');
        await _reclaimed(runtime, owner);
      } finally {
        runtime.dispose();
      }
    },
  );

  test('idle JS collection releases wrappers of live Dart targets', () async {
    final runtime = FlaxEngine.createRuntime() as FlaxNativeJsRuntime;
    final owner = _Owner();
    try {
      runtime.evaluate(
        'globalThis.wrapper = {}; globalThis.weak = new WeakRef(wrapper)',
      );
      final wrapper = runtime.evaluate('wrapper') as FlaxJsObject;
      try {
        runtime.bindDartPeer(wrapper, owner);
      } finally {
        wrapper.release();
      }
      runtime.evaluate('delete globalThis.wrapper');
      for (var i = 0; i < 80; i++) {
        await Future<void>.delayed(const Duration(milliseconds: 100));
        if (runtime.bridgeCellCount == 0 && !_jsAlive(runtime)) break;
      }
      expect(_jsAlive(runtime), isFalse);
      expect(runtime.bridgeCellCount, 0);
      expect(owner.value, 7);
    } finally {
      runtime.dispose();
    }
  });

  test(
    'idle GC reclaims rootless callbacks and 1000 repeated bridge cycles',
    () async {
      final runtime = FlaxEngine.createRuntime() as FlaxNativeJsRuntime;
      try {
        final weak = _cycle(runtime, false);
        await _reclaimed(runtime, weak);
        for (var i = 0; i < 1000; i++) {
          _cycle(runtime, false);
          if (i % 50 == 0) await Future<void>.delayed(Duration.zero);
        }
        for (
          var i = 0;
          i < 80 &&
              (runtime.bridgeCellCount != 0 ||
                  runtime.bridgeCallbackCount != 0);
          i++
        ) {
          await Future<void>.delayed(const Duration(milliseconds: 100));
        }
        expect(
          runtime.bridgeCellCount,
          0,
          reason: 'Bridge metadata did not return to baseline',
        );
        expect(runtime.bridgeCallbackCount, 0);
      } finally {
        runtime.dispose();
      }
    },
  );

  test(
    'Dart Expando ownership and JS pressure preserve the conditional edge',
    () async {
      final runtime = FlaxEngine.createRuntime() as FlaxNativeJsRuntime;
      try {
        final (anchor, weak) = _expandoCycle(runtime);
        final roots = <Object>[anchor];
        runtime.evaluate('''
        globalThis.pressure = [];
        for (let i = 0; i < 150; i++) pressure.push(new Array(100000).fill(i));
        globalThis.pressure = null;
      ''');
        await Future<void>.delayed(const Duration(milliseconds: 1200));
        expect(_dartAlive(weak), isTrue);
        expect(
          (_owners[roots.single]!.callback!.call([]) as FlaxJsNumber).value,
          18,
        );
        _owners[roots.single] = null;
        roots.clear();
        await _reclaimed(runtime, weak);
      } finally {
        runtime.dispose();
      }
    },
  );

  test('Dart allocation during a JS job preserves WeakRef kept objects and reentry', () async {
    final runtime = FlaxEngine.createRuntime() as FlaxNativeJsRuntime;
    try {
      runtime.registerHostFunction('pressure', (_, _) {
        final window = <Uint8List>[];
        for (var i = 0; i < 400; i++) {
          window.add(Uint8List(256 * 1024));
          if (window.length > 100) window.removeAt(0);
        }
        expect(
          (runtime.evaluate('weak.deref().value') as FlaxJsNumber).value,
          7,
        );
        return const FlaxJsUndefined();
      });
      expect(
        (runtime.evaluate('''
        (() => {
          let owner = {value: 7};
          globalThis.weak = new WeakRef(owner);
          weak.deref(); owner = null;
          pressure();
          return weak.deref().value;
        })()
      ''') as FlaxJsNumber).value,
        7,
      );
      runtime.evaluate('delete globalThis.pressure');
    } finally {
      runtime.dispose();
    }
  });
}
