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
import 'manifest.dart';
import 'manifest_codec.dart';
import 'manifest_projection.dart';
import 'model.dart';
import 'ownership.dart';
import 'package_metadata.dart';
import 'parser.dart';
import 'types_sdk.dart';

part 'package_inputs.dart';

/// Narrow injectable runner matching [Process.run]'s positional executable and
/// arguments. Named [Process.run] options are intentionally unsupported.
typedef FlaxCodegenProcessRunner = Future<ProcessResult> Function(
  String executable,
  List<String> arguments,
);

/// Invoked immediately before each package install mutation (write or orphan
/// delete). Used by tests to force mid-transaction failure after planning.
typedef FlaxCodegenInstallMutationProbe = void Function(String absolutePath);

const _autoOverridesFilename = flaxCodegenOverridesFilename;

/// Immutable package validation view through M2.5a Phase D.
final class FlaxCodegenPackageValidation {
  FlaxCodegenPackageValidation._({
    required this.packageRoot,
    required this.dartPackage,
    required List<String> configPaths,
    required this.metadata,
    required Map<String, FlaxCodegenManifestProjection> directDependencies,
    required List<FlaxCodegenModuleModel> localModels,
    required this.resolvedPackage,
    required this.manifest,
    required this.projection,
    required List<String> outputInventory,
    this.defaultLayout = false,
    Map<String, String> sourceExports = const {},
    Map<String, ({String library, Map<String, String> types})> dartLibraries =
        const {},
    List<FlaxCodegenSkip> skips = const [],
    List<FlaxCodegenNotice> notices = const [],
  }) : configPaths = List.unmodifiable(configPaths),
       directDependencies = Map.unmodifiable(directDependencies),
       _localModels = List.unmodifiable(localModels),
       _sourceExports = Map.unmodifiable(sourceExports),
       _dartLibraries = Map.unmodifiable(dartLibraries),
       outputInventory = List.unmodifiable(outputInventory),
       skips = List.unmodifiable(skips),
       notices = List.unmodifiable(notices);

  final String packageRoot;
  final bool defaultLayout;
  final String dartPackage;
  final List<String> configPaths;
  final FlaxCodegenPackageMetadataProjection metadata;

  /// Projections for packages required by explicit imports or by resolved
  /// signature dependencies from direct Dart dependencies.
  final Map<String, FlaxCodegenManifestProjection> directDependencies;

  final List<FlaxCodegenModuleModel> _localModels;
  final Map<String, String> _sourceExports;
  final Map<String, ({String library, Map<String, String> types})>
  _dartLibraries;

  /// Fresh frozen local-module snapshots with wireIds, in canonical config-path
  /// order. Mutating a returned module collection cannot affect later reads,
  /// the manifest, or projections.
  List<FlaxCodegenModuleModel> get localModels => List.unmodifiable([
    for (final module in _localModels) _snapshotModule(module),
  ]);
  final FlaxCodegenResolvedPackage resolvedPackage;
  final FlaxCodegenManifest manifest;
  final FlaxCodegenManifestProjection projection;
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
  /// configs, reads package metadata plus every strict format-2 selection, builds
  /// current Manifest projections for each direct config import, parses local modules,
  /// resolves ownership, and preflights the output inventory.
  /// A null path discovers scopes in packageRoot/current package, defaulting to app.
  ///
  /// [processRunner] is accepted so callers can prove validation never formats
  /// or spawns processes; this path never invokes it.
  static Future<FlaxCodegenPackageValidation> validateConfig(
    String? configPath, {
    String? packageRoot,
    FlaxCodegenProcessRunner? processRunner,
    FlaxCodegenBuildInputs? buildInputs,
  }) async {
    // Reserved for later generate/check stages; validation must not call it.
    processRunner;
    final files = _PackageInputFiles(buildInputs?.files);
    final root =
        buildInputs?.packageRoot ??
        (configPath == null
            ? _locateAutoPackageRoot(packageRoot ?? Directory.current.path)
            : null);
    final located = root == null
        ? _locateBindingConfig(configPath!)
        : _LocatedPackage(
            packageRoot: root,
            bindingsDirectory: p.join(root, 'bindings'),
          );
    final configPaths = _discoverBindingConfigs(
      located.bindingsDirectory,
      explicitConfig: configPath == null
          ? null
          : p.normalize(p.absolute(configPath)),
      files: files,
    );
    final useDefaults = configPaths.isEmpty;
    if (useDefaults) {
      configPaths.add(p.join(located.bindingsDirectory, 'flax_bindings.yaml'));
    }
    final diagnostics = <FlaxCodegenDiagnostic>[];
    String? dartPackage;
    try {
      dartPackage = _readPubspecPackageName(located.packageRoot, files: files);
    } on FlaxCodegenException catch (error) {
      diagnostics.addAll(error.diagnostics);
    }
    FlaxCodegenPackageMetadataProjection? metadata;
    try {
      metadata = files.metadata(
        p.join(located.packageRoot, 'flax_package.yaml'),
      );
    } on FlaxCodegenException catch (error) {
      diagnostics.addAll(error.diagnostics);
    }
    final configs = <FlaxCodegenBindingConfig>[];
    for (final path in configPaths) {
      try {
        configs.add(
          FlaxCodegenBindingConfig.parseStrict(
            useDefaults
                ? jsonEncode({
                    'format': 2,
                    'dartOutput': flaxCodegenAggregateDart,
                  })
                : files.read(path),
            source: path,
            jsPackageRoot:
                metadata?.javascriptPackage ?? flaxCodegenDefaultJsPackage,
            scopeJsPackages: metadata?.scopeJsPackages ?? const {},
          ),
        );
      } on FlaxCodegenException catch (error) {
        diagnostics.addAll(error.diagnostics);
      }
    }
    if (diagnostics.isNotEmpty) {
      throw FlaxCodegenException(diagnostics);
    }
    if (dartPackage == null || metadata == null) {
      throw StateError('Package validation did not resolve its metadata.');
    }
    final packageConfig = buildInputs == null
        ? _readPackageConfigRoots(located.packageRoot, dartPackage: dartPackage)
        : null;
    final packageRoots = buildInputs?.packageRoots ?? packageConfig!.roots;
    final dartDependencies = _readPubspecDirectDependencyNames(
      located.packageRoot,
      files: files,
      requireFlax: !metadata.capabilities.contains('core'),
    );
    _validateGeneratedDependencies(
      metadata,
      dartDependencies,
      dartPackage,
      located.packageRoot,
    );
    final imports = <String>{
      for (final config in configs) ...config.imports,
    }.toList()..sort();
    final providerCandidates = _loadProviderCandidateProjections(
      imports: imports,
      dartDependencies: dartDependencies,
      packageRoots: packageRoots,
      packageRoot: located.packageRoot,
      files: files,
      requireJavascript: !useDefaults,
      generateDependencies: metadata.generateDependencies,
    );

    final selectionSkips = <FlaxCodegenSkip>[];
    final selectionNotices = <FlaxCodegenNotice>[];
    final parsedModels = await _parseLocalModules(
      workspaceRoot: packageConfig?.workspaceRoot ?? buildInputs!.packageRoot,
      packageRoot: located.packageRoot,
      files: files,
      libraryResolver: buildInputs?.libraryResolver,
      publicLibraries: buildInputs?.publicLibraries,
      configs: configs,
      configPaths: configPaths,
      directDependencies: providerCandidates,
      selectionSkips: selectionSkips,
      selectionNotices: selectionNotices,
      generateDependencies: metadata.generateDependencies,
      packageRoots: packageRoots,
      createScope: useDefaults
          ? (name) => FlaxCodegenBindingConfig.parseStrict(
              jsonEncode({
                'format': 2,
                'name': name,
                'dartOutput': flaxCodegenAggregateDart,
              }),
              jsPackageRoot:
                  metadata!.javascriptPackage ?? flaxCodegenDefaultJsPackage,
              scopeJsPackages: metadata.scopeJsPackages,
            )
          : null,
    );
    flaxCodegenTypesSdkLayout(metadata, configs);
    while (configPaths.length < configs.length) {
      configPaths.add(
        p.join(
          located.bindingsDirectory,
          'flax_${configs[configPaths.length].name}.yaml',
        ),
      );
    }
    final directDependencies = _selectDirectDependencyProjections(
      dartPackage: dartPackage,
      imports: imports,
      configs: configs,
      parsedModels: parsedModels,
      candidates: providerCandidates,
    );
    if (!useDefaults) {
      _validateProviderDelivery(
        located.packageRoot,
        directDependencies,
        packageRoots,
        files: files,
      );
    }
    final resolved = _resolveLocalOwnership(
      dartPackage: dartPackage,
      metadata: metadata,
      packageRoot: located.packageRoot,
      configs: configs,
      configPaths: configPaths,
      parsedModels: parsedModels,
      directDependencies: directDependencies,
    );
    if (metadata.typesSdk case final sdk?) {
      final publicIds = {
        for (final module in resolved.modules)
          if (sdk.scopes.contains(module.moduleId.name.value))
            module.moduleId.value,
      };
      final localIds = {
        for (final module in resolved.modules) module.moduleId.value,
      };
      for (final module in resolved.modules.where(
        (module) => publicIds.contains(module.moduleId.value),
      )) {
        for (final reference in module.references) {
          final owner = reference.ownerWireId.moduleId.value;
          if (localIds.contains(owner) && !publicIds.contains(owner)) {
            throw FlaxCodegenException([
              _resolutionDiagnostic(
                'flax_package.yaml',
                'Public SDK scope ${module.moduleId.name.value} references unselected scope $owner. Add its scope to typesSdk.scopes or remove that public reference.',
              ),
            ]);
          }
        }
      }
    }
    final sourceExports = <String, String>{};
    final carriers = <String, String>{};
    for (final config in configs.where((config) => config.sources != null)) {
      if (useDefaults && config.name != 'app') continue;
      final module = resolved.modules.singleWhere(
        (module) => module.moduleId.name.value == config.name,
      );
      final exports = <String, Set<String>>{};
      final publicLibrary =
          'package:$dartPackage/flax_bindings/${config.name}.dart';
      for (final owner in module.owners) {
        final identity = owner.sourceIdentity;
        if (!identity.originatingUri.startsWith('package:$dartPackage/')) {
          continue;
        }
        final name = identity.name
            .split('.')
            .first
            .replaceFirst(RegExp(r'=$'), '');
        // Static operations export their class, not a dotted member name.
        if (!identity.name.contains('.')) {
          carriers['${identity.originatingUri}::$name'] = publicLibrary;
        }
        exports.putIfAbsent(identity.originatingUri, () => {}).add(name);
      }
      // Typedefs have no runtime owner, but remain part of the public Dart API.
      for (final alias
          in parsedModels
              .singleWhere((model) => model.name == config.name)
              .typedefs) {
        exports
            .putIfAbsent(alias.originatingUri, () => {})
            .add(alias.originatingName);
      }
      final output = flaxCodegenPublicLibrary(config.name);
      final absolute = p.join(located.packageRoot, output);
      final bindingLibrary = config.dartOutput.startsWith('lib/')
          ? Uri(
              scheme: 'package',
              path: '$dartPackage/${config.dartOutput.substring(4)}',
            )
          : null;
      final entryNames = (useDefaults ? configs : [config]).expand(
        (c) => ['${c.name}Bindings', '${c.name}Plugin'],
      );
      for (final name in entryNames) {
        if (bindingLibrary != null &&
            exports.values.any((names) => names.contains(name))) {
          throw FlaxCodegenException([
            _outputDiagnostic(
              absolute,
              'The generated scope entry reserves $name. Use a distinct scope name or a legacy public library entry for this API.',
            ),
          ]);
        }
      }
      if (files.isFile(absolute) &&
          !files
              .read(absolute)
              .startsWith(_normalGeneratedHeaderLines.join('\n'))) {
        throw FlaxCodegenException([
          _outputDiagnostic(
            absolute,
            'Refusing to replace a non-generated annotation export library.',
          ),
        ]);
      }
      sourceExports[output] = [
        ..._normalGeneratedHeaderLines,
        if (bindingLibrary != null)
          'export ${jsonEncode(bindingLibrary.toString())} show ${config.name}Bindings, ${config.name}Plugin;',
        for (final uri in exports.keys.toList()..sort())
          "export '$uri' show ${(exports[uri]!.toList()..sort()).join(', ')};",
        '',
      ].join('\n');
    }
    if (useDefaults) {
      sourceExports[flaxCodegenDartOutput('app')] =
          '${_normalGeneratedHeaderLines.join('\n')}\nexport "package:$dartPackage/flax_bindings.dart";\n';
      sourceExports[flaxCodegenPublicLibrary(
        'app',
      )] = sourceExports[flaxCodegenPublicLibrary('app')]!.replaceFirst(
        'show appBindings, appPlugin',
        'show ${configs.expand((c) => ['${c.name}Bindings', '${c.name}Plugin']).join(', ')}',
      );
    }
    for (final output in {
      ...sourceExports.keys,
      if (useDefaults) ...flaxCodegenDefaultOutputs,
    }) {
      final absolute = p.join(located.packageRoot, output);
      if (files.isFile(absolute) &&
          !files
              .read(absolute)
              .startsWith(_normalGeneratedHeaderLines.join('\n'))) {
        throw FlaxCodegenException([
          _outputDiagnostic(
            absolute,
            'Refusing to replace a non-generated annotation binding output.',
          ),
        ]);
      }
    }
    final frozenModels = _freezeLocalModels(
      configs: configs,
      parsedModels: parsedModels,
      resolved: resolved,
      sourceCarriers: carriers,
      dartPackage: dartPackage,
      defaultLayout: useDefaults,
    );
    final dartLibraries = {
      for (final (index, model) in frozenModels.indexed)
        model.moduleId!: (
          library: parsedModels[index].library,
          types: Map<String, String>.unmodifiable(
            parsedModels[index].typeLibraries,
          ),
        ),
    };
    final modulesByName = <String, FlaxCodegenModuleModel>{
      for (final module in frozenModels) module.name: module,
    };
    final manifest = FlaxCodegenManifest.fromResolved(
      package: resolved,
      modules: modulesByName,
      importPackageNames: directDependencies.keys.toList()..sort(),
      localDependencySources: _localDependencySources(
        resolved,
        configs,
        metadata,
      ),
      source: p.join(located.packageRoot, 'bindings', 'manifest.json'),
    );
    final projection = FlaxCodegenManifestProjection(
      root: manifest,
      directDependencies: directDependencies,
      source: p.join(located.packageRoot, 'bindings', 'manifest.json'),
    );
    final outputInventory = _planValidationInventory(
      modules: frozenModels,
      packageRoot: located.packageRoot,
      additionalDartSources: sourceExports,
      jsBuildPlan: metadata.typesSdk != null || useDefaults,
    );
    final planPath = p.join(located.packageRoot, flaxCodegenJsBuildPlan);
    if ((sourceExports.isNotEmpty || metadata.typesSdk != null) &&
        files.isFile(planPath)) {
      if (!_isGeneratedJsBuildPlan(files.read(planPath))) {
        throw FlaxCodegenException([
          _outputDiagnostic(
            planPath,
            'Refusing to replace a non-generated JS build plan.',
          ),
        ]);
      }
    }
    for (final config in configs.where((config) => config.sources != null)) {
      for (final path in [config.dartOutput, config.tsOutput]) {
        final absolute = p.join(located.packageRoot, path);
        if (files.isFile(absolute) &&
            !files
                .read(absolute)
                .startsWith(_normalGeneratedHeaderLines.join('\n'))) {
          throw FlaxCodegenException([
            _outputDiagnostic(
              absolute,
              'Refusing to replace a non-generated annotation binding output. Configure a different output path.',
            ),
          ]);
        }
      }
    }
    return FlaxCodegenPackageValidation._(
      packageRoot: located.packageRoot,
      dartPackage: dartPackage,
      configPaths: configPaths,
      metadata: metadata,
      directDependencies: directDependencies,
      localModels: frozenModels,
      defaultLayout: useDefaults,
      sourceExports: sourceExports,
      dartLibraries: dartLibraries,
      resolvedPackage: resolved,
      manifest: manifest,
      projection: projection,
      outputInventory: useDefaults
          ? [
              ...flaxCodegenDefaultOutputs,
              'bindings/manifest.json',
              flaxCodegenJsBuildPlan,
            ]
          : outputInventory,
      skips: selectionSkips,
      notices: selectionNotices,
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
    final jsPackage = metadata.javascriptPackage ?? flaxCodegenDefaultJsPackage;
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

    final dartDependencies = _readPubspecDirectDependencyNames(
      root,
      requireFlax: !metadata.capabilities.contains('core'),
    );
    _validateGeneratedDependencies(
      metadata,
      dartDependencies,
      dartPackage,
      root,
    );
    final providerCandidates = _loadProviderCandidateProjections(
      imports: const [],
      dartDependencies: dartDependencies,
      packageRoots: packageConfig.roots,
      packageRoot: root,
      generateDependencies: metadata.generateDependencies,
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
      proposalParser.prepareModules(
        [
          for (final module in imported.values)
            _rewriteModuleIds(module, wireToRaw),
        ],
        dependencyTypeOwnerModules: _ownedTypeModulesFromProjections(
          providerCandidates,
        ),
        dependencyLocalViews: _localDependencyViewSources(providerCandidates),
      );
      await proposalParser.prepareDependencyPolicy(
        configs: [seed],
        generate: metadata.generateDependencies,
        packageRoots: packageConfig.roots,
      );
      proposal = await proposalParser.proposeLibrary(
        seed,
        overrides: overrides,
      );
    } on StateError catch (error) {
      throw FlaxCodegenException([
        _resolutionDiagnostic(library, error.message),
      ]);
    } finally {
      await proposalParser.dispose();
    }

    final config = proposal.config;
    final syntheticSource = p.join(root, 'bindings', '.auto-$name.yaml');
    final configs = [config];
    final configPaths = [syntheticSource];
    final selectionSkips = [...proposal.skips];
    final selectionNotices = [...proposal.notices];
    final parsedModels = await _parseLocalModules(
      workspaceRoot: packageConfig.workspaceRoot,
      packageRoot: root,
      configs: configs,
      configPaths: configPaths,
      directDependencies: providerCandidates,
      automaticTypeCarriers: [proposal.typeCarriers],
      selectionSkips: selectionSkips,
      selectionNotices: selectionNotices,
      generateDependencies: metadata.generateDependencies,
      packageRoots: packageConfig.roots,
    );
    final directDependencies = _selectDirectDependencyProjections(
      dartPackage: dartPackage,
      imports: const [],
      configs: configs,
      parsedModels: parsedModels,
      candidates: providerCandidates,
    );
    _validateProviderDelivery(root, directDependencies, packageConfig.roots);
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
      internalizeAutomaticTypes: true,
    );
    final modulesByName = <String, FlaxCodegenModuleModel>{
      for (final module in frozenModels) module.name: module,
    };
    final manifestPath = p.join(root, 'bindings', 'manifest.json');
    final manifest = FlaxCodegenManifest.fromResolved(
      package: resolved,
      modules: modulesByName,
      importPackageNames: directDependencies.keys.toList()..sort(),
      localDependencySources: _localDependencySources(
        resolved,
        configs,
        metadata,
      ),
      source: manifestPath,
    );
    final projection = FlaxCodegenManifestProjection(
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
      skips: selectionSkips,
      notices: selectionNotices,
    );
  }

  /// Read-only package check for one explicit direct bindings YAML.
  ///
  /// Validates once, plans expected Dart/TS/manifest bytes (formatting Dart only
  /// in a cleaned temporary directory outside the package), then compares the
  /// package filesystem without writing, renaming, deleting, or creating paths.
  static Future<FlaxCodegenPackageValidation> checkConfig(
    String? configPath, {
    String? packageRoot,
    FlaxCodegenProcessRunner? processRunner,
  }) async {
    final runner = processRunner ?? Process.run;
    final validation = await validateConfig(
      configPath,
      packageRoot: packageRoot,
      processRunner: runner,
    );
    await _checkValidation(validation, runner);
    return validation;
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
      jsBuildPlan: validation.outputInventory.contains(flaxCodegenJsBuildPlan),
      embedScopeSources: validation.defaultLayout,
      sourceExports: validation._sourceExports,
      dartLibraries: validation._dartLibraries,
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
      defaultLayout: validation.defaultLayout,
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
  /// files, replacements, the current Manifest, and owned orphan deletes in one
  /// transaction. All validation and generation finish before any package
  /// mutation. Symlink ancestors fail closed without writing. On install
  /// failure, the pre-install snapshot of affected paths is restored.
  ///
  /// After a successful generate, [checkConfig] on the same config succeeds
  /// without writes.
  static Future<FlaxCodegenPackageValidation> generateConfig(
    String? configPath, {
    String? packageRoot,
    FlaxCodegenProcessRunner? processRunner,
    FlaxCodegenInstallMutationProbe? beforeInstallMutation,
  }) async {
    final runner = processRunner ?? Process.run;
    final validation = await validateConfig(
      configPath,
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

  /// Plans tracked build outputs without installing files or spawning processes.
  static Future<Map<String, List<int>>> emitBuild(
    FlaxCodegenPackageValidation validation,
    FlaxCodegenBuildInputs inputs, {
    required String Function(String) formatDart,
  }) => _planExpectedPackageOutputs(
    packageRoot: validation.packageRoot,
    modules: validation.localModels,
    directDependencies: validation.directDependencies,
    manifest: validation.manifest,
    jsBuildPlan: validation.outputInventory.contains(flaxCodegenJsBuildPlan),
    embedScopeSources: validation.defaultLayout,
    sourceExports: validation._sourceExports,
    dartLibraries: validation._dartLibraries,
    processRunner: (_, _) =>
        throw StateError('Build emission cannot spawn processes.'),
    formatDart: formatDart,
    buildInputs: inputs,
  );

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
      jsBuildPlan: validation.outputInventory.contains(flaxCodegenJsBuildPlan),
      embedScopeSources: validation.defaultLayout,
      sourceExports: validation._sourceExports,
      dartLibraries: validation._dartLibraries,
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
      defaultLayout: validation.defaultLayout,
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
    Map<String, String> bindingEntrypoints = const {},
    String Function(String)? formatDart,
    Map<String, String> additionalDartSources = const {},
    Map<String, ({String library, Map<String, String> types})> dartLibraries =
        const {},
  }) async {
    final planned = _planOutputs(modules, packageRoot);
    final emitter = FlaxCodegenBindingEmitter(
      _orderedModules([...modules, ...additionalEmitterModules]),
      bindingEntrypoints: bindingEntrypoints,
      dartLibraries: dartLibraries,
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
      if (formatDart == null) {
        temporary = Directory.systemTemp.createTempSync('flax-pipeline-');
      }
      var dartIndex = 0;
      Future<void> emitDart(String path, String source) async {
        if (formatDart != null) {
          outputs[path] = utf8.encode(formatDart(source));
          return;
        }
        final staged = File(p.join(temporary!.path, '${dartIndex++}.dart'));
        staged.writeAsStringSync(source);
        try {
          final result = await _processRunner(Platform.resolvedExecutable, [
            'format',
            '--page-width=80',
            staged.path,
          ]);
          if (result.exitCode != 0) {
            formatFailures[path] =
                "Formatting failed for '$path' (exit code ${result.exitCode}).";
            return;
          }
          outputs[path] = List<int>.unmodifiable(
            utf8.encode(staged.readAsStringSync()),
          );
        } on ProcessException catch (error) {
          formatFailures[path] =
              "Formatting failed to start for '$path': ${error.message}.";
        }
      }

      final aggregated = <String>{};
      for (final entry in planned) {
        final module = entry.module;
        if (entry.isDart) {
          if (entry.path == flaxCodegenAggregateDart) {
            if (!aggregated.add(entry.path)) continue;
            await emitDart(
              entry.path,
              emitter.dartAggregate(
                modules.where((m) => m.dartOutput == entry.path).toList(),
              ),
            );
          } else {
            await emitDart(entry.path, emitter.dart(module));
          }
        } else {
          var source = typescript[module]![entry.path]!;
          if (outputs[entry.path] case final previous?) {
            final lines = {
              ...const LineSplitter().convert(utf8.decode(previous)),
              ...const LineSplitter().convert(source),
            };
            source = '${lines.join('\n')}\n';
          }
          outputs[entry.path] = List<int>.unmodifiable(utf8.encode(source));
        }
      }
      for (final entry in additionalDartSources.entries) {
        await emitDart(entry.key, entry.value);
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

List<String> _discoverBindingConfigs(
  String bindingsDirectory, {
  String? explicitConfig,
  _PackageInputFiles files = const _PackageInputFiles(),
}) {
  if (files.contents case final contents?) {
    return contents.keys
        .where(
          (path) =>
              p.dirname(path) == bindingsDirectory &&
              (flaxCodegenIsBindingConfigPath(path) || path == explicitConfig),
        )
        .toList()
      ..sort();
  }
  _rejectSymlinkPathComponents(bindingsDirectory);
  if (!Directory(bindingsDirectory).existsSync()) return [];
  final paths = <String>[];
  for (final entity in Directory(
    bindingsDirectory,
  ).listSync(followLinks: false)) {
    final path = p.normalize(entity.path);
    final type = FileSystemEntity.typeSync(path, followLinks: false);
    if (type != FileSystemEntityType.file) {
      continue;
    }
    if (!flaxCodegenIsBindingConfigPath(path) && path != explicitConfig) {
      continue;
    }
    paths.add(path);
  }
  paths.sort();
  return paths;
}

String _readPubspecPackageName(
  String packageRoot, {
  _PackageInputFiles files = const _PackageInputFiles(),
}) {
  final path = p.join(packageRoot, 'pubspec.yaml');
  final String contents;
  try {
    contents = files.read(path);
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

List<String> _readPubspecDirectDependencyNames(
  String packageRoot, {
  required bool requireFlax,
  _PackageInputFiles files = const _PackageInputFiles(),
}) {
  final path = p.join(packageRoot, 'pubspec.yaml');
  final Object? loaded;
  try {
    loaded = loadYaml(files.read(path), sourceUrl: Uri.file(path));
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
  if (dependencies != null && dependencies is! YamlMap) {
    throw FlaxCodegenException([
      _pathDiagnostic(path, 'Invalid Dart dependencies.'),
    ]);
  }
  final names = <String>[];
  for (final key in dependencies is YamlMap ? dependencies.keys : const []) {
    if (key is! String || key.isEmpty) {
      throw FlaxCodegenException([
        _pathDiagnostic(path, 'Invalid Dart dependency name.'),
      ]);
    }
    names.add(key);
  }
  names.sort();
  if (requireFlax && !names.contains('flax')) {
    throw FlaxCodegenException([
      _dependencyDiagnostic(path, 'Binding packages must depend on Dart flax.'),
    ]);
  }
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

Map<String, FlaxCodegenManifestProjection> _loadProviderCandidateProjections({
  required List<String> imports,
  required List<String> dartDependencies,
  required Map<String, String> packageRoots,
  required String packageRoot,
  _PackageInputFiles files = const _PackageInputFiles(),
  bool requireJavascript = true,
  List<String> generateDependencies = const [],
}) {
  final javascript = requireJavascript
      ? _declaredJavascriptDependencies(packageRoot, files: files)
      : const <String>{};
  for (final entry in packageRoots.entries) {
    if (entry.key == 'flax' ||
        dartDependencies.contains(entry.key) ||
        p.equals(entry.value, packageRoot)) {
      continue;
    }
    if (_declaresProviderMetadata(entry.value, javascript, files: files)) {
      throw FlaxCodegenException([
        _dependencyDiagnostic(
          p.join(packageRoot, 'pubspec.yaml'),
          'JavaScript types require the matching direct Dart binding dependency: ${entry.key}',
        ),
      ]);
    }
  }
  final cache = <String, FlaxCodegenManifestProjection>{};
  final diagnostics = <FlaxCodegenDiagnostic>[];
  final direct = <String, FlaxCodegenManifestProjection>{};
  final requiredImports = {
    ...imports,
    if (dartDependencies.contains('flax')) 'flax',
  };
  for (final name in requiredImports) {
    try {
      final projection = _loadManifestProjection(
        name,
        packageRoots: packageRoots,
        cache: cache,
        visiting: <String>{},
        files: files,
      );
      if (requireJavascript &&
          name != 'flax' &&
          !_declaresProviderTypes(projection, javascript)) {
        throw FlaxCodegenException([
          _dependencyDiagnostic(
            p.join(packageRoot, 'js-types/package.json'),
            'Missing direct JavaScript types dependency for binding provider $name',
          ),
        ]);
      }
      direct[name] = projection;
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
    if (!files.isFile(manifestPath) &&
        !_declaresProviderMetadata(root, javascript, files: files)) {
      continue;
    }
    try {
      final projection = _loadManifestProjection(
        name,
        packageRoots: packageRoots,
        cache: cache,
        visiting: <String>{},
        files: files,
      );
      if (!requireJavascript ||
          _declaresProviderTypes(projection, javascript)) {
        direct[name] = projection;
      }
    } on FlaxCodegenException {
      // Optional provider candidates are only authoritative once referenced.
      // An unrelated Dart dependency with stale Flax metadata must not make
      // this package invalid. A declared JS provider must not fail silently.
      // Raw-generation opt-in must not replace a broken existing provider.
      if (generateDependencies.contains(name) ||
          _declaresProviderMetadata(root, javascript, files: files)) {
        rethrow;
      }
    }
  }
  return direct;
}

bool _declaresProviderMetadata(
  String root,
  Set<String> javascript, {
  _PackageInputFiles files = const _PackageInputFiles(),
}) {
  if (javascript.isEmpty) return false;
  final path = p.join(root, 'flax_package.yaml');
  if (!files.isFile(path) && !files.isFile(p.join(root, 'pubspec.yaml'))) {
    return false;
  }
  try {
    final metadata = files.metadata(path);
    return metadata.capabilities.contains('bindings') &&
        javascript.contains(metadata.javascriptTypesPackage);
  } on FlaxCodegenException {
    return false;
  }
}

Set<String> _declaredJavascriptDependencies(
  String root, {
  List<String> manifests = const ['js-types/package.json', 'js/package.json'],
  _PackageInputFiles files = const _PackageInputFiles(),
}) {
  final result = <String>{};
  for (final relative in manifests) {
    final path = p.join(root, relative);
    if (!files.isFile(path)) continue;
    final value = jsonDecode(files.read(path));
    if (value is! Map) {
      throw FormatException('Expected npm package object', path);
    }
    for (final field in ['dependencies', 'peerDependencies']) {
      final dependencies = value[field];
      if (dependencies is Map) result.addAll(dependencies.keys.cast<String>());
    }
  }
  return result;
}

void _validateProviderDelivery(
  String packageRoot,
  Map<String, FlaxCodegenManifestProjection> selected,
  Map<String, String> roots, {
  _PackageInputFiles files = const _PackageInputFiles(),
}) {
  final runtime = _declaredJavascriptDependencies(
    packageRoot,
    manifests: ['js/package.json'],
    files: files,
  );
  final typeDependencies = {
    'js/package.json': runtime,
    if (files.isFile(p.join(packageRoot, 'js-types/package.json')))
      'js-types/package.json': _declaredJavascriptDependencies(
        packageRoot,
        manifests: ['js-types/package.json'],
        files: files,
      ),
  };
  for (final name in selected.keys.where((name) => name != 'flax')) {
    final metadata = files.metadata(p.join(roots[name]!, 'flax_package.yaml'));
    if (metadata.javascriptRuntimePackage == null ||
        !runtime.contains(metadata.javascriptRuntimePackage)) {
      throw FlaxCodegenException([
        _dependencyDiagnostic(
          p.join(packageRoot, 'js/package.json'),
          'Missing JavaScript runtime dependency for binding provider $name: '
          '${metadata.javascriptRuntimePackage ?? "javascript.package"}',
        ),
      ]);
    }
    for (final entry in typeDependencies.entries) {
      if (metadata.javascriptTypesPackage == null ||
          !entry.value.contains(metadata.javascriptTypesPackage)) {
        throw FlaxCodegenException([
          _dependencyDiagnostic(
            p.join(packageRoot, entry.key),
            'Missing JavaScript types dependency for binding provider $name: '
            '${metadata.javascriptTypesPackage ?? "javascript.types"}',
          ),
        ]);
      }
    }
  }
}

bool _declaresProviderTypes(
  FlaxCodegenManifestProjection projection,
  Set<String> dependencies,
) {
  String packageName(String specifier) {
    final segments = specifier.split('/');
    return segments.take(specifier.startsWith('@') ? 2 : 1).join('/');
  }

  return projection.manifest.modules.any((module) {
    final model = module.model.module;
    return [
      model.jsPackage,
      ...model.publicLibraries.map((r) => r.jsPackage),
    ].any((specifier) => dependencies.contains(packageName(specifier)));
  });
}

Map<String, FlaxCodegenManifestProjection> _selectDirectDependencyProjections({
  required String dartPackage,
  required List<String> imports,
  required List<FlaxCodegenModuleModel> parsedModels,
  required List<FlaxCodegenBindingConfig> configs,
  required Map<String, FlaxCodegenManifestProjection> candidates,
}) {
  final localIds = <String>{};
  for (final (index, module) in parsedModels.indexed) {
    for (final type in module.classes) {
      final selection = configs[index].classes[type.name];
      if (selection != null && !flaxCodegenIsStateVariantOverlay(selection)) {
        localIds.add(type.id);
        localIds.addAll(type.staticFunctions.map((operation) => operation.id));
      }
    }
    localIds.addAll(module.functions.map((function) => function.id));
    localIds.addAll(
      module.extensions
          .where((extension) => !extension.isReference)
          .expand((extension) => extension.members.map((member) => member.id)),
    );
    localIds.addAll(
      (module.topLevel?.getters ?? <FlaxCodegenTopLevelGetterModel>[])
          .where((getter) => !getter.isReference)
          .map((getter) => getter.id),
    );
    localIds.addAll(
      (module.topLevel?.setters ?? <FlaxCodegenTopLevelSetterModel>[])
          .where((setter) => !setter.isReference)
          .map((setter) => setter.id),
    );
  }
  final referenced = <FlaxCodegenSourceIdentity>{};
  for (final module in parsedModels) {
    _walkModuleEncodedIds(module, (rawId, kind, pointer) {
      final identity = _sourceIdentityFromRawId(rawId, kind);
      if (identity != null &&
          !localIds.contains(rawId) &&
          !_isPackageIdentity(identity, dartPackage)) {
        referenced.add(identity);
      }
    });
  }

  final selected = <String, FlaxCodegenManifestProjection>{};
  for (final name in candidates.keys.toList()..sort()) {
    final projection = candidates[name]!;
    if (name == 'flax' ||
        imports.contains(name) ||
        referenced.any(
          (identity) => _projectionProvides(projection, identity),
        )) {
      selected[name] = projection;
    }
  }
  return selected;
}

bool _projectionProvides(
  FlaxCodegenManifestProjection projection,
  FlaxCodegenSourceIdentity identity,
) {
  for (final manifest in projection.packageManifests) {
    for (final module in manifest.modules) {
      if (module.model.identities.any(
        (entry) =>
            entry.owner &&
            !entry.localDependency &&
            entry.sourceIdentity == identity,
      )) {
        return true;
      }
    }
  }
  return false;
}

FlaxCodegenManifestProjection _loadManifestProjection(
  String packageName, {
  required Map<String, String> packageRoots,
  required Map<String, FlaxCodegenManifestProjection> cache,
  required Set<String> visiting,
  _PackageInputFiles files = const _PackageInputFiles(),
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
    contents = files.read(manifestPath);
  } on FileSystemException {
    throw FlaxCodegenException([
      _resolutionDiagnostic(manifestPath, 'Cannot read file.'),
    ]);
  }
  final diagnostics = FlaxCodegenManifestDiagnostics(manifestPath);
  final manifest = FlaxCodegenManifest.parse(contents, diagnostics);
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
  final directDependencies = <String, FlaxCodegenManifestProjection>{};
  for (final importName in List<String>.of(manifest.imports)..sort()) {
    try {
      directDependencies[importName] = _loadManifestProjection(
        importName,
        packageRoots: packageRoots,
        cache: cache,
        visiting: {...visiting},
        files: files,
      );
    } on FlaxCodegenException catch (error) {
      childDiagnostics.addAll(error.diagnostics);
    }
  }
  if (childDiagnostics.isNotEmpty) {
    throw FlaxCodegenException(childDiagnostics);
  }
  final projection = FlaxCodegenManifestProjection(
    root: manifest,
    directDependencies: directDependencies,
    source: manifestPath,
  );
  cache[packageName] = projection;
  return projection;
}

Future<List<FlaxCodegenModuleModel>> _parseLocalModules({
  required String workspaceRoot,
  required String packageRoot,
  _PackageInputFiles files = const _PackageInputFiles(),
  FlaxCodegenLibraryResolver? libraryResolver,
  FlaxCodegenPublicLibraries? publicLibraries,
  required List<FlaxCodegenBindingConfig> configs,
  required List<String> configPaths,
  required Map<String, FlaxCodegenManifestProjection> directDependencies,
  List<Map<String, String>>? automaticTypeCarriers,
  List<FlaxCodegenSkip>? selectionSkips,
  List<FlaxCodegenNotice>? selectionNotices,
  List<String> generateDependencies = const [],
  Map<String, String> packageRoots = const {},
  FlaxCodegenBindingConfig Function(String)? createScope,
}) async {
  final parser = FlaxCodegenBindingParser(
    workspaceRoot,
    libraryResolver: libraryResolver,
    publicLibraries: publicLibraries,
  );
  try {
    try {
      if (configs.any((config) => config.sources != null)) {
        await parser.discoverAnnotationSources(
          configs,
          createScope: createScope,
          package: _readPubspecPackageName(packageRoot, files: files),
          sources: files.dartSources(packageRoot, {
            for (final config in configs) config.dartOutput,
            for (final config in configs.where(
              (config) => config.sources != null,
            ))
              'lib/flax_bindings/${config.name}.dart',
          }),
        );
      }
      while (configPaths.length < configs.length) {
        configPaths.add(
          p.join(
            packageRoot,
            'bindings',
            'flax_${configs[configPaths.length].name}.yaml',
          ),
        );
      }
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
      parser.prepareModules(
        prepared,
        dependencyTypeOwnerModules: _ownedTypeModulesFromProjections(
          directDependencies,
        ),
        dependencyLocalViews: _localDependencyViewSources(directDependencies),
      );
    } on StateError catch (error) {
      throw FlaxCodegenException([
        _dependencyDiagnostic(workspaceRoot, error.message),
      ]);
    }
    final models = <FlaxCodegenModuleModel>[];
    final rootModuleNames = configs.map((config) => config.name).toSet();
    final diagnostics = <FlaxCodegenDiagnostic>[];
    final carriersByModule = [
      for (var index = 0; index < configs.length; index++)
        automaticTypeCarriers?[index] ?? const <String, String>{},
    ];
    if (configs.any((config) => config.annotations)) {
      await parser.selectAnnotations(configs);
    }
    _applyPackageOverrides(configs, packageRoot, files: files);
    if (configs.any((config) => config.annotations)) {
      await parser.validateAnnotationMembers(configs);
      await parser.prepare(configs);
    }
    await parser.prepareDependencyPolicy(
      configs: configs,
      generate: generateDependencies,
      packageRoots: packageRoots,
    );
    await parser.preparePackage(configs);
    for (var index = 0; index < configs.length; index++) {
      try {
        if (configs[index].hasAutomaticSelection) {
          final proposal = await parser.proposeLibrary(
            configs[index],
            overrides: configs[index].overrides,
          );
          parser.validateAnnotationSelection(
            configs[index],
            proposal.config,
            proposal.skips,
          );
          configs[index] = proposal.config;
          carriersByModule[index] = {
            ...proposal.typeCarriers,
            ...carriersByModule[index],
          };
          selectionSkips?.addAll(proposal.skips);
          selectionNotices?.addAll(proposal.notices);
        }
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
    try {
      await parser.prepare(configs);
    } on StateError catch (error) {
      throw FlaxCodegenException([
        _dependencyDiagnostic(workspaceRoot, error.message),
      ]);
    }
    for (var index = 0; index < configs.length; index++) {
      try {
        models.add(
          await parser.parse(
            configs[index],
            automaticTypeCarriers: carriersByModule[index],
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
    if (diagnostics.isNotEmpty) throw FlaxCodegenException(diagnostics);
    var expanded = true;
    while (expanded) {
      expanded = false;
      for (final dependency in parser.dependencyConfigs(
        models,
        configs.first,
      )) {
        final seed = createScope == null
            ? dependency
            : dependency.copyWith(dartOutput: flaxCodegenAggregateDart);
        if (rootModuleNames.contains(seed.name)) {
          throw StateError(
            'Generated dependency module conflicts with ${seed.name}',
          );
        }
        final previous = configs.indexWhere(
          (config) => config.name == seed.name,
        );
        if (previous >= 0 &&
            configs[previous].classes.keys.toSet().containsAll(
              seed.classes.keys,
            )) {
          continue;
        }
        expanded = true;
        await parser.prepare([seed]);
        final proposal = await parser.proposeLibrary(seed);
        selectionSkips?.addAll(proposal.skips);
        selectionNotices?.addAll(proposal.notices);
        await parser.prepare([proposal.config]);
        final model = await parser.parse(
          proposal.config,
          automaticTypeCarriers: proposal.typeCarriers,
        );
        if (previous < 0) {
          configs.add(proposal.config);
          configPaths.add(
            p.join(p.dirname(configPaths.first), '.${seed.name}.yaml'),
          );
          models.add(model);
        } else {
          configs[previous] = proposal.config;
          models[previous] = model;
        }
      }
    }
    selectionSkips?.addAll(parser.automaticSkips);
    selectionNotices?.addAll(parser.automaticNotices);
    return models;
  } finally {
    await parser.dispose();
  }
}

Set<FlaxCodegenSourceIdentity> _localDependencySources(
  FlaxCodegenResolvedPackage resolved,
  List<FlaxCodegenBindingConfig> configs,
  FlaxCodegenPackageMetadataProjection metadata,
) {
  final local = {
    for (final name in metadata.generateDependencies) 'dependency_$name',
  };
  final sources = {
    for (final config in configs.where(
      (config) => !local.contains(config.name),
    ))
      for (final library in {
        config.library,
        ...config.additionalLibraries,
        ...config.publicLibraries.keys,
      })
        Uri.parse(library).pathSegments.firstOrNull,
  };
  bool localDependency(FlaxCodegenSourceIdentity source) {
    final uri = Uri.parse(source.originatingUri);
    return uri.scheme == 'package' &&
        metadata.generateDependencies.contains(uri.pathSegments.first) &&
        !sources.contains(uri.pathSegments.first);
  }

  return {
    for (final module in resolved.modules)
      for (final owner in module.owners)
        if (localDependency(owner.sourceIdentity)) owner.sourceIdentity,
  };
}

void _validateGeneratedDependencies(
  FlaxCodegenPackageMetadataProjection metadata,
  List<String> dependencies,
  String dartPackage,
  String root,
) {
  for (final name in metadata.generateDependencies) {
    if (name == dartPackage || name == 'flax' || !dependencies.contains(name)) {
      throw FlaxCodegenException([
        _dependencyDiagnostic(
          p.join(root, 'flax_package.yaml'),
          'bindingDependencies.generate requires a direct external Dart dependency: $name',
        ),
      ]);
    }
  }
}

void _applyPackageOverrides(
  List<FlaxCodegenBindingConfig> configs,
  String root, {
  _PackageInputFiles files = const _PackageInputFiles(),
}) {
  final path = p.join(root, 'bindings', _autoOverridesFilename);
  if (!files.isFile(path)) return;
  final shared = FlaxCodegenAutoOverrides.parseStrict(
    files.read(path),
    source: path,
  );
  for (var i = 0; i < configs.length; i++) {
    final config = configs[i];
    if (!config.hasAutomaticSelection) continue;
    final local = config.overrides;
    final classes = {...shared.classes, ...local.classes};
    final functions = {...shared.functions, ...local.functions};
    configs[i] = config.withOverrides(
      FlaxCodegenAutoOverrides(
        classes: {
          for (final entry in classes.entries)
            if (config.automaticLibrary ||
                config.classes.containsKey(entry.key))
              entry.key: entry.value,
        },
        functions: {
          for (final entry in functions.entries)
            if (config.automaticLibrary ||
                config.functions.containsKey(entry.key))
              entry.key: entry.value,
        },
        exclude: {...shared.exclude, ...local.exclude}.toList()..sort(),
      ),
    );
  }
}

FlaxCodegenResolvedPackage _resolveLocalOwnership({
  required String dartPackage,
  required FlaxCodegenPackageMetadataProjection metadata,
  required String packageRoot,
  required List<FlaxCodegenBindingConfig> configs,
  required List<String> configPaths,
  required List<FlaxCodegenModuleModel> parsedModels,
  required Map<String, FlaxCodegenManifestProjection> directDependencies,
}) {
  final automaticClaims = _automaticLocalDependencyClaims(
    dartPackage: dartPackage,
    configs: configs,
    configPaths: configPaths,
    parsedModels: parsedModels,
  );
  final importedTypeIds = _ownedTypeModulesFromProjections(directDependencies)
      .keys
      .toSet();
  final siblings = <FlaxCodegenSiblingModuleInput>[];
  final importedViews = {
    for (final projection in directDependencies.values)
      for (final manifest in projection.packageManifests)
        for (final module in manifest.modules)
          for (final identity in module.model.identities)
            if (identity.owner && identity.localDependency)
              identity.wireId.value: identity,
  };
  for (var index = 0; index < configs.length; index++) {
    siblings.add(
      _siblingInput(
        config: configs[index],
        source: configPaths[index],
        module: parsedModels[index],
        automaticClaims: automaticClaims[index] ?? const [],
        importedTypeIds: importedTypeIds,
        importedViews: importedViews,
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
      final selection = config.classes[type.name];
      if (selection != null && !flaxCodegenIsStateVariantOverlay(selection)) {
        add(type.id, FlaxCodegenDeclarationKind.type);
        for (final getter in type.staticGetters) {
          add(type.staticGetterId(getter), FlaxCodegenDeclarationKind.readonly);
        }
        for (final setter in type.staticSetters) {
          add(type.staticSetterId(setter), FlaxCodegenDeclarationKind.function);
        }
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
  FlaxCodegenManifestProjection projection,
) {
  final owners = <FlaxCodegenImportedOwner>[
    for (final module in projection.manifest.modules)
      for (final identity in module.model.identities)
        if (identity.owner)
          FlaxCodegenImportedOwner(
            sourceIdentity: identity.sourceIdentity,
            wireId: identity.wireId,
            localDependency: identity.localDependency,
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
  Set<String> importedTypeIds = const {},
  Map<String, FlaxCodegenManifestIdentity> importedViews = const {},
}) {
  final listing = <String, FlaxCodegenSourceIdentity>{};
  void claim(String name, String rawId, FlaxCodegenDeclarationKind kind) {
    final identity = _sourceIdentityFromRawId(rawId, kind);
    if (identity != null) {
      listing[name] = identity;
    }
  }

  for (final type in module.classes) {
    final selection = config.classes[type.name];
    if (selection != null && !flaxCodegenIsStateVariantOverlay(selection)) {
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
  for (final type in module.classes) {
    for (final accessor in [...type.staticGetters, ...type.staticSetters]) {
      final write = type.staticSetters.contains(accessor);
      final rawId = write
          ? type.staticSetterId(accessor)
          : type.staticGetterId(accessor);
      final identity = _sourceIdentityFromRawId(
        rawId,
        write
            ? FlaxCodegenDeclarationKind.function
            : FlaxCodegenDeclarationKind.readonly,
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
                  '/classes/${type.name}/${write ? 'staticSetters' : 'staticGetters'}/${accessor.name}',
            ),
          ),
        );
      }
    }
  }
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
  final seen = <(FlaxCodegenSourceIdentity, String?)>{};
  void addReference(
    String rawId,
    FlaxCodegenDeclarationKind kind,
    String pointer,
  ) {
    final view = importedViews[rawId];
    final identity =
        view?.sourceIdentity ?? _sourceIdentityFromRawId(rawId, kind);
    if (identity == null || !seen.add((identity, view?.wireId.value))) {
      return;
    }
    references.add(
      FlaxCodegenNominalReference(
        sourceIdentity: identity,
        targetWireId: view?.wireId,
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
    typeReferences: {
      for (final type in module.types)
        if (config.types.contains(type.name) &&
            importedTypeIds.contains(type.id))
          type.name,
    },
    // Parsed extension types have a public carrier, but no nominal owner.
    representationTypes: {
      for (final name in config.types)
        if (!listing.containsKey(name) &&
            module.typeLibraries.containsKey(name))
          name,
    },
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
    for (final type in module.classes)
      for (final getter in type.staticGetters) type.staticGetterId(getter),
    for (final getter
        in module.topLevel?.getters ?? <FlaxCodegenTopLevelGetterModel>[])
      getter.id,
  };
  void walk(Object? value, String pointer) {
    if (value is Map) {
      for (final entry in value.entries) {
        final key = entry.key as String;
        final childPointer = flaxCodegenManifestPointer(pointer, key);
        final child = entry.value;
        if (key == 'id' && child is String) {
          visit(
            child,
            readonlyIds.contains(child)
                ? FlaxCodegenDeclarationKind.readonly
                : functionIds.contains(child)
                ? FlaxCodegenDeclarationKind.function
                : FlaxCodegenDeclarationKind.type,
            childPointer,
          );
          continue;
        }
        if (child is String &&
            ((key == 'stateId' && childPointer.contains('/stateVariants/')) ||
                (key == 'sourceId' &&
                    childPointer.contains('/stateVariants/') &&
                    childPointer.contains('/interfaces/')))) {
          visit(child, FlaxCodegenDeclarationKind.type, childPointer);
          continue;
        }
        walk(child, childPointer);
      }
      return;
    }
    if (value is List) {
      for (var index = 0; index < value.length; index++) {
        walk(value[index], flaxCodegenManifestPointer(pointer, '$index'));
      }
    }
  }

  walk(FlaxCodegenManifestCodec.encodeModule(module), '');
}

Map<String, String> _localDependencyViewSources(
  Map<String, FlaxCodegenManifestProjection> dependencies,
) => {
  for (final projection in dependencies.values)
    for (final manifest in projection.packageManifests)
      for (final module in manifest.modules)
        for (final identity in module.model.identities)
          if (identity.owner && identity.localDependency)
            identity.wireId.value:
                '${identity.sourceIdentity.originatingUri}::${identity.sourceIdentity.name}',
};

Map<String, String> _wireIdToRawFromProjections(
  Map<String, FlaxCodegenManifestProjection> directDependencies,
) {
  final wireToRaw = <String, String>{};
  final localViews = _localDependencyViewSources(directDependencies);
  for (final projection in directDependencies.values) {
    for (final manifest in projection.packageManifests) {
      for (final module in manifest.modules) {
        for (final identity in module.model.identities) {
          if (localViews.containsKey(identity.wireId.value)) continue;
          wireToRaw[identity.wireId.value] =
              '${identity.sourceIdentity.originatingUri}::'
              '${identity.sourceIdentity.name}';
        }
      }
    }
  }
  return wireToRaw;
}

Map<String, String> _ownedTypeModulesFromProjections(
  Map<String, FlaxCodegenManifestProjection> directDependencies,
) {
  final candidates = <String, Set<String>>{};
  for (final projection in directDependencies.values) {
    for (final manifest in projection.packageManifests) {
      for (final module in manifest.modules) {
        for (final identity in module.model.identities) {
          if (!identity.owner ||
              identity.localDependency ||
              identity.sourceIdentity.kind != FlaxCodegenDeclarationKind.type) {
            continue;
          }
          final rawId =
              '${identity.sourceIdentity.originatingUri}::${identity.sourceIdentity.name}';
          candidates.putIfAbsent(rawId, () => {}).add(module.moduleId.value);
        }
      }
    }
  }
  final owners = <String, String>{};
  for (final entry in candidates.entries) {
    final owner =
        entry.value.where((id) => id.startsWith('flax.core/')).singleOrNull ??
        entry.value.singleOrNull;
    if (owner != null) owners[entry.key] = owner;
  }
  return owners;
}

FlaxCodegenModuleModel _rewriteModuleIds(
  FlaxCodegenModuleModel module,
  Map<String, String> idMap,
) {
  final rewritten = _rewriteIdEntries(
    FlaxCodegenManifestCodec.encodeModule(module),
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
      if ((key == 'id' || key == 'owner') &&
          child is String &&
          idMap.containsKey(child)) {
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
  final diagnostics = FlaxCodegenManifestDiagnostics('');
  final decoded = FlaxCodegenManifestCodec.decodeModule(
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
    stateVariants: module.stateVariants,
    sandboxRules: module.sandboxRules,
  );
}

FlaxCodegenModuleModel _snapshotModule(FlaxCodegenModuleModel module) =>
    _moduleFromEncoded(FlaxCodegenManifestCodec.encodeModule(module), module);

List<FlaxCodegenModuleModel> _freezeLocalModels({
  required List<FlaxCodegenBindingConfig> configs,
  required List<FlaxCodegenModuleModel> parsedModels,
  required FlaxCodegenResolvedPackage resolved,
  bool internalizeAutomaticTypes = false,
  Map<String, String> sourceCarriers = const {},
  String? dartPackage,
  bool defaultLayout = false,
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
  // References and local owners already select their package-scoped provider.
  // Imported alternatives must not overwrite that selection.
  for (final owner in resolved.importedOwners) {
    rawToWire.putIfAbsent(
      '${owner.sourceIdentity.originatingUri}::${owner.sourceIdentity.name}',
      () => owner.wireId.value,
    );
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
      _freezeModule(
        parsed,
        configs[index],
        {
          ...rawToWire,
          for (final reference in resolvedModule.references)
            '${reference.sourceIdentity.originatingUri}::${reference.sourceIdentity.name}':
                reference.ownerWireId.value,
          for (final owner in resolvedModule.owners)
            '${owner.sourceIdentity.originatingUri}::${owner.sourceIdentity.name}':
                owner.wireId.value,
        },
        resolvedModule,
        internalizeAutomaticTypes: internalizeAutomaticTypes,
        sourceCarriers: sourceCarriers,
        sourceLibrary:
            configs[index].sources == null ||
                defaultLayout && parsed.name != 'app'
            ? null
            : 'package:$dartPackage/flax_bindings/${parsed.name}.dart',
      ),
    );
  }
  return frozen;
}

FlaxCodegenModuleModel _freezeModule(
  FlaxCodegenModuleModel parsed,
  FlaxCodegenBindingConfig config,
  Map<String, String> rawToWire,
  FlaxCodegenResolvedModule resolvedModule, {
  required bool internalizeAutomaticTypes,
  required Map<String, String> sourceCarriers,
  String? sourceLibrary,
}) {
  final claimedNames = <String>{
    for (final entry in config.classes.entries)
      if (!flaxCodegenIsStateVariantOverlay(entry.value)) entry.key,
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
    final selection = config.classes[type.name];
    if (selection != null && !flaxCodegenIsStateVariantOverlay(selection)) {
      addExplicitType(type.id);
    }
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
    library: sourceLibrary ?? parsed.library,
    jsPackage: parsed.jsPackage,
    dartOutput: parsed.dartOutput,
    tsOutput: parsed.tsOutput,
    classes: [...parsed.classes, ...automaticClasses],
    sandboxRules: parsed.sandboxRules,
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
    typeLibraries: {
      for (final entry in parsed.typeLibraries.entries)
        entry.key:
            sourceCarriers['${entry.value}::${entry.key}'] ?? entry.value,
    },
    functions: parsed.functions,
    extensions: parsed.extensions,
    snapshots: parsed.snapshots,
    typedefs: parsed.typedefs,
    topLevel: parsed.topLevel,
    publicLibraries: parsed.publicLibraries,
    moduleId: resolvedModule.moduleId.value,
    requiredCapabilities: List<String>.of(resolvedModule.requiredCapabilities),
    internalTypeNames: internalizeAutomaticTypes
        ? {for (final identity in automaticTypeOwners) identity.name}
        : const <String>{},
    stateVariants: [
      for (final variant in parsed.stateVariants)
        FlaxCodegenStateVariantModel(
          name: variant.name,
          id: '${resolvedModule.moduleId.value}#stateVariant:${variant.name}',
          stateId: variant.stateId,
          stateWireId: rawToWire[variant.stateId] ?? variant.stateWireId,
          mixins: variant.mixins,
          interfaces: [
            for (final interface in variant.interfaces)
              FlaxCodegenStateInterfaceModel(
                name: interface.name,
                id: interface.id,
                library: interface.library,
                wireId: rawToWire[interface.id] ?? interface.wireId,
              ),
          ],
          getters: variant.getters,
          setters: variant.setters,
          methods: variant.methods,
          superMethods: variant.superMethods,
          mustCallSuperMethods: variant.mustCallSuperMethods,
          providerModule: resolvedModule.moduleId.value,
        ),
    ],
  );

  final rewritten = _rewriteIdEntries(
    FlaxCodegenManifestCodec.encodeModule(filtered),
    rawToWire,
  );
  return _moduleFromEncoded(rewritten, filtered);
}

List<String> _planValidationInventory({
  required List<FlaxCodegenModuleModel> modules,
  required String packageRoot,
  Map<String, String> additionalDartSources = const {},
  bool jsBuildPlan = false,
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
  for (final path in additionalDartSources.keys) {
    addCandidate(
      rawPath: path,
      label: 'annotation:publicLibrary',
      module: placeholder,
      isDart: true,
    );
  }
  addCandidate(
    rawPath: reservedPath,
    label: reservedLabel,
    module: placeholder,
    isDart: false,
  );
  if (additionalDartSources.isNotEmpty || jsBuildPlan) {
    addCandidate(
      rawPath: flaxCodegenJsBuildPlan,
      label: 'package:jsModules',
      module: placeholder,
      isDart: false,
    );
  }
  if (diagnostics.isNotEmpty) {
    throw FlaxCodegenException(diagnostics);
  }
  candidates.sort(_compareOutputCandidates);

  for (var index = 1; index < candidates.length; index++) {
    final current = candidates[index];
    for (var prior = index - 1; prior >= 0; prior--) {
      final previous = candidates[prior];
      if (previous.path != current.path) break;
      if (_sharesPublicLibrary(previous, current, packageRoot) ||
          previous.isDart &&
              current.isDart &&
              current.path == flaxCodegenAggregateDart) {
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
  }
  if (diagnostics.isNotEmpty) {
    throw FlaxCodegenException(diagnostics);
  }
  return candidates.map((candidate) => candidate.path).toSet().toList()..sort();
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
  required Map<String, FlaxCodegenManifestProjection> directDependencies,
  required FlaxCodegenManifest manifest,
  required FlaxCodegenProcessRunner processRunner,
  bool jsBuildPlan = false,
  bool embedScopeSources = false,
  String Function(String)? formatDart,
  FlaxCodegenBuildInputs? buildInputs,
  Map<String, String> sourceExports = const {},
  Map<String, ({String library, Map<String, String> types})> dartLibraries =
      const {},
}) async {
  final pipeline = FlaxCodegenPackagePipeline(
    packageRoot: packageRoot,
    processRunner: processRunner,
  );
  final emitted = await pipeline.emit(
    modules,
    formatDart: formatDart,
    additionalDartSources: sourceExports,
    dartLibraries: dartLibraries,
    additionalEmitterModules: _flattenedDependencyModules(directDependencies),
    bindingEntrypoints: _bindingEntrypoints(
      packageRoot,
      modules,
      directDependencies,
      files: _PackageInputFiles(buildInputs?.files),
      packageRoots: buildInputs?.packageRoots,
      localDependencyModules: {
        for (final module in manifest.modules)
          if (module.model.identities.any(
            (identity) => identity.owner && identity.localDependency,
          ))
            module.moduleId.value,
      },
    ),
  );
  final embedded = <String, String>{
    if (embedScopeSources)
      for (final entry in emitted.entries)
        if (entry.key.endsWith('.ts') &&
            entry.key != flaxCodegenTsOutput('app'))
          entry.key: utf8.decode(entry.value),
  };
  return {
    for (final entry in emitted.entries)
      if (!embedded.containsKey(entry.key)) entry.key: entry.value,
    'bindings/manifest.json': utf8.encode(manifest.encode()),
    if (sourceExports.isNotEmpty || jsBuildPlan)
      flaxCodegenJsBuildPlan: utf8.encode(
        _jsBuildPlan(
          packageRoot,
          modules,
          manifest,
          directDependencies,
          buildInputs,
          embedded: embedded,
          embedScopeSources: embedScopeSources,
        ),
      ),
  };
}

String _jsBuildPlan(
  String packageRoot,
  List<FlaxCodegenModuleModel> modules,
  FlaxCodegenManifest manifest,
  Map<String, FlaxCodegenManifestProjection> dependencies,
  FlaxCodegenBuildInputs? inputs, {
  Map<String, String> embedded = const {},
  bool embedScopeSources = false,
}) {
  final files = _PackageInputFiles(inputs?.files);
  final pubspec =
      loadYaml(files.read(p.join(packageRoot, 'pubspec.yaml'))) as Map;
  final roots =
      inputs?.packageRoots ??
      _readPackageConfigRoots(packageRoot, dartPackage: manifest.package).roots;
  final providers = <String>{'@flax/core-runtime'};
  for (final name in dependencies.keys.where((name) => name != 'flax')) {
    final runtime = files
        .metadata(p.join(roots[name]!, 'flax_package.yaml'))
        .javascriptRuntimePackage;
    if (runtime != null) providers.add(runtime);
  }
  final candidates = <Map<String, String>>[
    for (final module in modules)
      if (module.publicLibraries.isEmpty)
        {
          'specifier': module.jsPackage,
          'source': p.posix.joinAll(p.split(p.normalize(module.tsOutput))),
        }
      else
        for (final route in module.publicLibraries)
          {
            'specifier': route.jsPackage,
            'source': p.posix.joinAll(p.split(p.normalize(route.tsOutput))),
            'subpathRoot': p.posix.joinAll(
              p.split(p.dirname(p.normalize(route.tsOutput))),
            ),
          },
  ];
  final bySpecifier = <String, Map<String, String>>{};
  for (final entry in candidates) {
    final specifier = entry['specifier']!;
    final previous = bySpecifier[specifier];
    if (previous != null &&
        (previous['source'] != entry['source'] ||
            previous['subpathRoot'] != entry['subpathRoot'])) {
      throw FlaxCodegenException([
        _outputDiagnostic(
          flaxCodegenJsBuildPlan,
          'Conflicting generated JS entries for $specifier.',
        ),
      ]);
    }
    bySpecifier[specifier] = entry;
  }
  final entries = bySpecifier.values.toList()
    ..sort((a, b) => a['specifier']!.compareTo(b['specifier']!));
  final plan = {
    'formatVersion': 2,
    'generatedBy': 'flax_codegen',
    'package': manifest.package,
    'version': pubspec['version'] ?? '0.0.0',
    'modules': entries,
    'providers': providers.toList()..sort(),
    if (files.metadata(p.join(packageRoot, 'flax_package.yaml')).typesSdk
        case final sdk?)
      'typesSdk': _sdkBuildPlan(sdk, modules, manifest, dependencies),
    if (embedScopeSources) 'sources': embedded,
    'compilerOptions': {
      'paths': {
        for (final entry in entries)
          entry['specifier']!: ['../${entry['source']}'],
        for (final entry in entries)
          if (entry['subpathRoot'] != null)
            '${entry['specifier']}/*': ['../${entry['subpathRoot']}/*'],
      },
    },
  };
  return '${const JsonEncoder.withIndent('  ').convert(plan)}\n';
}

Map<String, Object?> _sdkBuildPlan(
  FlaxCodegenTypesSdkConfig sdk,
  List<FlaxCodegenModuleModel> modules,
  FlaxCodegenManifest manifest,
  Map<String, FlaxCodegenManifestProjection> dependencies,
) {
  final selected = modules.where((m) => sdk.scopes.contains(m.name)).toList();
  final entries = <String, String>{};
  final helpers = <String, String>{};
  for (final module in selected) {
    final routes = module.publicLibraries.isEmpty
        ? {module.jsPackage: module.tsOutput}
        : {
            for (final route in module.publicLibraries)
              route.jsPackage: route.tsOutput,
          };
    for (final entry in routes.entries) {
      final key = entry.key == sdk.name
          ? '.'
          : './${entry.key.substring(sdk.name.length + 1)}';
      entries[key] = entry.value;
      if (module.publicLibraries.isNotEmpty) {
        helpers[key == '.' ? './_bindings/*' : '$key/_bindings/*'] =
            '${p.posix.dirname(entry.value)}/_bindings/*.ts';
      }
    }
  }
  var sourceRoot = p.posix.dirname(entries.values.first);
  for (final source in entries.values) {
    while (sourceRoot != '.' && !p.posix.isWithin(sourceRoot, source)) {
      sourceRoot = p.posix.dirname(sourceRoot);
    }
  }
  final layout = FlaxCodegenTypesSdkLayout(sdk, entries, sourceRoot, helpers);
  final sources = {
    for (final module in selected) ...flaxCodegenTypescriptOutputPaths(module),
  }.toList()..sort();
  final packages = <String>{'@flax/core'};
  final imported = _flattenedDependencyModules(dependencies);
  for (final local in manifest.modules.where(
    (m) => sdk.scopes.contains(m.name),
  )) {
    for (final identity in local.model.identities.where((i) => !i.owner)) {
      for (final owner in imported.where(
        (m) => m.moduleId == identity.wireId.moduleId.value,
      )) {
        final name = identity.sourceIdentity.name
            .split('.')
            .first
            .replaceFirst(RegExp(r'=$'), '');
        final specifier = flaxCodegenTypescriptTypeSpecifier(owner, name);
        packages.add(
          specifier
              .split('/')
              .take(specifier.startsWith('@') ? 2 : 1)
              .join('/'),
        );
      }
    }
  }
  return {
    'name': sdk.name,
    'directory': sdk.directory,
    'exports': {
      for (final entry in layout.declarations.entries)
        entry.key: {'types': entry.value},
    },
    'files': [
      for (final source in sources)
        'types/${p.posix.withoutExtension(p.posix.relative(source, from: sourceRoot))}.d.ts',
    ],
    'dependencies': packages.toList()..sort(),
    'compilerConfig': {
      ...layout.compilerConfig,
      'files': [
        for (final source in sources)
          p.posix.relative(source, from: sdk.directory),
      ],
    },
  };
}

bool _isGeneratedJsBuildPlan(String source) {
  try {
    final data = jsonDecode(source);
    return data is Map && data['generatedBy'] == 'flax_codegen';
  } on FormatException {
    return false;
  }
}

Map<String, String> _bindingEntrypoints(
  String packageRoot,
  List<FlaxCodegenModuleModel> modules,
  Map<String, FlaxCodegenManifestProjection> dependencies, {
  required Set<String> localDependencyModules,
  _PackageInputFiles files = const _PackageInputFiles(),
  Map<String, String>? packageRoots,
}) {
  final package = _readPubspecPackageName(packageRoot, files: files);
  final roots =
      packageRoots ??
      _readPackageConfigRoots(packageRoot, dartPackage: package).roots;
  final result = <String, String>{
    for (final module in modules)
      if (localDependencyModules.contains(module.moduleId))
        module.moduleId!:
            'package:$package/${p.posix.joinAll(p.split(module.dartOutput).skip(1))}',
  };
  final seen = <String>{};
  for (final projection in dependencies.values) {
    for (final manifest in projection.packageManifests) {
      if (manifest.package == 'flax' || !seen.add(manifest.package)) continue;
      final root = roots[manifest.package];
      if (root == null) {
        throw StateError('Missing Dart binding provider ${manifest.package}');
      }
      for (final module in manifest.modules) {
        final library = module.dartLibrary;
        final uri = library == null ? null : Uri.parse(library);
        if (uri == null ||
            !files.isFile(
              p.joinAll([root, 'lib', ...uri.pathSegments.skip(1)]),
            )) {
          throw FlaxCodegenException([
            _dependencyDiagnostic(
              p.join(root, 'bindings/manifest.json'),
              'Missing generated Dart binding implementation: ${library ?? module.moduleId.value}',
            ),
          ]);
        }
        result[module.moduleId.value] = library!;
      }
    }
  }
  return result;
}

/// Unique dependency modules across direct projections, keyed by `moduleId`
/// (first package in sorted package-name order wins), returned in sorted
/// `moduleId` order.
List<FlaxCodegenModuleModel> _flattenedDependencyModules(
  Map<String, FlaxCodegenManifestProjection> directDependencies,
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
  bool defaultLayout = false,
}) {
  final orphans = <String>[];
  final plan = File(p.join(packageRoot, flaxCodegenJsBuildPlan));
  if (!expectedAbsolute.contains(plan.path) &&
      FileSystemEntity.typeSync(plan.path, followLinks: false) ==
          FileSystemEntityType.file &&
      _isGeneratedJsBuildPlan(plan.readAsStringSync())) {
    orphans.add(plan.path);
  }
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
      // The JS build owns default scope sources, including retired scopes.
      if (defaultLayout &&
          name.endsWith('.ts') &&
          p.isWithin(p.join(packageRoot, 'js/src/generated'), absolute)) {
        continue;
      }
      if (!_hasOwnedGeneratedHeader(File(absolute))) continue;
      orphans.add(absolute);
    }
  }

  walk(Directory(packageRoot));
  return orphans..sort();
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

bool _sharesPublicLibrary(
  _OutputCandidate left,
  _OutputCandidate right,
  String packageRoot,
) {
  if (left.isDart || right.isDart) return false;
  FlaxCodegenLibraryModel? route(_OutputCandidate candidate) => candidate
      .module
      .publicLibraries
      .where(
        (route) =>
            _normalizePackageRelativeOutput(route.tsOutput, packageRoot) ==
            candidate.path,
      )
      .firstOrNull;
  final a = route(left);
  final b = route(right);
  Set<String> exports(
    _OutputCandidate candidate,
    FlaxCodegenLibraryModel route,
  ) => {
    for (final name in route.exports)
      if (candidate.module.topLevel?.getters.any((g) => g.name == name) ==
              true ||
          candidate.module.topLevel?.setters.any((s) => s.name == name) ==
              true) ...[
        for (final getter in candidate.module.topLevel!.getters.where(
          (g) => g.name == name,
        ))
          getter.exportName,
        for (final setter in candidate.module.topLevel!.setters.where(
          (s) => s.name == name,
        ))
          setter.exportName,
      ] else ...[
        name,
        if (candidate.module.typedefs.any((alias) => alias.name == name))
          '${name}Input',
        for (final type in candidate.module.classes.where(
          (type) => type.name == name,
        ))
          if (type.jsName != null) type.jsName!,
      ],
  };
  return a != null &&
      b != null &&
      a.jsPackage == b.jsPackage &&
      exports(left, a).intersection(exports(right, b)).isEmpty;
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
    final current = candidates[index];
    for (var prior = index - 1; prior >= 0; prior--) {
      final previous = candidates[prior];
      if (previous.path != current.path) break;
      if (_sharesPublicLibrary(previous, current, packageRoot) ||
          previous.isDart &&
              current.isDart &&
              current.path == flaxCodegenAggregateDart) {
        continue;
      }
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
