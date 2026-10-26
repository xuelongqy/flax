import 'package:flax_test/flax_test.dart';
import 'package:flax_fetch_example/main.dart' as app;
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();
  testWidgets('runs the flax_fetch package example', (tester) async {
    await tester.runAsync(app.startApplication);
    await tester.pump();
    await tester.pump(const Duration(milliseconds: 20));
    await flaxTestWaitForViews(tester);
    expect(find.text('Fetch ready'), findsOneWidget);
  });
}
