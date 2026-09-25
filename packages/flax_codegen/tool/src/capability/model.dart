import 'dart:convert';

enum EvidenceLevel { e0, e1, e2, e3, e4, e5 }

enum CapabilityVerdict {
  supported,
  limited,
  unsupported,
  excluded,
  environmentBlocked,
}

enum CapabilityReasonKind {
  none,
  automationGap,
  generatorGap,
  configurationRequired,
  intentionalBoundary,
  dependencyBoundary,
  visibility,
}

enum CapabilitySource { automatic, explicit, provider, inventory }

enum CapabilityStageStatus {
  passed,
  failed,
  notApplicable,
  notEvaluated,
  blocked,
}

final class CapabilityStageResult {
  const CapabilityStageResult(this.status, {this.code, this.detail});

  static const notEvaluated = CapabilityStageResult(
    CapabilityStageStatus.notEvaluated,
  );

  final CapabilityStageStatus status;
  final String? code;
  final String? detail;

  Map<String, Object?> toJson() => {
    'status': status.name,
    if (code != null) 'code': code,
    if (detail != null) 'detail': detail,
  };
}

final class CapabilityStages {
  const CapabilityStages({
    this.automatic = CapabilityStageResult.notEvaluated,
    this.explicit = CapabilityStageResult.notEvaluated,
    this.parse = CapabilityStageResult.notEvaluated,
    this.emit = CapabilityStageResult.notEvaluated,
    this.compile = CapabilityStageResult.notEvaluated,
  });

  final CapabilityStageResult automatic;
  final CapabilityStageResult explicit;
  final CapabilityStageResult parse;
  final CapabilityStageResult emit;
  final CapabilityStageResult compile;

  Map<String, Object?> toJson() => {
    'automatic': automatic.toJson(),
    'explicit': explicit.toJson(),
    'parse': parse.toJson(),
    'emit': emit.toJson(),
    'compile': compile.toJson(),
  };
}

final class CapabilityDiagnostic {
  const CapabilityDiagnostic({
    required this.code,
    required this.message,
    this.target,
    this.chain = const <String>[],
  });

  final String code;
  final String message;
  final String? target;
  final List<String> chain;

  Map<String, Object?> toJson() => {
    'code': code,
    'message': message,
    if (target != null) 'target': target,
    if (chain.isNotEmpty) 'chain': chain,
  };
}

final class ApiParameterRecord {
  const ApiParameterRecord({
    required this.name,
    required this.type,
    required this.required,
    required this.positional,
    required this.named,
    required this.hasDefault,
    this.defaultCode,
  });

  final String name;
  final String type;
  final bool required;
  final bool positional;
  final bool named;
  final bool hasDefault;
  final String? defaultCode;

  Map<String, Object?> toJson() => {
    'name': name,
    'type': type,
    'required': required,
    'positional': positional,
    'named': named,
    'hasDefault': hasDefault,
    if (defaultCode != null) 'defaultCode': defaultCode,
  };
}

final class ApiCallableRecord {
  const ApiCallableRecord({
    required this.id,
    required this.name,
    required this.kind,
    required this.signature,
    required this.resultType,
    required this.parameters,
    required this.typeParameters,
    required this.dependencies,
    this.isStatic = false,
    this.isInherited = false,
    this.isAbstract = false,
    this.isDeprecated = false,
    this.isOperator = false,
    this.isProtected = false,
    this.isVisibleForTesting = false,
    this.declaredBy,
  });

  final String id;
  final String name;
  final String kind;
  final String signature;
  final String resultType;
  final List<ApiParameterRecord> parameters;
  final List<String> typeParameters;
  final List<String> dependencies;
  final bool isStatic;
  final bool isInherited;
  final bool isAbstract;
  final bool isDeprecated;
  final bool isOperator;
  final bool isProtected;
  final bool isVisibleForTesting;
  final String? declaredBy;

  Map<String, Object?> toJson() => {
    'id': id,
    'name': name,
    'kind': kind,
    'signature': signature,
    'resultType': resultType,
    'parameters': parameters.map((value) => value.toJson()).toList(),
    'typeParameters': typeParameters,
    'dependencies': dependencies,
    'isStatic': isStatic,
    'isInherited': isInherited,
    'isAbstract': isAbstract,
    'isDeprecated': isDeprecated,
    'isOperator': isOperator,
    'isProtected': isProtected,
    'isVisibleForTesting': isVisibleForTesting,
    if (declaredBy != null) 'declaredBy': declaredBy,
  };
}

final class BindingAssessment {
  const BindingAssessment({
    required this.verdict,
    required this.reasonKind,
    required this.source,
    required this.evidence,
    required this.useCases,
    required this.surface,
    required this.diagnostics,
    this.stages = const CapabilityStages(),
    this.selection,
    this.iteration,
    this.provider,
  });

  final CapabilityVerdict verdict;
  final CapabilityReasonKind reasonKind;
  final CapabilitySource source;
  final EvidenceLevel evidence;
  final Map<String, String> useCases;
  final Map<String, Object?> surface;
  final List<CapabilityDiagnostic> diagnostics;
  final CapabilityStages stages;
  final Map<String, Object?>? selection;
  final int? iteration;
  final String? provider;

  Map<String, Object?> toJson() => {
    'verdict': verdict.name,
    'reasonKind': reasonKind.name,
    'source': source.name,
    'evidence': evidence.name.toUpperCase(),
    'useCases': useCases,
    'surface': surface,
    'diagnostics': diagnostics.map((value) => value.toJson()).toList(),
    'stages': stages.toJson(),
    if (selection != null) 'selection': selection,
    if (iteration != null) 'iteration': iteration,
    if (provider != null) 'provider': provider,
  };
}

final class ApiDeclarationRecord {
  ApiDeclarationRecord({
    required this.id,
    required this.name,
    required this.kind,
    required this.sourceLibrary,
    required this.publicEntries,
    required this.exportNames,
    required this.signature,
    required this.typeParameters,
    required this.supertypes,
    required this.dependencies,
    required this.declaredMembers,
    required this.interfaceMembers,
    required this.modifiers,
    required this.isDeprecated,
    this.assessment,
  });

  final String id;
  final String name;
  final String kind;
  final String sourceLibrary;
  final List<String> publicEntries;
  final List<String> exportNames;
  final String signature;
  final List<String> typeParameters;
  final List<String> supertypes;
  final List<String> dependencies;
  final List<ApiCallableRecord> declaredMembers;
  final List<ApiCallableRecord> interfaceMembers;
  final Map<String, bool> modifiers;
  final bool isDeprecated;
  BindingAssessment? assessment;

  Map<String, Object?> toJson() => {
    'id': id,
    'name': name,
    'kind': kind,
    'sourceLibrary': sourceLibrary,
    'publicEntries': publicEntries,
    'exportNames': exportNames,
    'signature': signature,
    'typeParameters': typeParameters,
    'supertypes': supertypes,
    'dependencies': dependencies,
    'declaredMembers': declaredMembers.map((value) => value.toJson()).toList(),
    'interfaceMembers': interfaceMembers
        .map((value) => value.toJson())
        .toList(),
    'modifiers': modifiers,
    'isDeprecated': isDeprecated,
    if (assessment != null) 'assessment': assessment!.toJson(),
  };
}

final class LibraryInventory {
  LibraryInventory({
    required this.entry,
    required this.resolved,
    required this.elapsedMilliseconds,
    required this.declarations,
    this.error,
  });

  final String entry;
  final bool resolved;
  final int elapsedMilliseconds;
  final List<ApiDeclarationRecord> declarations;
  final String? error;

  Map<String, int> get counts {
    final result = <String, int>{};
    for (final declaration in declarations) {
      result[declaration.kind] = (result[declaration.kind] ?? 0) + 1;
    }
    return result;
  }

  Map<String, Object?> toJson() => {
    'entry': entry,
    'resolved': resolved,
    'elapsedMilliseconds': elapsedMilliseconds,
    'counts': counts,
    'declarations': declarations.map((value) => value.toJson()).toList(),
    if (error != null) 'error': error,
  };
}

final class CoverageCounts {
  CoverageCounts();

  int exportNames = 0;
  int uniqueIdentities = 0;
  int declaredMembers = 0;
  int selectedMembers = 0;
  int declaredParameters = 0;
  int selectedParameters = 0;
  int protectedSelected = 0;
  int visibleForTestingSelected = 0;
  int deprecatedSelected = 0;
  int protectedDeclared = 0;
  int visibleForTestingDeclared = 0;
  int deprecatedDeclared = 0;
  final Map<String, int> byKind = {};
  final Map<String, int> byVerdict = {};
  final Map<String, int> byReasonKind = {};
  final Map<String, int> byEvidence = {};

  Map<String, Object?> toJson() => {
    'exportNames': exportNames,
    'uniqueIdentities': uniqueIdentities,
    'declaredMembers': declaredMembers,
    'selectedMembers': selectedMembers,
    'declaredParameters': declaredParameters,
    'selectedParameters': selectedParameters,
    'protectedSelected': protectedSelected,
    'visibleForTestingSelected': visibleForTestingSelected,
    'deprecatedSelected': deprecatedSelected,
    'protectedDeclared': protectedDeclared,
    'visibleForTestingDeclared': visibleForTestingDeclared,
    'deprecatedDeclared': deprecatedDeclared,
    'byKind': byKind,
    'byVerdict': byVerdict,
    'byReasonKind': byReasonKind,
    'byEvidence': byEvidence,
  };
}

String prettyJson(Object? value) =>
    const JsonEncoder.withIndent('  ').convert(value);
