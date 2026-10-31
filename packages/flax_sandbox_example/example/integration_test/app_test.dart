import 'package:integration_test/integration_test.dart';

import '../test/application_test.dart' as application;
import '../test/support/permissions_scenario.dart';

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();
  application.main(nativePaths: true);
  permissionsScenario();
}
