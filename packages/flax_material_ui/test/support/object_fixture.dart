import 'package:flax/flax.dart';

import '../fixtures/objects.dart';
import 'test_module.dart';

export '../fixtures/objects.dart' show Gauge;

// Exercise the public host extension with the same independent object used by codegen tests.
// Generator tests separately compile its generated Dart and TypeScript adapters.
const gaugeType = FlaxTypeRef('object', id: 'fixture:Gauge');
const modeType = FlaxTypeRef('enum', id: 'fixture:Mode');
const intType = FlaxTypeRef('int');
const voidType = FlaxTypeRef('void');
const listenerType = FlaxTypeRef(
  'callback',
  callback: FlaxCallbackBinding(
    [],
    voidType,
    wrapObserver,
    id: 'fixture:observer',
    invoke: invokeObserver,
    matches: matchesObserver,
  ),
);
bool matchesObserver(Object value) => value is void Function();
Object? invokeObserver(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object wrapObserver(FlaxCallback callback) => () {
  callback.call(const [], const {});
};

FlaxBindingModule objectFixture() => testBindingModule('objects fixture', [
  const FlaxEnumBinding('fixture:Mode', {
    'quiet': Mode.quiet,
    'active': Mode.active,
  }),
  FlaxObjectBinding(
    'fixture:Gauge',
    [
      FlaxGetter('reading', intType, (v) => (v as Gauge).reading),
      FlaxGetter('mode', modeType, (v) => (v as Gauge).mode),
      FlaxGetter('self', gaugeType, (v) => v),
    ],
    {
      'move': FlaxInstanceMethod(
        [const FlaxParameter('amount', intType, required: true)],
        voidType,
        (v, a) {
          checkedMove(v as Gauge, a['amount'] as int);
          return null;
        },
      ),
      'echo': FlaxInstanceMethod(
        [const FlaxParameter('input', gaugeType, required: true)],
        gaugeType,
        (v, a) => (v as Gauge).echo(a['input'] as Gauge),
      ),
      'watch': FlaxInstanceMethod(
        [const FlaxParameter('observer', listenerType, required: true)],
        voidType,
        (v, a) {
          (v as Gauge).watch(a['observer'] as void Function());
          return null;
        },
      ),
      'unwatch': FlaxInstanceMethod(
        [const FlaxParameter('observer', listenerType, required: true)],
        voidType,
        (v, a) {
          (v as Gauge).unwatch(a['observer'] as void Function());
          return null;
        },
      ),
      'finish': FlaxInstanceMethod([], voidType, (v, a) {
        (v as Gauge).finish();
        return null;
      }),
    },
    constructors: {
      '': [
        const FlaxParameter(
          'initial',
          intType,
          required: false,
          defaultValue: 7,
        ),
      ],
    },
    create: (_, a) => Gauge(initial: a['initial'] as int),
    disposeMethod: 'finish',
    listenerPairs: {'watch': 'unwatch'},
    setters: [
      FlaxSetter('reading', intType, (v, n) => (v as Gauge).reading = n as int),
      FlaxSetter('mode', modeType, (v, n) => (v as Gauge).mode = n as Mode),
    ],
  ),
]);
