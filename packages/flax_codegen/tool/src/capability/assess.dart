import 'package:analyzer/dart/element/element.dart';
import 'package:flax_codegen/flax_codegen.dart';

import 'inventory.dart';
import 'model.dart';

Future<void> assessLibrary({
  required FlaxCodegenBindingParser parser,
  required FlaxCodegenBindingConfig library,
  required LibraryInventory inventory,
  required AnalysisLookup lookup,
  String label = 'pooled',
}) async {
  for (final declaration in inventory.declarations) {
    declaration.assessment = await assessDeclaration(
      parser: parser,
      library: library,
      declaration: declaration,
      lookup: lookup,
      label: label,
    );
  }
}

typedef AnalysisLookup = Future<Element?> Function(
  ApiDeclarationRecord declaration,
);

Future<BindingAssessment> assessDeclaration({
  required FlaxCodegenBindingParser parser,
  required FlaxCodegenBindingConfig library,
  required ApiDeclarationRecord declaration,
  required AnalysisLookup lookup,
  String label = 'pooled',
}) async {
  final element = await lookup(declaration);
  if (element == null) {
    return _finished(
      verdict: CapabilityVerdict.unsupported,
      reasonKind: CapabilityReasonKind.generatorGap,
      source: CapabilitySource.inventory,
      evidence: EvidenceLevel.e0,
      useCase: label,
      code: 'analysis_element_unavailable',
      detail: 'Could not reload ${declaration.id} from ${library.library}',
      declaration: declaration,
      automatic: const CapabilityStageResult(
        CapabilityStageStatus.failed,
        code: 'analysis_element_unavailable',
      ),
    );
  }
  if (element is ExtensionElement && element.name == null) {
    return _finished(
      verdict: CapabilityVerdict.excluded,
      reasonKind: CapabilityReasonKind.visibility,
      source: CapabilitySource.inventory,
      evidence: EvidenceLevel.e0,
      useCase: label,
      code: 'unnamed_extension',
      detail: 'Unnamed extensions have no stable public binding name',
      declaration: declaration,
      automatic: const CapabilityStageResult(
        CapabilityStageStatus.notApplicable,
        code: 'unnamed_extension',
      ),
    );
  }
  if (element is! InterfaceElement) {
    return _finished(
      verdict: CapabilityVerdict.limited,
      reasonKind: CapabilityReasonKind.configurationRequired,
      source: CapabilitySource.inventory,
      evidence: EvidenceLevel.e0,
      useCase: label,
      code: 'library_proposal_required',
      detail:
          '${declaration.kind} is assessed by the complete library proposal',
      declaration: declaration,
    );
  }
  try {
    final proposed = await parser.proposeSelection(element, library: library);
    return _fromClassProposal(
      proposed,
      declaration,
      label,
      source: CapabilitySource.automatic,
    );
  } on Object catch (error) {
    return _finished(
      verdict: CapabilityVerdict.unsupported,
      reasonKind: CapabilityReasonKind.generatorGap,
      source: CapabilitySource.automatic,
      evidence: EvidenceLevel.e1,
      useCase: label,
      code: 'automatic_proposal_failed',
      detail: error.toString().split('\n').first,
      declaration: declaration,
      automatic: const CapabilityStageResult(
        CapabilityStageStatus.failed,
        code: 'automatic_proposal_failed',
      ),
    );
  }
}

BindingAssessment mergeIsolated(
  BindingAssessment pooled,
  BindingAssessment isolated,
) {
  final diagnostics = [...pooled.diagnostics];
  if (isolated.verdict != pooled.verdict) {
    diagnostics.add(
      CapabilityDiagnostic(
        code:
            isolated.verdict == CapabilityVerdict.unsupported &&
                pooled.verdict != CapabilityVerdict.unsupported
            ? 'missing_dependency'
            : 'isolated_differs',
        message:
            'isolated=${isolated.verdict.name} pooled=${pooled.verdict.name}',
        chain: [
          for (final diagnostic in isolated.diagnostics) diagnostic.message,
        ],
      ),
    );
  }
  return BindingAssessment(
    verdict: pooled.verdict,
    reasonKind: pooled.reasonKind,
    source: pooled.source,
    evidence: pooled.evidence,
    useCases: {...isolated.useCases, ...pooled.useCases},
    surface: {
      ...pooled.surface,
      'isolatedVerdict': isolated.verdict.name,
      'pooledVerdict': pooled.verdict.name,
    },
    diagnostics: diagnostics,
    stages: pooled.stages,
    selection: pooled.selection,
    provider: pooled.provider,
  );
}

void applyAutomaticLibraryProposal({
  required LibraryInventory inventory,
  required FlaxCodegenAutoBindingProposal baselineProposal,
  required FlaxCodegenAutoBindingProposal proposal,
  String label = 'automatic',
}) {
  for (final declaration in inventory.declarations) {
    final previous = declaration.assessment;
    final baseline = _automaticAssessment(
      baselineProposal,
      declaration,
      '$label-baseline',
    );
    final automatic = _automaticAssessment(proposal, declaration, label);
    final carrierResolved =
        baseline.diagnostics.any(
          (diagnostic) => diagnostic.code == 'missing_export',
        ) &&
        !automatic.diagnostics.any(
          (diagnostic) => diagnostic.code == 'missing_export',
        );
    declaration.assessment = BindingAssessment(
      verdict: automatic.verdict,
      reasonKind: automatic.reasonKind,
      source: automatic.source,
      evidence: automatic.evidence,
      useCases: {...?previous?.useCases, ...automatic.useCases},
      surface: {
        ...automatic.surface,
        if (previous != null) 'pooledVerdict': previous.verdict.name,
        'automaticBaselineVerdict': baseline.verdict.name,
        'automaticVerdict': automatic.verdict.name,
      },
      diagnostics: [
        ...automatic.diagnostics,
        if (carrierResolved)
          const CapabilityDiagnostic(
            code: 'public_carrier_automation',
            message: 'Automatic library routing resolved a same-package public carrier',
          ),
      ],
      stages: automatic.stages,
      selection: automatic.selection,
      provider: automatic.provider ?? previous?.provider,
    );
  }
}

BindingAssessment _automaticAssessment(
  FlaxCodegenAutoBindingProposal proposal,
  ApiDeclarationRecord declaration,
  String label,
) {
  if (declaration.kind == 'extension' && declaration.exportNames.isEmpty) {
    return _finished(
      verdict: CapabilityVerdict.excluded,
      reasonKind: CapabilityReasonKind.visibility,
      source: CapabilitySource.inventory,
      evidence: EvidenceLevel.e0,
      useCase: label,
      code: 'unnamed_extension',
      detail: 'Unnamed extensions have no stable public binding name',
      declaration: declaration,
      automatic: const CapabilityStageResult(
        CapabilityStageStatus.notApplicable,
        code: 'unnamed_extension',
      ),
    );
  }
  final names = <String>{declaration.name, ...declaration.exportNames};
  bool matchesTarget(String target) {
    for (final name in names) {
      if (target == name || target == '$name=' || target.startsWith('$name.')) {
        return true;
      }
    }
    return false;
  }

  final skips = [
    for (final skip in proposal.skips)
      if (matchesTarget(skip.target)) skip,
  ];
  switch (declaration.kind) {
    case 'class':
    case 'mixin':
      final entry = _namedEntry(proposal.config.classes, names);
      return _fromClassProposal(
        FlaxCodegenProposedBinding(
          name: declaration.name,
          id: declaration.id,
          selection: entry?.value,
          skips: skips,
        ),
        declaration,
        label,
        source: CapabilitySource.automatic,
      );
    case 'extensionType':
      final selectedName = _selectedName(proposal.config.types, names);
      return _fromLibrarySelection(
        declaration: declaration,
        label: label,
        selected: selectedName != null,
        selection: selectedName == null
            ? null
            : {'kind': 'extensionType', 'name': selectedName},
        skips: skips,
      );
    case 'enum':
      final selectedName = _selectedName(proposal.config.types, names);
      return _fromEnumSelection(
        declaration: declaration,
        label: label,
        selected: selectedName != null,
        selection: selectedName == null
            ? null
            : {'kind': 'enum', 'name': selectedName},
        skips: skips,
      );
    case 'typedef':
      final selectedName = _selectedName(proposal.config.typedefs, names);
      return _fromLibrarySelection(
        declaration: declaration,
        label: label,
        selected: selectedName != null,
        selection: selectedName == null
            ? null
            : {'kind': 'typedef', 'name': selectedName},
        skips: skips,
      );
    case 'function':
      final entry = _namedEntry(proposal.config.functions, names);
      return _fromLibrarySelection(
        declaration: declaration,
        label: label,
        selected: entry != null,
        selection: entry == null
            ? null
            : {
                'kind': 'function',
                'name': entry.key,
                'parameters': entry.value.parameters,
                'typeArguments': entry.value.typeArguments,
              },
        skips: skips,
        selectedMembers: entry == null ? const {} : const {'function.new'},
        selectedParameters: entry?.value.parameters.toSet() ?? const {},
      );
    case 'extension':
      if (declaration.name == '<unnamed>') {
        return _finished(
          verdict: CapabilityVerdict.excluded,
          reasonKind: CapabilityReasonKind.visibility,
          source: CapabilitySource.inventory,
          evidence: EvidenceLevel.e0,
          useCase: label,
          code: 'unnamed_extension',
          detail: 'Unnamed extensions have no stable public binding name',
          declaration: declaration,
          automatic: const CapabilityStageResult(
            CapabilityStageStatus.notApplicable,
            code: 'unnamed_extension',
          ),
        );
      }
      final entry = _namedEntry(proposal.config.extensions, names);
      final members = entry == null
          ? const <String>{}
          : _extensionMemberKeys(entry.value);
      final parameters = entry == null
          ? const <String>{}
          : _extensionParameterKeys(entry.value);
      return _fromLibrarySelection(
        declaration: declaration,
        label: label,
        selected: entry != null,
        selection: entry == null
            ? null
            : _extensionSelectionJson(entry.key, entry.value),
        skips: skips,
        selectedMembers: members,
        selectedParameters: parameters,
      );
    case 'const':
    case 'variable':
    case 'getter':
    case 'setter':
      final topLevel = proposal.config.topLevel;
      final selectedMembers = <String>{};
      String? selectedName;
      for (final name in names) {
        if (topLevel?.getters.contains(name) == true) {
          selectedMembers.add('getter.$name');
          selectedName ??= name;
        }
        if (topLevel?.setters.contains(name) == true) {
          selectedMembers.add('setter.$name');
          selectedName ??= name;
        }
      }
      return _fromLibrarySelection(
        declaration: declaration,
        label: label,
        selected: selectedMembers.isNotEmpty,
        selection: selectedName == null
            ? null
            : {
                'kind': 'topLevel',
                'name': selectedName,
                'getter': selectedMembers.any(
                  (value) => value.startsWith('getter.'),
                ),
                'setter': selectedMembers.any(
                  (value) => value.startsWith('setter.'),
                ),
              },
        skips: skips,
        selectedMembers: selectedMembers,
      );
    default:
      return _finished(
        verdict: CapabilityVerdict.unsupported,
        reasonKind: CapabilityReasonKind.generatorGap,
        source: CapabilitySource.inventory,
        evidence: EvidenceLevel.e0,
        useCase: label,
        code: 'unsupported_declaration_kind',
        detail: 'No capability adapter for ${declaration.kind}',
        declaration: declaration,
      );
  }
}

BindingAssessment _fromEnumSelection({
  required ApiDeclarationRecord declaration,
  required String label,
  required bool selected,
  required Map<String, Object?>? selection,
  required List<FlaxCodegenSkip> skips,
}) {
  if (!selected) {
    return _fromLibrarySelection(
      declaration: declaration,
      label: label,
      selected: false,
      selection: selection,
      skips: skips,
    );
  }
  final selectedMembers = {
    for (final member in declaration.declaredMembers)
      if (member.isStatic && member.kind == 'getter')
        _memberKey(member.kind, member.name),
  };
  final customMembers = [
    for (final member in declaration.declaredMembers)
      if (!member.isStatic) member,
  ];
  if (customMembers.isEmpty && skips.isEmpty) {
    return _fromLibrarySelection(
      declaration: declaration,
      label: label,
      selected: true,
      selection: selection,
      skips: skips,
      selectedMembers: selectedMembers,
    );
  }
  final diagnostics = <CapabilityDiagnostic>[
    for (final skip in skips)
      CapabilityDiagnostic(
        code: skip.code,
        message: skip.reason,
        target: skip.target,
      ),
    if (customMembers.isNotEmpty)
      CapabilityDiagnostic(
        code: 'enhanced_enum_members_not_bound',
        message: 'Enum value conversion is supported; custom instance members remain outside the enum adapter',
        target: declaration.name,
        chain: [for (final member in customMembers) member.name],
      ),
  ];
  return BindingAssessment(
    verdict: CapabilityVerdict.limited,
    reasonKind: CapabilityReasonKind.intentionalBoundary,
    source: CapabilitySource.automatic,
    evidence: EvidenceLevel.e1,
    useCases: {label: CapabilityVerdict.limited.name},
    surface: _librarySurface(
      declaration,
      selectedMembers: selectedMembers,
      skips: skips.length,
    ),
    diagnostics: diagnostics,
    stages: const CapabilityStages(
      automatic: CapabilityStageResult(CapabilityStageStatus.passed),
    ),
    selection: selection,
  );
}

BindingAssessment _fromClassProposal(
  FlaxCodegenProposedBinding proposed,
  ApiDeclarationRecord declaration,
  String label, {
  required CapabilitySource source,
}) {
  if (proposed.provider != null ||
      proposed.skips.any((skip) => skip.code == 'already_adapted')) {
    return BindingAssessment(
      verdict: CapabilityVerdict.supported,
      reasonKind: CapabilityReasonKind.none,
      source: CapabilitySource.provider,
      evidence: EvidenceLevel.e1,
      useCases: {label: CapabilityVerdict.supported.name},
      surface: _surface(declaration, proposed),
      diagnostics: _proposalDiagnostics(proposed, declaration),
      stages: const CapabilityStages(
        automatic: CapabilityStageResult(CapabilityStageStatus.passed),
        explicit: CapabilityStageResult(CapabilityStageStatus.notApplicable),
      ),
      selection: _selectionJson(proposed.selection),
      provider: proposed.provider ?? 'official',
    );
  }
  if (proposed.selection == null) {
    final diagnostics = _proposalDiagnostics(proposed, declaration);
    final reasonKind = _reasonKind(diagnostics);
    final verdict = _missingVerdict(reasonKind);
    return BindingAssessment(
      verdict: verdict,
      reasonKind: reasonKind,
      source: source,
      evidence: EvidenceLevel.e1,
      useCases: {label: verdict.name},
      surface: _surface(declaration, proposed),
      diagnostics: diagnostics,
      stages: CapabilityStages(
        automatic: CapabilityStageResult(
          verdict == CapabilityVerdict.excluded
              ? CapabilityStageStatus.notApplicable
              : CapabilityStageStatus.failed,
          code: diagnostics.firstOrNull?.code,
          detail: diagnostics.firstOrNull?.message,
        ),
      ),
    );
  }
  final surface = _surface(declaration, proposed);
  final diagnostics = _proposalDiagnostics(proposed, declaration);
  final limited =
      surface['droppedMembers'] != 0 ||
      surface['droppedParameters'] != 0 ||
      surface['illegalJsNames'] != 0 ||
      proposed.skips.isNotEmpty;
  final verdict = limited
      ? CapabilityVerdict.limited
      : CapabilityVerdict.supported;
  return BindingAssessment(
    verdict: verdict,
    reasonKind: limited ? _reasonKind(diagnostics) : CapabilityReasonKind.none,
    source: source,
    evidence: EvidenceLevel.e1,
    useCases: {label: verdict.name},
    surface: surface,
    diagnostics: diagnostics,
    stages: const CapabilityStages(
      automatic: CapabilityStageResult(CapabilityStageStatus.passed),
    ),
    selection: _selectionJson(proposed.selection),
  );
}

BindingAssessment _fromLibrarySelection({
  required ApiDeclarationRecord declaration,
  required String label,
  required bool selected,
  required Map<String, Object?>? selection,
  required List<FlaxCodegenSkip> skips,
  Set<String> selectedMembers = const {},
  Set<String> selectedParameters = const {},
}) {
  final diagnostics = [
    for (final skip in skips)
      CapabilityDiagnostic(
        code: skip.code,
        message: skip.reason,
        target: skip.target,
      ),
  ];
  if (!selected) {
    if (diagnostics.isEmpty) {
      diagnostics.add(
        CapabilityDiagnostic(
          code: 'automatic_declaration_not_selected',
          message:
              'Automatic library proposal did not select ${declaration.name}',
          target: declaration.name,
        ),
      );
    }
    final reasonKind = _reasonKind(diagnostics);
    final verdict = _missingVerdict(reasonKind);
    return BindingAssessment(
      verdict: verdict,
      reasonKind: reasonKind,
      source: CapabilitySource.automatic,
      evidence: EvidenceLevel.e1,
      useCases: {label: verdict.name},
      surface: _librarySurface(
        declaration,
        selectedMembers: selectedMembers,
        selectedParameters: selectedParameters,
        skips: skips.length,
      ),
      diagnostics: diagnostics,
      stages: CapabilityStages(
        automatic: CapabilityStageResult(
          verdict == CapabilityVerdict.excluded
              ? CapabilityStageStatus.notApplicable
              : CapabilityStageStatus.failed,
          code: diagnostics.first.code,
          detail: diagnostics.first.message,
        ),
      ),
    );
  }
  final surface = _librarySurface(
    declaration,
    selectedMembers: selectedMembers,
    selectedParameters: selectedParameters,
    skips: skips.length,
  );
  final limited =
      surface['droppedMembers'] != 0 ||
      surface['droppedParameters'] != 0 ||
      surface['illegalJsNames'] != 0 ||
      skips.isNotEmpty;
  final verdict = limited
      ? CapabilityVerdict.limited
      : CapabilityVerdict.supported;
  return BindingAssessment(
    verdict: verdict,
    reasonKind: limited ? _reasonKind(diagnostics) : CapabilityReasonKind.none,
    source: CapabilitySource.automatic,
    evidence: EvidenceLevel.e1,
    useCases: {label: verdict.name},
    surface: surface,
    diagnostics: diagnostics,
    stages: const CapabilityStages(
      automatic: CapabilityStageResult(CapabilityStageStatus.passed),
    ),
    selection: selection,
  );
}

List<CapabilityDiagnostic> _proposalDiagnostics(
  FlaxCodegenProposedBinding proposed,
  ApiDeclarationRecord declaration,
) {
  final diagnostics = [
    for (final skip in proposed.skips)
      CapabilityDiagnostic(
        code: skip.code,
        message: skip.reason,
        target: skip.target,
      ),
  ];
  if (declaration.typeParameters.isEmpty) return diagnostics;

  final codes = diagnostics.map((diagnostic) => diagnostic.code).toSet();
  final constructorBoundary =
      codes.contains('constructor_specialization_missing_use_site') ||
      codes.contains('constructor_specialization_ambiguous');
  final sharedOwnerResolved =
      !codes.contains('complex_generic_bound') &&
      ((proposed.selection?.typeArguments.isEmpty ?? false) ||
          constructorBoundary);
  if (sharedOwnerResolved) {
    diagnostics.add(
      const CapabilityDiagnostic(
        code: 'shared_owner_resolved',
        message: 'Analyzer inferred a shared Dart owner for this generic declaration',
      ),
    );
  }
  final selection = proposed.selection;
  if (selection != null &&
      selection.typeArguments.isEmpty &&
      selection.constructors.isNotEmpty) {
    diagnostics.add(
      const CapabilityDiagnostic(
        code: 'constructor_specialization_resolved',
        message: 'Analyzer use sites and direct inputs resolved a concrete constructor specialization',
      ),
    );
  }
  return diagnostics;
}

CapabilityReasonKind _reasonKind(List<CapabilityDiagnostic> diagnostics) {
  if (diagnostics.isEmpty) return CapabilityReasonKind.none;
  final codes = diagnostics.map((diagnostic) => diagnostic.code).toSet();
  if (codes.any(_visibilityCodes.contains)) {
    return CapabilityReasonKind.visibility;
  }
  if (codes.any(_configurationCodes.contains)) {
    return CapabilityReasonKind.configurationRequired;
  }
  if (codes.any(_dependencyCodes.contains)) {
    return CapabilityReasonKind.dependencyBoundary;
  }
  if (codes.any((code) => code.startsWith('automation_'))) {
    return CapabilityReasonKind.automationGap;
  }
  if (codes.any(_generatorCodes.contains)) {
    return CapabilityReasonKind.generatorGap;
  }
  return CapabilityReasonKind.intentionalBoundary;
}

CapabilityVerdict _missingVerdict(CapabilityReasonKind reasonKind) =>
    switch (reasonKind) {
      CapabilityReasonKind.visibility => CapabilityVerdict.excluded,
      CapabilityReasonKind.configurationRequired => CapabilityVerdict.limited,
      _ => CapabilityVerdict.unsupported,
    };

const _visibilityCodes = {
  'excluded_by_override',
  'visibility_annotation',
  'unnamed_extension',
  'illegal_js_name',
};
const _configurationCodes = {
  'custom_core_collection',
  'explicit_runtime_type_arguments',
  'flutter_semantics_configuration_required',
};
const _dependencyCodes = {
  'missing_dependency',
  'missing_export',
  'private_implementation_dependency',
  'signature_depends_on_skipped',
  'alias_depends_on_skipped',
  'value_depends_on_skipped',
  'provider_surface_insufficient',
  'provider_adaptation_incompatible',
};
const _generatorCodes = {
  'analysis_element_unavailable',
  'automatic_declaration_not_selected',
  'automatic_proposal_failed',
  'missing_skip_code',
  'unsupported_declaration_kind',
};

BindingAssessment _finished({
  required CapabilityVerdict verdict,
  required CapabilityReasonKind reasonKind,
  required CapabilitySource source,
  required EvidenceLevel evidence,
  required String useCase,
  required String code,
  required String detail,
  required ApiDeclarationRecord declaration,
  CapabilityStageResult automatic = CapabilityStageResult.notEvaluated,
}) {
  return BindingAssessment(
    verdict: verdict,
    reasonKind: reasonKind,
    source: source,
    evidence: evidence,
    useCases: {useCase: verdict.name},
    surface: _librarySurface(declaration),
    diagnostics: [CapabilityDiagnostic(code: code, message: detail)],
    stages: CapabilityStages(automatic: automatic),
  );
}

Map<String, Object?> _surface(
  ApiDeclarationRecord declaration,
  FlaxCodegenProposedBinding proposed,
) {
  final selection = proposed.selection;
  final selectedMembers = <String>{};
  final selectedParameters = <String>{};
  if (selection != null) {
    for (final entry in selection.constructors.entries) {
      selectedMembers.add(_memberKey('constructor', entry.key));
      for (final parameter in entry.value) {
        selectedParameters.add('${entry.key}.$parameter');
      }
    }
    for (final name in selection.getters) {
      selectedMembers.add(_memberKey('getter', name));
    }
    for (final name in selection.setters) {
      selectedMembers.add(_memberKey('setter', name));
    }
    for (final name in selection.staticGetters) {
      selectedMembers.add(_memberKey('getter', name));
    }
    for (final name in selection.instanceMethods.keys) {
      selectedMembers.add(_memberKey('method', name));
    }
    for (final name in selection.methods.keys) {
      selectedMembers.add(_memberKey('method', name));
    }
  }
  return _librarySurface(
    declaration,
    selectedMembers: selectedMembers,
    selectedParameters: selectedParameters,
    skips: proposed.skips.length,
  );
}

Map<String, Object?> _librarySurface(
  ApiDeclarationRecord declaration, {
  Set<String> selectedMembers = const {},
  Set<String> selectedParameters = const {},
  int skips = 0,
}) {
  var droppedMembers = 0;
  var droppedParameters = 0;
  var illegalJsNames = 0;
  var declaredParameters = 0;
  var protectedDeclared = 0;
  var visibleForTestingDeclared = 0;
  var deprecatedDeclared = 0;
  var protectedSelected = 0;
  var visibleForTestingSelected = 0;
  var deprecatedSelected = 0;
  for (final member in declaration.declaredMembers) {
    final key = _memberKey(member.kind, member.name);
    final legal = isJsLegalName(member.name.isEmpty ? 'new' : member.name);
    if (!legal) illegalJsNames++;
    final selected =
        selectedMembers.contains(key) ||
        selectedMembers.contains('${member.kind}.${declaration.name}') ||
        selectedMembers.contains('${member.kind}.${member.name}');
    if (!selected && declaration.declaredMembers.isNotEmpty) droppedMembers++;
    if (member.isProtected) {
      protectedDeclared++;
      if (selected) protectedSelected++;
    }
    if (member.isVisibleForTesting) {
      visibleForTestingDeclared++;
      if (selected) visibleForTestingSelected++;
    }
    if (member.isDeprecated) {
      deprecatedDeclared++;
      if (selected) deprecatedSelected++;
    }
    for (final parameter in member.parameters) {
      declaredParameters++;
      if (!isJsLegalName(parameter.name)) illegalJsNames++;
      final selectedParameter =
          selectedParameters.contains(parameter.name) ||
          selectedParameters.contains('${member.name}.${parameter.name}');
      if (!selectedParameter && selected) droppedParameters++;
    }
  }
  return {
    'declaredMembers': declaration.declaredMembers.length,
    'selectedMembers': selectedMembers.length,
    'droppedMembers': droppedMembers,
    'declaredParameters': declaredParameters,
    'selectedParameters': selectedParameters.length,
    'droppedParameters': droppedParameters,
    'illegalJsNames': illegalJsNames,
    'protectedDeclared': protectedDeclared,
    'visibleForTestingDeclared': visibleForTestingDeclared,
    'deprecatedDeclared': deprecatedDeclared,
    'protectedSelected': protectedSelected,
    'visibleForTestingSelected': visibleForTestingSelected,
    'deprecatedSelected': deprecatedSelected,
    'skips': skips,
  };
}

Map<String, Object?>? _selectionJson(FlaxCodegenClassSelection? selection) {
  if (selection == null) return null;
  return {
    'kind': selection.kind,
    'typeArguments': selection.typeArguments,
    'constructors': selection.constructors,
    'getters': selection.getters,
    'setters': selection.setters,
    'staticGetters': selection.staticGetters,
    'instanceMethods': selection.instanceMethods,
    'methods': selection.methods,
  };
}

Map<String, Object?> _extensionSelectionJson(
  String name,
  FlaxCodegenExtensionSelection selection,
) => {
  'kind': 'extension',
  'name': name,
  'getters': selection.getters,
  'setters': selection.setters,
  'methods': selection.methods,
  'staticGetters': selection.staticGetters,
  'staticMethods': selection.staticMethods,
  'operators': selection.operators,
};

Set<String> _extensionMemberKeys(FlaxCodegenExtensionSelection selection) => {
  for (final name in selection.getters) 'getter.$name',
  for (final name in selection.setters) 'setter.$name',
  for (final name in selection.methods.keys) 'method.$name',
  for (final name in selection.staticGetters) 'getter.$name',
  for (final name in selection.staticMethods.keys) 'method.$name',
  for (final name in selection.operators.keys) 'method.$name',
};

Set<String> _extensionParameterKeys(FlaxCodegenExtensionSelection selection) =>
    {
      for (final entry in selection.methods.entries)
        for (final parameter in entry.value) '${entry.key}.$parameter',
      for (final entry in selection.staticMethods.entries)
        for (final parameter in entry.value) '${entry.key}.$parameter',
      for (final entry in selection.operators.entries)
        for (final parameter in entry.value) '${entry.key}.$parameter',
    };

MapEntry<String, T>? _namedEntry<T>(Map<String, T> values, Set<String> names) {
  for (final name in names) {
    final value = values[name];
    if (value != null) return MapEntry(name, value);
  }
  return null;
}

String? _selectedName(Iterable<String> values, Set<String> names) {
  final selected = values.toSet();
  for (final name in names) {
    if (selected.contains(name)) return name;
  }
  return null;
}

String _memberKey(String kind, String name) =>
    '$kind.${name.isEmpty ? 'new' : name}';
