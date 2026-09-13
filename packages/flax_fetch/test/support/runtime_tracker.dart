import 'package:flax_test/flax_test.dart';

import 'engine.dart';

class RuntimeTracker extends FlaxTestRuntimeTracker {
  RuntimeTracker() : super(createTestRuntime());
}
