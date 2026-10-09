import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:flax_codegen/src/manifest_codec.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import '../../flax/test/fixtures/context_streams_selection.dart';
import 'generator_test.dart' show compileFixture;

void main() {
  test(
    'Context Streams follow explicit and automatic selection and compile',
    () async {
      final root = p.normalize(p.join(Directory.current.path, '../..'));
      final source = FlaxCodegenBindingParser(root);
      addTearDown(source.dispose);
      final parsed = await source.parse(
        FlaxCodegenBindingConfig.read(
          p.join(root, 'packages/flax/bindings/config.yaml'),
        ),
      );
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
      final config = FlaxCodegenBindingConfig(
        'context_streams',
        Uri.file(
          p.join(root, 'packages/flax/test/fixtures/context_streams.dart'),
        ).toString(),
        '@test/context-streams',
        'unused.dart',
        'unused.ts',
        contextStreamsSelection,
      );
      final selected = await parser.parse(config);
      final auto = FlaxCodegenBindingParser(root);
      addTearDown(auto.dispose);
      auto.prepareModules([core]);
      final proposal = await auto.proposeLibrary(
        FlaxCodegenBindingConfig(
          config.name,
          config.library,
          config.jsPackage,
          config.dartOutput,
          config.tsOutput,
          const {},
        ),
      );
      final automatic = await auto.parse(proposal.config);
      expect(
        automatic.classes.any((type) => type.name == 'BuildContext'),
        isFalse,
      );
      expect(
        proposal.config.classes['ContextStreams']!.instanceMethods.keys,
        containsAll(
          contextStreamsSelection['ContextStreams']!.instanceMethods.keys,
        ),
      );
      for (final method in selected.classes.single.methods) {
        final encoded = FlaxCodegenManifestCodec.encodeTypeRef(method.result);
        final diagnostics = FlaxCodegenManifestDiagnostics('context-streams');
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
        FlaxCodegenBindingEmitter([core, selected]),
        selected,
        consumerSource: '''
import { ContextStreams } from './plugin.js';
import { Stream } from '@flax/dart/async';
import type { BuildContext } from '@flax/flutter/widgets';
import type { DartListInput } from '@flax/core/bindings';
declare const context: BuildContext;
const probe = ContextStreams();
probe.stream(() => Stream.fromIterable([context, null]));
probe.stream(() => probe.nativeStream(context));
probe.collect(() => Stream.value<BuildContext | null>(context));
probe.returned(context)().toList();
probe.future(async () => probe.nativeStream(context));
probe.futureOr(() => probe.nativeStream(context));
probe.futureOr(async () => probe.nativeStream(context));
probe.futures(() => Stream.fromIterable<Promise<BuildContext | null>>([Promise.resolve(context)]));
probe.futureOrEvents(() => Stream.fromIterable<BuildContext | null | Promise<BuildContext | null>>([context, null, Promise.resolve(context)]));
probe.keep(() => Stream.fromAsyncIterable({ async *[Symbol.asyncIterator]() { yield context; yield null; } }));
probe.lists(() => Stream.fromIterable<DartListInput<BuildContext | null>>([[context, null]]));
probe.records(() => Stream.fromIterable<{readonly context: BuildContext; readonly siblings: DartListInput<BuildContext | null>}>([{context, siblings: [context, null]}]));
// @ts-expect-error Context events cannot be fabricated from a shape.
probe.strict(() => Stream.fromIterable([{mounted: true}]));
// @ts-expect-error Non-nullable Context events still reject null.
probe.strict(() => Stream.fromIterable([null]));
// @ts-expect-error A Context callback must return a Dart Stream reference.
probe.stream(() => [context]);
''',
      );
    },
    timeout: const Timeout(Duration(minutes: 3)),
  );
}
