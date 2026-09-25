import 'package:flax_codegen/flax_codegen.dart';
import 'package:test/test.dart';

import '../tool/src/capability/assess.dart';
import '../tool/src/capability/model.dart';
import '../tool/src/capability/report.dart';

void main() {
  test(
    'automatic A/B attributes carrier and generic semantics independently',
    () {
      final carrier = _declaration(
        'CarrierType',
        diagnostic: const CapabilityDiagnostic(
          code: 'missing_export',
          message: 'missing carrier',
        ),
      );
      final generic = _declaration(
        'GenericType',
        generic: true,
        diagnostic: const CapabilityDiagnostic(
          code: 'constructor_specialization_missing_use_site',
          message: 'missing concrete use site',
        ),
      );
      final inventory = LibraryInventory(
        entry: 'package:fixture/main.dart',
        resolved: true,
        elapsedMilliseconds: 0,
        declarations: [carrier, generic],
      );
      final baseline = FlaxCodegenAutoBindingProposal(
        config: _config({
          'GenericType': const FlaxCodegenClassSelection({
            '': ['value'],
          }, kind: 'object'),
        }),
        skips: const [
          FlaxCodegenSkip(
            target: 'CarrierType',
            reason: 'package:fixture/main.dart must publicly export the referenced type Dependency',
            code: 'missing_export',
          ),
        ],
      );
      final withCarrier = FlaxCodegenAutoBindingProposal(
        config: _config({
          'CarrierType': const FlaxCodegenClassSelection({}, kind: 'object'),
          'GenericType': const FlaxCodegenClassSelection({
            '': ['value'],
          }, kind: 'object'),
        }),
      );

      applyAutomaticLibraryProposal(
        inventory: inventory,
        baselineProposal: baseline,
        proposal: withCarrier,
      );

      expect(
        carrier.assessment!.diagnostics.map((value) => value.code),
        contains('public_carrier_automation'),
      );
      expect(
        carrier.assessment!.diagnostics.map((value) => value.code),
        isNot(contains('constructor_specialization_resolved')),
      );
      expect(
        generic.assessment!.diagnostics.map((value) => value.code),
        containsAll([
          'shared_owner_resolved',
          'constructor_specialization_resolved',
        ]),
      );
      expect(
        generic.assessment!.diagnostics.map((value) => value.code),
        isNot(contains('public_carrier_automation')),
      );

      final insights = capabilityInsights(inventory);
      expect(insights['automaticBaselineUnsupported'], 1);
      expect(insights['automaticUnsupported'], 0);
      expect(insights['publicCarrierAutomation'], 1);
      expect(insights['sharedOwnerResolved'], 1);
      expect(insights['constructorSpecializationResolved'], 1);
      expect(insights['constructorSpecializationMissingUseSite'], 0);
    },
  );

  test(
    'reports current generic capability categories without legacy buckets',
    () {
      final missing = _declaration(
        'MissingUseSite',
        generic: true,
        diagnostic: const CapabilityDiagnostic(
          code: 'constructor_specialization_missing_use_site',
          message: 'missing concrete use site',
        ),
      );
      final ambiguous = _declaration(
        'AmbiguousConstructor',
        generic: true,
        diagnostic: const CapabilityDiagnostic(
          code: 'constructor_specialization_ambiguous',
          message: 'overlapping runtime domains',
        ),
      );
      final complex = _declaration(
        'ComplexBound',
        generic: true,
        diagnostic: const CapabilityDiagnostic(
          code: 'complex_generic_bound',
          message: 'dependent generic bound',
        ),
      );
      final inventory = LibraryInventory(
        entry: 'package:fixture/main.dart',
        resolved: true,
        elapsedMilliseconds: 0,
        declarations: [missing, ambiguous, complex],
      );
      final proposal = FlaxCodegenAutoBindingProposal(
        config: _config({
          'MissingUseSite': const FlaxCodegenClassSelection({}, kind: 'object'),
          'AmbiguousConstructor': const FlaxCodegenClassSelection(
            {},
            kind: 'object',
          ),
        }),
        skips: const [
          FlaxCodegenSkip(
            target: 'MissingUseSite.',
            reason: 'missing concrete use site',
            code: 'constructor_specialization_missing_use_site',
          ),
          FlaxCodegenSkip(
            target: 'AmbiguousConstructor.',
            reason: 'overlapping runtime domains',
            code: 'constructor_specialization_ambiguous',
          ),
          FlaxCodegenSkip(
            target: 'ComplexBound',
            reason: 'dependent generic bound',
            code: 'complex_generic_bound',
          ),
        ],
      );

      applyAutomaticLibraryProposal(
        inventory: inventory,
        baselineProposal: proposal,
        proposal: proposal,
      );

      final insights = capabilityInsights(inventory);
      expect(insights['sharedOwnerResolved'], 2);
      expect(insights['constructorSpecializationMissingUseSite'], 1);
      expect(insights['constructorSpecializationAmbiguous'], 1);
      expect(insights['complexGenericBound'], 1);
    },
  );
}

FlaxCodegenBindingConfig _config(
  Map<String, FlaxCodegenClassSelection> classes,
) => FlaxCodegenBindingConfig(
  'fixture',
  'package:fixture/main.dart',
  '@example/fixture',
  'unused.dart',
  'unused.ts',
  classes,
);

ApiDeclarationRecord _declaration(
  String name, {
  required CapabilityDiagnostic diagnostic,
  bool generic = false,
}) => ApiDeclarationRecord(
  id: 'package:fixture/main.dart::$name',
  name: name,
  kind: 'class',
  sourceLibrary: 'package:fixture/main.dart',
  publicEntries: const ['package:fixture/main.dart'],
  exportNames: [name],
  signature: name,
  typeParameters: generic ? const ['T'] : const [],
  supertypes: const [],
  dependencies: const [],
  declaredMembers: const [],
  interfaceMembers: const [],
  modifiers: const {},
  isDeprecated: false,
  assessment: BindingAssessment(
    verdict: CapabilityVerdict.unsupported,
    reasonKind: CapabilityReasonKind.intentionalBoundary,
    source: CapabilitySource.automatic,
    evidence: EvidenceLevel.e1,
    useCases: const {'pooled': 'unsupported'},
    surface: const {},
    diagnostics: [diagnostic],
  ),
);
