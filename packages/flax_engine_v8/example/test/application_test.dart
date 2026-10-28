import 'package:flax_engine_v8_example/main.dart' as app;
import 'package:flax_test/flax_test.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('starts the flax_engine_v8 package example', (tester) async {
    await tester.runAsync(app.startApplication);
    await tester.pump();
    await flaxTestWaitForViews(tester);
    expect(find.text('V8 ready'), findsOneWidget);
    await flaxTestUnmount(tester);
  });
}
