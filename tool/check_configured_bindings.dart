import 'dart:convert';
import 'dart:io';

import 'src/consumer_workspace.dart';
import 'src/package_verification.dart';
import 'src/process.dart';

Future<void> main() => command(() async {
  final root = Directory.fromUri(Platform.script.resolve('../')).path;
  final packageManager = _read('$root/package.json')['packageManager'];
  final workspace = ConsumerWorkspace('configured-bindings');
  final stage = workspace.directory.resolveSymbolicLinksSync();
  // Local archive locators must stay immutable even when compiler caches are reused.
  final artifacts = (Directory(
    '$stage/artifacts',
  )..createSync(recursive: true)).createTempSync('run-').path;
  final receipt = File('$root/build/configured-bindings.json');
  if (receipt.existsSync()) receipt.deleteSync();
  try {
    copyDartPackages(Directory(root), Directory('$stage/packages'), [
      'flax',
      'flax_codegen',
      'flax_cli',
      'flax_annotations',
      'flax_material_ui',
    ]);
    copyTree(
      Directory('$root/packages/flax_codegen/bin'),
      Directory('$stage/packages/flax_codegen/bin'),
    );
    copyTree(
      Directory('$root/packages/flax_cli/bin'),
      Directory('$stage/packages/flax_cli/bin'),
    );
    const source = 'examples/configured_bindings/';
    final inputs = await Process.run('git', [
      'ls-files',
      '--cached',
      '--others',
      '--exclude-standard',
      '-z',
      source,
    ], workingDirectory: root);
    if (inputs.exitCode != 0) throw StateError('Cannot list example sources');
    for (final path in (inputs.stdout as String).split('\u0000')) {
      if (path.isEmpty) continue;
      if (!File('$root/$path').existsSync()) continue;
      final relative = path.substring(source.length);
      if (![
            'provider',
            'vendor',
            'host',
            'miniapps',
            'default_app',
          ].contains(relative.split('/').first) ||
          relative.startsWith('host/macos/')) {
        continue;
      }
      final destination = File('$stage/$relative');
      destination.parent.createSync(recursive: true);
      File('$root/$path').copySync(destination.path);
    }
    Directory(artifacts).createSync(recursive: true);
    _json('$stage/vendor/pubspec.yaml', {
      'name': 'configured_delivery',
      'environment': {'sdk': '^3.13.2'},
    });
    for (final name in ['provider', 'host', 'default_app']) {
      _json('$stage/$name/pubspec.yaml', {
        'name': switch (name) {
          'provider' => 'configured_prices',
          'host' => 'configured_host',
          _ => 'configured_default_app',
        },
        'version': '0.0.0',
        'publish_to': 'none',
        'environment': {'sdk': '^3.13.2', 'flutter': '>=3.47.9'},
        'dependencies': {
          'flutter': {'sdk': 'flutter'},
          'flax': {'path': '../packages/flax'},
          if (name == 'default_app')
            'flax_annotations': {'path': '../packages/flax_annotations'},
          if (name == 'host') ...{
            'flax_annotations': {'path': '../packages/flax_annotations'},
            'configured_prices': {'path': '../provider'},
            'configured_delivery': {'path': '../vendor'},
            'flax_material_ui': {'path': '../packages/flax_material_ui'},
            'material_ui': '1.9.0',
          },
        },
        'dev_dependencies': {
          'flax_codegen': {'path': '../packages/flax_codegen'},
          if (name == 'default_app')
            'flax_cli': {'path': '../packages/flax_cli'},
          if (name != 'provider') 'build_runner': '2.16.1',
          'flutter_test': {'sdk': 'flutter'},
        },
        if (name == 'host' || name == 'default_app')
          'flutter': {
            'assets': [
              'assets/flax_modules/',
              if (name == 'default_app') 'assets/flax/app/',
            ],
          },
      });
      await run('flutter', ['pub', 'get'], directory: '$stage/$name');
    }

    final defaults = '$stage/default_app';
    // Annotation generation needs neither project setup nor an output list.
    await run('dart', ['run', 'flax_codegen', 'generate'], directory: defaults);
    const defaultOutputs = [
      'lib/flax_bindings.dart',
      'lib/src/generated/app.g.dart',
      'lib/flax_bindings/app.dart',
      'js/src/generated/app.ts',
      'bindings/manifest.json',
      'bindings/js_modules.json',
    ];
    final defaultBytes = {
      for (final path in defaultOutputs)
        path: File('$defaults/$path').readAsStringSync(),
    };
    await run('dart', ['run', 'build_runner', 'build'], directory: defaults);
    for (final entry in defaultBytes.entries) {
      if (File('$defaults/${entry.key}').readAsStringSync() != entry.value) {
        throw StateError('CLI/Builder default output differs: ${entry.key}');
      }
    }
    await run('dart', ['run', 'flax_codegen', 'check'], directory: defaults);

    for (final path in ['flax_package.yaml', 'build.yaml']) {
      if (File('$defaults/$path').existsSync()) {
        throw StateError('Annotation generation unexpectedly created $path');
      }
    }
    await _checkScopeWatch(defaults);
    await run('dart', ['run', 'flax_codegen', 'check'], directory: defaults);
    // Setup is independent and preserves the working project.
    final page = File('$defaults/js/src/main.ts').readAsStringSync();
    await run('dart', ['run', 'flax_cli:flax', 'init'], directory: defaults);
    if (File('$defaults/js/src/main.ts').readAsStringSync() != page) {
      throw StateError('Flax CLI init replaced the existing page');
    }

    final npm = <String, String>{};
    for (final path in [
      'flax/js-types',
      'flax/js',
      'flax_flutter/js',
      'flax_dart/js',
      'flax_material_ui/js-types',
      'flax_material_ui/js',
      'flax_cupertino_ui/js-types',
      'flax_cupertino_ui/js',
      'flax_build/js',
    ]) {
      final directory = '$root/packages/$path';
      final manifest = _read('$directory/package.json');
      final name = manifest['name'] as String;
      await run('pnpm', [
        '--silent',
        'pack',
        '--pack-destination',
        artifacts,
      ], directory: directory);
      npm[name] =
          'file:$artifacts/'
          '${name.replaceFirst('@', '').replaceAll('/', '-')}-0.0.0.tgz';
    }

    _json('$defaults/js/pnpm-workspace.yaml', {
      'packages': ['.'],
      'overrides': npm,
    });
    await run('pnpm', [
      'install',
      '--ignore-scripts',
    ], directory: '$defaults/js');
    await run('pnpm', ['run', 'build'], directory: '$defaults/js');
    await run('dart', ['run', 'flax_codegen', 'check'], directory: defaults);
    await run('flutter', ['test', '--no-pub'], directory: defaults);

    for (final owner in ['provider', 'host']) {
      final directory = '$stage/$owner';
      _json(
        owner == 'host'
            ? '$directory/pnpm-workspace.yaml'
            : '$directory/js/pnpm-workspace.yaml',
        {
          'packages': owner == 'host'
              ? [
                  'js',
                  'js/sdk',
                  'js/internal',
                  'modules/legacy_sdk',
                  'modules/legacy_internal',
                ]
              : ['.'],
          'overrides': npm,
          if (owner == 'host') 'allowBuilds': {'esbuild': true},
        },
      );
      if (owner == 'host') {
        // Exercise SDK conventions from scratch; the maintained example also covers preservation.
        for (final name in [
          'package.json',
          'tsconfig.json',
          'tsconfig.flax.json',
        ]) {
          final file = File('$directory/js/sdk/$name');
          if (file.existsSync()) file.deleteSync();
        }
        _json('$directory/package.json', {
          'name': 'configured-host-workspace',
          'private': true,
          'packageManager': packageManager,
        });
      }
      await run('dart', [
        'run',
        if (owner == 'host') ...[
          'build_runner',
          'build',
        ] else ...[
          'flax_codegen',
          'generate',
          '--config',
          'bindings/flax_bindings.yaml',
        ],
      ], directory: directory);
      await run('dart', [
        'run',
        'flax_codegen',
        'check',
        '--config',
        'bindings/flax_bindings.yaml',
      ], directory: directory);
      final envelope = _read('$directory/bindings/manifest.json');
      final modules = (envelope['modules'] as List)
          .cast<Map<String, dynamic>>();
      final classes = [
        for (final module in modules)
          ...(module['model']['classes'] as List).cast<Map<String, dynamic>>(),
      ];
      if (owner == 'host' &&
          (classes.any((c) => c['name'] == 'Money') ||
              !classes.any((c) => c['name'] == 'DeliveryEstimate') ||
              !modules.any(
                (m) => m['model']['jsPackage'] == '@flax/app/admin',
              ))) {
        throw StateError(
          'Host must reuse Money, own DeliveryEstimate and use the default internal name',
        );
      }
      await run('pnpm', [
        'install',
        '--ignore-scripts',
      ], directory: '$directory/js');
      await run('pnpm', ['run', 'build'], directory: '$directory/js');
      if (owner == 'host') {
        // Explicit runtime packages are retained only for the legacy delivery check.
        for (final group in ['sdk', 'internal']) {
          await run('pnpm', [
            'run',
            'build',
          ], directory: '$directory/modules/legacy_$group');
        }
      }
      final runtimePath = owner == 'provider'
          ? '$directory/js'
          : '$directory/modules/legacy_sdk';
      final runtimeMetadata = _read('$runtimePath/package.json');
      if (runtimeMetadata['private'] != true) {
        throw StateError('Binding runtime must stay local to the host');
      }
      npm[runtimeMetadata['name'] as String] = 'file:$runtimePath';
      final folders = owner == 'provider' ? ['js-types'] : ['js/sdk'];
      for (final folder in folders) {
        final packageDirectory = '$directory/$folder';
        final metadata = _read('$packageDirectory/package.json');
        if (metadata['private'] == true) {
          throw StateError('Public SDK must use a publishable npm manifest');
        }
        if (owner == 'host') {
          // A normal prepack must rebuild declarations even with build-info present.
          Directory('$packageDirectory/types').deleteSync(recursive: true);
        }
        await run('pnpm', [
          '--silent',
          'pack',
          '--pack-destination',
          artifacts,
        ], directory: packageDirectory);
        final name = metadata['name'] as String;
        final archive =
            '$artifacts/${name.substring(1).replaceAll('/', '-')}-0.0.0.tgz';
        npm[name] = 'file:$archive';
        final listing = await Process.run('tar', ['-tzf', archive]);
        if (listing.exitCode != 0) {
          throw StateError('Cannot inspect $archive: ${listing.stderr}');
        }
        final files = (listing.stdout as String)
            .split('\n')
            .where((name) => name.isNotEmpty)
            .toSet();
        if (owner == 'host' &&
            !files.containsAll({
              'package/types/bindings.d.ts',
              'package/types/delivery.d.ts',
            })) {
          throw StateError(
            'SDK prepack did not rebuild public declarations: ${listing.stdout}',
          );
        }
        if (files.any(
          (name) =>
              name.contains('internal') ||
              name.contains('admin') ||
              name.contains('/src/') ||
              name.contains('build.mjs') ||
              name.contains('tsconfig') ||
              name.endsWith('.js') ||
              name.endsWith('.mjs') ||
              name.endsWith('.cjs'),
        )) {
          throw StateError(
            'Unexpected public SDK archive contents: ${listing.stdout}',
          );
        }
      }
      if (owner == 'host') {
        for (final path in [
          '$directory/js/internal',
          '$directory/modules/legacy_internal',
        ]) {
          final metadata = _read('$path/package.json');
          if (metadata['private'] != true) {
            throw StateError('Internal binding package must stay private');
          }
          npm[metadata['name'] as String] = 'file:$path';
        }
        final sdk = _read('$directory/modules/legacy_sdk/flax_modules.json');
        if ((sdk['modules'] as List).any(
          (m) => m['specifier'] == '@flax/app/admin',
        )) {
          throw StateError(
            'Public SDK delivery metadata leaked internal bindings',
          );
        }
        final buildPackage = _read(
          '$directory/js/node_modules/@flax/build/package.json',
        );
        if ((buildPackage['bin'] as Map).containsKey('flax-sdk') ||
            (buildPackage['exports'] as Map).containsKey('./sdk')) {
          throw StateError(
            'Removed SDK command/API remains in the packed build package',
          );
        }
      }
      await run('flutter', [
        'analyze',
        '--no-pub',
        'lib',
      ], directory: directory);
    }

    _json('$stage/host/modules/package.json', {
      'name': '@example/host-modules',
      'version': '0.0.0',
      'private': true,
      'packageManager': packageManager,
      'type': 'module',
      'dependencies': {
        for (final name in [
          '@flax/core',
          '@flax/core-runtime',
          '@flax/material-ui',
          '@flax/material-ui-runtime',
          '@example/prices',
          '@example/prices-runtime',
          '@example/shop',
          '@example/shop-runtime',
          '@flax/app',
          '@flax/app-runtime',
        ])
          name: '0.0.0',
      },
      'devDependencies': {'@flax/build': '0.0.0'},
    });
    _json('$stage/host/modules/pnpm-workspace.yaml', {
      'packages': ['.'],
      'overrides': npm,
    });
    await run('pnpm', [
      'install',
      '--ignore-scripts',
    ], directory: '$stage/host/modules');
    await run('pnpm', [
      'exec',
      'flax-modules',
      'flax.modules.json',
    ], directory: '$stage/host/modules');
    // The old explicit module configuration remains valid; normal builds use the plan.
    await run('pnpm', [
      'exec',
      'flax-modules',
      '../bindings/js_modules.json',
    ], directory: '$stage/host/js');

    _json('$stage/package.json', {
      'name': 'configured-consumer-build',
      'private': true,
      'devDependencies': {'@flax/build': '0.0.0', 'esbuild': '0.28.2'},
    });
    _json('$stage/pnpm-workspace.yaml', {
      'packages': ['.'],
      'overrides': npm,
    });
    await run('pnpm', ['install', '--ignore-scripts'], directory: stage);

    final hiddenModules = Directory('$stage/host/assets/flax_modules')
        .renameSync('$stage/host/assets/hidden_modules');
    for (final name in ['first', 'second', 'manager', 'forbidden']) {
      final app = '$stage/miniapps/$name';

      _json('$app/package.json', {
        'name': '@example/$name',
        'version': '0.0.0',
        'private': true,
        'packageManager': packageManager,
        'type': 'module',
        'dependencies': {
          '@flax/core': '0.0.0',
          '@flax/flutter': '0.0.0',
          '@flax/dart': '0.0.0',
          '@flax/material-ui': '0.0.0',
          '@example/prices': '0.0.0',
          '@example/shop': '0.0.0',
          if (name == 'manager' || name == 'forbidden') '@flax/app': '0.0.0',
        },
        'devDependencies': {
          '@flax/build': '0.0.0',
          'esbuild': '0.28.2',
          'typescript': '7.0.2',
        },
      });
      _json('$app/pnpm-workspace.yaml', {
        'packages': ['.'],
        'overrides': npm,
      });
      await run('pnpm', ['install', '--ignore-scripts'], directory: app);
      await run('pnpm', ['exec', 'tsc', '-p', '.'], directory: app);
      if (name == 'first') {
        final probe = File('$app/src/internal-probe.ts')
          ..writeAsStringSync("""
import {resetCart} from '@flax/app/admin';
import {resetCart as leaked} from '@example/shop/admin';
resetCart(); leaked();
""");
        final denied = await Process.run('pnpm', [
          'exec',
          'tsc',
          '-p',
          '.',
        ], workingDirectory: app);
        probe.deleteSync();
        final output = '${denied.stdout}${denied.stderr}';
        if (denied.exitCode == 0 ||
            !output.contains('@flax/app/admin') ||
            !output.contains('@example/shop/admin')) {
          throw StateError(
            'External SDK consumer unexpectedly resolved internal APIs: $output',
          );
        }
      }
      await run('node', ['../build.mjs', name], directory: app);
    }
    hiddenModules.renameSync('$stage/host/assets/flax_modules');
    await run('flutter', [
      'test',
      '--no-pub',
      '--reporter=expanded',
      'test/application_test.dart',
    ], directory: '$stage/host');

    final inventoryPath = '$stage/host/assets/flax_modules/modules.json';
    final originalInventory = _read(inventoryPath);
    final originalModules = (originalInventory['modules'] as List)
        .cast<Map<String, dynamic>>();
    // Preserve the import shape emitted before application version/hash pinning ended.
    final legacyEntry = _read(
      '$stage/host/applications/first/flax.json',
    )['entry'];
    final legacyFile = File('$stage/host/applications/first/$legacyEntry');
    var legacySource = legacyFile.readAsStringSync();
    final beforeLegacy = legacySource;
    for (final module in originalModules) {
      final specifier = jsonEncode(module['specifier']);
      legacySource = legacySource.replaceAll(
        '__flaxModules.require($specifier)',
        '__flaxModules.require($specifier, '
            '${jsonEncode(module['version'])}, ${jsonEncode(module['artifact'])})',
      );
    }
    if (legacySource == beforeLegacy) {
      throw StateError(
        'Legacy application must retain version/hash import arguments',
      );
    }
    legacyFile.writeAsStringSync(legacySource);
    final applications = {
      for (final name in ['first', 'second', 'manager', 'forbidden'])
        name: File(
          '$stage/host/applications/$name/'
          '${_read('$stage/host/applications/$name/flax.json')['entry']}',
        ).readAsStringSync(),
    };

    // Upgrade only host delivery; old packed declarations and application bytes remain.
    final upgradedRuntime = '$artifacts/shop-runtime-v2';
    final originalRuntime = '$stage/host/modules/legacy_sdk';
    copyTree(
      Directory('$originalRuntime/dist'),
      Directory('$upgradedRuntime/dist'),
    );
    final runtimeMetadata = _read('$originalRuntime/package.json')
      ..['version'] = '1.1.0';
    final runtimeDelivery = _read('$originalRuntime/flax_modules.json')
      ..['version'] = '1.1.0';
    _json('$upgradedRuntime/package.json', runtimeMetadata);
    _json('$upgradedRuntime/flax_modules.json', runtimeDelivery);
    File('$upgradedRuntime/dist/bindings.js').writeAsStringSync(
      '\nexport const sdkRevision = 2;\n',
      mode: FileMode.append,
    );
    npm['@example/shop-runtime'] = 'file:$upgradedRuntime';
    _json('$stage/host/modules/pnpm-workspace.yaml', {
      'packages': ['.'],
      'overrides': npm,
    });
    await run('pnpm', [
      'install',
      '--ignore-scripts',
    ], directory: '$stage/host/modules');
    await run('pnpm', [
      'exec',
      'flax-modules',
      'flax.modules.json',
    ], directory: '$stage/host/modules');
    final upgradedInventory = _read(inventoryPath);
    final upgradedModule = (upgradedInventory['modules'] as List)
        .cast<Map<String, dynamic>>()
        .singleWhere((module) => module['specifier'] == '@example/shop/api');
    final originalModule = originalModules.singleWhere(
      (module) => module['specifier'] == '@example/shop/api',
    );
    if (upgradedModule['version'] != '1.1.0' ||
        upgradedModule['artifact'] == originalModule['artifact'] ||
        _read(
              '$stage/miniapps/first/node_modules/@example/shop/package.json',
            )['version'] !=
            '0.0.0') {
      throw StateError(
        'Host upgrade must change both version and artifact hash',
      );
    }
    final planPath = '$stage/host/bindings/js_modules.json';
    final upgradedPlan = _read(planPath)..['version'] = '1.1.0';
    _json(planPath, upgradedPlan);
    final generatedSdkSource = (upgradedPlan['modules'] as List)
        .cast<Map<String, dynamic>>()
        .singleWhere(
          (module) => module['specifier'] == '@example/shop/api',
        )['source'];
    File('$stage/host/$generatedSdkSource').writeAsStringSync(
      '\nexport const sdkRevision = 2;\n',
      mode: FileMode.append,
    );
    await run('pnpm', ['exec', 'flax-modules'], directory: '$stage/host/js');
    final autoUpgrade = (_read(inventoryPath)['modules'] as List)
        .cast<Map<String, dynamic>>()
        .singleWhere((module) => module['specifier'] == '@example/shop/api');
    if (autoUpgrade['version'] != '1.1.0' ||
        autoUpgrade['artifact'] == originalModule['artifact']) {
      throw StateError(
        'Generated bindings must support compatible host upgrades',
      );
    }
    for (final entry in applications.entries) {
      final path = '$stage/host/applications/${entry.key}';
      if (File('$path/${_read('$path/flax.json')['entry']}')
              .readAsStringSync() !=
          entry.value) {
        throw StateError('Host upgrade must not rebuild old applications');
      }
    }
    await run('flutter', [
      'test',
      '--no-pub',
      '--reporter=expanded',
      'test/application_test.dart',
    ], directory: '$stage/host');

    final sdkOutput = Directory('$root/build/configured-sdk');
    if (sdkOutput.existsSync()) sdkOutput.deleteSync(recursive: true);
    for (final (target, runtime, types) in [
      ('shop', upgradedRuntime, '$stage/host/js/sdk'),
      ('prices', '$stage/provider/js', '$stage/provider/js-types'),
    ]) {
      for (final (folder, source) in [('runtime', runtime), ('types', types)]) {
        final sourceDirectory = Directory(source);
        final destination = Directory('${sdkOutput.path}/$target/$folder');
        destination.createSync(recursive: true);
        final metadata = File('${sourceDirectory.path}/package.json');
        metadata.copySync('${destination.path}/package.json');
        copyTree(
          Directory(
            '${sourceDirectory.path}/${folder == 'runtime' ? 'dist' : 'types'}',
          ),
          Directory(
            '${destination.path}/${folder == 'runtime' ? 'dist' : 'types'}',
          ),
        );
        if (folder == 'runtime') {
          File('${sourceDirectory.path}/flax_modules.json')
              .copySync('${destination.path}/flax_modules.json');
        }
        if (folder == 'types') {
          final archive = 'example-$target-0.0.0.tgz';
          File('$artifacts/$archive').copySync('${sdkOutput.path}/$archive');
        }
      }
    }
    File('$stage/host/assets/flax_modules/modules.json')
        .copySync('${sdkOutput.path}/modules.json');
    _json(receipt.path, {
      'configuredHost': true,
      'configFreeApp': true,
      'generatedJsBuildPlan': true,
      'flaxCliPreservesDefaultHost': true,
      'annotationBuilderWithoutSetup': true,
      'watchDiscoversScopeChanges': true,
      'typesSdkSetupFromConventions': true,
      'sdkPrepackRebuildsDeclarations': true,
      'miniappsBuiltWithoutHostInventory': true,
      'automaticMultiScopePreparation': true,
      'legacyModuleConfiguration': true,
      'defaultCliBuilderBytesIdentical': true,
      'generatedBindingPlugins': true,
      'buildRunnerHost': true,
      'providerReused': true,
      'unboundDependencyGenerated': true,
      'independentMiniapps': ['first', 'second', 'manager'],
      'bindingScopes': ['shop', 'delivery', 'admin', 'app'],
      'perViewModules': true,
      'publishableNpmSdk': true,
      'typesOnlyNpmSdk': true,
      'hostRuntimeLocal': true,
      'compatibleHostUpgrade': true,
      'legacyApplicationImports': true,
      'oldTypesVersion': '0.0.0',
      'hostRuntimeVersion': '1.1.0',
      'oldApplicationBytesUnchanged': true,
      'ordinaryNpmBuild': true,
      'internalBindingsPrivate': true,
      'internalBindingsExcludedFromSdk': true,
      'externalInternalImportRejected': true,
      'published': false,
      'businessRuntimeDependencies': false,
      'flaxView': 'directory',
      'engine': 'macos-arm64-v8',
    });
    stdout.writeln('Configured binding verification passed: ${receipt.path}');
  } finally {
    workspace.finish();
  }
});

Map<String, dynamic> _read(String path) =>
    (jsonDecode(File(path).readAsStringSync()) as Map).cast<String, dynamic>();

void _json(String path, Object value) {
  final file = File(path)..parent.createSync(recursive: true);
  file.writeAsStringSync(
    '${const JsonEncoder.withIndent('  ').convert(value)}\n',
  );
}

Future<void> _checkScopeWatch(String root) async {
  final api = File('$root/lib/cart.dart');
  final original = api.readAsStringSync();
  final output = File('$root/lib/flax_bindings.dart');
  final process = await Process.start('dart', [
    'run',
    'build_runner',
    'watch',
  ], workingDirectory: root);
  final log = StringBuffer();
  final out = process.stdout.transform(utf8.decoder).listen(log.write);
  final err = process.stderr.transform(utf8.decoder).listen(log.write);
  var exited = false;
  final exit = process.exitCode.then((code) {
    exited = true;
    return code;
  });
  Future<void> until(bool Function() done) async {
    final deadline = DateTime.now().add(const Duration(minutes: 2));
    while (!done()) {
      if (exited || DateTime.now().isAfter(deadline)) {
        throw StateError('Scope watch failed: $log');
      }
      await Future<void>.delayed(const Duration(milliseconds: 200));
    }
  }

  try {
    await until(() => log.toString().contains('Built with build_runner'));
    api.writeAsStringSync("""$original
@FlaxExport(scope: 'watch')
class Watched<T> { Watched(this.value); final T value; }
@FlaxExport()
Watched<int> watched() => Watched(3);
""");
    await until(
      () =>
          output.existsSync() &&
          output.readAsStringSync().contains('watchPlugin'),
    );
    await run('dart', ['analyze', 'lib/flax_bindings.dart'], directory: root);
    api.writeAsStringSync(original);
    await until(() => !output.readAsStringSync().contains('watchPlugin'));
  } finally {
    api.writeAsStringSync(original);
    process.kill(ProcessSignal.sigint);
    await exit.timeout(
      const Duration(seconds: 10),
      onTimeout: () {
        process.kill(ProcessSignal.sigkill);
        return -1;
      },
    );
    await out.cancel();
    await err.cancel();
  }
}
