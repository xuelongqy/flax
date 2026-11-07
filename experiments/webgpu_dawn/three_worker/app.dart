import 'dart:async';
import 'dart:convert';
import 'dart:developer' as developer;
import 'dart:ffi';
import 'dart:io';
import 'dart:ui' as ui;

import 'package:flax/flax.dart';
import 'package:flax/src/native/native_runtime.dart';
import 'package:flax_example_support/flax_example_support.dart';
import 'package:flax_webgpu/flax_webgpu.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';

@Native<Uint64 Function(Uint32)>(
  symbol: 'flax_webgpu_live',
  assetId: 'package:flax_ffi_assets/flax_native_444f38f33db59f81',
)
external int live(int kind);

const output = String.fromEnvironment('WEBGPU_OUTPUT');
late final HttpServer server;
late final FlaxPermissionPolicy permissions;
late final int hostBegan;

Future<void> main() async {
  hostBegan = developer.Timeline.now;
  WidgetsFlutterBinding.ensureInitialized();
  server = await HttpServer.bind(InternetAddress.loopbackIPv4, 0);
  permissions = await approveTrustedExamplePermissions(
    'example.webgpu.three-benchmark',
    manifest: FlaxPermissionManifest(
      appId: 'example.webgpu.three-benchmark',
      defaultLocale: 'en',
      permissions: {
        for (final id in ['flax.network', 'flax.module.remote'])
          id: FlaxPermissionDeclaration(
            purpose: const {'en': 'Load the checked-in Three.js benchmark'},
            scope: {
              'origins': ['http://127.0.0.1:${server.port}'],
            },
          ),
        'flax.wasm': FlaxPermissionDeclaration(
          purpose: const {'en': 'Decode the checked-in KTX2 texture'},
        ),
      },
    ),
  );
  const assets = {
    '/scene.js': 'application/javascript',
    '/renderer-worker.js': 'application/javascript',
    '/textured-cube.glb': 'model/gltf-binary',
    '/skinned.gltf': 'model/gltf+json',
    '/morph.gltf': 'model/gltf+json',
    '/advanced.bin': 'application/octet-stream',
    '/checker.png': 'image/png',
    '/worker-pattern-uastc-zstd.ktx2': 'image/ktx2',
    '/basis/basis_transcoder.js': 'application/javascript',
    '/basis/basis_transcoder.wasm': 'application/wasm',
  };
  server.listen((request) async {
    try {
      final mime = assets[request.uri.path];
      if (request.method != 'GET' || mime == null) {
        request.response.statusCode = HttpStatus.notFound;
      } else {
        final bytes = await rootBundle.load('assets/three${request.uri.path}');
        request.response.headers.contentType = ContentType.parse(mime);
        request.response.headers.set(
          HttpHeaders.cacheControlHeader,
          'no-store',
        );
        request.response.contentLength = bytes.lengthInBytes;
        request.response.add(
          bytes.buffer.asUint8List(bytes.offsetInBytes, bytes.lengthInBytes),
        );
      }
    } finally {
      await request.response.close();
    }
  });
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
  String get id => 'flax.webgpu.three-benchmark';
  @override
  Set<String> get globals => const {'__webGpuReport'};
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
    return ReportInstance();
  }
}

class ReportInstance implements FlaxPluginInstance {
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
  final phases = <Map<String, Object>>[];
  final frames = <Map<String, Object>>[];
  final captures = <Map<String, Object>>[];
  late FlaxNativeJsRuntime runtime;
  FlaxSession? session;
  var currentCase = '';
  var currentPhase = 'startup';

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addTimingsCallback(recordTimings);
    unawaited(start());
  }

  void recordTimings(List<ui.FrameTiming> values) {
    final received = developer.Timeline.now;
    for (final value in values) {
      frames.add({
        'vsyncStartMicros': value.timestampInMicroseconds(
          ui.FramePhase.vsyncStart,
        ),
        'buildStartMicros': value.timestampInMicroseconds(
          ui.FramePhase.buildStart,
        ),
        'buildFinishMicros': value.timestampInMicroseconds(
          ui.FramePhase.buildFinish,
        ),
        'rasterStartMicros': value.timestampInMicroseconds(
          ui.FramePhase.rasterStart,
        ),
        'rasterFinishMicros': value.timestampInMicroseconds(
          ui.FramePhase.rasterFinish,
        ),
        'buildMs': value.buildDuration.inMicroseconds / 1000,
        'rasterMs': value.rasterDuration.inMicroseconds / 1000,
        'totalSpanMs': value.totalSpan.inMicroseconds / 1000,
        'receivedTimelineMicros': received,
      });
    }
  }

  Future<void> start() async {
    try {
      final configured = (jsonDecode(
        Platform.environment['FLAX_THREE_CONFIG'] ?? '{"arm":"main"}',
      ) as Map).cast<String, dynamic>();
      final view = WidgetsBinding.instance.platformDispatcher.views.first;
      final config = {
        ...configured,
        'baseUrl': 'http://127.0.0.1:${server.port}/',
        'refreshRate': view.display.refreshRate,
      };
      final source = await rootBundle.loadString('assets/app.js');
      final value = FlaxSession(
        permissions: permissions,
        permissionManifest: permissions.application.manifest,
        createRuntime: () =>
            runtime = FlaxEngine.createRuntime() as FlaxNativeJsRuntime,
        entryUri: Uri.parse('flax:///three-benchmark.js'),
        source:
            'globalThis.__threeBenchmarkConfig=${jsonEncode(config)};\n$source',
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

  void report(Map<String, dynamic> value) {
    if (value['error'] != null) {
      fail(value['error'].toString());
      return;
    }
    if (value['kind'] == 'phase') {
      final lifecycle = WidgetsBinding.instance.lifecycleState;
      currentCase = value['name'] as String;
      currentPhase = value['phase'] as String;
      phases.add({
        'name': currentCase,
        'phase': currentPhase,
        'timelineMicros': developer.Timeline.now,
        'epochMs': DateTime.now().millisecondsSinceEpoch,
        'lifecycleState': lifecycle?.name ?? 'unknown',
      });
      if ((value['phase'] == 'throughput-and-tail' ||
              value['phase'] == 'latency') &&
          lifecycle != AppLifecycleState.resumed) {
        fail('The native benchmark must remain in the foreground: $lifecycle');
        return;
      }
    } else if (value['kind'] == 'capture') {
      unawaited(capture(value['name'] as String));
    } else if (value['kind'] == 'complete') {
      unawaited(finish(value));
    } else {
      fail('Unknown benchmark report: ${value['kind']}');
    }
  }

  Future<void> capture(String name) async {
    try {
      await WidgetsBinding.instance.endOfFrame;
      final image =
          await (boundary.currentContext!.findRenderObject()
                  as RenderRepaintBoundary)
              .toImage(pixelRatio: 1);
      final bytes = await image.toByteData(format: ui.ImageByteFormat.rawRgba);
      var colored = 0;
      for (var i = 0; i < bytes!.lengthInBytes; i += 4) {
        final r = bytes.getUint8(i),
            g = bytes.getUint8(i + 1),
            b = bytes.getUint8(i + 2);
        if ((r > 40 && r < 240) || (g > 40 && g < 240) || (b > 40 && b < 240)) {
          colored++;
        }
      }
      final png = await image.toByteData(format: ui.ImageByteFormat.png);
      File('$output/$name-flutter.png')
          .writeAsBytesSync(png!.buffer.asUint8List());
      final result = {
        'passed': colored > 1000 && image.width == 880 && image.height == 495,
        'name': name,
        'coloredPixels': colored,
        'logicalCanvas': [image.width, image.height],
      };
      image.dispose();
      captures.add(result);
      final evaluated = runtime.evaluate(
        'globalThis.__threeBenchmarkCapture=${jsonEncode(result)};undefined;',
      );
      if (evaluated is FlaxJsObject) evaluated.release();
    } catch (error, stack) {
      fail('$error\n$stack');
    }
  }

  Future<void> finish(Map<String, dynamic> result) async {
    try {
      final before = List.generate(10, live);
      final workersBefore = runtime.workerCountsForTesting();
      final old = session!;
      setState(() => session = null);
      await WidgetsBinding.instance.endOfFrame;
      await old.close();
      for (
        var i = 0;
        i < 300 &&
            (List.generate(10, live).any((v) => v != 0) ||
                runtime.workerCountsForTesting() != (0, 0));
        i++
      ) {
        await Future<void>.delayed(const Duration(milliseconds: 10));
        WidgetsBinding.instance.scheduleFrame();
      }
      final retired = List.generate(10, live);
      final workersAfter = runtime.workerCountsForTesting();
      if (retired.any((v) => v != 0) || workersAfter != (0, 0)) {
        throw StateError('Resources did not retire: $retired / $workersAfter');
      }
      final view = WidgetsBinding.instance.platformDispatcher.views.first;
      final clockDeltas = frames
          .map(
            (f) =>
                (f['receivedTimelineMicros'] as int) -
                (f['vsyncStartMicros'] as int),
          )
          .toList();
      final clockComparable =
          clockDeltas.isNotEmpty &&
          clockDeltas.every((v) => v >= 0 && v < 30000000);
      File('$output/application.json').writeAsStringSync(
        jsonEncode({
          ...result,
          'startup': {
            'hostMainToWarmupStartMs':
                ((phases.firstWhere(
                          (p) => p['phase'] == 'warmup',
                        )['timelineMicros']
                        as int) -
                    hostBegan) /
                1000,
          },
          'viewport': {
            'width': view.physicalSize.width / view.devicePixelRatio,
            'height': view.physicalSize.height / view.devicePixelRatio,
            'devicePixelRatio': view.devicePixelRatio,
            'displayWidth': view.display.size.width,
            'displayHeight': view.display.size.height,
            'displayRefreshRate': view.display.refreshRate,
          },
          'diagnostics': {
            'host': 'Flutter FrameTiming; not comparable to browser Long Tasks',
            'hostBeganTimelineMicros': hostBegan,
            'phases': phases,
            'frames': frames,
            'timelineClockCheck': {
              'sameMicrosecondDomainObserved': clockComparable,
              'minReceiptMinusVsyncMicros': clockDeltas.isEmpty
                  ? null
                  : clockDeltas.reduce((a, b) => a < b ? a : b),
              'maxReceiptMinusVsyncMicros': clockDeltas.isEmpty
                  ? null
                  : clockDeltas.reduce((a, b) => a > b ? a : b),
            },
          },
          'captures': captures,
          'retirement': {
            'before': before,
            'after': retired,
            'workersBefore': [workersBefore.$1, workersBefore.$2],
            'workersAfter': [workersAfter.$1, workersAfter.$2],
          },
        }),
      );
      await server.close(force: true);
      exit(0);
    } catch (error, stack) {
      fail('$error\n$stack');
    }
  }

  void fail(String error) {
    final contextual =
        '${currentCase.isEmpty ? '<startup>' : currentCase}/$currentPhase: $error';
    File('$output/application.json').writeAsStringSync(
      jsonEncode({
        'passed': false,
        'error': contextual,
        'failedEpochMs': DateTime.now().millisecondsSinceEpoch,
        'currentCase': currentCase,
        'currentPhase': currentPhase,
        'diagnostics': {'phases': phases, 'frames': frames},
        'captures': captures,
      }),
    );
    stderr.writeln(contextual);
    exit(1);
  }

  @override
  Widget build(BuildContext context) => Scaffold(
    body: Center(
      child: RepaintBoundary(
        key: boundary,
        child: SizedBox(
          width: 880,
          height: 495,
          child: session == null
              ? const SizedBox()
              : FlaxView.session(session: session!),
        ),
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
