import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:flax_codegen/src/manifest_codec.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

void main() {
  final root = p.normalize(p.join(Directory.current.path, '../..'));
  test('Widget interface proxies reject incompatible native bases', () async {
    final parser = FlaxCodegenBindingParser(root);
    addTearDown(parser.dispose);
    for (final name in ['InvalidBuildContract', 'PrivateWidgetContract']) {
      await expectLater(
        parser.parse(
          FlaxCodegenBindingConfig(
            'invalid_interface',
            Uri.file(
              p.join(
                Directory.current.path,
                'test/fixtures/plugin/native_widget_proxies.dart',
              ),
            ).toString(),
            '@example/invalid-interface',
            '',
            '',
            {
              'Key': const FlaxCodegenClassSelection({}, kind: 'object'),
              'BuildContext': const FlaxCodegenClassSelection(
                {},
                kind: 'context',
              ),
              name: FlaxCodegenClassSelection(
                {},
                kind: 'widgetInterface',
                proxy: 'implements',
                methods: {
                  if (name == 'InvalidBuildContract') 'build': ['context'],
                },
              ),
            },
          ),
        ),
        throwsA(
          isA<StateError>().having(
            (error) => error.message,
            'reason',
            contains('Widget interface $name:'),
          ),
        ),
      );
    }
  });
  test('Widget interfaces reuse constructible native proxies', () async {
    final parser = FlaxCodegenBindingParser(root);
    addTearDown(parser.dispose);
    final module = await parser.parse(
      FlaxCodegenBindingConfig(
        'interface_proxy',
        Uri.file(
          p.join(
            Directory.current.path,
            'test/fixtures/plugin/native_widget_proxies.dart',
          ),
        ).toString(),
        '@example/interface-proxy',
        'unused.dart',
        'unused.ts',
        const {
          'Key': FlaxCodegenClassSelection({}, kind: 'object'),
          'BuildContext': FlaxCodegenClassSelection({}, kind: 'context'),
          'Size': FlaxCodegenClassSelection({}, kind: 'object'),
          'Text': FlaxCodegenClassSelection({
            '': ['data'],
          }),
          'PreferredSizeWidget': FlaxCodegenClassSelection(
            {},
            kind: 'widgetInterface',
            proxy: 'implements',
            getters: ['preferredSize'],
          ),
          'ToolbarContract': FlaxCodegenClassSelection(
            {},
            kind: 'widgetInterface',
            proxy: 'implements',
            getters: ['preferredSize', 'value'],
            setters: ['value'],
            methods: {
              'describe': ['prefix'],
            },
          ),
          'NestedToolbarContract': FlaxCodegenClassSelection(
            {},
            kind: 'widgetInterface',
            proxy: 'implements',
            getters: ['preferredSize', 'value'],
            setters: ['value'],
            methods: {
              'describe': ['prefix'],
            },
          ),
        },
      ),
    );
    final emitter = FlaxCodegenBindingEmitter([module]);
    expect(module.requiredCapabilities, contains('widget-interface-proxies'));
    final diagnostics = FlaxCodegenManifestDiagnostics('interface-proxy');
    final restored = FlaxCodegenManifestCodec.decodeModule(
      FlaxCodegenManifestCodec.encodeModule(module)
        ..['typeLibraries'] = <String, Object?>{},
      diagnostics,
      '',
      module.name,
    );
    expect(diagnostics.items, isEmpty);
    expect(
      restored!.classes
          .where((type) => type.proxy != null)
          .every((type) => type.proxy!.widgetInterface),
      isTrue,
    );
    final dart = emitter.dart(module);
    expect(
      dart,
      contains('with FlaxWidgetProxy implements api.PreferredSizeWidget'),
    );
    expect(dart, isNot(contains('implements api.Widget')));
    await compileFixture(
      root,
      emitter,
      module,
      consumerSource: r'''
import {PreferredSizeWidget, ToolbarContract, type NestedToolbarContract, Text, type Size, type BuildContext} from './plugin.js';
import {dartTypes, type DartList} from '@flax/core/bindings';
class Toolbar extends PreferredSizeWidget {
  constructor(readonly size: Size) { super({key: null}); }
  get preferredSize() { return this.size; }
  build(context: BuildContext) { return Text('Toolbar'); }
}
class Caption extends ToolbarContract<string> {
  constructor(readonly size: Size) { super(); }
  get preferredSize() { return this.size; }
  #value = 'caption';
  get value() { return this.#value; }
  set value(value: string) { this.#value = value; }
  describe(options: {prefix?: string | undefined} = {}) { return (options.prefix ?? '') + this.value; }
  build(context: BuildContext) { return Text(this.value); }
}
const selected = ToolbarContract.$type(dartTypes.string);
class Selected extends selected {
  get preferredSize(): Size { throw new Error('size'); }
  get value() { return 'selected'; }
  set value(value: string) {}
  describe() { return this.value; }
  build(context: BuildContext) { return Text(this.value); }
}
const accepted: PreferredSizeWidget = new Toolbar(null as never);
const inherited: PreferredSizeWidget = new Caption(null as never);
declare const nested: NestedToolbarContract<string>;
const genericParent: ToolbarContract<DartList<string>> = nested;
// @ts-expect-error Missing interface getter and Widget build.
class Missing extends PreferredSizeWidget {}
''',
    );
  });
  test(
    'native Text subclass emits a callable and constructible proxy',
    () async {
      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      final module = await parser.parse(
        FlaxCodegenBindingConfig(
          'native_proxy',
          Uri.file(
            p.join(
              Directory.current.path,
              'test/fixtures/plugin/native_widget_proxies.dart',
            ),
          ).toString(),
          '@example/native-proxy',
          'unused.dart',
          'unused.ts',
          const {
            'BuildContext': FlaxCodegenClassSelection(
              {},
              kind: 'context',
              getters: ['mounted'],
            ),
            'NativeLabel': FlaxCodegenClassSelection(
              {
                '': ['data'],
              },
              proxy: 'extends',
              jsName: 'MakeNativeLabel',
              instanceMethods: {
                'build': ['context'],
              },
            ),
            'PreferredSizeWidget': FlaxCodegenClassSelection(
              {},
              kind: 'widgetInterface',
              getters: ['preferredSize'],
            ),
            'NativeToolbar': FlaxCodegenClassSelection(
              {
                '': ['data'],
              },
              proxy: 'extends',
              jsName: 'Symbol',
              widgetInterfaces: ['PreferredSizeWidget'],
            ),
          },
        ),
      );
      final emitter = FlaxCodegenBindingEmitter([module]);
      expect(
        emitter.dart(module),
        contains('extends api.NativeLabel with FlaxWidgetProxy'),
      );
      await compileFixture(
        root,
        emitter,
        module,
        consumerSource: '''
import {NativeLabel, MakeNativeLabel, NativeToolbar, Symbol, type PreferredSizeWidget, type BuildContext} from './plugin.js';
const factory = NativeLabel('factory');
const aliasFactory = MakeNativeLabel('alias factory');
class AliasTitle extends MakeNativeLabel {}
const aliasTitle = new AliasTitle('alias native');
class Title extends NativeLabel {
  constructor(value: string) { super('Title: ' + value); }
  override build(context: BuildContext) { return super.build(context); }
}
const title = new Title('native');
class Toolbar extends NativeToolbar {}
const toolbar: PreferredSizeWidget = new Toolbar('native');
const aliasToolbar: PreferredSizeWidget = new Symbol('native alias');
const unknown: unknown = aliasToolbar;
if (unknown instanceof Symbol) {
  const narrowed: PreferredSizeWidget = unknown;
  // @ts-expect-error The alias guard must not widen the native Widget to any.
  unknown.unselectedField;
}
''',
      );
    },
  );
  test('native constructors retain named and generic signatures', () async {
    final parser = FlaxCodegenBindingParser(root);
    addTearDown(parser.dispose);
    final module = await parser.parse(
      FlaxCodegenBindingConfig(
        'native_constructors',
        Uri.file(
          p.join(
            Directory.current.path,
            'test/fixtures/plugin/native_widget_proxies.dart',
          ),
        ).toString(),
        '@example/native-constructors',
        'unused.dart',
        'unused.ts',
        const {
          'NamedLabel': FlaxCodegenClassSelection({
            'named': ['data'],
          }, proxy: 'extends'),
          'GenericLabel': FlaxCodegenClassSelection(
            {
              '': ['value'],
            },
            proxy: 'extends',
            typeArguments: ['String'],
            getters: ['value'],
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
import {NamedLabel, GenericLabel} from './plugin.js';
NamedLabel.named('descriptor');
class Named extends NamedLabel { constructor() { super('native'); } }
const generic = new GenericLabel('native');
const value: string = generic.value;
class Generic extends GenericLabel {}
new Generic('native');
// @ts-expect-error Generic constructor arguments retain their type.
new GenericLabel(3);
// @ts-expect-error Named-only constructors do not create a default factory.
NamedLabel('invalid');
''',
    );
  });
  test(
    'concrete Widgets share conversion across native lifecycle categories',
    () async {
      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      final module = await parser.parse(
        FlaxCodegenBindingConfig(
          'native_widgets',
          Uri.file(
            p.join(
              Directory.current.path,
              'test/fixtures/plugin/native_widget_proxies.dart',
            ),
          ).toString(),
          '@example/native-widgets',
          'unused.dart',
          'unused.ts',
          const {
            'Text': FlaxCodegenClassSelection({
              '': ['data'],
            }),
            'NativeCounter': FlaxCodegenClassSelection({'': []}),
            'NativeBox': FlaxCodegenClassSelection({'': []}),
            'NativeDependency': FlaxCodegenClassSelection({
              '': ['child'],
            }),
            'NativeWidgetCalls': FlaxCodegenClassSelection(
              {'': []},
              kind: 'object',
              instanceMethods: {
                'text': ['callback'],
                'counter': ['callback'],
                'box': ['callback'],
                'dependency': ['callback'],
              },
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
import {Text, NativeCounter, NativeBox, NativeDependency, NativeWidgetCalls} from './plugin.js';
const calls = NativeWidgetCalls();
calls.text(() => Text('native'));
calls.counter(() => NativeCounter());
calls.box(() => NativeBox());
calls.dependency(() => NativeDependency({child: Text('child')}));
// @ts-expect-error The concrete Widget type is checked.
calls.text(() => NativeBox());
''',
      );
    },
  );
}
