import 'dart:io';

import 'src/process.dart';

Future<void> main(List<String> arguments) => command(() async {
  if (arguments.contains('--help')) {
    stdout.writeln(
      'The independent Dart benchmark is historical. '
      'Run dart run tool/check_engine_application.dart profile.',
    );
    return;
  }
  throw UnsupportedError(
    'Flax requires its Flutter UI isolate. Independent Dart hosts are retired; '
    'run check_engine_application.dart profile.',
  );
});
