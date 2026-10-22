import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';

import 'project_setup.dart';

const _usage =
    'Usage: dart run flax_cli:flax init\n'
    '       dart run flax_cli:flax sync (legacy output configuration only)';

Future<int> runFlaxCli(
  List<String> arguments, {
  String? workingDirectory,
  void Function(String)? writeStdout,
  void Function(String)? writeStderr,
}) async {
  final out = writeStdout ?? stdout.writeln;
  final err = writeStderr ?? stderr.writeln;
  if (arguments.length != 1 || !{'init', 'sync'}.contains(arguments.single)) {
    err(_usage);
    return 64;
  }
  try {
    final root = workingDirectory ?? Directory.current.path;
    final List<String> changed;
    if (arguments.single == 'init') {
      changed = await flaxInitializeProject(root);
      out('Prepared Flax host setup (${changed.length} files updated).');
      out(
        'Run flutter pub get, generate bindings, then pnpm --dir js install and pnpm --dir js run build.',
      );
      out(
        'Existing source is preserved. Load the prepared modules and inject the generated View plugin in your host.',
      );
    } else {
      final validation = await FlaxCodegenPackagePipeline.validateConfig(
        null,
        packageRoot: root,
      );
      changed = flaxSynchronizeLegacyProject(root, validation.outputInventory);
      out(
        'Updated legacy Builder configuration (${changed.length} files updated).',
      );
    }
    return 0;
  } on FlaxCodegenException catch (error) {
    err(error.toString());
    return 1;
  } on FormatException catch (error) {
    err(error.message);
    return 1;
  } on FileSystemException catch (error) {
    err(error.toString());
    return 1;
  }
}
