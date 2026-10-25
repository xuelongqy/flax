// The isolated consumer supplies the experiment's package graph.
// ignore_for_file: depend_on_referenced_packages, avoid_print
import 'dart:async';
import 'dart:convert';
import 'dart:developer' as developer;
import 'dart:io';
import 'dart:ui' as ui;

import 'package:crypto/crypto.dart';
import 'package:flax/flax.dart';
import 'package:flax/src/native/native_runtime.dart';
import 'package:flax_canvas/flax_canvas.dart';
import 'package:flutter/scheduler.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

late String engine;
var tracing = false;
const names = ['weave-crisp', 'bloom-soft'];
const metrics = MethodChannel('canvas.engine.metrics');
final clock = Stopwatch();
final output = Directory('${Directory.systemTemp.path}/canvas-engines');

Map<String, num> stats(Iterable<num> values) {
  final sorted = values.toList()..sort();
  if (sorted.isEmpty) throw StateError('Missing samples');
  return {
    'p50': sorted[((sorted.length - 1) * .50).round()],
    'p95': sorted[((sorted.length - 1) * .95).round()],
    'max': sorted.last,
  };
}

class Probe extends FlaxPlugin implements FlaxPluginInstance {
  final ready = Completer<void>();
  final timings = <int, ui.FrameTiming>{};
  final samples = <List<int>>[];
  Completer<void>? done, pixels;
  var begin = 0, encoded = 0, frame = 0, vsync = 0, readyUs = 0;
  final pixelHashes = <String, String>{};
  @override
  String get id => 'canvas.engine.benchmark';
  @override
  Set<String> get globals => {'__engineBench'};
  @override
  FlaxPluginInstance install(FlaxHostContext context) {
    context.registerFunction('__engineBench', (_, args) {
      final op = (args[0] as FlaxJsString).value;
      final step = (args[1] as FlaxJsNumber).value.toInt();
      switch (op) {
        case 'ready':
          readyUs = clock.elapsedMicroseconds;
          ready.complete();
        case 'begin':
          frame = ui.PlatformDispatcher.instance.frameData.frameNumber;
          vsync = SchedulerBinding
              .instance
              .currentSystemFrameTimeStamp
              .inMicroseconds;
          begin = clock.elapsedMicroseconds;
          if (tracing) {
            developer.Timeline.startSync(
              'CanvasFrame',
              arguments: {'step': step, 'frame': frame},
            );
          }
        case 'encoded':
          encoded = clock.elapsedMicroseconds;
        case 'end':
          final end = clock.elapsedMicroseconds;
          if (tracing) developer.Timeline.finishSync();
          if (step >= 45) {
            samples.add([
              frame,
              vsync,
              end - begin,
              encoded - begin,
              end - encoded,
            ]);
          }
        case 'done':
          done!.complete();
        case 'pixels':
          final bytes = context.runtime.readBytes(args[2] as FlaxJsObject);
          File('${output.path}/${names[step]}.png').writeAsBytesSync(bytes);
          // This hash is diagnostic; the runner compares decoded RGBA pixels.
          pixelHashes[names[step]] = sha256.convert(bytes).toString();
          pixels!.complete();
        default:
          throw StateError('Unknown benchmark operation: $op');
      }
      return const FlaxJsUndefined();
    });
    return this;
  }

  void onTimings(List<ui.FrameTiming> batch) {
    for (final t in batch) {
      timings[t.frameNumber] = t;
    }
  }

  @override
  void close() {}
  @override
  void dispose() {}
}

void main() {
  clock.start();
  runZonedGuarded(
    () async {
      final binding = WidgetsFlutterBinding.ensureInitialized();
      await SystemChrome.setPreferredOrientations([
        DeviceOrientation.portraitUp,
      ]);
      output.createSync(recursive: true);
      final memory = <Map<String, Object?>>[];
      Future<void> sample(String phase) async {
        final values = await metrics.invokeMapMethod<String, Object?>('sample');
        if (values == null) throw StateError('Missing native memory metrics');
        memory.add({
          'phase': phase,
          'us': clock.elapsedMicroseconds,
          ...values,
        });
      }

      await sample('before-runtime');
      engine = memory.first['engine'] as String;
      final simulator = memory.first['simulator'] == true;
      tracing = memory.first['trace'] == true;
      if ((!const bool.fromEnvironment('dart.vm.product') && !simulator) ||
          !Platform.isIOS ||
          !{'hermes', 'v8'}.contains(engine)) {
        throw StateError(
          "Invalid benchmark configuration: product=${const bool.fromEnvironment('dart.vm.product')}, ios=${Platform.isIOS}, engine=$engine",
        );
      }

      final assetsBegin = clock.elapsedMicroseconds;
      Flax.moduleAssets = await FlaxModuleAssets.load(
        bundle: rootBundle,
        manifest: 'assets/flax_modules/modules.json',
      );
      final source = await rootBundle.loadString('assets/engine-benchmark.js');
      final assetsUs = clock.elapsedMicroseconds - assetsBegin;
      final probe = Probe();
      binding.addTimingsCallback(probe.onTimings);
      late FlaxJsRuntime runtime;
      var runtimeUs = 0;
      final sessionBegin = clock.elapsedMicroseconds;
      final session = FlaxSession(
        createRuntime: () {
          final begin = clock.elapsedMicroseconds;
          runtime = FlaxEngine.createRuntime();
          runtimeUs = clock.elapsedMicroseconds - begin;
          return runtime;
        },
        source: source,
        sourceUrl: 'flax:canvas-engine-benchmark-source',
        bindings: FlaxBindingRegistry([flutterBindings]),
        plugins: [const FlaxCanvasPlugin(), probe],
        onError: (error, stack) {
          if (!probe.ready.isCompleted) {
            probe.ready.completeError(error, stack);
          } else {
            Error.throwWithStackTrace(error, stack);
          }
        },
      );
      final view = ui.PlatformDispatcher.instance.views.first;
      final size = view.physicalSize;
      final dpr = view.devicePixelRatio;
      final scale = (size.width / dpr - 32) / 880;
      runApp(
        Directionality(
          textDirection: TextDirection.ltr,
          child: ColoredBox(
            color: const ui.Color(0xff102e37),
            child: Align(
              alignment: Alignment.topLeft,
              child: Padding(
                padding: EdgeInsets.only(
                  left: 16,
                  top: view.padding.top / dpr + 24,
                ),
                child: SizedBox(
                  width: 880 * scale,
                  height: 480 * scale,
                  child: OverflowBox(
                    alignment: Alignment.topLeft,
                    minWidth: 880,
                    maxWidth: 880,
                    minHeight: 480,
                    maxHeight: 480,
                    child: Transform.scale(
                      scale: scale,
                      alignment: Alignment.topLeft,
                      child: SizedBox(
                        width: 880,
                        height: 480,
                        child: FlaxView.session(session: session),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      );
      await probe.ready.future.timeout(const Duration(seconds: 60));
      await binding.waitUntilFirstFrameRasterized.timeout(
        const Duration(seconds: 60),
        onTimeout: () async {
          await sample('raster-timeout');
          throw StateError(
            'Raster timeout: lifecycle=${binding.lifecycleState}, '
            'timings=${probe.timings.length}, native=${jsonEncode(memory.last)}',
          );
        },
      );
      final firstRasterUs = clock.elapsedMicroseconds;
      final startup = {
        'assets_us': assetsUs,
        'runtime_us': runtimeUs,
        'session_to_ready_us': probe.readyUs - sessionBegin,
        'main_to_ready_us': probe.readyUs,
        'main_to_first_raster_us': firstRasterUs,
      };
      print('CANVAS_STARTUP ${jsonEncode(startup)}');
      while (binding.lifecycleState != AppLifecycleState.resumed) {
        if (clock.elapsed > const Duration(seconds: 75)) {
          throw StateError('App not foreground');
        }
        await Future<void>.delayed(const Duration(milliseconds: 50));
      }
      await sample('first-raster');
      final service = tracing
          ? (await developer.Service.getInfo()).serverUri
          : null;
      if (tracing) print('CANVAS_TRACE_SERVICE $service');
      if (tracing && service == null) {
        throw StateError('Trace requires the VM service');
      }
      Future<Map<String, dynamic>> rpc(
        String method, [
        Map<String, String>? query,
      ]) async {
        final client = HttpClient();
        try {
          final request = await client.getUrl(
            service!.replace(
              path: '${service.path}$method',
              queryParameters: query,
            ),
          );
          final result = jsonDecode(
            await utf8.decoder.bind(await request.close()).join(),
          ) as Map<String, dynamic>;
          if (result.containsKey('error')) throw StateError('$method: $result');
          return result;
        } finally {
          client.close();
        }
      }

      Future<void> exportTrace(String name) async {
        final acknowledged = File('${output.path}/trace-continue');
        if (acknowledged.existsSync()) acknowledged.deleteSync();
        print('CANVAS_TRACE_READY $name');
        final deadline = DateTime.now().add(const Duration(seconds: 30));
        while (!acknowledged.existsSync()) {
          if (DateTime.now().isAfter(deadline)) {
            throw StateError('Trace host did not acknowledge $name');
          }
          await Future<void>.delayed(const Duration(milliseconds: 20));
        }
        acknowledged.deleteSync();
      }

      if (tracing) {
        await rpc('setVMTimelineFlags', {
          'recordedStreams': '[Dart,Embedder,GC]',
        });
      }
      final hooks = runtime.getGlobal('engineBench') as FlaxJsObject;
      final start = hooks.getProperty('start') as FlaxJsFunction;
      final results = <Map<String, Object?>>[];
      for (var index = 0; index < names.length; index++) {
        await sample('${names[index]}-before');
        if (tracing) {
          await rpc('clearVMTimeline');
        }
        probe.samples.clear();
        probe.timings.clear();
        probe.done = Completer<void>();
        var sampling = false;
        final timer = Timer.periodic(const Duration(seconds: 1), (_) async {
          if (sampling) return;
          sampling = true;
          try {
            await sample(names[index]);
          } finally {
            sampling = false;
          }
        });
        try {
          start.call([FlaxJsNumber(index.toDouble())]);
          await probe.done!.future.timeout(const Duration(seconds: 90));
        } finally {
          timer.cancel();
        }
        while (sampling) {
          await Future<void>.delayed(const Duration(milliseconds: 1));
        }
        await sample('${names[index]}-after');
        for (
          var i = 0;
          i < 40 &&
              !probe.samples.every((s) => probe.timings.containsKey(s[0]));
          i++
        ) {
          await Future<void>.delayed(const Duration(milliseconds: 100));
        }
        if (probe.samples.length != 300 ||
            !probe.samples.every((s) => probe.timings.containsKey(s[0])) ||
            binding.lifecycleState != AppLifecycleState.resumed ||
            view.physicalSize != size ||
            view.devicePixelRatio != dpr) {
          throw StateError('Invalid foreground frame samples');
        }
        final samples = probe.samples.map((s) {
          final t = probe.timings[s[0]]!;
          return [
            ...s,
            t.buildDuration.inMicroseconds,
            t.rasterDuration.inMicroseconds,
            t.totalSpan.inMicroseconds,
          ];
        }).toList();
        final intervals = [
          for (var i = 1; i < samples.length; i++)
            samples[i][1] - samples[i - 1][1],
        ];
        final row = <String, Object?>{
          'name': names[index],
          'frames': samples.length,
          'cpu_us': stats(samples.map((s) => s[2])),
          'encode_us': stats(samples.map((s) => s[3])),
          'commit_us': stats(samples.map((s) => s[4])),
          'build_us': stats(samples.map((s) => s[5])),
          'raster_us': stats(samples.map((s) => s[6])),
          'total_span_us': stats(samples.map((s) => s[7])),
          'interval_us': stats(intervals),
          'fps': 299e6 / (samples.last[1] - samples.first[1]),
          'columns': [
            'frame',
            'vsync_us',
            'cpu_us',
            'encode_us',
            'commit_us',
            'build_us',
            'raster_us',
            'total_span_us',
          ],
          'samples': samples,
        };
        results.add(row);
        if (tracing) {
          await exportTrace(names[index]);
        }
        print('CANVAS_SCENE ${jsonEncode({...row}..remove('samples'))}');
      }
      if (tracing) {
        await rpc('clearVMTimeline');
        // A live Dart owner must not keep a dropped JS wrapper alive indefinitely.
        final idleOwner = Object();
        final idleWrapper = runtime.evaluate(
          'globalThis.__idleWrapper = {}; globalThis.__idleWeak = new WeakRef(__idleWrapper); __idleWrapper',
        ) as FlaxJsObject;
        (runtime as FlaxNativeJsRuntime).bindDartPeer(idleWrapper, idleOwner);
        idleWrapper.release();
        runtime.evaluate('delete globalThis.__idleWrapper');
        await Future<void>.delayed(const Duration(milliseconds: 1500));
        if ((runtime.evaluate(
          '__idleWeak.deref() !== undefined',
        ) as FlaxJsBoolean).value) {
          throw StateError('Idle GC did not reclaim the dropped wrapper');
        }
        print('CANVAS_IDLE_RECLAIMED owner=${identityHashCode(idleOwner)}');
        await exportTrace('idle');
        await rpc('setVMTimelineFlags', {'recordedStreams': '[]'});
      }
      final snapshot = hooks.getProperty('snapshot') as FlaxJsFunction;
      for (var index = 0; index < names.length; index++) {
        probe.pixels = Completer<void>();
        snapshot.call([FlaxJsNumber(index.toDouble())]);
        await probe.pixels!.future.timeout(const Duration(seconds: 30));
      }
      (hooks.getProperty('close') as FlaxJsFunction).call([]);
      snapshot.release();
      start.release();
      hooks.release();
      binding.removeTimingsCallback(probe.onTimings);
      runApp(const SizedBox.shrink());
      await binding.endOfFrame;
      await session.close();
      await sample('closed');
      final receipt = {
        'complete': true,
        'engine': engine,
        'source_sha256': sha256.convert(utf8.encode(source)).toString(),
        'source_bytes': utf8.encode(source).length,
        'precompiled_hbc': false,
        'mode': const bool.fromEnvironment('dart.vm.product')
            ? 'release'
            : 'debug',
        'simulator': simulator,
        'tracing': tracing,
        'physical_size': [size.width, size.height],
        'dpr': dpr,
        'display_hz': view.display.refreshRate,
        'backing': [880, 480],
        'raster_scale': scale * dpr,
        'warmup': 45,
        'startup': startup,
        'memory': memory,
        'results': results,
        'png_sha256': probe.pixelHashes,
      };
      File('${output.path}/result.json').writeAsStringSync(jsonEncode(receipt));
      print('CANVAS_ENGINES_PASSED');
      await stdout.flush();
      exit(0);
    },
    (Object error, StackTrace stack) {
      stdout.writeln('CANVAS_ENGINES_FAILED $error\n$stack');
      exit(1);
    },
    zoneSpecification: ZoneSpecification(
      print: (self, parent, zone, line) => stdout.writeln(line),
    ),
  );
}
