import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';

import '../support/owned_harness.dart';

class _Money {
  int amount = 3;
  int disposals = 0;
  final listeners = <void Function()>[];
  late final List<Object?> items = [this];
  Object? callback() => this;
  late final Stream<Object?> events = Stream<Object?>.value(this)
      .asBroadcastStream();
}

class _Box<T> {
  _Box(this.value);
  final T value;
}

class _DetailedMoney extends _Money {}

final _erasedCallback = FlaxTypeRef(
  'callback',
  callback: FlaxCallbackBinding(
    const [],
    const FlaxTypeRef('any', nullable: true),
    (callback) =>
        () => callback.call(const [], const {}),
    id: 'fixture:package-erased-callback',
    invoke: (value, _, _) => (value as Object? Function())(),
    matches: (value) => value is Object? Function(),
  ),
);

final _erasedStream = FlaxTypeRef(
  'stream',
  id: 'flax.core/flutter#type:Stream',
  item: const FlaxTypeRef('any', nullable: true),
  stream: FlaxStreamBinding(
    'fixture:package-erased-stream',
    (value) => value is Stream<Object?>,
    (value) => value as Stream<Object?>,
  ),
);

final _listener = FlaxTypeRef(
  'callback',
  callback: FlaxCallbackBinding(
    const [],
    const FlaxTypeRef('void'),
    (callback) => () {
      callback.call(const [], const {});
    },
    id: 'fixture:package-listener',
    invoke: (value, _, _) {
      (value as void Function())();
      return null;
    },
    matches: (value) => value is void Function(),
  ),
);

FlaxBindingModule _module(String namespace) {
  final id = '$namespace/money#type:Money';
  return FlaxBindingModule(
    'money',
    [
      FlaxObjectBinding(
        id,
        [
          FlaxGetter('provider', const FlaxTypeRef('String'), (_) => namespace),
          FlaxGetter(
            namespace == 'test.a' ? 'amount' : 'doubled',
            const FlaxTypeRef('int'),
            (value) =>
                (value as _Money).amount * (namespace == 'test.a' ? 1 : 2),
          ),
        ],
        {
          'echo': FlaxInstanceMethod(
            [
              FlaxParameter(
                'value',
                FlaxTypeRef('object', id: id),
                required: true,
              ),
            ],
            FlaxTypeRef('object', id: id),
            (_, args) => args['value'],
          ),
          'erased': FlaxInstanceMethod(
            const [],
            const FlaxTypeRef('any', nullable: true),
            (value, _) => value,
          ),
          'items': FlaxInstanceMethod(
            const [],
            const FlaxTypeRef('any', nullable: true),
            (value, _) => (value as _Money).items,
          ),
          'later': FlaxInstanceMethod(
            const [],
            const FlaxTypeRef('any', nullable: true),
            (value, _) => Future<Object?>.value(value),
          ),
          'callback': FlaxInstanceMethod(
            const [],
            _erasedCallback,
            (value, _) => (value as _Money).callback,
          ),
          'stream': FlaxInstanceMethod(
            const [],
            _erasedStream,
            (value, _) => (value as _Money).events,
          ),
          'addListener': FlaxInstanceMethod(
            [FlaxParameter('listener', _listener, required: true)],
            const FlaxTypeRef('void'),
            (value, args) {
              (value as _Money).listeners.add(
                args['listener'] as void Function(),
              );
              return null;
            },
          ),
          'removeListener': FlaxInstanceMethod(
            [FlaxParameter('listener', _listener, required: true)],
            const FlaxTypeRef('void'),
            (value, args) {
              (value as _Money).listeners.remove(args['listener']);
              return null;
            },
          ),
          'notify': FlaxInstanceMethod(const [], const FlaxTypeRef('void'), (
            value,
            _,
          ) {
            for (final listener in (value as _Money).listeners.toList()) {
              listener();
            }
            return null;
          }),
          'dispose': FlaxInstanceMethod(const [], const FlaxTypeRef('void'), (
            value,
            _,
          ) {
            (value as _Money).disposals++;
            value.listeners.clear();
            return null;
          }),
        },
        constructors: const {'': []},
        create: (_, _) => _Money(),
        disposeMethod: 'dispose',
        listenerPairs: const {'addListener': 'removeListener'},
        matches: (value) => value is _Money,
      ),
      FlaxObjectBinding(
        '$namespace/money#type:Box',
        const [],
        {
          'echo': FlaxInstanceMethod(
            [
              FlaxParameter(
                'value',
                FlaxTypeRef('object', id: '$namespace/money#type:Box'),
                required: true,
              ),
            ],
            FlaxTypeRef('object', id: '$namespace/money#type:Box'),
            (_, args) => args['value'],
          ),
        },
        constructors: const {'': []},
        create: (_, _) =>
            namespace == 'test.a' ? _Box<int>(1) : _Box<String>('one'),
        matches: (value) =>
            namespace == 'test.a' ? value is _Box<int> : value is _Box<String>,
      ),
      if (namespace == 'test.b')
        FlaxObjectBinding(
          'test.b/money#type:Wrong',
          const [],
          const {},
          constructors: const {'': []},
          create: (_, _) => Object(),
          matches: (value) => value.runtimeType == Object,
        ),
    ],
    moduleId: '$namespace/money',
    uiProtocol: flaxBindingVersion,
    requiredCapabilities: const [],
  );
}

void main() {
  for (final reverse in [false, true]) {
    testWidgets(
      'typed views and Core priority survive duplicate subtype providers (reverse=$reverse)',
      (tester) async {
        final value = _DetailedMoney();
        final modules = [
          _module('test.a'),
          _module('test.b'),
          _module('flax.core'),
          for (final namespace in ['test.d', 'test.e'])
            FlaxBindingModule(
              'money',
              [
                FlaxObjectBinding(
                  '$namespace/money#type:Money',
                  [
                    FlaxGetter(
                      'provider',
                      const FlaxTypeRef('String'),
                      (_) => namespace,
                    ),
                  ],
                  const {},
                  constructors: const {},
                  create: (_, _) => throw StateError('Not constructible'),
                  matches: (value) => value is _DetailedMoney,
                  supertypes: const [
                    'test.a/money#type:Money',
                    'test.b/money#type:Money',
                    'flax.core/money#type:Money',
                  ],
                ),
              ],
              moduleId: '$namespace/money',
              uiProtocol: flaxBindingVersion,
              requiredCapabilities: const [],
            ),
          FlaxBindingModule(
            'functions',
            const [],
            moduleId: 'test.c/functions',
            uiProtocol: flaxBindingVersion,
            requiredCapabilities: const [],
            functions: [
              FlaxFunctionBinding(
                'test.c/functions#function:typed',
                const [],
                const FlaxTypeRef('object', id: 'test.b/money#type:Money'),
                (_) => value,
              ),
              FlaxFunctionBinding(
                'test.c/functions#function:erased',
                const [],
                const FlaxTypeRef('any', nullable: true),
                (_) => value,
              ),
            ],
          ),
        ];
        final h = OwnedHarness(
          fixture: 'package_bindings',
          extra: reverse ? modules.reversed.toList() : modules,
        );
        try {
          await tester.pumpWidget(h.app('package-bindings'));
          await tester.pumpAndSettle();
          h.execute('var typed=moneyHooks.typed();');
          expect(h.string('typed.provider'), 'test.b');
          h.execute('var erased=moneyHooks.erased();');
          expect(h.string('erased.provider'), 'flax.core');
          expect(h.errors, isEmpty);
        } finally {
          await h.finish(tester);
        }
      },
    );
    testWidgets(
      'independent object views share value and disposal (reverse=$reverse)',
      (tester) async {
        final modules = [_module('test.a'), _module('test.b')];
        final h = OwnedHarness(
          fixture: 'package_bindings',
          extra: reverse ? modules.reversed.toList() : modules,
        );
        try {
          await tester.pumpWidget(h.app('package-bindings'));
          await tester.pumpAndSettle();
          h.execute(
            'var a=moneyHooks.createA(); var b=moneyHooks.createB(); var bv=b.echo(a); var av=a.echo(bv)',
          );
          expect(h.boolean('a === av && a !== bv && bv === b.echo(a)'), isTrue);
          expect(h.number('a.amount'), 3);
          expect(h.number('bv.doubled'), 6);
          h.execute(
            'var notices=0; var listener=()=>notices++; a.addListener(listener); bv.notify(); bv.removeListener(listener); a.notify();',
          );
          expect(h.number('notices'), 1);
          h.execute(
            'bv.addListener(listener); a.notify(); a.removeListener(listener); bv.notify();',
          );
          expect(h.number('notices'), 2);
          h.execute(
            'var ai=a.items(); var bi=bv.items(); var delayedA; var delayedB; a.later().then(v=>delayedA=v); bv.later().then(v=>delayedB=v)',
          );
          await tester.pumpAndSettle();
          expect(h.boolean('a.erased()===a && bv.erased()===bv'), isTrue);
          expect(
            h.boolean('ai.get(0)===a && bi.get(0)===bv && ai!==bi'),
            isTrue,
          );
          expect(h.boolean('delayedA===a && delayedB===bv'), isTrue);
          const iterations = 2000;
          final watch = Stopwatch()..start();
          h.execute('for(var i=0;i<$iterations;i++) a.echo(a);');
          final sameMicros = watch.elapsedMicroseconds;
          await tester.pumpAndSettle();
          watch.reset();
          h.execute('for(var i=0;i<$iterations;i++) b.echo(a);');
          final crossMicros = watch.elapsedMicroseconds;
          await tester.pumpAndSettle();
          // ignore: avoid_print
          print(
            'Package binding calls: reverse=$reverse, iterations=$iterations, same=$sameMicros us, cross=$crossMicros us.',
          );
          h.execute('var callbackA=a.callback(); var callbackB=bv.callback();');
          expect(
            h.boolean(
              'callbackA!==callbackB && callbackA()===a && callbackB()===bv',
            ),
            isTrue,
          );
          h.execute(
            'var streamA=a.stream(); var streamB=bv.stream(); var iteratorA=streamA[Symbol.asyncIterator](); var iteratorB=streamB[Symbol.asyncIterator](); var streamedA; var streamedB; iteratorA.next().then(v=>streamedA=v.value); iteratorB.next().then(v=>streamedB=v.value);',
          );
          await tester.pumpAndSettle();
          expect(
            h.boolean('streamA!==streamB && streamedA===a && streamedB===bv'),
            isTrue,
          );
          h.execute('iteratorA.return(); iteratorB.return();');
          await tester.pumpAndSettle();
          expect(h.boolean('!("doubled" in a) && !("amount" in bv)'), isTrue);
          expect(
            () => h.execute('b.echo(moneyHooks.createWrong())'),
            throwsA(isA<FlaxJsException>()),
          );
          h.execute(
            'var intBox=moneyHooks.createIntBox(); var stringBox=moneyHooks.createStringBox();',
          );
          expect(
            h.boolean(
              'intBox.echo(intBox)===intBox && stringBox.echo(stringBox)===stringBox',
            ),
            isTrue,
          );
          for (final call in [
            'intBox.echo(stringBox)',
            'stringBox.echo(intBox)',
          ]) {
            expect(() => h.execute(call), throwsA(isA<FlaxJsException>()));
          }
          h.execute('bv.dispose()');
          expect(h.actualDisposals, 1);
          for (final call in [
            'a.amount',
            'bv.doubled',
            'a.dispose()',
            'b.echo(a)',
          ]) {
            expect(() => h.execute(call), throwsA(isA<FlaxJsException>()));
          }
          expect(h.errors, isEmpty);
          h.execute('b.addListener(listener)');
        } finally {
          await h.finish(tester);
          expect(
            h.created.whereType<_Money>().expand((value) => value.listeners),
            isEmpty,
          );
        }
      },
    );

    for (final scenario in [
      'core',
      'dependency',
      'ambiguous',
      'two-dependencies',
    ]) {
      testWidgets(
        'erased provider selection is deterministic ($scenario, reverse=$reverse)',
        (tester) async {
          final value = _Money();
          final modules = [
            _module('test.a'),
            _module('test.b'),
            if (scenario == 'core') _module('flax.core'),
            FlaxBindingModule(
              'functions',
              const [],
              moduleId: 'test.c/functions',
              uiProtocol: flaxBindingVersion,
              requiredCapabilities: const [],
              dependencyModules: switch (scenario) {
                'dependency' => const ['test.a/money'],
                'two-dependencies' => const ['test.a/money', 'test.b/money'],
                _ => const [],
              },
              functions: [
                FlaxFunctionBinding(
                  'test.c/functions#function:erased',
                  const [],
                  const FlaxTypeRef('any', nullable: true),
                  (_) => value,
                ),
                FlaxFunctionBinding(
                  'test.c/functions#function:typed',
                  const [],
                  const FlaxTypeRef('object', id: 'test.b/money#type:Money'),
                  (_) => value,
                ),
              ],
            ),
          ];
          final h = OwnedHarness(
            fixture: 'package_bindings',
            extra: reverse ? modules.reversed.toList() : modules,
          );
          try {
            await tester.pumpWidget(h.app('package-bindings'));
            await tester.pumpAndSettle();
            h.execute('var typed=moneyHooks.typed();');
            expect(h.string('typed.provider'), 'test.b');
            if (scenario == 'core' || scenario == 'dependency') {
              h.execute('var erased=moneyHooks.erased();');
              expect(
                h.string('erased.provider'),
                scenario == 'core' ? 'flax.core' : 'test.a',
              );
            } else {
              expect(
                () => h.execute('moneyHooks.erased()'),
                throwsA(
                  isA<FlaxJsException>().having(
                    (error) => error.toString(),
                    'message',
                    contains('Ambiguous Dart value binding'),
                  ),
                ),
              );
            }
            expect(h.errors, isEmpty);
          } finally {
            await h.finish(tester);
          }
        },
      );
    }
  }
}
