import 'dart:io';

import 'package:crypto/crypto.dart';

/// Build-time validation; not part of the JavaScript runtime API.
Future<List<File>> flaxUniqueEngineLibraries(
  List<File> libraries,
  Map<String, Object?> shared,
) async {
  final unique = <File>[];
  String key(String name) =>
      name.toLowerCase().endsWith('.dll') ? name.toLowerCase() : name;
  shared = {for (final entry in shared.entries) key(entry.key): entry.value};
  for (final library in libraries) {
    final name = key(library.uri.pathSegments.last);
    if (!shared.containsKey(name)) {
      unique.add(library);
      continue;
    }
    final digest = (await sha256.bind(library.openRead()).first).toString();
    if (shared[name] != digest) {
      throw StateError('Engine SDK and shared asset owner disagree for $name');
    }
  }
  return unique;
}
