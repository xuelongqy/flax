import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:flax/flax.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

import '../support/engine.dart';

String _source(int version) =>
    '''
const {Text} = __flaxModules.require('@flax/flutter/widgets');
__flaxMount(Text('Version $version'), 24);
''';

Future<void> _until(WidgetTester tester, bool Function() ready) async {
  for (var turn = 0; turn < 5000 && !ready(); turn++) {
    await tester.pump(const Duration(milliseconds: 16));
    await tester.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 1)),
    );
  }
  expect(ready(), isTrue, reason: 'Development reload did not finish');
}

void main() {
  testWidgets(
    'reload button moves without blocking content and replaces owned sessions',
    (tester) async {
      final runtimes = <FlaxTestRuntimeTracker>[];
      final errors = <Object>[];
      var taps = 0;
      var viewport = const Size(320, 240);
      const frame = ValueKey('development-frame');
      FlaxJsRuntime createRuntime() {
        final runtime = FlaxTestRuntimeTracker(createTestRuntime());
        runtimes.add(runtime);
        return runtime;
      }

      Widget view() => Directionality(
        textDirection: TextDirection.ltr,
        child: Align(
          alignment: Alignment.topLeft,
          child: SizedBox.fromSize(
            key: frame,
            size: viewport,
            child: GestureDetector(
              behavior: HitTestBehavior.opaque,
              onTap: () => taps++,
              child: FlaxView(
                source: _source(1),
                developmentMode: true,
                createRuntime: createRuntime,
                onError: (error, _) => errors.add(error),
              ),
            ),
          ),
        ),
      );
      await tester.pumpWidget(view());
      final button = find.bySemanticsLabel('Reload Flax application');
      await _until(tester, () => button.evaluate().isNotEmpty);
      final before = tester.getCenter(button);
      await tester.drag(button, const Offset(-100, -60));
      await tester.pump();
      final moved = tester.getCenter(button);
      expect(moved.dx, lessThan(before.dx));
      expect(runtimes, hasLength(1));
      await tester.tapAt(const Offset(4, 4));
      await tester.pump();
      expect(taps, 1);
      await tester.tap(button);
      await tester.tap(button);
      await _until(
        tester,
        () =>
            runtimes.length == 2 &&
            runtimes.first.isDisposed &&
            button.evaluate().isNotEmpty,
      );
      expect(tester.getCenter(button), moved);
      expect(runtimes.first.handlesAtDispose, 0);
      viewport = const Size(100, 80);
      await tester.pumpWidget(view());
      await tester.pump();
      expect(
        tester.getRect(find.byKey(frame)).contains(tester.getCenter(button)),
        isTrue,
      );
      expect(runtimes, hasLength(2));
      Focus.of(
        tester.element(
          find.descendant(of: button, matching: find.byType(GestureDetector)),
        ),
      ).requestFocus();
      await tester.pump();
      await tester.sendKeyEvent(LogicalKeyboardKey.enter);
      await _until(
        tester,
        () => runtimes.length == 3 && button.evaluate().isNotEmpty,
      );
      await tester.pumpWidget(const SizedBox.shrink());
      await _until(
        tester,
        () => runtimes.every((runtime) => runtime.isDisposed),
      );
      expect(errors, isEmpty);
      expect(
        runtimes.every((runtime) => runtime.handlesAtDispose == 0),
        isTrue,
      );
    },
  );

  testWidgets(
    'reload re-reads network source and recovers after a failed download',
    (tester) async {
      final cache = (await tester.runAsync(
        () => Directory.systemTemp.createTemp('flax-development-reload-'),
      ))!;
      final errors = <Object>[];
      var version = 1;
      final runtimes = <FlaxTestRuntimeTracker>[];
      FlaxJsRuntime createRuntime() {
        final runtime = FlaxTestRuntimeTracker(createTestRuntime());
        runtimes.add(runtime);
        return runtime;
      }

      var reads = 0;
      var fail = false;
      Completer<void>? pending;
      Future<FlaxDownloadResponse> download(FlaxDownloadRequest request) async {
        reads++;
        await pending?.future;
        if (fail) throw StateError('development source unavailable');
        return FlaxDownloadResponse(
          finalUri: request.uri,
          statusCode: 200,
          headers: {
            'content-type': 'text/javascript',
            'cache-control': 'no-store',
          },
          body: Stream.value(utf8.encode(_source(version))),
        );
      }

      try {
        await tester.pumpWidget(
          Directionality(
            textDirection: TextDirection.ltr,
            child: SizedBox.expand(
              child: FlaxView.network(
                uri: Uri.parse('http://127.0.0.1:5173/@flax/dev.js'),
                format: FlaxRemoteFormat.javascript,
                createRuntime: createRuntime,
                developmentMode: true,
                cacheDirectory: cache,
                download: download,
                loadingBuilder: (_) => const SizedBox.expand(),
                errorBuilder: (_, error, stack) =>
                    const Text('Download failed'),
                onError: (error, _) => errors.add(error),
              ),
            ),
          ),
        );
        final button = find.bySemanticsLabel('Reload Flax application');
        await _until(tester, () => button.evaluate().isNotEmpty);
        expect(find.text('Version 1'), findsOneWidget);
        pending = Completer<void>();
        fail = true;
        await tester.tap(button);
        await _until(tester, () => reads == 2);
        expect(
          find.bySemanticsLabel('Reloading Flax application'),
          findsOneWidget,
        );
        pending.complete();
        await _until(tester, () => button.evaluate().isNotEmpty);
        expect(find.text('Download failed'), findsOneWidget);
        expect(errors, hasLength(1));
        fail = false;
        version = 2;
        await tester.tap(button);
        await _until(
          tester,
          () =>
              find.text('Version 2').evaluate().isNotEmpty &&
              button.evaluate().isNotEmpty,
        );
        expect(reads, 3);
        expect(errors, hasLength(1));
        await tester.pumpWidget(const SizedBox.shrink());
        await _until(
          tester,
          () => runtimes.every((runtime) => runtime.isDisposed),
        );
      } finally {
        await tester.runAsync(() => cache.delete(recursive: true));
      }
    },
  );
}
