import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:ui' as ui;

import 'package:flax/flax.dart';
import 'package:flax_webgpu/flax_webgpu.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

const _channel = MethodChannel('flax.webgpu.color_benchmark');

Future<void> main() async {
  final binding = WidgetsFlutterBinding.ensureInitialized();
  final config = Platform.environment['FLAX_WEBGPU_COLOR_BENCHMARK']!;
  final report = Completer<Map<String, Object?>>();
  final timings = <ui.FrameTiming>[];
  final marks = <int>[];
  final metadata = <Future<Object?>>[];
  void mark(bool start) {
    if (start ? marks.isNotEmpty : marks.length != 1) {
      throw StateError('Unexpected measurement boundary');
    }
    marks.add(binding.currentSystemFrameTimeStamp.inMicroseconds);
    metadata.add(_channel.invokeMethod<Object?>('metadata'));
  }

  Flax.moduleAssets = await FlaxModuleAssets.load(
    bundle: rootBundle,
    manifest: 'assets/flax_modules/modules.json',
  );
  final session = FlaxSession(
    createRuntime: FlaxEngine.createRuntime,
    entryUri: Uri.parse('flax:///app.js'),
    source:
        'globalThis.__colorBenchmark = $config;\n'
        '${await rootBundle.loadString('assets/app.js')}',
    bindings: FlaxBindingRegistry([flutterBindings]),
    plugins: [const FlaxWebGpuPlugin(), _ReportPlugin(report, mark)],
    onError: (error, stack) {
      if (!report.isCompleted) report.completeError(error, stack);
    },
  );
  binding.addTimingsCallback(timings.addAll);
  runApp(
    MaterialApp(
      debugShowCheckedModeBanner: false,
      home: ColoredBox(
        color: const Color(0xff202020),
        child: Center(
          child: SizedBox(
            width: 960,
            height: 540,
            child: FlaxView.session(session: session),
          ),
        ),
      ),
    ),
  );
  final receipt = <String, Object?>{};
  var status = 0;
  try {
    final webgpu = await report.future.timeout(const Duration(seconds: 50));
    receipt['webgpu'] = webgpu;
    if (webgpu['error'] != null || marks.length != 2) {
      throw StateError('WebGPU measurement failed');
    }
    receipt['window'] = await Future.wait(metadata);
    // The Release engine delivers FrameTiming to Dart in one-second batches.
    await Future<void>.delayed(const Duration(milliseconds: 1200));
    final firstView = binding.platformDispatcher.implicitView!;
    final size = firstView.physicalSize;
    receipt['flutter'] = {
      'physicalViewport': [size.width, size.height],
      'devicePixelRatio': firstView.devicePixelRatio,
      'measurementTimestampsUs': marks,
      'frames': [
        for (final timing in timings)
          if (timing.timestampInMicroseconds(ui.FramePhase.buildStart) >=
                  marks[0] &&
              timing.timestampInMicroseconds(ui.FramePhase.buildStart) <
                  marks[1])
            {
              'number': timing.frameNumber,
              'rasterUs': timing.rasterDuration.inMicroseconds,
            },
      ],
    };
  } catch (error, stack) {
    receipt['error'] = '$error';
    stderr.writeln(stack);
    status = 1;
  } finally {
    binding.removeTimingsCallback(timings.addAll);
    runApp(const SizedBox.shrink());
    try {
      await binding.endOfFrame;
      await session.close().timeout(const Duration(seconds: 10));
    } catch (error) {
      receipt['shutdownError'] = '$error';
      status = 1;
    }
    stdout.writeln('FLAX_WEBGPU_COLOR_BENCHMARK ${jsonEncode(receipt)}');
    await stdout.flush();
    exit(status);
  }
}

class _ReportPlugin extends FlaxPlugin {
  _ReportPlugin(this.report, this.mark);
  final Completer<Map<String, Object?>> report;
  final void Function(bool) mark;

  @override
  String get id => 'flax.webgpu.color-benchmark';
  @override
  Set<String> get globals => const {
    '__colorBenchmarkReport',
    '__colorBenchmarkMark',
  };
  @override
  Set<String> get jsModules => const {};
  @override
  List<FlaxBindingModule> get bindingModules => const [];

  @override
  FlaxPluginInstance install(FlaxHostContext context) {
    context.registerFunction('__colorBenchmarkReport', (_, args) {
      if (!report.isCompleted) {
        report.complete(
          (jsonDecode((args.single as FlaxJsString).value) as Map)
              .cast<String, Object?>(),
        );
      }
      return const FlaxJsUndefined();
    });
    context.registerFunction('__colorBenchmarkMark', (_, args) {
      mark((args.single as FlaxJsBoolean).value);
      return const FlaxJsUndefined();
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
