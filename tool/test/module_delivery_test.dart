import 'dart:convert';
import 'dart:io';

import 'package:flax_codegen/src/manifest_codec.dart';
import 'package:flax_codegen/src/manifest_storage.dart';
import 'package:flax_codegen/src/model.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

const _targets = [
  (
    directory: 'flax',
    package: '@flax/core-runtime',
    specifier: '@flax/flutter/widgets',
    source: 'dist/flutter/widgets.js',
    subpathRoot: 'dist/flutter/generated/libraries/widgets',
  ),
  (
    directory: 'flax_material_ui',
    package: '@flax/material-ui-runtime',
    specifier: '@flax/material-ui',
    source: 'dist/index.js',
    subpathRoot: 'dist/generated/libraries/material',
  ),
  (
    directory: 'flax_cupertino_ui',
    package: '@flax/cupertino-ui-runtime',
    specifier: '@flax/cupertino-ui',
    source: 'dist/index.js',
    subpathRoot: 'dist/generated/libraries/cupertino',
  ),
];

void main() {
  final root = Directory.current.path;
  late Directory temporary;

  setUp(() {
    // Keep the copied script beneath the repository so Node finds Prettier.
    final parent = Directory(p.join(root, '.local/tmp'))
      ..createSync(recursive: true);
    temporary = parent.createTempSync('module-delivery-test-');
    addTearDown(() => temporary.deleteSync(recursive: true));
    final script = File(p.join(temporary.path, 'tool/module_delivery.mjs'));
    script.parent.createSync(recursive: true);
    File(p.join(root, 'tool/module_delivery.mjs')).copySync(script.path);
    File(p.join(root, 'tool/binding_manifest.mjs'))
        .copySync(p.join(temporary.path, 'tool/binding_manifest.mjs'));
    for (final owner in [
      'flax_fetch',
      'flax_websocket',
      'flax_local_storage',
      'flax_canvas',
    ]) {
      _writeJson(p.join(temporary.path, 'packages', owner, 'js/package.json'), {
        'name': '@fixture/$owner-runtime',
        'version': '0.0.0',
      });
    }
    _writeJson(
      p.join(temporary.path, 'packages/flax_canvas/bindings/manifest.json'),
      {'formatVersion': 28, 'modules': <Map<String, Object?>>[]},
    );
    for (final target in _targets) {
      final directory = p.join(temporary.path, 'packages', target.directory);
      final moduleId = 'flax.test/${target.directory}';
      _writeJson(p.join(directory, 'js/package.json'), {
        'name': target.package,
        'version': '0.0.0',
      });
      _writeJson(
        p.join(directory, 'bindings/manifest.json'),
        FlaxCodegenManifestStorage.compact({
          'formatVersion': 28,
          'modules': [
            {
              'name': target.directory,
              'moduleId': moduleId,
              'uiProtocol': 24,
              'requiredCapabilities': ['generic-call-types'],
              'model': {
                'publicLibraries': [
                  {'jsPackage': target.specifier},
                ],
                'topLevel': {
                  'setters': [
                    {
                      'id': '$moduleId#function:z%3D',
                      'isReference': false,
                      'type': FlaxCodegenManifestCodec.encodeTypeRef(
                        const FlaxCodegenTypeRef('String'),
                      ),
                    },
                    {
                      'id': 'flax.provider/values#function:ref%3D',
                      'isReference': true,
                    },
                    {'id': '$moduleId#function:a%3D'},
                  ],
                },
              },
            },
          ],
        }),
      );
    }
  });

  Future<ProcessResult> run() => Process.run('node', [
    'tool/module_delivery.mjs',
  ], workingDirectory: temporary.path);

  test(
    'Manifest 28 delivery includes owned setters and excludes references',
    () async {
      final result = await run();
      expect(result.exitCode, 0, reason: '${result.stdout}\n${result.stderr}');
      for (final target in _targets) {
        final output = jsonDecode(
          File(
            p.join(
              temporary.path,
              'packages',
              target.directory,
              'js/flax_modules.json',
            ),
          ).readAsStringSync(),
        ) as Map<String, dynamic>;
        expect(output['package'], target.package);
        final module = (output['modules'] as List)
            .cast<Map<String, dynamic>>()
            .singleWhere((module) => module['specifier'] == target.specifier);
        expect(module['source'], target.source);
        expect(module['subpathRoot'], target.subpathRoot);
        final moduleId = 'flax.test/${target.directory}';
        expect(module['bindings'], [
          {
            'moduleId': moduleId,
            'uiProtocol': 24,
            'requiredCapabilities': ['generic-call-types'],
            'types': <String>[],
            'functions': ['$moduleId#function:a%3D', '$moduleId#function:z%3D'],
          },
        ], reason: target.package);
      }
    },
  );

  test('UI local dependency subpaths share source and helper roots', () async {
    for (final target in _targets.skip(1)) {
      final path = p.join(
        temporary.path,
        'packages',
        target.directory,
        'bindings/manifest.json',
      );
      final manifest = jsonDecode(File(path).readAsStringSync()) as Map;
      for (final dependency in ['intl', 'helper_pkg2']) {
        final moduleId = 'flax.test/${target.directory}_deps_$dependency';
        (manifest['modules'] as List).add({
          'name': 'deps_$dependency',
          'moduleId': moduleId,
          'uiProtocol': 24,
          'model': {
            'publicLibraries': [
              {'jsPackage': '${target.specifier}/dependencies/$dependency'},
            ],
            'classes': [
              {'id': '$moduleId#type:Value'},
            ],
          },
        });
      }
      _writeJson(path, manifest);
    }

    final result = await run();
    expect(result.exitCode, 0, reason: '${result.stdout}\n${result.stderr}');
    for (final target in _targets.skip(1)) {
      final output = jsonDecode(
        File(
          p.join(
            temporary.path,
            'packages',
            target.directory,
            'js/flax_modules.json',
          ),
        ).readAsStringSync(),
      ) as Map;
      for (final dependency in ['intl', 'helper_pkg2']) {
        final module = (output['modules'] as List)
            .cast<Map<String, dynamic>>()
            .singleWhere(
              (module) =>
                  module['specifier'] ==
                  '${target.specifier}/dependencies/$dependency',
            );
        final sourceRoot = 'dist/generated/dependencies/$dependency';
        final moduleId = 'flax.test/${target.directory}_deps_$dependency';
        expect(module['source'], '$sourceRoot/index.js');
        expect(module['subpathRoot'], sourceRoot);
        expect(module['helperSubpaths'], [
          '_bindings/deps_$dependency.__module',
        ]);
        expect(module['bindings'][0]['types'], ['$moduleId#type:Value']);
      }
    }
  });

  test('UI delivery rejects invalid dependency subpaths', () async {
    for (final target in _targets.skip(1)) {
      final path = p.join(
        temporary.path,
        'packages',
        target.directory,
        'bindings/manifest.json',
      );
      final original = File(path).readAsStringSync();
      for (final dependency in [
        '',
        '../intl',
        'intl/extra',
        'Intl',
        'intl\n',
      ]) {
        final manifest = jsonDecode(original) as Map;
        final model = manifest['modules'][0]['model'] as Map;
        final specifier = '${target.specifier}/dependencies/$dependency';
        model['publicLibraries'] = [
          {'jsPackage': specifier},
        ];
        _writeJson(path, manifest);
        final result = await run();
        expect(result.exitCode, isNot(0), reason: specifier);
        expect(
          result.stderr,
          contains('No ${target.specifier} delivery source'),
        );
      }
      File(path).writeAsStringSync(original);
    }
  });

  test(
    'UI dependency roots and deep helpers compile through package exports',
    () async {
      final probes = <String>[];
      for (final target in _targets.skip(1)) {
        for (final (directory, packageName, prefix) in [
          ('js-types', target.specifier, 'types'),
          ('js', target.package, 'dist'),
        ]) {
          final manifest = jsonDecode(
            File(
              p.join(
                root,
                'packages',
                target.directory,
                directory,
                'package.json',
              ),
            ).readAsStringSync(),
          ) as Map;
          expect((manifest['exports'] as Map)['./dependencies/*'], {
            'types': [
              './$prefix/generated/dependencies/*.d.ts',
              './$prefix/generated/dependencies/*/index.d.ts',
            ],
          });
          final packageRoot = p.join(
            temporary.path,
            'node_modules',
            packageName,
          );
          _writeJson(p.join(packageRoot, 'package.json'), manifest);
          final types = File(
            p.join(
              packageRoot,
              prefix,
              'generated/dependencies/intl/index.d.ts',
            ),
          );
          types.parent.createSync(recursive: true);
          types.writeAsStringSync(
            'export declare class DateFormat { readonly locale: string; }',
          );
          final helper = File(
            p.join(
              types.parent.path,
              '_bindings/dependency_intl.__module.d.ts',
            ),
          );
          helper.parent.createSync(recursive: true);
          helper.writeAsStringSync(
            'export declare const dependency_intlBindingModule: '
            '{ readonly moduleId: string };',
          );
          final probe = 'dependency-${target.directory}-$directory.ts';
          File(p.join(temporary.path, probe)).writeAsStringSync('''
import {DateFormat} from '$packageName/dependencies/intl';
import {dependency_intlBindingModule} from '$packageName/dependencies/intl/_bindings/dependency_intl.__module';
const format: DateFormat = new DateFormat();
const moduleId: string = dependency_intlBindingModule.moduleId;
void format;
void moduleId;
''');
          probes.add(probe);
        }
      }
      _writeJson(p.join(temporary.path, 'package.json'), {'type': 'module'});
      _writeJson(p.join(temporary.path, 'tsconfig.json'), {
        'compilerOptions': {
          'target': 'ES2022',
          'module': 'NodeNext',
          'moduleResolution': 'NodeNext',
          'strict': true,
          'noEmit': true,
          'types': <String>[],
        },
        'files': probes,
      });
      final result = await Process.run('node', [
        p.join(root, 'node_modules/typescript/bin/tsc'),
        '--project',
        'tsconfig.json',
      ], workingDirectory: temporary.path);
      expect(result.exitCode, 0, reason: '${result.stdout}\n${result.stderr}');
    },
  );

  test('delivery includes enum operations and static accessors', () async {
    final path = p.join(temporary.path, 'packages/flax/bindings/manifest.json');
    final manifest = jsonDecode(File(path).readAsStringSync()) as Map;
    final model = manifest['modules'][0]['model'] as Map;
    const owner = 'flax.test/flax';
    model['classes'] = [
      {
        'id': '$owner#type:Status',
        'kind': 'enum',
        'getters': [
          {'name': 'label'},
        ],
        'setters': [
          {'name': 'history'},
        ],
        'methods': [
          {'name': 'format'},
        ],
        'constructors': [
          {'name': 'fromCode'},
        ],
        'staticGetters': [
          {'id': '$owner#read:Status.count'},
        ],
        'staticSetters': [
          {'id': '$owner#function:Status.count%3D'},
        ],
      },
    ];
    (model['classes'] as List).add({
      'id': '$owner#type:Kind',
      'kind': 'enum',
      'typeParameters': [
        {'name': 'T'},
      ],
      'getters': [
        {'name': 'value'},
      ],
      'methods': [
        {'name': 'echo', 'instance': true},
      ],
    });
    model['types'] = [
      {
        'id': '$owner#type:Kind',
        'enumNames': ['number', 'text'],
      },
    ];
    _writeJson(path, manifest);
    final result = await run();
    expect(result.exitCode, 0, reason: '${result.stdout}\n${result.stderr}');
    final output = jsonDecode(
      File(p.join(temporary.path, 'packages/flax/js/flax_modules.json'))
          .readAsStringSync(),
    ) as Map;
    final module = (output['modules'] as List)
        .cast<Map<String, dynamic>>()
        .singleWhere(
          (module) => module['specifier'] == '@flax/flutter/widgets',
        );
    expect(
      module['bindings'][0]['functions'],
      containsAll([
        '$owner#function:Kind.value%3Aget%3Anumber',
        '$owner#function:Kind.value%3Aget%3Atext',
        '$owner#function:Kind.echo%3Acall%3Anumber',
        '$owner#function:Kind.echo%3Acall%3Atext',
        '$owner#function:Status.label%3Aget',
        '$owner#function:Status.history%3Aset',
        '$owner#function:Status.format%3Acall',
        '$owner#function:Status.fromCode%3Afactory',
        '$owner#read:Status.count',
        '$owner#function:Status.count%3D',
      ]),
    );
    expect(module['bindings'][0]['requiredCapabilities'], [
      'generic-call-types',
    ]);
  });

  test('delivery rejects an unknown manifest version', () async {
    for (final owner in ['flax_canvas', 'flax']) {
      final path = 'packages/$owner/bindings/manifest.json';
      final file = File(p.join(temporary.path, path));
      final original = file.readAsStringSync();
      for (final version in [27, 29, '28', null]) {
        _writeJson(file.path, {
          'formatVersion': version,
          'modules': <Object?>[],
        });
        final result = await run();
        expect(result.exitCode, isNot(0));
        expect(result.stderr, contains('Expected Binding Manifest 28: $path'));
        expect(
          File(p.join(temporary.path, 'packages/flax/js/flax_modules.json'))
              .existsSync(),
          isFalse,
        );
      }
      file.writeAsStringSync(original);
    }
  });

  test(
    'member storage preserves projection and rejects unsafe references',
    () async {
      final result = await Process.run('node', [
        '--input-type=module',
        '-e',
        r'''
import assert from 'node:assert/strict';
import {expandManifestMembers as expand} from './tool/binding_manifest.mjs';
const row = {name: 'read', parameters: [{name: 'value', type: {$type: 0}}], result: {$type: 0}};
const body = {typeTable: [{kind: 'String'}], modules: [{methods: [{$member: 0}, {$member: 0}]}], typeLibraries: {$member: 'package:example/types.dart'}};
assert.deepEqual(expand({...body, memberTable: [row]}), {...body, modules: [{methods: [row, row]}]});
for (const invalid of [
  {memberTable: null}, {memberTable: [null]},
  {memberTable: [row], value: {$member: -1}},
  {memberTable: [row], value: {$member: 0.5}},
  {memberTable: [row], value: {$member: 1}},
  {memberTable: [row], value: {$member: 0, extra: true}},
  {memberTable: [row, row], value: {$member: 0}},
  {memberTable: [row]},
  {memberTable: [{name: 'self', parameters: [{$member: 0}]}]},
]) assert.throws(() => expand(invalid));
const growing = [row];
for (let i = 0; i < 30; i++) growing.push({name: 'grow', parameters: [{$member: i}, {$member: i}]});
assert.throws(() => expand({memberTable: growing}), /limit/);
''',
      ], workingDirectory: temporary.path);
      expect(result.exitCode, 0, reason: '${result.stdout}\n${result.stderr}');
    },
  );
}

void _writeJson(String path, Object value) {
  final file = File(path);
  file.parent.createSync(recursive: true);
  file.writeAsStringSync(jsonEncode(value));
}
