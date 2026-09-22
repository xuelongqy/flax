import 'dart:convert';
import 'dart:io';

import 'package:analyzer/dart/analysis/analysis_context_collection.dart';
import 'package:analyzer/dart/analysis/results.dart';
import 'package:analyzer/dart/element/element.dart';
import 'package:path/path.dart' as p;

import 'inventory.dart';
import 'workspace.dart';

/// Public `package:flutter/*.dart` barrel files. `lib/src` is not a public entry.
List<String> flutterPublicLibraryUris(String workspaceRoot) {
  final flutterRoot = flutterPackageRoot(workspaceRoot);
  if (flutterRoot == null) return const [];
  final lib = Directory(p.join(flutterRoot, 'lib'));
  if (!lib.existsSync()) return const [];
  final uris = <String>[];
  for (final entity in lib.listSync()) {
    if (entity is! File || p.extension(entity.path) != '.dart') continue;
    uris.add('package:flutter/${p.basename(entity.path)}');
  }
  uris.sort();
  return uris;
}

String? flutterPackageRoot(String workspaceRoot) {
  final file = File(p.join(workspaceRoot, '.dart_tool/package_config.json'));
  if (!file.existsSync()) return null;
  final json = jsonDecode(file.readAsStringSync()) as Map<String, dynamic>;
  final packages = json['packages'];
  if (packages is! List) return null;
  for (final package in packages) {
    if (package is! Map) continue;
    if (package['name'] != 'flutter') continue;
    final rootUri = package['rootUri'];
    if (rootUri is! String || rootUri.isEmpty) return null;
    final resolved = file.uri.resolve(rootUri);
    return resolved.toFilePath();
  }
  return null;
}

Future<List<Map<String, Object?>>> indexFlutterPublicLibraries({
  required AnalysisContextCollection collection,
  required String workspaceRoot,
}) async {
  final flutterRoot = flutterPackageRoot(workspaceRoot);
  final uris = flutterPublicLibraryUris(workspaceRoot);
  if (flutterRoot == null) {
    return [
      {
        'uri': 'package:flutter/*',
        'resolved': false,
        'identities': 0,
        'kinds': const <String, int>{},
        'elapsedMilliseconds': 0,
        'error':
            'flutter package is missing from .dart_tool/package_config.json',
      },
    ];
  }
  final records = <Map<String, Object?>>[];
  for (final uri in uris) {
    final watch = Stopwatch()..start();
    final result = await resolveLibrary(collection, uri);
    if (result is! LibraryElementResult) {
      records.add({
        'uri': uri,
        'resolved': false,
        'identities': 0,
        'kinds': const <String, int>{},
        'elapsedMilliseconds': watch.elapsedMilliseconds,
        'error': 'Cannot resolve $uri',
      });
      continue;
    }
    final kinds = <String, int>{};
    final identities = <String>{};
    var exportNames = 0;
    for (final entry in result.element.exportNamespace.definedNames2.entries) {
      if (entry.value is PrefixElement) continue;
      exportNames++;
      identities.add(declarationId(entry.value));
      final kind = declarationKind(entry.value);
      kinds[kind] = (kinds[kind] ?? 0) + 1;
    }
    records.add({
      'uri': uri,
      'resolved': true,
      'identities': identities.length,
      'exportNames': exportNames,
      'kinds': kinds,
      'elapsedMilliseconds': watch.elapsedMilliseconds,
    });
  }
  return records;
}
