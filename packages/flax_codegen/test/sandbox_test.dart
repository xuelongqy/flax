import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:flax_codegen/src/manifest_codec.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

void main() {
  final root = p.normalize(p.join(Directory.current.path, '../..'));
  final library = Uri.file(
    p.join(root, 'packages/flax_codegen/test/fixtures/plugin/sandbox.dart'),
  ).toString();
  FlaxCodegenBindingConfig config({
    Map<String, dynamic> sandbox = const {},
    String? invalid,
  }) => FlaxCodegenBindingConfig(
    'notes',
    library,
    '@example/notes',
    'unused.dart',
    'unused.ts',
    invalid != null
        ? const {}
        : const {
            'NoteStore': FlaxCodegenClassSelection(
              {
                '': ['path'],
              },
              kind: 'object',
              instanceMethods: {
                'read': ['fallback'],
                'identity': ['value'],
              },
              getters: ['value'],
              setters: ['value'],
              staticGetters: ['host'],
              operators: {
                '[]': ['index'],
              },
            ),
            'NoteKind': FlaxCodegenClassSelection(
              {},
              kind: 'enum',
              getters: ['label'],
              instanceMethods: {
                'format': ['suffix'],
              },
              methods: {'host': []},
            ),
          },
    functions: invalid == null
        ? const {
            'openNotes': FlaxCodegenFunctionSelection(['path']),
            'watchNotes': FlaxCodegenFunctionSelection(['path']),
          }
        : {invalid: const FlaxCodegenFunctionSelection([])},
    topLevel: invalid == null
        ? const FlaxCodegenTopLevelSelection('', ['hostSecret'])
        : null,
    extensions: invalid == null
        ? const {
            'NoteExtension': FlaxCodegenExtensionSelection(
              methods: {
                'extended': ['suffix'],
              },
            ),
          }
        : const {},
    sandbox: sandbox,
  );

  test('typed guards cover constructors, members, functions, extensions and values', () async {
    final parser = FlaxCodegenBindingParser(root);
    addTearDown(parser.dispose);
    final module = await parser.parse(config());
    expect(module.sandboxRules, hasLength(14));
    final enums = module.sandboxRules.where(
      (rule) => rule.operation.contains('NoteKind'),
    );
    expect(
      enums.every((rule) => rule.kind == 'call' && rule.name.isEmpty),
      isTrue,
    );
    expect(
      enums
          .where((rule) => !rule.deny)
          .every((rule) => rule.parameters.first.name == 'receiver'),
      isTrue,
    );
    expect(module.requiredCapabilities, contains('sandbox-guards'));
    expect(module.topLevel!.getters.single.literal, isNull);
    final diagnostics = FlaxCodegenManifestDiagnostics('test');
    final restored = FlaxCodegenManifestCodec.decodeModule(
      {
        ...FlaxCodegenManifestCodec.encodeModule(module),
        'typeLibraries': <String, Object?>{},
      },
      diagnostics,
      '',
      module.name,
    );
    diagnostics.throwIfAny();
    expect(
      restored!.sandboxRules.map((r) => r.operation),
      module.sandboxRules.map((r) => r.operation),
    );
    await compileFixture(root, FlaxCodegenBindingEmitter([module]), module);
  });

  test('YAML agrees with annotations and rejects conflicting or unselected targets', () async {
    final parser = FlaxCodegenBindingParser(root);
    addTearDown(parser.dispose);
    final yaml = {
      'version': 1,
      'classes': {
        'NoteStore': {
          'staticGetters': {'host': 'deny'},
        },
      },
    };
    expect(
      (await parser.parse(config(sandbox: yaml))).sandboxRules,
      hasLength(14),
    );
    await expectLater(
      parser.parse(
        config(
          sandbox: {
            'version': 1,
            'functions': {'unknown': 'deny'},
          },
        ),
      ),
      throwsStateError,
    );
    await expectLater(
      parser.parse(
        config(
          sandbox: {
            'version': 1,
            'functions': {'openNotes': 'deny'},
          },
        ),
      ),
      throwsStateError,
    );
  });

  test('invalid guard declarations fail at generation time', () async {
    final parser = FlaxCodegenBindingParser(root);
    addTearDown(parser.dispose);
    for (final name in ['invalidAsync', 'invalidGenerator']) {
      await expectLater(
        parser.parse(config(invalid: name)),
        throwsA(
          isA<StateError>().having(
            (e) => e.message,
            'reason',
            contains('synchronous body'),
          ),
        ),
      );
    }
    for (final name in ['InvalidClass', 'InvalidConstant']) {
      await expectLater(
        parser.parse(
          FlaxCodegenBindingConfig(
            'invalid',
            library,
            '@example/notes',
            'unused.dart',
            'unused.ts',
            name == 'InvalidClass'
                ? {
                    name: const FlaxCodegenClassSelection({
                      '': [],
                    }, kind: 'object'),
                  }
                : {},
            types: name == 'InvalidConstant' ? [name] : const [],
          ),
        ),
        throwsStateError,
      );
    }
  });
}
