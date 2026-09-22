import 'package:flax/flax.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../../.dart_tool/flax/ui/readonly_values_bindings.dart';
import '../fixtures/readonly_values.dart' as values;
import '../support/owned_harness.dart';

OwnedHarness _harness() =>
    OwnedHarness(fixture: 'readonly_values', extra: [readonly_valuesBindings]);

void main() {
  testWidgets('unregistered readonly declarations fail only when read', (
    t,
  ) async {
    final h = OwnedHarness(fixture: 'readonly_values');
    final readsBefore = values.reads;
    try {
      await t.pumpWidget(h.app('readonly'));
      await t.pumpAndSettle();
      expect(h.errors, isEmpty);
      expect(values.reads, readsBefore);
      expect(
        h.string(
          'readonlyValues.capture(() => readonlyValues.values.changing)',
        ),
        contains('Unknown top-level function'),
      );
      expect(values.reads, readsBefore);
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });

  testWidgets('SDK readonly values match Dart and follow platform changes', (
    t,
  ) async {
    final h = _harness();
    final previous = debugDefaultTargetPlatformOverride;
    try {
      await t.pumpWidget(h.app('readonly'));
      await t.pumpAndSettle();
      expect(h.errors, isEmpty);
      expect(h.boolean('readonlyValues.getKIsWeb()'), kIsWeb);
      expect(h.number('readonlyValues.kToolbarHeight'), kToolbarHeight);
      expect(
        h.number('readonlyValues.getKTabScrollDuration().inMilliseconds'),
        kTabScrollDuration.inMilliseconds,
      );
      for (final platform in [TargetPlatform.android, TargetPlatform.iOS]) {
        debugDefaultTargetPlatformOverride = platform;
        expect(
          h.boolean(
            'readonlyValues.getDefaultTargetPlatform() === readonlyValues.platform.${platform.name}',
          ),
          isTrue,
        );
      }
      expect(h.errors, isEmpty);
    } finally {
      debugDefaultTargetPlatformOverride = previous;
      await h.finish(t);
    }
  });

  testWidgets(
    'readonly reads retain initialization, references, callbacks and errors',
    (t) async {
      final h = _harness();
      try {
        await t.pumpWidget(h.app('readonly'));
        await t.pumpAndSettle();
        expect(h.errors, isEmpty);
        expect(values.reads, 0);
        expect(values.finalInitializations, 0);
        expect(values.lateInitializations, 0);
        expect(h.number('readonlyValues.values.answer'), 42);
        expect(h.number('readonlyValues.values.changing'), 10);
        expect(values.reads, 1);
        values.seed = 20;
        expect(h.number('readonlyValues.values.changing'), 20);
        expect(values.reads, 2);
        expect(h.number('readonlyValues.values.initialized'), 20);
        values.seed = 30;
        expect(h.number('readonlyValues.values.initialized'), 20);
        expect(values.finalInitializations, 1);
        expect(h.number('readonlyValues.values.lazy'), 30);
        values.seed = 40;
        expect(h.number('readonlyValues.values.lazy'), 30);
        expect(values.lateInitializations, 1);
        expect(
          h.string(
            'readonlyValues.capture(() => readonlyValues.values.assigned)',
          ),
          contains('LateInitializationError'),
        );
        values.assigned = 'ready';
        expect(h.string('readonlyValues.values.assigned'), 'ready');
        expect(h.boolean('readonlyValues.values.optional === null'), isTrue);
        expect(
          h.boolean(
            'readonlyValues.values.probe === readonlyValues.values.probe',
          ),
          isTrue,
        );
        h.execute('readonlyValues.values.probe.value = 12');
        expect(values.probe.value, 12);
        h.execute('readonlyValues.saved = readonlyValues.values.probe');
        expect(
          h.boolean(
            'readonlyValues.values.groups.get("probes").get(0) === readonlyValues.saved',
          ),
          isTrue,
        );
        expect(h.number('readonlyValues.values.numbers.get(0)'), 1);
        expect(h.number('readonlyValues.values.transform(2)'), 42);
        expect(
          h.string('readonlyValues.values.identity("generic")'),
          'generic',
        );
        expect(h.number('readonlyValues.values.identity(3)'), 3);
        expect(
          h.string(
            'readonlyValues.capture(() => readonlyValues.values.failing)',
          ),
          contains('readonly read failure 1'),
        );
        expect(
          h.string(
            'readonlyValues.capture(() => readonlyValues.values.failing)',
          ),
          contains('readonly read failure 2'),
        );
        expect(values.failures, 2);
        h.execute('readonlyValues.values.sideEffect');
        expect(values.reads, 3);
        h.execute(
          'readonlyValues.values.later.then(value => readonlyValues.fulfilled = value)',
        );
        h.execute(
          'readonlyValues.values.laterFailure.catch(error => readonlyValues.rejected = String(error))',
        );
        await t.pumpAndSettle();
        expect(h.number('readonlyValues.fulfilled'), 40);
        expect(
          h.string('readonlyValues.rejected'),
          contains('readonly future failure'),
        );
        expect(h.runtime.pendingFutures, 0);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
      expect(values.probe.disposed, isFalse);
      expect(
        () => h.execute('readonlyValues.values.changing'),
        throwsStateError,
      );
      expect(() => h.execute('readonlyValues.saved.value'), throwsStateError);
    },
  );

  testWidgets('closing a session suppresses pending readonly Future delivery', (
    t,
  ) async {
    final first = _harness();
    final second = _harness();
    Widget app({bool includeFirst = true}) => MaterialApp(
      home: Row(
        children: [
          if (includeFirst)
            Expanded(
              key: const ValueKey('first'),
              child: FlaxView.session(session: first.session),
            ),
          Expanded(
            key: const ValueKey('second'),
            child: FlaxView.session(session: second.session),
          ),
        ],
      ),
    );
    try {
      await t.pumpWidget(app());
      await t.pumpAndSettle();
      expect(first.errors, isEmpty);
      expect(second.errors, isEmpty);
      first.execute(
        'readonlyValues.values.pending.then(() => readonlyValues.pendingDeliveries++)',
      );
      second.execute(
        'readonlyValues.values.pending.then(() => readonlyValues.pendingDeliveries++)',
      );
      expect(first.runtime.pendingFutures, 1);
      await t.pumpWidget(app(includeFirst: false));
      final closing = first.session.close();
      await t.pumpAndSettle();
      await closing;
      final callsAtClose = Map<String, int>.of(first.runtime.jsCalls);
      values.pendingCompletion.complete(55);
      await t.pumpAndSettle();
      expect(first.runtime.jsCalls, callsAtClose);
      expect(second.number('readonlyValues.pendingDeliveries'), 1);
      expect(first.runtime.handlesAtDispose, 0);
      expect(values.probe.disposed, isFalse);
      expect(first.errors, isEmpty);
      expect(second.errors, isEmpty);
    } finally {
      await first.finish(t);
      await second.finish(t);
    }
  });
}
