import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

void main() {
  test(
    'State variant overlays reuse Core without claiming its binding',
    () async {
      final root = p.normalize(p.join(Directory.current.path, '../..'));
      final coreParser = FlaxCodegenBindingParser(root);
      addTearDown(coreParser.dispose);
      final config = FlaxCodegenBindingConfig.read(
        p.join(root, 'packages/flax/bindings/components.yaml'),
      );
      await coreParser.prepare([config]);
      final core = await coreParser.parse(config);
      final provider = FlaxCodegenModuleModel(
        name: core.name,
        moduleId: 'flax.core/components',
        library: core.library,
        jsPackage: core.jsPackage,
        dartOutput: core.dartOutput,
        tsOutput: core.tsOutput,
        classes: core.classes,
        types: core.types,
      );
      final overlay = FlaxCodegenBindingConfig.fromMap({
        'name': 'variants',
        'library': 'package:flutter/widgets.dart',
        'jsPackage': '@example/variants',
        'dartOutput': 'unused.dart',
        'tsOutput': 'unused.ts',
        'classes': {
          'State': {
            'proxyVariants': {
              'PluginTickerState': {
                'mixins': ['SingleTickerProviderStateMixin'],
              },
            },
          },
        },
      });
      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      await parser.prepare([overlay]);
      parser.prepareModules([provider]);
      final result = await parser.parse(overlay);
      expect(result.classes.where((type) => type.name == 'State'), isEmpty);
      expect(result.stateVariants.single.name, 'PluginTickerState');

      final explicitParser = FlaxCodegenBindingParser(root);
      addTearDown(explicitParser.dispose);
      await explicitParser.prepare([config]);
      expect(
        () => explicitParser.prepareModules([provider]),
        throwsA(
          isA<StateError>().having(
            (error) => error.message,
            'message',
            contains('Core bindings cannot be republished'),
          ),
        ),
      );
    },
  );
}
