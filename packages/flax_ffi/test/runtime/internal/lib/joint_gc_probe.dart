// ignore_for_file: implementation_imports
import 'dart:ffi';

import 'package:ffi/ffi.dart';
import 'package:flax/runtime.dart';
// ignore: implementation_imports
import 'package:flax/src/native/native_runtime.dart';
import 'package:test_api/src/backend/invoker.dart';
import 'package:test_api/src/backend/metadata.dart';
import 'package:test_api/src/backend/group.dart';
import 'package:test_api/src/backend/suite.dart';
import 'package:test_api/src/backend/suite_platform.dart';
import 'package:test_api/src/backend/runtime.dart';
import 'package:test_api/src/backend/state.dart';

import 'engine_gc_contract.dart';
import 'probe_runtime.dart' show check;
import 'native_calls.dart';
import 'runtime_bindings.g.dart';

class _Owner {
  FlaxJsFunction? head;
}

@pragma('vm:never-inline')
FlaxJsFunction _link(FlaxNativeJsRuntime runtime, FlaxJsFunction next) {
  runtime.registerHostFunction('link', (_, _) => next.call([]));
  runtime.evaluate('''
    (() => {
      const key = {};
      const values = new WeakMap([[key, link]]);
      globalThis.link = () => values.get(key)();
    })();
  ''');
  final link = runtime.evaluate('link') as FlaxJsFunction;
  runtime.evaluate('delete globalThis.link');
  return link;
}

@pragma('vm:never-inline')
WeakReference<_Owner> _chain(List<FlaxNativeJsRuntime> runtimes) {
  final owner = _Owner();
  runtimes.last.registerHostFunction(
    'leaf',
    (_, _) => FlaxJsNumber(owner.head == null ? 0 : 42),
  );
  var head = runtimes.last.evaluate('leaf') as FlaxJsFunction;
  runtimes.last.evaluate('delete globalThis.leaf');
  for (var i = 63; i >= 0; i--) {
    head = _link(runtimes[i % runtimes.length], head);
  }
  owner.head = head;
  runtimes.first.registerHostFunction('root', (_, _) => head.call([]));
  return WeakReference(owner);
}

@pragma('vm:never-inline')
bool _alive(WeakReference<_Owner> owner) => owner.target != null;

/// Measures complete joint collections, including Dart, rather than only marking.
Future<Map<String, Object?>> runJointGcProbe() async {
  final library = DynamicLibrary.process();
  final calls = NativeCalls(
    FlaxBindings(library).flax_engine_get_api(FLAX_ABI_VERSION).ref,
  );
  final collect = library
      .lookupFunction<
        Int32 Function(Pointer<FlaxRuntime>, Pointer<FlaxError>),
        int Function(Pointer<FlaxRuntime>, Pointer<FlaxError>)
      >('flax_ffi_dlopen_collect_pending');
  void gc() => using((arena) {
    final error = arena<FlaxError>();
    try {
      check(collect(nullptr, error) == 0, 'Joint GC collection');
    } finally {
      calls.errorClear(error);
    }
  });
  final measurements = <Map<String, Object>>[];
  for (final count in [1, 4, 16]) {
    for (final connected in [false, true]) {
      final runtimes = List.generate(
        count,
        (_) => FlaxEngine.createRuntime() as FlaxNativeJsRuntime,
      );
      try {
        for (final runtime in runtimes) {
          runtime.evaluate(
            'globalThis.ordinary = Array.from({length: 10000}, (_, i) => ({i}))',
          );
        }
        final owner = _chain(connected ? runtimes : [runtimes.first]);
        for (var i = 0; i < 2; i++) gc();
        final samples = <int>[];
        for (var i = 0; i < 5; i++) {
          final watch = Stopwatch()..start();
          gc();
          samples.add(watch.elapsedMicroseconds);
        }
        check(_alive(owner), 'Dart owner survives across $count runtimes');
        check(
          (runtimes.first.evaluate('root()') as FlaxJsNumber).value == 42,
          '64-link cross-session WeakMap chain remains callable',
        );
        final sorted = [...samples]..sort();
        measurements.add({
          'runtimes': count,
          'participatingRuntimes': connected ? count : 1,
          'links': 64,
          'microseconds': samples,
          'medianMicroseconds': sorted[2],
        });
        runtimes.first.evaluate('delete globalThis.root');
        for (var i = 0; i < 20; i++) {
          for (final runtime in runtimes) runtime.drainMicrotasks();
          gc();
          await Future<void>.delayed(const Duration(milliseconds: 10));
          if (!_alive(owner) && runtimes.first.bridgeCellCount == 0) break;
        }
        check(!_alive(owner), 'Unrooted cross-session Dart cycle is reclaimed');
        check(
          runtimes.first.bridgeCellCount == 0,
          'Joint metadata is reclaimed',
        );
        check(
          runtimes.first.bridgeCallbackCount == 0,
          'Joint callbacks are reclaimed',
        );
      } finally {
        for (final runtime in runtimes.reversed) runtime.dispose();
      }
    }
  }
  final linked = FlaxEngine.createRuntime() as FlaxNativeJsRuntime;
  final empty = FlaxEngine.createRuntime() as FlaxNativeJsRuntime;
  try {
    final owner = _chain([linked]);
    gc();
    linked.evaluate('delete globalThis.root');
    empty.installNativeFfi(empty.checkpointNativeFfi);
    // Native FFI adds no Dart peer: this VM has an active job but no joint cells.
    empty.evaluate('''
      const collector = __flaxFfiDlopen(null).getFunction(
        'flax_ffi_dlopen_collect_pending',
        { arguments: ['pointer', 'pointer'], return: 'int32' });
      if (collector(0n, 0n) !== 0) throw new Error('active-job collection');
    ''');
    check(_alive(owner), 'An active VM without joint cells defers collection');
    for (var i = 0; i < 20; i++) {
      gc();
      await Future<void>.delayed(const Duration(milliseconds: 10));
      if (!_alive(owner) && linked.bridgeCellCount == 0) break;
    }
    check(
      !_alive(owner) && linked.bridgeCellCount == 0,
      'Deferred cross-Session cycle is reclaimed after the active job',
    );
  } finally {
    check(empty.retireNativeFfi(), 'Empty FFI runtime retires synchronously');
    empty.dispose();
    linked.dispose();
  }
  final tests = <String, dynamic Function()>{};
  flaxEngineGcContract(registerTest: (name, body) => tests[name] = body);
  for (final entry in tests.entries) {
    final test = LocalTest(entry.key, Metadata(), () async {
      await entry.value();
    });
    final live = test.load(
      Suite(Group.root([test]), SuitePlatform(Runtime.vm)),
    );
    await live.run();
    check(live.state.result == Result.success, '${entry.key}: ${live.errors}');
    await live.close();
  }
  return {
    'engineGcContractPassed': tests.keys.toList(),
    'jointGcChainsVerified': true,
    'jointGcMeasurements': measurements,
    'emptySessionActiveJobVerified': true,
  };
}
