import 'dart:async';
import 'dart:convert';
import 'dart:developer' show TimelineTask;
import 'dart:ffi';
import 'dart:io';
import 'dart:ui' show FrameTiming;

import 'package:flax/runtime.dart';
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
import '../../../packages/flax/test/ui/bridge_gc_test.dart' as bridge;
import '../../../packages/flax/test/ui/streams_test.dart' as streams;
import '../../../packages/flax/test/ui/session_test.dart' as sessions;
import '../../../packages/flax/test/ui/flax_view_test.dart' as views;
import '../../../packages/flax/test/ui/interop_test.dart' as interop;
import '../../../packages/flax/test/ui/proxy_properties_test.dart'
    as properties;
import '../../../packages/flax/test/ui/package_bindings_test.dart' as providers;
import '../../../packages/flax/test/ui/default_omission_test.dart' as defaults;
import '../../../packages/flax/test/ui/extensions_test.dart' as extensions;

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
  final binding = IntegrationTestWidgetsFlutterBinding.ensureInitialized();
  int? firstFrameMicros;
  binding.addPostFrameCallback(
    (_) => firstFrameMicros = startup.elapsedMicroseconds,
  );
  binding.reportData = {
    'scenario': 'engine-gc',
    'completed': true,
    if (!kDebugMode)
      'notApplicable': [
        'local frame updates and parent rebuild preserve unaffected hosts: Flutter debug rebuild hook',
        'invalidations during build wait for the next frame: Flutter debug rebuild hook',
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
      final data = base64Encode(utf8.encode(jsonEncode(result)));
      const chunkSize = 800;
      for (var offset = 0; offset < data.length; offset += chunkSize) {
        final end = offset + chunkSize < data.length
            ? offset + chunkSize
            : data.length;
        debugPrintSynchronously(
          'FLAX_ENGINE_RESULT_BASE64:${data.substring(offset, end)}',
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
      final probe = Platform.isIOS
          ? 'FLAX_VERIFY_HERMES'
          : 'FLAX_VERIFY_V8_JIT';
      final previous = Platform.environment[probe];
      using((arena) {
        final name = probe.toNativeUtf8(allocator: arena);
        if (setenv(name, '1'.toNativeUtf8(allocator: arena), 1) != 0) {
          throw StateError('Cannot enable the native engine probe');
        }
        try {
          final runtime = FlaxEngine.createRuntime();
          try {
            if (Platform.isIOS) {
              final properties = jsonDecode(
                (runtime.evaluate(
                  'JSON.stringify(HermesInternal.getRuntimeProperties())',
                ) as FlaxJsString).value,
              ) as Map;
              expect(properties['Bytecode Version'], 99);
              expect(properties['GC'], 'hades (concurrent)');
              expect(properties['JIT Enabled'], false);
              binding.reportData!['hermesProperties'] = properties;
              debugPrintSynchronously(
                'FLAX_HERMES: embedded interpreter, joint GC',
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
    flaxTestLoadFixturePackages({'flax': core});
    await flaxTestLoadModuleAssets(core);
  });
  void register(String name, dynamic Function() body) {
    testWidgets(name, (tester) async {
      await tester.pumpWidget(
        const MaterialApp(home: Scaffold(body: Text('Flax engine GC'))),
      );
      await tester.runAsync(() async => await body());
    });
  }

  flaxRuntimeContract(FlaxEngine.createRuntime, registerTest: register);
  flaxEngineGcContract(registerTest: register);
  group('native Widgets and State', widgets.main);
  group('native callbacks', callbacks.main);
  group('Widget aggregates and Context', widget_values.main);
  group('Future callbacks', futures.main);
  group('Future Stream callbacks', async_streams.main);
  group('Context Stream callbacks', context_streams.main);
  group('bridge GC', bridge.main);
  group('Streams', streams.main);
  group('Sessions', sessions.main);
  group('FlaxView', views.main);
  group('generated object peers', interop.main);
  group('current proxy properties', properties.main);
  group('independent binding providers', providers.main);
  group('default omission', defaults.main);
  group('extension receiver views', extensions.main);
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
