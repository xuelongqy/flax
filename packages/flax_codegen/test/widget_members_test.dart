import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

void main() {
  final root = p.normalize(p.join(Directory.current.path, '../..'));
  final config = FlaxCodegenBindingConfig(
    'widget_members',
    Uri.file(p.join(root, 'packages/flax/test/fixtures/widget_members.dart'))
        .toString(),
    '@test/widget-members',
    'unused.dart',
    'unused.ts',
    const {},
  );

  test(
    'automatic Widget members use real references without subclass proxies',
    () async {
      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      final coreConfig = FlaxCodegenBindingConfig.read(
        p.join(root, 'packages/flax/bindings/config.yaml'),
      );
      await parser.prepare([config, coreConfig]);
      final core = await parser.parse(coreConfig);
      parser.prepareModules([core]);
      final proposal = await parser.proposeLibrary(config);
      for (final name in [
        'ComputedWidget',
        'FinalComputedWidget',
        'ReturnedComputedWidget',
      ]) {
        final selection = proposal.config.classes[name]!;
        expect(selection.proxy, isNull, reason: name);
        expect(
          selection.getters,
          containsAll(['label', 'uppercase']),
          reason: name,
        );
        expect(selection.instanceMethods, contains('textLength'), reason: name);
        expect(selection.setters, isEmpty, reason: name);
        expect(selection.instanceMethods, isNot(contains('protectedLabel')));
      }
      expect(
        proposal.config.classes['ComputedWidget']!.constructors.keys,
        containsAll(['', 'named']),
      );
      expect(
        proposal.config.classes['ReturnedComputedWidget']!.constructors,
        isEmpty,
      );
      final module = await parser.parse(proposal.config);
      final emitter = FlaxCodegenBindingEmitter([core, module]);
      final dart = emitter.dart(module);
      expect(dart, isNot(contains('with FlaxWidgetProxy')));
      expect(dart, contains('FlaxObjectBinding('));
      expect(dart, isNot(contains('extends FlaxWidgetHost')));
      await compileFixture(
        root,
        emitter,
        module,
        consumerSource: '''
import {ComputedWidget, FinalComputedWidget, createReturnedComputedWidget,
  WidgetMemberBase, GenericComputedWidget, createGenericComputedWidget,
  DerivedGenericWidget, AggregateComputedWidget} from './plugin.js';
import {Column} from '@flax/flutter/widgets';
import {type Widget} from '@flax/core/bindings';
const widget = ComputedWidget('hello');
const parent: WidgetMemberBase = widget;
const parentResult: WidgetMemberBase = widget.asBase();
const upper: string = widget.uppercase;
const length: number = widget.textLength();
const repeated: number = widget.repeatLength(2, {extra: 3});
const callback: number = widget.callWith(value => value + 1);
const later: Promise<string> = widget.later();
const named: Widget = ComputedWidget.named('named');
const finalLength: number = FinalComputedWidget('final').textLength();
const returned: string = createReturnedComputedWidget().uppercase;
const generic: string = createGenericComputedWidget().value;
const echoed: string = GenericComputedWidget<string>('typed').echo('next');
const genericParent: GenericComputedWidget<string> = DerivedGenericWidget('child');
const inherited: string = genericParent.echo('next');
const aggregate = AggregateComputedWidget(['list']);
const aggregateItem: string = aggregate.items.get(0);
const echoItem: string = aggregate.echo(['next']).get(0);
Column({children: [widget, named]});
// @ts-expect-error Native Widget constructors take fixed typed arguments.
ComputedWidget(() => 'signal');
// @ts-expect-error A native factory is not a JS subclass constructor.
new ComputedWidget('invalid');
// @ts-expect-error The method keeps its Dart input type.
widget.repeatLength('invalid');
// @ts-expect-error Protected methods stay excluded.
widget.protectedLabel();
// @ts-expect-error Widget instance setters are not selected, including inherited ones.
widget.requestedValue = 1;
''',
      );
    },
  );
}
