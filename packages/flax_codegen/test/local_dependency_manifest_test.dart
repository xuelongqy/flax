import 'dart:convert';

import 'package:flax_codegen/src/diagnostic.dart';
import 'package:flax_codegen/src/identity.dart';
import 'package:flax_codegen/src/manifest.dart';
import 'package:flax_codegen/src/manifest_codec.dart';
import 'package:flax_codegen/src/manifest_projection.dart';
import 'package:flax_codegen/src/model.dart';
import 'package:flax_codegen/src/ownership.dart';
import 'package:flax_codegen/src/package_metadata.dart';
import 'package:test/test.dart';

void main() {
  test(
    'generated Dart libraries survive snapshots and compact round trips',
    () {
      for (final output in ['lib/api.g.dart', 'lib/src/generated/api.g.dart']) {
        final manifest = _owner('a', dartOutput: output);
        final library = 'package:a/${output.substring(4)}';
        expect(manifest.modules.single.dartLibrary, library);
        expect(manifest.modules.single.model.module.dartOutput, isEmpty);
        final decoded = _parse(manifest);
        expect(decoded.modules.single.dartLibrary, library);
        expect(decoded.toJson(), manifest.toJson());
      }
      for (final output in ['', 'api.g.dart', 'generated/api.g.dart']) {
        final manifest = _owner('a', dartOutput: output);
        expect(manifest.modules.single.dartLibrary, isNull);
        expect(
          manifest.modules.single.toJson(),
          isNot(contains('dartLibrary')),
        );
        expect(_parse(manifest).modules.single.dartLibrary, isNull);
      }
    },
  );

  test('supplied Dart library must be a canonical same-package Dart URI', () {
    for (final library in <Object?>[
      null,
      1,
      '',
      'package:b/api.g.dart',
      'dart:core',
      'file:///a/api.g.dart',
      'package:a/api.js',
      'package:a/api.g.dart?query',
      'package:a/api.g.dart#fragment',
      'package://a/api.g.dart',
      'package:a/../api.g.dart',
      'package:a/src/%2e%2e/api.g.dart',
      'package:a/src%2fapi.g.dart',
      'package:a/src%5capi.g.dart',
      'package:a//api.g.dart',
      'package:a/%61pi.g.dart',
      'package:a/%ff.g.dart',
    ]) {
      final json = _owner('a').toJson();
      (json['modules']! as List).single['dartLibrary'] = library;
      final diagnostics = FlaxCodegenManifestDiagnostics('manifest');
      expect(
        FlaxCodegenManifest.parse(jsonEncode(json), diagnostics),
        isNull,
        reason: '$library',
      );
      expect(diagnostics.items.single.pointer, '/modules/0/dartLibrary');
    }
    final json = _owner('a').toJson();
    (json['modules']! as List).single['dartLibrary'] =
        'package:a/src/generated/api.g.dart';
    final diagnostics = FlaxCodegenManifestDiagnostics('manifest');
    expect(
      FlaxCodegenManifest.parse(
        jsonEncode(json),
        diagnostics,
      )!.modules.single.dartLibrary,
      'package:a/src/generated/api.g.dart',
    );
    expect(diagnostics.items, isEmpty);
  });

  test(
    'invalid generated paths under lib fail rather than becoming metadata',
    () {
      for (final output in [
        'lib/../api.g.dart',
        'lib/./api.g.dart',
        'lib//api.g.dart',
        'lib/api.js',
        r'lib/src\api.g.dart',
      ]) {
        expect(
          () => _owner('a', dartOutput: output),
          throwsA(isA<FlaxCodegenException>()),
          reason: output,
        );
      }
    },
  );

  test('projection retains exact libraries for independent local views', () {
    final dependencies = {
      for (final package in ['a', 'b'])
        package: _projection(
          _parse(
            _owner(package, local: true, dartOutput: 'lib/src/api.g.dart'),
          ),
        ),
    };
    final projection = _projection(_consumer(dependencies), dependencies);
    for (final package in dependencies.keys) {
      expect(
        projection.dartLibraryForModule(_moduleId(package).value),
        'package:$package/src/api.g.dart',
      );
      expect(
        projection.packageManifests
            .singleWhere((manifest) => manifest.package == package)
            .modules
            .single
            .dartLibrary,
        'package:$package/src/api.g.dart',
      );
      expect(
        projection.modulesByModuleId[_moduleId(package).value]!.dartOutput,
        isEmpty,
      );
      expect(
        projection.ownerForWire(_wire(package))!.providerEligible,
        isFalse,
      );
    }
    expect(projection.dartLibraryForModule(_moduleId('c').value), isNull);
    expect(projection.dartLibraryForModule('missing/api'), isNull);
  });

  test(
    'local dependency owner marker defaults to false and encodes sparsely',
    () {
      for (final local in [false, true]) {
        final manifest = _owner('a', local: local);
        final row = manifest.modules.single.model.identities.single;
        final encoded = FlaxCodegenManifestCodec.encodeIdentity(row);
        expect(row.owner, isTrue);
        expect(row.localDependency, local);
        expect(row.providerEligible, !local);
        expect(encoded.containsKey('localDependency'), local);
        expect(
          _parse(manifest)
              .modules
              .single
              .model
              .identities
              .single
              .localDependency,
          local,
        );
      }
      final encoded = FlaxCodegenManifestCodec.encodeIdentity(
        _owner('a').modules.single.model.identities.single,
      )..['localDependency'] = false;
      final diagnostics = FlaxCodegenManifestDiagnostics('identity');
      final decoded = FlaxCodegenManifestCodec.decodeIdentity(
        encoded,
        diagnostics,
        '',
      )!;
      expect(diagnostics.items, isEmpty);
      expect(
        FlaxCodegenManifestCodec.encodeIdentity(decoded),
        isNot(contains('localDependency')),
      );
    },
  );

  test(
    'local dependency marker rejects invalid values and marked references',
    () {
      final row = FlaxCodegenManifestCodec.encodeIdentity(
        _owner('a').modules.single.model.identities.single,
      );
      for (final value in [null, 'true', 1]) {
        final diagnostics = FlaxCodegenManifestDiagnostics('identity');
        expect(
          FlaxCodegenManifestCodec.decodeIdentity(
            {...row, 'localDependency': value},
            diagnostics,
            '',
          ),
          isNull,
        );
        expect(diagnostics.items.single.message, 'Expected a boolean.');
      }
      final diagnostics = FlaxCodegenManifestDiagnostics('identity');
      expect(
        FlaxCodegenManifestCodec.decodeIdentity(
          {...row, 'owner': false, 'localDependency': true},
          diagnostics,
          '',
        ),
        isNull,
      );
      expect(
        diagnostics.items.single.message,
        'Only owners can be local dependencies.',
      );
    },
  );

  test(
    'Manifest 28 rejects 27 rather than silently losing provider policy',
    () {
      final diagnostics = FlaxCodegenManifestDiagnostics('old');
      final old = _owner('a').toJson()..['formatVersion'] = 27;
      expect(FlaxCodegenManifest.parse(jsonEncode(old), diagnostics), isNull);
      expect(diagnostics.items.single.message, 'Invalid formatVersion.');
    },
  );

  test('local views remain delivered but never become source providers', () {
    final a = _projection(_owner('a', local: true));
    final b = _projection(_owner('b', local: true));
    final aWire = a.manifest.modules.single.model.identities.single.wireId;
    final bWire = b.manifest.modules.single.model.identities.single.wireId;
    for (final dependencies in [
      {'a': a},
      {'a': a, 'b': b},
      {'b': b, 'a': a},
    ]) {
      final root = _projection(_consumer(dependencies), dependencies);
      expect(root.authoritativeWireId(_format), isNull);
      expect(root.authoritativeOwner(_format), isNull);
      expect(root.ownerForWire(aWire)!.providerEligible, isFalse);
      expect(root.ownerForWire(aWire)!.localDependency, isTrue);
      expect(
        root.modulesByModuleId[aWire.moduleId.value]!.classes.single.id,
        aWire.value,
      );
      if (dependencies.containsKey('b')) {
        expect(root.ownerForWire(bWire)!.sourceIdentity, _format);
        expect(
          root.modulesByModuleId[bWire.moduleId.value]!.classes.single.id,
          bWire.value,
        );
      }
      expect(
        root.importedPackages.expand((package) => package.owners),
        everyElement(
          predicate<FlaxCodegenImportedOwner>(
            (owner) => owner.localDependency && !owner.providerEligible,
          ),
        ),
      );
    }
    expect(a.authoritativeWireId(_format), isNull);
    expect(a.ownerForWire(_wire('absent')), isNull);
  });

  test(
    'eligible provider does not replace explicit references to local views',
    () {
      final dependencies = {
        'a': _projection(_owner('a', local: true)),
        'b': _projection(_owner('b', local: true)),
        'p': _projection(_owner('p')),
      };
      final resolved = _resolve(dependencies, [
        _reference(target: _wire('a')),
        _reference(target: _wire('b')),
        _reference(),
      ]);
      expect(
        resolved.modules.single.references.map((ref) => ref.ownerWireId.value),
        [_wire('a').value, _wire('b').value, _wire('p').value],
      );
      final root = _projection(_consumer(dependencies), dependencies);
      expect(root.authoritativeWireId(_format), _wire('p'));
      expect(root.authoritativeOwner(_format)!.providerEligible, isTrue);
    },
  );

  test(
    'two explicit views of one Dart source survive ownership and Manifest',
    () {
      final a = _projection(_owner('a', local: true));
      final b = _projection(_owner('b', local: true));
      for (final dependencies in [
        {'a': a, 'b': b},
        {'b': b, 'a': a},
      ]) {
        final resolved = _resolve(dependencies, [
          _reference(target: _wire('a')),
          _reference(target: _wire('b')),
        ]);
        expect(
          resolved.modules.single.references.map(
            (ref) => ref.ownerWireId.value,
          ),
          [_wire('a').value, _wire('b').value],
        );
        final manifest = _consumer(dependencies, resolved: resolved);
        final parsed = _parse(manifest);
        final refs = parsed.modules.single.model.identities
            .where((identity) => !identity.owner)
            .toList();
        expect(refs, hasLength(2));
        expect(refs.every((ref) => !ref.owner && !ref.localDependency), isTrue);
        final root = _projection(parsed, dependencies);
        final resultTypes = root
            .modulesByModuleId['example.c/api']!
            .classes
            .single
            .getters
            .map((getter) => getter.type.id);
        expect(resultTypes, [_wire('a').value, _wire('b').value]);
        expect(root.authoritativeWireId(_format), isNull);
      }
    },
  );

  test(
    'unqualified source cannot use even a single local dependency owner',
    () {
      for (final dependencies in [
        {'a': _projection(_owner('a', local: true))},
        {
          'a': _projection(_owner('a', local: true)),
          'b': _projection(_owner('b', local: true)),
        },
      ]) {
        expect(
          () => _resolve(dependencies, [_reference()]),
          throwsA(
            isA<FlaxCodegenException>().having(
              (error) => error.diagnostics.single.message,
              'message',
              startsWith('Missing owner.'),
            ),
          ),
        );
      }
    },
  );

  test('explicit target must exist and match the requested Dart source', () {
    final dependencies = {'a': _projection(_owner('a', local: true))};
    for (final reference in [
      _reference(target: _wire('absent')),
      FlaxCodegenNominalReference(
        sourceIdentity: _source('Other'),
        location: _location,
        targetWireId: _wire('a'),
      ),
    ]) {
      expect(
        () => _resolve(dependencies, [reference]),
        throwsA(isA<FlaxCodegenException>()),
      );
    }
  });
}

final _format = _source('DateFormat');
final _consumerSource = FlaxCodegenSourceIdentity(
  kind: FlaxCodegenDeclarationKind.type,
  originatingUri: 'package:c/api.dart',
  name: 'Use',
  origin: FlaxCodegenOriginState.resolved,
);
const _location = FlaxCodegenSourceLocation(
  source: 'api.yaml',
  offset: 0,
  line: 1,
  column: 1,
  pointer: '',
);

FlaxCodegenSourceIdentity _source(String name) => FlaxCodegenSourceIdentity(
  kind: FlaxCodegenDeclarationKind.type,
  originatingUri: 'package:intl/src/intl/date_format.dart',
  name: name,
  origin: FlaxCodegenOriginState.resolved,
);

FlaxCodegenModuleId _moduleId(String package) => FlaxCodegenModuleId(
  namespace: FlaxCodegenBindingNamespace.parse('example.$package'),
  name: FlaxCodegenModuleName.parse('api'),
);

FlaxCodegenWireId _wire(String package) => FlaxCodegenWireId.type(
  moduleId: _moduleId(package),
  publicBindingName: 'DateFormat',
);

FlaxCodegenManifest _owner(
  String package, {
  bool local = false,
  String dartOutput = '',
}) => FlaxCodegenManifest.fromResolved(
  package: FlaxCodegenResolvedPackage(
    dartPackage: package,
    namespace: _moduleId(package).namespace,
    modules: [
      FlaxCodegenResolvedModule(
        moduleId: _moduleId(package),
        source: 'api.yaml',
        owners: [
          FlaxCodegenResolvedOwner(
            sourceIdentity: _format,
            wireId: _wire(package),
          ),
        ],
        references: const [],
        requiredCapabilities: flaxCodegenProtocol21RequiredCapabilities(),
      ),
    ],
  ),
  modules: {
    'api': FlaxCodegenModuleModel(
      name: 'api',
      library: 'package:intl/intl.dart',
      jsPackage: '@example/$package',
      dartOutput: dartOutput,
      tsOutput: '',
      types: const [],
      classes: [
        FlaxCodegenClassModel(
          name: 'DateFormat',
          id: _wire(package).value,
          kind: 'object',
          constructors: const [],
          supertypes: const [],
        ),
      ],
    ),
  },
  importPackageNames: const [],
  localDependencySources: local ? {_format} : const {},
);

FlaxCodegenNominalReference _reference({FlaxCodegenWireId? target}) =>
    FlaxCodegenNominalReference(
      sourceIdentity: _format,
      location: _location,
      targetWireId: target,
    );

FlaxCodegenResolvedPackage _resolve(
  Map<String, FlaxCodegenManifestProjection> dependencies,
  List<FlaxCodegenNominalReference> references,
) => FlaxCodegenOwnership.resolvePackage(
  dartPackage: 'c',
  metadataSource: 'flax_package.yaml',
  metadata: FlaxCodegenPackageMetadataProjection.parseStrict(
    'format: 2\ncapabilities: [bindings]\nbindingNamespace: example.c\n',
  ),
  modules: [
    FlaxCodegenSiblingModuleInput(
      name: 'api',
      source: 'api.yaml',
      references: references,
      claims: [
        FlaxCodegenOwnerClaim(
          sourceIdentity: _consumerSource,
          location: _location,
        ),
      ],
    ),
  ],
  importedPackages: [
    for (final dependency in dependencies.values)
      FlaxCodegenImportedPackage(
        dartPackage: dependency.manifest.package,
        namespace: dependency.manifest.bindingNamespace,
        source: dependency.source,
        owners: [
          for (final module in dependency.manifest.modules)
            for (final identity in module.model.identities)
              if (identity.owner) dependency.ownerForWire(identity.wireId)!,
        ],
      ),
  ],
);

FlaxCodegenManifest _consumer(
  Map<String, FlaxCodegenManifestProjection> dependencies, {
  FlaxCodegenResolvedPackage? resolved,
}) => FlaxCodegenManifest.fromResolved(
  package: resolved ?? _resolve(dependencies, []),
  importPackageNames: dependencies.keys,
  modules: {
    'api': FlaxCodegenModuleModel(
      name: 'api',
      library: 'package:c/api.dart',
      jsPackage: '@example/c',
      dartOutput: '',
      tsOutput: '',
      types: const [],
      classes: [
        FlaxCodegenClassModel(
          name: 'Use',
          id: 'example.c/api#type:Use',
          kind: 'object',
          constructors: const [],
          supertypes: const [],
          getters: [
            for (final reference
                in resolved?.modules.single.references ??
                    <FlaxCodegenResolvedReference>[])
              FlaxCodegenGetterModel(
                'read_${reference.ownerWireId.moduleId.namespace.value.split('.').last}',
                FlaxCodegenTypeRef(
                  'object',
                  name: 'DateFormat',
                  id: reference.ownerWireId.value,
                ),
              ),
          ],
        ),
      ],
    ),
  },
);

FlaxCodegenManifestProjection _projection(
  FlaxCodegenManifest manifest, [
  Map<String, FlaxCodegenManifestProjection> dependencies = const {},
]) => FlaxCodegenManifestProjection(
  root: manifest,
  directDependencies: dependencies,
  source: '${manifest.package}/manifest.json',
);

FlaxCodegenManifest _parse(FlaxCodegenManifest manifest) {
  final diagnostics = FlaxCodegenManifestDiagnostics('manifest');
  final parsed = FlaxCodegenManifest.parse(manifest.encode(), diagnostics);
  expect(diagnostics.items, isEmpty);
  return parsed!;
}
