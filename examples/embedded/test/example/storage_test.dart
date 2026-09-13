import 'package:flutter_test/flutter_test.dart';

import '../support/storage_scenario.dart';

void main() {
  testWidgets(
    'persistent namespaces share, isolate and survive reentry',
    storageScenario,
  );
}
