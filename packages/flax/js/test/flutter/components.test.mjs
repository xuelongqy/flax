import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  State,
  StatefulWidget,
  StatelessWidget,
  Text,
} from '../../dist/flutter/index.js';
import { signal } from '../../dist/runtime/index.js';
const api = globalThis.__flaxBindings;

class CounterState extends State {
  count = 0;
  build() {
    return Text(String(this.count));
  }
}
class Counter extends StatefulWidget {
  data = signal(1);
  createState() {
    return new CounterState();
  }
}
test('component configuration is frozen only when accepted and State is per mount', () => {
  const widget = new Counter();
  assert.equal(Object.isFrozen(widget), false);
  const info = api.component(widget);
  assert.equal(Object.isFrozen(widget), true);
  widget.data.value = 2;
  assert.equal(widget.data.value, 2);
  assert.equal(api.component(widget).id, info.id);
  class Other extends Counter {}
  assert.notEqual(api.component(new Other()).type, info.type);
  const first = api.createComponentState(widget, 1);
  const second = api.createComponentState(widget, 2);
  assert.notEqual(first, second);
  assert.equal(first.widget, widget);
  const next = new Counter();
  api.updateComponentState(first, next);
  assert.equal(first.widget, next);
  api.releaseComponentState(first);
  assert.equal(first.mounted, false);
  assert.throws(() => first.widget, /no mounted widget/);
  assert.throws(() => first.setState(() => {}), /disposed/);
});

test('strict callbacks reject Promise, reused State and foreign configurations', () => {
  const fresh = new CounterState();
  assert.equal(fresh.mounted, false);
  assert.throws(() => fresh.context, /not mounted/);
  class Reused extends Counter {
    createState() {
      return fresh;
    }
  }
  const widget = new Reused();
  api.createComponentState(widget, 1);
  assert.throws(() => api.createComponentState(widget, 2), /fresh State/);
  assert.throws(() => api.component({ kind: 'component' }), /foreign/);
  assert.throws(() => api.invokeSynchronous(async () => {}), /synchronous/);
  assert.equal(
    api.invokeSynchronous(() => 4),
    4,
  );
  class Caption extends StatelessWidget {
    build() {
      return Text('caption');
    }
  }
  assert.equal(api.invokeComponent(new Caption(), 'build', null).args.data, 'caption');
});

test('setState and explicit super dispatch through the paired host', () => {
  const widget = new Counter();
  const state = api.createComponentState(widget, 7);
  const calls = [];
  globalThis.__flaxComponent = (version, id, operation, ...args) => {
    calls.push([version, id, operation]);
    if (operation === 'setState') api.invokeSynchronous(args[0]);
    if (operation === 'mounted') return true;
  };
  state.initState();
  state.setState(() => state.count++);
  assert.equal(state.count, 1);
  assert.equal(state.mounted, true);
  assert.deepEqual(calls, [
    [20, 7, 'super:initState'],
    [20, 7, 'setState'],
    [20, 7, 'mounted'],
  ]);
});

test('component types are registered without construction and preserve constructor identity', () => {
  let constructed = 0;
  const first = class Same extends Counter {
    constructor() {
      super();
      constructed++;
    }
  };
  const second = class Same extends Counter {};
  const info = api.componentType(first);
  assert.equal(constructed, 0);
  assert.equal(info.name, 'Same');
  assert.equal(info.stateful, true);
  assert.equal(api.componentType(first), info);
  assert.notEqual(api.componentType(second).type, info.type);
  assert.equal(api.component(new first()).type, info.type);
  assert.equal(constructed, 1);
  for (const invalid of [
    null,
    {},
    () => {},
    class Plain {},
    StatefulWidget,
    StatelessWidget,
  ]) {
    assert.throws(() => api.componentType(invalid), /custom component constructor/);
  }
});

test('Context ancestor queries send constructor identity and reject retired Contexts', () => {
  const type = 'flax.core/flutter#type:BuildContext';
  const context = api.context(type, 72);
  const ancestor = new Counter();
  globalThis.__flaxAncestor = (version, contextType, id, componentType) => {
    assert.equal(version, 20);
    assert.equal(contextType, type);
    assert.equal(id, 72);
    assert.equal(componentType, api.componentType(Counter).type);
    return ancestor;
  };
  assert.equal(context.findAncestorWidgetOfExactType(Counter), ancestor);
  assert.throws(() => context.findAncestorWidgetOfExactType(Text), /custom component/);
  api.releaseContext(72);
  assert.equal(context.mounted, false);
  assert.throws(() => context.findAncestorWidgetOfExactType(Counter), /Unmounted/);
});
