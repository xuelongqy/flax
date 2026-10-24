import 'dart:async';
import 'dart:convert';
import 'dart:ffi';
import 'dart:io';
import 'dart:isolate';
import 'dart:ui' as ui;

import 'package:ffi/ffi.dart';

import 'native_calls.dart';
import 'runtime_bindings.g.dart';
import 'probe_script.g.dart';
import 'gate_a_probe.dart' show ProbeRuntime, check;

typedef InstallNative = Int32 Function(
  Pointer<FlaxRuntime>,
  Pointer<Void>,
  Int64,
  Pointer<FlaxError>,
);
typedef Install = int Function(
  Pointer<FlaxRuntime>,
  Pointer<Void>,
  int,
  Pointer<FlaxError>,
);
typedef DrainNative = Int32 Function(Pointer<FlaxRuntime>, Pointer<FlaxError>);
typedef Drain = int Function(Pointer<FlaxRuntime>, Pointer<FlaxError>);
typedef CloseNative = Int32 Function(
  Pointer<FlaxRuntime>,
  Pointer<Int32>,
  Pointer<FlaxError>,
);
typedef Close = int Function(
  Pointer<FlaxRuntime>,
  Pointer<Int32>,
  Pointer<FlaxError>,
);

Future<Map<String, Object?>> runProbe() async {
  final library = Platform.isAndroid
      ? DynamicLibrary.open('libflutter.so')
      : DynamicLibrary.process();
  final providerLibrary = Platform.isAndroid
      ? DynamicLibrary.open('libflax_ffi_fixture.so')
      : library;
  final calls = NativeCalls(
    FlaxBindings(library).flax_engine_get_api(FLAX_ABI_VERSION).ref,
  );
  final install = library.lookupFunction<InstallNative, Install>(
    'flax_ffi_experiment_install',
  );
  final drain = library.lookupFunction<DrainNative, Drain>(
    'flax_ffi_experiment_drain',
  );
  final collect = library.lookupFunction<DrainNative, Drain>(
    'flax_ffi_experiment_collect',
  );
  final releaseWorker = library.lookupFunction<DrainNative, Drain>(
    'flax_ffi_experiment_release_worker',
  );
  final shutdownIsolate = library
      .lookupFunction<Void Function(), void Function()>(
        'flax_ffi_experiment_shutdown_isolate',
      );
  final close = library.lookupFunction<CloseNative, Close>(
    'flax_ffi_experiment_close',
  );
  final stat = library
      .lookupFunction<Uint64 Function(Uint32), int Function(int)>(
        'flax_ffi_experiment_stat',
      );
  final provider = providerLibrary
      .lookupFunction<Pointer<Void> Function(), Pointer<Void> Function()>(
        'flax_ffi_fixture_provider',
      )();
  final directAdd = providerLibrary
      .lookupFunction<Int64 Function(Int32, Int32), int Function(int, int)>(
        'flax_ffi_fixture_add',
      );
  var dartEntries = 0;
  final baseline = NativeCallable<FlaxHostCallbackFunction>.isolateLocal((
    Pointer<Void> context,
    Pointer<FlaxRuntime> runtime,
    int receiver,
    Pointer<Uint64> arguments,
    int count,
    Pointer<Uint64> result,
    Pointer<FlaxError> error,
  ) {
    dartEntries++;
    if (count != 2) {
      return FLAX_CALLBACK_FAILURE;
    }
    return using((arena) {
      final a = arena<FlaxValueInfo>();
      final b = arena<FlaxValueInfo>();
      if (calls.inspect(runtime, arguments[0], a, error) != 0 ||
          calls.inspect(runtime, arguments[1], b, error) != 0) {
        return FLAX_CALLBACK_FAILURE;
      }
      return calls.makeValue(
        runtime,
        FlaxValueKind.FLAX_NUMBER.value,
        directAdd(a.ref.number.toInt(), b.ref.number.toInt()).toDouble(),
        nullptr,
        0,
        result,
        error,
      );
    });
  }, exceptionalReturn: FLAX_CALLBACK_FAILURE);
  final port = ReceivePort();
  ProbeRuntime? active;
  Completer<void>? pendingClose;
  var nativeClosed = false;
  var wakes = 0;
  var ignoredWakes = 0;
  var drainErrors = 0;
  var lastGeneration = 0;
  Completer<void>? detached;
  bool tryClose(ProbeRuntime runtime) => using((arena) {
    final done = arena<Int32>();
    runtime.checked(arena, (error) => close(runtime.handle, done, error));
    return done.value != 0;
  });
  port.listen((Object? generation) {
    wakes++;
    if (detached != null && generation == lastGeneration && stat(3) == 0) {
      detached!.complete();
      detached = null;
    }
    if (generation is! int ||
        generation != lastGeneration ||
        active == null ||
        nativeClosed) {
      ignoredWakes++;
      return;
    }
    final runtime = active;
    if (pendingClose != null) {
      if (tryClose(runtime)) {
        nativeClosed = true;
        pendingClose!.complete();
      }
    } else {
      try {
        using(
          (arena) =>
              runtime.checked(arena, (error) => drain(runtime.handle, error)),
        );
      } catch (_) {
        drainErrors++;
      }
    }
  });
  Future<void> shutdown(ProbeRuntime runtime) async {
    if (nativeClosed) return;
    if (tryClose(runtime)) {
      nativeClosed = true;
      return;
    }
    pendingClose = Completer<void>();
    // Owner-loop wakeups, rather than a blocking worker join, finish retirement.
    await pendingClose!.future.timeout(const Duration(seconds: 10));
    pendingClose = null;
  }

  final runtime = ProbeRuntime(calls);
  active = runtime;
  try {
    using((arena) {
      final invalid = arena<Uint64>(4);
      invalid.cast<Uint32>().value = 1;
      for (final descriptor in [nullptr, invalid.cast<Void>()]) {
        var rejected = false;
        try {
          runtime.checked(
            arena,
            (error) => install(
              runtime.handle,
              descriptor,
              port.sendPort.nativePort,
              error,
            ),
          );
        } catch (_) {
          rejected = true;
        }
        check(
          rejected && stat(0) == 0,
          'Malformed descriptor leaves no installation',
        );
      }
    });
    final partial = ProbeRuntime(calls);
    try {
      partial.evaluate(r'''Object.defineProperty(globalThis, 'ffi', {
        configurable: true, set(value) { globalThis.partialModule = value; throw new Error('install failed'); }
      }); 'ready' ''');
      var rejected = false;
      try {
        using(
          (arena) => partial.checked(
            arena,
            (error) => install(
              partial.handle,
              provider,
              port.sendPort.nativePort,
              error,
            ),
          ),
        );
      } catch (_) {
        rejected = true;
      }
      check(rejected && stat(0) == 0, 'Partial global installation rolls back');
      check(
        partial.evaluate(r'''(() => { try { partialModule.add(1, 2); }
        catch (error) { return String(error).includes('closing') ? 'safe' : String(error); }
        return 'unsafe'; })()''') ==
            'safe',
        'Retained partial module is revoked',
      );
    } finally {
      tryClose(partial);
      partial.close();
    }
    using(
      (arena) => runtime.checked(
        arena,
        (error) =>
            install(runtime.handle, provider, port.sendPort.nativePort, error),
      ),
    );
    using((arena) {
      const name = '__dartFfiAdd';
      runtime.checked(
        arena,
        (error) => calls.registerHost(
          runtime.handle,
          name.toNativeUtf16(allocator: arena).cast(),
          name.length,
          baseline.nativeFunction,
          nullptr,
          error,
        ),
      );
    });
    check(
      runtime.evaluate('String(__dartFfiAdd(20, 22))') == '42' &&
          dartEntries == 1,
      'Dart FFI positive control',
    );
    var rejectedInstall = false;
    try {
      using(
        (arena) => runtime.checked(
          arena,
          (error) => install(
            runtime.handle,
            provider,
            port.sendPort.nativePort,
            error,
          ),
        ),
      );
    } catch (_) {
      rejectedInstall = true;
    }
    check(rejectedInstall, 'Duplicate installation must fail');
    final js =
        jsonDecode(runtime.evaluate(probeScript)) as Map<String, dynamic>;
    var prematureDestroy = false;
    try {
      using(
        (arena) => runtime.checked(
          arena,
          (error) => calls.destroy(runtime.handle, error),
        ),
      );
    } catch (_) {
      prematureDestroy = true;
    }
    check(prematureDestroy, 'Engine destruction must wait for FFI retirement');
    runtime.evaluate('ffi.counter(19); "unreferenced"');
    using(
      (arena) =>
          runtime.checked(arena, (error) => collect(runtime.handle, error)),
    );
    check(
      runtime.evaluate(
            'String(ffi.stats().created === ffi.stats().destroyed + 1)',
          ) ==
          'true',
      'Unreferenced native handle must finalize: ${runtime.evaluate('JSON.stringify(ffi.stats())')}',
    );
    check(
      dartEntries == 1,
      'Direct native assertions must not enter Dart dispatch',
    );
    check(
      runtime.evaluate('String(ffi.stats().wrongThreadDestroys)') == '0',
      'Explicit, GC and failed-adoption cleanup run on the C resource creation thread',
    );
    final benchmark = jsonDecode(
      runtime.evaluate(r'''
(() => {
  const count = 10000, samples = 5;
  const measure = f => {
    let checksum = 0;
    const started = ffi.now();
    for (let i = 0; i < count; i++) checksum += f(i, 1);
    const milliseconds = ffi.now() - started;
    if (checksum !== 50005000) throw new Error('benchmark checksum');
    return milliseconds;
  };
  measure(ffi.add); measure(__dartFfiAdd);
  const nativeC = [], direct = [], dartFfi = [];
  for (let i = 0; i < samples; i++) {
    const c = ffi.directBenchmark(count);
    if (c.checksum !== 50005000) throw new Error('C benchmark checksum');
    nativeC.push(c.milliseconds);
    direct.push(measure(ffi.add)); dartFfi.push(measure(__dartFfiAdd));
  }
  return JSON.stringify({iterations: count, samples, nativeC, direct, dartFfi});
})()
'''),
    ) as Map<String, dynamic>;
    check(dartEntries == 60001, 'Benchmark Dart entry count');
    lastGeneration = int.parse(
      runtime.evaluate(
        'String(ffi.start((i, bytes) => asyncEvents.push([i, bytes[1]]), 4, 0))',
      ),
    );
    runtime.evaluate('ffi.releaseWorker(); ffi.waitWorker(); "done"');
    using(
      (arena) =>
          runtime.checked(arena, (error) => drain(runtime.handle, error)),
    );
    check(
      runtime.evaluate('JSON.stringify(asyncEvents)') ==
          '[[0,42],[1,42],[2,42],[3,42]]',
      'Copied ordered worker notifications',
    );
    runtime.evaluate(
      'globalThis.jobResult = null; ffi.asyncAdd(20, 22).then(value => { jobResult = value; }); ffi.waitWorker(); "done"',
    );
    using(
      (arena) =>
          runtime.checked(arena, (error) => drain(runtime.handle, error)),
    );
    using(
      (arena) => runtime.checked(
        arena,
        (error) =>
            calls.drainMicrotasks(runtime.handle, 100, arena<Int32>(), error),
      ),
    );
    check(
      runtime.evaluate('String(jobResult)') == '42',
      'Worker C call resolves Promise on owner isolate',
    );
    runtime.evaluate(
      'ffi.start(() => {}, 100, 0); ffi.releaseWorker(); ffi.waitWorker(); "done"',
    );
    var overflow = false;
    try {
      using(
        (arena) =>
            runtime.checked(arena, (error) => drain(runtime.handle, error)),
      );
    } catch (_) {
      overflow = true;
    }
    check(overflow, 'Bounded queue must report overflow');
    using(
      (arena) =>
          runtime.checked(arena, (error) => drain(runtime.handle, error)),
    );
    runtime.evaluate(
      'ffi.start(() => { throw new Error("event failed"); }, 1, 0); ffi.releaseWorker(); ffi.waitWorker(); "done"',
    );
    var callbackError = false;
    try {
      using(
        (arena) =>
            runtime.checked(arena, (error) => drain(runtime.handle, error)),
      );
    } catch (_) {
      callbackError = true;
    }
    check(callbackError, 'Worker callback errors reach the owner');
    using(
      (arena) =>
          runtime.checked(arena, (error) => drain(runtime.handle, error)),
    );
    runtime.evaluate(
      'ffi.start(() => { throw new Error("cancelled callback"); }, 4, 0); ffi.releaseWorker(); ffi.waitWorker(); ffi.cancel(); "done"',
    );
    using(
      (arena) =>
          runtime.checked(arena, (error) => drain(runtime.handle, error)),
    );
    check(
      runtime.evaluate(
            'String(ffi.stats().created === ffi.stats().destroyed + 1)',
          ) ==
          'true',
      'Only the cleanup counter remains',
    );
    final expectedEngine = Platform.isIOS ? 1 : 2;
    check(runtime.engineNamespace == expectedEngine, 'Actual engine namespace');
    lastGeneration = int.parse(
      runtime.evaluate(
        'String(ffi.start(() => { throw new Error("after close"); }, 8, 0))',
      ),
    );
    await shutdown(runtime);
    check(
      runtime.evaluate('String(afterCloseBytes[0])') == '123',
      'Exported memory survives session retirement',
    );
    check(
      runtime.evaluate('String(retainedBytes[1])') == '99',
      'Freed slice remains a valid JS storage lease',
    );
    runtime.evaluate('globalThis.oldModule = ffi; "saved"');
    using(
      (arena) => runtime.checked(
        arena,
        (error) =>
            install(runtime.handle, provider, port.sendPort.nativePort, error),
      ),
    );
    nativeClosed = false;
    check(
      runtime.evaluate(r'''(() => {
      let rejected = 0;
      try { ffi.update(cleanupCounter, 1); } catch (_) { rejected++; }
      try { oldModule.add(1, 2); } catch (_) { rejected++; }
      return String(rejected === 2 && ffi.add(1, 2) === 3);
    })()''') ==
          'true',
      'Same-VM reinstall rejects foreign handles and retired module entries',
    );
    await shutdown(runtime);
    runtime.close();
    check(
      stat(0) == 0 && stat(1) == 0 && stat(2) == 0 && stat(3) == 0,
      'Native state, owners, buffers and workers must return to zero',
    );
    // New runtime generation never consumes old port messages.
    final reset = ProbeRuntime(calls);
    active = reset;
    nativeClosed = false;
    try {
      using(
        (arena) => reset.checked(
          arena,
          (error) =>
              install(reset.handle, provider, port.sendPort.nativePort, error),
        ),
      );
      check(
        reset.evaluate('String(ffi.add(1, 2))') == '3',
        'Runtime reset is usable',
      );
      reset.evaluate(
        'globalThis.closeEvents = 0; globalThis.closedInline = false; ffi.start(() => { closeEvents++; closedInline = ffi.requestClose(); }, 4, 0); ffi.releaseWorker(); ffi.waitWorker(); "done"',
      );
      using(
        (arena) => reset.checked(arena, (error) => drain(reset.handle, error)),
      );
      check(
        reset.evaluate('String(closeEvents === 1 && !closedInline)') == 'true',
        'Callback close remains pending until its frame returns and revokes queued callbacks',
      );
      await shutdown(reset);
      using(
        (arena) => reset.checked(
          arena,
          (error) =>
              install(reset.handle, provider, port.sendPort.nativePort, error),
        ),
      );
      nativeClosed = false;
      check(
        reset.evaluate(r'''(() => {
        const counter = ffi.counter(42);
        let pending = false;
        const value = ffi.withCounter(counter, () => { pending = !ffi.requestClose(); });
        return String(pending && value === 42);
      })()''') ==
            'true',
        'Inline close waits for the C call and preserves its pointer lease',
      );
      await shutdown(reset);
    } finally {
      reset.close();
    }
    final retiring = ProbeRuntime(calls);
    active = retiring;
    nativeClosed = false;
    try {
      using(
        (arena) => retiring.checked(
          arena,
          (error) => install(
            retiring.handle,
            provider,
            port.sendPort.nativePort,
            error,
          ),
        ),
      );
      lastGeneration = int.parse(
        retiring.evaluate('String(ffi.start(() => {}, 1, 2))'),
      );
      port.sendPort.send(lastGeneration - 1);
      check(
        !tryClose(retiring) && stat(0) == 1,
        'Unconfirmed stop retains installation and code state',
      );
      using(
        (arena) => retiring.checked(
          arena,
          (error) => releaseWorker(retiring.handle, error),
        ),
      );
      await shutdown(retiring);
    } finally {
      retiring.close();
    }
    final forced = ProbeRuntime(calls);
    active = forced;
    nativeClosed = false;
    using(
      (arena) => forced.checked(
        arena,
        (error) =>
            install(forced.handle, provider, port.sendPort.nativePort, error),
      ),
    );
    lastGeneration = int.parse(
      forced.evaluate(
        'String(ffi.start(() => { throw new Error("stale VM callback"); }, 100, 2))',
      ),
    );
    final detachedDone = Completer<void>();
    detached = detachedDone;
    shutdownIsolate();
    forced.closed = true;
    active = null;
    nativeClosed = true;
    await detachedDone.future.timeout(const Duration(seconds: 10));
    check(
      stat(0) == 0 && stat(1) == 0 && stat(2) == 0 && stat(3) == 0,
      'Forced isolate hook releases VM roots and detached producer retires',
    );
    check(ignoredWakes > 0, 'Retired generation wakeups are ignored');
    return {
      'passed': true,
      'engine': expectedEngine == 1 ? 'hermes' : 'v8',
      'js': js,
      'wakes': wakes,
      'ignoredWakes': ignoredWakes,
      'drainErrors': drainErrors,
      'benchmarkMilliseconds': benchmark,
      'dartPositiveControlEntries': 1,
      'directProbeDartEntries': 0,
      'benchmarkDartEntries': dartEntries - 1,
      'nativeEntries': stat(4),
      'inlineFailures': stat(5),
      'wrongThreadsRejected': stat(6),
      'remainingInstallations': stat(0),
      'remainingOwners': stat(1),
      'remainingBlocks': stat(2),
      'remainingWorkers': stat(3),
    };
  } finally {
    if (!runtime.closed) {
      await shutdown(runtime);
      runtime.close();
    }
    active = null;
    baseline.close();
    port.close();
  }
}

Future<void> main() async {
  Map<String, Object?> result;
  try {
    check(
      ui.PlatformDispatcher.instance.views.isNotEmpty,
      'Requires a real Flutter UI isolate',
    );
    result = await runProbe();
  } catch (error, stack) {
    result = {'passed': false, 'error': '$error', 'stack': '$stack'};
  }
  final line = 'FLAX_FFI_FULL_RESULT ${jsonEncode(result)}';
  if (Platform.isAndroid) {
    // Flutter routes print to Android logcat; dart:io stdout is not captured there.
    // ignore: avoid_print
    print(line);
  } else {
    stdout.writeln(line);
  }
}
