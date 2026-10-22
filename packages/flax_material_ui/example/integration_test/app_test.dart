import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';

import '../test/application_test.dart' show exerciseMaterialExample;

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();
  testWidgets(
    'runs the interactive Material component collection',
    exerciseMaterialExample,
  );
}
