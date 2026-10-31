import 'dart:async';
import 'dart:convert';

import 'package:flax/flax.dart';
import 'package:flax_engine_v8/flax_engine_v8.dart';
import 'package:flax_sandbox_example/permissions_example.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';

const _orders = FlaxPermissionDefinition(
  id: 'example.orders.read',
  title: 'Read orders',
  authorization: FlaxPermissionAuthorization.runtime,
);
const _watch = 'flax.example/permissions#function:watchOrders';

class _OrdersHarness {
  _OrdersHarness(this.fixture, {required this.holdTicks});

  final FlaxTestPermissions fixture;
  final bool holdTicks;
  final runtime = FlaxV8Engine.createRuntime();
  late final FlaxSession session;
  final timers = <Timer>[];
  final ticks = <int>[];
  final pendingTicks = <void Function()>[];

  static Future<_OrdersHarness> open(
    WidgetTester tester, {
    bool holdTicks = false,
  }) async {
    final fixture = (await tester.runAsync(() async {
      final fixture = await FlaxTestPermissions.create(
        definitions: const [_orders],
        permissions: const {'example.orders.read': null},
      );
      final context = FlaxPermissionContext(
        policy: fixture.policy,
        manifest: fixture.manifest,
      );
      await context.request(_orders.id);
      await context.close();
      return fixture;
    }))!;
    final harness = _OrdersHarness(fixture, holdTicks: holdTicks);
    final module = FlaxBindingModule(
      'Actual permission example Stream',
      [],
      moduleId: 'flax.example/permissions',
      uiProtocol: flaxBindingVersion,
      requiredCapabilities: const ['permission-guards'],
      functions: [
        FlaxFunctionBinding(
          _watch,
          const [],
          FlaxTypeRef(
            'stream',
            id: 'flax.core/flutter#type:Stream',
            item: const FlaxTypeRef('String'),
            stream: FlaxStreamBinding(
              'stream:flax.core/flutter#type:Stream[String:]',
              (value) => value is Stream<String>,
              (value) => value as Stream<String>,
            ),
          ),
          (_) => watchExampleOrders(),
        ),
      ],
      permissionGuards: const {
        (_watch, 'call', ''): [_orders],
      },
    );
    harness.session = FlaxSession(
      createRuntime: () => harness.runtime,
      bindings: FlaxBindingRegistry([flutterBindings, module]),
      permissions: fixture.policy,
      permissionManifest: fixture.manifest,
      source:
          '''
import {runApp, Text} from '@flax/flutter/widgets';
import {invokeTopLevel} from '@flax/core/bindings';
import {StreamIterator} from '@flax/dart/async';
runApp(Text('permission example stream'));
globalThis.watchOrders = () => invokeTopLevel('$_watch', []);
globalThis.NativeIterator = StreamIterator;
''',
    );
    await tester.runAsync(() => harness.session.ready);
    return harness;
  }

  void start(String script) {
    runZoned(
      () => runtime.evaluate('$script; queueMicrotask(() => {}); undefined;'),
      zoneSpecification: ZoneSpecification(
        createPeriodicTimer: (self, parent, zone, duration, callback) {
          if (duration != const Duration(milliseconds: 500)) {
            return parent.createPeriodicTimer(zone, duration, callback);
          }
          final index = ticks.length;
          ticks.add(0);
          final timer = parent.createPeriodicTimer(zone, duration, (timer) {
            void fire() {
              ticks[index]++;
              callback(timer);
            }

            // Only the clock is controlled; the actual example computes the event.
            if (holdTicks) {
              pendingTicks.add(fire);
            } else {
              fire();
            }
          });
          timers.add(timer);
          return timer;
        },
      ),
    );
  }

  Future<Object?> js(WidgetTester tester, String body) async {
    start(
      'globalThis.result = null; (async () => { $body })().then('
      'value => result = JSON.stringify(value), '
      'error => result = JSON.stringify({uncaught:String(error),code:error.code}))',
    );
    await _until(tester, () => runtime.getGlobal('result') is FlaxJsString);
    return jsonDecode((runtime.getGlobal('result') as FlaxJsString).value)
        as Object?;
  }

  Future<void> revoke() =>
      fixture.manager.revoke(fixture.application, _orders.id);

  Future<void> close(WidgetTester tester) async {
    await flaxTestCloseSession(tester, session);
    await _finish(tester, fixture.close());
  }
}

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  setUpAll(() async {
    Flax.moduleAssets ??= await FlaxModuleAssets.load(
      bundle: rootBundle,
      manifest: 'assets/flax_modules/modules.json',
    );
  });

  testWidgets('actual orders iterator denies its first current after revoke', (
    tester,
  ) async {
    final harness = await _OrdersHarness.open(tester);
    try {
      harness.start(
        'globalThis.iterator = NativeIterator(watchOrders()); '
        'globalThis.ready = false; iterator.moveNext().then(value => ready = value)',
      );
      await _until(
        tester,
        () => (harness.runtime.getGlobal('ready') as FlaxJsBoolean).value,
      );
      expect(harness.ticks, [1]);
      await _finish(tester, harness.revoke());
      expect(
        await harness.js(tester, '''
try { return {value: iterator.current}; }
catch (error) { return {code:error.code}; }
'''),
        {'code': 'FLAX_PERMISSION_DENIED'},
      );
      expect(
        await harness.js(tester, 'await iterator.cancel(); return true;'),
        isTrue,
      );
      await tester.pump(const Duration(seconds: 1));
      expect(harness.ticks, [1]);
      expect(harness.timers.every((timer) => !timer.isActive), isTrue);
    } finally {
      await harness.close(tester);
    }
  });

  testWidgets(
    'actual finite orders complete and cancelled consumers stop timers',
    (tester) async {
      final harness = await _OrdersHarness.open(tester);
      try {
        final result = await harness.js(tester, '''
const cases = {
  first: async () => await watchOrders().first,
  takeList: async () => (await watchOrders().take(1).toList()).toArray(),
  last: async () => await watchOrders().last,
  fullList: async () => (await watchOrders().toList()).toArray(),
  forAwait: async () => {
    const values = [];
    for await (const value of watchOrders()) values.push(value);
    return values;
  },
  cancelBefore: async () => {
    const iterator = NativeIterator(watchOrders());
    const ready = iterator.moveNext();
    await iterator.cancel();
    return await ready;
  },
  cancelAfter: async () => {
    const iterator = NativeIterator(watchOrders());
    await iterator.moveNext();
    const value = iterator.current;
    await iterator.cancel();
    return value;
  },
  breakLoop: async () => {
    for await (const value of watchOrders()) return value;
  }
};
return Object.fromEntries(await Promise.all(Object.entries(cases).map(async ([name, action]) =>
  [name, await action()])));
''');
        final all = [
          for (var index = 1; index <= 20; index++) 'order event $index',
        ];
        expect(result, {
          'first': 'order event 1',
          'takeList': ['order event 1'],
          'last': 'order event 20',
          'fullList': all,
          'forAwait': all,
          'cancelBefore': false,
          'cancelAfter': 'order event 1',
          'breakLoop': 'order event 1',
        });
        // Stream.periodic replaces its timer when for-await pauses and resumes.
        expect(harness.timers, isNotEmpty);
        expect(harness.timers.every((timer) => !timer.isActive), isTrue);
        final stopped = [...harness.ticks];
        await tester.pump(const Duration(seconds: 1));
        expect(harness.ticks, stopped);
      } finally {
        await harness.close(tester);
      }
    },
  );

  testWidgets('actual orders first is checked again at queued JS delivery', (
    tester,
  ) async {
    final harness = await _OrdersHarness.open(tester, holdTicks: true);
    try {
      harness.start(
        'globalThis.delivered = false; '
        'globalThis.pending = watchOrders().first.then('
        'value => { delivered = true; return {value}; }, '
        'error => { delivered = true; return {code:error.code}; })',
      );
      await tester.pump(const Duration(milliseconds: 500));
      expect(harness.pendingTicks, hasLength(1));
      Future<void>? revocation;
      tester.binding.scheduleFrameCallback(
        (_) => harness.pendingTicks.single(),
      );
      tester.binding.addPostFrameCallback((_) {
        expect(harness.ticks, [1]);
        expect(harness.timers.single.isActive, isFalse);
        expect(
          (harness.runtime.getGlobal('delivered') as FlaxJsBoolean).value,
          isFalse,
        );
        revocation = harness.revoke();
      });
      await tester.pump();
      await _finish(tester, revocation!);
      expect(await harness.js(tester, 'return await pending;'), {
        'code': 'FLAX_PERMISSION_DENIED',
      });
    } finally {
      await harness.close(tester);
    }
  });
}

Future<void> _until(WidgetTester tester, bool Function() done) async {
  // Real timers need ten seconds for all 20 events; fake-clock runs are faster.
  final timer = Stopwatch()..start();
  while (!done() && timer.elapsed < const Duration(seconds: 15)) {
    await tester.pump(const Duration(milliseconds: 50));
    await tester.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 5)),
    );
  }
  expect(done(), isTrue, reason: 'Actual orders Stream did not finish');
}

Future<void> _finish(WidgetTester tester, Future<void> future) async {
  var done = false;
  Object? failure;
  StackTrace? stack;
  future.then(
    (_) => done = true,
    onError: (Object error, StackTrace trace) {
      failure = error;
      stack = trace;
      done = true;
    },
  );
  await _until(tester, () => done);
  if (failure != null) Error.throwWithStackTrace(failure!, stack!);
}
