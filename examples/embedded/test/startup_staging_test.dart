// ignore_for_file: implementation_imports
import 'dart:async';
import 'dart:io';

import 'package:flax/flax.dart';
import 'package:flax/src/native/native_runtime.dart';
import 'package:flax_embedded/main.dart' as gallery;
import 'package:flax_example_support/flax_example_support.dart';
import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flax_sandbox_example/flax_sandbox_example.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

import 'support/gallery.dart';

class _Runtime extends FlaxTestRuntimeTracker {
  _Runtime({bool production = false}) : super(FlaxEngine.createRuntime()) {
    if (Platform.environment['FLAX_ENGINE_RESULTS'] == '1') {
      (inner as FlaxNativeJsRuntime).useEngineResultsForExperiment(
        true,
        arguments: Platform.environment['FLAX_ENGINE_ARGUMENTS'] == '1',
      );
    }
    if (!production) evaluate('globalThis.__flaxStartupLazy = true');
    for (final (name, flag) in const [
      ('__flaxWidgetBatch', 'FLAX_WIDGET_BATCH'),
      ('__flaxObjectArguments', 'FLAX_OBJECT_ARGUMENTS'),
      ('__flaxCallbackMemo', 'FLAX_CALLBACK_MEMO'),
      ('__flaxArgumentReferences', 'FLAX_ARGUMENT_REFERENCES'),
    ]) {
      if (Platform.environment[flag] == '1') {
        evaluate('globalThis.$name = true');
      }
    }
  }
  bool? background;
  @override
  Future<bool> prepareSources(
    List<FlaxJsSource> sources, {
    required FlaxJsSource entry,
    Future<void>? cancelled,
  }) async => background = await super.prepareSources(
    sources,
    entry: entry,
    cancelled: cancelled,
  );
  void Function(String)? afterSource;
  final inspectedTypes = <Type>{};
  @override
  List<Object?> dartTypeParts(Type type) {
    inspectedTypes.add(type);
    return super.dartTypeParts(type);
  }

  @override
  FlaxJsValue evaluateSource(FlaxJsSource source) {
    final result = super.evaluateSource(source);
    afterSource?.call(source.sourceUrl);
    return result;
  }
}

Future<Object?> _prepare(WidgetTester tester, FlaxSession session) async {
  Object? failure;
  var done = false;
  final preparation = session.prepareForExperiment().then(
    (_) {
      done = true;
    },
    onError: (Object error) {
      failure = error;
      done = true;
    },
  );
  for (var frame = 0; frame < 300 && !done; frame++) {
    await tester.pump(const Duration(milliseconds: 16));
    await tester.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 1)),
    );
  }
  expect(done, isTrue);
  await preparation;
  return failure;
}

void main() {
  late Directory storage;
  late String source;
  late FlaxBindingRegistry bindings;
  setUpAll(() async {
    storage = await Directory.systemTemp.createTemp('flax-staged-gallery-');
  });
  setUp(() async {
    source = await gallery.loadAggregateSource(storageDirectory: storage.path);
    bindings = gallery.createEmbeddedBindings(
      sandboxDemoDirectory: '${storage.path}/sandbox-demo',
    );
  });
  tearDownAll(() async {
    await FlaxLocalStoragePlugin.shutdown().timeout(
      const Duration(seconds: 10),
    );
    await storage.delete(recursive: true);
  });
  testWidgets('ordinary FlaxView loads the full gallery and closes cleanly', (
    tester,
  ) async {
    tester.view.physicalSize = const Size(1200, 1000);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.resetPhysicalSize);
    addTearDown(tester.view.resetDevicePixelRatio);
    final runtime = _Runtime(production: true);
    final errors = <Object>[];
    try {
      await flaxTestPumpView(
        tester,
        FlaxExampleApp(
          title: 'Gallery',
          child: FlaxView(
            createRuntime: () => runtime,
            source: source,
            bindings: bindings,
            plugins: gallery.galleryPlugins,
            namespace: 'ordinary-gallery',
            onError: (error, _) => errors.add(error),
          ),
        ),
      );
      expect(runtime.background, isTrue);
      expect(errors, isEmpty);
      await exerciseGallery(tester);
    } finally {
      await tester.pumpWidget(const SizedBox.shrink());
      await pumpGalleryUntil(tester, () => runtime.isDisposed);
      expect(runtime.handlesAtDispose, 0);
      await waitGalleryIO(tester, FlaxSandboxExample.pendingLifecycle);
      await waitGalleryIO(tester, FlaxLocalStoragePlugin.shutdown());
    }
    expect(errors, isEmpty);
  });
  testWidgets('staged full gallery retains all modules and cleans up', (
    tester,
  ) async {
    tester.view.physicalSize = const Size(1200, 1000);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.resetPhysicalSize);
    addTearDown(tester.view.resetDevicePixelRatio);
    final runtime = _Runtime();
    final errors = <Object>[];
    final session = FlaxSession(
      source: source,
      createRuntime: () => runtime,
      bindings: bindings,
      plugins: gallery.galleryPlugins,
      namespace: 'staged-gallery',
      onError: (error, _) => errors.add(error),
    );
    await tester.pumpWidget(
      const FlaxExampleApp(title: 'Staged gallery', child: SizedBox.shrink()),
    );
    expect(await _prepare(tester, session), isNull);
    await tester.pumpWidget(
      FlaxExampleApp(
        title: 'Staged gallery',
        child: FlaxView.session(session: session),
      ),
    );
    await tester.pumpAndSettle();
    expect(
      runtime.inspectedTypes,
      isNot(contains(DateTime)),
      reason: 'First-screen binding IDs do not need unrelated type sources',
    );
    await exerciseGallery(tester);
    await tester.pumpWidget(const SizedBox.shrink());
    final closed = session.close();
    await pumpGalleryUntil(tester, () => runtime.isDisposed);
    await closed;
    expect(runtime.handlesAtDispose, 0);
    expect(errors, isEmpty);
    await waitGalleryIO(tester, FlaxSandboxExample.pendingLifecycle);
    await waitGalleryIO(tester, FlaxLocalStoragePlugin.shutdown());
  });
  testWidgets(
    'closing between module steps does not access unfinished helpers',
    (tester) async {
      final runtime = _Runtime();
      final errors = <Object>[];
      late FlaxSession session;
      Future<void>? closed;
      runtime.afterSource = (url) {
        if (url.endsWith('registry.js')) {
          scheduleMicrotask(() {
            closed = session.close();
          });
        }
      };
      session = FlaxSession(
        source: source,
        createRuntime: () => runtime,
        bindings: bindings,
        plugins: gallery.galleryPlugins,
        onError: (error, _) => errors.add(error),
      );
      await tester.pumpWidget(const SizedBox.shrink());
      expect(await _prepare(tester, session), isA<StateError>());
      expect(closed, isNotNull);
      await closed;
      expect(runtime.isDisposed, isTrue);
      expect(runtime.handlesAtDispose, 0);
      expect(errors, isEmpty);
    },
  );
}
