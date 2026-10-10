import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import '../../flax/test/fixtures/instance_types_selection.dart';
import 'generator_test.dart' show compileFixture;

void main() {
  final root = p.normalize(p.join(Directory.current.path, '../..'));

  test('instance-check helpers do not shadow public binding names', () async {
    final library = Uri.file(
      p.join(
        root,
        'packages/flax_codegen/test/fixtures/plugin/instance_type_names.dart',
      ),
    ).toString();
    final parser = FlaxCodegenBindingParser(root);
    addTearDown(parser.dispose);
    for (final split in [false, true]) {
      final config = FlaxCodegenBindingConfig(
        'names',
        library,
        '@example/names',
        'unused.dart',
        'unused.ts',
        const {
          'FlaxInstanceType': FlaxCodegenClassSelection({
            '': [],
          }, kind: 'object'),
          'AliasedConstructor': FlaxCodegenClassSelection(
            {'': []},
            kind: 'object',
            jsName: 'bindInstanceType',
          ),
        },
        publicLibraries: split
            ? {
                library: const FlaxCodegenLibrarySelection(
                  jsPackage: '@example/names/api',
                  tsOutput: 'src/api.ts',
                ),
              }
            : const {},
      );
      final module = await parser.parse(config);
      await compileFixture(
        root,
        FlaxCodegenBindingEmitter([module]),
        module,
        consumerSource:
            '''
import {FlaxInstanceType, AliasedConstructor, bindInstanceType} from '${split ? '@example/names/api' : './plugin.js'}';
const first: FlaxInstanceType = FlaxInstanceType();
const second: AliasedConstructor = bindInstanceType();
const candidate: unknown = second;
if (candidate instanceof bindInstanceType) {
  const narrowed: AliasedConstructor = candidate;
  // @ts-expect-error The guard must retain a nominal type rather than any.
  candidate.unselectedField;
}
''',
      );
    }
  });

  test(
    'sealed factories retain legal Dart objects and narrow public child views',
    () async {
      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      final config = FlaxCodegenBindingConfig(
        'instances',
        Uri.file(p.join(root, 'packages/flax/test/fixtures/interop.dart'))
            .toString(),
        '@example/instances',
        'unused.dart',
        'unused.ts',
        instanceTypesSelection,
      );
      await parser.prepare([config]);
      final module = await parser.parse(config);
      final emitter = FlaxCodegenBindingEmitter([module]);
      final parent = module.classes.singleWhere(
        (type) => type.name == 'CodegenResult',
      );
      final child = module.classes.singleWhere(
        (type) => type.name == 'CodegenSuccess',
      );
      expect(parent.proxy, isNull);
      expect(child.supertypes, contains(parent.id));
      expect(
        child.getters.map((getter) => getter.name),
        containsAll(['value', 'status', 'tag']),
      );
      await compileFixture(
        root,
        emitter,
        module,
        consumerSource: '''
import {CodegenResult, CodegenSuccess, CodegenFailure, CodegenReadable, CodegenTagged, CodegenResultConsumer} from './plugin.js';
const result: CodegenResult = CodegenResult.success(7);
if (result instanceof CodegenSuccess) {
  const value: number = result.value;
  const label: string = result.describe();
  const read: number = result.read();
  // @ts-expect-error A callable Dart factory guard must not widen to any.
  const wrong: string = result.value;
} else if (result instanceof CodegenFailure) {
  const message: string = result.message;
} else {
  const fallback: CodegenResult = result;
  // @ts-expect-error Private or unselected children keep this branch open.
  const exhaustive: never = result;
}
const unknown: unknown = result;
if (unknown instanceof CodegenReadable) CodegenResultConsumer().read(unknown);
if (unknown instanceof CodegenTagged) CodegenResultConsumer().tag(unknown);
// @ts-expect-error A sealed parent is not directly constructible.
CodegenResult();
// @ts-expect-error Binding view tokens are not JS subclass constructors.
new CodegenSuccess(3);
// @ts-expect-error Type-only Dart contracts are not constructible.
new CodegenReadable();
// @ts-expect-error Dart factory exports cannot be subclassed in JS.
class Illegal extends CodegenResult {}
''',
      );
    },
  );
}
