import 'dart:io';

import 'package:test/test.dart';

import '../src/ui_suite.dart';

void main() {
  test(
    'device journal retains grouped plain tests, failures and unfinished cases',
    () {
      final journal = UiResultJournal();
      journal.collect(
        'flutter: 00:00 +1: first/test/ui/a_test.dart plain assertion',
      );
      journal.collect(
        'flutter: 00:01 +2: second/test/ui/a_test.dart widget assertion',
      );
      expect(
        journal.cases['first/test/ui/a_test.dart plain assertion'],
        'success',
      );
      journal.collect(
        'flutter: 00:02 +2 -1: second/test/ui/a_test.dart widget assertion [E]',
      );
      expect(journal.hasFailure, isTrue);
      expect(
        journal.cases['second/test/ui/a_test.dart widget assertion'],
        'failure',
      );
      journal.collect(
        'I/flutter: 00:02 +2 -1: second/test/ui/a_test.dart never completes',
      );
      expect(
        journal.cases['second/test/ui/a_test.dart never completes'],
        'notCompleted',
      );
      journal.collect('flutter: 00:03 +3 -1: (tearDownAll)');
      expect(
        journal.cases['second/test/ui/a_test.dart never completes'],
        'success',
      );
    },
  );
  late Directory root;
  setUp(() => root = Directory.systemTemp.createTempSync('flax-ui-discovery-'));
  tearDown(() => root.deleteSync(recursive: true));
  void owner(String name, List<String> files) {
    final directory = Directory('${root.path}/packages/$name')
      ..createSync(recursive: true);
    File('${directory.path}/pubspec.yaml').writeAsStringSync('name: $name\n');
    File('${directory.path}/flax_package.yaml').writeAsStringSync(
      'format: 2\ndart:\n  entrypoint: package:$name/$name.dart\ncapabilities: [codegen]\n',
    );
    for (final path in files) {
      File('${directory.path}/$path')
        ..parent.createSync(recursive: true)
        ..writeAsStringSync('void main() {}');
    }
  }

  test('single owner and combined selection share sorted original sources', () {
    owner('z_owner', [
      'test/ui/z_test.dart',
      'test/ui/a_test.dart',
      'test/ui/helper.dart',
    ]);
    owner('a_owner', ['test/ui/nested/b_test.dart', 'test/unit_test.dart']);
    final all = collectUiTests(root.path);
    expect(all, [
      (packageName: 'a_owner', path: 'test/ui/nested/b_test.dart'),
      (packageName: 'z_owner', path: 'test/ui/a_test.dart'),
      (packageName: 'z_owner', path: 'test/ui/z_test.dart'),
    ]);
    expect(collectUiTests(root.path, packageName: 'z_owner'), all.skip(1));
    expect(
      collectUiTests(
        root.path,
        packageName: 'z_owner',
        file: 'test/ui/a_test.dart',
      ),
      [all[1]],
    );
  });
  test('empty, unknown and outside-owner selections fail', () {
    owner('first', ['test/ui/a_test.dart', 'test/unit_test.dart']);
    owner('empty', []);
    for (final selection in [
      (packageName: 'missing', file: null),
      (packageName: 'empty', file: null),
      (packageName: 'first', file: 'test/unit_test.dart'),
      (packageName: 'first', file: '../first/test/ui/a_test.dart'),
      (packageName: null, file: 'test/ui/a_test.dart'),
    ]) {
      expect(
        () => collectUiTests(
          root.path,
          packageName: selection.packageName,
          file: selection.file,
        ),
        throwsArgumentError,
      );
    }
  });
  test('CLI validates engine, duplicates, values and package-bound files', () {
    final options = UiTestOptions([
      '--engine=v8',
      '--package',
      'first',
      '--file=test/ui/a_test.dart',
    ]);
    expect(options.engine, 'v8');
    expect(options.packageName, 'first');
    expect(options.file, 'test/ui/a_test.dart');
    expect(
      UiTestOptions([
        '--file=test/ui/a_test.dart',
      ], packageName: 'first').packageName,
      'first',
    );
    for (final args in [
      ['--engine=all'],
      ['--file=test/ui/a_test.dart'],
      ['--package'],
      ['--package='],
      ['--engine=hermes', '--engine=v8'],
      ['--unknown'],
    ]) {
      expect(() => UiTestOptions(args), throwsArgumentError);
    }
    expect(
      () => UiTestOptions(['--package=other'], packageName: 'first'),
      throwsArgumentError,
    );
  });
  test('generated entry preloads all fixtures before registering original main functions', () {
    owner('first', ['test/ui/a_test.dart']);
    owner('second', ['test/ui/a_test.dart']);
    final tests = collectUiTests(root.path);
    final desktop = uiSuiteSource(tests, importPrefix: '../packages/');
    expect(
      desktop,
      contains("import '../packages/first/test/ui/a_test.dart' as t0;"),
    );
    expect(desktop, contains('group("second/test/ui/a_test.dart", t1.main)'));
    expect(
      desktop.indexOf('flaxTestLoadFixturePackages'),
      lessThan(desktop.indexOf('group(')),
    );
    final device = uiSuiteSource(
      tests,
      importPrefix: '../../packages/',
      mobile: true,
      ios: true,
      directLaunch: true,
      fixtures: {
        'first': {'same.js': r'$fixture'},
        'second': {},
      },
    );
    expect(
      device,
      contains('IntegrationTestWidgetsFlutterBinding.ensureInitialized()'),
    );
    expect(device, contains('debugOutstandingSemanticsHandles'));
    expect(device, contains('view.viewInsets = FakeViewPadding.zero'));
    expect(device, contains('FLAX_PLATFORM_FAILED'));
    expect(device, contains('void main()'));
    expect(device, isNot(contains('await rootBundle')));
    expect(device, contains(r'\$fixture'));
  });
}
