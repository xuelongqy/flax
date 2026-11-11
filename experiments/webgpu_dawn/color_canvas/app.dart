import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:ui' as ui;

import 'package:flax/flax.dart';
import 'package:flax_webgpu/flax_webgpu.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

const _patch = 64.0;
const _width = 3 * _patch;
const _gap = 20.0;
const _channel = MethodChannel('flax.webgpu.color_canvas');
const _hdr = [1.0, 1.08, 1.6];
const _primaries = [(0.0, 1.0, 0.0), (1.0, 0.0, 0.0), (1.0, 1.0, 1.0)];
const _rowNames = [
  'srgb',
  'p3',
  'hdr',
  'hdr-p3',
  'standard-fp16',
  'standard-p3-fp16',
  'p3-alpha',
];
const _patchNames = [
  ['green', 'red', 'white'],
  ['green', 'red', 'white'],
  ['white', '1.08', '1.60'],
  ['green', 'red', '1.60'],
  ['wide-red', '1.60', 'white'],
  ['green', 'red', '1.60'],
  ['green', 'red', 'transparent'],
];

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  Flax.moduleAssets = await FlaxModuleAssets.load(
    bundle: rootBundle,
    manifest: 'assets/flax_modules/modules.json',
  );
  final report = Completer<Object?>();
  final grid = GlobalKey();
  final session = FlaxSession(
    createRuntime: FlaxEngine.createRuntime,
    entryUri: Uri.parse('flax:///app.js'),
    source: await rootBundle.loadString('assets/app.js'),
    bindings: FlaxBindingRegistry([flutterBindings]),
    plugins: [const FlaxWebGpuPlugin(), _ReportPlugin(report)],
    onError: (error, stack) {
      if (!report.isCompleted) report.completeError(error, stack);
    },
  );
  runApp(_Scene(grid, session));

  final receipt = <String, Object?>{};
  var status = 0;
  try {
    receipt['webgpu'] = await report.future.timeout(
      const Duration(seconds: 20),
    );
    await WidgetsBinding.instance.endOfFrame;
    // Allow the raster thread to publish the last canvas presentation to CALayer.
    await Future<void>.delayed(const Duration(milliseconds: 500));
    final context = grid.currentContext;
    if (context == null || !context.mounted) {
      throw StateError('The color grid did not mount');
    }
    final box = context.findRenderObject()! as RenderBox;
    final view = View.of(context);
    receipt['flutter'] = await _channel
        .invokeMethod<Object?>('sample', {
          'logicalWidth': view.physicalSize.width / view.devicePixelRatio,
          'logicalHeight': view.physicalSize.height / view.devicePixelRatio,
          'scale': view.devicePixelRatio,
          'points': [
            for (final (side, offset) in [
              ('webgpu', 0.0),
              ('flutter', _width + _gap),
            ])
              for (var row = 0; row < _rowNames.length; row++)
                for (var column = 0; column < 3; column++)
                  _point(box, side, offset, row, column),
          ],
        })
        .timeout(const Duration(seconds: 15));
  } catch (error, stack) {
    receipt['error'] = '$error';
    stderr.writeln(stack);
    status = 1;
  } finally {
    runApp(const SizedBox.shrink());
    try {
      await WidgetsBinding.instance.endOfFrame;
      await session.close().timeout(const Duration(seconds: 10));
    } catch (error) {
      receipt['shutdownError'] = '$error';
      status = 1;
    }
    stdout.writeln('FLAX_COLOR_CANVAS ${jsonEncode(receipt)}');
    await stdout.flush();
    exit(status);
  }
}

Map<String, Object> _point(
  RenderBox box,
  String side,
  double offset,
  int row,
  int column,
) {
  final point = box.localToGlobal(
    Offset(offset + (column + .5) * _patch, (row + .5) * _patch),
  );
  return {
    'name': '$side.${_rowNames[row]}.${_patchNames[row][column]}',
    'x': point.dx,
    'y': point.dy,
  };
}

class _Scene extends StatelessWidget {
  const _Scene(this.grid, this.session);
  final GlobalKey grid;
  final FlaxSession session;

  @override
  Widget build(BuildContext context) => MaterialApp(
    debugShowCheckedModeBanner: false,
    home: Scaffold(
      backgroundColor: const Color(0xff202020),
      body: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                SizedBox(
                  width: _width,
                  child: Text(
                    'Flax WebGPU',
                    style: TextStyle(color: Colors.white),
                  ),
                ),
                SizedBox(width: _gap),
                SizedBox(
                  width: _width,
                  child: Text(
                    'Flutter Color controls',
                    style: TextStyle(color: Colors.white),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 8),
            Row(
              key: grid,
              mainAxisSize: MainAxisSize.min,
              children: [
                SizedBox(
                  width: _width,
                  height: _patch * _rowNames.length,
                  child: FlaxView.session(session: session),
                ),
                const SizedBox(width: _gap),
                Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    for (final space in [
                      ui.ColorSpace.sRGB,
                      ui.ColorSpace.displayP3,
                    ])
                      Row(
                        children: [
                          for (final (r, g, b) in _primaries)
                            _color(space, r, g, b),
                        ],
                      ),
                    Row(
                      children: [
                        for (final gray in _hdr)
                          _color(ui.ColorSpace.extendedSRGB, gray, gray, gray),
                      ],
                    ),
                    Row(
                      children: [
                        _color(ui.ColorSpace.displayP3, 0, 1, 0),
                        _color(ui.ColorSpace.displayP3, 1, 0, 0),
                        _color(ui.ColorSpace.extendedSRGB, 1.6, 1.6, 1.6),
                      ],
                    ),
                    Row(
                      children: [
                        _color(ui.ColorSpace.extendedSRGB, 1.035, -.175, -.140),
                        _color(ui.ColorSpace.sRGB, 1, 1, 1),
                        _color(ui.ColorSpace.sRGB, 1, 1, 1),
                      ],
                    ),
                    Row(
                      children: [
                        _color(ui.ColorSpace.displayP3, 0, 1, 0),
                        _color(ui.ColorSpace.displayP3, 1, 0, 0),
                        _color(ui.ColorSpace.sRGB, 1, 1, 1),
                      ],
                    ),
                    Row(
                      children: [
                        _color(ui.ColorSpace.displayP3, 0, 1, 0, alpha: .5),
                        _color(ui.ColorSpace.displayP3, 1, 0, 0, alpha: .5),
                        _color(ui.ColorSpace.sRGB, 0, 0, 0, alpha: 0),
                      ],
                    ),
                  ],
                ),
              ],
            ),
          ],
        ),
      ),
    ),
  );

  Widget _color(
    ui.ColorSpace space,
    double r,
    double g,
    double b, {
    double alpha = 1,
  }) => SizedBox.square(
    dimension: _patch,
    child: ColoredBox(
      color: Color.from(
        alpha: alpha,
        red: r,
        green: g,
        blue: b,
        colorSpace: space,
      ),
    ),
  );
}

class _ReportPlugin extends FlaxPlugin {
  _ReportPlugin(this.report);
  final Completer<Object?> report;

  @override
  String get id => 'flax.webgpu.color-canvas-probe';
  @override
  Set<String> get globals => const {'__colorReport'};
  @override
  Set<String> get jsModules => const {};
  @override
  List<FlaxBindingModule> get bindingModules => const [];

  @override
  FlaxPluginInstance install(FlaxHostContext context) {
    context.registerFunction('__colorReport', (_, args) {
      if (!report.isCompleted) {
        report.complete(jsonDecode((args.single as FlaxJsString).value));
      }
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
