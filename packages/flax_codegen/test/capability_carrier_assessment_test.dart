import 'package:flax_codegen/flax_codegen.dart';
import 'package:test/test.dart';

import '../tool/src/capability/assess.dart';
import '../tool/src/capability/model.dart';
import '../tool/src/capability/report.dart';

void main() {
  test('automatic A/B attributes carrier and generic gains independently', () {
    final carrier = _declaration(
      'CarrierType',
      diagnostic: const CapabilityDiagnostic(
        code: 'missing_export',
        message: 'missing carrier',
      ),
    );
    final generic = _declaration(
      'GenericType',
      diagnostic: const CapabilityDiagnostic(
        code: 'generic_instantiation',
        message: 'runtime type arguments required',
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
        'GenericType': const FlaxCodegenClassSelection({}, kind: 'object'),
      }),
      skips: const [
        FlaxCodegenSkip(
          target: 'CarrierType',
          reason: 'package:fixture/main.dart must publicly export the referenced type Dependency',
        ),
      ],
    );
    final withCarrier = FlaxCodegenAutoBindingProposal(
      config: _config({
        'CarrierType': const FlaxCodegenClassSelection({}, kind: 'object'),
        'GenericType': const FlaxCodegenClassSelection({}, kind: 'object'),
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
      isNot(contains('generic_specialization_automation')),
    );
    expect(
      generic.assessment!.diagnostics.map((value) => value.code),
      contains('generic_specialization_automation'),
    );
    expect(
      generic.assessment!.diagnostics.map((value) => value.code),
      isNot(contains('public_carrier_automation')),
    );

    final insights = firstBatchInsights(inventory);
    expect(insights['automaticBaselineUnsupported'], 1);
    expect(insights['automaticUnsupported'], 0);
    expect(insights['publicCarrierAutomation'], 1);
    expect(insights['genericSpecializationAutomation'], 1);
  });
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
}) => ApiDeclarationRecord(
  id: 'package:fixture/main.dart::$name',
  name: name,
  kind: 'class',
  sourceLibrary: 'package:fixture/main.dart',
  publicEntries: const ['package:fixture/main.dart'],
  exportNames: [name],
  signature: name,
  typeParameters: const [],
  supertypes: const [],
  dependencies: const [],
  declaredMembers: const [],
  interfaceMembers: const [],
  modifiers: const {},
  isDeprecated: false,
  assessment: BindingAssessment(
    status: CoverageStatus.unsupported,
    evidence: EvidenceLevel.e1,
    useCases: const {'pooled': 'unsupported'},
    surface: const {},
    diagnostics: [diagnostic],
  ),
);
