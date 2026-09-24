import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;

import 'model.dart';

typedef CapabilityLog = void Function(String message);

/// Reconstructs a class selection saved by the stage 1 assessment JSON.
FlaxCodegenClassSelection? selectionFromJson(Object? raw) {
  if (raw is! Map) return null;
  return FlaxCodegenClassSelection(
    _stringListMap(raw['constructors']),
    kind: raw['kind'] as String?,
    typeArguments: _stringList(raw['typeArguments']),
    getters: _stringList(raw['getters']),
    setters: _stringList(raw['setters']),
    staticGetters: _stringList(raw['staticGetters']),
    instanceMethods: _stringListMap(raw['instanceMethods']),
    methods: _stringListMap(raw['methods']),
  );
}

/// Classifies a parse/emit error without treating pool misses as generator bugs.
String classifyCapabilityFailure(String error) {
  final text = error.split('\n').first;
  if (text.contains('Unknown adapted class') ||
      text.contains('must publicly export') ||
      text.contains('not exported by') ||
      text.contains('Unbound runtime type argument') ||
      text.contains('Cannot omit required') ||
      text.contains('Unknown selected parameter') ||
      text.contains('Unknown type adaptation') ||
      text.contains('prepared type pool') ||
      text.contains('Conflicting adaptation')) {
    return 'planner';
  }
  if (text.contains('Missing callback signature') ||
      text.contains('Callback metadata requires')) {
    return 'adapter';
  }
  if (text.contains('No selected value constructor implements')) {
    return 'emit_dependency';
  }
  if (text.contains('Unsupported core type') ||
      text.contains('does not satisfy') ||
      text.contains('Recursive generic') ||
      text.contains('Unsupported binding type') ||
      text.contains('Unsupported callback signature') ||
      text.contains('Unsupported getter type')) {
    return 'capability';
  }
  return 'generator';
}

final class Stage3Candidate {
  const Stage3Candidate({
    required this.id,
    required this.exportName,
    required this.kind,
    required this.proposeStatus,
    required this.inBatch,
    this.selection,
    this.attemptSelection,
  });

  final String id;
  final String exportName;
  final String kind;
  final String proposeStatus;
  final bool inBatch;
  final FlaxCodegenClassSelection? selection;
  final FlaxCodegenClassSelection? attemptSelection;

  Map<String, Object?> toJson() => {
    'id': id,
    'exportName': exportName,
    'kind': kind,
    'proposeStatus': proposeStatus,
    'inBatch': inBatch,
    'hasSelection': selection != null,
    'hasAttempt': attemptSelection != null,
  };
}

/// Builds the complete class/mixin candidate set. The denominator stays the
/// full inventory, including non-class declarations that cannot enter parse.
List<Stage3Candidate> stage3CandidatesFromDeclarations(
  List<Map<String, Object?>> declarations,
) {
  final candidates = <Stage3Candidate>[];
  for (final declaration in declarations) {
    final kind = declaration['kind'] as String? ?? '';
    if (kind != 'class' && kind != 'mixin' && kind != 'extensionType') {
      continue;
    }
    final assessment = declaration['assessment'];
    final status = assessment is Map
        ? assessment['status'] as String? ?? 'notRun'
        : 'notRun';
    final selection = assessment is Map
        ? selectionFromJson(assessment['selection'])
        : null;
    final inBatch =
        (status == 'complete' || status == 'partial') && selection != null;
    candidates.add(
      Stage3Candidate(
        id: declaration['id'] as String,
        exportName: declaration['name'] as String,
        kind: kind,
        proposeStatus: status,
        inBatch: inBatch,
        selection: inBatch ? selection : null,
        attemptSelection: status == 'unsupported'
            ? _attemptSelection(declaration)
            : null,
      ),
    );
  }
  return candidates;
}

List<Map<String, Object?>> stage3DeclarationMaps(LibraryInventory inventory) =>
    [
      for (final declaration in inventory.declarations)
        {
          'id': declaration.id,
          'name': declaration.name,
          'kind': declaration.kind,
          'exportNames': declaration.exportNames,
          'typeParameters': declaration.typeParameters,
          'declaredMembers': [
            for (final member in declaration.declaredMembers)
              {
                'kind': member.kind,
                'name': member.name,
                'parameters': [
                  for (final parameter in member.parameters)
                    {'name': parameter.name},
                ],
              },
          ],
          'assessment': declaration.assessment?.toJson(),
        },
    ];

List<Map<String, Object?>> stage3DeclarationMapsFromJson(
  Map<String, dynamic> inventory,
) {
  final declarations = inventory['declarations'] as List? ?? const [];
  return [
    for (final declaration in declarations)
      Map<String, Object?>.from(declaration as Map<dynamic, dynamic>),
  ];
}

String stage3DeclarationStatus(Map<String, Object?> declaration) {
  final assessment = declaration['assessment'];
  if (assessment is Map) {
    return assessment['status'] as String? ?? 'notRun';
  }
  return 'notRun';
}

/// Inventory identities that were not present in a generated module.
List<Map<String, Object?>> stage3NotGenerated({
  required List<Map<String, Object?>> declarations,
  required List<Stage3Candidate> candidates,
  required Iterable<String> generatedNames,
}) {
  final generated = generatedNames.toSet();
  final byName = {
    for (final candidate in candidates) candidate.exportName: candidate,
  };
  return [
    for (final declaration in declarations)
      if (!generated.contains(declaration['name']))
        {
          'id': declaration['id'],
          'exportName': declaration['name'],
          'kind': declaration['kind'],
          'proposeStatus':
              byName[declaration['name'] as String]?.proposeStatus ??
              stage3DeclarationStatus(declaration),
          'inBatch': byName[declaration['name'] as String]?.inBatch ?? false,
        },
  ];
}

List<String> stage3ModuleNames(FlaxCodegenModuleModel module) => [
  for (final type in module.classes) type.name,
  for (final type in module.types) type.name,
];

Map<String, FlaxCodegenClassSelection> stage3BatchClasses(
  List<Stage3Candidate> candidates,
) => {
  for (final candidate in candidates)
    if (candidate.inBatch && candidate.selection != null)
      candidate.exportName: candidate.selection!,
};

/// Selection for an explicit `--select-names` request (any propose status).
///
/// Prefers the recorded assessment selection; falls back to the same attempt
/// shape used for unsupported declarations (constructor parameters plus
/// `Object?` type arguments) so an `existingProvider`/`unsupported` candidate
/// can still be probed. Returns null when the declaration cannot be turned
/// into a selection.
FlaxCodegenClassSelection? stage3SelectionForDeclaration(
  Map<String, Object?> declaration,
) {
  final assessment = declaration['assessment'];
  if (assessment is Map) {
    final selection = selectionFromJson(assessment['selection']);
    if (selection != null) return selection;
  }
  return _attemptSelection(declaration);
}

/// Baseline Stage 3 library identity. The default triple keeps the recorded
/// foundation behavior and every existing command unchanged.
const foundationStage3Uri = 'package:flutter/foundation.dart';
const foundationStage3JsPackage = '@example/capability-foundation';
const foundationStage3Name = 'capability_foundation';

/// Derives a capability library triple from an arbitrary barrel URI, e.g.
/// `package:flutter/widgets.dart` -> `capability_widgets` /
/// `@example/capability-widgets`.
({String name, String jsPackage}) capabilityLibraryTripleFor(String uri) {
  final base = p.basenameWithoutExtension(uri);
  final sanitized = base.replaceAll(RegExp(r'[^A-Za-z0-9_]'), '_');
  return (
    name: 'capability_$sanitized',
    jsPackage: '@example/capability-${sanitized.replaceAll('_', '-')}',
  );
}

Future<Map<String, Object?>> runFoundationStage3({
  required String workspaceRoot,
  required List<Map<String, Object?>> declarations,
  required String outDir,
  required CapabilityLog log,
  bool compile = true,
  bool isolatePerClass = true,
  bool voidGetterRepro = true,
  Set<String> excludeFromBatch = const {},
  Set<String> excludeFromBatchKinds = const {},
  bool shrinkBatchOnFailure = false,
  String outputLabel = 'stage3',
  String libraryUri = foundationStage3Uri,
  String? jsPackage,
  String? libraryName,
  List<String> additionalLibraries = const [],
  Duration? analyzeTimeout,
  List<String> selectNames = const [],
  bool gapProbe = false,
  List<String> selectProbeNames = const [],
  bool soloParse = false,
  bool coreTypeProbe = false,
}) async {
  final official = FlaxCodegenBindingConfig.read(
    p.join(workspaceRoot, 'packages/flax/bindings/config.yaml'),
  );
  if (libraryUri != foundationStage3Uri && voidGetterRepro) {
    // The void-getter min-repro names foundation classes only.
    voidGetterRepro = false;
  }
  final triple = capabilityLibraryTripleFor(libraryUri);
  final library = FlaxCodegenBindingConfig(
    libraryName ??
        (libraryUri == foundationStage3Uri
            ? foundationStage3Name
            : triple.name),
    libraryUri,
    jsPackage ??
        (libraryUri == foundationStage3Uri
            ? foundationStage3JsPackage
            : triple.jsPackage),
    'unused.dart',
    'unused.ts',
    const {},
    additionalLibraries: additionalLibraries,
  );
  final denominator = declarations.length;
  final candidates = stage3CandidatesFromDeclarations(declarations);
  final batch = stage3BatchClasses(candidates);
  final excluded = <String>[];
  for (final name in excludeFromBatch) {
    if (batch.remove(name) != null) excluded.add(name);
  }
  final excludedKinds = <String>{};
  if (excludeFromBatchKinds.isNotEmpty) {
    for (final candidate in candidates) {
      if (!candidate.inBatch) continue;
      if (!excludeFromBatchKinds.contains(candidate.kind)) continue;
      if (batch.remove(candidate.exportName) != null) {
        excludedKinds.add(candidate.kind);
      }
    }
  }
  final declarationByName = <String, Map<String, Object?>>{
    for (final declaration in declarations)
      if (declaration['name'] is String)
        declaration['name'] as String: declaration,
  };
  final selectNameRequests = [...selectNames];
  final selectNameResolved = <String>[];
  final selectNameUnresolved = <String>[];
  final selectNameReAdded = <String>[];
  for (final name in selectNameRequests) {
    final declaration = declarationByName[name];
    final selection = declaration == null
        ? null
        : stage3SelectionForDeclaration(declaration);
    if (selection == null) {
      selectNameUnresolved.add(name);
      continue;
    }
    if (excluded.remove(name)) selectNameReAdded.add(name);
    batch[name] = selection;
    selectNameResolved.add(name);
  }
  final selectNamesReport = selectNameRequests.isEmpty
      ? null
      : <String, Object?>{
          'requested': selectNameRequests,
          'resolved': selectNameResolved,
          'reAdded': selectNameReAdded,
          'unresolved': selectNameUnresolved,
        };
  final declarationById = <String, Map<String, Object?>>{
    for (final declaration in declarations)
      if (declaration['id'] is String) declaration['id'] as String: declaration,
  };
  final byStatus = <String, int>{};
  for (final candidate in candidates) {
    byStatus[candidate.proposeStatus] =
        (byStatus[candidate.proposeStatus] ?? 0) + 1;
  }
  log(
    'Stage 3 $libraryUri: denominator=$denominator classLike=${candidates.length} '
    'batch=${batch.length} '
    'excluded=${excluded.isEmpty ? 'none' : excluded.join(',')} '
    'excludedKinds=${excludedKinds.isEmpty ? 'none' : (excludedKinds.toList()..sort()).join(',')}',
  );
  if (selectNameRequests.isNotEmpty) {
    log(
      '  selectNames resolved=${selectNameResolved.length}/${selectNameRequests.length} '
      'reAdded=${selectNameReAdded.isEmpty ? 'none' : selectNameReAdded.join(',')} '
      'unresolved=${selectNameUnresolved.isEmpty ? 'none' : selectNameUnresolved.join(',')}',
    );
  }

  final directory = Directory(p.join(outDir, outputLabel))
    ..createSync(recursive: true);
  final attempts = <Map<String, Object?>>[];

  log('Whole-batch parse of ${batch.length} proposed selections…');
  var batchParse = await parseClassSelectionSet(
    workspaceRoot: workspaceRoot,
    official: official,
    library: library,
    classes: batch,
    label: 'batch_proposed',
  );
  attempts.add(batchParse.toJson());
  log(
    '  batch ok=${batchParse.ok} ${batchParse.error ?? '${batchParse.names.length} classes'}',
  );

  Map<String, Object?>? voidGetter;
  if (voidGetterRepro && !batchParse.ok) {
    log('Void-getter combined min-repro…');
    voidGetter = await runVoidGetterMinRepro(
      workspaceRoot: workspaceRoot,
      batch: batch,
      log: log,
    );
  }

  Map<String, Object?>? batchMinRepro;
  if (!batchParse.ok && shrinkBatchOnFailure) {
    log('Shrinking the ${batch.length}-class batch to a minimal failing set…');
    final shrinkAttempts = <Map<String, Object?>>[];
    final minimal = await shrinkFailingNames(batch.keys.toList(), (
      names,
    ) async {
      final parsed = await parseClassSelectionSet(
        workspaceRoot: workspaceRoot,
        official: official,
        library: library,
        classes: {for (final name in names) name: batch[name]!},
        label: 'batch-shrink:${names.length}',
      );
      shrinkAttempts.add(parsed.toJson());
      return !parsed.ok;
    });
    log('  minimal failing set: ${minimal.join(", ")}');
    batchMinRepro = {
      'batchSize': batch.length,
      'minimalNames': minimal,
      'shrinkAttempts': shrinkAttempts,
    };
  }

  final perClass = <Map<String, Object?>>[];
  final successfulAlone = <String, FlaxCodegenClassSelection>{};
  if (!batchParse.ok && isolatePerClass) {
    var index = 0;
    for (final entry in batch.entries) {
      index++;
      if (index % 10 == 0 || index == batch.length) {
        log('  per-class $index/${batch.length}');
      }
      final parsed = await parseClassSelectionSet(
        workspaceRoot: workspaceRoot,
        official: official,
        library: library,
        classes: {entry.key: entry.value},
        label: 'per_class:${entry.key}',
      );
      perClass.add(parsed.toJson());
      if (parsed.ok) successfulAlone[entry.key] = entry.value;
    }
    log(
      'Per-class successes ${successfulAlone.length}/${batch.length}; retrying that subset together…',
    );
    final subsetParse = await parseClassSelectionSet(
      workspaceRoot: workspaceRoot,
      official: official,
      library: library,
      classes: successfulAlone,
      label: 'batch_successful_alone',
    );
    attempts.add(subsetParse.toJson());
    batchParse = subsetParse;
  }

  final unsupportedAttempts = <Map<String, Object?>>[];
  for (final candidate in candidates) {
    if (candidate.attemptSelection == null) continue;
    unsupportedAttempts.add(
      (await parseClassSelectionSet(
        workspaceRoot: workspaceRoot,
        official: official,
        library: library,
        classes: {candidate.exportName: candidate.attemptSelection!},
        label: 'unsupported_object:${candidate.exportName}',
      )).toJson(),
    );
  }
  final diagnosticable = batch['Diagnosticable'];
  if (diagnosticable != null) {
    unsupportedAttempts.add(
      (await parseClassSelectionSet(
        workspaceRoot: workspaceRoot,
        official: official,
        library: library,
        classes: {
          'Diagnosticable': diagnosticable,
          'DiagnosticableNode': const FlaxCodegenClassSelection(
            {
              '': ['name', 'value', 'style'],
            },
            kind: 'object',
            typeArguments: ['Diagnosticable'],
            getters: ['value', 'builder'],
          ),
        },
        label: 'unsupported_bound:DiagnosticableNode',
      )).toJson(),
    );
  }
  unsupportedAttempts.add(
    (await parseClassSelectionSet(
      workspaceRoot: workspaceRoot,
      official: official,
      library: library,
      classes: {
        'EnumProperty': const FlaxCodegenClassSelection(
          {
            '': ['name', 'value', 'defaultValue', 'level'],
          },
          kind: 'object',
          typeArguments: ['Enum'],
        ),
      },
      label: 'unsupported_bound:EnumProperty',
    )).toJson(),
  );

  Map<String, Object?> emit = {
    'ok': false,
    'skipped': true,
    'reason': 'no successful whole-batch module',
  };
  Map<String, Object?> compileResult = {
    'ok': false,
    'skipped': true,
    'reason': 'emit did not succeed',
  };
  var evidence = 'e1';
  Map<String, Object?>? gapProbeResult;
  if (batchParse.ok && batchParse.module != null) {
    log('Parsing official YAML for emit context…');
    final officialParse = await _parseOfficial(
      workspaceRoot: workspaceRoot,
      official: official,
    );
    attempts.add(officialParse.toJson());
    if (gapProbe) {
      log('Value-type emit gap probe…');
      gapProbeResult = stage3GapProbe(
        target: batchParse.module!,
        official: officialParse.module,
        declarationById: declarationById,
      );
      for (final mode in (gapProbeResult['modes'] as List)) {
        final row = Map<String, Object?>.from(mode as Map);
        final names = [
          for (final gap in row['gaps'] as List) (gap as Map)['name'],
        ];
        log(
          '  gap-probe ${row['mode']}: ${row['gapCount']} gaps '
          '${names.isEmpty ? '' : '[${names.join(", ")}]'}',
        );
      }
    }
    log('Emitting foundation subset…');
    emit = await emitModuleSet(
      target: batchParse.module!,
      official: officialParse.module,
      directory: directory.path,
    );
    if (emit['ok'] == true) evidence = 'e2';
    log('  emit ok=${emit['ok']} ${emit['error'] ?? emit['dartBytes']}');
    if (compile && emit['ok'] == true) {
      log('Whole-module Dart/TS compile…');
      compileResult = await compileEmitted(
        workspaceRoot: workspaceRoot,
        directory: directory.path,
        targetName: library.name,
        analyzeTimeout: analyzeTimeout,
      );
      if (compileResult['ok'] == true) evidence = 'e3';
      log(
        '  compile ok=${compileResult['ok']} ${compileResult['error'] ?? ''}',
      );
    }
  }

  List<Map<String, Object?>>? selectProbeRows;
  if (selectProbeNames.isNotEmpty) {
    log('Select probe of ${selectProbeNames.length} names…');
    selectProbeRows = await stage3SelectProbe(
      workspaceRoot: workspaceRoot,
      official: official,
      library: library,
      names: selectProbeNames,
      declarationByName: declarationByName,
      log: log,
    );
  }

  List<Map<String, Object?>>? soloParseRows;
  if (soloParse) {
    log('Solo parse of ${excluded.length} batch-excluded names…');
    soloParseRows = await stage3SoloParse(
      workspaceRoot: workspaceRoot,
      official: official,
      library: library,
      names: excluded,
      selectionByName: {
        for (final candidate in candidates)
          if (candidate.selection != null)
            candidate.exportName: candidate.selection!,
      },
      log: log,
    );
  }

  Map<String, Object?>? coreTypeProbeResult;
  if (coreTypeProbe) {
    coreTypeProbeResult = stage3CoreTypeProbe(declarations: declarations);
    log(
      '  core-type-probe: ${coreTypeProbeResult['diagnosticCount']} diagnostics / '
      '${coreTypeProbeResult['coreTypeCount']} core types / '
      '${coreTypeProbeResult['classCount']} classes',
    );
  }

  final generatedNames = batchParse.ok ? batchParse.names : const <String>[];
  final notGenerated = stage3NotGenerated(
    declarations: declarations,
    candidates: candidates,
    generatedNames: generatedNames,
  );
  final isolatedParsed = [
    for (final row in perClass)
      if (row['ok'] == true) row,
  ].length;
  final result = {
    'entry': library.library,
    'libraryName': library.name,
    'jsPackage': library.jsPackage,
    'outputLabel': outputLabel,
    'analyzeTimeoutMilliseconds': analyzeTimeout?.inMilliseconds,
    'denominator': denominator,
    'classLike': candidates.length,
    'batchRequested': batch.length,
    'batchExcluded': excluded,
    'batchExcludedKinds': excludedKinds.toList()..sort(),
    'batchParsed': generatedNames.length,
    'isolatedParsed': isolatedParsed,
    'isolatedFailed': perClass.length - isolatedParsed,
    'subset': generatedNames.length != denominator,
    'evidence': evidence.toUpperCase(),
    'proposeStatus': byStatus,
    'candidates': [for (final candidate in candidates) candidate.toJson()],
    'attempts': attempts,
    'perClass': perClass,
    'unsupportedAttempts': unsupportedAttempts,
    'selectNames': ?selectNamesReport,
    'voidGetterRepro': ?voidGetter,
    'batchMinRepro': ?batchMinRepro,
    'gapProbe': ?gapProbeResult,
    'selectProbe': ?selectProbeRows,
    'soloParse': ?soloParseRows,
    'coreTypeProbe': ?coreTypeProbeResult,
    'emit': emit,
    'compile': compileResult,
    'generatedNames': generatedNames,
    'notGenerated': notGenerated,
    'failureCategories': _countCategories([
      ...attempts,
      ...perClass,
      ...unsupportedAttempts,
      emit,
      compileResult,
    ]),
  };
  File(p.join(directory.path, 'result.json'))
      .writeAsStringSync(const JsonEncoder.withIndent('  ').convert(result));
  return result;
}

List<String> _stringList(Object? value) {
  if (value is! List) return const [];
  return [for (final item in value) item.toString()];
}

Map<String, List<String>> _stringListMap(Object? value) {
  if (value is! Map) return const {};
  return {
    for (final entry in value.entries)
      entry.key.toString(): _stringList(entry.value),
  };
}

FlaxCodegenClassSelection _attemptSelection(Map<String, Object?> declaration) {
  final constructors = <String, List<String>>{};
  for (final member in declaration['declaredMembers'] as List? ?? const []) {
    final map = Map<String, Object?>.from(member as Map);
    if (map['kind'] != 'constructor') continue;
    constructors[map['name'] as String? ?? ''] = [
      for (final parameter in map['parameters'] as List? ?? const [])
        (parameter as Map)['name'].toString(),
    ];
  }
  return FlaxCodegenClassSelection(
    constructors,
    kind: 'object',
    typeArguments: [
      for (final _ in declaration['typeParameters'] as List? ?? const [])
        'Object?',
    ],
  );
}

final class Stage3ParseResult {
  const Stage3ParseResult({
    required this.label,
    required this.ok,
    required this.elapsedMilliseconds,
    required this.names,
    this.module,
    this.error,
    this.category,
  });

  final String label;
  final bool ok;
  final int elapsedMilliseconds;
  final List<String> names;
  final FlaxCodegenModuleModel? module;
  final String? error;
  final String? category;

  Map<String, Object?> toJson() => {
    'label': label,
    'ok': ok,
    'elapsedMilliseconds': elapsedMilliseconds,
    'classCount': names.length,
    if (error != null) 'error': error,
    if (category != null) 'category': category,
    if (ok) 'classes': names,
  };
}

Future<Stage3ParseResult> parseClassSelectionSet({
  required String workspaceRoot,
  required FlaxCodegenBindingConfig official,
  required FlaxCodegenBindingConfig library,
  required Map<String, FlaxCodegenClassSelection> classes,
  required String label,
}) async {
  final parser = FlaxCodegenBindingParser(workspaceRoot);
  final stopwatch = Stopwatch()..start();
  try {
    await parser.prepare([official]);
    final module = await parser.parse(
      FlaxCodegenBindingConfig(
        library.name,
        library.library,
        library.jsPackage,
        library.dartOutput,
        library.tsOutput,
        classes,
        additionalLibraries: library.additionalLibraries,
      ),
    );
    return Stage3ParseResult(
      label: label,
      ok: true,
      elapsedMilliseconds: stopwatch.elapsedMilliseconds,
      names: stage3ModuleNames(module),
      module: module,
    );
  } on Object catch (error) {
    final message = error.toString().split('\n').first;
    return Stage3ParseResult(
      label: label,
      ok: false,
      elapsedMilliseconds: stopwatch.elapsedMilliseconds,
      names: const [],
      error: message,
      category: classifyCapabilityFailure(message),
    );
  } finally {
    parser.dispose();
  }
}

Future<Stage3ParseResult> _parseOfficial({
  required String workspaceRoot,
  required FlaxCodegenBindingConfig official,
}) async {
  final parser = FlaxCodegenBindingParser(workspaceRoot);
  final stopwatch = Stopwatch()..start();
  try {
    final module = await parser.parse(official);
    return Stage3ParseResult(
      label: 'official',
      ok: true,
      elapsedMilliseconds: stopwatch.elapsedMilliseconds,
      names: stage3ModuleNames(module),
      module: module,
    );
  } on Object catch (error) {
    final message = error.toString().split('\n').first;
    return Stage3ParseResult(
      label: 'official',
      ok: false,
      elapsedMilliseconds: stopwatch.elapsedMilliseconds,
      names: const [],
      error: message,
      category: classifyCapabilityFailure(message),
    );
  } finally {
    parser.dispose();
  }
}

Future<Map<String, Object?>> emitModuleSet({
  required FlaxCodegenModuleModel target,
  required FlaxCodegenModuleModel? official,
  required String directory,
}) async {
  Future<Map<String, Object?>> write(
    List<FlaxCodegenModuleModel> modules,
    String mode,
  ) async {
    final watch = Stopwatch()..start();
    final emitter = FlaxCodegenBindingEmitter(modules);
    final dart = emitter.dart(target);
    final targetTypescript = emitter.typescriptOutputs(target);
    final targetTsFiles = <String>[];
    File(p.join(directory, '${target.name}.dart')).writeAsStringSync(dart);
    final seenSpecifiers = <String>{};
    for (final module in modules) {
      if (module != target) {
        File(p.join(directory, '${module.name}.dart'))
            .writeAsStringSync(emitter.dart(module));
      }
      final outputs = module == target
          ? targetTypescript
          : emitter.typescriptOutputs(module);
      final specifiers = flaxCodegenTypescriptOutputSpecifiers(module);
      for (final entry in outputs.entries) {
        final specifier = specifiers[entry.key];
        if (specifier == null) {
          throw StateError(
            'Missing TypeScript specifier for ${module.name}: ${entry.key}',
          );
        }
        if (!seenSpecifiers.add(specifier)) {
          throw StateError('Duplicate TypeScript specifier: $specifier');
        }
        final path = _capabilityTypescriptPath(directory, specifier);
        final file = File(path)..parent.createSync(recursive: true);
        file.writeAsStringSync(entry.value);
        if (module == target) targetTsFiles.add(path);
      }
    }
    watch.stop();
    targetTsFiles.sort();
    return {
      'ok': true,
      'mode': mode,
      'dartBytes': utf8.encode(dart).length,
      'tsBytes': targetTypescript.values.fold<int>(
        0,
        (sum, source) => sum + utf8.encode(source).length,
      ),
      'emitMilliseconds': watch.elapsedMilliseconds,
      'emittedModules': [for (final module in modules) module.name],
      'dartPath': p.join(directory, '${target.name}.dart'),
      'tsPath': targetTsFiles.first,
      'tsPaths': targetTsFiles,
    };
  }

  try {
    return await write([target], 'subset_only');
  } on Object catch (error) {
    final subsetError = error.toString().split('\n').first;
    if (official == null ||
        classifyCapabilityFailure(subsetError) != 'emit_dependency') {
      return {
        'ok': false,
        'mode': 'subset_only',
        'error': subsetError,
        'category': classifyCapabilityFailure(subsetError),
      };
    }
    try {
      final emitted = await write([official, target], 'with_official');
      return {...emitted, 'subsetOnlyError': subsetError};
    } on Object catch (retry) {
      final message = retry.toString().split('\n').first;
      return {
        'ok': false,
        'mode': 'with_official',
        'error': message,
        'category': classifyCapabilityFailure(message),
        'subsetOnlyError': subsetError,
      };
    }
  }
}

Future<Map<String, Object?>> compileEmitted({
  required String workspaceRoot,
  required String directory,
  required String targetName,
  Duration? analyzeTimeout,
}) async {
  final dartFile = p.join(directory, '$targetName.dart');
  final sourceTsRoot = Directory(p.join(directory, '_typescript'));
  if (!File(dartFile).existsSync() || !sourceTsRoot.existsSync()) {
    return {
      'ok': false,
      'skipped': true,
      'reason': 'generated files missing',
      'category': 'environment',
    };
  }
  final compileDir = Directory(
    p.join(workspaceRoot, '.dart_tool', 'flax', 'capability-stage3'),
  )..createSync(recursive: true);
  for (final entity in Directory(directory).listSync(recursive: true)) {
    if (entity is! File) continue;
    if (!entity.path.endsWith('.dart') && !entity.path.endsWith('.ts')) {
      continue;
    }
    final relative = p.relative(entity.path, from: directory);
    final destination = File(p.join(compileDir.path, relative));
    destination.parent.createSync(recursive: true);
    destination.writeAsStringSync(entity.readAsStringSync());
  }
  final analyzed = await _runProcess(
    Platform.resolvedExecutable,
    ['analyze', compileDir.path],
    workingDirectory: workspaceRoot,
    timeout: analyzeTimeout,
  );
  final analyzeText = '${analyzed.stdout}\n${analyzed.stderr}';
  final dartClean = analyzed.exitCode == 0 && !analyzed.timedOut;
  final environment =
      analyzeText.contains('is not a Dart package') ||
      analyzeText.contains('does not belong') ||
      analyzeText.contains('No pubspec.yaml');
  final dartCounts = {
    'errors': _severityCount(analyzeText, 'error'),
    'warnings': _severityCount(analyzeText, 'warning'),
    'infos': _severityCount(analyzeText, 'info'),
  };
  final tsRoot = Directory(p.join(compileDir.path, '_typescript'));
  final tsFiles = [
    for (final entity in tsRoot.listSync(recursive: true))
      if (entity is File && entity.path.endsWith('.ts')) entity.path,
  ]..sort();
  if (tsFiles.isEmpty) {
    return {
      'ok': false,
      'skipped': true,
      'reason': 'generated TypeScript files missing',
      'category': 'environment',
    };
  }
  final dependencyPaths = <String, List<String>>{
    for (final file in tsFiles)
      _capabilitySpecifierForPath(tsRoot.path, file): [file],
  };
  final config = File(p.join(compileDir.path, 'tsconfig.json'))
    ..writeAsStringSync(
      jsonEncode({
        'compilerOptions': {
          'strict': true,
          'exactOptionalPropertyTypes': true,
          'noEmit': true,
          'target': 'ES2019',
          'lib': ['ES2022'],
          'module': 'NodeNext',
          'moduleResolution': 'NodeNext',
          'paths': {
            ...dependencyPaths,
            '@flax/core/bindings': [
              p.join(workspaceRoot, 'packages/flax/js/src/runtime/bindings.ts'),
            ],
          },
        },
        'files': tsFiles,
      }),
    );
  final compiled = await _runProcess(
    'pnpm',
    ['exec', 'tsc', '--project', config.path],
    workingDirectory: workspaceRoot,
    timeout: analyzeTimeout,
  );
  return {
    'ok': dartClean && compiled.exitCode == 0,
    'stage': 'dart+tsc',
    'dartExitCode': analyzed.exitCode,
    'dartErrors': dartCounts['errors'],
    'dartWarnings': dartCounts['warnings'],
    'dartInfos': dartCounts['infos'],
    'analyzeMilliseconds': analyzed.elapsedMilliseconds,
    if (analyzed.timedOut) 'dartTimedOut': true,
    if (!dartClean)
      'dartCategory': environment
          ? 'environment'
          : analyzed.timedOut
          ? 'budget-exceeded'
          : 'generator',
    if (!dartClean) 'dartError': _firstIssue(analyzeText),
    'tscExitCode': compiled.exitCode,
    'tscMilliseconds': compiled.elapsedMilliseconds,
    if (compiled.timedOut) 'tscTimedOut': true,
    if (compiled.exitCode != 0) 'error': _processError(compiled),
    if (compiled.exitCode != 0)
      'category': compiled.timedOut ? 'budget-exceeded' : 'generator',
    'tsconfig': config.path,
  };
}

String _capabilityTypescriptPath(String directory, String specifier) =>
    '${p.joinAll([directory, '_typescript', ...specifier.split('/')])}.ts';

String _capabilitySpecifierForPath(String root, String file) {
  final relative = p.relative(file, from: root);
  final withoutExtension = relative.substring(0, relative.length - 3);
  return p.split(withoutExtension).join('/');
}

/// Runs a process with an optional wall-clock budget. A timed-out process is
/// killed and reported as `timedOut`; it is never silently treated as success.
Future<_ProcessOutcome> _runProcess(
  String executable,
  List<String> arguments, {
  required String workingDirectory,
  Duration? timeout,
}) async {
  final watch = Stopwatch()..start();
  if (timeout == null) {
    final result = await Process.run(
      executable,
      arguments,
      workingDirectory: workingDirectory,
    );
    watch.stop();
    return _ProcessOutcome(
      exitCode: result.exitCode,
      stdout: '${result.stdout}',
      stderr: '${result.stderr}',
      elapsedMilliseconds: watch.elapsedMilliseconds,
    );
  }
  final process = await Process.start(
    executable,
    arguments,
    workingDirectory: workingDirectory,
  );
  final stdoutFuture = utf8.decodeStream(process.stdout);
  final stderrFuture = utf8.decodeStream(process.stderr);
  int exitCode;
  var timedOut = false;
  try {
    exitCode = await process.exitCode.timeout(timeout);
  } on TimeoutException {
    timedOut = true;
    process.kill(ProcessSignal.sigkill);
    exitCode = await process.exitCode;
  }
  watch.stop();
  return _ProcessOutcome(
    exitCode: exitCode,
    stdout: await stdoutFuture,
    stderr: await stderrFuture,
    elapsedMilliseconds: watch.elapsedMilliseconds,
    timedOut: timedOut,
  );
}

final class _ProcessOutcome {
  const _ProcessOutcome({
    required this.exitCode,
    required this.stdout,
    required this.stderr,
    required this.elapsedMilliseconds,
    this.timedOut = false,
  });

  final int exitCode;
  final String stdout;
  final String stderr;
  final int elapsedMilliseconds;
  final bool timedOut;
}

int _severityCount(String text, String severity) =>
    RegExp('^ *$severity -', multiLine: true).allMatches(text).length;

String _firstIssue(String text) {
  for (final line in text.split('\n')) {
    if (line.contains(' - ')) return line.trim();
  }
  return text.trim();
}

String _processError(_ProcessOutcome result) {
  final text = '${result.stdout}\n${result.stderr}'.trim();
  if (text.length <= 800) return text;
  return text.substring(0, 800);
}

Map<String, int> _countCategories(List<Map<String, Object?>> rows) {
  final counts = <String, int>{};
  for (final row in rows) {
    if (row['ok'] == true) continue;
    final category = row['category'] as String?;
    if (category == null) continue;
    counts[category] = (counts[category] ?? 0) + 1;
  }
  return counts;
}

/// Shrinks a failing name set with binary split, then single-item deletion.
Future<List<T>> shrinkFailingNames<T>(
  List<T> names,
  Future<bool> Function(List<T> subset) fails,
) async {
  var current = [...names];
  if (current.isEmpty || !await fails(current)) {
    return <T>[];
  }
  var changed = true;
  while (changed && current.length > 1) {
    changed = false;
    final mid = current.length ~/ 2;
    for (final part in [current.sublist(0, mid), current.sublist(mid)]) {
      if (part.isNotEmpty && await fails(part)) {
        current = part;
        changed = true;
        break;
      }
    }
    if (changed) continue;
    for (var i = 0; i < current.length; i++) {
      final trial = [...current]..removeAt(i);
      if (await fails(trial)) {
        current = trial;
        changed = true;
        break;
      }
    }
  }
  return current;
}

const voidGetterMergeHypothesis =
    'ErrorSpacer extends DiagnosticsProperty<void>; '
    'member merge copies the parent value getter, which is void on the subclass';

/// Classes dropped from the 72-class proposed batch to probe the labeled
/// 71-class subset. `ErrorSpacer` carries the combined void-getter merge
/// failure; it stays in the 170-identity denominator and in the inventory.
const foundationSubsetExclusions = {'ErrorSpacer'};

/// Foundation classes that reproduce the combined void-getter parse failure.
const voidGetterMergeSuspects = [
  'ErrorSpacer',
  'DiagnosticsProperty',
  'DiagnosticsNode',
];

/// Parses the ErrorSpacer / DiagnosticsProperty pair without the 72-class set.
Future<Map<String, Object?>> runVoidGetterMinRepro({
  required String workspaceRoot,
  required Map<String, FlaxCodegenClassSelection> batch,
  required CapabilityLog log,
}) async {
  final official = FlaxCodegenBindingConfig.read(
    p.join(workspaceRoot, 'packages/flax/bindings/config.yaml'),
  );
  final library = FlaxCodegenBindingConfig(
    'capability_foundation',
    'package:flutter/foundation.dart',
    '@example/capability-foundation',
    'unused.dart',
    'unused.ts',
    const {},
  );
  final present = [
    for (final name in voidGetterMergeSuspects)
      if (batch.containsKey(name)) name,
  ];
  final attempts = <Map<String, Object?>>[];

  Future<Stage3ParseResult> parseNamed(String label, List<String> names) async {
    final parsed = await parseClassSelectionSet(
      workspaceRoot: workspaceRoot,
      official: official,
      library: library,
      classes: {for (final name in names) name: batch[name]!},
      label: label,
    );
    attempts.add(parsed.toJson());
    log(
      '  $label ok=${parsed.ok} ${parsed.error ?? '${parsed.names.length} classes'}',
    );
    return parsed;
  }

  for (final name in present) {
    await parseNamed('alone:$name', [name]);
  }
  if (present.contains('ErrorSpacer') &&
      present.contains('DiagnosticsProperty')) {
    await parseNamed('pair:ErrorSpacer+DiagnosticsProperty', [
      'ErrorSpacer',
      'DiagnosticsProperty',
    ]);
  }
  if (present.contains('ErrorSpacer') && present.contains('DiagnosticsNode')) {
    await parseNamed('pair:ErrorSpacer+DiagnosticsNode', [
      'ErrorSpacer',
      'DiagnosticsNode',
    ]);
  }
  if (present.contains('DiagnosticsProperty') &&
      present.contains('DiagnosticsNode')) {
    await parseNamed('pair:DiagnosticsProperty+DiagnosticsNode', [
      'DiagnosticsProperty',
      'DiagnosticsNode',
    ]);
  }

  final shrinkAttempts = <Map<String, Object?>>[];
  final minimal = present.length < 2
      ? <String>[]
      : await shrinkFailingNames(present, (names) async {
          final parsed = await parseClassSelectionSet(
            workspaceRoot: workspaceRoot,
            official: official,
            library: library,
            classes: {for (final name in names) name: batch[name]!},
            label: 'shrink:${names.join("+")}',
          );
          shrinkAttempts.add(parsed.toJson());
          return !parsed.ok &&
              (parsed.error?.contains('Unsupported getter type') ?? false);
        });
  log('  minimal failing set: ${minimal.join(", ")}');
  return {
    'hypothesis': voidGetterMergeHypothesis,
    'suspects': present,
    'minimalNames': minimal,
    'attempts': attempts,
    'shrinkAttempts': shrinkAttempts,
  };
}

/// Collects every named type id a type reference mentions, recursively.
void _collectTypeRefIds(FlaxCodegenTypeRef? ref, Set<String> out) {
  if (ref == null) return;
  final id = ref.id;
  if (id != null) out.add(id);
  _collectTypeRefIds(ref.item, out);
  _collectTypeRefIds(ref.key, out);
  _collectTypeRefIds(ref.result, out);
  _collectTypeRefIds(ref.declaration, out);
  for (final argument in ref.dartArguments) {
    _collectTypeRefIds(argument, out);
  }
  for (final argument in ref.tsArguments) {
    _collectTypeRefIds(argument, out);
  }
  for (final parameter in ref.parameters) {
    _collectTypeRefIds(parameter.type, out);
  }
}

/// Named type ids mentioned anywhere in one selected class value.
Set<String> _classReferencedTypeIds(FlaxCodegenClassModel value) {
  final ids = <String>{};
  for (final constructor in value.constructors) {
    for (final parameter in constructor.parameters) {
      _collectTypeRefIds(parameter.type, ids);
    }
  }
  for (final getter in value.getters) {
    _collectTypeRefIds(getter.type, ids);
  }
  for (final setter in value.setters) {
    _collectTypeRefIds(setter.type, ids);
  }
  for (final getter in value.staticGetters) {
    _collectTypeRefIds(getter.type, ids);
  }
  for (final method in value.methods) {
    _collectTypeRefIds(method.result, ids);
    for (final parameter in method.parameters) {
      _collectTypeRefIds(parameter.type, ids);
    }
  }
  for (final type in value.superTypes) {
    _collectTypeRefIds(type, ids);
  }
  for (final type in value.widgetInterfaces) {
    _collectTypeRefIds(type, ids);
  }
  final callbacks = value.proxy?.callbacks;
  if (callbacks != null) {
    for (final (_, callback) in callbacks) {
      _collectTypeRefIds(callback, ids);
    }
  }
  return ids;
}

/// Read-only reimplementation of the emitter's value-type closure check
/// (`emitter.dart` `No selected value constructor implements`).
///
/// For each module set (`subset_only` = target only, `with_official` = official
/// + target) every non-enum type id referenced by `module.types` must be
/// implemented by a selected class (`id` or one of its `supertypes`) or covered
/// by a snapshot. The full gap list is reported, not just the first failure.
///
/// This never throws and never mutates modules, so it can run before or after
/// an actual emit attempt without changing any existing conclusion.
Map<String, Object?> stage3GapProbe({
  required FlaxCodegenModuleModel target,
  required FlaxCodegenModuleModel? official,
  required Map<String, Map<String, Object?>> declarationById,
}) {
  Set<String> coveredIds(Iterable<FlaxCodegenModuleModel> modules) => {
    for (final module in modules)
      for (final value in module.classes) ...[value.id, ...value.supertypes],
  };
  final officialCovered = official == null
      ? const <String>{}
      : coveredIds([official]);
  final modes = <String, List<FlaxCodegenModuleModel>>{
    'subset_only': [target],
    if (official != null) 'with_official': [official, target],
  };
  // Which selected target classes name each type, so a coverage-tradeoff
  // exclusion round can be planned without re-running the parse.
  final targetTypeIds = <String, Set<String>>{
    for (final value in target.classes)
      value.name: _classReferencedTypeIds(value),
  };
  final targetReferrers = <String, List<String>>{};
  for (final entry in targetTypeIds.entries) {
    for (final id in entry.value) {
      (targetReferrers[id] ??= <String>[]).add(entry.key);
    }
  }
  for (final value in targetReferrers.values) {
    value.sort();
  }
  final rows = <Map<String, Object?>>[];
  for (final entry in modes.entries) {
    final modules = entry.value;
    final types = <String, FlaxCodegenNamedTypeModel>{
      for (final module in modules)
        for (final type in module.types) type.id: type,
    };
    final snapshotIds = <String>{
      for (final module in modules) ...module.snapshots.map((s) => s.id),
    };
    final covered = coveredIds(modules);
    final typeLibraries = <String, String>{
      for (final module in modules) ...module.typeLibraries,
    };
    final gaps = <Map<String, Object?>>[];
    final ids = types.keys.toList()..sort();
    for (final id in ids) {
      final type = types[id]!;
      if (type.isEnum) continue;
      if (snapshotIds.contains(id)) continue;
      if (covered.contains(id)) continue;
      final declaration = declarationById[id];
      final assessment = declaration?['assessment'];
      final referencedBy = targetReferrers[id] ?? const <String>[];
      gaps.add({
        'name': type.name,
        'id': id,
        'typeLibrary': typeLibraries[id],
        'inInventory': declaration != null,
        'inventoryStatus': assessment is Map ? assessment['status'] : null,
        'officialCovered': officialCovered.contains(id),
        'referencedBy': referencedBy,
      });
    }
    rows.add({
      'mode': entry.key,
      'gapCount': gaps.length,
      'coveredTypeCount': types.length,
      'gaps': gaps,
    });
  }
  return {'modes': rows};
}

/// Single-class parse probe for explicit `--select-probe` names. This is the
/// only judgment for "can an explicit selection close this value-type gap".
Future<List<Map<String, Object?>>> stage3SelectProbe({
  required String workspaceRoot,
  required FlaxCodegenBindingConfig official,
  required FlaxCodegenBindingConfig library,
  required List<String> names,
  required Map<String, Map<String, Object?>> declarationByName,
  required CapabilityLog log,
}) async {
  final rows = <Map<String, Object?>>[];
  for (final name in names) {
    final declaration = declarationByName[name];
    if (declaration == null) {
      rows.add({
        'name': name,
        'selectable': false,
        'reason': 'not in inventory',
      });
      continue;
    }
    final selection = stage3SelectionForDeclaration(declaration);
    if (selection == null) {
      rows.add({
        'name': name,
        'selectable': false,
        'reason': 'no selection could be constructed',
      });
      continue;
    }
    final parsed = await parseClassSelectionSet(
      workspaceRoot: workspaceRoot,
      official: official,
      library: library,
      classes: {name: selection},
      label: 'select_probe:$name',
    );
    rows.add({
      'name': name,
      'selectable': parsed.ok,
      if (!parsed.ok) 'reason': parsed.error,
      if (!parsed.ok) 'category': parsed.category,
      'constructors': selection.constructors,
      'typeArguments': selection.typeArguments,
      'elapsedMilliseconds': parsed.elapsedMilliseconds,
    });
  }
  final selectable = rows.where((row) => row['selectable'] == true).length;
  log('  select-probe: $selectable/${names.length} selectable alone');
  return rows;
}

/// Single-class parse for `--solo-parse` names (typically `batchExcluded`).
/// Distinguishes `alone-fail` (the class itself cannot parse) from
/// `combined-only-fail` (it parses alone and only fails in combination).
Future<List<Map<String, Object?>>> stage3SoloParse({
  required String workspaceRoot,
  required FlaxCodegenBindingConfig official,
  required FlaxCodegenBindingConfig library,
  required List<String> names,
  required Map<String, FlaxCodegenClassSelection> selectionByName,
  required CapabilityLog log,
}) async {
  final rows = <Map<String, Object?>>[];
  for (final name in names) {
    final selection = selectionByName[name];
    if (selection == null) {
      rows.add({'name': name, 'ok': false, 'classification': 'no-selection'});
      continue;
    }
    final parsed = await parseClassSelectionSet(
      workspaceRoot: workspaceRoot,
      official: official,
      library: library,
      classes: {name: selection},
      label: 'solo:$name',
    );
    rows.add({
      'name': name,
      'ok': parsed.ok,
      'classification': parsed.ok ? 'combined-only-fail' : 'alone-fail',
      if (!parsed.ok) 'error': parsed.error,
      if (!parsed.ok) 'category': parsed.category,
    });
  }
  final aloneFail = rows
      .where((row) => row['classification'] == 'alone-fail')
      .length;
  log(
    '  solo-parse: $aloneFail alone-fail / '
    '${rows.where((row) => row['classification'] == 'combined-only-fail').length} '
    'combined-only-fail',
  );
  return rows;
}

/// Aggregates `unsupported_core_type` diagnostics by core type name. Pure
/// quantification: it neither fixes nor re-runs the assessment.
Map<String, Object?> stage3CoreTypeProbe({
  required List<Map<String, Object?>> declarations,
}) {
  const prefix = 'Unsupported core type: ';
  final byType = <String, Map<String, Object?>>{};
  final classes = <String>{};
  var diagnosticCount = 0;
  for (final declaration in declarations) {
    final assessment = declaration['assessment'];
    if (assessment is! Map) continue;
    final diagnostics = assessment['diagnostics'];
    if (diagnostics is! List) continue;
    for (final diagnostic in diagnostics) {
      if (diagnostic is! Map) continue;
      if (diagnostic['code'] != 'unsupported_core_type') continue;
      final message = diagnostic['message']?.toString() ?? '';
      final coreType = message.startsWith(prefix)
          ? message.substring(prefix.length).trim()
          : message;
      diagnosticCount++;
      classes.add(declaration['name'] as String);
      final entry = byType.putIfAbsent(
        coreType,
        () => {
          'coreType': coreType,
          'diagnosticCount': 0,
          'classes': <String>[],
          'targets': <String>[],
        },
      );
      entry['diagnosticCount'] = (entry['diagnosticCount'] as int) + 1;
      (entry['classes'] as List).add(declaration['name']);
      final target = diagnostic['target']?.toString();
      if (target != null) (entry['targets'] as List).add(target);
    }
  }
  final coreTypes = byType.values.toList()
    ..sort((a, b) {
      final byCount = (b['diagnosticCount'] as int).compareTo(
        a['diagnosticCount'] as int,
      );
      if (byCount != 0) return byCount;
      return (a['coreType'] as String).compareTo(b['coreType'] as String);
    });
  return {
    'diagnosticCount': diagnosticCount,
    'coreTypeCount': coreTypes.length,
    'classCount': classes.length,
    'coreTypes': coreTypes,
  };
}
