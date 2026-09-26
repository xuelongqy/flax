import 'dart:convert';
import 'dart:io';

import 'package:crypto/crypto.dart';
import 'package:path/path.dart' as p;

import 'src/engine_selection.dart';
import 'src/package_discovery.dart';
import 'src/process.dart';

Future<void> main(List<String> arguments) => command(() async {
  final engine = selectedEngine(arguments);
  if (!Platform.isMacOS) {
    throw UnsupportedError('Prebuilt runtimes currently target macOS arm64.');
  }
  final root = Directory.fromUri(Platform.script.resolve('../')).path;
  final config = jsonDecode(File(p.join(root, 'runtime.json')).readAsStringSync())
      as Map<String, dynamic>;
  if (config['schemaVersion'] != 1 || config['abiVersion'] != 2) {
    throw StateError('Unsupported Flax runtime distribution contract.');
  }
  final version = config['version'] as String;
  final repository = config['repository'] as String;
  final asset = (config['engines'] as Map<String, dynamic>)[engine] as String?;
  if (asset == null) throw StateError('No runtime artifact for engine $engine');

  final package = findPackage(root, 'flax_engine_$engine');
  final cache = Directory(p.join(root, '.dart_tool', 'flax_runtime', version))
    ..createSync(recursive: true);
  final archive = File(p.join(cache.path, asset));
  if (!archive.existsSync()) {
    final partial = File('${archive.path}.part');
    final url = 'https://github.com/$repository/releases/download/v$version/$asset';
    await run('curl', [
      '--fail',
      '--location',
      '--retry',
      '2',
      '--output',
      partial.path,
      url,
    ]);
    partial.renameSync(archive.path);
  }

  final staging = Directory(p.join(cache.path, 'unpack-$engine'));
  if (staging.existsSync()) staging.deleteSync(recursive: true);
  staging.createSync(recursive: true);
  await run('tar', ['-xzf', archive.path, '-C', staging.path]);

  final manifestFile = File(p.join(staging.path, 'manifest.json'));
  if (!manifestFile.existsSync()) throw StateError('Runtime artifact has no manifest.json');
  final manifest = jsonDecode(manifestFile.readAsStringSync()) as Map<String, dynamic>;
  if (manifest['schemaVersion'] != 1 ||
      manifest['runtimeVersion'] != version ||
      manifest['abiVersion'] != config['abiVersion'] ||
      manifest['engine'] != engine ||
      manifest['os'] != 'macos' ||
      manifest['architecture'] != 'arm64') {
    throw StateError('Runtime artifact manifest does not match the requested runtime.');
  }
  final libraryName = manifest['library'] as String;
  final library = File(p.join(staging.path, libraryName));
  if (!library.existsSync()) throw StateError('Runtime artifact library is missing: $libraryName');
  final actual = (await sha256.bind(library.openRead()).first).toString();
  if (actual != manifest['sha256']) throw StateError('Runtime artifact checksum mismatch');

  final output = Directory(p.join(package.directory.path, 'native/generated/macos_arm64'));
  if (output.existsSync()) output.deleteSync(recursive: true);
  output.createSync(recursive: true);
  // The distribution manifest wraps the engine-specific manifest under
  // engineMetadata. Package hooks intentionally keep validating their existing
  // engine contract, so install that metadata as the package-local manifest.
  final packageManifest = Map<String, dynamic>.from(
    (manifest['engineMetadata'] as Map).cast<String, dynamic>(),
  )
    ..['abiVersion'] = manifest['abiVersion']
    ..['os'] = manifest['os']
    ..['architecture'] = manifest['architecture']
    ..['minimumOSVersion'] = manifest['minimumOSVersion']
    ..['entrySymbol'] = manifest['entrySymbol']
    ..['sha256'] = manifest['sha256'];
  File(p.join(output.path, 'manifest.json')).writeAsStringSync(
    '${const JsonEncoder.withIndent('  ').convert(packageManifest)}\n',
  );
  library.copySync(p.join(output.path, libraryName));
  final notices = Directory(p.join(staging.path, 'notices'));
  if (notices.existsSync()) {
    await run('cp', ['-R', notices.path, p.join(output.path, 'notices')]);
  }
  stdout.writeln('Prepared $engine $version from $repository.');
});
