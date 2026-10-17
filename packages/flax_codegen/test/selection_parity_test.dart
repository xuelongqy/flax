import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:flax_codegen/src/manifest_codec.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

void main() {
  final root = p.normalize(p.join(Directory.current.path, '../..'));
  final uri = File('$root/packages/flax/test/fixtures/binding_parity.dart').uri
      .toString();
  FlaxCodegenBindingConfig config({
    Map<String, FlaxCodegenClassSelection> classes = const {},
  }) => FlaxCodegenBindingConfig(
    'binding_parity',
    uri,
    '@example/binding-parity',
    'unused.dart',
    'unused.ts',
    classes,
  );

  Future<(FlaxCodegenBindingParser, FlaxCodegenModuleModel)> prepared() async {
    final parser = FlaxCodegenBindingParser(root);
    addTearDown(parser.dispose);
    final core = await parser.parse(
      FlaxCodegenBindingConfig.read(
        '$root/packages/flax/bindings/flax_bindings.yaml',
      ),
    );
    parser.prepareModules([core]);
    return (parser, core);
  }

  test(
    'automatic Widget writes and inherited interfaces reuse explicit paths',
    () async {
      final (parser, core) = await prepared();
      final proposal = await parser.proposeLibrary(config());
      for (final name in ['WritableTile', 'InheritedWritableTile']) {
        expect(
          proposal.config.classes[name]!.setters,
          containsAll(['setting', 'writeOnly']),
        );
      }
      expect(
        proposal.config.classes['SizedTileContract']!.kind,
        'widgetInterface',
      );
      expect(
        proposal.config.classes['CallbackTile']!.constructors[''],
        containsAll(['onTap', 'callbacks']),
      );
      expect(
        proposal.config.classes['CallbackTile']!.widgetInterfaces,
        contains('SizedTileContract'),
      );
      final module = await parser.parse(proposal.config);
      await compileFixture(
        root,
        FlaxCodegenBindingEmitter([core, module]),
        module,
        consumerSource: '''
import {WritableTile, InheritedWritableTile, CallbackTile} from './plugin.js';
const tile = WritableTile();
tile.setting = 2.5;
tile.writeOnly = 3;
InheritedWritableTile().setting = 4;
CallbackTile({onTap() {}, callbacks: [() => {}]});
// @ts-expect-error Setter inputs retain their declared type.
tile.setting = 'bad';
// @ts-expect-error A required callback stays required.
CallbackTile({});
''',
      );
      final setterOnly = await parser.parse(
        config(
          classes: {
            'WritableTile': const FlaxCodegenClassSelection(
              {'': []},
              setters: ['writeOnly'],
            ),
          },
        ),
      );
      expect(setterOnly.classes.single.getters, isEmpty);
      expect(setterOnly.classes.single.methods, isEmpty);
      await compileFixture(
        root,
        FlaxCodegenBindingEmitter([core, setterOnly]),
        setterOnly,
        consumerSource: '''
import {WritableTile} from './plugin.js';
WritableTile().writeOnly = 3;
// @ts-expect-error Setter-only Widgets still validate the input type.
WritableTile().writeOnly = 'bad';
''',
      );
    },
  );

  test('ordinary object business names remain available while descriptors stay guarded', () async {
    final (parser, core) = await prepared();
    final proposal = await parser.proposeLibrary(config());
    expect(
      proposal.config.classes['BusinessFields']!.getters,
      containsAll(['kind', 'type', 'ctor', 'args']),
    );
    final module = await parser.parse(proposal.config);
    await compileFixture(
      root,
      FlaxCodegenBindingEmitter([core, module]),
      module,
      consumerSource: '''
import {BusinessFields, createBusinessFields} from './plugin.js';
const value = createBusinessFields('a');
value.kind = 'b';
const kind: string = value.kind;
const type: string = value.type;
const ctor: string = value.ctor;
const arg: string = value.args.get(0);
class Custom extends BusinessFields {
  override get kind(): string { return super.kind + '!'; }
  override set kind(value: string) { super.kind = value; }
}
''',
    );
    await expectLater(
      parser.parse(
        config(
          classes: {
            'DescriptorValue': const FlaxCodegenClassSelection(
              {},
              getters: ['kind'],
            ),
          },
        ),
      ),
      throwsStateError,
    );
  });

  test(
    'Never and Core values share typed conversion and Manifest roundtrips',
    () async {
      final (parser, core) = await prepared();
      final proposal = await parser.proposeLibrary(config());
      final selection = proposal.config.classes['CoreValues']!;
      expect(
        selection.instanceMethods.keys,
        containsAll([
          'fail',
          'failLater',
          'invokeNever',
          'invokeFutureNever',
          'nullOnly',
          'echoType',
          'echoSymbol',
          'echoRecord',
        ]),
      );
      final module = await parser.parse(proposal.config);
      expect(module.requiredCapabilities, contains('bottom-types'));
      final diagnostics = FlaxCodegenManifestDiagnostics('binding-parity.json');
      final encoded = FlaxCodegenManifestCodec.encodeModule(module)
        ..['typeLibraries'] = {
          for (final key in module.typeLibraries.keys.toList()..sort())
            key: module.typeLibraries[key]!.startsWith('file:')
                ? 'package:example/binding_parity.dart'
                : module.typeLibraries[key],
        };
      final restored = FlaxCodegenManifestCodec.decodeModule(
        encoded,
        diagnostics,
        '',
        module.name,
      );
      diagnostics.throwIfAny();
      expect(restored!.classes.map((c) => c.name), contains('CoreValues'));
      await compileFixture(
        root,
        FlaxCodegenBindingEmitter([core, module]),
        module,
        consumerSource: '''
import {createCoreValues} from './plugin.js';
import {Type, Symbol, Record} from '@flax/dart/core';
const value = createCoreValues();
const type: Type = value.echoType(value.type);
const symbol: Symbol = value.echoSymbol(Symbol('parity'));
const record: Record = value.echoRecord(value.record);
const onlyNull: null = value.nullOnly(null);
const nullRepresentation: null = value.echoNullValue(null);
const fail: () => never = value.failingCallback;
const later: Promise<never> = value.failLater();
value.invokeNever(() => { throw new Error('callback'); });
// @ts-expect-error Never callbacks cannot return a value.
value.invokeNever(() => 1);
// @ts-expect-error Null-only input cannot accept another value.
value.nullOnly('bad');
// @ts-expect-error Symbols are Dart references, not JS symbols.
value.echoSymbol(globalThis.Symbol('bad'));
''',
      );
    },
  );
}
