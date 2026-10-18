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
  ),
  (
    directory: 'flax_material_ui',
    package: '@flax/material-ui',
    specifier: '@flax/material-ui',
  ),
  (
    directory: 'flax_cupertino_ui',
    package: '@flax/cupertino-ui',
    specifier: '@flax/cupertino-ui',
  ),
];

void main() {
  final root = Directory.current.path;
  late Directory temporary;

  setUp(() {
    // Keep the copied script beneath the repository so Node finds Prettier.
    final parent = Directory(p.join(root, '.local'))
      ..createSync(recursive: true);
    temporary = parent.createTempSync('module-delivery-test-');
    addTearDown(() => temporary.deleteSync(recursive: true));
    final script = File(p.join(temporary.path, 'tool/module_delivery.mjs'));
    script.parent.createSync(recursive: true);
    File(p.join(root, 'tool/module_delivery.mjs')).copySync(script.path);
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
      {'formatVersion': 26, 'modules': <Map<String, Object?>>[]},
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
          'formatVersion': 26,
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
    'Manifest 26 delivery includes owned setters and excludes references',
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
      _writeJson(file.path, {'formatVersion': 25, 'modules': <Object?>[]});
      final result = await run();
      expect(result.exitCode, isNot(0));
      expect(result.stderr, contains('Expected Binding Manifest'));
      expect(result.stderr, contains(path));
      expect(
        File(p.join(temporary.path, 'packages/flax/js/flax_modules.json'))
            .existsSync(),
        isFalse,
      );
      file.writeAsStringSync(original);
    }
  });
}

void _writeJson(String path, Object value) {
  final file = File(path);
  file.parent.createSync(recursive: true);
  file.writeAsStringSync(jsonEncode(value));
}
