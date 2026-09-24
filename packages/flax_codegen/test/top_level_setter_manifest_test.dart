import 'dart:convert';

import 'package:flax_codegen/src/config.dart';
import 'package:flax_codegen/src/diagnostic.dart';
import 'package:flax_codegen/src/identity.dart';
import 'package:flax_codegen/src/manifest.dart';
import 'package:flax_codegen/src/manifest_codec.dart';
import 'package:flax_codegen/src/manifest_projection.dart';
import 'package:flax_codegen/src/model.dart';
import 'package:flax_codegen/src/ownership.dart';
import 'package:test/test.dart';

void main() {
  test('Manifest 12 preserves getter identity and distinct setter function identity', () {
    final original = _manifest();
    final decoded = _decode(original.toJson());
    expect(decoded.encode(), original.encode());
    expect(decoded.toJson()['formatVersion'], 12);
    final values = decoded.modules.single.model.module.topLevel!;
    expect(values.getters.single.id, 'example.values/values#read:answer');
    expect(
      values.setters.single.id,
      'example.values/values#function:answer%3D',
    );
    expect(values.setters.single.exportName, 'setAnswer');
    expect(values.setters.single.asFunction().call.name, 'setAnswer');
    expect(
      decoded.modules.single.model.module.callableFunctions.single.id,
      values.setters.single.id,
    );
    expect(
      decoded.modules.single.model.module.ownedFunctions.single.call.name,
      'setAnswer',
    );
    expect(
      decoded.modules.single.model.identities.first.sourceIdentity.name,
      'answer=',
    );
    expect(values.setters.single.asFunction().call.result.kind, 'void');
    expect(
      values.setters.single.asFunction().call.parameters.single.type.kind,
      'int',
    );
  });

  test(
    'Manifest 12 rejects missing setter field, bad identity and extra fields',
    () {
      for (final mutate in <void Function(Map<String, Object?>)>[
        (model) =>
            (model['topLevel'] as Map<String, Object?>).remove('setters'),
        (model) => _setter(model)['id'] = 'example.values/values#read:answer',
        (model) => _setter(model)['name'] = 'other',
        (model) => _setter(model)['literal'] = '1',
        (model) => (model['identities'] as List).removeAt(0),
      ]) {
        final json = _manifest().toJson();
        mutate(_model(json));
        _reject(json);
      }
    },
  );

  test('setter and getter identity rows require canonical kind ordering', () {
    final json = _manifest().toJson();
    final rows = _model(json)['identities'] as List;
    expect(rows.map((row) => row['sourceIdentity']['kind']), [
      'function',
      'readonly',
    ]);
    _model(json)['identities'] = rows.reversed.toList();
    final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
    expect(FlaxCodegenManifest.parse(jsonEncode(json), diagnostics), isNull);
    expect(
      diagnostics.items.any(
        (item) =>
            item.pointer == '/modules/0/model~1identities' &&
            item.message == 'Expected sorted identities.',
      ),
      isTrue,
    );
  });

  test('readonly provider projection cannot acquire a setter reference', () {
    final providerJson = _manifest().toJson();
    final model = _model(providerJson);
    ((model['topLevel'] as Map<String, Object?>)['setters'] as List).clear();
    (model['identities'] as List).removeAt(0);
    final provider = FlaxCodegenManifestProjection(
      root: _decode(providerJson),
      directDependencies: const {},
      source: 'values.json',
    );
    expect(
      () => FlaxCodegenManifestProjection(
        root: _decode(_manifest(reference: true).toJson()),
        directDependencies: {'values': provider},
        source: 'consumer.json',
      ),
      throwsA(
        isA<FlaxCodegenException>().having(
          (error) => error.diagnostics.any(
            (item) =>
                item.pointer == '/modules/0/model/topLevel/setters/0' &&
                item.message == 'Setter reference must preserve the public provider declaration.',
          ),
          'setter declaration diagnostic',
          isTrue,
        ),
      ),
    );
  });

  test('setter-only manifests round trip', () {
    final json = _manifest().toJson();
    ((_model(json)['topLevel'] as Map<String, Object?>)['getters'] as List)
        .clear();
    (_model(json)['identities'] as List).removeLast();
    final decoded = _decode(json);
    expect(decoded.modules.single.model.module.topLevel!.getters, isEmpty);
    expect(decoded.modules.single.model.module.topLevel!.setters, hasLength(1));
  });

  test('provider setter reference is preserved and cannot expand its type', () {
    final provider = FlaxCodegenManifestProjection(
      root: _decode(_manifest().toJson()),
      directDependencies: const {},
      source: 'values.json',
    );
    final consumer = _decode(_manifest(reference: true).toJson());
    final projection = FlaxCodegenManifestProjection(
      root: consumer,
      directDependencies: {'values': provider},
      source: 'consumer.json',
    );
    expect(
      projection
          .modulesByModuleId['example.consumer/values']!
          .topLevel!
          .setters
          .single
          .isReference,
      isTrue,
    );
    final changed = _manifest(reference: true).toJson();
    _setter(_model(changed))['type'] = FlaxCodegenManifestCodec.encodeTypeRef(
      const FlaxCodegenTypeRef('num'),
    );
    expect(
      () => FlaxCodegenManifestProjection(
        root: _decode(changed),
        directDependencies: {'values': provider},
        source: 'consumer.json',
      ),
      throwsA(
        isA<FlaxCodegenException>().having(
          (e) => e.diagnostics.map((d) => d.message).join(),
          'diagnostic',
          contains('Setter reference must preserve'),
        ),
      ),
    );
  });

  test('config claims distinguish getter and setter and skip references', () {
    final config = FlaxCodegenBindingConfig(
      'values',
      'package:values/values.dart',
      '@example/values',
      '',
      '',
      {},
      topLevel: const FlaxCodegenTopLevelSelection(
        'Values',
        ['answer'],
        setters: ['answer'],
      ),
    );
    FlaxCodegenSiblingModuleInput input({bool reference = false}) =>
        FlaxCodegenSiblingModuleInput.fromConfig(
          config: config,
          source: 'config.yaml',
          listing: {'answer': _identity(false), 'answer=': _identity(true)},
          readonlyReferences: reference ? {'answer'} : {},
          setterReferences: reference ? {'answer'} : {},
        );
    final resolved = FlaxCodegenOwnership.resolve(
      namespace: FlaxCodegenBindingNamespace.parse('example.values'),
      modules: [input()],
    );
    expect(resolved.modules.single.owners.map((o) => o.wireId.value).toSet(), {
      'example.values/values#read:answer',
      'example.values/values#function:answer%3D',
    });
    expect(
      FlaxCodegenOwnership.resolve(
        namespace: FlaxCodegenBindingNamespace.parse('example.consumer'),
        modules: [input(reference: true)],
      ).modules.single.owners,
      isEmpty,
    );
  });
}

FlaxCodegenSourceIdentity _identity(bool setter) => FlaxCodegenSourceIdentity(
  kind: setter
      ? FlaxCodegenDeclarationKind.function
      : FlaxCodegenDeclarationKind.readonly,
  originatingUri: 'package:values/src/values.dart',
  name: setter ? 'answer=' : 'answer',
  origin: FlaxCodegenOriginState.resolved,
);

FlaxCodegenManifest _manifest({bool reference = false}) {
  final namespace = FlaxCodegenBindingNamespace.parse(
    reference ? 'example.consumer' : 'example.values',
  );
  final moduleId = FlaxCodegenModuleId(
    namespace: namespace,
    name: FlaxCodegenModuleName.parse('values'),
  );
  final read = FlaxCodegenWireId.parse('example.values/values#read:answer');
  final write = FlaxCodegenWireId.parse(
    'example.values/values#function:answer%3D',
  );
  return FlaxCodegenManifest(
    package: reference ? 'consumer' : 'values',
    bindingNamespace: namespace,
    imports: reference ? ['values'] : [],
    modules: [
      FlaxCodegenManifestModule(
        name: 'values',
        moduleId: moduleId,
        uiProtocol: 21,
        requiredCapabilities: [],
        model: FlaxCodegenManifestModel(
          module: FlaxCodegenModuleModel(
            name: 'values',
            library: 'package:values/values.dart',
            jsPackage: '@example/values',
            dartOutput: '',
            tsOutput: '',
            classes: [],
            types: [],
            typeLibraries: {},
            topLevel: FlaxCodegenTopLevelModel(
              'Values',
              [
                FlaxCodegenTopLevelGetterModel(
                  read.value,
                  'answer',
                  const FlaxCodegenTypeRef('int'),
                  FlaxCodegenReadonlyKind.mutableValue,
                  isReference: reference,
                ),
              ],
              setters: [
                FlaxCodegenTopLevelSetterModel(
                  write.value,
                  'answer',
                  const FlaxCodegenTypeRef('int'),
                  isReference: reference,
                ),
              ],
            ),
          ),
          identities: [
            FlaxCodegenManifestIdentity(
              sourceIdentity: _identity(true),
              wireId: write,
              owner: !reference,
            ),
            FlaxCodegenManifestIdentity(
              sourceIdentity: _identity(false),
              wireId: read,
              owner: !reference,
            ),
          ],
        ),
      ),
    ],
  );
}

Map<String, Object?> _model(Map<String, Object?> json) =>
    (json['modules'] as List).single['model'] as Map<String, Object?>;
Map<String, Object?> _setter(Map<String, Object?> model) =>
    ((model['topLevel'] as Map<String, Object?>)['setters'] as List).single
        as Map<String, Object?>;

FlaxCodegenManifest _decode(Map<String, Object?> json) {
  final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
  final result = FlaxCodegenManifest.parse(jsonEncode(json), diagnostics);
  diagnostics.throwIfAny();
  return result!;
}

void _reject(Map<String, Object?> json) {
  final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
  expect(FlaxCodegenManifest.parse(jsonEncode(json), diagnostics), isNull);
  expect(diagnostics.items, isNotEmpty);
}
