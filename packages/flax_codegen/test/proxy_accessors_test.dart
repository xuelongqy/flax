import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

void main() {
  test(
    'generic proxy accessors distinguish interface defaults from real super',
    () async {
      final root = p.normalize(p.join(Directory.current.path, '../..'));
      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      final module = await parser.parse(
        FlaxCodegenBindingConfig(
          'accessors',
          File(
            p.join(
              root,
              'packages/flax_codegen/test/fixtures/plugin/proxy_accessors.dart',
            ),
          ).uri.toString(),
          '@example/accessors',
          'unused.dart',
          'unused.ts',
          const {
            'DefaultAccessors': FlaxCodegenClassSelection({}, kind: 'object'),
            'InheritedAccessors': FlaxCodegenClassSelection(
              {
                '': ['value'],
              },
              kind: 'object',
              getters: ['inherited', 'fixed'],
              setters: ['inherited', 'fixed'],
            ),
            'NeedsDefaults': FlaxCodegenClassSelection(
              {
                '': ['value'],
              },
              kind: 'object',
              proxy: 'extends',
              getters: ['selected', 'inherited', 'fixed'],
              setters: ['selected', 'inherited', 'fixed'],
            ),
          },
        ),
      );
      final emitter = FlaxCodegenBindingEmitter([module]);
      await compileFixture(
        root,
        emitter,
        module,
        consumerSource: '''
import {NeedsDefaults} from './plugin.js';
class Custom extends NeedsDefaults<string> {
  override get selected(): string { return super.inherited; }
  override set selected(value: string) { super.inherited = value; }
  override get unselected(): string { return super.inherited; }
  override set unselected(value: string) { super.inherited = value; }
}
''',
        dartTestSource: r'''
class _AccessorPeer implements FlaxProxyPeer {
  @override
  bool active = false;
  List<Object?>? lastArguments;
  @override
  FlaxCallbackBinding genericSignature(int member, List<Type> types,
      FlaxCallbackBinding Function(FlaxDartTypes) create) => throw StateError('inactive');
  @override
  (bool, Object?) call(int member, List<Object?> positional, Map<String, Object?> named,
      {FlaxCallbackBinding? signature, Function? superCall}) {
    lastArguments = positional;
    return (active, 'from JS');
  }
}
void main() {
  test('interface defaults require overrides while native get/set super remains callable', () {
    final binding = typedFixtureBinding(_flaxClass_NeedsDefaults<String>());
    final peer = _AccessorPeer();
    final value = binding.create('@implementation', {
      '@peer': peer, 'value': 'initial',
    }) as api.NeedsDefaults<String>;
    expect(value.inherited, 'initial');
    value.inherited = 'changed';
    expect(binding.instanceMethods['@super:get:inherited']!.invoke(value, {}), 'changed');
    binding.instanceMethods['@super:set:inherited']!.invoke(value, {'value': 'native'});
    expect(value.inherited, 'native');
    expect(() => binding.instanceMethods['@super:set:inherited']!.invoke(value, {'value': 3}), throwsA(isA<TypeError>()));
    value.fixed = 'nonVirtual';
    expect(value.fixed, 'nonVirtual');
    expect(value.inherited, 'nonVirtual');
    expect(value.writes, 2);
    peer.active = true;
    expect(value.selected, 'from JS');
    value.selected = 'selected';
    expect(peer.lastArguments, ['selected']);
    expect(value.unselected, 'from JS');
    value.unselected = 'unselected';
    expect(peer.lastArguments, ['unselected']);
  });
}
''',
      );
      final proxy = module.classes
          .singleWhere((type) => type.name == 'NeedsDefaults')
          .proxy!;
      expect(
        proxy.getters.map((g) => g.name),
        unorderedEquals(['selected', 'unselected', 'inherited']),
      );
      expect(
        proxy.setters.map((g) => g.name),
        unorderedEquals(['selected', 'unselected', 'inherited']),
      );
      expect(
        proxy.superMethods,
        unorderedEquals(['get:inherited', 'set:inherited']),
      );
    },
  );
}
