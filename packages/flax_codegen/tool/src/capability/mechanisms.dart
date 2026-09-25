// Stage 2 mechanism matrix (verification only).
//
// This probe measures callback shapes, records, extension types, and class
// modifiers. It changes no generator behaviour: every probe is read-only and
// every artifact is written under the caller's `--out` directory.
//
// Each shape is measured on three layers:
//   L1  `proposeSelection` (fail-open): can the automatic selector bind the
//       shape, and did it actually select the target member?
//   L2  explicit YAML parse (fail-closed): a hand-built class selection goes
//       through `parse`. The class-wide selection (constructors plus every
//       public member) mirrors what a human would write for one class.
//   L3  best-effort emit: only after L2 succeeds. `subset_only` first, then
//       `with_official` when the emitter reports an emit dependency, and then
//       `dart analyze` plus `tsc` through the shared stage 3 compile path.
//
// Verdict and reason vocabulary is shared with the declaration inventory:
// supported / limited / unsupported / excluded / environmentBlocked plus a
// structured reasonKind. There is no unassessed bucket.
//
// Evidence levels: L1/L2 only = E1, emit succeeds = E2, emit plus analyze with
// zero errors plus tsc = E3. Nothing here replaces barrel-level E2/E3.

import 'dart:convert';
import 'dart:io';

import 'package:analyzer/dart/analysis/analysis_context_collection.dart';
import 'package:analyzer/dart/analysis/results.dart';
import 'package:analyzer/dart/element/element.dart';
import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;

import 'model.dart';
import 'stage3.dart';
import 'workspace.dart';

/// One measured shape: a fixture class and, optionally, one member of it.
final class Stage2MechanismShape {
  const Stage2MechanismShape({
    required this.label,
    required this.group,
    required this.fixture,
    required this.type,
    this.member,
    this.proposeType,
    this.note,
  });

  /// Stable identifier used as the row key, emit directory, and test anchor.
  final String label;
  final String group;
  final String fixture;

  /// Class parsed on L2/L3. Ignored when [proposeType] differs and the shape
  /// only asks whether the declaration itself can be proposed.
  final String type;

  /// Member under test. `null` measures the declaration as a whole.
  final String? member;

  /// Declaration handed to `proposeSelection`. Defaults to [type].
  final String? proposeType;

  final String? note;

  String get proposeTarget => proposeType ?? type;

  Map<String, Object?> toJson() => {
    'label': label,
    'group': group,
    'fixture': fixture,
    'type': type,
    if (member != null) 'member': member,
    'proposeTarget': proposeTarget,
    if (note != null) 'note': note,
  };
}

/// The measured matrix. Order is the order of the report.
const List<Stage2MechanismShape> stage2MechanismShapes = [
  // Callback shapes (plain Dart, no Flutter types).
  Stage2MechanismShape(
    label: 'callback/sync-callback-param',
    group: 'callback',
    fixture: 'callback_shapes.dart',
    type: 'SyncCallbackBox',
    member: 'run',
    note: 'control group: synchronous callback parameter',
  ),
  Stage2MechanismShape(
    label: 'callback/future-in-callback-param',
    group: 'callback',
    fixture: 'callback_shapes.dart',
    type: 'FutureArgCallback',
    member: 'onEach',
  ),
  Stage2MechanismShape(
    label: 'callback/future-value-param',
    group: 'callback',
    fixture: 'callback_shapes.dart',
    type: 'FutureArgCallback',
    member: 'whenDone',
    note: 'control group: plain Future parameter',
  ),
  Stage2MechanismShape(
    label: 'callback/future-result-callback',
    group: 'callback',
    fixture: 'callback_shapes.dart',
    type: 'FutureResultCallback',
    member: 'schedule',
  ),
  Stage2MechanismShape(
    label: 'callback/future-or-callback-param',
    group: 'callback',
    fixture: 'callback_shapes.dart',
    type: 'FutureOrCallback',
    member: 'scheduleOrValue',
  ),
  Stage2MechanismShape(
    label: 'callback/future-or-value-param',
    group: 'callback',
    fixture: 'callback_shapes.dart',
    type: 'FutureOrCallback',
    member: 'echoOrValue',
  ),
  Stage2MechanismShape(
    label: 'callback/nested-future-callback',
    group: 'callback',
    fixture: 'callback_shapes.dart',
    type: 'NestedFutureCallback',
    member: 'nested',
  ),
  Stage2MechanismShape(
    label: 'callback/stream-in-callback-param',
    group: 'callback',
    fixture: 'callback_shapes.dart',
    type: 'StreamCallback',
    member: 'listenAll',
  ),
  Stage2MechanismShape(
    label: 'callback/stream-result',
    group: 'callback',
    fixture: 'callback_shapes.dart',
    type: 'StreamCallback',
    member: 'watch',
  ),

  // Record shapes.
  Stage2MechanismShape(
    label: 'record/constructor-field',
    group: 'record',
    fixture: 'record_shapes.dart',
    type: 'RecordBox',
    member: 'seed',
  ),
  Stage2MechanismShape(
    label: 'record/param-and-result',
    group: 'record',
    fixture: 'record_shapes.dart',
    type: 'RecordBox',
    member: 'take',
  ),
  Stage2MechanismShape(
    label: 'record/result-only',
    group: 'record',
    fixture: 'record_shapes.dart',
    type: 'RecordBox',
    member: 'pair',
  ),
  Stage2MechanismShape(
    label: 'record/named-param-and-result',
    group: 'record',
    fixture: 'record_shapes.dart',
    type: 'RecordBox',
    member: 'takeNamed',
  ),
  Stage2MechanismShape(
    label: 'record/list-of-records',
    group: 'record',
    fixture: 'record_shapes.dart',
    type: 'RecordBox',
    member: 'takeAll',
  ),
  Stage2MechanismShape(
    label: 'record/future-of-record',
    group: 'record',
    fixture: 'record_shapes.dart',
    type: 'RecordBox',
    member: 'takeFuture',
  ),

  // Extension types.
  Stage2MechanismShape(
    label: 'extensionType/declaration',
    group: 'extensionType',
    fixture: 'extension_type_shapes.dart',
    type: 'MetersBox',
    proposeType: 'Meters',
    note: 'proposes the extension type declaration itself',
  ),
  Stage2MechanismShape(
    label: 'extensionType/field',
    group: 'extensionType',
    fixture: 'extension_type_shapes.dart',
    type: 'MetersBox',
    member: 'meters',
  ),
  Stage2MechanismShape(
    label: 'extensionType/getter',
    group: 'extensionType',
    fixture: 'extension_type_shapes.dart',
    type: 'MetersBox',
    member: 'total',
  ),
  Stage2MechanismShape(
    label: 'extensionType/method-param',
    group: 'extensionType',
    fixture: 'extension_type_shapes.dart',
    type: 'MetersBox',
    member: 'double',
  ),

  // Flutter callback shapes (fixture re-exports package:flutter/widgets.dart).
  Stage2MechanismShape(
    label: 'widgetCallback/builder-callback-param',
    group: 'widgetCallback',
    fixture: 'widget_callback_shapes.dart',
    type: 'WidgetBuilderBox',
    member: 'configure',
  ),
  Stage2MechanismShape(
    label: 'widgetCallback/context-param',
    group: 'widgetCallback',
    fixture: 'widget_callback_shapes.dart',
    type: 'WidgetBuilderBox',
    member: 'buildOnce',
  ),
  Stage2MechanismShape(
    label: 'widgetCallback/widget-param',
    group: 'widgetCallback',
    fixture: 'widget_callback_shapes.dart',
    type: 'WidgetSinkBox',
    member: 'sink',
  ),
  Stage2MechanismShape(
    label: 'widgetCallback/widget-callback-param',
    group: 'widgetCallback',
    fixture: 'widget_callback_shapes.dart',
    type: 'WidgetSinkBox',
    member: 'sinkAll',
  ),
  Stage2MechanismShape(
    label: 'widgetCallback/widget-result',
    group: 'widgetCallback',
    fixture: 'widget_callback_shapes.dart',
    type: 'WidgetSinkBox',
    member: 'children',
  ),
  Stage2MechanismShape(
    label: 'widgetCallback/future-widget-result',
    group: 'widgetCallback',
    fixture: 'widget_callback_shapes.dart',
    type: 'WidgetFutureBox',
    member: 'later',
  ),
  Stage2MechanismShape(
    label: 'widgetCallback/nullable-widget-callback',
    group: 'widgetCallback',
    fixture: 'widget_callback_shapes.dart',
    type: 'WidgetNullableBox',
    member: 'maybe',
  ),

  // Class modifiers.
  Stage2MechanismShape(
    label: 'classModifier/abstract',
    group: 'classModifier',
    fixture: 'class_modifier_shapes.dart',
    type: 'AbstractBox',
    member: 'value',
  ),
  Stage2MechanismShape(
    label: 'classModifier/mixin',
    group: 'classModifier',
    fixture: 'class_modifier_shapes.dart',
    type: 'PlainMixin',
    member: 'value',
  ),
  Stage2MechanismShape(
    label: 'classModifier/mixin-class',
    group: 'classModifier',
    fixture: 'class_modifier_shapes.dart',
    type: 'UtilityMixinClass',
    member: 'value',
  ),
  Stage2MechanismShape(
    label: 'classModifier/base',
    group: 'classModifier',
    fixture: 'class_modifier_shapes.dart',
    type: 'BaseBox',
    member: 'value',
  ),
  Stage2MechanismShape(
    label: 'classModifier/final',
    group: 'classModifier',
    fixture: 'class_modifier_shapes.dart',
    type: 'FinalBox',
    member: 'value',
  ),
  Stage2MechanismShape(
    label: 'classModifier/interface',
    group: 'classModifier',
    fixture: 'class_modifier_shapes.dart',
    type: 'InterfaceBox',
    member: 'value',
  ),
  Stage2MechanismShape(
    label: 'classModifier/interface-implementation',
    group: 'classModifier',
    fixture: 'class_modifier_shapes.dart',
    type: 'InterfaceBoxImpl',
    member: 'value',
  ),
  Stage2MechanismShape(
    label: 'classModifier/sealed',
    group: 'classModifier',
    fixture: 'class_modifier_shapes.dart',
    type: 'SealedBox',
    member: 'value',
  ),
  Stage2MechanismShape(
    label: 'classModifier/sealed-child',
    group: 'classModifier',
    fixture: 'class_modifier_shapes.dart',
    type: 'SealedBoxChild',
  ),
  Stage2MechanismShape(
    label: 'classModifier/abstract-interface',
    group: 'classModifier',
    fixture: 'class_modifier_shapes.dart',
    type: 'AbstractInterfaceBox',
    member: 'value',
  ),
  Stage2MechanismShape(
    label: 'classModifier/abstract-interface-implementation',
    group: 'classModifier',
    fixture: 'class_modifier_shapes.dart',
    type: 'AbstractInterfaceBoxImpl',
    member: 'value',
  ),
];

/// Fixtures that need the official Flutter type pool for the emit fallback.
const Set<String> stage2MechanismFlutterFixtures = {
  'widget_callback_shapes.dart',
};

/// Intentional boundaries that use existing regression fixtures and stable
/// diagnostic codes. These are assessed, not left in an unmeasured bucket.
const List<Map<String, Object?>> stage2MechanismBoundaries = [
  {
    'id': 'async_mounted_widget_result',
    'verdict': 'unsupported',
    'reasonKind': 'intentionalBoundary',
    'code': 'unsupported_mounted_widget_result',
    'fixture': 'test/fixtures/bindability/auto_library.dart',
    'example': 'Future<Widget> Function() on a Widget constructor',
  },
  {
    'id': 'mounted_widget_collection_shape',
    'verdict': 'unsupported',
    'reasonKind': 'intentionalBoundary',
    'code': 'unsupported_mounted_widget_result',
    'fixture': 'test/fixtures/bindability/auto_library.dart',
    'example': 'Set<Widget> or List<Widget?> returned by a mounted callback',
  },
  {
    'id': 'arbitrary_mixin_composition',
    'verdict': 'unsupported',
    'reasonKind': 'intentionalBoundary',
    'code': 'state_variant_only_mixin_composition',
    'fixture': 'test/fixtures/capability/class_modifier_shapes.dart',
    'example': 'Applying a runtime-selected mixin to an ordinary class proxy',
  },
  {
    'id': 'recursive_generic_bound',
    'verdict': 'unsupported',
    'reasonKind': 'intentionalBoundary',
    'code': 'complex_generic_bound',
    'fixture': 'test/fixtures/capability/generic_cases.dart',
    'example': 'T extends Comparable<T> without concrete evidence',
  },
  {
    'id': 'unnamed_extension',
    'verdict': 'excluded',
    'reasonKind': 'visibility',
    'code': 'unnamed_extension',
    'fixture': 'test/fixtures/capability/extension_shapes.dart',
    'example': 'extension on String { ... }',
  },
  {
    'id': 'concrete_generic_extension_receiver',
    'verdict': 'unsupported',
    'reasonKind': 'intentionalBoundary',
    'code': 'generic_receiver_specialization_required',
    'fixture': 'test/fixtures/capability/extension_shapes.dart',
    'example': 'extension RecursiveX<T extends Comparable<T>> on List<T>',
  },
];

/// Reports the mutually exclusive CLI misuse, or `null` when the flags agree.
String? stage2MechanismsArgsError({
  required bool stage2Mechanisms,
  required bool anyStage3Flag,
  required bool outGiven,
}) {
  if (!stage2Mechanisms) return null;
  if (anyStage3Flag) {
    return '--stage2-mechanisms is mutually exclusive with all stage 3 and '
        'closure flags';
  }
  if (!outGiven) {
    return '--stage2-mechanisms requires --out';
  }
  return null;
}

/// Aggregates the already-captured widgets inventory. Read-only: it never
/// re-runs the census and never touches the generator.
Map<String, Object?> aggregateWidgetsEvidence(Object? inventoryJson) {
  if (inventoryJson is! Map) {
    return {'available': false, 'reason': 'inventory is not a JSON object'};
  }
  final declarations = inventoryJson['declarations'];
  if (declarations is! List) {
    return {'available': false, 'reason': 'inventory has no declarations list'};
  }
  final byKind = <String, int>{};
  final modifiers = <String, int>{};
  final extensionTypeNames = <String>[];
  final recordResultPosition = <Map<String, Object?>>[];
  final recordParameterPosition = <Map<String, Object?>>[];
  final recordInsideCallbackSignature = <Map<String, Object?>>[];
  final mechanismDiagnostics = <String, int>{};
  final mechanismDiagnosticIdentities = <String>{};
  final classLikeIdentities = <String>{};

  for (final raw in declarations) {
    if (raw is! Map) continue;
    final declaration = Map<String, Object?>.from(raw);
    final kind = declaration['kind'] as String? ?? 'unknown';
    final name = declaration['name'] as String? ?? '';
    final id = declaration['id'] as String? ?? name;
    byKind[kind] = (byKind[kind] ?? 0) + 1;
    if (kind == 'class' || kind == 'mixin' || kind == 'extensionType') {
      classLikeIdentities.add(id);
    }
    final rawModifiers = declaration['modifiers'];
    if (rawModifiers is Map) {
      for (final entry in rawModifiers.entries) {
        if (entry.value == true) {
          final key = entry.key.toString();
          modifiers[key] = (modifiers[key] ?? 0) + 1;
        }
      }
    }
    if (kind == 'extensionType') extensionTypeNames.add(name);

    for (final rawMember
        in declaration['declaredMembers'] as List? ?? const []) {
      if (rawMember is! Map) continue;
      final member = Map<String, Object?>.from(rawMember);
      final memberName = member['name'] as String? ?? '';
      final resultType = member['resultType'] as String? ?? '';
      final target = '$name.$memberName'.replaceAll(RegExp(r'\.$'), '');
      if (_isRecordTypeText(resultType)) {
        recordResultPosition.add({
          'identity': id,
          'member': target,
          'type': resultType,
        });
      }
      for (final rawParameter in member['parameters'] as List? ?? const []) {
        if (rawParameter is! Map) continue;
        final type = rawParameter['type'] as String? ?? '';
        final parameterName = rawParameter['name'] as String? ?? '';
        if (_isRecordTypeText(type)) {
          recordParameterPosition.add({
            'identity': id,
            'member': '$target.$parameterName',
            'type': type,
          });
        } else if (_isRecordInsideCallback(type)) {
          recordInsideCallbackSignature.add({
            'identity': id,
            'member': '$target.$parameterName',
            'type': type,
          });
        }
      }
    }

    final assessment = declaration['assessment'];
    if (assessment is Map) {
      for (final rawDiagnostic
          in (assessment['diagnostics'] as List? ?? const [])) {
        if (rawDiagnostic is! Map) continue;
        final code = rawDiagnostic['code'] as String?;
        if (code == null || !_widgetMechanismDiagnosticCodes.contains(code)) {
          continue;
        }
        mechanismDiagnostics[code] = (mechanismDiagnostics[code] ?? 0) + 1;
        mechanismDiagnosticIdentities.add(id);
      }
    }
  }

  return {
    'available': true,
    'identityCount': declarations.length,
    'classLikeIdentityCount': classLikeIdentities.length,
    'byKind': byKind,
    'modifiersTrue': modifiers,
    'extensionTypes': extensionTypeNames,
    'records': {
      'resultPosition': recordResultPosition,
      'parameterPosition': recordParameterPosition,
      'insideCallbackSignature': recordInsideCallbackSignature,
    },
    'mechanismDiagnostics': mechanismDiagnostics,
    'mechanismDiagnosticIdentityCount': mechanismDiagnosticIdentities.length,
    'mechanismDiagnosticIdentities': mechanismDiagnosticIdentities.toList()
      ..sort(),
  };
}

const Set<String> _widgetMechanismDiagnosticCodes = {
  'missing_callback_signature',
  'unsupported_binding_type',
  'unsupported_input_shape',
  'context_input_callback_only',
  'unsupported_mounted_widget_result',
  'stored_callback_owner_required',
};

bool _isRecordTypeText(String type) {
  final trimmed = type.trimLeft();
  return trimmed.startsWith('(') || trimmed.startsWith('{');
}

bool _isRecordInsideCallback(String type) {
  final index = type.indexOf('Function(');
  if (index < 0) return false;
  final signature = type.substring(index + 'Function('.length);
  return _isRecordTypeText(signature);
}

/// The measured result of one shape on L1 (automatic propose) and L2
/// (explicit fail-closed parse). Emit is intentionally not part of the probe:
/// it belongs to [runStage2Mechanisms], which owns the output directories.
final class Stage2MechanismProbe {
  const Stage2MechanismProbe({
    required this.shape,
    required this.propose,
    required this.classWide,
    required this.memberIsolated,
    required this.module,
    required this.effectiveRoute,
    required this.verdict,
    required this.reasonKind,
  });

  final Stage2MechanismShape shape;
  final Map<String, Object?> propose;

  /// Class-wide explicit parse report (module model stripped).
  final Map<String, Object?> classWide;

  /// Member-isolated explicit parse report, or `null` when the class-wide
  /// selection already parsed.
  final Map<String, Object?>? memberIsolated;

  /// Module produced by the effective route, or `null` when both failed.
  final FlaxCodegenModuleModel? module;

  /// `classWide`, `memberIsolated`, or `failed`.
  final String effectiveRoute;

  final CapabilityVerdict verdict;
  final CapabilityReasonKind reasonKind;
}

/// Measures one shape without emitting. Exposed so tests assert the recorded
/// verdicts against the same code the report runs, instead of a copy.
Future<Stage2MechanismProbe> probeStage2MechanismShape({
  required String workspaceRoot,
  required AnalysisContextCollection collection,
  required Stage2MechanismShape shape,
  FlaxCodegenBindingConfig? official,
  FlaxCodegenBindingConfig? fixture,
}) async {
  final officialConfig = official ?? officialBindingConfig(workspaceRoot);
  final fixtureConfig = fixture ?? _fixtureConfig(workspaceRoot, shape.fixture);
  final propose = await _proposeShape(
    workspaceRoot: workspaceRoot,
    collection: collection,
    official: officialConfig,
    fixture: fixtureConfig,
    shape: shape,
  );

  final classWide = await _explicitParse(
    workspaceRoot: workspaceRoot,
    collection: collection,
    official: officialConfig,
    fixture: fixtureConfig,
    shape: shape,
    selection: _allMemberSelection,
    label: '${shape.label} (class-wide)',
  );

  Map<String, Object?>? memberIsolated;
  if (classWide['ok'] != true && shape.member != null) {
    memberIsolated = await _explicitParse(
      workspaceRoot: workspaceRoot,
      collection: collection,
      official: officialConfig,
      fixture: fixtureConfig,
      shape: shape,
      selection: _memberSelection,
      label: '${shape.label} (member-isolated)',
    );
  }

  final effective = classWide['ok'] == true
      ? classWide
      : (memberIsolated ?? classWide);
  final classification = _classification(
    shape: shape,
    propose: propose,
    effective: effective,
  );
  return Stage2MechanismProbe(
    shape: shape,
    propose: propose,
    classWide: _withoutModule(classWide),
    memberIsolated: memberIsolated == null
        ? null
        : _withoutModule(memberIsolated),
    module: effective['module'] as FlaxCodegenModuleModel?,
    effectiveRoute: effective['ok'] == true
        ? (classWide['ok'] == true ? 'classWide' : 'memberIsolated')
        : 'failed',
    verdict: classification.verdict,
    reasonKind: classification.reasonKind,
  );
}

/// Reads the official binding configuration used by the matrix.
FlaxCodegenBindingConfig officialBindingConfig(String workspaceRoot) =>
    FlaxCodegenBindingConfig.read(
      p.join(workspaceRoot, 'packages/flax/bindings/config.yaml'),
    );

/// Runs the matrix and writes `stage2-mechanisms.json` plus
/// `STAGE2-MECHANISMS.md` into [outDir].
Future<Map<String, Object?>> runStage2Mechanisms({
  required String workspaceRoot,
  required String outDir,
  required String inventoryPath,
  Duration? analyzeTimeout,
  CapabilityLog? log,
}) async {
  final out = Directory(outDir)..createSync(recursive: true);
  final official = officialBindingConfig(workspaceRoot);
  final collection = AnalysisContextCollection(includedPaths: [workspaceRoot]);
  final fixtureConfigs = <String, FlaxCodegenBindingConfig>{};
  FlaxCodegenBindingConfig fixtureConfig(String fixture) => fixtureConfigs
      .putIfAbsent(fixture, () => _fixtureConfig(workspaceRoot, fixture));

  Stage3ParseResult? officialParse;
  Future<Stage3ParseResult> officialModule() async =>
      officialParse ??= await parseClassSelectionSet(
        workspaceRoot: workspaceRoot,
        official: official,
        library: official,
        classes: official.classes,
        label: 'official',
      );

  final rows = <Map<String, Object?>>[];
  for (final shape in stage2MechanismShapes) {
    log?.call('[stage2-mechanisms] ${shape.label}');
    final config = fixtureConfig(shape.fixture);
    final probe = await probeStage2MechanismShape(
      workspaceRoot: workspaceRoot,
      collection: collection,
      official: official,
      fixture: config,
      shape: shape,
    );
    final module = probe.module;

    Map<String, Object?>? emit;
    if (module != null) {
      final directory = Directory(
        p.join(out.path, 'emit', shape.label.replaceAll('/', '_')),
      )..createSync(recursive: true);
      FlaxCodegenModuleModel? officialModuleValue;
      if (stage2MechanismFlutterFixtures.contains(shape.fixture)) {
        final parsed = await officialModule();
        officialModuleValue = parsed.module;
      }
      final emitted = await emitModuleSet(
        target: module,
        official: officialModuleValue,
        directory: directory.path,
      );
      final compile = emitted['ok'] == true
          ? await _compileShape(
              workspaceRoot: workspaceRoot,
              directory: directory.path,
              targetName: module.name,
              analyzeTimeout: analyzeTimeout,
            )
          : null;
      emit = {...emitted, 'compile': ?compile};
    }

    final classification = _completedClassification(probe, emit);

    rows.add({
      ...shape.toJson(),
      'propose': probe.propose,
      'explicitClassWide': probe.classWide,
      'explicitMemberIsolated': probe.memberIsolated,
      'explicitEffective': probe.effectiveRoute,
      'memberInModule': _memberInModule(module, shape),
      'emit': emit,
      'verdict': classification.verdict.name,
      'reasonKind': classification.reasonKind.name,
      'stages': _mechanismStages(probe, emit).toJson(),
    });
  }

  final widgets = _loadWidgetsEvidence(workspaceRoot, inventoryPath);
  final reasonCounts = <String, int>{};
  final verdictCounts = <String, int>{};
  for (final row in rows) {
    final reason = row['reasonKind'] as String;
    reasonCounts[reason] = (reasonCounts[reason] ?? 0) + 1;
    final verdict = row['verdict'] as String;
    verdictCounts[verdict] = (verdictCounts[verdict] ?? 0) + 1;
  }
  final result = <String, Object?>{
    'generatedAt': DateTime.now().toUtc().toIso8601String(),
    'denominators': {
      'foundation':
          '170 identities (unchanged; the foundation census is not re-run)',
      'widgets':
          '1339 identities (subset evidence; widgets inventory is reused)',
      'matrix':
          '${rows.length} shapes across '
          '${stage2MechanismShapes.map((shape) => shape.group).toSet().length} mechanisms',
    },
    'shapes': rows,
    'widgetsEvidence': widgets,
    'boundaries': stage2MechanismBoundaries,
    'verdictCounts': verdictCounts,
    'reasonCounts': reasonCounts,
    'closure': {
      'automationGap':
          reasonCounts[CapabilityReasonKind.automationGap.name] ?? 0,
      'generatorGap': reasonCounts[CapabilityReasonKind.generatorGap.name] ?? 0,
      'environmentBlocked':
          verdictCounts[CapabilityVerdict.environmentBlocked.name] ?? 0,
    },
  };
  File(p.join(out.path, 'stage2-mechanisms.json'))
      .writeAsStringSync(prettyJson(result));
  File(p.join(out.path, 'STAGE2-MECHANISMS.md'))
      .writeAsStringSync(stage2MechanismsMarkdown(result));
  return result;
}

({CapabilityVerdict verdict, CapabilityReasonKind reasonKind})
_completedClassification(
  Stage2MechanismProbe probe,
  Map<String, Object?>? emit,
) {
  if ({
    CapabilityVerdict.unsupported,
    CapabilityVerdict.excluded,
    CapabilityVerdict.environmentBlocked,
  }.contains(probe.verdict)) {
    return (verdict: probe.verdict, reasonKind: probe.reasonKind);
  }
  if (emit == null) {
    return (
      verdict: CapabilityVerdict.unsupported,
      reasonKind: CapabilityReasonKind.generatorGap,
    );
  }
  if (emit['ok'] != true) {
    return _stageFailureClassification(
      code: emit['code']?.toString(),
      timedOut: emit['timedOut'] == true,
      skipped: emit['skipped'] == true,
    );
  }
  final compile = emit['compile'];
  if (compile is! Map) {
    return (
      verdict: CapabilityVerdict.unsupported,
      reasonKind: CapabilityReasonKind.generatorGap,
    );
  }
  if (compile['ok'] != true) {
    return _stageFailureClassification(
      code: compile['code']?.toString() ?? compile['dartCode']?.toString(),
      timedOut:
          compile['dartTimedOut'] == true || compile['tscTimedOut'] == true,
      skipped: compile['skipped'] == true,
    );
  }
  return (verdict: probe.verdict, reasonKind: probe.reasonKind);
}

({CapabilityVerdict verdict, CapabilityReasonKind reasonKind})
_stageFailureClassification({
  required String? code,
  required bool timedOut,
  required bool skipped,
}) {
  if (timedOut || skipped || _environmentStageCodes.contains(code)) {
    return (
      verdict: CapabilityVerdict.environmentBlocked,
      reasonKind: CapabilityReasonKind.none,
    );
  }
  return (
    verdict: CapabilityVerdict.unsupported,
    reasonKind: CapabilityReasonKind.generatorGap,
  );
}

String? stage2MechanismsClosureError(Map<String, Object?> result) {
  final closure = result['closure'];
  if (closure is! Map) return 'Stage 2 mechanism report has no closure summary';
  final automation = closure['automationGap'] as int? ?? 0;
  final generator = closure['generatorGap'] as int? ?? 0;
  final blocked = closure['environmentBlocked'] as int? ?? 0;
  if (automation == 0 && generator == 0 && blocked == 0) return null;
  return 'Stage 2 mechanism closure failed: '
      'automationGap=$automation, generatorGap=$generator, '
      'environmentBlocked=$blocked';
}

CapabilityStages _mechanismStages(
  Stage2MechanismProbe probe,
  Map<String, Object?>? emit,
) {
  final effective = probe.effectiveRoute == 'memberIsolated'
      ? probe.memberIsolated
      : probe.classWide;
  final automaticCode = (probe.propose['skipCodes'] as List?)?.firstOrNull
      ?.toString();
  final automaticPassed =
      probe.propose['bindable'] == true &&
      probe.propose['memberStatus'] != 'skipped';
  final automatic = automaticPassed
      ? const CapabilityStageResult(CapabilityStageStatus.passed)
      : CapabilityStageResult(
          CapabilityStageStatus.failed,
          code: automaticCode ?? 'automatic_proposal_failed',
          detail:
              probe.propose['error']?.toString() ??
              probe.propose['memberSkipReason']?.toString(),
        );
  final explicit = effective?['ok'] == true
      ? const CapabilityStageResult(CapabilityStageStatus.passed)
      : CapabilityStageResult(
          CapabilityStageStatus.failed,
          code: effective?['code']?.toString() ?? 'explicit_parse_failed',
          detail: effective?['error']?.toString(),
        );
  CapabilityStageResult emitStage;
  CapabilityStageResult compileStage;
  if (emit == null) {
    emitStage = const CapabilityStageResult(
      CapabilityStageStatus.notApplicable,
    );
    compileStage = const CapabilityStageResult(
      CapabilityStageStatus.notApplicable,
    );
  } else {
    emitStage = emit['ok'] == true
        ? const CapabilityStageResult(CapabilityStageStatus.passed)
        : CapabilityStageResult(
            CapabilityStageStatus.failed,
            code: emit['code']?.toString() ?? 'emit_failed',
            detail: (emit['error'] ?? emit['reason'])?.toString(),
          );
    final compile = emit['compile'];
    compileStage = compile is! Map
        ? const CapabilityStageResult(CapabilityStageStatus.notApplicable)
        : compile['ok'] == true
        ? const CapabilityStageResult(CapabilityStageStatus.passed)
        : CapabilityStageResult(
            CapabilityStageStatus.failed,
            code: compile['code']?.toString() ?? 'compile_failed',
            detail: (compile['error'] ?? compile['reason'])?.toString(),
          );
  }
  return CapabilityStages(
    automatic: automatic,
    explicit: explicit,
    parse: explicit,
    emit: emitStage,
    compile: compileStage,
  );
}

FlaxCodegenBindingConfig _fixtureConfig(String workspaceRoot, String fixture) =>
    FlaxCodegenBindingConfig(
      'capability_${p.basenameWithoutExtension(fixture)}',
      capabilityFixtureUri(workspaceRoot, fixture),
      '@example/capability-${p.basenameWithoutExtension(fixture)}',
      'unused.g.dart',
      'unused.ts',
      const {},
    );

Map<String, Object?> _loadWidgetsEvidence(
  String workspaceRoot,
  String inventoryPath,
) {
  final path = p.isAbsolute(inventoryPath)
      ? inventoryPath
      : p.join(workspaceRoot, inventoryPath);
  final file = File(path);
  if (!file.existsSync()) {
    return {'available': false, 'reason': 'inventory not found', 'path': path};
  }
  try {
    return {
      'path': path,
      ...aggregateWidgetsEvidence(jsonDecode(file.readAsStringSync())),
    };
  } on Object catch (error) {
    return {
      'available': false,
      'reason': error.toString().split('\n').first,
      'path': path,
    };
  }
}

Map<String, Object?> _withoutModule(Map<String, Object?> parse) => {
  for (final entry in parse.entries)
    if (entry.key != 'module') entry.key: entry.value,
};

/// L1: automatic (fail-open) selection of the shape's propose target.
Future<Map<String, Object?>> _proposeShape({
  required String workspaceRoot,
  required AnalysisContextCollection collection,
  required FlaxCodegenBindingConfig official,
  required FlaxCodegenBindingConfig fixture,
  required Stage2MechanismShape shape,
}) async {
  final libraryResult = await resolveLibrary(collection, fixture.library);
  if (libraryResult is! LibraryElementResult) {
    return {'bindable': false, 'error': 'fixture library did not resolve'};
  }
  final element =
      libraryResult.element.exportNamespace.definedNames2[shape.proposeTarget];
  if (element == null) {
    return {
      'bindable': false,
      'error': '${shape.proposeTarget} is not exported by the fixture',
    };
  }
  if (element is ExtensionTypeElement) {
    final parser = FlaxCodegenBindingParser(workspaceRoot);
    try {
      await parser.prepare([official, fixture]);
      final proposal = await parser.proposeLibrary(fixture);
      final selected = proposal.config.types.contains(shape.proposeTarget);
      final skips = [
        for (final skip in proposal.skips)
          if (skip.target == shape.proposeTarget ||
              skip.target.startsWith('${shape.proposeTarget}.'))
            skip,
      ];
      return {
        'bindable': selected,
        'selectionState': selected ? 'representation' : 'unsupported',
        'skips': [for (final skip in skips) '${skip.target}: ${skip.reason}'],
        'skipCodes': [for (final skip in skips) skip.code],
      };
    } on Object catch (error) {
      return {
        'bindable': false,
        'selectionState': 'error',
        'error': error.toString().split('\n').first,
        'skipCodes': const <String>['automatic_proposal_failed'],
      };
    } finally {
      parser.dispose();
    }
  }
  if (element is! InterfaceElement) {
    return {
      'bindable': false,
      'selectionState': 'notApplicable',
      'error':
          '${shape.proposeTarget} is ${element.runtimeType}, not an InterfaceElement',
      'skipCodes': const <String>['unsupported_declaration_kind'],
    };
  }
  final parser = FlaxCodegenBindingParser(workspaceRoot);
  try {
    await parser.prepare([official, fixture]);
    final proposal = await parser.proposeSelection(element, library: fixture);
    final selection = proposal.selection;
    final selectedGetters = selection?.getters.toSet() ?? const <String>{};
    final selectedMethods = {
      ...?selection?.instanceMethods.keys,
      ...?selection?.methods.keys,
    };
    String? memberStatus;
    String? memberSkipReason;
    String? memberSkipCode;
    if (shape.member != null) {
      if (selectedGetters.contains(shape.member) ||
          selectedMethods.contains(shape.member)) {
        memberStatus = 'selected';
      } else {
        memberStatus = 'skipped';
        for (final skip in proposal.skips) {
          if (skip.target.endsWith('.${shape.member}') ||
              skip.target == shape.member) {
            memberSkipReason = skip.reason;
            memberSkipCode = skip.code;
            break;
          }
        }
      }
    }
    return {
      'bindable': proposal.bindable,
      'selectionState': selection == null
          ? 'unsupported'
          : selection.typeArguments.isEmpty
          ? 'proposed'
          : 'genericDefault',
      if (shape.member != null) 'memberStatus': memberStatus,
      'memberSkipReason': ?memberSkipReason,
      'memberSkipCode': ?memberSkipCode,
      'selectedGetters': selectedGetters.toList()..sort(),
      'selectedMethods': selectedMethods.toList()..sort(),
      'skips': [
        for (final skip in proposal.skips) '${skip.target}: ${skip.reason}',
      ],
      'skipCodes': [for (final skip in proposal.skips) skip.code],
    };
  } on Object catch (error) {
    return {
      'bindable': false,
      'selectionState': 'error',
      'error': error.toString().split('\n').first,
      'skipCodes': const <String>['automatic_proposal_failed'],
    };
  } finally {
    parser.dispose();
  }
}

/// L2: explicit (fail-closed) parse of a hand-built class selection.
Future<Map<String, Object?>> _explicitParse({
  required String workspaceRoot,
  required AnalysisContextCollection collection,
  required FlaxCodegenBindingConfig official,
  required FlaxCodegenBindingConfig fixture,
  required Stage2MechanismShape shape,
  required _ExplicitSelection Function(InterfaceElement element, String? member)
  selection,
  required String label,
}) async {
  final libraryResult = await resolveLibrary(collection, fixture.library);
  if (libraryResult is! LibraryElementResult) {
    return {
      'ok': false,
      'error': 'fixture library did not resolve',
      'code': 'fixture_library_unresolved',
    };
  }
  final element =
      libraryResult.element.exportNamespace.definedNames2[shape.type];
  if (element is! InterfaceElement) {
    return {
      'ok': false,
      'error':
          '${shape.type} is ${element?.runtimeType ?? 'missing'}, not an interface declaration',
      'code': 'fixture_declaration_not_interface',
    };
  }
  final built = selection(element, shape.member);
  final parsed = await parseClassSelectionSet(
    workspaceRoot: workspaceRoot,
    official: official,
    library: fixture,
    classes: {shape.type: built.selection},
    label: label,
  );
  return {
    ...parsed.toJson(),
    // `toJson()` deliberately omits the module model; L3 needs it, and every
    // caller strips it again through `_withoutModule` before reporting.
    'module': parsed.module,
    'skippedConstructors': built.skippedConstructors,
    if (parsed.ok && shape.member != null)
      'memberSelected': _memberInSelection(built.selection, shape.member!),
  };
}

/// A hand-written class selection plus the constructors the parser refuses.
final class _ExplicitSelection {
  const _ExplicitSelection(this.selection, this.skippedConstructors);

  final FlaxCodegenClassSelection selection;

  /// Public constructors dropped because an abstract class cannot expose a
  /// generative constructor. The automatic selector drops exactly the same
  /// ones (`bindability_impl.dart`), so the explicit route mirrors it rather
  /// than inventing a route no configuration can express.
  final List<String> skippedConstructors;
}

/// Every selectable public constructor plus every public getter and instance
/// method.
_ExplicitSelection _allMemberSelection(
  InterfaceElement element,
  String? member,
) {
  final constructors = _constructors(element);
  final selection = FlaxCodegenClassSelection(
    constructors.selected,
    kind: 'object',
    getters: [
      for (final getter in element.getters)
        if (!getter.isPrivate && !getter.isStatic) getter.name ?? '',
    ],
    instanceMethods: {
      for (final method in element.methods)
        if (!method.isPrivate && !method.isStatic)
          method.name ?? '': _methodParameters(method),
    },
  );
  return _ExplicitSelection(selection, constructors.skipped);
}

/// The selectable public constructors plus the single member under test.
_ExplicitSelection _memberSelection(InterfaceElement element, String? member) {
  final constructors = _constructors(element);
  _ExplicitSelection wrap(FlaxCodegenClassSelection selection) =>
      _ExplicitSelection(selection, constructors.skipped);
  if (member == null) {
    return wrap(
      FlaxCodegenClassSelection(constructors.selected, kind: 'object'),
    );
  }
  final method = element.getMethod(member);
  if (method != null && !method.isPrivate && !method.isStatic) {
    return wrap(
      FlaxCodegenClassSelection(
        constructors.selected,
        kind: 'object',
        instanceMethods: {member: _methodParameters(method)},
      ),
    );
  }
  final getter = element.getGetter(member);
  if (getter != null && !getter.isPrivate && !getter.isStatic) {
    return wrap(
      FlaxCodegenClassSelection(
        constructors.selected,
        kind: 'object',
        getters: [member],
      ),
    );
  }
  return wrap(FlaxCodegenClassSelection(constructors.selected, kind: 'object'));
}

/// Public constructors keyed the way the parser's YAML reads them. Abstract
/// classes keep factory constructors only: a generative constructor of an
/// abstract class is unreachable from both routes and is reported through
/// [skipped] instead of failing the whole class.
({Map<String, List<String>> selected, List<String> skipped}) _constructors(
  InterfaceElement element,
) {
  final selected = <String, List<String>>{};
  final skipped = <String>[];
  if (element is! ClassElement) {
    return (selected: selected, skipped: skipped);
  }
  for (final constructor in element.constructors) {
    if (constructor.isPrivate) continue;
    // The parser keys constructors by the YAML name, where an unnamed
    // constructor is written as the empty string. analyzer reports the
    // unnamed constructor's name as 'new', so normalize it here.
    final name = constructor.name ?? '';
    final key = name == 'new' ? '' : name;
    if (element.isAbstract && !constructor.isFactory) {
      skipped.add(key);
      continue;
    }
    selected[key] = [
      for (final parameter in constructor.formalParameters)
        if (parameter.name != null) parameter.name!,
    ];
  }
  return (selected: selected, skipped: skipped);
}

List<String> _methodParameters(MethodElement method) => [
  for (final parameter in method.formalParameters)
    if (parameter.name != null) parameter.name!,
];

bool _memberInSelection(FlaxCodegenClassSelection selection, String member) =>
    selection.getters.contains(member) ||
    selection.instanceMethods.containsKey(member) ||
    selection.methods.containsKey(member);

Object? _memberInModule(
  FlaxCodegenModuleModel? module,
  Stage2MechanismShape shape,
) {
  if (module == null) return null;
  final member = shape.member;
  if (member == null) return true;
  for (final model in module.classes) {
    if (model.name != shape.type) continue;
    return model.getters.any((getter) => getter.name == member) ||
        model.methods.any((method) => method.name == member) ||
        model.constructors.any((constructor) => constructor.name == member);
  }
  return false;
}

Future<Map<String, Object?>> _compileShape({
  required String workspaceRoot,
  required String directory,
  required String targetName,
  Duration? analyzeTimeout,
}) async {
  return compileEmitted(
    workspaceRoot: workspaceRoot,
    directory: directory,
    targetName: targetName,
    analyzeTimeout: analyzeTimeout,
  );
}

({CapabilityVerdict verdict, CapabilityReasonKind reasonKind}) _classification({
  required Stage2MechanismShape shape,
  required Map<String, Object?> propose,
  required Map<String, Object?> effective,
}) {
  final codes = {
    for (final code in propose['skipCodes'] as List? ?? const [])
      code.toString(),
  };
  if (effective['ok'] != true) {
    if (codes.any(_intentionalBoundaryCodes.contains)) {
      return (
        verdict: CapabilityVerdict.unsupported,
        reasonKind: CapabilityReasonKind.intentionalBoundary,
      );
    }
    final effectiveCode = effective['code']?.toString();
    if (_environmentStageCodes.contains(effectiveCode)) {
      return (
        verdict: CapabilityVerdict.environmentBlocked,
        reasonKind: CapabilityReasonKind.none,
      );
    }
    return (
      verdict: CapabilityVerdict.unsupported,
      reasonKind: CapabilityReasonKind.generatorGap,
    );
  }
  if (shape.group == 'extensionType') {
    return (
      verdict: CapabilityVerdict.limited,
      reasonKind: CapabilityReasonKind.intentionalBoundary,
    );
  }
  final proposeOk =
      propose['bindable'] == true && propose['memberStatus'] != 'skipped';
  if (proposeOk) {
    return (
      verdict: CapabilityVerdict.supported,
      reasonKind: CapabilityReasonKind.none,
    );
  }
  if (codes.any(_visibilityBoundaryCodes.contains)) {
    return (
      verdict: CapabilityVerdict.excluded,
      reasonKind: CapabilityReasonKind.visibility,
    );
  }
  if (codes.any(_intentionalBoundaryCodes.contains)) {
    return (
      verdict: CapabilityVerdict.unsupported,
      reasonKind: CapabilityReasonKind.intentionalBoundary,
    );
  }
  if (codes.contains('automatic_proposal_failed')) {
    return (
      verdict: CapabilityVerdict.unsupported,
      reasonKind: CapabilityReasonKind.generatorGap,
    );
  }
  return (
    verdict: CapabilityVerdict.unsupported,
    reasonKind: CapabilityReasonKind.automationGap,
  );
}

const _environmentStageCodes = {
  'fixture_library_unresolved',
  'generated_files_missing',
  'generated_typescript_missing',
  'workspace_pubspec_missing',
  'dart_analyze_unavailable',
  'dart_analyze_timeout',
  'tsc_unavailable',
  'tsc_timeout',
};

const _visibilityBoundaryCodes = {'visibility_annotation', 'unnamed_extension'};

const _intentionalBoundaryCodes = {
  'context_input_callback_only',
  'unsupported_mounted_widget_result',
  'stored_callback_owner_required',
  'generic_receiver_specialization_required',
  'extension_receiver_shape',
  'extension_type_representation_only',
  'complex_generic_bound',
  'constructor_specialization_missing_use_site',
  'constructor_specialization_ambiguous',
  'unsupported_core_type',
  'unsupported_input_shape',
};

/// Renders the English markdown report for [result].
String stage2MechanismsMarkdown(Map<String, Object?> result) {
  final buffer = StringBuffer()
    ..writeln('# Stage 2 — mechanism matrix')
    ..writeln()
    ..writeln(
      'This record measures the current binder on callback shapes, records, '
      'extension types, and class modifiers. Every shape has a structured '
      'verdict and reason.',
    )
    ..writeln()
    ..writeln('## Denominators')
    ..writeln();
  final denominators = result['denominators'];
  if (denominators is Map) {
    for (final entry in denominators.entries) {
      buffer.writeln('- ${entry.key}: ${entry.value}');
    }
  }
  buffer
    ..writeln()
    ..writeln('## Matrix')
    ..writeln()
    ..writeln(
      '`propose` is the automatic fail-open selector, `explicit parse` is a '
      'hand-written class selection through the fail-closed parser, and the '
      'evidence level counts L1/L2 as E1.',
    )
    ..writeln()
    ..writeln(
      '| mechanism | shape | propose | explicit parse | verdict | reason | E |',
    )
    ..writeln('| --- | --- | --- | --- | --- | --- | --- |');
  for (final raw in result['shapes'] as List? ?? const []) {
    final row = Map<String, Object?>.from(raw as Map);
    buffer.writeln(
      '| ${row['group']} | ${row['label']} | '
      '${_proposeCell(row)} | ${_explicitCell(row)} | ${row['verdict']} | '
      '${row['reasonKind']} | ${_evidenceCell(row)} |',
    );
  }

  buffer
    ..writeln()
    ..writeln('## Shape detail')
    ..writeln();
  for (final raw in result['shapes'] as List? ?? const []) {
    final row = Map<String, Object?>.from(raw as Map);
    buffer.writeln('### ${row['label']}');
    buffer.writeln();
    buffer.writeln('- fixture: `${row['fixture']}`');
    buffer.writeln(
      '- type: `${row['type']}`'
      '${row['member'] == null ? '' : ' · member: `${row['member']}`'}',
    );
    if (row['note'] != null) buffer.writeln('- note: ${row['note']}');
    buffer.writeln('- propose: ${_proposeCell(row)}');
    buffer.writeln(
      '- explicit parse (class-wide): ${_explicitDetail(row['explicitClassWide'])}',
    );
    if (row['explicitMemberIsolated'] != null) {
      buffer.writeln(
        '- explicit parse (member-isolated): '
        '${_explicitDetail(row['explicitMemberIsolated'])}',
      );
    }
    buffer.writeln('- member in module: ${row['memberInModule']}');
    buffer.writeln('- emit: ${_emitDetail(row['emit'])}');
    buffer.writeln(
      '- verdict: **${row['verdict']}** · reason: `${row['reasonKind']}` '
      '(${_evidenceCell(row)})',
    );
    buffer.writeln();
  }

  buffer
    ..writeln('## Widgets evidence (read-only aggregation)')
    ..writeln()
    ..writeln(
      'The widgets inventory is reused as-is; the census is not re-run. These '
      'counts scale the mechanism gaps over the 1339-identity widgets universe.',
    )
    ..writeln();
  final widgets = result['widgetsEvidence'];
  if (widgets is Map && widgets['available'] == true) {
    buffer.writeln('- inventory: `${widgets['path']}`');
    buffer.writeln('- identities: ${widgets['identityCount']}');
    buffer.writeln(
      '- class-like identities: ${widgets['classLikeIdentityCount']}',
    );
    buffer.writeln('- by kind: ${jsonEncode(widgets['byKind'])}');
    buffer.writeln('- modifiers true: ${jsonEncode(widgets['modifiersTrue'])}');
    buffer.writeln(
      '- extension types: ${jsonEncode(widgets['extensionTypes'])}',
    );
    final records = widgets['records'];
    if (records is Map) {
      buffer.writeln(
        '- records by position: '
        '${jsonEncode({for (final entry in records.entries) entry.key: (entry.value as List).length})}',
      );
      for (final entry in records.entries) {
        for (final raw in entry.value as List) {
          final map = Map<String, Object?>.from(raw as Map);
          buffer.writeln(
            '  - ${entry.key}: ${map['member']} — `${map['type']}`',
          );
        }
      }
    }
    buffer.writeln(
      '- callback/record diagnostics: '
      '${jsonEncode(widgets['mechanismDiagnostics'])}',
    );
    buffer.writeln(
      '- identities hit by those diagnostics: '
      '${widgets['mechanismDiagnosticIdentityCount']} / '
      '${widgets['identityCount']}',
    );
  } else {
    buffer.writeln(
      '- unavailable: ${widgets is Map ? widgets['reason'] : widgets}',
    );
  }

  final closure = result['closure'];
  buffer
    ..writeln()
    ..writeln('## Closure gates')
    ..writeln();
  if (closure is Map) {
    buffer.writeln('- automationGap: ${closure['automationGap']}');
    buffer.writeln('- generatorGap: ${closure['generatorGap']}');
  } else {
    buffer.writeln('- unavailable');
  }

  buffer
    ..writeln()
    ..writeln('## Explicit boundaries')
    ..writeln();
  for (final raw in result['boundaries'] as List? ?? const []) {
    final boundary = Map<String, Object?>.from(raw as Map);
    buffer.writeln(
      '- `${boundary['id']}`: ${boundary['verdict']} / '
      '${boundary['reasonKind']} / `${boundary['code']}` — '
      '${boundary['example']} (`${boundary['fixture']}`)',
    );
  }
  return buffer.toString();
}

String _proposeCell(Map<String, Object?> row) {
  final propose = row['propose'] as Map? ?? const {};
  if (propose['error'] != null && propose['bindable'] != true) {
    return 'fail (${propose['error']})';
  }
  final member = propose['memberStatus'];
  final reason = propose['memberSkipReason'];
  return 'bindable=${propose['bindable']}'
      '${member == null ? '' : ' · member=$member'}'
      '${reason == null ? '' : ' · $reason'}';
}

String _explicitCell(Map<String, Object?> row) {
  final effective = row['explicitEffective'];
  final source = effective == 'classWide'
      ? row['explicitClassWide']
      : effective == 'memberIsolated'
      ? row['explicitMemberIsolated']
      : row['explicitClassWide'];
  final parse = source is Map ? source : const <String, Object?>{};
  if (parse['ok'] == true) {
    return 'ok ($effective)';
  }
  return 'fail (${parse['error'] ?? 'unknown'})';
}

String _explicitDetail(Object? value) {
  if (value is! Map) return 'not attempted';
  final skipped = (value['skippedConstructors'] as List?) ?? const [];
  final unreachable = skipped.isEmpty
      ? ''
      : ' · abstract constructors unreachable: ${skipped.join(', ')}';
  if (value['ok'] == true) {
    return 'ok — ${value['classCount']} classes, '
        '${value['elapsedMilliseconds']} ms'
        '${value['memberSelected'] == false ? ' (member not selected)' : ''}'
        '$unreachable';
  }
  return 'fail — ${value['error']}'
      '${value['code'] == null ? '' : ' [${value['code']}]'}';
}

String _emitDetail(Object? value) {
  if (value is! Map) return 'not attempted';
  if (value['ok'] != true) {
    return 'fail — ${value['error'] ?? value['reason']}'
        '${value['code'] == null ? '' : ' [${value['code']}]'}';
  }
  final compile = value['compile'];
  final bytes =
      '${value['mode']}: dart ${value['dartBytes']} B / '
      'ts ${value['tsBytes']} B, emit ${value['emitMilliseconds']} ms';
  if (compile is! Map) return '$bytes · compile not attempted';
  if (compile['ok'] == true) {
    return '$bytes · analyze ${compile['dartErrors']} error / '
        '${compile['dartWarnings']} warning / ${compile['dartInfos']} info, '
        'tsc exit ${compile['tscExitCode']}';
  }
  return '$bytes · compile failed — '
      '${compile['dartError'] ?? compile['error'] ?? compile['reason']} '
      '[${compile['code'] ?? compile['dartCode'] ?? 'compile_failed'}]';
}

String _evidenceCell(Map<String, Object?> row) {
  final emit = row['emit'];
  if (emit is! Map || emit['ok'] != true) return 'E1';
  final compile = emit['compile'];
  if (compile is Map &&
      compile['ok'] == true &&
      compile['dartErrors'] == 0 &&
      compile['tscExitCode'] == 0) {
    return 'E3 (subset)';
  }
  return 'E2 (subset)';
}
