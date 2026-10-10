import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:flax_codegen/src/manifest_codec.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import '../../flax/test/fixtures/enums_selection.dart';
import 'generator_test.dart' show compileFixture;

void main() {
  final root = p.normalize(p.join(Directory.current.path, '../..'));
  FlaxCodegenBindingConfig config(
    Map<String, FlaxCodegenClassSelection> classes, {
    String name = 'plugin',
    String? library,
    List<String> types = const [],
    Map<String, FlaxCodegenFunctionSelection> functions = enumFunctions,
  }) => FlaxCodegenBindingConfig(
    name,
    library ??
        Uri.file(
          p.join(Directory.current.path, 'test/fixtures/plugin/enums.dart'),
        ).toString(),
    '@example/$name',
    'unused.dart',
    'unused.ts',
    classes,
    types: types,
    functions: functions,
  );

  test(
    'enhanced enums use typed shared members and closed generic constants',
    () async {
      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      final coreConfig = FlaxCodegenBindingConfig.read(
        p.join(root, 'packages/flax/bindings/config.yaml'),
      );
      final selection = config(enumSelection);
      await parser.prepare([selection, coreConfig]);
      final core = await parser.parse(coreConfig);
      final module = await parser.parse(selection);
      final emitter = FlaxCodegenBindingEmitter([module, core]);
      final status = module.classes.singleWhere(
        (type) => type.name == 'EnhancedStatus',
      );
      expect(status.kind, 'enum');
      expect(status.proxy, isNull);
      expect(
        status.getters
            .where((getter) => getter.cache)
            .map((getter) => getter.name),
        ['label', 'code'],
      );
      final ts = emitter.typescript(module);
      expect(ts, contains('defineEnum('));
      expect(ts, isNot(contains('class EnhancedStatus')));
      expect(ts, contains('GenericKind<number>'));
      expect(ts, contains('GenericKind<string>'));
      final diagnostics = FlaxCodegenManifestDiagnostics('enum-test');
      final encoded = FlaxCodegenManifestCodec.encodeModule(module);
      encoded['typeLibraries'] = {
        for (final name in module.typeLibraries.keys.toList()..sort())
          name: 'package:example/enums.dart',
      };
      final restored = FlaxCodegenManifestCodec.decodeModule(
        encoded,
        diagnostics,
        '',
        module.name,
      );
      diagnostics.throwIfAny();
      expect(
        FlaxCodegenBindingEmitter([restored!, core]).typescript(restored),
        ts,
      );
      expect(
        [
          for (final type in restored.classes)
            for (final function in restored.enumFunctions(type))
              FlaxCodegenManifestCodec.encodeFunction(function),
        ],
        [
          for (final type in module.classes)
            for (final function in module.enumFunctions(type))
              FlaxCodegenManifestCodec.encodeFunction(function),
        ],
      );
      await compileFixture(
        root,
        emitter,
        module,
        consumerSource: '''
import { EnhancedStatus, MetadataNames, GenericKind, enumNumber, enumReadable } from './plugin.js';
const ready: EnhancedStatus = EnhancedStatus.ready;
const label: string = ready.label;
ready.format('hello', {separator: undefined});
ready.recorded = label;
const recorded: string = ready.recorded;
ready.recorded = 8;
ready.operatorAdd(1);
EnhancedStatus.fromCode(200);
EnhancedStatus.setReads(0);
const lookup = EnhancedStatus.lookup;
lookup(200);
const fromCode = EnhancedStatus.fromCode;
fromCode(200);
enumReadable(ready).describe();
const kind: string = MetadataNames.value.kind;
const type: number = MetadataNames.value.type;
const name: string = MetadataNames.value.name;
const number: number = GenericKind.number.echo(4);
const text: string = GenericKind.text.echo('four');
GenericKind.numbers.echo([1, 2]).get(0);
GenericKind.number.repeat(3);
GenericKind.numbers.transform(value => [value.get(0)]);
GenericKind.numbers.group([1]);
GenericKind.maybe.echo(null);
enumNumber(GenericKind.number);
// @ts-expect-error Constants retain their closed generic arguments.
enumNumber(GenericKind.text);
// @ts-expect-error Methods retain the enum's generic argument.
GenericKind.number.echo('wrong');
// @ts-expect-error Enums cannot be constructed from JavaScript.
new EnhancedStatus();
// @ts-expect-error Final fields stay read-only.
ready.code = 500;
// @ts-expect-error Required parameters cannot be omitted.
ready.format();
''',
      );
    },
  );

  test(
    'enum factories preserve specialization and closed value types',
    () async {
      for (final arguments in <List<String>>[
        [],
        ['int'],
      ]) {
        final parser = FlaxCodegenBindingParser(root);
        addTearDown(parser.dispose);
        final module = await parser.parse(
          config({
            'EnumFactory': FlaxCodegenClassSelection(
              {
                'from': ['value'],
              },
              kind: 'enum',
              typeArguments: arguments,
              getters: ['sample'],
            ),
            'EnhancedStatus': const FlaxCodegenClassSelection(
              {},
              kind: 'enum',
              instanceMethods: {
                'preserveReceiverName': ['receiver'],
              },
            ),
          }, functions: {}),
        );
        final emitter = FlaxCodegenBindingEmitter([module]);
        await compileFixture(
          root,
          emitter,
          module,
          consumerSource:
              '''
import { EnumFactory, EnhancedStatus } from './plugin.js';
const number: number = EnumFactory.from(4).sample;
const from = EnumFactory.from;
const detached: number = from(4).sample;
const text: string = EnumFactory.text.sample;
const mixed: number | string = EnumFactory.values[1]!.sample;
EnhancedStatus.ready.preserveReceiverName(4);
${arguments.isEmpty ? "const inferred: string = EnumFactory.from('four').sample;" : "// @ts-expect-error Explicit int factory inputs remain int.\nEnumFactory.from('four');"}
// @ts-expect-error The enum factory has only String and safe-int targets.
EnumFactory.from(true);
''',
          dartTestSource:
              '''
void main() {
  test('enum factory invokes the selected Dart type', () {
    expect(_enum_EnumFactory_factory_from({'value': 4}), same(api.EnumFactory.number));
    ${arguments.isEmpty ? "expect(_enum_EnumFactory_factory_from({'value': 'four'}), same(api.EnumFactory.text));" : ''}
    expect(_enum_EnhancedStatus_call_preserveReceiverName({'_receiver': api.EnhancedStatus.ready, 'receiver': 4}), 4);
  });
}
''',
        );
      }
    },
  );

  test(
    'automatic selection includes enum members and preserves metadata names',
    () async {
      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      final proposal = await parser.proposeLibrary(config({}));
      expect(proposal.config.classes['EnhancedStatus']?.kind, 'enum');
      expect(
        proposal.config.classes['MetadataNames']?.getters,
        containsAll(['kind', 'type', 'name']),
      );
      expect(proposal.config.classes['EnhancedStatus']?.constructors.keys, [
        'fromCode',
      ]);
      expect(proposal.config.classes['EnumFactory']?.constructors.keys, [
        'from',
      ]);
    },
  );

  test(
    'enum providers are reused only when their selected surface is complete',
    () async {
      final ownerParser = FlaxCodegenBindingParser(root);
      addTearDown(ownerParser.dispose);
      final complete = await ownerParser.parse(
        config(enumSelection, name: 'complete'),
      );
      final constantsParser = FlaxCodegenBindingParser(root);
      addTearDown(constantsParser.dispose);
      final constants = await constantsParser.parse(
        config({}, name: 'constants', types: ['EnhancedStatus'], functions: {}),
      );
      for (final owner in [complete, constants]) {
        final parser = FlaxCodegenBindingParser(root);
        addTearDown(parser.dispose);
        parser.prepareModules([owner]);
        final proposal = await parser.proposeLibrary(
          config({}, name: 'consumer'),
        );
        expect(
          proposal.config.classes.containsKey('EnhancedStatus'),
          owner == constants,
        );
        if (owner == constants) {
          final module = await parser.parse(proposal.config);
          expect(
            module.classes
                .singleWhere((type) => type.name == 'EnhancedStatus')
                .getters,
            contains(
              predicate<FlaxCodegenGetterModel>(
                (getter) => getter.name == 'label',
              ),
            ),
          );
        }
      }
    },
  );

  test('manifest rejects invalid enum identities and field caching', () async {
    final parser = FlaxCodegenBindingParser(root);
    addTearDown(parser.dispose);
    final module = await parser.parse(
      config({'GenericKind': enumSelection['GenericKind']!}, functions: {}),
    );
    for (final corrupt in <void Function(Map<String, Object?>)>[
      (encoded) =>
          ((encoded['types'] as List).single as Map)['enumValueTypes'] =
              <String, Object?>{},
      (encoded) =>
          (((encoded['types'] as List).single as Map)['enumValueTypes']
                  as Map)['number']['id'] =
              'foreign',
      (encoded) =>
          ((encoded['classes'] as List).single as Map)['getters'][0]['cache'] =
              true,
      (encoded) =>
          (((encoded['types'] as List).single as Map)['enumValueTypes']
                  as Map)['number']['tsArguments'] =
              <Object?>[],
      (encoded) =>
          ((encoded['classes'] as List).single as Map)['constructors'] = [
            FlaxCodegenManifestCodec.encodeConstructor(
              FlaxCodegenConstructorModel('', []),
            ),
          ],
    ]) {
      final encoded = FlaxCodegenManifestCodec.encodeModule(module);
      corrupt(encoded);
      final diagnostics = FlaxCodegenManifestDiagnostics('invalid-enum.json');
      expect(
        FlaxCodegenManifestCodec.decodeModule(
          encoded,
          diagnostics,
          '',
          module.name,
        ),
        isNull,
      );
      expect(diagnostics.items, isNotEmpty);
    }
  });

  test('enum creation and proxies fail closed', () async {
    for (final selection in [
      const FlaxCodegenClassSelection({
        '': ['label', 'code'],
      }, kind: 'enum'),
      const FlaxCodegenClassSelection({}, kind: 'enum', proxy: 'implements'),
    ]) {
      final parser = FlaxCodegenBindingParser(root);
      try {
        await expectLater(
          parser.parse(config({'EnhancedStatus': selection})),
          throwsStateError,
        );
      } finally {
        await parser.dispose();
      }
    }
    final directory = Directory.systemTemp.createTempSync('flax-enum-factory-');
    addTearDown(() => directory.deleteSync(recursive: true));
    final library = File(p.join(directory.path, 'enums.dart'))
      ..writeAsStringSync('''
enum UnnamedFactory {
  value._();
  const UnnamedFactory._();
  factory UnnamedFactory() => value;
  factory UnnamedFactory.named() => value;
}
''');
    final parser = FlaxCodegenBindingParser(root);
    addTearDown(parser.dispose);
    await expectLater(
      parser.parse(
        config(
          {
            'UnnamedFactory': const FlaxCodegenClassSelection({
              '': [],
            }, kind: 'enum'),
          },
          library: library.uri.toString(),
          functions: {},
        ),
      ),
      throwsA(
        isA<StateError>().having(
          (error) => error.message,
          'message',
          contains('named public enum factory'),
        ),
      ),
    );
    final autoParser = FlaxCodegenBindingParser(root);
    addTearDown(autoParser.dispose);
    final proposal = await autoParser.proposeLibrary(
      config({}, library: library.uri.toString(), functions: {}),
    );
    expect(proposal.config.classes['UnnamedFactory']?.constructors.keys, [
      'named',
    ]);
    expect(
      proposal.skips.map((skip) => skip.code),
      contains('unnamed_enum_factory'),
    );
    final module = await autoParser.parse(proposal.config);
    expect(module.types.single.enumNames, ['value']);
  });
}
