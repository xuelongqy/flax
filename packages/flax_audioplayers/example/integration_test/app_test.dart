import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';

import '../test/application_test.dart' show exerciseAudioExample;

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();
  testWidgets(
    'prepares and controls HTTPS audio through real native bindings',
    exerciseAudioExample,
  );
}
