import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:ffi';
import 'dart:ui' as ui;

import 'package:flax/flax.dart';
import 'package:flax_webgpu/flax_webgpu.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';

// Stable code asset identity produced for @flax/webgpu/dawn by @flax/build.
@Native<Uint64 Function(Uint32)>(
  symbol: 'flax_webgpu_live',
  assetId: 'package:flax_ffi_assets/flax_native_444f38f33db59f81',
)
external int live(int kind);

const output = String.fromEnvironment('WEBGPU_OUTPUT');
const preview = bool.fromEnvironment('WEBGPU_PREVIEW');

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  Flax.moduleAssets = await FlaxModuleAssets.load(
    bundle: rootBundle,
    manifest: 'assets/flax_modules/modules.json',
  );
  runApp(
    const MaterialApp(debugShowCheckedModeBanner: false, home: Benchmark()),
  );
}

class ReportPlugin extends FlaxPlugin {
  ReportPlugin(this.report);
  final void Function(Map<String, dynamic>) report;
  @override
  String get id => 'flax.webgpu.acceptance';
  @override
  Set<String> get globals => const {'__webGpuReport', '__webGpuRejectShared'};
  @override
  Set<String> get jsModules => const {};
  @override
  List<FlaxBindingModule> get bindingModules => const [];
  @override
  FlaxPluginInstance install(FlaxHostContext context) {
    context.registerFunction('__webGpuReport', (_, args) {
      report(
        (jsonDecode((args.single as FlaxJsString).value) as Map)
            .cast<String, dynamic>(),
      );
      return const FlaxJsUndefined();
    });
    context.registerFunction('__webGpuRejectShared', (_, args) {
      try {
        context.runtime.readUint8Array(args.single as FlaxJsObject);
        return const FlaxJsBoolean(false);
      } catch (error) {
        if (!error.toString().contains(
          'Mapped GPU buffers require copied byte access',
        )) {
          rethrow;
        }
        return const FlaxJsBoolean(true);
      }
    });
    return _ReportInstance();
  }
}

class _ReportInstance implements FlaxPluginInstance {
  @override
  void close() {}
  @override
  void dispose() {}
}

class Benchmark extends StatefulWidget {
  const Benchmark({super.key});
  @override
  State<Benchmark> createState() => _BenchmarkState();
}

class _BenchmarkState extends State<Benchmark> {
  final boundary = GlobalKey();
  FlaxSession? session;
  final results = <Map<String, dynamic>>[];
  var cycle = 0;
  final timings = <ui.FrameTiming>[];

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addTimingsCallback(recordTimings);
    unawaited(start());
  }

  void recordTimings(List<ui.FrameTiming> values) {
    timings.addAll(values);
  }

  Future<void> start() async {
    try {
      timings.clear();
      final source = await rootBundle.loadString('assets/app.js');
      final config = {
        'width': cycle == 1 ? 640 : 960,
        'height': cycle == 1 ? 360 : 540,
        'gpuTiming': Platform.environment['FLAX_WEBGPU_GPU_TIMING'] == '1',
        'detailed': Platform.environment['FLAX_WEBGPU_DETAILED'] == '1',
        'durationMs': 8000,
      };
      final value = FlaxSession(
        createRuntime: FlaxEngine.createRuntime,
        source:
            '''
globalThis.__benchmarkConfig = ${jsonEncode(config)};
$source
''',
        bindings: FlaxBindingRegistry([flutterBindings]),
        plugins: [const FlaxWebGpuPlugin(), ReportPlugin(report)],
        onError: (error, stack) => fail('$error\n$stack'),
      );
      session = value;
      await value.ready;
      if (mounted) setState(() {});
    } catch (error, stack) {
      fail('$error\n$stack');
    }
  }

  void fail(String message) {
    if (output.isNotEmpty) {
      File('$output/application.json')
          .writeAsStringSync(jsonEncode({'passed': false, 'error': message}));
    }
    stderr.writeln(message);
    if (!preview) exit(1);
  }

  void report(Map<String, dynamic> value) {
    if (value['error'] != null && value['error'] != '') {
      fail(value['error'].toString());
      return;
    }
    final view = WidgetsBinding.instance.platformDispatcher.views.first;
    final recorded = timings.skip(40).toList();
    if (recorded.length < 30) {
      fail('Too few Flutter timing samples');
      return;
    }
    results.add({
      ...value,
      'cycle': cycle,
      'flutterFrameTimingWarmupSkipped': 40,
      'flutterBuild': distribution(
        recorded.map((v) => v.buildDuration.inMicroseconds / 1000).toList(),
      ),
      'flutterRaster': distribution(
        recorded.map((v) => v.rasterDuration.inMicroseconds / 1000).toList(),
      ),
      'viewport': {
        'logicalWidth': view.physicalSize.width / view.devicePixelRatio,
        'logicalHeight': view.physicalSize.height / view.devicePixelRatio,
        'devicePixelRatio': view.devicePixelRatio,
        'displayPhysicalWidth': view.display.size.width,
        'displayPhysicalHeight': view.display.size.height,
      },
    });
    if (value['kind'] == 'rendered') unawaited(finish());
  }

  Future<void> finish() async {
    try {
      await WidgetsBinding.instance.endOfFrame;
      final image =
          await (boundary.currentContext!.findRenderObject()
                  as RenderRepaintBoundary)
              .toImage(pixelRatio: 1);
      final bytes = await image.toByteData(format: ui.ImageByteFormat.rawRgba);
      var colored = 0;
      for (var i = 0; i < bytes!.lengthInBytes; i += 4) {
        if (bytes.getUint8(i) > 30 &&
            bytes.getUint8(i) < 230 &&
            bytes.getUint8(i + 1) > 30 &&
            bytes.getUint8(i + 1) < 230) {
          colored++;
        }
      }
      final png = await image.toByteData(format: ui.ImageByteFormat.png);
      if (output.isNotEmpty) {
        File('$output/screenshot.png')
            .writeAsBytesSync(png!.buffer.asUint8List());
      }
      image.dispose();
      if (colored < 10000) {
        throw StateError(
          'The WebGPU canvas did not composite: $colored pixels',
        );
      }
      if (!preview) {
        final old = session;
        final active = List.generate(6, live);
        setState(() => session = null);
        await WidgetsBinding.instance.endOfFrame;
        await old!.close();
        for (
          var attempt = 0;
          attempt < 200 && List.generate(5, live).any((value) => value != 0);
          attempt++
        ) {
          await Future<void>.delayed(const Duration(milliseconds: 10));
          WidgetsBinding.instance.scheduleFrame();
        }
        final retired = List.generate(6, live);
        if (retired.any((value) => value != 0)) {
          throw StateError('GPU resources did not retire: $retired');
        }
        results.add({
          'kind': 'retired',
          'cycle': cycle,
          'before': active,
          'after': retired,
        });
        if (++cycle < 3) {
          await start();
          return;
        }
        if (output.isNotEmpty) {
          File('$output/application.json').writeAsStringSync(
            jsonEncode({
              'passed': true,
              'checks': results,
              'coloredPixels': colored,
            }),
          );
        }
        exit(0);
      }
    } catch (error, stack) {
      fail('$error\n$stack');
    }
  }

  @override
  Widget build(BuildContext context) {
    final value = session;
    return Scaffold(
      body: Center(
        child: RepaintBoundary(
          key: boundary,
          child: SizedBox(
            width: 960,
            height: 540,
            child: value == null
                ? const SizedBox()
                : FlaxView.session(session: value),
          ),
        ),
      ),
    );
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeTimingsCallback(recordTimings);
    unawaited(session?.close());
    super.dispose();
  }
}

Map<String, Object> distribution(List<double> values) {
  values.sort();
  double percentile(double fraction) =>
      values.isEmpty ? 0 : values[(values.length * fraction).ceil() - 1];
  return {
    'count': values.length,
    'p50Ms': percentile(.5),
    'p95Ms': percentile(.95),
    'p99Ms': percentile(.99),
  };
}
