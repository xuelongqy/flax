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
  if (declaration.kind == 'enum') {
    return _finished(
      status: CoverageStatus.excluded,
      evidence: EvidenceLevel.e0,
      useCase: label,
      detail: 'Enums use types selection',
      declaration: declaration,
    );
  }
  if (declaration.kind != 'class' &&
      declaration.kind != 'mixin' &&
      declaration.kind != 'extensionType') {
    return _finished(
      status: CoverageStatus.notRun,
      evidence: EvidenceLevel.e0,
      useCase: label,
      detail: 'proposeSelection only accepts class, mixin, or extension type',
      declaration: declaration,
    );
  }
  final element = await lookup(declaration);
  if (element is! InterfaceElement) {
    return _finished(
      status: CoverageStatus.notRun,
      evidence: EvidenceLevel.e0,
      useCase: label,
      detail: 'Could not reload ${declaration.id} from ${library.library}',
      declaration: declaration,
    );
  }
  try {
    final proposed = await parser.proposeSelection(element, library: library);
    return _fromProposal(proposed, declaration, label);
  } catch (error) {
    return _finished(
      status: CoverageStatus.unsupported,
      evidence: EvidenceLevel.e1,
      useCase: label,
      detail: error.toString().split('\n').first,
      declaration: declaration,
    );
  }
}

BindingAssessment mergeIsolated(
  BindingAssessment pooled,
  BindingAssessment isolated,
) {
  final diagnostics = [...pooled.diagnostics];
  if (isolated.status != pooled.status) {
    diagnostics.add(
      CapabilityDiagnostic(
        code:
            isolated.status == CoverageStatus.unsupported &&
                pooled.status != CoverageStatus.unsupported
            ? 'missing_dependency'
            : 'isolated_differs',
        message:
            'isolated=${isolated.status.name} pooled=${pooled.status.name}',
        chain: [
          for (final diagnostic in isolated.diagnostics) diagnostic.message,
        ],
      ),
    );
  }
  return BindingAssessment(
    status: pooled.status,
    evidence: pooled.evidence,
    useCases: {...isolated.useCases, ...pooled.useCases},
    surface: {
      ...pooled.surface,
      'isolatedStatus': isolated.status.name,
      'pooledStatus': pooled.status.name,
    },
    diagnostics: diagnostics,
    selection: pooled.selection,
    provider: pooled.provider,
  );
}

void applyAutomaticLibraryProposal({
  required LibraryInventory inventory,
  required FlaxCodegenAutoBindingProposal proposal,
  String label = 'automatic',
}) {
  for (final declaration in inventory.declarations) {
    final previous = declaration.assessment;
    if (previous?.status == CoverageStatus.existingProvider ||
        previous?.status == CoverageStatus.excluded ||
        previous?.status == CoverageStatus.notRun) {
      continue;
    }
    final selection = proposal.config.classes[declaration.name];
    final skips = [
      for (final skip in proposal.skips)
        if (skip.target == declaration.name ||
            skip.target.startsWith('${declaration.name}.'))
          skip,
    ];
    if (selection == null && previous?.status != CoverageStatus.unsupported) {
      continue;
    }
    if (selection == null && skips.isEmpty) continue;
    final proposed = FlaxCodegenProposedBinding(
      name: declaration.name,
      id: declaration.id,
      selection: selection,
      skips: skips,
    );
    final automatic = _fromProposal(proposed, declaration, label);
    if (previous == null) {
      declaration.assessment = automatic;
      continue;
    }
    final carrierResolved =
        previous.diagnostics.any(
          (diagnostic) => diagnostic.code == 'missing_export',
        ) &&
        !automatic.diagnostics.any(
          (diagnostic) => diagnostic.code == 'missing_export',
        );
    declaration.assessment = BindingAssessment(
      status: automatic.status,
      evidence: automatic.evidence,
      useCases: {...previous.useCases, ...automatic.useCases},
      surface: {
        ...automatic.surface,
        'pooledStatus': previous.status.name,
        'automaticStatus': automatic.status.name,
      },
      diagnostics: [
        ...automatic.diagnostics,
        if (carrierResolved)
          CapabilityDiagnostic(
            code: 'public_carrier_automation',
            message: 'Automatic library routing resolved a same-package public carrier',
          ),
      ],
      selection: automatic.selection,
      provider: automatic.provider ?? previous.provider,
    );
  }
}

BindingAssessment _fromProposal(
  FlaxCodegenProposedBinding proposed,
  ApiDeclarationRecord declaration,
  String label,
) {
  if (proposed.skips.any((skip) => skip.reason == 'Already adapted')) {
    return BindingAssessment(
      status: CoverageStatus.existingProvider,
      evidence: EvidenceLevel.e1,
      useCases: {label: CoverageStatus.existingProvider.name},
      surface: _surface(declaration, proposed),
      diagnostics: [
        for (final skip in proposed.skips)
          CapabilityDiagnostic(
            code: 'already_adapted',
            message: skip.reason,
            target: skip.target,
          ),
      ],
      selection: _selectionJson(proposed.selection),
      provider: 'official',
    );
  }
  if (proposed.selection == null) {
    return BindingAssessment(
      status: CoverageStatus.unsupported,
      evidence: EvidenceLevel.e1,
      useCases: {label: CoverageStatus.unsupported.name},
      surface: _surface(declaration, proposed),
      diagnostics: [
        for (final skip in proposed.skips)
          CapabilityDiagnostic(
            code: _codeFor(skip.reason),
            message: skip.reason,
            target: skip.target,
          ),
      ],
    );
  }
  final surface = _surface(declaration, proposed);
  final complete =
      surface['droppedMembers'] == 0 &&
      surface['droppedParameters'] == 0 &&
      surface['illegalJsNames'] == 0;
  return BindingAssessment(
    status: complete ? CoverageStatus.complete : CoverageStatus.partial,
    evidence: EvidenceLevel.e1,
    useCases: {
      label: complete
          ? CoverageStatus.complete.name
          : CoverageStatus.partial.name,
    },
    surface: surface,
    diagnostics: [
      for (final skip in proposed.skips)
        CapabilityDiagnostic(
          code: _codeFor(skip.reason),
          message: skip.reason,
          target: skip.target,
        ),
    ],
    selection: _selectionJson(proposed.selection),
  );
}

BindingAssessment _finished({
  required CoverageStatus status,
  required EvidenceLevel evidence,
  required String useCase,
  required String detail,
  required ApiDeclarationRecord declaration,
}) {
  return BindingAssessment(
    status: status,
    evidence: evidence,
    useCases: {useCase: status.name},
    surface: {
      'declaredMembers': declaration.declaredMembers.length,
      'selectedMembers': 0,
      'droppedMembers': declaration.declaredMembers.length,
      'declaredParameters': _parameterCount(declaration),
      'selectedParameters': 0,
      'droppedParameters': _parameterCount(declaration),
      'illegalJsNames': [
        for (final member in declaration.declaredMembers)
          if (!isJsLegalName(member.name) ||
              member.parameters.any(
                (parameter) => !isJsLegalName(parameter.name),
              ))
            member.name,
      ].length,
    },
    diagnostics: [CapabilityDiagnostic(code: status.name, message: detail)],
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
    final selected = selectedMembers.contains(key);
    if (!selected) droppedMembers++;
    // Visibility annotations quantify what auto-selection would expose. They
    // are recorded, not filtered: proposeSelection stays fail-open.
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
      final parameterLegal = isJsLegalName(parameter.name);
      if (!parameterLegal) illegalJsNames++;
      if (member.kind == 'constructor' &&
          !selectedParameters.contains('${member.name}.${parameter.name}')) {
        droppedParameters++;
      }
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
    'skips': proposed.skips.length,
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

int _parameterCount(ApiDeclarationRecord declaration) =>
    [for (final member in declaration.declaredMembers) ...member.parameters]
        .length;

String _memberKey(String kind, String name) =>
    '$kind.${name.isEmpty ? 'new' : name}';

String _codeFor(String reason) {
  if (reason.contains('omitWhenAbsent cap')) return 'omit_cap';
  if (reason.contains('Already adapted')) return 'already_adapted';
  if (reason.contains('Unsupported core type')) return 'unsupported_core_type';
  if (reason.contains('Explicit runtime type arguments')) {
    return 'generic_instantiation';
  }
  if (reason.contains('No bindable constructors')) return 'no_constructors';
  if (reason.contains('No bindable members')) return 'no_members';
  if (RegExp(r'must publicly export the referenced type _').hasMatch(reason)) {
    return 'private_implementation_dependency';
  }
  if (reason.contains('must publicly export')) return 'missing_export';
  if (reason.contains('Widget instance methods')) return 'widget_methods';
  if (reason.contains('Value getters require')) return 'widget_getters';
  return 'skip';
}
