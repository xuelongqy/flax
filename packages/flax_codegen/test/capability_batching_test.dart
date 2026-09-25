import 'dart:convert';

import 'package:test/test.dart';

import '../tool/src/capability/stage3.dart';

void main() {
  test('reconstructs a saved class selection from inventory JSON', () {
    final decoded = jsonDecode(
      '{"kind":"object","typeArguments":["num"],'
      '"constructors":{"":["value"]},"getters":["value"],'
      '"setters":[],"staticGetters":["empty"],'
      '"instanceMethods":{"echo":["input"]},"methods":{"create":[]}}',
    );
    final selection = selectionFromJson(decoded)!;
    expect(selection.kind, 'object');
    expect(selection.typeArguments, ['num']);
    expect(selection.constructors[''], ['value']);
    expect(selection.getters, ['value']);
    expect(selection.staticGetters, ['empty']);
    expect(selection.instanceMethods['echo'], ['input']);
    expect(selection.methods['create'], isEmpty);
  });

  test('serializes stable stage failure codes', () {
    const result = Stage3ParseResult(
      label: 'explicit',
      ok: false,
      elapsedMilliseconds: 1,
      names: <String>[],
      error: 'diagnostic text can change',
      code: 'parse_failed',
    );

    expect(result.toJson()['code'], 'parse_failed');
    expect(result.toJson(), isNot(contains('category')));
  });

  test('stage 3 rejects inventory records without a verdict', () {
    expect(
      () => stage3DeclarationVerdict({'id': 'package:fixture/a.dart::A'}),
      throwsStateError,
    );
  });

  test(
    'keeps the 170-identity denominator and batches supported class selections',
    () {
      final declarations = <Map<String, Object?>>[
        for (var i = 0; i < 43; i++)
          _declaration('C$i', 'class', 'supported', selection: true),
        for (var i = 0; i < 29; i++)
          _declaration('P$i', 'class', 'limited', selection: true),
        for (var i = 0; i < 2; i++) _declaration('U$i', 'class', 'unsupported'),
        for (var i = 0; i < 5; i++)
          _declaration('E$i', 'class', 'supported', source: 'provider'),
        for (var i = 0; i < 5; i++) _declaration('N$i', 'enum', 'excluded'),
        for (var i = 0; i < 86; i++)
          _declaration('X$i', 'function', 'supported'),
      ];
      expect(declarations, hasLength(170));

      final candidates = stage3CandidatesFromDeclarations(declarations);
      expect(candidates, hasLength(79));
      expect(candidates.where((candidate) => candidate.inBatch), hasLength(72));
      expect(stage3BatchClasses(candidates), hasLength(72));
      expect(stage3BatchClasses(candidates).containsKey('U0'), isFalse);
      expect(stage3BatchClasses(candidates).containsKey('E0'), isFalse);

      final notGenerated = stage3NotGenerated(
        declarations: declarations,
        candidates: candidates,
        generatedNames: const ['C0', 'P0'],
      );
      expect(notGenerated, hasLength(168));
      expect([
        for (final row in notGenerated) row['exportName'],
      ], containsAll(['U0', 'E0', 'N0', 'X0', 'C1']));
      expect(
        notGenerated.singleWhere((row) => row['exportName'] == 'C1')['inBatch'],
        isTrue,
      );
      expect(
        notGenerated.singleWhere((row) => row['exportName'] == 'X0')['inBatch'],
        isFalse,
      );
    },
  );

  test('shrinks a combined failure to the interacting names', () async {
    Future<bool> fails(List<String> names) async {
      return names.contains('ErrorSpacer') &&
          (names.contains('DiagnosticsProperty') ||
              names.contains('DiagnosticsNode'));
    }

    expect(
      await shrinkFailingNames([
        'A',
        'ErrorSpacer',
        'B',
        'DiagnosticsProperty',
        'C',
      ], fails),
      ['ErrorSpacer', 'DiagnosticsProperty'],
    );
    expect(await shrinkFailingNames(['ErrorSpacer'], fails), isEmpty);
  });
}

Map<String, Object?> _declaration(
  String name,
  String kind,
  String verdict, {
  bool selection = false,
  String source = 'automatic',
}) {
  return {
    'id': 'package:flutter/foundation.dart::$name',
    'name': name,
    'kind': kind,
    'exportNames': [name],
    'typeParameters': <String>[],
    'declaredMembers': <Map<String, Object?>>[],
    'assessment': {
      'verdict': verdict,
      'reasonKind': verdict == 'limited'
          ? 'configurationRequired'
          : verdict == 'unsupported'
          ? 'intentionalBoundary'
          : verdict == 'excluded'
          ? 'visibility'
          : 'none',
      'source': source,
      if (selection)
        'selection': {
          'kind': 'object',
          'typeArguments': <String>[],
          'constructors': {
            '': ['value'],
          },
          'getters': <String>[],
          'setters': <String>[],
          'staticGetters': <String>[],
          'instanceMethods': <String, List<String>>{},
          'methods': <String, List<String>>{},
        },
    },
  };
}
