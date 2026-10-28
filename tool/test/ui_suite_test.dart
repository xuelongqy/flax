import 'dart:io';

import 'package:test/test.dart';

import '../src/ui_suite.dart';

void main() {
  test('UI results require all declared cases, including skipped tests', () {
    const complete = '''
{"type":"group","group":{"parentID":null,"testCount":2}}
{"type":"testDone","hidden":true}
{"type":"testDone","hidden":false,"skipped":false}
{"type":"testDone","hidden":false,"skipped":true}
{"type":"done","success":true}
''';
    expect(() => validateUiSuiteResults(complete), returnsNormally);
    for (final incomplete in [
      '{"type":"testDone","hidden":true}\n{"type":"done","success":true}',
      complete.replaceFirst('"testCount":2', '"testCount":3'),
      complete.replaceFirst('"success":true', '"success":false'),
    ]) {
      expect(() => validateUiSuiteResults(incomplete), throwsStateError);
    }
  });
  test(
    'device journal retains grouped plain tests, failures and unfinished cases',
    () {
      final plain = UiResultJournal();
      plain.collect('flutter: 00:00 +0: plain async failure [E]');
      expect(plain.hasFailure, isTrue);
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
  test('CLI rejects engine selection and validates package-bound files', () {
    final options = UiTestOptions([
      '--package',
      'first',
      '--file=test/ui/a_test.dart',
    ]);
    expect(options.packageName, 'first');
    expect(options.file, 'test/ui/a_test.dart');
    expect(
      UiTestOptions([
        '--file=test/ui/a_test.dart',
      ], packageName: 'first').packageName,
      'first',
    );
    for (final args in [
      ['--engine=v8'],
      ['--engine=hermes'],
      ['--engine=all'],
      ['--file=test/ui/a_test.dart'],
      ['--package'],
      ['--package='],
      ['--package=first', '--package=second'],
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
