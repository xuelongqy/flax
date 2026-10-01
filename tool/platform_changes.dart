import 'dart:convert';
import 'dart:io';

// Runs before pub get in the lightweight diff job.
// ignore: avoid_relative_lib_imports
import '../packages/flax/lib/native_target.dart';

/// Includes both names in a rename and the original path of a deletion.
Set<String> changedPaths(String diff) {
  final tokens = diff.split('\u0000');
  final paths = <String>{};
  for (var i = 0; i < tokens.length && tokens[i].isNotEmpty;) {
    final status = tokens[i++];
    final count = status.startsWith('R') || status.startsWith('C') ? 2 : 1;
    for (var n = 0; n < count; n++) {
      if (i >= tokens.length || tokens[i].isEmpty) {
        throw FormatException('Incomplete git diff');
      }
      paths.add(tokens[i++]);
    }
  }
  return paths;
}

List<Map<String, Object>> platformJobs(Iterable<String> paths) {
  final affected = <String, Set<String>>{};
  void add(Iterable<String> targets, Iterable<String> engines) {
    for (final target in targets) {
      if (target == 'linux-x64') continue; // Covered by the default full job.
      affected.putIfAbsent(target, () => {}).addAll(engines);
    }
  }

  for (final path in paths) {
    if (path.endsWith('.md') || path.startsWith('docs/')) continue;
    if (path == '.gitattributes') {
      add(['windows-x64', 'windows-arm64'], ['hermes', 'v8']);
      continue;
    }
    if (path.startsWith('packages/flax_native_assets/')) {
      add(
        FlaxNativeTarget.names.where(
          (t) => t.startsWith('android-') || t.startsWith('windows-'),
        ),
        ['hermes', 'v8'],
      );
      continue;
    }
    if (path == 'tool/start_android_emulator.py' ||
        path == 'tool/test/start_android_emulator_test.py') {
      add(['android-x64'], ['hermes', 'v8']);
      continue;
    }
    final engine = RegExp(
      r'^packages/flax_engine_(hermes|v8)/(native/|hook/|lib/|pubspec.yaml)',
    ).firstMatch(path)?.group(1);
    if (engine != null) {
      add(FlaxNativeTarget.names, [engine]);
      continue;
    }
    if (path.startsWith('packages/flax/native/') ||
        path.startsWith('packages/flax/lib/native_') ||
        path.startsWith('tool/src/platform_') ||
        path.startsWith('tool/check_platform') ||
        path.startsWith('tool/src/platform_application') ||
        path.startsWith('tests/platform/') ||
        path.startsWith('examples/standalone/test/support/') ||
        path == 'packages/flax_test/lib/src/fixtures.dart' ||
        path == 'packages/flax_test/lib/src/gc.dart' ||
        path == 'tool/start_simulator.py' ||
        path == 'tool/ui_bundle.mjs' ||
        path == 'tool/src/example_engine.dart' ||
        path == 'tool/src/package_verification.dart' ||
        path == 'tool/src/ui_testing.dart' ||
        path == '.github/workflows/check.yml' ||
        path == 'tool/platform_changes.dart' ||
        path == '.fvmrc' ||
        path == 'pubspec.yaml' ||
        path == 'pubspec.lock' ||
        path == '.github/workflows/runtime.yml' ||
        path == '.github/workflows/platform.yml') {
      add(FlaxNativeTarget.names, ['hermes', 'v8']);
      continue;
    }
    for (final os in ['linux', 'windows', 'macos', 'android', 'ios']) {
      if (path.contains('/$os/') ||
          path.startsWith('tool/src/${os}_') ||
          path.startsWith('tests/platform/$os')) {
        add(FlaxNativeTarget.names.where((t) => t.startsWith('$os-')), [
          'hermes',
          'v8',
        ]);
      }
    }
  }
  return [
    for (final target in FlaxNativeTarget.names)
      if (affected.containsKey(target))
        {
          'target': target,
          'engine': affected[target]!.length == 2
              ? 'all'
              : affected[target]!.single,
        },
  ];
}

Future<void> main(List<String> arguments) async {
  if (arguments.length != 2) {
    throw ArgumentError('Expected base and head Git revisions');
  }
  final result = await Process.run('git', [
    'diff',
    '--name-status',
    '-z',
    '--find-renames',
    arguments[0],
    arguments[1],
  ]);
  if (result.exitCode != 0) {
    throw StateError('Cannot read full git diff: ${result.stderr}');
  }
  final jobs = platformJobs(changedPaths(result.stdout as String));
  final value = jsonEncode({'include': jobs});
  stdout.writeln(value);
  final output = Platform.environment['GITHUB_OUTPUT'];
  if (output != null) {
    File(output).writeAsStringSync(
      'matrix=$value\nrun=${jobs.isNotEmpty}\n',
      mode: FileMode.append,
    );
  }
}
