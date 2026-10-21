import 'package:flax_standalone/main.dart' as app;
import 'package:flutter/widgets.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';

import 'support/scenario.dart';

void main() {
  testWidgets(
    'standalone input, State, signals, themes and navigation',
    applicationScenario,
  );
  testWidgets('missing manifest reports an error without Material ancestors', (
    t,
  ) async {
    rootBundle.evict('assets/flax/flax.json');
    addTearDown(() => rootBundle.evict('assets/flax/flax.json'));
    t.binding.defaultBinaryMessenger.setMockMessageHandler(
      'flutter/assets',
      (_) async => null,
    );
    addTearDown(
      () => t.binding.defaultBinaryMessenger.setMockMessageHandler(
        'flutter/assets',
        null,
      ),
    );
    await t.runAsync(app.main);
    await t.pump();
    expect(find.byType(ErrorWidget), findsOneWidget);
    expect(t.takeException().toString(), contains('assets/flax/flax.json'));
    await t.pumpWidget(const SizedBox());
  });
}
