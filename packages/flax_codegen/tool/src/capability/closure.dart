import 'dart:convert';
import 'dart:io';

import 'package:analyzer/dart/analysis/analysis_context_collection.dart';
import 'package:analyzer/dart/analysis/results.dart';
import 'package:analyzer/dart/element/element.dart';
import 'package:path/path.dart' as p;

import 'inventory.dart';
import 'workspace.dart';

/// The barrel a stage 3 run treats as `config.library`; the probe keeps it in
/// every candidate set and never recommends it as an addition.
const closureBaseEntry = 'package:flutter/widgets.dart';

/// Fixed candidate public entries for the widgets dependency-closure probe.
///
/// Everything here is a public entry point: Flutter barrels, `dart:ui` and the
/// SDK libraries Flutter exposes, plus the vector_math entry widgets re-exports.
/// `package:flutter/src/**` and the cupertino/material barrels are deliberately
/// excluded so a successful closure stays inside the repository's public-entry
/// convention.
const closureCandidateEntries = <String>[
  'package:flutter/widgets.dart',
  'package:flutter/animation.dart',
  'package:flutter/foundation.dart',
  'package:flutter/gestures.dart',
  'package:flutter/painting.dart',
  'package:flutter/physics.dart',
  'package:flutter/rendering.dart',
  'package:flutter/scheduler.dart',
  'package:flutter/semantics.dart',
  'package:flutter/services.dart',
  'dart:ui',
  'dart:core',
  'dart:async',
  'dart:typed_data',
  'package:vector_math/vector_math_64.dart',
];

/// How a candidate entry can satisfy the generator's
/// `<config.library> must publicly export the referenced type` check for a name.
enum _Anchor {
  /// The entry exports the exact declaration the barrel inventory recorded.
  declaredIdentity,

  /// The entry is itself the declaring library of the exported element.
  declaringEntry,

  /// The entry re-exports a declaration owned by another library.
  ///
  /// The generator compares the referenced element with the entry's export
  /// namespace by identity, so any barrel that re-exports the same element
  /// (`package:flutter/src/**` implementation file or SDK library such as
  /// `dart:ui`) satisfies the check, whichever entry carries it.
  externalDeclaration,
}

/// Reads a name list written for `--exclude`: an optional leading count line,
/// then comma-separated names. Order is preserved and duplicates are dropped.
List<String> readClosureCandidateNames(String path) {
  final file = File(path);
  if (!file.existsSync()) return const [];
  final names = <String>[];
  final seen = <String>{};
  for (final raw in file.readAsStringSync().split('\n')) {
    final line = raw.trim();
    if (line.isEmpty) continue;
    if (int.tryParse(line) != null) continue;
    for (final part in line.split(',')) {
      final name = part.trim();
      if (name.isEmpty || !seen.add(name)) continue;
      names.add(name);
    }
  }
  return names;
}

/// Resolves the fixed candidate entries and reports, for each requested name,
/// whether the public entry set can carry it without changing the generator.
Future<Map<String, Object?>> runClosureProbe({
  required String workspaceRoot,
  required String outDir,
  required String inventoryPath,
  required List<String> candidatesPaths,
  void Function(String message)? log,
}) async {
  void emit(String message) => log?.call(message);
  final requested = <String>[];
  final requestedSeen = <String>{};
  for (final path in candidatesPaths) {
    for (final name in readClosureCandidateNames(path)) {
      if (requestedSeen.add(name)) requested.add(name);
    }
  }
  final declaredBy = _declaredIdentities(inventoryPath);

  final collection = AnalysisContextCollection(includedPaths: [workspaceRoot]);
  try {
    final exportedByEntry = <String, Map<String, Element>>{};
    final resolution = <String, bool>{};
    for (final uri in closureCandidateEntries) {
      final result = await resolveLibrary(collection, uri);
      if (result is! LibraryElementResult) {
        resolution[uri] = false;
        emit('  closure: cannot resolve $uri');
        continue;
      }
      resolution[uri] = true;
      final exported = <String, Element>{};
      for (final entry
          in result.element.exportNamespace.definedNames2.entries) {
        if (entry.value is PrefixElement) continue;
        exported[entry.key] = entry.value;
      }
      exportedByEntry[uri] = exported;
      emit('  closure: $uri exportNames=${exported.length}');
    }

    /// name -> declaration identity -> entries exporting that identity.
    final variants = <String, Map<String, List<String>>>{};
    for (final uri in closureCandidateEntries) {
      final exported = exportedByEntry[uri];
      if (exported == null) continue;
      for (final entry in exported.entries) {
        final byIdentity = variants[entry.key] ??= <String, List<String>>{};
        (byIdentity[declarationId(entry.value)] ??= <String>[]).add(uri);
      }
    }

    // A name with two declared identities cannot be merged into one config:
    // `_publicExports` throws `Conflicting public declaration` on it.
    final conflictingNames = <String>[
      for (final entry in variants.entries)
        if (entry.value.length > 1) entry.key,
    ]..sort();

    final base = exportedByEntry[closureBaseEntry] ?? const <String, Element>{};
    final chosen = <String>[closureBaseEntry];
    final merged = <String, Element>{...base};
    final uncovered = <String>{
      for (final name in requested)
        if (_anchor(name, closureBaseEntry, base[name], declaredBy) == null)
          name,
    };
    final rejected = <String, List<String>>{};
    while (true) {
      String? best;
      var bestGain = 0;
      for (final uri in closureCandidateEntries) {
        if (chosen.contains(uri)) continue;
        final exported = exportedByEntry[uri];
        if (exported == null) continue;
        final clashes = _conflictsWith(merged, exported);
        if (clashes.isNotEmpty) {
          rejected[uri] = clashes;
          continue;
        }
        final gain = uncovered
            .where(
              (name) => _anchor(name, uri, exported[name], declaredBy) != null,
            )
            .length;
        if (gain > bestGain) {
          best = uri;
          bestGain = gain;
        }
      }
      if (best == null) break;
      final picked = best;
      final pickedExports = exportedByEntry[picked]!;
      chosen.add(picked);
      merged.addAll(pickedExports);
      uncovered.removeWhere(
        (name) =>
            _anchor(name, picked, pickedExports[name], declaredBy) != null,
      );
    }

    final recommended = chosen.where((uri) => uri != closureBaseEntry).toList();

    // Names reachable through *some* public entry, even when that entry cannot
    // coexist with the base barrel.
    final attainable = <String>{};
    for (final name in requested) {
      if (chosen.any(
        (uri) =>
            _anchor(name, uri, exportedByEntry[uri]?[name], declaredBy) != null,
      )) {
        attainable.add(name);
      }
    }

    final covered = <String>[
      for (final name in requested)
        if (attainable.contains(name)) name,
    ];
    final unreached = <Map<String, Object?>>[];
    final srcOnly = <Map<String, Object?>>[];
    final notExported = <Map<String, Object?>>[];
    for (final name in requested) {
      if (attainable.contains(name)) continue;
      final declaredIn = declaredBy[name] ?? const <String>{};
      final uris = [
        for (final id in declaredIn)
          if (id.contains('::')) id.substring(0, id.indexOf('::')),
      ];
      final blockers = <String>[
        for (final entry
            in variants[name]?.entries ??
                const <MapEntry<String, List<String>>>[])
          if (entry.value.isNotEmpty) entry.value.first,
      ];
      final record = <String, Object?>{
        'name': name,
        'declaredIn': uris,
        'publiclyExportedBy': blockers,
      };
      if (blockers.isEmpty) {
        if (uris.isNotEmpty &&
            uris.every((uri) => uri.startsWith('package:flutter/src/'))) {
          srcOnly.add(record);
        } else {
          notExported.add(record);
        }
      } else {
        record['reason'] = 'conflictBlocked';
        unreached.add(record);
      }
    }

    final result = <String, Object?>{
      'candidatesPaths': candidatesPaths,
      'candidateCount': requested.length,
      'candidateEntries': closureCandidateEntries,
      'baseEntry': closureBaseEntry,
      'entryResolution': resolution,
      // Requested names the base barrel cannot carry, and the candidate
      // entries that can carry them (empty means no public entry can).
      'nameCarriers': {
        for (final name in requested)
          if (_anchor(name, closureBaseEntry, base[name], declaredBy) == null)
            name: [
              for (final uri in closureCandidateEntries)
                if (_anchor(
                      name,
                      uri,
                      exportedByEntry[uri]?[name],
                      declaredBy,
                    ) !=
                    null)
                  uri,
            ],
      },
      'perEntry': [
        for (final uri in closureCandidateEntries)
          {
            'uri': uri,
            'resolved': resolution[uri] ?? false,
            'exportNames': exportedByEntry[uri]?.length ?? 0,
            'identityCoveredFromRequested': [
              for (final name in requested)
                if (_anchor(
                      name,
                      uri,
                      exportedByEntry[uri]?[name],
                      declaredBy,
                    ) !=
                    null)
                  name,
            ].length,
            'conflictingWithBase': rejected[uri] ?? const <String>[],
            'inRecommendedSet': recommended.contains(uri),
          },
      ],
      'covered': covered.length,
      'coveredNames': covered,
      'attainable': attainable.length,
      'unreached': unreached.length,
      'unreachedNames': unreached,
      'srcOnly': srcOnly.length,
      'srcOnlyNames': srcOnly,
      'notExported': notExported.length,
      'notExportedNames': notExported,
      'conflicts': [
        for (final name in conflictingNames)
          {
            'name': name,
            'identities': variants[name]!.keys.toList(),
            'uris': [
              for (final entry in variants[name]!.entries) ...entry.value,
            ],
          },
      ],
      'recommendedAdditionalLibraries': recommended,
      'recommendedCovered': covered.length,
      'rejectedForConflict': [
        for (final entry in rejected.entries)
          {'uri': entry.key, 'conflictNames': entry.value},
      ],
    };

    final directory = Directory(outDir)..createSync(recursive: true);
    File(p.join(directory.path, 'closure.json'))
        .writeAsStringSync(const JsonEncoder.withIndent('  ').convert(result));
    final markdown = _markdown(result);
    File(p.join(directory.path, 'CLOSURE.md')).writeAsStringSync(markdown);
    emit(markdown);
    return result;
  } finally {
    collection.dispose();
  }
}

_Anchor? _anchor(
  String name,
  String entryUri,
  Element? element,
  Map<String, Set<String>> declaredBy,
) {
  if (element == null) return null;
  final declared = declaredBy[name];
  if (declared != null && declared.isNotEmpty) {
    return declared.contains(declarationId(element))
        ? _Anchor.declaredIdentity
        : null;
  }
  final library = element.library?.uri.toString() ?? '';
  if (library == entryUri) return _Anchor.declaringEntry;
  if (library.startsWith('package:flutter/src/') ||
      library.startsWith('dart:')) {
    return _Anchor.externalDeclaration;
  }
  return null;
}

List<String> _conflictsWith(
  Map<String, Element> merged,
  Map<String, Element> addition,
) {
  final clashes = <String>[];
  for (final entry in addition.entries) {
    final previous = merged[entry.key];
    if (previous != null && previous != entry.value) clashes.add(entry.key);
  }
  return clashes;
}

/// name -> declaration identities the widgets barrel records for that name.
Map<String, Set<String>> _declaredIdentities(String inventoryPath) {
  final declaredBy = <String, Set<String>>{};
  for (final declaration in _readDeclarations(inventoryPath)) {
    final name = declaration['name'] as String?;
    final id = declaration['id'] as String?;
    if (name == null || id == null) continue;
    (declaredBy[name] ??= <String>{}).add(id);
  }
  return declaredBy;
}

List<Map<String, Object?>> _readDeclarations(String inventoryPath) {
  final file = File(inventoryPath);
  if (!file.existsSync()) return const [];
  final decoded = jsonDecode(file.readAsStringSync());
  if (decoded is! Map) return const [];
  final declarations = decoded['declarations'];
  if (declarations is! List) return const [];
  return [
    for (final row in declarations) Map<String, Object?>.from(row as Map),
  ];
}

String _markdown(Map<String, Object?> result) {
  final perEntry = (result['perEntry'] as List).cast<Map<String, Object?>>();
  final buffer = StringBuffer()
    ..writeln('# flax_codegen capability verification — public closure probe')
    ..writeln()
    ..writeln('Status: analysis diagnostic, not a product gate.')
    ..writeln()
    ..writeln('- base barrel: ${result['baseEntry']}')
    ..writeln(
      '- candidate name lists: ${(result['candidatesPaths'] as List).join(', ')}',
    )
    ..writeln('- requested names: ${result['candidateCount']}')
    ..writeln(
      '- reachable, conflict-free set: ${result['covered']} (attainable through some public entry: ${result['attainable']})',
    )
    ..writeln('- blocked by entry conflicts: ${result['unreached']}')
    ..writeln('- src-only (never re-exported publicly): ${result['srcOnly']}')
    ..writeln('- not exported by any candidate: ${result['notExported']}')
    ..writeln()
    ..writeln('## Names the base barrel cannot carry')
    ..writeln()
    ..writeln(
      'Carriers are candidate entries whose export namespace resolves the name to',
    )
    ..writeln(
      'the same declaration the base barrel would; an empty list means no public',
    )
    ..writeln('entry carries the name.')
    ..writeln();
  final nameCarriers = (result['nameCarriers'] as Map).cast<String, Object?>();
  if (nameCarriers.isEmpty) {
    buffer.writeln('- none');
  } else {
    final names = nameCarriers.keys.toList()..sort();
    for (final name in names) {
      final carriers = (nameCarriers[name] as List).cast<String>();
      buffer.writeln(
        '- $name: ${carriers.isEmpty ? 'no public carrier' : carriers.join(', ')}',
      );
    }
  }

  buffer
    ..writeln()
    ..writeln('## Per-entry contribution')
    ..writeln();
  for (final row in perEntry) {
    buffer.writeln(
      '- ${row['uri']}: resolved=${row['resolved']} '
      'exportNames=${row['exportNames']} '
      'identityCoveredFromRequested=${row['identityCoveredFromRequested']} '
      'inRecommendedSet=${row['inRecommendedSet']}',
    );
  }

  buffer
    ..writeln()
    ..writeln('## Conflicts (reported, not repaired)')
    ..writeln()
    ..writeln(
      '`_publicExports` throws `Conflicting public declaration` when two',
    )
    ..writeln(
      'entries in one config export the same name for different declarations.',
    )
    ..writeln();
  final conflicts = (result['conflicts'] as List).cast<Map<String, Object?>>();
  if (conflicts.isEmpty) {
    buffer.writeln('- none');
  } else {
    for (final conflict in conflicts) {
      buffer.writeln(
        '- ${conflict['name']}: ${(conflict['uris'] as List).join(', ')}',
      );
    }
  }

  buffer
    ..writeln()
    ..writeln('## Recommended additionalLibraries (greedy, conflict-free)')
    ..writeln();
  final recommended = (result['recommendedAdditionalLibraries'] as List)
      .cast<String>();
  if (recommended.isEmpty) {
    buffer.writeln('- none');
  } else {
    for (final uri in recommended) {
      buffer.writeln('- $uri');
    }
  }

  buffer
    ..writeln()
    ..writeln('## Unreached by the recommended set')
    ..writeln();
  final unreached = (result['unreachedNames'] as List)
      .cast<Map<String, Object?>>();
  if (unreached.isEmpty) {
    buffer.writeln('- none');
  } else {
    for (final row in unreached) {
      final blockers = (row['publiclyExportedBy'] as List).cast<String>();
      buffer.writeln(
        '- ${row['name']} (${row['reason']}): public carriers ${blockers.join(', ')}',
      );
    }
  }

  buffer
    ..writeln()
    ..writeln('## Rejected for conflict with the chosen set')
    ..writeln();
  final rejected = (result['rejectedForConflict'] as List)
      .cast<Map<String, Object?>>();
  if (rejected.isEmpty) {
    buffer.writeln('- none');
  } else {
    for (final row in rejected) {
      buffer.writeln(
        '- ${row['uri']}: ${(row['conflictNames'] as List).join(', ')}',
      );
    }
  }

  buffer
    ..writeln()
    ..writeln('## Still unreachable through public entries')
    ..writeln();
  for (final key in ['srcOnlyNames', 'notExportedNames']) {
    for (final row in (result[key] as List).cast<Map<String, Object?>>()) {
      buffer.writeln(
        '- ${row['name']} declares in ${(row['declaredIn'] as List).join(', ')}',
      );
    }
  }
  return buffer.toString();
}
