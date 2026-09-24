import 'dart:convert';
import 'dart:io';

import 'package:analyzer/dart/analysis/analysis_context_collection.dart';
import 'package:analyzer/dart/analysis/results.dart';
import 'package:analyzer/dart/element/element.dart';
import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;

import 'src/capability/assess.dart';
import 'src/capability/baseline.dart';
import 'src/capability/closure.dart';
import 'src/capability/inventory.dart';
import 'src/capability/libraries.dart';
import 'src/capability/measure.dart';
import 'src/capability/mechanisms.dart';
import 'src/capability/model.dart';
import 'src/capability/report.dart';
import 'src/capability/stage3.dart';
import 'src/capability/workspace.dart';

/// Capability inventory, stage 2 experiments, and foundation stage 3 parse/emit.
///
/// Usage from the repository root:
///   dart run packages/flax_codegen/tool/capability_verify.dart
///   dart run packages/flax_codegen/tool/capability_verify.dart --stage3-only
///   dart run packages/flax_codegen/tool/capability_verify.dart --void-getter-repro
///   dart run packages/flax_codegen/tool/capability_verify.dart --stage3-subset
///   dart run packages/flax_codegen/tool/capability_verify.dart --stage3-subset --exclude MessageProperty
///
/// Arbitrary barrel (auto full-mode probe):
///   dart run packages/flax_codegen/tool/capability_verify.dart --entry package:flutter/widgets.dart --skip-stage3 --out .local/flax-capability-widgets
///   dart run packages/flax_codegen/tool/capability_verify.dart --stage3-library package:flutter/widgets.dart --stage3-label widgets-batch --inventory .local/flax-capability-widgets/inventory.json --skip-kind mixin
///   dart run packages/flax_codegen/tool/capability_verify.dart --closure-probe
///   dart run packages/flax_codegen/tool/capability_verify.dart --closure-probe --closure-candidates .local/flax-capability-widgets-closure/blockers.txt --out .local/flax-capability-widgets-closure/probe-blockers
///   dart run packages/flax_codegen/tool/capability_verify.dart --stage3-library package:flutter/widgets.dart --stage3-label widgets-closure --inventory .local/flax-capability-widgets/inventory.json --stage3-additional-libraries package:flutter/rendering.dart,dart:ui --out .local/flax-capability-widgets-closure
///
/// Value-type emit closure probes (require `--stage3-library`):
///   --select-names `Name[,Name]`   merge explicit selections (any status) into
///                                 the batch; unresolved names are reported.
///   --gap-probe                   list every value-type the emitter would
///                                 reject, per emit mode (read-only).
///   --select-probe `Name[,Name]`   single-class parse to test whether an
///                                 explicit selection closes a gap.
///   --solo-parse                  single-class parse of the batch-excluded
///                                 names (alone-fail vs combined-only-fail).
///   --core-type-probe             aggregate `unsupported_core_type`
///                                 diagnostics by core type name.
///
/// Stage 2 remaining-mechanism matrix (verification only):
///   dart run packages/flax_codegen/tool/capability_verify.dart --stage2-mechanisms --out .local/flax-capability-stage2-mechanisms
///   Measures callback shapes, records, extension types, and class modifiers on
///   three layers (automatic `proposeSelection`, explicit YAML parse, best-effort
///   emit plus analyze/tsc). Mutually exclusive with every stage 3 / closure flag
///   and requires `--out`.
///
/// Flags that only affect the batch probe: `--isolate-per-class` parses each
/// candidate on its own after a failing batch (per-class failure histogram) and
/// `--no-shrink` skips the minimal-set search when the batch fails.
/// `--stage3-additional-libraries` adds public entries to the target config's
/// dependency closure; `--closure-probe` only reports which public entries can
/// carry the missing type names (repeat `--closure-candidates` to merge lists).
Future<void> main(List<String> args) async {
  final root = capabilityWorkspaceRoot();
  var entry = 'package:flutter/foundation.dart';
  var outDir = p.join(root, '.local/flax-capability');
  var skipAssess = false;
  var stage3Only = false;
  var skipStage3 = false;
  var skipCompile = false;
  var skipIsolation = false;
  var voidGetterReproOnly = false;
  var stage2Mechanisms = false;
  var outGiven = false;
  var stage3Subset = false;
  var isolatePerClass = false;
  var shrinkOnFailure = true;
  var closureProbe = false;
  final closureCandidatePaths = <String>[];
  String? stage3Library;
  String? stage3Label;
  String? inventoryOverride;
  Duration? analyzeTimeout;
  final extraExclusions = <String>{};
  final skipKinds = <String>{};
  final stage3AdditionalLibraries = <String>[];
  final selectNames = <String>[];
  var gapProbe = false;
  final selectProbeNames = <String>[];
  var soloParse = false;
  var coreTypeProbe = false;
  for (var i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--entry':
        entry = args[++i];
      case '--stage3-library':
        stage3Library = args[++i];
      case '--stage3-label':
        stage3Label = args[++i];
      case '--stage3-additional-libraries':
        stage3AdditionalLibraries.addAll(
          args[++i]
              .split(',')
              .map((value) => value.trim())
              .where((value) => value.isNotEmpty),
        );
      case '--inventory':
        inventoryOverride = args[++i];
      case '--analyze-timeout-ms':
        analyzeTimeout = Duration(milliseconds: int.parse(args[++i]));
      case '--out':
        outDir = args[++i];
        outGiven = true;
      case '--skip-assess':
        skipAssess = true;
      case '--stage3-only':
        stage3Only = true;
      case '--skip-stage3':
        skipStage3 = true;
      case '--skip-compile':
        skipCompile = true;
      case '--skip-isolation':
        skipIsolation = true;
      case '--isolate-per-class':
        isolatePerClass = true;
      case '--no-shrink':
        shrinkOnFailure = false;
      case '--void-getter-repro':
        voidGetterReproOnly = true;
      case '--stage2-mechanisms':
        stage2Mechanisms = true;
      case '--stage3-subset':
        stage3Subset = true;
      case '--closure-probe':
        closureProbe = true;
      case '--closure-candidates':
        closureCandidatePaths.add(args[++i]);
      case '--exclude':
        extraExclusions.addAll(args[++i].split(','));
      case '--skip-kind':
        skipKinds.addAll(args[++i].split(','));
      case '--select-names':
        selectNames.addAll(_csvList(args[++i]));
      case '--gap-probe':
        gapProbe = true;
      case '--select-probe':
        selectProbeNames.addAll(_csvList(args[++i]));
      case '--solo-parse':
        soloParse = true;
      case '--core-type-probe':
        coreTypeProbe = true;
      default:
        stderr.writeln('Unknown argument: ${args[i]}');
        exitCode = 64;
        return;
    }
  }

  final out = Directory(outDir)..createSync(recursive: true);
  if (voidGetterReproOnly) {
    await _runVoidGetterFromInventory(root: root, outDir: out.path);
    return;
  }

  if (stage2Mechanisms) {
    final anyStage3Flag =
        stage3Subset ||
        stage3Only ||
        skipStage3 ||
        skipCompile ||
        skipIsolation ||
        isolatePerClass ||
        !shrinkOnFailure ||
        stage3Library != null ||
        stage3Label != null ||
        stage3AdditionalLibraries.isNotEmpty ||
        closureProbe ||
        closureCandidatePaths.isNotEmpty ||
        extraExclusions.isNotEmpty ||
        skipKinds.isNotEmpty ||
        selectNames.isNotEmpty ||
        gapProbe ||
        selectProbeNames.isNotEmpty ||
        soloParse ||
        coreTypeProbe;
    final error = stage2MechanismsArgsError(
      stage2Mechanisms: stage2Mechanisms,
      anyStage3Flag: anyStage3Flag,
      outGiven: outGiven,
    );
    if (error != null) {
      stderr.writeln(error);
      exitCode = 64;
      return;
    }
    await runStage2Mechanisms(
      workspaceRoot: root,
      outDir: out.path,
      inventoryPath: _resolveInventoryPath(
        root,
        out.path,
        inventoryOverride ?? '.local/flax-capability-widgets/inventory.json',
      ),
      analyzeTimeout: analyzeTimeout,
      log: stdout.writeln,
    );
    return;
  }

  if (closureProbe) {
    await _runClosureProbe(
      root: root,
      outDir: out.path,
      inventoryPath: _resolveInventoryPath(
        root,
        out.path,
        inventoryOverride ?? '.local/flax-capability-widgets/inventory.json',
      ),
      candidatesPaths: [
        for (final path
            in closureCandidatePaths.isEmpty
                ? const [
                    '.local/flax-capability-widgets/exclude-missing-export.txt',
                  ]
                : closureCandidatePaths)
          p.isAbsolute(path) ? path : p.join(root, path),
      ],
    );
    return;
  }

  if (stage3Subset) {
    await _runStage3Subset(
      root: root,
      outDir: out.path,
      compile: !skipCompile,
      extraExclusions: extraExclusions,
      skipKinds: skipKinds,
      inventoryPath: _resolveInventoryPath(root, out.path, inventoryOverride),
      analyzeTimeout: analyzeTimeout,
    );
    return;
  }

  if (stage3Library != null) {
    await _runStage3ForLibrary(
      root: root,
      outDir: out.path,
      libraryUri: stage3Library,
      label:
          stage3Label ?? 'stage3-${p.basenameWithoutExtension(stage3Library)}',
      inventoryPath: _resolveInventoryPath(root, out.path, inventoryOverride),
      compile: !skipCompile,
      analyzeTimeout: analyzeTimeout,
      extraExclusions: extraExclusions,
      skipKinds: skipKinds,
      isolatePerClass: isolatePerClass,
      shrinkOnFailure: shrinkOnFailure,
      additionalLibraries: stage3AdditionalLibraries,
      selectNames: selectNames,
      gapProbe: gapProbe,
      selectProbeNames: selectProbeNames,
      soloParse: soloParse,
      coreTypeProbe: coreTypeProbe,
    );
    return;
  }

  if (extraExclusions.isNotEmpty || skipKinds.isNotEmpty) {
    stderr.writeln(
      '--exclude / --skip-kind require --stage3-subset or --stage3-library',
    );
    exitCode = 64;
    return;
  }

  if (selectNames.isNotEmpty ||
      gapProbe ||
      selectProbeNames.isNotEmpty ||
      soloParse ||
      coreTypeProbe) {
    stderr.writeln(
      '--select-names / --gap-probe / --select-probe / --solo-parse / '
      '--core-type-probe require --stage3-library',
    );
    exitCode = 64;
    return;
  }

  if (inventoryOverride != null && !stage2Mechanisms) {
    stderr.writeln('--inventory requires --stage3-library or --stage3-only');
    exitCode = 64;
    return;
  }

  if (stage3Only) {
    await _runOmitScale(root: root, outDir: out.path);
    await _runStage3FromInventory(
      root: root,
      outDir: out.path,
      compile: !skipCompile,
      isolatePerClass: !skipIsolation,
      inventoryPath: _resolveInventoryPath(root, out.path, inventoryOverride),
      analyzeTimeout: analyzeTimeout,
    );
    return;
  }

  final collection = AnalysisContextCollection(includedPaths: [root]);
  final parser = FlaxCodegenBindingParser(root);
  try {
    stdout.writeln('Capturing baseline…');
    final baseline = await captureBaseline(root);
    File(p.join(out.path, 'baseline.json'))
        .writeAsStringSync(prettyJson(baseline));

    stdout.writeln('Indexing Flutter public libraries…');
    final flutterLibraries = await indexFlutterPublicLibraries(
      collection: collection,
      workspaceRoot: root,
    );
    stdout.writeln('  ${flutterLibraries.length} public entries');
    File(p.join(out.path, 'libraries.json'))
        .writeAsStringSync(prettyJson({'flutterPublic': flutterLibraries}));

    stdout.writeln('Inventory $entry…');
    final inventory = await inventoryLibrary(
      collection: collection,
      uri: entry,
    );
    if (!inventory.resolved) {
      stderr.writeln(inventory.error);
      exitCode = 1;
      return;
    }
    stdout.writeln(
      '  ${inventory.declarations.length} identities in ${inventory.elapsedMilliseconds}ms',
    );

    if (!skipAssess) {
      final official = FlaxCodegenBindingConfig.read(
        p.join(root, 'packages/flax/bindings/config.yaml'),
      );
      final target = FlaxCodegenBindingConfig(
        'capability',
        entry,
        official.jsPackage,
        'unused.dart',
        'unused.ts',
        const {},
      );
      stdout.writeln('Isolated proposeSelection…');
      final isolatedParser = FlaxCodegenBindingParser(root);
      try {
        await _assess(
          parser: isolatedParser,
          library: target,
          inventory: inventory,
          collection: collection,
          label: 'isolated',
        );
      } finally {
        isolatedParser.dispose();
      }
      final isolatedById = {
        for (final declaration in inventory.declarations)
          declaration.id: declaration.assessment!,
      };

      stdout.writeln('Preparing official Flutter pool…');
      final officialParser = FlaxCodegenBindingParser(root);
      late final FlaxCodegenModuleModel officialModule;
      try {
        officialModule = await officialParser.parse(official);
      } finally {
        officialParser.dispose();
      }
      await parser.prepare([official]);
      final providerTypeNames = {
        ...official.callbackSnapshots.keys,
        ...official.types,
      };
      final providerTypes = [
        for (final type in officialModule.types)
          if (providerTypeNames.contains(type.name)) type,
      ];
      final typeOwnerModule = FlaxCodegenModuleModel(
        name: officialModule.name,
        library: officialModule.library,
        jsPackage: officialModule.jsPackage,
        dartOutput: officialModule.dartOutput,
        tsOutput: officialModule.tsOutput,
        classes: const [],
        types: providerTypes,
      );
      final ownerModuleId = typeOwnerModule.name;
      parser.prepareModules(
        [typeOwnerModule],
        dependencyTypeOwnerModules: {
          for (final type in providerTypes) type.id: ownerModuleId,
        },
      );
      stdout.writeln('Pooled proposeSelection…');
      await _assess(
        parser: parser,
        library: target,
        inventory: inventory,
        collection: collection,
        label: 'pooled',
      );
      for (final declaration in inventory.declarations) {
        final isolated = isolatedById[declaration.id];
        if (isolated != null && declaration.assessment != null) {
          declaration.assessment = mergeIsolated(
            declaration.assessment!,
            isolated,
          );
        }
      }
      stdout.writeln('Automatic proposeLibrary baseline…');
      final automaticBaseline = await parser.proposeLibrary(
        target,
        inferPublicTypeCarriers: false,
      );
      stdout.writeln('Automatic proposeLibrary with public carriers…');
      final automatic = await parser.proposeLibrary(target);
      applyAutomaticLibraryProposal(
        inventory: inventory,
        baselineProposal: automaticBaseline,
        proposal: automatic,
      );
    }

    final genericResults = await _fixtureProposals(
      parser: parser,
      collection: collection,
      root: root,
      filename: 'generic_cases.dart',
      names: const [
        'GenericBox',
        'NumericBox',
        'DependentBox',
        'RecursiveBox',
        'GenericMethods',
      ],
    );
    final defaultResults = await _defaultProposals(
      parser: parser,
      collection: collection,
      root: root,
    );
    final genericLibrary = FlaxCodegenBindingConfig(
      'capability',
      capabilityFixtureUri(root, 'generic_cases.dart'),
      '@example/capability',
      'unused.dart',
      'unused.ts',
      const {},
    );
    final defaultLibrary = FlaxCodegenBindingConfig(
      'capability',
      capabilityFixtureUri(root, 'default_cases.dart'),
      '@example/capability',
      'unused.dart',
      'unused.ts',
      const {},
    );
    stdout.writeln('Explicit YAML generic experiments…');
    final explicitGenerics = await runExplicitGenericExperiments(
      workspaceRoot: root,
      library: genericLibrary,
    );
    stdout.writeln('omitWhenAbsent emission scale…');
    final omitScale = await runOmitScaleExperiments(
      workspaceRoot: root,
      library: defaultLibrary,
    );
    _writeOmitScale(out.path, omitScale);

    final counts = countInventory(inventory);
    final insights = capabilityInsights(inventory);
    File(p.join(out.path, 'inventory.json'))
        .writeAsStringSync(prettyJson(inventory.toJson()));
    File(p.join(out.path, 'summary.json')).writeAsStringSync(
      prettyJson({
        'entry': entry,
        'counts': counts.toJson(),
        'insights': insights,
        'flutterPublicLibraries': flutterLibraries,
        'generics': genericResults,
        'defaults': defaultResults,
        'explicitGenerics': explicitGenerics,
        'omitScale': omitScale,
      }),
    );
    final markdown = capabilityMarkdown(
      baseline: baseline,
      inventory: inventory,
      counts: counts,
      genericResults: genericResults,
      defaultResults: defaultResults,
      flutterLibraries: flutterLibraries,
      insights: insights,
      explicitGenerics: explicitGenerics,
      omitScale: omitScale,
    );
    File(p.join(out.path, 'REPORT.md')).writeAsStringSync(markdown);
    stdout.writeln(markdown);
    if (!skipStage3) {
      await _runStage3(
        root: root,
        outDir: out.path,
        declarations: stage3DeclarationMaps(inventory),
        compile: !skipCompile,
      );
    }
    stdout.writeln('Wrote ${out.path}');
  } finally {
    parser.dispose();
    collection.dispose();
  }
}

Future<void> _runOmitScale({
  required String root,
  required String outDir,
}) async {
  stdout.writeln('omitWhenAbsent emission scale…');
  final defaultLibrary = FlaxCodegenBindingConfig(
    'capability',
    capabilityFixtureUri(root, 'default_cases.dart'),
    '@example/capability',
    'unused.dart',
    'unused.ts',
    const {},
  );
  final omitScale = await runOmitScaleExperiments(
    workspaceRoot: root,
    library: defaultLibrary,
  );
  _writeOmitScale(outDir, omitScale);
  for (final result in omitScale) {
    stdout.writeln(
      '  ${result['name']}: ok=${result['ok']} estimated=${result['estimated']} '
      'branches=${result['dartBranches']} dartBytes=${result['dartBytes']} '
      'emitMs=${result['emitMilliseconds']}'
      '${result['error'] != null ? ' error=${result['error']}' : ''}',
    );
  }
}

void _writeOmitScale(String outDir, List<Map<String, Object?>> omitScale) {
  File(p.join(outDir, 'omit-scale.json'))
      .writeAsStringSync(prettyJson({'omitScale': omitScale}));
  final summaryFile = File(p.join(outDir, 'summary.json'));
  if (!summaryFile.existsSync()) return;
  final decoded = jsonDecode(summaryFile.readAsStringSync());
  if (decoded is! Map) return;
  final summary = Map<String, Object?>.from(decoded);
  summary['omitScale'] = omitScale;
  summaryFile.writeAsStringSync(prettyJson(summary));
}

Future<void> _runVoidGetterFromInventory({
  required String root,
  required String outDir,
}) async {
  final inventoryFile = File(p.join(outDir, 'inventory.json'));
  if (!inventoryFile.existsSync()) {
    stderr.writeln(
      'Missing ${inventoryFile.path}. Run without --stage3-only first.',
    );
    exitCode = 1;
    return;
  }
  final decoded = jsonDecode(inventoryFile.readAsStringSync());
  if (decoded is! Map) {
    stderr.writeln('Invalid inventory JSON: ${inventoryFile.path}');
    exitCode = 1;
    return;
  }
  final declarations = stage3DeclarationMapsFromJson(
    Map<String, dynamic>.from(decoded),
  );
  final batch = stage3BatchClasses(
    stage3CandidatesFromDeclarations(declarations),
  );
  stdout.writeln('Void-getter min-repro from inventory batch=${batch.length}');
  final result = await runVoidGetterMinRepro(
    workspaceRoot: root,
    batch: batch,
    log: stdout.writeln,
  );
  File(p.join(outDir, 'void-getter-repro.json'))
      .writeAsStringSync(prettyJson(result));
  stdout.writeln(prettyJson(result));
}

Future<void> _runStage3FromInventory({
  required String root,
  required String outDir,
  required bool compile,
  bool isolatePerClass = true,
  required String inventoryPath,
  Duration? analyzeTimeout,
}) async {
  final declarations = _readInventoryDeclarationsAt(inventoryPath);
  if (declarations == null) return;
  await _runStage3(
    root: root,
    outDir: outDir,
    declarations: declarations,
    compile: compile,
    isolatePerClass: isolatePerClass,
    analyzeTimeout: analyzeTimeout,
  );
}

/// Read-only probe: can the missing-export type names be reached through the
/// fixed public entry set, and which entries carry them?
Future<void> _runClosureProbe({
  required String root,
  required String outDir,
  required String inventoryPath,
  required List<String> candidatesPaths,
}) async {
  stdout.writeln('Public closure probe');
  stdout.writeln('  candidates: ${candidatesPaths.join(', ')}');
  stdout.writeln('  inventory: $inventoryPath');
  await runClosureProbe(
    workspaceRoot: root,
    outDir: outDir,
    inventoryPath: inventoryPath,
    candidatesPaths: candidatesPaths,
    log: stdout.writeln,
  );
}

/// Runs the whole-batch Stage 3 path for an arbitrary barrel inventory.
///
/// This is the "auto full-mode" probe: the batch is every complete/partial
/// class-like selection in the inventory. A failing batch shrinks to a minimal
/// failing set so the residual failure class can be named instead of assumed.
Future<void> _runStage3ForLibrary({
  required String root,
  required String outDir,
  required String libraryUri,
  required String label,
  required String inventoryPath,
  required bool compile,
  Duration? analyzeTimeout,
  Set<String> extraExclusions = const {},
  Set<String> skipKinds = const {},
  bool isolatePerClass = false,
  bool shrinkOnFailure = true,
  List<String> additionalLibraries = const [],
  List<String> selectNames = const [],
  bool gapProbe = false,
  List<String> selectProbeNames = const [],
  bool soloParse = false,
  bool coreTypeProbe = false,
}) async {
  final declarations = _readInventoryDeclarationsAt(inventoryPath);
  if (declarations == null) return;
  stdout.writeln(
    'Stage 3 library $libraryUri label=$label'
    '${isolatePerClass ? ' isolatePerClass' : ''}'
    '${shrinkOnFailure ? '' : ' noShrink'}'
    '${extraExclusions.isEmpty ? '' : ' exclude=${extraExclusions.join(',')}'}'
    '${skipKinds.isEmpty ? '' : ' skipKinds=${skipKinds.join(',')}'}'
    '${additionalLibraries.isEmpty ? '' : ' additionalLibraries=${additionalLibraries.join(',')}'}',
  );
  await _runStage3(
    root: root,
    outDir: outDir,
    declarations: declarations,
    compile: compile,
    isolatePerClass: isolatePerClass,
    excludeFromBatch: extraExclusions,
    excludeFromBatchKinds: skipKinds,
    shrinkBatchOnFailure: shrinkOnFailure,
    label: label,
    libraryUri: libraryUri,
    additionalLibraries: additionalLibraries,
    analyzeTimeout: analyzeTimeout,
    selectNames: selectNames,
    gapProbe: gapProbe,
    selectProbeNames: selectProbeNames,
    soloParse: soloParse,
    coreTypeProbe: coreTypeProbe,
  );
}

List<String> _csvList(String raw) => [
  for (final value in raw.split(','))
    if (value.trim().isNotEmpty) value.trim(),
];

String _resolveInventoryPath(String root, String outDir, String? override) {
  if (override == null) return p.join(outDir, 'inventory.json');
  return p.isAbsolute(override) ? override : p.join(root, override);
}

List<Map<String, Object?>>? _readInventoryDeclarationsAt(String path) {
  final inventoryFile = File(path);
  if (!inventoryFile.existsSync()) {
    stderr.writeln(
      'Missing ${inventoryFile.path}. Run the inventory step first.',
    );
    exitCode = 1;
    return null;
  }
  final decoded = jsonDecode(inventoryFile.readAsStringSync());
  if (decoded is! Map) {
    stderr.writeln('Invalid inventory JSON: ${inventoryFile.path}');
    exitCode = 1;
    return null;
  }
  return stage3DeclarationMapsFromJson(Map<String, dynamic>.from(decoded));
}

/// Parses the complete+partial batch without the void-getter classes.
///
/// The denominator stays the full foundation inventory. A successful subset is
/// labeled `subset`; it is not whole-library E2.
Future<void> _runStage3Subset({
  required String root,
  required String outDir,
  required bool compile,
  Set<String> extraExclusions = const {},
  Set<String> skipKinds = const {},
  required String inventoryPath,
  Duration? analyzeTimeout,
}) async {
  final declarations = _readInventoryDeclarationsAt(inventoryPath);
  if (declarations == null) return;
  final exclusions = {...foundationSubsetExclusions, ...extraExclusions};
  stdout.writeln(
    'Stage 3 subset: excluding ${exclusions.join(', ')}'
    '${skipKinds.isEmpty ? '' : ' skipKinds=${skipKinds.join(',')}'}',
  );
  await _runStage3(
    root: root,
    outDir: outDir,
    declarations: declarations,
    compile: compile,
    isolatePerClass: false,
    excludeFromBatch: exclusions,
    excludeFromBatchKinds: skipKinds,
    shrinkBatchOnFailure: true,
    label: extraExclusions.isEmpty ? 'stage3-subset' : 'stage3-subset-void',
    analyzeTimeout: analyzeTimeout,
  );
}

Future<void> _runStage3({
  required String root,
  required String outDir,
  required List<Map<String, Object?>> declarations,
  required bool compile,
  bool isolatePerClass = true,
  Set<String> excludeFromBatch = const {},
  Set<String> excludeFromBatchKinds = const {},
  bool shrinkBatchOnFailure = false,
  String label = 'stage3',
  String libraryUri = foundationStage3Uri,
  List<String> additionalLibraries = const [],
  Duration? analyzeTimeout,
  List<String> selectNames = const [],
  bool gapProbe = false,
  List<String> selectProbeNames = const [],
  bool soloParse = false,
  bool coreTypeProbe = false,
}) async {
  final result = await runFoundationStage3(
    workspaceRoot: root,
    declarations: declarations,
    outDir: outDir,
    log: stdout.writeln,
    compile: compile,
    isolatePerClass: isolatePerClass,
    excludeFromBatch: excludeFromBatch,
    excludeFromBatchKinds: excludeFromBatchKinds,
    shrinkBatchOnFailure: shrinkBatchOnFailure,
    outputLabel: label,
    libraryUri: libraryUri,
    additionalLibraries: additionalLibraries,
    analyzeTimeout: analyzeTimeout,
    selectNames: selectNames,
    gapProbe: gapProbe,
    selectProbeNames: selectProbeNames,
    soloParse: soloParse,
    coreTypeProbe: coreTypeProbe,
  );
  File(p.join(outDir, '$label.json')).writeAsStringSync(prettyJson(result));
  final markdown = stage3Markdown(result);
  File(p.join(outDir, '${label.toUpperCase()}.md')).writeAsStringSync(markdown);
  stdout.writeln(markdown);
}

Future<void> _assess({
  required FlaxCodegenBindingParser parser,
  required FlaxCodegenBindingConfig library,
  required LibraryInventory inventory,
  required AnalysisContextCollection collection,
  required String label,
}) async {
  var done = 0;
  final total = inventory.declarations.length;
  for (final declaration in inventory.declarations) {
    done++;
    if (done % 25 == 0 || done == total) {
      stdout.writeln('  $label $done/$total');
    }
    declaration.assessment = await assessDeclaration(
      parser: parser,
      library: library,
      declaration: declaration,
      label: label,
      lookup: (current) async {
        final result = await resolveLibrary(collection, library.library);
        if (result is! LibraryElementResult) return null;
        for (final name in current.exportNames) {
          final element = result.element.exportNamespace.definedNames2[name];
          if (element != null) return element;
        }
        return null;
      },
    );
  }
}

Future<List<Map<String, Object?>>> _fixtureProposals({
  required FlaxCodegenBindingParser parser,
  required AnalysisContextCollection collection,
  required String root,
  required String filename,
  required List<String> names,
}) async {
  final uri = capabilityFixtureUri(root, filename);
  final config = FlaxCodegenBindingConfig(
    'capability',
    uri,
    '@example/capability',
    'unused.dart',
    'unused.ts',
    const {},
  );
  final results = <Map<String, Object?>>[];
  for (final name in names) {
    final result = await resolveLibrary(collection, uri);
    if (result is! LibraryElementResult) {
      results.add({
        'name': name,
        'bindable': false,
        'status': 'notRun',
        'detail': 'unresolved',
      });
      continue;
    }
    final element = result.element.exportNamespace.definedNames2[name];
    if (element is! InterfaceElement) {
      results.add({
        'name': name,
        'bindable': false,
        'status': 'notRun',
        'detail': 'missing',
      });
      continue;
    }
    try {
      final proposed = await parser.proposeSelection(element, library: config);
      results.add({
        'name': name,
        'bindable': proposed.bindable,
        'status': proposed.selection == null
            ? 'unsupported'
            : proposed.selection!.typeArguments.isEmpty
            ? 'proposed'
            : 'genericDefault',
        'detail': proposed.selection == null
            ? (proposed.skips.firstOrNull?.reason ?? 'unselected')
            : 'typeArguments=${proposed.selection!.typeArguments.join(',')}',
        'constructors': proposed.selection?.constructors,
        'skips': [for (final skip in proposed.skips) skip.reason],
      });
    } catch (error) {
      results.add({
        'name': name,
        'bindable': false,
        'status': 'unsupported',
        'detail': error.toString().split('\n').first,
      });
    }
  }
  return results;
}

Future<List<Map<String, Object?>>> _defaultProposals({
  required FlaxCodegenBindingParser parser,
  required AnalysisContextCollection collection,
  required String root,
}) async {
  final uri = capabilityFixtureUri(root, 'default_cases.dart');
  final config = FlaxCodegenBindingConfig(
    'capability',
    uri,
    '@example/capability',
    'unused.dart',
    'unused.ts',
    const {},
  );
  final results = <Map<String, Object?>>[];
  for (final name in ['Default3', 'Default6', 'Default8', 'Default10']) {
    final result = await resolveLibrary(collection, uri);
    if (result is! LibraryElementResult) continue;
    final element = result.element.exportNamespace.definedNames2[name];
    if (element is! InterfaceElement) continue;
    final proposed = await parser.proposeSelection(element, library: config);
    final selected = proposed.selection?.constructors[''] ?? const <String>[];
    results.add({
      'name': name,
      'bindable': proposed.bindable,
      'selected': selected.length,
      'dropped': [
        for (final skip in proposed.skips)
          if (skip.reason.contains('omitWhenAbsent cap')) skip.target,
      ].length,
      'capHit': proposed.skips.any(
        (skip) => skip.reason.contains('omitWhenAbsent cap'),
      ),
    });
  }
  return results;
}
