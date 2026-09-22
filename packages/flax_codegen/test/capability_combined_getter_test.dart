import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

void main() {
  final root = p.normalize(p.join(Directory.current.path, '../..'));
  const box = FlaxCodegenClassSelection(
    {
      '': ['value'],
    },
    kind: 'object',
    typeArguments: ['Object?'],
    getters: ['value'],
  );
  const child = FlaxCodegenClassSelection({'': []}, kind: 'object');

  Future<FlaxCodegenModuleModel> parse(
    Map<String, FlaxCodegenClassSelection> classes,
  ) async {
    final parser = FlaxCodegenBindingParser(root);
    addTearDown(parser.dispose);
    return parser.parse(
      FlaxCodegenBindingConfig(
        'capability',
        Uri.file(
          p.join(
            root,
            'packages/flax_codegen/test/fixtures/capability/void_getter_merge.dart',
          ),
        ).toString(),
        '@example/capability',
        'unused.dart',
        'unused.ts',
        classes,
      ),
    );
  }

  test('parses Box and VoidBox alone', () async {
    await parse({'Box': box});
    await parse({'VoidBox': child});
  });

  test('inherited void getters compile through multiple levels in either selection order', () async {
    for (final reverse in [false, true]) {
      final selections = {
        'Box': box,
        'VoidBox': child,
        'IndirectVoidBox': child,
        'StringBox': child,
      };
      final module = await parse(
        reverse
            ? Map.fromEntries(selections.entries.toList().reversed)
            : selections,
      );
      for (final name in ['VoidBox', 'IndirectVoidBox']) {
        final type = module.classes.singleWhere((c) => c.name == name);
        expect(type.getters.single.name, 'value');
        expect(type.getters.single.type.kind, 'void');
      }
      await compileFixture(
        root,
        FlaxCodegenBindingEmitter([module]),
        module,
        consumerSource: '''
import {Box, VoidBox, IndirectVoidBox, StringBox} from './plugin.js';
const explicit: void = VoidBox().value;
const inherited: void = IndirectVoidBox().value;
const parent: Box<void> = IndirectVoidBox();
const text: string | null = StringBox().value;
// @ts-expect-error A void getter is not a string result.
const invalid: string = VoidBox().value;
''',
      );
    }
  });

  test('explicit void getters compile without a parent selection', () async {
    final module = await parse({
      'VoidBox': const FlaxCodegenClassSelection(
        {'': []},
        kind: 'object',
        getters: ['value', 'explicitValue', 'failure', 'reads'],
      ),
    });
    final emitter = FlaxCodegenBindingEmitter([module]);
    expect(emitter.dart(module), contains('.explicitValue; return null;'));
    await compileFixture(
      root,
      emitter,
      module,
      consumerSource: '''
import {VoidBox} from './plugin.js';
const value: void = VoidBox().explicitValue;
const reads: number = VoidBox().reads;
''',
    );
  });
}
