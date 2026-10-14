import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

void main() {
  var root = Directory.current;
  while (!Directory(p.join(root.path, 'packages/flax_codegen')).existsSync()) {
    root = root.parent;
  }
  final uri = File(
    p.join(root.path, 'packages/flax/test/fixtures/complex_bounds.dart'),
  ).uri.toString();

  test(
    'automatic complex bounds keep typed entries without inventing defaults',
    () async {
      final parser = FlaxCodegenBindingParser(root.path);
      addTearDown(parser.dispose);
      final proposal = await parser.proposeLibrary(
        FlaxCodegenBindingConfig(
          'complex_bounds',
          uri,
          '@example/complex-bounds',
          'unused.dart',
          'unused.ts',
          const {},
        ),
      );
      expect(proposal.config.classes, contains('RecursiveBox'));
      expect(
        proposal.config.classes['ComplexMethods']!.instanceMethods.keys,
        containsAll(['recursive', 'later', 'narrowed']),
      );
      expect(proposal.config.extensions, contains('RecursiveValues'));
      expect(
        proposal.config.functions.keys,
        containsAll([
          'mutual',
          'recursiveTop',
          'visitRecursive',
          'returnRecursive',
          'nestedRecursive',
        ]),
      );
      final module = await parser.parse(proposal.config);
      expect(
        module.classes
            .singleWhere((c) => c.name == 'RecursiveFactory')
            .methods
            .singleWhere((m) => m.name == 'create')
            .deferredFactory,
        isFalse,
      );
      expect(
        FlaxCodegenBindingEmitter([module]).dart(module),
        contains(
          'bool _isRecursiveBox(Object value) => value is api.RecursiveBox;',
        ),
      );
      final methods = module.classes.singleWhere(
        (c) => c.name == 'ComplexMethods',
      );
      expect(
        methods.methods
            .singleWhere((m) => m.name == 'recursive')
            .typeParameters
            .single
            .defaultType,
        isNull,
      );
      await compileFixture(
        root.path,
        FlaxCodegenBindingEmitter([module]),
        module,
        consumerSource: '''
import { ComplexMethods, ComparableValue, RecursiveBox, RecursiveFactory, RecursiveValues, recursiveTop,
  mutual, Left, Right, returnRecursive, nestedRecursive } from './plugin.js';
import { dartType, dartTypes } from '@flax/core/bindings';
import type { DartList } from '@flax/core/bindings';
declare const owner: ComplexMethods;
const values: DartList<string> = dartType(owner, 'recursive', dartTypes.string)('value');
const text: string = dartType(recursiveTop, dartTypes.string)('value');
const factoryValue: RecursiveFactory<string> = dartType(RecursiveFactory.create, dartTypes.string)(() => 'factory');
const value: ComparableValue = RecursiveBox.\$type(ComparableValue).prototype.value;
declare const left: Left;
declare const right: Right;
const pair: string = dartType(mutual, Left, Right)(left, right);
const callback = returnRecursive();
const selected = dartType(callback, dartTypes.string);
const result: string = selected('callback');
const nested = dartType(nestedRecursive(), dartTypes.string)('outer');
const inner: string = dartType(nested, dartTypes.string)('inner');
// @ts-expect-error the nested callback captures the outer String bound
nested(2);
const extension = RecursiveValues(['extension']);
const first: string = dartType(extension, 'firstValue', dartTypes.string)();
const chosen: string = dartType(extension, 'choose', dartTypes.string, dartTypes.string)('chosen');
// @ts-expect-error the actual selected callback takes String
selected(2);
// @ts-expect-error bool does not satisfy Comparable<bool>
dartType(callback, dartTypes.bool);
// @ts-expect-error mutually recursive bounds are checked together
dartType(mutual, Left, Left);
''',
      );
    },
  );
}
