import 'package:flax_codegen/flax_codegen.dart';
import 'package:flax_codegen/src/module_id_rewrite.dart';
import 'package:test/test.dart';

void main() {
  test('rewrites nested Core identities without Manifest JSON round-trip', () {
    const raw = 'package:flutter/src/widgets/framework.dart::BuildContext';
    const wire = 'flax.core/flutter#type:BuildContext';
    final parsed = FlaxCodegenModuleModel(
      name: 'repeated',
      library: 'file:///tmp/repeated.dart',
      jsPackage: '@test/repeated',
      dartOutput: 'unused.dart',
      tsOutput: 'unused.ts',
      typeLibraries: {'ChildConsumer': 'file:///tmp/repeated.dart'},
      classes: [
        FlaxCodegenClassModel(
          name: 'ChildConsumer',
          id: 'file:///tmp/repeated.dart::ChildConsumer',
          kind: 'widget',
          constructors: [
            FlaxCodegenConstructorModel('', [
              FlaxCodegenParameterModel(
                name: 'render',
                type: FlaxCodegenTypeRef(
                  'callback',
                  parameters: [
                    FlaxCodegenParameterModel(
                      name: 'p0',
                      type: const FlaxCodegenTypeRef('context', id: raw),
                      required: true,
                      positional: true,
                      defaultCode: 'null',
                    ),
                  ],
                  result: const FlaxCodegenTypeRef('widget'),
                ),
                required: true,
                positional: false,
                defaultCode: 'null',
              ),
            ]),
          ],
          supertypes: const ['dart:core::Object'],
        ),
      ],
      types: const [],
    );

    final frozen = flaxCodegenRewriteModuleIds(parsed, {raw: wire});
    expect(frozen.typeLibraries['ChildConsumer'], 'file:///tmp/repeated.dart');
    expect(
      frozen.classes.single.id,
      'file:///tmp/repeated.dart::ChildConsumer',
    );
    expect(
      frozen
          .classes
          .single
          .constructors
          .single
          .parameters
          .single
          .type
          .parameters
          .single
          .type
          .id,
      wire,
    );
  });
}
