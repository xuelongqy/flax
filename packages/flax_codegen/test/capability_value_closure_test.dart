import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import '../tool/src/capability/stage3.dart';

void main() {
  group('stage3SelectionForDeclaration', () {
    test('prefers the recorded assessment selection', () {
      final selection = stage3SelectionForDeclaration({
        'name': 'Recorded',
        'typeParameters': <String>[],
        'declaredMembers': <Map<String, Object?>>[
          _constructor('value', ['ignored']),
        ],
        'assessment': {
          'verdict': 'supported',
          'selection': {
            'kind': 'object',
            'typeArguments': <String>[],
            'constructors': {
              '': ['kept'],
            },
          },
        },
      });
      expect(selection, isNotNull);
      expect(selection!.constructors, {
        '': ['kept'],
      });
      expect(selection.typeArguments, isEmpty);
    });

    test('falls back to declared constructors plus Object? arguments', () {
      final selection = stage3SelectionForDeclaration({
        'name': 'Unsupported',
        'typeParameters': ['T'],
        'declaredMembers': <Map<String, Object?>>[
          _constructor('named', ['size', 'mode']),
        ],
        'assessment': {'verdict': 'unsupported'},
      });
      expect(selection, isNotNull);
      expect(selection!.kind, 'object');
      expect(selection.constructors, {
        'named': ['size', 'mode'],
      });
      expect(selection.typeArguments, ['Object?']);
    });

    test('returns a constructor-less selection when nothing is declared', () {
      final selection = stage3SelectionForDeclaration({
        'name': 'Abstract',
        'typeParameters': <String>[],
        'declaredMembers': <Map<String, Object?>>[],
        'assessment': {'verdict': 'supported', 'source': 'provider'},
      });
      expect(selection, isNotNull);
      expect(selection!.constructors, isEmpty);
    });
  });

  group('stage3GapProbe', () {
    const baseId = 'a::Base';
    const depId = 'a::Dep';
    const otherId = 'a::Other';
    const snapId = 'a::Snap';
    const enumId = 'a::Enumish';

    final target = _module(
      name: 'target',
      classes: [
        FlaxCodegenClassModel(
          name: 'Holder',
          id: 'a::Holder',
          kind: 'object',
          constructors: [
            FlaxCodegenConstructorModel('', [
              _parameter('dep', _named('Dep', depId)),
              _parameter('other', _named('Other', otherId)),
            ]),
          ],
          supertypes: const [baseId],
          getters: [_getter('snap', _named('Snap', snapId))],
        ),
      ],
      types: const [
        FlaxCodegenNamedTypeModel(name: 'Dep', id: depId),
        FlaxCodegenNamedTypeModel(name: 'Other', id: otherId),
        FlaxCodegenNamedTypeModel(name: 'Base', id: baseId),
        FlaxCodegenNamedTypeModel(name: 'Snap', id: snapId),
        FlaxCodegenNamedTypeModel(
          name: 'Enumish',
          id: enumId,
          enumNames: ['one'],
        ),
      ],
      typeLibraries: const {
        depId: 'package:example/dep.dart',
        snapId: 'package:example/snap.dart',
      },
      snapshots: const [
        FlaxCodegenSnapshotModel(name: 'Snap', id: snapId, fields: []),
      ],
    );

    final official = _module(
      name: 'official',
      classes: [
        FlaxCodegenClassModel(
          name: 'DepProvider',
          id: depId,
          kind: 'object',
          constructors: const [],
          supertypes: const [],
        ),
      ],
      types: const [FlaxCodegenNamedTypeModel(name: 'Dep', id: depId)],
    );

    final declarationById = <String, Map<String, Object?>>{
      depId: {
        'id': depId,
        'name': 'Dep',
        'assessment': {'verdict': 'limited'},
      },
    };

    test('reports every uncovered type and skips enums and snapshots', () {
      final result = stage3GapProbe(
        target: target,
        official: official,
        declarationById: declarationById,
      );
      final modes = {
        for (final row in result['modes'] as List)
          (row as Map)['mode'] as String: row,
      };

      final subsetOnly = modes['subset_only']!;
      expect(subsetOnly['gapCount'], 2);
      expect(_gapNames(subsetOnly), ['Dep', 'Other']);
      final dep = _gap(subsetOnly, 'Dep');
      expect(dep['typeLibrary'], 'package:example/dep.dart');
      expect(dep['inInventory'], isTrue);
      expect(dep['inventoryVerdict'], 'limited');
      // Covered by the official provider, but not by the target alone.
      expect(dep['officialCovered'], isTrue);
      expect(dep['referencedBy'], ['Holder']);

      final withOfficial = modes['with_official']!;
      expect(_gapNames(withOfficial), ['Other']);
      final other = _gap(withOfficial, 'Other');
      expect(other['inInventory'], isFalse);
      expect(other['officialCovered'], isFalse);
      expect(other['referencedBy'], ['Holder']);
      expect(((other['typeLibrary'] as String?) ?? ''), isEmpty);
    });

    test('treats an adapted Stream as an intrinsic bridge value', () {
      const streamId = 'dart:async::Stream';
      final streamTarget = _module(
        name: 'stream_target',
        classes: const [
          FlaxCodegenClassModel(
            name: 'Watcher',
            id: 'a::Watcher',
            kind: 'object',
            constructors: [],
            supertypes: [],
            methods: [
              FlaxCodegenMethodModel(
                'watch',
                [],
                FlaxCodegenTypeRef(
                  'stream',
                  id: streamId,
                  name: 'Stream',
                  item: FlaxCodegenTypeRef('int'),
                ),
              ),
            ],
          ),
        ],
        types: const [
          FlaxCodegenNamedTypeModel(
            name: 'Stream',
            id: streamId,
            typeParameters: [
              FlaxCodegenGenericParameter(
                'T',
                FlaxCodegenTypeRef('any', nullable: true),
              ),
            ],
          ),
        ],
      );

      final result = stage3GapProbe(
        target: streamTarget,
        official: null,
        declarationById: const {},
      );
      final subsetOnly = (result['modes'] as List).single as Map;
      expect(subsetOnly['gapCount'], 0);
      expect(subsetOnly['gaps'], isEmpty);
    });

    test('reports no with_official mode without an official module', () {
      final result = stage3GapProbe(
        target: target,
        official: null,
        declarationById: declarationById,
      );
      final modes = {
        for (final row in result['modes'] as List)
          (row as Map)['mode'] as String: row,
      };
      expect(modes.keys, ['subset_only']);
    });
  });

  group('stage3CoreTypeProbe', () {
    test('aggregates unsupported core types across declarations', () {
      final result = stage3CoreTypeProbe(
        declarations: [
          _coreTypeDeclaration('Alpha', ['Type', 'DateTime?', 'Type']),
          _coreTypeDeclaration('Beta', ['StringBuffer']),
          {
            'name': 'Gamma',
            'assessment': {
              'verdict': 'limited',
              'diagnostics': [
                {'code': 'missing_dependency', 'message': 'Type'},
              ],
            },
          },
        ],
      );
      expect(result['diagnosticCount'], 4);
      expect(result['coreTypeCount'], 3);
      expect(result['classCount'], 2);
      final coreTypes = result['coreTypes'] as List;
      expect((coreTypes.first as Map)['coreType'], 'Type');
      expect((coreTypes.first as Map)['diagnosticCount'], 2);
      expect((coreTypes.first as Map)['classes'], ['Alpha', 'Alpha']);
    });
  });

  group('runFoundationStage3 select names', () {
    final repoRoot = _repoRoot();
    final fixture = Uri.file(
      p.join(repoRoot, 'packages/flax_codegen/test/fixtures/capability'),
    );

    test('merges explicit selections and reports unresolved names', () async {
      final directory = Directory.systemTemp.createTempSync(
        'flax-select-names',
      );
      addTearDown(() => directory.deleteSync(recursive: true));
      final result = await runFoundationStage3(
        workspaceRoot: repoRoot,
        declarations: [
          {
            'id': 'entry::ClosureHolder',
            'name': 'ClosureHolder',
            'kind': 'class',
            'exportNames': ['ClosureHolder'],
            'typeParameters': <String>[],
            'declaredMembers': <Map<String, Object?>>[
              _constructor('', ['dep']),
            ],
            'assessment': {
              'verdict': 'supported',
              'selection': {
                'kind': 'object',
                'typeArguments': <String>[],
                'constructors': {
                  '': ['dep'],
                },
              },
            },
          },
        ],
        outDir: directory.path,
        log: (_) {},
        compile: false,
        isolatePerClass: false,
        voidGetterRepro: false,
        shrinkBatchOnFailure: false,
        outputLabel: 'select-names',
        libraryUri: Uri.parse('${fixture.path}/closure_entry.dart').toString(),
        jsPackage: '@example/capability-entry',
        libraryName: 'capability_entry',
        excludeFromBatch: const {'ClosureHolder'},
        selectNames: const ['ClosureHolder', 'NotInInventory'],
      );

      final report = result['selectNames'] as Map<String, Object?>;
      expect(report['requested'], ['ClosureHolder', 'NotInInventory']);
      expect(report['resolved'], ['ClosureHolder']);
      expect(report['reAdded'], ['ClosureHolder']);
      expect(report['unresolved'], ['NotInInventory']);
      // The re-added class keeps the fixture's known closure failure, so the
      // batch stays E1 and the selection report is still produced.
      expect(result['evidence'], 'E1');
    });
  });

  group('capability_verify cli', () {
    test('gate flags without --stage3-library exit 64', () async {
      final result = await Process.run(Platform.resolvedExecutable, [
        'run',
        'tool/capability_verify.dart',
        '--gap-probe',
      ], workingDirectory: p.join(_repoRoot(), 'packages/flax_codegen'));
      expect(result.exitCode, 64);
      expect(result.stderr.toString(), contains('require --stage3-library'));
    });
  });
}

List<String> _gapNames(Map<dynamic, dynamic> mode) => [
  for (final gap in mode['gaps'] as List) (gap as Map)['name'] as String,
];

Map<dynamic, dynamic> _gap(Map<dynamic, dynamic> mode, String name) =>
    (mode['gaps'] as List).cast<Map<dynamic, dynamic>>().singleWhere(
      (gap) => gap['name'] == name,
    );

FlaxCodegenTypeRef _named(String name, String id) =>
    FlaxCodegenTypeRef('named', id: id, name: name);

FlaxCodegenGetterModel _getter(String name, FlaxCodegenTypeRef type) =>
    FlaxCodegenGetterModel(name, type);

FlaxCodegenParameterModel _parameter(String name, FlaxCodegenTypeRef type) =>
    FlaxCodegenParameterModel(
      name: name,
      type: type,
      required: true,
      positional: false,
      defaultCode: 'null',
    );

Map<String, Object?> _constructor(String name, List<String> parameters) => {
  'kind': 'constructor',
  'name': name,
  'parameters': [
    for (final parameter in parameters) {'name': parameter},
  ],
};

Map<String, Object?> _coreTypeDeclaration(String name, List<String> types) => {
  'name': name,
  'assessment': {
    'verdict': 'limited',
    'diagnostics': [
      for (final type in types)
        {
          'code': 'unsupported_core_type',
          'message': 'Unsupported core type: $type',
        },
    ],
  },
};

FlaxCodegenModuleModel _module({
  required String name,
  required List<FlaxCodegenClassModel> classes,
  required List<FlaxCodegenNamedTypeModel> types,
  Map<String, String> typeLibraries = const {},
  List<FlaxCodegenSnapshotModel> snapshots = const [],
}) => FlaxCodegenModuleModel(
  name: name,
  library: 'package:example/$name.dart',
  jsPackage: '@example/$name',
  dartOutput: 'unused.dart',
  tsOutput: 'unused.ts',
  classes: classes,
  types: types,
  typeLibraries: typeLibraries,
  snapshots: snapshots,
);

String _repoRoot() {
  var directory = Directory.current;
  for (var i = 0; i < 6; i++) {
    final candidate = directory.path;
    if (File(p.join(candidate, 'pubspec.yaml')).existsSync() &&
        File(p.join(candidate, 'packages/flax_codegen/pubspec.yaml'))
            .existsSync()) {
      return candidate;
    }
    directory = directory.parent;
  }
  throw StateError(
    'Cannot locate the Flax repository from ${Directory.current.path}',
  );
}
