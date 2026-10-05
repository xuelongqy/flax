import 'dart:io';

import 'package:analyzer/dart/analysis/analysis_context_collection.dart';
import 'package:analyzer/dart/analysis/results.dart';
import 'package:analyzer/dart/element/element.dart';
import 'package:flax_codegen/src/manifest_codec.dart';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;
import '../tool/src/capability/assess.dart';
import '../tool/src/capability/inventory.dart';

void main() {
  var root = Directory.current;
  while (!Directory(p.join(root.path, 'packages/flax_codegen')).existsSync()) {
    root = root.parent;
  }
  final uri = Uri.file(
    p.join(root.path, 'packages/flax/test/fixtures/proxy_operators.dart'),
  ).toString();
  Future<FlaxCodegenModuleModel> parse(String selection) async {
    final parser = FlaxCodegenBindingParser(root.path);
    try {
      return await parser.parse(
        FlaxCodegenBindingConfig.parseStrict('''
format: 2
name: operators
library: '$uri'
jsPackage: '@example/operators'
dartOutput: unused.dart
tsOutput: unused.ts
classes:
$selection
'''),
      );
    } finally {
      await parser.dispose();
    }
  }

  test('operator data parameters and results reach proxy callbacks', () async {
    final module = await parse("""  DataOperator:
    kind: object
    proxy: extends
    constructors: {'': []}
    operators: {'+': [other]}
    data:
      methods: {'+': [other]}
      results: ['+']
""");
    final type = module.classes.single;
    expect(type.methods.single.parameters.single.type.kind, 'data');
    expect(type.methods.single.result.kind, 'data');
    expect(type.proxy!.methods.single.parameters.single.type.kind, 'data');
    expect(type.proxy!.methods.single.result.kind, 'data');
    await compileFixture(
      root.path,
      FlaxCodegenBindingEmitter([module]),
      module,
    );
  });

  test('operator typed callbacks survive proxy generation', () async {
    final module = await parse("""  CallbackOperator:
    kind: object
    proxy: extends
    constructors: {'': []}
    operators: {'+': [callback]}
""");
    final type = module.classes.single;
    expect(type.proxy!.methods.single.parameters.single.type.kind, 'callback');
    await compileFixture(
      root.path,
      FlaxCodegenBindingEmitter([module]),
      module,
    );
  });

  test('operator lookup uses the effective mixin override', () async {
    final module = await parse("""  MixedOperator:
    kind: object
    proxy: extends
    constructors: {'': []}
    operators: {'+': [other]}
""");
    final type = module.classes.single;
    expect(type.methods.single.result.kind, 'double');
    expect(type.proxy!.methods.single.result.kind, 'double');
    await compileFixture(
      root.path,
      FlaxCodegenBindingEmitter([module]),
      module,
    );
  });

  test(
    'excluded operator types cannot return through dependency closure',
    () async {
      final parser = FlaxCodegenBindingParser(root.path);
      addTearDown(parser.dispose);
      final proposal = await parser.proposeLibrary(
        FlaxCodegenBindingConfig(
          'operators',
          uri,
          '@example/operators',
          'unused.dart',
          'unused.ts',
          const {},
        ),
        overrides: const FlaxCodegenAutoOverrides(exclude: ['ExcludedOperand']),
      );
      expect(
        proposal.config.classes,
        isNot(contains('ExcludedOperatorConsumer')),
      );
      expect(
        proposal.config.classes,
        isNot(contains('ExcludedInheritedConsumer')),
      );
      expect(proposal.config.types, isNot(contains('ExcludedOperand')));
      expect(
        proposal.skips
            .where((s) => s.target == 'ExcludedOperatorConsumer')
            .map((s) => s.code),
        contains('signature_depends_on_skipped'),
      );
    },
  );

  test(
    'all operator signatures compile and preserve typed super dispatch',
    () async {
      final operators = <String, List<String>>{
        for (final name in [
          '+',
          '-',
          '*',
          '/',
          '~/',
          '%',
          '<',
          '>',
          '<=',
          '>=',
          '&',
          '|',
          '^',
          '<<',
          '>>',
          '>>>',
        ])
          name: ['other'],
        'unary-': [],
        '~': [],
        '[]': ['index'],
        '[]=': ['index', 'input'],
        '==': ['other'],
      };
      final selection = StringBuffer('''  NumberBox:
    kind: object
    proxy: extends
    constructors: {'': [value]}
    getters: [hashCode]
    instanceMethods: {toString: []}
    operators:
''');
      for (final entry in operators.entries) {
        selection.writeln("      '${entry.key}': [${entry.value.join(', ')}]");
      }
      final module = await parse(selection.toString());
      final emitter = FlaxCodegenBindingEmitter([module]);
      expect(
        module.classes.single.methods.where((m) => m.operatorName != null),
        hasLength(21),
      );
      final ts = emitter.typescript(module);
      expect(ts, contains('extends _FlaxProxyBase'));
      expect(ts, contains('_flaxDefineProxyBase(NumberBox.prototype'));
      expect(ts, isNot(contains('const _flaxResult = invokeProxySuper')));
      await compileFixture(
        root.path,
        emitter,
        module,
        consumerSource: '''
import { NumberBox } from './plugin.js';
class Custom extends NumberBox {
  override operatorAdd(other: number): number { return super.operatorAdd(other) + 10; }
  override get hashCode(): number { return super.hashCode; }
}
const result: number = new Custom(2).operatorAdd(3);
// @ts-expect-error Explicit operator inputs are typed.
new Custom(2).operatorAdd('bad');
''',
      );
    },
  );
  test(
    'abstract operator implementations have required JS callbacks',
    () async {
      final module = await parse('''  AbstractAdder:
    kind: object
    proxy: implements
    operators: {'+': [other]}
''');
      final ts = FlaxCodegenBindingEmitter([module]).typescript(module);
      expect(ts, contains('operatorAdd:'));
      await compileFixture(
        root.path,
        FlaxCodegenBindingEmitter([module]),
        module,
      );
    },
  );
  test('operator aliases cannot replace ordinary methods', () async {
    await expectLater(
      parse('''  OperatorCollision:
    kind: object
    instanceMethods: {operatorAdd: [other]}
    operators: {'+': [other]}
'''),
      throwsStateError,
    );
  });
  test('equality proxy requires hashCode selection', () async {
    await expectLater(
      parse('''  NumberBox:
    kind: object
    proxy: extends
    constructors: {'': [value]}
    operators: {'==': [other]}
'''),
      throwsStateError,
    );
  });
  test(
    'operator metadata round-trips and rejects malformed signatures',
    () async {
      final module = await parse("""  NumberBox:
    kind: object
    constructors: {'': [value]}
    operators: {'+': [other]}
""");
      final method = module.classes.single.methods.single;
      final json = FlaxCodegenManifestCodec.encodeMethod(method);
      expect(json['operator'], '+');
      final diagnostics = FlaxCodegenManifestDiagnostics('operator');
      final decoded = FlaxCodegenManifestCodec.decodeMethod(
        json,
        diagnostics,
        '',
      )!;
      diagnostics.throwIfAny();
      expect(decoded.operatorName, '+');
      expect(decoded.name, 'operatorAdd');
      final invalid = FlaxCodegenMethodModel(
        'wrongAlias',
        method.parameters,
        method.result,
        instance: true,
        operatorName: '+',
      );
      final badModule = FlaxCodegenModuleModel(
        name: module.name,
        library: module.library,
        jsPackage: module.jsPackage,
        dartOutput: module.dartOutput,
        tsOutput: module.tsOutput,
        types: [],
        classes: [
          FlaxCodegenClassModel(
            name: 'NumberBox',
            id: module.classes.single.id,
            kind: 'object',
            constructors: [],
            supertypes: [],
            methods: [invalid],
          ),
        ],
      );
      expect(badModule.validate, throwsStateError);
    },
  );

  test(
    'auto operators require complete providers and keep equality opt-in',
    () async {
      final collection = AnalysisContextCollection(includedPaths: [root.path]);
      addTearDown(collection.dispose);
      final result =
          await collection.contexts.first.currentSession.getLibraryByUri(uri)
              as LibraryElementResult;
      final element =
          result.element.exportNamespace.get2('NumberBox') as InterfaceElement;
      final config = FlaxCodegenBindingConfig(
        'operators',
        uri,
        '@example/operators',
        'unused.dart',
        'unused.ts',
        const {},
      );
      final initial = FlaxCodegenBindingParser(root.path);
      addTearDown(initial.dispose);
      final proposal = await initial.proposeSelection(element, library: config);
      expect(proposal.selection!.operators.keys, hasLength(20));
      expect(proposal.selection!.operators, isNot(contains('==')));
      final inventory = await inventoryLibrary(
        collection: collection,
        uri: uri,
      );
      final assessment = await assessDeclaration(
        parser: initial,
        library: config,
        declaration: inventory.declarations.singleWhere(
          (d) => d.name == 'NumberBox',
        ),
        lookup: (_) async => element,
      );
      expect(
        inventory.declarations
            .singleWhere((d) => d.name == 'NumberBox')
            .declaredMembers
            .map((m) => m.name),
        containsAll(['<=', '>=', '[]=', '==']),
      );
      expect(assessment.surface['droppedMembers'], 1); // Equality is opt-in.
      expect(assessment.surface['droppedParameters'], 0);
      expect(assessment.surface['illegalJsNames'], 0);

      final complete = await initial.parse(
        FlaxCodegenBindingConfig(
          'provider',
          uri,
          '@example/provider',
          'unused.dart',
          'unused.ts',
          {'NumberBox': proposal.selection!},
        ),
      );
      final partial = await parse("""  NumberBox:
    kind: object
    constructors: {'': [value]}
    getters: [value]
""");
      for (final available in [partial, complete]) {
        final parser = FlaxCodegenBindingParser(root.path);
        addTearDown(parser.dispose);
        parser.prepareModules([
          FlaxCodegenModuleModel(
            name: available.name,
            library: available.library,
            jsPackage: available.jsPackage,
            dartOutput: available.dartOutput,
            tsOutput: available.tsOutput,
            classes: available.classes,
            types: available.types,
            moduleId: 'example.provider/operators',
          ),
        ]);
        final requested = await parser.proposeSelection(
          element,
          library: config,
        );
        expect(requested.reusesProvider, identical(available, complete));
        if (!requested.reusesProvider) {
          expect(requested.selection!.operators, contains('+'));
        }
      }
    },
  );
  test(
    'generic operator relationships compile without widening arguments',
    () async {
      final module = await parse("""  GenericAdder:
    kind: object
    proxy: extends
    constructors: {'': [value]}
    typeArguments: [int]
    operators: {'+': [other], 'unary-': []}
""");
      await compileFixture(
        root.path,
        FlaxCodegenBindingEmitter([module]),
        module,
        consumerSource: """
import { GenericAdder } from './plugin.js';
class Custom extends GenericAdder {
  override operatorAdd(other: number): number { return super.operatorAdd(other); }
}
const value: number = new Custom(2).operatorAdd(3);
// @ts-expect-error Operator arguments retain their type parameter.
new Custom(2).operatorAdd('bad');
""",
      );
    },
  );
}
