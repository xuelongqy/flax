import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:flax_codegen/src/manifest_codec.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

void main() {
  test(
    'ordinary constructors and extends proxies share one public API',
    () async {
      final root = p.normalize(p.join(Directory.current.path, '../..'));
      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      const mixedConstruction = FlaxCodegenClassSelection(
        {
          'raw': ['value'],
          '': ['value'],
        },
        kind: 'object',
        proxy: 'extends',
        getters: ['value'],
        instanceMethods: {
          'decorate': ['value'],
        },
      );
      final module = await parser.parse(
        FlaxCodegenBindingConfig(
          'construction',
          Uri.file(
            p.join(root, 'packages/flax/test/fixtures/binding_completion.dart'),
          ).toString(),
          '@example/construction',
          'unused.dart',
          'unused.ts',
          const {
            'AbstractCompletionWidget': FlaxCodegenClassSelection(
              {
                '': ['value'],
              },
              proxy: 'extends',
              instanceMethods: {
                'label': ['value'],
              },
            ),
            'MixedConstruction': mixedConstruction,
            'AbstractConstruction': mixedConstruction,
            'CompletionDecorated': FlaxCodegenClassSelection(
              {'': []},
              kind: 'object',
              proxy: 'extends',
              instanceMethods: {
                'decorate': ['value'],
                'nativeDecorate': ['value'],
              },
            ),
            'MultiProxy': FlaxCodegenClassSelection(
              {
                'left': ['arguments'],
                'right': ['value'],
              },
              kind: 'object',
              proxy: 'extends',
              getters: ['value'],
              instanceMethods: {
                'transform': ['input'],
                'call': ['input'],
              },
            ),
            'GetterProxy': FlaxCodegenClassSelection(
              {'': []},
              kind: 'object',
              proxy: 'extends',
              getters: ['value'],
              instanceMethods: {'read': []},
            ),
            'AbstractReadyProxy': FlaxCodegenClassSelection(
              {'': []},
              kind: 'object',
              proxy: 'extends',
              instanceMethods: {'read': []},
            ),
          },
        ),
      );
      for (final type in module.classes) {
        final diagnostics = FlaxCodegenManifestDiagnostics('constructor.json');
        final encoded = FlaxCodegenManifestCodec.encodeClass(type);
        final decoded = FlaxCodegenManifestCodec.decodeClass(
          encoded,
          diagnostics,
          '',
        );
        expect(diagnostics.items, isEmpty);
        for (var i = 0; i < type.constructors.length; i++) {
          final constructor = type.constructors[i];
          final factory =
              {
                'MixedConstruction',
                'AbstractConstruction',
              }.contains(type.name) &&
              constructor.name.isEmpty;
          final proxyOnly =
              {
                'GetterProxy',
                'AbstractReadyProxy',
                'AbstractConstruction',
                'AbstractCompletionWidget',
              }.contains(type.name) &&
              !factory;
          expect(constructor.proxyOnly, proxyOnly);
          expect(constructor.isFactory, factory);
          expect(decoded!.constructors[i].proxyOnly, proxyOnly);
          expect(decoded.constructors[i].isFactory, factory);
        }
      }
      for (final field in ['proxyOnly', 'isFactory']) {
        final invalid = FlaxCodegenManifestDiagnostics('invalid.json');
        expect(
          FlaxCodegenManifestCodec.decodeConstructor(
            {
              ...FlaxCodegenManifestCodec.encodeConstructor(
                const FlaxCodegenConstructorModel('', []),
              ),
              field: 'true',
            },
            invalid,
            '',
          ),
          isNull,
        );
        expect(invalid.items.single.pointer, '/$field');
      }
      await compileFixture(
        root,
        FlaxCodegenBindingEmitter([module]),
        module,
        consumerSource: r'''
import {CompletionDecorated, MultiProxy, GetterProxy, AbstractReadyProxy, MixedConstruction, AbstractConstruction, AbstractCompletionWidget} from './plugin.js';
import {dartSuper, dartTypes} from '@flax/core/bindings';
const ordinary: CompletionDecorated = CompletionDecorated();
ordinary.decorate('value');
const nativeProxy: CompletionDecorated = new CompletionDecorated();
class Decorated extends CompletionDecorated {
  #suffix = '!';
  decorate(value: string): string { return super.decorate(value) + this.#suffix; }
}
new Decorated().decorate('value');
CompletionDecorated.implement([], {}).decorate('value');
const selected = MultiProxy.$type(dartTypes.string);
const left: MultiProxy<string> = selected.left('left');
const right: MultiProxy<string> = selected.right({value: 'right'});
class Named extends selected {
  constructor() { super(dartSuper(selected, 'right', {value: 'seed'})); }
  transform(value: string): string { return super.transform(value) + '!'; }
}
const output: string = new Named().call('input');
class Required extends GetterProxy { get value(): number { return 7; } }
new Required().read();
// @ts-expect-error An abstract Dart class has no ordinary generative constructor.
GetterProxy();
// @ts-expect-error Required abstract members must still be implemented.
new GetterProxy();
// @ts-expect-error Abstract owners remain abstract even without abstract members.
AbstractReadyProxy();
// @ts-expect-error A concrete method does not make an abstract class constructible.
new AbstractReadyProxy();
class Ready extends AbstractReadyProxy {}
new Ready().read();
const SelectedReady = AbstractReadyProxy.$type(dartTypes.string);
// @ts-expect-error A selected abstract generic remains non-callable.
SelectedReady();
// @ts-expect-error Generic selection does not make an abstract owner concrete.
new SelectedReady();
class TypedReady extends SelectedReady {}
new TypedReady().read();
// @ts-expect-error Constructor inputs remain checked.
selected.right({value: 7});
const Mixed = MixedConstruction.$type(dartTypes.string);
const mixed: MixedConstruction<string> = Mixed('seed');
Mixed.raw('seed');
new Mixed('seed');
class MixedChild extends Mixed {
  constructor() { super(dartSuper(Mixed, 'raw', 'seed')); }
  decorate(value: string): string { return super.decorate(value) + '!'; }
}
new MixedChild().decorate('value');
// @ts-expect-error A Dart factory cannot initialize a JS subclass.
dartSuper(Mixed, '', 'seed');
const Abstract = AbstractConstruction.$type(dartTypes.string);
const abstractFactory: AbstractConstruction<string> = Abstract('seed');
// @ts-expect-error An abstract generative constructor is not an ordinary factory.
Abstract.raw('seed');
// @ts-expect-error Factory availability does not make an abstract base concrete.
new Abstract('seed');
class AbstractChild extends Abstract {
  constructor() { super(dartSuper(Abstract, 'raw', 'seed')); }
  decorate(value: string): string { return super.decorate(value) + '!'; }
}
new AbstractChild().decorate('value');
// @ts-expect-error Abstract Widget generative constructors are not ordinary calls.
AbstractCompletionWidget('seed');
class ConcreteWidget extends AbstractCompletionWidget {
  label(value: string): string { return super.label(value) + '!'; }
}
new ConcreteWidget('seed').label('value');
''',
        dartTestSource: '''
void main() {
  test('ordinary creation invokes the original Dart constructor', () {
    final direct = _createCompletionDecorated('', {});
    expect(direct.runtimeType, api.CompletionDecorated);
    expect((direct as api.CompletionDecorated).decorate('value'), '[value]');
    final left = _createMultiProxy('left', {'arguments': 'left'}) as api.MultiProxy;
    expect(left.value, 'left');
    expect(() => _createGetterProxy('', {}), throwsArgumentError);
    final mixed = createTypedFixture(_flaxClass_MixedConstruction<String>(), '', {'value': 'seed'});
    expect((mixed as api.MixedConstruction<String>).value, 'seed');
    expect(createTypedFixture(_flaxClass_MixedConstruction<String>(), 'raw', {'value': 'named'}), isA<api.MixedConstruction<String>>());
    final abstractFactory = createTypedFixture(_flaxClass_AbstractConstruction<String>(), '', {'value': 'seed'});
    expect((abstractFactory as api.AbstractConstruction<String>).value, 'seed');
    expect(() => createTypedFixture(_flaxClass_AbstractConstruction<String>(), 'raw', {'value': 'seed'}), throwsArgumentError);
  });
}
''',
      );
      final automaticParser = FlaxCodegenBindingParser(root);
      addTearDown(automaticParser.dispose);
      final proposal = await automaticParser.proposeLibrary(
        FlaxCodegenBindingConfig(
          module.name,
          module.library,
          module.jsPackage,
          'unused.dart',
          'unused.ts',
          const {},
        ),
      );
      for (final name in ['MixedConstruction', 'AbstractConstruction']) {
        final selection = proposal.config.classes[name]!;
        expect(selection.proxy, 'extends');
        expect(selection.constructors.keys, unorderedEquals(['', 'raw']));
      }
    },
  );
}
