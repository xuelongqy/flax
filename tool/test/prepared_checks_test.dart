import 'dart:convert';
import 'dart:io';

import 'package:test/test.dart';

import '../src/prepared_checks.dart';
import '../src/consumer_workspace.dart';

void main() {
  late Directory root;
  setUp(() {
    root = Directory.systemTemp.createTempSync('flax-preparation-test-');
    Process.runSync('git', ['init', '--quiet'], workingDirectory: root.path);
    Process.runSync('git', [
      '-c',
      'user.name=Test',
      '-c',
      'user.email=test@example.invalid',
      'commit',
      '--allow-empty',
      '-m',
      'baseline',
      '--quiet',
    ], workingDirectory: root.path);
    File('${root.path}/input.txt').writeAsStringSync('input');
  });
  tearDown(() => root.deleteSync(recursive: true));
  Directory artifact() {
    final output = root.createTempSync('artifact-');
    final payload = File('${output.path}/files/examples/app/assets/app.js')
      ..parent.createSync(recursive: true)
      ..writeAsStringSync('prepared');
    File('${output.path}/manifest.json').writeAsStringSync(
      jsonEncode({
        'format': 1,
        ...preparationIdentity(root.path),
        'sourceRoot': root.path,
        'sourceUri': root.uri.toString(),
        'outputs': {'examples/app/assets/app.js': fileDigest(payload)},
      }),
    );
    return output;
  }

  test('valid outputs restore only after identity and all hashes pass', () {
    final output = artifact();
    // Artifact files are not source inputs, just as ignored build/ inputs in the repo.
    File('${root.path}/.git/info/exclude')
        .writeAsStringSync('artifact-*/\nexamples/\n');
    final manifestFile = File('${output.path}/manifest.json');
    final manifest = jsonDecode(manifestFile.readAsStringSync()) as Map;
    manifest.addAll(preparationIdentity(root.path));
    manifestFile.writeAsStringSync(jsonEncode(manifest));
    consumePreparedChecks(root.path, output);
    expect(
      File('${root.path}/examples/app/assets/app.js').readAsStringSync(),
      'prepared',
    );
    File('${output.path}/files/examples/app/assets/app.js')
        .writeAsStringSync('corrupt');
    expect(() => consumePreparedChecks(root.path, output), throwsStateError);
    expect(
      File('${root.path}/examples/app/assets/app.js').readAsStringSync(),
      'prepared',
    );
  });
  test(
    'wrong checkout, changed inputs, missing outputs and unsafe paths fail',
    () {
      File('${root.path}/.git/info/exclude').writeAsStringSync('artifact-*/\n');
      final output = artifact();
      final file = File('${output.path}/manifest.json');
      final original = file.readAsStringSync();
      final manifest = jsonDecode(original) as Map<String, dynamic>;
      manifest['checkout'] = 'wrong';
      file.writeAsStringSync(jsonEncode(manifest));
      expect(() => consumePreparedChecks(root.path, output), throwsStateError);
      file.writeAsStringSync(original);
      File('${root.path}/input.txt').writeAsStringSync('changed');
      expect(() => consumePreparedChecks(root.path, output), throwsStateError);
      File('${root.path}/input.txt').writeAsStringSync('input');
      File('${output.path}/files/examples/app/assets/app.js').deleteSync();
      expect(() => consumePreparedChecks(root.path, output), throwsStateError);
      for (final path in [
        '../outside',
        '/absolute',
        'packages/a/js/dist/../../input.txt',
        '.dart_tool/package_config.json',
      ]) {
        expect(preparedOutputPath(path), isFalse);
      }
    },
  );
  test('archive proof is bound to the actual checkout and source inputs', () {
    File('${root.path}/.git/info/exclude').writeAsStringSync('proof.json\n');
    final proof = File('${root.path}/proof.json');
    writeArchiveProof(root.path, proof);
    validateArchiveProof(root.path, proof);
    File('${root.path}/input.txt').writeAsStringSync('changed');
    expect(() => validateArchiveProof(root.path, proof), throwsStateError);
  });
  test(
    'real preparation includes standalone npm outputs and rewrites Dart URIs',
    () {
      File('${root.path}/.git/info/exclude')
          .writeAsStringSync('build/\ndist/\n.dart_tool/\n');
      Directory('${root.path}/examples').createSync();
      for (final owner in ['flax_dart', 'flax_flutter']) {
        final manifest = File('${root.path}/packages/$owner/js/package.json')
          ..parent.createSync(recursive: true)
          ..writeAsStringSync(jsonEncode({'name': '@flax/$owner'}));
        File('${manifest.parent.path}/dist/index.d.ts')
          ..parent.createSync(recursive: true)
          ..writeAsStringSync('export {};');
      }
      final owner = Directory('${root.path}/packages/owner')..createSync();
      File('${owner.path}/pubspec.yaml').writeAsStringSync('name: owner\n');
      File('${owner.path}/flax_package.yaml').writeAsStringSync(
        'format: 1\ndart:\n  entrypoint: package:owner/owner.dart\ncapabilities: [codegen]\n',
      );
      File('${owner.path}/.dart_tool/flax/ui/bindings.dart')
        ..parent.createSync(recursive: true)
        ..writeAsStringSync(
          "import '${root.uri}packages/owner/lib/owner.dart';\n",
        );
      File('${root.path}/build/prepared-ui-fixtures.json')
        ..parent.createSync(recursive: true)
        ..writeAsStringSync('{}');
      final output = Directory('${root.path}/build/prepared');
      writePreparedChecks(root.path, output);
      final manifestFile = File('${output.path}/manifest.json');
      final manifest = jsonDecode(manifestFile.readAsStringSync()) as Map;
      final outputs = manifest['outputs'] as Map;
      expect(
        outputs.keys,
        containsAll([
          'packages/flax_dart/js/dist/index.d.ts',
          'packages/flax_flutter/js/dist/index.d.ts',
          'packages/owner/.dart_tool/flax/ui/bindings.dart',
        ]),
      );
      // Model consumption on another runner without altering checkout/source identity.
      manifest['sourceUri'] = 'file:///another-checkout/';
      final payload = File(
        '${output.path}/files/packages/owner/.dart_tool/flax/ui/bindings.dart',
      );
      payload.writeAsStringSync(
        "import 'file:///another-checkout/packages/owner/lib/owner.dart';\n",
      );
      outputs['packages/owner/.dart_tool/flax/ui/bindings.dart'] = fileDigest(
        payload,
      );
      manifestFile.writeAsStringSync(jsonEncode(manifest));
      consumePreparedChecks(root.path, output);
      expect(
        File('${owner.path}/.dart_tool/flax/ui/bindings.dart')
            .readAsStringSync(),
        "import '${root.uri}packages/owner/lib/owner.dart';\n",
      );
    },
  );
  test('relocation removes original outputs and warm reuse restores the latest build', () {
    final cache = Directory('${root.path}/cache');
    final first = ConsumerWorkspace('target-hermes-all', cacheRoot: cache.path);
    final build = Directory('${first.directory.path}/app/build')
      ..createSync(recursive: true);
    File('${build.path}/output').writeAsStringSync('debug');
    first.removeBuild(build);
    expect(build.existsSync(), isFalse);
    build.createSync(recursive: true);
    File('${build.path}/output').writeAsStringSync('release');
    first.removeBuild(build);
    expect(build.existsSync(), isFalse);
    first.finish();
    final second = ConsumerWorkspace(
      'target-hermes-all',
      cacheRoot: cache.path,
    );
    expect(second.directory.path, first.directory.path);
    expect(File('${build.path}/output').readAsStringSync(), 'release');
    second.finish();
    final other = ConsumerWorkspace('target-v8-all', cacheRoot: cache.path);
    expect(other.directory.path, isNot(first.directory.path));
    other.finish();
  });
}
