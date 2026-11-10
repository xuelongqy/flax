import 'dart:ffi';

import 'package:flax/flax.dart';
import 'package:flax/src/native/runtime_bindings.g.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:flutter/services.dart';

import '../support/harness.dart';

void main() {
  test('Shared image encoding reports malformed options across the native boundary', () {
    final native = FlaxBindings(DynamicLibrary.process());
    final result = native.flax_image_dispatch(
      0,
      Uint8List.fromList([255, 0, 0, 255]),
      [1, 1, 'invalid format', 90],
      0,
    );
    expect(result, isA<String>());
    expect(
      native.flax_image_dispatch(0, Uint8List(4), [1, 1, 0, 90], 0),
      isA<Uint8List>(),
    );
  });
  testWidgets('Core bitmaprenderer mounts without a renderer plugin', (
    tester,
  ) async {
    Flax.registerPlugins([]);
    final h = Harness();
    try {
      await flaxTestPumpView(
        tester,
        h.app(
          code: r"""
        import {CanvasView} from '@flax/core/bindings';
        import {runApp} from '@flax/flutter/widgets';
        globalThis.bitmapCanvas = new OffscreenCanvas(2,2);
        const context = bitmapCanvas.getContext('bitmaprenderer');
        if (!(context instanceof ImageBitmapRenderingContext)) throw Error('Root bitmap context');
        context.transferFromImageBitmap(null);
        runApp(CanvasView(bitmapCanvas,{width:40,height:40}));
      """,
        ),
      );
      await tester.pump();
      expect(find.byType(FlaxCanvasView), findsOneWidget);
      expect(h.errors, isEmpty);
    } finally {
      await flaxTestUnmount(tester);
      for (final runtime in h.runtimes) {
        await flaxTestWaitForRuntimeDisposal(tester, runtime);
      }
    }
  });
  testWidgets(
    'Canvas DOM geometry and input use the real placement and release on unmount',
    (tester) async {
      Flax.registerPlugins([]);
      final h = Harness();
      try {
        await flaxTestPumpView(
          tester,
          h.app(
            code: r'''
        import {CanvasView} from '@flax/core/bindings';
        import {runApp,Align,SizedBox} from '@flax/flutter/widgets';
        import {Alignment} from '@flax/flutter/painting';
        globalThis.canvas=document.createElement('canvas');
        canvas.id='scene';canvas.width=640;canvas.height=360;
        canvas.style.touchAction='none';
        globalThis.inputs=[];
        canvas.addEventListener('pointerdown',e=>{canvas.setPointerCapture(e.pointerId);inputs.push(e.type)});
        canvas.addEventListener('pointerup',e=>inputs.push(e.type));
        canvas.addEventListener('lostpointercapture',e=>inputs.push(e.type));
        canvas.addEventListener('keydown',e=>{inputs.push(e.key);e.preventDefault()});
        runApp(Align({alignment:Alignment.topLeft,child:CanvasView(canvas,{width:320,height:180})}));
      ''',
          ),
        );
        await tester.pump();
        final finder = find.byType(FlaxCanvasView);
        final rect = tester.getRect(finder);
        expect(h.number('canvas.clientWidth'), 320);
        expect(h.number('canvas.getBoundingClientRect().left'), rect.left);
        expect(h.number('canvas.getBoundingClientRect().top'), rect.top);
        expect(h.number('canvas.width'), 640);
        h.execute(
          "if(document.querySelector('#scene')!==canvas)throw Error('Canvas registration');",
        );
        final gesture = await tester.startGesture(rect.center);
        await gesture.moveBy(const Offset(30, 10));
        await gesture.up();
        await tester.pump();
        await tester.sendKeyEvent(
          LogicalKeyboardKey.arrowLeft,
          physicalKey: PhysicalKeyboardKey.arrowLeft,
        );
        await tester.pump();
        h.execute(
          "if(!inputs.includes('pointerdown')||!inputs.includes('pointerup')||!inputs.includes('lostpointercapture')||!inputs.includes('ArrowLeft'))throw Error(JSON.stringify(inputs));",
        );
        expect(h.errors, isEmpty);
      } finally {
        await flaxTestUnmount(tester);
        for (final runtime in h.runtimes) {
          await flaxTestWaitForRuntimeDisposal(tester, runtime);
        }
      }
    },
  );
  testWidgets(
    'Core-only canvas constructs and mounts without a renderer plugin',
    (tester) async {
      Flax.registerPlugins([]);
      final h = Harness();
      try {
        await flaxTestPumpView(
          tester,
          h.app(
            code: r'''
        import {CanvasView} from '@flax/core/bindings';
        import {runApp} from '@flax/flutter/widgets';
        globalThis.coreCanvas = new OffscreenCanvas(64,32);
        if (coreCanvas.getContext('2d') !== null || coreCanvas.getContext('webgpu') !== null)
          throw new Error('Core must not install a renderer');
        if (navigator.gpu !== undefined) throw new Error('Core must not install Dawn');
        runApp(CanvasView(coreCanvas));
      ''',
          ),
        );
        expect(h.errors, isEmpty);
        final view = tester.widget<FlaxCanvasView>(find.byType(FlaxCanvasView));
        expect(view.canvas.width, 64);
        expect(view.canvas.height, 32);
        h.execute('coreCanvas.width = 128;');
        await tester.pump();
        expect(view.canvas.width, 128);
        expect(h.errors, isEmpty);
      } finally {
        await flaxTestUnmount(tester);
        for (final runtime in h.runtimes) {
          await flaxTestWaitForRuntimeDisposal(tester, runtime);
        }
      }
    },
  );
}
