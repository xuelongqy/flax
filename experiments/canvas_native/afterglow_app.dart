// The experiment runner supplies the isolated consumer's package graph.
// ignore_for_file: depend_on_referenced_packages, avoid_print
import 'dart:async';
import 'dart:convert';
import 'dart:developer' as developer;
import 'dart:io';
import 'dart:ui' as ui;

import 'package:flax/flax.dart';
import 'package:flax_canvas/flax_canvas.dart';
import 'package:flutter/scheduler.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

const names = [
  'bloom-crisp',
  'bloom-soft',
  'orbit-crisp',
  'orbit-soft',
  'weave-crisp',
  'weave-soft',
];
const mobile = bool.fromEnvironment('AFTERGLOW_MOBILE');
final output = const String.fromEnvironment('AFTERGLOW_OUTPUT').isEmpty
    ? '${Directory.systemTemp.path}/afterglow'
    : const String.fromEnvironment('AFTERGLOW_OUTPUT');
const buildMode = bool.fromEnvironment('dart.vm.product') ? 'release' : 'debug';

Map<String, double> stats(Iterable<num> values) {
  final sorted = values.map((x) => x.toDouble()).toList()..sort();
  if (sorted.isEmpty) throw StateError('No timing samples');
  return {
    'p50': sorted[((sorted.length - 1) * .5).round()],
    'p95': sorted[((sorted.length - 1) * .95).round()],
  };
}

class Probe extends FlaxPlugin implements FlaxPluginInstance {
  final ready = Completer<void>();
  final clock = Stopwatch()..start();
  final samples = <({int frame, int vsync, int cpu, int encode, int commit})>[];
  final timings = <int, ui.FrameTiming>{};
  Completer<void>? done;
  Completer<void>? pixels;
  var started = 0, encoded = 0, frame = 0, vsync = 0;
  @override
  String get id => 'afterglow.probe';
  @override
  Set<String> get globals => {'__afterglow'};
  @override
  FlaxPluginInstance install(FlaxHostContext context) {
    context.registerFunction('__afterglow', (_, args) {
      final op = (args[0] as FlaxJsString).value;
      final step = (args[1] as FlaxJsNumber).value.toInt();
      switch (op) {
        case 'ready':
          ready.complete();
        case 'begin':
          frame = ui.PlatformDispatcher.instance.frameData.frameNumber;
          vsync = SchedulerBinding
              .instance
              .currentSystemFrameTimeStamp
              .inMicroseconds;
          started = clock.elapsedMicroseconds;
        case 'encoded':
          encoded = clock.elapsedMicroseconds;
        case 'end':
          final end = clock.elapsedMicroseconds;
          if (step >= 30) {
            samples.add((
              frame: frame,
              vsync: vsync,
              cpu: end - started,
              encode: encoded - started,
              commit: end - encoded,
            ));
          }
        case 'done':
          done!.complete();
        case 'pixels':
          File('$output/$buildMode-${names[step]}.png').writeAsBytesSync(
            context.runtime.readBytes(args[2] as FlaxJsObject),
          );
          pixels!.complete();
        default:
          throw StateError('Unknown measurement operation: $op');
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

void runAfterglow(FlaxJsRuntime Function() createRuntime) {
  runZonedGuarded(
    () async {
      final binding = WidgetsFlutterBinding.ensureInitialized();
      Directory(output).createSync(recursive: true);
      Flax.moduleAssets = await FlaxModuleAssets.load(
        bundle: rootBundle,
        manifest: 'assets/flax_modules/modules.json',
      );
      final probe = Probe();
      late FlaxJsRuntime runtime;
      final session = FlaxSession(
        createRuntime: () => runtime = createRuntime(),
        source: await rootBundle.loadString('assets/afterglow.js'),
        bindings: FlaxBindingRegistry([flutterBindings]),
        plugins: [const FlaxCanvasPlugin(), probe],
        onError: (error, stack) => Error.throwWithStackTrace(error, stack),
      );
      final go = Completer<void>();
      final view = ui.PlatformDispatcher.instance.views.first;
      final displayScale = ValueNotifier<double>(1 / view.devicePixelRatio);
      runApp(
        Directionality(
          textDirection: TextDirection.ltr,
          child: ColoredBox(
            color: const ui.Color(0xfff5f5f0),
            child: Column(
              children: [
                SizedBox(
                  height:
                      24 +
                      (mobile ? view.padding.top / view.devicePixelRatio : 0),
                ),
                Semantics(
                  button: true,
                  label: 'Start measurement',
                  child: GestureDetector(
                    onTap: () {
                      if (!go.isCompleted) go.complete();
                    },
                    child: const Padding(
                      padding: EdgeInsets.all(20),
                      child: Text(
                        'Start measurement · keep window visible',
                        style: TextStyle(
                          color: ui.Color(0xff245c48),
                          fontSize: 20,
                        ),
                      ),
                    ),
                  ),
                ),
                RepaintBoundary(
                  child: ValueListenableBuilder<double>(
                    valueListenable: displayScale,
                    builder: (_, scale, child) {
                      final transformed = Transform.scale(
                        scale: scale,
                        alignment: Alignment.topLeft,
                        child: child,
                      );
                      if (!mobile) return transformed;
                      return SizedBox(
                        width: 880 * scale,
                        height: 480 * scale,
                        child: OverflowBox(
                          alignment: Alignment.topLeft,
                          minWidth: 880,
                          maxWidth: 880,
                          minHeight: 480,
                          maxHeight: 480,
                          child: transformed,
                        ),
                      );
                    },
                    child: SizedBox(
                      width: 880,
                      height: 480,
                      child: FlaxView.session(session: session),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      );
      await probe.ready.future;
      print('AFTERGLOW_READY');
      if (mobile) {
        final deadline = DateTime.now().add(const Duration(seconds: 15));
        while (binding.lifecycleState != AppLifecycleState.resumed) {
          if (DateTime.now().isAfter(deadline)) {
            throw StateError('Application did not resume');
          }
          await Future<void>.delayed(const Duration(milliseconds: 50));
        }
        await binding.endOfFrame;
        go.complete();
      }
      final service = !mobile && !const bool.fromEnvironment('dart.vm.product')
          ? (await developer.Service.getInfo()).serverUri
          : null;
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
          final response = jsonDecode(
            await utf8.decoder.bind(await request.close()).join(),
          ) as Map<String, dynamic>;
          if (response.containsKey('error')) {
            throw StateError('$method: $response');
          }
          return response;
        } finally {
          client.close();
        }
      }

      await go.future;
      if (service != null) {
        await rpc('setVMTimelineFlags', {
          'recordedStreams': '[Dart,Embedder,GC]',
        });
        await rpc('clearVMTimeline');
      }
      binding.addTimingsCallback(probe.onTimings);
      final results = <Map<String, Object>>[];
      final receipt = <String, Object>{
        'mode': buildMode,
        'dpr': view.devicePixelRatio,
        'display_hz': view.display.refreshRate,
        'lifecycle': binding.lifecycleState.toString(),
        'phase_step': 1 / 60,
        'warmup': 30,
        'backing': [880, 480],
        'physical_size': [view.physicalSize.width, view.physicalSize.height],
        'pixel_readback_during_frames': false,
        'results': results,
      };
      final file = File('$output/$buildMode.json');
      void save() => file.writeAsStringSync(
        const JsonEncoder.withIndent('  ').convert(receipt),
      );
      final hooks = runtime.getGlobal('afterglow') as FlaxJsObject;
      final start = hooks.getProperty('start') as FlaxJsFunction;
      // First match the HTML backing pixels, then measure the ordinary Retina view.
      for (final scale in {
        1 / view.devicePixelRatio,
        mobile
            ? (view.physicalSize.width / view.devicePixelRatio - 32) / 880
            : 1.0,
      }) {
        displayScale.value = scale;
        await binding.endOfFrame;
        for (
          var index = 0;
          index < const int.fromEnvironment('AFTERGLOW_CASES', defaultValue: 6);
          index++
        ) {
          probe.samples.clear();
          probe.timings.clear();
          probe.done = Completer<void>();
          start.call([FlaxJsNumber(index.toDouble())]);
          await probe.done!.future.timeout(const Duration(minutes: 2));
          for (
            var i = 0;
            i < 40 &&
                !probe.samples.every((s) => probe.timings.containsKey(s.frame));
            i++
          ) {
            await Future<void>.delayed(const Duration(milliseconds: 100));
          }
          final samples = probe.samples;
          if (binding.lifecycleState != AppLifecycleState.resumed) {
            throw StateError('Application became inactive during measurement');
          }
          if (samples.length != 120 ||
              !samples.every((s) => probe.timings.containsKey(s.frame))) {
            throw StateError('Incomplete frame timing');
          }
          final raster = samples.map((s) => probe.timings[s.frame]!).toList();
          final intervals = [
            for (var i = 1; i < samples.length; i++)
              samples[i].vsync - samples[i - 1].vsync,
          ];
          final result = <String, Object>{
            'name': names[index],
            'raster_scale': scale * view.devicePixelRatio,
            'frames': samples.length,
            'fps':
                (samples.length - 1) *
                1e6 /
                (samples.last.vsync - samples.first.vsync),
            'cpu_us': stats(samples.map((s) => s.cpu)),
            'encode_us': stats(samples.map((s) => s.encode)),
            'commit_us': stats(samples.map((s) => s.commit)),
            'raster_us': stats(
              raster.map((t) => t.rasterDuration.inMicroseconds),
            ),
            'build_us': stats(
              raster.map((t) => t.buildDuration.inMicroseconds),
            ),
            'interval_us': stats(intervals),
            'raw': {
              'vsync': samples.map((s) => s.vsync).toList(),
              'cpu': samples.map((s) => s.cpu).toList(),
              'raster': raster
                  .map((t) => t.rasterDuration.inMicroseconds)
                  .toList(),
            },
          };
          results.add(result);
          save();
          print('AFTERGLOW ${jsonEncode({...result}..remove('raw'))}');
          if (service != null && index == 0) {
            File('$output/debug-timeline.json')
                .writeAsStringSync(jsonEncode(await rpc('getVMTimeline')));
            await rpc('setVMTimelineFlags', {'recordedStreams': '[]'});
          }
        }
      }
      final snapshot = hooks.getProperty('snapshot') as FlaxJsFunction;
      for (var index = 0; index < names.length; index++) {
        probe.pixels = Completer<void>();
        snapshot.call([FlaxJsNumber(index.toDouble())]);
        await probe.pixels!.future.timeout(const Duration(seconds: 30));
      }
      final close = hooks.getProperty('close') as FlaxJsFunction;
      close.call([]);
      close.release();
      start.release();
      snapshot.release();
      hooks.release();
      binding.removeTimingsCallback(probe.onTimings);
      runApp(const SizedBox.shrink());
      await binding.endOfFrame;
      await session.close();
      receipt['complete'] = true;
      save();
      print('AFTERGLOW_PASSED');
      await stdout.flush();
      exit(0);
    },
    (error, stack) {
      stderr.writeln('$error\n$stack');
      exit(1);
    },
    zoneSpecification: const bool.fromEnvironment('AFTERGLOW_DEVICE_CONSOLE')
        ? ZoneSpecification(
            print: (self, parent, zone, line) => stdout.writeln(line),
          )
        : null,
  );
}
