import { signal } from '@flax/core';
import {
  Column,
  FocusNode,
  ListenableBuilder,
  State,
  StatefulWidget,
  Text,
  ValueListenableBuilder,
  registerPage,
  type Widget,
} from '@flax/flutter/widgets';
import { ValueKey, ValueListenable } from '@flax/flutter/foundation';
import { TextButton, TextField } from '@flax/flutter/material';
import {
  ChildConsumer,
  TileBatch,
  WidgetCache,
} from '../../../.dart_tool/flax/ui/material_repeated_bindings.js';
import {
  mapContent,
  wrapContent,
} from '../../../.dart_tool/flax/ui/functions_bindings.js';

const label = signal('Saved 0');
const cache = WidgetCache();
const counts = {
  created: 0,
  built: 0,
  disposed: 0,
  builders: 0,
  reads: 0,
  adds: 0,
  removes: 0,
};
class StaticChild extends StatefulWidget {
  createState(): State<StaticChild> {
    counts.created++;
    return new StaticState();
  }
}
class StaticState extends State<StaticChild> {
  count = 0;
  build(): Widget {
    counts.built++;
    return Column({
      children: [
        Text(`Static ${this.count}`),
        Text(label.bind),
        TextButton({
          child: Text('State increment'),
          onPressed: () => this.setState(() => this.count++),
        }),
      ],
    });
  }
  dispose(): void {
    counts.disposed++;
    super.dispose();
  }
}
const makeValue = (initial: number) => {
  let value = initial;
  const listeners: Array<() => void> = [];
  const object = ValueListenable.implement<number>([], {
    get value() {
      counts.reads++;
      return value;
    },
    addListener(listener) {
      counts.adds++;
      listeners.push(listener);
    },
    removeListener(listener) {
      counts.removes++;
      const index = listeners.indexOf(listener);
      if (index >= 0) listeners.splice(index, 1);
    },
  });
  return {
    object,
    notify(next: number) {
      value = next;
      for (const listener of [...listeners]) listener();
    },
    listeners,
  };
};
const first = makeValue(1),
  second = makeValue(20);
const selected = signal(first.object);
const child = signal<Widget | null>(new StaticChild({ key: ValueKey('static') }));
const showChild = signal(true);
let failure = 'none';
let lastChild: Widget | null;
const focus = FocusNode();
registerPage('widget-arguments', () => Text('Entry'));
registerPage('independent-widget', () =>
  TileBatch({ count: 1, render: () => new StaticChild() }),
);
registerPage('listenables', () =>
  Column({
    children: [
      Text('Unrelated'),
      TextField({ focusNode: focus }),
      ValueListenableBuilder<number>({
        valueListenable: selected.bind,
        child: child.bind,
        builder: (_context, value, content) => {
          counts.builders++;
          lastChild = content;
          if (failure === 'throw') throw Error('Builder failed');
          if (failure === 'promise')
            return Promise.resolve(Text('bad')) as unknown as Widget;
          if (failure === 'invalid') return 3 as unknown as Widget;
          return Column({
            children: [
              Text(`Value ${value}`),
              ...(showChild.value && content ? [content] : []),
            ],
          });
        },
      }),
      ListenableBuilder({
        listenable: focus,
        child: Text('Focus static'),
        builder: (_context, content) =>
          Column({ children: [Text(`Focus ${focus.canRequestFocus}`), content!] }),
      }),
    ],
  }),
);
registerPage('listenables-two', () =>
  Column({
    children: [0, 1].map(() =>
      ValueListenableBuilder<number>({
        valueListenable: first.object,
        child: child.value,
        builder: (_context, value, content) => {
          counts.builders++;
          return Column({ children: [Text(`Consumer ${value}`), content!] });
        },
      }),
    ),
  }),
);
registerPage('returned-widget', () =>
  ChildConsumer({
    child: cache.take(),
    render: (_context, content) => content ?? Text('Empty'),
  }),
);
Object.assign(globalThis, {
  cache,
  label,
  counts,
  first,
  second,
  selected,
  child,
  showChild,
  focus,
  StaticChild,
  mapContent,
  wrapContent,
  saveWidget: (fail = false) => cache.save(Text(label.bind), { fail }),
  saveComponent: () => cache.save(new StaticChild()),
  createCache: () => WidgetCache({ child: Text(label.bind) }),
  setFailure: (value: string) => {
    failure = value;
  },
  lastChild: () => lastChild,
});
