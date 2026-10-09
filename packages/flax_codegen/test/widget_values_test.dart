import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:flax_codegen/src/manifest_codec.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import '../../flax/test/fixtures/repeated_selection.dart';
import 'generator_test.dart' show compileFixture;

void main() {
  test('Widget aggregates and borrowed Context results select, serialize and compile', () async {
    final root = p.normalize(p.join(Directory.current.path, '../..'));
    final coreParser = FlaxCodegenBindingParser(root);
    addTearDown(coreParser.dispose);
    final parsedCore = await coreParser.parse(
      FlaxCodegenBindingConfig.read(
        p.join(root, 'packages/flax/bindings/config.yaml'),
      ),
    );
    final core = FlaxCodegenModuleModel(
      name: parsedCore.name,
      moduleId: 'flax.core/flutter',
      library: parsedCore.library,
      jsPackage: parsedCore.jsPackage,
      dartOutput: parsedCore.dartOutput,
      tsOutput: parsedCore.tsOutput,
      classes: parsedCore.classes,
      types: parsedCore.types,
      typeLibraries: parsedCore.typeLibraries,
      functions: parsedCore.functions,
      extensions: parsedCore.extensions,
      snapshots: parsedCore.snapshots,
      typedefs: parsedCore.typedefs,
      topLevel: parsedCore.topLevel,
      publicLibraries: parsedCore.publicLibraries,
      requiredCapabilities: parsedCore.requiredCapabilities,
      internalTypeNames: parsedCore.internalTypeNames,
      stateVariants: parsedCore.stateVariants,
    );
    final parser = FlaxCodegenBindingParser(root);
    addTearDown(parser.dispose);
    parser.prepareModules([core]);
    FlaxCodegenBindingConfig config(
      Map<String, FlaxCodegenClassSelection> classes,
    ) => FlaxCodegenBindingConfig(
      'widget_values',
      Uri.file(p.join(root, 'packages/flax/test/fixtures/widget_values.dart'))
          .toString(),
      '@test/widget-values',
      'unused.dart',
      'unused.ts',
      classes,
      functions: const {
        'echoWidgetContext': FlaxCodegenFunctionSelection(['value']),
      },
    );
    final explicit = await parser.parse(
      config({
        'WidgetValues': repeatedSelection['WidgetValues']!,
        'ContextCallbacks': repeatedSelection['ContextCallbacks']!,
      }),
    );
    final autoParser = FlaxCodegenBindingParser(root);
    addTearDown(autoParser.dispose);
    autoParser.prepareModules([core]);
    final proposal = await autoParser.proposeLibrary(config(const {}));
    final selected = proposal.config.classes['WidgetValues']!;
    expect(selected.getters, contains('current'));
    expect(
      selected.instanceMethods.keys,
      containsAll(
        explicit.classes
            .firstWhere((type) => type.name == 'WidgetValues')
            .methods
            .where((method) => method.instance)
            .map((method) => method.name),
      ),
    );
    expect(
      proposal.config.classes['ContextCallbacks']!.instanceMethods.keys,
      containsAll(repeatedSelection['ContextCallbacks']!.instanceMethods.keys),
    );
    expect(
      proposal.config.classes['ContextCallbacks']!.instanceMethods,
      contains('stream'),
    );
    expect(
      proposal.skips.where(
        (skip) => skip.target == 'ContextCallbacks.stream.callback',
      ),
      isEmpty,
    );
    await expectLater(
      parser.parse(
        config({
          'ContextCallbacks': const FlaxCodegenClassSelection(
            {'': []},
            kind: 'object',
            instanceMethods: {
              'stream': ['callback'],
            },
          ),
        }),
      ),
      completes,
    );
    expect(proposal.config.functions, contains('echoWidgetContext'));
    final automatic = await autoParser.parse(proposal.config);
    expect(
      automatic.classes.any((type) => type.name == 'BuildContext'),
      isFalse,
    );
    for (final method in explicit.classes.expand((type) => type.methods)) {
      final encoded = FlaxCodegenManifestCodec.encodeTypeRef(method.result);
      final diagnostics = FlaxCodegenManifestDiagnostics('widget-values');
      final decoded = FlaxCodegenManifestCodec.decodeTypeRef(
        encoded,
        diagnostics,
        r'$/type',
      );
      expect(diagnostics.items, isEmpty);
      expect(FlaxCodegenManifestCodec.encodeTypeRef(decoded!), encoded);
    }
    await compileFixture(
      root,
      FlaxCodegenBindingEmitter([core, explicit]),
      explicit,
      consumerSource: '''
import { WidgetValues, ContextCallbacks, echoWidgetContext } from './plugin.js';
import type { BuildContext } from '@flax/flutter/widgets';
const values = WidgetValues();
values.keepFuture(async () => []);
values.keepNullable(() => [null]);
values.keepSet(() => new Set());
values.keepMap(() => new Map([['empty', null]]));
values.keepStream(() => { throw new Error('unused'); });
values.keepFutureOr(() => null);
values.keepIterable(() => []);
values.keepIterable(() => new Set());
values.keepIterable(() => values.nativeList);
values.keepIterable(() => values.nativeSet);
values.keepNullableIterable(() => null);
values.keepNullableIterable(() => [null]);
values.keepIterableRecord(() => ({ children: new Set([null]) }));
values.keepConcreteIterable(() => [null]);
values.keepInterfaceIterable(() => new Set([null]));
values.keepSuggestions(async (_context, _text) => []);
values.keepIterableStream(() => { throw new Error('unused'); });
values.keepIterableRecords(() => values.nativeIterableRecords);
values.firstFromIterable(children => children.toArray()[0]!);
// @ts-expect-error Widget Iterable callback elements retain their type.
values.keepIterable(() => [42]);
// @ts-expect-error Finite Widget callbacks do not accept custom JS iterators.
values.keepIterable(function* () { yield values.nativeList.get(0); });
const context = values.current;
values.echo(context);
WidgetValues.echoStatic(context);
echoWidgetContext(context);
// @ts-expect-error Context results remain typed borrowed references.
values.echo(1);
// @ts-expect-error Widget elements remain typed even when nullable.
values.keepNullable(() => [1]);
// @ts-expect-error A Record callback must supply every required field.
values.keepRecord(() => ({ siblings: [] }));
const callbacks = ContextCallbacks();
declare const mounted: BuildContext;
callbacks.choose(() => mounted);
callbacks.chooseMany(contexts => contexts.get(0), mounted);
callbacks.nullable(() => null);
callbacks.record(() => ({ context: mounted, siblings: [mounted, null] }));
callbacks.future(async () => mounted);
callbacks.nullableFuture(async () => null);
callbacks.requiredFutureOr(() => mounted);
callbacks.futureOr(() => mounted);
callbacks.futureOr(() => null);
callbacks.futureOr(async () => null);
callbacks.nullableValue(() => null);
callbacks.futureRecord(async () => ({ context: mounted, siblings: [] }));
callbacks.returned(mounted)();
callbacks.returnedFuture(mounted)();
// @ts-expect-error Context callbacks cannot manufacture an Element.
callbacks.choose(() => ({ mounted: true }));
// @ts-expect-error A non-nullable Context callback cannot return null.
callbacks.choose(() => null);
// @ts-expect-error A Future Context callback retains its result type.
callbacks.future(async () => 42);
// @ts-expect-error A nullable Future item does not make the Future nullable.
callbacks.nullableFuture(() => null);
// @ts-expect-error A required FutureOr Context cannot return null.
callbacks.requiredFutureOr(() => null);
''',
    );
  }, timeout: const Timeout(Duration(minutes: 3)));
}
