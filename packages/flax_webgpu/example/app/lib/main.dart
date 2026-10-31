import 'dart:async';
import 'dart:convert';
import 'dart:ffi';
import 'dart:io';
import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flax/flax.dart';
import 'package:flax_example_support/flax_example_support.dart';
import 'package:flax_webgpu/flax_webgpu.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

// Stable code asset identity produced for @flax/webgpu/dawn by @flax/build.
@Native<Uint64 Function(Uint32)>(
  symbol: 'flax_webgpu_live',
  assetId: 'package:flax_ffi_assets/flax_native_444f38f33db59f81',
)
external int live(int kind);

const output = String.fromEnvironment('WEBGPU_OUTPUT');
final automated = Platform.environment['FLAX_WEBGPU_STUDIO_BENCHMARK'] == '1';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  Flax.moduleAssets = await FlaxModuleAssets.load(
    bundle: rootBundle,
    manifest: 'assets/flax_modules/modules.json',
  );
  runApp(
    const FlaxExampleApp(
      title: 'WebGPU / Spectrum studio',
      child: StudioHost(),
    ),
  );
}

class StudioHost extends StatefulWidget {
  const StudioHost({super.key});
  @override
  State<StudioHost> createState() => _StudioHostState();
}

class _StudioHostState extends State<StudioHost> {
  final boundary = GlobalKey();
  final cases = <Map<String, dynamic>>[];
  FlaxSession? session;
  String? error;

  @override
  void initState() {
    super.initState();
    unawaited(start());
  }

  Future<void> start() async {
    try {
      final source = await rootBundle.loadString('assets/app.js');
      final next = FlaxSession(
        createRuntime: FlaxEngine.createRuntime,
        source: source,
        bindings: FlaxBindingRegistry([flutterBindings]),
        plugins: [
          const FlaxWebGpuPlugin(),
          if (automated) _ReportPlugin(report),
        ],
        onError: (value, stack) => fail('$value\n$stack'),
      );
      session = next;
      await next.ready;
      if (mounted) setState(() {});
    } catch (value, stack) {
      fail('$value\n$stack');
    }
  }

  void fail(String message) {
    stderr.writeln(message);
    if (automated) {
      File('$output/studio-results.json')
          .writeAsStringSync(jsonEncode({'passed': false, 'error': message}));
      exit(1);
    }
    if (mounted) setState(() => error = message);
  }

  void report(Map<String, dynamic> value, FlaxHostContext context) {
    if (value['error'] != null) {
      fail(value['error'].toString());
      return;
    }
    if (value['kind'] == 'case') unawaited(capture(value, context));
    if (value['kind'] == 'done') unawaited(finish(value));
  }

  Future<void> capture(
    Map<String, dynamic> value,
    FlaxHostContext context,
  ) async {
    try {
      await WidgetsBinding.instance.endOfFrame;
      final element = boundary.currentContext! as Element;
      RenderBox? canvas;
      void find(Element child) {
        if (child.widget.key == const ValueKey<String>('webgpu-surface'))
          canvas = child.findRenderObject() as RenderBox?;
        child.visitChildren(find);
      }

      find(element);
      if (canvas == null)
        throw StateError('The canvas placement was not found');
      final box =
          boundary.currentContext!.findRenderObject()! as RenderRepaintBoundary;
      final image = await box.toImage(pixelRatio: 1);
      final pixels = (await image.toByteData(
        format: ui.ImageByteFormat.rawRgba,
      ))!;
      final origin = canvas!.localToGlobal(Offset.zero, ancestor: box);
      final rect = origin & canvas!.size;
      if (rect.left < 0 ||
          rect.top < 0 ||
          rect.right > image.width ||
          rect.bottom > image.height) {
        throw StateError(
          'The complete benchmark canvas must be visible: $rect',
        );
      }
      var colored = 0;
      for (
        var y = math.max(0, rect.top.ceil());
        y < math.min(image.height, rect.bottom.floor());
        y++
      ) {
        for (
          var x = math.max(0, rect.left.ceil());
          x < math.min(image.width, rect.right.floor());
          x++
        ) {
          final i = (y * image.width + x) * 4;
          final rgb = [
            pixels.getUint8(i),
            pixels.getUint8(i + 1),
            pixels.getUint8(i + 2),
          ];
          if (rgb.reduce(math.max) - rgb.reduce(math.min) > 15) colored++;
        }
      }
      if (colored < 1000)
        throw StateError(
          'Scene ${value['index']} did not composite colored pixels: $colored',
        );
      final png = await image.toByteData(format: ui.ImageByteFormat.png);
      File('$output/studio-${value['index']}.png')
          .writeAsBytesSync(png!.buffer.asUint8List());
      image.dispose();
      final view = WidgetsBinding.instance.platformDispatcher.views.first;
      cases.add({
        ...value['result'] as Map<String, dynamic>,
        'coloredPixels': colored,
        'logicalCanvas': [canvas!.size.width, canvas!.size.height],
        'viewport': {
          'width': view.physicalSize.width / view.devicePixelRatio,
          'height': view.physicalSize.height / view.devicePixelRatio,
          'devicePixelRatio': view.devicePixelRatio,
        },
      });
      context.enqueue(
        () => context.evaluate('globalThis.__webGpuStudioCaptureDone()'),
      );
    } catch (value, stack) {
      fail('$value\n$stack');
    }
  }

  Future<void> finish(Map<String, dynamic> metadata) async {
    try {
      final old = session;
      setState(() => session = null);
      await WidgetsBinding.instance.endOfFrame;
      await old!.close();
      for (
        var i = 0;
        i < 200 && List.generate(5, live).any((value) => value != 0);
        i++
      ) {
        await Future<void>.delayed(const Duration(milliseconds: 10));
        WidgetsBinding.instance.scheduleFrame();
      }
      final retired = List.generate(6, live);
      if (retired.any((v) => v != 0))
        throw StateError('GPU resources did not retire: $retired');
      File('$output/studio-results.json').writeAsStringSync(
        jsonEncode({
          'passed': true,
          'cases': cases,
          'retired': retired,
          'sourceSha256': metadata['sourceSha256'],
          'adapter': metadata['adapter'],
        }),
      );
      exit(0);
    } catch (value, stack) {
      fail('$value\n$stack');
    }
  }

  @override
  Widget build(BuildContext context) => error != null
      ? Center(child: Text(error!))
      : RepaintBoundary(
          key: boundary,
          child: session == null
              ? const SizedBox.expand()
              : FlaxView.session(session: session!),
        );
  @override
  void dispose() {
    unawaited(session?.close());
    super.dispose();
  }
}

class _ReportPlugin extends FlaxPlugin {
  _ReportPlugin(this.report);
  final void Function(Map<String, dynamic>, FlaxHostContext) report;
  @override
  String get id => 'flax.webgpu.studio.validation';
  @override
  Set<String> get globals => const {'__webGpuStudioReport'};
  @override
  Set<String> get jsModules => const {};
  @override
  List<FlaxBindingModule> get bindingModules => const [];
  @override
  FlaxPluginInstance install(FlaxHostContext context) {
    context.registerFunction('__webGpuStudioReport', (_, args) {
      report(
        (jsonDecode((args.single as FlaxJsString).value) as Map)
            .cast<String, dynamic>(),
        context,
      );
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
