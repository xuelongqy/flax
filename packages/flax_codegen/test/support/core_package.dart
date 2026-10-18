import 'dart:io';

import 'package:flax_codegen/src/identity.dart';
import 'package:flax_codegen/src/manifest.dart';
import 'package:flax_codegen/src/ownership.dart';
import 'package:path/path.dart' as p;

/// Isolated command/ownership fixtures do not consume Flutter's SDK surface.
Directory writeEmptyCorePackage(Directory workspace) {
  final core = Directory(p.join(workspace.path, 'core_fixture'))
    ..createSync(recursive: true);
  File(p.join(core.path, 'pubspec.yaml')).writeAsStringSync('name: flax\n');
  Directory(p.join(core.path, 'lib')).createSync();
  final bindings = Directory(p.join(core.path, 'bindings'))..createSync();
  final manifest = FlaxCodegenManifest.fromResolved(
    package: FlaxCodegenResolvedPackage(
      dartPackage: 'flax',
      namespace: FlaxCodegenBindingNamespace.parse('flax.core'),
      modules: const [],
    ),
    modules: const {},
    importPackageNames: const [],
  );
  File(p.join(bindings.path, 'manifest.json'))
      .writeAsStringSync(manifest.encode());
  return core;
}
