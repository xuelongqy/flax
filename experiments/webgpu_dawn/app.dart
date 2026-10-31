import 'dart:async';
import 'dart:convert';
import 'dart:ffi';
import 'dart:io';
import 'dart:ui' as ui;

import 'package:flax/flax.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/scheduler.dart';
import 'package:flutter/services.dart';

const channel = MethodChannel('flax_dawn_probe');
const output = String.fromEnvironment('DAWN_PROBE_OUTPUT');
const preview = bool.fromEnvironment('DAWN_PROBE_PREVIEW');

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  Flax.moduleAssets = await FlaxModuleAssets.load(
    bundle: rootBundle,
    manifest: 'assets/flax_modules/modules.json',
  );
  runApp(
    const MaterialApp(debugShowCheckedModeBanner: false, home: ProbeApp()),
  );
}

class ReportPlugin extends FlaxPlugin {
  ReportPlugin(this.onReport);
  final void Function(Map<String, dynamic>) onReport;
  @override
  String get id => 'flax.experiment.dawn';
  @override
  Set<String> get globals => const {'__dawnProbeReport'};
  @override
  FlaxPluginInstance install(FlaxHostContext context) {
    context.registerFunction('__dawnProbeReport', (_, args) {
      onReport(
        jsonDecode((args.single as FlaxJsString).value) as Map<String, dynamic>,
      );
      return const FlaxJsUndefined();
    });
    return ReportInstance();
  }
}

class ReportInstance implements FlaxPluginInstance {
  @override
  void close() {}
  @override
  void dispose() {}
}

class ProbeApp extends StatefulWidget {
  const ProbeApp({super.key});
  @override
  State<ProbeApp> createState() => _ProbeAppState();
}

class _ProbeAppState extends State<ProbeApp> {
  final boundary = GlobalKey();
  final phases = <Map<String, dynamic>>[];
  final frameTimings = <FrameTiming>[];
  FlaxSession? session;
  FlaxJsRuntime? probeRuntime;
  DynamicLibrary? library;
  Map<String, dynamic> latest = {};
  Map<String, dynamic> compute = {};
  int? handle, textureId;
  String? failure;

  @override
  void initState() {
    super.initState();
    SchedulerBinding.instance.addTimingsCallback(_timings);
    unawaited(_run());
  }

  void _timings(List<FrameTiming> timings) {
    frameTimings.addAll(timings);
    if (frameTimings.length > 4096) {
      frameTimings.removeRange(0, frameTimings.length - 4096);
    }
  }

  Future<void> _mount(int width, int height) async {
    final info = (await channel.invokeMapMethod<String, dynamic>('create', {
      'width': width,
      'height': height,
    }))!;
    handle = info['handle'] as int;
    library ??= DynamicLibrary.open(info['libraryPath'] as String);
    latest = {};
    final source = await rootBundle.loadString('assets/scene.js');
    session = FlaxSession(
      createRuntime: () => probeRuntime = FlaxEngine.createRuntime(),
      source:
          'globalThis.__dawnProbe = {handle: BigInt("$handle"), textureId: ${info['textureId']}, libraryPath: ${jsonEncode(info['libraryPath'])}};\n$source',
      bindings: FlaxBindingRegistry([flutterBindings]),
      plugins: [
        ReportPlugin((value) {
          if (value['kind'] == 'compute') {
            compute = value;
          } else {
            latest = value;
          }
          if (mounted) setState(() {});
        }),
      ],
      onError: (error, stack) {
        failure = '$error\n$stack';
      },
    );
    await session!.ready;
    if (mounted) {
      setState(() {
        textureId = info['textureId'] as int;
      });
    }
  }

  Future<void> _unmount() async {
    final old = handle;
    final closing = session;
    if (mounted) {
      setState(() {
        session = null;
        textureId = null;
      });
    }
    await WidgetsBinding.instance.endOfFrame;
    await closing?.close();
    probeRuntime = null;
    if (old != null) await channel.invokeMethod<void>('destroy', old);
    handle = null;
    final count = library!.lookupFunction<Uint64 Function(), int Function()>(
      'dawn_probe_active_count',
    )();
    if (count != 0) {
      throw StateError('Native sessions remain after close: $count');
    }
    final live = library!.lookupFunction<Uint64 Function(), int Function()>(
      'dawn_probe_live_device_count',
    );
    final frames = library!.lookupFunction<Uint64 Function(), int Function()>(
      'dawn_probe_live_frame_count',
    );
    for (
      var attempt = 0;
      attempt < 200 && (live() != 0 || frames() != 0);
      attempt++
    ) {
      await Future<void>.delayed(const Duration(milliseconds: 10));
    }
    if (live() != 0) {
      throw StateError('Dawn devices remain after close: ${live()}');
    }
    if (frames() != 0) {
      throw StateError('GPU texture leases remain after close: ${frames()}');
    }
    if (mounted) {
      setState(() {
        textureId = null;
      });
    }
  }

  Map<String, dynamic> _distribution(Iterable<double> input) {
    final values = input.toList()..sort();
    double p(double fraction) => values.isEmpty
        ? 0
        : values[((values.length * fraction).ceil() - 1).clamp(
            0,
            values.length - 1,
          )];
    return {
      'count': values.length,
      'p50Ms': p(.5),
      'p95Ms': p(.95),
      'p99Ms': p(.99),
    };
  }

  Future<void> _capture() async {
    await WidgetsBinding.instance.endOfFrame;
    final box =
        boundary.currentContext!.findRenderObject()! as RenderRepaintBoundary;
    final image = await box.toImage(pixelRatio: 1);
    try {
      final png = (await image.toByteData(format: ui.ImageByteFormat.png))!;
      await File('$output/composite.png')
          .writeAsBytes(png.buffer.asUint8List());
      final rgba = (await image.toByteData())!.buffer.asUint8List();
      final colors = <int>{};
      // Sample the texture's center, away from the native Flutter labels.
      for (var y = image.height ~/ 3; y < image.height * 2 ~/ 3; y += 5) {
        for (var x = image.width ~/ 3; x < image.width * 2 ~/ 3; x += 5) {
          final i = (y * image.width + x) * 4;
          colors.add((rgba[i] << 16) | (rgba[i + 1] << 8) | rgba[i + 2]);
        }
      }
      if (colors.length < 20) {
        throw StateError('Texture snapshot has only ${colors.length} colors');
      }
    } finally {
      image.dispose();
    }
  }

  Future<void> _run() async {
    try {
      await Directory(output).create(recursive: true);
      for (final size in [(960, 540), (640, 360), (960, 540)]) {
        frameTimings.clear();
        await _mount(size.$1, size.$2);
        await Future<void>.delayed(const Duration(seconds: 8));
        probeRuntime!.evaluate('globalThis.__dawnProbeFlush()');
        if (failure != null) throw StateError(failure!);
        if ((latest['completed'] as num? ?? 0) < 60) {
          throw StateError('Too few completed GPU frames: $latest');
        }
        if ((latest['flutterTextureReads'] as num? ?? 0) < 30) {
          throw StateError('Flutter did not consume the texture');
        }
        if (latest['error'] != '') {
          throw StateError('Dawn validation error: ${latest['error']}');
        }
        if (latest['surfaceAllocations'] != 3 ||
            (latest['surfaceReuses'] as num? ?? 0) < 60 ||
            (latest['consumerGpuSignals'] as num? ?? 0) < 60 ||
            latest['retirementErrors'] != 0) {
          throw StateError('Texture pool/fence checks failed: $latest');
        }
        if (!mounted) throw StateError('The WebGPU acceptance view closed');
        final view = View.of(context);
        phases.add({
          ...latest,
          'viewport': {
            'devicePixelRatio': view.devicePixelRatio,
            'physicalWidth': view.physicalSize.width,
            'physicalHeight': view.physicalSize.height,
            'displayPhysicalWidth': view.display.size.width,
            'displayPhysicalHeight': view.display.size.height,
            'displayRefreshRate': view.display.refreshRate,
            'logicalWidth': view.physicalSize.width / view.devicePixelRatio,
            'logicalHeight': view.physicalSize.height / view.devicePixelRatio,
          },
          'rssBytes': ProcessInfo.currentRss,
          'flutterBuild': _distribution(
            frameTimings.map((t) => t.buildDuration.inMicroseconds / 1000),
          ),
          'flutterRaster': _distribution(
            frameTimings.map((t) => t.rasterDuration.inMicroseconds / 1000),
          ),
        });
        await _capture();
        await _unmount();
      }
      await File('$output/application.json').writeAsString(
        const JsonEncoder.withIndent('  ').convert({
          'passed': true,
          'platform': Platform.operatingSystemVersion,
          'compute': compute,
          'phases': phases,
          'closedNativeSessions': 3,
          'activeNativeSessionsAfterClose': 0,
          'liveDawnDevicesAfterClose': 0,
          'liveGpuTextureLeasesAfterClose': 0,
          'snapshotReadbacks': 3,
          'steadyStateFrameReadbacks': 0,
        }),
      );
      stdout.writeln('FLAX_DAWN_PASS');
      if (preview) {
        await _mount(960, 540);
      } else {
        exit(0);
      }
    } catch (error, stack) {
      failure = '$error\n$stack';
      try {
        if (handle != null) await _unmount();
      } catch (cleanupError) {
        failure = '$failure\nCleanup: $cleanupError';
      }
      stderr.writeln(failure);
      await File('$output/application.json')
          .writeAsString(jsonEncode({'passed': false, 'error': failure}));
      if (mounted) setState(() {});
      if (!preview) exit(1);
    }
  }

  @override
  Widget build(BuildContext context) => Scaffold(
    backgroundColor: const Color(0xff080d19),
    body: RepaintBoundary(
      key: boundary,
      child: Stack(
        children: [
          Positioned.fill(
            child: Center(
              child: ClipRRect(
                borderRadius: BorderRadius.circular(36),
                child: SizedBox(
                  width: 960,
                  height: 540,
                  child: textureId == null
                      ? const SizedBox.shrink()
                      : FlaxView.session(
                          key: ValueKey(handle),
                          session: session!,
                        ),
                ),
              ),
            ),
          ),
          Positioned(
            top: 24,
            left: 30,
            child: Text(
              'Flax × Dawn\nMetal · WGSL · IOSurface',
              style: Theme.of(context).textTheme.headlineMedium!
                  .copyWith(color: Colors.white),
            ),
          ),
          Positioned(
            left: 52,
            bottom: 110,
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 22, vertical: 16),
              decoration: BoxDecoration(
                color: Colors.black.withValues(alpha: .55),
                borderRadius: BorderRadius.circular(18),
              ),
              child: const Text(
                'Flutter text above a Dawn GPU texture',
                style: TextStyle(color: Colors.white, fontSize: 20),
              ),
            ),
          ),
          Positioned(
            left: 30,
            right: 30,
            bottom: 24,
            child: Text(
              failure ??
                  '${latest['adapter'] ?? 'Starting…'}  |  GPU frames: ${latest['completed'] ?? 0}  |  Flutter reads: ${latest['flutterTextureReads'] ?? 0}\n'
                      '${phases.length == 3 ? 'Live preview · checks passed' : 'Three create/render/close cycles · phase ${phases.length + 1}'}',
              style: TextStyle(
                color: failure == null ? Colors.white70 : Colors.redAccent,
                fontSize: 16,
              ),
            ),
          ),
        ],
      ),
    ),
  );

  @override
  void dispose() {
    SchedulerBinding.instance.removeTimingsCallback(_timings);
    super.dispose();
  }
}
