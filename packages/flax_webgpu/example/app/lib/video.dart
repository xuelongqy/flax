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

const output = String.fromEnvironment('WEBGPU_OUTPUT');
const fixture = MethodChannel('flax_webgpu_video_fixture');

@Native<Uint64 Function(Uint32)>(
  symbol: 'flax_webgpu_live',
  assetId: 'package:flax_ffi_assets/flax_native_444f38f33db59f81',
)
external int live(int kind);

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  Flax.moduleAssets = await FlaxModuleAssets.load(
    bundle: rootBundle,
    manifest: 'assets/flax_modules/modules.json',
  );
  runApp(
    const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: VideoAcceptance(),
    ),
  );
}

class VideoReportPlugin extends FlaxPlugin {
  VideoReportPlugin(this.report);
  final void Function(Map<String, dynamic>) report;

  @override
  String get id => 'flax.webgpu.video-acceptance';
  @override
  Set<String> get globals => const {'__videoReport'};
  @override
  Set<String> get jsModules => const {};
  @override
  List<FlaxBindingModule> get bindingModules => const [];

  @override
  FlaxPluginInstance install(FlaxHostContext context) {
    context.registerFunction('__videoReport', (_, args) {
      report(
        (jsonDecode((args.single as FlaxJsString).value) as Map)
            .cast<String, dynamic>(),
      );
      return const FlaxJsUndefined();
    });
    return VideoReportInstance();
  }
}

class VideoReportInstance implements FlaxPluginInstance {
  @override
  void close() {}
  @override
  void dispose() {}
}

class VideoAcceptance extends StatefulWidget {
  const VideoAcceptance({super.key});

  @override
  State<VideoAcceptance> createState() => _VideoAcceptanceState();
}

class _VideoAcceptanceState extends State<VideoAcceptance> {
  final boundary = GlobalKey();
  final sourceBoundary = GlobalKey();
  int? textureId;
  bool showSource = true;
  final captures = <Map<String, Object>>[];
  final timings = <List<int>>[];
  final phases = <Map<String, Object?>>[];
  late FlaxJsRuntime runtime;
  FlaxSession? session;
  String? measurement;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addTimingsCallback(recordTimings);
    unawaited(start());
  }

  void recordTimings(List<ui.FrameTiming> values) {
    if (measurement == null) return;
    for (final value in values) {
      timings.add([
        value.buildDuration.inMicroseconds,
        value.rasterDuration.inMicroseconds,
        value.totalSpan.inMicroseconds,
      ]);
    }
  }

  Future<void> start() async {
    try {
      final view = WidgetsBinding.instance.platformDispatcher.views.first;
      final sourceInfo = (await fixture.invokeMapMethod<String, Object>(
        'source',
      ))!;
      textureId = sourceInfo['textureId'] as int;
      final config = {
        'modeOrder':
            Platform.environment['FLAX_WEBGPU_VIDEO_ORDER'] ?? 'direct,three',
        'refreshRate': view.display.refreshRate,
      };
      final source = await rootBundle.loadString('assets/app.js');
      final value = FlaxSession(
        createRuntime: () => runtime = FlaxEngine.createRuntime(),
        source: 'globalThis.__videoConfig=${jsonEncode(config)};\n$source',
        bindings: FlaxBindingRegistry([flutterBindings]),
        plugins: [
          FlaxWebGpuPlugin(
            videoSources: {'movie': sourceInfo['sourceId'] as String},
          ),
          VideoReportPlugin(report),
        ],
        onError: (error, stack) => fail('$error\n$stack'),
      );
      session = value;
      await value.ready;
      if (mounted) setState(() {});
    } catch (error, stack) {
      fail('$error\n$stack');
    }
  }

  void report(Map<String, dynamic> value) {
    switch (value['kind']) {
      case 'capture':
        unawaited(capture(value['name'] as String));
      case 'source':
        unawaited(sourceCommand(value));
      case 'start':
        timings.clear();
        measurement = value['mode'] as String;
        stderr.writeln('Measuring $measurement');
      case 'stop':
        phases.add({'mode': measurement, 'flutterFrames': timings.toList()});
        measurement = null;
      case 'complete':
        unawaited(finish(value));
      case 'failure':
        fail(value['error'].toString());
      default:
        fail('Unexpected report $value');
    }
  }

  void returnToJs(String name, Object? result) {
    final evaluated = runtime.evaluate(
      'globalThis.$name=${jsonEncode(result)};undefined;',
    );
    if (evaluated is FlaxJsObject) evaluated.release();
  }

  Future<void> sourceCommand(Map<String, dynamic> request) async {
    try {
      final method = request['method'] as String;
      if (method == 'load' || method == 'play' || method == 'dispose') {
        setState(() => showSource = method == 'load');
      }
      final result = await fixture.invokeMethod<Object?>(
        method,
        request['argument'],
      );
      returnToJs('__videoSourceReply', {'value': result});
    } catch (error) {
      returnToJs('__videoSourceReply', {'error': error.toString()});
    }
  }

  Future<void> capture(String name) async {
    try {
      await WidgetsBinding.instance.endOfFrame;
      final capture = await pixels(boundary, name);
      final flutter = await pixels(sourceBoundary);
      final result = {
        'name': name,
        ...capture,
        'flutterTexture': flutter['topLeft']!,
      };
      captures.add(result);
      returnToJs('__videoCapture', result);
    } catch (error, stack) {
      fail('$error\n$stack');
    }
  }

  Future<Map<String, Object>> pixels(GlobalKey key, [String? name]) async {
    final image =
        await (key.currentContext!.findRenderObject() as RenderRepaintBoundary)
            .toImage(pixelRatio: 1);
    try {
      final bytes = (await image.toByteData(
        format: ui.ImageByteFormat.rawRgba,
      ))!;
      List<int> sample(double x, double y) {
        final offset =
            ((image.width * x).floor() +
                (image.height * y).floor() * image.width) *
            4;
        return List.generate(4, (channel) => bytes.getUint8(offset + channel));
      }

      if (name != null) {
        final png = (await image.toByteData(format: ui.ImageByteFormat.png))!;
        File('$output/$name.png').writeAsBytesSync(png.buffer.asUint8List());
      }
      return {
        'size': [image.width, image.height],
        'topLeft': sample(.16, .16),
        'topRight': sample(.84, .16),
        'bottomRight': sample(.84, .84),
      };
    } finally {
      image.dispose();
    }
  }

  Future<void> finish(Map<String, dynamic> value) async {
    try {
      final before = List.generate(14, live);
      if (before[10] == 0 || before[11] == 0) {
        throw StateError('Missing live video frame at session shutdown');
      }
      final old = session!;
      setState(() => session = null);
      await WidgetsBinding.instance.endOfFrame;
      await old.close();
      List<int> after;
      final deadline = Stopwatch()..start();
      do {
        after = List.generate(14, live);
        if (after.every((count) => count == 0)) break;
        await Future<void>.delayed(const Duration(milliseconds: 10));
        WidgetsBinding.instance.scheduleFrame();
      } while (deadline.elapsedMilliseconds < 2500);
      if (after.any((count) => count != 0)) {
        throw StateError('WebGPU resources did not retire: $after');
      }
      write({
        'passed': true,
        ...value,
        'captures': captures,
        'flutter': phases,
        'resourcesBeforeClose': before,
        'resourcesAfterClose': after,
      });
      exit(0);
    } catch (error, stack) {
      fail('$error\n$stack');
    }
  }

  void write(Map<String, Object?> value) {
    final name = Platform.environment['FLAX_WEBGPU_VIDEO_RUN'] ?? 'application';
    File('$output/$name.json').writeAsStringSync(jsonEncode(value));
  }

  Never fail(String message) {
    write({'passed': false, 'error': message, 'captures': captures});
    stderr.writeln(message);
    exit(1);
  }

  @override
  Widget build(BuildContext context) => Scaffold(
    body: Center(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          RepaintBoundary(
            key: boundary,
            child: SizedBox(
              width: 960,
              height: 540,
              child: session == null
                  ? const SizedBox()
                  : FlaxView.session(session: session!),
            ),
          ),
          if (showSource && textureId != null)
            RepaintBoundary(
              key: sourceBoundary,
              child: SizedBox(
                width: 192,
                height: 108,
                child: Texture(textureId: textureId!),
              ),
            ),
        ],
      ),
    ),
  );

  @override
  void dispose() {
    WidgetsBinding.instance.removeTimingsCallback(recordTimings);
    unawaited(session?.close());
    super.dispose();
  }
}
