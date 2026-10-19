import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

void main() {
  final root = p.normalize(p.join(Directory.current.path, '../..'));

  FlaxCodegenBindingConfig fixture(String filename) => FlaxCodegenBindingConfig(
    'completion',
    Uri.file(
      p.join(root, 'packages/flax_codegen/test/fixtures/capability/$filename'),
    ).toString(),
    '@example/completion',
    'unused.dart',
    'unused.ts',
    const {},
  );

  test('abstract omission and invalid observed generics preserve callable declarations', () async {
    final parser = FlaxCodegenBindingParser(root);
    addTearDown(parser.dispose);
    final proposal = await parser.proposeLibrary(
      fixture('sdk_completion.dart'),
    );
    final skips = proposal.skips
        .map((s) => '${s.target}: ${s.reason}')
        .join('\n');
    expect(
      proposal.config.classes['OptionalPainter']?.instanceMethods,
      contains('paint'),
      reason: skips,
    );
    expect(
      proposal.config.classes['ActionLike']?.constructors,
      contains(''),
      reason: skips,
    );
    expect(
      proposal.config.classes['SelfBound']?.constructors,
      contains(''),
      reason: skips,
    );
    expect(
      proposal.config.classes['WidgetMixin']?.kind,
      'object',
      reason: skips,
    );
    final module = await parser.parse(proposal.config);
    final painter = module.classes.singleWhere(
      (c) => c.name == 'OptionalPainter',
    );
    expect(
      painter.methods
          .singleWhere((m) => m.name == 'paint')
          .parameters
          .single
          .omitWhenAbsent,
      isTrue,
    );
    expect(
      module.classes
          .singleWhere((c) => c.name == 'SelfBound')
          .requiresTypeArguments,
      isTrue,
    );
    await compileFixture(root, FlaxCodegenBindingEmitter([module]), module);
  });

  test('Context calls use typed instance methods and retain component ancestor queries', () async {
    final parser = FlaxCodegenBindingParser(root);
    addTearDown(parser.dispose);
    final config = FlaxCodegenBindingConfig(
      'context_calls',
      'package:flutter/widgets.dart',
      '@example/context',
      'unused.dart',
      'unused.ts',
      const {
        'BuildContext': FlaxCodegenClassSelection(
          {},
          kind: 'context',
          getters: ['mounted'],
          instanceMethods: {
            'findRenderObject': [],
            'visitAncestorElements': ['visitor'],
            'findAncestorWidgetOfExactType': [],
          },
        ),
        'Widget': FlaxCodegenClassSelection({}, kind: 'object'),
        'Element': FlaxCodegenClassSelection({}, kind: 'object'),
        'RenderObject': FlaxCodegenClassSelection({}, kind: 'object'),
      },
    );
    await parser.prepare([config]);
    final module = await parser.parse(config);
    expect(module.requiredCapabilities, contains('context-instance-methods'));
    await compileFixture(
      root,
      FlaxCodegenBindingEmitter([module]),
      module,
      consumerSource: '''
import {type BuildContext, type Widget} from './plugin.js';
declare const context: BuildContext;
context.findRenderObject();
context.visitAncestorElements(element => true);
const native: Widget | null = context.findAncestorWidgetOfExactType();
''',
    );
    final imported = FlaxCodegenBindingConfig(
      'imported_widget',
      fixture('sdk_completion.dart').library,
      '@example/imported-widget',
      'unused.dart',
      'unused.ts',
      const {},
      typedefs: const ['ImportedWidgetBuilder'],
    );
    await parser.prepare([config, imported]);
    final crossLibrary = await parser.parse(imported);
    expect(crossLibrary.typedefs.single.target.result!.kind, 'widget');
    expect(
      crossLibrary.typeLibraries['Widget'],
      'package:flutter/widgets.dart',
    );
    await compileFixture(
      root,
      FlaxCodegenBindingEmitter([module, crossLibrary]),
      crossLibrary,
    );
  });

  test('non-virtual members stay callable without generating proxy overrides', () async {
    final parser = FlaxCodegenBindingParser(root);
    addTearDown(parser.dispose);
    final config = FlaxCodegenBindingConfig(
      'native_members',
      Uri.file(
        p.join(
          root,
          'packages/flax_codegen/test/fixtures/capability/native_members.dart',
        ),
      ).toString(),
      '@example/native-members',
      'unused.dart',
      'unused.ts',
      const {},
    );
    final proposal = await parser.proposeLibrary(config);
    for (final name in ['NativeMemberBase', 'NativeMemberChild']) {
      final selection = proposal.config.classes[name]!;
      expect(selection.proxy, 'extends');
      expect(selection.getters, contains('nativeValue'));
      expect(selection.setters, contains('nativeValue'));
      expect(selection.instanceMethods, contains('nativeCall'));
    }
    final module = await parser.parse(proposal.config);
    for (final type in module.classes) {
      expect(type.methods.map((m) => m.name), contains('nativeCall'));
      expect(
        type.proxy!.methods.map((m) => m.name),
        isNot(contains('nativeCall')),
      );
      expect(
        type.proxy!.getters.map((m) => m.name),
        isNot(contains('nativeValue')),
      );
      expect(
        type.proxy!.setters.map((m) => m.name),
        isNot(contains('nativeValue')),
      );
      expect(type.proxy!.methods.map((m) => m.name), contains('transform'));
    }
    await compileFixture(
      root,
      FlaxCodegenBindingEmitter([module]),
      module,
      consumerSource: '''
import { NativeMemberBase, NativeMemberChild } from './plugin.js';
class Child extends NativeMemberChild {
  transform(value: number): number { return super.transform(value) + 2; }
}
declare const value: Child;
value.nativeValue = 3;
const result: number = value.nativeCall(4, {multiplier: 5});
const parent: NativeMemberBase = value;
''',
    );
  });
}
