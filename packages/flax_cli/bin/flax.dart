import 'dart:io';

import 'package:flax_cli/src/cli.dart';

Future<void> main(List<String> arguments) async {
  exitCode = await runFlaxCli(arguments);
}
