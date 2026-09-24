import 'dart:convert';
import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:flax_codegen/src/identity.dart';
import 'package:flax_codegen/src/manifest_codec.dart';
import 'package:flax_codegen/src/manifest_projection.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

void main() {
  final root = _repoRoot();
  String fixture(String name) => Uri.file(
    p.join(root, 'packages/flax_codegen/test/fixtures/capability', name),
  ).toString();

  FlaxCodegenBindingConfig config(
    List<String> aliases, {
    String filename = 'typedefs.dart',
    List<String> additionalLibraries = const [],
    Map<String, FlaxCodegenClassSelection> classes = const {},
  }) => FlaxCodegenBindingConfig(
    'aliases',
    fixture(filename),
    '@example/aliases',
    'unused.dart',
    'unused.ts',
    classes,
    typedefs: aliases,
    additionalLibraries: additionalLibraries,
  );

  Future<FlaxCodegenModuleModel> parse(FlaxCodegenBindingConfig input) async {
    final parser = FlaxCodegenBindingParser(root);
    try {
      return await parser.parse(input);
    } finally {
      parser.dispose();
    }
  }

  const yaml = '''
format: 2
name: aliases
library: package:example/aliases.dart
jsPackage: '@example/aliases'
dartOutput: lib/aliases.g.dart
tsOutput: js/aliases.ts
classes: {}
''';

  test('format 2 supports optional strict typedef selection', () {
    expect(FlaxCodegenBindingConfig.parseStrict(yaml).typedefs, isEmpty);
    expect(
      FlaxCodegenBindingConfig.parseStrict(
        '${yaml}typedefs: [Names, OnChanged]\n',
      ).typedefs,
      ['Names', 'OnChanged'],
    );
    for (final invalid in ['typedefs: 42', 'typedefs: [42]', 'tyepdefs: []']) {
      expect(
        () => FlaxCodegenBindingConfig.parseStrict('$yaml$invalid\n'),
        throwsA(isA<FlaxCodegenException>()),
      );
    }
    final map = <String, dynamic>{
      'name': 'aliases',
      'library': 'dart:core',
      'jsPackage': '@example/aliases',
      'dartOutput': 'out.dart',
      'tsOutput': 'out.ts',
      'types': ['Duration'],
      'typedefs': ['Names'],
    };
    final mapped = FlaxCodegenBindingConfig.fromMap(map);
    expect(mapped.types, ['Duration']);
    expect(mapped.typedefs, ['Names']);
  });

  test(
    'basic aliases retain provenance and compile directional TS imports',
    () async {
      final module = await parse(
        config(
          [
            'Count',
            'Label',
            'OnChanged',
            'Names',
            'NameChain',
            'Attributes',
            'Transform',
          ],
          classes: const {
            'AliasConsumer': FlaxCodegenClassSelection(
              {
                '': ['onChanged', 'names', 'attributes'],
              },
              kind: 'object',
              getters: ['names', 'attributes'],
              instanceMethods: {
                'notify': ['value'],
                'transform': ['callback'],
              },
            ),
          },
        ),
      );
      expect(module.typedefs, hasLength(7));
      expect(module.typedefs.map((alias) => alias.target.kind), [
        'int',
        'String',
        'callback',
        'list',
        'list',
        'map',
        'callback',
      ]);
      expect(
        module.typedefs.every(
          (alias) =>
              alias.originatingUri == fixture('typedefs.dart') &&
              alias.originatingName == alias.name,
        ),
        isTrue,
      );
      final emitter = FlaxCodegenBindingEmitter([module]);
      final ts = emitter.typescript(module);
      expect(ts, contains('export type Names = DartList<string>;'));
      expect(
        ts,
        contains('export type NamesInput = DartListInput<string, string>;'),
      );
      expect(ts, isNot(contains('export type Names = any')));
      await compileFixture(
        root,
        emitter,
        module,
        consumerSource: '''
import { AliasConsumer } from './plugin.js';
import type { Count, Label, OnChangedInput, Names, NamesInput,
  NameChain, AttributesInput, Transform, TransformInput } from './plugin.js';
const count: Count = 3;
const label: Label = null;
const names: NamesInput = ['one'];
const attributes: AttributesInput = {key: 'value'};
const onChanged: OnChangedInput = value => { const checked: number = value; };
const consumer = AliasConsumer(onChanged, names, attributes);
const received: Names = consumer.names;
const chained: NameChain = received;
const input: TransformInput = values => { const checked: Names = values; return ['two']; };
const result: Names = consumer.transform(input);
declare const output: Transform;
const transformed: Names = output(['three']);
// @ts-expect-error numeric lists must not silently widen to any
const invalid: NamesInput = [1];
// @ts-expect-error callback argument must preserve its type
onChanged('wrong');
''',
      );
    },
  );

  test(
    'same-source public reexports deduplicate and keep original origin',
    () async {
      final module = await parse(
        config(
          ['Names', 'Names'],
          filename: 'typedefs_export.dart',
          additionalLibraries: [fixture('typedefs.dart')],
        ),
      );
      expect(module.typedefs, hasLength(1));
      expect(module.typedefs.single.originatingUri, fixture('typedefs.dart'));
    },
  );

  test('different declarations with the same public alias fail', () async {
    await expectLater(
      parse(
        config(
          ['Names'],
          additionalLibraries: [fixture('typedefs_conflict.dart')],
        ),
      ),
      throwsA(isA<StateError>()),
    );
  });

  test('generated Input names cannot collide with another alias', () async {
    await expectLater(
      parse(config(['Names', 'NamesInput'])),
      throwsA(
        isA<StateError>().having(
          (error) => error.message,
          'message',
          contains('Conflicting typedef export: NamesInput'),
        ),
      ),
    );
  });

  test('aliases cannot shadow generated helpers or TypeScript types', () async {
    for (final name in ['DartList', 'number', 'NonNullable']) {
      await expectLater(
        parse(config([name])),
        throwsA(
          isA<StateError>().having(
            (error) => error.message,
            'message',
            contains('Conflicting typedef export: $name'),
          ),
        ),
      );
    }
  });

  test(
    'generic aliases reuse callback scopes and compile explicit TS uses',
    () async {
      final module = await parse(
        config([
          'Generic',
          'HigherRank',
          'Mapper',
          'MapperChain',
          'Converter',
          'AsyncMapper',
          'AsyncGenericMapper',
          'NullableItems',
          'Dependent',
          'InnerShadow',
        ]),
      );
      expect(module.typedefs.first.typeParameters.single.name, 'T');
      expect(module.typedefs[1].typeParameters, isEmpty);
      expect(module.typedefs[1].target.typeParameters.single.name, 'T');
      final emitter = FlaxCodegenBindingEmitter([module]);
      await compileFixture(
        root,
        emitter,
        module,
        consumerSource: '''
import type { GenericInput, HigherRankInput, MapperInput, MapperChainInput,
  ConverterInput, AsyncMapperInput, AsyncGenericMapperInput, NullableItemsInput,
  DependentInput, InnerShadowInput } from './plugin.js';
const items: GenericInput<number> = [1, 2];
const raw: GenericInput = ['value', 1];
const higher: HigherRankInput = <T>(value: T): T => value;
const numberResult: number = higher<number>(3);
const mapper: MapperInput<string> = value => value;
const chain: MapperChainInput<string> = mapper;
const converter: ConverterInput<number> = <U extends number>(value: U): number => value;
const converted: number = converter<1>(1);
const asyncMapper: AsyncMapperInput<number> = async value => value;
const asyncGeneric: AsyncGenericMapperInput = async <T>(value: T): Promise<T> => value;
const nullable: NullableItemsInput<number> = [null, 2];
const absent: NullableItemsInput<number> = null;
const dependent: DependentInput<number, 1> = new Map([[1, 1]]);
const defaultDependent: DependentInput<number> = new Map([[2, 2]]);
const shadow: InnerShadowInput<string> = (fn, value) => fn<string>(value);
// @ts-expect-error callback arguments remain typed
mapper(1);
// @ts-expect-error explicit generic result cannot widen to a string
const wrong: string = higher<number>(1);
// @ts-expect-error generic arguments respect the dependent bound
type WrongBound = DependentInput<number, string>;
// @ts-expect-error collection elements remain typed
const wrongItems: GenericInput<number> = ['wrong'];
''',
      );
    },
  );

  test(
    'nullable generic use sites and bounds survive runtime erasure',
    () async {
      final module = await parse(
        config(['NullableNumericMapper', 'NullableBound']),
      );
      final callback = module.typedefs.first.target;
      expect(callback.result!.kind, 'num');
      expect(callback.result!.nullable, isTrue);
      expect(callback.result!.declaration!.nullable, isTrue);
      expect(callback.parameters.single.type.nullable, isTrue);
      expect(callback.typeParameters.single.defaultType!.nullable, isFalse);
      final collection = module.typedefs.last.target;
      expect(collection.item!.kind, 'num');
      expect(collection.item!.nullable, isTrue);
      await compileFixture(
        root,
        FlaxCodegenBindingEmitter([module]),
        module,
        consumerSource: '''
import type { NullableNumericMapperInput, NullableBoundInput } from './plugin.js';
const mapper: NullableNumericMapperInput = <T extends number>(value: T | null): T | null => value;
const result: number | null = mapper<number>(null);
const values: NullableBoundInput<number | null> = [null, 1];
// @ts-expect-error numeric callback bounds remain checked
mapper<string>('wrong');
''',
      );
    },
  );

  test(
    'record aliases preserve structural fields and compile in TypeScript',
    () async {
      final module = await parse(config(['RecordAlias']));
      final alias = module.typedefs.single;
      expect(alias.target.kind, 'record');
      expect(
        alias.target.recordFields.map(
          (field) => (field.name, field.type.kind, field.positional),
        ),
        [('\$1', 'int', true), ('\$2', 'int', true)],
      );
      final emitter = FlaxCodegenBindingEmitter([module]);
      final ts = emitter.typescript(module);
      expect(
        ts,
        contains(
          'export type RecordAlias = { readonly \$1: number; readonly \$2: number };',
        ),
      );
      await compileFixture(
        root,
        emitter,
        module,
        consumerSource: '''
import type { RecordAlias, RecordAliasInput } from './plugin.js';
const output: RecordAlias = { \$1: 1, \$2: 2 };
const input: RecordAliasInput = { \$1: 3, \$2: 4 };
// @ts-expect-error record fields keep their declared type
const invalid: RecordAliasInput = { \$1: 'wrong', \$2: 4 };
''',
      );
    },
  );

  for (final name in ['RecursiveBound', 'DateAlias', 'Missing']) {
    test('unsupported or unresolved alias $name fails explicitly', () async {
      await expectLater(
        parse(config([name])),
        throwsA(
          isA<StateError>().having(
            (error) => error.message,
            'message',
            contains(name),
          ),
        ),
      );
    });
  }

  test('Manifest 12 preserves aliases in immutable dependency projections', () {
    final manifest = _manifest(const [
      FlaxCodegenTypeAliasModel(
        name: 'Names',
        originatingUri: 'package:alias_pkg/src/aliases.dart',
        originatingName: 'Names',
        target: FlaxCodegenTypeRef('list', item: FlaxCodegenTypeRef('String')),
      ),
    ]);
    final decoded = _decode(manifest.toJson());
    expect(decoded.encode(), manifest.encode());
    expect(decoded.modules.single.model.identities, isEmpty);
    final projection = FlaxCodegenManifestProjection(
      root: decoded,
      directDependencies: const {},
      source: 'manifest.json',
    );
    final module = projection.modulesByModuleId.values.single;
    expect(
      module.typedefs.single.originatingUri,
      'package:alias_pkg/src/aliases.dart',
    );
    module.typedefs.clear();
    expect(projection.modulesByModuleId.values.single.typedefs, hasLength(1));
    expect(
      FlaxCodegenBindingEmitter([projection.modulesByModuleId.values.single])
          .typescript(projection.modulesByModuleId.values.single),
      contains('export type Names = DartList<string>;'),
    );
  });

  test('current Manifest requires aliases and rejects unknown versions', () {
    final missing = _manifest(const []).toJson();
    _model(missing).remove('typedefs');
    _reject(missing, '/modules/0/model/typedefs');
    _reject(
      _manifest(const []).toJson()
        ..['formatVersion'] = FlaxCodegenManifest.formatVersion + 1,
      '/formatVersion',
    );
  });

  test(
    'Manifest 12 roundtrip preserves capture, shadowing and bound slots',
    () async {
      final module = await parse(
        config([
          'Generic',
          'Mapper',
          'HigherRank',
          'Converter',
          'Dependent',
          'InnerShadow',
          'AsyncMapper',
          'AsyncGenericMapper',
        ]),
      );
      final manifest = _manifest([
        for (final alias in module.typedefs)
          FlaxCodegenTypeAliasModel(
            name: alias.name,
            originatingUri: 'package:alias_pkg/aliases.dart',
            originatingName: alias.name,
            target: alias.target,
            typeParameters: alias.typeParameters,
          ),
      ]);
      final decoded = _decode(manifest.toJson());
      expect(decoded.encode(), manifest.encode());
      final restored = decoded.modules.single.model.module;
      expect(
        FlaxCodegenBindingEmitter([restored]).typescript(restored),
        FlaxCodegenBindingEmitter([module]).typescript(module),
      );
      final alias = restored.typedefs.first;
      expect(
        identical(
          alias.typeParameters.single.genericIdentity,
          alias.target.item!.declaration!.genericIdentity,
        ),
        isTrue,
      );
      final converter = restored.typedefs[3];
      expect(
        identical(
          converter.typeParameters.single.genericIdentity,
          converter.target.typeParameters.single.bound.genericIdentity,
        ),
        isTrue,
      );
      final malformed = manifest.toJson();
      (_model(malformed)['typedefs']! as List)
              .first['typeParameters'][0]['slot'] =
          'g1';
      _reject(malformed, '/modules/0/model/typedefs/0/typeParameters/0/slot');
      final missing = manifest.toJson();
      (_model(missing)['typedefs']! as List).first.remove('typeParameters');
      _reject(missing, '/modules/0/model/typedefs/0/typeParameters');
      final capture = manifest.toJson();
      (_model(capture)['typedefs']! as List)
              .first['target']['item']['declaration']['slot'] =
          'g9';
      _reject(
        capture,
        '/modules/0/model/typedefs/0/target/item/declaration/slot',
      );
    },
  );

  test('alias metadata is closed and origins must be canonical', () {
    final manifest = _manifest(const [
      FlaxCodegenTypeAliasModel(
        name: 'Count',
        originatingUri: 'package:alias_pkg/src/aliases.dart',
        originatingName: 'Count',
        target: FlaxCodegenTypeRef('int'),
      ),
    ]);
    final extra = manifest.toJson();
    (_model(extra)['typedefs']! as List).single['extra'] = true;
    _reject(extra, '/modules/0/model/typedefs/0/extra');
    final invalid = manifest.toJson();
    (_model(invalid)['typedefs']! as List).single['originatingUri'] =
        'file:///private/aliases.dart';
    _reject(invalid, '/modules/0/model/typedefs/0/originatingUri');
  });

  test('alias targets require existing nominal identity coverage', () {
    final manifest = _manifest(const [
      FlaxCodegenTypeAliasModel(
        name: 'DateAlias',
        originatingUri: 'package:alias_pkg/aliases.dart',
        originatingName: 'DateAlias',
        target: FlaxCodegenTypeRef(
          'object',
          id: 'flax.core/flutter#type:DateTime',
          name: 'DateTime',
        ),
      ),
    ]);
    _reject(manifest.toJson(), '/modules/0/model/typedefs/0/target/id');
  });

  for (final field in ['bound', 'defaultType']) {
    test('alias $field-only references require nominal ownership', () {
      const nominal = FlaxCodegenTypeRef(
        'object',
        id: 'flax.core/flutter#type:DateTime',
        name: 'DateTime',
      );
      const broad = FlaxCodegenTypeRef('any', nullable: true);
      final manifest = _manifest([
        FlaxCodegenTypeAliasModel(
          name: 'Marker',
          originatingUri: 'package:alias_pkg/aliases.dart',
          originatingName: 'Marker',
          target: const FlaxCodegenTypeRef('int'),
          typeParameters: [
            FlaxCodegenGenericParameter(
              'T',
              field == 'bound' ? nominal : broad,
              defaultType: field == 'defaultType' ? nominal : broad,
              genericIdentity: Object(),
            ),
          ],
        ),
      ]);
      _reject(
        manifest.toJson(),
        '/modules/0/model/typedefs/0/typeParameters/0/$field/id',
      );
    });
  }
}

FlaxCodegenManifest _manifest(List<FlaxCodegenTypeAliasModel> aliases) =>
    FlaxCodegenManifest(
      package: 'alias_pkg',
      bindingNamespace: FlaxCodegenBindingNamespace.parse('example.alias'),
      imports: const [],
      modules: [
        FlaxCodegenManifestModule(
          name: 'aliases',
          moduleId: FlaxCodegenModuleId.parse('example.alias/aliases'),
          uiProtocol: 21,
          requiredCapabilities: const [],
          model: FlaxCodegenManifestModel(
            identities: const [],
            module: FlaxCodegenModuleModel(
              name: 'aliases',
              library: 'package:alias_pkg/aliases.dart',
              jsPackage: '@example/aliases',
              dartOutput: '',
              tsOutput: '',
              classes: const [],
              types: const [],
              typedefs: aliases,
            ),
          ),
        ),
      ],
    );

Map<String, Object?> _model(Map<String, Object?> json) =>
    ((json['modules']! as List).single as Map<String, Object?>)['model']!
        as Map<String, Object?>;

FlaxCodegenManifest _decode(Map<String, Object?> json) {
  final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
  final result = FlaxCodegenManifest.parse(jsonEncode(json), diagnostics);
  diagnostics.throwIfAny();
  return result!;
}

void _reject(Map<String, Object?> json, String pointer) {
  final diagnostics = FlaxCodegenManifestDiagnostics('manifest.json');
  expect(FlaxCodegenManifest.parse(jsonEncode(json), diagnostics), isNull);
  expect(diagnostics.items.map((item) => item.pointer), contains(pointer));
}

String _repoRoot() {
  var directory = Directory.current.absolute;
  while (!File(p.join(directory.path, 'packages/flax_codegen/pubspec.yaml'))
      .existsSync()) {
    final parent = directory.parent;
    if (parent.path == directory.path) {
      throw StateError('Cannot find repository root');
    }
    directory = parent;
  }
  return directory.path;
}
