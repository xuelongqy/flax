import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';

FlaxBindingModule _module(
  String name, {
  String? moduleId,
  int uiProtocol = 24,
  List<String> requiredCapabilities = const <String>[],
  List<FlaxTypeBinding> types = const [],
  List<FlaxFunctionBinding> functions = const [],
  List<FlaxBindingModule> dependencies = const [],
}) => FlaxBindingModule(
  name,
  types,
  moduleId: moduleId ?? 'test/$name',
  uiProtocol: uiProtocol,
  requiredCapabilities: requiredCapabilities,
  functions: functions,
  dependencies: dependencies,
);

Object? _invoke(Map<String, Object?> values) => null;

void main() {
  test('compact descriptions preserve conversion and invocation policy', () {
    const type = FlaxTypeRef('int');
    const parameters = [FlaxParameter.required('value', type)];
    const callback = FlaxCallbackParameter.plain(
      'value',
      type,
      required: true,
      positional: false,
    );
    const signature = FlaxCallbackBinding.signature(
      [callback],
      type,
      id: 'test/signature',
    );
    Object? invoke(Object receiver, Map<String, Object?> values) =>
        (receiver as int) + (values['value'] as int);
    for (final method in [
      FlaxInstanceMethod.plain(parameters, type, invoke),
      FlaxInstanceMethod.shared(signature, invoke),
      FlaxInstanceMethod.signature(signature, invoke),
    ]) {
      final parameter = method.parameters.single;
      expect(parameter.name, 'value');
      expect(parameter.type, same(type));
      expect(parameter.required, isTrue);
      expect(parameter.defaultValue, isNull);
      expect(parameter.omitWhenAbsent, isFalse);
      expect(method.result, same(type));
      expect(method.invoke(2, {'value': 3}), 5);
      expect(
        () => method.invoke(2, {'value': 'wrong'}),
        throwsA(isA<TypeError>()),
      );
      expect(method.startsRoute, isFalse);
      expect(method.genericFactory, isNull);
      expect(method.ownerTypes, isEmpty);
      expect(method.requiresTypeArguments, isFalse);
    }
    expect(callback, isA<FlaxParameter>());
    expect(callback.encode, same(type));
    expect(callback.positional, isFalse);
    expect(callback.scoped, isFalse);
    const positional = FlaxCallbackParameter.plain('value', type);
    expect(positional.required, isTrue);
    expect(positional.positional, isTrue);
    final getter = FlaxGetter.plain('value', type, (value) => value);
    expect(getter.name, 'value');
    expect(getter.encode, same(getter.type));
    expect(getter.read(7), 7);

    const encoded = FlaxTypeRef('data');
    const special = FlaxCallbackParameter(
      'snapshot',
      type,
      required: false,
      positional: true,
      encode: encoded,
      scoped: true,
    );
    expect(special.encode, same(encoded));
    expect(special.required, isFalse);
    expect(special.positional, isTrue);
    expect(special.scoped, isTrue);
    expect(
      FlaxGetter('snapshot', type, (value) => value, encode: encoded).encode,
      same(encoded),
    );
    const optional = FlaxParameter(
      'optional',
      type,
      required: false,
      defaultValue: 9,
      omitWhenAbsent: true,
    );
    expect(optional.required, isFalse);
    expect(optional.defaultValue, 9);
    expect(optional.omitWhenAbsent, isTrue);
    final generic = FlaxInstanceMethod.signature(
      signature,
      invoke,
      startsRoute: true,
      genericFactory: invoke,
      ownerTypes: const [String],
      requiresTypeArguments: true,
    );
    expect(generic.startsRoute, isTrue);
    expect(generic.genericFactory, same(invoke));
    expect(generic.ownerTypes, [String]);
    expect(generic.requiresTypeArguments, isTrue);
  });

  test('generated flutter bindings pin a literal protocol-24 tuple', () {
    expect(flaxBindingVersion, 24);
    expect(flutterBindings.name, 'flutter');
    expect(flutterBindings.moduleId, 'flax.core/flutter');
    expect(flutterBindings.uiProtocol, 24);
    expect(flutterBindings.requiredCapabilities, [
      'bottom-types',
      'context-instance-methods',
      'dart-type-tokens',
      'engine-type-handles',
      'generic-call-types',
      'generic-member-views',
      'inherited-binding-members',
      'instance-checks',
      'lazy-js-iterables',
      'native-core-inputs',
      'native-navigation-objects',
      'native-widget-proxies',
      'proxy-super-constructors',
      'shared-buffers',
      'shared-static-readers',
      'shared-uint8',
      'widget-interface-proxies',
    ]);
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

  test('registry expands transitive and shared modules once by identity', () {
    final shared = _module('shared');
    final left = _module('left', dependencies: [shared]);
    final right = _module('right', dependencies: [shared]);
    final root = _module('root', dependencies: [left, right]);
    final registry = FlaxBindingRegistry([root, shared, left, root]);
    expect(registry.modules, [root, left, shared, right]);
    expect(registry.modules[2], same(shared));
    expect(
      registry,
      FlaxBindingRegistry([root, right]),
      reason: 'Redundant explicit registrations do not change the registry',
    );
    expect(
      () => registry.modules.add(_module('later')),
      throwsUnsupportedError,
    );
    expect(_module('plain').dependencies, isEmpty);
  });

  test('registry rejects transitive module identity conflicts', () {
    final shared = _module('shared');
    final replacement = _module('shared');
    final root = _module('root', dependencies: [shared]);
    for (final modules in [
      [root, replacement],
      [replacement, root],
      [
        root,
        _module('other', dependencies: [replacement]),
      ],
    ]) {
      expect(
        () => FlaxBindingRegistry(modules),
        throwsA(
          isA<ArgumentError>().having(
            (error) => error.message,
            'conflict',
            contains('test/shared'),
          ),
        ),
      );
    }
  });

  test('registry validates the complete transitive binding surface', () {
    for (final dependency in [
      _module('previous', uiProtocol: 14),
      _module('extra', requiredCapabilities: ['not-supported']),
      _module('replacement', moduleId: 'flax.core/components'),
    ]) {
      expect(
        () => FlaxBindingRegistry([
          _module('root', dependencies: [dependency]),
        ]),
        throwsArgumentError,
      );
    }
    const duplicateType = FlaxEnumBinding('test/shared#type:Token', {});
    expect(
      () => FlaxBindingRegistry([
        _module(
          'root',
          types: [duplicateType],
          dependencies: [
            _module('dependency', types: [duplicateType]),
          ],
        ),
      ]),
      throwsArgumentError,
    );
  });

  test(
    'manually linked dependency cycles terminate without losing modules',
    () {
      final dependencies = <FlaxBindingModule>[];
      final root = _module('root', dependencies: dependencies);
      final child = _module('child', dependencies: [root]);
      dependencies.add(child);
      expect(FlaxBindingRegistry([root, child]).modules, [root, child]);
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
