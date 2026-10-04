import 'dart:convert';
import 'dart:io';

import 'package:path/path.dart' as p;

import 'package_discovery.dart';
import 'process.dart';

/// Single-package and combined runners discover the same package-owned sources.
typedef UiTestFile = ({String packageName, String path});

/// Preserve full grouped identities, including ordinary (non-widget) tests.
final class UiResultJournal {
  final cases = <String, String>{};
  String? _active;
  var _passed = 0;
  var _skipped = 0;
  var _failed = 0;
  bool hasFailure = false;

  bool collect(String line) {
    final match = RegExp(r'\b\d+:\d+ \+(\d+)(?: ~(\d+))?(?: -(\d+))?: (.+)')
        .firstMatch(line);
    if (match == null) return false;
    final passed = int.parse(match[1]!);
    final skipped = int.parse(match[2] ?? '0');
    final failed = int.parse(match[3] ?? '0');
    hasFailure |= failed > 0;
    if (_active case final active?) {
      if (failed > _failed) {
        cases[active] = 'failure';
      } else if (passed > _passed) {
        cases[active] = 'success';
      } else if (skipped > _skipped) {
        cases[active] = 'skipped';
      }
    }
    _active = null;
    final name = match[4]!;
    if (RegExp(r'^[^/ ]+/test/ui/').hasMatch(name)) {
      if (name.endsWith(' [E]')) {
        cases[name.substring(0, name.length - 4)] = 'failure';
        hasFailure = true;
      } else {
        _active = name;
        cases.putIfAbsent(name, () => 'notCompleted');
      }
    }
    _passed = passed;
    _skipped = skipped;
    _failed = failed;
    return true;
  }
}

final class UiTestOptions {
  UiTestOptions(List<String> arguments, {String? packageName}) {
    final values = <String, String>{};
    for (var i = 0; i < arguments.length; i++) {
      final parts = arguments[i].split('=');
      final key = parts.first;
      if (!{'--engine', '--package', '--file'}.contains(key) ||
          values.containsKey(key)) {
        throw ArgumentError('Unknown or duplicate option: ${arguments[i]}');
      }
      final value = parts.length > 1
          ? arguments[i].substring(key.length + 1)
          : (++i < arguments.length ? arguments[i] : '');
      if (value.isEmpty || value.startsWith('--')) {
        throw ArgumentError('Missing $key value');
      }
      values[key] = value;
    }
    engine = values['--engine'] ?? 'hermes';
    if (!{'hermes', 'v8'}.contains(engine)) {
      throw ArgumentError('Unknown engine: $engine');
    }
    if (packageName != null && values.containsKey('--package')) {
      throw ArgumentError('Package is already selected by the command');
    }
    this.packageName = packageName ?? values['--package'];
    file = values['--file'];
    if (file != null && this.packageName == null) {
      throw ArgumentError('--file requires --package');
    }
  }

  late final String engine;
  late final String? packageName;
  late final String? file;
}

List<UiTestFile> collectUiTests(
  String root, {
  String? packageName,
  String? file,
}) {
  if (file != null && packageName == null) {
    throw ArgumentError('--file requires --package');
  }
  final packages = discoverPackages(root);
  if (packageName != null && !packages.any((p) => p.name == packageName)) {
    throw ArgumentError('Unknown package: $packageName');
  }
  final tests = <UiTestFile>[];
  for (final owner in packages) {
    if (packageName != null && packageName != owner.name) continue;
    if (!owner.uiTests.existsSync()) continue;
    for (final source
        in owner.uiTests
            .listSync(recursive: true, followLinks: false)
            .whereType<File>()) {
      if (!source.path.endsWith('_test.dart')) continue;
      final path = p
          .relative(source.path, from: owner.directory.path)
          .replaceAll('\\', '/');
      if (file != null && path != file) continue;
      tests.add((packageName: owner.name, path: path));
    }
  }
  tests.sort(
    (a, b) =>
        '${a.packageName}/${a.path}'.compareTo('${b.packageName}/${b.path}'),
  );
  if (tests.isEmpty) {
    throw ArgumentError(
      'No UI tests selected: ${packageName ?? 'all'} ${file ?? ''}',
    );
  }
  return tests;
}

/// Host-only preparation; the test process receives all owners before registration.
Map<String, String>? _tlsFixtures;

Future<Map<String, Map<String, String>>> prepareUiFixtures(
  String root,
  List<UiTestFile> tests,
) async {
  if (Platform.environment['FLAX_PREPARED_CHECKS'] != null) {
    final packages = jsonDecode(
      File('$root/build/prepared-ui-fixtures.json').readAsStringSync(),
    ) as Map;
    return {
      for (final name in tests.map((t) => t.packageName).toSet())
        name: (packages[name] as Map).cast<String, String>(),
    };
  }
  final tls = Directory.systemTemp.createTempSync('flax-ui-tls-');
  try {
    if (_tlsFixtures == null) {
      await run('openssl', [
        'req',
        '-x509',
        '-newkey',
        'rsa:2048',
        '-nodes',
        '-keyout',
        '${tls.path}/key.pem',
        '-out',
        '${tls.path}/certificate.pem',
        '-days',
        '1',
        '-subj',
        '/CN=localhost',
        '-addext',
        'subjectAltName=DNS:localhost,IP:127.0.0.1',
      ]);
      _tlsFixtures = {
        'certificate.pem': File('${tls.path}/certificate.pem')
            .readAsStringSync(),
        'key.pem': File('${tls.path}/key.pem').readAsStringSync(),
      };
    }
    return {
      for (final name in tests.map((t) => t.packageName).toSet())
        name: {
          for (final source in Directory(
            '$root/packages/$name/.dart_tool/flax/ui',
          ).listSync(recursive: true, followLinks: false).whereType<File>())
            p
                .relative(
                  source.path,
                  from: '$root/packages/$name/.dart_tool/flax/ui',
                )
                .replaceAll('\\', '/'): source
                .readAsStringSync(),
          ..._tlsFixtures!,
        },
    };
  } finally {
    tls.deleteSync(recursive: true);
  }
}

String uiSuiteSource(
  List<UiTestFile> tests, {
  required String importPrefix,
  bool mobile = false,
  bool ios = false,
  bool directLaunch = false,
  String marker = 'FLAX_UI_PASSED',
  Map<String, Map<String, String>>? fixtures,
}) =>
    '''
import 'dart:convert';
import 'dart:io';
import 'package:flutter_test/flutter_test.dart';
import 'package:flax_test/flax_test.dart';
${mobile ? "import 'package:flutter/services.dart';\nimport 'package:integration_test/integration_test.dart';" : ''}
${[for (var i = 0; i < tests.length; i++) "import '$importPrefix${tests[i].packageName}/${tests[i].path}' as t$i;"].join('\n')}
void main() {
  ${mobile ? 'final binding = IntegrationTestWidgetsFlutterBinding.ensureInitialized();' : 'TestWidgetsFlutterBinding.ensureInitialized();'}
  final fixtures = jsonDecode(${mobile ? jsonEncode(jsonEncode(fixtures ?? (throw ArgumentError('Mobile fixtures must be preloaded')))).replaceAll(r'$', r'\$') : "File('ui-fixtures.json').readAsStringSync()"}) as Map;
  flaxTestLoadFixturePackages({for (final entry in fixtures.entries)
    entry.key as String: (entry.value as Map).cast<String, String>()});
  ${ios ? iosSemanticsSetup : ''}
  ${mobile ? mobileViewportSetup : ''}
  ${[for (var i = 0; i < tests.length; i++) "group(${jsonEncode('${tests[i].packageName}/${tests[i].path}')}, t$i.main);"].join('\n  ')}
  ${mobile ? "binding.allTestsPassed.future.then((passed) { for (final entry in binding.results.entries) { print('FLAX_UI_RESULT:' + jsonEncode({'name': entry.key, 'status': entry.value == true ? 'success' : entry.value.toString()})); } });" : ''}
  ${mobile && directLaunch ? "binding.allTestsPassed.future.then((passed) { print(passed ? '$marker' : 'FLAX_PLATFORM_FAILED'); exit(passed ? 0 : 1); });" : ''}
}
''';

const mobileViewportSetup = '''
  setUp(() {
    final view = binding.platformDispatcher.implicitView!;
    view.devicePixelRatio = 1;
    view.physicalSize = const Size(800, 600);
    view.padding = FakeViewPadding.zero;
    view.viewPadding = FakeViewPadding.zero;
    view.viewInsets = FakeViewPadding.zero;
  });
  tearDown(() {
    final view = binding.platformDispatcher.implicitView!;
    view.resetPadding();
    view.resetViewPadding();
    view.resetViewInsets();
    view.resetPhysicalSize();
    view.resetDevicePixelRatio();
  });
''';

const iosSemanticsSetup = '''
  setUpAll(() async {
    // Complete the native semantics handshake before recording leak baselines.
    try {
      await binding.runTest(() async {
        final handle = binding.ensureSemantics();
        try {
          for (var i = 0; i < 100; i++) {
            await binding.pump(const Duration(milliseconds: 20));
            if (binding.platformDispatcher.semanticsEnabled) break;
          }
        } finally {
          handle.dispose();
        }
      }, () {
        expect(binding.debugOutstandingSemanticsHandles,
          binding.platformDispatcher.semanticsEnabled ? 1 : 0);
      }, description: 'platform semantics initialization');
    } finally {
      binding.postTest();
    }
  });
''';
