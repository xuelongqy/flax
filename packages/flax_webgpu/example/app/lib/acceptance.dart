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
        'flax.wasm': FlaxPermissionDeclaration(
          purpose: {'en': 'Decode checked-in Draco, Meshopt and KTX fixtures'},
        ),
      },
    ),
  );
  modelServer.listen((request) async {
    const assets = {
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
  };
  @override
  Set<String> get jsModules => const {};
  @override
  List<FlaxBindingModule> get bindingModules => const [];
  @override
  FlaxPluginInstance install(FlaxHostContext context) {
    context.registerFunction('__threeWorkerState', (_, args) {
      final counts = (context.runtime as FlaxNativeJsRuntime)
          .workerCountsForTesting();
      return FlaxJsString(
        jsonEncode({
          'workers': [counts.$1, counts.$2],
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
          'nativeCounts': List.generate(6, live),
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
        final activeWorkers = nativeRuntime.workerCountsForTesting();
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
        final rssAtClose = ProcessInfo.currentRss;
        await Future<void>.delayed(const Duration(seconds: 1));
        final retired = List.generate(6, live);
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
