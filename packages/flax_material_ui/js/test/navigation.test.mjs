import { objectHost } from './support/host.mjs';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Navigator, RouteSettings, PopScope, Text } from '@flax/core/flutter';
import { MaterialPageRoute } from '../dist/index.js';
import { copyNavigationData, invokeInstance } from '@flax/core/bindings';

const stateType = 'flax.core/flutter#type:NavigatorState';

const host = objectHost();

test('Route construction is lazy and settings use real references', () => {
  let builds = 0;
  const route = MaterialPageRoute({
    builder: () => {
      builds++;
      return Text('page');
    },
  });
  const root = Navigator({ onGenerateRoute: () => route });
  assert.equal(builds, 0);
  assert.equal(root.kind, 'widget');
  assert.equal(route.kind, 'value');
  assert.ok(Object.isFrozen(route));
  const settings = RouteSettings({ name: '/a' });
  assert.equal(settings.name, '/a');
  assert.equal(settings.arguments, null);
  assert.equal(
    settings,
    host.api.object(
      'flax.core/flutter#type:RouteSettings',
      host.calls.find((c) => c.descriptor).id ?? 100,
    ),
  );
  assert.throws(
    () => MaterialPageRoute({ builder: () => Text('page'), pages: [] }),
    /Unsupported/,
  );
  assert.throws(
    () => PopScope({ child: Text('page'), onPopPage: () => true }),
    /Unsupported/,
  );
});

test('State methods dispatch independently and validate named arguments', () => {
  const calls = [];
  globalThis.__flaxInstance = (...args) => {
    calls.push(args);
    return args[3] === 'canPop';
  };
  globalThis.__flaxStateGet = () => true;
  const state = globalThis.__flaxBindings.state(stateType, 12);
  const route = MaterialPageRoute({ builder: () => Text('page') });
  state.push(route);
  state.pushNamed('/native', { arguments: { value: [true] } });
  state.pop({ value: 1 });
  assert.equal(state.canPop(), true);
  assert.deepEqual(
    calls.map((args) => args[3]),
    ['push', 'pushNamed', 'pop', 'canPop'],
  );
  assert.deepEqual(calls[0].slice(0, 4), [20, stateType, 12, 'push']);
  assert.throws(() => state.pushNamed('/a', { extra: 1 }), /Invalid named/);
  assert.throws(() => state.canPop(1), /Too many/);
  assert.throws(() => invokeInstance({}, stateType, 'pop', []), /foreign/);
  assert.throws(() => copyNavigationData(state), /references/);
});

test('navigation data copies plain trees without calling accessors or losing keys', () => {
  const input = { a: [1, true, null, '😀'], shared: { x: 2 } };
  const result = copyNavigationData(input);
  input.a.push('later');
  assert.deepEqual(result.a, [1, true, null, '😀']);
  assert.notEqual(input.shared, result.shared);
  const special = Object.fromEntries([['__proto__', { value: 3 }]]);
  assert.deepEqual(copyNavigationData(special), special);
  let invoked = false;
  assert.throws(
    () =>
      copyNavigationData({
        get value() {
          invoked = true;
          return 1;
        },
      }),
    /data property/,
  );
  assert.equal(invoked, false);
  const cycle = {};
  cycle.self = cycle;
  for (const value of [
    cycle,
    globalThis.__flaxBindings.enumValue('test:Mode', 'first'),
    undefined,
    NaN,
    Infinity,
    2 ** 53,
    new Date(),
    () => 1,
    [undefined],
    Array(1),
  ]) {
    assert.throws(() => copyNavigationData(value), TypeError);
  }
});

test('host Futures settle once and event rejections remain observable', async () => {
  const api = globalThis.__flaxBindings;
  const promise = api.future(100);
  api.settleFuture(100, true, { selected: [1] });
  api.settleFuture(100, true, 'late');
  assert.deepEqual(await promise, { selected: [1] });
  const failed = api.future(101);
  api.settleFuture(101, false, 'FlaxSessionClosed');
  await assert.rejects(failed, /FlaxSessionClosed/);
  const errors = [];
  globalThis.__flaxAsyncError = (error) => errors.push(error);
  api.observeEvent(Promise.reject(Error('event error')));
  await Promise.resolve();
  assert.match(errors[0], /event error/);
});
