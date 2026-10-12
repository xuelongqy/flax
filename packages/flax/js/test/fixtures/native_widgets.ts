import * as native from '../../../.dart_tool/flax/ui/native_widgets_bindings.js';
import { signal } from '@flax/core';
import { asDart, getDartType } from '@flax/core/bindings';
import { Stream } from '@flax/dart/async';
import {
  Text,
  Column,
  State,
  BuildContext,
  Navigator,
  NavigatorState,
  Axis,
  registerPage,
} from '@flax/flutter/widgets';
let builds = 0;
let renderCreates = 0;
let renderUpdates = 0;
let renderUnmounts = 0;
let notifications = 0;
class Title extends Text {
  constructor(value: string) {
    super(`Title: ${value}`);
  }
  override build(context: BuildContext) {
    builds++;
    return super.build(context);
  }
}
class NativeTitle extends native.NativeLabel {
  override build(context: BuildContext) {
    return super.build(context);
  }
}
let created = 0;
let disposed = 0;
let stateUpdates = 0;
let latest: CounterState;
let latestNative: ReturnType<NativeCounter['createState']>;
let borrowedContext: BuildContext;
let borrowedNavigator: NavigatorState;
class Counter extends native.NativeCounter {
  override createState() {
    created++;
    return (latest = new CounterState());
  }
}
class CounterState extends State<Counter> {
  count = 0;
  override build() {
    return Text(`JS: ${this.count}`);
  }
  override didUpdateWidget(old: Counter) {
    stateUpdates++;
    super.didUpdateWidget(old);
  }
  override dispose() {
    disposed++;
    super.dispose();
  }
}
class NativeCounter extends native.NativeCounter {
  override createState() {
    return (latestNative = super.createState());
  }
}
class ReusedCounter extends native.NativeCounter {
  private static cached: ReturnType<NativeCounter['createState']> | undefined;
  override createState() {
    return (ReusedCounter.cached ??= super.createState());
  }
}
class MissingSuperState extends State<Counter> {
  override build() {
    return Text('missing super');
  }
  override dispose() {}
}
class MissingSuperCounter extends native.NativeCounter {
  override createState() {
    return new MissingSuperState();
  }
}
class Box extends native.NativeBox {
  override createRenderObject(context: BuildContext) {
    renderCreates++;
    return super.createRenderObject(context);
  }
  override updateRenderObject(
    context: BuildContext,
    object: Parameters<Box['updateRenderObject']>[1],
  ) {
    renderUpdates++;
    super.updateRenderObject(context, object);
  }
  override didUnmountRenderObject(
    object: Parameters<Box['didUnmountRenderObject']>[0],
  ) {
    renderUnmounts++;
    super.didUnmountRenderObject(object);
  }
}
class Dependency extends native.NativeDependency {
  override updateShouldNotify(old: Parameters<Dependency['updateShouldNotify']>[0]) {
    notifications++;
    return super.updateShouldNotify(old);
  }
}
const calls = native.NativeWidgetCalls();
const title = new Title('native');
const label = calls.text(() => new NativeTitle('Label'));
const original = new NativeCounter();
let counter = calls.counter(() => new Counter());
let box = calls.box(() => new Box());
let dependency = calls.dependency(() => new Dependency({ child: Text('child') }));
const children = signal([title, label, original, counter, box, dependency]);
registerPage('nativeWidgets', () => Column({ children: children.bind }));
registerPage('twoCounters', () => Column({ children: [counter, counter] }));
registerPage('nativeReuse', () =>
  Column({ children: [new ReusedCounter(), new ReusedCounter()] }),
);
registerPage('nativeBadDispose', () => new MissingSuperCounter());
class GcCounter extends native.NativeCounter {
  override createState() {
    const state = new GcState();
    Object.assign(globalThis, { gcState: new WeakRef(state) });
    return state;
  }
}
class GcState extends State<GcCounter> {
  #value = 'private GC state';
  override build() {
    return Text(this.#value);
  }
  override dispose() {
    gcDisposals++;
    super.dispose();
  }
}
let gcDisposals = 0;
Object.assign(globalThis, { gcDisposals: () => gcDisposals });
registerPage('nativeGc', () => {
  const counter = new GcCounter();
  Object.assign(globalThis, { gcWidget: new WeakRef(counter) });
  return counter;
});
let asynchronous = false;
Object.assign(globalThis, {
  nativeWidgets: {
    calls,
    plain: () => Text('retained native configuration'),
    title,
    label,
    counter,
    box,
    dependency,
    builds: () => builds,
    renderCreates: () => renderCreates,
    renderUpdates: () => renderUpdates,
    renderUnmounts: () => renderUnmounts,
    notifications: () => notifications,
    stateUpdates: () => stateUpdates,
    replace() {
      counter = new Counter();
      box = new Box();
      dependency = new Dependency({ child: Text('updated') });
      children.value = [title, label, original, counter, box, dependency];
    },
    asynchronous: () => asynchronous,
    exercise() {
      const fixed = calls.text(() => Text('snapshot'));
      if (
        !('data' in fixed) ||
        fixed.data !== 'snapshot' ||
        calls.input(fixed) !== fixed ||
        calls.nullable(() => null) !== null ||
        calls.texts(() => [title, fixed]).get(0) !== title
      )
        throw new Error('Widget conversion identity');
      for (const invoke of [
        () => calls.input(new Box() as never),
        () => calls.text(() => new Box() as never),
        () => new Text(3 as never),
        () => Reflect.construct(Text, ['too many', {}, 1]),
        () => calls.input(undefined as never),
      ]) {
        let rejected = false;
        try {
          invoke();
        } catch {
          rejected = true;
        }
        if (!rejected) throw new Error('Invalid Widget accepted');
      }
      calls
        .later(async () => title)
        .then((value) => {
          asynchronous = value === title;
        });
    },
    created: () => created,
    disposed: () => disposed,
    increment: () => latest.setState(() => latest.count++),
    referenceContext: () => borrowedContext,
    referenceType: (value: unknown) => getDartType(value),
    references() {
      borrowedContext = latest.context;
      borrowedNavigator = Navigator.of(borrowedContext);
      const state = asDart(latestNative, native.NativeCounterState);
      const navigator = asDart(borrowedNavigator, NavigatorState);
      const stream = Stream.value(7);
      const callback = calls.producer(title);
      const check = (name: string, valid: boolean) => {
        if (!valid) throw new Error(name);
      };
      check('Widget canonical peer', asDart(calls.input(title), Text) === title);
      const nativeLabel = asDart(label, native.NativeLabel);
      check('Widget provider view', nativeLabel.data === 'Label');
      check('Widget provider round-trip', asDart(nativeLabel, Text) === label);
      check(
        'Context identity',
        asDart(borrowedContext, BuildContext) === borrowedContext,
      );
      check('Native State fields', state.count === 0 && state.mounted);
      check('Navigator mounted', navigator.mounted);
      check('Native State type', getDartType(latestNative) === 'NativeCounterState');
      check('JS State type', getDartType(latest) === '_NativeCounterState');
      check('Context Element type', getDartType(borrowedContext).includes('Element'));
      check('Navigator type', getDartType(borrowedNavigator) === 'NavigatorState');
      check('Enum type', getDartType(Axis.horizontal) === 'Axis');
      check('Enum identity', asDart(Axis.horizontal, Axis) === Axis.horizontal);
      check('Stream type', getDartType(stream).includes('Stream'));
      check('Stream cast type', getDartType(asDart(stream, Stream)).includes('Stream'));
      check('Callback type', getDartType(callback).includes('Text'));
      check('Callback identity', callback() === title);
      for (const operation of [
        () => asDart(title, native.NativeCounterState),
        () => asDart(latestNative, NavigatorState),
        () => asDart(latest, native.NativeCounterState),
        () => asDart(label, CounterState as never),
        () => getDartType(Text('descriptor') as never),
      ]) {
        let rejected = false;
        try {
          operation();
        } catch {
          rejected = true;
        }
        if (!rejected) throw new Error('Invalid native reference conversion');
      }
    },
    expiredReferences() {
      for (const value of [borrowedContext, borrowedNavigator, latestNative, latest]) {
        let rejected = false;
        try {
          getDartType(value);
        } catch {
          rejected = true;
        }
        if (!rejected) throw new Error('Expired reference type query');
      }
      for (const operation of [
        () => asDart(borrowedContext, BuildContext),
        () => asDart(borrowedNavigator, NavigatorState),
        () => asDart(latestNative, native.NativeCounterState),
      ]) {
        let rejected = false;
        try {
          operation();
        } catch {
          rejected = true;
        }
        if (!rejected) throw new Error('Expired reference cast');
      }
    },
  },
});
