import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:flax_codegen/src/manifest_codec.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

const _ordinary = FlaxCodegenClassSelection(
  {'': []},
  kind: 'object',
  proxy: 'extends',
  getters: ['value', 'narrowed', 'hashCode'],
  setters: ['value', 'narrowed'],
  instanceMethods: {
    'scale': ['input'],
    'narrow': ['input'],
    'defaulted': ['amount'],
    'guarded': ['input'],
    'guardedAsync': ['input'],
  },
  operators: {
    '+': ['input'],
    '==': ['other'],
  },
);

const _widget = FlaxCodegenClassSelection(
  {'': []},
  proxy: 'extends',
  getters: ['value', 'narrowed'],
  instanceMethods: {
    'scale': ['input'],
    'narrow': ['input'],
    'defaulted': ['amount'],
    'callWith': ['callback'],
  },
);

void main() {
  var root = Directory.current;
  while (!Directory(p.join(root.path, 'packages/flax_codegen')).existsSync()) {
    if (root.parent.path == root.path) {
      throw StateError('Cannot locate the Flax workspace');
    }
    root = root.parent;
  }
  final uri = File(
    p.join(
      root.path,
      'packages/flax_codegen/test/fixtures/capability/shared_binding.dart',
    ),
  ).uri.toString();
  FlaxCodegenBindingConfig config(
    Map<String, FlaxCodegenClassSelection> classes, {
    String name = 'shared',
  }) => FlaxCodegenBindingConfig(
    name,
    uri,
    '@example/$name',
    '$name.dart',
    '$name.ts',
    classes,
  );
  late FlaxCodegenBindingParser parser;
  setUp(() {
    parser = FlaxCodegenBindingParser(root.path);
    addTearDown(parser.dispose);
  });

  test(
    'Widget views share ordinary calls and keep local super semantics',
    () async {
      final widgetConfig = config(const {
        'SharedWidgetLeaf': _widget,
        'SharedWidgetChild': _widget,
        'SharedWidgetBase': _widget,
        'SharedRestrictedWidget': FlaxCodegenClassSelection(
          {'': []},
          instanceMethods: {
            'scale': ['input'],
          },
        ),
      });
      final coreConfig = FlaxCodegenBindingConfig.read(
        p.join(root.path, 'packages/flax/bindings/flax_bindings.yaml'),
      );
      await parser.prepare([coreConfig, widgetConfig]);
      final core = await parser.parse(coreConfig);
      parser.prepareModules([core]);
      final module = await parser.parse(widgetConfig);
      final emitter = FlaxCodegenBindingEmitter([core, module]);
      await compileFixture(
        root.path,
        emitter,
        module,
        consumerSource: '''
import {SharedWidgetLeaf} from './plugin.js';
class Leaf extends SharedWidgetLeaf {
  override scale(input: number): number { return super.scale(input) + 1; }
  override get value(): number { return super.value; }
}
const result: number = new Leaf().scale(3);
''',
        dartTestSource: r'''
FlaxObjectBinding binding(String name) {
  final selected = sharedBindings.types.singleWhere((b) => b.id.endsWith('::$name'));
  return selected is FlaxWidgetBinding ? selected.objectView! : selected as FlaxObjectBinding;
}
class _Peer implements FlaxProxyPeer {
  @override
  bool get active => false;
  @override
  FlaxCallbackBinding genericSignature(int member, List<Type> types,
      FlaxCallbackBinding Function(FlaxDartTypes) create) => throw StateError('inactive');
  @override
  (bool, Object?) call(int member, List<Object?> positional, Map<String, Object?> named,
      {FlaxCallbackBinding? signature, Function? superCall}) => (false, null);
}
void main() {
  test('Widget ordinary members preserve sharing, virtual calls and narrowed types', () {
    final base = binding('SharedWidgetBase');
    final child = binding('SharedWidgetChild');
    final leaf = binding('SharedWidgetLeaf');
    final value = api.SharedWidgetLeaf();
    expect(child.parent, same(base));
    expect(leaf.parent, same(child));
    expect(leaf.instanceMethods['scale'], same(base.instanceMethods['scale']));
    expect(leaf.getters.firstWhere((g) => g.name == 'value'),
      same(base.getters.firstWhere((g) => g.name == 'value')));
    expect(leaf.instanceMethods['scale']!.invoke(value, {'input': 3}), 115);
    expect(leaf.instanceMethods['callWith']!.invoke(value, {'callback': (num n) => n + 4}), 6);
    final signature = base.proxy!.members.singleWhere((member) => member.name == 'scale').signature;
    expect(base.instanceMethods['scale']!.parameters, same(signature.parameters));
    expect(base.instanceMethods['@super:scale']!.parameters, same(signature.parameters));
    expect(child.getters.firstWhere((g) => g.name == 'narrowed').type.kind, 'double');
    expect(child.instanceMethods['defaulted']!.parameters.single.defaultValue, 2);
    expect(base.instanceMethods['defaulted']!.parameters.single.defaultValue, 1);
    expect(() => leaf.instanceMethods['narrow']!.invoke(value, {'input': 'wrong'}),
      throwsA(isA<TypeError>()));
    final restricted = binding('SharedRestrictedWidget');
    expect(restricted.parent, isNull);
    expect(restricted.getters, isEmpty);
    expect(restricted.instanceMethods.keys, ['scale']);
  });
  test('each Widget proxy retains its actual lexical super target', () {
    for (final (name, expected) in [('SharedWidgetBase', 4),
        ('SharedWidgetChild', 15), ('SharedWidgetLeaf', 115)]) {
      final b = binding(name);
      final proxy = b.create('@implementation', {'@peer': _Peer()});
      expect(b.instanceMethods['@super:scale']!.invoke(proxy, {'input': 3}), expected);
    }
    expect(() => binding('SharedWidgetChild').instanceMethods['@super:scale']!
      .invoke(api.SharedWidgetChild(), {'input': 3}), throwsA(isA<TypeError>()));
  });
}
''',
      );
    },
  );

  test(
    'inherited registrations survive reversed order without dead aliases',
    () async {
      for (final names in [
        ['SharedBase', 'SharedChild', 'SharedLeaf'],
        ['SharedLeaf', 'SharedChild', 'SharedBase'],
      ]) {
        final module = await parser.parse(
          config({for (final n in names) n: _ordinary}),
        );
        final emitter = FlaxCodegenBindingEmitter([module]);
        final source = emitter.dart(module);
        expect(emitter.dart(module), source);
        expect(source, contains('abstract interface class _FlaxProxyDispatch'));
        final js = emitter.typescript(module);
        for (final (parent, child) in [
          ('SharedBase', 'SharedChild'),
          ('SharedChild', 'SharedLeaf'),
        ]) {
          final parentId = module.classes
              .singleWhere((c) => c.name == parent)
              .id;
          expect(
            js.indexOf('defineObject("$parentId"'),
            lessThan(js.indexOf('_flaxDefineProxyBase($child.prototype')),
            reason:
                'Proxy initialization can read its selected parent prototype',
          );
        }
        for (final child in ['SharedChild', 'SharedLeaf']) {
          for (final member in ['value', 'set_value', 'scale']) {
            expect(
              source,
              isNot(contains(RegExp('const _${child}_$member\\s*='))),
            );
          }
        }
        for (final member in [
          'narrowed',
          'set_narrowed',
          'narrow',
          'defaulted',
          'operatorAdd',
        ]) {
          expect(
            source,
            isNot(contains(RegExp('const _SharedChild_$member\\s*='))),
          );
        }
        expect(
          source,
          isNot(contains(RegExp('const _SharedLeaf_operatorAdd\\s*='))),
        );
        expect(
          RegExp(r'const _flaxBinding\d+\s*=\s*FlaxTypeRef\(').hasMatch(source),
          isTrue,
          reason: 'Closed type references must use the module constant pool',
        );
        expect(
          RegExp(r'"scale":\s*_flaxBinding\d+').hasMatch(source),
          isTrue,
          reason: 'Ordinary registrations must reference a pooled descriptor',
        );
        expect(
          RegExp(r'_Shared(?:Base|Child|Leaf)_scale\)').allMatches(source),
          hasLength(1),
          reason: 'Registration must use the canonical helper, not its aliases',
        );
        // Count actual descriptors, not references or a particular pool number.
        for (final descriptor in ['FlaxGetter', 'FlaxSetter']) {
          expect(
            RegExp('$descriptor\\("value",').allMatches(source),
            hasLength(1),
          );
        }
      }
    },
  );

  test(
    'shared members preserve virtual dispatch, conversion and lexical super',
    () async {
      final module = await parser.parse(
        config({
          'SharedLeaf': _ordinary,
          'SharedChild': _ordinary,
          'SharedBase': _ordinary,
          'SharedGeneric': const FlaxCodegenClassSelection(
            {'': []},
            kind: 'object',
            proxy: 'extends',
            getters: ['held'],
            instanceMethods: {
              'scale': ['input'],
              'echo': ['value'],
            },
          ),
          'SharedRestricted': const FlaxCodegenClassSelection(
            {'': []},
            kind: 'object',
            instanceMethods: {
              'scale': ['input'],
            },
          ),
        }),
      );
      // Imported/provider surfaces can expose only a subset of an ancestor.
      final index = module.classes.indexWhere(
        (value) => value.name == 'SharedRestricted',
      );
      final restricted = FlaxCodegenManifestCodec.encodeClass(
        module.classes[index],
      );
      restricted['getters'] = <Object>[];
      restricted['setters'] = <Object>[];
      restricted['methods'] = (restricted['methods'] as List)
          .where((value) => (value as Map)['name'] == 'scale')
          .toList();
      final diagnostics = FlaxCodegenManifestDiagnostics('restricted surface');
      final decoded = FlaxCodegenManifestCodec.decodeClass(
        restricted,
        diagnostics,
        '',
      );
      diagnostics.throwIfAny();
      module.classes[index] = decoded!;
      // Providers need not enumerate callbacks in the same order as an owner.
      final leafIndex = module.classes.indexWhere(
        (c) => c.name == 'SharedLeaf',
      );
      final leaf = FlaxCodegenManifestCodec.encodeClass(
        module.classes[leafIndex],
      );
      final leafProxy = leaf['proxy'] as Map;
      for (final field in ['methods', 'getters', 'setters']) {
        leafProxy[field] = (leafProxy[field] as List).reversed.toList();
      }
      module.classes[leafIndex] = FlaxCodegenManifestCodec.decodeClass(
        leaf,
        diagnostics,
        '',
      )!;
      diagnostics.throwIfAny();
      await compileFixture(
        root.path,
        FlaxCodegenBindingEmitter([module]),
        module,
        consumerSource: '''
import { SharedLeaf } from './plugin.js';
class Leaf extends SharedLeaf {
  override scale(input: number): number { return super.scale(input) + 1; }
  override get value(): number { return super.value; }
  override set value(value: number) { super.value = value; }
}
const result: number = new Leaf().scale(3);
''',
        dartTestSource: r'''
FlaxObjectBinding binding(String name) => sharedBindings.types
    .whereType<FlaxObjectBinding>().singleWhere((b) => b.id.endsWith('::$name'));
class _Peer implements FlaxProxyPeer {
  (bool, Object?) Function(int, List<Object?>, Map<String, Object?>)? handle;
  @override
  bool get active => handle != null;
  @override
  FlaxCallbackBinding genericSignature(int member, List<Type> types,
      FlaxCallbackBinding Function(FlaxDartTypes) create) => throw StateError('inactive');
  @override
  (bool, Object?) call(int member, List<Object?> positional, Map<String, Object?> named,
      {FlaxCallbackBinding? signature, Function? superCall}) =>
      handle?.call(member, positional, named) ?? (false, null);
}
void main() {
  test('registration reuses complete ordinary descriptors', () {
    final base = binding('SharedBase');
    final restricted = binding('SharedRestricted');
    expect(restricted.parent, isNull);
    expect(restricted.getters, isEmpty);
    expect(restricted.setters, isEmpty);
    expect(restricted.instanceMethods.keys, ['scale']);
    for (final name in ['SharedChild', 'SharedLeaf']) {
      final child = binding(name);
      expect(child.parent, isNotNull);
      expect(child.getters, same(child.getters));
      expect(child.instanceMethods, same(child.instanceMethods));
      expect(child.getters.first, same(base.getters.first));
      expect(child.setters.first, same(base.setters.first));
      expect(child.instanceMethods['scale'], same(base.instanceMethods['scale']));
      expect(child.instanceMethods['@super:scale'], same(base.instanceMethods['@super:scale']));
    }
    final child = binding('SharedChild');
    expect(child.getters.singleWhere((g) => g.name == 'narrowed').type.kind, 'double');
    expect(base.getters.singleWhere((g) => g.name == 'narrowed').type.kind, 'num');
    expect(child.instanceMethods['defaulted']!.parameters.single.defaultValue, 2);
    expect(base.instanceMethods['defaulted']!.parameters.single.defaultValue, 1);
  });
  test('ancestor typed calls dispatch to child and mixin overrides', () {
    final value = api.SharedLeaf();
    binding('SharedLeaf').setters.firstWhere((s) => s.name == 'value').write(value, 4);
    expect(_SharedBase_value(value), 9);
    expect(binding('SharedLeaf').getters.firstWhere((g) => g.name == 'value').read(value), 9);
    expect(_SharedBase_scale(value, {'input': 3}), 122);
    expect(binding('SharedLeaf').instanceMethods['scale']!.invoke(value, {'input': 3}), 122);
    expect(_SharedChild_narrow(value, {'input': 2.0}), 2.5);
    _SharedChild_set_narrowed(value, 3.0);
    expect(value.narrowed, 7.0);
    expect(() => binding('SharedLeaf').instanceMethods['scale']!.invoke(value, {'input': 'wrong'}), throwsA(isA<TypeError>()));
    expect(() => binding('SharedLeaf').setters.firstWhere((s) => s.name == 'value').write(value, 'wrong'), throwsA(isA<TypeError>()));
  });
  test('shared super adapters reach each proxy native target', () {
    final base = _createSharedBase('@implementation', {'@peer': _Peer()});
    final child = _createSharedChild('@implementation', {'@peer': _Peer()});
    final leaf = _createSharedLeaf('@implementation', {'@peer': _Peer()});
    final invoke = binding('SharedBase').instanceMethods['@super:scale']!.invoke;
    expect(invoke(base, {'input': 3}), 4);
    expect(invoke(child, {'input': 3}), 15);
    expect(invoke(leaf, {'input': 3}), 115);
    binding('SharedChild').instanceMethods['@super:set:value']!.invoke(child, {'value': 5});
    expect(binding('SharedChild').instanceMethods['@super:get:value']!.invoke(child, {}), 11);
    expect(() => invoke(api.SharedChild(), {'input': 3}), throwsA(isA<TypeError>()));
    final generic = typedFixtureBinding(_flaxClass_SharedGeneric<String>());
    final proxy = generic.create('@implementation', {'@peer': _Peer()});
    expect(generic.instanceMethods['@super:scale']!.invoke(proxy, {'input': 3}), 4);
    expect(generic.instanceMethods['@super:echo']!.invoke(proxy, {'value': 'kept'}), 'kept');
    expect(() => generic.instanceMethods['@super:echo']!.invoke(proxy, {'value': 7}), throwsA(isA<TypeError>()));
    final signature = binding('SharedBase').proxy!.members.first.signature;
    expect(() => signature.matches(Object()), throwsStateError);
  });
  test('shared dispatch maps local slots and restores nested super guards', () async {
    for (final name in ['SharedBase', 'SharedChild', 'SharedLeaf']) {
      final b = binding(name);
      final peer = _Peer();
      final value = b.create('@implementation', {'@peer': peer}) as api.SharedBase;
      expect(value == value, isTrue);
      final calls = <String>[];
      var skipSuper = false;
      peer.handle = (index, positional, named) {
        final member = b.proxy!.members[index];
        calls.add('${member.kind}:${member.name}');
        if (member.kind != 0 || !{'guarded', 'guardedAsync', 'scale'}.contains(member.name)) {
          return (false, null);
        }
        if (skipSuper && member.name.startsWith('guarded')) {
          return (true, member.name == 'guardedAsync' ? Future<num>.value(9) : 9);
        }
        final parameters = <String, Object?>{
          for (var i = 0; i < positional.length; i++)
            member.signature.parameters[i].name: positional[i],
          ...named,
        };
        final result = b.instanceMethods['@super:${member.name}']!.invoke(value, parameters);
        return (true, result);
      };
      final expected = name == 'SharedBase' ? 4 : name == 'SharedChild' ? 15 : 115;
      expect(value.guarded(3), expected);
      expect(calls, containsAllInOrder(['0:guarded', '0:scale', '1:value']));
      expect(await value.guardedAsync(3), expected);
      expect(value.defaulted(), name == 'SharedBase' ? 1 : 2);
      expect(value.defaulted(7), 7);
      value.value = 5;
      expect(calls, contains('2:value'));
      skipSuper = true;
      expect(() => value.guarded(3), throwsStateError);
      await expectLater(value.guardedAsync(3), throwsStateError);
      skipSuper = false;
      expect(value.guarded(3), name == 'SharedBase' ? 8 : name == 'SharedChild' ? 24 : 124);
    }
  });
}
''',
      );
    },
  );

  test(
    'unselected named parameters retain the invoked override defaults',
    () async {
      const selection = FlaxCodegenClassSelection(
        {},
        kind: 'object',
        instanceMethods: {'omitted': []},
      );
      final module = await parser.parse(
        config(const {'SharedChild': selection, 'SharedBase': selection}),
      );
      for (final owner in module.classes) {
        expect(owner.methods.single.parameters, isEmpty);
      }
      final emitter = FlaxCodegenBindingEmitter([module]);
      expect(
        emitter.dart(module),
        isNot(contains(RegExp(r'const _SharedChild_omitted\s*='))),
      );
      await compileFixture(
        root.path,
        emitter,
        module,
        dartTestSource: r'''
void main() {
  test('an ancestor typed call uses the override default for omitted arguments', () {
    final base = api.SharedBase();
    final child = api.SharedChild();
    api.SharedBase ancestor = child;
    expect(base.omitted(), 1);
    expect(child.omitted(), 2);
    expect(ancestor.omitted(), 2);
    expect(_SharedBase_omitted(base, {}), 1);
    expect(_SharedBase_omitted(child, {}), 2);
    final bindings = sharedBindings.types.whereType<FlaxObjectBinding>();
    final baseMethod = bindings.singleWhere((b) => b.id.endsWith('::SharedBase'))
        .instanceMethods['omitted']!;
    final childMethod = bindings.singleWhere((b) => b.id.endsWith('::SharedChild'))
        .instanceMethods['omitted']!;
    expect(childMethod, same(baseMethod));
    expect(childMethod.invoke(child, {}), 2);
  });
}
''',
      );
    },
  );

  test(
    'generic factories share fixed descriptions without sharing owner types',
    () async {
      final module = await parser.parse(
        config(const {
          'FixedFactory': FlaxCodegenClassSelection(
            {
              '': ['value', 'label'],
            },
            kind: 'object',
            getters: [
              'value',
              'label',
              'values',
              'record',
              'future',
              'deferred',
            ],
            instanceMethods: {
              'sum': ['values', 'offset'],
              'choose': ['input', 'enabled'],
              'call': ['callback'],
            },
          ),
          'FixedDeferred': FlaxCodegenClassSelection(
            {
              '': ['value'],
            },
            kind: 'object',
            getters: ['value'],
            methods: {
              'resolveWith': ['callback'],
            },
          ),
        }),
      );
      final emitter = FlaxCodegenBindingEmitter([module]);
      expect(emitter.dart(module), emitter.dart(module));
      await compileFixture(
        root.path,
        emitter,
        module,
        dartTestSource: r'''
void main() {
  test('only fixed metadata is reused across typed factories', () async {
    final strings = typedFixtureBinding(_flaxClass_FixedFactory<String>());
    final numbers = typedFixtureBinding(_flaxClass_FixedFactory<int>());
    FlaxGetter getter(FlaxObjectBinding binding, String name) =>
      binding.getters.singleWhere((g) => g.name == name);
    for (final name in ['label', 'values', 'record', 'future']) {
      expect(getter(strings, name).type, same(getter(numbers, name).type));
    }
    expect(strings.instanceMethods['sum']!.parameters,
      same(numbers.instanceMethods['sum']!.parameters));
    expect(getter(strings, 'value').type.kind, 'String');
    expect(getter(numbers, 'value').type.kind, 'int');
    expect(strings.constructors['']!.last.defaultValue, 'fixed');
    expect(strings.instanceMethods['sum']!.parameters.last.defaultValue, 3);
    final value = strings.create('', {'value': 'kept', 'label': 'fixed'});
    expect(getter(strings, 'label').read(value), 'fixed');
    expect(getter(strings, 'record').read(value), ('fixed', 2));
    expect(await (getter(strings, 'future').read(value) as Future<int>), 2);
    expect(getter(strings, 'deferred').type.deferredFactories['resolveWith']!.id,
      contains('FixedDeferred<int>'));
    expect((getter(strings, 'deferred').read(value) as api.FixedDeferred<int>).value, 2);
    expect(strings.instanceMethods['sum']!.invoke(value,
      {'values': <int>[1, 2], 'offset': 3}), 6);
    expect(strings.instanceMethods['sum']!.invoke(value,
      {'values': <int>[1, 2], 'offset': 5}), 8);
    expect(strings.instanceMethods['choose']!.invoke(value,
      {'input': 'next', 'enabled': true}), 'next');
    expect(() => strings.instanceMethods['choose']!.invoke(value,
      {'input': 7, 'enabled': true}),
      throwsA(isA<TypeError>()));
    final callback = strings.instanceMethods['call']!.parameters.single.type.callback!;
    expect(callback.invoke(({required String text}) => text.toUpperCase(), [],
      {'text': 'fixed'}), 'FIXED');
    expect(callback.matches(({required int text}) => '$text'), isFalse);
    expect(strings.instanceMethods['call']!.invoke(value,
      {'callback': ({required String text}) => text.toUpperCase()}), 'FIXED');
  });
}
''',
      );
    },
  );

  test(
    'closed callbacks share adapters while captured generic scopes stay local',
    () async {
      final module = await parser.parse(
        config(const {
          'CallbackFirst': FlaxCodegenClassSelection(
            {},
            kind: 'object',
            getters: ['callback'],
          ),
          'Captured': FlaxCodegenClassSelection(
            {},
            kind: 'object',
            getters: ['callback'],
          ),
          'OtherCaptured': FlaxCodegenClassSelection(
            {},
            kind: 'object',
            getters: ['callback'],
          ),
          'CallbackSecond': FlaxCodegenClassSelection(
            {},
            kind: 'object',
            getters: ['callback'],
          ),
        }),
      );
      final emitter = FlaxCodegenBindingEmitter([module]);
      final source = emitter.dart(module);
      expect(emitter.dart(module), source);
      await compileFixture(
        root.path,
        emitter,
        module,
        dartTestSource: r'''
FlaxGetter callbackGetter(String name) => sharedBindings.types
    .whereType<FlaxObjectBinding>().singleWhere((b) => b.id.endsWith('::$name')).getters.single;
void main() {
  test('separate closed callback models reuse typed adapters', () {
    final first = callbackGetter('CallbackFirst');
    final second = callbackGetter('CallbackSecond');
    expect(first.type, same(second.type));
    final signature = first.type.callback!;
    expect(signature.wrap, same(second.type.callback!.wrap));
    expect(signature.invoke(first.read(api.CallbackFirst())!, [3], {}), 4);
    expect(signature.invoke(second.read(api.CallbackSecond())!, [3], {}), 5);
    expect(signature.matches((String value) => value), isFalse);
    expect(() => signature.invoke(first.read(api.CallbackFirst())!, ['bad'], {}), throwsA(isA<TypeError>()));
  });
  test('VM factories retain distinct owner captures', () {
    final strings = typedFixtureBinding(_flaxClass_Captured<String>());
    final integers = typedFixtureBinding(_flaxClass_Captured<int>());
    final other = typedFixtureBinding(_flaxClass_OtherCaptured<int>());
    final text = strings.getters.first;
    final number = integers.getters.first;
    expect(text.type.callback!.matches((String value) => value), isTrue);
    expect(text.type.callback!.matches((int value) => value), isFalse);
    expect(number.type.callback!.matches((int value) => value), isTrue);
    expect(number.type.callback!.matches((String value) => value), isFalse);
    expect(other.getters.single.type.callback!.invoke(
        other.getters.single.read(api.OtherCaptured<int>())!, [7], {}), 7);
  });
}
''',
      );
      expect(emitter.dart(module), source);
    },
  );

  test('nested generic callbacks keep their enclosing owner capture', () async {
    final module = await parser.parse(
      config(const {
        'Captured': FlaxCodegenClassSelection(
          {},
          kind: 'object',
          getters: ['nested'],
        ),
      }),
    );
    await compileFixture(
      root.path,
      FlaxCodegenBindingEmitter([module]),
      module,
      dartTestSource: r'''
void main() {
  test('callback-local R does not erase or hoist owner T', () {
    final strings = typedFixtureBinding(_flaxClass_Captured<String>());
    final integers = typedFixtureBinding(_flaxClass_Captured<int>());
    final callback = strings.getters.single.read(api.Captured<String>())
        as List<String> Function<R>(R, String);
    expect(callback<int>(1, 'kept'), ['kept']);
    expect(strings.getters.single.type.callback!.matches(callback), isTrue);
    expect(integers.getters.single.type.callback!.matches(callback), isFalse);
    expect(strings.getters.single.type.callback!.invoke(callback, [1, 'kept'], {}), ['kept']);
  });
}
''',
    );
  });

  test(
    'ancestor helpers and callback pools never cross module boundaries',
    () async {
      final baseConfig = config(const {
        'SharedBase': _ordinary,
        'CallbackFirst': FlaxCodegenClassSelection(
          {},
          kind: 'object',
          getters: ['callback'],
        ),
      }, name: 'base');
      final childConfig = config(const {
        'SharedChild': _ordinary,
        'CallbackSecond': FlaxCodegenClassSelection(
          {},
          kind: 'object',
          getters: ['callback'],
        ),
      }, name: 'child');
      await parser.prepare([childConfig, baseConfig]);
      final base = await parser.parse(baseConfig);
      final child = await parser.parse(childConfig);
      final emitter = FlaxCodegenBindingEmitter([child, base]);
      final first = emitter.dart(child);
      emitter.dart(base);
      expect(emitter.dart(child), first);
      expect(first, isNot(contains(RegExp(r'const _SharedChild_scale\s*='))));
      await compileFixture(root.path, emitter, child);
    },
  );
}
