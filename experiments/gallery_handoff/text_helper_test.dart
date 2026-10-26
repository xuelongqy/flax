// ignore_for_file: depend_on_referenced_packages
import 'dart:io';

import 'package:flax/flax.dart';
import 'package:flax_embedded/main.dart' as gallery;
import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  late Directory storage;
  late String source;
  setUpAll(() async {
    final root = Directory.current.parent.parent.path;
    storage = await Directory('$root/.local/tmp').createTemp('text-helper-');
    await gallery.loadAggregateSource(storageDirectory: storage.path);
    source = File('$root/.local/gallery-handoff/text-probe.js')
        .readAsStringSync();
  });
  tearDownAll(() async {
    await FlaxLocalStoragePlugin.shutdown();
    await storage.delete(recursive: true);
  });
  testWidgets('shared text retains palette dependencies and fixed colors', (
    tester,
  ) async {
    final runtime = FlaxTestRuntimeTracker(FlaxEngine.createRuntime());
    final errors = <Object>[];
    final session = FlaxSession(
      createRuntime: () => runtime,
      source: source,
      bindings: gallery.embeddedBindings,
      plugins: gallery.galleryPlugins,
      onError: (error, _) => errors.add(error),
    );
    try {
      for (final (brightness, expected) in const [
        (Brightness.light, Color(0xff202d29)),
        (Brightness.dark, Color(0xffe4eee7)),
        (Brightness.light, Color(0xff202d29)),
      ]) {
        await tester.pumpWidget(
          MediaQuery(
            data: MediaQueryData(platformBrightness: brightness),
            child: Directionality(
              textDirection: TextDirection.ltr,
              child: FlaxView.session(session: session),
            ),
          ),
        );
        await tester.pumpAndSettle();
        expect(
          tester.widget<Text>(find.text('Implicit')).style!.color,
          expected,
        );
        expect(
          tester.widget<Text>(find.text('Explicit')).style!.color,
          const Color(0xff010203),
        );
        expect(errors, isEmpty);
      }
    } finally {
      await tester.pumpWidget(const SizedBox.shrink());
      await tester.pumpAndSettle();
      await flaxTestCloseSession(tester, session);
      expect(runtime.handlesAtDispose, 0);
    }
  });
}
