import * as native from '../../../.dart_tool/flax/ui/native_widgets_bindings.js';
import { signal } from '@flax/core';
import {
  Text,
  Column,
  State,
  registerPage,
  type BuildContext,
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
    return super.createState();
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
let asynchronous = false;
Object.assign(globalThis, {
  nativeWidgets: {
    calls,
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
  },
});
