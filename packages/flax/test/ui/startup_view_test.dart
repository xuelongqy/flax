import 'package:flax/flax.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

const _source = '''
const {Text} = __flaxModules.require('@flax/flutter/widgets');
__flaxMount(Text('Prepared view'), 24);
''';

class _Runtime extends FlaxTestRuntimeTracker {
  _Runtime({this.block = false, this.reject = false})
    : super(FlaxEngine.createRuntime()) {
    addTearDown(() {
      if (!isDisposed) dispose();
    });
  }
  final bool block, reject;
  bool started = false, background = false;
  @override
  Future<bool> prepareSources(
    List<FlaxJsSource> sources, {
    required FlaxJsSource entry,
    Future<void>? cancelled,
  }) async {
    started = true;
    return background = await super.prepareSources(
      [
        ...sources,
        if (block) FlaxJsSource('while (true) {}'),
        if (reject) FlaxJsSource('missingDartHost();'),
      ],
      entry: entry,
      cancelled: cancelled,
    );
  }
}

Future<void> _until(WidgetTester tester, bool Function() ready) async {
  for (var turn = 0; turn < 5000 && !ready(); turn++) {
    await tester.pump(const Duration(milliseconds: 16));
    await tester.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 1)),
    );
  }
  expect(ready(), isTrue, reason: 'View preparation did not finish');
}

void main() {
  testWidgets(
    'an explicit Session can mount while an owning View is preparing',
    (tester) async {
      final runtimes = <_Runtime>[];
      final errors = <Object>[];
      _Runtime create(bool block) {
        final runtime = _Runtime(block: block);
        runtimes.add(runtime);
        return runtime;
      }

      final first = FlaxView(
        key: const ValueKey('preparing'),
        createRuntime: () => create(true),
        source: _source,
        onError: (error, _) => errors.add(error),
      );
      final explicit = FlaxSession(
        createRuntime: () => create(false),
        source: _source.replaceAll('Prepared view', 'Explicit'),
        bindings: FlaxBindingRegistry([]),
        onError: (error, _) => errors.add(error),
      );
      Widget both(bool showExplicit) => Directionality(
        textDirection: TextDirection.ltr,
        child: Column(
          children: [
            first,
            if (showExplicit) FlaxView.session(session: explicit),
          ],
        ),
      );
      try {
        await tester.pumpWidget(both(false));
        await _until(
          tester,
          () => runtimes.isNotEmpty && runtimes.first.started,
        );
        await tester.pumpWidget(both(true));
        expect(find.text('Explicit'), findsOneWidget);
        await _until(
          tester,
          () =>
              find.text('Prepared view').evaluate().isNotEmpty ||
              errors.isNotEmpty,
        );
        expect(errors, isEmpty);
        expect(find.text('Prepared view'), findsOneWidget);
        expect(runtimes, hasLength(2));
        expect(runtimes.first.background, isFalse);
      } finally {
        await tester.pumpWidget(const SizedBox.shrink());
        await flaxTestCloseSession(tester, explicit);
        await _until(
          tester,
          () => runtimes.every((runtime) => runtime.isDisposed),
        );
      }
      expect(
        runtimes.every((runtime) => runtime.handlesAtDispose == 0),
        isTrue,
      );
    },
  );

  testWidgets(
    'ordinary FlaxView prepares modules and keeps its existing source API',
    (tester) async {
      final runtimes = <_Runtime>[];
      final errors = <Object>[];
      await tester.pumpWidget(
        Directionality(
          textDirection: TextDirection.ltr,
          child: FlaxView(
            source: _source,
            createRuntime: () {
              final runtime = _Runtime();
              runtimes.add(runtime);
              return runtime;
            },
            onError: (error, _) => errors.add(error),
          ),
        ),
      );
      await _until(
        tester,
        () =>
            find.text('Prepared view').evaluate().isNotEmpty ||
            errors.isNotEmpty,
      );
      expect(errors, isEmpty);
      expect(find.text('Prepared view'), findsOneWidget);
      expect(runtimes, hasLength(1));
      expect(runtimes.single.background, isTrue);
      await tester.pumpWidget(const SizedBox.shrink());
      await _until(
        tester,
        () => runtimes.every((runtime) => runtime.isDisposed),
      );
      expect(runtimes.single.handlesAtDispose, 0);
    },
  );

  testWidgets(
    'unmount cancels a running worker and the next View still loads',
    (tester) async {
      final runtimes = <_Runtime>[];
      final errors = <Object>[];
      Widget view() => Directionality(
        textDirection: TextDirection.ltr,
        child: FlaxView(
          source: _source,
          createRuntime: () {
            final runtime = _Runtime(block: runtimes.isEmpty);
            runtimes.add(runtime);
            return runtime;
          },
          onError: (error, _) => errors.add(error),
        ),
      );
      await tester.pumpWidget(view());
      await _until(tester, () => runtimes.isNotEmpty && runtimes.first.started);
      await tester.pumpWidget(const SizedBox.shrink());
      await _until(tester, () => runtimes.first.isDisposed);
      expect(runtimes.first.handlesAtDispose, 0);
      expect(errors, isEmpty);
      await tester.pumpWidget(view());
      await _until(
        tester,
        () =>
            find.text('Prepared view').evaluate().isNotEmpty ||
            errors.isNotEmpty,
      );
      expect(errors, isEmpty);
      expect(find.text('Prepared view'), findsOneWidget);
      await tester.pumpWidget(const SizedBox.shrink());
      await _until(
        tester,
        () => runtimes.every((runtime) => runtime.isDisposed),
      );
    },
  );

  testWidgets('a factory needing Dart retries without recreating its runtime', (
    tester,
  ) async {
    final runtimes = <_Runtime>[];
    final errors = <Object>[];
    await tester.pumpWidget(
      Directionality(
        textDirection: TextDirection.ltr,
        child: FlaxView(
          source: _source,
          createRuntime: () {
            final runtime = _Runtime(reject: true);
            runtimes.add(runtime);
            return runtime;
          },
          onError: (error, _) => errors.add(error),
        ),
      ),
    );
    await _until(
      tester,
      () =>
          find.text('Prepared view').evaluate().isNotEmpty || errors.isNotEmpty,
    );
    expect(errors, isEmpty);
    expect(find.text('Prepared view'), findsOneWidget);
    expect(runtimes, hasLength(1));
    expect(runtimes.first.isDisposed, isFalse);
    await tester.pumpWidget(const SizedBox.shrink());
    await _until(tester, () => runtimes.every((runtime) => runtime.isDisposed));
  });

  testWidgets(
    'two owning Views keep independent runtimes and close independently',
    (tester) async {
      final runtimes = <_Runtime>[];
      final errors = <Object>[];
      Widget view(String text) => FlaxView(
        key: ValueKey(text),
        source: _source.replaceAll('Prepared view', text),
        createRuntime: () {
          final runtime = _Runtime();
          runtimes.add(runtime);
          return runtime;
        },
        onError: (error, _) => errors.add(error),
      );
      await tester.pumpWidget(
        Directionality(
          textDirection: TextDirection.ltr,
          child: Column(children: [view('First'), view('Second')]),
        ),
      );
      await _until(
        tester,
        () => find.text('Second').evaluate().isNotEmpty || errors.isNotEmpty,
      );
      expect(errors, isEmpty);
      expect(find.text('First'), findsOneWidget);
      expect(find.text('Second'), findsOneWidget);
      expect(runtimes, hasLength(2));
      expect(runtimes.first.background, isTrue);
      expect(runtimes.last.background, isFalse);
      await tester.pumpWidget(const SizedBox.shrink());
      await _until(
        tester,
        () => runtimes.every((runtime) => runtime.isDisposed),
      );
      expect(
        runtimes.every((runtime) => runtime.handlesAtDispose == 0),
        isTrue,
      );
    },
  );

  testWidgets(
    'business errors report once and dispose partial initialization',
    (tester) async {
      final runtimes = <_Runtime>[];
      final errors = <Object>[];
      await tester.pumpWidget(
        FlaxView(
          source: "throw new Error('business failure')",
          createRuntime: () {
            final runtime = _Runtime();
            runtimes.add(runtime);
            return runtime;
          },
          onError: (error, _) => errors.add(error),
        ),
      );
      await _until(tester, () => errors.isNotEmpty);
      expect(errors, hasLength(1));
      expect(errors.single.toString(), contains('business failure'));
      expect(find.byType(ErrorWidget), findsOneWidget);
      await tester.pumpWidget(const SizedBox.shrink());
      await _until(
        tester,
        () => runtimes.every((runtime) => runtime.isDisposed),
      );
      expect(
        runtimes.every((runtime) => runtime.handlesAtDispose == 0),
        isTrue,
      );
    },
  );
}
