import 'package:integration_test/integration_test.dart';

import '../test/application_test.dart' as application;

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();
  application.main();
}
