import 'dart:io';

import 'package:analyzer/dart/analysis/analysis_context_collection.dart';
import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import '../tool/src/capability/mechanisms.dart';
import '../tool/src/capability/model.dart';

/// The recorded matrix. Every value below is an observed result, not an
/// expectation about how the binder "should" behave: the probe re-runs the real
/// `proposeSelection` and the real fail-closed `parse`, and the assertions fail
/// if the generator drifts from the recorded behaviour.
void main() {
  final repoRoot = _repoRoot();
  late AnalysisContextCollection collection;
  late FlaxCodegenBindingConfig official;
  final probes = <String, Stage2MechanismProbe>{};

  setUpAll(() {
    collection = AnalysisContextCollection(
      includedPaths: [p.absolute(repoRoot)],
    );
    official = officialBindingConfig(repoRoot);
  });
  tearDownAll(() => collection.dispose());

  Future<Stage2MechanismProbe> probe(String label) async {
    final cached = probes[label];
    if (cached != null) return cached;
    final shape = stage2MechanismShapes.singleWhere(
      (candidate) => candidate.label == label,
    );
    final result = await probeStage2MechanismShape(
      workspaceRoot: repoRoot,
      collection: collection,
      shape: shape,
      official: official,
    );
    probes[label] = result;
    return result;
  }

  test('records every measured shape verdict', () async {
    for (final expected in _recordedShapes) {
      _assertShape(await probe(expected.label), expected);
    }
  }, timeout: const Timeout(Duration(minutes: 20)));

  test('control groups stay selectable and parse fail-closed', () async {
    for (final label in const [
      'callback/sync-callback-param',
      'callback/future-value-param',
    ]) {
      final result = await probe(label);
      expect(result.verdict, CapabilityVerdict.supported, reason: label);
      expect(result.propose['bindable'], isTrue, reason: label);
      expect(
        result.propose['memberStatus'],
        'selected',
        reason: '$label member',
      );
      expect(result.classWide['ok'], isTrue, reason: label);
    }
  });

  test(
    'records stay selectable and parsable in every measured position',
    () async {
      final shapes = _recordedShapes
          .where((expected) => expected.label.startsWith('record/'))
          .toList();
      expect(shapes, hasLength(6));
      for (final expected in shapes) {
        final result = await probe(expected.label);
        expect(
          result.verdict,
          CapabilityVerdict.supported,
          reason: expected.label,
        );
        expect(result.propose['bindable'], isTrue, reason: expected.label);
        expect(
          result.propose['memberStatus'],
          'selected',
          reason: expected.label,
        );
        expect(result.classWide['ok'], isTrue, reason: expected.label);
      }
    },
  );

  test('extension type declaration uses representation semantics', () async {
    final result = await probe('extensionType/declaration');
    expect(result.verdict, CapabilityVerdict.limited);
    expect(result.reasonKind, CapabilityReasonKind.intentionalBoundary);
    expect(result.propose['bindable'], isTrue);
    expect(result.propose['selectionState'], 'representation');
    expect(
      result.propose['skipCodes'],
      contains('extension_type_representation_only'),
    );
    expect(result.classWide['ok'], isTrue);
    expect(result.classWide['classes'], <String>['MetersBox']);
  });

  test('class modifiers stay selectable and parsable', () async {
    final shapes = _recordedShapes
        .where((expected) => expected.label.startsWith('classModifier/'))
        .toList();
    expect(shapes, hasLength(11));
    for (final expected in shapes) {
      final result = await probe(expected.label);
      expect(
        result.verdict,
        CapabilityVerdict.supported,
        reason: expected.label,
      );
      expect(result.propose['bindable'], isTrue, reason: expected.label);
      expect(result.classWide['ok'], isTrue, reason: expected.label);
    }
  }, timeout: const Timeout(Duration(minutes: 3)));

  group('stage2MechanismsArgsError', () {
    test('is silent when the flag is absent', () {
      expect(
        stage2MechanismsArgsError(
          stage2Mechanisms: false,
          anyStage3Flag: false,
          outGiven: false,
        ),
        isNull,
      );
    });

    test('rejects every stage 3 and closure flag', () {
      expect(
        stage2MechanismsArgsError(
          stage2Mechanisms: true,
          anyStage3Flag: true,
          outGiven: true,
        ),
        contains('mutually exclusive'),
      );
    });

    test('requires an explicit output directory', () {
      expect(
        stage2MechanismsArgsError(
          stage2Mechanisms: true,
          anyStage3Flag: false,
          outGiven: false,
        ),
        contains('requires --out'),
      );
    });

    test('accepts the dedicated invocation', () {
      expect(
        stage2MechanismsArgsError(
          stage2Mechanisms: true,
          anyStage3Flag: false,
          outGiven: true,
        ),
        isNull,
      );
    });
  });

  group('stage2MechanismsClosureError', () {
    test('accepts a closed matrix', () {
      expect(
        stage2MechanismsClosureError({
          'closure': {
            'automationGap': 0,
            'generatorGap': 0,
            'environmentBlocked': 0,
          },
        }),
        isNull,
      );
    });

    test('reports unresolved or blocked stages', () {
      expect(
        stage2MechanismsClosureError({
          'closure': {
            'automationGap': 1,
            'generatorGap': 2,
            'environmentBlocked': 3,
          },
        }),
        'Stage 2 mechanism closure failed: automationGap=1, '
        'generatorGap=2, environmentBlocked=3',
      );
    });
  });

  test('the flat shape list covers five mechanisms with unique labels', () {
    expect(stage2MechanismShapes, hasLength(37));
    expect(stage2MechanismShapes.map((shape) => shape.group).toSet(), <String>{
      'callback',
      'record',
      'extensionType',
      'widgetCallback',
      'classModifier',
    });
    expect(
      stage2MechanismShapes.map((shape) => shape.label).toSet(),
      hasLength(stage2MechanismShapes.length),
    );
    expect(stage2MechanismFlutterFixtures, <String>{
      'widget_callback_shapes.dart',
    });
  });

  test('every intentional boundary has a stable code and fixture', () {
    expect(
      stage2MechanismBoundaries.map((boundary) => boundary['id']).toSet(),
      hasLength(stage2MechanismBoundaries.length),
    );
    for (final boundary in stage2MechanismBoundaries) {
      expect(boundary['code'], isNotEmpty, reason: boundary['id'] as String);
      expect(
        boundary['reasonKind'],
        isNot(anyOf('automationGap', 'generatorGap')),
        reason: boundary['id'] as String,
      );
      expect(
        File(
          p.join(
            repoRoot,
            'packages/flax_codegen',
            boundary['fixture'] as String,
          ),
        ).existsSync(),
        isTrue,
        reason: boundary['id'] as String,
      );
    }
  });

  group('aggregateWidgetsEvidence', () {
    test('reports unavailable payloads without throwing', () {
      expect(aggregateWidgetsEvidence(null)['available'], isFalse);
      expect(
        aggregateWidgetsEvidence(<String, Object?>{})['available'],
        isFalse,
      );
    });

    test('counts kinds, modifiers, records and callback diagnostics', () {
      final evidence = aggregateWidgetsEvidence(_syntheticInventory);
      expect(evidence['available'], isTrue);
      expect(evidence['identityCount'], 4);
      expect(evidence['classLikeIdentityCount'], 3);
      expect(evidence['byKind'], {'class': 2, 'enum': 1, 'mixin': 1});
      expect(evidence['modifiersTrue'], {'abstract': 1, 'final': 1});
      expect(evidence['extensionTypes'], isEmpty);
      final records = evidence['records']! as Map<String, Object?>;
      expect((records['resultPosition']! as List), hasLength(1));
      expect((records['parameterPosition']! as List), hasLength(1));
      expect((records['insideCallbackSignature']! as List), hasLength(1));
      expect(evidence['mechanismDiagnostics'], {
        'context_input_callback_only': 1,
        'unsupported_binding_type': 1,
      });
      expect(evidence['mechanismDiagnosticIdentityCount'], 2);
    });
  });

  test('renders the matrix, structured stages and explicit boundaries', () {
    final markdown = stage2MechanismsMarkdown(<String, Object?>{
      'denominators': <String, Object?>{'matrix': '1 shape'},
      'shapes': <Map<String, Object?>>[
        <String, Object?>{
          'group': 'callback',
          'label': 'callback/sync-callback-param',
          'fixture': 'callback_shapes.dart',
          'type': 'SyncCallbackBox',
          'member': 'run',
          'propose': <String, Object?>{
            'bindable': true,
            'memberStatus': 'selected',
          },
          'explicitClassWide': <String, Object?>{
            'ok': true,
            'classCount': 1,
            'elapsedMilliseconds': 1,
          },
          'explicitEffective': 'classWide',
          'memberInModule': true,
          'emit': null,
          'verdict': 'supported',
          'reasonKind': 'none',
          'stages': const CapabilityStages().toJson(),
        },
      ],
      'widgetsEvidence': <String, Object?>{
        'available': true,
        'path': '.local/inventory.json',
        'identityCount': 3,
        'classLikeIdentityCount': 2,
        'byKind': <String, Object?>{'class': 2, 'enum': 1},
        'modifiersTrue': <String, Object?>{'abstract': 1},
        'extensionTypes': <String>[],
        'records': <String, Object?>{
          'resultPosition': <Object?>[],
          'parameterPosition': <Object?>[],
          'insideCallbackSignature': <Object?>[],
        },
        'mechanismDiagnostics': <String, Object?>{},
        'mechanismDiagnosticIdentityCount': 0,
      },
      'closure': <String, Object?>{
        'automationGap': 0,
        'generatorGap': 0,
        'environmentBlocked': 0,
      },
      'boundaries': stage2MechanismBoundaries,
    });

    expect(markdown, contains('# Stage 2 — mechanism matrix'));
    expect(
      markdown,
      contains(
        '| mechanism | shape | propose | explicit parse | verdict | reason | E |',
      ),
    );
    expect(markdown, contains('| callback | callback/sync-callback-param |'));
    expect(markdown, contains('## Widgets evidence (read-only aggregation)'));
    expect(markdown, contains('## Closure gates'));
    expect(markdown, contains('- automationGap: 0'));
    expect(markdown, contains('## Explicit boundaries'));
    expect(markdown, contains('`async_mounted_widget_result`'));
  });
}

void _assertShape(Stage2MechanismProbe probe, _ShapeExpectation expected) {
  final label = expected.label;
  final propose = probe.propose;
  expect(probe.verdict, expected.verdict, reason: label);
  expect(probe.reasonKind, expected.reasonKind, reason: '$label reasonKind');
  expect(probe.effectiveRoute, expected.route, reason: label);
  expect(propose['bindable'], expected.bindable, reason: label);
  if (expected.proposeSelectionState != null) {
    expect(
      propose['selectionState'],
      expected.proposeSelectionState,
      reason: label,
    );
  }
  if (expected.member != null) {
    expect(propose['memberStatus'], expected.memberStatus, reason: label);
  }
  if (expected.skips != null) {
    expect(propose['skips'], expected.skips, reason: label);
  }

  expect(probe.classWide['ok'], expected.classWideOk, reason: label);
  if (expected.classWideError != null) {
    expect(probe.classWide['error'], expected.classWideError, reason: label);
  }
  if (expected.classWideClasses != null) {
    expect(
      probe.classWide['classes'],
      expected.classWideClasses,
      reason: label,
    );
  }
  if (expected.classWideMemberSelected != null) {
    expect(
      probe.classWide['memberSelected'],
      expected.classWideMemberSelected,
      reason: label,
    );
  }

  if (expected.memberIsolatedOk != null) {
    final isolated = probe.memberIsolated;
    expect(isolated, isNotNull, reason: label);
    expect(isolated!['ok'], expected.memberIsolatedOk, reason: label);
    if (expected.memberIsolatedError != null) {
      expect(isolated['error'], expected.memberIsolatedError, reason: label);
    }
    if (expected.memberIsolatedClasses != null) {
      expect(
        isolated['classes'],
        expected.memberIsolatedClasses,
        reason: label,
      );
    }
  } else if (expected.classWideOk) {
    expect(probe.memberIsolated, isNull, reason: label);
  }

  expect(_memberInModule(probe), expected.memberInModule, reason: label);
}

/// Mirrors the report's member check against the module produced by the
/// effective route.
Object? _memberInModule(Stage2MechanismProbe probe) {
  final module = probe.module;
  if (module == null) return null;
  final member = probe.shape.member;
  if (member == null) return true;
  for (final model in module.classes) {
    if (model.name != probe.shape.type) continue;
    return model.getters.any((getter) => getter.name == member) ||
        model.methods.any((method) => method.name == member) ||
        model.constructors.any((constructor) => constructor.name == member);
  }
  return false;
}

final class _ShapeExpectation {
  const _ShapeExpectation({
    required this.label,
    required this.fixture,
    required this.type,
    this.member,
    this.proposeTarget,
    required this.verdict,
    this.reasonKind = CapabilityReasonKind.none,
    required this.route,
    required this.bindable,
    this.proposeSelectionState,
    this.memberStatus,
    this.skips,
    required this.classWideOk,
    this.classWideError,
    this.classWideClasses,
    this.classWideMemberSelected,
    this.memberIsolatedOk,
    this.memberIsolatedError,
    this.memberIsolatedClasses,
    required this.memberInModule,
  });

  final String label;
  final String fixture;
  final String type;
  final String? member;
  final String? proposeTarget;
  final CapabilityVerdict verdict;
  final CapabilityReasonKind reasonKind;
  final String route;
  final bool bindable;
  final String? proposeSelectionState;
  final String? memberStatus;
  final List<String>? skips;
  final bool classWideOk;
  final String? classWideError;
  final List<String>? classWideClasses;
  final bool? classWideMemberSelected;
  final bool? memberIsolatedOk;
  final String? memberIsolatedError;
  final List<String>? memberIsolatedClasses;
  final Object? memberInModule;
}

const Map<String, Object?> _syntheticInventory = {
  'declarations': <Map<String, Object?>>[
    {
      'id': 'package:x/a.dart::AbstractBox',
      'name': 'AbstractBox',
      'kind': 'class',
      'modifiers': {'abstract': true, 'final': false},
      'declaredMembers': <Map<String, Object?>>[
        {
          'name': 'take',
          'resultType': '(int, String)',
          'parameters': <Map<String, Object?>>[
            {'name': 'seed', 'type': '(int, int)'},
          ],
        },
      ],
      'assessment': {
        'verdict': 'limited',
        'diagnostics': <Map<String, Object?>>[
          {
            'code': 'context_input_callback_only',
            'message': 'Context inputs are currently callback-only',
          },
        ],
      },
    },
    {
      'id': 'package:x/a.dart::FinalBox',
      'name': 'FinalBox',
      'kind': 'class',
      'modifiers': {'final': true},
      'declaredMembers': <Map<String, Object?>>[
        {
          'name': 'configure',
          'resultType': 'void',
          'parameters': <Map<String, Object?>>[
            {'name': 'build', 'type': 'Widget Function(BuildContext)'},
            {
              'name': 'callback',
              'type':
                  'void Function({required Future<Map<String, dynamic>> '
                  'Function(Map<String, String>) callback, required String name})',
            },
          ],
        },
      ],
      'assessment': {
        'verdict': 'unsupported',
        'diagnostics': <Map<String, Object?>>[
          {
            'code': 'unsupported_binding_type',
            'message': 'Unsupported member type: BuildContext',
          },
        ],
      },
    },
    {'id': 'package:x/a.dart::Mode', 'name': 'Mode', 'kind': 'enum'},
    {'id': 'package:x/a.dart::Mix', 'name': 'Mix', 'kind': 'mixin'},
  ],
};

const List<_ShapeExpectation> _recordedShapes = <_ShapeExpectation>[
  _ShapeExpectation(
    label: 'callback/sync-callback-param',
    fixture: 'callback_shapes.dart',
    type: 'SyncCallbackBox',
    member: 'run',
    verdict: CapabilityVerdict.supported,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    classWideOk: true,
    classWideClasses: <String>['SyncCallbackBox'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'callback/future-in-callback-param',
    fixture: 'callback_shapes.dart',
    type: 'FutureArgCallback',
    member: 'onEach',
    verdict: CapabilityVerdict.supported,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    classWideOk: true,
    classWideClasses: <String>['FutureArgCallback'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'callback/future-value-param',
    fixture: 'callback_shapes.dart',
    type: 'FutureArgCallback',
    member: 'whenDone',
    verdict: CapabilityVerdict.supported,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    classWideOk: true,
    classWideClasses: <String>['FutureArgCallback'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'callback/future-result-callback',
    fixture: 'callback_shapes.dart',
    type: 'FutureResultCallback',
    member: 'schedule',
    verdict: CapabilityVerdict.supported,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    classWideOk: true,
    classWideClasses: <String>['FutureResultCallback'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'callback/future-or-callback-param',
    fixture: 'callback_shapes.dart',
    type: 'FutureOrCallback',
    member: 'scheduleOrValue',
    verdict: CapabilityVerdict.supported,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    classWideOk: true,
    classWideClasses: <String>['FutureOrCallback'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'callback/future-or-value-param',
    fixture: 'callback_shapes.dart',
    type: 'FutureOrCallback',
    member: 'echoOrValue',
    verdict: CapabilityVerdict.supported,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    classWideOk: true,
    classWideClasses: <String>['FutureOrCallback'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'callback/nested-future-callback',
    fixture: 'callback_shapes.dart',
    type: 'NestedFutureCallback',
    member: 'nested',
    verdict: CapabilityVerdict.supported,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    classWideOk: true,
    classWideClasses: <String>['NestedFutureCallback'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'callback/stream-in-callback-param',
    fixture: 'callback_shapes.dart',
    type: 'StreamCallback',
    member: 'listenAll',
    verdict: CapabilityVerdict.supported,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    classWideOk: true,
    classWideClasses: <String>['StreamCallback', 'Stream'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'callback/stream-result',
    fixture: 'callback_shapes.dart',
    type: 'StreamCallback',
    member: 'watch',
    verdict: CapabilityVerdict.supported,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    classWideOk: true,
    classWideClasses: <String>['StreamCallback', 'Stream'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'record/constructor-field',
    fixture: 'record_shapes.dart',
    type: 'RecordBox',
    member: 'seed',
    verdict: CapabilityVerdict.supported,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    classWideOk: true,
    classWideClasses: <String>['RecordBox'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'record/param-and-result',
    fixture: 'record_shapes.dart',
    type: 'RecordBox',
    member: 'take',
    verdict: CapabilityVerdict.supported,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    classWideOk: true,
    classWideClasses: <String>['RecordBox'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'record/result-only',
    fixture: 'record_shapes.dart',
    type: 'RecordBox',
    member: 'pair',
    verdict: CapabilityVerdict.supported,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    classWideOk: true,
    classWideClasses: <String>['RecordBox'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'record/named-param-and-result',
    fixture: 'record_shapes.dart',
    type: 'RecordBox',
    member: 'takeNamed',
    verdict: CapabilityVerdict.supported,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    classWideOk: true,
    classWideClasses: <String>['RecordBox'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'record/list-of-records',
    fixture: 'record_shapes.dart',
    type: 'RecordBox',
    member: 'takeAll',
    verdict: CapabilityVerdict.supported,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    classWideOk: true,
    classWideClasses: <String>['RecordBox'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'record/future-of-record',
    fixture: 'record_shapes.dart',
    type: 'RecordBox',
    member: 'takeFuture',
    verdict: CapabilityVerdict.supported,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    classWideOk: true,
    classWideClasses: <String>['RecordBox'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'extensionType/declaration',
    fixture: 'extension_type_shapes.dart',
    type: 'MetersBox',
    proposeTarget: 'Meters',
    verdict: CapabilityVerdict.limited,
    reasonKind: CapabilityReasonKind.intentionalBoundary,
    route: 'classWide',
    bindable: true,
    proposeSelectionState: 'representation',
    classWideOk: true,
    classWideClasses: <String>['MetersBox'],
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'extensionType/field',
    fixture: 'extension_type_shapes.dart',
    type: 'MetersBox',
    member: 'meters',
    verdict: CapabilityVerdict.limited,
    reasonKind: CapabilityReasonKind.intentionalBoundary,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    classWideOk: true,
    classWideClasses: <String>['MetersBox'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'extensionType/getter',
    fixture: 'extension_type_shapes.dart',
    type: 'MetersBox',
    member: 'total',
    verdict: CapabilityVerdict.limited,
    reasonKind: CapabilityReasonKind.intentionalBoundary,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    classWideOk: true,
    classWideClasses: <String>['MetersBox'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'extensionType/method-param',
    fixture: 'extension_type_shapes.dart',
    type: 'MetersBox',
    member: 'double',
    verdict: CapabilityVerdict.limited,
    reasonKind: CapabilityReasonKind.intentionalBoundary,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    classWideOk: true,
    classWideClasses: <String>['MetersBox'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'widgetCallback/builder-callback-param',
    fixture: 'widget_callback_shapes.dart',
    type: 'WidgetBuilderBox',
    member: 'configure',
    verdict: CapabilityVerdict.unsupported,
    reasonKind: CapabilityReasonKind.intentionalBoundary,
    route: 'failed',
    bindable: true,
    memberStatus: 'selected',
    skips: <String>[
      'WidgetBuilderBox.buildOnce.context: Context inputs are currently '
          'callback-only',
    ],
    classWideOk: false,
    classWideError:
        'Bad state: Method callbacks require synchronous data arguments and '
        'results',
    memberIsolatedOk: false,
    memberIsolatedError:
        'Bad state: Method callbacks require synchronous data arguments and '
        'results',
    memberInModule: null,
  ),
  _ShapeExpectation(
    label: 'widgetCallback/context-param',
    fixture: 'widget_callback_shapes.dart',
    type: 'WidgetBuilderBox',
    member: 'buildOnce',
    verdict: CapabilityVerdict.unsupported,
    reasonKind: CapabilityReasonKind.intentionalBoundary,
    route: 'memberIsolated',
    bindable: true,
    memberStatus: 'skipped',
    skips: <String>[
      'WidgetBuilderBox.buildOnce.context: Context inputs are currently '
          'callback-only',
    ],
    classWideOk: false,
    classWideError:
        'Bad state: Method callbacks require synchronous data arguments and '
        'results',
    memberIsolatedOk: true,
    memberIsolatedClasses: <String>['WidgetBuilderBox', 'BuildContext'],
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'widgetCallback/widget-param',
    fixture: 'widget_callback_shapes.dart',
    type: 'WidgetSinkBox',
    member: 'sink',
    verdict: CapabilityVerdict.supported,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    classWideOk: true,
    classWideClasses: <String>['WidgetSinkBox'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'widgetCallback/widget-callback-param',
    fixture: 'widget_callback_shapes.dart',
    type: 'WidgetSinkBox',
    member: 'sinkAll',
    verdict: CapabilityVerdict.supported,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    classWideOk: true,
    classWideClasses: <String>['WidgetSinkBox'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'widgetCallback/widget-result',
    fixture: 'widget_callback_shapes.dart',
    type: 'WidgetSinkBox',
    member: 'children',
    verdict: CapabilityVerdict.supported,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    classWideOk: true,
    classWideClasses: <String>['WidgetSinkBox'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'widgetCallback/future-widget-result',
    fixture: 'widget_callback_shapes.dart',
    type: 'WidgetFutureBox',
    member: 'later',
    verdict: CapabilityVerdict.supported,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    classWideOk: true,
    classWideClasses: <String>['WidgetFutureBox'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'widgetCallback/nullable-widget-callback',
    fixture: 'widget_callback_shapes.dart',
    type: 'WidgetNullableBox',
    member: 'maybe',
    verdict: CapabilityVerdict.supported,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    skips: <String>[],
    classWideOk: true,
    classWideClasses: <String>['WidgetNullableBox'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'classModifier/abstract',
    fixture: 'class_modifier_shapes.dart',
    type: 'AbstractBox',
    member: 'value',
    verdict: CapabilityVerdict.supported,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    skips: <String>[],
    classWideOk: true,
    classWideClasses: <String>['AbstractBox'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'classModifier/mixin',
    fixture: 'class_modifier_shapes.dart',
    type: 'PlainMixin',
    member: 'value',
    verdict: CapabilityVerdict.supported,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    classWideOk: true,
    classWideClasses: <String>['PlainMixin'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'classModifier/mixin-class',
    fixture: 'class_modifier_shapes.dart',
    type: 'UtilityMixinClass',
    member: 'value',
    verdict: CapabilityVerdict.supported,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    classWideOk: true,
    classWideClasses: <String>['UtilityMixinClass'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'classModifier/base',
    fixture: 'class_modifier_shapes.dart',
    type: 'BaseBox',
    member: 'value',
    verdict: CapabilityVerdict.supported,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    classWideOk: true,
    classWideClasses: <String>['BaseBox'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'classModifier/final',
    fixture: 'class_modifier_shapes.dart',
    type: 'FinalBox',
    member: 'value',
    verdict: CapabilityVerdict.supported,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    classWideOk: true,
    classWideClasses: <String>['FinalBox'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'classModifier/interface',
    fixture: 'class_modifier_shapes.dart',
    type: 'InterfaceBox',
    member: 'value',
    verdict: CapabilityVerdict.supported,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    classWideOk: true,
    classWideClasses: <String>['InterfaceBox'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'classModifier/interface-implementation',
    fixture: 'class_modifier_shapes.dart',
    type: 'InterfaceBoxImpl',
    member: 'value',
    verdict: CapabilityVerdict.supported,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    classWideOk: true,
    classWideClasses: <String>['InterfaceBoxImpl'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'classModifier/sealed',
    fixture: 'class_modifier_shapes.dart',
    type: 'SealedBox',
    member: 'value',
    verdict: CapabilityVerdict.supported,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    skips: <String>[
      'SealedBox.: Abstract generative constructor requires an extends proxy',
    ],
    classWideOk: true,
    classWideClasses: <String>['SealedBox'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'classModifier/sealed-child',
    fixture: 'class_modifier_shapes.dart',
    type: 'SealedBoxChild',
    verdict: CapabilityVerdict.supported,
    route: 'classWide',
    bindable: true,
    classWideOk: true,
    classWideClasses: <String>['SealedBoxChild'],
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'classModifier/abstract-interface',
    fixture: 'class_modifier_shapes.dart',
    type: 'AbstractInterfaceBox',
    member: 'value',
    verdict: CapabilityVerdict.supported,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    skips: <String>[],
    classWideOk: true,
    classWideClasses: <String>['AbstractInterfaceBox'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
  _ShapeExpectation(
    label: 'classModifier/abstract-interface-implementation',
    fixture: 'class_modifier_shapes.dart',
    type: 'AbstractInterfaceBoxImpl',
    member: 'value',
    verdict: CapabilityVerdict.supported,
    route: 'classWide',
    bindable: true,
    memberStatus: 'selected',
    classWideOk: true,
    classWideClasses: <String>['AbstractInterfaceBoxImpl'],
    classWideMemberSelected: true,
    memberInModule: true,
  ),
];

String _repoRoot() {
  var directory = Directory.current;
  for (var i = 0; i < 6; i++) {
    final candidate = directory.path;
    if (File(p.join(candidate, 'pubspec.yaml')).existsSync() &&
        File(p.join(candidate, 'packages/flax_codegen/pubspec.yaml'))
            .existsSync()) {
      return candidate;
    }
    directory = directory.parent;
  }
  throw StateError(
    'Cannot locate the Flax repository from ${Directory.current.path}',
  );
}
