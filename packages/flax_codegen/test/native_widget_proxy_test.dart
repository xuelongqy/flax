import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

void main() {
  final root = p.normalize(p.join(Directory.current.path, '../..'));
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
import {NativeLabel, NativeToolbar, type PreferredSizeWidget, type BuildContext} from './plugin.js';
const factory = NativeLabel('factory');
class Title extends NativeLabel {
  constructor(value: string) { super('Title: ' + value); }
  override build(context: BuildContext) { return super.build(context); }
}
const title = new Title('native');
class Toolbar extends NativeToolbar {}
const toolbar: PreferredSizeWidget = new Toolbar('native');
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
