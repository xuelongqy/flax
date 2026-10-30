import 'dart:convert';
import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:flax_codegen/src/manifest_codec.dart';
import 'package:test/test.dart';

void main() {
  test('SDK JSX metadata names existing arguments and stays outside bridge manifests', () {
    const module = FlaxCodegenModuleModel(
      name: 'jsx',
      library: 'package:example/widgets.dart',
      jsPackage: '@example/widgets',
      dartOutput: 'unused.dart',
      tsOutput: 'unused.ts',
      publicLibraries: [
        FlaxCodegenLibraryModel(
          library: 'package:example/widgets.dart',
          jsPackage: '@example/widgets',
          tsOutput: 'unused.ts',
          exports: ['Screen'],
        ),
      ],
      classes: [
        FlaxCodegenClassModel(
          name: 'Screen',
          id: 'package:example/widgets.dart::Screen',
          kind: 'widget',
          constructors: [
            FlaxCodegenConstructorModel('', [
              FlaxCodegenParameterModel(
                name: 'body',
                type: FlaxCodegenTypeRef('widget', nullable: true),
                required: false,
                positional: false,
                defaultCode: 'null',
              ),
            ]),
          ],
          supertypes: [],
        ),
      ],
      types: [],
      jsxContentSlots: {'Screen': 'body'},
    );
    final output = FlaxCodegenBindingEmitter([module])
        .typescriptOutputs(module)
        .values
        .join('\n');
    expect(output, contains('export declare namespace _ScreenFactory'));
    expect(output, contains('readonly slot: "body"'));
    expect(output, contains('Parameters<typeof _ScreenFactory>'));
    expect(output, isNot(contains('namespace JSX')));
    expect(
      FlaxCodegenManifestCodec.encodeModule(module).toString(),
      isNot(contains('jsxContent')),
    );
  });

  test('Widget names cannot shadow JSX utility types', () async {
    final root = Directory.current.parent.parent.path;
    final temp = Directory.systemTemp.createTempSync('flax-jsx-names-');
    addTearDown(() => temp.deleteSync(recursive: true));
    final module = FlaxCodegenModuleModel(
      name: 'names',
      library: 'package:example/widgets.dart',
      jsPackage: '@example/names',
      dartOutput: 'unused.dart',
      tsOutput: 'unused.ts',
      classes: [
        for (final name in ['Parameters', 'NonNullable', 'Omit'])
          FlaxCodegenClassModel(
            name: name,
            id: 'example::$name',
            kind: 'widget',
            constructors: [
              const FlaxCodegenConstructorModel('', [
                FlaxCodegenParameterModel(
                  name: 'child',
                  type: FlaxCodegenTypeRef('widget', nullable: true),
                  required: false,
                  positional: false,
                  defaultCode: 'null',
                ),
              ]),
            ],
            supertypes: [],
          ),
      ],
      types: [],
    );
    File(
      '${temp.path}/widgets.ts',
    ).writeAsStringSync(FlaxCodegenBindingEmitter([module]).typescript(module));
    File('${temp.path}/consumer.ts').writeAsStringSync('''
import {_ParametersFactory, _NonNullableFactory, _OmitFactory} from './widgets.js';
type Props = typeof _ParametersFactory.__flaxJsx.props;
const child: Props = {};
// @ts-expect-error A number is not a Widget.
const invalid: Props = {children: 12};
const nullable: typeof _NonNullableFactory.__flaxJsx.props = {};
const omitted: typeof _OmitFactory.__flaxJsx.props = {};
''');
    File('${temp.path}/tsconfig.json').writeAsStringSync(
      jsonEncode({
        'compilerOptions': {
          'strict': true,
          'target': 'ES2022',
          'module': 'ESNext',
          'moduleResolution': 'Bundler',
          'skipLibCheck': true,
          'noEmit': true,
          'paths': {
            '@flax/core/bindings': [
              '$root/packages/flax/js/dist/runtime/bindings.d.ts',
            ],
          },
        },
        'files': ['widgets.ts', 'consumer.ts'],
      }),
    );
    final result = await Process.run('pnpm', [
      'exec',
      'tsc',
      '-p',
      '${temp.path}/tsconfig.json',
    ], workingDirectory: root);
    expect(result.exitCode, 0, reason: '${result.stdout}\n${result.stderr}');
  });
}
