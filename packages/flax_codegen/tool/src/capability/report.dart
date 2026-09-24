import 'inventory.dart';

import 'model.dart';

CoverageCounts countInventory(LibraryInventory inventory) {
  final counts = CoverageCounts()
    ..uniqueIdentities = inventory.declarations.length;
  for (final declaration in inventory.declarations) {
    counts.exportNames += declaration.exportNames.length;
    counts.byKind[declaration.kind] =
        (counts.byKind[declaration.kind] ?? 0) + 1;
    counts.declaredMembers += declaration.declaredMembers.length;
    counts.declaredParameters += [
      for (final member in declaration.declaredMembers) ...member.parameters,
    ].length;
    final assessment = declaration.assessment;
    if (assessment == null) {
      counts.byStatus['notRun'] = (counts.byStatus['notRun'] ?? 0) + 1;
      continue;
    }
    counts.byStatus[assessment.status.name] =
        (counts.byStatus[assessment.status.name] ?? 0) + 1;
    counts.byEvidence[assessment.evidence.name] =
        (counts.byEvidence[assessment.evidence.name] ?? 0) + 1;
    final surface = assessment.surface;
    counts.selectedMembers += (surface['selectedMembers'] as int?) ?? 0;
    counts.selectedParameters += (surface['selectedParameters'] as int?) ?? 0;
    counts.protectedSelected += (surface['protectedSelected'] as int?) ?? 0;
    counts.visibleForTestingSelected +=
        (surface['visibleForTestingSelected'] as int?) ?? 0;
    counts.deprecatedSelected += (surface['deprecatedSelected'] as int?) ?? 0;
    counts.protectedDeclared += (surface['protectedDeclared'] as int?) ?? 0;
    counts.visibleForTestingDeclared +=
        (surface['visibleForTestingDeclared'] as int?) ?? 0;
    counts.deprecatedDeclared += (surface['deprecatedDeclared'] as int?) ?? 0;
  }
  return counts;
}

Map<String, Object?> capabilityInsights(LibraryInventory inventory) {
  var missingDependency = 0;
  var isolatedUnsupported = 0;
  var pooledUnsupported = 0;
  var automaticBaselineUnsupported = 0;
  var automaticUnsupported = 0;
  var illegalJsNames = 0;
  final skipCodes = <String, int>{};
  final sourceLibraries = <String>{};
  for (final declaration in inventory.declarations) {
    sourceLibraries.add(declaration.sourceLibrary);
    for (final name in declaration.exportNames) {
      if (!isJsLegalName(name)) illegalJsNames++;
    }
    for (final member in declaration.declaredMembers) {
      if (member.name.isNotEmpty && !isJsLegalName(member.name)) {
        illegalJsNames++;
      }
    }
    final assessment = declaration.assessment;
    if (assessment == null) continue;
    for (final diagnostic in assessment.diagnostics) {
      skipCodes[diagnostic.code] = (skipCodes[diagnostic.code] ?? 0) + 1;
      if (diagnostic.code == 'missing_dependency') missingDependency++;
    }
    final isolated = assessment.surface['isolatedStatus'];
    final pooled = assessment.surface['pooledStatus'];
    final automaticBaseline = assessment.surface['automaticBaselineStatus'];
    final automatic = assessment.surface['automaticStatus'];
    if (isolated == CoverageStatus.unsupported.name) isolatedUnsupported++;
    if (pooled == CoverageStatus.unsupported.name ||
        assessment.status == CoverageStatus.unsupported) {
      pooledUnsupported++;
    }
    if (automaticBaseline == CoverageStatus.unsupported.name) {
      automaticBaselineUnsupported++;
    }
    if (automatic == CoverageStatus.unsupported.name) automaticUnsupported++;
  }
  final codes = skipCodes.entries.toList()
    ..sort((a, b) => b.value.compareTo(a.value));
  List<Map<String, Object?>> named(bool Function(ApiDeclarationRecord) match) =>
      [
        for (final declaration in inventory.declarations)
          if (declaration.assessment != null && match(declaration))
            {
              'id': declaration.id,
              'kind': declaration.kind,
              'status': declaration.assessment!.status.name,
              'codes': [
                for (final diagnostic in declaration.assessment!.diagnostics)
                  diagnostic.code,
              ],
              'messages': [
                for (final diagnostic in declaration.assessment!.diagnostics)
                  diagnostic.message,
              ],
            },
      ];
  int declarationsWith(String code) => inventory.declarations
      .where(
        (declaration) =>
            declaration.assessment?.diagnostics.any(
              (diagnostic) => diagnostic.code == code,
            ) ==
            true,
      )
      .length;
  return {
    'sourceLibraries': (sourceLibraries.toList()..sort()),
    'sourceLibraryCount': sourceLibraries.length,
    'missingDependency': missingDependency,
    'isolatedUnsupported': isolatedUnsupported,
    'pooledUnsupported': pooledUnsupported,
    'automaticBaselineUnsupported': automaticBaselineUnsupported,
    'automaticUnsupported': automaticUnsupported,
    'publicCarrierAutomation': skipCodes['public_carrier_automation'] ?? 0,
    'sharedOwnerResolved': declarationsWith('shared_owner_resolved'),
    'constructorSpecializationResolved': declarationsWith(
      'constructor_specialization_resolved',
    ),
    'constructorSpecializationMissingUseSite': declarationsWith(
      'constructor_specialization_missing_use_site',
    ),
    'constructorSpecializationAmbiguous': declarationsWith(
      'constructor_specialization_ambiguous',
    ),
    'complexGenericBound': declarationsWith('complex_generic_bound'),
    'sdkCoreTypeGap': skipCodes['unsupported_core_type'] ?? 0,
    'privateImplementationDependency':
        skipCodes['private_implementation_dependency'] ?? 0,
    'illegalJsNames': illegalJsNames,
    'skipCodes': {for (final entry in codes) entry.key: entry.value},
    'namedUnsupported': named(
      (declaration) =>
          declaration.assessment!.status == CoverageStatus.unsupported,
    ),
    'namedMissingDependency': named(
      (declaration) => declaration.assessment!.diagnostics.any(
        (diagnostic) => diagnostic.code == 'missing_dependency',
      ),
    ),
    'namedExistingProvider': named(
      (declaration) =>
          declaration.assessment!.status == CoverageStatus.existingProvider,
    ),
  };
}

String capabilityMarkdown({
  required Map<String, Object?> baseline,
  required LibraryInventory inventory,
  required CoverageCounts counts,
  required List<Map<String, Object?>> genericResults,
  required List<Map<String, Object?>> defaultResults,
  required List<Map<String, Object?>> flutterLibraries,
  required Map<String, Object?> insights,
  List<Map<String, Object?>> explicitGenerics = const [],
  List<Map<String, Object?>> omitScale = const [],
}) {
  final git = baseline['git'] as Map;
  final sdk = baseline['sdk'] as Map;
  final dart = (sdk['dart'] as String?)?.split('\n').first ?? 'unknown';
  final skipCodes = insights['skipCodes'] as Map? ?? const {};
  final sourceLibraries = insights['sourceLibraries'] as List? ?? const [];
  final buffer = StringBuffer()
    ..writeln('# flax_codegen capability verification')
    ..writeln()
    ..writeln('Status: evidence record, not a product gate.')
    ..writeln()
    ..writeln('## Baseline')
    ..writeln()
    ..writeln('- capturedAt: ${baseline['capturedAt']}')
    ..writeln('- git: ${git['revision']}')
    ..writeln('- dart: $dart')
    ..writeln('- analyzer: ${sdk['analyzer']}')
    ..writeln('- flutterPackageRoot: ${sdk['flutterPackageRoot']}')
    ..writeln()
    ..writeln('## Flutter public library index (E0)')
    ..writeln()
    ..writeln('| Library | Resolved | Identities | Export names |')
    ..writeln('| --- | --- | ---: | ---: |');
  for (final library in flutterLibraries) {
    buffer.writeln(
      '| ${library['uri']} | ${library['resolved']} | '
      '${library['identities']} | ${library['exportNames'] ?? 0} |',
    );
  }
  buffer
    ..writeln()
    ..writeln('## ${inventory.entry} inventory (E0)')
    ..writeln()
    ..writeln('| Kind | Count |')
    ..writeln('| --- | ---: |');
  final kinds = counts.byKind.entries.toList()
    ..sort((a, b) => a.key.compareTo(b.key));
  for (final entry in kinds) {
    buffer.writeln('| ${entry.key} | ${entry.value} |');
  }
  buffer
    ..writeln()
    ..writeln('- unique identities: ${counts.uniqueIdentities}')
    ..writeln('- export names: ${counts.exportNames}')
    ..writeln('- declared members: ${counts.declaredMembers}')
    ..writeln('- declared parameters: ${counts.declaredParameters}')
    ..writeln('- source libraries: ${insights['sourceLibraryCount']}')
    ..writeln('- illegal JS names: ${insights['illegalJsNames']}')
    ..writeln()
    ..writeln('Source libraries:')
    ..writeln();
  for (final library in sourceLibraries) {
    buffer.writeln('- $library');
  }
  buffer
    ..writeln()
    ..writeln('## Assessment (E1, automatic library + proposeSelection)')
    ..writeln()
    ..writeln('| Status | Count |')
    ..writeln('| --- | ---: |');
  final statuses = counts.byStatus.entries.toList()
    ..sort((a, b) => a.key.compareTo(b.key));
  for (final entry in statuses) {
    buffer.writeln('| ${entry.key} | ${entry.value} |');
  }
  buffer
    ..writeln()
    ..writeln(
      'Selected members ${counts.selectedMembers} / ${counts.declaredMembers}.',
    )
    ..writeln(
      'Selected constructor parameters ${counts.selectedParameters} / '
      '${counts.declaredParameters} (denominator is all declared parameters).',
    )
    ..writeln(
      'Selected members flagged protected / visibleForTesting / deprecated: '
      '${counts.protectedSelected} / ${counts.visibleForTestingSelected} / '
      '${counts.deprecatedSelected} (declared: ${counts.protectedDeclared} / '
      '${counts.visibleForTestingDeclared} / ${counts.deprecatedDeclared}). '
      'These annotate auto-selection exposure; proposeSelection stays '
      'fail-open and does not filter on them.',
    )
    ..writeln(
      'Isolated unsupported ${insights['isolatedUnsupported']}; '
      'pooled unsupported ${insights['pooledUnsupported']}; '
      'missing_dependency ${insights['missingDependency']}.',
    )
    ..writeln(
      'Automatic A/B unsupported without/with public carriers: '
      '${insights['automaticBaselineUnsupported']} / '
      '${insights['automaticUnsupported']}. Carrier-resolved declarations: '
      '${insights['publicCarrierAutomation']}. Generic shared-owner / constructor '
      'resolved / missing-use-site / ambiguous / complex-bound declarations: '
      '${insights['sharedOwnerResolved']} / '
      '${insights['constructorSpecializationResolved']} / '
      '${insights['constructorSpecializationMissingUseSite']} / '
      '${insights['constructorSpecializationAmbiguous']} / '
      '${insights['complexGenericBound']}. Remaining core/private diagnostics: '
      '${insights['sdkCoreTypeGap']} / '
      '${insights['privateImplementationDependency']}.',
    )
    ..writeln()
    ..writeln('Skip codes:')
    ..writeln();
  if (skipCodes.isEmpty) {
    buffer.writeln('- none');
  } else {
    for (final entry in skipCodes.entries) {
      buffer.writeln('- ${entry.key}: ${entry.value}');
    }
  }
  buffer
    ..writeln()
    ..writeln('## Generic fixtures')
    ..writeln();
  for (final result in genericResults) {
    buffer.writeln(
      '- ${result['name']}: bindable=${result['bindable']} '
      'status=${result['status']} ${result['detail']}',
    );
  }
  buffer
    ..writeln()
    ..writeln('## Default-parameter omit cap')
    ..writeln();
  for (final result in defaultResults) {
    buffer.writeln(
      '- ${result['name']}: selected=${result['selected']} '
      'dropped=${result['dropped']} capHit=${result['capHit']}',
    );
  }
  final dependent = genericResults.where(
    (result) =>
        result['name'] == 'DependentBox' || result['name'] == 'RecursiveBox',
  );
  final capHits = [
    for (final result in defaultResults)
      if (result['capHit'] == true) result['name'],
  ];
  buffer
    ..writeln()
    ..writeln('## Capability summary')
    ..writeln()
    ..writeln(
      '1. `${inventory.entry}` has ${counts.uniqueIdentities} unique source '
      'identities, ${counts.exportNames} public export names, '
      '${counts.declaredMembers} declared members and '
      '${counts.declaredParameters} declared parameters across '
      '${insights['sourceLibraryCount']} source libraries.',
    )
    ..writeln(
      '2. Isolated-only failures stored as `missing_dependency`: '
      '${insights['missingDependency']}. Pooled still-unsupported: '
      '${insights['pooledUnsupported']}. Isolated unsupported: '
      '${insights['isolatedUnsupported']}. Remaining pooled failures are '
      'capability, language, or target limits, not missing pool types.',
    )
    ..writeln(
      '3. Dependent or recursive generic bounds without concrete evidence remain '
      'fail-closed (${[for (final result in dependent) '${result['name']}=${result['bindable']}'].join(', ')}). '
      'The current omitWhenAbsent cap is 6; parameters are dropped on '
      '${capHits.isEmpty ? 'no fixtures' : capHits.join(', ')} when the cap is exceeded.',
    );

  void writeNamed(String title, Object? raw) {
    buffer
      ..writeln()
      ..writeln('## $title')
      ..writeln();
    final items = (raw as List?) ?? const [];
    if (items.isEmpty) {
      buffer.writeln('- none');
      return;
    }
    for (final item in items) {
      final row = item as Map;
      buffer.writeln(
        '- `${row['id']}` (${row['status']}; '
        '${((row['codes'] as List?) ?? const []).join(', ')}): '
        '${((row['messages'] as List?) ?? const []).join(' | ')}',
      );
    }
  }

  writeNamed(
    'Named unsupported after official pool',
    insights['namedUnsupported'],
  );
  writeNamed(
    'Named missing_dependency (isolated vs pooled)',
    insights['namedMissingDependency'],
  );
  writeNamed('Named existingProvider', insights['namedExistingProvider']);

  if (explicitGenerics.isNotEmpty) {
    buffer
      ..writeln()
      ..writeln('## Explicit YAML vs auto-propose (E1/E2 parse)')
      ..writeln();
    for (final result in explicitGenerics) {
      buffer.writeln(
        '- ${result['title']}: ok=${result['ok']} '
        '${result['ok'] == true ? result['classes'] : result['error']}',
      );
    }
  }
  if (omitScale.isNotEmpty) {
    buffer
      ..writeln()
      ..writeln('## omitWhenAbsent emission scale')
      ..writeln();
    for (final result in omitScale) {
      buffer.writeln(
        '- ${result['name']}: requested=${result['requested']} '
        'ok=${result['ok']} estimated=${result['estimated']} '
        'branches=${result['dartBranches']}/${result['expectedBranches']} '
        'dartBytes=${result['dartBytes']} tsBytes=${result['tsBytes']} '
        'emitMs=${result['emitMilliseconds']}'
        '${result['error'] != null ? ' error=${result['error']}' : ''}'
        '${result['note'] != null ? ' ${result['note']}' : ''}',
      );
    }
  }
  return buffer.toString();
}

int _isolatedCount(Map<String, Object?> result) {
  final perClass = result['perClass'];
  if (perClass is! List) return 0;
  return [
    for (final item in perClass)
      if (item is Map && item['ok'] == true) item,
  ].length;
}

String stage3Markdown(Map<String, Object?> result) {
  List<Map<String, Object?>> rows(Object? raw) => [
    for (final item in (raw as List?) ?? const [])
      Map<String, Object?>.from(item as Map),
  ];
  final buffer = StringBuffer()
    ..writeln('# flax_codegen capability verification — stage 3')
    ..writeln()
    ..writeln('Status: evidence record, not a product gate.')
    ..writeln()
    ..writeln('## Foundation whole-library parse/emit')
    ..writeln()
    ..writeln('- entry: ${result['entry']}')
    ..writeln('- denominator: ${result['denominator']}')
    ..writeln('- class-like: ${result['classLike']}')
    ..writeln('- batch requested: ${result['batchRequested']}')
    ..writeln(
      '- batch excluded: ${(result['batchExcluded'] as List?)?.isEmpty ?? true ? 'none' : (result['batchExcluded'] as List).join(', ')}',
    )
    ..writeln('- batch parsed: ${result['batchParsed']}')
    ..writeln(
      '- isolated parsed: ${result['isolatedParsed'] ?? _isolatedCount(result)}/'
      '${result['batchRequested']}',
    )
    ..writeln('- subset: ${result['subset']}')
    ..writeln('- evidence: ${result['evidence']}')
    ..writeln();
  final propose = result['proposeStatus'];
  if (propose is Map) {
    buffer
      ..writeln('## Propose status among class-like candidates')
      ..writeln();
    final entries = propose.entries.toList()
      ..sort((a, b) => a.key.toString().compareTo(b.key.toString()));
    for (final entry in entries) {
      buffer.writeln('- ${entry.key}: ${entry.value}');
    }
    buffer.writeln();
  }
  buffer
    ..writeln('## Attempts')
    ..writeln();
  final attempts = rows(result['attempts']);
  if (attempts.isEmpty) {
    buffer.writeln('- none');
  } else {
    for (final row in attempts) {
      buffer.writeln(
        '- ${row['label']}: ok=${row['ok']} classes=${row['classCount']} '
        '${row['error'] ?? ''}'
        '${row['category'] != null ? ' category=${row['category']}' : ''}',
      );
    }
  }
  final perClass = rows(result['perClass']);
  final isolatedOk = perClass.where((row) => row['ok'] == true).length;
  buffer
    ..writeln()
    ..writeln('## Per-class isolation')
    ..writeln()
    ..writeln(
      '$isolatedOk/${perClass.length} proposed classes parsed alone. '
      'A combined module is required before emit; isolated success is not '
      'whole-library E2.',
    );
  final voidGetter = result['voidGetterRepro'];
  if (voidGetter is Map) {
    buffer
      ..writeln()
      ..writeln('## Combined void getter min-repro')
      ..writeln()
      ..writeln('- hypothesis: ${voidGetter['hypothesis']}')
      ..writeln('- suspects: ${voidGetter['suspects']}')
      ..writeln('- minimal names: ${voidGetter['minimalNames']}');
    for (final item in (voidGetter['attempts'] as List?) ?? const []) {
      final row = Map<String, Object?>.from(item as Map);
      buffer.writeln(
        '- ${row['label']}: ok=${row['ok']} ${row['error'] ?? 'parsed'} '
        '${row['category'] ?? ''}',
      );
    }
  }
  final batchMinRepro = result['batchMinRepro'];
  if (batchMinRepro is Map) {
    buffer
      ..writeln()
      ..writeln('## Batch minimal repro')
      ..writeln()
      ..writeln('- batch size: ${batchMinRepro['batchSize']}')
      ..writeln('- minimal names: ${batchMinRepro['minimalNames']}');
    for (final item in (batchMinRepro['shrinkAttempts'] as List?) ?? const []) {
      final row = Map<String, Object?>.from(item as Map);
      buffer.writeln(
        '- ${row['label']}: ok=${row['ok']} ${row['error'] ?? 'parsed'} '
        '${row['category'] ?? ''}',
      );
    }
  }
  buffer
    ..writeln()
    ..writeln('## Unsupported explicit attempts')
    ..writeln();
  final unsupported = rows(result['unsupportedAttempts']);
  if (unsupported.isEmpty) {
    buffer.writeln('- none');
  } else {
    for (final row in unsupported) {
      buffer.writeln(
        '- ${row['label']}: ok=${row['ok']} ${row['error'] ?? 'parsed'} '
        '${row['category'] ?? ''}',
      );
    }
  }
  final emit = Map<String, Object?>.from((result['emit'] as Map?) ?? const {});
  final compile = Map<String, Object?>.from(
    (result['compile'] as Map?) ?? const {},
  );
  buffer
    ..writeln()
    ..writeln('## Emit and compile')
    ..writeln()
    ..writeln(
      '- emit: ok=${emit['ok']} mode=${emit['mode']} '
      'dartBytes=${emit['dartBytes']} tsBytes=${emit['tsBytes']} '
      '${emit['error'] ?? emit['reason'] ?? ''}',
    )
    ..writeln(
      '- compile: ok=${compile['ok']} stage=${compile['stage']} '
      '${compile['error'] ?? compile['reason'] ?? ''}',
    );
  if (compile['dartExitCode'] != null) {
    buffer
      ..writeln(
        '- dart analyze: exit=${compile['dartExitCode']} '
        'errors=${compile['dartErrors']} warnings=${compile['dartWarnings']} '
        'infos=${compile['dartInfos']} ${compile['dartError'] ?? ''}',
      )
      ..writeln(
        '- tsc: exit=${compile['tscExitCode']} '
        'ok=${compile['tscExitCode'] == 0}',
      );
  }
  final gapProbe = result['gapProbe'];
  if (gapProbe is Map) {
    buffer
      ..writeln()
      ..writeln('## Value-type emit gap probe')
      ..writeln()
      ..writeln(
        'Read-only reimplementation of the emitter value-constructor check; '
        'it lists every gap, not only the first failure.',
      );
    for (final item in (gapProbe['modes'] as List?) ?? const []) {
      final row = Map<String, Object?>.from(item as Map);
      final gaps = [
        for (final gap in (row['gaps'] as List?) ?? const [])
          Map<String, Object?>.from(gap as Map),
      ];
      buffer.writeln(
        '- ${row['mode']}: gapCount=${row['gapCount']} '
        'gaps=${gaps.isEmpty ? 'none' : gaps.map((gap) => gap['name']).join(', ')}',
      );
      for (final gap in gaps) {
        buffer.writeln(
          '  - ${gap['name']} (`${gap['id']}`, lib=${gap['typeLibrary']}, '
          'inventory=${gap['inventoryStatus']}, '
          'officialCovered=${gap['officialCovered']})',
        );
      }
    }
  }
  final selectNames = result['selectNames'];
  if (selectNames is Map) {
    buffer
      ..writeln()
      ..writeln('## Explicit select-names')
      ..writeln()
      ..writeln(
        '- requested: ${(selectNames['requested'] as List?)?.join(', ')}',
      )
      ..writeln('- resolved: ${(selectNames['resolved'] as List?)?.join(', ')}')
      ..writeln('- re-added: ${(selectNames['reAdded'] as List?)?.join(', ')}')
      ..writeln(
        '- unresolved: ${(selectNames['unresolved'] as List?)?.join(', ')}',
      );
  }
  final selectProbe = rows(result['selectProbe']);
  if (selectProbe.isNotEmpty) {
    buffer
      ..writeln()
      ..writeln('## Select probe (single-class parse)')
      ..writeln();
    for (final row in selectProbe) {
      buffer.writeln(
        '- ${row['name']}: selectable=${row['selectable']} '
        '${row['reason'] ?? ''} ${row['category'] ?? ''}',
      );
    }
  }
  final soloParse = rows(result['soloParse']);
  if (soloParse.isNotEmpty) {
    buffer
      ..writeln()
      ..writeln('## Solo parse of batch-excluded names')
      ..writeln();
    for (final row in soloParse) {
      buffer.writeln(
        '- ${row['name']}: ${row['classification']} ${row['error'] ?? ''}',
      );
    }
  }
  final coreType = result['coreTypeProbe'];
  if (coreType is Map) {
    buffer
      ..writeln()
      ..writeln('## Unsupported core type breakdown')
      ..writeln()
      ..writeln(
        '- diagnostics: ${coreType['diagnosticCount']} across '
        '${coreType['coreTypeCount']} core types and '
        '${coreType['classCount']} classes',
      );
    for (final item in (coreType['coreTypes'] as List?) ?? const []) {
      final row = Map<String, Object?>.from(item as Map);
      buffer.writeln(
        '- ${row['coreType']}: ${row['diagnosticCount']} '
        'classes=${(row['classes'] as List?)?.join(', ')}',
      );
    }
  }
  final categories = result['failureCategories'];
  buffer
    ..writeln()
    ..writeln('## Failure categories')
    ..writeln();
  if (categories is! Map || categories.isEmpty) {
    buffer.writeln('- none');
  } else {
    final entries = categories.entries.toList()
      ..sort((a, b) => a.key.toString().compareTo(b.key.toString()));
    for (final entry in entries) {
      buffer.writeln('- ${entry.key}: ${entry.value}');
    }
  }
  final notGenerated = rows(result['notGenerated']);
  buffer
    ..writeln()
    ..writeln('## Not generated')
    ..writeln()
    ..writeln(
      '${notGenerated.length} of ${result['denominator']} identities were not '
      'in the generated module. Showing class-like failures first.',
    )
    ..writeln();
  final classLike = [
    for (final row in notGenerated)
      if (row['kind'] == 'class' ||
          row['kind'] == 'mixin' ||
          row['kind'] == 'extensionType')
        row,
  ];
  if (classLike.isEmpty) {
    buffer.writeln('- no class-like omissions');
  } else {
    for (final row in classLike.take(40)) {
      buffer.writeln(
        '- `${row['id']}` inBatch=${row['inBatch']} '
        'status=${row['proposeStatus']}',
      );
    }
    if (classLike.length > 40) {
      buffer.writeln('- … ${classLike.length - 40} more class-like omissions');
    }
  }
  return buffer.toString();
}
