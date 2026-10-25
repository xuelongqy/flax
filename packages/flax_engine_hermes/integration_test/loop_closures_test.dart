// Exercises the legacy iOS factory during its deprecation period.
// ignore_for_file: deprecated_member_use, deprecated_member_use_from_same_package
import 'package:flax_engine_hermes/flax_engine_hermes.dart';
import 'package:flax_test/runtime.dart';

void main() => flaxLoopClosureContract(FlaxHermesEngine.createRuntime);
