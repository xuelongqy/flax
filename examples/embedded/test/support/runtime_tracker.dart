import 'package:flax_embedded/engine.dart';
import 'package:flax_test/flax_test.dart';

/// Uses the shared weak diagnostics so tracking never roots business objects.
class RuntimeTracker extends FlaxTestRuntimeTracker {
  RuntimeTracker() : super(createExampleRuntime());
}
