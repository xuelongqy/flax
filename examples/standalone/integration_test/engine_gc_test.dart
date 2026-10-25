import 'dart:async';
import 'dart:convert';
import 'dart:developer' show TimelineTask;
import 'dart:ffi' hide Size;
import 'dart:io';
import 'dart:ui' show FrameTiming;

import 'package:flax/runtime.dart';
import 'package:flax/flax.dart'
    show FlaxSession, FlaxView, FlaxBindingRegistry, flutterBindings;
import 'package:flax/src/native/native_runtime.dart';
import 'package:ffi/ffi.dart';
import 'package:flax_test/runtime.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter/material.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';

import '../../../packages/flax/test/ui/native_widget_proxies_test.dart'
    as widgets;
import '../../../packages/flax/test/ui/native_callbacks_test.dart' as callbacks;
import '../../../packages/flax/test/ui/widget_values_test.dart'
    as widget_values;
import '../../../packages/flax/test/ui/async_callbacks_test.dart' as futures;
import '../../../packages/flax/test/ui/async_stream_callbacks_test.dart'
    as async_streams;
import '../../../packages/flax/test/ui/context_streams_test.dart'
    as context_streams;
import '../../../packages/flax/test/ui/binding_parity_test.dart'
    as binding_parity;
import '../../../packages/flax/test/ui/binding_completion_test.dart'
    as binding_completion;
import '../../../packages/flax/test/ui/collection_members_test.dart'
    as collection_members;
import '../../../packages/flax/test/ui/bridge_gc_test.dart' as bridge;
import '../../../packages/flax/test/ui/streams_test.dart' as streams;
import '../../../packages/flax/test/ui/session_test.dart' as sessions;
import '../../../packages/flax/test/ui/assets_test.dart' as assets;
import '../../../packages/flax/test/ui/application_loading_test.dart'
    as applications;
import '../../../packages/flax/test/ui/application_network_test.dart'
    as network;
import '../../../packages/flax/test/ui/flax_view_test.dart' as views;
import '../../../packages/flax/test/ui/interop_test.dart' as interop;
import '../../../packages/flax/test/ui/proxy_properties_test.dart'
    as properties;
import '../../../packages/flax/test/ui/package_bindings_test.dart' as providers;
import '../../../packages/flax/test/ui/default_omission_test.dart' as defaults;
import '../../../packages/flax/test/ui/extensions_test.dart' as extensions;
import '../../../packages/flax/test/ui/engine_generics_test.dart' as generics;
import '../../../packages/flax/test/ui/complex_generic_bounds_test.dart'
    as complex_bounds;
import '../../../packages/flax/test/ui/future_ownership_test.dart' as ownership;
import '../../../packages/flax/test/ui/dart_types_test.dart' as dart_types;
import '../../../packages/flax/test/ui/deferred_generics_test.dart'
    as deferred_generics;
import '../../../packages/flax/test/ui/typescript_generics_test.dart'
    as typescript_generics;
import '../../../packages/flax/test/ui/render_bindings_test.dart'
    as render_bindings;
import '../../../packages/flax/test/ui/sdk_capabilities_test.dart'
    as sdk_capabilities;
import '../../../packages/flax/test/ui/object_type_selection_test.dart'
    as object_type_selection;

void main() {
  if (Platform.isIOS &&
      kReleaseMode &&
      const bool.fromEnvironment('FLAX_ENGINE_DIRECT_LAUNCH')) {
    // Device console streams stdout; Flutter's iOS print sink is os_log.
    runZoned(
      _registerTests,
      zoneSpecification: ZoneSpecification(
        print: (self, parent, zone, message) => stdout.writeln(message),
      ),
    );
  } else {
    _registerTests();
  }
}

void _registerTests() {
  final startup = Stopwatch()..start();
  final binding = _EngineTestBinding();
  int? firstFrameMicros;
  binding.addPostFrameCallback(
    (_) => firstFrameMicros = startup.elapsedMicroseconds,
  );
  binding.reportData = {
    'scenario': 'engine-gc',
    'completed': true,
    if (!kDebugMode &&
        const int.fromEnvironment('FLAX_ENGINE_STRESS_SECONDS') == 0)
      'notApplicable': [
        'local frame updates and parent rebuild preserve unaffected hosts: Flutter debug rebuild hook',
        'invalidations during build wait for the next frame: Flutter debug rebuild hook',
        'constructor and paint failures keep their native diagnostic boundary: Flutter debug assertions',
        'invalid ancestry and unbounded flex use Flutter diagnostics: Flutter debug assertions',
        'Context.size preserves native build and non-RenderBox errors: Flutter debug assertions',
        'Material retains its native shape and borderRadius constraint: Flutter debug assertions',
      ],
  };
  binding.allTestsPassed.future.then((passed) {
    final result = {
      ...?binding.reportData,
      'scenario': 'engine-gc',
      'completed': passed,
      'failures': binding.failureMethodsDetails
          .map((f) => f.toString())
          .toList(),
      'cases': binding.results,
      'firstFrameMicros': firstFrameMicros,
    };
    binding.reportData = result;
    if (Platform.isAndroid || Platform.isIOS) {
      // Keep result fragments within mobile system log limits.
      // Full suites exceed Android's log burst limit without compression.
      final data = base64Encode(gzip.encode(utf8.encode(jsonEncode(result))));
      const chunkSize = 800;
      for (var offset = 0; offset < data.length; offset += chunkSize) {
        final end = offset + chunkSize < data.length
            ? offset + chunkSize
            : data.length;
        debugPrintSynchronously(
          'FLAX_ENGINE_RESULT_GZIP_BASE64:${data.substring(offset, end)}',
        );
      }
    } else {
      stdout.writeln('FLAX_ENGINE_RESULT:${jsonEncode(result)}');
    }
    if (const bool.fromEnvironment('FLAX_ENGINE_DIRECT_LAUNCH')) {
      final marker = passed ? 'FLAX_ENGINE_PASSED' : 'FLAX_ENGINE_FAILED';
      if (Platform.isAndroid || Platform.isIOS) {
        debugPrintSynchronously(marker);
      } else {
        stdout.writeln(marker);
      }
      exit(passed ? 0 : 1);
    }
  });
  setUpAll(() async {
    if (Platform.isAndroid || Platform.isIOS) {
      final libc = Platform.isAndroid
          ? DynamicLibrary.open('libc.so')
          : DynamicLibrary.process();
      final setenv = libc
          .lookupFunction<
            Int32 Function(Pointer<Utf8>, Pointer<Utf8>, Int32),
            int Function(Pointer<Utf8>, Pointer<Utf8>, int)
          >('setenv');
      final unsetenv = libc
          .lookupFunction<
            Int32 Function(Pointer<Utf8>),
            int Function(Pointer<Utf8>)
          >('unsetenv');
      const probe = 'FLAX_VERIFY_V8_JIT';
      final previous = Platform.environment[probe];
      using((arena) {
        final name = probe.toNativeUtf8(allocator: arena);
        if (setenv(name, '1'.toNativeUtf8(allocator: arena), 1) != 0) {
          throw StateError('Cannot enable the native engine probe');
        }
        try {
          final runtime = FlaxEngine.createRuntime();
          try {
            binding.reportData!['jsFeatures'] = jsonDecode(
              (runtime.evaluate(
                'JSON.stringify({Date: typeof Date, RegExp: typeof RegExp, Intl: typeof Intl, Temporal: typeof Temporal, WebAssembly: typeof WebAssembly, WeakRef: typeof WeakRef, FinalizationRegistry: typeof FinalizationRegistry})',
              ) as FlaxJsString).value,
            );
            if (Platform.isIOS) {
              // Native creation rejects any generated code in the jitless probe.
              binding.reportData!['v8JitlessVerified'] = true;
              debugPrintSynchronously(
                'FLAX_V8_JITLESS: probe executed without generated machine code',
              );
            } else {
              // Creation fails unless the native V8 probe observes machine code.
              binding.reportData!['v8JitVerified'] = true;
              debugPrintSynchronously(
                'FLAX_V8_JIT: machine code generated by the embedded engine',
              );
            }
          } finally {
            runtime.dispose();
          }
        } finally {
          final restored = previous == null
              ? unsetenv(name)
              : setenv(name, previous.toNativeUtf8(allocator: arena), 1);
          if (restored != 0) {
            throw StateError('Cannot restore the engine probe environment');
          }
        }
      });
    }
    final fixtures = jsonDecode(
      await rootBundle.loadString('assets/engine-fixtures.json'),
    ) as Map;
    final core = (fixtures['flax'] as Map).cast<String, String>();
    flaxTestLoadFixturePackages({
      for (final entry in fixtures.entries)
        entry.key as String: (entry.value as Map).cast<String, String>(),
    });
    await flaxTestLoadModuleAssets(core);
  });
  void register(String name, dynamic Function() body) {
    testWidgets(name, (tester) async {
      await tester.pumpWidget(
        const MaterialApp(home: Scaffold(body: Text('Flax engine GC'))),
      );
      await flaxTestRunIdle(tester, () async => await body());
    });
  }

  const stressSeconds = int.fromEnvironment('FLAX_ENGINE_STRESS_SECONDS');
  if (stressSeconds > 0) {
    _registerStress(binding, stressSeconds);
    return;
  }

  if (Platform.isIOS) {
    register(
      'production FFI calls, structs, callbacks, bytes and teardown',
      () async {
        final source = await rootBundle.loadString('assets/ffi-smoke.js');
        final observer = FlaxEngine.createRuntime() as FlaxNativeJsRuntime;
        observer.installNativeFfi(() => observer.checkpointNativeFfi());
        try {
          observer.evaluate(source);
          List<dynamic> stats() => jsonDecode(
            (observer.evaluate(
              'JSON.stringify(flaxFfiSmokeStats())',
            ) as FlaxJsString).value,
          ) as List<dynamic>;
          final before = stats();
          final runtime = FlaxEngine.createRuntime() as FlaxNativeJsRuntime;
          runtime.installNativeFfi(() => runtime.checkpointNativeFfi());
          try {
            runtime.evaluate(source);
            final result = jsonDecode(
              (runtime.evaluate(
                'JSON.stringify(flaxFfiSmoke())',
              ) as FlaxJsString).value,
            ) as Map;
            expect(result['checks'], 7);
            expect((result['stats'] as List)[0], (before[0] as int) + 1);
            expect((result['stats'] as List)[1], before[1]);
          } finally {
            runtime.dispose();
          }
          final after = stats();
          expect(after[0], (before[0] as int) + 1);
          expect(after[1], (before[1] as int) + 1);
          expect(after[2], before[2]);
          binding.reportData!['productionFfiChecks'] = 10;
        } finally {
          observer.dispose();
        }
      },
    );
  }

  flaxRuntimeContract(FlaxEngine.createRuntime, registerTest: register);
  flaxEngineGcContract(registerTest: register);
  group('native Widgets and State', widgets.main);
  group('native callbacks', callbacks.main);
  group('Widget aggregates and Context', widget_values.main);
  group('Future callbacks', futures.main);
  group('Future Stream callbacks', async_streams.main);
  group('Context Stream callbacks', context_streams.main);
  group('Binding selection parity', binding_parity.main);
  group('Shared binding completion', binding_completion.main);
  group('Collection member views', collection_members.main);
  group('bridge GC', bridge.main);
  group('Streams', streams.main);
  group('Sessions', sessions.main);
  group('Application assets', assets.main);
  group('Application loading', applications.main);
  group('Network application loading', network.main);
  group('FlaxView', views.main);
  group('generated object peers', interop.main);
  group('current proxy properties', properties.main);
  group('independent binding providers', providers.main);
  group('default omission', defaults.main);
  group('extension receiver views', extensions.main);
  group('VM generic types', generics.main);
  group('complex generic bounds', complex_bounds.main);
  group('SDK Future ownership', ownership.main);
  group('Dart type selection', dart_types.main);
  group('deferred generic aliases', deferred_generics.main);
  group('TS generic compilation', typescript_generics.main);
  group('full rendering bindings', render_bindings.main);
  group('SDK capability completion', sdk_capabilities.main);
  group('object subtype selection', object_type_selection.main);
  if (const bool.fromEnvironment('FLAX_ENGINE_BENCHMARK')) {
    testWidgets('profile GC, frame and memory measurements', (tester) async {
      final previousPolicy = binding.framePolicy;
      binding.framePolicy =
          LiveTestWidgetsFlutterBindingFramePolicy.benchmarkLive;
      addTearDown(() => binding.framePolicy = previousPolicy);
      await tester.pumpWidget(
        const MaterialApp(home: Center(child: CircularProgressIndicator())),
      );
      await tester.runAsync(() async {
        final startup = <int>[];
        final memory = <Map<String, int>>[];
        for (final phase in ['baseline', 'joint']) {
          FlaxJsRuntime? runtime;
          final callbacks = <FlaxJsFunction>[];
          if (phase == 'joint') {
            final watch = Stopwatch()..start();
            runtime = FlaxEngine.createRuntime();
            runtime.evaluate('''
              globalThis.heap = Array.from({length: 300000}, (_, i) => ({i}));
            ''');
            for (var i = 0; i < 1000; i++) {
              runtime.registerHostFunction(
                'owner$i',
                (_, _) => FlaxJsNumber(i.toDouble()),
              );
              callbacks.add(runtime.evaluate('owner$i') as FlaxJsFunction);
            }
            startup.add(watch.elapsedMicroseconds);
          }
          try {
            final samples = <int>[];
            final frames = <FrameTiming>[];
            binding.addTimingsCallback(frames.addAll);
            addTearDown(() => binding.removeTimingsCallback(frames.addAll));
            await Future<void>.delayed(const Duration(seconds: 2));
            final trace = TimelineTask()..start('FlaxProfile-$phase');
            for (var sample = 0; sample < 150; sample++) {
              final watch = Stopwatch()..start();
              final window = <Uint8List>[];
              for (var i = 0; i < 400; i++) {
                window.add(Uint8List(256 * 1024));
                if (window.length > 100) window.removeAt(0);
              }
              samples.add(watch.elapsedMicroseconds);
              memory.add({
                'rss': ProcessInfo.currentRss,
                'maxRss': ProcessInfo.maxRss,
              });
              await Future<void>.delayed(const Duration(milliseconds: 100));
            }
            trace.finish();
            await Future<void>.delayed(const Duration(seconds: 2));
            binding.reportData!['$phase-allocationMicros'] = samples;
            binding.reportData!['$phase-frameMicros'] = [
              for (final frame in frames)
                {
                  'build': frame.buildDuration.inMicroseconds,
                  'raster': frame.rasterDuration.inMicroseconds,
                  'total': frame.totalSpan.inMicroseconds,
                },
            ];
            binding.removeTimingsCallback(frames.addAll);
            if (callbacks.isNotEmpty) {
              expect((callbacks.first.call([]) as FlaxJsNumber).value, 0);
              expect((callbacks.last.call([]) as FlaxJsNumber).value, 999);
            }
          } finally {
            for (final callback in callbacks) {
              callback.release();
            }
            runtime?.dispose();
          }
        }
        binding.reportData!['runtimeAnd300kHeapStartupMicros'] = startup;
        binding.reportData!['workload'] = {
          'ordinaryJsObjects': 300000,
          'liveCallbackPairs': 1000,
          'allocationSamples': 150,
          'allocationsPerSample': 400,
          'allocationBytes': 256 * 1024,
        };
        binding.reportData!['memorySamples'] = memory;
      });
      await tester.pumpWidget(const SizedBox.shrink());
    });
  }
}

class _EngineTestBinding extends IntegrationTestWidgetsFlutterBinding {
  // AOT rejects the debug-only wildcard client used with an unregistered mock.
  @override
  bool get registerTestTextInput => true;
}

void _registerStress(
  IntegrationTestWidgetsFlutterBinding binding,
  int seconds,
) {
  final contracts = <({String name, dynamic Function() body})>[];
  flaxEngineGcContract(
    registerTest: (name, body) => contracts.add((name: name, body: body)),
  );
  testWidgets('sustained animation, pressure and joint GC', (tester) async {
    final previousPolicy = binding.framePolicy;
    final observer = FlaxEngine.createRuntime() as FlaxNativeJsRuntime;
    final baseline = observer.bridgeCellCount;
    final clock = Stopwatch()..start();
    final samples = <Map<String, Object?>>[];
    var cycles = 0;
    var completedContracts = 0;
    var frames = 0;
    var active = false;
    var phase = 'idle';
    final sampling = Timer.periodic(const Duration(seconds: 1), (_) {
      samples.add({
        'us': clock.elapsedMicroseconds,
        'phase': phase,
        'cycle': cycles,
        'cells': observer.bridgeCellCount,
        'rss': ProcessInfo.currentRss,
      });
    });
    try {
      while (clock.elapsed.inSeconds < seconds) {
        binding.framePolicy =
            LiveTestWidgetsFlutterBindingFramePolicy.onlyPumps;
        final runtimes = <FlaxNativeJsRuntime>[];
        final steps = <FlaxJsFunction>[];
        final dartWindow = <List<int>>[];
        final errors = <Object>[];
        final sessions = [
          for (var i = 0; i < 2; i++)
            FlaxSession(
              createRuntime: () {
                final runtime =
                    FlaxEngine.createRuntime() as FlaxNativeJsRuntime;
                runtimes.add(runtime);
                runtime.registerHostFunction('tick', (_, args) {
                  dartWindow.add(List<int>.filled(8192, frames));
                  if (dartWindow.length > 64) dartWindow.removeAt(0);
                  return args.single;
                });
                return runtime;
              },
              bindings: FlaxBindingRegistry([flutterBindings]),
              onError: (error, _) => errors.add(error),
              source:
                  '''
            globalThis.sessionId = $i;
            globalThis.window = [];
            globalThis.step = () => {
              window.push(new Uint8Array(32768));
              if (window.length > 64) window.shift();
              Promise.resolve().then(() => 1);
              return tick(window.length);
            };
            const widgets = __flaxModules.require('@flax/flutter/widgets');
            widgets.runApp(widgets.SizedBox());
          ''',
            ),
        ];
        try {
          await tester.pumpWidget(
            MaterialApp(
              home: Column(
                children: [
                  const CircularProgressIndicator(),
                  for (final session in sessions)
                    SizedBox(
                      width: 1,
                      height: 1,
                      child: FlaxView.session(session: session),
                    ),
                ],
              ),
            ),
          );
          expect(errors, isEmpty);
          expect(runtimes, hasLength(2));
          binding.framePolicy =
              LiveTestWidgetsFlutterBindingFramePolicy.benchmarkLive;
          await tester.runAsync(() async {
            phase = 'animation';
            Object? failure;
            StackTrace? failureStack;
            int? frameId;
            active = true;
            try {
              for (var i = 0; i < runtimes.length; i++) {
                expect(
                  (runtimes[i].evaluate('sessionId') as FlaxJsNumber).value,
                  i,
                );
                steps.add(runtimes[i].evaluate('step') as FlaxJsFunction);
              }
              void frame(Duration _) {
                if (!active) return;
                try {
                  for (var i = 0; i < runtimes.length; i++) {
                    steps[i].call([]);
                    runtimes[i].drainMicrotasks();
                  }
                  frames++;
                  frameId = binding.scheduleFrameCallback(frame);
                } catch (error, stack) {
                  failure = error;
                  failureStack = stack;
                  active = false;
                }
              }

              frameId = binding.scheduleFrameCallback(frame);
              final end = clock.elapsed + const Duration(seconds: 30);
              while (active &&
                  clock.elapsed < end &&
                  clock.elapsed.inSeconds < seconds) {
                await Future<void>.delayed(const Duration(milliseconds: 100));
              }
              if (failure != null) {
                Error.throwWithStackTrace(failure!, failureStack!);
              }
            } finally {
              active = false;
              if (frameId != null) binding.cancelFrameCallbackWithId(frameId!);
              for (final step in steps) {
                step.release();
              }
            }
          });
        } finally {
          binding.framePolicy =
              LiveTestWidgetsFlutterBindingFramePolicy.onlyPumps;
          await tester.pumpWidget(const SizedBox.shrink());
          binding.framePolicy =
              LiveTestWidgetsFlutterBindingFramePolicy.benchmark;
          await tester.runAsync(() async {
            for (final session in sessions) {
              await session.close();
            }
            for (final runtime in runtimes) {
              expect(runtime.bridgeCallbackCount, 0);
            }
          });
        }
        await tester.runAsync(() async {
          phase = 'idle-contracts';
          for (final contract in contracts) {
            debugPrintSynchronously(
              'FLAX_STRESS_CASE ${cycles + 1}: ${contract.name}',
            );
            await contract.body();
            completedContracts++;
          }
          expect(
            observer.bridgeCellCount,
            baseline,
            reason: 'Bridge metadata grew after stress cycle',
          );
        });
        cycles++;
      }
      expect(frames, greaterThan(0));
      expect(completedContracts, greaterThan(0));
      binding.reportData!['stress'] = {
        'seconds': seconds,
        'elapsedUs': clock.elapsedMicroseconds,
        'cycles': cycles,
        'frames': frames,
        'completedContracts': completedContracts,
        'baselineCells': baseline,
        'finalCells': observer.bridgeCellCount,
        'samples': samples,
      };
    } finally {
      active = false;
      sampling.cancel();
      observer.dispose();
      binding.framePolicy = previousPolicy;
    }
  }, timeout: Timeout(Duration(seconds: seconds + 180)));
}
