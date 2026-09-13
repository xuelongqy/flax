import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import 'package:flax_test/flax_test.dart';

import '../support/harness.dart' show Harness, registry;
import '../support/test_module.dart';

final builderSource = flaxTestFixtureSource('builders');

const nullableString = FlaxTypeRef('String', nullable: true);
const _omitted = Object();
const scalarCallback = FlaxTypeRef(
  'callback',
  callback: FlaxCallbackBinding(
    [
      FlaxCallbackParameter(
        'value',
        FlaxTypeRef('int'),
        required: true,
        positional: true,
      ),
      FlaxCallbackParameter(
        'direction',
        FlaxTypeRef('enum', id: 'flax.core/flutter#type:TextDirection'),
        required: true,
        positional: true,
      ),
    ],
    nullableString,
    wrapScalar,
    id: 'fixture:scalar',
    invoke: invokeScalar,
    matches: matchesScalar,
  ),
);
bool matchesScalar(Object value) =>
    value is String? Function(int, TextDirection);
Object? invokeScalar(
  Object function,
  List<Object?> values,
  Map<String, Object?> named,
) => (function as String? Function(int, TextDirection))(
  values[0] as int,
  values[1] as TextDirection,
);
Object wrapScalar(FlaxCallback callback) =>
    (int value, TextDirection direction) =>
        callback.call([value, direction], const {}) as String?;

final optionalCallback = FlaxTypeRef(
  'callback',
  callback: FlaxCallbackBinding(
    const [
      FlaxCallbackParameter(
        'value',
        FlaxTypeRef('int', nullable: true),
        required: false,
        positional: true,
      ),
    ],
    const FlaxTypeRef('int'),
    (callback) => ([Object? value = _omitted]) {
      final result = identical(value, _omitted)
          ? callback.call(const [], const {})
          : callback.call([value], const {});
      return result as int;
    },
    id: 'fixture:optional',
    invoke: (function, positional, named) {
      final callback = function as int Function([int?]);
      return positional.isEmpty
          ? callback()
          : callback(positional.single as int?);
    },
    matches: (value) => value is int Function([int?]),
  ),
);

final namedCallback = FlaxTypeRef(
  'callback',
  callback: FlaxCallbackBinding(
    const [
      FlaxCallbackParameter(
        'value',
        FlaxTypeRef('int'),
        required: true,
        positional: true,
      ),
      FlaxCallbackParameter(
        'label',
        FlaxTypeRef('String'),
        required: true,
        positional: false,
      ),
      FlaxCallbackParameter(
        'count',
        FlaxTypeRef('int', nullable: true),
        required: false,
        positional: false,
      ),
    ],
    const FlaxTypeRef('String'),
    (callback) =>
        (int value, {required String label, Object? count = _omitted}) {
          final named = <String, Object?>{'label': label};
          if (!identical(count, _omitted)) named['count'] = count;
          return callback.call([value], named) as String;
        },
    id: 'fixture:named',
    invoke: (function, positional, named) {
      final callback =
          function as String Function(int, {required String label, int? count});
      return named.containsKey('count')
          ? callback(
              positional.single as int,
              label: named['label'] as String,
              count: named['count'] as int?,
            )
          : callback(positional.single as int, label: named['label'] as String);
    },
    matches: (value) =>
        value is String Function(int, {required String label, int? count}),
  ),
);

// A consumer of the public extension API, exercised through the actual JS/JSI host.
final members = testBindingModule('test-members', [
  FlaxMemberBinding('test:Members', {
    'apply': FlaxStaticMethod(
      [
        const FlaxParameter('callback', scalarCallback, required: true),
        const FlaxParameter(
          'value',
          FlaxTypeRef('int'),
          required: false,
          defaultValue: 7,
        ),
      ],
      nullableString,
      (values) => (values['callback'] as String? Function(int, TextDirection))(
        values['value'] as int,
        TextDirection.rtl,
      ),
    ),
    'visit': FlaxStaticMethod(
      [
        FlaxParameter(
          'callback',
          FlaxTypeRef(
            'callback',
            callback: FlaxCallbackBinding(
              const [
                FlaxCallbackParameter(
                  'value',
                  FlaxTypeRef('int'),
                  required: true,
                  positional: true,
                ),
              ],
              const FlaxTypeRef('void'),
              id: 'fixture:visit',
              matches: (value) => value is void Function(int),
              invoke: (function, values, named) {
                (function as void Function(int))(values.single as int);
                return null;
              },
              (callback) => (int value) {
                callback.call([value], const {});
              },
            ),
          ),
          required: true,
        ),
      ],
      const FlaxTypeRef('void'),
      (values) {
        (values['callback'] as void Function(int))(4);
        return null;
      },
    ),
    'optional': FlaxStaticMethod(
      [FlaxParameter('callback', optionalCallback, required: true)],
      const FlaxTypeRef('int'),
      (values) => (values['callback'] as int Function([int?]))(),
    ),
    'named': FlaxStaticMethod(
      [FlaxParameter('callback', namedCallback, required: true)],
      const FlaxTypeRef('String'),
      (values) =>
          (values['callback']
              as String Function(int, {required String label, int? count}))(
            3,
            label: 'three',
          ),
    ),
  }),
]);

void main() {
  testWidgets(
    'typed scalar member callbacks preserve enum identity, nullable results and nested errors',
    (t) async {
      final h = Harness();
      await t.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: FlaxView(
              createRuntime: h.create,
              source: builderSource,
              bindings: FlaxBindingRegistry([...registry.modules, members]),
              onError: (error, _) => h.errors.add(error),
            ),
          ),
        ),
      );
      h.execute('''
      const result = __flaxCall($flaxBindingVersion, 'test:Members', 'apply', (n, direction) => {
        if (direction !== __flaxBindings.enumValue('flax.core/flutter#type:TextDirection', 'rtl')) throw Error('enum identity');
        hooks.lookup();
        return String(n);
      });
      if (result !== '7') throw Error('default or return conversion');
      if (__flaxCall($flaxBindingVersion, 'test:Members', 'apply', () => null) !== null) throw Error('null result');
      __flaxCall($flaxBindingVersion, 'test:Members', 'visit', n => hooks.count.value = n);
      if (__flaxCall($flaxBindingVersion, 'test:Members', 'optional', (value = 11) => value) !== 11) {
        throw Error('optional positional omission');
      }
      if (__flaxCall($flaxBindingVersion, 'test:Members', 'named', (value, {label, count = 5}) => String(value) + ':' + label + ':' + String(count)) !== '3:three:5') {
        throw Error('named option omission');
      }
    ''');
      await t.pump();
      expect(find.text('Count 4'), findsOneWidget);
      for (final script in [
        "__flaxCall($flaxBindingVersion, 'test:Members', 'apply', () => undefined)",
        "__flaxCall($flaxBindingVersion, 'test:Members', 'apply', () => { throw Error('nested'); })",
        "__flaxCall($flaxBindingVersion, 'test:Members', 'visit', () => { throw Error('void nested'); })",
        "__flaxCall($flaxBindingVersion, 'test:Members', 'apply', () => 'x', 1.5)",
        "__flaxCall($flaxBindingVersion, 'test:Members', 'missing')",
        "__flaxCall(7, 'test:Members', 'apply', () => 'x')",
      ]) {
        expect(() => h.execute(script), throwsA(isA<FlaxJsException>()));
      }
      h.execute(
        "if (__flaxCall($flaxBindingVersion, 'test:Members', 'apply', n => String(n), 9) !== '9') throw Error('recovery');",
      );
      expect(h.errors, isEmpty);
      await t.pumpWidget(const SizedBox());
    },
  );
}
