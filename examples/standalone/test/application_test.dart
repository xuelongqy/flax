import 'package:flax_standalone/main.dart' as app;
import 'package:flax/flax.dart';
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
    await t.pumpWidget(
      FlaxView.bundle(
        createRuntime: app.createRuntime,
        bindings: app.bindings,
        assetBundle: _MissingBundle(),
      ),
    );
    for (
      var i = 0;
      i < 200 && find.byType(ErrorWidget).evaluate().isEmpty;
      i++
    ) {
      await t.runAsync(
        () => Future<void>.delayed(const Duration(milliseconds: 5)),
      );
      await t.pump();
    }
    expect(find.byType(ErrorWidget), findsOneWidget);
    expect(t.takeException().toString(), contains('flax.json'));
    await t.pumpWidget(const SizedBox());
  });
}

class _MissingBundle extends CachingAssetBundle {
  @override
  Future<ByteData> load(String key) async =>
      throw FlutterError('Missing application asset: $key');
}
