import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

/// Follow the same entrances used by people browsing the gallery.
Future<void> exerciseGallery(WidgetTester tester) async {
  const entries = [
    ('core', 'Small pieces. Real Flutter.'),
    ('material', 'Material, in full color.'),
    ('cupertino', 'Quiet details. Native feel.'),
    ('canvas', 'Make something a little different.'),
    ('fetch', 'Ask. Receive. Explore.'),
    ('websocket', 'A conversation, in real time.'),
    ('storage', 'A little memory goes a long way.'),
  ];
  expect(find.text('${entries.length} modules'), findsOneWidget);
  for (final entry in entries) {
    await tapGallery(tester, find.byKey(ValueKey('open-${entry.$1}')));
    expect(find.text(entry.$2), findsOneWidget);
    switch (entry.$1) {
      case 'core':
        await tapGallery(tester, find.text('Increment JS'));
        expect(find.text('Count: 1'), findsOneWidget);
        expect(find.text('Doubled: 2'), findsOneWidget);
      case 'material' || 'cupertino':
        await tapGallery(tester, find.text('Filled button'));
        expect(find.text('Button presses: 1'), findsOneWidget);
      case 'canvas':
        await tapGallery(tester, find.text('Ocean'));
        expect(find.text('Ocean palette'), findsOneWidget);
      case 'fetch':
        expect(find.text('Fetch ready'), findsOneWidget);
      case 'websocket':
        await tapGallery(tester, find.text('Send message'));
        expect(find.text('Connect to a server first.'), findsOneWidget);
      case 'storage':
        await tapGallery(tester, find.text('Clear area'));
        await tapGallery(tester, find.text('Store +1'));
        expect(find.text('Stored: 1'), findsOneWidget);
        await waitGalleryIO(tester, FlaxLocalStoragePlugin.flush());
    }
    await tapGallery(tester, find.byKey(const ValueKey('gallery-back')));
    expect(find.text('Choose your playground'), findsOneWidget);
    expect(tester.takeException(), isNull, reason: '${entry.$1} example');
  }
}

Future<void> tapGallery(WidgetTester tester, Finder finder) async {
  // Generated hosts and native Widgets can both carry the configured key.
  final target = finder.last;
  await tester.ensureVisible(target);
  await tester.tap(target);
  await tester.pumpAndSettle();
}

Future<void> pumpGalleryUntil(WidgetTester tester, bool Function() done) async {
  for (var i = 0; i < 200 && !done(); i++) {
    await tester.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 10)),
    );
    await tester.pump(const Duration(milliseconds: 10));
  }
  expect(done(), isTrue);
}

/// File completion can also schedule callbacks on the fake Flutter clock.
Future<void> waitGalleryIO(WidgetTester tester, Future<void> future) async {
  var completed = false;
  final result = future.whenComplete(() => completed = true);
  await pumpGalleryUntil(tester, () => completed);
  await result;
}
