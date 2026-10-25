import 'dart:io';

import '../../tool/src/process.dart';

Future<void> main(List<String> args) async {
  final root = File.fromUri(Platform.script).parent.parent.parent.path;
  // Reuse the isolated build's entitlement restoration and local-engine selection.
  final source = File('$root/experiments/js_handoff/build.dart')
      .readAsStringSync();
  final target = File('$root/.local/gallery-handoff/build-entry.dart');
  target.writeAsStringSync(
    source.replaceFirst(
      'experiments/js_handoff/app.dart',
      'experiments/gallery_handoff/app.dart',
    ),
  );
  await run('dart', ['run', target.path, ...args], directory: root);
}
