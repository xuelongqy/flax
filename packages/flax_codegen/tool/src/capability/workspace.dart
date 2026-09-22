import 'dart:io';

import 'package:analyzer/dart/analysis/analysis_context_collection.dart';
import 'package:analyzer/dart/analysis/results.dart';
import 'package:path/path.dart' as p;

String capabilityWorkspaceRoot() {
  final fromScript = p.normalize(
    p.join(p.dirname(Platform.script.toFilePath()), '../../../'),
  );
  if (File(p.join(fromScript, 'pubspec.yaml')).existsSync() &&
      File(p.join(fromScript, 'packages/flax_codegen/pubspec.yaml'))
          .existsSync()) {
    return fromScript;
  }
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

String capabilityFixtureUri(String workspaceRoot, String filename) => Uri.file(
  p.join(
    workspaceRoot,
    'packages/flax_codegen/test/fixtures/capability',
    filename,
  ),
).toString();

Future<LibraryElementResult?> resolveLibrary(
  AnalysisContextCollection collection,
  String uri,
) async {
  for (final context in collection.contexts) {
    final result = await context.currentSession.getLibraryByUri(uri);
    if (result is LibraryElementResult) return result;
  }
  return null;
}
