import 'dart:io';
import 'dart:ui' as ui;

import 'package:flutter/foundation.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:path_provider/path_provider.dart';

Future<String> captureSurvivorsFrame(WidgetTester tester, String name) async {
  final boundaries = find.ancestor(
    of: find.byType(KeyboardListener),
    matching: find.byType(RepaintBoundary),
  );
  expect(boundaries, findsWidgets);
  final boundary = tester.renderObject<RenderRepaintBoundary>(boundaries.last);
  final image = (await tester.runAsync(() => boundary.toImage(pixelRatio: 1)))!;
  try {
    final data = (await tester.runAsync(
      () => image.toByteData(format: ui.ImageByteFormat.png),
    ))!;
    final root = Platform.isAndroid
        ? await tester.runAsync(getExternalStorageDirectory)
        : Directory.systemTemp;
    expect(
      root,
      isNotNull,
      reason: 'Android external screenshot directory unavailable',
    );
    final directory = Directory('${root!.path}/survivors-evidence');
    final file = File('${directory.path}/$name.png');
    await tester.runAsync(() async {
      await directory.create(recursive: true);
      await file.writeAsBytes(
        data.buffer.asUint8List(data.offsetInBytes, data.lengthInBytes),
      );
    });
    debugPrintSynchronously('FLAX_SURVIVORS_SCREENSHOT:${file.path}');
    return file.path;
  } finally {
    image.dispose();
  }
}
