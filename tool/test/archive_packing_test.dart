import 'dart:convert';
import 'dart:io';

import 'package:test/test.dart';

import '../src/archive_packing.dart';

void main() {
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
