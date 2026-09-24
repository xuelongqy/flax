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
    'keeps a shared owner and selects its constructor from a concrete use site',
    () async {
      final box = library.getClass('GenericBox')!;
      final proposed = await parser.proposeSelection(
        box,
        library: config(),
        concreteUses: [useOf('StringBoxPage', 'title')],
      );

      expect(proposed.selection?.typeArguments, isEmpty);
      expect(proposed.selection?.constructors[''], ['value']);
      final module = await parser.parse(
        config(classes: {'GenericBox': proposed.selection!}),
      );
      final genericBox = module.classes.single;
      expect(genericBox.typeArguments, ['Object?']);
      expect(
        genericBox.constructors.single.parameters.single.type.kind,
        'scalar',
      );
      expect(
        genericBox.constructors.single.specializations.map(
          (specialization) => specialization.typeArguments,
        ),
        containsAll(<List<String>>[
          ['String'],
          ['int'],
        ]),
      );
    },
  );

  test(
    'uses the concrete int transport for one numeric specialization',
    () async {
      final numericBox = library.getClass('NumericBox')!;
      final proposed = await parser.proposeSelection(
        numericBox,
        library: config(),
        concreteUses: [useOf('IntNumericBoxPage', 'value')],
      );

      final module = await parser.parse(
        config(classes: {'NumericBox': proposed.selection!}),
      );
      final constructor = module.classes.single.constructors.single;
      expect(constructor.parameters.single.type.kind, 'int');
      expect(constructor.parameters.single.type.declaration?.kind, 'parameter');
      expect(constructor.specializations.single.typeArguments, ['int']);
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

    expect(proposed.selection?.typeArguments, isEmpty);
    expect(proposed.selection?.constructors[''], ['value']);
  });

  test('keeps disjoint String and int constructor specializations', () async {
    final proposed = await parser.proposeSelection(
      library.getClass('GenericBox')!,
      library: config(),
      concreteUses: [
        useOf('StringBoxPage', 'title'),
        useOf('IntBoxPage', 'count'),
      ],
    );

    expect(proposed.selection, isNotNull);
    expect(proposed.selection!.typeArguments, isEmpty);
    expect(proposed.selection!.constructors[''], ['value']);
  });

  test('keeps the shared owner but omits constructors for unresolved type parameters', () async {
    final proposed = await parser.proposeSelection(
      library.getClass('GenericBox')!,
      library: config(),
      concreteUses: [useOf('GenericBoxPage', 'value')],
    );

    expect(proposed.selection, isNotNull);
    expect(proposed.selection!.constructors, isEmpty);
    expect(
      proposed.skips.map((skip) => skip.code),
      contains('constructor_specialization_missing_use_site'),
    );
  });

  test('keeps the shared owner but omits constructors for nested generic arguments', () async {
    final proposed = await parser.proposeSelection(
      library.getClass('GenericBox')!,
      library: config(),
      concreteUses: [useOf('NestedBoxPage', 'values')],
    );

    expect(proposed.selection, isNotNull);
    expect(proposed.selection!.constructors, isEmpty);
    expect(
      proposed.skips.map((skip) => skip.code),
      contains('constructor_specialization_missing_use_site'),
    );
  });

  test('rejects overlapping num and int constructor domains', () async {
    final box = library.getClass('GenericBox')!;
    final proposed = await parser.proposeSelection(
      box,
      library: config(),
      concreteUses: [
        box.instantiate(
          typeArguments: [library.typeProvider.numType],
          nullabilitySuffix: NullabilitySuffix.none,
        ),
        useOf('IntBoxPage', 'count'),
      ],
    );

    expect(proposed.selection, isNotNull);
    expect(proposed.selection!.constructors, isEmpty);
    expect(
      proposed.skips.map((skip) => skip.code),
      contains('constructor_specialization_ambiguous'),
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

  test(
    'keeps the shared owner and skips an invalid constructor specialization',
    () async {
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

      expect(proposed.selection, isNotNull);
      expect(proposed.selection!.constructors, isEmpty);
      expect(
        proposed.skips.map((skip) => skip.reason).join('\n'),
        contains('does not satisfy'),
      );
    },
  );
}
