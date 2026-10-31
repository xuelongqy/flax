import 'dart:convert';
import 'dart:io';

import 'package:test/test.dart';
import 'package:crypto/crypto.dart';

import '../src/archive_packing.dart';
import '../src/package_discovery.dart';

void main() {
  test(
    'existing dist cannot bypass native producer prepack validation',
    () async {
      final root = Directory.systemTemp.createTempSync('flax-native-prepack-');
      addTearDown(() => root.deleteSync(recursive: true));
      File write(String name, String value) {
        final file = File('${root.path}/$name');
        file.parent.createSync(recursive: true);
        file.writeAsStringSync(value);
        return file;
      }

      write(
        'js/package.json',
        jsonEncode({
          'name': '@fixture/native',
          'version': '0.0.0',
          'scripts': {'prepack': 'node ../tool/check_native.mjs'},
        }),
      );
      write('js/dist/index.js', 'export const cached = true;');
      write(
        'tool/check_native.mjs',
        File('packages/flax_webgpu/tool/check_native.mjs').readAsStringSync(),
      );
      final package = FlaxNpmPackage(
        name: '@fixture/native',
        directory: Directory('${root.path}/js'),
        mode: 'runtime',
      );
      await expectLater(
        runNpmArchivePrepack(package),
        throwsA(isA<ProcessException>()),
      );
      final binary = write('js/native/libflax_webgpu.dylib', 'native fixture');
      final notices = write(
        'js/native/THIRD_PARTY_NOTICES.txt',
        'notice fixture',
      );
      final source = write('native/source.cpp', 'source fixture');
      final descriptor = write('js/native.json', 'descriptor fixture');
      String hash(File file) =>
          sha256.convert(file.readAsBytesSync()).toString();
      write(
        'js/native/provenance.json',
        jsonEncode({
          'formatVersion': 1,
          'dawnRevision': '5fbd545292cb7a4a9a275e322abec6007ffe2ae8',
          'target': 'macos-arm64',
          'files': {
            'libflax_webgpu.dylib': hash(binary),
            'THIRD_PARTY_NOTICES.txt': hash(notices),
          },
          'sources': {
            'native/source.cpp': hash(source),
            'js/native.json': hash(descriptor),
          },
        }),
      );
      await runNpmArchivePrepack(package);
      for (final file in [binary, source, descriptor]) {
        final original = file.readAsBytesSync();
        file.writeAsStringSync('changed');
        await expectLater(
          runNpmArchivePrepack(package),
          throwsA(isA<ProcessException>()),
        );
        file.writeAsBytesSync(original);
      }
      await runNpmArchivePrepack(package);
    },
  );

  test('npm archives resolve workspace dependencies in every section', () {
    final temporary = Directory.systemTemp.createTempSync('flax-archive-');
    addTearDown(() => temporary.deleteSync(recursive: true));
    final manifest = File('${temporary.path}/package.json');
    const sections = [
      'dependencies',
      'devDependencies',
      'peerDependencies',
      'optionalDependencies',
    ];
    manifest.writeAsStringSync(
      jsonEncode({
        'name': '@flax/example',
        'private': true,
        for (final section in sections)
          section: {'@flax/core': 'workspace:*', 'buffer': '6.0.3'},
      }),
    );

    prepareNpmArchiveManifest(
      temporary,
      npmVersions: const {'@flax/core': '1.2.3'},
      npmOwnerDirectories: const {},
    );

    final packed =
        jsonDecode(manifest.readAsStringSync()) as Map<String, dynamic>;
    expect(packed.containsKey('private'), isFalse);
    for (final section in sections) {
      expect(packed[section], {'@flax/core': '1.2.3', 'buffer': '6.0.3'});
    }
  });
}
