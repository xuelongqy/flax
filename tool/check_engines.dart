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
    File('${consumer.path}/pubspec.yaml').writeAsStringSync(
      jsonEncode({
        'name': 'flax_engine_comparison',
        'environment': {'sdk': '^3.13.2'},
        'dependencies': {
          for (final name in packages) name: {'path': '../$name'},
        },
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
        '${temporary.path}/flax_engine_$engine/native/generated/macos_arm64/libflax_$engine.dylib',
        engineEntrySymbol(root.path, engine),
      ],
    ]);
  } finally {
    temporary.deleteSync(recursive: true);
  }
});
