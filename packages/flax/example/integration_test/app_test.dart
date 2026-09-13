import 'package:flax_example/main.dart' as app;
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();
  testWidgets('runs the flax package example', (tester) async {
    await tester.runAsync(app.startApplication);
    await tester.pump();
    await tester.pump(const Duration(milliseconds: 20));
    expect(find.text('Flax core ready'), findsOneWidget);
  });
}
