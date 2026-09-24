import 'package:flax/flax.dart';

/// Test-only module constructor that pins the Core literal tuple.
FlaxBindingModule testBindingModule(
  String name,
  List<FlaxTypeBinding> types, {
  String? moduleId,
  int uiProtocol = 21,
  List<FlaxFunctionBinding> functions = const [],
}) => FlaxBindingModule(
  name,
  types,
  moduleId: moduleId ?? 'test/$name',
  uiProtocol: uiProtocol,
  requiredCapabilities: const <String>[],
  functions: functions,
);
