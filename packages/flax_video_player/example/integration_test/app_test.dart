import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';

import '../test/application_test.dart' show exerciseVideoExample;

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();
  testWidgets(
    'decodes and controls HTTPS trailers through real native bindings',
    exerciseVideoExample,
  );
}
