import 'package:analyzer/dart/analysis/results.dart';
import 'package:build/build.dart';
import 'package:dart_style/dart_style.dart';
import 'package:glob/glob.dart';
import 'package:path/path.dart' as p;

import 'config.dart';
import 'package_pipeline.dart';

/// One build step owns all binding scopes and their shared manifest.
final class FlaxCodegenBindingsBuilder implements Builder {
  FlaxCodegenBindingsBuilder(BuilderOptions options) {
    final unknown = options.config.keys.where((key) => key != 'outputs');
    if (unknown.isNotEmpty) {
      throw ArgumentError(
        'Unknown Flax builder options: ${unknown.join(', ')}',
      );
    }
    final outputs = options.config['outputs'] ?? flaxCodegenDefaultOutputs;
    if (outputs is! List || outputs.any((path) => path is! String)) {
      throw ArgumentError(
        'Flax builder outputs must be a list of package-relative paths.',
      );
    }
    final paths = <String>{'bindings/manifest.json', flaxCodegenJsBuildPlan};
    for (final path in outputs.cast<String>()) {
      if (p.posix.isAbsolute(path) ||
          path.contains('\\') ||
          p.posix.normalize(path) != path ||
          path.startsWith('../') ||
          !(path.endsWith('.dart') || path.endsWith('.ts')) ||
          path.startsWith('.')) {
        throw ArgumentError('Invalid Flax builder output: $path');
      }
      if (!paths.add(path)) {
        throw ArgumentError('Duplicate Flax builder output: $path');
      }
    }
    buildExtensions = {'^flax_package.yaml': paths.toList()..sort()};
  }

  @override
  late final Map<String, List<String>> buildExtensions;

  @override
  Future<void> build(BuildStep step) async {
    final package = step.inputId.package;
    final packageConfig = await step.packageConfig;
    final roots = {
      for (final entry in packageConfig.packages)
        entry.name: p.absolute('.dart_tool', 'flax-inputs', entry.name),
    };
    final root = roots[package]!;
    final files = <String, String>{};

    Future<void> read(AssetId id) async {
      files[p.join(roots[id.package]!, id.path)] = await step.readAsString(id);
    }

    Future<void> readOptional(AssetId id) async {
      try {
        if (await step.canRead(id)) await read(id);
      } on InvalidInputException {
        // Packages opt in to exposing their binding metadata as public assets.
      }
    }

    await read(step.inputId);
    await read(AssetId(package, 'pubspec.yaml'));
    for (final path in ['js/package.json', 'js-types/package.json']) {
      await readOptional(AssetId(package, path));
    }
    final configs = <AssetId>[];
    await for (final id in step.findAssets(
      Glob('bindings/flax_*.{yaml,yml}'),
    )) {
      await read(id);
      if (flaxCodegenIsBindingConfigPath(id.path)) configs.add(id);
    }
    configs.sort();
    if (configs.isEmpty ||
        configs.any(
          (id) =>
              FlaxCodegenBindingConfig.parseStrict(
                files[p.join(root, id.path)]!,
                source: id.path,
              ).sources !=
              null,
        )) {
      final outputs = step.allowedOutputs.toSet();
      await for (final id in step.findAssets(Glob('lib/**.dart'))) {
        if (!outputs.contains(id)) await read(id);
      }
    }

    for (final dependency in roots.keys.where((name) => name != package)) {
      await readOptional(AssetId(dependency, 'flax_package.yaml'));
      await readOptional(AssetId(dependency, 'bindings/manifest.json'));
    }

    final resolved = <String, Future<SomeLibraryElementResult>>{};
    Future<SomeLibraryElementResult> resolve(String uri) =>
        resolved.putIfAbsent(uri, () async {
          if (uri.startsWith('dart:')) {
            await for (final library in step.resolver.libraries) {
              if (library.uri.toString() == uri) {
                return library.session.getLibraryByUri(uri);
              }
            }
            throw StateError('Cannot resolve $uri');
          }
          final id = AssetId.resolve(Uri.parse(uri));
          final library = await step.resolver.libraryFor(id);
          return library.session.getLibraryByUri(uri);
        });

    final inputs = FlaxCodegenBuildInputs(
      packageRoot: root,
      files: files,
      packageRoots: roots,
      libraryResolver: resolve,
      publicLibraries: (name) async => [
        await for (final library in step.resolver.libraries)
          if (library.uri.scheme == 'package' &&
              library.uri.pathSegments.first == name &&
              library.uri.pathSegments.skip(1).firstOrNull != 'src' &&
              !step.allowedOutputs.contains(AssetId.resolve(library.uri)) &&
              await step.canRead(AssetId.resolve(library.uri)))
            library.uri.toString(),
      ]..sort(),
    );
    final validation = await FlaxCodegenPackagePipeline.validateConfig(
      configs.isEmpty ? null : p.join(root, configs.first.path),
      buildInputs: inputs,
    );
    final allowed = step.allowedOutputs.map((id) => id.path).toSet();
    final planned = validation.outputInventory.toSet();
    final missing = planned.difference(allowed).toList()..sort();
    final stale = allowed.difference(planned)..remove(flaxCodegenJsBuildPlan);
    if (missing.isNotEmpty || stale.isNotEmpty) {
      throw StateError(
        'Update flax_codegen:bindings options.outputs in build.yaml. '
        'Missing: $missing; unused: ${stale.toList()..sort()}. Package manifests are included automatically.',
      );
    }
    final seen = <String>{};
    for (final dependency in validation.directDependencies.values) {
      for (final manifest in dependency.packageManifests) {
        if (manifest.package == 'flax' || !seen.add(manifest.package)) continue;
        for (final module in manifest.modules) {
          if (module.dartLibrary case final uri?) {
            await read(AssetId.resolve(Uri.parse(uri)));
          }
        }
      }
    }
    final formatter = DartFormatter(
      languageVersion: DartFormatter.latestLanguageVersion,
      pageWidth: 80,
    );
    final outputs = await FlaxCodegenPackagePipeline.emitBuild(
      validation,
      inputs,
      formatDart: formatter.format,
    );
    for (final skip in validation.skips) {
      log.info('SKIP ${skip.target}: ${skip.reason}');
    }
    for (final notice in validation.notices) {
      log.info('NOTICE ${notice.target}: ${notice.message}');
    }
    for (final entry in outputs.entries) {
      await step.writeAsBytes(AssetId(package, entry.key), entry.value);
    }
  }
}
