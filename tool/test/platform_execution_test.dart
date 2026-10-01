import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:flax/native_target.dart';
import 'package:test/test.dart';

import '../check_packages.dart';
import '../src/package_discovery.dart';
import '../src/platform_application.dart';
import '../src/process.dart';

void main() {
  test(
    'external consumers reuse a pinned SDK archive from the shared cache',
    () async {
      final work = Directory.systemTemp.createTempSync('flax sdk inputs ');
      addTearDown(() => work.deleteSync(recursive: true));
      final cache = Directory('${work.path}/cache')..createSync();
      final digest = 'a' * 64;
      final archive = File('${cache.path}/$digest.tar.gz')
        ..writeAsStringSync('input');
      final target = FlaxNativeTarget.host().name;
      File('${work.path}/packages/flax_engine_v8/native/sdk.lock.json')
        ..parent.createSync(recursive: true)
        ..writeAsStringSync(
          jsonEncode({
            'targets': {
              target: {'sha256': digest},
            },
          }),
        );
      final probe = File('${work.path}/probe.dart')
        ..writeAsStringSync('''
import 'dart:convert';
import 'dart:io';
import '${File('tool/src/example_engine.dart').absolute.uri}';
void main(List<String> args) {
  final manifest = <String, dynamic>{};
  addCandidateSdk(manifest, 'v8', root: args.single);
  stdout.write(jsonEncode(manifest));
}
''');
      final environment = Map<String, String>.of(Platform.environment)
        ..remove('FLAX_ENGINE_SDK_ARCHIVE')
        ..remove('FLAX_ENGINE_SDK_SHA256')
        ..['FLAX_ENGINE_SDK_CACHE'] = cache.path
        ..['FLAX_CHECK_TARGET'] = target;
      final result = await Process.run(
        Platform.resolvedExecutable,
        [
          '--packages=${Directory.current.path}/.dart_tool/package_config.json',
          probe.path,
          work.path,
        ],
        environment: environment,
        includeParentEnvironment: false,
      );
      expect(result.exitCode, 0, reason: '${result.stdout}\n${result.stderr}');
      final manifest = jsonDecode(result.stdout as String) as Map;
      final defines = manifest['hooks']['user_defines'] as Map;
      for (final owner in ['flax_engine_v8', 'flax_native_assets']) {
        expect(defines[owner], {
          'sdkArchive': archive.absolute.uri.toFilePath(),
          'sdkSha256': digest,
        });
      }
    },
  );
  test(
    'offline consumers reuse the installed workspace store across mounts',
    () async {
      final work = Directory.systemTemp.createTempSync('flax pnpm store ');
      addTearDown(() => work.deleteSync(recursive: true));
      final workspace = Directory('${work.path}/workspace')..createSync();
      final consumer = Directory('${work.path}/consumer')..createSync();
      final store =
          readYamlFile(File('node_modules/.modules.yaml'))['storeDir']
              as String;
      const manifest =
          '{"private":true,"dependencies":{"@preact/signals-core":"1.14.4"}}';
      File('${workspace.path}/package.json').writeAsStringSync(manifest);
      File('${consumer.path}/package.json').writeAsStringSync(manifest);
      File('${consumer.path}/.npmrc')
          .writeAsStringSync('store-dir=${work.path}/empty-store\n');
      await run('pnpm', [
        'install',
        '--offline',
        '--ignore-scripts',
        '--store-dir',
        store,
      ], directory: workspace.path);
      await installOfflineNpmConsumer(workspace.path, consumer.path);
      final result = await Process.run('node', [
        '-e',
        "require('@preact/signals-core').signal(1)",
      ], workingDirectory: consumer.path);
      expect(result.exitCode, 0, reason: '${result.stdout}\n${result.stderr}');
      expect(Directory('${work.path}/empty-store').existsSync(), isFalse);
    },
  );

  test(
    'desktop execution requires both a fresh marker and successful exit',
    () async {
      final work = Directory.systemTemp.createTempSync('flax desktop launch ');
      addTearDown(() => work.deleteSync(recursive: true));
      final binary = File('${work.path}/flax_standalone');
      Future<void> script(String body) async {
        binary.writeAsStringSync('#!/bin/sh\n$body\n');
        final result = await Process.run('chmod', ['+x', binary.path]);
        expect(result.exitCode, 0);
      }

      final target = FlaxNativeTarget('linux-x64');
      await script('echo fresh-marker\nexit 0');
      await runDesktopApplication(target, work.path, 'fresh-marker');
      await script('echo old-marker\nexit 0');
      await expectLater(
        runDesktopApplication(target, work.path, 'fresh-marker'),
        throwsStateError,
      );
      await script('echo fresh-marker\nexit 7');
      await expectLater(
        runDesktopApplication(target, work.path, 'fresh-marker'),
        throwsStateError,
      );
      await script('exec sleep 60');
      await expectLater(
        runDesktopApplication(
          target,
          work.path,
          'fresh-marker',
          timeout: const Duration(milliseconds: 100),
        ),
        throwsA(isA<TimeoutException>()),
      );
    },
    skip: Platform.isWindows
        ? 'Shell fixture; Windows runs the real application'
        : false,
  );
}
