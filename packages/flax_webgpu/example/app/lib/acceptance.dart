import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:ffi';
import 'dart:ui' as ui;

import 'package:flax/flax.dart';
import 'package:flax/src/native/native_runtime.dart';
import 'package:flax_canvas/flax_canvas.dart';
import 'package:flax_example_support/flax_example_support.dart';
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
final cycles = int.parse(Platform.environment['FLAX_WEBGPU_CYCLES'] ?? '3');
late final HttpServer modelServer;
late final FlaxPermissionPolicy trustedPermissions;

Future<void> main() async {
  if (cycles < 1 || cycles > 30) {
    throw ArgumentError('FLAX_WEBGPU_CYCLES must be between 1 and 30');
  }
  WidgetsFlutterBinding.ensureInitialized();
  modelServer = await HttpServer.bind(InternetAddress.loopbackIPv4, 0);
  trustedPermissions = await approveTrustedExamplePermissions(
    'example.webgpu.acceptance',
    manifest: FlaxPermissionManifest(
      appId: 'example.webgpu.acceptance',
      defaultLocale: 'en',
      permissions: {
        'flax.network': FlaxPermissionDeclaration(
          purpose: const {
            'en': 'Load checked-in Three fixtures from the local host',
          },
          scope: {
            'origins': ['http://127.0.0.1:${modelServer.port}'],
          },
        ),
        'flax.module.remote': FlaxPermissionDeclaration(
          purpose: const {'en': 'Load the checked-in Three.js renderer Worker'},
          scope: {
            'origins': ['http://127.0.0.1:${modelServer.port}'],
          },
        ),
        'flax.wasm': FlaxPermissionDeclaration(
          purpose: {'en': 'Decode checked-in Draco, Meshopt and KTX fixtures'},
        ),
      },
    ),
  );
  modelServer.listen((request) async {
    const assets = {
      '/three-renderer-worker.js': 'application/javascript',
      '/textured-cube.gltf': 'model/gltf+json',
      '/textured-cube.glb': 'model/gltf-binary',
      '/geometry.bin': 'application/octet-stream',
      '/checker.png': 'image/png',
      '/skinned.gltf': 'model/gltf+json',
      '/morph.gltf': 'model/gltf+json',
      '/meshopt.gltf': 'model/gltf+json',
      '/advanced.bin': 'application/octet-stream',
      '/meshopt.bin': 'application/octet-stream',
      '/worker-quad.drc': 'application/octet-stream',
      '/draco/draco_wasm_wrapper.js': 'application/javascript',
      '/draco/draco_decoder.wasm': 'application/wasm',
      '/worker-red-etc1s.ktx2': 'image/ktx2',
      '/worker-red-uastc.ktx2': 'image/ktx2',
      '/worker-pattern.png': 'image/png',
      '/worker-pattern-etc1s.ktx2': 'image/ktx2',
      '/worker-pattern-uastc.ktx2': 'image/ktx2',
      '/worker-pattern-uastc-zstd.ktx2': 'image/ktx2',
      '/worker-grid.json': 'application/json',
      '/worker-grid.meshopt.bin': 'application/octet-stream',
      '/worker-combined.bin': 'application/octet-stream',
      '/worker-combined.gltf': 'model/gltf+json',
      '/worker-combined.glb': 'model/gltf-binary',
      '/worker-reference.gltf': 'model/gltf+json',
      '/basis/basis_transcoder.js': 'application/javascript',
      '/basis/basis_transcoder.wasm': 'application/wasm',
    };
    final mime = assets[request.uri.path];
    if (request.method != 'GET' || mime == null) {
      request.response.statusCode = HttpStatus.notFound;
    } else {
      final bytes = await rootBundle.load('assets/three${request.uri.path}');
      request.response.headers.contentType = ContentType.parse(mime);
      request.response.contentLength = bytes.lengthInBytes;
      request.response.add(
        bytes.buffer.asUint8List(bytes.offsetInBytes, bytes.lengthInBytes),
      );
    }
    await request.response.close();
  });
  Flax.moduleAssets = await FlaxModuleAssets.load(
    bundle: rootBundle,
    manifest: 'assets/flax_modules/modules.json',
  );
  runApp(
    const MaterialApp(debugShowCheckedModeBanner: false, home: Acceptance()),
  );
}

class ReportPlugin extends FlaxPlugin {
  ReportPlugin(this.report);
  final void Function(Map<String, dynamic>) report;
  @override
  String get id => 'flax.webgpu.acceptance';
  @override
  Set<String> get globals => const {
    '__webGpuReport',
    '__webGpuRejectShared',
    '__threeWorkerState',
    '__webGpuCollect',
  };
  @override
  Set<String> get jsModules => const {};
  @override
  List<FlaxBindingModule> get bindingModules => const [];
  @override
  FlaxPluginInstance install(FlaxHostContext context) {
    final engine = DynamicLibrary.process();
    if (engine.providesSymbol('flax_ffi_dlopen_collect_session_pending')) {
      final collect = engine
          .lookupFunction<
            Int32 Function(Pointer<Void>),
            int Function(Pointer<Void>)
          >('flax_ffi_dlopen_collect_session_pending');
      context.registerFunction('__webGpuCollect', (_, args) {
        // The instrumented engine requires an idle owning isolate, outside a JS call.
        Timer.run(() {
          if (!context.isActive || context.isClosing) return;
          final result = collect(nullptr);
          if (result != 0) {
            context.report(
              StateError('Test-only GPU device collection failed: $result'),
              StackTrace.current,
            );
            return;
          }
          context.enqueue(() {
            final value = context.evaluate(
              'globalThis.__webGpuGcEpoch = (globalThis.__webGpuGcEpoch ?? 0) + 1; undefined;',
            );
            if (value is FlaxJsObject) value.release();
          });
        });
        return const FlaxJsUndefined();
      });
    }
    context.registerFunction('__threeWorkerState', (_, args) {
      final counts = (context.runtime as FlaxNativeJsRuntime)
          .workerCountsForTesting();
      return FlaxJsString(
        jsonEncode({
          'workers': [counts.$1, counts.$2],
          'gpu': List.generate(10, live),
          'rss': ProcessInfo.currentRss,
          'peakRss': ProcessInfo.maxRss,
        }),
      );
    });
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

class Acceptance extends StatefulWidget {
  const Acceptance({super.key});
  @override
  State<Acceptance> createState() => _AcceptanceState();
}

class _AcceptanceState extends State<Acceptance> {
  final elapsed = Stopwatch()..start();
  final boundary = GlobalKey();
  FlaxSession? session;
  late FlaxNativeJsRuntime nativeRuntime;
  final results = <Map<String, dynamic>>[];
  var cycle = -1;

  @override
  void initState() {
    super.initState();
    unawaited(start());
  }

  Future<void> start() async {
    try {
      final source = cycle < 0
          ? r'''
        import {CanvasView} from '@flax/core/bindings';
        import {runApp} from '@flax/flutter/widgets';
        if(navigator.gpu!==undefined || typeof fetch!=='function')throw Error('Core-only globals');
        if(window!==globalThis || window!==self || document.defaultView!==window)throw Error('Core window alias');
        const random=new Uint32Array(4);
        if(crypto.getRandomValues(random)!==random || !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(crypto.randomUUID()))throw Error('Core secure random');
        const observed=new Promise(resolve=>{const observer=new PerformanceObserver((list,self)=>{self.disconnect();resolve(list.getEntries());});observer.observe({type:'measure'});});
        performance.mark('core');
        const measured=performance.measure('core',{start:'core'});
        if((await observed)[0]!==measured || measured.duration<0)throw Error('Core User Timing');
        performance.clearMarks();performance.clearMeasures();
        const reader = new FileReader();
        reader.readAsText(new Blob(['Core FileReader']));
        await new Promise((resolve,reject)=>{reader.onload=resolve;reader.onerror=()=>reject(reader.error);});
        if(reader.result!=='Core FileReader')throw Error('Root FileReader');
        const canvas=new OffscreenCanvas(960,540);
        if(canvas.getContext('2d')!==null)throw Error('Core-only Canvas');
        const context=canvas.getContext('bitmaprenderer');
        if(!(context instanceof ImageBitmapRenderingContext))throw Error('Root bitmap context');
        const bitmap=await createImageBitmap(new ImageData(new Uint8ClampedArray([100,50,20,255,100,50,20,255]),2,1));
        context.transferFromImageBitmap(bitmap);
        if(bitmap.width!==0)throw Error('Bitmap ownership');
        runApp(CanvasView(canvas));
        await new Promise(requestAnimationFrame);
        __webGpuReport(JSON.stringify({kind:'rendered',frames:0,coreOnly:true}));
      '''
          : await rootBundle.loadString('assets/app.js');
      final value = FlaxSession(
        permissions: trustedPermissions,
        permissionManifest: trustedPermissions.application.manifest,
        createRuntime: () =>
            nativeRuntime = FlaxEngine.createRuntime() as FlaxNativeJsRuntime,
        entryUri: Uri.parse('flax:///app.js'),
        source:
            'globalThis.__expectCanvas2D = ${cycle % 3 != 1};\n'
            'globalThis.__threeModelBaseUrl = "http://127.0.0.1:${modelServer.port}/";\n$source',
        bindings: FlaxBindingRegistry([flutterBindings]),
        plugins: [
          if (cycle >= 0 && cycle % 3 != 1) const FlaxCanvasPlugin(),
          if (cycle >= 0) const FlaxWebGpuPlugin(),
          ReportPlugin(report),
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

  void fail(String message) {
    if (output.isNotEmpty) {
      File('$output/application.json').writeAsStringSync(
        jsonEncode({
          'passed': false,
          'error': message,
          'results': results,
          'nativeCounts': List.generate(10, live),
        }),
      );
    }
    stderr.writeln(message);
    if (!preview) exit(1);
  }

  void report(Map<String, dynamic> value) {
    if (value['error'] != null) {
      fail(value['error'].toString());
      return;
    }
    if (value['kind'] == 'worker-capture') {
      unawaited(captureWorker(value['phase'] as String));
      return;
    }
    if (value['kind'] == 'three-worker-capture') {
      unawaited(captureThreeWorker(value));
      return;
    }
    if (value['kind'] == 'three-image') {
      final name = value['name'] as String;
      if (!RegExp(r'^[A-Za-z0-9-]+$').hasMatch(name))
        throw StateError('Invalid capture name');
      if (output.isNotEmpty) {
        File('$output/three-$cycle-$name.png')
            .writeAsBytesSync(base64Decode(value['base64'] as String));
      }
      results.add({'kind': 'three-image', 'name': name, 'cycle': cycle});
      return;
    }
    results.add({
      ...value,
      'cycle': cycle,
      'canvas2D': cycle >= 0 && cycle % 3 != 1,
    });
    if (value['kind'] == 'cts' && output.isNotEmpty) {
      File('$output/cts-$cycle.json').writeAsStringSync(jsonEncode(value));
    }
    if (value['kind'] == 'rendered') unawaited(finish());
  }

  Future<void> captureWorker(String phase) async {
    try {
      if (!const {
        'red',
        'green',
        'clone',
        'returned',
        'copy-dst',
        'storage',
        'unused',
        'terminated',
      }.contains(phase)) {
        throw ArgumentError('Invalid Worker capture phase');
      }
      for (var frame = 0; frame < 3; frame++) {
        WidgetsBinding.instance.scheduleFrame();
        await WidgetsBinding.instance.endOfFrame;
      }
      final repaint =
          boundary.currentContext!.findRenderObject() as RenderRepaintBoundary;
      FlaxCanvasRenderBox? canvas;
      void find(RenderObject object) {
        if (object is FlaxCanvasRenderBox) canvas = object;
        object.visitChildren(find);
      }

      find(repaint);
      if (canvas == null)
        throw StateError('The Worker canvas render box is missing');
      final origin = canvas!.localToGlobal(Offset.zero, ancestor: repaint);
      final image = await repaint.toImage(pixelRatio: 1);
      try {
        final bytes = await image.toByteData(
          format: ui.ImageByteFormat.rawRgba,
        );
        var pixels = 0, samples = 0;
        // Inspect the canvas interior; surrounding black UI cannot satisfy a clear check.
        final left = (origin.dx + 2).ceil().clamp(0, image.width);
        final top = (origin.dy + 2).ceil().clamp(0, image.height);
        final right = (origin.dx + canvas!.size.width - 2).floor().clamp(
          0,
          image.width,
        );
        final bottom = (origin.dy + canvas!.size.height - 2).floor().clamp(
          0,
          image.height,
        );
        for (var y = top; y < bottom; y++) {
          for (var x = left; x < right; x++) {
            final at = (y * image.width + x) * 4;
            final red = bytes!.getUint8(at),
                green = bytes.getUint8(at + 1),
                blue = bytes.getUint8(at + 2);
            samples++;
            final matches = switch (phase) {
              'terminated' => bytes.getUint8(at + 3) == 0,
              'unused' =>
                red < 4 &&
                    green < 4 &&
                    blue < 4 &&
                    bytes.getUint8(at + 3) > 250,
              'green' || 'storage' => blue < 40 && green > 200 && red < 40,
              _ => blue < 40 && red > 200 && green < 40,
            };
            if (matches) {
              pixels++;
            }
          }
        }
        if (output.isNotEmpty) {
          final png = await image.toByteData(format: ui.ImageByteFormat.png);
          File('$output/worker-$cycle-$phase.png')
              .writeAsBytesSync(png!.buffer.asUint8List());
        }
        final result = {
          'phase': phase,
          'pixels': pixels,
          'samples': samples,
          'layout': [canvas!.size.width, canvas!.size.height],
        };
        results.add({'kind': 'worker-capture', 'cycle': cycle, ...result});
        final value = nativeRuntime.evaluate(
          'globalThis.__workerGpuCapture = ${jsonEncode(result)}; undefined;',
        );
        if (value is FlaxJsObject) value.release();
        nativeRuntime.drainMicrotasks();
      } finally {
        image.dispose();
      }
    } catch (error, stack) {
      fail('$error\n$stack');
    }
  }

  Future<void> captureThreeWorker(Map<String, dynamic> value) async {
    try {
      final name = value['name'] as String;
      const names = {
        'features-model-textured-cube-glb',
        'features-post-plain',
        'features-post-inverted',
        'features-post-bloom',
        'advanced-skinned-rest',
        'advanced-skinned-pose',
        'advanced-skinned-restored',
        'ktx-uastc',
      };
      final width = value['width'] as int, height = value['height'] as int;
      final expected = base64Decode(value['base64'] as String);
      if (!names.contains(name) ||
          width != (name == 'ktx-uastc' ? 16 : 192) ||
          height != width ||
          expected.length != width * height * 4) {
        throw ArgumentError('Invalid Three.js Worker capture');
      }
      for (var frame = 0; frame < 3; frame++) {
        WidgetsBinding.instance.scheduleFrame();
        await WidgetsBinding.instance.endOfFrame;
      }
      final repaint =
          boundary.currentContext!.findRenderObject() as RenderRepaintBoundary;
      FlaxCanvasRenderBox? canvas;
      void find(RenderObject object) {
        if (object is FlaxCanvasRenderBox) canvas = object;
        object.visitChildren(find);
      }

      find(repaint);
      if (canvas == null)
        throw StateError('The Three.js Worker canvas is missing');
      final origin = canvas!.localToGlobal(Offset.zero, ancestor: repaint);
      final image = await repaint.toImage(pixelRatio: 1);
      try {
        final bytes = (await image.toByteData(
          format: ui.ImageByteFormat.rawRgba,
        ))!;
        var samples = 0, colored = 0, totalError = 0;
        final left = (origin.dx + 2).ceil().clamp(0, image.width);
        final top = (origin.dy + 2).ceil().clamp(0, image.height);
        final right = (origin.dx + canvas!.size.width - 2).floor().clamp(
          0,
          image.width,
        );
        final bottom = (origin.dy + canvas!.size.height - 2).floor().clamp(
          0,
          image.height,
        );
        for (var y = top; y < bottom; y++) {
          for (var x = left; x < right; x++) {
            final at = (y * image.width + x) * 4;
            final sourceX = (x + 0.5 - origin.dx).floor().clamp(0, width - 1);
            final sourceY = (y + 0.5 - origin.dy).floor().clamp(0, height - 1);
            final source = (sourceY * width + sourceX) * 4;
            for (var channel = 0; channel < 4; channel++) {
              totalError +=
                  (bytes.getUint8(at + channel) - expected[source + channel])
                      .abs();
            }
            if (bytes.getUint8(at) > 40 ||
                bytes.getUint8(at + 1) > 40 ||
                bytes.getUint8(at + 2) > 40) {
              colored++;
            }
            samples++;
          }
        }
        if (output.isNotEmpty) {
          final png = await image.toByteData(format: ui.ImageByteFormat.png);
          File('$output/three-worker-display-$cycle-$name.png')
              .writeAsBytesSync(png!.buffer.asUint8List());
        }
        final result = {
          'name': name,
          'coloredPixels': colored,
          'samples': samples,
          // The Flutter raster may sample a half-pixel canvas edge; exact GPU parity is checked in JS.
          'meanError': samples == 0 ? 255 : totalError / (samples * 4),
          'layout': [canvas!.size.width, canvas!.size.height],
        };
        results.add({
          'kind': 'three-worker-display',
          'cycle': cycle,
          ...result,
        });
        final value = nativeRuntime.evaluate(
          'globalThis.__threeWorkerCapture = ${jsonEncode(result)}; undefined;',
        );
        if (value is FlaxJsObject) value.release();
        nativeRuntime.drainMicrotasks();
      } finally {
        image.dispose();
      }
    } catch (error, stack) {
      fail('$error\n$stack');
    }
  }

  Future<void> finish() async {
    try {
      if (cycle >= 0) {
        const requiredThreeFrames = {
          'features-model-textured-cube-gltf',
          'features-model-textured-cube-glb',
          'features-DirectionalLight-lit',
          'features-DirectionalLight-shadow',
          'features-PointLight-lit',
          'features-PointLight-shadow',
          'features-SpotLight-lit',
          'features-SpotLight-shadow',
          'features-post-plain',
          'features-post-inverted',
          'features-post-bloom',
          'advanced-skinned-rest',
          'advanced-skinned-pose',
          'advanced-skinned-restored',
          'advanced-morph-rest',
          'advanced-morph-pose',
          'advanced-morph-restored',
          'advanced-meshopt',
          'ktx-etc1s',
          'ktx-uastc',
        };
        final threeReports = results
            .where(
              (row) =>
                  row['cycle'] == cycle &&
                  row['kind'] == 'three-worker-renderer',
            )
            .toList();
        if (threeReports.length != 1)
          throw StateError(
            'Expected one Three.js Worker renderer report for cycle $cycle',
          );
        final three = threeReports.single;
        final comparisons = three['comparisons'];
        final displays = three['displays'];
        final nested = three['nested'];
        const requiredDisplays = {
          'features-model-textured-cube-glb',
          'features-post-plain',
          'features-post-inverted',
          'features-post-bloom',
          'advanced-skinned-rest',
          'advanced-skinned-pose',
          'advanced-skinned-restored',
          'ktx-uastc',
        };
        final actualDisplays = results
            .where(
              (row) =>
                  row['cycle'] == cycle &&
                  row['kind'] == 'three-worker-display',
            )
            .toList();
        if (three['version'] != '186' ||
            three['domFree'] != true ||
            three['pixelSnapshots'] != true ||
            comparisons is! List ||
            comparisons.length != requiredThreeFrames.length ||
            !requiredThreeFrames.every(
              (name) => comparisons.any(
                (row) => row['name'] == name && row['maxError'] <= 1,
              ),
            ) ||
            displays is! List ||
            displays.length != requiredDisplays.length ||
            actualDisplays.length != requiredDisplays.length ||
            !requiredDisplays.every(
              (name) =>
                  displays.any((row) => row['name'] == name) &&
                  actualDisplays.any((row) => row['name'] == name),
            ) ||
            !displays.every(
              (row) => row['coloredPixels'] >= 100 && row['meanError'] <= 6,
            ) ||
            three['advanced'] is! Map ||
            three['advanced']['animationLoopFrames'] != 3 ||
            nested is! List ||
            nested.length != 2 ||
            !const ['etc1s', 'uastc'].every(
              (mode) => nested.any(
                (row) =>
                    row['mode'] == mode &&
                    (row['workers'] as List).every((count) => count >= 2),
              ),
            ) ||
            three['workersAfter'] is! List ||
            !(three['workersAfter'] as List).every((count) => count == 0)) {
          throw StateError(
            'Three.js Worker renderer omitted required scene pixels, Flutter display, nested decoding or retirement',
          );
        }
        final rendered = results.singleWhere(
          (row) => row['cycle'] == cycle && row['kind'] == 'rendered',
        );
        if (rendered['threeWorkerRendererAtSessionClose'] != true ||
            rendered['threeWorkerRendererNestedAtSessionClose'] != 1) {
          throw StateError(
            'Session close requires a live Three.js renderer and nested KTX2 Worker',
          );
        }
        const requiredCases = {
          'transient-attachment',
          'format-sequencing',
          'color-profiles',
          'color-snapshots',
          'color-destroy',
          'device-loss',
        };
        for (final kind in ['canvas-configuration', 'gpu-workers']) {
          final reports = results
              .where((row) => row['cycle'] == cycle && row['kind'] == kind)
              .toList();
          if (reports.length != 1) {
            throw StateError('Expected one $kind report for cycle $cycle');
          }
          final receipt = kind == 'canvas-configuration'
              ? reports.single
              : reports.single['canvasConfiguration'];
          if (receipt is! Map ||
              receipt['pixelSnapshots'] != true ||
              receipt['cases'] is! List ||
              !requiredCases.every(
                (name) => (receipt['cases'] as List).contains(name),
              )) {
            throw StateError(
              '$kind did not run actual pixel snapshots and all required canvas API cases',
            );
          }
          if (kind == 'gpu-workers') {
            const imageCases = {
              'image-data-upload',
              'bitmap-upload',
              'blob-decode-upload',
              'call-time-capture',
              'canvas-source',
              'png-export',
              'jpeg-export',
              'webp-export',
              'mime-fallback',
              'alpha',
              'transparent-reset',
              'opaque-reset',
              'texture-expiry',
              'mixed-transfer-atomicity',
              'mixed-transfer-roundtrip',
              'mixed-transfer-drop',
              'root-receiver',
              'wide-color-roundtrip',
              'wide-color-root-receiver',
            };
            final images = reports.single['stillImages'];
            if (images is! Map ||
                images['pixelSnapshots'] != true ||
                images['assertions'] is! num ||
                (images['assertions'] as num) < imageCases.length ||
                images['cases'] is! List ||
                !imageCases.every(
                  (name) => (images['cases'] as List).contains(name),
                ) ||
                images['formats'] is! List ||
                !const [
                  'image/png',
                  'image/jpeg',
                  'image/webp',
                ].every((type) => (images['formats'] as List).contains(type))) {
              throw StateError(
                'gpu-workers did not cover actual still-image pixels for cycle $cycle',
              );
            }
          }
        }
      }
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
        final active = List.generate(10, live);
        final activeWorkers = nativeRuntime.workerCountsForTesting();
        if (cycle >= 0 &&
            (activeWorkers.$2 == 0 ||
                active[0] < 2 ||
                active[1] == 0 ||
                active[2] == 0)) {
          throw StateError(
            'Session close requires an active GPU Worker with mapped memory and a Surface: $active / $activeWorkers',
          );
        }
        setState(() => session = null);
        await WidgetsBinding.instance.endOfFrame;
        await old!.close();
        for (
          var attempt = 0;
          attempt < 200 && List.generate(10, live).any((value) => value != 0);
          attempt++
        ) {
          await Future<void>.delayed(const Duration(milliseconds: 10));
          WidgetsBinding.instance.scheduleFrame();
        }
        final rssAtClose = ProcessInfo.currentRss;
        await Future<void>.delayed(const Duration(seconds: 1));
        final retired = List.generate(10, live);
        final retiredWorkers = nativeRuntime.workerCountsForTesting();
        if (retired.any((value) => value != 0)) {
          throw StateError('GPU resources did not retire: $retired');
        }
        if (retiredWorkers != (0, 0)) {
          throw StateError('Workers did not retire: $retiredWorkers');
        }
        results.add({
          'kind': 'retired',
          'cycle': cycle,
          'before': active,
          'after': retired,
          'workersBefore': [activeWorkers.$1, activeWorkers.$2],
          'workersAfter': [retiredWorkers.$1, retiredWorkers.$2],
          'rssAtClose': rssAtClose,
          'rssAfter': ProcessInfo.currentRss,
          'peakRss': ProcessInfo.maxRss,
          'elapsedMs': elapsed.elapsedMilliseconds,
        });
        if (++cycle < cycles) {
          await start();
          return;
        }
        if (output.isNotEmpty) {
          File('$output/application.json').writeAsStringSync(
            jsonEncode({
              'passed': true,
              'cycles': cycles,
              'checks': results,
              'coloredPixels': colored,
            }),
          );
        }
        await modelServer.close(force: true);
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
    unawaited(session?.close());
    super.dispose();
  }
}
