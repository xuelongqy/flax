import 'dart:io';

import 'package:flax_codegen/src/cli.dart';

Future<void> main(List<String> arguments) async {
  exitCode = await runFlaxCodegenCli(arguments);
}
