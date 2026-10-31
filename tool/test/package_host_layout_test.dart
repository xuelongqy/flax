import 'dart:convert';
import 'dart:io';

import 'package:test/test.dart';

import '../check_packages.dart';
import '../src/package_discovery.dart';

void main() {
  final workspaceRoot = Directory.current.path;
  late Directory directory;
  late FlaxWorkspacePackage package;
  File write(String name, String value) {
    final file = File('${directory.path}/$name');
    file.parent.createSync(recursive: true);
    file.writeAsStringSync(value);
    return file;
  }

  void delivery([List<Map<String, Object>>? modules]) => write(
    'js/flax_modules.json',
    jsonEncode({
      'formatVersion': 2,
      'package': '@fixture/runtime',
      'version': '0.0.0',
      'modules':
          modules ??
          [
            {
              'specifier': '@fixture/api/host',
              'source': 'dist/host/bootstrap.js',
              'bindings': <Object>[],
            },
          ],
    }),
  );

  setUp(() {
    directory = Directory.systemTemp.createTempSync('flax-host-layout-');
    package = FlaxWorkspacePackage('fixture', directory);
    write(
      'pubspec.yaml',
      jsonEncode({
        'name': 'fixture',
        'version': '0.0.0',
        'dependencies': {'flax': '0.0.0'},
      }),
    );
    write(
      'flax_package.yaml',
      jsonEncode({
        'format': 2,
        'dart': {'entrypoint': 'package:fixture/fixture.dart'},
        'javascript': {
          'package': '@fixture/runtime',
          'types': '@fixture/api',
          'version': 'same',
          'mode': 'runtime',
        },
        'capabilities': ['host-plugin'],
        'registration': {
          'plugins': ['FlaxFixturePlugin'],
        },
      }),
    );
    write('lib/fixture.dart', 'class FlaxFixturePlugin {}');
    write(
      'js/package.json',
      jsonEncode({
        'name': '@fixture/runtime',
        'version': '0.0.0',
        'type': 'module',
        'exports': {'./flax_modules.json': './flax_modules.json'},
      }),
    );
    write('js/tsconfig.npm.json', '{}');
    write('js/src/host/bootstrap.ts', 'export function install() {}');
    write('js/dist/host/bootstrap.js', 'export function install() {}');
    delivery();
    addTearDown(() => directory.deleteSync(recursive: true));
  });

  test(
    'module hosts and complete embedded hosts have distinct requirements',
    () async {
      await validatePackageLayout(package, workspaceRoot: workspaceRoot);
      write(
        'js/host.json',
        jsonEncode({
          'bridge': '__fixture',
          'symbol': 'fixtureBootstrap',
          'notices': <String>[],
        }),
      );
      write('js/tsconfig.host.json', '{}');
      await expectLater(
        validatePackageLayout(package, workspaceRoot: workspaceRoot),
        throwsStateError,
      );
      write(
        'lib/src/generated/host_bootstrap.g.dart',
        "const fixtureBootstrap = '(() => {})()';",
      );
      await validatePackageLayout(package, workspaceRoot: workspaceRoot);
      File('${directory.path}/js/host.json').deleteSync();
      final metadata = jsonDecode(
        File('${directory.path}/flax_package.yaml').readAsStringSync(),
      ) as Map;
      metadata['capabilities'] = ['core'];
      metadata.remove('registration');
      write('flax_package.yaml', jsonEncode(metadata));
      await expectLater(
        validatePackageLayout(package, workspaceRoot: workspaceRoot),
        throwsStateError,
      );
    },
  );

  test(
    'module hosts reject undeclared, duplicate and absent factory outputs',
    () async {
      delivery([
        {
          'specifier': '@fixture/api/other',
          'source': 'dist/host/bootstrap.js',
          'bindings': <Object>[],
        },
      ]);
      await expectLater(
        validatePackageLayout(package, workspaceRoot: workspaceRoot),
        throwsStateError,
      );
      final entry = {
        'specifier': '@fixture/api/host',
        'source': 'dist/host/bootstrap.js',
        'bindings': <Object>[],
      };
      delivery([entry, entry]);
      await expectLater(
        validatePackageLayout(package, workspaceRoot: workspaceRoot),
        throwsStateError,
      );
      delivery();
      File('${directory.path}/js/dist/host/bootstrap.js').deleteSync();
      await expectLater(
        validatePackageLayout(package, workspaceRoot: workspaceRoot),
        throwsStateError,
      );
    },
  );

  test('npm delivery validation reads the actual tarball sources', () async {
    final staged = Directory('${directory.path}/tar/package')
      ..createSync(recursive: true);
    for (final path in [
      'package.json',
      'flax_modules.json',
      'dist/host/bootstrap.js',
    ]) {
      final target = File('${staged.path}/$path');
      target.parent.createSync(recursive: true);
      File('${directory.path}/js/$path').copySync(target.path);
    }
    final archive = File('${directory.path}/package.tgz');
    Future<void> pack() async {
      final result = await Process.run('tar', [
        '-czf',
        archive.path,
        '-C',
        staged.parent.path,
        'package',
      ]);
      expect(result.exitCode, 0, reason: '${result.stderr}');
    }

    Future<void> validate() => validateNpmDeliveryArchive(
      package.js,
      archive,
      workspaceRoot: workspaceRoot,
    );
    await pack();
    await validate();
    File('${staged.path}/dist/host/bootstrap.js').deleteSync();
    await pack();
    await expectLater(validate(), throwsStateError);
    File('${staged.path}/flax_modules.json').deleteSync();
    await pack();
    await expectLater(validate(), throwsStateError);
  });
}
