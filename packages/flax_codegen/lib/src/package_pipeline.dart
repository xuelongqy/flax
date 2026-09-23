import 'dart:collection';
import 'dart:convert';
import 'dart:io';

import 'package:path/path.dart' as p;
import 'package:yaml/yaml.dart';

import 'config.dart';
import 'bindability.dart';
import 'diagnostic.dart';
import 'emitter.dart';
import 'identity.dart';
import 'manifest_v5.dart';
import 'manifest_v5_codec.dart';
import 'manifest_v5_projection.dart';
import 'model.dart';
import 'ownership.dart';
import 'package_metadata.dart';
import 'parser.dart';

/// Narrow injectable runner matching [Process.run]'s positional executable and
/// arguments. Named [Process.run] options are intentionally unsupported.
typedef FlaxCodegenProcessRunner = Future<ProcessResult> Function(
  String executable,
  List<String> arguments,
);

/// Invoked immediately before each package install mutation (write or orphan
/// delete). Used by tests to force mid-transaction failure after planning.
typedef FlaxCodegenInstallMutationProbe = void Function(String absolutePath);

const _autoOverridesFilename = 'overrides.yaml';

/// Immutable package validation view through M2.5a Phase D.
final class FlaxCodegenPackageValidation {
  FlaxCodegenPackageValidation._({
    required this.packageRoot,
    required this.dartPackage,
    required List<String> configPaths,
    required this.metadata,
    required Map<String, FlaxCodegenManifestV5Projection> directDependencies,
    required List<FlaxCodegenModuleModel> localModels,
    required this.resolvedPackage,
    required this.manifest,
    required this.projection,
    required List<String> outputInventory,
    List<FlaxCodegenSkip> skips = const [],
    List<FlaxCodegenNotice> notices = const [],
  }) : configPaths = List.unmodifiable(configPaths),
       directDependencies = Map.unmodifiable(directDependencies),
       _localModels = List.unmodifiable(localModels),
       outputInventory = List.unmodifiable(outputInventory),
       skips = List.unmodifiable(skips),
       notices = List.unmodifiable(notices);

  final String packageRoot;
  final String dartPackage;
  final List<String> configPaths;
  final FlaxCodegenPackageMetadataProjection metadata;

  /// Projections for packages required by explicit imports or by resolved
  /// signature dependencies from direct Dart dependencies.
  final Map<String, FlaxCodegenManifestV5Projection> directDependencies;

  final List<FlaxCodegenModuleModel> _localModels;

  /// Fresh frozen local-module snapshots with wireIds, in canonical config-path
  /// order. Mutating a returned module collection cannot affect later reads,
  /// the manifest, or projections.
  List<FlaxCodegenModuleModel> get localModels => List.unmodifiable([
    for (final module in _localModels) _snapshotModule(module),
  ]);
  final FlaxCodegenResolvedPackage resolvedPackage;
  final FlaxCodegenManifestV5 manifest;
  final FlaxCodegenManifestV5Projection projection;
  final List<String> outputInventory;
  final List<FlaxCodegenSkip> skips;
  final List<FlaxCodegenNotice> notices;
}

/// Internal package emission planner, Dart formatter, and package-atomic
/// generate/check pipeline.
///
/// Validates output paths, emits raw TypeScript bytes, and formats Dart through
/// a temp-staged `dart format --page-width=80` invocation.
/// [generateConfig] installs planned bytes and orphan deletes in one
/// transaction with full pre-install snapshot restore on failure.
final class FlaxCodegenPackagePipeline {
  FlaxCodegenPackagePipeline({
    required String packageRoot,
    FlaxCodegenProcessRunner? processRunner,
  }) : packageRoot = p.normalize(packageRoot),
       _processRunner = processRunner ?? Process.run;

  /// Package root used only to validate package-relative output paths.
  final String packageRoot;
  final FlaxCodegenProcessRunner _processRunner;

  /// Locates the owning package for [configPath], discovers sibling binding
  /// configs, reads package metadata plus every strict format-1 config, builds
  /// Manifest 5 projections for each direct config import, parses local modules,
  /// resolves ownership, and preflights the output inventory.
  ///
  /// [processRunner] is accepted so callers can prove validation never formats
  /// or spawns processes; this path never invokes it.
  static Future<FlaxCodegenPackageValidation> validateConfig(
    String configPath, {
    FlaxCodegenProcessRunner? processRunner,
  }) async {
    // Reserved for later generate/check stages; validation must not call it.
    processRunner;
    final located = _locateBindingConfig(configPath);
    final configPaths = _discoverBindingConfigs(located.bindingsDirectory);
    final diagnostics = <FlaxCodegenDiagnostic>[];
    String? dartPackage;
    try {
      dartPackage = _readPubspecPackageName(located.packageRoot);
    } on FlaxCodegenException catch (error) {
      diagnostics.addAll(error.diagnostics);
    }
    FlaxCodegenPackageMetadataProjection? metadata;
    try {
      metadata = FlaxCodegenPackageMetadataProjection.readStrict(
        p.join(located.packageRoot, 'flax_package.yaml'),
      );
    } on FlaxCodegenException catch (error) {
      diagnostics.addAll(error.diagnostics);
    }
    final configs = <FlaxCodegenBindingConfig>[];
    for (final path in configPaths) {
      try {
        configs.add(FlaxCodegenBindingConfig.readStrict(path));
      } on FlaxCodegenException catch (error) {
        diagnostics.addAll(error.diagnostics);
      }
    }
    if (diagnostics.isNotEmpty) {
      throw FlaxCodegenException(diagnostics);
    }
    final packageConfig = _readPackageConfigRoots(
      located.packageRoot,
      dartPackage: dartPackage!,
    );
    final dartDependencies = _readPubspecDirectDependencyNames(
      located.packageRoot,
    );
    final imports = <String>{
      for (final config in configs) ...config.imports,
    }.toList()..sort();
    final providerCandidates = _loadProviderCandidateProjections(
      imports: imports,
      dartDependencies: dartDependencies,
      packageRoots: packageConfig.roots,
    );

    final parsedModels = await _parseLocalModules(
      workspaceRoot: packageConfig.workspaceRoot,
      configs: configs,
      configPaths: configPaths,
      directDependencies: providerCandidates,
    );
    final directDependencies = _selectDirectDependencyProjections(
      dartPackage: dartPackage,
      imports: imports,
      parsedModels: parsedModels,
      candidates: providerCandidates,
    );
    final resolved = _resolveLocalOwnership(
      dartPackage: dartPackage,
      metadata: metadata!,
      packageRoot: located.packageRoot,
      configs: configs,
      configPaths: configPaths,
      parsedModels: parsedModels,
      directDependencies: directDependencies,
    );
    final frozenModels = _freezeLocalModels(
      configs: configs,
      parsedModels: parsedModels,
      resolved: resolved,
    );
    final modulesByName = <String, FlaxCodegenModuleModel>{
      for (final module in frozenModels) module.name: module,
    };
    final manifest = FlaxCodegenManifestV5.fromResolved(
      package: resolved,
      modules: modulesByName,
      importPackageNames: directDependencies.keys.toList()..sort(),
      source: p.join(located.packageRoot, 'bindings', 'manifest.json'),
    );
    final projection = FlaxCodegenManifestV5Projection(
      root: manifest,
      directDependencies: directDependencies,
      source: p.join(located.packageRoot, 'bindings', 'manifest.json'),
    );
    final outputInventory = _planValidationInventory(
      modules: frozenModels,
      packageRoot: located.packageRoot,
    );
    return FlaxCodegenPackageValidation._(
      packageRoot: located.packageRoot,
      dartPackage: dartPackage,
      configPaths: configPaths,
      metadata: metadata,
      directDependencies: directDependencies,
      localModels: frozenModels,
      resolvedPackage: resolved,
      manifest: manifest,
      projection: projection,
      outputInventory: outputInventory,
    );
  }

  /// Fail-open automatic binding for one public library in [packageRoot].
  ///
  /// Ordinary declarations are inferred from analyzer. Unsupported declarations
  /// are omitted and reported through [FlaxCodegenPackageValidation.skips].
  /// Special lifecycle roles require explicit overrides or full configuration.
  static Future<FlaxCodegenPackageValidation> validateLibrary(
    String library, {
    String? packageRoot,
    FlaxCodegenProcessRunner? processRunner,
  }) async {
    processRunner;
    final root = _locateAutoPackageRoot(packageRoot ?? Directory.current.path);
    final dartPackage = _readPubspecPackageName(root);
    final metadataPath = p.join(root, 'flax_package.yaml');
    final metadata = FlaxCodegenPackageMetadataProjection.readStrict(
      metadataPath,
    );
    final jsPackage = metadata.javascriptPackage;
    if (jsPackage == null) {
      throw FlaxCodegenException([
        _pathDiagnostic(
          metadataPath,
          'Auto binding requires javascript.package in flax_package.yaml.',
        ),
      ]);
    }
    final packageConfig = _readPackageConfigRoots(
      root,
      dartPackage: dartPackage,
    );
    final uri = Uri.tryParse(library);
    if (uri == null ||
        uri.scheme != 'package' ||
        uri.pathSegments.isEmpty ||
        !library.endsWith('.dart') ||
        uri.pathSegments.skip(1).any((segment) => segment == 'src')) {
      throw FlaxCodegenException([
        _resolutionDiagnostic(
          library,
          'Auto binding library must be a public package:...dart URI.',
        ),
      ]);
    }
    if (!packageConfig.roots.containsKey(uri.pathSegments.first)) {
      throw FlaxCodegenException([
        _resolutionDiagnostic(
          library,
          'Auto binding library package is not present in package_config.json.',
        ),
      ]);
    }

    final dartDependencies = _readPubspecDirectDependencyNames(root);
    final providerCandidates = _loadProviderCandidateProjections(
      imports: const [],
      dartDependencies: dartDependencies,
      packageRoots: packageConfig.roots,
    );
    final name = _autoModuleName(library, dartPackage);
    final overridesPath = p.join(root, 'bindings', _autoOverridesFilename);
    final overrides = File(overridesPath).existsSync()
        ? FlaxCodegenAutoOverrides.readStrict(overridesPath)
        : const FlaxCodegenAutoOverrides();
    final seed = FlaxCodegenBindingConfig(
      name,
      library,
      jsPackage,
      'lib/src/generated/${name}_bindings.g.dart',
      'js/src/generated/bindings.ts',
      const {},
    );

    final proposalParser = FlaxCodegenBindingParser(
      packageConfig.workspaceRoot,
    );
    late FlaxCodegenAutoBindingProposal proposal;
    try {
      final imported = <String, FlaxCodegenModuleModel>{};
      for (final projection in providerCandidates.values) {
        for (final entry in projection.modulesByModuleId.entries) {
          imported.putIfAbsent(entry.key, () => entry.value);
        }
      }
      final wireToRaw = _wireIdToRawFromProjections(providerCandidates);
      proposalParser.prepareModules([
        for (final module in imported.values)
          _rewriteModuleIds(module, wireToRaw),
      ]);
      proposal = await proposalParser.proposeLibrary(
        seed,
        overrides: overrides,
      );
    } on StateError catch (error) {
      throw FlaxCodegenException([
        _resolutionDiagnostic(library, error.message),
      ]);
    } finally {
      proposalParser.dispose();
    }

    final config = proposal.config;
    final syntheticSource = p.join(root, 'bindings', '.auto-$name.yaml');
    final configs = [config];
    final configPaths = [syntheticSource];
    final parsedModels = await _parseLocalModules(
      workspaceRoot: packageConfig.workspaceRoot,
      configs: configs,
      configPaths: configPaths,
      directDependencies: providerCandidates,
      automaticTypeCarriers: [proposal.typeCarriers],
    );
    final directDependencies = _selectDirectDependencyProjections(
      dartPackage: dartPackage,
      imports: const [],
      parsedModels: parsedModels,
      candidates: providerCandidates,
    );
    final resolved = _resolveLocalOwnership(
      dartPackage: dartPackage,
      metadata: metadata,
      packageRoot: root,
      configs: configs,
      configPaths: configPaths,
      parsedModels: parsedModels,
      directDependencies: directDependencies,
    );
    final frozenModels = _freezeLocalModels(
      configs: configs,
      parsedModels: parsedModels,
      resolved: resolved,
    );
    final modulesByName = <String, FlaxCodegenModuleModel>{
      for (final module in frozenModels) module.name: module,
    };
    final manifestPath = p.join(root, 'bindings', 'manifest.json');
    final manifest = FlaxCodegenManifestV5.fromResolved(
      package: resolved,
      modules: modulesByName,
      importPackageNames: directDependencies.keys.toList()..sort(),
      source: manifestPath,
    );
    final projection = FlaxCodegenManifestV5Projection(
      root: manifest,
      directDependencies: directDependencies,
      source: manifestPath,
    );
    return FlaxCodegenPackageValidation._(
      packageRoot: root,
      dartPackage: dartPackage,
      configPaths: configPaths,
      metadata: metadata,
      directDependencies: directDependencies,
      localModels: frozenModels,
      resolvedPackage: resolved,
      manifest: manifest,
      projection: projection,
      outputInventory: _planValidationInventory(
        modules: frozenModels,
        packageRoot: root,
      ),
      skips: proposal.skips,
      notices: proposal.notices,
    );
  }

  /// Read-only package check for one explicit direct bindings YAML.
  ///
  /// Validates once, plans expected Dart/TS/manifest bytes (formatting Dart only
  /// in a cleaned temporary directory outside the package), then compares the
  /// package filesystem without writing, renaming, deleting, or creating paths.
  static Future<void> checkConfig(
    String configPath, {
    FlaxCodegenProcessRunner? processRunner,
  }) async {
    final runner = processRunner ?? Process.run;
    final validation = await validateConfig(configPath, processRunner: runner);
    await _checkValidation(validation, runner);
  }

  /// Read-only reproducibility check for automatic [library] binding.
  static Future<FlaxCodegenPackageValidation> checkLibrary(
    String library, {
    String? packageRoot,
    FlaxCodegenProcessRunner? processRunner,
  }) async {
    final runner = processRunner ?? Process.run;
    final validation = await validateLibrary(
      library,
      packageRoot: packageRoot,
      processRunner: runner,
    );
    await _checkValidation(validation, runner);
    return validation;
  }

  static Future<void> _checkValidation(
    FlaxCodegenPackageValidation validation,
    FlaxCodegenProcessRunner runner,
  ) async {
    final packageRoot = p.normalize(validation.packageRoot);
    final expected = await _planExpectedPackageOutputs(
      packageRoot: packageRoot,
      modules: validation.localModels,
      directDependencies: validation.directDependencies,
      manifest: validation.manifest,
      processRunner: runner,
    );
    final diagnostics = <FlaxCodegenDiagnostic>[];
    final expectedAbsolute = <String>{
      for (final relative in expected.keys)
        p.normalize(p.join(packageRoot, relative)),
    };

    for (final entry in expected.entries) {
      final absolute = p.normalize(p.join(packageRoot, entry.key));
      if (_firstSymlinkPathComponent(absolute, includeFinalComponent: false) !=
          null) {
        diagnostics.add(
          _outputDiagnostic(absolute, 'Symbolic links are not allowed.'),
        );
        continue;
      }
      final type = FileSystemEntity.typeSync(absolute, followLinks: false);
      if (type == FileSystemEntityType.notFound) {
        diagnostics.add(
          _outputDiagnostic(absolute, 'Missing generated output.'),
        );
        continue;
      }
      if (type == FileSystemEntityType.link) {
        diagnostics.add(
          _outputDiagnostic(absolute, 'Generated output is a symbolic link.'),
        );
        continue;
      }
      if (type != FileSystemEntityType.file) {
        diagnostics.add(
          _outputDiagnostic(
            absolute,
            'Generated output is not a regular file.',
          ),
        );
        continue;
      }
      final actual = File(absolute).readAsBytesSync();
      if (!_sameBytes(actual, entry.value)) {
        diagnostics.add(
          _outputDiagnostic(absolute, 'Generated output is stale.'),
        );
      }
    }

    for (final orphan in _listOwnedGeneratedOrphans(
      packageRoot: packageRoot,
      expectedAbsolute: expectedAbsolute,
    )) {
      diagnostics.add(_outputDiagnostic(orphan, 'Orphan generated output.'));
    }

    if (diagnostics.isNotEmpty) {
      throw FlaxCodegenException(diagnostics);
    }
  }

  /// Package-atomic generate for one explicit direct bindings YAML.
  ///
  /// Validates once, plans expected Dart/TS/manifest bytes (formatting Dart only
  /// in a cleaned temporary directory outside the package), then installs new
  /// files, replacements, Manifest 5, and owned orphan deletes in one
  /// transaction. All validation and generation finish before any package
  /// mutation. Symlink ancestors fail closed without writing. On install
  /// failure, the pre-install snapshot of affected paths is restored.
  ///
  /// After a successful generate, [checkConfig] on the same config succeeds
  /// without writes.
  static Future<void> generateConfig(
    String configPath, {
    FlaxCodegenProcessRunner? processRunner,
    FlaxCodegenInstallMutationProbe? beforeInstallMutation,
  }) async {
    final runner = processRunner ?? Process.run;
    final validation = await validateConfig(configPath, processRunner: runner);
    await _generateValidation(
      validation,
      runner,
      beforeInstallMutation: beforeInstallMutation,
    );
  }

  /// Package-atomic generation for automatic [library] binding.
  static Future<FlaxCodegenPackageValidation> generateLibrary(
    String library, {
    String? packageRoot,
    FlaxCodegenProcessRunner? processRunner,
    FlaxCodegenInstallMutationProbe? beforeInstallMutation,
  }) async {
    final runner = processRunner ?? Process.run;
    final validation = await validateLibrary(
      library,
      packageRoot: packageRoot,
      processRunner: runner,
    );
    await _generateValidation(
      validation,
      runner,
      beforeInstallMutation: beforeInstallMutation,
    );
    return validation;
  }

  static Future<void> _generateValidation(
    FlaxCodegenPackageValidation validation,
    FlaxCodegenProcessRunner runner, {
    FlaxCodegenInstallMutationProbe? beforeInstallMutation,
  }) async {
    final packageRoot = p.normalize(validation.packageRoot);
    final expected = await _planExpectedPackageOutputs(
      packageRoot: packageRoot,
      modules: validation.localModels,
      directDependencies: validation.directDependencies,
      manifest: validation.manifest,
      processRunner: runner,
    );

    final diagnostics = <FlaxCodegenDiagnostic>[];
    final expectedAbsolute = <String, List<int>>{};
    for (final entry in expected.entries) {
      final absolute = p.normalize(p.join(packageRoot, entry.key));
      if (_firstSymlinkPathComponent(absolute, includeFinalComponent: false) !=
          null) {
        diagnostics.add(
          _outputDiagnostic(absolute, 'Symbolic links are not allowed.'),
        );
        continue;
      }
      final type = FileSystemEntity.typeSync(absolute, followLinks: false);
      if (type == FileSystemEntityType.link) {
        diagnostics.add(
          _outputDiagnostic(absolute, 'Generated output is a symbolic link.'),
        );
        continue;
      }
      if (type != FileSystemEntityType.notFound &&
          type != FileSystemEntityType.file) {
        diagnostics.add(
          _outputDiagnostic(
            absolute,
            'Generated output is not a regular file.',
          ),
        );
        continue;
      }
      expectedAbsolute[absolute] = entry.value;
    }

    final orphans = _listOwnedGeneratedOrphans(
      packageRoot: packageRoot,
      expectedAbsolute: expectedAbsolute.keys.toSet(),
    );

    if (diagnostics.isNotEmpty) {
      throw FlaxCodegenException(diagnostics);
    }

    final snapshot = _captureInstallSnapshot(
      writeTargets: expectedAbsolute.keys,
      deleteTargets: orphans,
    );

    try {
      final writeOrder = expectedAbsolute.keys.toList()..sort();
      for (final absolute in writeOrder) {
        beforeInstallMutation?.call(absolute);
        _installRegularFile(absolute, expectedAbsolute[absolute]!);
      }
      for (final absolute in orphans) {
        beforeInstallMutation?.call(absolute);
        final type = FileSystemEntity.typeSync(absolute, followLinks: false);
        if (type == FileSystemEntityType.file) {
          File(absolute).deleteSync();
        }
      }
    } catch (error, stackTrace) {
      _restoreInstallSnapshot(snapshot);
      if (error is FlaxCodegenException) {
        rethrow;
      }
      Error.throwWithStackTrace(
        FlaxCodegenException([
          _outputDiagnostic(packageRoot, 'Package install failed: $error'),
        ]),
        stackTrace,
      );
    }
  }

  /// Emits formatted Dart and raw TypeScript bytes keyed by normalized
  /// package-relative output paths.
  ///
  /// [additionalEmitterModules] are included in the [FlaxCodegenBindingEmitter]
  /// module list only (dependency context). They are never planned as package
  /// outputs.
  Future<Map<String, List<int>>> emit(
    List<FlaxCodegenModuleModel> modules, {
    List<FlaxCodegenModuleModel> additionalEmitterModules = const [],
  }) async {
    final planned = _planOutputs(modules, packageRoot);
    final emitter = FlaxCodegenBindingEmitter(
      _orderedModules([...modules, ...additionalEmitterModules]),
    );
    final typescript = {
      for (final module in modules)
        module: {
          for (final entry in emitter.typescriptOutputs(module).entries)
            _normalizePackageRelativeOutput(entry.key, packageRoot):
                entry.value,
        },
    };

    final outputs = <String, List<int>>{};
    final formatFailures = <String, String>{};
    Directory? temporary;
    try {
      temporary = Directory.systemTemp.createTempSync('flax-pipeline-');
      var dartIndex = 0;
      for (final entry in planned) {
        final module = entry.module;
        if (entry.isDart) {
          final staged = File(
            p.join(temporary.path, '${dartIndex++}_${module.name}.dart'),
          );
          staged.writeAsStringSync(emitter.dart(module));
          try {
            final result = await _processRunner(Platform.resolvedExecutable, [
              'format',
              '--page-width=80',
              staged.path,
            ]);
            if (result.exitCode != 0) {
              formatFailures[entry.path] =
                  "Formatting failed for '${entry.path}' "
                  '(exit code ${result.exitCode}).';
              continue;
            }
            outputs[entry.path] = List<int>.unmodifiable(
              utf8.encode(staged.readAsStringSync()),
            );
          } on ProcessException catch (error) {
            formatFailures[entry.path] =
                "Formatting failed to start for '${entry.path}': "
                '${error.message}.';
          }
        } else {
          outputs[entry.path] = List<int>.unmodifiable(
            utf8.encode(typescript[module]![entry.path]!),
          );
        }
      }
    } finally {
      if (temporary != null && temporary.existsSync()) {
        temporary.deleteSync(recursive: true);
      }
    }

    if (formatFailures.isNotEmpty) {
      final messages = [
        for (final path in formatFailures.keys.toList()..sort())
          formatFailures[path]!,
      ];
      throw StateError(messages.join('\n'));
    }

    return UnmodifiableMapView(outputs);
  }
}

final class _LocatedPackage {
  const _LocatedPackage({
    required this.packageRoot,
    required this.bindingsDirectory,
  });

  final String packageRoot;
  final String bindingsDirectory;
}

String _locateAutoPackageRoot(String start) {
  final absolute = p.normalize(p.absolute(start));
  _rejectSymlinkPathComponents(absolute);
  final owner = _nearestPubspecOwner(absolute);
  if (owner == null) {
    throw FlaxCodegenException([
      _pathDiagnostic(absolute, 'Current path is not inside a Dart package.'),
    ]);
  }
  return owner;
}

String _autoModuleName(String library, String dartPackage) {
  final uri = Uri.parse(library);
  var base = p.basenameWithoutExtension(uri.pathSegments.last).toLowerCase();
  base = base.replaceAll(RegExp(r'[^a-z0-9_]'), '_');
  if (base.isEmpty || !RegExp(r'^[a-z]').hasMatch(base)) {
    base = dartPackage;
  }
  if (base.length > 64) base = base.substring(0, 64);
  return base;
}

_LocatedPackage _locateBindingConfig(String configPath) {
  final absolute = p.normalize(p.absolute(configPath));
  _rejectSymlinkPathComponents(absolute);

  final type = FileSystemEntity.typeSync(absolute, followLinks: false);
  if (type == FileSystemEntityType.notFound) {
    throw FlaxCodegenException([
      _pathDiagnostic(absolute, 'Cannot read file.'),
    ]);
  }
  if (type == FileSystemEntityType.directory) {
    throw FlaxCodegenException([
      _pathDiagnostic(absolute, 'Expected a regular file.'),
    ]);
  }
  if (type == FileSystemEntityType.link) {
    throw FlaxCodegenException([
      _pathDiagnostic(absolute, 'Symbolic links are not allowed.'),
    ]);
  }
  if (type != FileSystemEntityType.file) {
    throw FlaxCodegenException([
      _pathDiagnostic(absolute, 'Expected a regular file.'),
    ]);
  }
  if (!_isLowercaseYamlExtension(absolute)) {
    throw FlaxCodegenException([
      _pathDiagnostic(absolute, 'Expected a .yaml or .yml binding config.'),
    ]);
  }

  final parent = p.dirname(absolute);
  if (p.basename(parent) != 'bindings') {
    final message = _hasBindingsAncestor(parent)
        ? 'Binding config must be a direct child of bindings/.'
        : 'Binding config must be inside the package bindings directory.';
    throw FlaxCodegenException([_pathDiagnostic(absolute, message)]);
  }

  final bindingsType = FileSystemEntity.typeSync(parent, followLinks: false);
  if (bindingsType == FileSystemEntityType.link) {
    throw FlaxCodegenException([
      _pathDiagnostic(absolute, 'Symbolic links are not allowed.'),
    ]);
  }
  if (bindingsType != FileSystemEntityType.directory) {
    throw FlaxCodegenException([
      _pathDiagnostic(absolute, 'Expected a regular bindings directory.'),
    ]);
  }

  final packageRootCandidate = p.dirname(parent);
  final owner = _nearestPubspecOwner(packageRootCandidate);
  if (owner == null) {
    throw FlaxCodegenException([
      _pathDiagnostic(absolute, 'Binding config is not inside a Dart package.'),
    ]);
  }
  if (!p.equals(owner, packageRootCandidate)) {
    throw FlaxCodegenException([
      _pathDiagnostic(
        absolute,
        'Binding config must be inside the package bindings directory.',
      ),
    ]);
  }

  return _LocatedPackage(packageRoot: owner, bindingsDirectory: parent);
}

/// Lexical lstat walk of [absolute]. Returns the first existing symlink
/// component path, or `null` when none are found.
///
/// Nonexistent components stop the walk (missing tails are permitted). Links
/// are never followed. When [includeFinalComponent] is false, only ancestors
/// are inspected — reusable by check and later generate before reading.
String? _firstSymlinkPathComponent(
  String absolute, {
  bool includeFinalComponent = true,
}) {
  final parts = p.split(absolute);
  if (parts.isEmpty) {
    return null;
  }
  var current = parts.first;
  if (current.isEmpty) {
    current = p.separator;
  }
  final lastIndex = includeFinalComponent ? parts.length - 1 : parts.length - 2;
  for (var index = 1; index <= lastIndex; index++) {
    current = p.join(current, parts[index]);
    final type = FileSystemEntity.typeSync(current, followLinks: false);
    if (type == FileSystemEntityType.link) {
      return current;
    }
    if (type == FileSystemEntityType.notFound) {
      return null;
    }
  }
  return null;
}

/// Rejects any symlink component on the lexical [absolute] path via lstat
/// (`followLinks: false`). Does not resolve or follow links as validation.
void _rejectSymlinkPathComponents(String absolute) {
  if (_firstSymlinkPathComponent(absolute) != null) {
    throw FlaxCodegenException([
      _pathDiagnostic(absolute, 'Symbolic links are not allowed.'),
    ]);
  }
}

List<String> _discoverBindingConfigs(String bindingsDirectory) {
  final paths = <String>[];
  for (final entity in Directory(
    bindingsDirectory,
  ).listSync(followLinks: false)) {
    final path = p.normalize(entity.path);
    final type = FileSystemEntity.typeSync(path, followLinks: false);
    if (type != FileSystemEntityType.file) {
      continue;
    }
    if (!_isLowercaseYamlExtension(path)) {
      continue;
    }
    if (p.basename(path) == _autoOverridesFilename) {
      continue;
    }
    paths.add(path);
  }
  paths.sort();
  return paths;
}

String _readPubspecPackageName(String packageRoot) {
  final path = p.join(packageRoot, 'pubspec.yaml');
  final String contents;
  try {
    contents = File(path).readAsStringSync();
  } on FileSystemException {
    throw FlaxCodegenException([_pathDiagnostic(path, 'Cannot read file.')]);
  }
  final Object? loaded;
  try {
    loaded = loadYaml(contents, sourceUrl: Uri.file(path));
  } on YamlException {
    throw FlaxCodegenException([
      FlaxCodegenDiagnostic(
        code: FlaxCodegenDiagnosticCode.yamlSyntax,
        source: path,
        offset: 0,
        line: 1,
        column: 1,
        pointer: '',
        message: 'Invalid YAML.',
      ),
    ]);
  }
  if (loaded is! YamlMap) {
    throw FlaxCodegenException([
      _pathDiagnostic(path, 'Invalid Dart package name.'),
    ]);
  }
  final name = loaded['name'];
  if (name is! String || name.isEmpty) {
    throw FlaxCodegenException([
      _pathDiagnostic(path, 'Invalid Dart package name.'),
    ]);
  }
  return name;
}

List<String> _readPubspecDirectDependencyNames(String packageRoot) {
  final path = p.join(packageRoot, 'pubspec.yaml');
  final Object? loaded;
  try {
    loaded = loadYaml(File(path).readAsStringSync(), sourceUrl: Uri.file(path));
  } on FileSystemException {
    throw FlaxCodegenException([_pathDiagnostic(path, 'Cannot read file.')]);
  } on YamlException {
    throw FlaxCodegenException([
      FlaxCodegenDiagnostic(
        code: FlaxCodegenDiagnosticCode.yamlSyntax,
        source: path,
        offset: 0,
        line: 1,
        column: 1,
        pointer: '',
        message: 'Invalid YAML.',
      ),
    ]);
  }
  if (loaded is! YamlMap) return const [];
  final dependencies = loaded['dependencies'];
  if (dependencies == null) return const [];
  if (dependencies is! YamlMap) {
    throw FlaxCodegenException([
      _pathDiagnostic(path, 'Invalid Dart dependencies.'),
    ]);
  }
  final names = <String>[];
  for (final key in dependencies.keys) {
    if (key is! String || key.isEmpty) {
      throw FlaxCodegenException([
        _pathDiagnostic(path, 'Invalid Dart dependency name.'),
      ]);
    }
    names.add(key);
  }
  names.sort();
  return names;
}

bool _isLowercaseYamlExtension(String path) {
  final extension = p.extension(path);
  return extension == '.yaml' || extension == '.yml';
}

bool _hasBindingsAncestor(String start) {
  var directory = p.normalize(start);
  while (true) {
    if (p.basename(directory) == 'bindings') {
      return true;
    }
    final parent = p.dirname(directory);
    if (parent == directory) {
      return false;
    }
    directory = parent;
  }
}

String? _nearestPubspecOwner(String start) {
  var directory = p.normalize(start);
  while (true) {
    final pubspec = p.join(directory, 'pubspec.yaml');
    final type = FileSystemEntity.typeSync(pubspec, followLinks: false);
    if (type == FileSystemEntityType.file) {
      return directory;
    }
    final parent = p.dirname(directory);
    if (parent == directory) {
      return null;
    }
    directory = parent;
  }
}

FlaxCodegenDiagnostic _pathDiagnostic(String source, String message) =>
    FlaxCodegenDiagnostic(
      code: FlaxCodegenDiagnosticCode.path,
      source: source,
      offset: 0,
      line: 1,
      column: 1,
      pointer: '',
      message: message,
    );

FlaxCodegenDiagnostic _resolutionDiagnostic(String source, String message) =>
    FlaxCodegenDiagnostic(
      code: FlaxCodegenDiagnosticCode.resolution,
      source: source,
      offset: 0,
      line: 1,
      column: 1,
      pointer: '',
      message: message,
    );

FlaxCodegenDiagnostic _dependencyDiagnostic(String source, String message) =>
    FlaxCodegenDiagnostic(
      code: FlaxCodegenDiagnosticCode.dependency,
      source: source,
      offset: 0,
      line: 1,
      column: 1,
      pointer: '',
      message: message,
    );

FlaxCodegenDiagnostic _parseStateDiagnostic(String source, String message) {
  const dependencyPrefixes = [
    'Cannot resolve dependency type library:',
    'Unknown dependency type:',
    'Conflicting dependency type:',
    'Conflicting dependency type library:',
    'Duplicate readonly provider:',
    'Duplicate top-level setter provider:',
  ];
  if (dependencyPrefixes.any(message.startsWith) ||
      message.contains(' must publicly export the referenced type ') ||
      message == 'Selected public libraries must export Widget') {
    return _dependencyDiagnostic(source, message);
  }
  return _resolutionDiagnostic(source, message);
}

String _findPackageConfigPath(String start) {
  var directory = p.normalize(start);
  while (true) {
    final path = p.join(directory, '.dart_tool', 'package_config.json');
    final type = FileSystemEntity.typeSync(path, followLinks: false);
    if (type == FileSystemEntityType.file) {
      return p.normalize(path);
    }
    if (type == FileSystemEntityType.link) {
      throw FlaxCodegenException([
        _resolutionDiagnostic(path, 'Symbolic links are not allowed.'),
      ]);
    }
    final parent = p.dirname(directory);
    if (parent == directory) {
      throw FlaxCodegenException([
        _resolutionDiagnostic(
          p.join(start, '.dart_tool', 'package_config.json'),
          'Missing package config.',
        ),
      ]);
    }
    directory = parent;
  }
}

({Map<String, String> roots, String packageConfigPath, String workspaceRoot})
_readPackageConfigRoots(String packageRoot, {required String dartPackage}) {
  final path = _findPackageConfigPath(packageRoot);
  final String contents;
  try {
    contents = File(path).readAsStringSync();
  } on FileSystemException {
    throw FlaxCodegenException([
      _resolutionDiagnostic(path, 'Cannot read file.'),
    ]);
  }
  final Object? decoded;
  try {
    decoded = jsonDecode(contents);
  } on FormatException {
    throw FlaxCodegenException([
      _resolutionDiagnostic(path, 'Invalid package config JSON.'),
    ]);
  }
  if (decoded is! Map) {
    throw FlaxCodegenException([
      _resolutionDiagnostic(path, 'Invalid package config.'),
    ]);
  }
  final configVersion = decoded['configVersion'];
  if (configVersion is! int || configVersion != 2) {
    throw FlaxCodegenException([
      _resolutionDiagnostic(path, 'Invalid package config.'),
    ]);
  }
  final packages = decoded['packages'];
  if (packages is! List) {
    throw FlaxCodegenException([
      _resolutionDiagnostic(path, 'Invalid package config.'),
    ]);
  }
  final roots = <String, String>{};
  final diagnostics = <FlaxCodegenDiagnostic>[];
  final baseUri = File(path).absolute.uri;
  for (final entry in packages) {
    if (entry is! Map) {
      diagnostics.add(_resolutionDiagnostic(path, 'Invalid package config.'));
      continue;
    }
    final name = entry['name'];
    final rootUri = entry['rootUri'];
    if (name is! String ||
        name.isEmpty ||
        rootUri is! String ||
        rootUri.isEmpty) {
      diagnostics.add(_resolutionDiagnostic(path, 'Invalid package config.'));
      continue;
    }
    if (roots.containsKey(name)) {
      diagnostics.add(
        _resolutionDiagnostic(path, "Duplicate package config entry '$name'."),
      );
      continue;
    }
    final Uri resolvedUri;
    try {
      resolvedUri = baseUri.resolve(rootUri);
    } on FormatException {
      diagnostics.add(_resolutionDiagnostic(path, 'Invalid package config.'));
      continue;
    }
    if (resolvedUri.scheme != 'file') {
      diagnostics.add(_resolutionDiagnostic(path, 'Invalid package config.'));
      continue;
    }
    try {
      roots[name] = p.normalize(Directory.fromUri(resolvedUri).path);
    } on ArgumentError {
      diagnostics.add(_resolutionDiagnostic(path, 'Invalid package config.'));
    } on UnsupportedError {
      diagnostics.add(_resolutionDiagnostic(path, 'Invalid package config.'));
    }
  }
  if (diagnostics.isNotEmpty) {
    throw FlaxCodegenException(diagnostics);
  }
  final ownerRoot = roots[dartPackage];
  if (ownerRoot == null) {
    throw FlaxCodegenException([
      _resolutionDiagnostic(
        path,
        "Unknown package config entry '$dartPackage'.",
      ),
    ]);
  }
  if (!p.equals(ownerRoot, packageRoot)) {
    throw FlaxCodegenException([
      _resolutionDiagnostic(
        path,
        "Package config root mismatch for '$dartPackage'.",
      ),
    ]);
  }
  return (
    roots: roots,
    packageConfigPath: path,
    workspaceRoot: p.dirname(p.dirname(path)),
  );
}

Map<String, FlaxCodegenManifestV5Projection> _loadProviderCandidateProjections({
  required List<String> imports,
  required List<String> dartDependencies,
  required Map<String, String> packageRoots,
}) {
  final cache = <String, FlaxCodegenManifestV5Projection>{};
  final diagnostics = <FlaxCodegenDiagnostic>[];
  final direct = <String, FlaxCodegenManifestV5Projection>{};
  for (final name in imports) {
    try {
      direct[name] = _loadManifestProjection(
        name,
        packageRoots: packageRoots,
        cache: cache,
        visiting: <String>{},
      );
    } on FlaxCodegenException catch (error) {
      diagnostics.addAll(error.diagnostics);
    }
  }
  if (diagnostics.isNotEmpty) {
    throw FlaxCodegenException(diagnostics);
  }
  for (final name in dartDependencies) {
    if (direct.containsKey(name)) continue;
    final root = packageRoots[name];
    if (root == null) continue;
    final manifestPath = p.join(root, 'bindings', 'manifest.json');
    if (FileSystemEntity.typeSync(manifestPath, followLinks: false) !=
        FileSystemEntityType.file) {
      continue;
    }
    try {
      direct[name] = _loadManifestProjection(
        name,
        packageRoots: packageRoots,
        cache: cache,
        visiting: <String>{},
      );
    } on FlaxCodegenException {
      // Optional provider candidates are only authoritative once referenced.
      // An unrelated Dart dependency with stale Flax metadata must not make
      // this package invalid.
    }
  }
  return direct;
}

Map<String, FlaxCodegenManifestV5Projection>
_selectDirectDependencyProjections({
  required String dartPackage,
  required List<String> imports,
  required List<FlaxCodegenModuleModel> parsedModels,
  required Map<String, FlaxCodegenManifestV5Projection> candidates,
}) {
  final referenced = <FlaxCodegenSourceIdentity>{};
  for (final module in parsedModels) {
    _walkModuleEncodedIds(module, (rawId, kind, pointer) {
      final identity = _sourceIdentityFromRawId(rawId, kind);
      if (identity != null && !_isPackageIdentity(identity, dartPackage)) {
        referenced.add(identity);
      }
    });
  }

  final selected = <String, FlaxCodegenManifestV5Projection>{};
  for (final name in candidates.keys.toList()..sort()) {
    final projection = candidates[name]!;
    if (imports.contains(name) ||
        referenced.any(
          (identity) => _projectionProvides(projection, identity),
        )) {
      selected[name] = projection;
    }
  }
  return selected;
}

bool _projectionProvides(
  FlaxCodegenManifestV5Projection projection,
  FlaxCodegenSourceIdentity identity,
) {
  for (final manifest in projection.packageManifests) {
    for (final module in manifest.modules) {
      if (module.model.identities.any(
        (entry) => entry.owner && entry.sourceIdentity == identity,
      )) {
        return true;
      }
    }
  }
  return false;
}

FlaxCodegenManifestV5Projection _loadManifestProjection(
  String packageName, {
  required Map<String, String> packageRoots,
  required Map<String, FlaxCodegenManifestV5Projection> cache,
  required Set<String> visiting,
}) {
  final cached = cache[packageName];
  if (cached != null) {
    return cached;
  }
  if (!visiting.add(packageName)) {
    throw FlaxCodegenException([
      _resolutionDiagnostic(
        packageName,
        "Cyclic binding manifest import: '$packageName'.",
      ),
    ]);
  }
  final root = packageRoots[packageName];
  if (root == null) {
    throw FlaxCodegenException([
      _resolutionDiagnostic(
        packageName,
        "Unknown imported package: '$packageName'.",
      ),
    ]);
  }
  final manifestPath = p.normalize(p.join(root, 'bindings', 'manifest.json'));
  final String contents;
  try {
    contents = File(manifestPath).readAsStringSync();
  } on FileSystemException {
    throw FlaxCodegenException([
      _resolutionDiagnostic(manifestPath, 'Cannot read file.'),
    ]);
  }
  final diagnostics = FlaxCodegenManifestV5Diagnostics(manifestPath);
  final manifest = FlaxCodegenManifestV5.parse(contents, diagnostics);
  if (diagnostics.items.isNotEmpty || manifest == null) {
    throw FlaxCodegenException(diagnostics.items);
  }
  if (manifest.package != packageName) {
    throw FlaxCodegenException([
      _resolutionDiagnostic(
        manifestPath,
        "Binding manifest package mismatch: '$packageName'.",
      ),
    ]);
  }
  final childDiagnostics = <FlaxCodegenDiagnostic>[];
  final directDependencies = <String, FlaxCodegenManifestV5Projection>{};
  for (final importName in List<String>.of(manifest.imports)..sort()) {
    try {
      directDependencies[importName] = _loadManifestProjection(
        importName,
        packageRoots: packageRoots,
        cache: cache,
        visiting: {...visiting},
      );
    } on FlaxCodegenException catch (error) {
      childDiagnostics.addAll(error.diagnostics);
    }
  }
  if (childDiagnostics.isNotEmpty) {
    throw FlaxCodegenException(childDiagnostics);
  }
  final projection = FlaxCodegenManifestV5Projection(
    root: manifest,
    directDependencies: directDependencies,
    source: manifestPath,
  );
  cache[packageName] = projection;
  return projection;
}

Future<List<FlaxCodegenModuleModel>> _parseLocalModules({
  required String workspaceRoot,
  required List<FlaxCodegenBindingConfig> configs,
  required List<String> configPaths,
  required Map<String, FlaxCodegenManifestV5Projection> directDependencies,
  List<Map<String, String>>? automaticTypeCarriers,
}) async {
  final parser = FlaxCodegenBindingParser(workspaceRoot);
  try {
    try {
      await parser.prepare(configs);
    } on StateError catch (error) {
      throw FlaxCodegenException([
        _resolutionDiagnostic(workspaceRoot, error.message),
      ]);
    }
    final imported = <String, FlaxCodegenModuleModel>{};
    for (final projection in directDependencies.values) {
      // modulesByModuleId already returns fresh projection snapshots.
      for (final entry in projection.modulesByModuleId.entries) {
        imported.putIfAbsent(entry.key, () => entry.value);
      }
    }
    final wireToRaw = _wireIdToRawFromProjections(directDependencies);
    final prepared = [
      for (final module in imported.values)
        _rewriteModuleIds(module, wireToRaw),
    ];
    try {
      parser.prepareModules(prepared);
    } on StateError catch (error) {
      throw FlaxCodegenException([
        _dependencyDiagnostic(workspaceRoot, error.message),
      ]);
    }
    final models = <FlaxCodegenModuleModel>[];
    final diagnostics = <FlaxCodegenDiagnostic>[];
    for (var index = 0; index < configs.length; index++) {
      try {
        models.add(
          await parser.parse(
            configs[index],
            automaticTypeCarriers: automaticTypeCarriers?[index] ?? const {},
          ),
        );
      } on StateError catch (error) {
        diagnostics.add(
          _parseStateDiagnostic(configPaths[index], error.message),
        );
      } on FlaxCodegenException catch (error) {
        diagnostics.addAll(error.diagnostics);
      }
    }
    if (diagnostics.isNotEmpty) {
      throw FlaxCodegenException(diagnostics);
    }
    return models;
  } finally {
    parser.dispose();
  }
}

FlaxCodegenResolvedPackage _resolveLocalOwnership({
  required String dartPackage,
  required FlaxCodegenPackageMetadataProjection metadata,
  required String packageRoot,
  required List<FlaxCodegenBindingConfig> configs,
  required List<String> configPaths,
  required List<FlaxCodegenModuleModel> parsedModels,
  required Map<String, FlaxCodegenManifestV5Projection> directDependencies,
}) {
  final automaticClaims = _automaticLocalDependencyClaims(
    dartPackage: dartPackage,
    configs: configs,
    configPaths: configPaths,
    parsedModels: parsedModels,
  );
  final siblings = <FlaxCodegenSiblingModuleInput>[];
  for (var index = 0; index < configs.length; index++) {
    siblings.add(
      _siblingInput(
        config: configs[index],
        source: configPaths[index],
        module: parsedModels[index],
        automaticClaims: automaticClaims[index] ?? const [],
      ),
    );
  }
  final importedPackages = <String, FlaxCodegenImportedPackage>{};
  for (final name in directDependencies.keys.toList()..sort()) {
    final projection = directDependencies[name]!;
    importedPackages[projection.manifest.package] = _importedPackageFromRoot(
      projection,
    );
    for (final imported in projection.importedPackages) {
      importedPackages.putIfAbsent(imported.dartPackage, () => imported);
    }
  }
  return FlaxCodegenOwnership.resolvePackage(
    dartPackage: dartPackage,
    metadata: metadata,
    metadataSource: p.join(packageRoot, 'flax_package.yaml'),
    modules: siblings,
    importedPackages: importedPackages.values.toList()
      ..sort((left, right) => left.dartPackage.compareTo(right.dartPackage)),
  );
}

Map<int, List<FlaxCodegenOwnerClaim>> _automaticLocalDependencyClaims({
  required String dartPackage,
  required List<FlaxCodegenBindingConfig> configs,
  required List<String> configPaths,
  required List<FlaxCodegenModuleModel> parsedModels,
}) {
  final explicit = <FlaxCodegenSourceIdentity>{};
  for (var index = 0; index < configs.length; index++) {
    final config = configs[index];
    final module = parsedModels[index];
    void add(String rawId, FlaxCodegenDeclarationKind kind) {
      final identity = _sourceIdentityFromRawId(rawId, kind);
      if (identity != null) explicit.add(identity);
    }

    for (final type in module.classes) {
      if (config.classes.containsKey(type.name)) {
        add(type.id, FlaxCodegenDeclarationKind.type);
      }
    }
    for (final function in module.functions) {
      if (config.functions.containsKey(function.call.name)) {
        add(function.id, FlaxCodegenDeclarationKind.function);
      }
    }
    for (final extension in module.extensions.where((e) => !e.isReference)) {
      for (final member in extension.members) {
        add(member.id, FlaxCodegenDeclarationKind.function);
      }
    }
    for (final snapshot in module.snapshots) {
      if (config.callbackSnapshots.containsKey(snapshot.name)) {
        add(snapshot.id, FlaxCodegenDeclarationKind.type);
      }
    }
    for (final getter
        in module.topLevel?.getters ?? <FlaxCodegenTopLevelGetterModel>[]) {
      if (!getter.isReference) {
        add(getter.id, FlaxCodegenDeclarationKind.readonly);
      }
    }
    for (final setter
        in module.topLevel?.setters ?? <FlaxCodegenTopLevelSetterModel>[]) {
      if (!setter.isReference) {
        add(setter.id, FlaxCodegenDeclarationKind.function);
      }
    }
    for (final name in config.types) {
      final named = module.types.where((type) => type.name == name).firstOrNull;
      if (named != null) add(named.id, FlaxCodegenDeclarationKind.type);
    }
  }

  final references =
      <FlaxCodegenSourceIdentity, List<FlaxCodegenSourceLocation>>{};
  for (var index = 0; index < parsedModels.length; index++) {
    _walkModuleEncodedIds(parsedModels[index], (rawId, kind, pointer) {
      final identity = _sourceIdentityFromRawId(rawId, kind);
      if (identity == null ||
          !_isPackageIdentity(identity, dartPackage) ||
          explicit.contains(identity)) {
        return;
      }
      references
          .putIfAbsent(identity, () => [])
          .add(
            FlaxCodegenSourceLocation(
              source: configPaths[index],
              offset: 0,
              line: 1,
              column: 1,
              pointer: pointer,
            ),
          );
    });
  }

  final result = <int, List<FlaxCodegenOwnerClaim>>{};
  final claimed = {...explicit};
  var changed = true;
  while (changed) {
    changed = false;
    for (final identity
        in references.keys.toList()
          ..sort((a, b) => a.toString().compareTo(b.toString()))) {
      if (claimed.contains(identity)) continue;
      final containing = <int>[];
      final exact = <int>[];
      for (var index = 0; index < parsedModels.length; index++) {
        final module = parsedModels[index];
        final contains = module.types.any(
          (type) =>
              _sourceIdentityFromRawId(
                type.id,
                FlaxCodegenDeclarationKind.type,
              ) ==
              identity,
        );
        if (!contains) continue;
        containing.add(index);
        if (configs[index].library == identity.originatingUri) {
          exact.add(index);
        }
      }
      final candidates = exact.isNotEmpty ? exact : containing;
      if (candidates.length != 1) {
        final location = references[identity]!.first;
        throw FlaxCodegenException([
          FlaxCodegenDiagnostic(
            code: FlaxCodegenDiagnosticCode.dependency,
            source: location.source,
            offset: location.offset,
            line: location.line,
            column: location.column,
            pointer: location.pointer,
            message: candidates.isEmpty
                ? 'Cannot determine local dependency owner for ${identity.name}.'
                : 'Ambiguous local dependency owner for ${identity.name}.',
          ),
        ]);
      }
      final owner = candidates.single;
      result
          .putIfAbsent(owner, () => [])
          .add(
            FlaxCodegenOwnerClaim(
              sourceIdentity: identity,
              location: references[identity]!.first,
            ),
          );
      claimed.add(identity);
      changed = true;
    }
  }
  for (final claims in result.values) {
    claims.sort(
      (a, b) =>
          a.sourceIdentity.toString().compareTo(b.sourceIdentity.toString()),
    );
  }
  return result;
}

bool _isPackageIdentity(
  FlaxCodegenSourceIdentity identity,
  String dartPackage,
) => identity.originatingUri.startsWith('package:$dartPackage/');

FlaxCodegenImportedPackage _importedPackageFromRoot(
  FlaxCodegenManifestV5Projection projection,
) {
  final owners = <FlaxCodegenImportedOwner>[
    for (final module in projection.manifest.modules)
      for (final identity in module.model.identities)
        if (identity.owner)
          FlaxCodegenImportedOwner(
            sourceIdentity: identity.sourceIdentity,
            wireId: identity.wireId,
            location: FlaxCodegenSourceLocation(
              source: projection.source,
              offset: 0,
              line: 1,
              column: 1,
              pointer: '',
            ),
          ),
  ]..sort((left, right) => left.wireId.value.compareTo(right.wireId.value));
  return FlaxCodegenImportedPackage(
    dartPackage: projection.manifest.package,
    namespace: projection.manifest.bindingNamespace,
    source: projection.source,
    owners: owners,
  );
}

FlaxCodegenSiblingModuleInput _siblingInput({
  required FlaxCodegenBindingConfig config,
  required String source,
  required FlaxCodegenModuleModel module,
  List<FlaxCodegenOwnerClaim> automaticClaims = const [],
}) {
  final listing = <String, FlaxCodegenSourceIdentity>{};
  void claim(String name, String rawId, FlaxCodegenDeclarationKind kind) {
    final identity = _sourceIdentityFromRawId(rawId, kind);
    if (identity != null) {
      listing[name] = identity;
    }
  }

  for (final type in module.classes) {
    if (config.classes.containsKey(type.name)) {
      claim(type.name, type.id, FlaxCodegenDeclarationKind.type);
    }
  }
  for (final function in module.functions) {
    if (config.functions.containsKey(function.call.name)) {
      claim(
        function.call.name,
        function.id,
        FlaxCodegenDeclarationKind.function,
      );
    }
  }
  for (final snapshot in module.snapshots) {
    if (config.callbackSnapshots.containsKey(snapshot.name)) {
      claim(snapshot.name, snapshot.id, FlaxCodegenDeclarationKind.type);
    }
  }
  for (final getter
      in module.topLevel?.getters ?? <FlaxCodegenTopLevelGetterModel>[]) {
    claim(getter.name, getter.id, FlaxCodegenDeclarationKind.readonly);
  }
  for (final setter
      in module.topLevel?.setters ?? <FlaxCodegenTopLevelSetterModel>[]) {
    claim('${setter.name}=', setter.id, FlaxCodegenDeclarationKind.function);
  }
  for (final name in config.types) {
    final named = module.types.where((type) => type.name == name).firstOrNull;
    if (named != null) {
      claim(name, named.id, FlaxCodegenDeclarationKind.type);
      continue;
    }
    final type = module.classes.where((item) => item.name == name).firstOrNull;
    if (type != null) {
      claim(name, type.id, FlaxCodegenDeclarationKind.type);
    }
  }

  final extensionClaims = <FlaxCodegenOwnerClaim>[];
  for (final extension in module.extensions.where((e) => !e.isReference)) {
    for (final member in extension.members) {
      final identity = _sourceIdentityFromRawId(
        member.id,
        FlaxCodegenDeclarationKind.function,
      );
      if (identity != null) {
        extensionClaims.add(
          FlaxCodegenOwnerClaim(
            sourceIdentity: identity,
            location: FlaxCodegenSourceLocation(
              source: source,
              offset: 0,
              line: 1,
              column: 1,
              pointer:
                  '/extensions/${extension.name}/${member.kind}/${member.name}',
            ),
          ),
        );
      }
    }
  }
  final references = <FlaxCodegenNominalReference>[];
  final seen = <FlaxCodegenSourceIdentity>{};
  void addReference(
    String rawId,
    FlaxCodegenDeclarationKind kind,
    String pointer,
  ) {
    final identity = _sourceIdentityFromRawId(rawId, kind);
    if (identity == null || !seen.add(identity)) {
      return;
    }
    references.add(
      FlaxCodegenNominalReference(
        sourceIdentity: identity,
        location: FlaxCodegenSourceLocation(
          source: source,
          offset: 0,
          line: 1,
          column: 1,
          pointer: pointer,
        ),
      ),
    );
  }

  _walkModuleEncodedIds(module, addReference);
  return FlaxCodegenSiblingModuleInput.fromConfig(
    config: config,
    source: source,
    listing: listing,
    claims: [...automaticClaims, ...extensionClaims],
    references: references,
    readonlyReferences: {
      for (final getter
          in module.topLevel?.getters ?? <FlaxCodegenTopLevelGetterModel>[])
        if (getter.isReference) getter.name,
    },
    setterReferences: {
      for (final setter
          in module.topLevel?.setters ?? <FlaxCodegenTopLevelSetterModel>[])
        if (setter.isReference) setter.name,
    },
  );
}

FlaxCodegenSourceIdentity? _sourceIdentityFromRawId(
  String rawId,
  FlaxCodegenDeclarationKind kind,
) {
  final split = rawId.lastIndexOf('::');
  if (split <= 0) {
    return null;
  }
  try {
    return FlaxCodegenSourceIdentity(
      kind: kind,
      originatingUri: rawId.substring(0, split),
      name: rawId.substring(split + 2),
      origin: FlaxCodegenOriginState.resolved,
    );
  } on FormatException {
    return null;
  }
}

void _walkModuleEncodedIds(
  FlaxCodegenModuleModel module,
  void Function(String rawId, FlaxCodegenDeclarationKind kind, String pointer)
  visit,
) {
  final functionIds = {
    for (final function in module.callableFunctions) function.id,
  };
  final readonlyIds = {
    for (final getter
        in module.topLevel?.getters ?? <FlaxCodegenTopLevelGetterModel>[])
      getter.id,
  };
  void walk(Object? value, String pointer) {
    if (value is Map) {
      for (final entry in value.entries) {
        final key = entry.key as String;
        final childPointer = flaxCodegenManifestV5Pointer(pointer, key);
        final child = entry.value;
        if (key == 'id' && child is String) {
          visit(
            child,
            functionIds.contains(child)
                ? FlaxCodegenDeclarationKind.function
                : readonlyIds.contains(child)
                ? FlaxCodegenDeclarationKind.readonly
                : FlaxCodegenDeclarationKind.type,
            childPointer,
          );
          continue;
        }
        walk(child, childPointer);
      }
      return;
    }
    if (value is List) {
      for (var index = 0; index < value.length; index++) {
        walk(value[index], flaxCodegenManifestV5Pointer(pointer, '$index'));
      }
    }
  }

  walk(FlaxCodegenManifestV5Codec.encodeModule(module), '');
}

Map<String, String> _wireIdToRawFromProjections(
  Map<String, FlaxCodegenManifestV5Projection> directDependencies,
) {
  final wireToRaw = <String, String>{};
  for (final projection in directDependencies.values) {
    for (final manifest in projection.packageManifests) {
      for (final module in manifest.modules) {
        for (final identity in module.model.identities) {
          wireToRaw[identity.wireId.value] =
              '${identity.sourceIdentity.originatingUri}::'
              '${identity.sourceIdentity.name}';
        }
      }
    }
  }
  return wireToRaw;
}

FlaxCodegenModuleModel _rewriteModuleIds(
  FlaxCodegenModuleModel module,
  Map<String, String> idMap,
) {
  final rewritten = _rewriteIdEntries(
    FlaxCodegenManifestV5Codec.encodeModule(module),
    idMap,
  );
  return _moduleFromEncoded(rewritten, module);
}

Object? _rewriteIdEntries(Object? value, Map<String, String> idMap) {
  if (value is Map) {
    final out = <String, Object?>{};
    for (final entry in value.entries) {
      final key = entry.key as String;
      final child = entry.value;
      if (key == 'id' && child is String && idMap.containsKey(child)) {
        out[key] = idMap[child];
      } else if (key == 'supertypes' && child is List) {
        // Class.supertypes stores originatingUri::name identity strings.
        out[key] = [
          for (final item in child)
            item is String && idMap.containsKey(item) ? idMap[item]! : item,
        ];
      } else {
        out[key] = _rewriteIdEntries(child, idMap);
      }
    }
    return out;
  }
  if (value is List) {
    return [for (final item in value) _rewriteIdEntries(item, idMap)];
  }
  return value;
}

FlaxCodegenModuleModel _moduleFromEncoded(
  Object? encoded,
  FlaxCodegenModuleModel template,
) {
  final diagnostics = FlaxCodegenManifestV5Diagnostics('');
  final decoded = FlaxCodegenManifestV5Codec.decodeModule(
    encoded,
    diagnostics,
    '',
    template.name,
  );
  diagnostics.throwIfAny();
  final module = decoded!;
  return FlaxCodegenModuleModel(
    name: module.name,
    library: module.library,
    jsPackage: module.jsPackage,
    dartOutput: template.dartOutput,
    tsOutput: template.tsOutput,
    classes: module.classes,
    types: module.types,
    typeLibraries: module.typeLibraries,
    functions: module.functions,
    extensions: module.extensions,
    snapshots: module.snapshots,
    typedefs: module.typedefs,
    topLevel: module.topLevel,
    publicLibraries: [
      for (final route in module.publicLibraries)
        FlaxCodegenLibraryModel(
          library: route.library,
          jsPackage: route.jsPackage,
          exports: route.exports,
          tsOutput: template.publicLibraries
              .firstWhere((entry) => entry.jsPackage == route.jsPackage)
              .tsOutput,
        ),
    ],
    moduleId: template.moduleId,
    requiredCapabilities: template.requiredCapabilities,
    internalTypeNames: template.internalTypeNames,
  );
}

FlaxCodegenModuleModel _snapshotModule(FlaxCodegenModuleModel module) =>
    _moduleFromEncoded(FlaxCodegenManifestV5Codec.encodeModule(module), module);

List<FlaxCodegenModuleModel> _freezeLocalModels({
  required List<FlaxCodegenBindingConfig> configs,
  required List<FlaxCodegenModuleModel> parsedModels,
  required FlaxCodegenResolvedPackage resolved,
}) {
  final rawToWire = <String, String>{};
  void mapIdentity(FlaxCodegenSourceIdentity identity, FlaxCodegenWireId wire) {
    rawToWire['${identity.originatingUri}::${identity.name}'] = wire.value;
  }

  for (final module in resolved.modules) {
    for (final owner in module.owners) {
      mapIdentity(owner.sourceIdentity, owner.wireId);
    }
    for (final reference in module.references) {
      mapIdentity(reference.sourceIdentity, reference.ownerWireId);
    }
  }
  for (final owner in resolved.importedOwners) {
    mapIdentity(owner.sourceIdentity, owner.wireId);
  }

  final resolvedByName = <String, FlaxCodegenResolvedModule>{
    for (final module in resolved.modules) module.moduleId.name.value: module,
  };

  final frozen = <FlaxCodegenModuleModel>[];
  for (var index = 0; index < parsedModels.length; index++) {
    final parsed = parsedModels[index];
    final resolvedModule = resolvedByName[parsed.name];
    if (resolvedModule == null) {
      throw StateError('Missing resolved module ${parsed.name}');
    }
    frozen.add(
      _freezeModule(parsed, configs[index], rawToWire, resolvedModule),
    );
  }
  return frozen;
}

FlaxCodegenModuleModel _freezeModule(
  FlaxCodegenModuleModel parsed,
  FlaxCodegenBindingConfig config,
  Map<String, String> rawToWire,
  FlaxCodegenResolvedModule resolvedModule,
) {
  final claimedNames = <String>{
    ...config.classes.keys,
    ...config.functions.keys,
    ...config.extensions.keys,
    ...config.callbackSnapshots.keys,
    ...config.types,
  };
  final explicitTypeIdentities = <FlaxCodegenSourceIdentity>{};
  void addExplicitType(String rawId) {
    final identity = _sourceIdentityFromRawId(
      rawId,
      FlaxCodegenDeclarationKind.type,
    );
    if (identity != null) explicitTypeIdentities.add(identity);
  }

  for (final type in parsed.classes) {
    if (config.classes.containsKey(type.name)) addExplicitType(type.id);
  }
  for (final snapshot in parsed.snapshots) {
    if (config.callbackSnapshots.containsKey(snapshot.name)) {
      addExplicitType(snapshot.id);
    }
  }
  for (final name in config.types) {
    final named = parsed.types.where((type) => type.name == name).firstOrNull;
    if (named != null) {
      addExplicitType(named.id);
      continue;
    }
    final type = parsed.classes.where((type) => type.name == name).firstOrNull;
    if (type != null) addExplicitType(type.id);
  }

  final automaticTypeOwners = <FlaxCodegenSourceIdentity>{
    for (final owner in resolvedModule.owners)
      if (owner.sourceIdentity.kind == FlaxCodegenDeclarationKind.type &&
          !explicitTypeIdentities.contains(owner.sourceIdentity))
        owner.sourceIdentity,
  };
  final existingClassIdentities = <FlaxCodegenSourceIdentity>{
    for (final type in parsed.classes)
      ?_sourceIdentityFromRawId(type.id, FlaxCodegenDeclarationKind.type),
  };
  final namedTypesById = <String, FlaxCodegenNamedTypeModel>{
    for (final type in parsed.types) type.id: type,
  };

  List<String> dependencySupertypes(FlaxCodegenNamedTypeModel type) {
    final result = <String>{};

    void visit(FlaxCodegenTypeRef parent) {
      final id = parent.id;
      if (id == null || !result.add(id)) return;
      final named = namedTypesById[id];
      if (named == null) return;
      for (final ancestor in named.dependencySuperTypes) {
        visit(ancestor);
      }
    }

    for (final parent in type.dependencySuperTypes) {
      visit(parent);
    }
    return result.toList();
  }

  final automaticClasses = <FlaxCodegenClassModel>[];
  for (final type in parsed.types) {
    if (type.isEnum) continue;
    final identity = _sourceIdentityFromRawId(
      type.id,
      FlaxCodegenDeclarationKind.type,
    );
    if (identity == null ||
        !automaticTypeOwners.contains(identity) ||
        existingClassIdentities.contains(identity)) {
      continue;
    }
    automaticClasses.add(
      FlaxCodegenClassModel(
        name: type.name,
        id: type.id,
        kind: 'object',
        constructors: const [],
        supertypes: dependencySupertypes(type),
        superTypes: type.dependencySuperTypes,
        typeParameters: type.typeParameters,
      ),
    );
  }
  automaticClasses.sort((a, b) => a.id.compareTo(b.id));

  final filtered = FlaxCodegenModuleModel(
    name: parsed.name,
    library: parsed.library,
    jsPackage: parsed.jsPackage,
    dartOutput: parsed.dartOutput,
    tsOutput: parsed.tsOutput,
    classes: [...parsed.classes, ...automaticClasses],
    types: [
      for (final type in parsed.types)
        if (claimedNames.contains(type.name) ||
            automaticTypeOwners.contains(
              _sourceIdentityFromRawId(
                type.id,
                FlaxCodegenDeclarationKind.type,
              ),
            ))
          type,
    ],
    typeLibraries: parsed.typeLibraries,
    functions: parsed.functions,
    extensions: parsed.extensions,
    snapshots: parsed.snapshots,
    typedefs: parsed.typedefs,
    topLevel: parsed.topLevel,
    publicLibraries: parsed.publicLibraries,
    moduleId: resolvedModule.moduleId.value,
    requiredCapabilities: List<String>.of(resolvedModule.requiredCapabilities),
    internalTypeNames: {
      for (final identity in automaticTypeOwners) identity.name,
    },
  );

  final rewritten = _rewriteIdEntries(
    FlaxCodegenManifestV5Codec.encodeModule(filtered),
    rawToWire,
  );
  return _moduleFromEncoded(rewritten, filtered);
}

List<String> _planValidationInventory({
  required List<FlaxCodegenModuleModel> modules,
  required String packageRoot,
}) {
  const reservedPath = 'bindings/manifest.json';
  const reservedLabel = 'package:manifest';
  final diagnostics = <FlaxCodegenDiagnostic>[];
  final candidates = <_OutputCandidate>[];

  void addCandidate({
    required String rawPath,
    required String label,
    required FlaxCodegenModuleModel module,
    required bool isDart,
  }) {
    try {
      candidates.add(
        _OutputCandidate(
          path: _normalizePackageRelativeOutput(rawPath, packageRoot),
          label: label,
          module: module,
          isDart: isDart,
        ),
      );
    } on StateError catch (error) {
      diagnostics.add(_outputDiagnostic(packageRoot, error.message));
    }
  }

  for (final module in modules) {
    addCandidate(
      rawPath: module.dartOutput,
      label: '${module.name}:dartOutput',
      module: module,
      isDart: true,
    );
    for (final path in flaxCodegenTypescriptOutputPaths(module)) {
      addCandidate(
        rawPath: path,
        label: module.publicLibraries.isEmpty
            ? '${module.name}:tsOutput'
            : '${module.name}:tsOutput:$path',
        module: module,
        isDart: false,
      );
    }
  }
  final placeholder = modules.isEmpty
      ? const FlaxCodegenModuleModel(
          name: 'manifest',
          library: 'package:flax/manifest.dart',
          jsPackage: '@flax/manifest',
          dartOutput: reservedPath,
          tsOutput: reservedPath,
          classes: [],
          types: [],
        )
      : modules.first;
  addCandidate(
    rawPath: reservedPath,
    label: reservedLabel,
    module: placeholder,
    isDart: false,
  );
  if (diagnostics.isNotEmpty) {
    throw FlaxCodegenException(diagnostics);
  }
  candidates.sort(_compareOutputCandidates);

  for (var index = 1; index < candidates.length; index++) {
    final previous = candidates[index - 1];
    final current = candidates[index];
    if (previous.path != current.path) {
      continue;
    }
    diagnostics.add(
      _outputDiagnostic(
        current.path,
        "Duplicate generated output path '${current.path}' "
        '(${previous.label} and ${current.label}).',
      ),
    );
  }
  if (diagnostics.isNotEmpty) {
    throw FlaxCodegenException(diagnostics);
  }
  return [for (final candidate in candidates) candidate.path];
}

FlaxCodegenDiagnostic _outputDiagnostic(String source, String message) =>
    FlaxCodegenDiagnostic(
      code: FlaxCodegenDiagnosticCode.output,
      source: source,
      offset: 0,
      line: 1,
      column: 1,
      pointer: '',
      message: message,
    );

/// Expected package-relative bytes for check (and later generate): module Dart/TS
/// plus canonical UTF-8 `bindings/manifest.json`.
///
/// Emitter context is local [modules] plus unique flattened modules from
/// [directDependencies]; only [modules] produce expected output paths.
Future<Map<String, List<int>>> _planExpectedPackageOutputs({
  required String packageRoot,
  required List<FlaxCodegenModuleModel> modules,
  required Map<String, FlaxCodegenManifestV5Projection> directDependencies,
  required FlaxCodegenManifestV5 manifest,
  required FlaxCodegenProcessRunner processRunner,
}) async {
  final pipeline = FlaxCodegenPackagePipeline(
    packageRoot: packageRoot,
    processRunner: processRunner,
  );
  final emitted = await pipeline.emit(
    modules,
    additionalEmitterModules: _flattenedDependencyModules(directDependencies),
  );
  return {
    for (final entry in emitted.entries) entry.key: entry.value,
    'bindings/manifest.json': utf8.encode(manifest.encode()),
  };
}

/// Unique dependency modules across direct projections, keyed by `moduleId`
/// (first package in sorted package-name order wins), returned in sorted
/// `moduleId` order.
List<FlaxCodegenModuleModel> _flattenedDependencyModules(
  Map<String, FlaxCodegenManifestV5Projection> directDependencies,
) {
  final byModuleId = <String, FlaxCodegenModuleModel>{};
  for (final packageName in directDependencies.keys.toList()..sort()) {
    final modules = directDependencies[packageName]!.modulesByModuleId;
    for (final moduleId in modules.keys.toList()..sort()) {
      byModuleId.putIfAbsent(moduleId, () => modules[moduleId]!);
    }
  }
  return [
    for (final moduleId in byModuleId.keys.toList()..sort())
      byModuleId[moduleId]!,
  ];
}

const _normalGeneratedHeaderLines = [
  '// GENERATED CODE. Selected public API subset; do not edit.',
  '// Regenerate with dart run melos run bindings:generate.',
];

const _hostGeneratedHeaderLines = [
  '// GENERATED CODE. Selected host overrides; do not edit.',
  '// Regenerate with dart run melos run bindings:generate.',
];

const _orphanSkipDirectoryNames = {
  '.dart_tool',
  '.git',
  'build',
  'node_modules',
};

bool _sameBytes(List<int> left, List<int> right) {
  if (left.length != right.length) return false;
  for (var index = 0; index < left.length; index++) {
    if (left[index] != right[index]) return false;
  }
  return true;
}

bool _startsWithBytes(List<int> bytes, List<int> prefix) {
  if (bytes.length < prefix.length) return false;
  for (var index = 0; index < prefix.length; index++) {
    if (bytes[index] != prefix[index]) return false;
  }
  return true;
}

List<int> _generatedHeaderPrefix(List<String> lines) =>
    utf8.encode('${lines[0]}\n${lines[1]}\n');

final _normalGeneratedHeaderPrefix = _generatedHeaderPrefix(
  _normalGeneratedHeaderLines,
);
final _hostGeneratedHeaderPrefix = _generatedHeaderPrefix(
  _hostGeneratedHeaderLines,
);

bool _hasOwnedGeneratedHeader(File file) {
  final bytes = file.readAsBytesSync();
  if (_startsWithBytes(bytes, _normalGeneratedHeaderPrefix) ||
      _startsWithBytes(bytes, _hostGeneratedHeaderPrefix)) {
    return true;
  }
  // Exact two-line file without a trailing newline after the second line.
  final normalExact = utf8.encode(
    '${_normalGeneratedHeaderLines[0]}\n${_normalGeneratedHeaderLines[1]}',
  );
  final hostExact = utf8.encode(
    '${_hostGeneratedHeaderLines[0]}\n${_hostGeneratedHeaderLines[1]}',
  );
  return _sameBytes(bytes, normalExact) || _sameBytes(bytes, hostExact);
}

/// Sorted absolute paths of owned generated `.dart`/`.ts` orphans under
/// [packageRoot], excluding [expectedAbsolute] and package-root skip dirs.
List<String> _listOwnedGeneratedOrphans({
  required String packageRoot,
  required Set<String> expectedAbsolute,
}) {
  final orphans = <String>[];
  final normalizedRoot = p.normalize(packageRoot);
  void walk(Directory directory) {
    final atPackageRoot = p.equals(p.normalize(directory.path), normalizedRoot);
    final children = directory.listSync(followLinks: false).toList()
      ..sort((left, right) => left.path.compareTo(right.path));
    for (final entity in children) {
      final name = p.basename(entity.path);
      if (atPackageRoot && _orphanSkipDirectoryNames.contains(name)) {
        continue;
      }
      final type = FileSystemEntity.typeSync(entity.path, followLinks: false);
      if (type == FileSystemEntityType.directory) {
        walk(Directory(entity.path));
        continue;
      }
      if (type != FileSystemEntityType.file) continue;
      if (!name.endsWith('.dart') && !name.endsWith('.ts')) continue;
      final absolute = p.normalize(entity.path);
      if (expectedAbsolute.contains(absolute)) continue;
      if (!_hasOwnedGeneratedHeader(File(absolute))) continue;
      orphans.add(absolute);
    }
  }

  walk(Directory(packageRoot));
  return orphans;
}

/// Pre-install snapshot of affected write and delete targets.
final class _InstallSnapshot {
  _InstallSnapshot({
    required Map<String, List<int>> previousFiles,
    required Set<String> missingWriteTargets,
    required List<String> createdDirectoryCandidates,
  }) : previousFiles = Map.unmodifiable({
         for (final entry in previousFiles.entries)
           entry.key: List<int>.unmodifiable(entry.value),
       }),
       missingWriteTargets = Set.unmodifiable(missingWriteTargets),
       createdDirectoryCandidates = List.unmodifiable(
         createdDirectoryCandidates,
       );

  /// Absolute path → prior regular-file bytes (writes that existed + orphans).
  final Map<String, List<int>> previousFiles;

  /// Write targets that did not exist before install.
  final Set<String> missingWriteTargets;

  /// Parent directories of write targets that did not exist before install,
  /// deepest-first for restore deletion.
  final List<String> createdDirectoryCandidates;
}

_InstallSnapshot _captureInstallSnapshot({
  required Iterable<String> writeTargets,
  required Iterable<String> deleteTargets,
}) {
  final previousFiles = <String, List<int>>{};
  final missingWriteTargets = <String>{};
  final createdDirectoryCandidates = <String>{};

  for (final absolute in writeTargets) {
    final type = FileSystemEntity.typeSync(absolute, followLinks: false);
    if (type == FileSystemEntityType.file) {
      previousFiles[absolute] = File(absolute).readAsBytesSync();
    } else if (type == FileSystemEntityType.notFound) {
      missingWriteTargets.add(absolute);
      for (final directory in _missingAncestorDirectories(absolute)) {
        createdDirectoryCandidates.add(directory);
      }
    }
  }

  for (final absolute in deleteTargets) {
    final type = FileSystemEntity.typeSync(absolute, followLinks: false);
    if (type == FileSystemEntityType.file) {
      previousFiles.putIfAbsent(
        absolute,
        () => File(absolute).readAsBytesSync(),
      );
    }
  }

  final created = createdDirectoryCandidates.toList()
    ..sort((left, right) => right.length.compareTo(left.length));

  return _InstallSnapshot(
    previousFiles: previousFiles,
    missingWriteTargets: missingWriteTargets,
    createdDirectoryCandidates: created,
  );
}

/// Lexical missing parents of [absoluteFile], nearest-missing first omitted;
/// returns all missing ancestors from deepest to package-nearest.
List<String> _missingAncestorDirectories(String absoluteFile) {
  final missing = <String>[];
  var current = p.dirname(absoluteFile);
  while (true) {
    final type = FileSystemEntity.typeSync(current, followLinks: false);
    if (type == FileSystemEntityType.directory) {
      break;
    }
    if (type == FileSystemEntityType.notFound) {
      missing.add(current);
    } else {
      break;
    }
    final parent = p.dirname(current);
    if (parent == current) {
      break;
    }
    current = parent;
  }
  return missing;
}

void _restoreInstallSnapshot(_InstallSnapshot snapshot) {
  for (final absolute in snapshot.missingWriteTargets) {
    final type = FileSystemEntity.typeSync(absolute, followLinks: false);
    if (type == FileSystemEntityType.file) {
      File(absolute).deleteSync();
    }
  }

  for (final entry in snapshot.previousFiles.entries) {
    _installRegularFile(entry.key, entry.value);
  }

  for (final directory in snapshot.createdDirectoryCandidates) {
    final type = FileSystemEntity.typeSync(directory, followLinks: false);
    if (type != FileSystemEntityType.directory) {
      continue;
    }
    final children = Directory(directory).listSync(followLinks: false);
    if (children.isEmpty) {
      Directory(directory).deleteSync();
    }
  }
}

/// Creates parent directories without following symlinks, then replaces any
/// existing regular file and writes [bytes] as a new regular file.
void _installRegularFile(String absolute, List<int> bytes) {
  if (_firstSymlinkPathComponent(absolute, includeFinalComponent: false) !=
      null) {
    throw FlaxCodegenException([
      _outputDiagnostic(absolute, 'Symbolic links are not allowed.'),
    ]);
  }
  _ensureRegularParentDirectory(absolute);
  final type = FileSystemEntity.typeSync(absolute, followLinks: false);
  if (type == FileSystemEntityType.link) {
    throw FlaxCodegenException([
      _outputDiagnostic(absolute, 'Generated output is a symbolic link.'),
    ]);
  }
  if (type == FileSystemEntityType.file) {
    File(absolute).deleteSync();
  } else if (type != FileSystemEntityType.notFound) {
    throw FlaxCodegenException([
      _outputDiagnostic(absolute, 'Generated output is not a regular file.'),
    ]);
  }
  File(absolute).writeAsBytesSync(bytes);
}

void _ensureRegularParentDirectory(String absoluteFile) {
  final parent = p.dirname(absoluteFile);
  final parts = p.split(parent);
  if (parts.isEmpty) {
    return;
  }
  var current = parts.first;
  if (current.isEmpty) {
    current = p.separator;
  }
  for (var index = 1; index < parts.length; index++) {
    current = p.join(current, parts[index]);
    final type = FileSystemEntity.typeSync(current, followLinks: false);
    if (type == FileSystemEntityType.link) {
      throw FlaxCodegenException([
        _outputDiagnostic(absoluteFile, 'Symbolic links are not allowed.'),
      ]);
    }
    if (type == FileSystemEntityType.notFound) {
      Directory(current).createSync();
      continue;
    }
    if (type != FileSystemEntityType.directory) {
      throw FlaxCodegenException([
        _outputDiagnostic(
          absoluteFile,
          'Generated output parent is not a regular directory.',
        ),
      ]);
    }
  }
}

final class _PlannedOutput {
  const _PlannedOutput({
    required this.path,
    required this.module,
    required this.isDart,
  });

  final String path;
  final FlaxCodegenModuleModel module;
  final bool isDart;
}

final class _OutputCandidate {
  const _OutputCandidate({
    required this.path,
    required this.label,
    required this.module,
    required this.isDart,
  });

  final String path;
  final String label;
  final FlaxCodegenModuleModel module;
  final bool isDart;
}

List<_PlannedOutput> _planOutputs(
  List<FlaxCodegenModuleModel> modules,
  String packageRoot,
) {
  final candidates = <_OutputCandidate>[];
  for (final module in modules) {
    candidates.add(
      _OutputCandidate(
        path: _normalizePackageRelativeOutput(module.dartOutput, packageRoot),
        label: '${module.name}:dartOutput',
        module: module,
        isDart: true,
      ),
    );
    for (final path in flaxCodegenTypescriptOutputPaths(module)) {
      candidates.add(
        _OutputCandidate(
          path: _normalizePackageRelativeOutput(path, packageRoot),
          label: module.publicLibraries.isEmpty
              ? '${module.name}:tsOutput'
              : '${module.name}:tsOutput:$path',
          module: module,
          isDart: false,
        ),
      );
    }
  }

  candidates.sort(_compareOutputCandidates);

  for (var index = 1; index < candidates.length; index++) {
    final previous = candidates[index - 1];
    final current = candidates[index];
    if (previous.path == current.path) {
      throw StateError(
        "Duplicate generated output path '${current.path}' "
        '(${previous.label} and ${current.label}).',
      );
    }
  }

  return [
    for (final candidate in candidates)
      _PlannedOutput(
        path: candidate.path,
        module: candidate.module,
        isDart: candidate.isDart,
      ),
  ];
}

int _compareOutputCandidates(_OutputCandidate left, _OutputCandidate right) {
  final byPath = left.path.compareTo(right.path);
  if (byPath != 0) {
    return byPath;
  }
  final byLabel = left.label.compareTo(right.label);
  if (byLabel != 0) {
    return byLabel;
  }
  return _compareModules(left.module, right.module);
}

List<FlaxCodegenModuleModel> _orderedModules(
  List<FlaxCodegenModuleModel> modules,
) {
  return [...modules]..sort(_compareModules);
}

/// Total order for emitter lists and candidate tie-breaks: never relies on
/// List.sort stability for equal keys.
int _compareModules(FlaxCodegenModuleModel left, FlaxCodegenModuleModel right) {
  final byName = left.name.compareTo(right.name);
  if (byName != 0) {
    return byName;
  }
  final byLibrary = left.library.compareTo(right.library);
  if (byLibrary != 0) {
    return byLibrary;
  }
  final byJsPackage = left.jsPackage.compareTo(right.jsPackage);
  if (byJsPackage != 0) {
    return byJsPackage;
  }
  final byDart = p
      .normalize(left.dartOutput)
      .compareTo(p.normalize(right.dartOutput));
  if (byDart != 0) {
    return byDart;
  }
  return p.normalize(left.tsOutput).compareTo(p.normalize(right.tsOutput));
}

String _normalizePackageRelativeOutput(String value, String packageRoot) {
  if (value.isEmpty) {
    throw StateError('Generated output path must not be empty.');
  }
  if (p.isAbsolute(value)) {
    throw StateError(
      "Generated output path must be package-relative: '$value'.",
    );
  }
  final normalized = p.normalize(value);
  if (normalized == '.' || normalized.isEmpty) {
    throw StateError(
      "Generated output path must not be the current directory: '$value'.",
    );
  }
  final parts = p.split(normalized);
  if (parts.contains('..')) {
    throw StateError(
      "Generated output path escapes the package root: '$value'.",
    );
  }
  final absolute = p.normalize(p.join(packageRoot, normalized));
  if (!p.isWithin(packageRoot, absolute)) {
    throw StateError(
      "Generated output path escapes the package root: '$value'.",
    );
  }
  return normalized;
}
