import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../support/harness.dart' show registry;
import '../support/runtime_tracker.dart';

void main() {
  test(
    'closing an unloaded session is idempotent and never creates an engine',
    () async {
      var created = false;
      final session = FlaxSession(
        createRuntime: () {
          created = true;
          throw StateError('Runtime must not be created');
        },
        source: 'throw Error("Source must not run")',
        bindings: registry,
      );
      final closing = session.close();
      expect(session.close(), same(closing));
      await closing;
      expect(created, isFalse);
    },
  );

  testWidgets('failed initialization closes once and rejects later mounts', (
    tester,
  ) async {
    final runtime = RuntimeTracker();
    final errors = <Object>[];
    var creations = 0;
    final session = FlaxSession(
      createRuntime: () {
        creations++;
        return runtime;
      },
      source: 'throw Error("initialization failed")',
      bindings: registry,
      onError: (error, _) => errors.add(error),
    );
    await tester.pumpWidget(
      MaterialApp(home: FlaxView.session(session: session)),
    );
    expect(errors, hasLength(1));
    expect(runtime.isDisposed, isTrue);
    expect(runtime.handlesAtDispose, 0);
    await tester.pumpWidget(const SizedBox());
    final closing = session.close();
    expect(session.close(), same(closing));
    await closing;
    await tester.pumpWidget(
      MaterialApp(home: FlaxView.session(session: session)),
    );
    expect(errors, hasLength(2));
    expect(creations, 1);
    expect(errors.last.toString(), contains('Closed Flax session'));
    await tester.pumpWidget(const SizedBox());
  });
}
