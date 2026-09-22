import 'dart:convert';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:flax_codegen/src/identity.dart';
import 'package:flax_codegen/src/manifest_v5.dart';
import 'package:flax_codegen/src/manifest_v5_codec.dart';
import 'package:flax_codegen/src/manifest_v5_projection.dart';
import 'package:test/test.dart';

void main() {
  test(
    'Manifest 7 preserves readonly exports and canonical read identities',
    () {
      final original = _manifest();
      final decoded = _decode(original.toJson());
      expect(decoded.encode(), original.encode());
      final module = decoded.modules.single.model.module;
      expect(module.topLevel!.jsName, 'Values');
      expect(
        module.topLevel!.getters.single.id,
        'example.values/values#read:answer',
      );
      expect(
        module.topLevel!.getters.single.kind,
        FlaxCodegenReadonlyKind.constant,
      );
      expect(module.classes, isEmpty);
      expect(module.functions, isEmpty);
      final emitter = FlaxCodegenBindingEmitter([module]);
      expect(emitter.dart(module), contains('=> api.answer;'));
      expect(emitter.typescript(module), contains('export const Values'));
      expect(
        emitter.typescript(module),
        contains('invokeTopLevel("example.values/values#read:answer", [])'),
      );
    },
  );

  for (final version in [2, 3, 4, 5, 6, 7, 8, 9]) {
    test('strict version $version remains readable without newer fields', () {
      final json = _manifest(readonly: false).toJson()
        ..['formatVersion'] = version;
      if (version == 2) _model(json).remove('typedefs');
      final decoded = _decode(json);
      expect(decoded.toJson()['formatVersion'], 11);
      expect(decoded.modules.single.model.module.topLevel, isNull);
    });
  }

  for (final version in [2, 3, 4]) {
    test('version $version rejects readonly fields and identity kinds', () {
      final json = _manifest().toJson()..['formatVersion'] = version;
      if (version == 2) _model(json).remove('typedefs');
      _reject(json);
      _model(json).remove('topLevel');
      _reject(json);
    });
  }

  test('Manifest 7 preserves public routes and named literal semantics', () {
    final json = _manifest().toJson();
    final model = _model(json);
    (model['topLevel'] as Map)['jsName'] = '';
    _getter(model)['literal'] = '42';
    model['publicLibraries'] = [
      {
        'library': 'package:values/values.dart',
        'jsPackage': '@example/values/main',
        'exports': ['answer'],
      },
    ];
    final decoded = _decode(json);
    final module = decoded.modules.single.model.module;
    expect(module.publicLibraries.single.exports, ['answer']);
    expect(module.topLevel!.getters.single.exportName, 'answer');
    expect(_decode(decoded.toJson()).encode(), decoded.encode());
    for (final version in [2, 3, 4, 5]) {
      final old = jsonDecode(jsonEncode(json)) as Map<String, Object?>;
      old['formatVersion'] = version;
      if (version == 2) _model(old).remove('typedefs');
      _reject(old);
    }
    final old = jsonDecode(jsonEncode(json)) as Map<String, Object?>;
    old['formatVersion'] = 5;
    _model(old).remove('publicLibraries');
    _reject(old); // Version 5 does not accept named exports or literals.
    (_model(old)['topLevel'] as Map)['jsName'] = 'Values';
    _reject(old); // A namespace does not make the new literal field legal.
    _getter(_model(old)).remove('literal');
    (_model(old)['topLevel'] as Map).remove('setters');
    expect(_decode(old).modules.single.model.module.topLevel!.jsName, 'Values');
  });

  test('Manifest 7 rejects malformed routes and unsafe literal metadata', () {
    for (final mutate in <void Function(Map<String, Object?>)>[
      (model) => model['publicLibraries'] = [
        {
          'library': 'package:values/values.dart',
          'jsPackage': '@example/values',
          'exports': ['missing'],
        },
      ],
      (model) => model['publicLibraries'] = [
        {
          'library': 'package:values/values.dart',
          'jsPackage': '@example/values',
          'exports': ['answer', 'answer'],
        },
      ],
      (model) => _getter(model)['literal'] = 'true',
      (model) => _getter(model)['literal'] = '9007199254740992',
      (model) => _getter(model)['literal'] = '{}',
      (model) => _getter(model)['literal'] = '1 + 1',
      (model) {
        _getter(model)['literal'] = '42';
        _getter(model)['kind'] = 'finalValue';
      },
    ]) {
      final json = _manifest().toJson();
      (_model(json)['topLevel'] as Map)['jsName'] = '';
      mutate(_model(json));
      _reject(json);
    }
  });

  test('readonly schema rejects invalid namespaces, fields and ownership', () {
    for (final mutate in <void Function(Map<String, Object?>)>[
      (model) => (model['topLevel'] as Map)['jsName'] = 'Object',
      (model) => (model['topLevel'] as Map)['setters'] = 'invalid',
      (model) => (model['topLevel'] as Map)['getters'] = <Object?>[],
      (model) => _getter(model)['kind'] = 'mutable',
      (model) => _getter(model)['id'] = 'example.values/values#function:answer',
      (model) => _getter(model)['name'] = 'other',
      (model) => (model['identities'] as List).clear(),
      (model) => (model['identities'] as List).add(
        (model['identities'] as List).single,
      ),
      (model) => ((model['identities'] as List).single as Map)['owner'] = false,
    ]) {
      final json = _manifest().toJson();
      mutate(_model(json));
      _reject(json);
    }
  });

  test('dependency projection keeps public readonly exports and immutable snapshots', () {
    final manifest = _decode(_manifest().toJson());
    final projection = FlaxCodegenManifestV5Projection(
      root: manifest,
      directDependencies: const {},
      source: 'provider/manifest.json',
    );
    final source =
        manifest.modules.single.model.identities.single.sourceIdentity;
    expect(
      projection.authoritativeWireId(source)!.value,
      'example.values/values#read:answer',
    );
    final module = projection.modulesByModuleId.values.single;
    expect(module.jsPackage, '@example/values');
    expect(module.topLevel!.jsName, 'Values');
    module.topLevel!.getters.clear();
    expect(
      projection.modulesByModuleId.values.single.topLevel!.getters,
      hasLength(1),
    );
    final fresh = projection.modulesByModuleId.values.single;
    expect(() => FlaxCodegenBindingEmitter([fresh, fresh]), throwsStateError);
  });
}

FlaxCodegenManifestV5 _manifest({bool readonly = true}) {
  final moduleId = FlaxCodegenModuleId.parse('example.values/values');
  final wire = FlaxCodegenWireId.read(
    moduleId: moduleId,
    publicBindingName: 'answer',
  );
  return FlaxCodegenManifestV5(
    package: 'values',
    bindingNamespace: FlaxCodegenBindingNamespace.parse('example.values'),
    imports: const [],
    modules: [
      FlaxCodegenManifestV5Module(
        name: 'values',
        moduleId: moduleId,
        uiProtocol: 20,
        requiredCapabilities: const [],
        model: FlaxCodegenManifestV5Model(
          module: FlaxCodegenModuleModel(
            name: 'values',
            library: 'package:values/values.dart',
            jsPackage: '@example/values',
            dartOutput: '',
            tsOutput: '',
            classes: const [],
            types: const [],
            typeLibraries: readonly
                ? const {'answer': 'package:values/values.dart'}
                : const {},
            topLevel: readonly
                ? FlaxCodegenTopLevelModel('Values', [
                    FlaxCodegenTopLevelGetterModel(
                      wire.value,
                      'answer',
                      const FlaxCodegenTypeRef('int'),
                      FlaxCodegenReadonlyKind.constant,
                    ),
                  ])
                : null,
          ),
          identities: [
            if (readonly)
              FlaxCodegenManifestV5Identity(
                sourceIdentity: FlaxCodegenSourceIdentity(
                  kind: FlaxCodegenDeclarationKind.readonly,
                  originatingUri: 'package:values/src/values.dart',
                  name: 'answer',
                  origin: FlaxCodegenOriginState.resolved,
                ),
                wireId: wire,
                owner: true,
              ),
          ],
        ),
      ),
    ],
  );
}

Map<String, Object?> _model(Map<String, Object?> json) =>
    ((json['modules'] as List).single as Map)['model'] as Map<String, Object?>;
Map<String, Object?> _getter(Map<String, Object?> model) =>
    ((model['topLevel'] as Map)['getters'] as List).single
        as Map<String, Object?>;

FlaxCodegenManifestV5 _decode(Map<String, Object?> json) {
  final diagnostics = FlaxCodegenManifestV5Diagnostics('manifest.json');
  final result = FlaxCodegenManifestV5.parse(jsonEncode(json), diagnostics);
  diagnostics.throwIfAny();
  return result!;
}

void _reject(Map<String, Object?> json) {
  final diagnostics = FlaxCodegenManifestV5Diagnostics('manifest.json');
  expect(FlaxCodegenManifestV5.parse(jsonEncode(json), diagnostics), isNull);
  expect(diagnostics.items, isNotEmpty);
}
