import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

void main() {
  test(
    'dependent bounds share closed defaults across declaration kinds',
    () async {
      final root = p.normalize(p.join(Directory.current.path, '../..'));
      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      final config = FlaxCodegenBindingConfig(
        'dependent_bounds',
        Uri.file(
          p.join(
            root,
            'packages/flax_codegen/test/fixtures/capability/dependent_bounds.dart',
          ),
        ).toString(),
        '@example/dependent-bounds',
        'unused.dart',
        'unused.ts',
        const {},
      );
      final proposed = await parser.proposeLibrary(config);
      expect(
        proposed.config.classes.keys,
        containsAll([
          'Dependent',
          'Forward',
          'NullableDependent',
          'Nested',
          'BoundMethods',
        ]),
      );
      expect(
        proposed.skips.where((skip) => skip.code == 'complex_generic_bound'),
        isEmpty,
      );
      final module = await parser.parse(proposed.config);
      expect(
        module.classes.singleWhere((c) => c.name == 'Dependent').typeArguments,
        ['num', 'num'],
      );
      expect(
        module.classes.singleWhere((c) => c.name == 'Forward').typeArguments,
        ['num', 'num'],
      );
      expect(
        module.classes.singleWhere((c) => c.name == 'Nested').typeArguments,
        ['List<num>', 'num'],
      );
      final methods = module.classes
          .singleWhere((c) => c.name == 'BoundMethods')
          .methods;
      expect(methods.singleWhere((m) => m.name == 'instance').typeArguments, [
        'num',
        'num',
      ]);
      expect(methods.singleWhere((m) => m.name == 'dependent').typeArguments, [
        'num',
        'num',
      ]);
      await compileFixture(
        root,
        FlaxCodegenBindingEmitter([module]),
        module,
        consumerSource: '''
import { Dependent, Forward, NullableDependent, Nested, BoundMethods, dependentFunction } from './plugin.js';
import { dartType, dartTypes } from '@flax/core/bindings';
import type { DartList } from '@flax/core/bindings';
class Pair extends Dependent {}
class ForwardPair extends Forward<number, number> {}
class NullablePair extends NullableDependent {}
class NestedPair extends Nested<DartList<number>, number> {}
class Methods extends BoundMethods {}
const a: number = new Pair(1.5, 2).second;
const b: number = new ForwardPair(1, 2).first;
const n: number | null = new NullablePair(null, null).second;
const items: number = new NestedPair([1], 2).items.get(0);
const methods = new Methods();
const c: number = methods.instance(2);
const d: number = BoundMethods.dependent(3);
const e: number = dependentFunction(4);
class Concrete extends dartType(Dependent, dartTypes.num, dartTypes.int) {}
const f: number = new Concrete(1.5, 2).second;
// @ts-expect-error dependent bounds do not accept strings
new Pair(1, 'wrong');
''',
        dartTestSource: '''
class _Peer implements FlaxProxyPeer {
  @override
  bool get active => false;
  @override
  FlaxCallbackBinding genericSignature(int member, List<Type> types, FlaxCallbackBinding Function(FlaxDartTypes) build) => throw StateError('inactive test peer');
  @override
  (bool, Object?) call(int member, List<Object?> positional, Map<String, Object?> named, {FlaxCallbackBinding? signature, Function? superCall}) => (false, null);
}
void main() {
  test('closed defaults and call targets follow their resolved bounds', () {
    expect(_createDependent('@implementation', {'@peer': _Peer(), 'first': 1.5, 'second': 2}), isA<api.Dependent<num, num>>());
    expect(_createForward('@implementation', {'@peer': _Peer(), 'first': 1, 'second': 2}), isA<api.Forward<num, num>>());
    expect(_createNullableDependent('@implementation', {'@peer': _Peer(), 'first': null, 'second': null}), isA<api.NullableDependent<num?, num?>>());
    expect(_createNested('@implementation', {'@peer': _Peer(), 'items': <num>[1, 2.5], 'value': 2}), isA<api.Nested<List<num>, num>>());
    expect(_BoundMethods_instance(api.BoundMethods(), {'value': 2}), 2);
    expect(_BoundMethods_dependent({'value': 3}), 3);
    expect(() => _createDependent('@implementation', {'@peer': _Peer(), 'first': 1, 'second': 'bad'}), throwsA(isA<TypeError>()));
  });
}
''',
      );
    },
  );
}
