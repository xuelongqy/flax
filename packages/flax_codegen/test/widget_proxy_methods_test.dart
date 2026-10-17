import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

void main() {
  test('ordinary Widget factory proxies are discovered and compile', () async {
    final root = p.normalize(p.join(Directory.current.path, '../..'));
    final source = FlaxCodegenBindingParser(root);
    addTearDown(source.dispose);
    final coreConfig = FlaxCodegenBindingConfig.read(
      p.join(root, 'packages/flax/bindings/flax_bindings.yaml'),
    );
    final config = FlaxCodegenBindingConfig(
      'widget_factory',
      Uri.file(p.join(root, 'packages/flax/test/fixtures/widget_factory.dart'))
          .toString(),
      '@test/widget-factory',
      'unused.dart',
      'unused.ts',
      const {},
    );
    final parsed = await source.parse(coreConfig);
    final core = FlaxCodegenModuleModel(
      name: parsed.name,
      moduleId: 'flax.core/flutter',
      library: parsed.library,
      jsPackage: parsed.jsPackage,
      dartOutput: parsed.dartOutput,
      tsOutput: parsed.tsOutput,
      classes: parsed.classes,
      types: parsed.types,
      typeLibraries: parsed.typeLibraries,
      functions: parsed.functions,
      extensions: parsed.extensions,
      snapshots: parsed.snapshots,
      typedefs: parsed.typedefs,
      topLevel: parsed.topLevel,
      publicLibraries: parsed.publicLibraries,
      requiredCapabilities: parsed.requiredCapabilities,
      internalTypeNames: parsed.internalTypeNames,
      stateVariants: parsed.stateVariants,
    );
    final parser = FlaxCodegenBindingParser(root);
    addTearDown(parser.dispose);
    parser.prepareModules([core]);
    final proposal = await parser.proposeLibrary(config);
    final skips = proposal.skips
        .where(
          (skip) =>
              skip.target.startsWith('WidgetFactory') &&
              skip.target != 'WidgetFactoryInterface.',
        )
        .map((skip) => '${skip.target}: ${skip.reason}');
    expect(skips, isEmpty);
    for (final name in ['WidgetFactory', 'WidgetFactoryInterface']) {
      final selection = proposal.config.classes[name]!;
      expect(
        selection.proxy,
        name == 'WidgetFactory' ? 'extends' : 'implements',
      );
      expect(
        selection.instanceMethods.keys,
        containsAll(['create', 'createText', 'optional']),
      );
    }
    final module = await parser.parse(proposal.config);
    for (final type in module.classes.where(
      (type) => type.name.startsWith('WidgetFactory'),
    )) {
      expect(
        type.proxy!.methods.map((method) => method.result.kind),
        everyElement('widget'),
      );
    }
    await compileFixture(
      root,
      FlaxCodegenBindingEmitter([core, module]),
      module,
      consumerSource: '''import { WidgetFactory, WidgetFactoryInterface } from './plugin.js';
import { Text } from '@flax/flutter/widgets';
class Factory extends WidgetFactory {
  create() { return Text('JS factory'); }
  createText() { return super.createText(); }
  optional() { return null; }
}
WidgetFactoryInterface.implement([], {
  create: () => Text('interface factory'),
  createText: () => Text('concrete factory'),
  optional: () => null,
});
''',
    );
  }, timeout: const Timeout(Duration(minutes: 3)));
}
