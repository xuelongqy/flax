import 'dart:convert';
import 'dart:io';

import 'src/package_discovery.dart';
import 'src/package_verification.dart';
import 'src/process.dart';

Future<void> main() => command(() async {
  final root = Directory.fromUri(Platform.script.resolve('../'));
  final temporary = Directory.systemTemp.createTempSync('flax-engines-');
  // Use the same prepared libraries as the independent Dart consumer below.
  final nativeTest = '${temporary.path}/engines_test';
  final engines = discoverEngineIds(root.path);
  if (engines.length < 2) {
    throw StateError(
      'Engine coexistence requires at least two engine packages',
    );
  }
  final packages = [
    'flax',
    for (final engine in engines) 'flax_engine_$engine',
  ];

  try {
    copyDartPackages(root, temporary, packages);
    final consumer = Directory('${temporary.path}/consumer')..createSync();
    final sdkDefines = <String, Object?>{};
    for (final engine in engines) {
      final prefix = 'FLAX_${engine.toUpperCase()}_SDK_';
      final archive = Platform.environment['${prefix}ARCHIVE'];
      final digest = Platform.environment['${prefix}SHA256'];
      if ((archive == null) != (digest == null)) {
        throw StateError('Set both ${prefix}ARCHIVE and ${prefix}SHA256');
      }
      if (archive != null) {
        sdkDefines['flax_engine_$engine'] = {
          'sdkArchive': archive,
          'sdkSha256': digest,
        };
      }
    }
    File('${consumer.path}/pubspec.yaml').writeAsStringSync(
      jsonEncode({
        'name': 'flax_engine_comparison',
        'environment': {'sdk': '^3.13.2'},
        'dependencies': {
          for (final name in packages) name: {'path': '../$name'},
        },
        if (sdkDefines.isNotEmpty) 'hooks': {'user_defines': sdkDefines},
      }),
    );
    final fixture = File('${root.path}/tests/runtime/engines.dart')
        .readAsStringSync();
    File('${consumer.path}/main.dart').writeAsStringSync(
      fixture
          .replaceFirst(
            '// __FLAX_ENGINE_IMPORTS__',
            engines
                .map(
                  (engine) =>
                      "import 'package:flax_engine_$engine/flax_engine_$engine.dart';",
                )
                .join('\n'),
          )
          .replaceFirst(
            '  // __FLAX_ENGINE_FACTORIES__',
            engines
                .map(
                  (engine) =>
                      "  '$engine': ${engineFactoryClass(root.path, engine)}.createRuntime,",
                )
                .join('\n'),
          ),
    );
    await run('flutter', ['pub', 'get'], directory: consumer.path);
    await run(Platform.resolvedExecutable, [
      'run',
      'main.dart',
    ], directory: consumer.path);
    await run('xcrun', [
      'clang++',
      '-std=c++17',
      '-I',
      '${root.path}/packages/flax/native/include',
      '${root.path}/tests/runtime/native/engines_test.cpp',
      '-o',
      nativeTest,
    ]);
    await run(nativeTest, [
      for (final engine in engines) ...[
        _builtBridge(consumer, engine).path,
        engineEntrySymbol(root.path, engine),
      ],
    ]);
  } finally {
    temporary.deleteSync(recursive: true);
  }
});

File _builtBridge(Directory consumer, String engine) {
  final outputs = Directory(
    '${consumer.path}/.dart_tool/hooks_runner/shared/flax_engine_$engine/build',
  );
  final matches = outputs
      .listSync(recursive: true, followLinks: false)
      .whereType<File>()
      .where((file) => file.path.endsWith('/assets/libflax_$engine.dylib'))
      .toList();
  if (matches.length != 1) {
    throw StateError(
      'Expected one built $engine bridge, found ${matches.length}',
    );
  }
  return matches.single;
}
