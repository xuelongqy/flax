import 'dart:convert';

import 'package:flax_codegen/src/manifest_codec.dart';
import 'package:flax_codegen/src/manifest_storage.dart';
import 'package:flax_codegen/src/model.dart';
import 'package:test/test.dart';

void main() {
  final string = FlaxCodegenManifestCodec.encodeTypeRef(
    const FlaxCodegenTypeRef('String', nullable: true),
  );
  final list = FlaxCodegenManifestCodec.encodeTypeRef(
    const FlaxCodegenTypeRef(
      'list',
      item: FlaxCodegenTypeRef('String', nullable: true),
    ),
  );

  test('shared types preserve every semantic field and canonical bytes', () {
    final semantic = <String, Object?>{
      'typeLibraries': {r'$type': 'package:example/types.dart'},
      'enumValueTypes': {
        r'$type': string,
        'kind': string,
        'nullable': string,
        'dartArguments': string,
      },
      'modules': [
        {
          'parameters': [string, list, string],
          'result': list,
        },
      ],
    };
    final stored = FlaxCodegenManifestStorage.compact(semantic);
    expect(stored['typeTable'], hasLength(2));
    final diagnostics = FlaxCodegenManifestDiagnostics('shared.json');
    final restored = FlaxCodegenManifestStorage.expand(
      jsonDecode(jsonEncode(stored)),
      diagnostics,
    );
    diagnostics.throwIfAny();
    expect(restored, semantic);
    expect(
      jsonEncode(
        FlaxCodegenManifestStorage.compact(restored! as Map<String, Object?>),
      ),
      jsonEncode(stored),
    );
  });

  test(
    'malformed, cyclic, duplicate and unused type references fail closed',
    () {
      for (final bad in [
        {'typeTable': null},
        {
          'typeTable': [null],
        },
        {
          'typeTable': [string],
          'value': {r'$type': -1},
        },
        {
          'typeTable': [string],
          'value': {r'$type': 0.5},
        },
        {
          'typeTable': [string],
          'value': {r'$type': 1},
        },
        {
          'typeTable': [string],
          'value': {r'$type': 0, 'extra': true},
        },
        {
          'typeTable': [
            {
              ...list,
              'item': {r'$type': 0},
            },
          ],
        },
        {
          'typeTable': [
            {
              ...list,
              'item': {r'$type': 1},
            },
            string,
          ],
        },
        {
          'typeTable': [
            string,
            {for (final key in string.keys.toList().reversed) key: string[key]},
          ],
        },
        {
          'typeTable': [string],
        },
      ]) {
        final diagnostics = FlaxCodegenManifestDiagnostics('bad.json');
        expect(
          FlaxCodegenManifestStorage.expand(bad, diagnostics),
          isNull,
          reason: '$bad',
        );
        expect(diagnostics.items, isNotEmpty);
      }
      final table = <Map<String, Object?>>[string];
      for (var i = 0; i < 30; i++) {
        table.add({
          ...list,
          'dartArguments': [
            {r'$type': i},
            {r'$type': i},
          ],
        });
      }
      final diagnostics = FlaxCodegenManifestDiagnostics('exponential.json');
      expect(
        FlaxCodegenManifestStorage.expand({'typeTable': table}, diagnostics),
        isNull,
      );
      expect(diagnostics.items.single.message, contains('node limit'));
      final chain = <Map<String, Object?>>[string];
      for (var i = 0; i < 200; i++) {
        chain.add({
          ...list,
          'item': {r'$type': i},
        });
      }
      final deep = FlaxCodegenManifestDiagnostics('deep.json');
      expect(
        FlaxCodegenManifestStorage.expand({'typeTable': chain}, deep),
        isNull,
      );
      expect(deep.items.single.message, contains('depth limit'));
    },
  );

  test(
    'shared members retain defaults, callback policy and declaration data',
    () {
      final method = <String, Object?>{
        'name': 'read',
        'parameters': [
          {
            'name': 'value',
            'type': list,
            'required': false,
            'positional': false,
            'defaultCode': 'const []',
            'omitWhenAbsent': true,
            'scoped': true,
            'encodeKind': 'data',
          },
        ],
        'result': string,
        'mustCallSuper': true,
      };
      final semantic = <String, Object?>{
        'modules': [
          {
            'methods': [method, method],
          },
          {
            'methods': [
              method,
              {...method, 'mustCallSuper': false},
            ],
          },
        ],
        'typeLibraries': {r'$member': 'package:example/types.dart'},
      };
      final stored = FlaxCodegenManifestStorage.compact(semantic);
      expect(stored['memberTable'], hasLength(1));
      final diagnostics = FlaxCodegenManifestDiagnostics('members.json');
      final restored = FlaxCodegenManifestStorage.expand(
        jsonDecode(jsonEncode(stored)),
        diagnostics,
      );
      diagnostics.throwIfAny();
      expect(restored, semantic);
      expect(
        FlaxCodegenManifestStorage.compact(restored! as Map<String, Object?>),
        stored,
      );
    },
  );

  test(
    'member references reject invalid, cyclic, duplicate and unused rows',
    () {
      final member = <String, Object?>{
        'name': 'read',
        'parameters': [],
        'result': string,
      };
      for (final invalid in [
        {'memberTable': null},
        {
          'memberTable': [null],
        },
        {
          'memberTable': [member],
          'value': {r'$member': -1},
        },
        {
          'memberTable': [member],
          'value': {r'$member': 0.5},
        },
        {
          'memberTable': [member],
          'value': {r'$member': 1},
        },
        {
          'memberTable': [member],
          'value': {r'$member': 0, 'extra': true},
        },
        {
          'memberTable': [member, member],
          'value': {r'$member': 0},
        },
        {
          'memberTable': [member],
        },
        {
          'memberTable': [
            {
              'name': 'read',
              'parameters': [
                {r'$member': 0},
              ],
            },
          ],
        },
      ]) {
        final diagnostics = FlaxCodegenManifestDiagnostics('bad-members.json');
        expect(FlaxCodegenManifestStorage.expand(invalid, diagnostics), isNull);
        expect(diagnostics.items, isNotEmpty);
      }
    },
  );
}
