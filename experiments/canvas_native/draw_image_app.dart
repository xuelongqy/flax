// The runner supplies the disposable consumer's package graph.
// ignore_for_file: depend_on_referenced_packages, avoid_print
import 'dart:async';
import 'dart:convert';
import 'dart:ffi';
import 'dart:io';
import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flax/flax.dart';
import 'package:flax_canvas/flax_canvas.dart';
import 'package:flax_canvas/src/canvas_bindings.g.dart';
import 'package:flax_engine_v8/flax_engine_v8.dart';
import 'package:flutter/scheduler.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

const _cases = [(256, 1), (256, 32), (256, 128), (1024, 1), (1024, 8)];

void _check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

double _percentile(Iterable<num> values, double fraction) {
  final sorted = values.map((n) => n.toDouble()).toList()..sort();
  _check(sorted.isNotEmpty, 'Empty timing sample');
  return sorted[((sorted.length - 1) * fraction).round()];
}

Map<String, double> _stats(Iterable<num> values) => {
  'p50': _percentile(values, .5),
  'p95': _percentile(values, .95),
};

class _ModuleBundle extends CachingAssetBundle {
  _ModuleBundle(this.files);
  final Map<String, String> files;
  @override
  Future<String> loadString(String key, {bool cache = true}) async =>
      files[key] ?? (throw StateError('Missing module: $key'));
  @override
  Future<ByteData> load(String key) =>
      throw UnsupportedError('Text modules only');
}

class _Operation {
  int count = 0;
  int ticks = 0;
}

class _FrameProbe extends FlaxPlugin implements FlaxPluginInstance {
  final ready = Completer<void>();
  final clock = Stopwatch()..start();
  final timings = <int, ui.FrameTiming>{};
  final operations = <String, _Operation>{};
  final samples = <({int frame, int vsync, int cpu})>[];
  Completer<void>? done;
  int warmup = 0;
  int started = 0;
  int frame = 0;
  int vsync = 0;
  int phaseStart = 0;
  int sampleUs = 0;
  int minFrames = 0;
  @override
  String get id => 'canvas.drawImage.benchmark';
  @override
  Set<String> get globals => const {
    '__drawImageReady',
    '__drawImageFrame',
    '__drawImageNoop',
  };
  @override
  FlaxPluginInstance install(FlaxHostContext context) {
    context.registerFunction('__drawImageReady', (_, args) {
      ready.complete();
      return const FlaxJsUndefined();
    });
    context.registerFunction(
      '__drawImageNoop',
      (_, args) => const FlaxJsUndefined(),
    );
    context.registerFunction('__drawImageFrame', (_, args) {
      if ((args[0] as FlaxJsString).value == 'begin') {
        frame = ui.PlatformDispatcher.instance.frameData.frameNumber;
        vsync = SchedulerBinding
            .instance
            .currentSystemFrameTimeStamp
            .inMicroseconds;
        // The bracket includes JS encoding, all Canvas host calls and commit.
        started = clock.elapsedMicroseconds;
        return const FlaxJsBoolean(true);
      }
      final cpu = clock.elapsedMicroseconds - started;
      if (warmup > 0) {
        if (--warmup == 0) operations.clear();
        return const FlaxJsBoolean(true);
      }
      if (samples.isEmpty) phaseStart = started;
      samples.add((frame: frame, vsync: vsync, cpu: cpu));
      if (started - phaseStart >= sampleUs && samples.length >= minFrames) {
        done!.complete();
        return const FlaxJsBoolean(false);
      }
      return const FlaxJsBoolean(true);
    });
    return this;
  }

  void onTimings(List<ui.FrameTiming> batch) {
    for (final timing in batch) {
      timings[timing.frameNumber] = timing;
    }
  }

  Future<Map<String, Object>> run(
    FlaxJsFunction start,
    String mode,
    int size,
    int count, {
    required bool profile,
  }) async {
    samples.clear();
    timings.clear();
    operations.clear();
    warmup = profile ? 10 : 20;
    sampleUs = profile ? 500000 : 2000000;
    minFrames = profile ? 15 : 30;
    done = Completer<void>();
    start.call([
      FlaxJsString(mode),
      FlaxJsNumber(size.toDouble()),
      FlaxJsNumber(count.toDouble()),
    ]);
    await done!.future.timeout(const Duration(seconds: 40));
    // Release FrameTiming reports are batched. Wait without pumping extra frames.
    for (var i = 0; i < 40; i++) {
      if (samples.every((s) => timings.containsKey(s.frame))) break;
      await Future<void>.delayed(const Duration(milliseconds: 100));
    }
    _check(
      samples.every((s) => timings.containsKey(s.frame)),
      'Missing raster timing for a sampled frame',
    );
    _check(
      samples.map((s) => s.frame).toSet().length == samples.length,
      'Duplicate frame identity',
    );
    final raster = samples.map((s) => timings[s.frame]!).toList();
    final intervals = [
      for (var i = 1; i < samples.length; i++)
        samples[i].vsync - samples[i - 1].vsync,
    ];
    final elapsed = samples.last.vsync - samples.first.vsync;
    _check(elapsed > 0, 'Frame clock did not advance');
    final record = <String, Object>{
      'source_size': size,
      'draws_per_frame': count,
      'mode': mode,
      'frames': samples.length,
      'profiled': profile,
      'fps_vsync': (samples.length - 1) * 1e6 / elapsed,
      'fps_raster_finish':
          (raster.length - 1) *
          1e6 /
          (raster.last.timestampInMicroseconds(ui.FramePhase.rasterFinish) -
              raster.first.timestampInMicroseconds(ui.FramePhase.rasterFinish)),
      'cpu_submit_us': _stats(samples.map((s) => s.cpu)),
      'flutter_build_us': _stats(
        raster.map((s) => s.buildDuration.inMicroseconds),
      ),
      'flutter_raster_us': _stats(
        raster.map((s) => s.rasterDuration.inMicroseconds),
      ),
      'frame_interval_us': _stats(intervals),
      'raw': {
        'frame_numbers': samples.map((s) => s.frame).toList(),
        'vsync_us': samples.map((s) => s.vsync).toList(),
        'cpu_submit_us': samples.map((s) => s.cpu).toList(),
        'build_us': raster.map((s) => s.buildDuration.inMicroseconds).toList(),
        'raster_us': raster
            .map((s) => s.rasterDuration.inMicroseconds)
            .toList(),
        'raster_finish_us': raster
            .map((s) => s.timestampInMicroseconds(ui.FramePhase.rasterFinish))
            .toList(),
      },
    };
    if (profile) {
      final frames = samples.length;
      for (final operation in [
        'snapshotImageSync',
        'retainImage',
        'closeImage',
        'commit',
      ]) {
        final expected = switch (operation) {
          'commit' => frames,
          'snapshotImageSync' => mode == 'offscreen' ? frames * count : 0,
          'retainImage' => mode == 'bitmap' ? frames * count : 0,
          _ => frames * count,
        };
        _check(
          (operations[operation]?.count ?? 0) == expected,
          'Unexpected $operation count for $mode: ${operations[operation]?.count} != $expected',
        );
      }
      _check(
        operations.keys.every(
          (op) => [
            'snapshotImageSync',
            'retainImage',
            'closeImage',
            'commit',
          ].contains(op),
        ),
        'Unexpected Canvas work during sampling: ${operations.keys}',
      );
      record['dart_operations'] = {
        for (final entry in operations.entries)
          entry.key: {
            'count': entry.value.count,
            'calls_per_frame': entry.value.count / frames,
            'body_us_per_frame':
                entry.value.ticks * 1e6 / clock.frequency / frames,
            'body_us_per_call':
                entry.value.ticks * 1e6 / clock.frequency / entry.value.count,
          },
      };
    }
    return record;
  }

  @override
  void close() {}
  @override
  void dispose() {}
}

// Only the diagnostic session wraps callbacks; FPS runs use the ordinary plugin.
class _ProfiledCanvas extends FlaxPlugin {
  _ProfiledCanvas(this.probe);
  final _FrameProbe probe;
  static const canvas = FlaxCanvasPlugin();
  @override
  String get id => canvas.id;
  @override
  Set<String> get globals => canvas.globals;
  @override
  Set<String> get jsModules => canvas.jsModules;
  @override
  List<FlaxBindingModule> get bindingModules => canvas.bindingModules;
  @override
  FlaxPluginInstance install(FlaxHostContext context) =>
      canvas.install(_ProfileContext(context, probe));
}

class _ProfileContext implements FlaxHostContext {
  _ProfileContext(this.context, this.probe);
  final FlaxHostContext context;
  final _FrameProbe probe;
  @override
  void registerFunction(
    String name,
    FlaxJsHostFunction callback, {
    bool allowClosing = false,
  }) {
    context.registerFunction(name, (runtime, args) {
      final op = (args[0] as FlaxJsString).value;
      _check(
        !op.startsWith('getImageData') && op != 'convertToBlob',
        'Pixel readback is forbidden in the frame benchmark',
      );
      final metric = probe.operations.putIfAbsent(op, _Operation.new);
      final watch = Stopwatch()..start();
      try {
        return callback(runtime, args);
      } finally {
        watch.stop();
        metric.count++;
        metric.ticks += watch.elapsedTicks;
      }
    }, allowClosing: allowClosing);
  }

  @override
  String? get namespace => context.namespace;
  @override
  ui.FlaxFontCollection? get fontCollection => context.fontCollection;
  @override
  FlaxJsRuntime get runtime => context.runtime;
  @override
  List<FlaxBindingModule> get bindingModules => context.bindingModules;
  @override
  bool get isClosing => context.isClosing;
  @override
  bool get isActive => context.isActive;
  @override
  FlaxJsValue evaluate(String source, {String sourceUrl = 'flax:host'}) =>
      context.evaluate(source, sourceUrl: sourceUrl);
  @override
  FlaxJsValue evaluateSource(FlaxJsSource source) =>
      context.evaluateSource(source);
  @override
  void enqueue(void Function() action) => context.enqueue(action);
  @override
  void requestCheckpoint() => context.requestCheckpoint();
  @override
  void report(Object error, StackTrace stack) => context.report(error, stack);
  @override
  FlaxJsObject exposeObject(Object value, String typeId) =>
      context.exposeObject(value, typeId);
  @override
  T requireObject<T>(FlaxJsValue value, String typeId) =>
      context.requireObject<T>(value, typeId);
}

Future<Map<String, Object>> _bridge(FlaxJsFunction bridge) async {
  const count = 20000;
  final samples = {
    for (final mode in ['js', 'host', 'imageRefs']) mode: <double>[],
  };
  for (var round = -2; round < 9; round++) {
    final modes = samples.keys.toList();
    for (var offset = 0; offset < modes.length; offset++) {
      final mode = modes[(math.max(0, round) + offset) % modes.length];
      final watch = Stopwatch()..start();
      final result = bridge.call([
        FlaxJsString(mode),
        FlaxJsNumber(count.toDouble()),
      ]);
      watch.stop();
      _check(
        (result as FlaxJsNumber).value == count / 2,
        'Bridge loop was incomplete',
      );
      if (round >= 0) {
        samples[mode]!.add(watch.elapsedMicroseconds / (count * 2));
      }
    }
    await Future<void>.delayed(const Duration(milliseconds: 20));
  }
  return {
    'calls_per_sample': count * 2,
    'samples_us_per_call': samples,
    'host_minus_js_median_us':
        _percentile(samples['host']!, .5) - _percentile(samples['js']!, .5),
    'image_refs_median_us_per_call': _percentile(samples['imageRefs']!, .5),
  };
}

void main() {
  runZonedGuarded(
    () async {
      final binding = WidgetsFlutterBinding.ensureInitialized();
      final fixture = jsonDecode(
        File(const String.fromEnvironment('CANVAS_NATIVE_FIXTURES'))
            .readAsStringSync(),
      ) as Map;
      final files = (fixture['flax_canvas'] as Map).cast<String, String>();
      Flax.moduleAssets = await FlaxModuleAssets.load(
        bundle: _ModuleBundle(files),
        manifest: 'modules/modules.json',
      );
      final native = FlaxCanvasBindings(DynamicLibrary.process());
      final before = native.flax_canvas_dispatch(0, 10, 0, 0, 0);
      final results = <Map<String, Object>>[];
      final profiles = <Map<String, Object>>[];
      final receipt = <String, Object>{
        'complete': false,
        'platform': Platform.operatingSystem,
        'release': const bool.fromEnvironment('dart.vm.product'),
        'engine_canvas_api': native.flax_canvas_version(),
        'pixel_readback': false,
        'source_rectangles': 64,
        'target_pixels': [512, 512],
        'rounds': 3,
        'frame_results': results,
        'operation_profiles': profiles,
      };
      void save() => File(
        const String.fromEnvironment('CANVAS_DRAW_IMAGE_RECEIPT'),
      ).writeAsStringSync(const JsonEncoder.withIndent('  ').convert(receipt));
      for (final profile in [false, true]) {
        final probe = _FrameProbe();
        late FlaxJsRuntime runtime;
        final session = FlaxSession(
          createRuntime: () => runtime = FlaxV8Engine.createRuntime(),
          source: files['canvas_draw_image.js']!,
          bindings: FlaxBindingRegistry([flutterBindings]),
          plugins: [
            profile ? _ProfiledCanvas(probe) : const FlaxCanvasPlugin(),
            probe,
          ],
          onError: (error, stack) => Error.throwWithStackTrace(error, stack),
        );
        binding.addTimingsCallback(probe.onTimings);
        runApp(
          Directionality(
            textDirection: TextDirection.ltr,
            child: Center(
              child: RepaintBoundary(child: FlaxView.session(session: session)),
            ),
          ),
        );
        await binding.endOfFrame;
        // The desktop runner activates the window on its first progress log.
        print('00:00 +0: drawImage real-frame benchmark ready');
        await probe.ready.future.timeout(const Duration(seconds: 20));
        await Future<void>.delayed(const Duration(seconds: 2));
        final view = ui.PlatformDispatcher.instance.views.first;
        receipt['display_hz'] = view.display.refreshRate;
        receipt['device_pixel_ratio'] = view.devicePixelRatio;
        receipt['window_physical_size'] = [
          view.physicalSize.width,
          view.physicalSize.height,
        ];
        final hooks = runtime.getGlobal('drawImageBenchmark') as FlaxJsObject;
        final start = hooks.getProperty('start') as FlaxJsFunction;
        for (var round = 0; round < (profile ? 1 : 3); round++) {
          for (var caseIndex = 0; caseIndex < _cases.length; caseIndex++) {
            final (size, count) = _cases[(caseIndex + round) % _cases.length];
            final modes = round.isEven
                ? ['offscreen', 'bitmap']
                : ['bitmap', 'offscreen'];
            for (final mode in modes) {
              final record = await probe.run(
                start,
                mode,
                size,
                count,
                profile: profile,
              );
              record['round'] = round;
              (profile ? profiles : results).add(record);
              save();
              print(
                'CANVAS_DRAW_IMAGE ${jsonEncode({'profile': profile, 'round': round, 'size': size, 'draws': count, 'mode': mode, 'fps': record['fps_vsync'], 'cpu_us': record['cpu_submit_us'], 'raster_us': record['flutter_raster_us']})}',
              );
            }
          }
        }
        if (!profile) {
          final bridge = hooks.getProperty('bridge') as FlaxJsFunction;
          receipt['bridge'] = await _bridge(bridge);
          bridge.release();
        }
        final close = hooks.getProperty('close') as FlaxJsFunction;
        close.call([]);
        close.release();
        start.release();
        hooks.release();
        binding.removeTimingsCallback(probe.onTimings);
        runApp(const SizedBox.shrink());
        await binding.endOfFrame;
        await session.close();
      }
      final after = native.flax_canvas_dispatch(0, 10, 0, 0, 0);
      _check(before == after, 'Canvas resources leaked: $before -> $after');
      receipt['native_resources_before'] = before;
      receipt['native_resources_after'] = after;
      receipt['complete'] = true;
      save();
      print('CANVAS_DRAW_IMAGE_PASSED');
      exit(0);
    },
    (error, stack) {
      stderr.writeln('CANVAS_DRAW_IMAGE_FAILED: $error\n$stack');
      exit(1);
    },
  );
}
