import 'dart:io';

import 'package:flax_embedded/main.dart' as app;
import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';

import '../test/support/gallery.dart';
import '../test/support/runtime_tracker.dart';

void main() {
  final binding = IntegrationTestWidgetsFlutterBinding.ensureInitialized();
  binding.framePolicy = LiveTestWidgetsFlutterBindingFramePolicy.benchmarkLive;
  testWidgets(
    'all owner examples compose, navigate and cleanly recreate the session',
    (tester) async {
      final storage = await tester.runAsync(
        () => Directory.systemTemp.createTemp('flax-gallery-app-'),
      );
      final source = (await tester.runAsync(
        () => app.loadAggregateSource(storageDirectory: storage!.path),
      ))!;
      final runtimes = <RuntimeTracker>[];
      await tester.pumpWidget(
        app.EmbeddedApp(
          source: source,
          createRuntime: () {
            final runtime = RuntimeTracker();
            runtimes.add(runtime);
            return runtime;
          },
        ),
      );
      await tester.pumpAndSettle();
      await exerciseGallery(tester);
      await tapGallery(tester, find.text('Unmount Flax'));
      await pumpGalleryUntil(tester, () => runtimes.first.isDisposed);
      expect(runtimes.first.handlesAtDispose, 0);
      await tapGallery(tester, find.text('Mount Flax'));
      expect(runtimes, hasLength(2));
      await tapGallery(tester, find.byKey(const ValueKey('open-core')));
      expect(find.text('Count: 0'), findsOneWidget);
      await tester.pumpWidget(const SizedBox.shrink());
      await pumpGalleryUntil(tester, () => runtimes.last.isDisposed);
      expect(runtimes.last.handlesAtDispose, 0);
      await waitGalleryIO(tester, FlaxLocalStoragePlugin.shutdown());
      await tester.runAsync(() => storage!.delete(recursive: true));
      binding.reportData = {
        'scenario': 'embedded-module-aggregate',
        'moduleComposition': true,
        'sharedHostModules': true,
        'sessionRecreation': true,
        'ownerEntrances': 7,
        'zeroHandlesAtDispose': true,
        'completed': true,
      };
    },
  );
}
