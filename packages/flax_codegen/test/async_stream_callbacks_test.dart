import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:flax_codegen/src/manifest_codec.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

void main() {
  final root = p.normalize(p.join(Directory.current.path, '../..'));
  test(
    'async stream callbacks are discovered, round-trip and compile',
    () async {
      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      final coreConfig = FlaxCodegenBindingConfig.read(
        p.join(root, 'packages/flax/bindings/config.yaml'),
      );
      final config = FlaxCodegenBindingConfig(
        'async_stream_callbacks',
        Uri.file(
          p.join(
            root,
            'packages/flax/test/fixtures/async_stream_callbacks.dart',
          ),
        ).toString(),
        '@test/async-stream-callbacks',
        'unused.dart',
        'unused.ts',
        const {},
      );
      await parser.prepare([coreConfig]);
      final proposal = await parser.proposeLibrary(config);
      expect(proposal.skips, isEmpty);
      final methods =
          proposal.config.classes['AsyncStreamCallbacks']!.instanceMethods;
      expect(
        methods.keys,
        containsAll([
          'echoFutureStream',
          'echoFutureOrStream',
          'echoStreamFuture',
          'echoStreamFutureOr',
          'echoNullable',
          'echoList',
          'echoMap',
          'echoRecord',
        ]),
      );
      final module = await parser.parse(proposal.config);
      for (final method in module.classes.single.methods) {
        final encoded = FlaxCodegenManifestCodec.encodeTypeRef(method.result);
        final diagnostics = FlaxCodegenManifestDiagnostics(
          'async-stream-callbacks',
        );
        final decoded = FlaxCodegenManifestCodec.decodeTypeRef(
          encoded,
          diagnostics,
          r'$/type',
        );
        expect(diagnostics.items, isEmpty);
        expect(FlaxCodegenManifestCodec.encodeTypeRef(decoded!), encoded);
      }
      final explicit = FlaxCodegenBindingConfig(
        config.name,
        config.library,
        config.jsPackage,
        config.dartOutput,
        config.tsOutput,
        {
          'AsyncStreamCallbacks': FlaxCodegenClassSelection(
            const {'': []},
            kind: 'object',
            instanceMethods: methods,
          ),
        },
      );
      final selected = await parser.parse(explicit);
      expect(selected.classes.single.methods.length, methods.length);
      final core = await parser.parse(coreConfig);
      await compileFixture(
        root,
        FlaxCodegenBindingEmitter([core, module]),
        module,
        consumerSource: '''import { AsyncStreamCallbacks } from './plugin.js';
const callbacks = AsyncStreamCallbacks();
callbacks.echoFutureStream(value => value);
callbacks.echoFutureOrStream(value => value);
callbacks.echoStreamFuture(value => value);
callbacks.echoStreamFutureOr(value => value);
callbacks.echoNullable(value => value);
callbacks.echoList(value => value);
callbacks.echoMap(value => value);
callbacks.echoRecord(value => value);
callbacks.echoStreamFutureList(value => value);
callbacks.echoStreamFutureMap(value => value);
callbacks.echoStreamFutureSet(value => value);
callbacks.echoStreamFutureIterable(value => value);
callbacks.echoStreamFutureRecord(value => value);
callbacks.echoStreamFutureVoid(value => value);
// @ts-expect-error A stream callback result cannot be a scalar.
callbacks.echoStreamFuture(() => 1);
// @ts-expect-error A Future callback cannot return a bare Stream.
callbacks.echoFutureStream(value => callbacks.futureOrStream(value));
''',
      );
    },
    timeout: const Timeout(Duration(minutes: 3)),
  );

  for (final asyncKind in ['future', 'futureOr']) {
    for (final type in ['context', 'state', 'route', 'page']) {
      test('$asyncKind/stream/$type retains the async lifetime boundary', () {
        final callback = FlaxCodegenTypeRef(
          'callback',
          result: FlaxCodegenTypeRef(
            asyncKind,
            item: FlaxCodegenTypeRef('stream', item: FlaxCodegenTypeRef(type)),
          ),
        );
        for (final input in [true, false]) {
          expect(
            () => callback.validateCallbacks('fixture', input: input),
            type == 'context'
                ? returnsNormally
                : throwsA(
                    isA<StateError>().having(
                      (error) => error.message,
                      'path',
                      contains('fixture result item item'),
                    ),
                  ),
          );
        }
      });
    }
  }
  test('nested Streams remain outside this callback expansion', () {
    const callback = FlaxCodegenTypeRef(
      'callback',
      result: FlaxCodegenTypeRef(
        'stream',
        item: FlaxCodegenTypeRef(
          'list',
          item: FlaxCodegenTypeRef('stream', item: FlaxCodegenTypeRef('int')),
        ),
      ),
    );
    expect(
      () => callback.validateCallbacks('fixture', input: true),
      throwsStateError,
    );
  });
  test('Context inside a Stream aggregate uses ordinary conversion', () {
    const callback = FlaxCodegenTypeRef(
      'callback',
      result: FlaxCodegenTypeRef(
        'stream',
        item: FlaxCodegenTypeRef(
          'record',
          recordFields: [
            FlaxCodegenRecordFieldModel(
              name: 'context',
              type: FlaxCodegenTypeRef('context'),
              positional: false,
            ),
          ],
        ),
      ),
    );
    for (final input in [true, false]) {
      expect(
        () => callback.validateCallbacks('fixture', input: input),
        returnsNormally,
      );
    }
  });
}
