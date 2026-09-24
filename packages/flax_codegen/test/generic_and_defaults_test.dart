import 'dart:io';

import 'package:analyzer/dart/analysis/analysis_context_collection.dart';
import 'package:analyzer/dart/analysis/results.dart';
import 'package:analyzer/dart/element/element.dart';
import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import '../tool/src/capability/measure.dart';
import 'generator_test.dart' show compileFixture;

void main() {
  final repoRoot = _repoRoot();
  late AnalysisContextCollection collection;

  setUpAll(() {
    collection = AnalysisContextCollection(
      includedPaths: [p.absolute(repoRoot)],
    );
  });
  tearDownAll(() => collection.dispose());

  FlaxCodegenBindingConfig config(String filename) => FlaxCodegenBindingConfig(
    'capability',
    Uri.file(
      p.join(
        repoRoot,
        'packages/flax_codegen/test/fixtures/capability',
        filename,
      ),
    ).toString(),
    '@example/capability',
    'unused.dart',
    'unused.ts',
    const {},
  );

  Future<InterfaceElement> load(String filename, String name) async {
    final uri = config(filename).library;
    final result = await collection.contexts.first.currentSession
        .getLibraryByUri(uri);
    expect(result, isA<LibraryElementResult>());
    final element = (result as LibraryElementResult)
        .element
        .exportNamespace
        .definedNames2[name];
    expect(element, isA<InterfaceElement>());
    return element as InterfaceElement;
  }

  test(
    'keeps unconstrained generics in TS and uses an Object? shared Dart owner',
    () async {
      final parser = FlaxCodegenBindingParser(repoRoot);
      addTearDown(parser.dispose);
      final library = config('generic_cases.dart');
      final proposed = await parser.proposeSelection(
        await load('generic_cases.dart', 'GenericBox'),
        library: library,
      );
      expect(proposed.selection!.typeArguments, isEmpty);
      expect(proposed.selection!.constructors, isEmpty);
      final module = await parser.parse(
        FlaxCodegenBindingConfig(
          library.name,
          library.library,
          library.jsPackage,
          library.dartOutput,
          library.tsOutput,
          {'GenericBox': proposed.selection!},
        ),
      );
      final box = module.classes.single;
      expect(box.typeParameters.map((parameter) => parameter.name), ['T']);
      expect(box.typeArguments, ['Object?']);
    },
  );

  test('uses a closed core bound for the shared Dart owner when Object? is illegal', () async {
    final parser = FlaxCodegenBindingParser(repoRoot);
    addTearDown(parser.dispose);
    final library = config('generic_cases.dart');
    final proposed = await parser.proposeSelection(
      await load('generic_cases.dart', 'NumericBox'),
      library: library,
    );
    expect(proposed.selection!.typeArguments, isEmpty);
    final module = await parser.parse(
      FlaxCodegenBindingConfig(
        library.name,
        library.library,
        library.jsPackage,
        library.dartOutput,
        library.tsOutput,
        {'NumericBox': proposed.selection!},
      ),
    );
    expect(module.classes.single.typeArguments, ['num']);
  });

  test(
    'uses public nominal and fully closed generic bounds as shared owners',
    () async {
      final target = config('generic_cases.dart');

      Future<FlaxCodegenModuleModel> parse(String name) async {
        final parser = FlaxCodegenBindingParser(repoRoot);
        addTearDown(parser.dispose);
        final dependencyName = name == 'NominalBound' ? 'Base' : 'Wrapper';
        final dependency = await parser.proposeSelection(
          await load('generic_cases.dart', dependencyName),
          library: target,
        );
        expect(dependency.selection, isNotNull, reason: dependencyName);
        final proposed = await parser.proposeSelection(
          await load('generic_cases.dart', name),
          library: target,
        );
        expect(proposed.selection, isNotNull, reason: name);
        expect(proposed.selection!.constructors, isEmpty, reason: name);
        expect(
          proposed.skips.map((skip) => skip.code),
          contains('constructor_specialization_missing_use_site'),
          reason: name,
        );
        return parser.parse(
          FlaxCodegenBindingConfig(
            target.name,
            target.library,
            target.jsPackage,
            target.dartOutput,
            target.tsOutput,
            {dependencyName: dependency.selection!, name: proposed.selection!},
          ),
        );
      }

      final nominal = await parse('NominalBound');
      expect(
        nominal.classes
            .singleWhere((type) => type.name == 'NominalBound')
            .typeArguments,
        ['Base'],
      );
      expect(nominal.typeLibraries['Base'], target.library);

      final closed = await parse('ClosedBound');
      expect(
        closed.classes
            .singleWhere((type) => type.name == 'ClosedBound')
            .typeArguments,
        ['Wrapper<dynamic>'],
      );
      expect(closed.typeLibraries['Wrapper'], target.library);
      final closedDart = FlaxCodegenBindingEmitter([closed]).dart(closed);
      expect(closedDart, contains('api.ClosedBound<api.Wrapper<dynamic>>'));

      final nullable = await parse('NullableClosedBound');
      expect(
        nullable.classes
            .singleWhere((type) => type.name == 'NullableClosedBound')
            .typeArguments,
        ['Wrapper<dynamic>?'],
      );
    },
  );

  test(
    'skips dependent and recursive generic bounds instead of inventing them',
    () async {
      final parser = FlaxCodegenBindingParser(repoRoot);
      addTearDown(parser.dispose);
      final library = config('generic_cases.dart');
      final dependent = await parser.proposeSelection(
        await load('generic_cases.dart', 'DependentBox'),
        library: library,
      );
      expect(dependent.bindable, isFalse);
      expect(
        dependent.skips.map((skip) => skip.code),
        contains('complex_generic_bound'),
      );

      final recursive = await parser.proposeSelection(
        await load('generic_cases.dart', 'RecursiveBox'),
        library: library,
      );
      expect(recursive.bindable, isFalse);
      expect(
        recursive.skips.map((skip) => skip.code),
        contains('complex_generic_bound'),
      );
    },
  );

  test('does not auto-instantiate generic methods', () async {
    final parser = FlaxCodegenBindingParser(repoRoot);
    addTearDown(parser.dispose);
    final proposed = await parser.proposeSelection(
      await load('generic_cases.dart', 'GenericMethods'),
      library: config('generic_cases.dart'),
    );
    expect(proposed.selection, isNotNull);
    expect(
      proposed.selection!.instanceMethods.containsKey('identity'),
      isFalse,
    );
    expect(proposed.selection!.methods.containsKey('staticIdentity'), isFalse);
    expect(
      proposed.skips.map((skip) => skip.reason).join(' '),
      contains('Explicit runtime type arguments required'),
    );
  });

  test(
    'caps omitWhenAbsent parameters at 6 and keeps smaller ctors intact',
    () async {
      final parser = FlaxCodegenBindingParser(repoRoot);
      addTearDown(parser.dispose);
      final library = config('default_cases.dart');
      Future<FlaxCodegenProposedBinding> propose(String name) async =>
          parser.proposeSelection(
            await load('default_cases.dart', name),
            library: library,
          );

      final three = await propose('Default3');
      expect(three.selection!.constructors[''], ['p1', 'p2', 'p3']);
      expect(
        three.skips.any((skip) => skip.reason.contains('omitWhenAbsent cap')),
        isFalse,
      );
      await parser.parse(
        FlaxCodegenBindingConfig(
          library.name,
          library.library,
          library.jsPackage,
          library.dartOutput,
          library.tsOutput,
          {'Default3': three.selection!},
        ),
      );

      final six = await propose('Default6');
      expect(six.selection!.constructors[''], hasLength(6));

      final eight = await propose('Default8');
      expect(eight.selection!.constructors[''], hasLength(6));
      expect(
        eight.skips.any((skip) => skip.reason.contains('omitWhenAbsent cap')),
        isTrue,
      );

      final ten = await propose('Default10');
      expect(ten.selection!.constructors[''], hasLength(6));
      expect(
        ten.skips.where((skip) => skip.reason.contains('omitWhenAbsent cap')),
        hasLength(4),
      );
    },
  );

  test(
    'parses dependent and recursive bounds when YAML supplies types',
    () async {
      final library = config('generic_cases.dart');
      final results = await runExplicitGenericExperiments(
        workspaceRoot: repoRoot,
        library: library,
      );
      Map<String, Object?> named(String title) =>
          results.singleWhere((result) => result['title'] == title);

      expect(named('DependentBox explicit num,int')['ok'], isTrue);
      expect(
        named('DependentBox illegal String,int')['error'],
        contains('does not satisfy'),
      );
      expect(
        named('RecursiveBox without adapted argument type')['error'],
        contains('Unbound runtime type argument'),
      );
      expect(
        named('RecursiveBox with adapted ComparableLeaf')['ok'],
        isTrue,
        reason: '${named('RecursiveBox with adapted ComparableLeaf')}',
      );
      expect(
        named('GenericMethods identity instantiated as int')['ok'],
        isTrue,
      );
      expect(
        named('GenericMethods identity illegal String')['error'],
        contains('does not satisfy'),
      );
    },
  );

  test(
    'legal dependent bounds compile and execute a concrete specialization',
    () async {
      final parser = FlaxCodegenBindingParser(repoRoot);
      addTearDown(parser.dispose);
      final target = config('generic_cases.dart');
      final module = await parser.parse(
        FlaxCodegenBindingConfig(
          target.name,
          target.library,
          target.jsPackage,
          target.dartOutput,
          target.tsOutput,
          const {
            'DependentBox': FlaxCodegenClassSelection(
              {
                '': ['first', 'second'],
              },
              kind: 'object',
              typeArguments: ['num', 'int'],
              getters: ['first', 'second'],
              instanceMethods: {
                'choose': ['ignored', 'value'],
              },
            ),
          },
        ),
      );
      await compileFixture(
        repoRoot,
        FlaxCodegenBindingEmitter([module]),
        module,
        consumerSource: '''
import {DependentBox} from './plugin.js';
const box: DependentBox<number> = DependentBox<number, number>(1.5, 2);
const result: number = box.choose(3.5, box.second);
// @ts-expect-error Explicit specialization keeps the dependent numeric input.
DependentBox<number, number>(1.5, 'wrong');
// @ts-expect-error The second argument still obeys its declared bound.
type InvalidBound = DependentBox<number, string>;
''',
        dartTestSource: '''
void main() {
  test('generated constructor keeps the legal Dart specialization', () {
    final box = _createDependentBox('', {'first': 1.5, 'second': 2})
        as api.DependentBox<num, int>;
    expect(box.first, 1.5);
    expect(box.second, 2);
    expect(box.choose(3.5, 9), 9);
  });
}
''',
      );
    },
  );

  test(
    'six nullable defaults execute all omission and explicit-null combinations',
    () async {
      final parser = FlaxCodegenBindingParser(repoRoot);
      addTearDown(parser.dispose);
      final target = config('default_cases.dart');
      final module = await parser.parse(
        FlaxCodegenBindingConfig(
          target.name,
          target.library,
          target.jsPackage,
          target.dartOutput,
          target.tsOutput,
          const {
            'NullableDefault6': FlaxCodegenClassSelection({
              '': ['p1', 'p2', 'p3', 'p4', 'p5', 'p6'],
            }, kind: 'object'),
          },
        ),
      );
      expect(
        module.classes.single.constructors.single.parameters.every(
          (parameter) => parameter.omitWhenAbsent,
        ),
        isTrue,
      );
      final emitter = FlaxCodegenBindingEmitter([module]);
      expect(
        RegExp(r'return api\.NullableDefault6\(')
            .allMatches(emitter.dart(module))
            .length,
        64,
      );
      await compileFixture(
        repoRoot,
        emitter,
        module,
        consumerSource: '''
import {NullableDefault6} from './plugin.js';
NullableDefault6();
NullableDefault6({p1: null, p2: undefined, p6: null});
''',
        dartTestSource: r'''
void main() {
  const defaults = api.NullableDefault6();
  final expected = [defaults.p1, defaults.p2, defaults.p3,
    defaults.p4, defaults.p5, defaults.p6];
  for (var mask = 0; mask < 64; mask++) {
    test('omission versus explicit null mask $mask', () {
      final values = <String, Object?>{
        for (var index = 0; index < 6; index++)
          if (mask & (1 << index) != 0) 'p${index + 1}': null,
      };
      final result = _createNullableDefault6('', values) as api.NullableDefault6;
      final actual = [result.p1, result.p2, result.p3,
        result.p4, result.p5, result.p6];
      for (var index = 0; index < 6; index++) {
        expect(actual[index], same(mask & (1 << index) != 0
            ? null : expected[index]));
      }
    });
  }
}
''',
      );
    },
  );

  test(
    'omitWhenAbsent emission grows as 2^N and Default10 is estimated',
    () async {
      final library = config('default_cases.dart');
      final parser = FlaxCodegenBindingParser(repoRoot);
      addTearDown(parser.dispose);
      final three = await measureOmitEmission(
        parser: parser,
        library: library,
        name: 'Default3',
        parameters: const ['p1', 'p2', 'p3'],
      );
      expect(three['ok'], isTrue);
      expect(three['dartBranches'], 8);
      expect(three['expectedBranches'], 8);

      final sixParser = FlaxCodegenBindingParser(repoRoot);
      addTearDown(sixParser.dispose);
      final six = await measureOmitEmission(
        parser: sixParser,
        library: library,
        name: 'Default6',
        parameters: const ['p1', 'p2', 'p3', 'p4', 'p5', 'p6'],
      );
      expect(six['ok'], isTrue);
      expect(six['dartBranches'], 64);
      expect(six['dartBytes'] as int, greaterThan(three['dartBytes'] as int));

      final estimatedEight = estimateOmitEmission(
        name: 'Default8',
        requested: 8,
        baseline: six,
      );
      expect(estimatedEight['estimated'], isTrue);
      expect(estimatedEight['dartBranches'], 256);
      final estimatedTen = estimateOmitEmission(
        name: 'Default10',
        requested: 10,
        baseline: six,
      );
      expect(estimatedTen['dartBranches'], 1024);
      expect(
        estimatedTen['dartBytes'] as int,
        greaterThan(six['dartBytes'] as int),
      );
    },
  );
}

String _repoRoot() {
  var directory = Directory.current;
  for (var i = 0; i < 6; i++) {
    final candidate = directory.path;
    if (File(p.join(candidate, 'pubspec.yaml')).existsSync() &&
        File(p.join(candidate, 'packages/flax_codegen/pubspec.yaml'))
            .existsSync()) {
      return candidate;
    }
    directory = directory.parent;
  }
  throw StateError(
    'Cannot locate the Flax repository from ${Directory.current.path}',
  );
}
