import 'dart:convert';
import 'dart:io';

import 'src/prepared_checks.dart';
import 'src/process.dart';
import 'src/ui_suite.dart';

Future<void> main(List<String> arguments) => command(() async {
  if (arguments.length != 1 ||
      !RegExp(r'^--(output|consume)=.+$').hasMatch(arguments.single)) {
    throw ArgumentError(
      'Usage: dart run tool/prepare_checks.dart --output=<dir> | --consume=<dir>',
    );
  }
  final root = Directory.fromUri(Platform.script.resolve('../')).path;
  final path = arguments.single.substring(arguments.single.indexOf('=') + 1);
  if (arguments.single.startsWith('--consume=')) {
    consumePreparedChecks(root, Directory(path));
    stdout.writeln('Prepared outputs verified for this checkout.');
    return;
  }
  await run('pnpm', ['--silent', 'run', 'js:build'], directory: root);
  await run('node', ['tool/ui_bundle.mjs'], directory: root);
  await run('node', ['tool/example_bundle.mjs'], directory: root);
  File('$root/build/prepared-ui-fixtures.json')
    ..parent.createSync(recursive: true)
    ..writeAsStringSync(
      jsonEncode(await prepareUiFixtures(root, collectUiTests(root))),
    );
  writePreparedChecks(root, Directory(path));
});
