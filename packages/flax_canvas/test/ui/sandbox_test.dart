import 'dart:io';

import 'package:flax/flax.dart';
import 'package:flax_canvas/flax_canvas.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../support/harness.dart';

void main() {
  testWidgets(
    'sandbox Canvas retains byte IO while direct JS FFI is disabled',
    (t) async {
      late Directory scratch;
      late FlaxSandbox sandbox;
      await t.runAsync(() async {
        scratch = await Directory.systemTemp.createTemp('flax-canvas-sandbox-');
        sandbox = await FlaxSandbox.create(
          appId: 'test.canvas',
          appsDirectory: scratch,
        );
      });
      final h = Harness();
      final session = FlaxSession(
        createRuntime: h.create,
        source: source,
        bindings: registry,
        sandbox: sandbox,
        plugins: const [FlaxCanvasPlugin()],
        onError: (e, _) => h.errors.add(e),
      );
      try {
        await flaxTestPumpView(
          t,
          MaterialApp(home: FlaxView.session(session: session)),
        );
        await flaxTestRunHostScript(t, h, r'''
        if (typeof __flaxFfiDlopen !== 'undefined') throw Error('FFI was installed');
        const canvas = new OffscreenCanvas(1, 1);
        const context = canvas.getContext('2d');
        context.fillStyle = '#ff0000';
        context.fillRect(0, 0, 1, 1);
        const pixels = (await context.getImageDataAsync(0, 0, 1, 1)).data;
        if (String(pixels) !== '255,0,0,255') throw Error('Incorrect scoped Canvas pixels');
        const bytes = new Uint8Array(await (await canvas.convertToBlob()).arrayBuffer());
        if (bytes[0] !== 137 || bytes[1] !== 80) throw Error('Expected PNG bytes');
      ''');
        expect(h.errors, isEmpty);
      } finally {
        await flaxTestUnmount(t);
        await flaxTestCloseSession(t, session);
        await t.runAsync(() => scratch.delete(recursive: true));
      }
    },
  );
}
