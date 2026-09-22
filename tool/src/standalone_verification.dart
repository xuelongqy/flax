import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:path/path.dart' as p;
import 'package:yaml/yaml.dart';

import 'package_verification.dart';
import 'process.dart';
import 'ui_testing.dart';
import 'example_engine.dart';
import 'package_discovery.dart';
import 'engine_selection.dart';

Future<void> verifyStandalone(
  String root, {
  String engine = defaultFlaxEngine,
}) async {
  final workspacePackages = {
    for (final package in discoverPackages(root)) package.name: package,
  };
  final workspaceNpmPackages = {
    for (final package in discoverNpmPackages(root)) package.name: package,
  };
  final sourcePubspec = readYamlFile(
    File('$root/examples/standalone/pubspec.yaml'),
  );
  final sourceDependencies =
      (sourcePubspec['dependencies'] as Map).keys
          .cast<String>()
          .where(workspacePackages.containsKey)
          .toSet()
        ..removeWhere((name) => name.startsWith('flax_engine_'))
        ..add('flax_engine_$engine');
  final dartPackages = sourceDependencies.toList()..sort();
  requireUiAssets(root, engine: engine);
  final elapsed = Stopwatch()..start();
  await withExample(root, engine, 'standalone', (example) async {
    await run('flutter', [
      'test',
      '--no-pub',
      '--reporter',
      'expanded',
      'test',
    ], directory: example);
  });
  final temporary = Directory.systemTemp.createTempSync('flax-ui-package-');
  final relocated = Directory.systemTemp.createTempSync('flax-ui-relocated-');
  final environment = Map<String, String>.of(Platform.environment)
    ..removeWhere(
      (name, _) =>
          name.startsWith('DYLD_') ||
          name == 'LD_LIBRARY_PATH' ||
          name == 'NODE_PATH' ||
          name.startsWith('FLAX_VERIFY_'),
    );
  Future<void> execute(
    String executable,
    List<String> args,
    String directory,
  ) => run(
    executable,
    args,
    directory: directory,
    environment: environment,
    inheritEnvironment: false,
  );
  try {
    final packages = Directory('${temporary.path}/packages');
    copyDartPackages(Directory(root), packages, dartPackages);
    final consumer = '${temporary.path}/consumer';
    // Copy source inputs only. The real app is also the external consumer fixture.
    final sources = await Process.run('git', [
      'ls-files',
      '--cached',
      '--others',
      '--exclude-standard',
      '-z',
      'examples/standalone',
    ], workingDirectory: root);
    if (sources.exitCode != 0) {
      throw StateError('Cannot enumerate standalone sources');
    }
    for (final path
        in (sources.stdout as String)
            .split('\u0000')
            .where((s) => s.isNotEmpty)
            .toSet()) {
      final source = File('$root/$path');
      if (!source.existsSync()) continue;
      final destination = File(
        p.join(consumer, p.relative(path, from: 'examples/standalone')),
      );
      destination.parent.createSync(recursive: true);
      source.copySync(destination.path);
    }
    final flutter = consumer;
    final js = '$consumer/js';
    final manifest = File('$flutter/pubspec.yaml');
    final pubspec = jsonDecode(
      jsonEncode(loadYaml(manifest.readAsStringSync())),
    ) as Map<String, dynamic>;
    pubspec.remove('resolution');
    (pubspec['dependencies'] as Map<String, dynamic>).removeWhere(
      (name, _) => name.startsWith('flax_engine_'),
    );
    for (final name in dartPackages) {
      (pubspec['dependencies'] as Map<String, dynamic>)[name] = {
        'path': p.relative(p.join(packages.path, name), from: consumer),
      };
    }
    manifest.writeAsStringSync(jsonEncode(pubspec));
    selectExampleEngine(root, flutter, engine);
    final artifacts = Directory('${temporary.path}/artifacts')..createSync();
    final dependencies = <String, String>{};
    final sourceJs = jsonDecode(
      File('$root/examples/standalone/js/package.json').readAsStringSync(),
    ) as Map<String, dynamic>;
    final requestedJs =
        (sourceJs['dependencies'] as Map).keys.cast<String>().toList()..sort();
    final workspaceJsDirectories = <String, Directory>{
      for (final package in workspaceNpmPackages.values)
        package.name: package.directory,
    };
    for (final entity in Directory('$root/packages').listSync()) {
      if (entity is! Directory) continue;
      final directory = Directory(p.join(entity.path, 'js'));
      final manifest = File(p.join(directory.path, 'package.json'));
      if (!manifest.existsSync()) continue;
      final data =
          jsonDecode(manifest.readAsStringSync()) as Map<String, dynamic>;
      final name = data['name'];
      if (name is String && name.isNotEmpty) {
        workspaceJsDirectories.putIfAbsent(name, () => directory);
      }
    }
    final requestedBuildJs = <String>[
      for (final entry
          in ((sourceJs['devDependencies'] as Map?) ?? const {}).entries)
        if (entry.value is String &&
            (entry.value as String).startsWith('workspace:') &&
            workspaceJsDirectories.containsKey(entry.key))
          entry.key as String,
    ]..sort();
    final requiredJs = <String>{};
    final pendingJs = [...requestedJs, ...requestedBuildJs];
    while (pendingJs.isNotEmpty) {
      final name = pendingJs.removeLast();
      final directory = workspaceJsDirectories[name];
      if (directory == null) {
        throw StateError('Unknown workspace JS package: $name');
      }
      if (!requiredJs.add(name)) continue;
      final packageManifest = jsonDecode(
        File(p.join(directory.path, 'package.json')).readAsStringSync(),
      ) as Map<String, dynamic>;
      final packageDependencies = packageManifest['dependencies'];
      if (packageDependencies is Map) {
        pendingJs.addAll(
          packageDependencies.keys.cast<String>().where(
            workspaceJsDirectories.containsKey,
          ),
        );
      }
    }
    final packedDependencies = <String, String>{};
    for (final name in requiredJs.toList()..sort()) {
      final directory = workspaceJsDirectories[name]!;
      final packageManifest = jsonDecode(
        File(p.join(directory.path, 'package.json')).readAsStringSync(),
      ) as Map<String, dynamic>;
      final version = packageManifest['version'] as String;
      await execute('pnpm', [
        'pack',
        '--pack-destination',
        artifacts.path,
      ], directory.path);
      final archiveName = name.replaceFirst('@', '').replaceAll('/', '-');
      final tarball = '${artifacts.path}/$archiveName-$version.tgz';
      if (!File(tarball).existsSync()) {
        throw StateError('Missing packed package: $tarball');
      }
      packedDependencies[name] = 'file:${p.relative(tarball, from: js)}';
      if (requestedJs.contains(name)) {
        dependencies[name] = packedDependencies[name]!;
      }
    }
    final packageFile = File('$js/package.json');
    final package =
        jsonDecode(packageFile.readAsStringSync()) as Map<String, dynamic>;
    package['dependencies'] = dependencies;
    final devDependencies =
        (package['devDependencies'] as Map?)?.cast<String, dynamic>() ??
        <String, dynamic>{};
    for (final name in requestedBuildJs) {
      devDependencies[name] = packedDependencies[name]!;
    }
    package['devDependencies'] = devDependencies;
    packageFile.writeAsStringSync(jsonEncode(package));
    // Map transitive Flax edges to the same unpublished tarballs, never a registry.
    File('$js/pnpm-workspace.yaml').writeAsStringSync(
      jsonEncode({
        'packages': ['.'],
        'overrides': packedDependencies,
        'allowBuilds': {'esbuild': true, 'core-js-pure': false},
      }),
    );
    await execute('pnpm', ['install'], js);
    await execute('pnpm', ['run', 'typecheck'], js);
    await execute('pnpm', ['run', 'bundle'], js);
    await execute('flutter', ['pub', 'get'], flutter);
    final configFile = File('$flutter/.dart_tool/package_config.json');
    final config =
        jsonDecode(configFile.readAsStringSync()) as Map<String, dynamic>;
    for (final name in dartPackages) {
      final entry = (config['packages'] as List)
          .cast<Map<String, dynamic>>()
          .singleWhere((e) => e['name'] == name);
      final resolved = Directory.fromUri(
        configFile.uri.resolve(entry['rootUri'] as String),
      ).resolveSymbolicLinksSync();
      if (resolved !=
          Directory('${packages.path}/$name').resolveSymbolicLinksSync()) {
        throw StateError('External Dart package escaped its copy: $name');
      }
    }
    final packageNames = jsonEncode(requestedJs);
    final verifyJs =
        'const packages = $packageNames;\n'
        r'''
import {realpathSync, readFileSync} from 'node:fs';
import {resolve} from 'node:path';
const root = realpathSync(process.cwd());
const roots = Object.fromEntries(packages.map(name => [name, realpathSync(`node_modules/${name}`)]));
for (const [name, location] of Object.entries(roots)) {
  if (!location.startsWith(root + '/node_modules/')) throw new Error(`Package outside consumer: ${name}`);
  const packageJson = JSON.parse(readFileSync(resolve(location, 'package.json'), 'utf8'));
  const rootExport = packageJson.exports?.['.'];
  if (typeof rootExport === 'string' || rootExport?.import) await import(name);
  const deps = packageJson.dependencies;
  for (const dependency of packages) {
    if (deps?.[dependency] && realpathSync(resolve(root, 'node_modules', dependency)) !== roots[dependency]) {
      throw new Error(`Duplicate or external dependency: ${name} -> ${dependency}`);
    }
  }
}
await import('@flax/core/navigation');
await import('@flax/core/bindings');
await import('@flax/core/host');
console.log('External JS exports and singleton Flax dependencies verified.');
''';
    final verifyFile = File('$js/.flax-verify.mjs')
      ..writeAsStringSync(verifyJs);
    await execute('node', [
      '--import',
      '@flax/tools/register-node-loader',
      verifyFile.path,
    ], js);
    await execute('flutter', ['analyze', '--no-pub', '--fatal-infos'], flutter);
    final receipt = File('$flutter/build/standalone-integration.json');
    await execute('flutter', [
      'drive',
      '--no-pub',
      '-d',
      'macos',
      '--driver',
      'test_driver/integration_test.dart',
      '--target',
      'integration_test/app_test.dart',
    ], flutter);
    if (!receipt.existsSync() ||
        (jsonDecode(receipt.readAsStringSync()) as Map)['completed'] != true) {
      throw StateError('External application integration receipt is missing');
    }
    final releaseBuild = Stopwatch()..start();
    await execute('flutter', [
      'build',
      'macos',
      '--release',
      '--no-pub',
    ], flutter);
    releaseBuild.stop();
    const product = 'build/macos/Build/Products/Release/flax_standalone.app';
    final output = Directory(
      '$root/build/standalone${engine == defaultFlaxEngine ? '' : '-$engine'}',
    )..createSync(recursive: true);
    final production = Directory('${output.path}/flax_standalone.app');
    if (production.existsSync()) production.deleteSync(recursive: true);
    await execute('ditto', ['$flutter/$product', production.path], flutter);
    // Only the verification entry hosts a local HTTP server inside the sandbox.
    final entitlements = File('$flutter/macos/Runner/Release.entitlements');
    entitlements.writeAsStringSync(
      entitlements.readAsStringSync().replaceFirst(
        '</dict>',
        '<key>com.apple.security.network.server</key><true/></dict>',
      ),
    );
    await execute('flutter', [
      'build',
      'macos',
      '--release',
      '--no-pub',
      '--target',
      'integration_test/app_test.dart',
      '--dart-define=FLAX_VERIFY_RELEASE=true',
    ], flutter);
    final relocatedApp = '${relocated.path}/flax_standalone.app';
    // Framework bundles contain symlinks and executable modes; copyTree is for sources.
    await execute('ditto', ['$flutter/$product', relocatedApp], flutter);
    temporary.deleteSync(recursive: true);
    final binary = '$relocatedApp/Contents/MacOS/flax_standalone';
    final jitVerification = engineJitVerification(root, engine);
    if (jitVerification != null) {
      await _verifyRelease(
        binary,
        relocated.path,
        environment,
        jitVerification: jitVerification,
      );
    }
    // Measure the normal runtime in a fresh process, without the JIT proof workload.
    final result = await _verifyRelease(binary, relocated.path, environment);
    File('${output.path}/verification.json').writeAsStringSync(
      jsonEncode({
        ...result,
        if (jitVerification != null) ...{
          'jitObserved': true,
          'jitProofSeparateProcess': true,
        },
        'externalPackages': true,
        'externalIntegration': true,
        'sourceRemovedBeforeLaunch': true,
        'productionApp': production.path,
        'releaseBuildMilliseconds': releaseBuild.elapsedMilliseconds,
        'verificationMilliseconds': elapsed.elapsedMilliseconds,
        'productionBytes': production
            .listSync(recursive: true, followLinks: false)
            .whereType<File>()
            .fold<int>(0, (size, file) => size + file.lengthSync()),
      }),
    );
    stdout.writeln(
      'Standalone source packages, macOS integration, production release and relocated release UI verified.',
    );
  } finally {
    if (temporary.existsSync()) temporary.deleteSync(recursive: true);
    if (relocated.existsSync()) relocated.deleteSync(recursive: true);
  }
}

Future<Map<String, dynamic>> _verifyRelease(
  String binary,
  String directory,
  Map<String, String> environment, {
  ({String environment, String marker})? jitVerification,
}) async {
  final process = await Process.start(
    binary,
    [],
    workingDirectory: directory,
    environment: {
      ...environment,
      if (jitVerification != null) jitVerification.environment: '1',
    },
    includeParentEnvironment: false,
  );
  var jitObserved = false;
  var activated = false;
  final completed = Completer<Map<String, dynamic>>();
  final output = process.stdout
      .transform(utf8.decoder)
      .transform(const LineSplitter())
      .listen((line) {
        stdout.writeln(line);
        if (!activated && line.contains('standalone application runs')) {
          activated = true;
          // The first test log means Cocoa has registered this process's window.
          unawaited(
            Process.run('open', [
              '-a',
              p.dirname(p.dirname(p.dirname(binary))),
            ]).then((opened) {
              if (opened.exitCode != 0 && !completed.isCompleted) {
                completed.completeError(
                  StateError('Cannot activate release test: ${opened.stderr}'),
                );
              }
            }),
          );
        }
        if (jitVerification != null && line.contains(jitVerification.marker)) {
          jitObserved = true;
        }
        const marker = 'FLAX_STANDALONE_RESULT:';
        final start = line.indexOf(marker);
        if (start >= 0 && !completed.isCompleted) {
          try {
            final result = jsonDecode(
              line.substring(start + marker.length),
            ) as Map<String, dynamic>;
            if (result['completed'] != true ||
                result['scenario'] != 'standalone-application') {
              throw StateError(
                'Release application assertions failed: $result',
              );
            }
            if (jitVerification != null && !jitObserved) {
              throw StateError('Release did not report generated machine code');
            }
            completed.complete({
              ...result,
              if (jitVerification != null) 'jitObserved': true,
            });
          } catch (error, stack) {
            completed.completeError(error, stack);
          }
        }
      });
  final errors = process.stderr.transform(utf8.decoder).listen(stderr.write);
  unawaited(
    process.exitCode.then((code) {
      if (!completed.isCompleted) {
        completed.completeError(
          StateError(
            'Release app exited without a successful UI receipt: $code',
          ),
        );
      }
    }),
  );
  try {
    return await completed.future.timeout(const Duration(minutes: 3));
  } finally {
    // Only stop the process launched by this verification, after its test receipt.
    process.kill();
    await process.exitCode.timeout(
      const Duration(seconds: 5),
      onTimeout: () {
        process.kill(ProcessSignal.sigkill);
        return -1;
      },
    );
    await output.cancel();
    await errors.cancel();
  }
}
