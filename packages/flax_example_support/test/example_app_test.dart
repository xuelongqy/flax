import 'dart:ui' show FrameTiming;

import 'package:flax_example_support/flax_example_support.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

void main() {
  Future<void> tap(WidgetTester tester, String key) async {
    await tester.tap(find.byKey(ValueKey(key)));
    await tester.pumpAndSettle();
  }

  testWidgets('native settings inherit brightness without resizing content', (
    tester,
  ) async {
    tester.view.physicalSize = const Size(390, 844);
    tester.view.devicePixelRatio = 1;
    tester.view.padding = const FakeViewPadding(
      left: 10,
      right: 20,
      bottom: 34,
    );
    tester.view.viewPadding = const FakeViewPadding(
      left: 10,
      right: 20,
      bottom: 34,
    );
    tester.platformDispatcher.platformBrightnessTestValue = Brightness.light;
    addTearDown(tester.view.resetPhysicalSize);
    addTearDown(tester.view.resetDevicePixelRatio);
    addTearDown(tester.view.resetPadding);
    addTearDown(tester.view.resetViewPadding);
    addTearDown(tester.platformDispatcher.clearPlatformBrightnessTestValue);
    await tester.pumpWidget(
      const FlaxExampleApp(
        title: 'Example',
        child: SizedBox.expand(key: ValueKey('content')),
      ),
    );
    final content = find.byKey(const ValueKey('content'));
    final element = tester.element(content);
    final bounds = tester.getRect(content);
    expect(bounds.left, 10);
    expect(bounds.right, 370);
    expect(bounds.bottom, 810);
    expect(MediaQuery.platformBrightnessOf(element), Brightness.light);
    await tap(tester, 'example-settings-toggle');
    await tap(tester, 'example-theme-dark');
    expect(MediaQuery.platformBrightnessOf(element), Brightness.dark);
    expect(Theme.of(element).brightness, Brightness.dark);
    expect(tester.getRect(content), bounds);
    tester.platformDispatcher.platformBrightnessTestValue = Brightness.light;
    await tester.pumpAndSettle();
    expect(MediaQuery.platformBrightnessOf(element), Brightness.dark);
    await tap(tester, 'example-theme-light');
    expect(MediaQuery.platformBrightnessOf(element), Brightness.light);
    await tap(tester, 'example-theme-system');
    tester.platformDispatcher.platformBrightnessTestValue = Brightness.dark;
    await tester.pumpAndSettle();
    expect(MediaQuery.platformBrightnessOf(element), Brightness.dark);
    await tap(tester, 'example-fps-toggle');
    await tap(tester, 'example-settings-close');
    expect(
      tester.getRect(find.byKey(const ValueKey('example-fps'))).right,
      358,
    );
    expect(tester.element(content), same(element));
    expect(tester.getRect(content), bounds);
    await tester.pumpWidget(const SizedBox.shrink());
    expect(tester.takeException(), isNull);
  });

  testWidgets('FPS floats above routes and releases its sampling resources', (
    tester,
  ) async {
    final semantics = tester.ensureSemantics();
    await tester.pumpWidget(
      const FlaxExampleApp(title: 'Example', child: SizedBox.expand()),
    );
    await tap(tester, 'example-settings-toggle');
    await tap(tester, 'example-fps-toggle');
    expect(find.text('Idle'), findsOneWidget);
    final fps = find.byKey(const ValueKey('example-fps'));
    final fpsSemantics = tester.getSemantics(fps);
    expect(fpsSemantics.label, 'Frame rate: idle');
    expect(fpsSemantics.hasChildren, isFalse);
    semantics.dispose();
    final timings = List.generate(60, (index) {
      final time = index * 16667;
      return FrameTiming(
        vsyncStart: time,
        buildStart: time,
        buildFinish: time + 100,
        rasterStart: time + 100,
        rasterFinish: time + 200,
        rasterFinishWallTime: time + 200,
      );
    });
    tester.platformDispatcher.onReportTimings!(timings);
    await tester.pump(const Duration(seconds: 1));
    await tester.pump();
    expect(find.text('60'), findsOneWidget);
    expect(find.text('Live'), findsOneWidget);
    await tap(tester, 'example-settings-close');
    final context = tester.element(find.byType(Scaffold));
    showDialog<void>(
      context: context,
      builder: (_) => const Dialog(child: SizedBox(width: 100, height: 100)),
    );
    await tester.pumpAndSettle();
    expect(fps, findsOneWidget);
    final overlayStack = tester.widget<Stack>(
      find.ancestor(of: fps, matching: find.byType(Stack)).first,
    );
    expect(overlayStack.children.last, isA<Positioned>());
    expect(
      find.ancestor(of: fps, matching: find.byType(Navigator)),
      findsNothing,
    );
    Navigator.of(context).pop();
    await tester.pumpAndSettle();
    await tester.pump(const Duration(seconds: 1));
    expect(find.text('Idle'), findsOneWidget);
    expect(find.text('—'), findsOneWidget);
    await tap(tester, 'example-settings-toggle');
    await tap(tester, 'example-fps-toggle');
    expect(fps, findsNothing);
    tester.platformDispatcher.onReportTimings?.call(timings);
    await tester.pump(const Duration(seconds: 1));
    await tap(tester, 'example-fps-toggle');
    await tester.pumpWidget(const SizedBox.shrink());
    tester.platformDispatcher.onReportTimings?.call(timings);
    await tester.pump(const Duration(seconds: 1));
    expect(tester.binding.transientCallbackCount, 0);
    expect(tester.takeException(), isNull);
  });
}
