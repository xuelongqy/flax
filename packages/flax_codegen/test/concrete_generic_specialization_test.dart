import 'dart:io';

import 'package:analyzer/dart/analysis/analysis_context_collection.dart';
import 'package:analyzer/dart/analysis/results.dart';
import 'package:analyzer/dart/element/element.dart';
import 'package:analyzer/dart/element/nullability_suffix.dart';
import 'package:analyzer/dart/element/type.dart';
import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

void main() {
  final repoRoot = p.normalize(p.join(Directory.current.path, '../..'));
  final root = p.join(repoRoot, 'packages/flax_codegen');
  final path = '$root/test/fixtures/capability/generic_cases.dart';
  late LibraryElement library;
  late FlaxCodegenBindingParser parser;

  FlaxCodegenBindingConfig config({
    Map<String, FlaxCodegenClassSelection> classes = const {},
  }) => FlaxCodegenBindingConfig(
    'generic_cases',
    Uri.file(path).toString(),
    'generic_cases',
    'generic_cases.dart',
    'generic_cases.ts',
    classes,
  );

  InterfaceType useOf(String holderName, String fieldName) {
    final holder = library.getClass(holderName)!;
    return holder.fields.singleWhere((field) => field.name == fieldName).type
        as InterfaceType;
  }

  setUpAll(() async {
    final collection = AnalysisContextCollection(includedPaths: [path]);
    final session = collection.contextFor(path).currentSession;
    final result = await session.getResolvedLibrary(path);
    expect(result, isA<ResolvedLibraryResult>());
    library = (result as ResolvedLibraryResult).element;
  });

  setUp(() {
    parser = FlaxCodegenBindingParser(root);
  });

  test(
    'infers one concrete class specialization from a real use site',
    () async {
      final box = library.getClass('GenericBox')!;
      final proposed = await parser.proposeSelection(
        box,
        library: config(),
        concreteUses: [useOf('StringBoxPage', 'title')],
      );

      expect(proposed.selection?.typeArguments, ['String']);
      await parser.parse(config(classes: {'GenericBox': proposed.selection!}));
    },
  );

  test('merges repeated identical concrete uses', () async {
    final box = library.getClass('GenericBox')!;
    final stringUse = useOf('StringBoxPage', 'title');
    final proposed = await parser.proposeSelection(
      box,
      library: config(),
      concreteUses: [stringUse, stringUse],
    );

    expect(proposed.selection?.typeArguments, ['String']);
  });

  test('rejects conflicting concrete uses instead of defaulting', () async {
    final proposed = await parser.proposeSelection(
      library.getClass('GenericBox')!,
      library: config(),
      concreteUses: [
        useOf('StringBoxPage', 'title'),
        useOf('IntBoxPage', 'count'),
      ],
    );

    expect(proposed.selection, isNull);
    expect(
      proposed.skips.map((skip) => skip.reason),
      contains('Explicit runtime type arguments required: GenericBox'),
    );
  });

  test('rejects unresolved type parameter concrete uses', () async {
    final proposed = await parser.proposeSelection(
      library.getClass('GenericBox')!,
      library: config(),
      concreteUses: [useOf('GenericBoxPage', 'value')],
    );

    expect(proposed.selection, isNull);
    expect(
      proposed.skips.map((skip) => skip.reason),
      contains('Explicit runtime type arguments required: GenericBox'),
    );
  });

  test('rejects nested generic runtime arguments', () async {
    final proposed = await parser.proposeSelection(
      library.getClass('GenericBox')!,
      library: config(),
      concreteUses: [useOf('NestedBoxPage', 'values')],
    );

    expect(proposed.selection, isNull);
    expect(
      proposed.skips.map((skip) => skip.reason),
      contains('Explicit runtime type arguments required: GenericBox'),
    );
  });

  test('explicit type arguments take precedence over concrete uses', () async {
    final proposed = await parser.proposeSelection(
      library.getClass('GenericBox')!,
      library: config(),
      base: const FlaxCodegenClassSelection({}, typeArguments: ['int']),
      concreteUses: [useOf('StringBoxPage', 'title')],
    );

    expect(proposed.selection?.typeArguments, ['int']);
  });

  test('preserves a concrete bound error for inferred arguments', () async {
    final numericBox = library.getClass('NumericBox')!;
    final invalidUse = numericBox.instantiate(
      typeArguments: <DartType>[library.typeProvider.stringType],
      nullabilitySuffix: NullabilitySuffix.none,
    );
    final proposed = await parser.proposeSelection(
      numericBox,
      library: config(),
      concreteUses: [invalidUse],
    );

    expect(proposed.selection, isNull);
    expect(
      proposed.skips.map((skip) => skip.reason).join('\n'),
      contains('does not satisfy'),
    );
  });
}
