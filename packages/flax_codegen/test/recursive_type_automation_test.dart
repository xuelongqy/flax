import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:flax_codegen/src/manifest_codec.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

void main() {
  final repoRoot = _repoRoot();

  FlaxCodegenBindingConfig fixture() => FlaxCodegenBindingConfig(
    'recursive_types',
    Uri.file(
      p.join(
        repoRoot,
        'packages/flax_codegen/test/fixtures/bindability/recursive_types.dart',
      ),
    ).toString(),
    '@example/recursive-types',
    'unused.dart',
    'unused.ts',
    const {},
  );

  test(
    'automatic binding keeps recursive ordinary value types zero-config',
    () async {
      final parser = FlaxCodegenBindingParser(repoRoot);
      addTearDown(parser.dispose);
      final core = FlaxCodegenBindingConfig.read(
        p.join(repoRoot, 'packages/flax/bindings/config.yaml'),
      );
      await parser.prepare([core]);

      final proposal = await parser.proposeLibrary(fixture());
      final config = proposal.config;
      final repository = config.classes['RecursiveRepository']!;

      expect(repository.constructors[''], contains('pending'));
      expect(
        repository.instanceMethods.keys,
        containsAll(['load', 'watch', 'immediate', 'nested', 'loader']),
      );
      expect(
        repository.getters,
        containsAll(['pending', 'writable', 'immediateValue', 'live']),
      );
      expect(
        repository.setters,
        containsAll(['writable', 'immediateValue', 'live']),
      );
      expect(config.typedefs, contains('RecursiveLoader'));
      expect(
        config.functions.keys,
        containsAll([
          'recursiveFuture',
          'recursiveStream',
          'recursiveFutureOr',
          'recursiveNested',
          'recursiveRecord',
          'recursiveIterable',
          'recursiveSet',
        ]),
        reason: proposal.skips
            .where((skip) => skip.target.startsWith('recursive'))
            .map((skip) => '${skip.target}: ${skip.reason}')
            .join('\n'),
      );
      expect(
        config.topLevel!.getters,
        containsAll(['recursiveTopValue', 'recursiveTopStream']),
      );
      expect(
        config.topLevel!.setters,
        containsAll(['recursiveTopValue', 'recursiveTopStream']),
      );

      final module = await parser.parse(config);
      final repositoryModel = module.classes.singleWhere(
        (type) => type.name == 'RecursiveRepository',
      );
      final methods = {
        for (final method in repositoryModel.methods) method.name: method,
      };
      expect(_shape(methods['load']!.result), 'future/list/RecursiveUser');
      expect(
        _shape(methods['watch']!.result),
        'stream/map/String/RecursiveUser?',
      );
      expect(
        _shape(methods['immediate']!.result),
        'futureOr/list/map/String/RecursiveUser',
      );
      expect(
        _shape(methods['nested']!.result),
        'map/String/stream/list/RecursiveUser',
      );
      expect(methods['loader']!.result.kind, 'callback');
      expect(
        _shape(methods['loader']!.result.result!),
        'future/list/RecursiveUser',
      );

      final inherited = module.classes.singleWhere(
        (type) => type.name == 'RecursiveUserStore',
      );
      expect(
        _shape(
          inherited.getters
              .singleWhere((getter) => getter.name == 'values')
              .type,
        ),
        'stream/list/RecursiveUser',
      );

      final alias = module.typedefs.singleWhere(
        (value) => value.name == 'RecursiveLoader',
      );
      expect(alias.target.kind, 'callback');
      expect(_shape(alias.target.result!), 'future/list/any?');
      final declaredAliasItem = alias.target.result!.item!.item!.declaration;
      expect(declaredAliasItem?.kind, 'parameter');
      expect(declaredAliasItem?.name, 'T');

      final functions = {
        for (final function in module.functions)
          function.call.name: function.call,
      };
      expect(
        _shape(functions['recursiveRecord']!.result),
        'future/record/items:list/RecursiveUser,user:RecursiveUser',
      );
      expect(
        _shape(functions['recursiveIterable']!.result),
        'iterable/future/RecursiveUser',
      );
      expect(
        _shape(functions['recursiveSet']!.result),
        'set/list/RecursiveUser',
      );

      for (final type in [
        methods['load']!.result,
        methods['watch']!.result,
        methods['immediate']!.result,
        methods['nested']!.result,
        functions['recursiveRecord']!.result,
        functions['recursiveIterable']!.result,
        functions['recursiveSet']!.result,
      ]) {
        final encoded = FlaxCodegenManifestCodec.encodeTypeRef(type);
        final diagnostics = FlaxCodegenManifestDiagnostics('recursive-types');
        final decoded = FlaxCodegenManifestCodec.decodeTypeRef(
          encoded,
          diagnostics,
          r'$/type',
        );
        expect(diagnostics.items, isEmpty);
        expect(decoded, isNotNull);
        expect(FlaxCodegenManifestCodec.encodeTypeRef(decoded!), encoded);
      }

      final coreModule = await parser.parse(core);
      await compileFixture(
        repoRoot,
        FlaxCodegenBindingEmitter([module, coreModule]),
        module,
        consumerSource: '''
import {
  RecursiveRepository,
  recursiveFuture,
  recursiveFutureOr,
  recursiveIterable,
  recursiveNested,
  recursiveRecord,
  recursiveSet,
  recursiveStream,
} from './plugin.js';

declare const repository: RecursiveRepository;
declare const streamInput: Parameters<typeof recursiveStream>[0];
declare const recordInput: Parameters<typeof recursiveRecord>[0];
declare const iterableInput: Parameters<typeof recursiveIterable>[0];
declare const setInput: Parameters<typeof recursiveSet>[0];
const futureUsers = repository.load(Promise.resolve([]));
const futureTop = recursiveFuture(Promise.resolve([]));
const futureOrTop = recursiveFutureOr([]);
const nested = recursiveNested(new Map());
const recordTop = recursiveRecord(recordInput);
const iterableTop = recursiveIterable(iterableInput);
const setTop = recursiveSet(setInput);
const streamTop = recursiveStream(streamInput);
repository.writable = futureUsers;
repository.live = streamInput;
void futureTop;
void futureOrTop;
void nested;
void recordTop;
void iterableTop;
void setTop;
void streamTop;
''',
      );
    },
    timeout: const Timeout(Duration(minutes: 3)),
  );

  test('recursive callback diagnostics preserve the failing type path', () {
    const callback = FlaxCodegenTypeRef(
      'callback',
      parameters: [
        FlaxCodegenParameterModel(
          name: 'value',
          type: FlaxCodegenTypeRef(
            'future',
            item: FlaxCodegenTypeRef('list', item: FlaxCodegenTypeRef('state')),
          ),
          required: true,
          positional: true,
          defaultCode: 'null',
        ),
      ],
      result: FlaxCodegenTypeRef('void'),
    );

    expect(
      () => callback.validateCallbacks(
        'RecursiveRepository.load callback',
        input: true,
      ),
      throwsA(
        isA<StateError>().having(
          (error) => error.message,
          'message',
          contains('RecursiveRepository.load callback.value item item'),
        ),
      ),
    );
  });
}

String _shape(FlaxCodegenTypeRef type) {
  final suffix = type.nullable ? '?' : '';
  if (type.kind == 'parameter') return 'parameter:${type.name}$suffix';
  if (type.kind == 'object') return '${type.name}$suffix';
  if (type.kind == 'map') {
    return 'map/${_shape(type.key!)}/${_shape(type.item!)}$suffix';
  }
  if (type.kind == 'record') {
    final fields = type.recordFields
        .map((field) => '${field.name}:${_shape(field.type)}')
        .join(',');
    return 'record/$fields$suffix';
  }
  if (type.item != null) return '${type.kind}/${_shape(type.item!)}$suffix';
  return '${type.kind}$suffix';
}

String _repoRoot() {
  var directory = Directory.current;
  for (var i = 0; i < 6; i++) {
    final candidate = directory.path;
    if (File(p.join(candidate, 'pubspec.yaml')).existsSync() &&
        File(p.join(candidate, 'packages/flax_codegen/pubspec.yaml'))
            .existsSync()) {
      return candidate;
    }
    directory = directory.parent;
  }
  throw StateError(
    'Cannot locate the Flax repository from ${Directory.current.path}',
  );
}
