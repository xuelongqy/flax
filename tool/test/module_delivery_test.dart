import 'dart:convert';
import 'dart:io';

import 'package:path/path.dart' as p;
import 'package:test/test.dart';

const _targets = [
  (
    directory: 'flax',
    package: '@flax/core',
    specifier: '@flax/flutter/widgets',
  ),
  (
    directory: 'flax_material_ui',
    package: '@flax/material-ui',
    specifier: '@flax/flutter/material',
  ),
  (
    directory: 'flax_cupertino_ui',
    package: '@flax/cupertino-ui',
    specifier: '@flax/flutter/cupertino',
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
    for (final target in _targets) {
      final directory = p.join(temporary.path, 'packages', target.directory);
      final moduleId = 'flax.test/${target.directory}';
      _writeJson(p.join(directory, 'js/package.json'), {
        'name': target.package,
        'version': '0.0.0',
      });
      _writeJson(p.join(directory, 'bindings/manifest.json'), {
        'formatVersion': 12,
        'modules': [
          {
            'name': target.directory,
            'moduleId': moduleId,
            'uiProtocol': 21,
            'model': {
              'publicLibraries': [
                {'jsPackage': target.specifier},
              ],
              'topLevel': {
                'setters': [
                  {'id': '$moduleId#function:z%3D', 'isReference': false},
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
      });
    }
  });

  Future<ProcessResult> run() => Process.run('node', [
    'tool/module_delivery.mjs',
  ], workingDirectory: temporary.path);

  test(
    'Manifest 12 delivery includes owned setters and excludes references',
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
            'uiProtocol': 21,
            'types': <String>[],
            'functions': ['$moduleId#function:a%3D', '$moduleId#function:z%3D'],
          },
        ], reason: target.package);
      }
    },
  );

  test('delivery rejects an unknown manifest version', () async {
    _writeJson(p.join(temporary.path, 'packages/flax/bindings/manifest.json'), {
      'formatVersion': 999,
      'modules': <Map<String, Object?>>[],
    });
    final result = await run();
    expect(result.exitCode, isNot(0));
    expect(result.stderr, contains('Expected Binding Manifest'));
    expect(result.stderr, contains('packages/flax/bindings/manifest.json'));
    expect(
      File(p.join(temporary.path, 'packages/flax/js/flax_modules.json'))
          .existsSync(),
      isFalse,
    );
  });
}

void _writeJson(String path, Object value) {
  final file = File(path);
  file.parent.createSync(recursive: true);
  file.writeAsStringSync(jsonEncode(value));
}
