import 'dart:io';

import 'src/platform_selection.dart';
import 'src/process.dart';
import 'src/ui_suite.dart';

Future<void> main(List<String> arguments) => command(() async {
  final options = PlatformCheckOptions(arguments);
  final root = Directory.fromUri(Platform.script.resolve('../')).path;
  final uiTests = options.scope == 'platform'
      ? <UiTestFile>[]
      : collectUiTests(
          root,
          packageName: options.packageName,
          file: options.file,
        );
  // Common logic has one Linux gate; full target checks retain every runtime/UI
  // assertion without repeating host-only generator and archive tests.
  final commonChecks =
      options.scope == 'all' &&
      !options.buildOnly &&
      options.target.name == 'linux-x64';
  if (options.list) {
    stdout.writeln('Historical SDK plan; execution is retired.');
    stdout.writeln(
      '${options.target.name}: ${options.engines.join(', ')}; ${options.scope}',
    );
    if (options.scope == 'all') {
      stdout.writeln(
        commonChecks
            ? 'Host: melos check (JS/Dart logic, generated files, static analysis; once on Linux)'
            : 'Host: JS and device test bundles; common logic uses melos check separately or the Linux CI gate',
      );
    }
    for (final test in uiTests) {
      stdout.writeln(
        'UI ${test.packageName}: ${test.path} '
        '(${options.target.mobile ? 'device debug app' : 'headless widget'}; VM-service GC enabled)',
      );
    }

    stdout.writeln(
      'Each engine: native ABI/contracts, SDK architecture/exports, runtime and loop closures, external application',
    );
    stdout.writeln(
      options.target.mobile
          ? 'Mobile: --device required; iOS simulator uses Dart JIT; iOS device/Android release build uses Dart AOT. iOS V8 is jitless.'
          : 'Desktop: CLI Dart JIT/AOT relocation, framework/application loading and release relocation; V8 machine-code proof.',
    );
    stdout.writeln(
      '--build-only records builds only; never reports runtime/application acceptance.',
    );
    return;
  }
  throw UnsupportedError(
    'The standalone SDK platform matrix is retired. '
    'Use tool/check_engine_application.dart with the maintained macOS arm64 engine.',
  );
});
