import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';

FlaxBindingModule _module(
  String name, {
  String? moduleId,
  int uiProtocol = 23,
  List<String> requiredCapabilities = const <String>[],
  List<FlaxTypeBinding> types = const [],
  List<FlaxFunctionBinding> functions = const [],
  List<FlaxTypeRef> records = const [],
}) => FlaxBindingModule(
  name,
  types,
  moduleId: moduleId ?? 'test/$name',
  uiProtocol: uiProtocol,
  requiredCapabilities: requiredCapabilities,
  functions: functions,
  records: records,
);

Object? _invoke(Map<String, Object?> values) => null;

void main() {
  test('generated flutter bindings pin a literal protocol-23 tuple', () {
    expect(flaxBindingVersion, 23);
    expect(flutterBindings.name, 'flutter');
    expect(flutterBindings.moduleId, 'flax.core/flutter');
    expect(flutterBindings.uiProtocol, 23);
    expect(flutterBindings.requiredCapabilities, ['native-widget-proxies']);
    expect(FlaxBindingRegistry([flutterBindings]).modules, [flutterBindings]);
  });

  test('registry rejects a mismatched uiProtocol before publishing maps', () {
    expect(
      () => FlaxBindingRegistry([_module('previous', uiProtocol: 14)]),
      throwsArgumentError,
    );
  });

  test('registry rejects unknown requiredCapabilities', () {
    expect(
      () => FlaxBindingRegistry([
        _module('extra', requiredCapabilities: const ['not-supported']),
      ]),
      throwsArgumentError,
    );
  });

  test('registry rejects incomplete Record projections', () {
    for (final type in const [FlaxTypeRef('record'), FlaxTypeRef('object')]) {
      expect(
        () => FlaxBindingRegistry([
          _module('records', records: [type]),
        ]),
        throwsArgumentError,
      );
    }
  });

  test(
    'registry rejects duplicate moduleId but allows package-local names',
    () {
      expect(
        () => FlaxBindingRegistry([
          _module('left', moduleId: 'test/shared'),
          _module('right', moduleId: 'test/shared'),
        ]),
        throwsArgumentError,
      );
      final registry = FlaxBindingRegistry([
        _module('same', moduleId: 'package.a/same'),
        _module('same', moduleId: 'package.b/same'),
      ]);
      expect(registry.modules.map((module) => module.moduleId), [
        'package.a/same',
        'package.b/same',
      ]);
    },
  );

  test('registry rejects overriding the built-in component module', () {
    expect(
      () => FlaxBindingRegistry([
        _module('replacement', moduleId: 'flax.core/components'),
      ]),
      throwsArgumentError,
    );
  });

  test('registry rejects duplicate type and function ids', () {
    const type = FlaxEnumBinding('test/dup#type:Token', {});
    expect(
      () => FlaxBindingRegistry([
        _module('left', types: [type]),
        _module('right', types: [type]),
      ]),
      throwsArgumentError,
    );
    final function = FlaxFunctionBinding(
      'test/dup#function:token',
      const [],
      const FlaxTypeRef('void'),
      _invoke,
    );
    expect(
      () => FlaxBindingRegistry([
        _module('left', functions: [function]),
        _module('right', functions: [function]),
      ]),
      throwsArgumentError,
    );
  });

  test('a failed candidate does not keep a partial registry', () {
    expect(
      () => FlaxBindingRegistry([
        _module('ok', types: const [FlaxEnumBinding('test/ok#type:Token', {})]),
        _module('bad', uiProtocol: 14),
      ]),
      throwsArgumentError,
    );
    final registry = FlaxBindingRegistry([
      _module('ok', types: const [FlaxEnumBinding('test/ok#type:Token', {})]),
    ]);
    expect(registry.modules, hasLength(1));
    expect(registry.modules.single.moduleId, 'test/ok');
  });
}
